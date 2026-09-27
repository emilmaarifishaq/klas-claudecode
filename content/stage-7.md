# STAGE 7 — AGENTS

## ▶️ STAGE 7 — Start Here

![Stage 7 — Agents](/images/stage7-overview.png)

Until now, *you* sat in the chat and drove every step. This phase is the leverage jump: you stop doing the work and start **directing workers that do it for you** — including while you sleep.

This is the single biggest mindset shift in the whole course. It's the same shift a solo operator makes when they hire their first assistant: you stop being the one with hands on the keyboard and become the one who **assigns, reviews, and approves**.

### Why this is the hinge of the whole course

Every previous stage made *you* better at directing Claude. This stage makes Claude run *without* you. The unlock isn't "more powerful AI" — it's that **your output stops being capped by your hours**. Get this mental shift first (you're a manager now, not a typist) and every tactic below makes sense. Skip it and you'll build a fancy chatbot instead of an actual worker.

### What you'll walk away with

- A clear, plain-English picture of what an "agent" actually is
- A real multi-step task handed off and completed without you driving
- One useful job running on a **schedule** — output waiting for you
- A chainable automation you'll actually use week-to-week

---

## 🧠 What An Agent Actually Is (Plain English)

> **You'll walk away with:** the mental model that makes every agent you build from here actually work.

An agent isn't a smarter chatbot. It's Claude given **three things it normally doesn't have:**

1. **A goal** — not "answer my question" but "complete this job"
2. **Tools** — real things it can *do* (read files, call APIs, run code, search the web)
3. **A loop** — it checks its own work and keeps going until the job is done

When those three combine, Claude stops being a thing you talk to and becomes a thing that **acts**. It reads your files, runs a process, checks the output, fixes what's wrong, and delivers a result. You weren't there for any of it.

The single wrong mental model to avoid: "it's just a longer prompt." A longer prompt gives better answers. An agent does *work*.

---

## 📋 Scoping A Job So It Finishes Without You

![Scoping A Job So It Finishes Without You](/images/stage7-scope.png)

> **You'll walk away with:** the one habit that makes agents actually finish instead of loop forever asking you questions.

The number one agent failure: **Claude stops mid-task to ask a question you didn't anticipate.** Every question it asks is a blocker you have to personally clear. Your job before you hand anything off is to remove every question in advance.

### The pre-handoff checklist

Before you give Claude a job to run without you:

- **Define "done."** What does the finished output look like, exactly? A file? A posted tweet? A Slack message? If Claude doesn't know what done looks like, it'll loop.
- **Handle every fork.** "If you hit an error, skip it and log it to errors.txt. Don't stop. Don't ask me. Keep going."
- **Give it the exit condition.** "Stop when all 50 rows are processed." Otherwise it might run forever, or stop too early.

**The phrase that fixes 80% of agent breakdowns:**

> "If you're unsure about anything, make a reasonable assumption, document it, and keep going. Do not stop and ask me."

---

## 🚀 Hand Off Your First Real Multi-Step Task

![Scoped Hand-off → Work → Result-back](/images/stage7-handoff.png)

> **You'll walk away with:** a real job delegated to Claude — completed without you driving a single step.

Pick a real multi-step job from your life. Not a demo. Something you'd actually do by hand.

**Good first agent tasks:**
- Research 10 competitors, pull their prices and positioning, write a summary doc
- Scrape a list of URLs, summarize each page, output a spreadsheet
- Read 20 files in a folder, tag each one, move them to the right subfolder
- Write 5 LinkedIn posts from a list of topics, save each as its own file

**The handoff prompt structure:**

> Your job: [describe the complete outcome, not the steps]. You have access to [tools/files]. Rules: [the guardrails — what to do if something fails]. Done when: [the specific finish condition]. Start now. Do not stop to ask me questions — if anything is unclear, make a decision, note it, and continue.

---

## ⚠️ What Beginners Get Wrong

![What Beginners Get Wrong](/images/stage7-beginners.png)

Three patterns that reliably break agent tasks:

- **Vague finish conditions.** "Research competitors" loops forever. "Research 10 competitors, write one paragraph each, save to competitors.md" stops at the right place.
- **No error handling.** If one step fails and you didn't say what to do, the agent stops. Add: "if X fails, skip it and log it."
- **Checking in too early.** The whole point is that you're *not* there. Let it run. Review the output when it's done.

---

## 🌙 Make Work Happen Without You (Scheduling)

![Make Work Happen Without You](/images/stage7-schedule.png)

> **You'll walk away with:** one useful job set to run on a schedule — output waiting for you instead of you doing it.

This is where output stops being capped by your hours. Claude Code can re-run a task on a schedule so it just *happens*.

**Three ways, simplest first:**

- **`/loop` (in-session, quickest).** Type `/loop 30m check [thing] and tell me what changed` and it re-runs that prompt every 30 minutes while your session is open. Press `Esc` to stop it.
- **A one-time reminder.** Just say it in plain English: *"remind me at 3pm to post the update"* or *"in 45 minutes, check whether that finished."*
- **Routines (runs even with your computer off).** For "every morning, forever" jobs, a Routine runs on Anthropic's own servers — no terminal open, no machine on. Use the `/schedule` command or the Routines panel in the desktop app.

**Good first scheduled job:**
> Every weekday morning at 8am, check [my RSS feeds / my email subject lines / my competitor's new posts] and write me a 3-bullet brief. Save it to morning-brief.md.

---

## 🔗 Chain A Tiny Automation You'll Actually Use

> **You'll walk away with:** a small, useful chain that runs end-to-end — your first taste of compound automation.

A chain is just agents that hand off to each other. Output of step 1 becomes input of step 2. No human in the middle.

**Simple chains to start with:**

- RSS feed → Claude summarises → sends Slack message
- New file drops in folder → Claude reads it → appends a summary to a master doc
- Form submission arrives → Claude drafts a reply → saves draft to review

**Chain prompt:**

> Build me an automation that: 1) reads [input source] 2) processes it by [what to do] 3) outputs [result] to [destination]. Wire steps 1–3 together so step 2 triggers automatically after step 1 finishes. No human in the loop between steps.

---

## 🎯 STAGE 7 — Homework

Don't move on until every box is true:

- Hand off **one real multi-step task** to Claude and let it run without you driving
- Set **one job on a schedule** using `/loop`, a reminder, or a Routine
- Build **one tiny chain** (two steps minimum, no human in the middle)
- Write down **one thing Claude just did that previously took you an hour by hand**

> **✅ Done when:** one task ran without you driving it, one thing is on a schedule, and you have output waiting for you when you come back.

---

## ✅ STAGE 7 — Summary

You crossed the line from user to operator. Claude doesn't just answer you now — it works while you're gone. You learned what an agent actually is (goal + tools + loop), how to scope a job so it finishes (pre-answer every question before handoff), how to schedule work so it runs on its own, and how to chain steps together with no human in the middle.

Your output is no longer capped by your hours. That's the whole leverage unlock — everything from here compounds it.

**Your progress:**
- ✅ STAGE 1 — Start Here
- ✅ STAGE 2 — Memory
- ✅ STAGE 3 — Your First Website
- ✅ STAGE 4 — Landing Pages
- ✅ STAGE 5 — Skills & MCP
- ✅ STAGE 6 — Build a Game
- ✅ STAGE 7 — Agents
- ⬜ STAGE 8 — AI Video Mastery
- ⬜ STAGE 9 — Social Media
- ⬜ STAGE 10 — Coming From Another Tool

---

## ✍️ STAGE 7 — Your Mission

Post in the community titled **"Phase 7 Mission"**: name **one job Claude ran without you** (what it was, what it produced), and **one thing now on a schedule.** Tag **Duncan** for a review.

---

## 🎯 10 Proven Agents & Automations Prompts

**1. Workflow Before Agent**

~50% of business automations need no AI at all. Most need only a deterministic workflow.

> I want to automate this: [DESCRIBE THE TASK]. Before we build anything, walk me through this decision: do I need to be in the loop every time (a simple assistant), are the steps fully logic-based (a plain workflow with no AI), is the order of operations fixed (an AI workflow), or is it genuinely unpredictable (a true agent)? Recommend the simplest option that actually solves it.

**2. Wireframe the Automation First**

> Before building, help me wireframe this automation: [DESCRIBE WHAT YOU WANT TO AUTOMATE]. Map it as: trigger → steps → output → error handling. Show me the map and wait for approval before writing any code.

**3. The Pre-Handoff Brief**

> I'm about to hand you a job to run without me. Before I do, help me write the full brief: the goal, the tools you'll need, what to do if each step fails, what "done" looks like, and the exact stop condition. Ask me one question at a time until the brief is airtight.

**4. Schedule a Morning Brief**

> Set up a Routine that runs every weekday at [TIME]. It should: check [SOURCE — RSS / email subjects / a URL], summarise the 3 most relevant items for my work in [NICHE], and save the brief to morning-brief.md. Run it now as a test first, then schedule it.

**5. Research Agent**

> Act as a research agent. Your job: research [TOPIC]. Steps: 1) search for the top 10 sources 2) read each source 3) extract the key facts 4) write a structured brief with citations. Rules: if a source is unavailable, skip it and note it. Done when the brief has at least 5 sources cited and covers [the specific question]. Start now.

[📄 Download Full Agents Prompt Pack (PDF)](/pdfs/prompt-pack-07-agents.pdf)

---

## 🤝 Get Involved

Your best automation is worth more shared — people will copy it, tweak it, and post their version. Drop your scheduled job in the community and go reply to one person still in Phase 3–6 who's stuck on delegating. Teaching the hand-off skill is the fastest way to lock it in for yourself.

---

## 🍳 The 5-Part Agent Recipe (Every Agent You'll Ever Build)

![The 5-Part Agent Recipe](/images/stage7-5part-recipe.png)

> **You'll walk away with:** a repeatable formula for writing any agent — so you stop staring at the screen wondering what goes in the prompt and start shipping one in under ten minutes.

Every agent worth keeping has the same five ingredients. Miss one and it either wanders, breaks, or quietly does something you'll regret. Learn the recipe once and you can write a prompt for any agent in under ten minutes.

**The five parts (memorise these in order):**

- **Name.** A short handle — `idea-triage`, `code-review-buddy`, `daily-draft`. Lowercase, dashes, no cuteness. The name is how you'll call it a hundred times.
- **Soul.** One sentence: what it is, what it cares about, what it ignores. No fluff.
- **Job.** The one job it does. Not three jobs. One. If your description has the word "and" more than once, split it into two agents.
- **Keys.** The tools it can touch. List them explicitly. An agent with undefined tool access either over-reaches or freezes.
- **Stop condition.** When is it done? "When the brief is written" is done. "When it's good" is never done. A loop without a stop condition runs until you kill it or your credits run out.

---

## 🔨 Building Your First Agent End-To-End

![Building Your First Agent End-To-End](/images/stage7-build-agent.png)

> **You'll walk away with:** one real, working agent committed to your project — that you can invoke any time with one command and that drafts content in your actual voice.

We're building one now. Target: `daily-content-draft` — an agent that, on command, drafts 3 post options in your voice from one rough idea, leaves them as text files, and **never posts anything**.

In your project root, ask Claude Code to create the agent file at `~/.claude/agents/daily-content-draft.md`:

> Create a sub-agent file at `~/.claude/agents/daily-content-draft.md`. Give it a name, a one-sentence soul that matches my writing voice (direct, no fluff, treats the reader as smart), the job of drafting 3 post options from a rough idea I give it, access only to the Read and Write tools, and a stop condition of 'done when 3 drafts are saved as separate files.' Show me the file before saving.

Review it. If the soul feels wrong, fix it now — it propagates to every output. Once it looks right, approve it. Then test it:

> Run `daily-content-draft`. Rough idea: most people automate the wrong thing first.

Watch it work. Check the files. That's your first real agent.

---

## 🎭 Orchestrator + Sub-Agents (When To Split A Job)

![Orchestrator + Sub-Agents](/images/stage7-orchestrator.png)

> **You'll walk away with:** a clean mental model for when to use one agent vs. several — so you don't over-engineer and end up with 8 broken specialists instead of 1 working agent.

One agent doing one job is the default. Don't split work just because it sounds cool. You split when **one of these** is true:

- **The job needs a lot of throwaway context.** Reading 250 files to answer one question? Spin up a sub-agent for the reading — it works in its own clean space and hands you back only the answer.
- **The job is genuinely parallel.** A researcher, a writer, and a fact-checker can all go at the same time.
- **Specialisation actually matters.** A drafter tuned to one brand voice shouldn't also be doing financial modelling.

**The honest distinction:**

- **A sub-agent is temporary and invisible.** Spun up mid-session to handle the dirty part of a job, then discarded. You don't call it by name.
- **An agent team is named, reusable, and persistent.** A roster of specialists with their own `.md` files. You point at them by name.

The simplest mental model: sub-agents are the contractor your assistant hires for an afternoon. Your team is the staff on payroll.

---

## ⚡ Custom Slash Commands — Bottle The Whole Thing

![Custom Slash Commands](/images/stage7-slash-commands.png)

> **You'll walk away with:** one agent invocation packaged into a custom slash command — so a workflow you run once a week becomes a one-liner forever.

Once you've invoked the same agent with the same setup a few times, the brief itself becomes the bottleneck. A slash command fixes that.

### What a custom command actually is

A small markdown file at `~/.claude/commands/your-command.md`. The file is just the prompt. When you type `/your-command`, Claude runs the file content as if you typed it.

**Building one in 60 seconds:**

> Create a slash command file at `~/.claude/commands/draft.md`. The command should: take the rough idea I type after `/draft` as `$ARGUMENTS`, pass it to the `daily-content-draft` agent, and return the three draft filenames when done. Show me the file.

Test it: `/draft most automation tutorials teach the wrong thing first`

**What to bottle:**
- Any agent you invoke more than once a week
- Any brief longer than two sentences
- Any workflow with more than one step you keep re-typing

---

## 🛡️ Hooks — The Pre-Action Safety Net

![Hooks — The Pre-Action Safety Net](/images/stage7-hooks.png)

> **You'll walk away with:** a working hook installed that pauses or blocks a destructive action before it fires — so the agent can't quietly delete something while you're getting coffee.

A **hook** is a tiny rule that fires before a tool runs — pre-edit, pre-bash, pre-write — and gets a vote on whether it's allowed to happen.

### Two hooks every builder should have on day one

**1. The git-commit-before-edit hook.** Before Claude edits any file, auto-run `git add -A && git commit -m "pre-edit snapshot"`. If the edit goes wrong, `git checkout HEAD~1` brings everything back.

**2. The bash-command-review hook.** Before any bash command runs, if the command contains `rm`, `drop`, `delete`, or `truncate` — pause and ask for confirmation.

**Installing both in 90 seconds:**

> Add two hooks to my Claude Code settings: (1) before any Edit tool call, run `git add -A && git commit -m 'pre-edit snapshot'`; (2) before any Bash tool call, if the command contains rm, drop, delete, or truncate, pause and ask me to confirm before running. Show me the settings change before applying.

Review the diff. Approve it. Those two hooks will save you at least once.

---

## 💥 The 4 Ways Beginner Agents Break (And The Fix For Each)

![The 4 Ways Beginner Agents Break](/images/stage7-4ways-break.png)

> **You'll walk away with:** a diagnostic cheat sheet — so the first time your agent misbehaves you know exactly which of the four it is and how to fix it in one move.

**1. Output reads generic/AI-ish**
- Cause: SOUL section is too short, too vague, or missing real examples.
- Fix: Add 3–5 verbatim examples of your own writing directly in the SOUL field. The agent mirrors what it sees, not what you describe.

**2. Loops forever, asks too many questions, or stops early**
- Cause: STOP condition is missing or fuzzy. "When done" is not a stop condition.
- Fix: Rewrite the STOP field as a binary test: "Is X true? If yes, stop."

**3. Reaches for wrong tools or ignores tools it should use**
- Cause: KEYS section is wrong — missing tools, listing inaccessible tools, or listing too many.
- Fix: List only the tools it actually needs for this job.

**4. Works perfectly in testing, fails in production**
- Cause: Environment assumptions baked into the prompt — file paths, env vars — that don't hold outside your machine.
- Fix: Make all paths relative or use `$PROJECT_ROOT`. Put env vars in `.env`. Add "if the file doesn't exist, create it" instead of assuming it's there.

---

## 📈 Promotion Pattern — From Hand-Run To Automated

![Promotion Pattern](/images/stage7-promotion.png)

> **You'll walk away with:** a clear rule for when an agent has earned the right to be automated — and a checklist so you don't build a wrong-output factory.

### The promotion rule (memorise this)

**An agent earns automation after 5 successful hand-run executions in a row.** Not 3. Not "it worked once." Five clean runs you watched, where the result was usable without you reworking it.

### The promotion checklist

Before you schedule it, verify:

- Output quality: 5/5 runs produced output you'd send without editing
- Error handling: you've seen it hit at least one failure and recover gracefully
- Stop condition: it always stops where you expect
- No surprises: it never touched a file or API you didn't expect

### The staging workflow

1. **Hand-run** — you trigger it, you watch it, you review
2. **Semi-auto** — runs on schedule but messages you the output for approval before saving to the live location
3. **Automated** — runs, saves, and you review the log once a day

Never skip stage 2. That's where you catch the edge cases your 5 clean runs didn't surface.

---

## 🧩 Putting It All Together — Your Personal Agent Stack

![Your Personal Agent Stack](/images/stage7-agent-stack.png)

> **You'll walk away with:** the plan for the 3–5 agents you'll actually keep — a stack that compounds and shaves real hours off every week.

### The rule

Most operators only need **3–5 agents**. More than that and you stop remembering what each one does, the menu gets crowded, and you quietly revert to typing everything by hand.

### The three slots most people fill first

1. **Daily brief.** Runs every morning. Reads your inputs (email subjects, RSS, a URL), writes a 3-bullet summary, saves it somewhere you actually look. No decisions, no posting.

2. **Content drafter.** On demand. Takes a rough idea, drafts 3 options in your voice, saves them as files. You pick the winner. Nothing goes out without your eye.

3. **Inbox triage.** Reads new items, categorises by urgency and type, drafts a one-line reply for each, saves drafts. You review and send. The agent never sends.

### What to build next

Once those three are running clean: a **research agent**, a **meeting-prep agent**, and a **post-publish checker**.

---

## 🤝 Agent Teams vs Sub-Agents (And When TeamCreate Actually Helps)

> **You'll walk away with:** the rule for the difference between a sub-agent and an agent team — so you stop building 8 broken specialists.

- **A sub-agent is temporary and invisible.** Spun up mid-session to handle the dirty parts of a job, then discarded. You don't call it by name.
- **An agent team is named, reusable, and persistent.** A roster of specialists, each with their own `.md` file, SOUL, and STOP condition. You point at them by name.

The simplest mental model: sub-agents are the contractor your assistant hires for an afternoon. Your team is the staff on payroll.

**When a team beats one big agent:** when one agent can't credibly hold all the roles — the output goes poorly. Splitting them into a roster keeps each voice sharp.

---

## 🌿 Claude `--worktree` — Two Branches, Two Brains

> **You'll walk away with:** a way to run two Claude sessions on the same repo at the same time, on different branches — so a long refactor doesn't block your quick fix.

### What a worktree actually is

A worktree is a second copy of your project on disk, pointed at a different branch, sharing the same `.git` folder. Two folders. Two branches. One repository — commits in one are visible in the other the moment they land.

### The two-branch workflow

- **Branch 1 (the long one).** A chunky refactor running in the main terminal — 15 minutes in, still going.
- **Branch 2 (the quick one).** Spin up a worktree at `hotfix/login-redirect`. New folder, new terminal. Hand it the one-line fix. Done in minutes. Merge it. The refactor keeps going uninterrupted.

---

## 🔢 The 3-Session Ceiling — Why More Claudes Backfire

> **You'll walk away with:** a hard ceiling on how many Claudes you should run in parallel — and the reason adding a fourth session fragments your attention into four pieces.

The honest ceiling is **three concurrent Claude sessions, max**. Most days the sweet spot is two.

### Why three is the ceiling

Each running Claude needs your attention for two things you can't outsource: (a) a clear, scoped brief at the start, and (b) reviewing the output before accepting it.

- **1 session:** one brief, one review.
- **2 sessions:** one brief each — fine. The productive sweet spot.
- **3 sessions:** you start skimming the briefs. Reviews get sloppier. This is the limit.
- **4+ sessions:** you're approving on vibes. Quality drops. Most sessions are blocked waiting for you anyway.

---

## 🏢 Business-Ops Orchestrator + Child Agents (Via n8n)

> **You'll walk away with:** a working pattern for using Claude as an orchestrator — where n8n catches the trigger and Claude is the worker it dispatches.

### The shape of the org chart

- **n8n** catches the business trigger ("new lead form submitted," "new invoice approved"), formats the data, and calls Claude.
- **Claude** (as an agent) drafts the brief, categorises the invoice, writes the weekly recap, replies to the lead.
- **The output flows back into n8n** — into a Notion node, a Slack message, a Gmail draft.

### What makes this pattern distinct

The key distinction is how you go from "Claude runs when I open a session" to "Claude runs when a **business event** fires."

Use this for: repeating business events that already produce work for you (leads, invoices, recurring emails), and cross-tool work that touches more than just Claude.

---

## 📱 Telegram Approve/Reject — A Phone-Based Supervision Loop

> **You'll walk away with:** a live supervision loop on Telegram — agent works, your phone buzzes, you tap Approve or Reject from anywhere.

The loop: **agent works → bot pings you → you tap Approve or Reject → action fires or aborts.**

### The minimum viable supervision loop

1. Create a Telegram bot (BotFather, 60 seconds, free).
2. Get your chat ID.
3. Ask Claude Code: "Wire up a Telegram approval gate. When my agent finishes a draft, send me a Telegram message with the draft preview and two inline buttons: Approve and Reject. If I tap Approve, save the file to the live folder. If I tap Reject, log it and discard. Show me the code."
4. Test it on one low-stakes output before attaching it to anything real.

---

## 🤖 ClawdBot — A Claude Backbone Running On A VPS

> **You'll walk away with:** a small always-on server so your agents run when you close your laptop.

### What ClawdBot is (plain English)

- **A small VPS.** Hetzner, DigitalOcean — $5–12/month. A Hetzner CX11 is fine.
- **A Claude process running on it.** The Claude Code CLI in headless mode, or a wrapper script that calls the Anthropic API on triggers.
- **A chat front-end on your phone.** Telegram, Slack, or a simple web chat.

### What ClawdBot unlocks

- **Scheduled agents that don't depend on your laptop being open.** Your weekly recap runs at 5pm Friday even if you're on a flight.
- **Webhooks from front-end events.** The event lands on the VPS, Claude handles it, the output lands wherever you told it.

---

## 🔍 The Four Subagent Patterns (Code-Review, Explore, Plan, General)

> **You'll walk away with:** a cheat sheet for 90% of real work — so you stop guessing which shape to give it.

**Pattern 1 — The Code-Review Subagent**
Read a diff cold. Flag bugs, not style. Never rewrite — only report findings. Use before any non-trivial PR goes up.

**Pattern 2 — The Explore Subagent**
Read everything and return a tight answer. Use for "where is X defined," "which files reference Y" — any open-ended search before you start making changes.

**Pattern 3 — The Plan Subagent**
Research and return a structured implementation plan before any code is written. Use when the approach is genuinely uncertain.

**Pattern 4 — The General Sub-Agent**
Catch-all for a self-contained task that would pollute the main session's context. Use when the job is clear but bulky.

---

## 🔄 Routines + Webhooks — Scheduling Without A Cron

> **You'll walk away with:** a clean way to run agents on a schedule (Routines) and trigger them from real-world events (webhooks) — so your stack starts firing without you opening Claude.

### Routines, in plain English

A **Routine** is a scheduled instruction you set once. You set the schedule, you set the prompt, and Claude runs it on Anthropic's own servers on time — no terminal, no machine, no cron job.

**When Routines earn their keep:**
- **Daily drafts.** Weekday morning pull that reads prior day's notes and drafts 3 posts.
- **Weekly recaps.** Every Friday at 4pm, summarise everything from [source] this week.
- **Monday prep.** Every Monday at 7am, check [project tracker], list what's overdue, draft a priority list.

### When Webhooks earn their keep

Routines push on a clock. **Webhooks** pull from events — something happens in the outside world and your agent fires.

**What webhooks unlock that routines can't:**
- Form submission arrives → Claude drafts a personalised reply in 30 seconds
- New GitHub PR opens → Claude runs a code-review subagent and posts a comment
- Stripe payment lands → Claude writes a receipt email and logs the transaction

Combined, Routines handle predictable clock-work. Webhooks handle event-driven responses. Together they're the two rails your automation stack runs on.
