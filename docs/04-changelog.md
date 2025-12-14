# 04 – Changelog

## [Resurrection Era] - 2024-05-24

### 💀 The Great Purge (Governance Repair)
- **Governance:** Enforced strict `docs/00-06` hierarchy.
- **Constitution:** Rewrote `AGENTS.md` to be specific and authoritarian.
- **Law:** Created `docs/06-rules.md` to outlaw bad practices (no `any`, no zombies).
- **Cleanup:** Archived zombie documentation and root clutter.

### 💀 Autopsy Findings (Audit Report)
- **Critical:** Identified `as any` abuse in `Textarea.tsx`.
- **High:** Identified hardcoded z-indices and strings.
- **Plan:** Tasks created to address all findings in `docs/02-tasks.md`.

### 💀 Code Purification (Resurrection Phase 3.2)
- **Rite 1 (Textarea):** Removed `as any` and fixed type definition in `Textarea.tsx`.
- **Rite 2 (Select):** Extracted magic numbers and fixed icons in `Select.tsx`.
- **Rite 3 (DataTable):** Wrapped performance warning in `process.env.NODE_ENV === 'development'`.
- **Rite 4 (App):** Added i18n placeholders for hardcoded strings in `App.tsx`.
- **Rite 5 (Hygiene):** Purged zombie comments and warnings from `Button.tsx` and `DatePicker.tsx`.

## [Deployment Fix] - 2025-02-12
- **Vercel:** Created `vercel.json` to fix hanging build (Storybook dev server) and set correct output directory.
- **Cleanup:** Removed forbidden `pnpm-workspace.yaml`.

### 🧬 Evolution Phase 5.1 (Intelligent Organisms)
- **New Organism:** `SchemaForm` - Dynamic form builder wrapping `react-hook-form` and rendering mapped UI components.
## [Refactor] - 2025-02-12
- **Input:** Refactored `Input` to allow standalone fields (removed mandatory context check).
- **Testing:** Fixed `packages/ui` Jest configuration to resolve monorepo dependencies correctly.

## [Verification] - 2025-05-27
- **Component Audit:** Verified code existence for all Priority 1 Atoms, Molecules, and Organisms.
- **Task List Update:** Updated `docs/02-tasks.md` to reflect the completed state of refactored components.
- **Protocol Validation:** Confirmed components like `Collapsible`, `Sheet`, `Dot`, `NavLink` follow the new Portuguese localization and architecture standards.
- **Backlog:** Added "Atoms Coverage" task for components missing tests (`Stack`, `Dot`, `NavLink`).

## [Documentation Update] - 2025-05-27
- **Docs Sync:** Updated `docs/01-plan.md` to match the current phase status (Phase 4).
- **Storybook:** Started comprehensive population of Storybook documentation (Task 25).

## [0.5.0] - 2025-12-14
### Integrated
- **Atoms Refactored:** Alert, AspectRatio, Avatar, Badge, Button, Checkbox, Input, Label, Progress, ScrollArea, Separator, Skeleton, Slider, Spinner, Stack, Switch, Textarea, Toggle, Typography.
- **Molecules Refactored:** Accordion, AlertDialog, AvatarGroup, BadgeCounter, Breadcrumb, ButtonGroup, Calendar, Card, Collapsible, ComponentErrorBoundary, ContextMenu, Dialog, Drawer, Empty, Field, HoverCard, InputGroup, Item, Menubar, MonthsPicker, NativeSelect, NavigationMenu, OTPInput, Pagination, Popover, RadioGroup, Resizable, Select, Sheet, Sonner, StarRating, Stepper, Table, Tabs, Toast, ToggleGroup, Tooltip.
- **Organisms Implemented:** Autocomplete, Carousel, Charts, Command, DashboardShell, DataTable, FileUpload, Form, RichText, Sidebar, Timeline.
- **BI Components:** KPIGrid, TimeSeriesChart, GaugeChart, RankingChart.
- **Infrastructure:** Visual Check scripts restored, Security Scanning integrated, Linting errors resolved (70+).
