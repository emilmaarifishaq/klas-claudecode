# STAGE 25 — BUILDING YOUR OWN OS

## 🧠 What Is An Agentic OS?

An agentic OS (operating system) is the full configuration layer that turns Claude Code from a general-purpose AI into a personalized automation platform that knows your business, your voice, your projects, and your workflows — and executes them without you re-explaining anything.

It's not one file. It's a system:

- **Identity layer** (global CLAUDE.md) — who you are, how you work, your rules
- **Memory layer** (memory files) — what Claude needs to remember across sessions
- **Skill layer** (skills folder) — what Claude can do with one command
- **Agent layer** (agent configurations) — specialized personas for different types of work
- **Project layer** (project CLAUDE.md + PLAN.md) — what you're building right now

When all five layers are in place and working together, Claude Code behaves like a senior member of your team who has been with you for years — not a fresh intern you have to brief from scratch every session.

---

## 🏗️ Building The Identity Layer

The global CLAUDE.md is the foundation. Everything else builds on it.

**What it must contain:**

```markdown
# Identity
[Who you are — name, role, what you build]

# Communication Style
[How you want Claude to talk to you — direct, brief, no filler]

# How I Work
[Your workflow preferences — plan before execute, checkpoint before risky changes, etc.]

# My Stack
[The tools, languages, and platforms you use for every project]

# Voice & Brand
[Your writing style, tone, and brand personality — with examples]

# Rules
[Non-negotiables — what Claude must always/never do]

# Current Focus
[What you're actively working on right now — update this weekly]
```

**The test:** if Claude Code read only this file, could it start a session feeling like it knows you? If not, add more.

---

## 💾 Building The Memory Layer

The memory layer is a set of files Claude reads to recall important context that doesn't belong in CLAUDE.md (which should stay under 2 pages).

**Recommended memory files:**

`~/.claude/memory/projects.md` — every active project: name, status, stack, key decisions made, current blockers.

`~/.claude/memory/clients.md` — client names, contact info, project history, communication preferences, billing status.

`~/.claude/memory/preferences.md` — learned preferences that don't fit elsewhere: libraries you've decided never to use, design decisions you've made, opinions that have evolved.

`~/.claude/memory/learnings.md` — things you've learned from mistakes. "We tried X approach and it failed because Y. Never do this again."

**Loading memory in a session:**
```
Read ~/.claude/memory/projects.md and tell me the current status of all active projects.
```

---

## ⚡ Building The Skill Layer

Skills are the executable layer of your OS. They turn complex multi-step workflows into one command.

**Designing a skill:**
1. Identify a workflow you run more than 3 times
2. Write out exactly what Claude should do, step by step
3. Save it as `skill-name.md` in `~/.claude/skills/`

**Skill file template:**
```markdown
# /skill-name

## Purpose
[One sentence: what this skill does]

## Trigger
When the user types /skill-name, [what triggers]

## Steps
1. [First thing to do]
2. [Second thing to do]
3. [Output format]

## Rules
- [Constraint 1]
- [Constraint 2]

## Output Format
[Describe exactly what the output should look like]
```

**Start with these five skills:**
- `/plan` — planning ritual before any complex build
- `/review` — pre-ship code review
- `/checkpoint` — git checkpoint before risky work
- `/handoff` — end-of-session summary to NOTES.md
- `/brief` — project brief for client communication

---

## 🤖 Building The Agent Layer

Specialized agents give Claude Code different "modes" for different types of work. An agent is a CLAUDE.md-style file that Claude reads when you activate that agent with a skill command.

**Why agents?** Different work requires different behavior. A research task needs rigor and sourcing. A coding task needs speed and pragmatism. A writing task needs your voice. One persona trying to do all three does all three worse.

**The core three agents:**

**Developer** — fast, pragmatic, ships working code.
```markdown
# Developer Mode
Focus: working code that passes the build, shipped quickly.
Do: checkpoint before risky changes, run build after every edit, report blockers immediately.
Don't: refactor unnecessarily, add features not requested, optimize prematurely.
Output: the changed file(s) + one sentence explaining what changed.
```

**Researcher** — slow, thorough, cites sources.
```markdown
# Researcher Mode
Focus: accuracy over speed. Never summarize from memory — always fetch current data.
Do: cite sources, flag uncertainty, distinguish verified facts from inferences.
Don't: hallucinate statistics, assume current information without checking.
Output: structured report with findings, sources, and recommended actions.
```

**Strategist** — big picture, asks hard questions.
```markdown
# Strategist Mode
Focus: decisions and second-order effects.
Do: ask what assumptions I'm making, identify what could go wrong, recommend a path.
Don't: just validate my existing thinking — push back where warranted.
Output: recommendation with reasoning + the 2 strongest counterarguments.
```

---

## 🔄 The Daily OS Workflow

**Morning (5 minutes):**
```
Read NOTES.md and PLAN.md. What did we complete yesterday? What's today's first task?
```

**During sessions:**
- One task per chat (`/clear` between unrelated work)
- `/checkpoint` before any risky change
- `/review` before shipping anything

**End of day (5 minutes):**
```
/handoff — summarize today's progress, update PLAN.md task statuses, write tomorrow's first task.
```

**Weekly (20 minutes):**
- Review and update global CLAUDE.md
- Prune skills you haven't used
- Update memory files with new projects and decisions
- Run `/context` to check what's loading into sessions

---

## 📈 Your OS Gets Better Over Time

The key habit: every time something goes wrong, add a rule to CLAUDE.md. Every time you repeat an instruction three times, add it to a skill. Every time you lose context between sessions, add to the memory layer.

After 30 days of this habit, you have a system that's specifically tuned to how you work and what you build. After 90 days, it's genuinely irreplaceable — and it's yours.

**The ultimate test:** could you hand your OS to a new team member and have them understand your entire workflow from the files? That's when you know it's working.

---

## 🎯 Your OS Mission

**This week:**
1. Write or update your global CLAUDE.md to pass the identity test above
2. Set up the memory file structure
3. Install or write 3 skills for workflows you run regularly
4. Use the daily OS workflow for 5 consecutive days

Post in the community: **"My OS after [X] weeks."** Share a screenshot of your CLAUDE.md structure (not the content if you want to keep it private) and what's working.

---
