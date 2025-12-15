# Changelog

## [Unreleased]

### Fixed
- **Critical Crashes:**
  - `Select`: Added missing `Viewport` static property to `Select` composite to prevent "Element type is invalid" crashes in Forms.
  - `Sidebar`: Fixed `MobileSidebar` crash by using `Sheet.Trigger` and `Sheet.Content` composite properties instead of named exports.
  - `NotificationFeed`: Fixed invalid imports (removed `ScrollArea` and `Button` import from `tamagui` core, redirected to Atoms).
  - `Drawer`: Removed invalid "Composition" story that attempted to use internal components without proper Context providers.

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
