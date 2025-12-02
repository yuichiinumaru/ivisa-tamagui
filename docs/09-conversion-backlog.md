# 09 – Conversion Backlog & Reference Analysis

This document tracks the component inventory from our reference repositories (`pogiii/sushi` and `dohomi/tamagui-kitchen-sink`) and compares them with our current implementation in `ivisa-tamagui/packages/ui`. It serves as a backlog for components that need to be converted or adapted.

## 1. Reference: `pogiii/sushi`

Located in: `ivisa-tamagui/referencias/sushi`

| Component | Status | Location in Project | Reference Location | Complexity |
| :--- | :--- | :--- | :--- | :--- |
| `Input` | ✅ Done | `packages/ui/src/atoms/Input` | `registery/components/inputs/Input.tsx` | Medium |
| `OTPInput` | ✅ Done | `packages/ui/src/molecules/OTPInput` | `registery/components/inputs/OTPInput.tsx` | Medium |
| `Stepper` | ✅ Done | `packages/ui/src/molecules/Stepper` | `registery/layouts/Stepper.tsx` | High |

**Summary**: All components found in `sushi` have been successfully migrated.

---

## 2. Reference: `dohomi/tamagui-kitchen-sink`

Located in: `ivisa-tamagui/referencias/tamagui-kitchen-sink`

Key packages analyzed: `packages/core`, `packages/form`, `packages/date`, `packages/video`, `packages/rich-text`.

| Component | Status | Location in Project | Reference Location | Complexity |
| :--- | :--- | :--- | :--- | :--- |
| `LmButton` | ✅ Done (as `Button`) | `packages/ui/src/atoms/Button` | `packages/core/src/core/form/LmButton.tsx` | Low |
| `LmAlertDialog` | ❌ Pending | - | `packages/core/src/core/panels/LmAlertDialog.tsx` | Medium |
| `LmDialog` | ✅ Done (as `Dialog`) | `packages/ui/src/molecules/Dialog` | `packages/core/src/core/panels/LmDialog.tsx` | Medium |
| `LmPopover` | ✅ Done (as `Popover`) | `packages/ui/src/molecules/Popover` | `packages/core/src/core/panels/LmPopover.tsx` | Medium |
| `LmSheet` | ✅ Done (as `Sheet`) | `packages/ui/src/molecules/Sheet.tsx` | `packages/core/src/core/panels/LmSheet.tsx` | High |
| `LmAutocomplete` | ❌ Pending | - | `packages/form/src/LmAutocomplete.tsx` | High |
| `LmCheckbox` | ✅ Done (as `Checkbox`) | `packages/ui/src/atoms/Checkbox` | `packages/form/src/LmCheckbox.tsx` | Low |
| `LmInput` | ✅ Done (as `Input`) | `packages/ui/src/atoms/Input` | `packages/form/src/LmInput.tsx` | Low |
| `LmRadioGroup` | ✅ Done (as `RadioGroup`) | `packages/ui/src/molecules/RadioGroup.tsx` | `packages/form/src/LmRadioGroup.tsx` | Medium |
| `LmSelect` | ✅ Done (as `Select`) | `packages/ui/src/molecules/Select` | `packages/form/src/LmSelect.tsx` | High |
| `LmSlider` | ✅ Done (as `Slider`) | `packages/ui/src/atoms/Slider.tsx` | `packages/form/src/LmSlider.tsx` | Medium |
| `LmStarRating` | ❌ Pending | - | `packages/form/src/LmStarRating.tsx` | Low |
| `LmSwitch` | ✅ Done (as `Switch`) | `packages/ui/src/atoms/Switch.tsx` | `packages/form/src/LmSwitch.tsx` | Low |
| `LmMonthsPicker` | ❌ Pending | - | `packages/date/src/LmMonthsPicker.tsx` | Medium |
| `LmVideo` | ❌ Pending | - | `packages/video/src/LmVideo.tsx` | High |
| `LmRichText` | ❌ Pending | - | `packages/rich-text/src/LmRichText.tsx` | Very High |

---

## 3. Prioritized Conversion Queue

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
