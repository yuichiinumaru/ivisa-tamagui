# Changelog

## [Unreleased]

### Added
- **Themes:**
  - `Escuro`: New Dark Glassmorphism theme with deep blue tones and translucent backgrounds.
  - `Pref.Rio`: Institutional theme following the official color palette of Rio de Janeiro City Hall and Arial/Helvetica typography.
- **Storybook:**
  - Added theme switcher to the toolbar.
  - Updated `Welcome.mdx` to showcase themes and `DataTable`.

### Fixed
- **Critical Crashes:**
  - `DataTable`: Fixed "Cannot assign to read only property" error by memoizing `data` and `columns` props before passing them to `useReactTable`. This prevents mutation of frozen Storybook args.

- **DOM Nesting Violations:**
  - `DataTable`: Fixed illegal HTML structure (`<thead>` inside `<div>`) by moving the `tag="table"` prop to the inner container.

- **Theming & Tokens:**
  - Fixed "Missing Token" warnings by adding `red10` and `outlineColor` to `tokens.ts`.
  - Fixed "No font size found" warnings by adding `default`, `true`, and `$3` aliases to `tamagui.config.ts`.

### Changed
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
