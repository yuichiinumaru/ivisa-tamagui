# 09 – Conversion Backlog & Reference Analysis

This document tracks the component inventory from our reference repositories (`pogiii/sushi` and `dohomi/tamagui-kitchen-sink`) and compares them with our current implementation in `ivisa-tamagui/packages/ui`. It also tracks ShadCN component parity gaps.

## 1. Reference: `pogiii/sushi` (Source: Harvesting)

Located in: `ivisa-tamagui/referencias/sushi`

| Component | Status | Location in Project | Reference Location | Strategy |
| :--- | :--- | :--- | :--- | :--- |
| `Input` (Composed) | ✅ Done | `packages/ui/src/atoms/Input` | `registery/components/inputs/Input.tsx` | Adopt composition pattern (Field/Icon/Button) |
| `OTPInput` | ✅ Done | `packages/ui/src/molecules/OTPInput` | `registery/components/inputs/OTPInput.tsx` | Copy & Adapt |
| `Stepper` | ✅ Done | `packages/ui/src/molecules/Stepper` | `registery/layouts/Stepper.tsx` | Copy & Adapt |

**Summary**: All components found in `sushi` have been successfully migrated. This repo is a key source for composite patterns.

---

## 2. ShadCN Parity Gaps (Source: Frankenstein Strategy)

These components are present in ShadCN but missing in Tamagui Free. Implementation strategy involves using headless libraries or Tamagui primitives.

| Component | Status | Priority | Implementation Strategy | Complexity |
| :--- | :--- | :--- | :--- | :--- |
| `AspectRatio` | ❌ Pending | Low | Tamagui `Stack` with aspect-ratio prop or simple wrapper. | Low |
| `Collapsible` | ❌ Pending | Medium | Tamagui `Stack` + `AnimateHeight` or Radix Collapsible. | Low |
| `HoverCard` | ❌ Pending | Low | Tamagui `Popover` with hover trigger or Radix HoverCard. | Medium |
| `DropdownMenu` | ❌ Pending | High | Wrap Radix DropdownMenu (Web) / Tamagui Popover/Sheet (Native). | Medium |
| `Spinner` | ✅ Done | Low | Tamagui `Spinner` (Native). Needs ShadCN styling. | Low |
| `Command` | ❌ Pending | High | Headless: `cmdk`. Wrapper: `Dialog`. | Medium |
| `Calendar` | ❌ Pending | High | Headless: `@rehookify/datepicker` or `react-day-picker`. Wrapper: `Sheet`. | High |
| `Carousel` | ❌ Pending | Medium | Headless: `embla-carousel`. | Medium |
| `Menubar` | ❌ Pending | Low | Headless: Radix Menubar. (Desktop only). | High |
| `NavigationMenu`| ❌ Pending | Low | Headless: Radix Navigation Menu. (Desktop only). | High |

---

## 3. Reference: `dohomi/tamagui-kitchen-sink` (Source: Legacy/Rich Components)

Located in: `ivisa-tamagui/referencias/tamagui-kitchen-sink`

Key packages analyzed: `packages/core`, `packages/form`, `packages/date`, `packages/video`, `packages/rich-text`.

| Component | Status | Location in Project | Reference Location | Complexity |
| :--- | :--- | :--- | :--- | :--- |
| `LmButton` | ✅ Done (as `Button`) | `packages/ui/src/atoms/Button` | `packages/core/src/core/form/LmButton.tsx` | Low |
| `LmAlertDialog` | ✅ Done (as `AlertDialog`) | `packages/ui/src/molecules/AlertDialog` | `packages/core/src/core/panels/LmAlertDialog.tsx` | Medium |
| `LmDialog` | ✅ Done (as `Dialog`) | `packages/ui/src/molecules/Dialog` | `packages/core/src/core/panels/LmDialog.tsx` | Medium |
| `LmPopover` | ✅ Done (as `Popover`) | `packages/ui/src/molecules/Popover` | `packages/core/src/core/panels/LmPopover.tsx` | Medium |
| `LmSheet` | ✅ Done (as `Sheet`) | `packages/ui/src/molecules/Sheet.tsx` | `packages/core/src/core/panels/LmSheet.tsx` | High |
| `LmAutocomplete` | ✅ Done (as `Autocomplete`) | `packages/ui/src/organisms/Autocomplete` | `packages/form/src/LmAutocomplete.tsx` | High |
| `LmCheckbox` | ✅ Done (as `Checkbox`) | `packages/ui/src/atoms/Checkbox` | `packages/form/src/LmCheckbox.tsx` | Low |
| `LmInput` | ✅ Done (as `Input`) | `packages/ui/src/atoms/Input` | `packages/form/src/LmInput.tsx` | Low |
| `LmRadioGroup` | ✅ Done (as `RadioGroup`) | `packages/ui/src/molecules/RadioGroup.tsx` | `packages/form/src/LmRadioGroup.tsx` | Medium |
| `LmSelect` | ✅ Done (as `Select`) | `packages/ui/src/molecules/Select` | `packages/form/src/LmSelect.tsx` | High |
| `LmSlider` | ✅ Done (as `Slider`) | `packages/ui/src/atoms/Slider.tsx` | `packages/form/src/LmSlider.tsx` | Medium |
| `LmStarRating` | ✅ Done (as `StarRating`) | `packages/ui/src/molecules/StarRating` | `packages/form/src/LmStarRating.tsx` | Low |
| `LmSwitch` | ✅ Done (as `Switch`) | `packages/ui/src/atoms/Switch.tsx` | `packages/form/src/LmSwitch.tsx` | Low |
| `LmMonthsPicker` | ✅ Done (as `MonthsPicker`) | `packages/ui/src/molecules/MonthsPicker` | `packages/date/src/LmMonthsPicker.tsx` | Medium |
| `LmVideo` | ✅ Done (as `Video`) | `packages/ui/src/organisms/Video` | `packages/video/src/LmVideo.tsx` | High |
| `LmRichText` | ✅ Done (as `RichText`) | `packages/ui/src/organisms/RichText` | `packages/rich-text/src/LmRichText.tsx` | Very High |

---

## 4. Prioritized Conversion Queue

The following components are identified as missing and are prioritized by complexity (Low -> High):

1.  **`LmStarRating`** (Low)
    *   Simple composite using icons.
    *   Good candidate for first automated conversion test.
2.  **`LmAlertDialog`** (Medium)
    *   Wrapper around Tamagui `AlertDialog` (or Radix).
    *   Similar to `Dialog`.
3.  **`LmMonthsPicker`** (Medium)
    *   Date logic involved.
4.  **`LmAutocomplete`** (High)
    *   Complex interaction and state.
5.  **`LmVideo`** (High)
    *   Requires `react-native-video` or `expo-av`.
6.  **`LmRichText`** (Very High)
    *   Uses TipTap/ProseMirror.
