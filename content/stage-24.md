# 💸 EARN COMMISSIONS

Earn money for everyone you bring in — 30% recurring commission, no caps, just by building in public.

## Why This Is The Easiest Earn

You're going to build things, ship them, and post about them anyway. Every time someone sees your work and asks "how did you do that?" — that's an affiliate moment you were going to create regardless. This isn't a side hustle bolted on; it's **getting paid for the proof you're already making.** The members who earn the most here didn't "do affiliate marketing" — they built in public and shared the link that made sense.

---

## Grab Your Personal Affiliate Link

**You'll walk away with:** your link in hand and live in the right places.

Share your link and earn **30% recurring commission** on every member you bring — for as long as they stay, no caps.

Where to find it: in your **Skool account settings** → **Affiliates**. Grab it once, then put it where your proof already lives:

- In the bio of wherever you post your builds
- Pinned in your build-demo posts ("built with the thing in my bio")
- In your DMs when someone asks how you made something — *after* you've shown them, not before

---

## How To Share It Without Being Cringe

**You'll walk away with:** the share style that converts because it isn't a pitch.

Nobody joins from "🔥 AMAZING opportunity, link in bio 🔥." They join because they saw you build a real thing and want to do that too. So the rule is simple: **lead with the build, the link is the P.S.**

- Show the thing you made (the clip, the live link, the before/after).
- Say plainly how you made it.
- One soft line: "everything I learned to do this is in the Club — link in bio if you want in."

That's it. The proof does the selling; the link just removes the friction. Honest, specific, and it compounds — because every build you post is a standing ad you only had to make once.

---

## Get Involved

Post a build with your link in the bio and drop it in the community wins thread — members swap what's converting (which clips, which captions, which hooks bring people in). The best affiliate content here is just *good build content* with a link attached. Tag **Duncan** if you want a teardown of how you're positioning the link.

---

## `soul-md-updater` — The Skill That Edits Your CLAUDE.md

**You'll walk away with:** a Skill that watches how you actually use Claude, spots the rules you keep retyping, and proposes a one-line amendment to CLAUDE.md so your memory file grows itself instead of going stale.

Your CLAUDE.md is the most-read file in your repo — Claude reloads it every session. Which means a stale or thin one is the most expensive thing you own. The fix isn't to write a perfect memory file in week one. It's to grow it like a journal: every time you correct Claude twice on the same thing, that correction wants to live in CLAUDE.md forever. That's what `soul-md-updater` automates.

Jack from the Build Room calls his version `soul.md` — borrowed from the Anti-Gravity stack. We ported the pattern. The Skill watches for repeat corrections in your last few chats ("we don't use em-dashes", "always use the repository layer for DB calls", "ship UK English, not US") and proposes a single-line addition to CLAUDE.md, with a diff and a one-line reason. You approve, it writes. You decline, it forgets.

**What lands in `.claude/skills/soul-md-updater/SKILL.md`**

A 200-word body that says: read the last N user messages where the user corrected, redirected, or repeated themselves. For each correction that shows up twice or more, generate one CLAUDE.md amendment as a unified diff. Show the diff. Show the trigger ("you corrected me here and here"). Wait for "y" before writing. Never amend more than three rules per pass — a CLAUDE.md that grows by 30 lines a week is a CLAUDE.md that gets ignored.

```
PROPOSED CLAUDE.md UPDATE — 1 rule
+ Always run `pnpm tsc --noEmit` before declaring a TypeScript change done.
  Trigger: you reminded me to run typecheck on 2026-05-12 and 2026-05-19.
Approve? (y/n)
```

**Install**

Drop the body into `.claude/skills/soul-md-updater/SKILL.md`. Reload. Trigger phrase: "update my soul" or "scan for CLAUDE.md updates." Run it every Friday — 60 seconds, three rules richer.

**Prompts**

```
Build my soul-md-updater Skill at .claude/skills/soul-md-updater/SKILL.md.
The Skill reads my last 20 user messages from the current session (or a transcript I paste),
spots any correction or rule I repeated twice or more, and outputs each one as a unified diff
against my existing CLAUDE.md. For each proposed rule, give me the diff, a one-line reason
quoting the two moments I said it, and a y/n gate before writing. Max 3 amendments per run.
Return the finished SKILL.md as one block.
```

```
Run soul-md-updater on this paste — [PASTE LAST 20 MESSAGES].
Output exactly the diffs and the y/n gate. No commentary.
No 'here are the proposed updates' preamble. Just the diffs.
```

```
Tune soul-md-updater to my repo. Read my existing CLAUDE.md and tell me the 3 sections
it already covers (so the Skill never duplicates them) and the 3 gaps it should bias toward
filling first. Update .claude/skills/soul-md-updater/SKILL.md with the duplicate-detection rule
and the gap bias list. Return the updated SKILL.md as one block.
```

---

## `audit-deck` — Turn A Client Discovery Call Into A Slide Deck

**You'll walk away with:** a Skill that takes raw notes from a client discovery call and outputs a finished AI-audit slide deck — every process they run scored on Revenue / Cost / Effort / Confidence, ranked, with one recommended pilot — the exact artifact Build Room sells for $1-5k.

This is the single most monetisable Skill in the pack. The Jack-Build-Room version of an AI audit isn't a meeting; it's a *deck*. You sit with a founder for 45 minutes, ask about every repeating process in their week, and walk away with a 12-slide deliverable they pay you for before any build starts. `audit-deck` is that deck on autopilot — paste your notes, get the slides.

**What the Skill does**

Input: bullet-point notes from a discovery call (or a Fireflies transcript). Output: a 12-slide deck spec scored on the **RICE matrix**.

- **R**evenue — what's this worth per year if we ship it
- **I**ntensity / **C**ost — what's the cost of running it today (hours × $rate)
- **E**ffort — how hard to build (S/M/L/XL)
- **Confidence** — how sure we are the build works (1-5)

Each process gets a row. The deck ranks them by RICE score (Revenue × Confidence ÷ Effort). The winner becomes the recommended pilot — one slide, named, scoped, priced.

```
SLIDE 7 — Top 3 Opportunities
  1. Lead-qual auto-reply  | R: $48k | C: $1.2k/mo | E: M | Conf: 4 | RICE: 80
  2. Invoice chase loop    | R: $22k | C: $400/mo  | E: S | Conf: 5 | RICE: 110
  3. Onboarding emails     | R: $14k | C: $300/mo  | E: M | Conf: 3 | RICE: 21
RECOMMENDED PILOT: Invoice chase loop. 3-week build. $3,500 fixed.
```

**Install + chain**

Drop into `.claude/skills/audit-deck/SKILL.md`. Chain with `one-pager` from the Web trio for the proposal page, and `anti-slop` for the final pass. The deck spec outputs as Markdown; pipe into Slidev, Marp, or paste into Pitch — your deck builder of choice.

**Pricing rule**

Never quote the deck. The deck is free if they hire you for the pilot. If they don't, the deck is $1,500. Build Room's standard.

**Prompts**

```
Build my audit-deck Skill at .claude/skills/audit-deck/SKILL.md.
Input: my pasted notes from a discovery call.
Output: a 12-slide Markdown deck spec with the RICE matrix (Revenue, Cost, Effort, Confidence).
Slide structure — 1 title, 2 client snapshot, 3 inventory of processes, 4-5 the RICE table,
6 scoring methodology, 7 top 3 ranked, 8 recommended pilot (named, scoped, priced),
9 timeline, 10 success metric, 11 investment + payment terms, 12 next step CTA.
Voice: read CLAUDE.md and VOICE.md. Return the finished SKILL.md as one block.
```

```
Run audit-deck on these notes — [PASTE NOTES]. Output all 12 slides in Markdown.
After the deck, give me a one-line followup DM I send the client to anchor the pilot
before they cool off.
```

```
Tune audit-deck to my pricing. My fixed-fee pilots are $3,500 (S effort), $7,500 (M),
$15,000 (L). My hourly is $250 if they want hourly. Update .claude/skills/audit-deck/SKILL.md
so slide 11 always prices the recommended pilot in my fixed-fee tiers and never invents
a number. Return the updated SKILL.md as one block.
```

---

## `channel-prompt-builder` — One Idea, Channel-Translated

**You'll walk away with:** a Skill that builds you four sharper, channel-specific sub-prompts — each loaded with 5 real viral examples from that platform — so 'write me a LinkedIn post' stops producing the same generic AI sludge that 'write me a Twitter post' produces.

Here's the problem the rest of the content trio doesn't fix: `hook-gen` and `thread-rewrite` are platform-agnostic. The same prompt produces the same shape no matter where it ships. But LinkedIn rewards story + emotional arc + line breaks every 1-2 sentences. X rewards contrarian + brevity + no line breaks. TikTok rewards a 3-second visual hook. IG rewards a slide-1 promise. If your Skill doesn't *know* the channel, it averages them — and averaging is what AI slop sounds like.

`channel-prompt-builder` solves this by generating four sub-Skills the first time you run it: `post-linkedin`, `post-x`, `post-ig`, `post-tiktok`. Each loads with 5 viral examples from that channel — you paste yours in, or use the defaults. Each has its own length cap, line-break rule, hook style, and CTA pattern.

**What the meta-Skill produces**

```
.claude/skills/post-linkedin/SKILL.md  — story-led, 6-12 short paragraphs, line break
.claude/skills/post-x/SKILL.md         — contrarian or stat hook, <280 chars, no line breaks
.claude/skills/post-ig/SKILL.md        — slide-1 promise, carousel-ready
.claude/skills/post-tiktok/SKILL.md    — 3-second visual hook, script format
```

Each one reads `VOICE.md` and its own `examples.md` (the 5 viral posts in that channel's voice). The 5 examples do the heavy lifting — few-shot beats instructions every time.

**Install**

Run the prompt below once. It builds the meta-Skill, asks you for your 5 viral examples per channel (or uses defaults), and writes all four files. Total: 8 minutes.

**The chain that wins your week**

`ramble-to-doc` (Sunday) → `hook-gen` → fork into `post-linkedin`, `post-x`, `post-ig`, `post-tiktok` running in parallel → `anti-slop` last pass on each. Four channels, one rambling Sunday afternoon.

**Prompts**

```
Build me a channel-prompt-builder meta-Skill at .claude/skills/channel-prompt-builder/SKILL.md.
When I run it, it generates four sub-Skills — post-linkedin, post-x, post-ig, post-tiktok —
each in its own folder under .claude/skills/, each with its own SKILL.md and examples.md.
Ask me once for 5 viral example posts per channel (or use sensible defaults if I skip).
Each sub-Skill must encode: hook style, length cap, line-break rule, CTA pattern.
Each reads VOICE.md before writing.
Return the meta-Skill SKILL.md as one block, then build the four sub-Skills.
```

```
Run channel-prompt-builder on this idea — '[IDEA]'. Fire all four sub-Skills in parallel.
Hand me four finished posts — LinkedIn, X, IG carousel spec, TikTok script —
one block each, labelled. No preamble between.
```

```
Tune post-linkedin to my actual audience. Read my last 30 LinkedIn posts at [path],
identify the 3 hooks that earned the most comments, and replace the 5 default viral examples
with my top 5. Update .claude/skills/post-linkedin/examples.md.
Return the updated examples.md as one block.
```

---

## `plan-mode-coach` + `plan-preview` — Drill The Habit

**You'll walk away with:** two Skills that fix the single biggest failure mode in Claude Code — running edits without a plan — by teaching your hand to hit Shift+Tab and by rendering the plan as a one-page HTML preview before any file is touched.

Anthropic's recommended Claude Code workflow is **Explore → Plan → Implement → Commit**. The single command that switches modes is **Shift+Tab**. And yet — 9 of 10 students skip it the first month. Why? Because Plan Mode feels like overhead until you've shipped a 4-file change that broke prod, and by then it's late. These two Skills compress the lesson.

**Skill A — `plan-mode-coach`**

Watches the conversation. Any time you give an instruction that *should* be in plan mode (multi-file change, anything touching schema, anything that says "refactor" or "rewire"), it intercepts with one line: "This is a plan-mode prompt. Hit Shift+Tab. Then paste the same thing." Doesn't lecture. Doesn't argue. Just nags you into the habit until your hand learns it.

**Skill B — `plan-preview`**

The companion Skill. Once you're in plan mode and Claude drafts a plan, plan-preview renders it into /tmp/plan.html and opens it in a browser. You see *exactly* what's about to happen. You approve or reject by clicking.

**The two-Skill flow**

```
You type "refactor the auth layer"
→ plan-mode-coach intercepts: "Plan mode first. Shift+Tab."
→ You hit Shift+Tab, paste again
→ Claude drafts the plan
→ plan-preview renders /tmp/plan.html
→ You open it in your browser, see 7 files changing, blast radius high on 1
→ You click "send back with note: don't touch the session middleware"
→ Claude revises, re-renders. You approve. It runs.
```

**Install**

Two folders: `.claude/skills/plan-mode-coach/SKILL.md` and `.claude/skills/plan-preview/SKILL.md`. Reload.

**Prompts**

```
Build plan-mode-coach at .claude/skills/plan-mode-coach/SKILL.md.
The Skill intercepts before any action when my prompt touches more than one file,
mentions 'refactor / rewire / restructure / migrate', changes schema or routes,
or modifies CLAUDE.md. Response is one line only:
'Plan mode first. Shift+Tab, then paste again.' Then wait.
Ban: long explanations, multi-step lectures. Return the SKILL.md as one block.
```

```
Build plan-preview at .claude/skills/plan-preview/SKILL.md.
After Claude generates a plan in plan mode, render it to /tmp/plan.html as a single
self-contained file with: left column = file tree, right column = unified diff per file,
top-right = blast-radius tag (LOW / MED / HIGH),
bottom = two buttons: approve (sends 'go') and reject (opens a one-line note field).
Ban: external CSS/JS, multi-file output. Return the SKILL.md as one block.
```

```
Tune plan-mode-coach to my repo. Read my last 20 commit messages and pull out the 5 phrases
I use that should always trigger plan mode (e.g. 'wire up', 'split out', 'consolidate').
Add those to the intercept list. Return the updated SKILL.md as one block.
```

---

## `context-monitor` + `audit-reasoning` — The Two Skills Experienced Builders Install First

**You'll walk away with:** a token-spend watchdog that warns you before you hit the auto-compact wall, paired with a chain-of-thought auditor that re-reads Claude's own reasoning and flags the leaps that don't survive scrutiny — so your long sessions stay honest.

**Skill A — `context-monitor`**

Runs in the background. After every Claude response, it estimates the conversation token count and prints a one-line status:

```
ctx: 32k / 200k [████░░░░░░░░░░░░░░] 16% — green
ctx: 140k / 200k [█████████████░░░░░] 70% — yellow, consider /compact soon
ctx: 188k / 200k [███████████████████] 94% — RED — /compact NOW or fork to a new chat
```

**Skill B — `audit-reasoning`**

After a long technical response with multiple steps, it re-reads Claude's own reasoning and flags three patterns: **(1) inferential leap** — step 4 doesn't follow from steps 1-3; **(2) unsupported claim** — a fact stated without source or file reference; **(3) silent assumption** — a constraint Claude assumed without you specifying.

Output: "audit: 1 leap (step 4 → 5), 0 unsupported, 1 silent assumption (assumed Postgres, you didn't say)."

**Why both**

`context-monitor` catches the *quantitative* failure (out of working memory). `audit-reasoning` catches the *qualitative* failure (bad reasoning that looks good). Together they replace the experienced-builder instinct that goes "wait, something's off here."

**Prompts**

```
Build context-monitor at .claude/skills/context-monitor/SKILL.md.
After every assistant response, append a single footer line:
'ctx: <est_tokens>k / 200k [▓]: <pct>% — <green|yellow|red>'.
Use 4-chars-per-token as the heuristic. At 70% suggest /compact.
At 90% refuse to proceed with new substantive work.
Return the SKILL.md as one block.
```

```
Build audit-reasoning at .claude/skills/audit-reasoning/SKILL.md.
Trigger phrase: "audit your last answer."
Flag: (1) inferential leaps, (2) unsupported claims, (3) silent assumptions.
Output exactly: 'audit: <X> leaps (<which>), <Y> unsupported (<which>), <Z> assumptions (<which>).'
If clean: 'audit: clean.' Return the SKILL.md as one block.
```

---

## `self-correcting-mcp` — The Skill That Catches Bad Tool Results

**You'll walk away with:** a Skill that watches every MCP and tool call Claude makes, detects when the output came back wrong, and re-issues the call with a fix — instead of letting Claude continue on bad data.

MCPs and tool calls are where Claude's reliability falls off a cliff. The model reads a tool result as gospel — empty array means "no results found", malformed JSON gets silently truncated, a 503 from Notion gets read as "no pages exist." You only find out three steps later when the output doesn't match reality.

**The four detection patterns**

1. **Empty result on a query that should have hits.** Re-issue with auth check first.
2. **Malformed JSON / truncated response.** Re-issue with explicit `response_format: json` or smaller page size.
3. **Timeout / 5xx.** Wait 2s, retry once. If still failing, surface to user — don't proceed.
4. **Field hallucination.** Claude read a field that doesn't exist in the schema. Re-issue with a schema check first.

**Example output**

```
TOOL CALL: notion.list_databases(workspace_id="...")
RESULT: { "databases": [] }  ← suspicious for a 4-year workspace
SELF-CHECK: empty result on a high-confidence query.
RE-ISSUE: notion.search(query="", filter={"value":"database","property":"object"})
RESULT: 12 databases found. Proceeding.
```

**Real numbers**

A Build Room internal test ran 50 long Notion-MCP sessions with and without this Skill. Without: 14% of sessions ended with at least one decision made on a bad tool result. With: 2%. That's a 7× drop in silent failures.

**Prompts**

```
Build self-correcting-mcp at .claude/skills/self-correcting-mcp/SKILL.md.
The Skill wraps every MCP or tool call. After each call, evaluate against four patterns:
(1) empty result on a query that should have hits — re-issue with broader filter;
(2) malformed/truncated JSON — re-issue with explicit response_format and smaller page;
(3) timeout or 5xx — wait 2s, retry once, surface to user if still failing;
(4) field hallucination — re-issue with schema check first.
Output format: original call, suspicion, re-issue, result.
Ban: continuing on a flagged response without re-issue. Return the SKILL.md as one block.
```

```
Extend self-correcting-mcp with my most-used MCPs: Notion, Gmail, Supabase, GitHub, Vercel.
For each, add one MCP-specific quirk to the detection patterns.
Update .claude/skills/self-correcting-mcp/SKILL.md. Return the updated SKILL.md as one block.
```

---

## `biz-comms` + `gpt-factory` — The Two Skills That Replace ChatGPT

**You'll walk away with:** a 29-trigger-phrase business-comms Skill that handles every email, DM, follow-up, and one-pager you'd have spun up a Custom GPT for — plus a factory Skill that turns any 5-line spec into a working Custom-GPT-equivalent inside Claude Code, in 90 seconds.

**Skill A — `biz-comms` (the consolidator)**

One Skill, 29 trigger phrases, each one fires a sharpened sub-prompt:

```
Follow-ups:   "ping again", "warm follow-up", "ghosted DM", "cold revive"
Emails:       "intro email", "decline politely", "tough ask", "raise rates email"
Sales:        "qualifying questions", "discovery deck outline", "objection rebuttal"
Internal:     "1:1 agenda", "feedback to a report", "fire someone humanely"
Founder:      "investor update", "advisor ask", "press one-liner"
Customer:     "refund response", "outage post-mortem", "win-back DM"
... (29 total)
```

**Skill B — `gpt-factory` (the generator)**

Feed it a 5-line spec — *purpose, audience, voice, banned phrases, output format* — and it spits out a finished SKILL.md in 90 seconds.

```
INPUT:
  name: spec-writer
  purpose: turn a feature idea into a 1-page engineering spec
  audience: senior devs who hate fluff
  voice: blunt, no marketing language, ban "leverage"
  output: 4 sections — problem, proposal, edge cases, success criteria

OUTPUT:
.claude/skills/spec-writer/SKILL.md ← finished, tested, ready
Trigger: "spec this" or "spec-writer"
```

**The migration weekend**

Saturday: list every Custom GPT you use. Sunday: `gpt-factory` each one. By Sunday evening you've cancelled your ChatGPT Plus subscription and your specialists run inside Claude Code, with access to your files, your CLAUDE.md, your voice, your tools.

**Prompts**

```
Build biz-comms at .claude/skills/biz-comms/SKILL.md.
Encode 29 trigger phrases — 'ping again', 'warm follow-up', 'ghosted DM', 'cold revive',
'intro email', 'decline politely', 'tough ask', 'raise rates email',
'qualifying questions', 'discovery deck outline', 'objection rebuttal',
'1:1 agenda', 'feedback to a report', 'fire someone humanely',
'investor update', 'advisor ask', 'press one-liner',
'refund response', 'outage post-mortem', 'win-back DM',
'pricing push', 'partnership intro', 'speaker pitch', 'podcast pitch',
'feature deprecation note', 'NPS follow-up', 'renewal nudge', 'churn save', 'review ask'.
Return the SKILL.md as one block.
```

```
Build gpt-factory at .claude/skills/gpt-factory/SKILL.md.
Input: a 5-line spec — name, purpose, audience, voice (with banned phrases), output format.
Output: a finished SKILL.md at .claude/skills/<name>/SKILL.md plus the trigger phrase.
Test it with one example input and show me the generated SKILL.md and a sample output.
Return the gpt-factory SKILL.md as one block.
```

---

## `stack-chooser` + `skill-chaining-kit` — Decide Once, Chain Forever

**You'll walk away with:** a Skill that picks your AI stack from a 5-question intake — paired with a kit that turns your loose collection of Skills into named, reusable chains you can fire with one command.

**Skill A — `stack-chooser` (decide once)**

Asks you 5 questions and outputs a one-page stack decision doc:

```
Q1: What are you shipping (web app / CLI tool / agent / static site / mobile)?
Q2: Who's the user (you only / 5 friends / 50 paying / 5,000+ paying)?
Q3: What's your monthly budget for cloud + AI ($0 / $20 / $200 / $2k)?
Q4: Do you already know JS, Python, both, neither?
Q5: How fast does this need to ship (this weekend / 3 weeks / a quarter)?
```

OUTPUT: one page, picks made, one-line reason each, the *next command to run*.

**Skill B — `skill-chaining-kit` (chain like Lego)**

Formalises three patterns: **Conductor chains** (sequential), **Forks** (parallel), **Gates** (conditional). Produces a `.claude/chains/<name>.md` file per chain, callable by name.

```
chain: sunday-content
  1. ramble-to-doc  (input: voice memo path)
  2. hook-gen       (input: thesis from step 1)
  3. fork:
     - thread-rewrite using top hook
     - carousel using thesis
     - post-linkedin using top hook
  4. gate: anti-slop on each fork output → must catch 0 tells
  5. write each cleared artifact to /content/inbox/<date>/
```

Five lines. One trigger. Sunday gone in 12 minutes.

**Prompts**

```
Build stack-chooser at .claude/skills/stack-chooser/SKILL.md.
Ask me 5 questions — what am I shipping, who's the user, budget, languages, timeline.
Output a one-page stack decision doc: frontend, backend, DB, vector DB, AI model, hosting, payment.
One-line reason per pick, opinionated defaults — never a menu.
End with the exact first command to run. Return the SKILL.md as one block.
```

```
Build skill-chaining-kit at .claude/skills/skill-chaining-kit/SKILL.md.
Creates .claude/chains/<chain-name>.md from a 5-line spec: name, trigger, sequence, forks, gates.
When I say 'run <chain-name>' it executes each step, piping output N → N+1,
running forks in parallel, stopping at failed gates with error and step name.
Return the SKILL.md as one block plus one example at .claude/chains/sunday-content.md.
```

---

## Capability vs Encoded-Preference — The Mental Model

**You'll walk away with:** the one taxonomy that separates Skills worth building from Skills that are just bloat.

**The two — and only two — legitimate kinds of Skill**

**Type 1 — Capability Skills.** Something Claude *cannot* do on its own and the Skill teaches it how. Examples: `playwright-cli`, `remotion`, `ffmpeg`, `figma-export`. These are essentially mini-runtimes. Permanent. Get more valuable as their capability gets more complex.

**Type 2 — Encoded-Preference Skills.** Something Claude *can* do, but you want it done *your* way. Examples: `anti-slop`, `voice-clone`, `code-reviewer`. These are essentially frozen instructions. Personal. They die when your preferences change.

**The trap:** explanation Skills. A Skill whose body starts with "Explain…" doesn't give Claude a new capability and doesn't encode a preference. Claude would have done something similar without it.

**The test:** read your SKILL.md and ask, *what changes when this fires vs when it doesn't?* If the answer is "nothing meaningful" — kill it. The folder isn't a vault, it's a graveyard.

**The decision tree**

```
Should I build this Skill?
├── Does Claude *not have access* to a system / API / format I need?
│   → CAPABILITY. Build it.
├── Does Claude do this, but not the way I want it done?
│   → ENCODED PREFERENCE. Build it.
└── Does Claude do this fine without me?
    → NOT A SKILL. It's a prompt, run it inline.
```

**Healthy vault ratio:** 20-30% capabilities, 70-80% encoded preferences, zero explanation Skills.

**Prompts**

```
Run the capability-vs-encoded-preference audit on my .claude/skills/ folder.
Read every SKILL.md. Classify each as: CAPABILITY, ENCODED-PREFERENCE, or NEITHER.
Output a 3-column table — skill name | type | one-line reason.
End with a kill list of all NEITHER entries and the exact rm commands to delete them.
```

```
I'm about to describe a Skill — '[ONE-LINE DESCRIPTION]'. Run the decision tree on it.
Output: type, one-line reason, and if not-a-skill, the exact CLAUDE.md line or inline prompt
to use instead.
```

---

## Skill-Trigger Preload Hygiene — Prune Unused Or Pay For It

**You'll walk away with:** the 10-minute Sunday audit that keeps your Skills folder fast, accurate, and trigger-collision-free.

The more Skills you install, the more *preload descriptions* Claude has to read to decide which one fires. At 5 Skills, this is fine. At 30, Claude starts mis-routing. The vault grows; the precision drops.

Chase puts it bluntly: *"Prune unused skills regularly. Too many descriptions in the preload list means the wrong skill triggers."*

**The four rules of Skill hygiene**

**Rule 1 — 30 days or out.** Any Skill you haven't invoked in the last 30 days is dead. Delete it. Git remembers if you ever want it back.

**Rule 2 — One job, one Skill.** If you have `humanize`, `anti-slop`, and `de-robot` — pick one. Delete two.

**Rule 3 — Sharp triggers, not soft ones.** A trigger phrase should be specific enough that only that Skill fires on it. Rename the soft ones.

**Rule 4 — No "explainers".** If a Skill's body starts with "Explain..." or "Help the user understand...", delete it.

**The 10-minute Sunday audit**

```
1. Open .claude/skills/. List every folder.
2. For each: no invocation in 30 days? Mark for deletion.
3. Compare trigger phrases pairwise. Any collisions? Mark.
4. Open each remaining SKILL.md. Does it do or does it explain? Explains? Mark.
5. Run the kill list as one rm command.
```

**The compound effect:** a pruned 12-Skill vault outperforms a 40-Skill vault. Every time.

**Prompts**

```
Run a hygiene audit on my .claude/skills/ folder.
For each SKILL.md: (1) check git log for invocations in last 30 days;
(2) compare trigger phrases pairwise — flag collisions and near-duplicates;
(3) flag any Skill whose first paragraph starts with 'explain', 'help understand', 'walk through'.
Output: 4-column table — skill | last-used | collisions | type —
followed by a kill list as a single rm command. Be ruthless.
```

```
Run the hygiene audit, then for every Skill on the kill list, propose its replacement:
(a) a single CLAUDE.md line, or (b) an inline prompt.
Output: 3-column table — killed-skill | replacement-type | replacement-content.
```

---

## /rewind — The Undo Button Most People Never Find

**You'll walk away with:** a no-fear edit loop where any wrong turn is one keystroke away from reversed.

Claude Code 2.0 ships with a checkpoint system that almost nobody uses. Hit `/rewind` and you get a list of every state the project has been in this session — code state, conversation state, or both. Pick one, you're back. No git. No copy-paste. No "wait, what did it just delete?"

This pairs with the git checkpoint habit but solves a different problem: **mid-session reversals.** Git is for "I want to undo this commit." `/rewind` is for "I want to undo the last three prompts and try again."

```
/rewind
```

The reason it matters: most members keep editing forward through a bad path because rebuilding feels expensive. With `/rewind` it isn't expensive anymore. You can let Claude be wrong, scrap the wrong direction in one keystroke, and re-prompt with what you learned. Bad attempts become free reconnaissance.

**The compounding move:** pair it with a one-line ask at the end of any rough session — *"summarise what we tried, what worked, what didn't, what to do differently next time."* Save that to NOTES.md before you `/rewind`. Now the reversed attempt left you a tactic, not just a smaller bill.

**Rule:** when you're three prompts into a wrong path, you don't dig out — you /rewind out.

---

## The /compact Ritual — Start Every Session Lean

**You'll walk away with:** a clean working set, no stale baggage, faster first response every time you sit down.

`/clear` is the nuke. `/compact` is the surgical option. Where `/clear` wipes everything, `/compact` keeps the *facts* Claude needs and drops the *transcript* it doesn't — your file list, your decisions, your active goal stay; the back-and-forth that got you there evaporates.

Make it a ritual at the **start** of every session, before you ask your first real question:

```
/compact
```

What this fixes: yesterday's chat ended at 30k tokens of conversation. Today you reopen and the model is reading all 30k again before answering your simple morning question. `/compact` collapses the irrelevant transcript into a one-paragraph summary the model treats as memory — same context, fraction of the tokens, sharper first reply.

**Two compounding moves:**

1. Run `/compact` again any time you cross a natural boundary — done with a feature, about to switch to docs, finished a debugging detour.
2. Pair it with a re-prime prompt right after: *"Recap what you know about this project in 5 bullets."*

**The rule most pros run by: `/compact` at the start, `/clear` between unrelated tasks, `/rewind` when a direction is wrong.** Three keystrokes, three different jobs, none interchangeable.

---

## Pantheon Personas — Name Your Agents, Bind Their Models

**You'll walk away with:** a small cast of named specialists you call by handle instead of model — and each one runs on the right brain for the job.

Most members switch models by remembering which one is good at what. The pros do it differently: they **name** an agent, **bind** that name to a specific model, and just call the name. The mental load drops to zero — "ask Athena," not "switch to Opus, raise temperature, increase max tokens."

**A starter cast that covers 90% of real work:**

```
.claude/agents/
    athena.md      — strategy & planning, binds to Opus, plan-mode-first
    hephaestus.md  — builds & refactors, binds to Sonnet, fast iteration
    hermes.md      — small fixes & messages, binds to Haiku, cheapest
    hades.md       — adversarial code review, binds to Opus, fresh context
```

Each `.md` is short: persona name, when to invoke, the model, the tools it can use, a 2-line voice. The pantheon is a decision you made **once** and now your prompts feel like delegation, not configuration.

**Prompt to keep:**

```
Spin up four agents in .claude/agents/:
Athena (planning, Opus), Hephaestus (build, Sonnet),
Hermes (small edits, Haiku), Hades (adversarial review, Opus, fresh context).
Each gets a short persona, model binding, tool scope, and 2-line voice.
Then list how I invoke each one.
```

The shift: stop picking a model. Pick a personality. The model comes with it.

---

## caffeinate — Stop Your Mac From Killing Long Agent Tasks

**You'll walk away with:** agent runs that finish — instead of dying ten minutes in because your screen locked.

If you're on macOS and you've ever started a long Claude Code session, walked away to get coffee, and come back to find Claude *paused* because your Mac slept, you've met this problem.

One command. Type it before any long-running agent task:

```
caffeinate
```

That's it. It runs in your terminal and tells the OS: don't sleep, don't dim, don't lock — until I stop you. `Ctrl+c` ends it.

**Tighter version scoped to a specific command:**

```
caffeinate -i claude
```

Now caffeinate only holds the Mac awake while `claude` is running and releases it the second the process ends. No "did I leave caffeinate on for three days?" — it self-cleans.

Windows + Linux folks: same problem, different fixes — Windows has `powercfg /requests`; Linux it's `systemd-inhibit` or `caffeine`. The principle is identical.

---

## Hierarchical CLAUDE.md — One Per Folder For Big Projects

**You'll walk away with:** Claude reads the *right* instructions for the file it's editing — not a 2,000-line monolith.

Once a project grows past ~10 folders, **one big root CLAUDE.md starts hurting more than it helps.** Every prompt loads the whole thing, even when you're editing a tiny utility in `/scripts`.

The fix: drop a **small CLAUDE.md into each major folder**, scoped to that folder's job.

```
/your-project
├── CLAUDE.md          ← global rules (stack, deploy command, banned patterns)
├── /api
│   └── CLAUDE.md      ← API conventions, auth, error format
├── /client
│   └── CLAUDE.md      ← component patterns, styling rules, state mgmt
├── /scripts
│   └── CLAUDE.md      ← one-off scripts, no production guarantees
└── /docs
    └── CLAUDE.md      ← writing voice, formatting, no code edits here
```

Why this works: it mirrors how a real team onboards. You don't hand a new hire one 400-page document. You hand them the README for the area they're working in.

**The cleanup move when your root CLAUDE.md crosses ~80 lines:**

```
Split my CLAUDE.md into a hierarchical structure: keep global rules in the root,
move API rules into /api/CLAUDE.md, client rules into /client/CLAUDE.md, and so on.
Don't lose any rule — just route each to the folder it belongs in.
Then list which rule moved where.
```

---

## Output Styles — Make Claude Sound Less Like Claude

**You'll walk away with:** a one-line switch that changes how Claude talks for the rest of the session.

Claude Code 2.0 shipped `/output-style`. It's a session-wide tone control. Type the command, pick a style, and Claude keeps that personality until you change it.

**The three built-ins:**

- **Default** — normal Claude Code. No extra teaching layer.
- **Explanatory** — Claude teaches *as it works*, explaining the *why* behind its choices. Use when you're learning a new stack.
- **Learning** — collaborative, hands-on: Claude works *with* you and leaves `TODO(human)` markers for you to fill in.

**Custom styles (the actual unlock)**

Run `/output-style-new` to scaffold one, or drop a `.claude/output-styles/<name>.md` file in your project — define the voice once, switch every session.

Same prompt, two styles, side-by-side: the difference is bigger than swapping models. Tone is a setting, not a fight you have prompt by prompt.

**Done when:** you've run `/output-style default` and `/output-style explanatory` on the same prompt and watched the answers diverge — and you've written one custom style file you'd keep.

**Prompts**

```
Run /output-style default. Ask: 'Give me the 5-minute plan to add login to my app.'
Now run /output-style explanatory and re-ask the same prompt.
Paste both replies and circle the differences in one sentence at the top.
```

```
Create a new style file called senior-engineer.md:
direct, no preamble, no emoji, code first then one line of why, never asks 'would you like…'.
Run /output-style senior-engineer and prove it landed:
ask 'review this function for bugs' on @src/index.ts and confirm the reply has no hedges.
```

```
I keep getting walls of text when I want code.
Write me the exact /output-style command to fix this for the rest of the session,
plus one line I should add to CLAUDE.md so the next session starts that way by default.
```

---

## HTML > Markdown for Plans — A Format Tactic

**You'll walk away with:** a format trick that makes Claude execute your plans more literally — fewer 'wait, that's not what I meant' moments, fewer half-done steps.

Most people write plans in Markdown. But there's a sharper move: **XML-style tags beat Markdown when you want Claude to follow structure precisely.**

Markdown is ambiguous on purpose. A bullet can be a step, a sub-point, a note, a warning. Claude has to *infer* what each line is doing. HTML tags remove the guesswork: a `<step>` is a step. A `<verify>` is a verification gate. There's nothing to interpret.

The result: Claude executes the plan *as written* instead of doing a creative re-read of it.

**The template that's worth memorising:**

```xml
<plan>
  <step n="1">Move auth routes into auth.ts. No behavior change.</step>
  <verify>Run npm test. Paste the output.</verify>
  <step n="2">Add the rate limiter to the new file.</step>
  <verify>Run npm test again. Must still be green.</verify>
  <step n="3">Deploy to staging.</step>
  <verify>Hit the /health endpoint. Must return 200.</verify>
</plan>
```

**When the Markdown habit still wins:** casual chats, exploratory prompts, anything where you actually want Claude to riff. Save HTML plans for multi-step technical work where deviation is the bug.

**Done when:** you've taken one plan you'd normally write in Markdown, rewritten it with `<step>` and `<verify>` tags, and noticed Claude finishes more of it before stopping.

**Prompts**

```
Take the last refactor plan I wrote in this session.
Rewrite it as an HTML plan with <plan>, <step n=...>, and <verify> tags.
No prose around it. Just the block.
```

```
Enter plan mode. Read @CLAUDE.md and @package.json.
Output your plan as HTML — <plan> with <step> and <verify> children — not Markdown bullets.
Wait for my 'go' before any edits. After 'go', execute steps in order and paste each
<verify> output back to me before moving on.
```

```
Give me ONE line I can paste into my CLAUDE.md telling Claude to output multi-step plans
as HTML (<plan>/<step>/<verify>) instead of Markdown bullets. 25 words max.
```
