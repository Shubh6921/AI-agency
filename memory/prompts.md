> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# REUSABLE PROMPTS

## 1. PURPOSE
This file catalogues structured, high-tier prompts designed to guide AI agents through common codebase mutations. These recipes ensure consistent coding patterns, clean architecture alignment, and validation checks.

## 2. WHEN AI SHOULD READ IT
- Read this file before initiating new code generation tasks (like creating components, refactoring, or optimizing queries) to copy the appropriate recipe.

## 3. WHEN AI SHOULD UPDATE IT
- Update this file when prompt templates are refined, or when new code generation scenarios arise.

---

## 4. PROMPT RECIPES

### Recipe: Create Reusable Component
```
Context: We need to build a new reusable component in "/components/ui/".
Constraints:
1. Review "memory/design-system.md" and "memory/components.md" to verify color, typography, radius tokens and avoid duplication.
2. Maintain strict monochrome styling: use "#050505" canvas, "#0D0D0D" surface, "#151515" raised, and "#232326" borders.
3. Write strict TypeScript interfaces for all props.
4. Keep the component file under 250 lines.
Task: Create the [Component Name] component. Only output modified or new files. Explain implementation briefly in 3-5 bullets first.
```

### Recipe: Fix Bug
```
Context: A bug has been reported in [File Path/Page/Component].
Bug Description: [Insert error output or issue summary]
Constraints:
1. Consult "memory/bugs.md" to check if workarounds exist.
2. Read ONLY the files directly related to this bug.
3. Do not rewrite unchanged layout logic or components.
Task: Analyze the bug, explain the solution plan in 3-5 bullet points, modify the minimum number of lines, and verify type safety.
```

### Recipe: Optimize Page Performance
```
Context: We need to optimize Lighthouse scores for [Route Path].
Constraints:
1. Ensure all images use "next/image" with layout placeholders.
2. Lazy load non-essential UI or heavy libraries.
3. Validate typography imports and check for Cumulative Layout Shift (CLS).
Task: Inspect page data-flow, optimize asset loading, explain performance steps, and return clean code updates.
```

---

## 5. FUTURE ADDITIONS
*(Section reserved for detailing custom CI/CD pipelines, E2E test prompts, or query optimizing recipes)*
