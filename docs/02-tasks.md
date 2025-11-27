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

10 - [x] `DataTable` composite (TDD, FDD)
  - [x] 10a – Design `DataTable` API (props for columns, data, sorting, pagination).
  - [x] 10b – Integrate `@tanstack/react-table` logic with Tamagui primitives (Implemented in `src/organisms/DataTable.tsx`).
  - [x] 10c – Add tests for sorting, pagination, and empty state (Covered by visual tests and stories).

11 - [x] `Calendar` / `DatePicker` composite (TDD, FDD)
  - [x] 11a – Design `Calendar` / `DatePicker` component API.
  - [x] 11b – Integrate `@rehookify/datepicker` hooks with Tamagui (Implemented in `src/molecules/Calendar.tsx` and `DatePicker.tsx`).
  - [x] 11c – Add tests for selecting single date and ranges (Covered by visual tests).

12 - [x] `CommandPalette` (Cmd+K) composite (TDD, UX)
  - [x] 12a – Define `CommandPalette` API and keyboard shortcuts.
  - [x] 12b – Integrate `cmdk` logic with Tamagui Dialog/Sheet UI (Implemented in `src/organisms/Command.tsx`).
  - [x] 12c – Add tests for filtering, keyboard navigation, and closing/opening flows (Covered by visual tests).

---

## Phase 3 – Medium / Low-Effort Components

13 - [x] `Carousel` composite (TDD, UX)
  - [x] 13a – Build `Carousel` with `embla-carousel` and Tamagui layout primitives (Implemented in `src/organisms/Carousel.tsx`).
  - [x] 13b – Add tests for basic navigation (next/prev) and loop behavior (Covered by visual tests).

14 - [x] Shared Tamagui config adoption (SDD, DOC)
  - [x] 14a – Merge the design team’s palette/themes (`docs/tamaguiconfig.txt`) into `packages/ui/src/tamagui.config.ts` using `@tamagui/theme-builder`.
  - [x] 14b – Keep local `tokens.ts` spacing/sizing/radius scales and semantic color keys to avoid breaking existing components.
  - [x] 14c – Run Storybook + `scripts/visual-check.js`, then document the change in `docs/04-changelog.md`.

15 - [x] `OTPInput` composite (TDD, UX)
  - [x] 15a – Implemented `OTPInput` based on `input-otp` patterns with Tamagui styling (see `packages/ui/src/molecules/OTPInput.tsx`).
  - [x] 15b – Added focus traversal + paste handling coverage via Storybook demos/tests.

16 - [x] `Pagination` & `Breadcrumb` (TDD, UX)
  - [x] 16a – Implement `Pagination` purely with Tamagui primitives.
  - [x] 16b – Implement `Breadcrumb` for web navigation.
  - [x] 16c – Add snapshot/interaction tests for both components.

16 - [x] `Pagination` & `Breadcrumb` (TDD, UX)
  - [x] 16a – Implement `Pagination` purely with Tamagui primitives.
  - [x] 16b – Implement `Breadcrumb` for web navigation.
  - [x] 16c – Add snapshot/interaction tests for both components.

17 - [ ] `Sidebar` (Organism) (Composition, UX)
  - [ ] 17a – Implement `Sidebar` as a **Composition** (not a wrapper). Use `Sheet` for mobile and `YStack` + `AnimatePresence` for desktop.
  - [ ] 17b – Implement "App Sidebar" pattern (Collapsible, Fixed, Floating variants).

18 - [ ] `Charts` (Organism) (TDD, UX)
    - [ ] 18a – Research and decide on a cross-platform charting library (e.g., Victory Native).
    - [ ] 18b – Implement a wrapper for the chosen library.



---

## Phase 4 – Web-Specific UX & Full Documentation

20 - [x] Navigation Menu / Menubar (TDD, UX)
  - [x] 17a – Prototype Navigation Menu and Menubar using Radix Primitives and Tamagui styling.
  - [x] 17b – Validate keyboard and screen reader behavior on desktop web.
  - [x] 17c – Exported in `index.ts`.

21 - [x] Context Menu (TDD, UX)
  - [x] 18a – Implement `IvisaContextMenu` using `react-right-click-context-menu` or Radix Dropdown.
  - [x] 18b – Add tests for right-click behavior on web.
  - [x] 18c – Exported in `index.ts`.

22 - [x] Core Primitives Sprint (P1) (TDD, UX)
  - [x] 19a – Implement `Alert` (Atom).
  - [x] 19b – Implement `Badge` (Atom).
  - [x] 19c – Implement `Switch` (Atom).
  - [x] 19d – Implement `Sheet` (Molecule).
  - [x] 19e – Implement `Toast` (Molecule). **Note:** Decision needed: use Tamagui's native Toast or implement a wrapper for `Sonner` to align with shadcn's latest implementation.
  - [x] 19f – Implement `Avatar` (Atom).

23 - [x] Secondary Components Sprint (P2) (TDD, UX)
  - [x] 20a – Implement `Tabs` (Molecule).
  - [x] 20b – Implement `Accordion` (Molecule).
  - [x] 20c – Implement `Slider` (Atom).
  - [x] 20d – Implement `RadioGroup` (Molecule).

24 - [x] Polish Sprint (P3) (TDD, UX)
  - [x] 21a – Implement `Skeleton` (Atom).
  - [x] 21b – Implement `Progress` (Atom).
  - [x] 21c – Implement `Separator` (Atom).
  - [x] 21d – Implement `Toggle` & `ToggleGroup` (Atom).
  - [x] 21e – Implement `ScrollArea` (Atom).
  - [x] 21f – Implement `Resizable` (Molecule).
  - [x] 21g – Implement `Drawer` (Molecule).

25 - [ ] Populate Storybook with full documentation (DOC)
  - [ ] 22a – Create stories for all primitives and composites, covering variants and states.
  - [ ] 22b – Write usage notes and document props for each component within Storybook.
  - [ ] 22c – Document Storybook usage in `docs/03-architecture.md`.

26 - [ ] Documentation passes (DOC)
  - [ ] 23a – Ensure `docs/01-plan.md`, `docs/02-tasks.md`, and `docs/03-architecture.md` are in sync with current implementation.
  - [ ] 23b – Record major milestones and decisions in `docs/04-changelog.md`.

---

## Phase 5 – Integration & Handoff

27 - [ ] Integrate design system into flows (FDD, UX)
  - [ ] 24a – Replace ad-hoc UI in chat, settings, and key dashboards with `packages/ui` components.
  - [ ] 24b – Add end-to-end tests for at least one representative flow per area.

28 - [ ] Finalize accessibility and cross-platform checks (TDD, UX)
  - [ ] 25a – Run accessibility inspections on web.
  - [ ] 25b – Validate main components on iOS/Android using Expo.

29 - [ ] Handoff package and docs (DOC)
  - [ ] 26a – Write "How to add a new component" guide for `packages/ui`.
  - [ ] 26b – Summarize headless integrations and upgrade strategy.
  - [ ] 26c – Capture future ideas in `docs/05-ideas.md` if needed.

30 - [x] IVISA Brand Integration (Design System)
  - [x] 30a – Add IVISA color palette to `tokens.ts`.
  - [x] 30b – Configure Cera Pro font in `tamagui.config.ts`.
  - [x] 30c – Create `ivisa_light` and `ivisa_dark` themes in `themes.ts`.

31 - [x] Submodule Strategy & Documentation
  - [x] 31a – Document Git Submodule strategy in `docs/08-submodule-strategy.md`.
  - [x] 31b – Update Architecture and README to reflect "No Framework" rule.
