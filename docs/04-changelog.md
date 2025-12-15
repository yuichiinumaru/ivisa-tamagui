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
