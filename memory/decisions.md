> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# ARCHITECTURE DECISION RECORDS (ADR)

## 1. PURPOSE
This file registers key engineering and architectural decisions made throughout the lifecycle of the AXEN codebase. It records why options were chosen and details constraints.

## 2. WHEN AI SHOULD READ IT
- Read this file when researching why specific libraries, data models, or layouts were configured.

## 3. WHEN AI SHOULD UPDATE IT
- Update this file whenever a consequential technical decision is made (e.g. state management model shifts).

---

## 4. ARCHITECTURE DECISIONS LOG

### ADR-001: Selection of Core Animation Layer
- **Date:** 2026-07-07
- **Problem:** The website requires awwwards-tier scroll choreography, section reveals, and custom micro-interactions that remain performance-optimized and layout-stable.
- **Decision:** Standardize on **GSAP + ScrollTrigger** for layout triggers, paired with **Framer Motion** for isolated component animations (drawers, buttons, steps).
- **Reason:** GSAP delivers unmatched control over scroll scrubs and element pins. Framer Motion integrates seamlessly with React layouts for quick transitions, ensuring high performance.

---

## 5. FUTURE ADDITIONS
*(Placeholder for recording decisions regarding Supabase triggers, n8n integrations, or database models)*
