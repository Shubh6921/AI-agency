> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# DEVELOPMENT CONVENTIONS

## 1. PURPOSE
This file standardizes coding style, naming rules, folder architecture, imports order, commenting guidelines, testing protocols, git commits, and branch structures across the AXEN repository.

## 2. WHEN AI SHOULD READ IT
- Read this file before creating new directories, committing code, naming components, or writing comments.

## 3. WHEN AI SHOULD UPDATE IT
- Update this file if lint rules are altered, import hierarchies are updated, or committing styles are adjusted.

---

## 4. CONVENTIONS SPECIFICATION

### Naming Conventions
- **React Components:** PascalCase (e.g. `Button.tsx`, `MultiStepForm.tsx`).
- **Utility Files & Folders:** kebab-case (e.g. `use-scroll-animation.ts`, `api/submit-enquiry/`).
- **TypeScript Interfaces/Types:** PascalCase, prefixed with `I` for interfaces if preferred, or plain descriptors (e.g. `EnquiryPayload`).

### Folder Structures
- Reusable UI elements go to `/components/ui/`.
- Major section-level blocks (e.g. `Hero.tsx`) go to `/components/sections/`.
- Styling values must rely on Tailwind utility definitions without inline CSS styles.

### Import Order
1. React & Next.js library primitives.
2. Animation utilities (GSAP, Framer Motion, Lenis).
3. Shared UI primitives (`@/components/ui/...`).
4. Custom hooks and utilities.
5. Typings and Interfaces.

### Comment Rules
- Keep comments minimal. Write self-documenting code.
- Write docstrings only for complex utilities or hook parameters.
- Do not commit block comments or debug logs (`console.log`) in production code.

### Git Commits & Branching
- **Commit Messages:** Follow Conventional Commits:
  - `feat: [description]` for new features.
  - `fix: [description]` for bug fixes.
  - `docs: [description]` for documentation changes.
  - `chore: [description]` for setup tasks.
- **Branch Naming:**
  - `feature/[name]` for new pages/components.
  - `bugfix/[name]` for troubleshooting edits.

---

## 5. FUTURE ADDITIONS
*(Section reserved for detailing automated ESLint configurations, Husky pre-commit hooks, and Vitest configurations)*
