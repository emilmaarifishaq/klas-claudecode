# Build Me an AIOS — Always-On Personal Dashboard (Claude Code Build Prompt)

> Paste this whole file into **Claude Code** (or save it and say "follow AIOS-BUILD-PROMPT.md").
> It tells Claude exactly what to build and what to ask you first. No credentials are
> included — you'll provide your own when prompted.

---

## Your role

You are Claude Code. Build me **AIOS** — an always-on, single-pane personal dashboard
that runs locally at `http://localhost:3000`. It shows my content intelligence, my
social + business metrics, my active projects, and an **embedded interactive terminal**
that runs Claude Code skills inside the app. It must look like a polished, dark
"editorial / Riso-print" product — not a generic admin panel.

**Work in this order:** (1) interview me, (2) research the unknowns, (3) build coherently,
(4) verify in a real browser, (5) adversarially review your own work and fix what's real.
Use a plan and check in before large steps. Prefer the leanest version that fully works.

---

## STEP 1 — Interview me first (ask these, then proceed)

Ask me these up front. Where I don't have something, **degrade gracefully** — never block
the whole build on one missing input. Make every data source optional and independently
failable.

**Identity / data**
1. **YouTube handle** (e.g. `@yourhandle`) — for channel stats + latest long-form thumbnails. If I don't have one, hide the YouTube tile.
2. **Instagram username** (e.g. `yourname`, no @) — for follower + recent-post engagement via Apify.
3. **LinkedIn profile URL** (e.g. `https://www.linkedin.com/in/yourname/`) — for followers + engagement via Apify.
4. **Active-projects source** — a path to a Markdown file containing a table of my projects (or "skip" → drop the Projects tile). Ask for the path and the table shape.
5. **Content-intelligence source** — I'll feed a JSON file (schema below). Ask where it should live (default `~/.aios/content-intel.json`) and whether something already writes it.

**Credentials** (tell me where to put them; never hardcode them)
6. Do I have a **YouTube Data API v3 key**? If not, give me the 5-minute Google Cloud steps and build the YouTube tile to show an actionable "add key" state until I add it.
7. Do I have an **Apify API token**? If not, link apify.com, explain the free tier (~$5/mo, plenty for a daily pull), and build the social tiles to show a "connect Apify" state.
8. Confirm I'm logged into Claude Code (`claude` CLI) so the embedded terminal uses my subscription login.

**Preferences**
9. **Accent colors** — default is orange `#f15a24` + teal `#2a9d8f` on near-black. Offer to swap.
10. **Port** — default `3000`. **Check it's free first** (`lsof -nP -iTCP:<port>`); if another app holds it, tell me and either pick another port or ask before stopping anything.
11. Where should the project live? Default `~/Desktop/AIOS`.

**Store my config, not secrets, as env with sensible defaults** (e.g. `YOUTUBE_HANDLE`,
`INSTAGRAM_USERNAME`, `LINKEDIN_URL`, `PORT`, `PROJECTS_FILE`, `CONTENT_INTEL_FILE`,
`AIOS_CLAUDE_BIN`). Read secrets (`YOUTUBE_API_KEY`, `APIFY_API_TOKEN`) from a `.env`
file — **never** write them into source.

---

## STEP 2 — Architecture

- **Backend:** Node.js + **Express**, plus **`ws`** (WebSocket) and **`node-pty`** (terminal). No build step, no framework on the front end.
- **Front end:** plain HTML/CSS/vanilla JS in a `public/` folder. **xterm.js via CDN** for the terminal.
- **Bind loopback only** — listen on BOTH `127.0.0.1` and `::1` so `localhost` resolves no matter how the OS prefers IPv4/IPv6, while never exposing to the network (this server runs a real shell).
- Poll `/api/data` every 5 minutes; render each tile independently.

```
AIOS/
├── server.js               Express + ws + node-pty: env load, aggregation, Apify, WS terminal
├── package.json            deps: express, ws, node-pty  (+ postinstall, see gotchas)
├── public/
│   ├── index.html          masthead · resizable regions · collapsible terminal
│   ├── style.css           dark editorial design system
│   └── app.js              polls /api/data, renders tiles, resize/collapse, xterm client
├── .env.example            documents required keys (no real values)
└── README.md
```

**Serve ONLY `public/`** via `express.static(path.join(__dirname,'public'), { dotfiles:'deny' })`
— never the project root, so `server.js`, `.env`, `node_modules`, etc. are unreachable over HTTP.

---

## STEP 3 — Data sources & API

### `GET /api/data` (the aggregator)
Returns one JSON payload. Fetch each source with a `settle()` wrapper so a failure in one
is recorded in an `errors[]` array and returns `null` — **never** let one bad source throw
out the whole response or blank the dashboard.

```jsonc
{
  "timestamp": "<ISO>",
  "skills": [ { "id": "...", "label": "...", "primary": true } ],   // the terminal buttons
  "digest":   { "available": bool, "drops":[], "signal":[], "competitors":[], "topComments":[], "reason?": "no_file|parse_error" },
  "youtube":  { "available": bool, "channel":{...}, "stats":{subscriberCount,viewCount,videoCount}, "recentVideos":[...], "reason?","message?","setupHint?" },
  "metrics":  { "mrr":{value,currency,label}, "linkedin":{followers,note}, "instagram":{followers,note}, "updatedAt" },
  "social":   { "available": bool, "stale": bool, "refreshing": bool, "fetchedAt", "instagram":{...}, "linkedin":{...}, "reason?":"no_token|pending|refreshing" },
  "projects": { "available": bool, "active":[{slug,name,status,summary}], "counts":{active} },
  "errors":   []
}
```

### `.env` loader (tiny, no dependency)
Write a ~15-line loader that reads `<configurable>/.env` into `process.env` (only setting
keys not already present, stripping surrounding quotes).
**CRITICAL ORDER GOTCHA:** call the loader **before** any `const X = process.env.X` lines.
A `function` declaration hoists, so define the loader as a function declaration and invoke
it right after you compute the `.env` path — otherwise `APIFY_API_TOKEN`/`YOUTUBE_API_KEY`
read as `undefined` even though they're in the file.

### YouTube Data API v3 (graceful when no key)
- If no `YOUTUBE_API_KEY`: return `{ available:false, reason:'no_api_key', message, setupHint }` (HTTP 200) so the tile shows an "add key" CTA instead of crashing.
- Channel stats by handle (1 quota unit): `GET https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet,contentDetails&forHandle=@{handle}&key=KEY`. Read `items[0].statistics.{subscriberCount,viewCount,videoCount}` (they're **strings — coerce to Number**) and `items[0].contentDetails.relatedPlaylists.uploads` (the `UU…` playlist).
- Latest videos (cheap path — avoid `search.list`, it costs 100 units): `playlistItems?part=snippet,contentDetails&playlistId={uploads}&maxResults=30`. Then batch the videoIds into `videos?part=statistics,contentDetails&id=...` (1 unit) for `viewCount` and `contentDetails.duration`.
- **Long-form filter:** parse the ISO-8601 duration to seconds and keep only `>= 120s` (drops Shorts). Keep the latest ~10. Include each video's `thumbnail` (`snippet.thumbnails.medium.url`), `url`, `viewCount`, `publishedAt`, `durationSec`.
- Cache the YouTube result in memory ~5 min. Wrap fetch in try/catch; on `quotaExceeded`/error return `{available:false, reason}`.

### Apify — Instagram + LinkedIn (followers + recent-post engagement)
- If no `APIFY_API_TOKEN`: social = `{ available:false, reason:'no_token', message }`.
- **API pattern:** `POST https://api.apify.com/v2/acts/<actorId>/run-sync-get-dataset-items?timeout=290&memory=1024` with header `Authorization: Bearer <token>` and the actor input as the JSON body; the response is the dataset-items array. Use `AbortSignal.timeout(295000)`.
  - **GOTCHA:** do NOT set `maxItems=1` — a 1-result cap puts the run's max charge below Apify's ~$0.0026 minimum and returns HTTP 400. Single-username runs return one item anyway.
- **Instagram** — actor `apify~instagram-profile-scraper`, input `{ "usernames": ["<username>"] }`. Read `items[0].followersCount`, and avg `items[0].latestPosts[].likesCount` / `.commentsCount` (guard `< 0` — IG hides some counts).
- **LinkedIn** — actor `apimaestro~linkedin-profile-detail`, input `{ "username": "<slug from the /in/<slug>/ URL>" }`. **Followers live at `items[0].basic_info.follower_count`** (NOT a top-level field — verify the raw shape on first run; LinkedIn actor schemas drift). For engagement (best-effort, optional): `apimaestro~linkedin-profile-posts`. LinkedIn scraping is flakier/ToS-grayer than IG, so wrap it in try/catch and keep a **manual-entry fallback** number.
- **Caching (do NOT call Apify on the 5-min poll — it costs money):** cache results to a JSON file with a **12-hour TTL**. `getSocial()` reads the cache and, only if stale and not already refreshing (guard with a `socialRefreshing` flag to avoid concurrent paid runs), fires a **background** refresh (fire-and-forget) — it returns the cached/`pending` value immediately. Warm the cache once on boot. Add `POST /api/social/refresh` for a manual re-pull. Guard the freshness check against a corrupt/NaN `fetchedAt` (`Number.isFinite(ts)`).

### Manual metrics — `GET`/`POST /api/metrics`
- File-backed (`{ mrr, linkedin, instagram, updatedAt }`). Distinguish **ENOENT** (legit default) from a **parse error** (back up the corrupt file to `.corrupt`, surface via `errors[]`). Write **atomically** (temp file + rename). Coerce numbers; cap note strings.
- The social tiles prefer Apify data; fall back to these manual values when Apify is down. **MRR shows `🚀🚀🚀` when the value is 0** (a fun placeholder; the real number shows once set).

### Content intelligence + Projects
- **Content intel** comes from a JSON file (schema): `{ timestamp, drops:[{title,icpTranslation,link}], signal:[{title,source,link}], competitors:[{channel,title,views,gap,link}], topComments:[{channel,comment,signal}] }`. If the file is missing, show a friendly "no data yet" CTA. Populate it however the user likes (a news script, a cron, manual) — AIOS just reads it.
- **Projects** — parse a Markdown file with a table of projects (or skip). Be tolerant of separator rows.

---

## STEP 4 — Embedded interactive terminal (the signature feature)

Clicking a skill button opens a **real, interactive Claude Code session inside the app**
(not Terminal.app) — live output, and the user can type/approve prompts.

- **Stack:** `node-pty` (PTY) + `ws` (WebSocket at `/terminal`) on the server; **xterm.js + fit-addon** on the client (CDN: `@xterm/xterm@5.5.0` and `@xterm/addon-fit@0.10.0` — note the `@xterm/` scope).
- **Spawn:** find the `claude` binary (`AIOS_CLAUDE_BIN` env, else `~/.local/bin/claude`, else `which claude`). `pty.spawn(CLAUDE_BIN, skill ? ['/'+skill] : [], { name:'xterm-256color', cols, rows, cwd: HOME, env })`. A leading-slash positional makes claude run that slash command.
- **Use the user's claude.ai login, not the API:** build the pty env from `process.env` but **`delete env.ANTHROPIC_API_KEY`** — otherwise claude warns about an auth conflict and may bill the paid API instead of the subscription. Set `TERM=xterm-256color` and a `PATH` that includes the claude binary's dir.
- **Protocol:** server streams raw pty output → `ws.send`. Client sends JSON `{type:'input',data}` and `{type:'resize',cols,rows}`. Client: `term.onData → send input`; `ws.onmessage → term.write`; refit via a `ResizeObserver` + on resize; skip fit while collapsed.
- **Lifecycle:** kill the pty on ws `close` AND on `term.onExit`; **add a `ws.on('error')` handler** (without it a socket error re-throws as an uncaughtException and crashes the server).

### Terminal SECURITY (do all of these)
- **Origin check on upgrade:** WebSockets bypass same-origin policy. Reject any upgrade whose `Origin` isn't an exact match (scheme+host+**port**) for `http://localhost:PORT`, `http://127.0.0.1:PORT`, `http://[::1]:PORT` (keep the bracketed IPv6 form). Allow absent Origin (CLI tools). Host-only matching is NOT enough — another app on a different localhost port could otherwise drive your shell.
- **Concurrency cap (fork-bomb guard):** track live sessions; reject new `/terminal` upgrades past a small cap (e.g. 4). Account the slot on the **raw socket's `close`/`error`** so it's always released even if the handshake fails.
- **`maxPayload`** on the WebSocketServer (e.g. `1 << 20`).
- **Allowlist** the skills server-side (a fixed `Set`); validate the `skill` param against it + a `/^[a-z0-9][a-z0-9-]*$/` regex before spawning. Use `pty.spawn(bin, [arg])` (argv array, never a shell string).

### node-pty install GOTCHA (will bite you)
`node-pty`'s prebuilt `spawn-helper` often extracts **without the executable bit**, so
`pty.spawn` throws `posix_spawnp failed` on *everything* (even `/bin/echo`). Fix it and make
it survive reinstalls:
```json
"scripts": { "postinstall": "chmod +x node_modules/node-pty/prebuilds/*/spawn-helper 2>/dev/null || true" }
```
If a PTY "can't spawn anything," check that helper's permissions before suspecting arch/ABI.

---

## STEP 5 — Layout: resizable "bento" + collapsible terminal

A dense, varied tile layout — different tile sizes and background tints, clear hierarchy.
Default arrangement (wide screens):

```
┌ masthead (brand · date · sources · refresh) ───────────────────────────┐
├──────────────┬──────────────────────────────┬──────────────────────────┤
│ DROPS (lead) │ ▶ YOUTUBE (tall hero:         │ MRR  (🚀🚀🚀)            │
│  (orange,    │   stats + scrollable          ├──────────────────────────┤
│   feature)   │   long-form thumbnails)       │ LINKEDIN                 │
│ ───────────  ├───────────────┬───────────────┤ INSTAGRAM                │
│ SIGNAL       │ COMPETITORS   │ TOP COMMENTS  │ PROJECTS (tall, scrolls) │
├──────────────┴───────────────┴───────────────┴──────────────────────────┤
│ ▸_ TERMINAL  [Digest][Ideas][Hooks]…   (collapsed slim bar by default)   │
└──────────────────────────────────────────────────────────────────────────┘
```

- Build with **flex regions** (left column / middle / right column), NOT a rigid CSS grid — spanning tiles make full-height column-drag awkward. Left column stacks Drops + Signal; middle has the YouTube hero on top and Competitors/Comments below; right column stacks the stat tiles + Projects.
- **Drag handles:** 2 vertical splitters between the columns (adjust flex-grow factors) and 1 horizontal splitter to resize the terminal height. Persist `{column sizes, terminal height, collapsed}` to `localStorage`; restore on load.
- **Collapsible terminal:** collapsed by default (slim bar with just the skill buttons + status); auto-expand when a skill runs; expand/collapse toggle.

### CSS / interaction GOTCHAS (we hit all of these)
- **Internal scroll needs a flex-column parent with `min-height:0`.** A tile body that should scroll (`overflow-y:auto`) won't unless its parent is `display:flex; flex-direction:column` and the tile chain has `min-height:0`.
- **Grid tracks won't shrink below content** → overflow. Use `minmax(0, …)` on grid rows that must compress, and `grid-auto-rows: max-content` (+ `align-content:start`) for a scrolling thumbnail grid. Add `overflow:hidden` to region containers as a belt-and-suspenders clip.
- **Splitter must conserve total width.** When one side hits its min, give the overflow back to the side being dragged so `a+mid+right` stays constant — otherwise the column you're NOT dragging drifts (and persists wrong).
- **Wrap `setPointerCapture` in try/catch** and attach `pointermove`/`pointerup` to `window` so a capture failure never kills a drag.
- **Guard async socket handlers** (`if (thisSock !== sock) return;`) so a superseded socket's `onclose` can't wipe the new run's UI on rapid re-clicks.

---

## STEP 6 — Design system (default AIOS look)

Dark, editorial, Riso-print flavor. Self-contained — embed these tokens; offer to swap accents.

```css
:root{
  --color-bg:#1a1a18; --color-surface:#242420; --color-bone:#e8e4d4;
  --color-orange:#f15a24; --color-teal:#2a9d8f; --color-charcoal:#2d2d2a;
  --bone-dim:#a8a496; --bone-faint:#908c7e;           /* meta text — keep AA contrast (#908c7e ≈ 4.6:1) */
  --t-orange:#2a201b; --t-teal:#1a2523; --t-deep:#141412;  /* tile background tints */
}
```
- **Type voices:** display = **Anton** (heavy condensed, uppercase) for big numbers/wordmark; meta = **JetBrains Mono** (uppercase, wide tracking `~0.2em`, 9–11px) for labels/timestamps; body = **Inter**. (Google Fonts.)
- **Texture:** a faint SVG-turbulence **grain** overlay (~6% opacity, `screen` blend) fixed over the page, plus optional per-tile grain.
- **Details:** 2px colored left "spine" per tile; mono-caps section labels with a short leading rule; **typographic arrows `→` (never emoji) for UI chrome**; thin tinted scrollbars; subtle hover (surface lift + inset accent bar). Each tile gets a background tint + accent so nothing reads as flat/equal-weight. Responsive: collapse to a single column under ~1100px, hide the splitters, give the terminal a fixed height.

---

## STEP 7 — Verify before you call it done

1. `node --check server.js`; boot it; `curl /api/data` returns valid JSON with every source key present.
2. **Drive it in a real browser** (Playwright or similar): load the page, assert **zero console errors**, screenshot it, and read the screenshot to confirm the layout.
3. Test the terminal end-to-end: connect the WS, confirm a `claude` session spawns and streams (and that there's **no auth-conflict warning** → ANTHROPIC_API_KEY was stripped).
4. Test security: a cross-port `Origin` is rejected; the session cap rejects the (N+1)th connection.
5. Test resizers (drag changes sizes + persists), terminal collapse/expand, metric edit (persists), and graceful states when a key is missing.
6. **Adversarially review your own build** — spin up review passes across dimensions (terminal security & lifecycle, Apify cost/robustness, frontend/API-contract consistency, design fidelity), independently **verify** each finding against the real code (default "not real"), and fix only the confirmed ones. Re-verify.

## STEP 8 — (optional) auto-start on login
Offer a **launchd** LaunchAgent template (`RunAtLoad` + `KeepAlive`, loopback) or `pm2`.
**Do not install it without asking** — it's OS-level persistence.

---

## Guardrails
- Never hardcode or print secrets. Read them from `.env`; ship a `.env.example` with empty keys.
- Confirm before stopping any process that already holds the port, or installing any login service.
- Every data source degrades independently with an actionable empty/CTA state. Escape all dynamic strings in the DOM; validate link URLs are `http(s)` before using them.
- Match the design system; demand elegance; keep it dependency-light (Express + ws + node-pty only).

When you're done, give me: the run command, what each tile shows, where to put my keys, and how to resize / collapse the terminal.
```
