# AXEN — Website Wireframe (Low-Fi)
**Reference:** trionn.com structure & UX patterns, adapted to AXEN's sitemap
**Sitemap:** Home · About · Services · Work · Insights · Contact (no Pricing page)
**Style:** Dark-theme, single-accent, editorial/premium studio feel

Legend for block types:
`[NAV]` navigation · `[HERO]` full-viewport · `[SEC]` content section · `[CTA]` call-to-action band · `[FORM]` input block · `[FOOT]` footer

---

## 0. Global Elements (persist on every page)

```
┌─────────────────────────────────────────────────────────┐
│ [NAV]  AXEN logo   Work Services About Insights Contact  │
│        sticky · blurs bg on scroll · "Let's talk" CTA →  │
└─────────────────────────────────────────────────────────┘
```
- Slide-out side panel (triggered by menu icon) mirrors Trionn's pattern: business enquiry email/phone, social links, tagline restated ("Where AI Builds Business"), secondary nav.
- Footer (all pages):
```
┌─────────────────────────────────────────────────────────┐
│ [FOOT]                                                   │
│  Big closing line / CTA restate                          │
│  Nav links | Social icons | Email/contact | Location      │
│  © AXEN — small print, back-to-top                        │
└─────────────────────────────────────────────────────────┘
```

---

## 1. Home

```
┌─────────────────────────────────────────────────────────┐
│ [HERO]  Full-viewport 3D scene (AI orb / particle field)  │
│  Kicker: "Inspire · Build · Impact"                       │
│  H1 (2 lines): "Where AI Builds Business"                 │
│  Subhead (1 line, gray-400)                                │
│  [Start a Project]  ghost: [See Work]                      │
│  scroll cue ↓                                               │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] About-teaser                                          │
│  Short mission statement (2-3 lines)                        │
│  "more about us →"                                            │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Key Facts — bento grid                                │
│  Projects shipped | Client retention % | Team size          │
│  Featured-on / recognition strip (logos marquee)              │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Services strip (sticky scroll-anchored tabs)           │
│  AI Automation | Web/Product Design | Development | Brand    │
│  1-liner + capability chips per tab, image swaps on scroll    │
│  "View all services →"                                        │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Work — 3 featured case tiles                           │
│  image hover-reveal, title, 1-line result                    │
│  "View all work →"                                             │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Process — 3-step horizontal timeline                    │
│  Understand → Design & Build → Refine & Evolve                 │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Testimonials — 1-2 quote cards, client name/role         │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [CTA] Full-width contrast band — "Let's build something"      │
│  single button → Contact                                        │
└─────────────────────────────────────────────────────────┘
```

---

## 2. About

```
┌─────────────────────────────────────────────────────────┐
│ [HERO] Statement headline (no 3D — type-led, per locked scope)│
│  "We are an AI-first studio built on clarity and craft"        │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Founding note — small "Est." + years / mission paragraph │
│  "let's connect →"                                               │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Our Values — 6-card grid                                  │
│  Excellence · Honesty · Built to last · Purposeful ·             │
│  Impact-driven · Experience                                       │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] How We Work — 3-step timeline (repeat pattern, home)        │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Leadership card — founder photo, title, short bio, LinkedIn  │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Team grid — small avatars, hover reveal name/role             │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] "Who we're not for" — plain-text positioning block            │
│  (differentiation / ideal-client framing)                            │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Recognition — awards/press logos wall                          │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Client logos wall (partners/brands worked with)                │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Client stories — 3-5 testimonial cards, name/role/co.          │
│  optional audio-quote toggle (per reference site)                     │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [CTA] Culture strip — behind-the-scenes teaser (optional)             │
└─────────────────────────────────────────────────────────┘
```

---

## 3. Services

```
┌─────────────────────────────────────────────────────────┐
│ [HERO] Kicker: "What we do best"                                     │
│  H1: "Area of Expertise"                                                │
│  Left: list nav of service categories (click-to-jump)                   │
│  Right: rotating category label mosaic (AI · Design · Dev · Brand)       │
│  [View our projects]  [Let's connect]                                     │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Service block (repeats per category, alternating image side)         │
│  Category name (H2)                                                          │
│  1-2 line description                                                        │
│  "Core Capabilities" — 6 short tags/bullets                                    │
│  Supporting image/screenshot                                                    │
│                                                                                  │
│  Categories: AI & Automation · Web & Product Design ·                           │
│              Development · Brand & Identity                                      │
│  (matches locked no-Pricing scope — no cost mentions here)                        │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Tech Stack — numbered accordion/list                                        │
│  Grouped: AI Platforms · Front-end · Back-end ·                                     │
│  Databases/CMS · Cloud · DevOps · Marketing/Integrations                             │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] How We Work — 3-step timeline (shared component)                              │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [CTA] "Ready to scope a project?" → Contact                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Work

```
┌─────────────────────────────────────────────────────────┐
│ [HERO] Marquee/collage of thumbnail strip (all case images,           │
│         small, scrolling) — sets tone before grid loads                  │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] H1: "Our Work" + 1-line intro                                       │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Case grid — repeating tile:                                          │
│  [image] → hover reveal title + 1-line result summary                        │
│  "Explore project →" (links to case study page)                               │
│  Grid density: 1 col mobile / 2 col desktop, generous whitespace                │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [CTA] Closing note: "Want to see work relevant to your industry?"              │
│  → Contact Us button                                                             │
└─────────────────────────────────────────────────────────┘
```

**Case Study page (per project template):**
```
┌─────────────────────────────────────────────────────────┐
│ [HERO] Project name, 1-line description, hero image/video               │
│  Meta row: Client · Industry · Services provided                          │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Challenge / Approach / Outcome — 3-part narrative                    │
│  Supporting screenshots (full-bleed + framed device mockups)                 │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Results — metric cards (e.g. % lift, time saved)                       │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [CTA] Next project (prev/next nav) + "Start your project"                     │
└─────────────────────────────────────────────────────────┘
```

---

## 5. Insights *(content hub — not present on reference site, original to AXEN)*

```
┌─────────────────────────────────────────────────────────┐
│ [HERO] H1: "Insights" + 1-line intro (AI/industry POV)                  │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Featured article — large card, image + title + excerpt              │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Article grid — filterable by category                                 │
│  (AI Strategy · Design · Engineering · Case Notes)                            │
│  card: thumbnail, title, date, read time                                       │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Newsletter signup band (optional)                                        │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [CTA] "Have a project in mind?" → Contact                                       │
└─────────────────────────────────────────────────────────┘
```

**Article page:** standard blog template — hero title/meta, body copy, pull-quotes, related-articles rail, closing CTA.

---

## 6. Contact

```
┌─────────────────────────────────────────────────────────┐
│ [HERO] H1: "Let's start something."                                     │
│  Subhead: 1-line framing on ideal collaboration                            │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [FORM] Multi-step form (progress indicator "01 / 0X")                     │
│  Step 1 — Basics: Full name*, Email*, Company                                │
│  Step 2 — Project type (select: AI Automation / Web / Product /             │
│            Branding / Other)                                                  │
│  Step 3 — Budget range / timeline (no fixed pricing shown)                   │
│  Step 4 — Project details (textarea)                                          │
│  Step 5 — Review & submit                                                       │
│  Back / Continue buttons each step                                              │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] Location / direct contact block — address, email, phone            │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ [SEC] FAQ accordion — 6-8 common questions                                 │
│  (scope, engagement model, NDA, timelines, availability)                     │
└─────────────────────────────────────────────────────────┘
```

---

## 7. Shared Components Library
| Component | Used on |
|---|---|
| Sticky nav w/ blur-on-scroll | All pages |
| Slide-out side panel (contact + social) | All pages |
| 3-step "How We Work" timeline | Home, About, Services |
| Testimonial card | Home, About |
| Logo marquee (clients/recognition) | Home, About |
| Case tile (hover-reveal) | Home, Work |
| FAQ accordion | Contact |
| Multi-step form | Contact |
| CTA band (full-width, contrast bg) | All pages (closing) |
| Footer | All pages |

---

## 8. Notes on Adaptation from Reference
- Reference site (trionn.com) has no Pricing or Insights page and no visible "budget" field in its contact flow — Insights is original to AXEN's locked sitemap; a lightweight budget-range step has been added to the multi-step form in place of any pricing page, since AXEN's scope excludes Pricing entirely.
- Section order and interaction patterns (sticky tabs, marquees, multi-step form, hover-reveal case tiles) are structurally modeled on the reference; all copy, category names, and imagery placeholders above are original to AXEN.
- Next step: convert this into hi-fi Figma frames or directly into the Next.js build using the existing AXEN build prompt.
