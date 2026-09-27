# STAGE 19 — MCP SUPER PACK

## 🎒 What This Pack Is (And Why It's The Whole Game)

MCPs (Model Context Protocol servers) are the tools you plug into Claude Code to give it real-world capabilities: reading the web, talking to your databases, sending Slack messages, controlling browsers, generating images. Without them, Claude Code works in isolation. With the right set, it becomes a full automation platform.

This pack covers 36+ MCP servers organized into 9 categories — from the essential 12 you install first to the specialized tools that unlock specific workflows. The rule: **install the core 12 first, then add category-by-category based on what you're building.** More MCPs = more context overhead. Only install what you actually use.

**The CLI-over-MCP rule (save this):** if a tool has a CLI equivalent, use the CLI instead of the MCP. CLIs cost zero context tokens. MCPs load their entire tool list into your context window at startup — that's tokens you didn't spend on your actual task.

---

## 🗂️ Category 1 — Filesystem & Dev

The foundational category. These MCPs give Claude access to your local files and development environment.

**filesystem** — Reads and writes files on your local machine. Essential for any project work. Claude can read multiple files at once, edit them, and create new ones without you pasting content back and forth.

**Install:**
```
claude mcp add filesystem
```

**git** — Gives Claude full git access: reading history, creating commits, creating branches, running diffs. Pairs with the git checkpoint habit from the micro-lessons.

**Install:**
```
claude mcp add git
```

**docker** — Lets Claude manage Docker containers: build images, start/stop containers, read logs. Essential for projects with containerized deployments.

**When to use:** any project that runs in Docker. **When to use CLI instead:** if you're running simple docker commands manually, the CLI is faster and costs zero context.

---

## 🌐 Category 2 — Web & Search

Give Claude the ability to read the web in real time.

**fetch** — Fetches any URL and returns the content. Claude can read documentation pages, scrape websites, and pull live data. The simplest web capability.

**Install:**
```
claude mcp add fetch
```

**brave-search** — Connects Claude to Brave Search for real-time web results. Use when you need current information that's not in Claude's training data. Requires a Brave API key (free tier available).

**Install:**
```
claude mcp add brave-search
```

**firecrawl** — Full-page scraping with JavaScript rendering. Unlike fetch, Firecrawl gets the full rendered page content (not just the HTML). Essential for scraping modern web apps. Requires a Firecrawl API key.

**When to use fetch vs. firecrawl:** use fetch for static pages and APIs. Use firecrawl for JavaScript-rendered sites where fetch returns empty content.

---

## 💬 Category 3 — Comms & Ops

Connect Claude to your communication and operations stack.

**slack** — Lets Claude read channels, send messages, and create threads in your Slack workspace. Build notification systems, daily digests, or automated updates.

**notion** — Read and write to your Notion databases and pages. Use for project tracking, content calendars, or any workflow that lives in Notion.

**gmail** — Read, draft, and send emails through your Gmail account. Requires OAuth setup. Claude can draft replies, categorize emails, and send updates.

**github** — Full GitHub access: read repos, create issues, open pull requests, review code. For teams, this is the most used MCP after filesystem.

**Warning on Comms MCPs:** these MCPs can send real messages on your behalf. Always test in a sandbox first. Set up the permission prompt so Claude asks before sending.

---

## 🧰 Category 4 — Specialised

High-power MCPs for specific use cases.

**playwright** — Controls a real Chromium browser. Claude can navigate to websites, click buttons, fill forms, take screenshots, and scrape JavaScript-rendered content. The most powerful web automation tool in the pack.

**Use cases:** automated testing, web scraping, form submission, screenshot generation, monitoring live websites for changes.

**memory** — Gives Claude persistent memory across sessions. Store facts, preferences, and project context that Claude recalls in future sessions — without needing to re-explain everything.

**Install:**
```
claude mcp add memory
```

**puppeteer** — Similar to playwright but uses Chrome DevTools Protocol. More lightweight than playwright for simple scraping tasks.

---

## 🗄️ Category 5 — Backend & Data

Connect Claude to your databases and cloud infrastructure.

**supabase** — Direct Supabase database access. Claude can query tables, insert records, and run migrations. For any project built on Supabase.

**vercel** — Manage Vercel deployments from Claude. Trigger deploys, check deployment status, read logs, manage environment variables.

**postgres** — Direct PostgreSQL connection. Claude can query your database, explain query plans, and write migration SQL. Always use read-only credentials unless you explicitly need writes.

**airtable** — Read and write Airtable bases. Excellent for non-technical clients who manage their data in Airtable — Claude becomes the bridge between their spreadsheet and your automation.

**Safety rule for database MCPs:** give Claude a read-only database user for exploration and analysis. Only grant write access for specific tasks, and always checkpoint first.

---

## ⚙️ Category 6 — Automation

Connect Claude to your automation platforms.

**n8n** — Control n8n workflows from Claude Code. Trigger workflows, pass data to them, and read their outputs. The most powerful combination: Claude as the AI brain, n8n as the automation backbone.

**zapier** — Connect to your Zapier zaps. Trigger automations and pass data from Claude Code to your Zapier stack.

**apify** — Access Apify's 1,500+ pre-built web scrapers (Actors) from Claude. Pull data from Google Maps, LinkedIn, Instagram, Amazon, and more without building scrapers from scratch.

**The n8n + Claude pattern:** use n8n for multi-step automations with third-party integrations. Use Claude Code for the AI reasoning steps. Pass data between them via webhook triggers.

---

## 🎨 Category 7 — AI & Media

Give Claude the ability to generate images, video, and audio.

**higgsfield** — Generates AI video using Higgsfield's Seedance model. Claude can write the prompt and trigger generation in one step. The foundation of the cinematic ad workflow from Stage 14.

**stitch** — Figma's AI design tool. Claude can trigger Stitch to generate UI components from descriptions, then implement the generated code.

**elevenlabs** — Text-to-speech via ElevenLabs. Claude writes the script, ElevenLabs renders the voice. Essential for any video automation pipeline.

**replicate** — Access 1,000+ open-source AI models via the Replicate API: image generation, video, audio, 3D, and more. The Swiss Army knife for AI media generation.

**piapi** — Access PIAPI's model library including Flux (image generation) and Kling (video generation). The same stack used in the World History YouTube Shorts pipeline.

---

## 🔍 Category 8 — Research & Comms

Deep research and knowledge retrieval.

**context7** — Pulls live documentation for any library or framework. Instead of Claude hallucinating outdated API syntax, context7 fetches the current docs. Essential for any project using external libraries.

**Install:**
```
claude mcp add context7
```

**firecrawl** (also in Category 2) — Full-page scraping for research workflows. Covered above.

**perplexity** — Access Perplexity's real-time web search with citations. More powerful than Brave Search for research tasks that need sourced answers.

**exa** — Semantic web search optimized for AI agents. Better than keyword search for finding conceptually related content.

---

## 📈 Category 9 — Money & Growth

Connect Claude to your business metrics and growth tools.

**blotato** — Social media scheduling and analytics. Claude can generate content, schedule it, and pull performance metrics.

**airtable** (also in Category 5) — Data management covered above. In a growth context: track leads, campaigns, and customer data.

**vidiq** — YouTube analytics and keyword research. Connect Claude to your YouTube channel data. Used in the YouTube growth workflow from Stage 15.

**stripe** — Read Stripe data: revenue, subscriptions, customer details. Claude can run revenue reports, identify churned customers, and generate financial summaries. **Never grant write access** to your Stripe MCP — read only.

---

## 🚀 Install All 12 In 20 Minutes + Post-Install Checklist

The core 12 MCPs to install first. Everything else is optional based on your use case.

**The Core 12:**
1. `filesystem` — essential for all project work
2. `git` — checkpointing and history
3. `fetch` — basic web access
4. `brave-search` — real-time web search
5. `context7` — live documentation
6. `memory` — persistent context across sessions
7. `github` — repository and issue management
8. `playwright` — browser automation
9. `firecrawl` — advanced scraping
10. `notion` — project and content management
11. `supabase` or `postgres` — database access (pick your stack)
12. `higgsfield` or `replicate` — AI media generation (pick based on your builds)

**Post-install checklist:**
- [ ] Run `/context` — note how many tokens each MCP adds at startup
- [ ] Remove any MCP you didn't specifically choose (check for pre-installed defaults)
- [ ] Apply the CLI-over-MCP rule: could any of these be replaced by a terminal command?
- [ ] Test each MCP with a simple command before relying on it in production
- [ ] For database MCPs: confirm you're using read-only credentials

---
