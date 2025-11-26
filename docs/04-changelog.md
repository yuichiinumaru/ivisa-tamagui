# 04 – Changelog (VIVI Tamagui Design System)

All notable changes to this design system and its documentation will be recorded here.

## [0.3.0] - Theme Merge & Phase 4 Completion
- **Theme Integration**: Merged design team's palette (Blue/Cyan) into `packages/ui` using `@tamagui/theme-builder`.
  - Updated `themes.ts` to use `createThemes` with the new palette.
  - Mapped semantic tokens (`primary`, `secondary`, etc.) to the new palette to ensure backward compatibility.
- **Phase 4 Completion**:
  - Implemented all remaining components: `Alert`, `Badge`, `Switch`, `Sheet`, `Toast`, `Avatar`, `Tabs`, `Accordion`, `Slider`, `RadioGroup`, `Skeleton`, `Progress`, `Separator`, `Toggle`, `ScrollArea`, `Resizable`, `Drawer`.
  - Fixed `Sheet` exports to support `Drawer`.

## [0.2.0] - Component Porting & Visual Testing
- **Ported Core Primitives**: Re-implemented `Button`, `Input`, `Textarea`, and `Checkbox` using Tamagui primitives with our new token system.
- **Ported Components**:
  - `Card`: Added support for `default` and `elevated` variants.
  - `Dialog`: Implemented full modal with animations and overlay using `@tamagui/dialog`.
  - `Popover`: Implemented contextual popups with custom animations using `@tamagui/popover`.
  - `Select`: Implemented adaptative select (Sheet on mobile) using `@tamagui/select`.
- **Visual Testing**: 
  - Created `scripts/visual-check.js` for automated Storybook screenshotting via Playwright.
  - Configured Storybook for React Native Web compatibility (`process.env` polyfill).
  - Fixed token scaling issues (added `true` keys) discovered via testing.
- **Cleanup**: Removed legacy `migrated/` folder to streamline the codebase.

## [Unreleased]
- Captured the new research-driven strategy for building a Tamagui-based design system in `docs/00-draft-new-research.md`.
- Created `docs/01-plan.md` to define the vision, methodologies, and phased roadmap for a "Frankenstein Controlado 100% Free" design system built on Tamagui, Bento Free, and headless libraries.
- Added `docs/02-tasks.md` as the primary task board, organizing work by phases (research, foundation, high-impact gaps, medium/low-effort components, web-specific UX, integration/handoff).
- Documented the design system architecture in `docs/03-architecture.md`, including theme/tokens, package layout (`packages/ui`), headless integration patterns, and reference repository strategy.
- Delivered `IvisaPagination` and `IvisaBreadcrumb` molecules with Tamagui-only styling, Storybook stories, and snapshot-driven regression tests.
- Implemented `IvisaOTPInput` composite with focus management, paste handling, and Storybook coverage to unblock downstream auth flows.
- Noticed legacy migrated tests referencing a missing `vitest.setup`; the suite fails before exercising new specs until the helper path is restored or the migrated files are excluded.

## [0.1.0] – Initial documentation pivot
- Archived the previous migration/automation-oriented project under `/old-port` for safekeeping.
- Reset the active `docs/` folder to focus solely on the new Tamagui-first design system direction.
- Confirmed that automation, agent orchestration, and rate-limiting concerns belong to other initiatives and are out of scope for this design system documentation.

[Unreleased]: ./04-changelog.md
[0.1.0]: ./04-changelog.md#010--initial-documentation-pivot
