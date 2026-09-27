# PRO LVL 2 — 3D WEBSITES

## ▶️ Start Here — The $10k Illusion

![PRO LVL 2 — 3D Websites](/images/stage14-overview.png)

You've seen them: the agency sites, the product launches, the portfolios where the hero seems to move — a liquid shifts as you scroll, a product turns to reveal itself, the whole page feels like a film you're scrubbing through. They look like they cost $10,000 and took a studio a month. This module hands you the machine that builds them, and the secret is going to annoy you with how simple it is.

**It is not 3D. It is not WebGL wizardry. It is not a front-end genius hand-coding physics.** Ninety percent of those "how did they do that" sites are one trick: **a video, rendered long and beautiful, then bound to your scroll.** You scroll down, the video plays forward. You scroll up, it plays back. Your scroll bar becomes the playhead. That's it. That's the illusion. Once you see it, you can't unsee it — and you can build it.

### Why we're not teaching you real 3D

We built the real 3D version — Babylon.js, Three.js, the whole rig. It's a performance minefield: heavy, glitchy, melts phones, breaks for half your traffic. The animated-video approach gives you the same jaw-drop with none of the pain: it runs smooth on any phone, it never glitches, and — the part that matters for you — **Claude can build the whole thing from one prompt**, because we packaged the hard parts into a kit. (There's a bonus lesson at the end on the rare times real 3D is actually worth it.)

### The Site Kit does the engineering; you bring the taste

You're not going to wire scroll listeners or fight codecs. You install the **CCC Site Kit**, describe your brand, and it renders your assets, picks a scroll style, and assembles a finished, animated site. The engine is built and battle-tested. **Your** job is direction and judgment — the thing AI can't do for you.

### What you'll walk away with

- A live, animated, scroll-driven website for **your own brand** — indistinguishable from a $10k showcase, unmistakably yours
- The one structural truth — **engine + standard + config + assets** — that makes it repeatable
- The **7 scroll styles** and the instinct for which one fits a given product
- The render pipeline (**render long, ship frames**) that makes the motion look expensive
- It **deployed live**, self-contained, on a real URL — no third-party media host, no Cloudinary

---

## 🧩 Install the Site Kit — Engine + Config

> **You'll walk away with:** the kit installed and the one mental model that makes the rest of the module click: the part you never touch, and the one file that's entirely yours.

Every animated site in the kit is the same two layers. Understand the split and you'll never feel lost: **the engine (you never touch it) and the config (it's all yours).**

### What gets installed

- **Engine + standard** — the scroll wiring, the frame loader, the living-scrub motion, the quality floor. This is the part that took weeks and that breaks when humans hand-roll it. You leave it alone. It guarantees the site is good.
- **Config + assets** — one file, `site.config.mjs`, plus your rendered videos and images. This is where your brand lives: the name, the palette, the copy, the scroll style. You fill this in. It makes the site yours.

The proof this works: the showcase site **NOCTURNE** (a cold brew brand) was built from one config file and clears the $10k bar, and it was never hand-made. Same engine, different config, completely different site. That's the whole game.

### Install steps

**Desktop app:**
1. Go to **claudecodeclub.ai/site-kit**
2. Click **Download ZIP** — a file lands in your Downloads folder
3. Double-click that ZIP file — it opens into a folder called `site-kit`
4. Open the **Claude Code app** and point it at the `site-kit` folder
5. Paste: *"Read the README and walk me through building my site."*

**Terminal:**
```
/plugin marketplace add lpgraphy/ccc-plugins
/plugin install site-kit@claudecodeclub
```
Restart Claude Code so the plugin loads. Now `/build-site` works in any project.

**Look around (two minutes):** notice the split — `engine/` (never edit), `site.config.mjs` (entirely yours), and the three commands: `render.mjs`, `build.sh`, `deploy.sh`.

> **Done when:** the Site Kit is installed and you can point to the two layers — the engine you never touch and the `site.config.mjs` that's entirely yours.

**Prompt:**

> I've installed the CCC Site Kit. Read the README and the reference/ folder, then explain back to me in plain English: which files are the 'engine' I should never touch, and exactly what lives in site.config.mjs that I control. Then show me the three commands (render, build, deploy) and what each one does. Don't build anything yet — I just want the map.

---

## 🎞️ The 7 Scroll Styles

![The 7 Scroll Styles](/images/stage14-scroll-styles.png)

> **You'll walk away with:** a menu of the seven signature scroll moves premium sites use — and the instinct to match the right one to your product instead of guessing.

The reason these sites feel different from each other isn't the engine — it's the **scroll style**: the specific way motion responds as you move down the page. The Site Kit ships seven, each a real move you've seen on a site that made you stop.

### The 7 styles

- **A — Loop.** The hero plays a seamless, hypnotic loop (a liquid, a flame, a slow orbit) while you scroll past clean sections. Calm, premium, safe. The default when in doubt.
- **B — Scrub.** Your scroll is the playhead — scroll down, the rendered video moves forward frame by frame; scroll up, it reverses. The Apple product-page feel.
- **C — Cursor.** The hero reacts to the mouse — a spotlight, a fluid that follows the pointer, a parallax that tilts. Interactive and alive; great for portfolios and playful brands.
- **D — Horizontal.** The page locks and scrolls sideways through panels — a gallery, a timeline, a product lineup. Unexpected, so it reads as crafted.
- **E — Exploded.** Layers peel apart as you scroll — a product separates into its components, a scene reveals its depth. The "wait, what" move. Perfect for anything with parts or a story of construction.
- **F — Push-through.** The hero pushes into the scene — through a doorway, into a product, down a tunnel — so scrolling feels like moving forward in space. Cinematic and immersive.
- **G — Scrollytelling.** Text and media advance in choreographed beats — each scroll reveals the next chapter of a narrative. For brands that need to *explain*, not just dazzle.

**How to choose (one question):** What does your product want to *do* as the visitor moves?
- Transform (closed→open, before→after) → **B Scrub** or **E Exploded**
- Just look gorgeous and calm → **A Loop**
- Invite play / react to the person → **C Cursor**
- Show a lineup or a journey → **D Horizontal** or **F Push-through**
- Tell a story in order → **G Scrollytelling**

Don't overthink it — changing styles later is one line in the config.

> **Done when:** you can name all seven scroll styles and, given a product, say which one or two fit it and why — in one sentence each.

**Prompt:**

> Here's my brand and what I'm selling: [describe it in 2-3 lines]. Walk me through the 7 Site Kit scroll styles (A loop, B scrub, C cursor, D horizontal, E exploded, F push-through, G scrollytelling) and tell me the ONE that fits my product best and the runner-up — with a one-line reason for each, tied to what my product should do as someone scrolls. Be opinionated; don't list all seven as equal.

---

## 📐 The Standard — 2 Videos, 3 Images, Each Used Once

![The Standard](/images/stage14-standard.png)

> **You'll walk away with:** the quality floor that separates a $10k site from an obvious template — a rule so specific you can audit any site against it in ten seconds.

Here's the thing nobody tells you about why cheap sites look cheap: **repetition.** The same stock photo three times. The same gradient on every section. The eye clocks the repeat instantly and files the whole thing under "template." Premium sites obey a discipline, and the Site Kit enforces it for you.

A Site Kit build uses exactly **2 videos and 3 images — and each one appears exactly once.** Every visual moment is its own bespoke asset, earning its place. That single constraint is most of what makes a site read as expensive: nothing repeats, so nothing feels mass-produced.

- **2 videos:** the hero (the scroll-bound centerpiece) and one supporting motion moment deeper in the page.
- **3 images:** three distinct stills that each carry one section — a detail shot, a context shot, a closing shot.

When you brief Claude, the rule is literal: *five unique assets, each placed once.* If you ever catch the build reaching for the same asset twice, that's the bug — push back.

### The living scrub — heroes never freeze

The second half of the standard is motion behavior: **the hero never sits still.** Even at rest — before you've scrolled, or when you pause — it has a subtle, continuous life (a slow drift, a breathing loop). A frozen hero is the tell of an amateur build; a living one feels like a real, rendered film. The engine handles this for you.

> **Done when:** you can state the standard from memory — 2 videos + 3 images, each used exactly once, hero alive even at rest — and explain why duplication is the #1 tell of a cheap site.

**Prompt:**

> [paste a URL, or describe one]. Check it on the no-duplication rule (is every visual asset unique and used once, or is anything repeated?) and on motion (does the hero stay alive at rest — or does it freeze?). Tell me where it's on-standard and where it slips into 'template' territory.

---

## 🎬 Render Long, Ship Frames — The Pipeline

![Render Long, Ship Frames](/images/stage14-render-pipeline.png)

> **You'll walk away with:** the production secret behind the motion — how the kit makes a hero that looks like a film studio rendered it, and the one law that makes your video smooth instead of stuttering.

Now the engine room: where the moving hero actually comes from.

1. **Nano Banana Pro** generates the **still** — your hero frame, art-directed to your brand. A single, gorgeous image: the product, the liquid, the scene.
2. **Seedance** takes that still and animates it — **image-to-video** — turning the one frame into a few seconds of cinematic motion. Because the video *starts* from your exact still, it stays perfectly on brand instead of drifting into AI soup.

That's the magic order: **still first, then motion from the still.** It's why Site Kit heroes look directed, not generated.

### The meta law: render long, ship as frames

You **render the video long and high-quality**, then **ship it as a sequence of image frames** — not a raw `.mp4`.

Why? Because scrubbing a raw video file with scroll stutters — video codecs aren't built to jump to an arbitrary frame instantly, so scrubbing backward especially judders. But a folder of WebP image frames, swapped one per scroll position, is instant and perfectly smooth in both directions. **Render long, ship frames.** The kit does this conversion for you.

### The render laws (so your video looks pro, not AI)

- **Lock the camera.** A fixed or smoothly-controlled camera reads as cinema; a wandering one reads as a generated clip.
- **Constant velocity.** Steady motion, no random speed-ups. Scroll-bound motion must be even.
- **Motion blur off.** Blur fights frame-accurate scrubbing — kill it.
- **Sibling prompts for matched videos.** Your two videos should feel like the same film — generate them from related prompts so the palette and mood match.
- **START = END for loops.** A loop hero must end exactly where it began, or you'll see a visible jump.

> **Done when:** you can explain the pipeline in one breath — Nano Banana still → Seedance motion from that still → exported as WebP frames — and say why frames beat a raw mp4 for scroll-scrubbing.

**Prompt:**

> Explain how the Site Kit renders my hero, then help me write the render brief for MY brand: [describe the product/scene and the mood]. Cover the pipeline (Nano Banana Pro still → Seedance image-to-video from that still → exported as WebP frames) and apply the render laws to my brief: locked camera, constant velocity, motion blur off, and — if I'm using a loop style — start frame equals end frame. Give me the exact one-paragraph brief I'd hand the kit.

---

## 🎨 Design Laws — Why It Looks Expensive

![Design Laws](/images/stage14-design-laws.png)

> **You'll walk away with:** the handful of design laws that make the difference between 'looks expensive' and 'looks like AI made it' — the taste layer the kit enforces so you don't have to be a designer.

Great motion on a cheap-looking page still looks cheap. The Site Kit ships a set of **design laws** and reads them on every build so your site hits the floor automatically.

### The 5 laws

**Color:**
- **Use OKLCH, never raw hex guesses.** OKLCH is a color space where lightness is actually perceptual, so palettes stay balanced and rich instead of muddy. The kit works in it; you just pick a mood.
- **Never pure #000 or #fff.** Pure black and pure white are the instant tell of an amateur build. Premium sites use a near-black and a warm off-white — softer, deeper, more expensive. This one rule alone upgrades a page.
- **One accent, used with restraint.** A single accent color, deployed sparingly, reads as confident. Three accents fighting reads as a template.
- **Theme from the scene.** The strongest palettes are *pulled from your hero* — the colors already in your rendered image — so the whole page feels like one world instead of a UI bolted onto a photo.

**Copy:**
- **No em dashes in display copy.** A small tell, but a real one — clean punctuation reads as human-edited.
- **Copy earns its place.** Every headline says something specific. "Welcome to the future of X" is slop; a real claim about a real thing is not.

**Anti-slop:** The kit actively avoids AI-website clichés: the generic gradient blob, the three-identical-feature-cards, the stock-photo team grid, the meaningless floating shapes. If you see one creeping in, name it and cut it.

**How you actually use this:** You don't apply these by hand. You set the mood in the config and invoke the laws by name when pushing the build: "pull the palette from the hero," "kill the pure black," "one accent only." Knowing the laws is what makes your direction precise.

> **Done when:** you can name the core design laws — OKLCH palettes, never #000/#fff, one accent, theme-from-the-scene, no slop — and use them as direction when pushing a build.

**Prompt:**

> Teach me to direct my Site Kit build with the design laws. My brand mood is: [describe it — e.g. warm and earthy, cold and futuristic, luxe and minimal]. Translate that into a palette direction the kit can use (in OKLCH terms), tell me what my single accent should be and where to use it sparingly, and confirm the near-black / off-white I should use instead of pure #000/#fff. Then list the top 3 AI-website clichés I should make sure my build avoids.

---

## 🗺️ Pick Your Style + Write Your Config

![Pick Your Style + Write Config](/images/stage14-config.png)

> **You'll walk away with:** your actual config file written — brand, palette, copy, and chosen scroll style — through a guided interview with Claude, so the build has everything it needs to be yours.

Now you build your site's blueprint. This is the lesson where it stops being theory: you run the kit's interview, pick your style, and fill `site.config.mjs` for your real brand.

The kit's interview keeps it to four questions, on purpose:

1. What is the product or brand, in one line?
2. Who is it for, and what should they feel?
3. What's the one thing the hero should show?
4. What scroll style fits (from the seven you now know — or "you pick")?

Answer in plain English. Claude proposes a style, a palette pulled toward your mood, and draft copy. You're the director — push back until it's right.

### What the config looks like

After the interview, `site.config.mjs` holds your whole site as data:

- `brand` — name, tagline, the wordmark text
- `style` — your scroll style (A–G)
- `palette` — the mood the kit turns into OKLCH colors
- `copy` — headlines and section text (real claims, not slop)
- `assets` — the slots for your 2 videos + 3 images (rendered next lesson)

**Direct, don't settle.** If the proposed headline is generic, say so. If the style feels wrong once you see it described against your product, switch it — it's one line. The config is cheap to change; get it close now and perfect it after you see the first build.

> **Desktop app:** Run `/build-site` and talk — answer the four questions conversationally. Ask Claude to show you the filled `site.config.mjs` before moving on.

> **CLI (terminal):** Have Claude write `site.config.mjs` from your answers, then read it back field by field. Confirm the style and palette before you spend a single render on assets.

> **Done when:** you've run the interview, chosen a scroll style, set a palette mood and real (non-slop) copy — and you've reviewed it field by field.

**Prompt:**

> Run the Site Kit interview with me for my brand. Ask me the four questions (what it is in one line / who it's for and what they should feel / the one thing the hero shows / which of the 7 scroll styles), then propose a style, a palette mood, and draft headlines. Push me where my answers are vague. When we're agreed, write site.config.mjs and read it back to me field by field so I can approve it before we render anything.

---

## 🖼️ Render Your Assets, or Use the Stock Pack

> **You'll walk away with:** your five real assets in hand — 2 videos + 3 images for your brand, rendered to the standard — with a zero-cost fallback if you don't have a render key yet.

Config's done; now you make the visuals it points to. Two paths, both ship a real site — pick based on whether you have a `fal.ai` render key.

### Option A — Use the Stock Pack

No render key? The kit includes a **stock asset pack** so you're never blocked. Pick the set that fits your mood (**warm / cosmic / ember**) and the kit drops a matched, on-standard set into place. Ship today; swap in bespoke assets later.

> **Desktop app:** Tell Claude "use the stock pack, the warm set, for my site" (swap in *cosmic* or *ember* to taste).

> **Terminal:** `./use-stock.sh warm my-slug`

### Option B — Render your own

This route generates five custom assets themed to your brand — the pipeline from the last lesson (Nano Banana still → Seedance motion → frames).

> **Desktop app:** Tell Claude "render my 5 assets from my config using my fal key" — it runs the render for you.

Rendering runs on `fal.ai` and bills per asset. A full set (2 short videos + 3 images) comes to a few dollars on the kit's default models. Re-rolling a clip that drifted costs again, so QA each render before re-running. Want higher quality? Use **Veo 3** instead of Seedance on the hero only (~$0.40/sec, ~3–4× the Seedance cost) and use the default for everything else.

**The QA gate — START = END, no drift**

Before you build, eyeball every video:
- **The object is the same at the start and end.** AI video loves to drift — the product morphs, the logo warps. For a loop, the hero frame must equal the end frame. For a scrub, the object must stay itself the whole way through.
- **No melting, no warping, no soup.** If a render drifts, re-roll it. It's cheaper than shipping a broken illusion.

> **Done when:** you have your five assets in place, either bespoke-rendered or from the stock pack, QA'd for START=END and no drift, with nothing repeated.

**Prompt:**

> Help me get my Site Kit assets. If I have a FAL_KEY, render my 2 videos + 3 images from my config with the pipeline (Nano Banana still → Seedance motion → frames). If I don't, set me up with the stock pack instead (warm/cosmic/ember, recommend one for my mood). Either way, then QA the result with me: check each video for START=END and no drift/morphing, and confirm all five assets are unique and used once. Flag anything I should re-roll.

---

## 🚀 Build + Deploy — Self-Contained, No Cloudinary

> **You'll walk away with:** your animated site assembled and live on a real URL, built from your config and assets, then shipped in one command — no third-party media host to set up.

Everything's ready: config filled, five assets in place. Now you assemble the site and put it on the internet.

### Build + deploy

**Desktop app:** Just tell Claude in plain English:
> "Build my site, then open a local preview so I can scroll through it."

Claude runs the build, assembles your finished site, and gives you a preview link to click.

**Terminal:**
```
./build.sh
```
This reads your `site.config.mjs`, drops in your assets, wires the engine for your chosen scroll style, and writes a finished site to `dist/<your-slug>/`. Preview it:
```
cd dist && python3 -m http.server 8000
```
Then open `/<your-slug>/` in your browser.

**Iterate by conversation** — changes are a sentence, not an engineering task:
- "Make it darker." → palette tweak, rebuild.
- "Try the exploded style instead." → one line, rebuild.
- "New headline: [text]." → copy change, rebuild.
- "Re-render just the hero, warmer." → one asset, not the whole set.

**The hosting truth — no Cloudinary, no media host:** Your built site in `dist/<your-slug>/` is **fully self-contained**. The HTML, the engine, and every video frame and image live in that one folder. It deploys like any static site.

**Ship it:**

> **Desktop app:** Tell Claude "Deploy my site live and give me the public URL."

> **Terminal:** `./deploy.sh` — pushes your folder live to Vercel. Or drag `dist/<your-slug>/` onto Netlify Drop for an instant live URL.

Whichever path you took: **open the live URL on your phone and scroll-test it.** Smooth on a real device is the bar.

> **Done when:** your animated site is built, iterated at least once by conversation, and deployed live on a real public URL — self-contained, no third-party media host, smooth on a phone.

**Prompt:**

> Build and ship my Site Kit site. Run `./build.sh`, then help me preview it locally and scroll-test it. I'll say things like 'darker' or 'new headline' and you change the config and rebuild, re-rendering only what changed. When I'm happy, deploy it with `./deploy.sh` (or tell me how to drag dist/<slug> onto Netlify Drop) and give me the live URL. Confirm the build is self-contained, videos included, no Cloudinary, and remind me to check it on my phone.

---

## 🎯 Mission — Ship Your Animated Site

![Mission — Ship Your Animated Site](/images/stage14-mission.png)

> **You'll walk away with:** the centerpiece of your whole portfolio — a live, cinematic, scroll-animated website for your own brand, on a real URL, that looks like it cost $10k and is unmistakably yours.

This is the showpiece. Not a demo, not a template — a real animated site you'd put your name on, live on a URL, that makes someone stop scrolling and think *how did they do that.*

### The mission

1. **Install the kit** and confirm the two layers — engine you never touch, config that's yours.
2. **Pick your scroll style** for your product — the move that fits what it should do as people scroll.
3. **Write your config** through the interview — brand, palette, real copy, chosen style.
4. **Get your five assets** — render bespoke or use the stock pack — and QA for START=END, no drift, nothing repeated.
5. **Hold the design laws** — theme from the scene, never pure black/white, one accent, kill the slop.
6. **Build, iterate by conversation, and deploy live** — self-contained, real URL, smooth on a phone.

**The bar:** 2 videos + 3 images, each used once; a hero that's alive at rest; one confident accent; copy that means something.

**Show it off — lead with the scroll:**

- Post a **10–15s screen recording** of the scroll — open on the living hero, scroll through so the animation plays, end on a clean section. The moving site is the whole proof. A still screenshot cannot sell this; the recording can.
- Drop the **live URL** right under it so people can open it and scroll on their own phone.
- **Optional title card:** "I Built a $10k Animated Website" + your name + the live link, on a branded frame in your accent color — Claude can generate it.
- **3-line debrief:** the scroll style you chose and why, your favorite asset, and the one design law you leaned on hardest.

The flex isn't that it moves. Anyone can drop in a stock animation. The flex is a *living, on-brand, self-contained site* — rendered to the standard, shipped to a real URL, smooth on every phone — that looks like a studio made it and didn't.

> **Done when:** you've shipped a real, cinematic, scroll-animated website live on a public URL, on-standard (2 videos + 3 images each once, hero alive at rest), and posted a 10–15s scroll recording plus the live link with a 3-line debrief.

**Prompts:**

> Be my build partner for a live, $10k-class animated website using the CCC Site Kit, end to end. My brand: [describe it]. Walk me through it as atomic steps and stop for my OK between each: (1) confirm the kit's installed and show me the engine/config split; (2) pick my scroll style from the seven for my product and tell me why; (3) run the interview and write site.config.mjs with real copy; (4) get my 2 videos + 3 images (render with my FAL_KEY or stock pack) and QA them for START=END, no drift, nothing repeated; (5) hold the design laws — theme from the scene, no pure black/white, one accent, no slop; (6) build, let me iterate by conversation, then deploy live self-contained and verify it's smooth on my phone. Don't move to the next step until I confirm one works.

> Generate a clean title card for my launch post: the text 'I Built a $10k Animated Website', my name [name], and my live link [url], on a simple branded frame using my accent color [hex] — premium and minimal, so it reads as a real launch.

---

## 🎰 Bonus — When Real 3D Is Actually Worth It

![When Real 3D Is Worth It](/images/stage14-bonus.png)

> **You'll walk away with:** the honest exception to this whole module — the rare cases where true, live 3D beats the animated-video approach, and how to reach for it without the usual pain.

This module taught you the animated-video path because it wins almost every time: same wow, none of the performance pain, buildable from one prompt. But honesty matters.

**When real 3D earns it:**

- **The visitor needs to control the object freely** — spin a sneaker to any angle, configure a product, inspect hardware from all sides. A scrolled video gives a fixed path; real 3D gives free orbit. If free orbit is the value, you need 3D.
- **A true configurator** — change the color, swap the parts, see it update in real time. That's interactive state, not a pre-rendered clip.
- **A spatial concept the user must move through themselves** — data they fly around, an environment they navigate non-linearly.

If your product doesn't need free control or live configuration, animated video wins — it's lighter, smoother, and safer.

**How to do it without bleeding (the short version)**

If you genuinely need it: use **Babylon.js** (`@babylonjs/core`) as your default — most stable, with sane defaults Claude knows well. Use **Spline** if a designer is building the scene visually and you just need to drop it in. Reach for **R3F + drei** only if you're already deep in React. **Avoid raw, hand-rolled Three.js** unless you have a specific reason — it was the single biggest source of glitches in testing.

The non-negotiables if you go 3D:
- **Keep the model light** — low-poly, small file. A 50MB hero is why most 3D sites die on phones.
- **Lazy-load it** so the page paints first.
- **Ship a static fallback** (a normal image or video) for phones without GPUs and for `prefers-reduced-motion` — so nobody gets a blank box.

The instinct: **default to the animated-video Site Kit; reach for real 3D only when free control is the actual product.** And when you do, keep it light and always fall back gracefully.

> **Done when:** you can name the specific cases where real 3D beats an animated video — free orbit, live configuration, navigable space — and you know the safe defaults (Babylon.js, light models, lazy-load, static fallback) if you ever need it.

**Prompt:**

> I'm deciding between the animated-video Site Kit approach and real 3D for my [product/scene]. Tell me honestly: does my use case genuinely need free control or live configuration — the things that justify real 3D — or would a rendered, scroll-bound video give the same wow with less pain? Give me a verdict. If it's genuinely 3D, tell me to use Babylon.js, keep the model light, lazy-load it, and ship a static fallback — and warn me off hand-rolled Three.js.
