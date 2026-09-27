# STAGE 10 — COMING FROM ANOTHER TOOL

## ▶️ STAGE 10 — Start Here

![Stage 10 — Coming From Another Tool](/images/stage10-overview.png)

> **You'll walk away with:** a single clear goal for this whole module: not to learn another tool, but to make Claude Code the hub everything you build runs through — so the rest of this course actually pays off for you.

Let's be honest about why you're here. You've already got a tool — Codex, Gemini, Antigravity, Cursor, Copilot, something. It works. You're not looking to throw it away. Good — you don't have to.

### What "main driver" actually means

A main driver is the place you start by default. The hub. The thing every project flows *into*, even when other tools help along the way. Right now your other tool is the hub and Claude Code is a curiosity you poke at. By the end of this module, that flips: **Claude Code is the hub, and your old tool becomes one input that feeds it.**

You're not abandoning anything. You're changing what runs the show.

### Why this is the whole game

This course — every phase, every lesson, every MCP, every agent move — is built on Claude Code being your center of gravity. The memory file that compounds across sessions, the Skills you switch on, the MCP connections you maintain — they only pay off when you're running Claude Code all day. If Claude Code is your passenger tool, none of it compounds.

### How we'll do it

This module has one lesson per tool — Codex, Gemini CLI, Antigravity, Lovable, plus a catch-all for everything else. Each ends with the same homework: move one real piece of work from that tool into Claude Code. Not reading. Not a demo. An actual migration you do this week.

**Skip the lessons for tools you've never touched.** Do the one that's yours, then the catch-all. Every step builds.

> **Done when:** you can state the goal in one sentence — make Claude Code the hub my work runs through — and you've named the one tool you'll start migrating from this week.

---

## 🤖 Coming From Codex (OpenAI)

![Coming From Codex](/images/stage10-codex.png)

> **You'll walk away with:** a concrete path to pull a real Codex project into Claude Code and run it there — so Claude Code becomes where work lives, not Codex.

Codex is OpenAI's coding agent — terminal CLI, project editor, or cloud agent. Under the hood it reads your repo, edits files, runs commands, and reports back. That loop is exactly what Claude Code does.

### This gets you 90% over

If you wrote `AGENTS.md` to give Codex standing instructions, you already wrote the Claude Code memory file. It just needs a new name:

- Copy the contents of your `AGENTS.md` into a `CLAUDE.md` at your project root.
- Your reusable Codex prompts become **Skills** you invoke by name.

That's the heart of the migration. Your project's brain comes across in one copy-paste.

### The bridge move

**Desktop app:** add your real Codex project folder as a workspace, create a `CLAUDE.md` inside it with your old `AGENTS.md` content. Send Claude a message to read your standing instructions back to you.

**CLI (terminal):** navigate to the same project folder and run Claude there — exactly where you'd have started the Codex CLI. Let Claude summarise its standing instructions so you know it's live.

One honest difference: Claude Code tends to make larger, more confident multi-file edits in a single pass — describe the outcome and let it take more of the job at once.

> **Done when:** one real Codex project is open in Claude Code with a working `CLAUDE.md`, at least one prompt/Skill mapped over, and you've completed one actual task — Codex was not the driver.

---

## ✨ Coming From Gemini CLI

![Coming From Gemini CLI](/images/stage10-gemini.png)

> **You'll walk away with:** a clean way to bring a real Gemini CLI workflow into Claude Code and run it there by default — making Claude Code the hub your context flows into.

Gemini CLI is Google's open-source terminal agent. You point it at a folder and it reads files, edits code, runs commands, searches the web, and holds a session-scoped memory. The setup is close to Claude Code.

### What moves over directly

- **`GEMINI.md` → `CLAUDE.md`** — same job, a project file the agent reads on startup. Copy your `GEMINI.md` content straight into a `CLAUDE.md` at the project root.
- **Your saved prompts** become **Skills** you invoke by name.
- **MCP servers** — both tools use the Model Context Protocol, so connectors you already configured for Gemini usually carry over with the same setup.

### The one habit worth making

Gemini leans on a huge context window — paste it in, it absorbs. Claude Code uses structured memory on a shorter window, then you bring the right context in on demand. Instead of dumping everything in at once, use `CLAUDE.md` to prime the session and bring in files, tools, or Skills when the task needs them. Shorter prompt, sharper context, same outcome.

**Resist the old habit of dumping your whole codebase into the first message.** Write a tight `CLAUDE.md` instead and let Claude read what it needs.

The honest trade: if a task kept hitting Gemini CLI's token ceiling, that ceiling is gone here.

> **Done when:** your `GEMINI.md` is now a `CLAUDE.md` Claude Code reads, at least one MCP you used in Gemini is reconnected in Claude Code, and you've run one genuine Gemini workflow through it — Claude Code, not Gemini, was the driver.

---

## 🛸 Coming From Antigravity

![Coming From Antigravity](/images/stage10-antigravity.png)

> **You'll walk away with:** a way to bring a real Antigravity build into Claude Code and direct it there — turning Claude Code into the hub you supervise work from.

Antigravity is Google's agentic IDE — agents take on tasks in a browser, terminal, and editor; you review their progress in a task/mission feed. It's genuinely novel.

### How the model maps

- **Agent workspace** → Claude Code's project + agent loop. One long-running agent you direct, with sub-agents on demand.
- **The task/mission feed** → Claude Code's permission prompts. You still approve each risky step before it runs.
- **Multi-agent parallel tasks** → sub-agents and background tasks (covered later in this course).
- **Browser/terminal/editor surfaces** → MCP servers. Claude Code can drive these surfaces too.
- **Saved prompts/custom commands** → **Skills** you invoke by name.

### Your real asset

Your value in Antigravity wasn't the IDE chrome — it was your **project on disk** and how well you briefed the agent. That briefing is now `CLAUDE.md`.

The honest fact: Antigravity's parallel-agent dashboard is genuinely nice for fanning out many tasks at once. Claude Code's winning approach comes from depth and control on the job in front of you. Most people find they fan out less than they thought — and ship more carefully.

> **Done when:** a real Antigravity project is open in Claude Code with a `CLAUDE.md`, and you've directed at least one real agent task end-to-end — Claude Code is now where that project lives.

---

## 💜 Coming From Lovable — The Bridge Strategy

![Coming From Any Tool](/images/stage10-any-tool.png)

> **You'll walk away with:** a clean way to keep Lovable at what it's genuinely best at — the first-look UI — while you build the actual logic in Claude Code, so you ship a real codebase instead of getting stuck inside a template.

Lovable is great at the first render. What it's not good at is the long tail of a real product — custom data flows, your existing repo, weird integrations, the moment a feature crosses a file or template. That's exactly where Claude Code wants to be.

### The pattern in one sentence

Prototype in Lovable. Build in Claude Code. Lovable is the napkin sketch you can click. Claude Code is the codebase you actually ship.

### The export → import sequence

Lovable saves projects to its own workspace by default. To get them into Claude Code: use the one-click GitHub integration in project settings → clone the repo → open Claude Code inside that folder. That's the whole bridge.

The first thing to do once you're in the repo: write a light `CLAUDE.md` at the project root. The repo has no code memory — no branding instructions, no style choices, no "parts you don't want Claude to touch." Don't skip it; the difference between Lovable's UI memory and Claude Code's `CLAUDE.md` is exactly the gap this bridge fills.

> **Done when:** a real Lovable project is cloned locally, opened in Claude Code with a `CLAUDE.md`, and you've run `npm run dev` and completed one real task — Claude Code as the driver.

---

## 🌉 Coming From Any Other Tool (Cursor, Copilot, Windsurf, etc.)

> **You'll walk away with:** a single repeatable pattern for importing ANY tool's work into Claude Code — so it doesn't matter where you came from, you can always make Claude Code the hub.

Every AI dev tool, no matter the brand, comes down to three things. Move all three and you've migrated.

**1 — The project.** Code, repos, and files live on disk. Migration isn't moving files — it's just pointing Claude at the same folder.

**2 — The context.** Whatever file or settings panel held your "always do it this way" rules — Cursor rules, Copilot instructions, a settings panel — reconstruct it as `CLAUDE.md` at your project root.

**3 — The connections.** Any tools your old AI assistant reached — GitHub, a database, your notes — reconnect as MCPs in Claude Code.

The mindset that makes this stick: tools will keep changing. Switching tools is cheap. The operator who absorbs any tool into one hub never has to start over again. That portability is the real skill.

**The universal bridge prompt:**

> I've been using [YOUR TOOL] for [DESCRIBE YOUR WORKFLOW]. I want Claude Code to become my main driver. Tell me: 1) what I should keep using my old tool for (if anything) 2) what Claude Code will do better 3) what I need to change in how I work. Then set up my CLAUDE.md with my stack, my working style, and a build-first protocol.

> **Done when:** you've run the project/context/connections pattern on a real project from your current tool and finished one real task in Claude Code.

---

## 🧭 Claude Code As Your Hub

![Claude Code As Your Hub](/images/stage10-hub.png)

> **You'll walk away with:** a clear picture of why Claude Code earns the hub seat — and how your other tools feed into it instead of competing with it.

### What makes Claude Code the hub

- **Memory that compounds.** A `CLAUDE.md` plus structured context means every session starts knowing your project. The hub gets smarter the longer you use it.
- **Specialists on tap.** Skills are bottled experts you switch on by name — design, research, writing — so repeatable jobs get done the right way every time.
- **Real tool reach.** MCP connectors let it reach your notes, your database, your GitHub — without pulling you out of the flow.
- **One front door.** Desktop app or terminal, it's the same brain. Stop asking "which tool for this?" and start in Claude Code.

### How the other tools feed (not replace) the hub

- **Big-context survey.** Gemini CLI's huge context is genuinely nice for a first read of a sprawling, unfamiliar repo — then you bring the changes to Claude Code to ship.
- **Ecosystem fit.** If your team uses OpenAI Codex, Claude Code can take its output. Survey or explore wherever you like — but finish in Claude Code, where the memory, Skills, and connections live.

### The one trap to avoid

Tool-hopping mid-task. Pick the tool for the job, finish the job in Claude Code, then move on. Switching tools every five minutes means you never build a hub at all.

> **Done when:** you can name Claude Code as your default hub and describe, in one line, what each old tool now feeds into it rather than competing.

---

## 🎯 STAGE 10 — Homework

![Stage 10 Homework](/images/stage10-homework.png)

This is the capstone. Don't move on until all of these are true:

- You picked **one real workflow** you run regularly — live repo, a weekly job, an active build. Not a toy. Not a demo.
- You set **Claude Code as your default starting point** for it — desktop app or CLI.
- You **reconnected every real tool** it depends on as MCPs/connectors — GitHub, notes, database, whatever it touched.
- You ran one **complete, real task** in Claude Code end to end — change made, reviewed, accepted — with Claude Code as the driver and any old tool only feeding in.
- You wrote yourself a **two-line note:** what felt better with Claude Code as the hub, and what (if anything) you'll still let an old tool feed in. Honesty beats loyalty.

> **✅ Done when:** one real workflow now starts in Claude Code by default, with a working CLAUDE.md and reconnected tools, you've shipped one genuine task as the driver, and you've written your honest hub note.

---

## ✅ STAGE 10 — Summary

![Stage 10 Summary](/images/stage10-summary.png)

You came in with a tool that works and no intention of starting over — and that's exactly what you got to keep. The switch wasn't throwing anything away. It was changing what ran the show.

You learned the real goal: not to study another tool, but to make **Claude Code the hub your work runs through**. You saw how Codex, Gemini CLI, Antigravity, Lovable, and any other tool can flow into Claude Code — and, lesson by lesson, you moved real work across instead of just reading about it.

The tool was never the moat — the operator is. You just made yourself the kind of operator who runs the whole course and community builds from one centre.

**You can now:**
- Make Claude Code the hub a real project runs through
- Migrate work from Codex, Gemini, Antigravity, Lovable, or any tool using one repeatable pattern
- Let old tools feed the hub without slipping back to tool-hopping
- Start your real work in Claude Code by default, on purpose

---

## ✍️ STAGE 10 — Your Mission

![Stage 10 Mission](/images/stage10-mission.png)

Post in the community titled **"Made Claude Code My Main Driver"** — name the tool you came from, the one real workflow you moved over, and the thing that surprised you once Claude Code was the hub instead of a side visit. If you hit a snag mid-migration, drop it in the post — someone who made the exact same jump will get you unstuck fast.

---

## 🤝 Get Involved

![Get Involved](/images/stage10-get-involved.png)

Almost everyone in this room came from another tool, so your "made it my main driver" story is worth more than you think. Share what moved across cleanly and what tripped you up — you'll save the next person hours and earn your place as a core member, not a lurker. Then find one person still treating Claude Code as their backup and give them the honest nudge: it only pays off when it's the hub. Help them move their first real workflow across. That's how the whole room levels up — and how the switch sticks for you too.

---

## 🔍 Mistral OCR MCP — Turn Scanned PDFs Into Markdown

> **You'll walk away with:** Mistral OCR wired in so any scanned PDF, photo of a whiteboard, or screenshot of a contract turns into clean markdown Claude can quote, summarise, or chunk for RAG.

Claude reads text. It doesn't read pixels. The second you hand it a scanned PDF — a contract, a receipt, a textbook page, a photo of your whiteboard — it falls back to vague vibes about the actual content. **Mistral OCR fixes that, cleanly, in one MCP.**

### What it does

The Mistral OCR MCP wraps Mistral's `mistral-ocr-latest` model and turns any image or PDF into structured markdown — preserving headings, tables, lists, and even math output. Output is chunk-ready: drop it straight into Qdrant, Pinecone, or pgvector and you've got a searchable knowledge base out of a stack of paper.

### Install

```json
"mistral-ocr": {
  "command": "npx",
  "args": ["-y", "mistral-ocr-mcp"],
  "env": { "MISTRAL_API_KEY": "your_mistral_api_key_here" }
}
```

### Worked example

Drop a 40-page scanned partner contract into `~/Desktop/contract.pdf`. Then:

> Use the Mistral OCR MCP to convert ~/Desktop/contract.pdf into markdown. Save it next to the original as contract.md, then give me the 3 clauses I'd push back on as a buyer.

Two outputs land on disk: the clean markdown, and Claude's 3-clause pushback. The whole loop takes under a minute.

**#1 beginner mistake:** Running OCR on bit-native PDFs (ones already typed in a word processor). Waste of credits — Claude can read those directly. Save Mistral OCR for **scans, photos, and screenshots** where the text is actually pixels.

**Prompts:**

> Use the Mistral OCR MCP to convert every PDF in ~/Desktop/scans into markdown. Give each output file a .md extension and a 1-line summary. No preamble.

> OCR ~/Desktop/whiteboard.jpg with the Mistral OCR MCP. Return the clean markdown plus the 3 action items I clearly wrote on that board. If you can't make out a word, mark it [?] — don't guess.

> Take the scanned contract at ~/Desktop/contract.pdf. OCR it with mistral-ocr, save to contract.md, then give me the 3 clauses a buyer would push back on. One sentence per clause, with the exact quoted text.

---

## 🗄️ Qdrant MCP — A Local Vector DB Claude Can Query

> **You'll walk away with:** Qdrant running on your machine, wired to Claude via the Qdrant MCP, and your first set of documents searchable by meaning instead of keyword — no cloud bill, no API limits.

Pinecone is great until you realise every embedding costs money and your "second brain" lives on someone else's server. **Qdrant is the local-first alternative**: same vector search power, stays on your laptop, data never leaves the machine.

### What it does

Qdrant is an open-source vector database. The Qdrant MCP lets Claude create collections, upsert documents, run semantic searches, and delete entries — all against a Qdrant instance you control. Pair it with Mistral OCR and you've got a private RAG pipeline that costs $0/month.

### Install

First, run Qdrant locally with Docker:
```bash
docker run -d -p 6333:6333 -p 6334:6334 \
  -v $(pwd)/qdrant_storage:/qdrant/storage qdrant/qdrant
```

Then add the MCP:
```json
"qdrant": {
  "command": "npx",
  "args": ["-y", "@qdrant/mcp-server-qdrant"],
  "env": {
    "QDRANT_URL": "http://localhost:6333",
    "COLLECTION_NAME": "claude-memory",
    "EMBEDDING_MODEL": "sentence-transformers/all-MiniLM-L6-v2"
  }
}
```

The embedding model routes locally — first call downloads ~80MB, then it's offline forever.

**#1 beginner mistake:** Treating Qdrant like a dump. Tagging matters: pass `metadata` with each upsert (client, date, source). Without it, semantic search returns 50 chunks of context-free text.

**Prompt:**

> Spin up Qdrant locally on Docker, install the Qdrant MCP, and prove it's live: create a collection called 'test', upsert these three sentences as documents, then search for one of them with different wording. Show me the top match and its score.

---

## 🦙 Ollama MCP — Run a Local Model As A Tool Inside Claude

> **You'll walk away with:** Ollama installed, a local model pulled, and Claude calling an Ollama model as a tool — for the cheap, private, fast-path tasks that don't need frontier-model horsepower.

Not every task deserves a Sonnet call. Categorising 5,000 support tickets. Summarising your daily journal. Cleaning OCR output. **These are jobs for a small local model, called as a tool by Claude.** Ollama makes that trivial — and the Ollama MCP makes Claude delegate to it.

### What it does

Ollama runs open-source models (Llama 3.2, Mistral, Gemma) locally on your laptop. The Ollama MCP lets Claude pick a local model and run it for any sub-task — sub-second latency, zero API cost, total privacy. Claude becomes the orchestrator; the local model is its cheap specialist.

### Install

```bash
brew install ollama   # Mac
ollama pull llama3.2:3b
```

```json
"ollama": {
  "command": "npx",
  "args": ["-y", "ollama-mcp"],
  "env": { "OLLAMA_HOST": "http://localhost:11434" }
}
```

The 3B model runs on any machine. Bigger Macs can host 13B+ for harder jobs.

### Worked example

You've got 500 LinkedIn comments in a CSV and want each tagged positive/neutral/negative:

> Read ~/Desktop/comments.csv. For each row, call llama3.2 via the Ollama MCP and log sentiment. Write a new CSV with the tag column added. This is bulk routine work — don't use the main Claude for each row, use the local model. Process one at a time.

The whole batch finishes in a couple of minutes and your Anthropic bill stays flat.

**Prompts:**

> Install the Ollama MCP after running `ollama pull llama3.2:3b`. Prove it's live: send me a local one-prompt — 'In a sentence, what is Ollama?' — and return both the answer and the latency in milliseconds.

> Read ~/Desktop/comments.csv (500 rows). For each row, call llama3.2 via the Ollama MCP. Write the logged result to comments_tagged.csv. Don't burn main model tokens on classification — that's the whole point.

---

## 📱 Telegram MCP — Thumbs-Only Remote Agent Control

> **You'll walk away with:** a Telegram bot wired to Claude, so your long-running agents can ping you on your phone for approval and you reply with a thumbs up or a one-line correction — from anywhere.

You kick off a 40-minute agent loop, close the laptop, go to the gym. Halfway through, the agent hits a fork — should it push to prod or stage? Right now nothing happens until you're back. **With the Telegram MCP, the agent texts you, you tap 👍 or type "stage", and it keeps going.**

### What it does

The Telegram MCP gives Claude two superpowers via your own bot: (1) send messages to your DM mid-task, (2) listen for your reply and act on it. Both directions. Combined: thumbs-up approval loops for long-running agents, no laptop needed.

### Install

Create a bot via `@BotFather` in Telegram → `/newbot`, take the token. Find your chat ID with `@userinfobot`. Then add the MCP with your token and chat ID. The bot only talks to the chat IDs you whitelist.

### Worked example

Running an outbound campaign — Claude drafts 20 cold emails, you want eyes before they ship:

> Draft 20 cold emails using my voice file at @voice.md and the leads in @leads.csv. For each one, ping me via Telegram MCP with the email body. Wait for my ✅ then send via SmartLead. ✋ means skip, anything else = rewrite with that feedback. Process one at a time.

You approve from the gym. The campaign goes out. The laptop stays closed.

**Prompts:**

> Install the Telegram MCP with my bot token and chat ID. Prove it's live: send me a message saying "Telegram MCP online" and wait 30 seconds for my reply. Echo my reply back so I know both directions work.

> I'm starting a long agent run: plan the task, send me the plan via Telegram and wait. If I reply ✅, execute. If I reply with edits, integrate them and ping me the revised plan. Don't touch code until I've approved from my phone.

---

## 🎨 21st.dev Magic MCP — AI-Powered UI Components

> **You'll walk away with:** 21st.dev Magic MCP wired in, so when you ask Claude to build a hero section or pricing table it pulls from a 1M+ Tailwind component library instead of writing a generic one.

Claude can write any React component. Left to its own devices it writes the generic one — plain grey card, default spacing, AI-vibes design. **21st.dev Magic MCP fixes that** by giving Claude a real library of 1,000,000+ designer-built Tailwind components to pull from.

### Install

```json
"magic": {
  "command": "npx",
  "args": ["-y", "@21st-dev/magic@latest"],
  "env": { "API_KEY": "your_21st_dev_api_key_here" }
}
```

### Worked example

> Use the 21st.dev Magic MCP to find a hero section with a heavy headline, plus features/pricing/FAQ/footer. Adapt every section to my client's brand using @client.md and the colours in @brand.md. Drop the final code into ~/client/src/pages/landing.tsx, push to a Vercel preview, and return the staging URL.

Five sections, brand-matched, one prompt.

**#1 beginner mistake:** Picking a template that's beautiful but wrong-shape for the client. Read the brief first, then pick. A B2B SaaS template forced onto a coaching offer = visual whiplash.

**Prompts:**

> Install the 21st.dev Magic MCP. Prove it's live: search the library for 'animated hero section' and return the top 3 matches with one-line descriptions. Don't write any code yet — I want to choose.

> Use the Magic MCP to find a 3-tier pricing table with a monthly/annual toggle. Drop it into ~/client/src/pages/pricing.tsx, replace the dummy copy with the tiers in @offers.md.

---

## 🌐 Chrome DevTools MCP — Browser Automation Without Playwright

> **You'll walk away with:** Chrome DevTools MCP installed and Claude driving your real browser session — with your real logins, no 300MB Playwright binary to install.

Playwright is great. It's also a separate process and a different browser than the one you actually use. **Chrome DevTools MCP** drives the Chrome session you already have open: the tabs you have, the cookies you're signed in to — through the same DevTools protocol your browser already speaks.

### What it does

Chrome's Native MCP wraps Chrome's DevTools Protocol as an MCP server. Claude can list open tabs, navigate, click, type, take screenshots, run JavaScript, read the console, and read network requests — all inside your real Chrome session. No separate login flow.

### Install

```json
"chrome-devtools": {
  "command": "npx",
  "args": ["-y", "@chrome-devtools/mcp"]
}
```

Restart Claude Code — it auto-attaches to any Chrome you already have open.

### Worked example

Debugging a checkout flow on your live site, signed in as a real test user:

> Use the Chrome MCP. Find the tab open to my staging checkout. Click 'Buy Now', monitor the network tab, and return the first failing request (URL, status code, and response body).

Because it's your real browser, you're already logged in. Playwright would have to re-authenticate.

**#1 beginner mistake:** Running Chrome MCP against tabs where you're an admin of production systems. Use a dedicated Chrome profile for MCP work and keep banking + admin tabs out of it.

**Prompts:**

> Install the Chrome DevTools MCP and prove it's live: list every tab currently open in my Chrome window, return URL + title for each. No actions yet — just visibility.

> Using Chrome MCP on Profile 2 (not my main profile): open my staging checkout, click 'Buy Now', monitor the network panel, and return the first failing request. Screenshot the error state and save it to ~/Desktop/checkout-fail.png.

---

## 🏗️ Aura.build — Full-Website Templates Claude Can Adapt

> **You'll walk away with:** Aura.build wired in so Claude can pull a full designer-built website template — not just a component — and adapt every section to your client's brand in one structured run.

21st.dev Magic gives Claude components. Aura.build gives **full websites**. When you need a full site shipped today — landing, pricing, about, blog, footer — pulling from Aura beats writing 12 pages of generic AI markup.

### Install

```json
"aura": {
  "type": "http",
  "url": "https://mcps.aura.build/mcp",
  "headers": { "Authorization": "Bearer your_aura_api_key" }
}
```

### Worked example

You just closed a client who needs a landing page in 48 hours:

> Connect Aura.build. List 5 SaaS templates that match a clean, dark-mode optional, hero/features/pricing/FAQ/footer shape. Return the name + thumbnail URL for each. Don't pick one yet — I want to choose.

> Use Aura.build to find a full landing page template. Adapt every section to my client's brand using @client.md and the colours in @brand.md. Drop the final code into ~/client/src/pages/landing.tsx, push to a Vercel preview, and return the staging URL.

**#1 beginner mistake:** Picking a template that's beautiful but wrong-shape for the client. Match the template to the offer, not to your taste.

**Prompts:**

> Audit ~/client/src/pages/landing.tsx against the 3 closest Aura templates visually. For each section, tell me whether Aura's version is stronger — and if it is, what specifically (layout / spacing / copy / contrast). One row per section. Don't edit yet.

---

## 🔎 Tavily MCP — A Search API Tuned For Agent Loops

> **You'll walk away with:** a cheap, agent-friendly search API — the right choice for newsletter, research, and clipping workflows that would otherwise eat your Brave or Perplexity budget.

Brave Search is great for quick lookups. Perplexity is great for synthesis. Tavily fills the gap in between: a search API designed for agents, priced for high-volume use, returning ready-to-summarise content instead of just URLs.

### What it does

Tavily runs a search, fetches the top results, extracts clean content, and returns a structured payload — title, URL, content snippet, relevance score — in one call. Per-query cost is a fraction of SerpAPI's. For agent loops that hit search 50+ times a run, that math matters.

### Install

```json
"tavily": {
  "command": "npx",
  "args": ["-y", "tavily-mcp"],
  "env": { "TAVILY_API_KEY": "tvly_xxx_yours_here" }
}
```

**#1 beginner mistake:** Using Tavily for one-off questions a human would ask Perplexity. Wrong tool. Tavily shines in agents — repeated, automated, high-volume search inside a loop. For one-shot synthesis with citations, use Perplexity.

**Prompts:**

> Install the Tavily MCP. Prove it's live: search 'Anthropic Claude Code release notes 2026' and return the top 5 results — title, URL, 1 sentence snippet for each. No preamble, no synthesis yet.

> Use Tavily to find the top 5 Claude Code news items from the last 7 days. Pull headline + 2-sentence summary + source URL for each. Format as a community post draft using @voice.md. Show me the 5 sources first — I want to ok them before you write the post.

---

## 🚀 Apollo MCP — Outbound Sales Source Wired Into Claude

> **You'll walk away with:** Apollo MCP installed and pulling real B2B contacts directly into Claude — so the lead-source step of your outbound stack stops being a manual CSV export and starts being a structured lead loop.

Outbound has three stages: source, enrich, send. Tools exist for the last two. The source step is where most agents fall back to manual CSV exports. **Apollo MCP closes that loop** — Claude pulls leads directly from Apollo's 275M+ contact database as part of the same prompt that enriches and sends.

**#1 beginner mistake:** Burning credits on broad searches ("all SaaS founders"). Apollo costs per credit. Tight filters (industry + size + signal + geography) return fewer but more useful leads — and your budget lasts the campaign.

**Prompts:**

> Install the Apollo MCP. Prove it's live: find 3 founders of US-based SaaS companies and return only name, title, company, verified email, LinkedIn URL. Cap the search at 5 — don't burn credits on a wider scrape.

> Use Apollo to find 25 founders of US-based SaaS companies (10–50 employees), seed-funded in last 90 days. Save to leads.csv with name, title, company, verified email, LinkedIn URL.

> Plan the outbound chain: Apollo → Findymail → Claude personalisation → Smartlead → Sheets. For each step, name the exact MCP, what it takes from the previous step, and the budget per lead. Don't build yet — I want to see the cost model first.

---

## 🕸️ LightRAG MCP — Graph-RAG When Plain Vector Search Misses

> **You'll walk away with:** a power-up for your RAG approach — a graph-augmented retrieval that finds the connections between entities (people, projects, decisions) that pure vector search misses every time.

Pinecone and Qdrant search by meaning. That's enough until you ask "what did Sarah decide about pricing on the YC call?" — three entities, one event, scattered across 30 transcripts. Plain vector retrieval returns vague vibes. **Graph-RAG returns the answer.**

### What it does

LightRAG indexes your corpus twice: once as vectors (for meaning), once as a knowledge graph (entities + relations). On query, it walks the graph to find connected facts, then pulls the relevant chunks. Dramatically better recall on long-form, entity-heavy domains — client transcripts, research libraries, project notes.

### Install

```json
"lightrag": {
  "command": "npx",
  "args": ["-y", "lightrag-mcp"],
  "env": { "WORKING_DIR": "/Users/you/lightrag-store" }
}
```

### Worked example

50 client call transcripts (7,000+ words each). Plain RAG can't tell you who said what when:

> Use the LightRAG MCP: ingest every .md file in ~/Desktop/transcripts. Then answer: which 3 clients raised pricing concerns in the last 60 days, what was the specific concern each one raised, and which call surfaced each one? Return as a call-log table.

LightRAG walks the (Client → Concern → Date → Call) graph. Plain vector search would have returned 50 chunks containing the word "pricing."

**#1 beginner mistake:** Pointing LightRAG at a tiny corpus. The graph overhead doesn't pay off until you've got 50+ docs with overlapping entities. Below that, plain Qdrant is faster and cheaper.

**Prompts:**

> Install the LightRAG MCP pointed at ~/lightrag-store. Ingest 5 sample .md files from ~/Desktop/transcripts as a proof run. Return number of entities extracted, number of relations, and the top 3 entities by mention count. No queries yet — I want to see what the graph looks like.

> Compare LightRAG vs Qdrant on the same query: "Which projects has the engineering team decided to pause this quarter?" Run the same query through both. Return both answers side-by-side and tell me which is more useful and why.

---

## 📋 Notion MCP — Schema-Aware Writes That Hit The Right Fields

> **You'll walk away with:** Notion MCP upgraded from generic "create page" to schema-aware writes — Claude knows your exact database columns and types, so it drops Status, Priority, Owner, Due Date directly instead of dumping everything into free-text.

The basic Notion MCP gets you reads and generic writes. The schema-aware pattern is the upgrade: teaching Claude the actual column names and types of your database so it writes structured records — not blobs of prose pretending to be one.

### What it does

The Notion MCP calls `databases.retrieve` to fetch a database's schema (column name + type: Status/Select/Multi-Select/Date/Person/etc.). Once Claude has the schema, it writes real database properties — not content pasted into the page body.

**#1 beginner mistake:** Skipping the `databases.retrieve` step. Without the schema, Claude guesses field names, and writes fail silently. Always retrieve schemas first.

**Prompts:**

> Connect the Notion MCP. Retrieve the schema of my 'Engineering Tasks' database — list every column with its type (Status / Select / Date / Person / etc.). Don't write anything yet — I want to verify the integration sees the right shape.

> Read the last 20 messages in #bugs via the Slack MCP. For each one that's a real bug, create a structured row in my 'Engineering Tasks' Notion DB: Title=bug headline, Status='In Progress', Priority=High, Owner=@me, Due Date=next Friday — set all as real database properties, not pasted into the page body.

> Audit my 'Content Pipeline' Notion database. Retrieve its schema, then for each of the last 10 rows tell me which fields are blank that shouldn't be. Don't fix anything yet — I want a punch list.

---

## 🧪 Anthropic Files API + Code Execution — When To Use Them

> **You'll walk away with:** a clear call on when Anthropic's Files API and Code Execution earn their cost — and when they don't.

### Files API — what it actually is

A storage layer for files Claude can read by ID. Upload your CSV once — it lives on Anthropic's servers, referenced by file ID, up to 10 GB per file without re-uploading. Files persist; you delete them when you're done.

### Code Execution — what it actually is

A hosted Python sandbox with pandas, matplotlib, and friends pre-installed. Hand it a CSV, get a real PNG chart back. No local Python install, no LangChain, no vector store. Runs server-side.

### When they're the right tool

- **Heavy data crunching** you'd rather not run on your machine
- **Repeatable workflows** where the same reference file gets used over and over (Files API earns its keep here)

### When they're not

- **Production traffic.** These are interactive primitives — don't put them behind a customer-facing endpoint.
- **Tiny scripts.** If the work is 10 lines of Python you already know, run it locally — these have real cost per call.

**The cost gotcha:** Code Execution bills by sandbox time and tokens. A 20-minute exploration can quietly cost more than the same tokens in a normal API call. Set a mental sandbox-time limit per session.

**Prompts:**

> Upload this CSV via the Files API [path]. Then run Code Execution: load the file with pandas, group by month, pull total revenue as a bar chart, and return the chart as PNG. After it runs, tell me roughly what this cost in tokens + sandbox time.

> You're my use-case picker. I want to [describe the task]. Ask me one question — is this one-shot or recurring, is the data sensitive, how much Python do I already know? After my answer, ONE recommendation: local Claude Code, Files API + Code Execution, both, or just run it yourself. No hedging.

---

## 📚 Citations + PDF API — Claude's Built-In Source Trail

> **You'll walk away with:** a way to make Claude cite its own sources — page-numbered, auditable — without bolting on a third-party citation library or pasting PDFs into a separate chat.

Two native Anthropic features that get less airtime than they should: the **Citations API** and the **PDF API**. Used together, they're a research stack that fits inside one prompt — no LangChain, no vector store, no embedding pipeline.

### PDF API

You pass a PDF directly. Claude reads it — text, tables, layout, images on the page — without the markdown-conversion dance. Up to 100 pages per file. The model sees the document the way you do.

### Citations API

Turn citations on and every factual claim Claude makes carries a structured reference: which document, which page range, which exact snippet the claim came from. Not "the model thinks" — it's the highlighted line. You can read it, audit it, or hand it to a reviewer.

**The gotcha:** Citations only fire on text Claude pulled from the source document. Stuff it inferred or generalised won't get cited — which is the feature, not a bug. If a sentence has no citation, Claude synthesised it.

### Where this combo pays

- **Research papers** — "What does this paper say about X?" with page-cited answers.
- **Compliance docs** — auditable citations are the evidence trail.
- **Client deliverables** where "Claude said so" isn't enough — you need a footnote you can defend.

**Prompts:**

> Read this PDF via the PDF API [path or file ID]. Turn on Citations. Give me a 200-word summary of the paper's main argument. Every sentence must carry a citation pointing to the page and quoted snippet it came from. If a sentence has no source in the doc, mark it [model inference].

> I'm reviewing a 60-page contract. Upload it via the PDF API. With Citations on, give me: (1) every dollar amount mentioned with the clause it came from, (2) every date with clause context, (3) the top 3 risk clauses by page number. Each line gets a footnote. No summary paragraph — just the audit table.

---

## ☁️ Running Claude Code Inside Replit — Cloud Build Environment

> **You'll walk away with:** a working way to run Claude Code from anywhere — no local install, no Mac/Windows constraint, no "I'm on my work laptop" excuse.

Most people hit Claude Code on one machine and that's it. You can run Claude Code inside a **Replit Agent** session — a hosted Linux environment in the cloud — and drive it from any browser: iPad, on the train, borrowed laptop, locked-down work machine. Doesn't matter. The workspace lives in the cloud.

### What this looks like

Set up a Replit Agent session, run `npm i -g @anthropic-ai/claude-code` inside it, then run `claude` — but on Replit's servers, not yours. Your session persists; come back tomorrow from a different device and pick up where you left off.

### When this is the right call

- **You bounce between devices** and want a consistent build environment.
- **Your main machine can't install things** (work laptop, locked-down org).
- **You're teaching someone** and want them up in 5 minutes without a local setup detour.

### When it's not

- **Latency.** Every file operation round-trips to Replit. Local Claude Code is faster for tight keyboard loops.
- **No native MCPs.** Some MCPs assume local filesystem access — they won't work in a remote sandbox.

**The pattern most members land on:** local Claude Code as the daily driver, Replit-hosted Claude Code as the travel rig.

> **Done when:** you've set up a Replit Agent, installed Claude Code inside it, run one real task, and opened the same Replit session on a second device — the workspace was still there.

**Prompts:**

> I'm setting up Claude Code inside a Replit Agent for the first time. Walk me through it exactly — 7 steps, each one terminal-ready. After step 7 I should have Claude Code running and have completed one test prompt. No backstory — just the checklist.

> I'm a surface picker. I want to [describe the task]. Ask me one question — am I travelling, is the task sensitive (local DB / customer data), will I need tight keyboard loops? After my answer, ONE recommendation: local Claude Code, Replit-hosted, or both. No hedging.
