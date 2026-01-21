# Exploration Phase 1: High-level Overview

## Project Identity
- **Name:** Ivisa Tamagui Design System
- **Goal:** Production-grade design system using Tamagui + Headless Libraries.
- **Strategy:** "Frankenstein Controlado" (Tamagui Core + Headless Logic + Bento Layout + Shadcn/Pink Tokens).

## Architecture
- **Monorepo:** `ivisa-tamagui` (workspace) + `docs`.
- **Atomic Design:** `atoms`, `molecules`, `organisms`.
- **Package Manager:** Yarn (Berry).
- **Testing:** Jest.
- **Visuals:** Storybook, Tamagui.

## Protocols
- **Protocol Zero:** `CONTINUITY.md` is the source of truth for session state.
- **Law of External Memory:** Use `docs/thoughts/` for analysis.
- **Law of Evidence:** TDD is mandatory.
- **Security:** Never delete, archive instead.

## Key Files
- `README.md`: Overview.
- `AGENTS.md`: Constitution and rules.
- `CONTINUITY.md`: Session state.
- `ivisa-tamagui/`: Main package directory.
