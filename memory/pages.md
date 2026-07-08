> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# PAGE INVENTORY

## 1. PURPOSE
This file catalogs all pages and dynamic routes in the AXEN application. It documents the route path, page purpose, components embedded, backend dependencies, integration status, and pending optimizations.

## 2. WHEN AI SHOULD READ IT
- Read this file when adding new routes, refactoring dynamic layouts, or updating rendering scopes.

## 3. WHEN AI SHOULD UPDATE IT
- Update this file whenever a route folder is created, deleted, or has its parameters modified.

---

## 4. PAGE INVENTORY LISTING

### Homepage (`/`)
- **Purpose:** Principal landing page conveying brand manifesto, trust banners, bento stats, services overview, and case study previews.
- **Components Used:** `Navbar`, `Hero`, `BrandStatement`, `LogoMarquee`, `BentoStats`, `ServicesPreview`, `ProcessTimeline`, `Testimonials`, `FooterCTA`, `Footer`.
- **Backend Dependency:** None (Uses mock data for v1).
- **Status:** Planned
- **Future Improvements:** Integrate dynamic project metrics from database.

### Services (`/services`)
- **Purpose:** Deep dive into agency offerings, categorizing disciplines, outlining process steps, and showcasing tech stack.
- **Components Used:** `Navbar`, `ServicesHeader`, `DisciplineList`, `TechStackMarquee`, `ProcessDetail`, `FooterCTA`, `Footer`.
- **Backend Dependency:** None.
- **Status:** Planned
- **Future Improvements:** Implement scroll-linked interactive animations for capability steps.

### Work (`/work`)
- **Purpose:** Curated showcase of case studies and product builds.
- **Components Used:** `Navbar`, `WorkHeader`, `CaseStudiesGrid`, `CaseTile` (video-hover thumbnail), `FooterCTA`, `Footer`.
- **Backend Dependency:** Supabase `projects` table (reads slug, titles, images).
- **Status:** Planned
- **Future Improvements:** Add Category tags filter (e.g. "AI Integration", "Product Design").

### Case Study Dynamic Detail (`/work/[slug]`)
- **Purpose:** Chronological project breakdown highlighting problem, execution details, tech, and metrics.
- **Components Used:** `Navbar`, `ProjectHero`, `ProblemStatement`, `ScopeSection`, `OutcomeStats`, `ProjectNav`, `Footer`.
- **Backend Dependency:** Supabase `projects` table (Select where slug matches param).
- **Status:** Planned
- **Future Improvements:** Enable inline case study interactive demos.

### About (`/about`)
- **Purpose:** Explains agency origin, human team grid, value systems, and testimonials.
- **Components Used:** `Navbar`, `AboutHero`, `ValuesGrid`, `FounderSpotlight`, `TeamGrid`, `ExclusionStatement` ("Who we are not for"), `Testimonials`, `Footer`.
- **Backend Dependency:** None.
- **Status:** Planned
- **Future Improvements:** Drag-to-reveal name interaction for team grid.

### Contact (`/contact`)
- **Purpose:** Dynamic, high-conversion multi-step enquiry form paired with FAQ acordions.
- **Components Used:** `Navbar`, `ContactHero`, `MultiStepForm`, `FAQAccordion`, `OfficeLocation`, `Footer`.
- **Backend Dependency:** Supabase `enquiries` table (Inserts submission payloads via API).
- **Status:** Planned
- **Future Improvements:** Add automated verification (CAPTCHA/Honeypot) to block form spam.

---

## 5. FUTURE ADDITIONS
*(Section reserved for dynamic routes like `/blog` or `/admin` panels as the site evolves)*
