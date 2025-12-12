# 02 – Tasks for the Ivisa Tamagui Design System

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Tags: `TDD`, `FDD`, `SDD`, `DDD`, `DOC`, `UX`

---

## 🚀 Priority 1: Component Refactor & BI Expansion (Jules Swarm)

### ⚛️ ATOMS
**Goal:** Refactor for PT-BR, A11y, and Robustness using the "Atom Algorithm".

*(All Priority 1 Atoms have been refactored and moved to 'Completed Tasks'.)*

### 🧪 MOLECULES
**Goal:** Upgrade for State Orchestration and Layout Integrity using the "Molecule Algorithm".

*(All Priority 1 Molecules have been refactored and moved to 'Completed Tasks'.)*

### 🧬 ORGANISMS
**Goal:** Upgrade for Data Lifecycle and Container Agnosticism using the "Organism Algorithm".

*(All Priority 1 Organisms have been implemented and moved to 'Completed Tasks'.)*

---

## 🚀 Priority 2: Intelligent Organisms (Phase 5)
**Goal:** Transition from "Parts" to "Solutions" using complex logic and composition.

- [x] Implement `SchemaForm` (Dynamic Form Engine)
- [ ] Implement `Scheduler` (Big Calendar)
- [ ] Implement `ChatWidget` (AI Interface)
- [ ] Implement `CookieBanner` (Compliance)
- [ ] Implement `AnimatedSegmentedControl` (Smart Tabs)
- [ ] Implement `WizardForm` (Multi-Step Logic)
- [ ] Implement `FilterBar` (Advanced Search)
- [ ] Implement `NotificationFeed` (History)
- [ ] Implement `MediaGrid` (Asset Manager)
- [ ] Implement `AuthScreen` (Unified Login)

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
  - [ ] 37c – **Atoms Coverage**: Add tests for `Stack`, `Dot`, `NavLink`.
  - [ ] 38a – **Fix Disabled Tests**: Resolve issues in `Command`, `Menubar`, `DropdownMenu`, and `Autocomplete` tests.
  - [ ] 38b – **Molecules Coverage**: Add tests for `HoverCard`, `NavigationMenu`, `OTPInput`, `Resizable`.
  - [ ] 38c – **Interaction Tests**: Improve reliability of tests involving Radix/Headless interactions in JSDOM.

---

## ✅ Completed Tasks

- [x] Refactor `Alert`
- [x] Refactor `AspectRatio`
- [x] Refactor `Avatar`
- [x] Refactor `Badge`
- [x] Refactor `Button`
- [x] Refactor `Checkbox`
- [x] Refactor `Input`
- [x] Refactor `Kbd`
- [x] Refactor `Label`
- [x] Refactor `Progress`
- [x] Refactor `ScrollArea`
- [x] Refactor `Separator`
- [x] Refactor `Skeleton`
- [x] Refactor `Slider`
- [x] Refactor `Spinner`
- [x] Refactor `Stack`
- [x] Refactor `Switch`
- [x] Refactor `Textarea`
- [x] Refactor `Toggle`
- [x] Refactor `Typography`
- [x] Implement `NavLink`
- [x] Implement `Logo`
- [x] Implement `Dot`
- [x] Refactor `Accordion`
- [x] Refactor `AlertDialog`
- [x] Refactor `AvatarGroup`
- [x] Refactor `BadgeCounter`
- [x] Refactor `Breadcrumb`
- [x] Refactor `ButtonGroup`
- [x] Refactor `Calendar`
- [x] Refactor `Card`
- [x] Refactor `Collapsible`
- [x] Refactor `ComponentErrorBoundary`
- [x] Refactor `ContextMenu`
- [x] Refactor `Dialog`
- [x] Refactor `Drawer`
- [x] Refactor `Empty`
- [x] Refactor `Field`
- [x] Refactor `HoverCard`
- [x] Refactor `InputGroup`
- [x] Refactor `Item`
- [x] Refactor `Menubar`
- [x] Refactor `MonthsPicker`
- [x] Refactor `NativeSelect`
- [x] Refactor `NavigationMenu`
- [x] Refactor `OTPInput`
- [x] Refactor `Pagination`
- [x] Refactor `Popover`
- [x] Refactor `RadioGroup`
- [x] Refactor `Resizable`
- [x] Refactor `Select`
- [x] Refactor `Sheet`
- [x] Refactor `Sonner`
- [x] Refactor `StarRating`
- [x] Refactor `Stepper`
- [x] Refactor `Table`
- [x] Refactor `Tabs`
- [x] Refactor `Toast`
- [x] Refactor `ToggleGroup`
- [x] Refactor `Tooltip`
- [x] Implement `MetricCard`
- [x] Implement `NavGroup`
- [x] Implement `ChartContainer`
- [x] Implement `RadialChartContent`
- [x] Implement `HorizontalBarGroup`
- [x] Refactor `Autocomplete`
- [x] Refactor `Carousel`
- [x] Refactor `Charts`
- [x] Refactor `Command`
- [x] Refactor `DashboardShell` (formerly DashboardLayout)
- [x] Refactor `DataTable`
- [x] Refactor `FileUpload`
- [x] Refactor `Form`
- [x] Refactor `RichText`
- [x] Refactor `Sidebar`
- [x] Refactor `Timeline`
- [x] Implement `KPIGrid`
- [x] Implement `TimeSeriesChart`
- [x] Implement `GaugeChart`
- [x] Implement `RankingChart`
- [x] **Restore Visual Check**: Re-implement `scripts/visual-check.js`.
- [x] **Fix Current Unit Test Failures (P0)**: Fixed snapshot/style mismatches in `Button`, `Typography`, etc.
- [x] **Implement Security Scanning (P1)**: Integrated security scanner.
- [x] **Resolve All Linting Errors (P1)**: Fixed 70+ ESLint errors.
- [x] **Restore Visual Testing Capabilities (P2)**: Restored `scripts/visual-check.js`.
- [x] **Component Acceleration Phase**: Harvested `pogiii/sushi` and `tamagui-kitchen-sink`.
- [x] **Task 36a**: Implement `button-group`
- [x] **Task 36b**: Implement `empty` state component
- [x] **Task 36c**: Implement `field` component
- [x] **Task 36d**: Implement `input-group`
- [x] **Task 36e**: Implement `item` component
- [x] **Task 36f**: Implement `kbd` (Keyboard shortcut display)
- [x] **Task 36g**: Implement `label`
- [x] **Task 36h**: Implement `native-select`
- [x] **Task 36i**: Implement `sonner` (Toast alternative)
- [x] **Task 36j**: Implement `table` (Basic table)
- [x] **Command Palette**: Implemented `Command`.
- [x] **Date Picker**: Implemented `Calendar` + `DatePicker`.
- [x] **DropdownMenu**: Implemented `DropdownMenu`.
- [x] **HoverCard**: Implemented using `Popover`.
- [x] **Carousel**: Implemented using `embla-carousel`.
- [x] **AspectRatio**: Implemented.
- [x] **Collapsible**: Implemented.
- [x] **Spinner**: Implemented.
- [x] **Phase 0 (Research)**: Ecosystem research, direction decided.
- [x] **Phase 1 (Foundation)**: Theme, Config, Forms, Providers, Testing Setup.
- [x] **Phase 2 (High Impact)**: DataTable, Calendar, Command.
- [x] **Phase 3 (Expansion)**: Carousel, OTPInput, Pagination, Breadcrumb, Sidebar, Charts.
- [x] **Phase 4 (Web UX - Partial)**: NavigationMenu, ToggleGroup, Alert, Badge, Switch, Sheet, Toast, Avatar, Tabs, Accordion, Slider, RadioGroup, Skeleton, Progress, Separator, Toggle, ScrollArea, Resizable, Drawer, Tooltip, ContextMenu.
- [x] **Brand Integration**: IVISA branding applied.
- [x] **Submodule Strategy**: Documentation created.
