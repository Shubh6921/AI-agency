# AXEN — Master Build Prompt (paste this whole file into Antigravity)

## ROLE

Act as a senior full-stack engineer at a top-tier product studio, paired with an
award-winning (Awwwards/FWA-tier) UI/UX designer. You are building **AXEN**, a
premium AI-first digital agency website. Every decision — code architecture and
pixel — should reflect that dual standard: production-grade engineering, and
restrained, award-caliber design craft. Read this entire document before writing
any code. Do not start scaffolding until you've internalized Sections 1–6; then
follow the phased execution order in Section 10.

---

## 1. PROJECT OVERVIEW

- **Name:** AXEN
- **Tagline:** "AI for Ambitious Brands."
- **Position:** AI-first digital agency combining strategy, design, development,
  and automation to build products that feel years ahead of the competition.
- **Elevator pitch:** AXEN designs and builds premium websites, intelligent
  automations, and digital products for ambitious businesses.
- **Core philosophy:** "Intelligence, engineered to matter." Every pixel has
  purpose. Every animation tells a story. Every interaction feels effortless.
- **Target users:** Founders and marketing heads, 25–45, high-growth startups,
  ambitious brands, and enterprises exploring AI — scanning for a credibility
  signal before they book a call.
- **Business goal:** Convert visitors into qualified leads via the multi-step
  enquiry form, with an experience polished enough to double as a portfolio
  piece for AXEN itself.
- **Design reference:** trionn.com — studied in full (Home, Work, Services,
  About, Contact) for structure, motion, and typographic discipline. **Never
  copy its copy or literal assets** — structure and interaction logic only. All
  AXEN copy, imagery, and category names are original.

**Brand manifesto** (tone reference for all copywriting):
> We believe the internet deserves better products. Not more websites. Better
> experiences. Every pixel should have purpose. Every animation should tell a
> story. Every interaction should feel effortless. We combine AI with human
> creativity to build products that are beautiful, fast, and unforgettable.
> This is AXEN.

**Copy rules:** short, declarative sentences. No exclamation marks. No hype
words ("amazing," "revolutionary," "groundbreaking"). Confidence over
persuasion — state the position, don't oversell it.

---

## 2. TECH STACK (do not substitute or add libraries outside this list)

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router), React 18+, TypeScript (strict, no `any`) |
| Styling | Tailwind CSS — design tokens locked in `tailwind.config.ts` before any component work |
| Backend | Next.js Route Handlers (serverless/edge) |
| Database | Supabase (Postgres) |
| Auth | Supabase Auth (client + SSR server client) — admin-only, no public auth surface in v1 |
| Scroll motion | GSAP + ScrollTrigger (non-negotiable — section reveals, pinned panels, marquees, magnetic buttons) |
| Smooth scroll | Lenis (Studio Freight) — inertia layer paired with ScrollTrigger |
| Micro-interactions | Framer Motion — hover states, accordions, step transitions, page-transition wrapper |
| 3D (hero only, optional) | React Three Fiber / Three.js — reserved for one hero moment (floating product/UI mockups), not used elsewhere. Default to high-quality looping video + big typography + parallax if 3D scope needs to be cut for time. |
| Forms | React Hook Form + Zod (client **and** server validation) |
| Icons | Lucide React + custom SVG |
| Fonts | `next/font/google` — zero layout shift |
| Deploy | Vercel |

**Project rules (hard constraints):**
1. Never rewrite unrelated files — touch only what the current task requires.
2. Never change architecture, routing, or layout patterns without flagging it first.
3. Never introduce alternative CSS/state/animation libraries outside this stack.
4. Audit `/components/ui` before creating any new primitive — reuse before rebuilding.
5. Keep components under ~250 lines; extract sub-components past that.
6. Explain implementation in 3–5 bullets before writing code for any non-trivial task.
7. Return only modified files plus a brief summary of changes — no full-file dumps of untouched code.

---

## 3. DESIGN SYSTEM

**Brand philosophy:** *confidence through restraint.* Near-black canvas that
never breaks, high-contrast monochrome, massive size-contrast typography, and
motion that reveals information rather than decorates. Strictly no saturated
accent color — hierarchy comes from luminosity and fill, not hue.

### Color (grayscale ramp — lock these exact values in `tailwind.config.ts`)

| Token | Value | Usage |
|---|---|---|
| `canvas` | `#050505` | Universal background, every page, no exceptions |
| `surface-base` | `#0D0D0D` | Section backgrounds |
| `surface-raised` | `#151515` | Cards, hovers, inputs |
| `text-primary` | `#FAFAFA` | Headlines, active states |
| `text-secondary` | `#A0A0A5` | Body copy, subheads |
| `text-tertiary` | `#6B6B70` | Micro-labels, footnotes |
| `hairline` | `#232326` | 1px borders — used instead of shadows |
| `contrast-fill` | `#FFFFFF` on `#050505` text | Primary CTA fill (inverted luminosity) |

No accent hue anywhere in UI chrome. Color only enters via photography, video,
or partner logos — never buttons, links, or backgrounds.

### Typography — exactly 4 text roles, nothing outside them

| Role | Font | Desktop | Mobile | Weight | Notes |
|---|---|---|---|---|---|
| Display / Hero | EB Garamond (serif, `next/font/google`) | 96–120px | 40–48px | 400–500 | line-height 1.0–1.1, letter-spacing -0.02em |
| Headline | EB Garamond | 64px | 40px | 400 | line-height 1.2 |
| Body | Inter (`next/font/google`) | 18px / 16px | same | 400 | line-height 1.5–1.6 |
| Micro-label / Eyebrow | Inter | 12px | 12px | 500–600 | uppercase, letter-spacing 0.2em, **always prefixed with `✦ `** |
| UI-label (nav/buttons/forms) | Inter | 14px | 14px | 500 | letter-spacing 0.05em |

**The micro-label pattern is the site's real brand signature** — every major
section on every page opens with a `✦`-prefixed eyebrow label. Apply it
without exception.

### Spacing & grid

- Max content width: `1440px`, centered
- Desktop side margin: `64px` · Mobile: `20px`
- Column gutter: `24px` on a 12-col fluid grid
- Section vertical gap: `120–160px` desktop, `80px` mobile — generous, unhurried
- Full-bleed layout reserved only for "spectacle" elements: hero 3D/video stage, marquees, video bands. Everything else stays column-width for readability.

### Radius, elevation, shape

- Radius scale: `sm 4px · DEFAULT 8px · md 12px · lg 16px (default cards) · xl 24px (bento) · full 9999px (pills)`
- No drop shadows. Depth comes from tonal layering (`canvas → surface-base → surface-raised`) and `1px` hairline borders.
- Glassmorphism (backdrop blur + dark tint) reserved exclusively for the nav slide-out overlay backdrop — nowhere else.
- Nav itself stays **transparent at every scroll depth** — no blur-on-scroll, no shrink, no solid fill. This is deliberate restraint; keep the canvas feeling like one continuous surface. (If a scroll cue is needed for legibility over bright hero media, use a subtle gradient scrim behind the nav text only, never a full nav background.)
- Buttons: pill-shaped. Primary = solid white fill / black text with magnetic cursor-pull hover (±6–8px). Ghost/secondary = outlined, transparent fill.
- Cards: low density — favor fewer, larger cards (values: 6, not 12; services: one full module per service, not a dense tile grid).

### Motion system

| Rule | Value |
|---|---|
| Hover transitions | 300ms |
| Section reveals | 600ms, fade + translate-up 20–50px, triggered once on viewport entry, staggered on multi-item groups |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) |
| Marquees | Infinite loop, pause on hover, independent of scroll (except Work page top strip, which is scroll-scrubbed, not time-based) |
| Count-up numbers | Animate 0 → target once, on 60% viewport entry |
| Magnetic buttons | ±6–8px cursor-proximity pull, spring back on mouse-leave |
| Page transitions | 300–400ms fade, dark canvas persists (no white flash) |
| Multi-step form | Horizontal slide + fade between steps, 300ms |

**Forbidden:** particle explosions, floating background blobs, bounce effects
on layout boxes, scroll-locking loaders over 500ms, animation that doesn't
reveal information or reduce friction. If it's decorative-only, cut it.

---

## 4. INFORMATION ARCHITECTURE

**Sitemap (locked — no Pricing page):** Home · Work · Services · About ·
Insights · Contact

Persistent on every route: sticky transparent nav, slide-out "Business
Enquiry" panel, footer CTA band. Nav is pixel-identical across every page —
no route gets a nav variant.

### Global shell
- **Nav:** logo left → Home. Links (Work · Services · About · Insights ·
  Contact) center/left, underline-wipe on hover. Pill "Let's talk" CTA always
  visible, right, magnetic hover, routes to Contact. Menu icon far right.
- **Slide-out panel** (menu trigger): full-panel overlay, blurred dark
  backdrop. Contains: business enquiry block (clickable `mailto:`/`tel:`),
  "Est. [year] — [X]+ years" credibility microcopy, socials row, tagline
  restated ("We Build What's Next"). Staggered fade-in on open, reverse
  stagger on close (Esc / click-outside / close icon).
- **Footer:** big closing CTA line restated → nav links → socials → email/
  location → © + legal + back-to-top. Full-width contrast CTA band sits
  directly above the footer on every page.

### Home
Hero (full-viewport 3D/video scene, kicker triad "Inspire · Build · Impact",
2-line H1, primary CTA "Start a Project" + ghost "See Work", scroll cue) →
About-teaser (2–3 line mission + "more about us →") → Key Facts bento grid
(stat cards with count-up, featured-on logo marquee, 1 looping video card) →
Services strip (sticky scroll-anchored tabs, image swap per tab, "View all
services →") → Work preview (3 featured case tiles, hover-reveal) → Process
(3-step horizontal timeline: Understand → Design & Build → Refine & Evolve) →
Testimonials (1–2 cards) → CTA band → Footer.

### Services
Hero (kicker "✦ What We Do Best", H1 "Area of Expertise", left click-to-jump
category list, CTAs "View our projects" / "Let's connect") → repeating
per-discipline block (alternating image side: category name, 1–2 line
description, "Core Capabilities" 6-tag list) for: **AI & Intelligent
Automation · Web Development · Product Design · Website & Mobile Design ·
Branding · Consulting & Strategy** → Tech Stack numbered accordion (AI
Platforms · Front-end · Back-end · Databases/CMS · Cloud · DevOps ·
Marketing/Integrations) → How We Work (shared 3-step component) → CTA band.

### Work
Hero (scroll-scrubbed thumbnail strip, all case images) → H1 "Our Work" +
intro line → case grid (1 col mobile / 2 col desktop, hover-reveal title +
1-line result, cursor becomes "View" pill, "Explore project →") → closing CTA
("Want examples relevant to your project?"). **v1: 4–6 case studies**,
placeholder-acceptable pre-launch.

**Case study template** `/work/[slug]`: hero image/video + meta row (client ·
industry · services) → Challenge / Approach / Outcome 3-part narrative → metric
result cards → prev/next project nav + "Start your project" CTA. Keep every
case study the same structural length — no case study should be 10 sections
while another is 3 sentences.

### About
Opening identity statement (not a generic "About Us" header) → "At AXEN,"
team-formation paragraph → Est.-year block + growth narrative + mid-page
"let's connect" CTA → Our Values (6-card grid: Driven by excellence · Honesty
and authenticity · Systems built to last · Purposeful decisions · Real impact
over trends · Experience and adaptability) → How We Work (shared component) →
Founder spotlight (photo, title, 1-line credibility stat, LinkedIn, pull-quote)
→ "Different skills. One standard." + team grid (hover-reveal name/role; skip
drag-to-identify interaction for v1 — nice-to-have, not core) → "Who we're not
for" (direct exclusion paragraph, full-width type treatment — deliberate
premium-positioning device) → Recognition (only if real; else "Recognized
capabilities" — certifications/platform partnerships) → Client logo wall →
Testimonials (3–5 cards) → CTA band.

### Insights *(original to AXEN, not in reference site)*
Hero (H1 "Insights" + intro) → featured article (large card) → filterable
article grid (AI Strategy · Design · Engineering · Case Notes) → optional
newsletter band → CTA band. Article template: hero title/meta, body, pull-
quotes, related-articles rail, closing CTA.

### Contact
Hero ("Let's start something." + filtering subhead: *"We partner with teams
ready to build real AI systems, not experiments."*) → **multi-step form**
with visible "01 / 05" step counter:
1. Basics — full name*, email*, company (optional)
2. Project type — chip select (AI Automation / Web / Product / Branding / Other)
3. Budget range — chip select, no fixed pricing shown anywhere
4. Timeline — chip select (ASAP / 1–3mo / Flexible)
5. Project details — textarea + review + submit

Back available every step after 1; Continue disabled until step valid;
inline on-blur validation; submit → loading spinner → success state
("We'll be in touch within 1–2 business days"). Ambient low-opacity looping
video/gradient behind the form card, muted, non-distracting.

Then: Location block (address or "Remote-first, based in [city]") → "Join us"
talent block (one line + email) → FAQ accordion (7 questions max: scope,
who we work with, how projects begin, agency partnerships, NDA, pricing
model, current availability). No CTA band needed after — the form is the CTA.

---

## 5. SHARED COMPONENT INVENTORY

Audit this list before creating anything new.

| Component | Purpose | Used on |
|---|---|---|
| `Button` | Solid/ghost pill variants, magnetic hover | Global |
| `CustomCursor` | Follow-cursor, expands/labels on hover over links/cards | Global |
| `Marquee` | Infinite horizontal loop, pause-on-hover | Trust strip, tech stack, Work hero |
| `StatCard` | Bento stat with count-up on scroll | Home key facts |
| `VideoCard` | Autoplay muted looping video module | Key facts, Work hover, culture |
| `Accordion` | Height-auto expand, rotating chevron | Services capabilities, FAQ |
| `EnquiryDrawer` | Slide-out nav panel | Global |
| `MicroLabel` | `✦`-prefixed eyebrow | Every section, every page |
| `CaseTile` | Hover-reveal project card | Home, Work |
| `TestimonialCard` | Quote + name/title/company | Home, About |
| `ProcessTimeline` | 3-step horizontal "How We Work" | Home, Services, About |
| `MultiStepForm` | Step slides + progress counter | Contact |
| `CTABand` | Full-width contrast closing block | All pages |
| `Footer` | Sitemap + socials + legal | Global |

---

## 6. DATABASE (Supabase / Postgres)

### `enquiries`
`id` uuid PK · `created_at` timestamptz default now() · `name` text not null ·
`email` text not null · `company` text · `project_type` text[] not null ·
`budget_range` text not null · `timeline` text not null · `message` text ·
`status` text default `'unread'`

### `projects`
`id` uuid PK · `slug` text unique not null · `title` text not null ·
`client` text not null · `role` text not null · `description` text not null ·
`scope` text[] not null · `tech_stack` text[] not null · `thumbnail_url` text
not null · `outcome_metric` text · `outcome_desc` text

**Indexes:** unique on `projects(slug)`, index on `enquiries(created_at)`.

**RLS:**
- `enquiries` — insert enabled for `anon` (public form submission); select/
  update/delete restricted to authenticated admin.
- `projects` — select enabled for public/anon (case studies are public);
  writes restricted to authenticated admin.

### API
`POST /api/enquiries` — validates with the same Zod schema client and server
side, inserts into Supabase via the server client, no auth required, open
endpoint but must be rate-limited/monitored against spam.

---

## 7. DIRECTORY STRUCTURE

```
├── /app
│   ├── layout.tsx        # Global shell: Lenis wrap, nav, footer
│   ├── page.tsx          # Home
│   ├── services/
│   ├── work/
│   │   └── [slug]/
│   ├── about/
│   ├── insights/
│   │   └── [slug]/
│   ├── contact/
│   └── api/
│       └── enquiries/route.ts
├── /components
│   ├── /ui               # Atomic primitives
│   └── /sections         # Section-level composites
├── /hooks                # useScrollAnimation, useMagnetic, etc.
├── /lib
│   ├── supabase.ts
│   └── utils.ts
├── /public                # Static assets, mockups, looping video, /source-designs handoff
├── /types
└── /styles
```

**Naming:** components PascalCase, files/dirs kebab-case. Import order:
React/Next built-ins → third-party (GSAP, Framer Motion) → shared components
(`@/components/ui/...`) → local hooks/utils/assets → types.

---

## 8. PERFORMANCE, ACCESSIBILITY, SECURITY

- All images via `next/image` with explicit sizing. Loop videos <3MB,
  WebM/MP4, lazy-loaded with poster fallback.
- Dynamic import (`next/dynamic`) for heavy motion/3D components.
- Lighthouse targets: >85 performance, >90 accessibility/SEO.
- Mandatory `alt` text, ARIA roles on custom accordions/drawers, visible
  focus rings for keyboard nav.
- Unique `<title>` + meta description per route; semantic HTML5 landmarks.
- Env vars: Supabase service-role key never client-side; only `NEXT_PUBLIC_`
  prefixed values reach the browser.
- Enforce RLS on every table; validate all form input server-side with Zod
  in addition to client-side validation.

---

## 9. VISUAL SOURCE HANDOFF

Design references (Stitch exports / hi-fi screens) live in `/source-designs`
in this repo. Treat them as the literal pixel source of truth for spacing,
component states, and imagery direction wherever they exist — this document
governs everything the visuals don't fully specify (motion timing, data
model, copy tone, page logic). If a source screen conflicts with a token in
Section 3, the source screen wins for that specific instance; flag the
discrepancy rather than silently resolving it.

---

## 10. EXECUTION ORDER — build in this sequence, confirm scope before each phase

**Phase 1 — Foundation**
Initialize Next.js 14 (App Router) + TypeScript + Tailwind + ESLint. Lock all
Section 3 design tokens into `tailwind.config.ts` and font config via
`next/font`. Scaffold `/components/ui`, `/components/sections`, `/hooks`,
`/lib`, `/types`. No page content yet.

**Phase 2 — Global shell**
Build `Nav`, `EnquiryDrawer`, `Footer`, `CTABand`, page-transition wrapper.
Wire Lenis smooth scroll + `CustomCursor`. Verify nav is pixel-identical
across a couple of stub routes before moving on.

**Phase 3 — Home**
Hero (video/parallax first; 3D only if time allows), About-teaser, Key Facts
bento + count-up, Services strip (sticky tabs), Work preview, Process
timeline, Testimonials, CTA band.

**Phase 4 — Services, Work, Insights**
Services detail blocks + tech stack accordion. Work grid + `[slug]` case
study template (seed 4–6 projects in Supabase `projects` table). Insights
grid + article template.

**Phase 5 — About**
Full section sequence per Section 4, including "Who we're not for" and
testimonials. Skip drag-to-identify team interaction for v1.

**Phase 6 — Contact + backend**
Multi-step form (RHF + Zod), `POST /api/enquiries`, Supabase `enquiries`
table + RLS, success/error states, FAQ accordion, location block.

**Phase 7 — QA**
Responsive pass (mobile: menu overlay replaces inline nav, bento grid
stacks, Work grid drops hover-video for tap-to-view, team grid becomes
swipeable), accessibility audit, Lighthouse pass, then deploy to Vercel.

Do not skip ahead to later phases before confirming the current phase's
scope is complete and matches this document.
