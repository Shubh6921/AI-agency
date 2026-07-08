> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# MASTER PROJECT BRAIN

## 1. PURPOSE
This is the master memory file for the AXEN project. It serves as the primary system-level context mapping, containing the high-level business goals, core philosophy, visual guidelines, tech stack configurations, and current operational guidelines.

## 2. WHEN AI SHOULD READ IT
- Read this `brain.md` file first at the start of every session or task.

## 3. WHEN AI SHOULD UPDATE IT
- Update this file when project-level tech changes occur, brand directives change, or core working rules are revised.

---

## 4. PROJECT OVERVIEW
- **Project Name:** AXEN
- **Purpose:** A premium, AI-first creative digital agency website showcasing advanced automation, web platforms, and branding capability.
- **Elevator Pitch:** AXEN designs and builds premium websites, intelligent automations, and digital products for ambitious businesses.
- **Target Users:** High-growth startups, enterprises seeking intelligent automation, and tech-focused entities demanding high-end web presence.
- **Business Goals:** 
  - Deploy an award-winning web portfolio (awwwards-tier visual aesthetics).
  - Capture high-tier business leads through a structured, multi-step enquiry form.
  - Assert technical expertise in AI pipelines, n8n automations, and custom Next.js engineering.

---

## 5. PRODUCT VISION
- **Long-term Vision:** To merge design craftsmanship and AI engineering into experiences that redefine digital products.
- **Core Philosophy:** "Intelligence, engineered to matter." We combine cutting-edge AI systems with elite human design aesthetics. Restrained, unhurried, and highly detailed.
- **User Experience Principles:** 
  - **Radical Clarity:** Eliminate distractions. Present information in clean, readable typography.
  - **Premium Flow:** Ensure smooth, frictionless transitions, and persistent canvas colors.
  - **Outcome-Oriented:** Copy focused on results and utility, omitting marketing hype.
- **Design Principles:** Strict monochrome grayscale canvas (`#050505`), serif/sans-serif contrast (EB Garamond display / Inter body), and section rhythmic headers prefixed with `✦`.

---

## 6. TECH STACK
- **Frontend:** Next.js 14+ (App Router), React 18+, TypeScript, Tailwind CSS, Framer Motion
- **Animations & Scrolling:** GSAP + ScrollTrigger, Lenis (smooth scroll)
- **Icons:** Lucide React, Custom SVG
- **Fonts:** EB Garamond (Display Headline), Inter (Body/UI)
- **Database & Auth:** Supabase (PostgreSQL, Supabase Auth)
- **State & Forms:** React Hook Form, Zod (validation), Context API
- **Hosting:** Vercel

---

## 7. PROJECT RULES
- Never change architecture, libraries, or tech stack without explicit approval.
- Never duplicate code. Scan `memory/components.md` and `/components` first.
- Enforce strict type safety (no `any` type overrides).
- Maintain copy constraints: No exclamation marks, no generic hype words (e.g. "revolutionary").
- Write modular, highly-focused files (keep components under 250 lines).

---

## 8. AI WORKING RULES
- **Read `brain.md` first:** Lock down project objectives before reading any source code.
- **Minimize scanned files:** Target only files explicitly requested or directly related to the issue.
- **Explain changes:** Document implementation plan in 3-5 bullets before making changes.
- **No full-file rewrites:** Perform surgical line edits; preserve unchanged sections.
- **Preserve design guidelines:** Always respect colors, spacing, and typography tokens.

---

## 9. CURRENT STATUS
- **Completed:** Strategy, PRD analysis, design tokens mapping, knowledge directory architecture.
- **In Progress:** Base Next.js configuration planning.
- **Planned:** Core design token integration in Tailwind CSS, Homepage build.

---

## 10. FUTURE ADDITIONS
*(Placeholder section for future system configurations, workspace routes, and metadata integrations)*
