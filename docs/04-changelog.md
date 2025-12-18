# Changelog

## [Unreleased]

### Added
- **Analysis:** `docs/atlassian-storybook/01-analysis.md` - Deep dive into Atlassian Design System patterns (AI, Governance, Foundations).
- **Roadmap:** "Wave 9: Intelligence & Governance" added to `docs/02-tasks.md`.
- **Organisms:**
  - `AgentAnimationPanel`: New component for visualizing real-time agent events.
  - `AgentAnimationModal`: New wrapper component for the panel.
- **Atoms:**
  - `Meter`: Capacity/relevance indicator.
  - `StatusLight`: Semantic dot with text.
- **Documentation:**
  - `docs/09-storybook-improvement-adobe.md`: Report on Storybook improvements based on Adobe Spectrum.
- **Infrastructure:**
  - Added `ts-jest` to workspace root dev dependencies.

### Fixed
- **Critical Crashes:**
  - `DataTable`: Fixed frozen prop mutation bug in Storybook.
- **DOM Nesting:**
  - `DataTable`: Fixed `div` inside `table` violation.
- **Theming:**
  - Fixed missing tokens (`red10`, `outlineColor`) and font aliases.
- **Visuals:**
  - `Button` loading state spinner.
  - `AvatarGroup` z-index clipping.

### Changed
- **Task Management:** Reorganized `docs/02-tasks.md` to archive completed waves and prioritize new strategic goals (Wave 9).
- **Storybook:** Renamed hierarchy to Portuguese (`Átomos`, `Moléculas`, `Organismos`).
