# PROJECT OVERVIEW

- **Project Name:** AXEN
- **Purpose:** A premium, AI-first creative digital agency website that showcases services in intelligent automation, custom software, and digital product design.
- **Elevator Pitch:** AXEN is an AI-first creative agency that designs and builds premium websites, intelligent automations, and digital products for ambitious businesses.
- **Target Users:** High-growth startups, ambitious brands, enterprises wanting to leverage AI, and tech-savvy clients looking for top-tier digital experiences.
- **Business Goals:**
  - Establish a premium, authoritative market presence in AI integration and automation.
  - Funnel visitors to the multi-step business enquiry system to capture high-value leads.
  - Deliver an award-winning user experience with custom motion, scroll choreography, and visual polish.

---

# PRODUCT VISION

- **Long-Term Vision:** To set the definitive standard for how design, motion, and AI-first engineering converge to create unforgettable digital products.
- **Core Philosophy:** "Intelligence, engineered to matter." Every pixel should have purpose; every animation should tell a story; every interaction should feel effortless. We combine AI capabilities with human creativity to build products that feel years ahead of the competition.
- **User Experience Principles:**
  - **Radically Clear:** Information should arrive exactly when needed. Avoid visual noise, unnecessary overlays, or cluttered details.
  - **Unhurried Premium Feel:** The user experience should feel calm, controlled, and deliberate—a reflection of high-end engineering.
  - **Frictionless Conversion:** The path to contact or enquiry should never be more than one click/tap away, available from any scroll depth.
- **Design Principles:**
  - **Strict Monochrome Canvas:** A near-black canvas (`#050505`) that never breaks, creating a consistent environment that highlights content and media.
  - **Typography-Led Hierarchy:** A massive size contrast between display headlines (serif/serif-adjacent) and UI/body copy (clean sans-serif).
  - **Eyebrow Micro-Labeling:** Every major section opens with a `✦` prefixed, tracked-out, uppercase eyebrow label to establish structure and rhythm.

---

# TECH STACK

- **Frontend:** Next.js 14+ (App Router) + React 18+ + TypeScript
- **Backend:** Next.js Route Handlers (Serverless/Edge Functions)
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth (Client & SSR Server client)
- **Deployment:** Vercel (Edge network, optimized Next.js host)
- **Animations:** GSAP (GreenSock Animation Platform) + ScrollTrigger + Framer Motion
- **Smooth Scroll:** Lenis (Studio Freight) for smooth inertia scrolling
- **Icons:** Lucide React & Custom SVG graphics
- **Fonts:** 
  - *Display Headline:* EB Garamond (loaded via `next/font/google` for zero CLS)
  - *Body / UI Copy:* Inter (loaded via `next/font/google` for readability)
- **State Management:** React Context API + Local Component State (keeps bundle light)
- **Forms:** React Hook Form
- **Validation:** Zod

---

# PROJECT RULES

- **Never rewrite unrelated files:** Only modify files directly related to the user's specific request.
- **Never change architecture without approval:** Keep layouts, page structure, and routing patterns aligned with the established design.
- **Never replace/add technologies:** Stick strictly to the specified tech stack (Next.js, React, TS, Tailwind, Framer Motion, GSAP, Supabase, Vercel). Do not introduce alternative CSS libraries, utility helpers, or state libraries.
- **Never create duplicate components:** Always audit the components directory before writing a new layout element. Reuse existing primitives.
- **Enforce Tone and Copy Discipline:** Do not use exclamation marks or hype words ("amazing", "revolutionary", "groundbreaking") in public-facing copy. Copy must be calm, declarative, and outcome-oriented.
- **Strict TypeScript Typing:** Avoid `any` types. Provide explicit definitions for database schemas, form fields, and component props.

---

# DIRECTORY MAP

```
├── /app                  # Next.js App Router (pages and server actions)
│   ├── layout.tsx        # Global shell, smooth scroll wrap, navbar, footer
│   ├── page.tsx          # Homepage
│   ├── services/         # Services page
│   ├── work/             # Case studies page & dynamic details
│   ├── about/            # About page
│   ├── contact/          # Contact page with multi-step enquiry form
│   └── api/              # API Route Handlers (Supabase writes, notifications)
├── /components           # UI Components
│   ├── /ui               # Atomic primitives (buttons, inputs, overlays, custom cursor)
│   └── /sections         # Large section-level components (Hero, Bento, ServicesGrid)
├── /hooks                # Custom React hooks (scroll triggers, magnetic pull, state)
├── /lib                  # Utilities and client wrappers
│   ├── supabase.ts       # Supabase client configurations
│   └── utils.ts          # Class merging (clsx/tailwind-merge) and formatting helpers
├── /public               # Static assets, mockups, SVG assets, looping video clips
├── /types                # Global TypeScript type definitions
└── /styles               # Tailwind globals and font configurations
```

---

# COMPONENT INVENTORY

*Planned reusable components to be populated upon repository initialization:*

| Component Name | Location | Purpose | Dependencies |
|---|---|---|---|
| `Button` | `/components/ui/Button.tsx` | Reusable button supporting solid (white fill) and ghost (outlined) variants with magnetic hover effect. | Framer Motion, GSAP |
| `CustomCursor` | `/components/ui/CustomCursor.tsx` | Custom follow-cursor that adapts shape/label when hovering over case studies or interactive inputs. | GSAP |
| `Marquee` | `/components/ui/Marquee.tsx` | Infinite horizontal scrolling row for tech stack integrations and partner brand logos. | CSS Keyframes / GSAP |
| `StatCard` | `/components/ui/StatCard.tsx` | Bento-grid stats display featuring a large animated number counter triggering on scroll reveal. | GSAP ScrollTrigger |
| `VideoCard` | `/components/ui/VideoCard.tsx` | Autoplay, muted, looping video module for mockups and culture highlights. | HTML Video element |
| `Accordion` | `/components/ui/Accordion.tsx` | Expandable drawer with smooth-height animation and rotating chevron for FAQ and capabilities. | Framer Motion |
| `EnquiryDrawer` | `/components/ui/EnquiryDrawer.tsx` | Slide-out overlay nav panel providing immediate access to business coordinates, social media, and story. | GSAP |

---

# PAGE INVENTORY

| Path | Page Name | Purpose | Status | Dependencies |
|---|---|---|---|---|
| `/` | Homepage | Intro hero, bento stats, services preview, featured projects, process, testimonials. | Planned | GSAP, Framer Motion |
| `/services` | Services | Complete list of disciplines, detailed capability cards, tech stack marquee, workflow timeline. | Planned | Framer Motion |
| `/work` | Work | Curated portfolio grid of case studies with video hover states. | Planned | GSAP |
| `/work/[slug]` | Case Study Detail | Dynamic route detailing problem statements, deliverables, tech utilized, and quantifiable outcomes. | Planned | next/image |
| `/about` | About | Team mission statement, value cards, leadership focus, team grid, testimonials. | Planned | Framer Motion |
| `/contact` | Contact | High-conversion multi-step form, interactive FAQ list, location markers. | Planned | React Hook Form, Zod, Supabase Client |

---

# DATABASE SUMMARY

### Tables

1. **`enquiries`**
   - Stores user submissions from the multi-step contact form.
   - **Fields:**
     - `id` (UUID, Primary Key, Auto-generate)
     - `created_at` (TimestampTZ, default `now()`)
     - `name` (Text, Required)
     - `email` (Text, Required)
     - `company` (Text, Optional)
     - `project_type` (Text[], Required)
     - `budget_range` (Text, Required)
     - `timeline` (Text, Required)
     - `message` (Text, Optional)
     - `status` (Text, default 'unread')

2. **`projects`**
   - Houses details for case studies.
   - **Fields:**
     - `id` (UUID, Primary Key, Auto-generate)
     - `slug` (Text, Unique Index, Required)
     - `title` (Text, Required)
     - `client` (Text, Required)
     - `role` (Text, Required)
     - `description` (Text, Required)
     - `scope` (Text[], Required)
     - `tech_stack` (Text[], Required)
     - `thumbnail_url` (Text, Required)
     - `outcome_metric` (Text, Optional)
     - `outcome_desc` (Text, Optional)

### Relationships
- Self-contained. No complex foreign key relationships are required for v1.

### Row Level Security (RLS)
- **`enquiries`:**
  - Insert enabled for `anon` (public access to allow contact form submission).
  - Select, Update, Delete restricted to authenticated admin users.
- **`projects`:**
  - Select enabled for public/anon (to show case studies on website).
  - Write operations (Insert/Update/Delete) restricted to authenticated admin users.

### Indexes
- Unique index on `projects(slug)`.
- Index on `enquiries(created_at)` for sorting in administrative dashboards.

---

# API SUMMARY

### `POST /api/enquiries`
- **Purpose:** Submits data from the contact form, validates it on the server, and inserts it into Supabase database.
- **Authentication:** None (Open endpoint).
- **Validation:** Zod schema validation (matches form schema).
- **Dependencies:** Supabase Server Client, Zod.

---

# DESIGN SYSTEM

### Colors (Grayscale Ramp)
- **Canvas (Background):** `#050505` (Universal dark background)
- **Base Surface (Section background):** `#0D0D0D`
- **Raised Surface (Cards, hovers, inputs):** `#151515`
- **Primary Text:** `#FAFAFA` (Headlines)
- **Secondary Text (Body copy):** `#A0A0A5`
- **Tertiary Text (Labels, microcopy):** `#6B6B70`
- **Accent (Contrast CTA):** `#FFFFFF` fill (with `#050505` text)
- **Hairlines (Borders):** 1px solid `#232326`

### Typography
- **Display Hero:** 
  - Font: EB Garamond (Serif)
  - Desktop: `96px` / Mobile: `48px`
  - Weight: `400`
  - Line Height: `1.0`
  - Letter Spacing: `-0.02em`
- **Headline Large:**
  - Font: EB Garamond (Serif)
  - Desktop: `64px` / Mobile: `40px`
  - Weight: `400`
  - Line Height: `1.2`
- **Body Large:**
  - Font: Inter (Sans)
  - Size: `18px`
  - Weight: `400`
  - Line Height: `1.6`
- **Body Small:**
  - Font: Inter (Sans)
  - Size: `16px`
  - Weight: `400`
  - Line Height: `1.6`
- **Micro-label / Eyebrow:**
  - Font: Inter (Sans)
  - Size: `12px`
  - Weight: `500`
  - Line Height: `1.0`
  - Letter Spacing: `0.2em`
  - Style: Uppercase, prefixed with `✦ `
- **UI Label (Buttons, Nav Links):**
  - Font: Inter (Sans)
  - Size: `14px`
  - Weight: `500`
  - Line Height: `1.0`
  - Letter Spacing: `0.05em`

### Spacing & Grid System
- **Layout Maximum Width:** `1440px` (centered)
- **Column Gutter:** `24px`
- **Desktop Side Margins:** `64px`
- **Mobile Side Margins:** `20px`
- **Vertical Spacing:** Section gaps are set to `120px` to `160px` to create structural breathing room.

### Border Radius
- `sm`: `4px`
- `DEFAULT`: `8px`
- `md`: `12px`
- `lg`: `16px` (Default card corners)
- `xl`: `24px` (Large bento containers)
- `full`: `9999px` (Pill buttons)

### Responsive Breakpoints
- **Mobile:** `< 768px`
- **Tablet:** `768px` to `1024px`
- **Desktop:** `> 1024px`

---

# UI STYLE GUIDE

AXEN adheres to a **Luxury Minimalist / Dark Modern** visual identity:
- **Zero Saturated Accent Colors:** Grayscale palette where white elements act as high-contrast targets. No visual chrome.
- **Architectural Constraints:** Layout elements align strictly to the 12-column grid. Thin `1px` borders are used instead of heavy shadows or glows to divide space.
- **Contrast Ratios:** Pure white and off-white components stand out sharply against the pitch-black canvas, enforcing high accessibility (WCAG AA compliant contrast ratio).
- **Cleanliness:** No visual clutter, no decorative shapes (e.g. random circles or floating abstract grids), and no exclamation points. Visual interest is generated purely by typography sizing, high-contrast imagery/video, and motion dynamics.

---

# ANIMATION GUIDE

- **Motion Philosophy:** Animation is used exclusively to sequence incoming information and reward user interaction. It must never distract, loop pointlessly, or lag the viewport.
- **Allowed Animations:**
  - Scroll reveals (fade-in + translate-up by `50px` on element viewport entry).
  - Infinite logo marquee loops.
  - Page routing transitions (fade-in, persistent dark canvas backdrop).
  - Magnetic button cursor tracking (proximity pull of `±8px`).
  - Custom cursor following and expanding.
  - Multi-step form step slides.
- **Forbidden Animations:**
  - Heavy particle explosions, floating background blobs, bounce effects on layout boxes, and page loaders that lock scroll for more than 500ms.
- **Timing and Easing:**
  - **Standard Duration:** `300ms` for hover transitions; `600ms` for section reveals.
  - **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) for responsive, Snappy UI responses.

---

# PERFORMANCE RULES

- **Image & Video Optimization:** All images must use `next/image` with explicit sizes/layouts. Loop videos must be under 3MB, compressed to WebM/MP4, and use lazy loading + fallbacks.
- **Code Splitting:** Dynamic imports (`next/dynamic`) for heavy animation components (like custom WebGL/ThreeJS details).
- **Accessibility:** Mandatory `alt` text, valid ARIA roles for custom accordions and drawer elements, explicit focus ring outlines for keyboard navigation.
- **SEO:** Unique `<title>` and `<meta name="description">` tags for every page. Use appropriate HTML5 semantic structures (`<main>`, `<header>`, `<section>`, `<footer>`).
- **Bundle Optimization:** Avoid importing large, heavy libraries. Rely on native browser APIs and modular GSAP packages.

---

# CODING STANDARDS

- **Naming Conventions:**
  - **Components:** PascalCase (e.g., `Button.tsx`, `EnquiryDrawer.tsx`).
  - **Files & Directories:** kebab-case (e.g., `case-study/`, `use-scroll.ts`).
- **Import Ordering:**
  1. React and Next.js built-ins.
  2. Third-party packages (GSAP, Framer Motion).
  3. Custom shared components (`@/components/ui/...`).
  4. Local hooks, utilities, and assets.
  5. Types and interfaces.
- **Component File Structure:**
  - Imports -> Interface/Types -> Component -> Sub-components (if small) -> Export.
  - Keep components under 250 lines. Extract sub-components if they exceed this limit.
- **Error Handling:** Use custom boundaries (`error.tsx`) in App router; wrap data fetches in try-catch with graceful console warnings.

---

# SECURITY RULES

- **Environment Variables:** Credentials like Supabase Service Role keys must NEVER be exposed client-side. Only use `NEXT_PUBLIC_` prefix for non-sensitive values.
- **Supabase Security Policies:** Enforce Row-Level Security (RLS) on all tables. Anon inserts must be strictly rate-limited or monitored to prevent spam.
- **Form Inputs:** Sanitize and validate all form submissions via Zod schemas both on the frontend and in Route Handlers.

---

# CURRENT STATUS

- **Completed:** 
  - Project specification and design system token definitions.
  - Core tech stack alignment.
- **In Progress:** 
  - Repository initialization.
- **Planned:** 
  - Core directory setup, tailwind configuration, components scaffolding, page routing layout.

---

# TODO ROADMAP

### Immediate
- Initialize the Next.js project with Tailwind CSS, TypeScript, and ESLint configurations.
- Scaffold components folder, hooks directory, and style files.
- Apply monochrome design tokens in `tailwind.config.ts`.

### Next
- Build the persistent Navbar and footer CTA structures.
- Implement the Lenis smooth-scroll loop and custom cursor controls.
- Create the Homepage hero structure, bento stat grids, and marquee loops.

### Future
- Construct services detail blocks and case study pages.
- Integrate Supabase database and wire the multi-step contact form.
- Perform accessibility audits and deploy to Vercel.

---

# KNOWN ISSUES
- *None (initialization phase).*

---

# AI WORKING RULES

1. **Read `brain.md` First:** Before commencing any task, read this file to lock context.
2. **Targeted Read Access:** Read only the files directly relevant to the user request.
3. **No Unnecessary Scans:** Never scan the entire directory unless a macro architecture change is explicitly requested.
4. **Implementation Plan:** Explain the implementation steps in 3-5 bullet points before writing code.
5. **Modify Minimal Files:** Keep changes highly focused.
6. **Preserve Architecture:** Follow established Next.js App Router patterns, directory conventions, and design system rules.
7. **No Full Code rewrites:** Modify contiguous blocks via code edits; do not overwrite entire files.
8. **Component Reuse:** Audit `components/ui/` before scaffolding new styling boxes.
9. **Preserve Coding Style:** Match code formatting, syntax conventions, and TS definitions.
10. **Result Delivery:** Return only the modified files and a brief summary of changes.

---

# CONTEXT UPDATE LOG

### 2026-07-07T17:15:58+05:30
- Initialized `brain.md` file specifying project vision, tech stack, monochrome design system tokens, database tables, and AI behavior rules. (Status: Initialized).
