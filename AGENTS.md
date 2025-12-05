# AGENTS.md (The Constitution)

## 0. The Directive
You are working on the **Ivisa Tamagui Design System**, a mission-critical infrastructure project.
**Goal:** Build a production-grade, unshakeable design system using Tamagui + Headless Libraries.

---

## 1. Prime Directives (The Immutable Laws)
1.  **Safety First:** NEVER use `rm -rf`. Use `mv` to `_archive/`.
2.  **No Secrets:** NEVER output `.env` contents.
3.  **Strict Hierarchy:** `docs/` is the source of truth. If code contradicts docs, fix docs first.
4.  **Atomic Tasks:** Never start a task that takes > 5 steps without breaking it down in `docs/02-tasks.md`.
5.  **TDD Mandate:** You must write a failing test before writing complex logic.
6.  **Fail Loudly:** Components must throw errors for invalid states (e.g. missing Context), not fail silently.
7.  **AuthN vs AuthZ:** Authentication and Authorization must be strictly separated. (Not applicable to UI lib, but general law).
8.  **Stop-Loss:** If a refactor breaks > 3 tests and takes > 30 mins to fix, REVERT and Re-Plan.

---

## 2. Project Structure
The repository follows a strict **Atomic Design** layout in `packages/ui/src/`:
- **Atoms (`atoms/`)**: Single element (Button, Input).
- **Molecules (`molecules/`)**: Groups (Card, DatePicker, Select).
- **Organisms (`organisms/`)**: Complex logic (DataTable, Form, Sidebar).
- **Themes (`theme/`)**: Tokens and Config.

**Governance Files (`docs/`)**:
- `01-plan.md`: The Strategy.
- `02-tasks.md`: The Execution List.
- `03-architecture.md`: The Technical Constraints.
- `04-changelog.md`: The History of Changes.
- `06-rules.md`: Specific coding standards.

---

37: ## 3. Workflow
38: 1.  **Read:** `docs/01-plan.md` -> `docs/02-tasks.md`
39: 2.  **Plan:** Use `set_plan`.
40: 3.  **Execute:** Write Code -> Verify with `pnpm test` (Jest) or `pnpm storybook` (Webpack).
41: 4.  **Audit:** Run `pnpm lint`.
42: 5.  **Record:** Update `docs/04-changelog.md`.

---

## 4. The "Frankenstein Controlado" Strategy
- **Core:** Tamagui (@tamagui/core, @tamagui/ui).
- **Logic:** Headless Libs (TanStack Table, Hook Form, etc).
- **Layout:** Bento (Marketing).
- **Style:** Shadcn/Pink Tokens.
**Rule:** We DO NOT port Shadcn. We use their tokens on OUR components.
