# STAGE 20 — SKILLS BOOSTER PACK

## 🚀 What's In The Skills Booster Pack

The Skills Booster Pack is a curated library of Claude Code skills — pre-built, tested, and ready to install. Each skill is a custom slash command (`/skill-name`) that gives Claude Code a specific capability you trigger in one command.

**How skills work:**
1. Download the skill file (a `.md` file)
2. Place it in your `~/.claude/skills/` folder
3. Type `/skill-name` in Claude Code to activate it
4. Claude reads the skill instructions and executes them

**Installing a skill:**
```
# Create the skills folder if it doesn't exist
mkdir -p ~/.claude/skills

# Drop the skill file in
cp skill-name.md ~/.claude/skills/
```

The pack is organized into two categories: **Elite Skill Packs** (multi-skill bundles for specific workflows) and **General Anthropic Skills** (official skills from Anthropic's skill library).

---

## 🎨 Elite Skill Packs

Pre-built skill bundles for the most common high-value workflows.

### Design & UI Skills (`front-end-design` + `ui-ux`)

Two skills that work together to give Claude Code professional-grade design capabilities.

**`/front-end-design`** — Applies design system rules before building any UI component. Reads your brand colors, typography, and spacing system from CLAUDE.md and applies them automatically. Never produces unstyled components or hardcoded colors.

**`/ui-ux`** — Reviews any UI you've built for UX quality: information hierarchy, accessibility, mobile responsiveness, contrast ratios, and user flow clarity. Returns a prioritized list of improvements.

**Usage:**
```
/front-end-design build a pricing table with 3 tiers
/ui-ux review the checkout flow for friction points
```

### Content Creation Skills

**`/content-strategy`** — Analyzes your existing content and generates a 4-week content calendar with specific post ideas, formats, and hooks. Reads your voice from CLAUDE.md and matches it.

**`/repurpose`** — Takes any piece of content (video transcript, blog post, email) and repurposes it into 5 formats: LinkedIn post, Twitter thread, Instagram caption, email newsletter, and short-form video script.

**`/hook-engine`** — Generates 20 hooks for any topic, categorized by style (bold claim, question, statistic, story, counterintuitive). Scored by likely engagement for your specific audience.

### Research & Intelligence Skills

**`/deep-research`** — Multi-step research skill. Breaks a research question into sub-questions, searches each one, synthesizes the results, and returns a structured report with citations.

**`/competitor-intel`** — Analyzes any competitor. Input: their URL. Output: product positioning, pricing, content strategy, strengths, weaknesses, and the gap you can exploit.

**`/market-map`** — Maps a market segment: key players, underserved niches, pricing tiers, and where the opportunity is.

### Developer Skills

**`/code-review`** — Senior engineer code review. Checks for: bugs, edge cases, security issues, performance problems, and TypeScript issues. Returns a prioritized list with code fixes.

**`/architect`** — System design skill. Takes a feature requirement and returns: data model, API design, component breakdown, and the order to build things in.

**`/debug`** — Structured debugging skill. Takes an error and the failing code, generates 3 hypotheses ordered by probability, and provides a fix for the most likely cause.

---

## 🎭 Scene Cast — Put Your Real Face in a Cinematic AI Video

**What it does:** Takes your photo and a video concept and generates a professional-quality AI video featuring you as the subject — no studio, no camera crew.

**The workflow:**
1. Provide a headshot (clear, well-lit, front-facing)
2. Describe the scene: setting, lighting, action, tone
3. The skill generates a Higgsfield prompt optimized for face consistency
4. Higgsfield renders the video with your face

**Prompt template:**
```
/scene-cast
Photo: [your-headshot.jpg]
Scene: [describe the setting and what you're doing]
Tone: [cinematic/documentary/lifestyle]
Duration: 5-10 seconds
```

**Use cases:** personal brand videos, course thumbnails, LinkedIn profile videos, client pitch videos, social media content featuring you without filming.

---

## 🛠️ General Anthropic Skills

Official skills from Anthropic's skill library — vetted, maintained, and updated when Claude Code updates.

### Productivity Skills

**`/plan`** — Structured planning skill. Interrogates you about your goal, surfaces assumptions, and produces a `PLAN.md` with atomic tasks, file references, and done conditions.

**`/review`** — Code and content review. Switches to adversarial mode and looks for what's wrong, not just what's right.

**`/summarize`** — Summarizes any document, conversation, or code file. Returns: main point, 3 key supporting points, and what's actionable.

### Development Skills

**`/init`** — Initializes a new project: creates folder structure, CLAUDE.md, gitignore, and README. Asks about stack and generates the right starting configuration.

**`/deploy`** — Deployment helper. Checks for common pre-deploy issues, runs the build command, and walks through the deployment steps for your stack.

**`/test`** — Writes tests for any function or component. Covers happy path, edge cases, and error states. Uses your existing test framework.

### Content Skills

**`/write`** — Writing assistant that matches your voice from CLAUDE.md examples. Takes a topic and format, produces a first draft.

**`/edit`** — Editing skill that focuses on clarity: cuts redundancy, removes hedging, shortens sentences. Doesn't change your voice.

**`/translate`** — Translates content while preserving tone and technical terminology. Specify target language and formality level.

---

## 📥 How To Install All Skills

**Quick install script:**
```bash
# Download the skill pack
git clone [skills-pack-repo] ~/.claude/skills

# Or install individually
curl -o ~/.claude/skills/front-end-design.md [url]
curl -o ~/.claude/skills/ui-ux.md [url]
```

**Verify installation:**
```
# In Claude Code, type / to see all available commands
# Skills appear alphabetically with / prefix
```

**Best practice:** only install skills you'll use this week. More skills in the folder means more options in the / menu — which becomes overwhelming. Add as you need them.

---
