> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# APPLICATION ARCHITECTURE

## 1. PURPOSE
This file maps the structural design and code layout of the AXEN web application. It specifies directory roles, state management patterns, data lifecycle, rendering strategies, and dependency routing.

## 2. WHEN AI SHOULD READ IT
- Read this file when modifying folder configurations, introducing new dependencies, adding routing, or rewriting global layouts.

## 3. WHEN AI SHOULD UPDATE IT
- Update this file when major structural revisions occur, new routes are introduced, or data boundaries are shifted.

---

## 4. DIRECTORY RESPONSIBILITIES

```
├── /app                  # Next.js App Router root (Pages, Layouts, Server Actions)
│   ├── layout.tsx        # Global layout shell, custom scroll hooks, global theme wrappers
│   ├── page.tsx          # Homepage core layout
│   └── api/              # Route Handlers for API endpoints
├── /components           # React components folder
│   ├── /ui               # Atomic UI components (Buttons, Inputs, Modals, Cursors)
│   └── /sections         # Large page modules (Hero section, stats grid, contact form)
├── /hooks                # Custom React Hooks (GSAP animations, media queries, magnetic pulls)
├── /lib                  # Third-party configuration files, Supabase client client configuration, utilities
└── /types                # TypeScript definitions and database models
```

---

## 5. DATA FLOW
- **Enquiry Submission:** 
  1. User interacts with multi-step `/contact` form.
  2. Input is validated client-side via React Hook Form + Zod.
  3. Form data is transmitted via POST to `/api/enquiries`.
  4. Server route handler validates request format and executes insert queries to Supabase.
  5. API responds with success/failure status codes.

---

## 6. AUTHENTICATION FLOW
- **Admin Authentication:**
  1. Access to dashboard subroutes utilizes Supabase client-side cookie storage and server middleware verification.
  2. Unauthenticated requests redirection handled via middleware redirect loops to `/login`.
  3. Public/Anon user sessions do not require token exchanges.

---

## 7. RENDERING STRATEGY
- **Static Site Generation (SSG) / Incremental Static Regeneration (ISR):**
  - Homepage, About, Services, and Work listings are static pages for maximum load performance.
- **Dynamic Server-Side Rendering (SSR):**
  - Project detail pages `/work/[slug]` render dynamically or use ISR to query the database.
- **Client Components (`'use client'`):**
  - Reserved for interactive states: custom cursors, multi-step forms, GSAP animations, accordions.

---

## 8. STATE MANAGEMENT
- **Local React State (`useState`):** Preferred default for forms, tabs, toggles.
- **React Context API:** Used only for global UI states, such as menu overlay open/close flags and cursor hover indicators.
- **No Global Store Libraries:** Avoid Redux, Zustand, or MobX to minimize bundle size.

---

## 9. DEPENDENCY GRAPH
- Next.js Core -> React -> Tailwind CSS -> Lucide React.
- Animation layer: GSAP Core (ScrollTrigger) & Framer Motion.
- Smooth scroll Layer: Lenis.
- Forms & Validation: React Hook Form -> Zod -> Supabase JS Client.

---

## 10. FUTURE ADDITIONS
*(Placeholder for architectural flow diagrams, middleware configurations, and API gateway routing)*
