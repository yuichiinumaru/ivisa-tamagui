# ⚡ Jules Swarm Task List

This document groups pending tasks from `docs/02-tasks.md` into batches suitable for parallel execution by the Jules agent swarm.

## 📦 Batch 1: Documentation Specs (Gap Fill)
**Context:** These components are implemented but missing documentation specifications.
**Goal:** Create `docs/specs/COMPONENT.md` for each.

- [ ] **Task 35a**: Create specs for `ComponentErrorBoundary`
- [ ] **Task 35b**: Create specs for `DatePicker` & `MonthsPicker`
- [ ] **Task 35c**: Create specs for `StarRating`
- [ ] **Task 35d**: Create specs for `Stepper`
- [ ] **Task 35e**: Create specs for `Autocomplete`

## 📦 Batch 2: Documentation Specs (Gap Fill - Part 2)
**Context:** Continuation of missing specs.
**Goal:** Create `docs/specs/COMPONENT.md` for each.

- [ ] **Task 35f**: Create specs for `DataTable`
- [ ] **Task 35g**: Create specs for `RichText`
- [ ] **Task 35h**: Create specs for `Video`

## 📦 Batch 3: Missing Implementations (Atoms/Molecules)
**Context:** These components have specs (or are standard ShadCN/Tamagui patterns) but are missing code.
**Goal:** Implement component + Storybook + Test.

- [ ] **Task 36a**: Implement `button-group`
- [ ] **Task 36b**: Implement `empty` state component
- [ ] **Task 36c**: Implement `field` component
- [ ] **Task 36d**: Implement `input-group`
- [ ] **Task 36e**: Implement `item` component

## 📦 Batch 4: Missing Implementations (UI Elements)
**Context:** Specific UI elements needed for completeness.
**Goal:** Implement component + Storybook + Test.

- [ ] **Task 36f**: Implement `kbd` (Keyboard shortcut display)
- [ ] **Task 36g**: Implement `label`
- [ ] **Task 36h**: Implement `native-select`
- [ ] **Task 36i**: Implement `sonner` (Toast alternative)
- [ ] **Task 36j**: Implement `table` (Basic table)

## 📦 Batch 5: Remediation & Quality
**Context:** Critical fixes for codebase health.

- [ ] **Fix Unit Test Suite (P0)**: Fix import paths in `packages/ui/tests/migrated`.
- [ ] **Resolve Linting Errors (P1)**: Fix ESLint errors (unused vars, `any`).

## 📦 Batch 6: Storybook Documentation
**Context:** Populating Storybook with comprehensive stories.

- [ ] **Task 25a**: Create stories for primitives (Stack, Text, Button, etc.)
- [ ] **Task 25b**: Write usage notes/props documentation in Storybook.

## 📦 Batch 7: Documentation Sync
**Context:** Ensuring documentation matches reality.

- [ ] **Task 26a**: Sync `docs/01-plan.md`, `docs/02-tasks.md`, `docs/03-architecture.md`.
- [ ] **Task 26b**: Update `docs/04-changelog.md`.
- [ ] **Task 26c**: Document Multi-Root Workspace setup.
