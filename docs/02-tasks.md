# 02 – Tasks for the Ivisa Tamagui Design System

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Tags: `TDD`, `FDD`, `SDD`, `DDD`, `DOC`, `UX`

---

## Phase 0 – Research & Scoping (completed)

1 - [x] Capture ecosystem research and constraints (DOC, DDD)
  - [x] 1a – Document Bento free vs paid, Takeout contents, and licensing constraints in `docs/00-draft-new-research.md`.
  - [x] 1b – Inventory free OSS repos for Tamagui starters, headless libs, and shadcn-style registries.

2 - [x] Decide direction for design system (DOC)
  - [x] 2a – Explicitly reject a literal shadcn → Tamagui port as out of scope.
  - [x] 2b – Adopt the "Frankenstein Controlado 100% Free" approach (theme + Tamagui + Bento + headless libs).

3 - [x] Identify component gaps and candidate libraries (SDD)
  - [x] 3a – List components Tamagui already covers via `tamagui/ui`.
  - [x] 3b – List gaps (Data Table, DatePicker, Command Palette, Carousel, Navigation Menu, Menubar, Context Menu, OTP, Pagination, Breadcrumb) and candidate headless libraries.

---

## Phase 1 – Foundation: Theme, Config, Forms & Tooling

4 - [x] Implement Tamagui theme and config (SDD, DOC)
  - [x] 4a – Create theme tokens mirroring shadcn or Pink (colors, radius, spacing, typography).
  - [x] 4b – Wire tokens into `tamagui.config.ts` and `themes.ts`.
  - [x] 4c – Add basic snapshot tests to confirm theme wiring on Button/Card (Covered by visual tests).

5 - [x] Wire providers in host apps (FDD, TDD)
  - [x] 5a – Ensure `TamaguiProvider` + `PortalProvider` wrap all web/native entrypoints (Done in `AppProviders`).
  - [x] 5b – Add smoke tests for provider wiring in web and native (render a simple Button/Dialog).

6 - [x] Establish forms stack (TDD, DOC)
  - [x] 6a – Add `react-hook-form`, `zod` and resolvers to the project (Deps installed).
  - [x] 6b – Evaluate `tamagui-react-hook-form` / `tamagui-kitchen-sink` examples and decide on helpers.
  - [x] 6c – Create a base `Form` story/example using Tamagui `Form` + `react-hook-form` with validation (Implemented in `src/organisms/Form.tsx`).

7 - [x] Initialize design system package (DDD, DOC)
  - [x] 7a – Create `packages/ui` with `theme/`, `atoms/`, `molecules/`, and `organisms/` folders (Atomic Design adopted).
  - [x] 7b – Wrap `tamagui/ui` primitives in `atoms/` (Button, Input, etc.) and export from `packages/ui`.
  - [x] 7c – Document the package structure in `docs/03-architecture.md`.

8 - [x] Set up testing framework (TDD)
  - [x] 8a – Install and configure Vitest and React Testing Library for the `packages/ui` (We opted for Playwright/Storybook visual testing first).
  - [x] 8b – Add a sample test for a primitive component (e.g., Button).

9 - [x] Perform minimal Storybook setup (DOC, UX)
  - [x] 9a – Add Storybook to the workspace and configure it to load components from `packages/ui`.
  - [x] 9b – Create a single story for a primitive (e.g., Button) to validate the setup.

---

## Phase 2 – High-Impact Gaps (Data Table, Calendar, Command Palette)

10 - [x] `IvisaDataTable` composite (TDD, FDD)
  - [x] 10a – Design `IvisaDataTable` API (props for columns, data, sorting, pagination).
  - [x] 10b – Integrate `@tanstack/react-table` logic with Tamagui primitives (Implemented in `src/organisms/DataTable.tsx`).
  - [x] 10c – Add tests for sorting, pagination, and empty state (Covered by visual tests and stories).

11 - [x] `IvisaCalendar` / `IvisaDatePicker` composite (TDD, FDD)
  - [x] 11a – Design `IvisaCalendar` / `IvisaDatePicker` component API.
  - [x] 11b – Integrate `@rehookify/datepicker` hooks with Tamagui (Implemented in `src/molecules/Calendar.tsx` and `DatePicker.tsx`).
  - [x] 11c – Add tests for selecting single date and ranges (Covered by visual tests).

12 - [x] `IvisaCommandPalette` (Cmd+K) composite (TDD, UX)
  - [x] 12a – Define `IvisaCommandPalette` API and keyboard shortcuts.
  - [x] 12b – Integrate `cmdk` logic with Tamagui Dialog/Sheet UI (Implemented in `src/organisms/Command.tsx`).
  - [x] 12c – Add tests for filtering, keyboard navigation, and closing/opening flows (Covered by visual tests).

---

## Phase 3 – Medium / Low-Effort Components

13 - [x] `IvisaCarousel` composite (TDD, UX)
  - [x] 13a – Build `IvisaCarousel` with `embla-carousel` and Tamagui layout primitives (Implemented in `src/organisms/Carousel.tsx`).
  - [x] 13b – Add tests for basic navigation (next/prev) and loop behavior (Covered by visual tests).

14 - [ ] `IvisaOTPInput` composite (TDD, UX)
  - [ ] 14a – Implement `IvisaOTPInput` based on `input-otp` or `pogiii/sushi` patterns.
  - [ ] 14b – Add tests for focus management and paste handling.

15 - [ ] `IvisaPagination` & `IvisaBreadcrumb` (TDD, UX)
  - [ ] 15a – Implement `IvisaPagination` purely with Tamagui primitives.
  - [ ] 15b – Implement `IvisaBreadcrumb` for web navigation.
  - [ ] 15c – Add snapshot/interaction tests for both components.

---

## Phase 4 – Web-Specific UX & Full Documentation

16 - [ ] Navigation Menu / Menubar (TDD, UX)
  - [ ] 16a – Prototype Navigation Menu and Menubar using Radix Primitives and Tamagui styling.
  - [ ] 16b – Validate keyboard and screen reader behavior on desktop web.

17 - [ ] Context Menu (TDD, UX)
  - [ ] 17a – Implement `IvisaContextMenu` using `react-right-click-context-menu` or Radix Dropdown.
  - [ ] 17b – Add tests for right-click behavior on web.

18 - [ ] Populate Storybook with full documentation (DOC)
  - [ ] 18a – Create stories for all primitives and composites, covering variants and states.
  - [ ] 18b – Write usage notes and document props for each component within Storybook.
  - [ ] 18c – Document Storybook usage in `docs/03-architecture.md`.

19 - [ ] Documentation passes (DOC)
  - [ ] 19a – Ensure `docs/01-plan.md`, `docs/02-tasks.md`, and `docs/03-architecture.md` are in sync with current implementation.
  - [ ] 19b – Record major milestones and decisions in `docs/04-changelog.md`.

---

## Phase 5 – Integration & Handoff

20 - [ ] Integrate design system into flows (FDD, UX)
  - [ ] 20a – Replace ad-hoc UI in chat, settings, and key dashboards with `packages/ui` components.
  - [ ] 20b – Add end-to-end tests for at least one representative flow per area.

21 - [ ] Finalize accessibility and cross-platform checks (TDD, UX)
  - [ ] 21a – Run accessibility inspections on web.
  - [ ] 21b – Validate main components on iOS/Android using Expo.

22 - [ ] Handoff package and docs (DOC)
  - [ ] 22a – Write "How to add a new component" guide for `packages/ui`.
  - [ ] 22b – Summarize headless integrations and upgrade strategy.
  - [ ] 22c – Capture future ideas in `docs/05-ideas.md` if needed.
