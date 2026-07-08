> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# DESIGN SYSTEM SPECIFICATION

## 1. PURPOSE
This file serves as the single source of truth for the AXEN design tokens, layout parameters, typography rules, spacing standards, and visual guidelines. It ensures UI consistency across all layouts.

## 2. WHEN AI SHOULD READ IT
- Read this file before configuring `tailwind.config.ts`, creating styles, or styling new custom UI components.

## 3. WHEN AI SHOULD UPDATE IT
- Update this file if the color palette, font declarations, spacing configurations, or rounded radius scales are updated.

---

## 4. COLOR PALETTE (STRICT MONOCHROME)
- **Canvas (Background):** `#050505` (Universal page background)
- **Base Surface (Section backgrounds):** `#0D0D0D`
- **Raised Surface (Cards, hovers, inputs):** `#151515`
- **Primary Text:** `#FAFAFA` (Display text and headlines)
- **Secondary Text (Body copy):** `#A0A0A5`
- **Tertiary Text (Labels, microcopy):** `#6B6B70`
- **Accent (Contrast CTA):** `#FFFFFF` fill (with `#050505` text)
- **Hairlines (Borders):** 1px solid `#232326`

---

## 5. TYPOGRAPHY SYSTEM
- **Display Hero:** 
  - Font: EB Garamond (Serif)
  - Sizes: Desktop: `96px` / Mobile: `48px`
  - Weight: `400`
  - Line Height: `1.0`
  - Letter Spacing: `-0.02em`
- **Headline Large:**
  - Font: EB Garamond (Serif)
  - Sizes: Desktop: `64px` / Mobile: `40px`
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

---

## 6. SPACING SCALE
- Standard spacing leverages an 8px modular scale.
- **Section Gaps:** `120px` to `160px`
- **Gutter:** `24px`
- **Margins:** Desktop: `64px` / Mobile: `20px`

---

## 7. BORDER RADIUS
- `sm`: `4px`
- `DEFAULT`: `8px`
- `md`: `12px`
- `lg`: `16px` (Card borders)
- `xl`: `24px` (Bento layout items)
- `full`: `9999px` (Pill elements and buttons)

---

## 8. ANIMATION RULES & PHILOSOPHY
- **Duration:** Standard transitions are `300ms`; entry animations are `600ms`.
- **Easing:** Snappy out-expo `cubic-bezier(0.16, 1, 0.3, 1)` for transitions.
- **Scroll reveal:** Triggers via GSAP ScrollTrigger (Translate-up 50px + opacity fade).

---

## 9. ICON SYSTEM
- Use **Lucide React** for general iconography.
- Stroke weight: `1.5px` to keep it clean and minimal.
- Color: `#A0A0A5` (Secondary text) by default, transitioning to `#FAFAFA` (Primary text) on hover states.

---

## 10. SHADOWS & GLASS EFFECTS
- No drop shadows are permitted on standard cards.
- **Borders over Shadows:** Layout boxes are defined by a `1px` border of `#232326`.
- **Glass Card Treatment:**
  - Background: `rgba(13, 13, 13, 0.7)`
  - Backdrop Blur: `12px`
  - Border: `1px solid rgba(35, 35, 38, 0.5)`

---

## 11. RESPONSIVE BREAKPOINTS
- **Mobile:** `< 768px`
- **Tablet:** `768px` to `1024px`
- **Desktop:** `> 1024px`

---

## 12. FUTURE ADDITIONS
*(Section reserved for tailwind preset structures, color contrast checkers, and typography import configurations)*
