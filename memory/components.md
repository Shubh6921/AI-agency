> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# COMPONENT INVENTORY

## 1. PURPOSE
This file maintains the inventory of all shared, reusable components in the AXEN application. It documents properties, imports, dependencies, and integration status to prevent code duplication.

## 2. WHEN AI SHOULD READ IT
- Read this file before designing a new UI element to verify if an equivalent block or helper component already exists.

## 3. WHEN AI SHOULD UPDATE IT
- Update this file whenever a reusable component is created, deleted, or has its API/props modified.

---

## 4. REUSABLE COMPONENTS INVENTORY

### `Button`
- **Purpose:** Standard button supporting solid contrast (white fill) and ghost outline (transparent fill, border) configurations with optional magnetic hover tracking.
- **Props:**
  - `variant: 'solid' | 'ghost'`
  - `magnetic: boolean`
  - `children: React.ReactNode`
  - `onClick?: () => void`
  - `className?: string`
- **Dependencies:** Framer Motion, GSAP, `/lib/utils.ts`
- **Used by:** Hero, Bento Stats, Services preview, Footer CTA, Contact form
- **Status:** Planned

### `CustomCursor`
- **Purpose:** Custom cursor overlay replacing the default browser pointer, implementing smooth tracking and hover context adjustments.
- **Props:** None
- **Dependencies:** GSAP
- **Used by:** Global Shell (`/app/layout.tsx`)
- **Status:** Planned

### `Marquee`
- **Purpose:** Infinite scrolling row displaying logo grids or textual lists that pauses on hover.
- **Props:**
  - `direction: 'left' | 'right'`
  - `speed?: number`
  - `children: React.ReactNode`
- **Dependencies:** None (Pure CSS keyframes animation)
- **Used by:** Trust marquee, Tech Stack showcase
- **Status:** Planned

### `StatCard`
- **Purpose:** Key facts stats panel that animates a digit count-up when scrolled into the viewport.
- **Props:**
  - `number: string` (e.g. "050")
  - `label: string`
  - `suffix?: string` (e.g. "+", "%")
- **Dependencies:** GSAP ScrollTrigger
- **Used by:** Bento Stats Section
- **Status:** Planned

### `VideoCard`
- **Purpose:** Autoplay, muted, looping video card module displaying dynamic mockups.
- **Props:**
  - `src: string`
  - `posterSrc?: string`
  - `className?: string`
- **Dependencies:** HTML Video element
- **Used by:** Bento Stats Section, Work Grid Case Tiles
- **Status:** Planned

### `Accordion`
- **Purpose:** Expandable summary panel implementing height transitions.
- **Props:**
  - `title: string`
  - `children: React.ReactNode`
  - `isOpenByDefault?: boolean`
- **Dependencies:** Framer Motion
- **Used by:** FAQ Section, Services detail list
- **Status:** Planned

---

## 5. FUTURE ADDITIONS
*(Section reserved for detailing new inputs, slider overlays, tooltips, or modals as the UI complexity grows)*
