# AXEN — Tech Stack for Vibe Coding (Trionn.com-Level Build)

Reference target: [trionn.com](https://trionn.com) — AI-Powered Creative Design & Development Studio (awwwards-tier, Next.js-based, GSAP-driven scroll choreography).

## Core Framework
- **Next.js 14+ (App Router) + TypeScript**
  - Matches Trionn's own stack (confirmed via their Next.js image/opengraph pipeline)
  - Best AI-tooling support (Cursor, Claude Code, v0 all have strong training signal here)
- **Tailwind CSS**
  - Utility-first for fast iteration
  - Enforces design token discipline (1 accent color, consistent radius/spacing)

## Animation & Motion
- **GSAP + ScrollTrigger** — non-negotiable
  - Section reveals, pinned/sticky panels, horizontal marquee, magnetic buttons
  - Trionn's own site name-drops GSAP in its awards strip
- **Lenis** (Studio Freight) — smooth-scroll / inertia layer
  - Standard pairing with GSAP ScrollTrigger on awwwards-tier sites
- **Framer Motion** — component-level micro-interactions
  - Hover states, page-transition wrappers, menu open/close

## Visual Layer
- Trionn leans on **high-quality looping video + big typography + parallax**, not heavy WebGL 3D
  - `next/video` or custom `<video>` with lazy-load + poster frames for key-facts/team reels
- **React Three Fiber / Three.js** — reserved only if a specific 3D hero moment (orb/particle field) is wanted
  - Don't force 3D everywhere — premium feel here = motion timing + typography + restraint

## Custom Interaction Layer
- Custom cursor (magnetic buttons, cursor-follow blob)
  - Plain React + GSAP quickTo/quickSetter, no extra library needed

## Forms & Content
- **React Hook Form + Zod** — multi-step contact form
- **Contentlayer or MDX** — only if Insights/blog needs structured content; otherwise hardcode for v1 speed (skip CMS)

## Fonts & Type System
- Display face: Space Grotesk / Clash Display (oversized headlines)
- Body face: Inter
- Load via `next/font` — zero layout shift

## Deployment
- **Vercel** — zero-config Next.js hosting, instant preview URLs per commit (pairs well with Cursor/Claude Code iteration loop)

## Vibe-Coding Workflow
1. Scaffold section-by-section in v0/Claude Code (hero, key-facts, work grid) — not whole-page at once
2. Lock design tokens (colors, spacing, radius) in `tailwind.config.ts` **before** any component work
3. Build GSAP timelines in isolated hooks (e.g. `useScrollAnimation.ts`) so motion logic stays decoupled from layout JSX
4. Performance-check early — video-heavy sections need aggressive lazy-loading + WebP/AVIF poster fallbacks, or Lighthouse scores drop
