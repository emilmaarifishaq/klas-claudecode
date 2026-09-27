# STAGE 12 — COST SAVINGS & TOKEN TIPS

## ▶️ Start Here — Make Claude Cheap, Fast & Sharp

![Stage 12 — Cost Savings & Token Tips](/images/stage12-overview.png)

Here's the quiet truth nobody tells beginners: most people running Claude Code are **burning money and dumbing it down at the same time** — and they have no idea it's happening. They let one chat run for hours, stuff it with junk it'll never use, and reach for the biggest, slowest model to rename a file. Then they wonder why it feels expensive and why the answers got worse halfway through.

This module fixes all of that. None of it is technical. It's a handful of habits that, once they're automatic, make every single thing you've learned so far **cheaper to run, faster to finish, and noticeably smarter.**

## What you'll walk away with

- A "think before you spend" habit (get the plan first, then execute)
- A simple rule for which model to use — and how to switch in one move
- A clean-context routine so Claude stays sharp instead of getting foggy
- A way to actually *see* what you're spending, and a cap so it can't surprise you

---

## 📋 Plan Mode — Think Before You Spend

![Plan Mode](/images/stage12-plan-mode.png)

> **You'll walk away with:** the single habit that stops Claude charging off and building the wrong thing — get the plan first, approve it, then let it run.

The most expensive mistake in Claude Code isn't a big model — it's letting Claude **build the wrong thing fast.** It charges ahead, creates ten files, and you realize three minutes in it misunderstood you. Now you're paying again to undo it.

**Plan Mode** is the fix. You ask for the plan *before* any work happens. Claude lays out exactly what it intends to do, you read it in five seconds, and you only say "go" once it's right. You catch the misunderstanding while it's free — not after it's built.

> 🖥️ **If you're using the Claude desktop app:** Before a real task, just say it plainly: *"Plan this first — don't build anything yet. Show me the steps you'll take and wait for my OK."* Read the plan, fix anything wrong, then approve.

---

## 🪜 The Model Ladder — Right Brain For The Job

![The Model Ladder](/images/stage12-model-ladder.png)

> **You'll walk away with:** a dead-simple rule for picking Haiku vs Sonnet vs Opus — so you stop paying Opus prices for Haiku work.

Claude isn't one model — it's a ladder, from light and cheap to heavy and powerful. Using the top of the ladder for everything is like taking a freight truck to buy milk. Slower, pricier, pointless.

## The ladder, in plain English

- **Haiku** — the fast, cheap one. Quick edits, renaming, simple questions, "summarize this." Most small jobs.
- **Sonnet** — the balanced workhorse. Your default for real building — sites, pages, most of this course. Smart enough, fast enough, fair price.
- **Opus** — the heavy thinker. Save it for genuinely hard problems: tangled bugs, big architecture calls, deep planning. Powerful, slowest, priciest.

The rule: **start one rung lower than you think you need.** If Sonnet handles it, you never needed Opus. You can always step up mid-session.

---

## 🧹 /compact & Context Hygiene — Keep It Sharp

![/compact & Context Hygiene](/images/stage12-compact.png)

> **You'll walk away with:** a clean-context routine so Claude stays sharp and cheap instead of slow, foggy, and expensive.

Everything in your chat — every message, every file Claude read — sits in its **context window**, the working memory it carries. Two things happen as that fills up: it gets **more expensive** (more to carry every turn) and it gets **dumber** (the important stuff gets buried under noise). A four-hour chat where you've jumped across three projects is the worst of both.

## Two cleanup moves

- **/clear** — wipe the slate. New, unrelated task? Don't pile it on the old chat. Clear and start fresh. Cheapest, cleanest, most underused move there is.
- **/compact** — squeeze, don't dump. Mid-task and the chat's gotten long, but you still need the gist? Compact summarizes the conversation down to its essentials and keeps going — you lose the bloat, not the thread.

---

## 💵 Watch Your Spend — See It, Cap It

> **You'll walk away with:** the ability to actually see what you're spending and a cap so a runaway session can never surprise you.

You can't manage what you can't see. Most people never look at their usage until a bill makes them flinch. Two minutes of setup and that never happens to you.

## See what's happening

> 🖥️ **If you're using the Claude desktop app:** Open your account at **claude.com** → **Settings → Usage / Billing**. You'll see your plan and what you've used. Glance at it weekly, not never.

> ⌨️ **If you're using CLI (terminal):** Type `/cost` in a session to see what the current session has run up. Quick gut-check any time a task feels heavy.

## What actually costs you

The number isn't random — it tracks roughly with **how much Claude has to read and write**. The big drivers, in order:
- **A bloated context** — a long chat or huge files dragged in.
- **The wrong model** — Opus for a job Sonnet could handle.
- **Vague prompts that loop** — three rounds of "make it better" instead of one surgical ask.

---

## ⚡ Speed Without Waste — The Everyday Habits

> **You'll walk away with:** a short, automatic checklist that cuts cost and waiting on every task you run from now on.

Cheap and fast aren't a setting you flip once — they're a handful of moves that become reflex. Here's the whole reflex, and it stacks everything from this module:

## Run this, every task

- **One task, one chat.** Switching topics? `/clear` first. Don't make Claude carry old baggage into new work.
- **Plan first when it's non-trivial.** Ten seconds of planning beats a round of cleanup. Cheap *and* faster overall.
- **Start a rung lower on the ladder.** Default to Sonnet; only climb to Opus when the work earns it.
- **Be specific.** "Make the hero bigger and the CTA navy" gets it in one pass. "Make it better" gets three vague rounds. Surgical prompts are a cost lever too.
- **Point at the file, don't paste the world.** Tell Claude *which* file to read instead of dumping everything in.

---

## 🧊 Ultraplan: Plan In Browser, Execute In Terminal

![Ultraplan](/images/stage12-ultraplan.png)

> **You'll walk away with:** a two-window workflow where Claude.ai does the thinking for free (or flat-fee) and Claude Code does the building — so your sharpest plans cost you the least tokens.

Most builders pay twice for the same idea. They open a fresh CLI session, dump the whole problem in, watch Claude burn context thinking *and* coding at once, and then re-explain it tomorrow when the chat is gone. The fix is one of those moves where, once you see it, you can't un-see it: **plan in the browser, execute in the terminal.**

The browser side of Claude (claude.ai) is built for thinking. You can paste links, drop screenshots, attach PDFs, talk it through with no clock ticking against a per-request token meter, and — because it's on a flat-rate plan — you can rewrite the plan ten times for free. The terminal side of Claude Code is built for doing. It can edit files, run commands, and ship.

---

## 🎚️ The 60/Clear Rhythm — When To /compact, When To /clear

> **You'll walk away with:** a one-rule habit that tells you exactly when to squeeze the chat and when to start fresh — so context never silently kills your quality.

Here's the rhythm, and it's deliberately small enough to memorize: `/compact` at 60. `/clear` between.

## The two rules

**Rule 1 — Squeeze mid-task at 60%.** The moment your live conversation crosses ~60% of context (Claude Code shows this in the status bar), run `/compact` *while you're still in the same task.* Don't wait for it to feel sluggish.

**Rule 2 — Clear between tasks.** Every time you genuinely switch to a new, unrelated job — different feature, different project, different topic — `/clear` first. Don't carry the old task into the new one.

---

## 📈 Token Math In Plain English — Three Counters, One Bill

> **You'll walk away with:** a beginner-proof model of what 'tokens' actually are — split into three counters — so the line item on your bill stops being a mystery.

A token is just a chunk of text — usually 3-to-4 characters, often a piece of a word. Everything you and Claude exchange gets broken into tokens behind the scenes. You're billed on three separate counters:

## The three counters

**1. Input tokens — what Claude reads on this turn.** Your message, plus every file it pulls in, plus every previous message in the chat. This is why long chats and big files cost so much — they re-read every turn.

**2. Output tokens — what Claude writes back.** Every word in its reply. Long explanations cost more than short ones. "Do X" gets a shorter answer than "Explain everything about X."

**3. Cache tokens** — a discount on repeated input. If Claude reads the same file ten times in a session, Anthropic only charges full price on the first read. Subsequent reads are cheaper.

---

## 🪜 /model opus-plan — The 'Plan Hard, Execute Cheap' Pattern

> **You'll walk away with:** a one-command pattern that uses Opus for the thinking and a cheaper model for the typing — without you remembering to switch back.

The pattern is called **opus-plan**. The idea: when you trigger plan mode, Claude Code uses **Opus** — the heavy thinker — to draft the plan. Once you approve it, execution drops to **Sonnet** for the actual edits. You get Opus-grade thinking on the part of the task that benefits from it (the plan, the architectural call, the risk-spot) and Sonnet-grade execution on the part that's mostly typing (the file edits, the tests, the cleanup).

---

## 📦 Pay Once, Ask Thrice — Subagent Cost & The Batch Move

![Subagent Cost & Batch](/images/stage12-subagent-batch.png)

> **You'll walk away with:** two cost moves from the same idea: subagents are 7× pricier per token *and* batching three asks into one message can wipe that out — so you know when to spend it and when to fold it.

Subagents are the most powerful (and most-overspent-on) feature in Claude Code. The numbers behind them are blunt, and you should know them before you build agent teams.

## Truth #1 — Subagents cost roughly 7× per task

A subagent doesn't just run your task; it spins up its own context, reads its own files, has its own reasoning chain, returns a result, and that result gets re-read into your main chat. That round-trip costs around seven times what handling the same job inline would.

## Truth #2 — Batching three asks into one cuts cost dramatically

Instead of three separate messages ("do A", then "do B", then "do C"), send one: "Do A, then B, then C." One input read instead of three. Claude handles the sequence in a single turn.

---

## 🐉 The Triad Workflow — Plan / Execute / Critique

![The Triad Workflow](/images/stage12-triad-workflow.png)

> **You'll walk away with:** a three-seat workflow where one model plans, one model builds, and one model adversarially reviews — so you get a second-opinion gate without leaving the terminal.

Solo-model workflows have a blind spot: the same model that wrote the code is the one grading it. The Triad fixes that by splitting the work across three seats — **Plan · Execute · Critique** — and putting a *different* brain in each seat.

**Seat 1 — Plan (Claude, on Opus or opus-plan).** Reads the goal, names the files, sketches the diff, surfaces the open questions.

**Seat 2 — Execute (Claude, on Sonnet).** Runs the plan. Writes the code. Reports back.

**Seat 3 — Critique (Codex or Gemini).** Reviews the output adversarially. Looks for what Claude missed.

---

## 🔍 /context Audit + The Bloated-CLAUDE.md Diet

![/context Audit](/images/stage12-context-audit.png)

> **You'll walk away with:** a quarterly ritual where you run `/context`, see exactly what's eating your tokens, and put your CLAUDE.md on a diet — so the file that loads every session stops dragging.

`CLAUDE.md` is the file Claude Code reads at the start of every session. Over weeks, members keep *adding* lines to it and never *removing* any. By month six, the file is 2,000 words and the model is silently ignoring half of it because it's too long to weight properly.

The fix is two moves: an **audit** (see what's actually in your context) and a **diet** (cut what shouldn't be).

## Move 1 — Run /context

Claude Code has a built-in command — `/context` — that lists exactly what's loaded into the current session: which files, how many tokens each one costs, and what percentage of your context window is already gone before you've typed a word.

---

## 🦙 Local Claude Code — Run It Offline With Ollama

![Local Claude With Ollama](/images/stage12-local-claude.png)

> **You'll walk away with:** a working setup where Claude Code talks to a local open-source model on your laptop — so prototyping, learning loops, and sensitive work all happen offline at zero per-token cost.

Cloud Claude is the right tool 90% of the time. But there's a 10% where you genuinely want a **local model** — sensitive client data that can't leave the machine, late-night experimentation where you don't want a meter running, or a learning loop where you're running the same prompt 200 times and the API bill would be silly.

**Ollama** — a one-command tool that downloads and runs open-source models (Llama, Gemma, Mistral, Qwen, and more) on your hardware. **LiteLLM** — translates between Claude Code's API shape and the local model's API shape.

---

## 🧪 Prompt Evals as a Daily Discipline

![Prompt Evals](/images/stage12-prompt-evals.png)

> **You'll walk away with:** a tiny 10-prompt test set you run on yourself every time you touch a prompt — so 'I think it got better' turns into 'I can prove it got better,' and silent regressions stop slipping past you.

Most members tune a prompt the way most people taste soup: a sip, a shrug, "yeah it's better." Then a model upgrade ships, the prompt quietly degrades, and three weeks later you're wondering why your launch posts feel flat.

**A prompt eval set** is ten typical asks for your work, written once, re-run in five minutes, every time you change the prompt or every time the model behind it changes. You're not measuring "does this feel better" — you're measuring "did the actual output change, and which direction."

---

## 🎯 Homework

![Stage 12 Homework](/images/stage12-homework.png)

Don't move on until you've actually run these on a real task — habits form from reps, not reading.

- Trigger **plan mode** on one real task, read the plan, and approve it before any building.
- Do one small job on a **cheaper model** and one harder job on a stronger one — feel the answer get sharper.
- Run one full task using the whole **Speed Without Waste** reflex (clear → plan → right model → surgical prompt).

> **✅ Done when:** you have used plan mode, switched models on purpose, compacted or cleared a session, and you can see your spend with a cap in place.

---

## ✅ Summary

![Stage 12 Summary](/images/stage12-summary.png)

You just learned the thing that separates people who *use* Claude from people who **run it like an operator.** Most builders burn money and dull their results without ever knowing why — too-long chats, the wrong model for the job, no idea what they're spending. You now own the dial.

You learned to plan before you spend so Claude never builds the wrong thing twice, to match the model to the job instead of paying Opus prices for Haiku work, to keep your context clean so Claude stays sharp and cheap, to actually see your spend and cap it, and the everyday reflex that ties it all together. None of it shrinks what you can build — it shrinks the waste, so the same effort goes much further.

**The skill was never about spending less for its own sake. It's that cheap, fast, and sharp compound — every project after this is easier to run because of these habits.**

**You can now:**
- Get the plan first and approve it before any work happens
- Pick the right model rung — and switch in one move
- Keep context clean with /clear, /compact, and CLAUDE.md
- See your spend, understand what drives it, and cap it
- Run every task on a cheap-fast-sharp reflex

---

## ✍️ Your Mission

![Stage 12 Mission](/images/stage12-mission.png)

Post in the community titled **"Cut My Costs"**: name the **one habit from this module that surprised you most** — the model ladder, plan mode, context hygiene, or seeing your spend — and one concrete way you'll change how you run Claude from now on. Bonus points for a before/after `/cost` screenshot or a "I was using Opus for everything" confession. The honest posts help everyone. Tag **Duncan** if you want a look at your setup and a recommendation on where you're leaking the most.

---

## 🤝 Get Involved

Everyone has a "I was burning money and didn't know it" story — share yours, because someone two steps behind is making the exact same mistake right now and your post saves them. Drop your favorite cost or speed habit in the feed, then go find one person stuck on "Claude feels expensive / got worse" and hand them the one fix that helped you most. Teaching the dial is how it becomes second nature for you, too.

---
