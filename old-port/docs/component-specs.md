# Component Specs – Phase 0 Draft

This document captures Phase 0 spec drafts for the highest-priority components. Each section includes UX parity goals, Tamagui token mapping, acceptance criteria, and an initial TDD backlog (tests to author before implementation).

## Button
- **UX Parity:** Mirrors shadcn variants (`default`, `secondary`, `destructive`, `outline`, `ghost`) with size modifiers (`sm`, `default`, `lg`), supports loading/disabled states, and icon composition.
- **Tokens:**
  - Colors: `$primary`, `$secondary`, `$destructive`, `$borderColor`, `$muted`
  - Radii: `$4`
  - Space: `$3`, `$4`, `$6`
- **Acceptance Criteria:**
  1. Variants render with correct background/foreground colors on both web and native.
  2. `isLoading` state renders spinner without layout shift, remains accessible via `aria-busy`.
  3. Focus ring adheres to `$ring` token and is logged via `logger_utils` on failure.
- **Initial Tests:**
  - `Button.spec.tsx`: renders all variants & sizes; ensures `aria-busy` toggles during loading.
  - `button.a11y.test.ts`: keyboard focus + role assertions across web/native.

## Input
- **UX Parity:** `default` and `filled` variants with prefix/suffix support and error messaging.
- **Tokens:** `$borderColor`, `$ring`, `$muted`, `$foreground`, radius `$3`.
- **Acceptance Criteria:**
  1. Input responds to focus/blur with Tamagui focusStyle tokens.
  2. Error state logs validation failures using `get_logger("input")`.
  3. Supports native `secureTextEntry` on mobile while preserving shadcn props.
- **Initial Tests:**
  - `Input.spec.tsx`: focus/blur styling snapshot, prefix slot rendering.
  - `input.native.test.ts`: secure entry toggles on Expo target.

## Textarea
- **UX Parity:** Auto-sizing multiline control with character counter and variants.
- **Tokens:** `$space.$3-6`, `$borderColor`, `$background`, `$foreground`.
- **Acceptance Criteria:**
  1. Auto-resizes between `minRows` and `maxRows` without layout thrash.
  2. Emits log when heights exceed bounds (`log-textarea-overflow`).
  3. Handles controlled/uncontrolled value updates without warnings.
- **Initial Tests:**
  - `Textarea.spec.tsx`: auto-sizing snapshots, counter display at limit.
  - `textarea.a11y.test.ts`: announces character counts via `aria-live`.

## Select
- **UX Parity:** Headless Select with trigger, content portal, groups, and keyboard navigation.
- **Tokens:** `$muted`, `$background`, `$borderColor`, `$shadow.2`, radius `$4`.
- **Acceptance Criteria:**
  1. Trigger reflects selection state and supports prefix icons.
  2. Content renders in Portal with correct focus trapping.
  3. Logs when data source returns empty options.
- **Initial Tests:**
  - `Select.spec.tsx`: keyboard navigation (ArrowUp/Down, Enter) matching shadcn snapshot.
  - `select.portal.test.tsx`: verifies portal attaches to `PortalProvider` root.

## Switch
- **UX Parity:** Toggle component with size variants (`sm`, `md`) and accessible labeling.
- **Tokens:** `$primary`, `$background`, `$borderColor`, radius `$max`.
- **Acceptance Criteria:**
  1. Proper `aria-checked` updates and `role="switch"` semantics.
  2. Disabled state prevents callbacks and logs suppressed interaction.
  3. Motion respects Tamagui animation tokens for knob translation.
- **Initial Tests:**
  - `Switch.spec.tsx`: toggles state on click/touch; respects disabled prop.
  - `switch.motion.test.tsx`: ensures knob animation uses `$transition.fast`.

## Slider
- **UX Parity:** Single-value and range sliders with step control, tick marks, labels, and both horizontal/vertical orientations mirroring shadcn behavior.
- **Tokens:** `$accent`, `$muted`, `$borderColor`, `$background`, radius `$pill`, space `$2-4` for thumb offsets.
- **Acceptance Criteria:**
  1. Keyboard navigation (`Arrow`, `Home`, `End`) adjusts value respecting `step`/`min`/`max` and logs when bounds are exceeded.
  2. Range mode exposes two thumbs with accessible labeling (`aria-valuetext`) and collision avoidance between thumbs.
  3. Vertical orientation renders correctly on native, reusing Tamagui `Stack` without layout jitter.
- **Initial Tests:**
  - `Slider.spec.tsx`: pointer + keyboard adjustments snapshot; verifies value change callbacks and logging on bounds breach.
  - `slider.range.test.tsx`: ensures dual-thumb focus order + collision handling for range sliders and vertical orientation snapshot.

## Dialog / Alert Dialog
- **UX Parity:** Modal dialog with overlay, focus trapping, nested close actions, alerts supporting destructive confirmations.
- **Tokens:** `$background`, `$borderColor`, `$shadow.4`, `$space.$6`.
- **Acceptance Criteria:**
  1. Overlay fades using Tamagui animation tokens and logs mount/unmount.
  2. Focus trap remains within Dialog; violations logged.
  3. Alert Dialog enforces destructive confirmation button ordering.
- **Initial Tests:**
  - `Dialog.spec.tsx`: verifies focus trap, close on escape, portal root.
  - `AlertDialog.spec.tsx`: confirm destructive button receives focus.

## Dropdown Menu
- **UX Parity:** Contextual actions list with nested submenus and shortcuts.
- **Tokens:** `$background`, `$muted`, `$accent`, `$space.$2-4`.
- **Acceptance Criteria:**
  1. Supports keyboard invocation via trigger and context click.
  2. Logs when submenu overflow occurs beyond viewport limits.
  3. Provides optional selection badges using `Badge` component.
- **Initial Tests:**
  - `DropdownMenu.spec.tsx`: nested submenu navigation + typeahead search.
  - `dropdown.telemetry.test.ts`: ensures overflow logs call `logger_utils`.

## Accordion
- **UX Parity:** Supports `single` and `multiple` expansion modes, animated chevrons, and nested content blocks with density tokens matching shadcn.
- **Tokens:** `$borderColor`, `$muted`, `$foreground`, `$radius.$3`, `$space.$3-5`; animation tokens `accordion-up/down` reused from Tailwind export.
- **Acceptance Criteria:**
  1. Keyboard navigation (`Home`, `End`, `ArrowUp/Down`) cycles headers per WAI-ARIA guidance and logs violations.
  2. Animation uses Tamagui `AnimatePresence` (or CSS keyframes) with duration matching `accordion-up/down`, honouring reduced-motion preference.
  3. Nested accordions inherit spacing without duplicated borders; spec documents pattern in README.
- **Initial Tests:**
  - `Accordion.spec.tsx`: ensures single vs multiple behavior, chevron rotation snapshot, animation tokens applied.
  - `accordion.a11y.test.ts`: verifies roving tabindex and `aria-controls` unique IDs, capturing logs on failure.

## Tabs
- **UX Parity:** Horizontal and vertical tabs with underline indicator, keyboard roving focus, and optional badges in triggers.
- **Tokens:** `$muted`, `$foreground`, `$accent`, `$borderColor`, radius `$2`, space `$3` for gutters.
- **Acceptance Criteria:**
  1. Roving tabindex implemented via Tamagui `useRovingFocusGroup` pattern; `Enter`/`Space` activate tab panels.
  2. Indicator animates using Tamagui motion tokens and logs misalignment exceeding 2px.
  3. Panels support deferred mounting (`forceMount` prop) with logging when a panel fails to mount.
- **Initial Tests:**
  - `Tabs.spec.tsx`: keyboard navigation snapshot + indicator alignment assertions.
  - `tabs.lazy.test.tsx`: verifies deferred panel mounting and log emission when network content is missing.

## Table
- **UX Parity:** Responsive data table with zebra stripes, optional compact density, sticky header/first column, and batch selection toolbar.
- **Tokens:** `$background`, `$foreground`, `$muted`, `$borderColor`, `$space.$2-4`, radius `$2` for chips.
- **Acceptance Criteria:**
  1. Sticky header + first column behave on web and native (where supported) with fallback scroll wrappers logged when unsupported.
  2. Row selection updates toolbar state, emits structured log with selection counts, and preserves keyboard focus.
  3. Responsive mode stacks columns on small breakpoints using Tamagui `Stack` + `VisuallyHidden` labels for accessibility.
- **Initial Tests:**
  - `Table.spec.tsx`: verifies zebra styling, sticky headers, and selection callbacks + logging.
  - `table.responsive.test.tsx`: ensures stacked layout exposes labels via `aria-label`/`data-column` for screen readers.

## Tooltip
- **UX Parity:** Short delay tooltip with arrow, touch-safe fallback on mobile.
- **Tokens:** `$background`, `$foreground`, `$shadow.2`, radius `$2`.
- **Acceptance Criteria:**
  1. Hover delay configurable; default 700ms on desktop, 0 on touch.
  2. Arrow aligns with trigger; misalignment logs warning.
  3. Supports `aria-describedby` wiring for accessibility.
- **Initial Tests:**
  - `Tooltip.spec.tsx`: ensures delay + arrow alignment snapshot.
  - `tooltip.a11y.test.ts`: verifies `aria-describedby` is applied.

## Toast
- **UX Parity:** Stackable notifications with swipe dismissal on mobile.
- **Tokens:** `$background`, `$success`, `$warning`, `$destructive`.
- **Acceptance Criteria:**
  1. Multiple toasts stack with max height, drop oldest beyond limit.
  2. Swipe gestures on mobile trigger exit animation and log events.
  3. Integrates with logger for persistence of error toasts.
- **Initial Tests:**
  - `Toast.spec.tsx`: stacking + dismissal flows.
  - `toast.native.test.ts`: swipe gesture via Expo testing harness.

## Logging Hooks for Specs
- All components must call `get_logger(component)` in error/fallback paths.
- Tests should assert logging via spy when features fail (e.g., overflow, focus trap violation).

These specs satisfy Phase 0 Task 2 and provide inputs for implementation and TDD in subsequent phases.

<!-- spec-index:start -->

| Component | Source |
| --- | --- |
| Accordion | [specs/accordion.md](../specs/accordion.md) |
| Alert | [specs/alert.md](../specs/alert.md) |
| Alert Dialog | [specs/alert-dialog.md](../specs/alert-dialog.md) |
| Aspect Ratio | [specs/aspect-ratio.md](../specs/aspect-ratio.md) |
| Avatar | [specs/avatar.md](../specs/avatar.md) |
| Badge | [specs/badge.md](../specs/badge.md) |
| Breadcrumb | [specs/breadcrumb.md](../specs/breadcrumb.md) |
| Button | [specs/button.md](../specs/button.md) |
| Button Group | [specs/button-group.md](../specs/button-group.md) |
| Calendar | [specs/calendar.md](../specs/calendar.md) |
| Card | [specs/card.md](../specs/card.md) |
| Carousel | [specs/carousel.md](../specs/carousel.md) |
| Chart | [specs/chart.md](../specs/chart.md) |
| Checkbox | [specs/checkbox.md](../specs/checkbox.md) |
| Collapsible | [specs/collapsible.md](../specs/collapsible.md) |
| Command | [specs/command.md](../specs/command.md) |
| Context Menu | [specs/context-menu.md](../specs/context-menu.md) |
| Dialog | [specs/dialog.md](../specs/dialog.md) |
| Drawer | [specs/drawer.md](../specs/drawer.md) |
| Dropdown Menu | [specs/dropdown-menu.md](../specs/dropdown-menu.md) |
| Empty | [specs/empty.md](../specs/empty.md) |
| Field | [specs/field.md](../specs/field.md) |
| Form | [specs/form.md](../specs/form.md) |
| Hover Card | [specs/hover-card.md](../specs/hover-card.md) |
| Input | [specs/input.md](../specs/input.md) |
| Input Group | [specs/input-group.md](../specs/input-group.md) |
| Input Otp | [specs/input-otp.md](../specs/input-otp.md) |
| Item | [specs/item.md](../specs/item.md) |
| Label | [specs/label.md](../specs/label.md) |
| Menubar | [specs/menubar.md](../specs/menubar.md) |
| Navigation Menu | [specs/navigation-menu.md](../specs/navigation-menu.md) |
| Pagination | [specs/pagination.md](../specs/pagination.md) |
| Popover | [specs/popover.md](../specs/popover.md) |
| Progress | [specs/progress.md](../specs/progress.md) |
| Radio Group | [specs/radio-group.md](../specs/radio-group.md) |
| Resizable | [specs/resizable.md](../specs/resizable.md) |
| Scroll Area | [specs/scroll-area.md](../specs/scroll-area.md) |
| Select | [specs/select.md](../specs/select.md) |
| Separator | [specs/separator.md](../specs/separator.md) |
| Sheet | [specs/sheet.md](../specs/sheet.md) |
| Sidebar | [specs/sidebar.md](../specs/sidebar.md) |
| Skeleton | [specs/skeleton.md](../specs/skeleton.md) |
| Slider | [specs/slider.md](../specs/slider.md) |
| Sonner | [specs/sonner.md](../specs/sonner.md) |
| Spinner | [specs/spinner.md](../specs/spinner.md) |
| Switch | [specs/switch.md](../specs/switch.md) |
| Table | [specs/table.md](../specs/table.md) |
| Tabs | [specs/tabs.md](../specs/tabs.md) |
| Textarea | [specs/textarea.md](../specs/textarea.md) |
| Toast | [specs/toast.md](../specs/toast.md) |
| Toggle | [specs/toggle.md](../specs/toggle.md) |
| Toggle Group | [specs/toggle-group.md](../specs/toggle-group.md) |
| Tooltip | [specs/tooltip.md](../specs/tooltip.md) |
| Kbd | [specs/kbd.md](../specs/kbd.md) |
| Native Select | [specs/native-select.md](../specs/native-select.md) |

<!-- spec-index:end -->
