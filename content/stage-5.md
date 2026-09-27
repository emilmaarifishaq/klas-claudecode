# STAGE 5 — SKILLS & MCPS

## ▶️ STAGE 5 — Start Here

![Stage 5 — Skills & MCPs](/images/stage5-overview.png)

Up to now you've been describing things and Claude has been building them. This phase is where Claude stops just *knowing* things and starts *doing* things — with real tools, in the real world.

### The two power-ups

- **A Skill** = a ready-made set of instructions you switch on, so Claude does a whole job *the right way* every time — like handing it a trained specialist instead of explaining from scratch.
- **An MCP** = a connection that lets Claude touch a real outside tool — your GitHub, your Notion, your design files, a database — instead of you copy-pasting back and forth.

### What you'll walk away with

- A plain-English grip on what a Skill is and why it can 10× your output
- At least one real Skill installed and used on a build
- The beginner MCP pack connected so Claude can reach real tools
- One end-to-end thing done that you *could not do* before this phase
- A simple rule for what to turn on — and what to leave off

---

## 🪄 What Is A Skill, Really?

![What You'll Walk Away With](/images/stage5-walkaway.png)

> **You'll walk away with:** a clear mental model of Skills — so you stop re-explaining the same job and start invoking it.

Imagine you hired a great assistant, but every single time you asked for something you had to re-explain *exactly* how you like it done. Exhausting. A **Skill** fixes that.

A Skill is a packaged set of instructions (sometimes with helper files) that teaches Claude to do one job *well*, the same way, every time. Someone already figured out the right steps and bottled them up. You switch it on and say "go."

### Why this 10×'s your output

- **No re-explaining.** "Design this nicely" becomes a 200-word brief Claude already has.
- **Consistency.** The 5th thing you make looks as good as the 1st.
- **It can act, not just answer.** A good Skill reads files, runs steps, and produces a finished result — not advice about a result.

Think of the difference between "give me tips on writing a sales page" and a Skill that just *writes the sales page* using a proven structure. Same model. Wildly different output.

---

## 📦 Finding & Installing Your First Skill (Desktop App)

![Finding & Installing Your First Skill](/images/stage5-finding-skill.png)

> **You'll walk away with:** one real Skill installed and showing up in your session — your first plug-in.

> 👉 **On the Claude desktop app?** Skills are installed from the **+** button → **Skills** tab in the Claude Code panel. Browse, click Install, and the Skill loads into your session.

> ⌨️ **Using the terminal?** Run `/plugin` to open the marketplace. Search for the Skill by name and install it. Run `/reload-plugins` to activate.

Skills come from **marketplaces** — think of it like an app store for Claude. The official Anthropic marketplace is called `claude-plugins-official`, and it's already there the moment you open Claude Code.

**What to install first:** the **Frontend Design Skill** (search "frontend design" or "design system"). It's the highest-leverage Skill for most members.

**After installing:**

> Use the frontend design skill on my current project. Run a complete design pass — type scale, palette, spacing, hierarchy. Show me a before-and-after screenshot so I can see what changed.

---

## 🖥️ Terminal — Finding & Installing Your First Skill

> **You'll walk away with:** one real Skill installed from the terminal — your first plug-in.

Skills come from **marketplaces** — think of it like an app store for Claude. The official Anthropic marketplace (`claude-plugins-official`) is already present the moment you open Claude Code.

**Install one (in the terminal):**

In your terminal, run `/plugin` — a panel opens with tabs: **Discover**, **Installed**, **Marketplace**, **Errors**. Find a Skill that fits what you do, press Enter to preview it, pick **User scope** (use it everywhere), and install. Then run `/reload-plugins` to switch it on.

**Marketplace not showing? Fix in order:**

1. `brew upgrade claude-code` (Mac) or `npm install -g @anthropic-ai/claude-code@latest` (Windows)
2. Run `/plugin marketplace list` to confirm the official catalog is present.

---

## 🔌 What Is MCP — In Plain English

![What Is MCP — In Plain English](/images/stage5-mcp.png)

> **You'll walk away with:** a no-jargon understanding of MCP, so 'connect a server' stops sounding scary.

By default, Claude only knows what's in your conversation. It can't peek at your GitHub, your Notion, your database, or your design files unless you paste it all in by hand. That's the wall.

**MCP knocks the wall down.** MCP (Model Context Protocol) is just an agreed-upon way for Claude to plug into a real outside tool and *use it directly*. "Server" is the scary-sounding word — ignore the word, keep the idea: **a connection to one of your real tools.**

Once a tool is connected, you stop copy-pasting and start saying things like:

- "Put this project on my GitHub and push it."
- "Pull the latest design from Figma and match the site to it."
- "Save this to a new page in my Notion."
- "Look at the database and tell me which users signed up this week."

Notice the pattern: you describe the *outcome*, Claude does it *in the real tool*. That's the leverage.

---

## 🖥️ The Beginner MCP Pack — What To Turn On First (Desktop App)

The starter pack: **three MCPs, installed in order.** Don't install everything at once — each one should earn its keep before the next one goes in.

**In the desktop app:** click **+** → **Connectors** → search and connect each one.

**The three to start with:**

1. **GitHub** — Claude saves and pushes your projects. Never lose a build.
2. **Filesystem** — Claude reads and writes files on your machine directly. No copy-paste.
3. **Web Fetch / Search** — Claude pulls live information from the web mid-conversation.

**The trap:** don't install 12 MCPs because they look interesting. Every connection is a new surface for things to go wrong. Install one, use it on a real task, confirm it helps, then add the next.

---

## 🖥️ Terminal — The Beginner MCP Pack — What To Turn On

> **You'll walk away with:** a short, deliberate starter pack connected from the terminal — not a bloated mess.

The official marketplace (`claude-plugins-official`) bundles pre-configured MCP connections as plugins. You don't hard-type server addresses — you install the plugin, sign in once, done.

**The beginner pack (turn these on, in this order):**

- **GitHub** — a safe home for everything you build. Lets Claude save and push your projects. Install first, always.
- **Figma** — if you design anywhere, Claude can read your designs and match them.
- **Notion** — if you live in Notion, Claude can read and write your pages.
- **Supabase** — only once you're building something with a database (later stages).

Three to four MCPs is plenty.

**Turn them on (in the terminal):**

Install each plugin with `/plugin install github@anthropic/claude-plugins-official`, then run `/reload-plugins`. Run `/mcp` any time to see exactly what's connected and whether it's running.

If `/plugin` is an unknown command: update Claude Code (`npm install -g @anthropic-ai/claude-code@latest`) and restart.

---

## ⚡ The Full Move: A Skill + An MCP On A Real Build

![A Skill + An MCP On A Real Build](/images/stage5-skill-mcp-combo.png)

> **You'll walk away with:** one tangibly better result, done by Claude *using* tools — the feeling of doing vs. describing.

Time to feel it. Go back to the website or landing page you built in Phase 3 or 4 — your real one. We're going to make it visibly better *and* get it safely stored, using a Skill and an MCP together in one flow.

**The end-to-end:**

1. A **design Skill** does a real polish pass — better type scale, spacing, one cohesive palette — using a proven method, not vibes.
2. The **GitHub MCP** then takes that improved project and saves it to a real repo you own, so it's backed up and shareable.

**What to watch for:**

- Ask for a **before/after** so you can actually see the Skill earned its keep.
- If GitHub asks you to sign in, that's the one-time login — one click, you're through.
- Notice how little you typed compared to what happened.

**Prompt:**

> Use the frontend design skill to do a full design pass on my current project — type, palette, spacing, hierarchy. Show me before and after. Then use the GitHub MCP to save the improved project: create a new repo called [name], commit everything with a clean message, and push it. Give me the repo URL when it's live.

---

## 🎯 STAGE 5 — Homework

![Stage 5 Homework](/images/stage5-homework.png)

Don't move on until you've actually plugged things in — reading about tools isn't using tools.

- Add **one** real Skill from **+** → **Skills**, then connect **GitHub** from **+** → **Connectors** and sign in once.
- Open the Connectors list and read out loud what Claude can now reach.
- Use the Skill + GitHub MCP on a **real Phase 3/4 build** (polish it, push it).
- Write down **one thing Claude just did that you couldn't do before** this phase.

> **✅ Done when:** GitHub is connected and one of your builds is improved by a Skill and pushed to a real repo.

---

## ✅ STAGE 5 — Summary

![Stage 5 Summary](/images/stage5-summary.png)

You just crossed the line most people never cross. Claude isn't only smart now — it's **equipped**. You learned what a Skill is (a bottled specialist you switch on), how to find and install one, what MCP really is in plain English (a connection to your real tools), the small starter pack to turn on first, and the trap of over-installing. Then you ran the full move: a Skill + an MCP doing real work while you directed.

From here you compose capability instead of grinding it out by hand. That's the difference between a hobbyist and an operator.

**Your progress:**
- ✅ STAGE 1 — Start Here
- ✅ STAGE 2 — Memory
- ✅ STAGE 3 — Your First Website
- ✅ STAGE 4 — Landing Pages
- ✅ STAGE 5 — Skills & MCP
- ⬜ STAGE 6 — Build a Game
- ⬜ STAGE 7 — Agents
- ⬜ STAGE 8 — AI Video Mastery
- ⬜ STAGE 9 — Scale & Automate

---

## ✍️ STAGE 5 — Your Mission

![Stage 5 Mission](/images/stage5-mission.png)

Post in the community titled **"Phase 5 Mission"**: name **one Skill or MCP you turned on** and the one thing it let Claude do that you couldn't do before. One screenshot of the result beats a paragraph. Tag **Duncan** if you want a recommendation for the next Skill to add for *your* kind of work.

---

## 🤝 Get Involved

Share your Skill setup in the community — what you installed, what it does, and what surprised you. The fastest way to find the next right Skill is to see what people one stage ahead are running.

---

## 🤝 Get Involved

There's a running **community stack thread** where members share their favourite Skill + MCP combos — it's pure gold and saves you weeks of trial and error. Drop yours in, then go find one person in Phase 1–4 still copy-pasting by hand and show them their first MCP. Teaching the plug-in move is how it sticks for you too.

---

## 🥇 Skill #1 — The Frontend Design Skill

> **You'll walk away with:** the single Skill that makes anything you build *look* like a real product instead of a hackathon demo — installed, switched on, and proving itself on your existing site within 10 minutes.

If you only ever install one Skill in your life, this is it. Most beginner builds in Phases 3 and 4 work fine — they just don't *look* finished. Generic font, ten random shades of grey, buttons that float in the middle of nothing. Not because Claude can't design — because nobody briefed it on how.

A **frontend design Skill** is that brief, bottled. It teaches Claude the rules a senior product designer would apply on a real client project: a single cohesive palette, a real type scale, deliberate whitespace, hierarchy that actually leads the eye somewhere, and — the part most people skip — *restraint*. The output isn't louder. It's quieter. Calmer. More expensive-looking.

**To install:** `/plugin` → search "frontend design" → install. Then:

> Use the frontend design skill on this project. Do a full pass — type scale, palette, spacing, component consistency. Show me before and after.

---

## 🥈 Skill #2 — The Skill Creator (Build Your Own)

![Skill Creator](/images/stage5-skill-creator.png)

> **You'll walk away with:** the meta Skill that turns your repeated workflows into a permanent one-command move — so the second time you do anything, you never type the long brief again.

Here's the thing nobody tells beginners about Skills: the most valuable Skill you'll ever own isn't one you install — it's one you **make**. Every week you find yourself typing the same long prompt. A custom Skill bottles that up. Next time, you just invoke it. Once you grasp this, Skills stop being something you download and start being something you build. Your library becomes uniquely yours, and the leverage compounds week after week.

**To install:** `/plugin` → search "skill creator" → install. Then:

> Use the skill-creator skill to build me a new skill called [SKILL NAME]. It should [WHAT IT DOES, INPUTS AND OUTPUTS]. First clarify your understanding by asking me questions one at a time — don't start building until you're 95% confident, then discuss the data sources and tools, then build it. Save it to my global skills directory so it works across every project.

---

## 🥉 Skill #3 — The Web Research Skill

> **You'll walk away with:** a Skill that turns vague 'look this up for me' moments into structured, sourced, decision-ready briefs — so you stop opening 14 browser tabs and start receiving research the way a partner at a consulting firm would receive it.

Most beginners use plain Claude for research and get a confident-sounding paragraph with no sources, no structure, and no way to tell what's real. A proper **web research Skill** gives Claude the spine of a junior analyst: a search plan, multiple queries, source ranking, cross-checking, citations, and a final brief in a format you can actually act on.

This is the Skill that turns "Claude, what should I charge for my offer?" from a guessing game into a five-page memo with comparable pricing from real competitors, ranges by package tier, and a recommended position.

**To install:** `/plugin` → search "deep research" or "web research" → install. Then:

> Use the research skill to investigate [TOPIC]. I need: the current landscape, 3-5 key players, what they charge / how they position, and a recommended angle for me. Cite your sources.

---

## 🔌 MCP #1 — GitHub

> **You'll walk away with:** Claude saving, updating, and shipping your real projects to real repos — so nothing you build ever lives only on your laptop again.

**Why GitHub first:** every other thing you build in this course needs somewhere to live — backed up, versioned, shareable, recoverable when your laptop dies. Without a real repo, every project is a single accident away from gone.

With the GitHub MCP wired in, Claude becomes the thing that *commits and pushes for you* — you describe the intent ("save this project, name the repo, push it"), it runs the git commands, creates the repo on github.com, and hands you back the link.

**To connect (desktop app):** **+** → **Connectors** → search GitHub → connect → sign in once.

**Prompt after connecting:**

> Save this project to a new GitHub repo called [name]. Make it private. Commit everything with a clean message describing what it is. Push it. Give me the URL.

---

## 🔌 MCP #2 — Filesystem

> **You'll walk away with:** Claude reading and writing files on your machine directly — no more copy-pasting content into the chat.

With the Filesystem MCP, Claude can open a file, read it, edit it, and save it back — without you touching it. It can scan a folder, find relevant files, and work across them in one go.

**Best uses:** refactoring a project across many files, updating copy in a site, reading a design system doc and applying it.

**To connect:** **+** → **Connectors** → search Filesystem → connect → point it at your working folder.

---

## 🔌 MCP #3 — Web Fetch / Search

> **You'll walk away with:** Claude that can look things up live during a conversation — no more "my knowledge cutoff is..." dead ends.

With Web Fetch connected, Claude can pull the current content of any URL mid-session, and with Web Search it can run a real-time search and work with the results. This unlocks research that doesn't go stale.

**Best uses:** competitive research, checking current pricing, pulling docs for a library Claude doesn't know yet, reading a specific article you paste.

**To connect:** **+** → **Connectors** → search "Web Fetch" or "Brave Search" → connect.

---

## 🎯 10 Proven Skills & MCPs Prompts

**1. Install the Skill Creator**

> Install the official Skill Creator plugin for me (run /plugin, search 'skill creator', install it). Once it's in, confirm it's ready — I'm going to use it to build, benchmark, and trigger-tune all my future skills.

**2. Create a Skill the Right Way**

> Use the skill-creator skill to build me a new skill called [SKILL NAME]. It should [WHAT IT DOES, INPUTS AND OUTPUTS]. First clarify your understanding by asking me questions one at a time — don't start building until you've confirmed you understand exactly what I need. Then build it, benchmark it with and without the skill, and give me a trigger phrase I can use to invoke it.

**3. Design Pass with the Frontend Skill**

> Use the frontend design skill on my current project. Full pass — type scale, palette, spacing, hierarchy, component consistency. Show me before and after so I can see exactly what changed and why.

[📄 Download Full Skills & MCPs Prompt Pack (PDF)](/pdfs/prompt-pack-05-skills-mcps.pdf)

---

## 🚥 When An MCP Shows Red (The 'It Failed' Fix)

If an MCP shows a red dot or "disconnected" in your connector list, it usually means one of three things:

1. **The token expired** — re-authenticate: go to **+** → **Connectors** → find the MCP → click reconnect → sign in again.
2. **The server went offline** — wait 5 minutes and try again. External MCP servers (Notion, GitHub, etc.) occasionally restart.
3. **The config is broken** — delete the connector and re-add it from scratch.

**The one-line fix to try first:**

> My [GitHub / Notion / Filesystem] MCP is showing red. Help me diagnose and reconnect it — walk me through each step.
