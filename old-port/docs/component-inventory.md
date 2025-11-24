---
title: Component Inventory
status: draft
last_updated: 2025-11-14T21:10:00Z
---

# Component Inventory & Prioritization

This inventory maps the 55 shadcn/ui registry components against Tamagui migration status for VIVI Agent Chat. Priorities reflect domain needs:

- **P0 – Conversation Critical:** Blocks chat flows (input, overlays, feedback)
- **P1 – Interaction Support:** Enhances daily agent workflows
- **P2 – Nice-to-Have / Future:** Optional or low-frequency surfaces

## Summary by Status

| Status | Count | Notes |
| --- | --- | --- |
| ✅ Implemented | 15 | Custom Tamagui code exists in `tamagui-components-final/src/components` |
| ⚠️ Placeholder | 5 | Files exist but still ship placeholder JSX that must be migrated |
| ⛔ Missing | 35 | No Tamagui implementation yet |

Latest shadcn registry export: `exports/components-inventory.json` (generated via `python -m scripts.component_inventory` on 2025-11-14). Use it as the source of truth when reconciling upcoming status changes.

## Detailed Mapping

### P0 – Conversation Critical

| Component | shadcn Path | Tamagui Status | Dependencies | Follow-up |
| --- | --- | --- | --- | --- |
| button | `ui/button.tsx` | ✅ Implemented | `@radix-ui/react-slot` | Add cross-platform tests (web/native) |
| input | `ui/input.tsx` | ✅ Implemented | – | Add `useRef` focus logging + regression tests |
| textarea | `ui/textarea.tsx` | ✅ Implemented | – | Harden resize variants + add RTL coverage |
| checkbox | `ui/checkbox.tsx` | ✅ Implemented | `@radix-ui/react-checkbox` | Add controlled/uncontrolled tests |
| radio | `ui/radio-group.tsx` | ✅ Implemented | `@radix-ui/react-radio-group` | Backfill provider-wrapped tests to catch theme regressions |
| select | `ui/select.tsx` | ✅ Implemented | `@radix-ui/react-select` | Add keyboard-nav tests + native sheet snapshots |
| switch | `ui/switch.tsx` | ⚠️ Placeholder | `@radix-ui/react-switch` | Build Tamagui variant with a11y state logs |
| dialog | `ui/dialog.tsx` | ✅ Implemented | `@radix-ui/react-dialog` | Add focus trap + portal scope tests |
| alert-dialog | `ui/alert-dialog.tsx` | ⛔ Missing | `@radix-ui/react-alert-dialog` | Compose from Dialog once overlay tests exist |
| dropdown-menu | `ui/dropdown-menu.tsx` | ⛔ Missing | `@radix-ui/react-dropdown-menu` | Needed for context actions in chat logs |
| popover | `ui/popover.tsx` | ✅ Implemented | `@radix-ui/react-popover` | Hardening: replace placeholder portal tests |
| tooltip | `ui/tooltip.tsx` | ✅ Implemented | `@radix-ui/react-tooltip` | Add delay + touch-safe variants |
| sheet/drawer | `ui/drawer.tsx` | ⛔ Missing | `vaul` | Required for mobile canned responses |
| toast | `ui/toast.tsx` | ⛔ Missing | `@radix-ui/react-toast` | Provide global feedback channel |

### P1 – Interaction Support

| Component | shadcn Path | Tamagui Status | Dependencies | Notes |
| --- | --- | --- | --- | --- |
| badge | `ui/badge.tsx` | ✅ Implemented | `@radix-ui/react-slot` | Ensure semantic color tokens |
| separator | `ui/separator.tsx` | ✅ Implemented | `@radix-ui/react-separator` | Add orientation tests |
| skeleton | `ui/skeleton.tsx` | ✅ Implemented | – | Add animation variants |
| spinner | `ui/spinner.tsx` | ✅ Implemented | – | Remove RN-only API usage |
| avatar | `ui/avatar.tsx` | ⛔ Missing | `@radix-ui/react-avatar` | Needed for agent/customer identity |
| card | `ui/card.tsx` | ✅ Implemented | – | Add elevation token parity |
| table | `ui/table.tsx` | ⚠️ Placeholder | – | Replace placeholder stub with Tamagui table primitives |
| tabs | `ui/tabs.tsx` | ⚠️ Placeholder | `@radix-ui/react-tabs` | Implement Tamagui-backed tabs + keyboard navigation |
| accordion | `ui/accordion.tsx` | ⚠️ Placeholder | `@radix-ui/react-accordion` | Build real accordion + animation tokens |
| breadcrumb | `ui/breadcrumb.tsx` | ⛔ Missing | – | For navigation handoffs |
| pagination | `ui/pagination.tsx` | ⛔ Missing | – | For transcript browsing |
| command | `ui/command.tsx` | ⛔ Missing | `cmdk` | Required for agent quick actions |
| calendar | `ui/calendar.tsx` | ⛔ Missing | `react-day-picker` | Needed for scheduling |

### P2 – Nice-to-Have / Future

| Component | shadcn Path | Status | Notes |
| --- | --- | --- | --- |
| aspect-ratio | `ui/aspect-ratio.tsx` | ⛔ Missing | Low impact for chat |
| chart | `ui/chart.tsx` | ⛔ Missing | Potential future analytics |
| carousel | `ui/carousel.tsx` | ⛔ Missing | Optional marketing |
| collapsible | `ui/collapsible.tsx` | ⛔ Missing | For advanced settings |
| context-menu | `ui/context-menu.tsx` | ⛔ Missing | Nice for power users |
| progress | `ui/progress.tsx` | ⛔ Missing | Required for uploads later |
| resizable | `ui/resizable.tsx` | ⛔ Missing | Layout flexibility |
| charting utilities | `ui/dashboard.tsx` | ⛔ Missing | Analytics |

## Next Actions

1. Replace placeholders (Textarea, Select, Switch) with production Tamagui implementations.
2. Deliver new compound implementations for Radio, Dropdown Menu, Alert Dialog, Toast with shared context.
3. Produce integration specs & tests per P0 before expanding P1/P2.

This inventory satisfies Phase 0 Task 1 and feeds subsequent spec drafting.
