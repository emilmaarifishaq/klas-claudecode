# STAGE 4 — LANDING PAGES

## ▶️ STAGE 4 — Start Here

![Stage 4 — Landing Pages](/images/stage4-overview.png)

In Phase 3 you shipped a real website by describing it. A website *informs* — it tells people who you are. A **landing page** is different: it has exactly **one job**, and you can measure whether it did that job. Same Build Loop you already own (describe → preview → react → repeat), sharper intent.

This is the phase where "I made a website" becomes "I made something that gets me leads." Every freelance gig, every offer, every launch in the rest of this course rides on a page that converts.

### What you'll walk away with

- A live one-page landing page built for a single action
- A working form that actually delivers the lead to you
- The conversion anatomy you'll reuse for every offer forever
- Real reactions from real people — and the skill to iterate from them

> Stuck more than 10 minutes on anything here? Post a screenshot in the community or reach out to **Duncan**. Getting unstuck fast is the real skill — that hasn't changed since Phase 1.

---

## 🎯 The One Job Rule

![The One Job Rule](/images/stage4-one-job.png)

> **You'll walk away with:** the single mental model that makes every page you build from now on convert better.

A website can have ten goals. A landing page that converts has **one**. The moment a page asks a visitor to do two things, it does neither.

Before you build anything, finish this sentence out loud: *"When someone lands here, I want them to ______ — and nothing else."* Book a call. Join the free Skool. Drop their email. Buy the thing. One.

### What beginners get wrong

- They add a nav bar with 6 links — every link is an exit. A landing page usually has **no nav**.
- They stack three different CTAs ("book a call" *and* "download this" *and* "follow me"). Pick one.
- They write about themselves instead of the visitor's result.

The test: cover everything except your one button. Does the page still obviously push toward that button? If not, you have a website, not a landing page.

---

## 🧩 Anatomy Of A Page That Converts

![Anatomy Of A Page That Converts](/images/stage4-anatomy.png)

> **You'll walk away with:** a labeled blueprint you can hand Claude for any offer, any niche.

Every high-converting page is the same skeleton. Memorize it once, reuse it forever:

- **Hook headline** — the *result* the visitor gets, in their words. Not "I'm a productivity coach." Instead: "Get your week back — booked solid without the burnout."
- **The one promise** — one or two lines expanding the headline. What changes for them.
- **Proof** — a number, a testimonial, a logo, a before/after. Something real near the decision.
- **The bridge** — name the objection out loud and kill it ("No long contract. Cancel anytime.").
- **The one CTA, repeated** — the same button in the hero *and* again at the bottom. Same words both times.

That's it. Promise → proof → bridge → ask. Everything else is decoration. A page "looking nice" sitting on a server does nothing — this skeleton is the difference between "looks pretty" and "converting at 12%."

---

## ✍️ Write The Offer In Plain English First

![Write The Offer In Plain English First](/images/stage4-write-offer.png)

> **You'll walk away with:** offer copy a stranger gets in 5 seconds — before you build a single pixel.

The page doesn't convert because of the design. It converts because of the **offer and the words**. Most beginners build the box before they know what goes in it.

Open Claude Code and just *talk it out* first — no building yet. Answer in plain, ugly sentences. Claude will tighten it into a headline, a promise, three benefits, and one CTA line. That copy is your blueprint for the next lesson.

### What beginners get wrong

- Clever headlines nobody understands. Clear beats clever every time.
- Listing features ("60-min sessions, a workbook, Slack access") instead of outcomes ("stop guessing what to post — leave every week with a plan").
- Burying the price or the ask. If the action is "book a call," say it plainly.

**Prompt:**

> Act as a direct-response copywriter. My offer is [describe it in one messy paragraph]. My buyer is [who] and their biggest pain is [what]. The one action I want them to take is [book a call / join the waitlist / buy now]. Give me: a result-focused headline, a 2-sentence promise, 3 outcome bullets (not features), and one CTA line. Keep everything plain — no jargon, no fluff.

---

## 🏗️ Build It With Claude

> **You'll walk away with:** a live landing page built around your one action — in one sitting.

Now you hand Claude the skeleton *plus* the copy you just wrote and run the Build Loop from Phase 3. Pick the prompt closest to you, paste it, watch the live preview. Then react in plain words: "headline's weak — make it the outcome", "move the CTA above the fold", "the proof is too far from the button".

### Watch for

- Feed it your real copy from the last lesson — don't let Claude invent a generic offer.
- Demand the CTA appears **above the fold** (visible without scrolling) *and* at the bottom.
- 5–10 rounds is normal. That's the workflow, not failure — same as Phase 3.

**Prompt:**

> Build a modern, professionally-designed one-page landing page for [offer], built around ONE action. Use exactly this copy: headline [paste], promise [paste], 3 benefits [paste]. Keep ONE primary action — a '[action]' button — appearing above the fold AND again at the bottom. Structure: hero with headline + CTA → proof/testimonials → benefits → bridge (handle one objection) → final CTA. No nav bar. Open a live preview.

---

## 🪝 Capturing The Lead

![Capturing The Lead](/images/stage4-capture-lead.png)

> **You'll walk away with:** a form that actually puts the contact in front of you — not a button that does nothing.

The number one landing-page failure: a beautiful form that goes *nowhere*. A submit button that does nothing is worse than no button — the visitor thinks they're in, and they're gone.

One prompt wires the form to deliver the lead (your email, a Google Sheet, or a webhook) **and** shows the visitor a confirmation so they know it worked. Then you test it yourself before anyone else does.

### What beginners get wrong

- Shipping without ever submitting their own form once. Always do one test submission.
- No confirmation message — the visitor double-submits or assumes it failed.
- Too many fields. Ask only for what you'll actually use. Usually: name + email. That's it.

**Prompt:**

> Wire this page's email form to actually deliver the lead — pick the simplest reliable method and tell me which you used: email it to me at [your email], append to a Google Sheet, or POST to a webhook at [url]. Add a confirmation message the visitor sees after submitting ("You're in — check your inbox"). Then walk me through a test submission so I can confirm it works.

---

## 🌍 Ship It Live & Iterate From Real Reactions

![Ship It Live & Iterate](/images/stage4-ship.png)

> **You'll walk away with:** a public URL you can text to anyone — and a system for improving it from real behavior, not guesses.

Deployment is the gatekept "you need a CS degree" myth — Phase 3 already broke that for you. It's still one prompt: Claude deploys to free hosting, gives you a live link and an inline preview, and walks any sign-in one click at a time.

But shipping isn't the finish line — it's the **start of iteration**. A page only tells you the truth once a real human hits it. Send the link to 5 people today. Watch what they do, ask what almost stopped them, then feed that back to Claude.

### What beginners get wrong

- Polishing forever before showing anyone. Ugly-but-live and tested beats pretty-but-local.
- "Improving" the page from their own opinion instead of a real person's reaction.
- Changing five things at once — then not knowing which change helped.

**Prompt:**

> Deploy this landing page to the web and give me the live public URL. Use the simplest reliable free option (Vercel, Netlify, or equivalent). Walk me through any sign-in one step at a time. Confirm it's live by loading the URL and showing me the above-the-fold view.

---

## 🎯 STAGE 4 — Homework

![Stage 4 Homework](/images/stage4-homework.png)

Reps beat reading. Don't move on until every box below is true:

- Write the offer copy in plain English *with Claude* before building anything.
- Build **one** real landing page with a single action (yours, a friend's, or a made-up offer).
- Run at least **5 rounds** of the describe → preview → react loop on it.
- Wire the form and **submit a real test** — confirm the lead reached you.
- **Deploy it** and open the live URL on your phone.
- **Post the link in the Skool community** with a screenshot of the page above the fold.

> **✅ Done when:** your landing page is live on a public URL, a test submission reached your inbox, and you have one real piece of visitor feedback to iterate on.

---

## ✅ STAGE 4 — Summary

![Stage 4 Summary](/images/stage4-summary.png)

You just built something most people never do: a page with a **job**, not just a vibe. You learned the One Job Rule, the convert-anywhere anatomy (hook → promise → proof → bridge → one CTA), writing the offer in plain English before touching design, wiring a form that actually delivers, and that the real work starts *after* you ship — iterating from real reactions, not your own opinion.

This is the engine under every offer in the rest of the course. You're not "building websites" — you're **directing pages that make something happen**.

**Your progress:**
- ✅ STAGE 1 — Start Here
- ✅ STAGE 2 — Memory
- ✅ STAGE 3 — Your First Website
- ✅ STAGE 4 — Landing Pages
- ⬜ STAGE 5 — Skills & MCP
- ⬜ STAGE 6 — Build a Game
- ⬜ STAGE 7 — Agents
- ⬜ STAGE 8 — AI Video Mastery
- ⬜ STAGE 9 — Scale & Automate

---

## ✍️ STAGE 4 — Your Mission

![Stage 4 Mission](/images/stage4-mission.png)

Post your **live landing page link** in the community, titled **"Phase 4 Mission"**. Add two lines: the one action it's built to get, and one real reaction you got from a stranger. Tested-and-live beats pretty-and-theoretical every time. Tag **Duncan** for a conversion teardown.

---

## 🤝 Get Involved

Drop your page in the feed for a teardown — feedback from people one step ahead is the cheat code. Then go review someone else's Phase 4 page using the anatomy you just learned (hook → promise → proof → bridge → one CTA). Spotting what's missing in someone else's page is how you learn to see it in your own.

---

## 🎯 10 Proven Landing Pages Prompts

**1. Conversion Structure Build**

Visual quality is now easy; the real differentiator is conversion-focused structure with a single message and one CTA per section.

> Build me a landing page for [PRODUCT / OFFER] using this conversion structure in order: a hero with a hook and one clear value proposition (the thing they get), then a short explainer of what it does, then social proof / testimonials, then the value proposition in more detail, then ONE friction-reducing call-to-action. One message per section — if you ask someone to do more than one thing, they do zero.

**2. Deep Interview Before Building**

Depth of answers at the interview stage determines landing-page quality.

> Before you build my landing page, interview me deeply. Ask me: who is this for, what's the transformation, what proof exists, what objections need killing, and what's the ONE action. After I answer, write the full copy — headline, promise, 3 outcome bullets, proof block, bridge — then build the page from that copy.

**3. Clone & Swap**

> Here's a landing page I love: [URL or screenshot]. Clone its layout and conversion structure for my offer: [YOUR OFFER]. Keep all the structural elements that make it convert, swap every word and image for mine. Deploy it live.

[📄 Download Full Landing Pages Prompt Pack (PDF)](/pdfs/prompt-pack-04-landing.pdf)

---

## 🏆 Show It Off — Launch a Landing Page

A landing page is the most *postable* thing you'll build — it has one job and a link anyone can click.

### 1. A Landing Page for Any Idea (~15 min)

> Build a high-converting landing page for [PRODUCT/OFFER]. Structure it: hook headline, the value, 3 proof points, and ONE clear call to action. One job only. Deploy it live and give me the URL.

### 2. Clone a Brand's Landing Page (~15 min)

> Here's a landing page I want to learn from: [URL or SCREENSHOT]. Rebuild it at the same quality for my offer: [YOUR OFFER]. Keep the conversion structure, swap the content. Deploy it.

### 3. A 'Coming Soon' Waitlist Page (~10 min)

> Build a 'coming soon' waitlist landing page for [IDEA]. One headline, one sentence of promise, one email capture form. Deploy it live and give me the URL — I want to start collecting emails today.
