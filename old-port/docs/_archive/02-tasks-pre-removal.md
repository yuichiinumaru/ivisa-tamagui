# 02 – Tasks for Shadcn → Tamagui Migration

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Tags: `TDD`, `FDD`, `SDD`, `DDD`, `LOG`, `DOC`, `RLM` (rate-limit management)
- Every deliverable must emit logs named `log-aboutwhat-aaaammdd hhmmss.log`

## Phase 0 – Discovery & Spec (Week 0.5)
1 - [x] Map shadcn components used/needed by and prioritize per domain context (DDD, SDD, DOC)
  - [x] Inventory refreshed in `docs/component-inventory.md` (2025-11-14) and export regenerated via `python -m scripts.component_inventory` → `exports/components-inventory.json`.
  - [x] Placeholder vs implemented counts synced with latest Tamagui code audit (Radio/Select/Textarea now ✅; Accordion/Tabs/Table flagged ⚠️).
2 - [x] Draft component specs outlining UX parity, Tamagui token mapping, acceptance criteria, and initial failing tests (SDD, TDD, DOC)
  - [x] Specs for Switch, Slider, Dropdown, Accordion, Tabs, Table captured in `docs/component-specs.md` with acceptance criteria + TDD backlog (2025-11-14).
3 - [x] Define centralized logging strategy, file naming, and storage locations for migration telemetry (LOG, DOC, DDD)
  - [x] Logging schema, metrics workflow, and implementation checklist documented in `docs/logging-strategy.md` (Sections 7–9).

## Phase 1 – Foundation (Week 1)
4 - [ ] Integrate `TamaguiProvider` + `PortalProvider` into sandbox app with smoke tests for provider wiring (TDD, FDD)
  - [ ] 4a – Verify `AppProviders` wraps both `src/main.tsx` and native entry points; log proof in `docs/03-architecture.md`.
  - [ ] 4b – Add `tests/web/providers.smoke.spec.tsx` covering default + custom themes.
  - [ ] 4c – Add Expo/React Native smoke test (can be snapshot-based) to `tests/native/`.
  - [ ] 4d – Document run instructions + known caveats in `tamagui-components-final/README.md` for quick onboarding.
  - Suggested owner: **Sub-agent – Providers QA** (needs Vitest + Expo CLI).
5 - [ ] Establish testing toolchain (Vitest/Testing Library + Expo/Playwright/Detox) and author baseline failing tests for Button primitive (TDD)
  - [ ] 5a – Confirm `pnpm vitest --run` + `pnpm expo test` commands documented and green (minus intentional fails) in README.
  - [ ] 5b – Author Button smoke tests for hover/focus/token usage on web (Vitest) and native (Detox placeholder acceptable).
  - [ ] 5c – Stand up Playwright smoke flow for gallery to ensure cross-browser viability (even if skipped in CI initially).
  - Suggested owner: **Sub-agent – Tooling Lead** (focus on test harness + docs).
6 - [~] Resolve Vitest "Missing theme" error in the component test environment and document remediation steps (TDD, DOC)
  - [x] 6a – Add `renderWithTamaguiProviders` helper in `vitest.setup.tsx` (auto-wraps `AppProviders`).
  - [x] 6b – Refactor web + native specs (Button, Radio, Select, Stack, Gallery, Popover, Tooltip) to use the helper. ✅ Completed via shared helper + new `tests/utils/render-native.tsx` to cover React Native suites (see commits 2025-11-14 21:40 UTC); all affected specs now import from the helper instead of manual `AppProviders` wiring.
  - [x] 6c – Update/accept snapshots only after verifying visual diffs, then document in `docs/04-changelog.md`. ✅ Verified with `pnpm --filter @vivi/tamagui-components-complete vitest --run` (2025-11-14) and logged helper rollout in `docs/04-changelog.md`.
  - [x] 6d – Capture remediation steps + helper usage guide in `docs/02-tasks.md` + `tamagui-components-final/README.md`. ✅ README "Testing helpers" section now explains how to consume `renderWithTamaguiProviders` on web/native; this entry captures the task summary.
  - Suggested owner: **Sub-agent – Test Harness**.

## Phase 1b – Automation & Agent Enablement (Week 1-2)
7 - [ ] Deduplicate logging utilities so scripts and infrastructure share a single source of truth (LOG)
  - [ ] 7a – Inventory every script/agent importing `logger_utils.get_logger` and list deltas.
  - [ ] 7b – Extract shared formatter + sink config into `logger_utils` (no per-script duplication).
  - [ ] 7c – Add regression tests + fixtures for new config paths.
  - [ ] 7d – Update `docs/logging-strategy.md` + `automation-plan.md` with rollout steps.
  - Suggested owner: **Sub-agent – Logging Infra**.
8 - [ ] Integrate token cost estimates per agent task into the rate limiter safeguards (RLM)
  - [ ] 8a – Extend `scripts/rate_limiter.py` to accept per-task cost metadata.
  - [ ] 8b – Wire Migration Assistant + WebAppTester to emit/consume costs.
  - [ ] 8c – Document override knobs + examples in `AGENTS.md`.
  - Suggested owner: **Sub-agent – Rate Limit Steward**.
9 - [ ] Emit structured agent token usage metrics on every run to support rate-limit monitoring (LOG, RLM)
  - [ ] 9a – Define JSON schema aligned with `docs/logging-strategy.md` Section 8.
  - [ ] 9b – Implement log emission in each agent CLI.
  - [ ] 9c – Add CI check (or script) verifying metric presence per run.
  - Suggested owner: **Sub-agent – Telemetry Ops**.

### Automation Script Backlog (Phase 1b/2 overlap)
- [x] **S1 – `scripts/tamagui_probe.py` implementation** (DDD, SDD)
  - Detect implemented Tamagui primitives, flag gaps vs. `docs/component-inventory.md`, emit `exports/tamagui-component-coverage.json`.
  - Requires fixture plan + pytest coverage; coordinate with Providers QA for repo paths.
  - Owner: **Sub-agent – Automation Probe**.
  - Notes: Probe script + pytest suite landed (2025-11-14); first report generated via `conda run -n 12 python -m scripts.tamagui_probe` producing 19/55 implemented snapshot in `exports/tamagui-component-coverage.json`.
- [~] **S2 – `scripts/spec_skeleton.py` generator** (SDD, DOC)
  - [x] Consume inventory JSON + `docs/component-spec-template.md` to scaffold missing specs under `specs/<component>.md`.
  - [x] Append summary logs and update `docs/component-specs.md` index automatically.
  - [x] Document CLI usage + changelog entry (README snippet + `docs/04-changelog.md`).
  - [ ] Extend CLI to optionally inject token mapping data once `exports/token-mapping.csv` ships (depends on Task S3).
  - Owner: **Sub-agent – Spec Scribe**.
- [x] **S3 – `scripts/token_mapper.py`** (SDD, LOG)
  - Map Tailwind tokens to Tamagui tokens, produce `exports/token-mapping.csv`, highlight unmapped values.
  - Integrate with `tamagui.config.ts` updates + add regression tests for diffing.
  - Owner: **Sub-agent – Token Cartographer**.
  - Notes: Script + fixtures/tests landed (2025-11-14). First CSV generated via `conda run -n 12 python -m scripts.token_mapper --tailwind-config tests/fixtures/tailwind_tokens.json --tamagui-config tests/fixtures/tamagui_tokens.json --output exports/token-mapping.csv`.
- [ ] **S4 – `scripts/agent_orchestrator.py` (aka parallel agents runner)** (RLM, LOG)
  - Wrap existing automation scripts with task queue + logging (leveraging Tasks 7-9), producing JSON reports per run.
  - Document CLI usage + rate-limit hooks directly in `docs/automation-plan.md` and `communication-protocol.md`; Agno-specific docs are no longer required.
  - Owner: **Sub-agent – Automation Conductor**.

## Phase 2 – Primitive Layer Migration (Weeks 2-3)
10 - [ ] Backfill cross-platform regression tests for Button, Stack, Typography, and Providers across web/native targets in CI (TDD)
11 - [ ] Audit component logging hooks to ensure init/render failures emit ISO 8601 timestamps across platforms (LOG)

## Phase 3 – Form Controls & Compound Components (Weeks 4-6)
12 - [ ] Finalize RadioGroup shared context usage and add accessibility-focused keyboard navigation tests (TDD, FDD)
  - [ ] 12a – Align Radio primitives with spec in `docs/component-specs.md` (context, focus ring, logging).
  - [ ] 12b – Author keyboard nav + screen-reader tests (web & native snapshots acceptable for now).
  - [ ] 12c – Update gallery demo + README.
  - Suggested owner: **Sub-agent – Radio UX** (unblocked once Task 6c is complete).
13 - [ ] Rebuild Select with shared state context, portal-safe dropdown, and parity tests across platforms (TDD, FDD)
  - [ ] 13a – Implement shared context provider for Select trigger/content.
  - [ ] 13b – Add portal-safe dropdown using Tamagui Portal scopes.
  - [ ] 13c – Add comprehensive tests (keyboard, typeahead, logging on errors).
  - Suggested owner: **Sub-agent – Select Squad** (requires Task 6c completion + Task 15 portal work).
14 - [ ] Resolve platform-specific gaps (focus management, placeholder color parity) for form controls and log deviations (LOG)
  - [ ] 14a – Audit Input/Textarea/Switch/Slider for parity vs specs.
  - [ ] 14b – File logging deviations + remediation steps in `docs/logging-strategy.md` appendix.
  - Suggested owner: **Sub-agent – Form QA**.
15 - [ ] Upgrade Popover with portal scope coverage and overlay error logging (TDD, FDD, LOG)
  - [ ] 15a – Ensure triggers are accessible (button role + label) and update tests accordingly.
  - [ ] 15b – Cover portal scope errors with structured logging + snapshots.
  - [ ] 15c – Sync checklist with Tooltip task to share helpers.
  - Suggested owner: **Sub-agent – Overlay A**.
16 - [ ] Upgrade Tooltip with portal scope coverage and overlay error logging (TDD, FDD, LOG)
  - [ ] 16a – Migrate tooltip content to share overlay utility from Task 15.
  - [ ] 16b – Add hover/focus tests + log coverage.
  - Suggested owner: **Sub-agent – Overlay B**.
17 - [ ] Expand regression tests to cover form control interactions and overlay focus management while capturing structured logs on failures (TDD, LOG)
  - [ ] 17a – Build reusable RTL helpers for keyboard + pointer scenarios.
  - [ ] 17b – Ensure every failing test emits Tamagui log snippet for triage.
  - Suggested owner: **Sub-agent – Regression Harness** (blocked on 6c/15a).
  - [ ] Blocked on Task 6: waiting for shared Tamagui test helper to stabilize theme context before broadening coverage.

## Phase 4 – Integration & App Alignment (Weeks 7-8)
18 - [ ] Refresh integration demos after overlay upgrades and document performance observations with Tamagui compiler metrics (FDD, LOG)

## Phase 5 – Hardening & Handoff (Weeks 9-10)
19 - [~] Perform accessibility audits, finalize documentation, and deliver playbooks for future component additions (DOC)
20 - [ ] Prepare knowledge transfer package including specs, tests, logging procedures, and maintenance roadmap (DOC)
21 - [ ] Review and close tasks, update `docs/02-tasks.md` and `docs/05-ideas.md` with future improvements (DOC)

## Cross-Cutting Documentation & Ops
22 - [ ] Rewrite `tamagui-components-final/README.md` to reflect the manual TDD workflow and outstanding blockers (DOC)
23 - [ ] Add `.env.example` with placeholder keys and update setup documentation accordingly (DOC)
24 - [ ] Update `docs/04-changelog.md` as Vitest fixes and overlay milestones land to maintain historical traceability (DOC)

## Completed (Chronological)

### Phase 0 – Discovery & Spec
25 - [x] Socialize component inventory and spec template with stakeholders for approval (DDD, DOC)
26 - [x] Capture detailed automation requirements (component inventory, logging utility, agent integration) (DOC)

### Phase 1 – Foundation
27 - [x] Implement Tamagui config mirroring shadcn tokens, documenting token rationale (SDD, DDD, DOC)
28 - [x] Standardize JS tooling on pnpm and archive Gemini experiment assets (DOC)
  - [x] Removed legacy Gemini CLI artifacts and regenerated `pnpm-lock.yaml`
  - [x] Cleared temporary tree snapshots from repository root
29 - [x] Create initial logging utilities conforming to naming convention and write to `/logs/migration/shadcn-tamagui` (LOG, TDD)

### Phase 1b – Automation & Agent Enablement
30 - [x] Implement shared `logger_utils` module across automation scripts and agents, ensuring UTC timestamps (LOG)
31 - [x] Guard automation scripts and agents with Gemini 2.5 free-tier rate limits per API key (RLM, LOG)
  - [x] Introduced reusable `RateLimiter` with env-driven defaults + tests
32 - [x] Scaffold Migration Assistant agent (Agno) with prompt, tooling, and key-rotation integration (TDD, DOC, RLM)
  - [x] Fix: replace dry-run stub with real Agno workflow invocation
33 - [x] Document agent usage, env vars, and logging expectations in `/docs` and `README` (DOC)
  - [x] Fix: sync documentation updates to README once agent solidifies
34 - [x] Add pytest coverage for new automation utilities and integrate into CI command list (TDD)
  - [x] Coverage in place for `logger_utils`, `rate_limiter`, migration assistant scaffold
  - [x] Documented CI command list in `docs/automation-plan.md`

### Phase 2 – Primitive Layer Migration
35 - [x] Implement Buttons, Typography, Stack components using Tamagui variants guided by specs; ensure state/size variants cover shadcn defaults (TDD, FDD)
  - [x] Button variants implemented in `tamagui-components-final`
  - [x] Fix: add Typography primitives with Tamagui variant coverage
  - [x] Fix: implement Stack primitives with shared spacing tokens
36 - [x] Add logging to component init/render failures with timestamps (LOG)
37 - [x] Write and stabilize TDD suite for primitives across platforms (web snapshot, native snapshot, accessibility roles) (TDD)
  - [x] Added Vitest coverage for Button, Stack, Typography, Providers, Gallery
  - [x] Fix: extend tests to native/expo snapshots and accessibility roles
38 - [x] Document architectural decisions in `docs/03-architecture.md` (DOC)
  - [x] Added Tamagui config, provider composition, and gallery reference sections
  - [x] Captured typography + stack primitives overview

### Phase 3 – Form Controls & Compound Components
39 - [x] Input and Checkbox migrated with Tamagui styling (TDD, FDD)
40 - [x] Fix: replace Textarea placeholder with production-ready variant (TDD, FDD)
41 - [x] Added Vitest snapshots + invalid-state coverage for Textarea (TDD)
42 - [x] Dialog ported with portal usage (TDD, FDD)

### Phase 4 – Integration & App Alignment
43 - [x] Integrate migrated components into representative flows; execute FDD-led vertical slices (FDD)
44 - [x] Conduct cross-platform performance checks leveraging Tamagui compiler; log metrics (LOG)
45 - [x] Update `docs/04-changelog.md` with migration milestones and lessons learned (DOC)
