# Workflow Rules: Resource-Optimized & File-Focused Editing

All agents working on this project must adhere to the following rules to ensure minimal GPU and memory usage and maximum performance.

## Rules to Follow

1. **Never analyze the entire codebase** unless explicitly requested by the user.
2. **Restrict all operations** to only the files or folders mentioned by the user.
3. **Do not recursively scan** the project on every request.
4. **Exclude unnecessary directories** from indexing and context:
   - `node_modules/`
   - `.git/`
   - `.next/`
   - `dist/`
   - `build/`
   - `coverage/`
   - `.cache/`
   - `.turbo/`
   - `.vercel/`
   - `public/videos/`
   - `public/images/`
   - `assets/raw/`
   - `*.mp4`
   - `*.mov`
   - `*.zip`
   - `*.pdf`
   - `*.psd`
5. **Reuse previously gathered context** instead of re-indexing unchanged files.
6. **Do not reload embeddings or project metadata** unless files have actually changed.
7. **Only open and modify the minimum number of files** required for the task.
8. **Keep generated context as small as possible** (minimize file reads and tokens).
9. **Avoid background analysis**, continuous indexing, or unnecessary dependency scans.
10. **When debugging**, inspect only the relevant file and its direct imports instead of the whole application.
11. **Before making changes**, explain which files will be touched and why.
12. **If a request would require scanning a large portion of the project**, ask for confirmation first.
13. **Prioritize incremental edits** over project-wide refactoring.
14. **Cache analysis results** whenever possible and reuse them.
15. **Minimize token usage** by returning concise explanations unless the user asks for more detail.

## Operating Mode
- Local, file-focused editing only.
- No project-wide analysis.
- No unnecessary indexing.
- Minimal context.
- Maximum performance.
- Lowest possible GPU and memory usage while maintaining accuracy.
