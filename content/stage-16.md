# 📝 CHEAT SHEET

Quick-reference cards for every core skill in Claude Code Club. One page each — pin the ones you use daily.

## 1. Install In 4 Lines

**You'll walk away with:** Claude Code running on whatever machine you're sitting at — copy-paste, no hunting through three tutorials.

One page. Pick your OS. Run top-to-bottom. If a step says restart the terminal, restart it — don't skip it.

**If you're using the Claude desktop app:** you don't need any of the commands below. Go to claude.com/download, install the Claude desktop app for your machine, open it, and sign in with your account. Click the **Code** tab — that's Claude Code, where every homework task in this course happens — then **Open folder** (or drag a folder onto the window) to point it at a project. No terminal, no npm.

**If you're using CLI (terminal):** install Claude Code with `npm install -g @anthropic-ai/claude-code`, then run `claude` to start it. The OS-specific blocks below set up Node first (so npm exists), then run those two lines — pick your OS and go top-to-bottom.

**macOS (Apple Silicon or Intel)**

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
npm install -g @anthropic-ai/claude-code
claude
```

**Linux (Ubuntu / Debian flavour)**

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g @anthropic-ai/claude-code
claude
```

**Windows — via WSL (the only path worth your time)**

```
# In PowerShell as Administrator:
wsl --install
# Reboot. Open the new "Ubuntu" app from Start. Inside Ubuntu, run the Linux block above.
claude
```

**What happens on first run**

- The terminal opens a browser tab. Paste the code shown, approve, come back.
- You're in. The prompt sits at the bottom of the terminal — type to talk to it.
- Quit any time with `Ctrl + D` or `/exit`. Reopen with `claude` — you stay logged in.

**Three snags that catch 90% of first-timers**

- **"command not found"** after install → restart the terminal once, retry.
- **EACCES / permission error** on Mac/Linux → re-run with `sudo`, or use `nvm` for a no-sudo Node.
- **Windows says "command not found"** → you're in plain PowerShell. Open the Ubuntu app instead and run it there.

**Rule of thumb:** if you're past 10 minutes on install, screenshot the error and post in the community.

**Prompt**

```
I just ran the Claude Code install on [Mac / Linux / Windows-WSL] and hit this error: [paste].
Give me the single most likely cause and the one command that fixes it.
After I run the fix, tell me the single verify command (e.g. claude --version)
and the exact output I should see to confirm install succeeded.
```

---

## 2. Every Slash Command, One Page

Slash commands are typed straight into the Claude Code input box. Memorise these — they're the difference between fumbling and flying.

**The daily drivers**

- **/clear** — wipes the conversation context. Use it between unrelated tasks so old context stops polluting new work.
- **/resume** — reopens a past session with full context. Beats re-pasting everything.
- **/help** — lists every command available in your version.
- **/model** — switch the model mid-session (Opus for hard problems, Haiku for speed).
- **/compact** — summarises the conversation so far to free up context room.

**The power moves**

- **/agents** — manage and run subagents.
- **/init** — generate a starter CLAUDE.md for the current project.
- **/review** — get a structured code review of recent changes.

Type **/** in the input box anytime to see the live menu. Anything you do three times is a candidate for a custom slash command — see Cheat Sheet 12.

---

## 3. Keyboard Shortcuts That Save Hours

You lose minutes a day reaching for the mouse. These keep your hands on the keyboard.

**In the input box**

- **Shift+Tab** — toggle Plan Mode (Claude plans before touching code).
- **Esc** — interrupt Claude mid-response when it's heading the wrong way.
- **Esc Esc** — jump back to edit a previous message.
- **Up arrow** — cycle through your previous prompts.
- **Ctrl+C** — cancel the current operation.

**Navigation**

- **Cmd+K** (or Ctrl+K) — clear the visible terminal scrollback.
- **Drag a file in** — attach it instantly instead of typing the path.

**The habit**

The single highest-value shortcut is **Shift+Tab into Plan Mode** before any big change. Thirty seconds of planning saves an hour of cleanup.

---

## 4. CLAUDE.md Power Patterns

Your CLAUDE.md is read at the start of every session. A sharp one makes every prompt better. Copy these patterns.

**The four sections every CLAUDE.md needs**

- **About me** — who you are, what you sell, your skill level.
- **Current projects** — what you're building right now.
- **How I like to work** — terse vs detailed, your stack, your conventions.
- **Definition of done** — what "finished" means to you (tested? deployed? reviewed?).

**Power lines to add**

- "Always show me the plan before editing more than one file."
- "Prefer the simplest solution. No abstractions I didn't ask for."
- "When you finish, tell me what changed in one sentence."

Keep it short and specific. A 15-line CLAUDE.md that's sharp beats a 100-line one that's vague.

---

## 5. The Surgical Prompt Template

Vague prompts get vague results. Fill in this template and paste it — it forces specificity.

**The template**

> "Build/fix [exact thing]. It should [specific behaviour]. Use [stack/approach]. Don't [what to avoid]. Done when [clear finish line]."

**A real example**

> "Build the pricing section of my landing page. It should show 3 tiers in cards, middle one highlighted, each with a CTA button. Use the existing Tailwind classes. Don't add a comparison table. Done when it renders responsive on mobile."

**The rule**

If your prompt could describe ten different outcomes, it's too vague. Add constraints until only one outcome fits. Specificity is the entire skill.

---

## 6. Plan Mode Quick Reference

Plan Mode makes Claude think before it acts. It's the cheapest insurance you have.

**When to use it**

- Any change touching more than one file.
- Anything you're not 100% sure how to scope.
- Before a big refactor or a new feature.

**How**

- **Shift+Tab** toggles Plan Mode on. Claude proposes a plan and waits.
- Read the plan. If it's wrong, say what's wrong — it re-plans.
- Approve, and it executes.

**When to skip it**

- One-line fixes.
- Tasks you've done identically before.

The pattern: plan the unfamiliar, just-do the familiar.

---

## 7. Git Safety Commands

Git is your undo button for everything. You don't need to be a git expert — you need four moves.

**The safety net**

- **"Commit this as a checkpoint"** — tell Claude to commit before any risky change.
- **"Show me what changed"** — Claude runs git diff and explains it.
- **"Undo the last change, go back to the last commit"** — instant rollback.
- **"What commits have I made today?"** — Claude runs git log.

**The habit**

Commit before every risky prompt. If the result is bad, one sentence rolls it back. If it's good, you've lost nothing. Checkpoints cost nothing and save everything.

---

## 8. Error-Fixing Prompts

An error message is not a wall — it's a clue. These copy-paste prompts turn errors into fixes.

**The prompts**

- "Here's the full error: [paste]. Explain what it means in plain English, then fix it."
- "This worked before and now it doesn't. Here's the error: [paste]. What changed?"
- "Walk me through this stack trace line by line, then tell me the one line that's actually the problem."

**The mindset**

Never quit at an error. Screenshot it, paste it, ask. Most errors are one click to fix. The people who 'can't build' are usually the people who stopped at the first red text.

---

## 9. The Daily Hygiene Checklist

Five habits that keep Claude sharp and your sessions fast.

**The checklist**

- **/clear between unrelated tasks** — stale context makes Claude dumber and prompts pricier.
- **One prompt, one outcome** — don't stack five asks into one message.
- **Keep files small** — split anything over ~300 lines. Big files = slow, colliding edits.
- **Commit checkpoints** — before anything risky.
- **Re-read the plan** — in Plan Mode, actually read it before approving.

**Why it matters**

None of these are dramatic. They're the boring habits that compound. Skip them and Claude slowly gets worse all session. Do them and it stays sharp from prompt one to prompt one hundred.

---

## 10. Cost-Saving Hacks

Tokens cost money. These habits cut your spend without cutting your output.

**The hacks**

- **/clear often** — a bloated context gets re-sent with every prompt. Clearing is the single biggest saver.
- **/compact on long sessions** — summarises history instead of carrying it all.
- **Right model for the job** — Haiku for simple edits, Opus only when you need the deep thinking.
- **Small files** — Claude only loads what it needs if your project is well-split.
- **One outcome per prompt** — re-rolls on a bloated prompt are expensive.

**The sanity check**

Before a big multi-step build, ask: "Roughly how much context will this use?" Claude will tell you. Cheap awareness beats a surprise bill.

---

## 11. Speed Hacks

Small moves that make you noticeably faster.

**The hacks**

- **Drag files in** instead of typing paths.
- **Up arrow** to reuse and tweak a previous prompt.
- **Esc early** — the second Claude heads the wrong way, interrupt. Don't wait for it to finish.
- **Batch the boring** — "do X for all of these: [list]" beats ten separate prompts.
- **Save winning prompts** — keep a notes file of prompts that worked; reuse them.
- **Custom slash commands** — bottle any workflow you run weekly (Cheat Sheet 12).

**The mindset**

Speed isn't typing faster. It's not redoing work — plan once, prompt precisely, interrupt early.

---

## 12. Custom Slash Command Recipes

Any workflow you run more than twice should be a custom slash command. Build once, fire forever.

**How to make one**

Tell Claude: "Create a slash command called /[name] that does [the workflow]. Ask me clarifying questions first."

**Recipes worth bottling**

- **/ship** — run tests, commit, deploy, give you the URL.
- **/post** — turn the last build into a social post in your voice.
- **/review** — audit recent changes for bugs and security.
- **/standup** — summarise what you did today into 3 bullets.

**The payoff**

The second time you do a job, you type four characters instead of a paragraph. Your command library becomes your personal leverage — uniquely shaped to your work.

---

## 13. Deploy Commands

Getting a build live should take minutes. Here's the fast path.

**Vercel (the default)**

- Tell Claude: "Deploy this to Vercel." It handles the rest.
- First time: it installs the Vercel CLI and links the project.
- Every time after: one sentence, live URL back in ~60 seconds.

**The checklist before you deploy**

- App runs locally without errors.
- No secret keys hard-coded — they go in environment variables.
- It works on mobile (resize your browser and check).

**After deploy**

- Test the live URL on your phone.
- Share the link. A build nobody sees might as well not exist.

---

## 14. Context Window Survival Guide

Long sessions slowly fill Claude's context. When it gets full, Claude gets vague. Manage it.

**The signs context is bloated**

- Responses get slower.
- Claude "forgets" something you said earlier.
- It re-asks a question you already answered.

**The fixes**

- **/clear** — nuke it and start fresh (your CLAUDE.md reloads automatically).
- **/compact** — summarise history, keep the gist, drop the bulk.
- **/resume later** — end cleanly, pick up the session another time with context intact.

**The habit**

Don't run one giant 4-hour session. Work in focused chunks, /clear between them. Claude stays sharp and your costs stay low.

---

## 15. Skill & MCP Quick Install

Skills and MCPs are bolt-on superpowers. Installing them is fast — here's the reference.

**Installing a Skill**

- Find one in the skill marketplace or the course's Skills Booster Pack.
- Tell Claude: "Install the [name] skill." It downloads and registers it.
- Fire it with its trigger phrase or **/[skillname]**.

**Installing an MCP**

- Pick one from the MCP Super Pack.
- Claude adds it to your MCP config and reconnects.
- Now Claude can touch that tool — GitHub, your filesystem, the web.

**The rule**

Install a Skill or MCP the moment you find yourself doing the same job by hand twice. The leverage compounds every week.

---

## 16. Debugging Decision Tree

Something broke. Don't panic — follow the tree.

**The tree**

- **Is there an error message?** Paste the full error, ask Claude to explain and fix.
- **No error, wrong behaviour?** Say "It should do X but does Y. Here's the code: [paste]. Find the gap."
- **Worked before, broke now?** Ask "What changed since the last commit?" — Claude diffs it.
- **Totally stuck?** Ask Claude to add console logs, then re-run and read what they say.
- **Still stuck after 10 minutes?** Screenshot it, post in the community, tag Duncan.

**The rule**

The 10-minute rule: never grind alone past 10 minutes. A fresh pair of eyes fixes in seconds what you've stared at for an hour.

---

## 17. The Pre-Ship Checklist

Before you publish anything — site, landing page, agent, game — run this.

**The checklist**

- **It runs** — no errors in the console.
- **Mobile works** — resize the browser, check it doesn't break.
- **No secrets exposed** — keys live in environment variables, not the code.
- **The one job is obvious** — a stranger knows what to do within 5 seconds.
- **Links work** — click every button and link.
- **It's actually live** — you opened the real URL, not localhost.

**The last step**

Share it. Post the link in the community tagged #built-it. Shipping in private isn't shipping. The build only counts when someone else can see it.

---

## 18. Search vs. Scrape: Pick The Right Tool

**You'll walk away with:** a one-glance decision table — so you stop reaching for a sledgehammer when tweezers would do.

Most builders panic-scrape when a plain search would've answered them in eight seconds. The other half try to "just search" something that lives behind a login wall and quietly wonder why nothing comes back.

**The decision table (read top to bottom, stop at the first 'yes')**

| Question | Answer = Yes → | Answer = No → |
|---|---|---|
| Does an existing search engine already index this exact info? | **Use search.** Faster, cleaner, no scraping ethics involved. | Next question. |
| Do you need ONE answer, not a whole table? | **Use search.** Scraping returns rows; search returns answers. | Next question. |
| Is the source one specific URL or a small predictable set? | **Use scrape.** You know where it is — go fetch it. | Next question. |
| Does the data live in a structured list, table, or repeating pattern? | **Use scrape.** That's literally what scraping eats for breakfast. | Next question. |
| Is it behind a login, a JS-heavy app, or rate-limited hard? | **Stop. Use the official API if one exists.** Scrape is the wrong shape. | Probably search. |

**The shortcut rule**

- Need a **list**? → scrape.
- Need a **feed of facts over time**? → API first, scrape second, search never.

**What beginners get wrong**

- **Scraping when an API exists.** Almost every big platform has one. Ask Claude before you write a single selector.
- **Searching for tabular data.** You'll get blog posts about the data, not the data. Scrape it.
- **Forgetting cached results.** If you ran the same scrape yesterday, don't re-hit the site — read the cache.

**Prompts**

```
Before I write any scraping code: tell me whether this task is better served by web search,
an official API, or scraping — and why. Task: [paste yours].
Answer in one short paragraph + a recommendation.
```

```
Check if [SITE] has an official API or data export I should use instead of scraping.
If yes, show me the endpoint. If no, give me the green light to scrape.
```

---

## 19. The Polite-Scraping Checklist

**You'll walk away with:** a four-line discipline so your scraper doesn't get you banned, blocked, or sued.

Scraping is fine. **Rude** scraping gets your IP blocked, your account flagged, and occasionally a stern email from someone's lawyer. The rules below aren't paranoia — they're the difference between a scraper that runs for months and one that dies on day two.

**The four-line polite-scraping checklist**

| Rule | What it means in plain English | Why it matters |
|---|---|---|
| **Rate limit** | Wait between requests — 1 to 3 seconds is the floor, slower for small sites. | Hammering a server looks like an attack. Slow looks like a human. |
| **Robots.txt** | Read /robots.txt before you start. Honour the "Disallow" lines. | It's the site telling you what's off-limits. Ignoring it is the rude bit. |
| **User-Agent** | Set a real, identifying UA — your name or project + a contact. | Lets the site admin email you instead of blocking you cold. |
| **Cache** | Save what you fetch. Re-read from disk on the next run, not the network. | One polite fetch beats a hundred re-fetches. Your future self also thanks you. |

**The 10-second pre-flight**

- Did I check robots.txt? **Yes/no.**
- Is my User-Agent identifying me, not pretending to be Chrome? **Yes/no.**
- Am I caching responses so I don't refetch? **Yes/no.**

Four yeses or you're not ready to run it.

**What beginners get wrong**

- **Spoofing a browser UA to look "normal."** Looks shady, gets you blocked harder when you're caught.
- **No delay because "it's only 50 pages."** 50 fast requests is a denial-of-service signature. Slow down.
- **Re-running the script three times while debugging — hitting the site fresh each time.** Cache once, parse forever.
- **Skipping robots.txt because they "won't notice."** They will. They always do.

**Prompts**

```
Build me a polite scraper for [URL] that:
(1) reads robots.txt first and respects Disallow lines,
(2) sleeps 2 seconds between requests,
(3) uses a User-Agent that says 'CCC-Builder/1.0 (contact: my@email)',
(4) caches every response to ./cache/ so reruns don't re-hit the network.
Show me the checklist before you write code.
```

```
Audit this scraping code for politeness: rate limit, robots.txt, User-Agent, caching.
Flag any line that's rude and fix it. Code: [paste].
```

---

## 20. The 3 Prompts Every Scraping Job Needs

**You'll walk away with:** three guardrail lines that turn a fragile scraper into one that actually finishes the job.

A scraper without guardrails is a coin flip — it either works or it dies on row 47 and leaves you a stack trace. Bake these three lines into every scraping Skill or prompt you write.

**The three lines (copy these verbatim into every scraping prompt)**

- **"On fail, try X."** → When the primary selector or endpoint breaks, fall back to a named alternative. (Example: "If the .price class is missing, fall back to the first $ inside the product card.") Without this, one HTML tweak kills your whole run.
- **"Skip if Y."** → Define the rows you do *not* want to bother with. (Example: "Skip if the listing has no image, or if the title contains 'sold' or 'sponsored'.") Without this, you scrape garbage and clean it for an hour.
- **"Stop after N rows."** → A hard ceiling. (Example: "Stop after 200 rows or 5 minutes, whichever comes first.") Without this, a wrong selector can hit pagination forever and rack up bandwidth.

**Why all three, not just one**

| Line | Saves you from | What dies without it |
|---|---|---|
| On fail, try X | Single-point-of-failure selectors | An entire run dying on one bad page |
| Skip if Y | Garbage in, garbage out | An hour of manual cleanup |
| Stop after N | Runaway loops | Your bandwidth, your sanity, your bill |

**The drop-in template**

```
Scrape [target].
On fail, try the fallback selectors I gave you before erroring.
Skip if the row is empty, duplicate, or matches the exclude list.
Stop after N rows or M minutes, whichever first.
Report at the end: rows kept, rows skipped (and why), rows failed (and where).
```

That last sentence — the report — is the magic. You get a receipt, not a black box.

**What beginners get wrong**

- **One line, not three.** A fallback without a stop = infinite retry. A stop without a skip = a ceiling full of junk. You need the trio.
- **Vague Y.** "Skip if bad" isn't a rule. "Skip if price is missing or under $1" is.
- **No end-of-run report.** If you can't see what was skipped, you can't trust what was kept.

**Prompts**

```
Wrap my scraper in the three guardrails.
(1) On fail, try these fallback selectors: [list].
(2) Skip if [conditions].
(3) Stop after [N] rows or [M] minutes.
At the end, print a report: rows kept, rows skipped (and why), rows failed (and where).
Code: [paste].
```

```
Review this scraping Skill and tell me which of the three lines —
on-fail / skip-if / stop-after — is missing or weak.
Suggest a one-line fix for each.
```

---

## 21. Share What You Built (Without Leaking Something)

**You'll walk away with:** a posting template + sanity checklist so your share lands as a builder post, not a brag — and doesn't accidentally leak something.

You shipped something. Don't let it die on your hard drive. The community is the multiplier — but most members either don't post at all, or post the wrong thing.

**The 3-line share template**

Paste this into every post. Three lines, that's it.

- **Tried:** What you set out to do, in one plain sentence. ("Tried to scrape 200 product listings into a clean CSV.")
- **Worked:** The specific bit that finally clicked. ("Worked once I added a 2s rate limit and a fallback selector for missing prices.")
- **Learned:** The one thing you'd tell past-you to save the headache. ("Learned: always cache responses while debugging — re-hitting the live site burned my IP on attempt 3.")

Tried · Worked · Learned. No "hey guys," no five-paragraph windup. Builders want the signal.

**The 5 post types that always get engagement**

| Type | Why it works | Format |
|---|---|---|
| "This broke for two hours, here's the fix" | Saves the next person two hours — they'll thank you. | Problem → fix → screenshot. |
| The receipt | Numbers > vibes. (rows scraped, hours saved, $ earned.) | One number, one sentence. |
| "I tried it your way" reply | Crediting someone else's tip and showing the result. | Quote them → show the result. |
| The honest L (loss) | Wins look like flexing; losses build trust. | What broke + what you'll try next. |

**The 60-second "wait, don't post that yet" sanity checklist**

Run this BEFORE you hit post. Sixty seconds. Saves you a week of regret.

- **API keys / tokens** — are any visible in the screenshot or code? *(blur or revoke)*
- **Real emails / names / phone numbers** — yours or anyone else's? *(scrub)*
- **Client work** — do you have permission to show this? *(if unsure, mask the brand)*
- **The site you scraped** — would you be happy if their team saw the post? *(if no, anonymise it)*
- **The claim** — is the number real and reproducible? *(no rounding up "for the post")*
- **The ask** — is there a single, specific question or call to action? *(vague posts get vague replies)*

**What beginners get wrong**

- **Posting a wall of text** with no screenshot. The eye skips it.
- **Humblebrags.** "Just casually shipped my first SaaS" — nobody learns anything from that. Show the receipt or the L.
- **Leaking keys in screenshots.** Crop or blur. Always.
- **No question at the end.** A post with no ask gets likes; a post with a real question gets a thread.

**Prompts**

```
Turn this build into a 3-line share post (Tried · Worked · Learned).
Keep it under 60 words, end with one specific question.
Build: [paste what you did].
```

```
Run the 60-second sanity check on this draft post: scan for visible keys/emails/names,
client info, scraping targets I should anonymise, and any claim that isn't reproducible.
Flag everything and rewrite the risky lines. Draft: [paste].
```

---

## 22. Verify Checklist + The Six Slash-Commands That Matter

**You'll walk away with:** certainty Claude Code is alive — plus the six commands that cover ninety percent of what you'll do inside it.

Don't build on top of a broken install. Three checks, then six commands. Total time: under five minutes.

**Verify In 3 Tiny Checks**

1. **Version** → `claude --version` should print a real number (e.g. `2.x.x`). "Command not found" → restart terminal, then re-run `npm install -g @anthropic-ai/claude-code`.
2. **First session** → `claude`, then type *"hello, can you confirm you're running?"*. You should get a plain-English reply in the same terminal. A login tab is normal first-run.
3. **Clean exit** → `Ctrl + D` or `/exit`. Back to your normal terminal. Reopen with `claude` whenever.

Three green checks = cleared to build. One red = post the screenshot, don't grind.

**The Six Slash-Commands Worth Memorising**

| Command | What it does | When to reach for it |
|---|---|---|
| `/help` | Lists every slash-command available right now. | Day one. Any time you forget one. |
| `/plugin` | Opens the Skills + MCP panel — Discover, Installed, Marketplaces. | When you want to give Claude new powers without typing them. |
| `/init` | Generates a starter CLAUDE.md for the current project. | First thing in any new folder. |
| `/clear` | Wipes the current chat history; keeps you logged in. | When the conversation got long and Claude is "remembering" stale stuff. |
| `/model` | Switch which Claude model runs this session. | Heavier model for a hard build; lighter one for cheap iteration. |
| `/exit` | Cleanly closes the session. | End of the work block — frees memory on slower machines. |

> **If you're using the Claude desktop app:** the same powers live behind the **+** button near the prompt box — click it for a popup with three tabs: **Plugins**, **Skills**, and **Connectors** (Connectors = MCPs). The app has no `/plugin` or `/mcp` — typing them returns "not available in this environment." `/help`, `/clear`, `/model`, and `/init` still work the same in both.

**How to actually install these in your head**

You won't memorise the table. You'll learn them by **using one a day for a week.** Day 1 use only `/help` and `/exit`. Day 2 add `/init`. Day 3 add `/clear`. By Friday all six are muscle memory.

**Two micro-tips that aren't commands but save more time than any command**

- **Up-arrow** in the prompt pulls back your last message — edit instead of retyping.
- **Drag a file into the terminal window** to paste its path — way faster than `cd` and arrow-keys.

**Done when:** `claude --version` returns a real number, a session greets you back, and you've actually run `/help` and `/init` once each in a real folder.

---

## 23. Topic → 5-Slide Carousel JSON

**You'll walk away with:** a structured 5-slide carousel produced from one topic line — paste, fill two blanks, get back JSON you can pour into any slide tool.

Carousels are the highest-saved format on Instagram in 2026 — and you already have the wins to fill them. This is the prompt that turns a single sentence into a publish-ready deck.

**The Prompt (paste verbatim)**

```
You are designing a 5-slide Instagram carousel that maximises saves and shares.

TOPIC: [one sentence — what the carousel is about]
AUDIENCE: [who it's for, plain words — e.g. "beginner builders chasing a first paying client"]

Return STRICT JSON only, in this exact shape:
{
  "hook_slide": {
    "headline": "5-8 words, scroll-stopping, promises a payoff",
    "subline": "one short sentence that earns the swipe"
  },
  "body_slides": [
    { "n": 2, "title": "...", "body": "1-2 short sentences", "visual_note": "what to show" },
    { "n": 3, "title": "...", "body": "...", "visual_note": "..." },
    { "n": 4, "title": "...", "body": "...", "visual_note": "..." }
  ],
  "cta_slide": {
    "headline": "the one action you want them to take",
    "subline": "why it's worth it, in one line",
    "save_prompt": "the line that explicitly tells them to save the post"
  },
  "caption": "120-180 words, first-person, no emoji wall, ends with a question",
  "hashtags": ["8-12 mixed-size tags, no banned terms"]
}

RULES:
- Each slide stands alone — slide 3 alone still gives value.
- Plain language; no jargon; no AI tells ("delve", "tapestry", "in today's fast-paced world").
- Hook promises a specific payoff, doesn't tease.
- One CTA, not three.
- Return ONLY the JSON. No commentary before or after.
```

**How to use what comes back**

- Drop each `body_slides` entry into one slide of your tool. The `visual_note` is your direction to whoever builds the image.
- Keep slides **text-light, visual-heavy** — the JSON gives you the words, the visual sells the swipe.
- Paste the `caption` into IG as-is. Read it aloud first; if it doesn't sound like you, edit one sentence.
- **Save the JSON** in your skills folder. It's a template — you'll remix it 50 more times.

**Useful follow-up prompts**

```
Rewrite slide 1 (hook) three ways — curiosity, contrarian, number-driven.
Same payoff. Return as JSON array.
```

```
Convert this JSON into a single-screen HTML preview:
5 stacked 1080x1350 cards, headline + body centred, slide-number badge. Inline CSS only.
```

**Rule of thumb:** the JSON is the *skeleton*. You're not the writer — you're the editor. Read it, swap one phrase to sound like you, and ship.

---

## 24. Layout, Slide Order & The Pre-Publish Checklist

**You'll walk away with:** the exact dimensions, the slide order that converts, and the 60-second sanity pass that catches every dumb mistake before you hit Share.

**The Numbers**

- **Canvas: 1080 × 1350 px** (the 4:5 portrait ratio — tallest IG allows in-feed). Don't use 1080×1080 unless you have a strict reason; portrait wins more screen real-estate on phones.
- **Safe zone: keep all text ≥ 120 px from every edge** — IG crops differently across feed, grid, and reels-tab previews. Corners get eaten.
- **Slide count: 5 is the 2026 sweet spot.** Long enough to deliver value, short enough that swipe-completion stays high. Past 7 slides, completion drops off a cliff.
- **Export:** PNG, RGB, ≤ 8 MB per slide. JPEG fine for photo-heavy slides. **No transparency** — IG fills it with white awkwardly.
- **File names:** `01-hook.png`, `02.png`, `03.png`, `04.png`, `05-cta.png`. IG uploads alphabetically — naming slide 4 "final.png" is the #1 publish bug.

**The slide order that converts**

| Slide | Job | How |
|---|---|---|
| 1 — Hook | Stop the scroll | Big headline, one image, no logo, no "swipe →" arrow (IG penalises that pattern now). |
| 2 — Promise | Tell them what's coming | One line of payoff, one supporting visual. |
| 3 — Body | The actual value | Most of the takeaway. Make it screenshot-worthy on its own. |
| 4 — Proof / example | Make it real | A screenshot, a before/after, a specific result — not another quote. |
| 5 — CTA + save | One action | One ask. End with "save this so you don't lose it" — explicit save prompts measurably boost saves. |

**Three layout rules people skip**

- **Max two fonts** — one headline, one body. Three fonts reads "amateur" from the thumbnail.
- **Contrast over decoration** — black on cream, or white on one brand colour, beats any gradient on slide 1.
- **Slide 1 is the whole job.** People decide to tap from the grid preview. If the thumbnail doesn't earn the tap, the other four don't exist.

**The 60-Second Pre-Publish Checklist**

**Content —**
- Hook reads in **under 2 seconds** on a muted phone. Squint at the thumbnail; if you read twice, rewrite.
- Every slide **stands alone** — pick one at random, does it give value alone?
- Zero AI-tells. Read aloud; if you wouldn't say it, edit it.
- **One** CTA, not three. Pick one action.
- Slide 5 has an **explicit save prompt** ("save this so you don't lose it"). Saves are the 2026 ranking metric for carousels.

**Technical —**
- Files **1080 × 1350**, PNG, ≤ 8 MB each.
- Files **named in order** (01, 02, 03, 04, 05) so IG uploads them right.
- **Cover image** confirmed as slide 1 in the composer (tap "Edit cover"). The grid preview is your real thumbnail.
- Every link actually opens — on your phone, not just your laptop.
- **Alt text** on slide 1 added (IG's accessibility field, one sentence). Bumps reach; not optional in 2026.

**Caption —**
- First line is a **hook**, not a label — IG cuts captions after ~125 characters; that line is the real headline.
- Caption ends with an **easy-to-answer question** (open-ended questions kill engagement).
- 8–12 hashtags, **mixed size** (a few large, several niche; avoid banned terms — ask Claude to flag them).

**Distribution —**
- **Cross-post to Stories** with the "I just posted" sticker — free second touch, 10 seconds.
- **Reply to your own first comment** with the link — keeps bio-link friction low.
- **Save the JSON template** before you close the tab — that's tomorrow's carousel skeleton.

> **The thumbnail is the headline.** If you only fix one thing on this card, fix slide 1. Everything downstream rides on whether anyone tapped.

**Done when:** a real 5-slide carousel is live on your account, all 1080×1350, slide 5 has an explicit save prompt, and the JSON template is saved in your skills folder for the next one.
