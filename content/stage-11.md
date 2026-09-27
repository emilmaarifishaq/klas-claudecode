# 🔬 MICRO-LESSONS

## ▶️ Micro-Lessons — How To Use These

These aren't a phase. They're the **one-line truths** that took other people months to learn the hard way. No order, no homework — skim them, steal the one you need today, come back when you're stuck.

Each one is a single rule that, on its own, saves you real time or real money. Don't try to install all 12 at once — that's how nothing sticks. Pick the one that matches the pain you felt yesterday, make it muscle memory in a week, then come back for the next one.

The members who get fast at this aren't smarter — they just internalized two or three of these earlier than everyone else. Steal that head start. If you bookmark this page and only read it again when something annoys you, you've already won.

---

## 🧠 The 2-Line CLAUDE.md That Pays For Itself

> **You'll walk away with:** a project file that cuts repeat-prompting and re-explaining in half — forever.

Drop a **CLAUDE.md** in the root of your project. Two lines, today:

```
- This project uses [your stack]. Always edit existing files, never rewrite from scratch.
- Before shipping any change, run [your build command] and fix anything that breaks.
```

That's it. Claude reads it every session and stops asking you basic questions, stops 'starting over,' and stops shipping code that doesn't build. The instructions stay in force across every prompt, every day, every session — without you re-typing them.

The compounding move: every time you catch yourself repeating an instruction to Claude — "use Tailwind, not inline styles," "don't add comments unless I ask," "the database is Postgres on Supabase" — stop, and **add the line to CLAUDE.md instead of explaining it again.**

Within a week your CLAUDE.md is the difference between a co-worker who's been here a year and one who started yesterday — same model, same prompts, completely different output. It's the single highest-leverage 60 seconds in this whole course.

Rule: if you've said it twice, write it down once. Never say it a third time. That's the whole system.

---

## 🧹 /clear Between Unrelated Tasks

> **You'll walk away with:** faster, sharper Claude and a noticeably smaller bill — for free.

When you switch tasks — fixing a bug, then writing copy, then deploying, then doing a logo — hit **/clear before each one.** Don't keep one giant rolling chat for everything you do all day.

Why it matters: every message you send re-reads the entire conversation behind it. A 2-hour chat full of unrelated work is slower, more expensive, and dumber — because Claude is trying to reconcile the bug fix with the copy edit with the deploy and the logo brief, all at once. Clean slate per task = sharper answers, less context confusion, lower spend, faster replies.

There's a real number behind this. By the time a chat hits ~50k tokens of unrelated history, you're paying 5–10x more per response than you would in a fresh chat, and the response quality drops — because the model is distracted by stale context. Most people never realize this is happening.

Rule of thumb: **one task = one chat.** Done with the task? /clear. Switching domains (frontend → backend, build → marketing)? /clear. The only chats worth keeping long are the ones genuinely about the same continuous thing — building one feature end-to-end.

One more nuance: don't /clear in the middle of a working session on the same feature. Context is useful when it's all about one thing. The rule is about unrelated tasks crowding each other out — not about resetting your brain mid-flow.

> If you only adopt one habit from this entire list, make it this one. It costs nothing, takes one keystroke, and changes everything.

---

## ↩️ The Git Checkpoint Habit

> **You'll walk away with:** the calm of knowing every Claude session is reversible — no panic, ever.

Before you let Claude touch the code, run **one command:**

```
git add -A && git commit -m "checkpoint"
```

That's your save point. If the next 20 minutes go sideways — wrong file edited, half a feature deleted, "improvements" that broke everything, a refactor that wandered off — you reverse it instantly:

```
git reset --hard HEAD
```

You are back to clean. No panic, no rebuilding from memory, no trying to remember which 14 lines Claude changed. The people who feel 'in control' of Claude aren't smarter prompters — they just **checkpoint before any risky work.**

Do it before any refactor. Do it before any prompt that touches more than one file. Do it before any prompt that starts with "rewrite" or "redesign." The 3 seconds it costs you up front is the single best insurance in coding.

> Muscle memory: checkpoint → prompt → review → keep (or reset). Reversibility is a superpower disguised as a habit.

---

## 🩺 The 1-Prompt Audit That Catches Half Your Bugs

> **You'll walk away with:** a free pre-ship review that finds the obvious stuff you'd be embarrassed to deploy.

Before you push anything live, paste this exact line:

> *"Review the changes in this session as if you're a senior engineer doing a code review. List bugs, edge cases, security issues, and anything I should test before shipping. Be blunt. Don't sugarcoat."*

That's it. You get a second opinion from someone who saw every line they wrote. It catches: forgotten error handling, broken edge cases ('what if the input is empty?'), exposed API keys, dead code, 'works locally but dies in production' gotchas, missing input validation, race conditions, and the dozens of small things that read fine but explode under real users.

Roughly half the bugs you'd ship without this audit get caught here. Not theoretical bugs — the boring real ones that embarrass you on launch day.

Bonus move: when it lists 5 issues, **don't fix them yourself.** Just reply "fix items 1, 3, and 4 — leave 2 and 5 for now." Two prompts, ten minutes, and you ship something a real engineer would nod at instead of wince at.

Pro version: add the line to your CLAUDE.md as a rule — "before any deploy, run a senior-engineer code review pass on the session's changes and list issues bluntly." Now Claude offers the audit unprompted, every time you near a ship. The habit becomes invisible.

> The pros do this every single time. It costs you nothing and it's the difference between "I built a thing" and "I built a thing that doesn't break."

---

## 💬 Describe The Bug Like A Stranger Found It

> **You'll walk away with:** the prompt template that turns 'it's broken' into a 30-second fix.

Bad bug report: *"it's not working"* — Claude has no idea where to look and burns 5 prompts guessing.

Good bug report — fill in all four lines:

```
What I did: [the exact click/command/input]
What I expected: [the result I wanted to see]
What actually happened: [what I saw — error text, blank screen, wrong number, frozen page...]
What I've already tried: [so we don't loop on dead ends]
```

Pretend you're explaining it to a stranger who has never seen this project. That mindset alone forces you to include the file name, the exact error message, the browser console output, and the screenshot — exactly the things Claude needs to fix it on the first try instead of the fourth.

The magic part: **half the time, just writing this out makes you spot the bug yourself before you even send it.** You'll be filling in 'what I expected' and realize you typed the URL wrong, or 'what I tried' and realize you never actually saved the file. That's not a bug in the method — that's the method working as designed. Forced clarity beats clever prompting every time.

Save the template in your CLAUDE.md so it's always one paste away. Use it every time something breaks — yes, even when you're sure it'll be quick.

> Vague in, vague out. Specific in, fixed in 30 seconds.

---

## 🚫 --dangerously-skip-permissions: When Yes, When No

> **You'll walk away with:** knowing exactly when to turn off the seatbelts — and when to leave them on.

By default Claude asks before it edits, runs, or deploys. The skip-permissions flag turns those prompts off and lets it crank. It's a real power tool. Get the rule right.

**Use it when** — you're inside a throwaway sandbox, a fresh experiment, or a brand-new project with zero secrets and zero users yet, and you want Claude to rip through 20 small edits without you clicking "yes" 80 times. Great for learning, exploration, "let's just see if this idea works" sessions, and the first hour of any new project.

**Never use it when** — the project touches a real database with real user data, real API keys, real customers, real money, a domain anyone cares about, or shared code that other people pull from. The 3 seconds of approval clicks is the only thing standing between a typo in a prompt and a wiped production database.

Real horror stories: someone left it on while Claude was "cleaning up the project" and it deleted the wrong folder. Another ran a "drop unused tables" command on production by accident. The flag wasn't the bug — not separating sandbox from production was.

The safer pattern: keep a dedicated `~/sandbox/` folder on your machine, separate from anything real. Skip-permissions is fine in there — go nuts, break things, learn fast. Everywhere else, seatbelts on, no exceptions. If the project has a domain name pointed at it, it's not a sandbox anymore.

> Default to seatbelts on. Take them off only inside a sandbox you'd be happy to delete. Speed is great; uninstallable mistakes are not.

---

## 🔁 /resume Beats Re-Pasting Context Every Time

> **You'll walk away with:** never explaining your project to Claude from scratch again.

Closed your laptop. Came back the next day. Do not open a fresh chat and re-paste your stack, your goals, your file list, your todo. That's the rookie warm-up — 10 minutes wasted before you've done anything real.

Instead: use `/resume` (or open the previous session from your history) and pick up exactly where you left off. The model already has the context. Use it.

Why this matters: every time you re-explain context from scratch, you (a) waste 5–10 minutes typing the same setup, (b) inevitably leave out the small detail that mattered yesterday, and (c) burn tokens re-priming a session you already had it figured out. The session memory + your CLAUDE.md are doing the job — let them.

Combo move (this is the upgrade): **end every session with one prompt** —

> "Summarize what we did today and what's next in 5 bullets. Save it as a checkpoint at the top of NOTES.md."

Tomorrow morning, Claude reads NOTES.md as part of starting up. You skip the warm-up entirely. Your second session is faster than your first, your third is faster than your second, and after a week you have a running log of the project's history without writing a single status update yourself.

> The pros never start cold. They always start resumed.

---

## 🎯 One Prompt = One Outcome

> **You'll walk away with:** the discipline that turns chaotic sessions into clean, fast, reversible builds.

The #1 reason a Claude session goes sideways: you stuffed three asks into one prompt.

Bad: *"Add a login page, fix the mobile menu, and change the colors to dark mode."* You'll get back a half-done login, a still-broken menu, and the colors slightly wrong on three components. Then you spend an hour untangling which change broke which feature.

Good: handle them **one at a time, in order, with a checkpoint between each.**

```
1) Add a login page. (verify it works + commit "login added")
2) Fix the mobile menu. (verify + commit "menu fixed")
3) Switch to dark mode. (verify + commit "dark mode")
```

You go slightly slower per prompt and roughly 3x faster overall because nothing collides. When something breaks, you know exactly which prompt did it and can roll back just that one. When something works, you know exactly which prompt earned it and can replicate the pattern.

There's a deeper reason this works: Claude is great at one well-specified thing and mediocre at three vague things shoved together. Splitting the prompts isn't extra work — it's the work, done correctly.

The mental model: you're not writing a wishlist, you're directing a single take. One outcome per take.

> Small reversible steps is the secret to feeling like you have superpowers instead of feeling like you're wrestling a hose.

---

## 📋 Plan Mode Before Big Changes

> **You'll walk away with:** an explicit plan before destruction — so you never get surprise refactors.

Before any prompt that's going to touch 5+ files or change something architectural — switch to **plan mode** (Shift+Tab in the Claude Code terminal, or just say "give me the plan first, don't write any code yet").

Claude writes out the steps: which files it'll touch, in what order, and what it'll change in each. You read the plan. You approve it, push back on a step, or change something — **all before a single line of code moves.** This catches the "I asked for a small change and it rewrote half the app" disaster before it happens.

The whole interaction takes 30 extra seconds and saves you the 45 minutes of cleanup when Claude misunderstood your ask and went too far in the wrong direction. Especially worth it for: renames (touch 20 files at once), refactors, file moves, anything touching auth/payments/the database, and any prompt that begins with "redesign," "restructure," or "convert X to Y."

Pro tier: in plan mode, you'll often see one step that's wrong and ask for the plan to be changed — not the code. Iterate on the plan until it's right, then approve. Iterating on a plan is roughly 10x cheaper than iterating on broken code.

This is the single biggest reason "vibe coders" sometimes ship beautifully and sometimes burn down their own project. The ones who ship use plan mode for anything bigger than a button color.

> Plan → approve → execute. The grown-up move. Free, fast, and the difference between Claude as a sniper and Claude as a wrecking ball.

---

## 📁 Stop Working In One Giant File

> **You'll walk away with:** a cleaner project Claude can actually read — and edit without breaking unrelated stuff.

If your project lives in one 3,000-line file, every Claude prompt has to re-read all 3,000 lines just to change one thing. It's slow, it's expensive, and it's the hidden reason edits start "accidentally" rewriting code in unrelated sections — there's too much context; the model loses track of what mattered.

The fix is mechanical, and you don't have to learn architecture first. **Just ask Claude to split it for you.**

> *"This file is getting too big. Split it into logical modules — one for [auth], one for [routes], one for [UI components], one for [helpers/utils]. Don't change any behavior, just move things into separate files and update the imports. Then verify the app still runs."*

After the split, every future prompt only loads the file it needs. Cheaper per prompt, faster responses, and edits stop colliding with each other. You'll feel the difference immediately — Claude gets sharper, and weird "why did it change that?" moments disappear.

Same principle applies to folders: a flat folder with 80 files is harder for everyone (you and Claude) than a clean `components/`, `pages/`, `lib/`, `api/` structure. Ask Claude to reorganize it the same way — once, early.

Big files punish you forever. Small files reward you forever. The cost of fixing this today is one prompt; the cost of leaving it is paid on every prompt from now until forever.

> Do this once, early. Future-you will say thank you on every single session afterward.

---

## 💰 The Spend Sanity Check

> **You'll walk away with:** a real number for what your builds cost — so the bill never surprises you.

Most beginners have no idea what they're spending. They open the bill at month-end and panic, or worse, they assume "it's probably fine" until it isn't. Two-minute fix.

Once a week, do this:

- Check your Anthropic usage dashboard. Look at total spend and trend.
- Inside a session, ask: **"roughly how many tokens did we use this session, and what's that cost?"**
- Note your top 3 most expensive sessions of the week — what were they actually doing?

You'll quickly notice the pattern: **80% of your cost comes from 20% of your habits.** Almost always: a few long messy chats you forgot to `/clear`, one runaway agent task you let loop too long, or one giant file you keep re-reading. Once you can see the cost per build instead of guessing, you stop the expensive habits naturally. No willpower required — measurement does the work.

A grounded benchmark for this whole course's projects: **a few dollars a day, not hundreds.** A landing page might cost cents. A full feature build might cost a couple of bucks. A whole product MVP might cost $10–$30 of model time spread over a week. If yours is way more than that, the fix is almost always one of three things: `/clear` more often, split your giant file, use plan mode for big moves.

The mindset flip: treat tokens like gas. You don't need to obsess, but you should know roughly your miles per gallon.
