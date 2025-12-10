# 04 – Changelog

## [Resurrection Era] - 2024-05-24

### 💀 The Great Purge (Governance Repair)
- **Governance:** Enforced strict `docs/00-06` hierarchy.
- **Constitution:** Rewrote `AGENTS.md` to be specific and authoritarian.
- **Law:** Created `docs/06-rules.md` to outlaw bad practices (no `any`, no zombies).
- **Cleanup:** Archived zombie documentation and root clutter.

### 💀 Autopsy Findings (Audit Report)
- **Critical:** Identified `as any` abuse in `Textarea.tsx`.
- **High:** Identified hardcoded z-indices and strings.
- **Plan:** Tasks created to address all findings in `docs/02-tasks.md`.

### 💀 Code Purification (Resurrection Phase 3.2)
- **Rite 1 (Textarea):** Removed `as any` and fixed type definition in `Textarea.tsx`.
- **Rite 2 (Select):** Extracted magic numbers and fixed icons in `Select.tsx`.
- **Rite 3 (DataTable):** Wrapped performance warning in `process.env.NODE_ENV === 'development'`.
- **Rite 4 (App):** Added i18n placeholders for hardcoded strings in `App.tsx`.
- **Rite 5 (Hygiene):** Purged zombie comments and warnings from `Button.tsx` and `DatePicker.tsx`.

## [Deployment Fix] - 2025-02-12
- **Vercel:** Created `vercel.json` to fix hanging build (Storybook dev server) and set correct output directory.
- **Cleanup:** Removed forbidden `pnpm-workspace.yaml`.
