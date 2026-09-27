Create a Claude Code skill that generates carousel copy and renders slides using the attached or existing design system. The skill takes a topic as input and outputs a ready-to-render JSON spec plus captions.

\---

SKILL INPUTS (read from argument or ask once at start):  
\- topic: the angle or concept for this carousel  
\- icp: one sentence describing the target audience (e.g. "non-technical coaches and consultants who want to build with AI")  
\- offer: what the CTA leads to (name, price, URL, comment keyword)  
\- voice: 2-3 adjectives describing tone (e.g. "direct, plain English, builder-focused")

\---

STEP 1 — EXTRACT THE TENSION  
From the topic, identify:  
\- Core frustration: what problem or gap does this hit?  
\- Proof point: what specific result anchors the value? (must include a number — time, money, output count)  
\- Trigger moment: which of these does it tap?  
  A) Someone told them they need a skill they don't have  
  B) They're doing something by hand that a tool could do  
  C) They saw someone else get a result and thought "I could never do that"

\---

STEP 2 — HOOK SELECTION  
Generate 3 hook options. Score each against all 3 gates:  
\- Gate 1: Would someone with zero technical background instantly understand the value?  
\- Gate 2: Is a specific number present (time, money, output, count)?  
\- Gate 3: Does missing out feel costly, or does the outcome feel achievable?

Label each hook PASS/FAIL per gate. Only hooks that pass all 3 are eligible. Select the strongest automatically. If none pass, rewrite until one does.

Hook must be splittable into 2-3 short segments (\~12 chars each) for the cover slide.

\---

STEP 3 — FORMAT SELECTION  
Pick one based on topic and hook:  
\- TUTORIAL: step-by-step how-to. Hook is instructional.  
\- MEMBER WIN: transformation story. Hook names a before/after result.  
\- LIST: hook contains a number. Topic is enumerable.  
\- TOOL DROP: new tool, feature, or release. Hook announces a new capability.

\---

STEP 4 — WRITE SLIDE COPY

Narrative arc: Hook → Pain → Steps/Items → Proof → Bridge → CTA

Copy rules (enforce on every slide):  
\- Headlines: 7 words max on all non-cover slides  
\- Body: 1 sentence max. If you need 2, the headline is doing too little.  
\- One idea per slide — never two claims  
\- Plain English always — no jargon, no tech terms, no acronyms unexplained  
\- Specific numbers mandatory on any slide making a result claim  
\- Present tense for outcomes ("are building," "have shipped")  
\- Never use em dashes  
\- Slide 2 must be self-contained — no references to a community, group, or "inside" that a cold viewer wouldn't understand

Slide jobs:

TUTORIAL format:  
1 — Hook. Cover only. No body.  
2 — The specific end result. One sentence making it real.  
3 — STEP 1\. 4-word headline. Terminal or action. One sentence payoff.  
4 — STEP 2\. Same structure.  
5 — STEP 3\. Same structure.  
6 — Proof. Specific number as headline. One sentence outcome.  
7 — Bridge. Urgency or identity. No price. Member/community count only.  
8 — CTA. Fixed: comment keyword to get the offer.

MEMBER WIN format:  
1 — Hook. The result. e.g. "She cancelled her $500/month contractor."  
2 — The win. Before → after. Who \+ how fast.  
3 — Before state. What they were doing/paying manually.  
4 — First move. What they asked the tool to do. Plain English.  
5 — What shipped. Name the specific output.  
6 — The number. Time saved, money saved, or output produced.  
7 — Bridge. Urgency or identity. No price. Member/community count only.  
8 — CTA. Fixed: comment keyword to get the offer.

LIST format:  
1 — Hook. Lead with the count.  
2 — Combined outcome. What having all items unlocks.  
3-6 — One item per slide. 5 words max per item. Specific.  
7 — Bridge.  
8 — CTA.

TOOL DROP format:  
1 — Hook. Lead with the builder outcome, not the feature name.  
2 — What changed. What's now possible. Why non-technical people benefit.  
3-5 — One use case per slide. Who benefits.  
6 — Real example. Specific result. Time or output.  
7 — Bridge.  
8 — CTA.

\---

STEP 5 — GENERATE SLIDE IMAGES WITH HIGGSFIELD

Use the Higgsfield MCP tool to generate each slide as an image. Model: nano\_banana\_2. Aspect ratio: 4:5 for Instagram (1080x1350).

Submit all slides in parallel, then wait for each individually by variable name — never collect URLs from a shared wait loop, as results return in completion order not submission order, which scrambles the slide mapping.

Pattern:  
\- Call higgsfield\_generate (or the MCP equivalent) with model "nano\_banana\_2", aspect\_ratio "4:5", and the prompt below  
\- Capture the job ID per slide  
\- Wait for each job by its variable name: URL\_01, URL\_02, etc.  
\- Download each result

HOW TO PROMPT HIGGSFIELD FOR CAROUSELS:

Every slide prompt must specify: background color field, typography treatment, content layout, and grain texture. Use this structure:

"Editorial riso-print poster. \[BACKGROUND: solid orange (\#E96A3C) / warm cream (\#E8DCC4) / charcoal (\#1C1B17)\]. \[HEADLINE treatment: massive Anton heavy condensed uppercase type, color, size relative to slide\]. \[CONTENT: what sits below — numbered list / X-list / single stat / step list\]. \[FOOTER: slide number "0N / 08" in small mono caps, bottom-left. Right-pointing arrow bottom-right if not final slide.\] Heavy grain texture. No gradients. Two-ink riso print: \[color 1\] and \[color 2\] only."

Slide color rotation (alternate for visual rhythm):  
\- Slide 1 (Cover): orange field, cream type  
\- Slide 2: cream field, charcoal type, orange accents  
\- Slide 3: orange field, cream type  
\- Slide 4: cream field, charcoal type  
\- Slide 5: orange field, cream type  
\- Slide 6: cream field, charcoal type  
\- Slide 7: charcoal field, cream type  
\- Slide 8 (CTA): orange field, cream type — price prominent

Cover slide prompt template:  
"Editorial riso-print poster. Left 60% solid orange (\#E96A3C), right 40% warm cream (\#E8DCC4). Massive hero word '\[HERO WORD\]' in Anton heavy condensed uppercase cream type spans full width bleeding off both edges, crossing the split line. Below on the orange side in small cream mono caps: '\[SUBLINE — pain \+ payoff, 10 words max\]'. Right panel lower: three lines in small charcoal mono caps. Vertical ticker down the right edge: '\[TOPIC WORDS\]' in tiny charcoal mono caps. Bold right-pointing arrow bottom right in charcoal. Heavy grain texture. No gradients. Two-ink riso: orange and cream."

Body slide prompt template:  
"Editorial riso-print poster. Full \[COLOR\] background. Large bold \[TYPE COLOR\] Anton condensed headline: '\[HEADLINE\]'. Short \[ACCENT COLOR\] horizontal rule beneath. Center: \[CONTENT — e.g. 'three lines in mono caps with X marks' / 'numbered list 01 02 03' / 'single massive stat number'\]. Bottom left: '0\[N\] / 08' in small \[TYPE COLOR\] mono caps. Bottom right: right-pointing arrow in \[TYPE COLOR\]. Heavy grain texture. No gradients. Two-ink riso: \[color 1\] and \[color 2\]."

CTA slide prompt template:  
"Editorial riso-print poster. Full solid orange (\#E96A3C) field. Large bold cream Anton condensed: '\[CTA HEADLINE\]'. Below it massive display type: '\[PRICE OR ACTION\]'. Below in smaller cream mono caps: '\[LOCK-IN LINE\]'. Short cream horizontal rule. Bottom strip: solid charcoal full bleed with '\[SOCIAL PROOF LINE\]' in orange mono caps. No arrow — final slide. Heavy grain texture. No gradients."

\---

STEP 6 — WRITE CAPTIONS

Instagram:  
Line 1: exact hook from slide 1  
Lines 2-3: 2-3 short sentences teasing the value  
CTA line: "Comment \[keyword\] and I'll send you \[offer name\]."  
Hashtags: 5 max, relevant to topic

LinkedIn:  
Line 1: exact hook from slide 1  
1-2 setup sentences explaining why the problem exists  
Concept name \+ what it does, formatted as a → list (3 items)  
1 sentence resolution  
CTA: "Like this \+ comment \[keyword\] below and I'll send you the link."  
P.S.: one sentence emotional pain reframe  
Hashtags: 4 max

\---

SELF-CHECK before outputting:  
\- No slide has two claims  
\- Every result slide has a specific number  
\- No headline exceeds 7 words (count them)  
\- Slide 2 works for a cold viewer with zero context  
\- No em dashes anywhere  
\- Plain English throughout — rewrite any line with jargon  
