# PRD — AXEN Website (Trionn-Inspired Structure)

**Brand:** AXEN
**Brand Position:** AXEN is a modern AI-first digital agency that combines strategy, design, development, and automation to build products that feel years ahead of the competition.
**Tagline:** Where AI Builds Business.
**Short Bio:** AI-first creative agency building premium websites, digital products, and intelligent automations.
**Elevator Pitch:** AXEN is an AI-first creative agency that designs and builds premium websites, intelligent automations, and digital products for ambitious businesses.

**Brand Manifesto:**
> We believe the internet deserves better products.
> Not more websites. Better experiences.
> Every pixel should have purpose. Every animation should tell a story. Every interaction should feel effortless.
> We combine AI with human creativity to build products that are beautiful, fast, and unforgettable.
> This is AXEN.

**Brand Keywords:** AI · Product · Innovation · Future · Minimal · Premium · Motion · Automation · Performance · Growth

**Primary CTAs:** "Build With AXEN" (primary) · "View Our Work" (secondary)

**Inspiration reference:** trionn.com (scanned in full — Home, Work, Services, About, Contact)

---

## 1. Global Design Language (from reference)

| Token | Value |
|---|---|
| Background | #040508 (near-black) |
| Type system | Large serif/display headline mixed with small-caps micro-labels ("✦ WHAT WE DO BEST") |
| Micro-label pattern | Every section opens with a small ✦-prefixed eyebrow label, uppercase, tracked-out |
| Motion identity | GSAP-led scroll reveals, marquee logo strips, drag-to-identify team interaction, video-in-card modules |
| Nav behavior | Fixed logo left, hamburger menu right, contact micro-info revealed in slide-out panel |
| CTA pattern | Consistent "let's talk" / "let's connect" button repeated across every page |
| Content tone | Confident, restrained, no exclamation marks, short declarative sentences ("Designed to mean something.") |

**Adaptation rule for AXEN:** keep the restrained/confident tone and micro-label + eyebrow pattern, swap creative-studio voice for AI-consulting voice (systems, automation, scale, trust — not "art" or "culture").

---

## 2. Sitemap (mirrors reference exactly)

1. **Home**
2. **Work** (portfolio grid + case study pages)
3. **Services** (expertise + tech stack + process)
4. **About** (story, values, process, founder, team, awards, brand wall, testimonials)
5. **Contact** (multi-step form, location, FAQ)

Persistent across all pages: sticky nav, slide-out "Business Enquiry" panel (email/phone/socials), footer CTA.

---

## 3. Navbar Specification

- **Left:** Logo (SVG, links home)
- **Center/Left nav links:** Work · Services · About · Contact
- **Right:** "Let's talk" primary button (pill-shaped, always visible)
- **Far right:** Menu icon — opens full slide-out panel containing:
  - Business enquiry block (email + phone, clickable `mailto:` / `tel:`)
  - "Est. [year] — [X]+ years shaping digital direction" microcopy
  - Link to brand-story page (AXEN equivalent of "The TRIONN name Story")
  - Social icons row (LinkedIn, Instagram, Dribbble/Behance, X)
- Nav is **transparent over hero**, no scroll-blur needed if reference pattern followed exactly (Trionn keeps nav minimal, not blurred)
- Behavior: nav stays fixed/sticky on all pages, identical position

---

## 4. Hero Section Specification (Home)

**Structure (top to bottom):**
1. Eyebrow micro-label: `Inspire · Innovate · Impact` (or AXEN equivalent triad, e.g. `Understand · Build · Scale`)
2. Large headline, 2 lines, high-impact statement — NOT a generic "AI agency" line.
   - Reference: *"Designed to mean something."*
   - AXEN direction: **"Built to mean something. Powered by AI."** or **"Intelligence, engineered to matter."**
3. Primary CTA button: **"Build With AXEN"**
4. Small credibility line top-right or below fold: `Est. [Year] — [X]+ years/months building AI systems.`
5. Subhead paragraph (1 line, gray-400): describing scope — *"AI agents, automations, websites, and digital systems built for clarity, scale, and impact."*

**3D treatment:** per your earlier direction — floating product/UI mockups (dashboards, agent interfaces, automation flow screens) instead of Trionn's lion/creative-object motif. Mockups rotate gently, mouse-parallax tilt, staged with soft studio lighting.

**Below hero — "About" teaser block (same page):**
- Eyebrow: `about`
- One-paragraph mission statement (2-3 sentences max)
- "We design for [clarity/scale/trust] — first, always, built to last." pattern line
- Link: **"more about us"**

---

## 5. Key Facts / Proof Section (Home)

Mirrors Trionn's "Key facts" block exactly:

| Element | Reference pattern | AXEN adaptation |
|---|---|---|
| Awards/featured strip | Logo row: Awwwards, FWA, CSS Winner, GSAP, etc. | If no awards yet: replace with "As featured in / Built with" — tech logos (OpenAI, n8n, Next.js, AWS) |
| Stat card 1 | "050+ projects completed" | Projects/automations delivered |
| Stat card 2 | "90% clients return for 2nd project" | Client retention or repeat-engagement stat |
| Video card | Short looping team/culture video | Short looping product-demo or workflow-automation video |
| Stat card 3 | "020+ business partners" (logo marquee) | Partner/integration logos (OpenAI, n8n, AWS, GCP, Stripe etc.) |
| Team line | "Different skills. One standard." | Same line works as-is for AXEN |

---

## 6. Services Page Specification

**Structure (exact mirror of reference):**

1. Eyebrow: `✦ WHAT WE DO BEST`
2. H1: **Area of expertise**
3. Vertical list of service categories (tab-style or scroll-anchored):
   - AI & Intelligent Automation
   - Web Development
   - Product Design
   - Website & Mobile Design
   - Branding
   - (WordPress Development — optional, only if relevant to AXEN's actual offer)
4. Subhead: "Focused disciplines where strategy, design, and technology work as one."
5. Two CTAs: **"View Our Work"** + **"Build With AXEN"**

**Per-service card module (repeat per service):**
- One-line supporting descriptor above image (e.g. *"Integrated seamlessly into existing platforms."*)
- Service image/mockup
- H2 service name
- 2-sentence description (calm, outcome-focused, no hype)
- "Our Core Capabilities" — bulleted list of 5-6 sub-capabilities

**AXEN service set (adapted from reference's 6):**
1. **AI & Intelligent Automation** — AI agents, workflow automation (n8n), semantic search, chatbots, AI tools for websites
2. **Web Development** — Frontend/backend, headless CMS, WebGL/Canvas, GSAP motion systems
3. **Product Design** — Product strategy, UX architecture, design systems, prototyping
4. **Website & Mobile Design** — High-fidelity design, responsive systems, motion-first interfaces
5. **Branding** — Identity systems, brand guidelines, creative direction
6. **Consulting & Strategy** — AI readiness audit, systems mapping, roadmap (AXEN-specific addition since niche = general AI consulting)

**Technology Stack section** (mirrors reference's numbered stack list exactly):
1. AI & Intelligent Automation — OpenAI API/SDK, chatbots, content generation, n8n automation
2. Front-end — React, Next.js, Tailwind, GSAP, Framer Motion, Three.js/WebGL
3. Back-end — Node.js, PHP, Express
4. Databases & CMS — MySQL, MongoDB, Contentful/Sanity/Strapi
5. Cloud — AWS, GCP, DigitalOcean
6. DevOps — Git, GitHub Actions, n8n workflows
7. Marketing & Integrations — HubSpot, SendGrid, CRM/email automation

**How We Work (3-step process, identical pattern):**
- Step 1 — **Understand**: listen first, define the right problem before the solution
- Step 2 — **Design & Build**: translate insight into systems, interactions, execution
- Step 3 — **Refine & Evolve**: iterate toward something scalable and lasting

---

## 7. Work / Portfolio Page Specification

**Structure:**
- Intro scroll-strip: small rotating thumbnail preview row (all case studies, auto-scroll) — matches reference's top image marquee
- H1: **Our work**
- Subhead: "A curated showcase of AI systems, products, and digital experiences."
- Grid of case study cards, each:
  - Project thumbnail (image or looping preview)
  - Project name (H2)
  - One-line outcome description (problem → what it does, in plain language)
  - "EXPLORE PROJECT" link → individual case study page
- Closing CTA block: "Contact Us" + reassurance line — *"If you'd like to see work relevant to your specific requirements, we're happy to share it."*

**Individual case study page (per project) — same as reference pattern:**
- Hero image/mockup of the project
- Problem statement
- What was built (scope)
- Tech/tools used
- Outcome/result (metric if available)
- Next/previous project navigation

**v1 minimum:** 4-6 case studies (real or representative). Placeholder projects acceptable pre-launch, swapped as real client work lands.

---

## 8. About Page Specification

**Section order (exact mirror):**

1. **Opening statement** — bold 2-3 line mission/identity statement (not a generic "About Us" header)
2. **"At [AXEN],"** — short paragraph: how teams are formed around each project/challenge
3. **Est. [year] block** — years active, growth narrative paragraph, "let's connect" CTA
4. **Our Values** — 6 short value cards (title + 2-sentence description), reference set adapted:
   - Driven by excellence
   - Honesty and authenticity
   - Systems built to last
   - Purposeful decisions
   - Real impact over trends
   - Experience and adaptability
5. **How We Work** — same 3-step process repeated (Understand / Design & Build / Refine & Evolve)
6. **Founder spotlight** — photo, name, title, 1-line credibility stat, LinkedIn link, pull-quote
7. **"Different skills. One standard."** — team section intro line
8. **Team grid** — photos/names, optional interactive "identify" hover module
9. **"Who we're not for"** — direct, confident exclusion paragraph (filters unqualified leads, builds premium positioning)
10. **Awards / Recognition** — grid of award logos + short labels (only include if real; otherwise replace with "Recognized capabilities" — certifications, platform partnerships e.g. OpenAI partner, AWS partner)
11. **Brand wall** — logos of past/notable clients or partners, plus scrolling text list of additional names
12. **Client testimonials** — 3-5 quote cards: quote, name, title, company, country; optional audio/video quote variant
13. **Culture closer** (optional, skip if not relevant for a lean solo-run agency) — short "behind the scenes" line

---

## 9. Contact Page Specification

**Structure (exact mirror):**

1. H1: **"Let's start something."**
2. Subhead: "We collaborate with teams who value clarity, craft, and long-term thinking." (adapt to AI-consulting voice: *"We partner with teams ready to build real AI systems, not experiments."*)
3. **Multi-step contact form** (not a single long form):
   - Step 1: Full name, email, company/brand
   - Step 2+: project type, budget range, timeline (mirror Trionn's progressive step pattern, "01 / 05" step counter visible)
   - Back/Continue navigation between steps
4. **Location block** — office address (or "Remote-first, based in [city]" if no physical office)
5. **"Join us" block** — for talent/collaborator outreach, short note + direct email
6. **FAQ accordion** — mirrors reference's exact question set, adapted:
   - What kind of work do you take on?
   - Who do you usually work with?
   - How do projects typically begin?
   - Do you partner with agencies long-term?
   - Can we sign an NDA before starting?
   - How are projects priced and paid for?
   - Are you currently taking on new work?

---

## 10. Motion & Interaction Spec (reference-matched)

| Interaction | Reference behavior | Implementation |
|---|---|---|
| Section reveals | Fade + slide on scroll | GSAP ScrollTrigger |
| Logo/partner strips | Infinite marquee | CSS/GSAP marquee loop |
| Team module | Drag-to-identify card interaction | Custom drag handler + name reveal |
| Video-in-card | Autoplay muted looping video inside stat/awards card | `<video>` with lazy load |
| Nav slide-out | Full-panel menu reveal with contact info | GSAP timeline, blur backdrop |
| Hero 3D | Rotating/parallax product mockups | Spline or Three.js/R3F |
| CTA buttons | Magnetic cursor pull | GSAP + mouse-tracking |
| Multi-step form | Step transition slide + progress counter | Framer Motion / GSAP |

---

## 11. Tone & Copy Guidelines

- Short, declarative sentences. No exclamation marks, no hype adjectives ("amazing," "revolutionary").
- Every major section opens with a small ✦ eyebrow label.
- Confidence over persuasion — state positioning, don't oversell.
- "Who we're not for" style directness is a deliberate premium-positioning device — worth keeping for AXEN.

---

## 12. Build Priority (v1 scope)

1. Home (hero, about teaser, key facts, partners)
2. Services (expertise + stack + process)
3. Work (grid + 4-6 case studies)
4. About (values, process, founder, testimonials — team grid can be simplified for solo/small team)
5. Contact (multi-step form + FAQ)

Skip for v1: awards section (until real recognitions exist), team "identify" drag interaction (nice-to-have, not core), brand-story sub-page (add once name/story is fully locked).
