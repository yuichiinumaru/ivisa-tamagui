# 02 – Tasks for the Ivisa Tamagui Design System

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Tags: `TDD`, `FDD`, `SDD`, `DDD`, `DOC`, `UX`

---

## 🚀 Priority 1: Component Refactor & BI Expansion (Jules Swarm)

### ⚛️ ATOMS
**Goal:** Refactor for PT-BR, A11y, and Robustness using the "Atom Algorithm".

- [/] Refactor `Alert` (Dispatched)
- [/] Refactor `AspectRatio` (Dispatched)
- [ ] Refactor `Avatar` (Harvested) -> Dispatched
- [/] Refactor `Badge` (Dispatched)
- [/] Refactor `Button` (Dispatched)
- [/] Refactor `Checkbox` (Dispatched)
- [/] Refactor `Input` (Dispatched)
- [/] Refactor `Kbd` (Dispatched)
- [/] Refactor `Label` (Dispatched)
- [/] Refactor `Progress` (Dispatched)
- [/] Refactor `ScrollArea` (Dispatched)
- [ ] Refactor `Separator`
- [ ] Refactor `Skeleton`
- [ ] Refactor `Slider`
- [ ] Refactor `Spinner`
- [ ] Refactor `Stack`
- [ ] Refactor `Switch`
- [ ] Refactor `Textarea`
- [ ] Refactor `Toggle`
- [ ] Refactor `Typography`
- [ ] Implement `NavLink` (New - BI Sidebar)
- [ ] Implement `Logo` (New - BI Sidebar)
- [ ] Implement `Dot` (New - BI Charts)

### 🧪 MOLECULES
**Goal:** Upgrade for State Orchestration and Layout Integrity using the "Molecule Algorithm".

- [ ] Refactor `Accordion`
- [ ] Refactor `AlertDialog`
- [ ] Refactor `AvatarGroup` (Harvested)
- [ ] Refactor `BadgeCounter` (Harvested)
- [ ] Refactor `Breadcrumb`
- [ ] Refactor `ButtonGroup`
- [ ] Refactor `Calendar`
- [ ] Refactor `Card`
- [ ] Refactor `Collapsible`
- [ ] Refactor `ComponentErrorBoundary`
- [ ] Refactor `ContextMenu`
- [ ] Refactor `DatePicker`
- [ ] Refactor `Dialog`
- [ ] Refactor `Drawer`
- [ ] Refactor `Empty`
- [ ] Refactor `Field`
- [ ] Refactor `HoverCard`
- [ ] Refactor `InputGroup`
- [ ] Refactor `Item`
- [ ] Refactor `Menubar`
- [ ] Refactor `MonthsPicker` (Harvested)
- [ ] Refactor `NativeSelect`
- [ ] Refactor `NavigationMenu`
- [ ] Refactor `OTPInput` (Harvested)
- [ ] Refactor `Pagination`
- [ ] Refactor `Popover`
- [ ] Refactor `RadioGroup`
- [ ] Refactor `Resizable`
- [ ] Refactor `Select`
- [ ] Refactor `Sheet`
- [ ] Refactor `Sonner`
- [ ] Refactor `StarRating` (Harvested)
- [ ] Refactor `Stepper`
- [ ] Refactor `Table`
- [ ] Refactor `Tabs`
- [ ] Refactor `Toast`
- [ ] Refactor `ToggleGroup`
- [ ] Refactor `Tooltip`
- [ ] Implement `MetricCard` (New - BI)
- [ ] Implement `NavGroup` (New - BI)
- [ ] Implement `ChartContainer` (New - BI Wrapper)
- [ ] Implement `RadialChartContent` (New - BI)
- [ ] Implement `HorizontalBarGroup` (New - BI)

### 🧬 ORGANISMS
**Goal:** Upgrade for Data Lifecycle and Container Agnosticism using the "Organism Algorithm".

- [ ] Refactor `Autocomplete`
- [ ] Refactor `Carousel`
- [ ] Refactor `Charts` (General Library)
- [ ] Refactor `Command`
- [ ] Refactor `DashboardLayout` -> Refactor to `DashboardShell` (BI)
- [ ] Refactor `DataTable`
- [ ] Refactor `FileUpload`
- [ ] Refactor `Form`
- [ ] Refactor `RichText`
- [ ] Refactor `Sidebar` (App Shell)
- [ ] Refactor `Timeline`
- [ ] Implement `KPIGrid` (New - BI)
- [ ] Implement `TimeSeriesChart` (New - BI)
- [ ] Implement `GaugeChart` (New - BI)
- [ ] Implement `RankingChart` (New - BI)

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
  - [ ] 38a – **Fix Disabled Tests**: Resolve issues in `Command`, `Menubar`, `DropdownMenu`, and `Autocomplete` tests.
  - [ ] 38b – **Molecules Coverage**: Add tests for `HoverCard`, `NavigationMenu`, `OTPInput`, `Resizable`.
  - [ ] 38c – **Interaction Tests**: Improve reliability of tests involving Radix/Headless interactions in JSDOM.

---

## ✅ Completed Tasks

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
