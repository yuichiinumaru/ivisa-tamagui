# 04 – Changelog (VIVI Tamagui Design System)

All notable changes to this design system and its documentation will be recorded here.

## [0.5.0] - Storybook Population & Fixes
- **Storybook Coverage**:
  - Created new stories for `Accordion`, `DatePicker`, `NavigationMenu`, `RadioGroup`, `Resizable`, `Sheet`, `Tabs`, and `Toast`.
  - Updated `docs/02-tasks.md` to reflect completion of Storybook population (Task 25).
- **Fixes**:
  - Resolved duplicate imports in `Calendar` and `DataTable`.
  - Fixed missing `Button` and `Label` imports in Storybook stories.
  - Updated `package.json` dependencies for Storybook add-ons.

## [0.4.0] - Brand Identity & Strategic Refinement
- **Brand Identity**:
  - Added IVISA color palette (Blue/Teal) to `tokens.ts`.
  - Configured **Cera Pro** font in `tamagui.config.ts`.
  - Created `ivisa_light` and `ivisa_dark` themes.
- **Strategy**:
  - Documented **Git Submodule** strategy in `docs/08-submodule-strategy.md`.
  - Established strict "No Framework" rule (no Next.js/Expo dependencies).
  - Refined "Frankenstein" strategy: **Sidebar** is now explicitly a **Composition** (Sheet + YStack), not a wrapper.

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
- **Documentation**:
  - Updated `ivisa.code-workspace` to reference `referencias` folder.
  - Added "Multi-Root Workspace" setup guide to `docs/03-architecture.md`.
  - Enriched Storybook documentation for `Button` and `Sidebar` with usage notes and descriptions.
- Implemented `AspectRatio` atom using Tamagui `Stack`.
- Implemented `Collapsible` molecule using `@radix-ui/react-collapsible` and `react-animate-height`.
- Captured the new research-driven strategy for building a Tamagui-based design system in `docs/00-draft-new-research.md`.
- Created `docs/01-plan.md` to define the vision, methodologies, and phased roadmap for a "Frankenstein Controlado 100% Free" design system built on Tamagui, Bento Free, and headless libraries.
- Added `docs/02-tasks.md` as the primary task board, organizing work by phases (research, foundation, high-impact gaps, medium/low-effort components, web-specific UX, integration/handoff).
- Documented the design system architecture in `docs/03-architecture.md`, including theme/tokens, package layout (`packages/ui`), headless integration patterns, and reference repository strategy.
- Delivered `Pagination` and `Breadcrumb` molecules with Tamagui-only styling, Storybook stories, and snapshot-driven regression tests.
- Implemented `OTPInput` composite with focus management, paste handling, and Storybook coverage to unblock downstream auth flows.
- Noticed legacy migrated tests referencing a missing `vitest.setup`; the suite fails before exercising new specs until the helper path is restored or the migrated files are excluded.

## [0.1.0] – Initial documentation pivot
- Archived the previous migration/automation-oriented project under `/old-port` for safekeeping.
- Reset the active `docs/` folder to focus solely on the new Tamagui-first design system direction.
- Confirmed that automation, agent orchestration, and rate-limiting concerns belong to other initiatives and are out of scope for this design system documentation.

[Unreleased]
- Fixed broken test suite imports and missing dependencies (`react-test-renderer`).
- Exported implemented but hidden components: `Menubar`, `ToggleGroup`, `Tooltip`.
- Verified and marked `Sidebar` as complete.
- Updated `TASKS.md` to reflect current state.
- Implemented `BarChart` organism using `victory` (Web) and `victory-native` (Native/Skia).

[Unreleased]: ./04-changelog.md
[0.1.0]: ./04-changelog.md#010--initial-documentation-pivot
