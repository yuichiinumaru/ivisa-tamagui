# Changelog

## [Unreleased]

### Added
- **Organisms:**
  - `AgentAnimationPanel`: New component for visualizing real-time agent events with status indicators.
  - `AgentAnimationModal`: New wrapper component that presents the animation panel inside a Dialog.
- **Documentation:**
  - `docs/09-storybook-improvement-adobe.md`: Comprehensive report on Storybook improvements based on Adobe Spectrum analysis, including gap analysis and micro-behavior recommendations.
- **Infrastructure:**
  - Added `ts-jest` to workspace root dev dependencies to fix test configuration issues in the monorepo.

### Fixed
- **Critical Crashes:**
  - `DataTable`: Fixed "Cannot assign to read only property" error by memoizing `data` and `columns` props before passing them to `useReactTable`. This prevents mutation of frozen Storybook args.

- **DOM Nesting Violations:**
  - `DataTable`: Fixed illegal HTML structure (`<thead>` inside `<div>`) by moving the `tag="table"` prop to the inner container.

- **Theming & Tokens:**
  - Fixed "Missing Token" warnings by adding `red10` and `outlineColor` to `tokens.ts`.
  - Fixed "No font size found" warnings by adding `default`, `true`, and `$3` aliases to `tamagui.config.ts`.
  - Enforced 3-Theme Constraint: `Claro`, `Escuro`, `Pref.Rio` (removed generic `Dark` and renamed `Light` to `Claro`).

### Changed
- **Storybook Structure:**
  - **Localization:** Renamed hierarchy to `Átomos`, `Moléculas`, `Organismos` and standard stories to `Padrao`, `Carregando`, `Erro`.
  - **Organization:** Consolidated all Chart organisms into `Organismos/Gráficos/` (flattening "Complex" charts).
- **Documentation:**
  - Updated `AGENTS.md` with insights on debugging Tamagui/Storybook console errors.

### Reintegrated
- **From Wave 3 Branch:**
  - `Button`: Added Spinner logic for loading state.
  - `AvatarGroup`: Fixed z-index stacking context for avatars.
  - `Card`, `Typography`, `AspectRatio`: Fixed Storybook console warnings (refs, leaked props).
  - `Kbd`: Fixed export.

### Refactored
- **Architecture Compliance:**
  - `Breadcrumb`, `DatePicker`, `HoverCard`, `MonthsPicker`, `OTPInput`, `Pagination`, `Toast`, `DropdownMenu`: Updated to import Atoms/Molecules from local packages instead of `tamagui`.
  - `AuthScreen`, `FilterBar`, `Form`: Fixed imports to use local Atoms (Input, Button, Select, Label).
