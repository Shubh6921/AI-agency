# AXEN — Website User Flow
### Reference architecture: trionn.com UX/IA pattern, adapted for AXEN ("Where AI Builds Business")

---

## 0. How to read this document
This maps the **exact interaction architecture** trionn.com uses (nav behavior, hover states, reveal patterns, scroll choreography, form flow) and re-applies it to AXEN's 5-page sitemap (Home, About, Services, Work, Contact — **no Pricing page**, per locked scope). Copy/content below is original to AXEN, not copied from Trionn. Structure, sequencing, and interaction logic mirror Trionn's studio-grade pattern.

---

## 1. Global Shell (persists on every page)

### 1.1 Top bar (pre-nav strip)
- Left: rotating brand mantra, small caps, e.g. `Strategy · Build · Automate`
- Right: **"Business enquiry"** hover-trigger → reveals email + phone in a soft-fade panel
- This strip scrolls away with the page but the nav below it goes sticky

### 1.2 Sticky navigation bar
| Element | Behavior |
|---|---|
| Logo (left) | Click → Home. Hover → subtle scale 1.02 |
| Nav links (Work / Services / About / Contact) | Underline-wipe on hover, active state = filled dot before label |
| CTA button (right) | "Let's talk" → always routes to Contact. Magnetic hover (cursor pull ±8px) |
| Menu icon (mobile / optional full menu) | Opens full-screen overlay menu with large stacked links + socials footer |
| Scroll behavior | Nav background blurs + darkens after 80px scroll; hides on scroll-down, reveals on scroll-up |

### 1.3 Full-screen menu overlay (triggered by "Menu")
1. User clicks Menu → screen dims, large nav links animate in (staggered fade+slide, 60ms delay each)
2. Right side: business enquiry block (email, phone) + social icons (LinkedIn, Instagram, Dribbble, X)
3. Bottom: small tagline ("Where AI Builds Business")
4. Click outside / Esc / close icon → reverse stagger, closes

### 1.4 Footer (all pages)
- Column 1: Logo + one-line mission
- Column 2: Sitemap links
- Column 3: Contact (email, phone, city)
- Column 4: Socials
- Bottom bar: © year, small legal links
- CTA banner directly above footer: full-width contrast block, one headline, one button → Contact

---

## 2. Cross-page Motion & Micro-interaction Layer
(Applies globally — this is the "feel" layer, matching Trionn's craft signals)

| Pattern | Where used | Trigger |
|---|---|---|
| Magnetic buttons | All primary CTAs | Cursor proximity pulls button ±6-10px toward pointer |
| Marquee strip (infinite scroll) | Client logos, tech stack, awards/badges | Auto-plays on load, pauses on hover |
| Scroll-triggered fade + slide | Every section entry | GSAP ScrollTrigger, 20-40px translate + opacity 0→1 |
| Video-on-hover reveal | Work grid thumbnails, service cards | Static image → autoplay muted video loop on hover |
| Number counters | Stats / key facts section | Count up when 60% of element enters viewport |
| Cursor-follow label ("View", "Explore") | Work grid, case study links | Custom cursor replaced with pill label near cursor |
| Page transition | Every route change | 300-400ms fade+slight scale, no white flash (dark bg persists) |
| Drag-to-reveal team grid | About → team section | User drags/swipes cards horizontally, name reveals on settle |
| Accordion expand | Services capabilities, FAQ | Click header → height auto-expand, chevron rotates 180° |

---

## 3. Page-by-Page Flow

### 3.1 HOME
```
Land on Home
  → Hero (full-viewport 3D/particle scene + headline + subhead + 2 CTAs)
      • Primary CTA "Book a Call" → Contact
      • Secondary "See Work" → Work
      • Mouse-parallax tilt on 3D object
      • Scroll cue arrow, bounces subtly
  ↓ scroll
  → Brand statement / About teaser (1-2 lines + "More about us" → About)
  ↓ scroll
  → Trust strip: client logo marquee (infinite loop)
  ↓ scroll
  → Key Facts (bento grid)
      • Awards/featured-on badges row
      • Stat cards: projects completed, hours automated, repeat-client %
      • Counters animate on viewport entry
  ↓ scroll
  → Services preview: 3 cards (icon + 1-liner + hover lift) → each links to Services anchor
  ↓ scroll
  → Work preview: 3 featured case cards, video-on-hover → "Explore Project" → Work detail
  ↓ scroll
  → Process strip (3-step horizontal timeline: Understand / Design & Build / Refine & Evolve)
  ↓ scroll
  → Testimonial cards (1-2, quote + name/title/company)
  ↓ scroll
  → CTA banner (full-width, contrast bg) → Contact
  → Footer
```

### 3.2 SERVICES
```
Land on Services
  → Header: "✦ What We Do Best" + headline + list of disciplines (AI & Automation,
     Web Development, Product Design, Website & Mobile Design, Automation Workflows, Branding)
     • Each list item is a scroll-anchor link — clicking jumps to its detail block
  ↓ scroll
  → Per-discipline detail block (repeats for each service):
      • Left: short framing line + heading + 2-line description
      • Right: supporting visual/video loop
      • Below: "Core Capabilities" tag list (6 short capability chips)
  ↓ scroll
  → Tech stack section (tabbed or numbered list: AI/Automation, Front-end, Back-end,
     Databases/CMS, Cloud, DevOps, Integrations) — click tab/number → content swaps with fade
  ↓ scroll
  → How We Work (3-step process, same as Home/About — shared component)
  ↓ scroll
  → CTA banner → Contact
  → Footer
```

### 3.3 WORK
```
Land on Work
  → Header: "Our Work" + 1-2 line framing copy
  → Full-bleed grid of project thumbnails (image, hover → autoplay video)
      • Cursor becomes "View" pill on hover over any card
      • Click → route to /work/[project-slug]
  ↓ scroll (grid continues, 15-20 projects typical)
  → Closing note: "Want examples relevant to your project?" → Contact CTA
  → Footer

  [Case Study Detail Page /work/[slug]]
    → Hero: large project image/video + project name + 1-line description
    → Overview block: challenge / role / scope / timeline
    → Visual gallery (full-bleed images/video, scroll-paced reveal)
    → Outcome/results block (metrics if available)
    → Next project link (bottom, auto-advances portfolio)
    → CTA → Contact
```

### 3.4 ABOUT
```
Land on About
  → Header: mission statement (large type) + short positioning line
  → "At [Agency]," — team philosophy statement
  → Founder/leadership highlight: photo, name, title, 1-line bio, credibility badge
  ↓ scroll
  → Our Values (grid of 4-6 value cards: title + 2-line description each)
  ↓ scroll
  → How We Work (3-step process — shared component)
  ↓ scroll
  → Team section — drag-to-reveal interactive grid
      • User drags across cards, name/role tag reveals on settle
  ↓ scroll
  → "Who We're Not For" — positioning/filter block (builds trust via selectivity)
  ↓ scroll
  → Awards & Recognition — logo badges + short label rows (if applicable to AXEN's stage,
     else replace with "Featured Approach" / "Principles" block)
  ↓ scroll
  → Client logos / brand partnerships marquee
  ↓ scroll
  → Testimonials (quote cards, name/title/company, optional audio/video quote toggle)
  ↓ scroll
  → CTA banner → Contact
  → Footer
```

### 3.5 CONTACT
```
Land on Contact
  → Hero: "Let's start something." + 1-line framing copy
  → Multi-step form (progress indicator "01 / 05")
      Step 1 — Basics: Full Name*, Email*, Company/Brand (optional) → Continue
      Step 2 — Project type: select from chips (Website / AI Automation / Branding / Product) → Continue
      Step 3 — Scope/budget band: single-select range chips → Continue
      Step 4 — Timeline: single-select (ASAP / 1-3mo / Flexible) → Continue
      Step 5 — Project details: open textarea + optional file/link attach → Submit
      • Back button available every step
      • On submit: success state replaces form ("We'll be in touch within 1-2 business days")
  ↓ scroll (form and side content can sit side-by-side on desktop)
  → Location block: address, map or static visual
  → Direct contact: email + phone, "or reach out via the form above"
  ↓ scroll
  → FAQ accordion (7-8 common questions: scope, pricing model, NDA, timelines, who they work with)
  → Footer (no additional CTA banner needed — form is the CTA)
```

---

## 4. Form Interaction Detail (Contact — multi-step)

| State | Behavior |
|---|---|
| Step indicator | "0X / 05" top-left of form card, updates live |
| Field validation | Inline, on blur — red underline + short helper text, no modal errors |
| Continue button | Disabled (dimmed) until required fields valid; magnetic hover once enabled |
| Back button | Always available except Step 1; preserves entered data |
| Transition between steps | Horizontal slide + fade, 300ms, height auto-adjusts |
| Submit | Button → loading spinner state → success screen (checkmark animation + confirmation copy) |
| Background | Ambient looping video/gradient behind form card, muted, low-opacity, non-distracting |

---

## 5. Responsive / Mobile Notes
- Full-screen menu overlay replaces the 4-link inline nav below ~1024px
- Bento key-facts grid collapses from multi-column to stacked single column
- Work grid drops video-on-hover (no hover on touch) → tap shows a static "View" tag, tap again/navigates
- Drag-to-reveal team grid becomes swipeable carousel (native touch scroll, snap points)
- Multi-step contact form keeps identical step logic; layout goes single-column, sticky progress bar pinned to top of viewport

---

## 6. Component Inventory Checklist (for build handoff)
- [ ] Sticky nav w/ blur + hide-on-scroll
- [ ] Full-screen overlay menu
- [ ] Magnetic button component
- [ ] Marquee (logos / tech stack / awards)
- [ ] Bento stat grid w/ count-up
- [ ] Service card (icon + hover lift)
- [ ] Video-hover project card
- [ ] Case study template page
- [ ] Horizontal 3-step process timeline
- [ ] Drag-to-reveal team grid
- [ ] Testimonial card (w/ optional audio toggle)
- [ ] Multi-step form w/ progress indicator
- [ ] FAQ accordion
- [ ] CTA banner (full-width)
- [ ] Footer w/ sitemap + socials

---

*Prepared for AXEN — sitemap scope: Home, Services, Work, About, Contact (no Pricing page). Structure and interaction logic reference trionn.com; all copy is original to AXEN.*
