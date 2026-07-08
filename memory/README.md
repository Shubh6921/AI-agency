> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# MEMORY DIRECTORY README

## 1. PURPOSE
This directory acts as the externalized context and long-term memory system of the AXEN project. It is structured to allow future AI developers to quickly grasp project specs, architecture, database schemas, styling conventions, and current roadmap status without executing wasteful full-codebase scans.

## 2. WHEN AI SHOULD READ IT
- Read this `README.md` at the start of any new coding session to understand where specific information is located.

## 3. WHEN AI SHOULD UPDATE IT
- Update this `README.md` if the layout of the memory system changes, or if new memory logs are introduced.

---

## 4. QUICK REFERENCE TABLE

| File Name | Primary Topic | Update Trigger |
|---|---|---|
| [brain.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/brain.md) | Project Summary & Master Config | Change in tech stack, project status, core business rules. |
| [architecture.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/architecture.md) | Folder map, rendering, auth, data flows | Introducing new integration patterns or macro architectures. |
| [design-system.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/design-system.md) | Colors, spacing scale, animation rules | Tweaking brand styles, tailwind configs, typography scale. |
| [components.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/components.md) | Shared UI components inventory | Creating or modifying a reusable component in `/components/ui`. |
| [pages.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/pages.md) | App router folders and page specs | Adding or modifying routes, page layouts, page metadata. |
| [database.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/database.md) | Tables, schemas, RLS policy descriptors | Changing Supabase tables, permissions, index configs. |
| [api.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/api.md) | REST endpoints and server actions specs | Modifying request/response objects, inputs, query filters. |
| [progress.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/progress.md) | Completed, In Progress, Blocked status | Resolving features, beginning a new page build, tracking blockages. |
| [roadmap.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/roadmap.md) | Long-term roadmap phases | Changing product priorities, introducing post-v1 suggestions. |
| [decisions.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/decisions.md) | Architecture Decision Records (ADRs) | Making a pivotal coding choice (e.g. state framework choice). |
| [bugs.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/bugs.md) | Active bugs, priority level, patches | Discovering console errors, browser mismatch, layout failures. |
| [changelog.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/changelog.md) | Chronological development records | Completing any PR, task ticket, component, or code edit. |
| [prompts.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/prompts.md) | Structured developer prompt recipes | Refining prompts for component generation or test coverage. |
| [conventions.md](file:///c:/Users/shubh/OneDrive/Desktop/Ai%20agency/memory/conventions.md) | Naming rules, import order, testing | Adding code styles, lint rules, or git committing patterns. |

---

## 5. GLOBAL AI OPERATING RULES
- **Read only relevant memory files:** Never open multiple files if the context is localized (e.g. only read `database.md` for schema changes).
- **Never scan the whole repository:** Restrict file reading to targeted folders and components named in the memory inventory.
- **Update documentation after work:** Keep memory files accurate by logging additions, updates, and bug fixes as soon as they are resolved.
- **Never rewrite entire documentation files:** Append updates to logs (like `changelog.md`, `decisions.md`, `progress.md`) or update specific tables inline instead of regenerating the entire file.
- **Preserve formatting:** Keep tables structured, and follow standard markdown conventions.

---

## 6. FUTURE ADDITIONS
*(Section reserved for future logs or memory indexing configurations)*
