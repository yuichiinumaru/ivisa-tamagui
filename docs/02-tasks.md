# 02 – Tasks for the Ivisa Tamagui Design System

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Tags: `TDD`, `FDD`, `SDD`, `DDD`, `DOC`, `UX`

---

## 🚨 Critical Remediation & Pending Features

### Q_bug: Critical Bug Fixes (From Audit)
- [ ] **Fix the Entire Unit Test Suite (P0)**
  - All 28 test files in `packages/ui/tests/migrated` are failing due to incorrect relative import paths.
- [x] **Implement Security Scanning (P1)**
  - Integrate a security scanner (e.g., `snyk`, `npm audit`) into the CI/CD pipeline.
- [ ] **Resolve All Linting Errors (P1)**
  - Fix 74 ESLint errors (unused variables, `any` types).
- [x] **Restore Visual Testing Capabilities (P2)**
  - Re-create `scripts/visual-check.js` (uses Storybook + Playwright) which is currently missing.

### Missing / Incomplete Components (Frankenstein Strategy)
32 - [ ] **Component Acceleration Phase (Harvest & Headless)**
  - [ ] 32a – **Harvest `pogiii/sushi`**: Clone `pogiii/sushi` into `referencias/` and harvest the `Input` (Composed) and `OTPInput` patterns.
  - [x] 32b – **Harvest `tamagui-kitchen-sink`**: Run `scripts/convert_component.py` to auto-convert `LmStarRating` as `StarRating`.
    - Also implemented `AlertDialog`, `MonthsPicker`, `Autocomplete`, `Video`, `RichText`.

33 - [ ] **ShadCN Gap Fill - High Priority**
  - [ ] 33a – **Command Palette**: Implement `Command` using `cmdk` + `Dialog` wrapper.
  - [ ] 33b – **Date Picker**: Implement `Calendar` using `@rehookify/datepicker` + `Sheet`/`Popover`.
  - [ ] 33c – **DropdownMenu**: Implement `DropdownMenu` using Radix (Web) and `Sheet` (Native).

34 - [ ] **ShadCN Gap Fill - Medium/Low Priority**
  - [x] 34a – **AspectRatio**: Implement `AspectRatio` (Atom) using Tamagui Stack.
  - [x] 34b – **Collapsible**: Implement `Collapsible` (Molecule) using `AnimateHeight`.
  - [ ] 34c – **HoverCard**: Implement `HoverCard` using `Popover` with hover trigger.
  - [ ] 34d – **Carousel**: Implement `Carousel` using `embla-carousel`.
  - [x] 34e – **Spinner**: Implement `Spinner` (Atom) ensuring consistent theming.

### Phase 4: Web-Specific UX & Full Documentation (Remaining)
25 - [ ] Populate Storybook with full documentation (DOC)
  - [ ] 25a – Create stories for all primitives and composites, covering variants and states.
  - [ ] 25b – Write usage notes and document props for each component within Storybook.
  - [ ] 25c – Document Storybook usage in `docs/03-architecture.md`.

26 - [ ] Documentation passes (DOC)
  - [ ] 26a – Ensure `docs/01-plan.md`, `docs/02-tasks.md`, and `docs/03-architecture.md` are in sync with current implementation.
  - [ ] 26b – Record major milestones and decisions in `docs/04-changelog.md`.
  - [ ] 26c – **Document Multi-Root Workspace**: Add instructions for setting up VSCode Multi-Root Workspace for referencing `sushi` and `tamagui-kitchen-sink`.

### Phase 5: Integration & Handoff
27 - [ ] Integrate design system into flows (FDD, UX)
  - [ ] 27a – Replace ad-hoc UI in chat, settings, and key dashboards with `packages/ui` components.
  - [ ] 27b – Add end-to-end tests for at least one representative flow per area.

28 - [ ] Finalize accessibility and cross-platform checks (TDD, UX)
  - [ ] 28a – Run accessibility inspections on web.
  - [ ] 28b – Validate main components on iOS/Android using Expo.

29 - [ ] Handoff package and docs (DOC)
  - [ ] 29a – Write "How to add a new component" guide for `packages/ui`.
  - [ ] 29b – Summarize headless integrations and upgrade strategy.
  - [ ] 29c – Capture future ideas in `docs/05-ideas.md` if needed.

---

## ✅ Completed Tasks

### Phase 0 – Research & Scoping
1 - [x] Capture ecosystem research and constraints (DOC, DDD)
2 - [x] Decide direction for design system (DOC)
3 - [x] Identify component gaps and candidate libraries (SDD)

### Phase 1 – Foundation: Theme, Config, Forms & Tooling
4 - [x] Implement Tamagui theme and config (SDD, DOC)
5 - [x] Wire providers in host apps (FDD, TDD)
6 - [x] Establish forms stack (TDD, DOC)
7 - [x] Initialize design system package (DDD, DOC)
8 - [x] Set up testing framework (TDD)
9 - [x] Perform minimal Storybook setup (DOC, UX)

### Phase 2 – High-Impact Gaps (Completed)
10 - [x] `DataTable` composite (TDD, FDD)
11 - [x] `Calendar` / `DatePicker` composite (TDD, FDD) - *Initial version done, needs refinement per Task 33b*
12 - [x] `CommandPalette` (Cmd+K) composite (TDD, UX) - *Initial version done, needs refinement per Task 33a*

### Phase 3 – Medium / Low-Effort Components (Completed)
13 - [x] `Carousel` composite (TDD, UX) - *Initial version done, needs embla-carousel integration per Task 34d*
14 - [x] Shared Tamagui config adoption (SDD, DOC)
15 - [x] `OTPInput` composite (TDD, UX) - *Implemented, to be refined with Sushi patterns*
16 - [x] `Pagination` & `Breadcrumb` (TDD, UX)
17 - [x] `Sidebar` (Organism) (Composition, UX)
18 - [x] `Charts` (Organism) (TDD, UX)

### Phase 4 – Web-Specific UX (Completed Parts)
20 - [x] `NavigationMenu` (TDD, UX)
  - [x] Implemented using Radix Primitives and Tamagui styling.
21 - [x] `ToggleGroup` (TDD, UX)
  - [x] Implemented wrapper for Tamagui ToggleGroup.
22 - [x] Core Primitives Sprint (P1) (TDD, UX)
  - [x] 22a – Implement `Alert` (Atom).
  - [x] 22b – Implement `Badge` (Atom).
  - [x] 22c – Implement `Switch` (Atom).
  - [x] 22d – Implement `Sheet` (Molecule).
  - [x] 22e – Implement `Toast` (Molecule).
  - [x] 22f – Implement `Avatar` (Atom).

23 - [x] Secondary Components Sprint (P2) (TDD, UX)
  - [x] 23a – Implement `Tabs` (Molecule).
  - [x] 23b – Implement `Accordion` (Molecule).
  - [x] 23c – Implement `Slider` (Atom).
  - [x] 23d – Implement `RadioGroup` (Molecule).

24 - [x] Polish Sprint (P3) (TDD, UX)
  - [x] 24a – Implement `Skeleton` (Atom).
  - [x] 24b – Implement `Progress` (Atom).
  - [x] 24c – Implement `Separator` (Atom).
  - [x] 24d – Implement `Toggle` (Atom).
  - [x] 24e – Implement `ScrollArea` (Atom).
  - [x] 24f – Implement `Resizable` (Molecule).
  - [x] 24g – Implement `Drawer` (Molecule).
  - [x] 24h - Implement `Tooltip` (Molecule).
  - [x] 21 (Revisited) - `ContextMenu` and `Menubar` (Implemented).

### Additional Completions
30 - [x] IVISA Brand Integration (Design System)
31 - [x] Submodule Strategy & Documentation
