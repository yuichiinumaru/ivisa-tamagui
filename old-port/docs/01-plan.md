# 01 – Plan for Shadcn → Tamagui Migration

## Vision & Scope
- Deliver a cross-platform component library enabling to use a Tamagui-based design system that mirrors shadcn/ui ergonomics while preserving accessibility across web and native targets.
- Consolidate insights from shadcn-tamagui research and cloned reference repos (shadcn-ui/ui, taxonomy, founded-labs/react-native-reusables, tamagui) to establish a staged adoption roadmap.

## Guiding Methodologies
- **TDD (Test-Driven Development):** Author failing UI/unit/integration tests before implementing or porting components; ensure Expo + web render snapshots and accessibility assertions.
- **FDD (Feature-Driven Development):** Organize work around user-facing component features (e.g., Dialog, Select) delivering vertical slices with documentation, tests, and logging.
- **SDD (Spec-Driven Development):** Draft explicit specs per component covering UX parity, Tamagui token mapping, logging requirements, and acceptance criteria before code.
- **DDD (Domain-Driven Development):** Treat "Design System" as a bounded context with ubiquitous language (e.g., Primitive, Variant, Token); isolate shared kernel packages for primitives vs. app-specific compositions.

## Key Insights from Research
1. There is no comprehensive shadcn → Tamagui port; React Native Reusables (NativeWind-based) is the closest analogue and informs interaction patterns.
2. Structural gaps stem from HTML vs. React Native differences (text nesting rules, form semantics) and styling paradigm shifts (Tailwind utilities vs. Tamagui tokens/variants).
3. Floating UI relies on Radix portals in shadcn; Tamagui mandates `PortalProvider` scaffolding and careful stacking context management to avoid z-index traps.
4. Compound components in shadcn use React Context; Tamagui alternatives require `createStyledContext` to share state across styled subcomponents.
5. Tamagui excels with compiler-assisted styling and cross-platform performance but enforces design tokens; migration must define a consistent token map that mirrors shadcn aesthetics.

## Architectural Guardrails
1. Establish a Tamagui config mirroring shadcn tokens while remaining RN-compliant (no arbitrary values; map to design tokens).
2. Wrap app root with `TamaguiProvider` + `PortalProvider` to support floating UI; define stacking-context safe layout rules.
3. Adopt `createStyledContext` for compound components to manage shared state without prop drilling.
4. Maintain centralized logging utilities outputting `log-aboutwhat-aaaammdd hhmmss.log` for migration diagnostics (portal mounting, accessibility, performance).
5. Keep documentation synchronized in `/docs` (plan, tasks, architecture notes, changelog) and update per milestone.

## Phase Roadmap
### Phase 0 – Discovery & Spec (Week 0.5)
- Inventory shadcn components required by and prioritize per product needs (DDD ubiquitous language alignment).
- Produce component specs (SDD) detailing behavior, acceptance criteria, Tamagui design tokens, logging hooks, and test matrices.
- Define logging strategy covering migration checkpoints, runtime errors, and accessibility audits; ensure logs follow naming convention.

### Phase 1 – Foundation (Week 1)
- Bootstrap Tamagui config with tokens mapping from shadcn Tailwind palette; document token decisions.
- Integrate Tamagui + PortalProvider into sandbox app (Expo or Next + RNW) with baseline tests verifying provider wiring.
- Scaffold testing infrastructure: Vitest/Testing Library for unit/render tests, Playwright/Detox for integration; create initial failing tests (TDD) for Button primitive baseline.

### Phase 2 – Primitive Layer Migration (Weeks 2-3)
- Implement Buttons, Typography, Stack components using Tamagui variants guided by specs; ensure state/size variants cover shadcn defaults.
- Add logging to component init/render failures with timestamps.
- Write and stabilize TDD suite for primitives across platforms (web snapshot, native snapshot, accessibility roles).
- Document architectural decisions in `docs/03-architecture.md`.

### Phase 3 – Form Controls & Compound Components (Weeks 4-6)
- Port Inputs, Textareas, Checkbox, Radio, Select using `createStyledContext` for shared state.
- Solve platform-specific gaps (e.g., label focus management, placeholder colors) and log deviations.
- Implement floating overlays (Dialog, Popover, Tooltip) ensuring portal scopes and stacking contexts are validated in tests.
- Expand regression tests to cover interactions, logging unexpected focus/portal issues.

### Phase 4 – Integration & App Alignment (Weeks 7-8)
- Integrate migrated components into representative flows; execute FDD-led vertical slices.
- Conduct cross-platform performance checks leveraging Tamagui compiler; log metrics.
- Update docs/04-changelog.md with migration milestones and lessons learned.

### Phase 5 – Hardening & Handoff (Weeks 9-10)
- Perform accessibility audits, finalize documentation, and deliver playbooks for future component additions.
- Prepare knowledge transfer package including specs, tests, logging procedures, and maintenance roadmap.
- Review and close tasks, update docs/02-tasks.md and docs/05-ideas.md with future improvements.

## Success Metrics
- 100% of prioritized shadcn components available in Tamagui variants with passing TDD suites.
- Cross-platform UI parity validated by automated tests and manual review.
- Comprehensive logging enabling traceability of migration issues with aaaammdd hhmmss naming.
- Documentation up-to-date with plan, tasks, architecture, changelog, and ideas.
