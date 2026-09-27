# STAGE 22 — FULL OPEN CLAW SETUP

## 🦾 What Is Open Claw?

Open Claw is the agentic OS framework built for Claude Code Club members. It's a structured system of skills, CLAUDE.md configuration, and workflow patterns that turn Claude Code from a question-answering tool into a persistent autonomous agent — one that knows who you are, remembers your projects, and executes multi-step workflows without you re-explaining everything each session.

The name comes from the idea of an open, extensible "claw" that reaches into your tools, your files, and your workflows to get things done.

**What Open Claw gives you:**
- A persistent identity layer (Claude knows your brand, voice, goals, and current projects)
- A skill library organized by workflow type
- A session handoff system (no more cold-starting every conversation)
- A task management integration (Claude tracks what's done and what's next)
- A multi-agent routing layer (different agents for different types of work)

---

## 🗂️ The Open Claw File Structure

```
~/.claude/
├── CLAUDE.md              # Global identity — who you are, how you work
├── skills/               # Custom slash commands
│   ├── plan.md
│   ├── review.md
│   ├── deploy.md
│   └── [your-skills].md
├── memory/               # Persistent facts Claude recalls across sessions
│   ├── projects.md
│   ├── clients.md
│   └── preferences.md
└── agents/               # Specialized agent configurations
    ├── researcher.md
    ├── writer.md
    └── developer.md

[project-root]/
├── CLAUDE.md             # Project-specific context
├── PLAN.md               # Current project plan with atomic tasks
├── NOTES.md              # Session notes and handoffs
└── .claude/
    └── settings.json     # Project-level Claude Code settings
```

---

## 📝 Setting Up Your Global CLAUDE.md

The global CLAUDE.md is read at the start of every Claude Code session, in every project. It's your persistent identity layer.

**Template:**

```markdown
# About Me
Name: [Your name]
Role: [What you do]
Location: [City/timezone]
Goal: [What you're building toward]

# How I Work
- I prefer direct, concise communication. No padding.
- Show me the plan before executing on anything complex.
- If you're unsure about scope, ask — don't assume.
- I learn by shipping, not by talking. Give me the next concrete action.

# My Stack
- Frontend: [your stack]
- Backend: [your stack]
- Deployment: [your platform]
- Database: [your database]

# Active Projects
[List 1-3 current projects with one-line descriptions]

# Voice & Brand
[2-3 sentences describing your writing style and brand personality]

# Rules
- Never rewrite from scratch unless I ask.
- Run the build command before finishing any coding task.
- Always use [your conventions].
```

---

## 🔄 The Session Handoff System

The most powerful part of Open Claw: starting every session exactly where you left off.

**End of every session:**
```
Summarize what we accomplished today and what's next. 
Save to NOTES.md under today's date. 
Format: Done, In Progress, Blockers, Next Actions.
```

**Start of every session:**
```
Read NOTES.md and PLAN.md. 
Tell me where we left off and what today's first task is.
```

With this system, every session starts running in under 30 seconds. Claude reads the handoff, confirms the current state, and moves directly to the next task.

---

## 🤖 Setting Up Your Agents

Open Claw supports specialized agents for different types of work. Each agent is a CLAUDE.md-style configuration that routes certain types of tasks to a specialized persona.

**Researcher Agent** (`~/.claude/agents/researcher.md`):
```markdown
# Researcher Agent
When activated with /research, take on the role of a rigorous research analyst.
Focus: accuracy over speed. Cite sources. Flag uncertainty explicitly.
Never summarize from memory — always fetch current information.
Output format: structured report with key findings, sources, and recommended actions.
```

**Developer Agent** (`~/.claude/agents/developer.md`):
```markdown
# Developer Agent
When activated with /dev, take on the role of a senior engineer.
Focus: working code, not perfect code. Ship first, refactor after.
Always run the build command. Always checkpoint before risky changes.
Output format: working code with one-sentence explanation of what changed.
```

**Writer Agent** (`~/.claude/agents/writer.md`):
```markdown
# Writer Agent
When activated with /write, take on the role of a direct, opinionated writer.
Match the voice defined in the global CLAUDE.md.
No filler, no hedging, no "great question!" — just the content.
Output format: draft content, ready to publish with minimal editing.
```

---

## 🚀 Full Open Claw Setup — Step By Step

**Step 1: Create the folder structure**
```bash
mkdir -p ~/.claude/skills ~/.claude/memory ~/.claude/agents
```

**Step 2: Write your global CLAUDE.md**
Use the template above. Spend 20 minutes on this — it pays back in every session.

**Step 3: Install the core skills**
Download and install the skills from Stage 20. Start with: `/plan`, `/review`, `/deploy`.

**Step 4: Set up the session handoff**
Add to your global CLAUDE.md:
```markdown
# Session Protocol
End of session: update NOTES.md with Done/In Progress/Blockers/Next Actions.
Start of session: read NOTES.md and PLAN.md, confirm current state, identify today's first task.
```

**Step 5: Create your first PLAN.md**
In your current project root, create `PLAN.md` using the `/plan` skill.

**Step 6: Test the full loop**
Start a session, run a task, end the session with the summary prompt, close Claude, reopen it, and verify it picks up exactly where you left off.

---

## ✅ Open Claw Is Working When

- Claude knows who you are without you explaining at the start of each session
- Sessions start in under 30 seconds — no re-explaining context
- Claude knows the current project, the current task, and the next task
- Mistakes get remembered (in the rules section of CLAUDE.md) so they don't repeat
- You could hand your Open Claw setup to someone else and they'd understand your entire workflow from the files

---
