# Consciousness Index: Ivisa Tamagui Design System

> **Date**: 2025-05-15 (Estimated based on context)
> **Agent**: Jules
> **Purpose**: Deep analysis and memory synthesis of the repository.

## 1. Core Identity
*   **Name**: Ivisa Tamagui Design System.
*   **Mission**: Production-grade design system using Tamagui + Headless Libraries ("Frankenstein Controlado").
*   **Architecture**: Monorepo (Yarn Workspaces).
    *   `@ivisa/ui` (`packages/ui`): The core library.
    *   `ivisa-expo` (`apps/expo`): Consumer app.
    *   `docs/`: Extensive documentation and "thought" storage.

## 2. Technical Constitution (`AGENTS.md`)
*   **Package Manager**: **Yarn** (Berry). **Strictly Enforced**.
*   **Testing**: **Jest** + React Testing Library + `ts-jest`.
*   **Protocol Zero**: `CONTINUITY.md` is the source of truth (found to be duplicate of AGENTS.md, needs fix).
*   **Law of External Memory**: Use `docs/thoughts/` for deep analysis.
*   **Security**: Never `rm -rf`, always `_archive/`.

## 3. Knowledge Graph
### A. Theme & Visuals
*   **Tokens**: Rio Brand colors, Ivisa Legacy mappings.
*   **Fonts**: Cera Pro (Weights 400, 500, 900).
*   **Themes**: `claro` (light) / `escuro` (dark).

### B. Component Library (`packages/ui/src`)
*   **Atoms**: `Button`, `Alert` (Compound), `Typography`. Functional wrappers around `styled()`.
*   **Molecules**: `Card` (Smart/Dumb), `DatePicker` (Composition), `Select` (Custom adaptation).
*   **Organisms**: `DataTable` (TanStack Table), `Sidebar` (Responsive Sheet), `Form` (React Hook Form Context).

### C. Dependencies
*   **Core**: React 18, React Native Web.
*   **Headless**: `@radix-ui/*`, `react-hook-form`, `zod`.
*   **Viz**: `victory-native`, `recharts`.

### D. Testing & CI
*   **Tests**: Unit tests colocated (`*.test.tsx`).
*   **CI**: `.github/workflows/ci.yml` uses **PNPM**, which conflicts with the Yarn mandate.
*   **Visuals**: `scripts/visual-check.js` (Playwright) + `tests/visual-checks` (Reference images).

## 4. Anomalies & Action Items
1.  **CI Conflict**: CI uses `pnpm`, but strict rules say `yarn`. Needs resolution.
2.  **Continuity File**: `CONTINUITY.md` appears to contain the content of `AGENTS.md`. Needs reset.
3.  **References**: `tree.md` refers to `referencias` (Shadcn/Sushi), but filesystem has `references` (Magic MCP). `tree.md` is out of sync.

## 5. Synthesis
The project is a mature, well-structured design system with strict architectural guidelines. It follows Atomic Design and leverages Tamagui's compiler/runtime. The documentation is comprehensive, though some metadata files (`tree.md`) and CI configs are drifting from the "Constitution". Future agents must prioritize reconciling the Package Manager conflict and maintaining the `CONTINUITY.md` state.
