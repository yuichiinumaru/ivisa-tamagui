# 02 – Tasks for the Ivisa Tamagui Design System

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Tags: `TDD`, `FDD`, `SDD`, `DDD`, `DOC`, `UX`

---

## 🚀 Current Focus: Phase 4 – Web-Specific UX & Full Documentation

25 - [~] **Populate Storybook as Source of Truth** (DOC)
  - [~] 25a – **Primary Docs**: Ensure every component has a Storybook entry with full description and props documentation.
  - [~] 25b – **Visual States**: Create stories for all variants and states (hover, press, error).
  - [~] 25c – **Usage Notes**: Add usage guidelines directly in Storybook MDX or description fields.

26 - [x] **Documentation Passes** (DOC)
  - [x] 26a – Ensure `docs/01-plan.md`, `docs/02-tasks.md`, and `docs/03-architecture.md` are in sync with current implementation.
  - [x] 26b – Record major milestones and decisions in `docs/04-changelog.md`.
  - [x] 26c – **Document Multi-Root Workspace**: Add instructions for setting up VSCode Multi-Root Workspace for referencing `sushi` and `tamagui-kitchen-sink`.

---

## ⏭️ Upcoming: Phase 5 – Integration & Handoff

27 - [ ] **Integrate Design System into Flows** (FDD, UX)
  - [ ] 27a – Replace ad-hoc UI in chat, settings, and key dashboards with `packages/ui` components.
  - [ ] 27b – Add end-to-end tests for at least one representative flow per area.

28 - [ ] **Finalize Accessibility and Cross-Platform Checks** (TDD, UX)
  - [ ] 28a – Run accessibility inspections on web.
  - [ ] 28b – Validate main components on iOS/Android using Expo.

29 - [ ] **Handoff Package and Docs** (DOC)
  - [ ] 29a – Write "How to add a new component" guide for `packages/ui`.
  - [ ] 29b – Summarize headless integrations and upgrade strategy.
  - [ ] 29c – Capture future ideas in `docs/05-ideas.md` if needed.

---

## 🛠️ Backlog: Phase 6 – Gap Fill, QA & Tech Debt

37 - [ ] **QA & Cleanup**
  - [ ] 37a – **Resolve Linting Errors**: Fix remaining lint warnings in `packages/ui` (if any).
  - [ ] 37b – **Standardize Structure**: Ensure all tests are co-located or strictly organized.
  - [x] 37c – **Restore Visual Check**: Re-implement `scripts/visual-check.js`.

38 - [ ] **Missing / Disabled Unit Tests** (TDD)
  - [ ] 38a – **Fix Disabled Tests**: Resolve issues in `Command`, `Menubar`, `DropdownMenu`, and `Autocomplete` tests.
  - [ ] 38b – **Molecules Coverage**: Add tests for `HoverCard`, `NavigationMenu`, `OTPInput`, `Resizable`.
  - [ ] 38c – **Interaction Tests**: Improve reliability of tests involving Radix/Headless interactions in JSDOM.

---

## ✅ Completed Tasks

### Critical Remediation (From Audit)
- [x] **Fix Current Unit Test Failures (P0)**: Fixed snapshot/style mismatches in `Button`, `Typography`, etc.
- [x] **Implement Security Scanning (P1)**: Integrated security scanner.
- [x] **Resolve All Linting Errors (P1)**: Fixed 70+ ESLint errors.
- [x] **Restore Visual Testing Capabilities (P2)**: Restored `scripts/visual-check.js`.
### Component Acceleration & Harvesting
32 - [x] **Component Acceleration Phase**
  - [x] 32a – **Harvest `pogiii/sushi`**: Input (Composed) and OTPInput patterns.
  - [x] 32b – **Harvest `tamagui-kitchen-sink`**: StarRating.

## 📦 Batch 1: Critical Remediation & Quality (P0)
**Context:** Critical fixes for codebase health.

- [ ] **Fix Unit Test Suite (P0)**: Fix import paths in `packages/ui/tests/migrated`.
- [ ] **Resolve Linting Errors (P1)**: Fix ESLint errors (unused vars, `any`).

## 📦 Batch 2: Documentation Specs (Gap Fill)
**Context:** Missing specs for complex components.
**Goal:** Create `docs/specs/COMPONENT.md` for each.

- [ ] **Task 35f**: Create specs for `DataTable`
- [ ] **Task 35g**: Create specs for `RichText`
- [ ] **Task 35h**: Create specs for `Video`
- [ ] **Task 35e**: Create specs for `Autocomplete`

## 📦 Batch 3: Implemented Components (Atoms/Molecules)
**Context:** These components have been implemented.
**Goal:** Verify and add tests/stories if missing.

- [x] **Task 36a**: Implement `button-group`
- [x] **Task 36b**: Implement `empty` state component
- [x] **Task 36c**: Implement `field` component
- [x] **Task 36d**: Implement `input-group`
- [x] **Task 36e**: Implement `item` component

## 📦 Batch 4: Implemented Components (UI Elements)
**Context:** These components have been implemented.
**Goal:** Verify and add tests/stories if missing.

- [x] **Task 36f**: Implement `kbd` (Keyboard shortcut display)
- [x] **Task 36g**: Implement `label`
- [x] **Task 36h**: Implement `native-select`
- [x] **Task 36i**: Implement `sonner` (Toast alternative)
- [x] **Task 36j**: Implement `table` (Basic table)

### ShadCN Gap Fill (High/Medium Priority)
33 - [x] **ShadCN Gap Fill - High Priority**
  - [x] 33a – **Command Palette**: Implemented `Command`.
  - [x] 33b – **Date Picker**: Implemented `Calendar` + `DatePicker`.
  - [x] 33c – **DropdownMenu**: Implemented `DropdownMenu`.
34 - [x] **ShadCN Gap Fill - Medium Priority**
  - [x] 34c – **HoverCard**: Implemented using `Popover`.
  - [x] 34d – **Carousel**: Implemented using `embla-carousel`.
  - [x] 34a – **AspectRatio**: Implemented.
  - [x] 34b – **Collapsible**: Implemented.
  - [x] 34e – **Spinner**: Implemented.

### Phase 0-3 Completions
- [x] **Phase 0 (Research)**: Ecosystem research, direction decided.
- [x] **Phase 1 (Foundation)**: Theme, Config, Forms, Providers, Testing Setup.
- [x] **Phase 2 (High Impact)**: DataTable, Calendar, Command.
- [x] **Phase 3 (Expansion)**: Carousel, OTPInput, Pagination, Breadcrumb, Sidebar, Charts.
- [x] **Phase 4 (Web UX - Partial)**: NavigationMenu, ToggleGroup, Alert, Badge, Switch, Sheet, Toast, Avatar, Tabs, Accordion, Slider, RadioGroup, Skeleton, Progress, Separator, Toggle, ScrollArea, Resizable, Drawer, Tooltip, ContextMenu.

### Additional
- [x] **Brand Integration**: IVISA branding applied.
- [x] **Submodule Strategy**: Documentation created.
