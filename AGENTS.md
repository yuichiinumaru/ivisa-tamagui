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
9.  **Package Manager Mandate:** You MUST use **Yarn** (`yarn`). Use of `npm` or `pnpm` is STRICTLY FORBIDDEN.
10. **Testing Framework Mandate:** You MUST use **Jest** (`jest`). Use of `vitest` is STRICTLY FORBIDDEN.
11. **Build Integrity Mandate:** You MUST run `yarn install && yarn build:ci && yarn storybook` to fully verify the environment, dependencies, and UI. This mirrors the complete verification pipeline. If this sequence fails, the task is incomplete.

---

## 3. Jules Optimization Strategy
To maximize the efficiency of the Jules Swarm:
1.  **Local vs. Jules:**
    *   **Quick Fixes (< 15 mins):** Execute LOCALLY. Do not dispatch a swarm for simple typos or missing exports.
    *   **Heavy Work:** Dispatch Jules for complex refactors, test coverage expansion, and "Wave" implementations.
2.  **Sync First:** ALWAYS `git push` before dispatching a swarm. Jules cannot see local changes.
3.  **Parallelization:** When refactoring multiple components (e.g., Molecules), dispatch separate sessions for each to merge them in parallel.

## 4. Visual Integrity Mandate
1.  **Typography:** All text-bearing components (Buttons, Inputs, Cards) must explicitly resolve to the **Cera Pro** font family via Tamagui tokens (`$body` / `$heading`). Do not rely on valid system fallbacks.
2.  **Mock Data:** Use valid, localized mock data (e.g. `faker.js` pt-BR) for Stories. Never use `null` or "test test test".
3.  **Assets:** Ensure `packages/ui/src/assets` is correctly mapped in Storybook.


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

## 3. Workflow
1.  **Read:** `docs/01-plan.md` -> `docs/02-tasks.md`
2.  **Plan:** Use `set_plan`.
3.  **Execute:** Write Code -> Verify with `yarn test` (Jest) or `yarn storybook` (Webpack).
4.  **Audit:** Run `yarn lint`.
5.  **Record:** Update `docs/04-changelog.md`.

---

## 4. The "Frankenstein Controlado" Strategy
- **Core:** Tamagui (@tamagui/core, @tamagui/ui).
- **Logic:** Headless Libs (TanStack Table, Hook Form, etc).
- **Layout:** Bento (Marketing).
- **Style:** Shadcn/Pink Tokens.
**Rule:** We DO NOT port Shadcn. We use their tokens on OUR components.

---

## 5. 📋 Organisms Catalog (Roadmap)

| Organism | Phase | Status | Libs | Atoms/Molecules | Effort |
|----------|-------|--------|------|-----------------|--------|
| **DataTable** | 2 | 🚧 | @tanstack/react-table | Button, Input, Dialog | 4-5d |
| **Form** | 2 | 🚧 | react-hook-form + zod | Input, Select, Checkbox | 2-3d |
| **CommandPalette** | 2 | 🚧 | cmdk | Dialog, Input, List | 2-3d |
| **Carousel** | 2 | 🚧 | embla-carousel | Stack, Button, Image | 2-3d |
| **Sidebar** | 3 | ⏳ | — | Stack, Button, Sheet | 3-4d |
| **Pagination** | 3 | ⏳ | — | Button, Stack, Text | 1-2d |
| **Breadcrumb** | 3 | ⏳ | — | Button, Stack, Text | 1d |
| **InputOTP** | 3 | ⏳ | input-otp | Input, Stack | 1-2d |
| **AvatarGroup** | 3 | ⏳ | — | Avatar, Stack | 1d |
| **Stepper** | 3 | ⏳ | — | Button, Card, Form | 3-4d |

> **Note:** See `ORGANISMS-catalog.md` for detailed specifications, dependencies, and implementation patterns for all 30 organisms.

## 6. Large-Scale Analysis (The "Python First" Rule)
**Context:** When dealing with massive log files (e.g., >10k lines) or widespread codebase patterns, do not attempt to read everything into the LLM context.
*   **Strategy:** Write and execute **strategic Python scripts** to parse, filter, and summarize the data.
*   **Action:** Use `start_process` to run these scripts and read their output.
*   **Benefit:** Avoids context blowup and provides structured, quantitative data (counts, categories, top offenders).

## 7. Debugging Insights & Preventative Measures
1.  **"Element type is invalid" Error:**
    *   **Cause:** Almost always an undefined Import/Export. Check for:
        *   Named vs Default export mismatches.
        *   Circular dependencies causing one module to be empty during load.
        *   Missing static properties on Composite Components (e.g., `Select.Viewport` missing in `Select.tsx`).
    *   **Action:** Verify the exact export in the source file and the import statement. Use `console.log` to print the imported module if unsure.

2.  **"validateDOMNesting" Warning:**
    *   **Cause:** Invalid HTML structure generated by Tamagui stacks. Common in Tables (`div` inside `table`, `thead` inside `div`).
    *   **Action:** Use the `tag` prop on `YStack`/`XStack` (e.g., `tag="table"`, `tag="thead"`) and ensure strict HTML hierarchy (Table > Thead > Tr > Th). Avoid wrapping `thead`/`tbody` in `ScrollView` (divs) unless the `ScrollView` *is* the table container.

3.  **Missing Tokens:**
    *   **Cause:** Usage of tokens (`$color12`, `$md`) that exist in generic tokens but are missing from specific Theme or Font configurations.
    *   **Action:** Add aliases in `tamagui.config.ts` (e.g., `default: 16` for fonts) or map missing colors in `tokens.ts`.

4.  **Architecture Violations:**
    *   **Context:** Importing Atoms/Molecules (e.g., `Button`) directly from `tamagui` or `@tamagui/ui` instead of the local package (`../../atoms/Button`) causes styling inconsistencies and breaks the Design System contract.
    *   **Action:** Run `yarn lint:arch` to detect these violations.
    *   **Fix:** Replace `import { Button } from 'tamagui'` with `import { Button } from '../../atoms/Button'`.
