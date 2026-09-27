# PRO LVL 1 — CONTEXT ENGINEERING

## ▶️ Start Here — The Skill Behind Every Pro Result

![PRO LVL 1 — Context Engineering](/images/stage13-overview.png)

There's a reason the same prompt gives one person a clean, working build and another person a confused mess. It's almost never the prompt. It's the **context** — the pile of messages, files, and tool output Claude is carrying while it works. Manage that pile well and Claude stays sharp for hours. Let it bloat and Claude gets slower, pricier, and quietly *dumber* — even though you never changed a word of your prompt.

Anthropic named this discipline in their writeup: *Effective Context Engineering for AI Agents.*

### What you'll walk away with

- Why long chats rot — and the exact moves that stop it
- The CLI-over-MCP rule that can halve your token bill in one decision
- How to break a big job into atomic tasks Claude can't lose the thread on
- A `/context → /clear` discipline you'll run on reflex
- Your own Plan Mode, and how the pros offload work to sub-agents

This is the module that separates people who *use* Claude Code from people who *run* it. None of it is hard — it's a handful of habits. Once they're automatic, every build you do is cheaper, faster, and noticeably smarter.

> This is an advanced module. If you haven't done **Cost Savings & Token Tips** yet, do that first — this one goes deeper on the same muscle.

---

## 🧟 Context Rot — Why Long Chats Get Dumber

![Context Rot](/images/stage13-context-rot.png)

> **You'll walk away with:** a clear mental model of why a Claude session degrades over time — and the one number to watch to catch it before it costs you.

Here's what nobody warns you about: a Claude Code session doesn't fail loudly. It **decays.** Hour one, it's brilliant. Hour three — same model, same you — it starts forgetting decisions, re-reading files it already read, contradicting itself. That slow slide has a name: **context rot.**

Two bad things happen at once. It gets **more expensive** (Claude re-reads the whole pile every turn) and it gets **less accurate** (the signal you care about gets buried under noise).

And here's the kicker: research found that model quality **degrades as you pile on input tokens** — not gently or evenly, but in surprising, non-uniform ways — regardless of how big the advertised window is. A million-token window doesn't save you. A bloated one still rots.

### The tell

Watch your **context percentage** — Claude Code shows it in the status bar near the input. Treat it like a fuel gauge:

- **Under ~50%** — sharp. Build freely.
- **~50–70%** — getting heavy. Compact or wrap the task.
- **Past ~85%** — danger zone. Auto-compact may kick in, but quality already slipped. Don't start important work up here.

Every technique in this module — atomic tasks, `/clear` discipline, sub-agents, the CLI rule — is a different weapon against the same enemy: keep the working pile small and high-signal so Claude never rots. Once you see context rot, you can't un-see it.

> **Desktop app:** No context bar, so use a behavioral tell — the moment Claude repeats itself, forgets a decision, or "re-discovers" a file, that's rot. Start a fresh chat.

> **CLI (terminal):** Watch the status-bar percentage. Run `/context` any time to see exactly what's eating the window.

> **Done when:** you can explain, in one sentence, why a 3-hour chat gives worse answers than a fresh one — and you know the % threshold where you'll act.

---

## 🧱 Context Isolation — One Job Per Window

![Context Isolation](/images/stage13-isolation.png)

> **You'll walk away with:** the core principle the pros build everything on — isolating each job in its own clean context so unrelated work never poisons the result.

If context rot is the disease, **context isolation** is the cure. The principle is one line: **give each distinct job its own clean context, and never let one job's clutter leak into another.**

Picture a sprawling chat where you built a landing page, then fixed an API bug, then wrote copy, then tweaked CSS — all in one window. The relevant signal is 10% of the window; the other 90% is poison. The result feels "off" and nobody can say why.

A pro isolates. Landing page? One context. API bug? Fresh context. Copy? Fresh again. Each window holds only what that job needs — so Claude's full attention budget points at the actual problem.

### The three ways to isolate

- **`/clear` between tasks** — the manual reset. New job, new window.
- **Sub-agents** — spin a heavy side-quest (research, a big file scan) into its own window so it never touches your main one. Only the clean answer comes back. (Dedicated lesson below.)
- **Scaffolding frameworks** — tools like GSD take this to the limit: they break a project into atomic tasks and run each in a *fresh* context, explicitly to "combat context rot." That's isolation as an architecture.

The mental shift: stop thinking of "my Claude chat" as one long river you pour everything into. Start thinking **one window = one job.** That single reframe is most of context engineering.

> **Desktop app:** Open a separate chat per real task. Resist keeping one "main" chat for the whole day — that's the river, and it always silts up.

> **CLI (terminal):** `/clear` between jobs; reach for sub-agents when a side-quest would otherwise dump junk into your main window.

> **Done when:** you've named the last time a single mega-chat gave you a worse answer — and you can describe how isolating that job would have fixed it.

---

## ⚙️ The CLI-Over-MCP Rule — Free Up Half Your Window

![CLI Over MCP](/images/stage13-cli-over-mcp.png)

> **You'll walk away with:** the single highest-leverage token decision in this module — when to drop a heavyweight MCP server for a CLI, and reclaim the context it was silently eating.

This one lesson can move your token bill more than any prompt trick. MCP servers are wonderful — but here's the hidden cost: **every connected MCP loads its full tool list into your context window on every session**, even for tools you might touch once.

The fix is a rule: **anytime you can move from an MCP to a CLI, do it.** A CLI tool lives in the terminal exactly like Claude Code does. It loads *nothing* into your context up front. Claude runs the command only when it actually needs to, and only the result comes back. Less overhead, fewer tokens, often *more* functionality.

### When to apply the rule

- **Web scraping** — Firecrawl ships both an MCP and a CLI. The CLI keeps your window lean and returns LLM-ready data.
- **Browser automation** — the Playwright CLI does everything the MCP does at far lower token cost.
- **Heavy MCPs you rarely use** — disconnect them. A tool you touch once a week shouldn't tax every session all week.

**The pro move: Skills as the instruction manual**

Instead of loading a giant MCP's tools into your system prompt forever, wrap it in a *Skill* — a small markdown instruction file Claude reads *on demand*. Load knowledge **when needed, not always.**

**The decision, in one breath:** Before you add an MCP, ask: *Is there a CLI for this?* If yes — use the CLI. If you must use an MCP, ask: *Do I use it every session?* If no — disconnect it until you do.

> **CLI (terminal):** `claude mcp list` shows what's connected and taxing you. Prune anything you're not actively using; reach for CLI tools and Skills first.

> **Done when:** you've listed your connected MCPs, identified at least one you could replace with a CLI or disconnect, and you can state the rule from memory.

**Prompt:**

> For each MCP I have connected, tell me: roughly how much context overhead it adds, whether a CLI alternative exists, and how often I'd actually use it. Then give me a 3-line verdict — which to keep, which to swap for a CLI, which to disconnect — and the exact commands to do it.

---

## 🔬 Atomic Tasks — Decompose So Claude Can't Drift

![Atomic Tasks](/images/stage13-atomic-tasks.png)

> **You'll walk away with:** the decomposition habit behind every reliable agentic framework — breaking a big job into atomic tasks Claude finishes each one before context can rot.

Hand Claude one giant request — "build me the whole app" — and watch what happens: it sprawls across dozens of files, the window fills, context rots mid-build, and by the end it's losing the thread.

The fix is the move every pro framework shares: **decompose the big thing into atomic tasks.** An atomic task is the smallest unit of work that produces a verifiable result — "add the login form," not "do authentication." Small task + fresh context = reliable output.

### How to decompose

1. **Spec first.** Before any code, have Claude write a short plan listing the atomic tasks in order. (That's all a PRD is — a task list with context.)
2. **One task per stretch.** Execute a single task, verify it works, then move on.
3. **Reset between the big ones.** After a chunky task lands, `/clear` (or `/compact`) before the next — so each starts clean instead of inheriting the last one's clutter.
4. **Persist the plan to a file.** Keep the list in `PLAN.md` so a fresh session can pick up exactly where you left off. The plan survives the reset.

Stop asking Claude to hold the *entire* project in its head at once. Give it one well-defined task. Bricks are reliable. Cathedrals-in-one-prompt are not.

> **Done when:** you've taken one real project, broken it into a numbered list of atomic tasks in a PLAN.md, and run at least the first one in its own clean context.

**Prompts:**

> Be my decomposition partner. I'll describe a project I want to build. Don't write any code. Instead, break it into atomic tasks — each one the smallest unit that produces a verifiable result — ordered so each builds on the last. For each task give me: a one-line action, the @files it touches, and a 'done:' check.

> Look at this task: [paste]. Is it atomic, or is it actually 3–4 jobs hiding in a trenchcoat? If it's already atomic, say so and tell me what 'done' looks like.

---

## 🔍 The /context → /clear Discipline

![/context → /clear Discipline](/images/stage13-clear-discipline.png)

> **You'll walk away with:** a two-command reflex that lets you SEE what's filling your window, then surgically reset it — so you stop flying blind on the thing that controls your quality.

Most people manage context by vibes — they keep going until it "feels slow," which means they've already paid the rot tax before they react. The pros don't guess. They **look.** Claude shows you the system prompt, loaded MCP tools, files you've read, message history — all of it, with token counts. The abstract "my chat feels heavy" becomes concrete: "Oh — that one MCP is eating 30K, and I've loaded huge files I haven't touched in an hour." Now you can act with precision instead of nuking everything.

### The discipline, as a loop

1. **Feel a slowdown?** Don't push through — run `/context`.
2. **Read the breakdown.** What's the biggest line? A fat MCP? A huge file? A sprawling history?
3. **Act on it.** History bloated and task done → `/clear`. Mid-task but heavy → `/compact` with a goal. Heavy MCP you don't need → disconnect it.
4. **Re-check.** Run `/context` again to confirm the window's actually lean.

**`/clear` vs `/compact` — the quick rule**

- **New task** → `/clear` (full reset — cheapest, cleanest move there is).
- **Same task, just long** → `/compact` (squeeze the history to its essentials and keep going).

The mistake is grinding through a 90%-full window hoping it improves. It won't. `/context` tells you which move you need — you just have to look before you act.

> **Desktop app:** No `/context` command — use the behavioral tell (repeats itself, forgets decisions) as your trigger, and start a fresh chat to "clear."

> **CLI (terminal):** Use `/context` to inspect, `/clear` to reset between tasks, `/compact` to squeeze a long one.

> **Done when:** you've run `/context` on a real session, identified the single biggest consumer of your window, and cleared or compacted based on what you saw — not on a guess.

**Prompt:**

> I just ran /context — output pasted below. Read it like a coach: tell me in 3 lines what's eating the window the most, whether that's normal or a leak, and the one move to make right now (`/clear`, `/compact`, or disconnect a named MCP). No essay.

---

## 🗺️ Build Your Own Plan Mode

![Build Your Own Plan Mode](/images/stage13-plan-mode.png)

> **You'll walk away with:** a reusable planning ritual that front-loads thinking into a cheap, isolated step — so execution starts from a dense, pre-thought brief instead of a vague kickoff.

Claude Code's built-in Plan Mode (Shift+Tab) is great. But the pros run a richer version as a deliberate ritual — because planning is the highest-leverage place to spend context.

The principle is **plan and execute in separate contexts.** Thinking and doing are different jobs with different needs. Planning wants room to explore, ask questions, weigh options. Execution wants a tight, settled brief and a clean window. Smush them together and each makes the other worse.

### Your Plan Mode, step by step

1. **Plan in isolation.** Use plan mode (Shift+Tab), or do the thinking in a separate Claude.ai browser tab where iterating is free. Either way, planning happens *away* from your execution window.
2. **Make Claude interrogate you.** A good plan starts with questions, not answers. Tell it: "Ask me one question at a time until you can write a plan a junior could follow."
3. **Demand a tight artifact.** The output is a plan — a one-paragraph goal, numbered atomic tasks with `@file` references, an open-questions block. Cap it at 400 words.
4. **Save it to `PLAN.md`.** Now the plan is a durable artifact, not a chat that vanishes.
5. **Execute from a fresh window.** `/clear`, then: "Read @PLAN.md and execute task 1. Stop for my approval before task 2."

That's the loop: **isolate the thinking → produce a dense brief → hand it to a clean executor.**

> **Desktop app:** Use a Claude.ai browser tab as your plan room (free to iterate), then paste the finished plan into a fresh chat to execute.

> **CLI (terminal):** Shift+Tab for built-in plan mode, or plan in the browser → save `PLAN.md` → `/clear` → execute task by task with approval gates.

> **Done when:** you've run a real task through your own plan ritual: a PLAN.md produced in an isolated context, then executed task-by-task from a fresh window.

**Prompt:**

> Ask me one question at a time about what I'm building, what already exists, and what 'done' means, until you could write a plan a junior dev could follow. Then output a PLAN.md: one-paragraph goal, a numbered list of atomic tasks (each with the `@files` it touches and its 'done:' check), and a 3-item open-questions block. Cap it at 400 words. End with the exact one-line prompt I should paste into a fresh session to start executing task 1.

---

## 🏷️ Structured Planning — Tag Your Docs So Claude Can Parse Them

![Structured Planning](/images/stage13-structured-planning.png)

> **You'll walk away with:** a formatting habit that makes your plans and context files dramatically easier for Claude to parse — using explicit structure and tags instead of a wall of prose.

Two plans with the exact same information can perform very differently — purely based on how they're structured. Claude doesn't read your plan like a human skimming for gist; it parses it. Structure removes ambiguity, and removed ambiguity is reclaimed attention budget.

Anthropic's context-engineering guidance leans on this: **structured note-taking** and clearly organized context are core techniques for keeping agents on track over long tasks. When you write a plan, a spec, or a `CLAUDE.md`, **give it bones.** Explicit sections. Labeled blocks. A predictable shape Claude can lock onto.

### Prose vs. structure — the same plan, two performances

A wall of prose ("First we should probably set up the database and then maybe do the auth, and the homepage needs a hero, oh and don't forget...") forces Claude to *infer* the boundaries between ideas. A structured doc hands them over:

```
## GOAL
A working lead-capture page.

## TASKS
1. <task id="db">Set up the leads table — @schema.sql — done: row inserts</task>
2. <task id="form">Build the capture form — @form.tsx — done: submits to db</task>

## OPEN QUESTIONS
- Which email provider for the confirmation?
```

Claude reads that hierarchy directly — goal vs. task vs. question — instead of reconstructing it from punctuation. HTML-style tags, tight markdown headers, or a bulleted list all win the same way.

> Structure isn't more words — it's clearer ones. A tagged 200-word plan beats a rambling 600-word one on both cost and accuracy.

**Prompt:**

> Take the plan I'm about to paste and restructure it for a machine reader, not a human skimmer. Output explicit sections (## GOAL / ## TASKS / ## OPEN QUESTIONS), wrap each task in a lightweight tag with an id, the `@files` it touches, and a 'done:' check. Cut every word that isn't a fact, a file, or a decision. Don't add information — just impose structure on what's there.

---

## 🛰️ Sub-Agent Offloading — Outsource The Heavy Reading

![Sub-Agent Offloading](/images/stage13-sub-agent.png)

> **You'll walk away with:** the pro move for big research and big scans — spinning the heavy work into a sub-agent's own context so only the clean conclusion ever touches your main window.

Here's the trap that rots more windows than anything else: a task that requires reading a *ton* to produce a little. "Search the codebase and tell me where auth is handled." "Read these 12 files and summarize the patterns." You need a small answer. Getting it costs a huge read. If that read happens in your main window, your window is cooked for the rest of the session.

Sub-agents are the fix. A sub-agent is a separate Claude instance with its **own context window**. You hand it the messy job; it does all the heavy reading in *its* window; only the **clean, distilled result** comes back to yours. The haystack stays over there. Your main window stays lean.

### When to reach for it

- **Research & exploration** — "find where X lives," "summarize how this system works." Tons of reading, small answer. Perfect.
- **Big file scans** — auditing many files for one thing. The sub-agent wades through; you get the report.
- **Parallel side-quests** — a chunk of work that would otherwise derail your main thread. Offload it, keep building.

**The cost caveat:** Sub-agents aren't free — the round-trip costs several times what an inline answer would. The rule: **offload jobs where the reading dwarfs the answer.** That's where the math wins big.

> **CLI (terminal):** Trigger one in plain English — "Use a sub-agent to find every place we handle payments and report back just the file list and a one-line summary of each."

> **Done when:** you've run a real research or scan task through a sub-agent, confirmed your main window stayed lean afterward (check with `/context`), and can name a job where offloading clearly beat doing it inline.

**Prompts:**

> Use a sub-agent for this so it doesn't pollute our main context: explore the codebase and find every place [X] is handled. The sub-agent should do all the file reading in its own window and return ONLY a clean report — a numbered list of the relevant files with a one-line summary of each, plus the single best entry point to start from. Don't dump raw file contents into our chat.

> Decide for me: should this be a sub-agent or an inline ask? Here's the task: [paste]. Judge it by one test — does the reading required dwarf the answer I'll get back? If yes, give me the exact sub-agent prompt to fire. If no, just answer it inline. One-line verdict first.

---

## 🎯 Mission — Run a Real Build on Pure Context Discipline

![Mission — Context Discipline](/images/stage13-mission.png)

> **You'll walk away with:** a non-trivial build you finished the way a pro does — planned, decomposed, isolated, inspected — with your context window deliberately managed start to finish.

Time to put the whole module together on one real task. Take something non-trivial — a multi-step build you actually want (a small landing page, a working automation, a script with multiple phases).

### The run

1. **Plan in isolation.** Use your Plan Mode ritual (Shift+Tab or a browser tab). Make Claude interrogate you, then produce a structured `PLAN.md` — explicit sections, atomic tasks with `@file` refs and 'done:' checks.
2. **Check your starting window.** Run `/context` before you build. Note the number. If a fat MCP you won't use is eating it, disconnect it first.
3. **Execute atomically.** One atomic task at a time. After each heavy one, `/clear` or `/compact` so the next starts clean.
4. **Offload one heavy read.** Somewhere in the build, use a **sub-agent** for a research or scan step — so the heavy reading never lands in your main window.
5. **Check your ending window.** Run `/context` again. A disciplined run finishes lean — not pinned at 90%.

### What "done" looks like

The build works — that's the point. And it got there on a managed window: you planned in isolation, ran atomic tasks with resets between the heavy ones, offloaded one heavy read to a sub-agent, and your ending `/context` is still lean instead of pinned at 90%. That's running Claude Code like an operator, not just typing into it.

The win isn't a flashy artifact — it's that the build shipped *and* your window stayed flat the whole way. That's the discipline most people never learn.

**Prompt:**

> Be my context-discipline coach for this build: [describe what you want to build]. Step 1: interrogate me one question at a time, then write a structured PLAN.md (## GOAL / ## TASKS with @files and done-checks / ## OPEN QUESTIONS) breaking it into atomic tasks. Flag which task is heavy enough to offload to a sub-agent. Then stop and wait — we'll execute task by task, and you'll remind me to /clear between the heavy ones. Don't write any build code until I approve the plan.
