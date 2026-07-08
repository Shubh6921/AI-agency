# design.md — Deep Design Teardown: trionn.com

Professional-grade UX/UI teardown of trionn.com, section by section, written to be used as a design-system reference for building AXEN (or any similarly-positioned brand). This documents *patterns and mechanics* — layout logic, motion behavior, typographic hierarchy, spacing rhythm — not the site's literal copy or code, so it can be safely used as an inspiration brief.

---

## 0. First-Impression Diagnosis

The site reads as **restrained-premium**, not flashy-premium. Every design decision reinforces one idea: confidence doesn't need to shout. Three structural devices do almost all the work:

1. **A near-black canvas that never breaks** — no section ever lightens up, so the eye never resets; it trains the visitor to expect a consistent, controlled environment (a signal of craft discipline).
2. **A recurring micro-label + eyebrow pattern** at the top of every section — this is the site's real "brand mark," more than the logo itself. It's the rhythm device that makes 5 very different page types (hero, portfolio grid, service cards, form, testimonials) feel like one continuous system.
3. **Motion that reveals rather than decorates** — almost nothing animates just to look cool; animation is used to sequence information (stat count-ups, staggered reveals, scroll-scrubbed strips) so the page always feels like it's "arriving" rather than "loading."

---

## 1. Color System

| Token | Value | Usage |
|---|---|---|
| Canvas | `#040508` | Universal background, every page, no exceptions |
| Primary text | Off-white, ~`#F5F5F5`–`#FFFFFF` | Headlines only |
| Secondary text | Muted gray, ~`#9CA3AF`–`#B0B0B8` | Body copy, subheads, microcopy |
| Tertiary/label text | Dimmer gray, ~`#6B7280` | Eyebrow micro-labels, footnotes, timestamps |
| Accent | Effectively none — no saturated brand color is used as a UI accent | Color restraint is itself the brand signal; CTAs rely on fill/contrast, not hue |

**Takeaway:** there is no "brand blue" or "brand orange" anywhere. The entire palette is a grayscale ramp against near-black. Any color that does appear comes from photography, video, or partner/award logos — never from UI chrome. This is a deliberate choice: it reads as engineering/architecture rather than "creative agency rainbow."

---

## 2. Typography System

- **Display/headline face:** a large serif (or serif-adjacent display face) used exclusively for big statement lines — hero headline, section H1s/H2s, pull-quotes. Tight line-height, generous size jump versus body text (headline is often 6–10x the body font-size).
- **Body/UI face:** a clean grotesk/sans for paragraphs, nav links, buttons, form labels.
- **Micro-label treatment:** every eyebrow label uses the sans face, but transformed — uppercase, wide letter-spacing (roughly 0.15–0.25em), small size (11–13px), and prefixed with a `✦` glyph. This single typographic move is repeated at the top of literally every section on every page — it's the strongest "systemization" signal in the whole design.
- **Hierarchy logic:** there are effectively only 4 text roles in the entire system — micro-label, headline/display, body/subhead, UI-label (nav/button/form). Nothing exists outside these 4. This constraint is why the site feels so controlled despite covering 5 very different page types.

---

## 3. Navbar — Deep Mechanics

**Structure:**
- Logo fixed top-left, links home
- Primary nav links (Work / Services / About / Contact) sit left-of-center or center, small-caps style matching the body face
- A pill-shaped "let's talk" CTA sits permanently on the right — filled/solid style, high-contrast against the dark canvas
- A hamburger/menu trigger sits at the far right

**Behavior — the important part:**
- The nav is **transparent at all scroll depths**. There is no scroll-triggered background fill, no blur-on-scroll, no shrink-on-scroll. This is unusual (most modern sites add a solid nav bar after ~100px of scroll) and it's a deliberate restraint choice — it keeps the canvas feeling like one continuous surface rather than "content passing under a UI layer."
- The nav is **pixel-identical across every route.** Same links, same position, same style on Home, Work, Services, About, Contact. No page has a nav variant. This uniformity is part of why navigating the site feels frictionless — the chrome never re-teaches itself.

**Slide-out panel (triggered by hamburger):**
- Opens as a full panel/overlay with a blurred, darkened backdrop behind it (the blur lives here, not on the nav bar itself)
- Contains: a "business enquiry" block with clickable email + phone, a company-age/credibility microcopy line ("Est. [year] — [X]+ years..."), a link out to a dedicated brand-story page, and a social icon row
- This panel is effectively a **secondary contact surface** available from anywhere on the site without navigating away — a strong pattern for a services/agency site where the CTA-to-contact path should never be more than one click deep, from any scroll position, on any page.

---

## 4. Hero Section — Deep Mechanics

**Content stack, top to bottom:**
1. A 3-word "triad" eyebrow (rendered as three short words joined by a middle-dot separator) — sets tone before the headline lands
2. A short, 2-line, high-impact display headline — deliberately abstract/emotional rather than descriptive ("what we literally do" is explained later, not in the headline)
3. A single primary CTA button directly under the headline
4. A small credibility badge (company age / years of experience) positioned as a secondary, quieter element — not competing with the headline for attention
5. A one-line subhead in muted gray that *does* the descriptive work the headline avoided — this is where "what we actually build" gets stated in plain language

**Why this ordering works:** the headline's job is emotional positioning, not information delivery. Information delivery is deferred to the subhead, one visual "step" down in hierarchy. This is a deliberate two-tier communication strategy — most weaker hero sections try to make one line do both jobs and end up generic.

**3D/interactive motif:** the hero uses a signature interactive 3D element as its visual anchor (in the reference site's case, a large 3D creature model users can drag/interact with, with sound). The *pattern* worth extracting — independent of the specific object — is:
- One large, centered or off-center 3D hero object rendered via WebGL
- Direct-manipulation interaction (drag, rotate) rather than passive animation only
- Subtle sound design tied to the interaction (optional, muted by default)
- The object is the single most expensive/impressive piece of engineering on the page, and it's placed exactly where a visitor's eye lands first — the site "spends its budget" on the one element guaranteed to be seen by 100% of visitors, rather than spreading effects thin across many sections

**Immediately below the hero (still "above the fold" conceptually):** a short "about" teaser block — one paragraph mission statement plus a "learn more" link. This is a strong pattern: it gives a scanning visitor the studio's positioning in one paragraph without forcing a click to `/about`, while still funneling deeper interest to the full page.

---

## 5. Key Facts / Proof Section — Deep Mechanics

This is a **credibility grid**, not a features grid, and its composition is worth extracting exactly:

- **Logo marquee (infinite horizontal scroll)** of award/recognition platforms — positioned first, before any stats, because third-party validation is psychologically cheaper to process than a self-reported number
- **Stat cards** with a large number + short label underneath (e.g., project count, retention percentage) — numbers are large, bold, and isolated (one number per card, no card tries to hold two stats)
- **A video card embedded inside the stat grid** — autoplaying, muted, looping — breaking up what would otherwise be a wall of numbers with a moving/human element (team or product footage)
- **A second marquee** for business/integration partner logos, visually distinct from the awards marquee (different speed/direction is a nice-to-have, not required)
- **A closing one-line statement** ("different skills, one standard" pattern) that acts as a transition sentence into the next section rather than a hard stop

**Why it works:** the section mixes three trust signals (third-party awards, quantified track record, human/team proof) in one scroll pass, so a skimming visitor absorbs "these people are legitimate" in about 4 seconds of scrolling without reading a single sentence of body copy.

---

## 6. Services Page — Deep Mechanics

**Top-of-page structure:**
- Eyebrow micro-label, then a large H1 naming the page's purpose plainly ("Area of expertise" pattern — descriptive, not clever)
- A **vertical list of service category names** rendered large, almost like a table of contents — this list doubles as an in-page anchor nav further down
- A supporting subhead sentence
- Two CTAs side by side: one pointing to portfolio (secondary/outline), one pointing to contact (primary/filled) — giving the visitor both a "prove it" and a "convert" path at the same decision point

**Per-service card module (repeated once per discipline):**
- A one-line supporting descriptor sits *above* the service image, functioning like a mini-headline for that specific card, distinct from the eventual H2 service name
- Service image/mockup
- H2 service name
- A tight 2-sentence description — calm, outcome-oriented, never listing features in prose form
- A labeled sub-list ("Our Core Capabilities") of 5–6 short capability tags — this is where the actual feature/skill inventory lives, kept separate from the narrative description above it

**Why the split matters:** narrative copy (the 2-sentence description) sells the *outcome*; the capability list sells the *scope*. Mixing these into one paragraph is a common weaker pattern — this site keeps them as two visually distinct zones so a scanning reader can grab either signal independently.

**Technology stack section:** a large numbered list (01, 02, 03…), each number heading a category (frontend, backend, cloud, etc.) with the actual tools/platforms listed underneath in smaller text. This section exists purely as a *technical-depth credibility signal* for a more technical buyer persona — it's denser and less "designed" than the rest of the page on purpose, signaling "substance over polish" for this one section.

**Process section ("How we work"):** exactly 3 steps, each with a one-word/short-phrase title and a short explanatory paragraph. This 3-step block is reused verbatim on both the Services page and the About page — a deliberate consistency device so the studio's methodology becomes memorable through repetition rather than being explained once and forgotten.

---

## 7. Work / Portfolio Page — Deep Mechanics

- **Opening scroll-strip:** a horizontal band of small rotating project thumbnails at the very top of the page, before the H1 — this acts as a visual "trailer" for the grid below, and is a strong pattern for signaling "there's a lot here" before the visitor commits to scrolling
- **Grid of case cards**, each: thumbnail (image, sometimes swapping to video-preview on hover), project name, a single plain-language outcome sentence (what the client does / what was built — not agency jargon), and an "explore project" link
- **Closing block:** a contact CTA paired with a reassurance sentence inviting the visitor to ask for more relevant examples if the visible grid doesn't match their exact needs — this quietly acknowledges that a portfolio grid can never show everything, and turns that limitation into a conversation-starter rather than leaving the visitor to assume the gap

**Case study detail page pattern:** hero project image → problem statement → what was built/scope → tools/tech used → outcome/result → next/previous project navigation. This is a fairly standard case-study anatomy, but the discipline is in keeping every case study the *same* length and structure — no case study is allowed to become a 10-section deep-dive while another is 3 sentences, which keeps the portfolio feeling curated rather than uneven.

---

## 8. About Page — Deep Mechanics

This is the longest, most structurally rich page on the site. Section order, and why each exists:

1. **Opening statement** — a bold multi-line identity statement, standing in for a generic "About Us" header
2. **Team-formation paragraph** — explains *how* the studio staffs projects (specialists assembled per-challenge) before explaining *who* the studio is — process-before-identity
3. **Est.-year block** — years active + a short growth narrative + a "let's connect" CTA embedded mid-page (not just at the bottom) — an early conversion opportunity for a visitor who's already convinced
4. **Values grid** — 6 short cards, title + 2-sentence description each, laid out as a clean grid — values are stated as principles, not as marketing adjectives
5. **Process section** — the same 3-step "how we work" block reused from Services
6. **Founder spotlight** — photo, name, title, one credibility stat/affiliation, a social link, and a short pull-quote — this humanizes the "one standard" idea introduced earlier
7. **Team intro line + team grid** — a short transition line, then team photos; the reference site adds an interactive drag-to-identify game layer on top of the team grid, which is a nice-to-have engagement device, not load-bearing
8. **"Who we're not for"** — a direct, confidently-worded exclusion section. This is a positioning device: by stating who the studio *won't* work with, it implicitly raises the perceived standard for who it *does* work with. Structurally it's just 2–3 short paragraphs, but it's given full-width visual weight (large type, generous whitespace) so it reads as a deliberate statement, not a disclaimer.
9. **Awards/recognition grid** — logos grouped by awarding body, each with a count of honors received — only appears because the studio has genuine, verifiable recognitions to show; this section should never be fabricated or placeholder-filled
10. **Brand/client-logo wall** — a grid of recognizable client logos, followed by a plain scrolling text list of additional client names that didn't warrant a full logo treatment — a way to show breadth of client roster without visually overweighting the page with dozens of logo marks
11. **Testimonial cards** — quote, name, title/company, country; some cards include an optional "listen" affordance suggesting an audio-quote variant exists for a subset of testimonials
12. **Culture closer** — a short, lightly playful closing line/section hinting at behind-the-scenes team culture, functioning as a soft, human sign-off after a page that's otherwise fairly serious and credibility-focused

---

## 9. Contact Page — Deep Mechanics

- H1 stated as an invitation ("let's start something" pattern) rather than a label ("Contact")
- Subhead immediately sets a filtering tone — signaling the kind of client relationship the studio wants, before any form field is shown
- **Multi-step form**, not a single long form:
  - A visible step counter ("01 / 05" pattern) sets expectations for form length up front — reduces abandonment anxiety versus an unknown-length single-page form
  - Step 1 collects only the basics (name, email, company) — low-friction entry
  - Later steps progressively collect more qualifying detail (project type, budget, timeline)
  - Back/Continue navigation between steps, so early answers are always editable
- **Location block** — physical office address, styled plainly (no map embed needed if the brand voice is "quiet confidence" rather than "come visit us")
- **"Join us" block** — a distinct, secondary CTA aimed at prospective collaborators/talent rather than clients, kept short (one line + an email) so it doesn't compete with the primary contact form
- **FAQ accordion** — a tight set of 7 or fewer questions, each answered in 1–2 sentences. The question set itself is a trust-building device: questions like "can we sign an NDA" and "how are projects priced" preemptively answer the exact objections a considered B2B buyer would have before ever picking up the phone.

---

## 10. Motion & Interaction System — Full Inventory

| Pattern | Mechanic | Where it appears |
|---|---|---|
| Section reveal | Fade + upward slide, triggered once on scroll-into-view, moderate stagger on multi-item groups | Every section, every page |
| Infinite marquee | Continuous horizontal loop, independent of scroll position | Award logos, partner logos, work-page thumbnail strip |
| Scroll-scrubbed strip | Horizontal position tied directly to scroll progress (not time-based) | Work-page top thumbnail strip specifically |
| Count-up numbers | Numeric value animates from 0 to target once, on first scroll-into-view | Key-facts stat cards |
| Direct-manipulation 3D | Drag/rotate interaction on a WebGL hero object, with optional sound | Homepage hero |
| Drag-to-identify | Team member photos can be dragged; a name label reveals per member | About page team grid |
| Autoplay muted video-in-card | Looping background video embedded inside a stat/card container | Key-facts video card, work-page hover previews, contact-page background |
| Nav slide-out | Panel slide/reveal with a blurred dark backdrop, staggered internal content fade-in | Global hamburger menu |
| Multi-step form transition | Step content slides/fades between steps, progress counter updates | Contact form |
| Magnetic CTA (implied by overall polish level) | Button subtly follows cursor within a small radius, springs back on mouse-leave | Primary pill CTAs |

**The unifying rule across all of these:** motion is never purely decorative. Every single animation in this inventory either (a) reveals information progressively, (b) demonstrates interactivity/craft as a trust signal, or (c) reduces perceived friction (like the step counter or the marquee that keeps logos legible without needing a "see more" click). Nothing animates "because it's nice" — that discipline is the actual reason the site reads as high-end rather than merely busy.

---

## 11. Spacing, Grid & Layout Rhythm

- Generous vertical whitespace between major sections — sections are never allowed to feel cramped against each other, which reinforces the "confident, unhurried" tone
- Content is consistently constrained to a max-width column even on wide viewports, with full-bleed treatment reserved specifically for marquees, video bands, and the hero 3D stage — i.e., full-width is used only for "spectacle" elements, everything else stays comfortably column-width for readability
- Card grids favor **fewer, larger cards** over many small ones (values: 6 cards not 12; services: one full-width module per service, not a dense tile grid) — this is consistent with the "restraint over density" philosophy running through the whole system

---

## 12. What to Deliberately NOT Copy

For any brand adapting this system (like AXEN), a few things should be treated as *reference-only*, not templates:
- The specific 3D hero motif (a literal creature/mascot) — should be swapped for something that matches the new brand's actual identity (per the AXEN PRD: product/dashboard mockups, not a mascot)
- Literal award-logo claims — never fabricate recognitions; omit the section entirely until real ones exist
- Exact copy/sentences — the *structure* of each section (opening statement → paragraph → CTA, etc.) is reusable; the actual sentences must be written fresh for the new brand's voice
- Team drag-interaction and brand-story sub-page — explicitly a "nice to have," not core to why the system works; safe to defer without losing the design's integrity

---

## 13. One-Paragraph Summary (for quick briefing)

A near-black, single-palette canvas; a strict 4-role type system anchored by a repeated ✦ micro-label motif; a hero that separates emotional headline from descriptive subhead and spends its engineering budget on one high-craft interactive centerpiece; credibility delivered through logos, numbers, and video before any paragraph is read; services split cleanly into narrative-outcome copy versus capability-tag inventory; a long, structurally disciplined About page that uses direct "who we're not for" positioning as a premium filter; and a motion system where every animation earns its place by revealing information or reducing friction rather than decorating the page.
