---
name: Axen Premium
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393e'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1a1b20'
  surface-container: '#1e1f24'
  surface-container-high: '#292a2e'
  surface-container-highest: '#333539'
  on-surface: '#e3e2e8'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e3e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c0c7d3'
  on-secondary: '#2a313b'
  secondary-container: '#404752'
  on-secondary-container: '#afb5c2'
  tertiary: '#ffffff'
  on-tertiary: '#2a313d'
  tertiary-container: '#dce2f3'
  on-tertiary-container: '#5e6572'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#dce3f0'
  secondary-fixed-dim: '#c0c7d3'
  on-secondary-fixed: '#151c25'
  on-secondary-fixed-variant: '#404752'
  tertiary-fixed: '#dce2f3'
  tertiary-fixed-dim: '#c0c7d6'
  on-tertiary-fixed: '#151c27'
  on-tertiary-fixed-variant: '#404754'
  background: '#121317'
  on-background: '#e3e2e8'
  surface-variant: '#333539'
  canvas: '#040508'
  surface-alt: '#111218'
  border-subtle: '#1F2937'
typography:
  display-hero:
    fontFamily: ebGaramond
    fontSize: 120px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  body-lg:
    fontFamily: hankenGrotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: hankenGrotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  micro-label:
    fontFamily: hankenGrotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.2em
  ui-label:
    fontFamily: hankenGrotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  gutter: 24px
  max-width: 1440px
  unit: 8px
---

## Brand & Style

The design system is rooted in the philosophy of "confidence through restraint." It projects an image of technical maturity, architectural precision, and quiet luxury. The visual language is intentionally subtractive, removing unnecessary UI chrome to let content and high-end typography command the viewer's attention.

The chosen style is **Minimalism with a Cinematic influence**. It utilizes a "near-black" environment to create a sense of infinite depth, where elements don't just load but "arrive" through purposeful motion. The aesthetic is high-contrast, strictly monochromatic, and avoids decorative trends in favor of timeless, disciplined layouts. The target audience expects a professional, high-stakes environment where every pixel feels intentional.

## Colors

The palette is strictly monochromatic. Interaction and hierarchy are managed through luminosity and fill rather than hue.

- **Canvas (#040508):** The universal background. It is deep, near-black, and provides the foundation for the high-contrast environment.
- **Primary Text (#FFFFFF):** Reserved for headlines, statement lines, and active states. It should feel radiant against the dark canvas.
- **Secondary Text (#9CA3AF):** Used for body copy and general UI elements. This provides a soft legibility that reduces eye strain.
- **Tertiary Text (#6B7280):** Specifically for micro-labels and footnotes.
- **Interaction:** Focus and active states are achieved by inverting luminosity (e.g., a white fill with black text) or increasing opacity. No accent colors are permitted.

## Typography

Typography is the primary vehicle for brand expression. The system pairs a sophisticated serif with a modern, high-legibility Grotesk sans.

- **Headlines:** Use **EB Garamond** for a literary, authoritative feel. Hero text should be significantly larger than body text (6-10x) to create a dramatic "spectacle" effect.
- **Body & UI:** Use **Hanken Grotesk** for all functional copy. It provides a clean, technical counterpoint to the serif headlines.
- **The Micro-label Pattern:** All section headers must be preceded by a micro-label. This label is prefixed with the `✦` (U+2726) symbol, set in uppercase with wide tracking. This acts as the "rhythm device" across the design system.

## Layout & Spacing

The layout philosophy emphasizes generous vertical whitespace and a disciplined central column.

- **Grid:** A 12-column fluid grid is used for internal card systems, while the main content is restricted to a `max-width` container to ensure readability.
- **Vertical Rhythm:** Sections should be separated by large gaps (`160px` on desktop) to reinforce the unhurried, premium tone.
- **Spectacle Zones:** Full-bleed layouts are reserved exclusively for high-impact media, such as 3D WebGL components or hero video backgrounds.
- **Responsive Behavior:** On mobile, margins reduce to `20px` and section gaps compress to `80px`. Typography scales down to maintain the high-contrast ratio without overwhelming the viewport.

## Elevation & Depth

This design system rejects traditional drop shadows. Depth is instead achieved through **layering, motion, and transparency**.

- **Tonal Layers:** The background is the base layer. Higher-level containers (like cards or slide-out menus) use slightly lighter fills or subtle, low-opacity borders (`border-subtle`) to distinguish themselves.
- **Glassmorphism:** Reserved exclusively for navigation and interactive overlays. Use high-intensity backdrop blurs with a dark tint to maintain legibility while hinting at the content beneath.
- **Transparent Navigation:** The standard navbar remains transparent at all scroll depths, ensuring the canvas feels like a singular, uninterrupted object. 
- **Motion as Depth:** Use parallax effects and scroll-triggered reveals to create a sense of physical space and layers.

## Shapes

The shape language is a mix of architectural rigidity and organic interaction points. 

- **Containers & Cards:** Use a "Rounded" (0.5rem) setting to soften the high-contrast edges. This avoids the harshness of a purely brutalist approach while maintaining a professional structure.
- **Interactive Elements:** Buttons and certain tags utilize "Pill-shaped" geometry to clearly denote "clickable" areas in an otherwise minimal environment. 
- **Consistency:** If a container holds a media asset (image or video), its corners must match the container's roundedness exactly.

## Components

- **Buttons:** Primary CTAs are pill-shaped with a solid `primary-text` (#FFFFFF) fill and `canvas` (#040508) text. They should feature a "magnetic" hover effect where the button subtly follows the user's cursor.
- **Micro-labels:** Always styled with the `✦` prefix. They serve as eyebrows for every major heading or section.
- **Cards:** Low-density layouts. Favor fewer, larger cards (e.g., 2 or 3 per row) to reduce cognitive load. Borders should be visible but extremely subtle (`border-subtle`).
- **Inputs:** Minimalist bottom-border only, or a subtle outlined box. Focus states should be indicated by the border turning fully white (#FFFFFF).
- **Credibility Grids:** Used for partner logos or awards. These should be monochromatic (grayscale) and potentially set in an infinite horizontal marquee to suggest a vast network of trust.
- **Forms:** Multi-step forms are preferred for complex tasks, featuring a clear `01 / 0X` counter to maintain the premium, guided experience.
- **Motion Logic:** All components should fade and slide upward slightly when entering the viewport, creating a "functional reveal" that feels choreographed.