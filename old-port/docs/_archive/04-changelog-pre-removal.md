# 04 – Changelog (VIVI Agent Chat: shadcn → Tamagui)

All notable changes to this migration workspace will be documented here. Format loosely follows Keep a Changelog.

## [Unreleased]
- Added `scripts/spec_skeleton.py` with pytest coverage (`tests/test_spec_skeleton.py`) to scaffold spec markdown files from `exports/components-inventory.json`, update the spec index, and emit `log-spec-skeleton-*` entries (2025-11-14). CLI usage now documented in `tamagui-components-final/README.md` (Spec skeleton CLI section).
- Added `scripts/token_mapper.py` with fixtures (`tests/fixtures/tailwind_tokens.json`, `tests/fixtures/tamagui_tokens.json`) and pytest coverage (`tests/test_token_mapper.py`) to generate `exports/token-mapping.csv` plus `log-token-mapper-*` records. Initial CSV created via `conda run -n 12 python -m scripts.token_mapper --tailwind-config tests/fixtures/tailwind_tokens.json --tamagui-config tests/fixtures/tamagui_tokens.json --output exports/token-mapping.csv` (2025-11-14).
- Added `scripts/tamagui_probe.py` with pytest coverage (`tests/test_tamagui_probe.py`) and generated the first `exports/tamagui-component-coverage.json` snapshot (19 implemented / 36 missing / 6 extra components) via `conda run -n 12 python -m scripts.tamagui_probe` (2025-11-14).
- Phase 4: Created integration demos for flows (chat interface, settings) using migrated Tamagui components.
- Added FlowDemos.tsx to gallery with interactive chat and settings examples.
- Logged integration metrics and performance notes leveraging Tamagui compiler for cross-platform optimization.
- Align Agno-based Migration Assistant with logger utility and RLM guardrails.
- Implement component inventory parser, token mapper, spec skeleton generator, Tamagui probe.
- Added Migration Assistant agent entrypoint with shared logging + key rotation wiring.
- Added pytest coverage for migration assistant builder, task execution, and CLI logging.
- Updated Tamagui config to mirror shadcn HSL color tokens, added popover/card surface tokens, and added Vitest validation tests.
- Synced `tests/config.test.ts` assertions with the new `primaryHover` / `secondaryHover` tokens to keep Tamagui configuration checks green.
- Removed legacy Gemini CLI experiment assets and regenerated `pnpm-lock.yaml` to standardize package management tooling.
- Simplified `Select` UI component to re-export Tamagui primitives directly, removing the lucide icon dependency; follow-up snapshot/test assertions pending for combobox trigger semantics.
- Documented automation backlog tasks (S1–S4) across `docs/02-tasks.md` and `docs/automation-plan.md`, clarifying ownership for tamagui probe, spec generator, token mapper, and agent orchestrator scripts.
- Noted that Task S4 (agent orchestrator) will document CLI usage directly in `docs/automation-plan.md` / `communication-protocol.md`, dropping the previous dependency on `docs/agno-integration-plan.md`.
- Removed stale references to `docs/agno-integration-plan.md` across the repo; all agent/orchestrator guidance now lives in `docs/automation-plan.md` and `communication-protocol.md`.
- Added shared `renderWithTamaguiProviders` helpers for both Vitest (web) and React Native Testing Library (native) suites, refactoring Button, Radio, Select, Stack, Gallery, Popover, and Tooltip specs to rely on the wrapper and re-accepting snapshots after running `pnpm --filter @vivi/tamagui-components-complete vitest --run`.

## [0.2.1] – 2025-11-14
- Added
  - Updated `docs/component-inventory.md` with refreshed counts (15 ✅ / 5 ⚠️ / 35 ⛔) after auditing Tamagui sources; regenerated `exports/components-inventory.json` via `python -m scripts.component_inventory`.
  - Extended `docs/component-specs.md` with specs for Switch, Slider, Dropdown, Accordion, Tabs, and Table covering UX parity, tokens, acceptance criteria, and TDD backlog.
  - Expanded `docs/logging-strategy.md` sections 7–9 describing the centralized telemetry schema, metrics/alert workflow, and implementation checklist.

## [0.2.0] – 2025-11-10
- Added
  - `docs/component-inventory.md`: prioritized mapping of 55 shadcn components with status tiers.
  - `docs/component-specs.md`: Phase 0 spec drafts (Button, Input, Textarea, Select, Switch, Dialog, Dropdown Menu, Tooltip, Toast).
  - `docs/stakeholder-summary.md`: Phase 0 briefing for product/design/engineering sign-off.
  - `scripts/rate_limiter.py`: Gemini 2.5-aware rate limiter with RPM/TPM/RPD enforcement.
  - `scripts/migration_assistant_agent.py`: Migration Assistant scaffold integrating logging, key rotation, and rate limiting.
  - `tamagui-components-final/src/tamagui.config.ts`, `themes.ts`, `providers.tsx`: Tamagui token configuration and provider composition.
  - Vitest harness (`vitest.config.ts`, `vitest.setup.ts`, `tests/`) with baseline Button/provider tests.
  - `tamagui-components-final/src/gallery/*`: Tamagui migration gallery catalog.
  - `components/ui/Typography.tsx`, `components/ui/Stack.tsx`, `components/ui/Textarea.tsx`: Typography, Stack, and Textarea primitives with variants and logging wrappers.
  - New pytest coverage for rate limiter parity and migration assistant dry-run.
- Changed
  - `docs/logging-strategy.md`: clarified retention pipeline, CI bundling, UTC usage.
  - `docs/automation-plan.md`: detailed automation requirements snapshot + CI command list.
  - `tamagui-components-final/src/index.ts`: exported config/providers/themes, primitives, and gallery utilities.
  - `docs/03-architecture.md`: documented Tamagui config + provider composition.
  - `tamagui-components-final/src/index.ts`: exported config/providers/themes alongside components.
  - Extended pytest suite to cover logger duplication checks, rate limiter behavior, and migration assistant scaffold.
  - Introduced JSDOM-based Vitest config for component smoke tests (Button, providers, gallery, typography, stack, textarea); npm install enabled with legacy peer deps and React DOM/React Native Web support.
  - Introduced JSDOM-based Vitest config for component smoke tests (Button, providers, gallery, typography, stack).
  - Introduced JSDOM-based Vitest config for component smoke tests (Button).

## [0.1.0] – 2025-11-07
- Added
  - docs/01-plan.md: Vision, scope, methodologies (TDD/FDD/SDD/DDD), phased roadmap.
  - docs/02-tasks.md: Backlog with statuses and tags. Introduced `RLM` tag for rate-limit management.
  - docs/03-architecture.md: Design system context, integration surfaces, prioritized inventory.
  - docs/component-spec-template.md: Spec template with tokens, a11y, logging, tests, and checklist.
  - docs/automation-plan.md: Script suite (component inventory, token mapper, spec skeleton, probe).
  - docs/component-inventory-requirements.md: Inputs/outputs, schema, acceptance criteria, TDD plan.
  - docs/logging-utility-requirements.md: Requirements for shared logger.
  - docs/logging-strategy.md: Log taxonomy, directory layout, retention, CI artifacts.
  - docs/agno-integration-plan.md: How to use/extend Agno agents for migration support.
  - scripts/logger_utils.py: Shared logger with UTC timestamps, env-configurable root, duplicate-handler prevention.
  - tests/test_logger_utils.py: Coverage for creation, idempotence, invalid inputs.
  - tests/fixtures/registry_minimal.ts: Fixture for registry parsing.
  - tests/test_component_inventory.py & scripts/component_inventory.py (stub): TDD scaffolding.
- Changed
  - docs/02-tasks.md: Added “Phase 1b – Automation & Agent Enablement” and logging/agent work.
- Fixed
  - Logger root resolution and timestamp handling; all logger tests passing.
- Notes
  - Logging file naming: `log-<area>-aaaammdd hhmmss.log` (UTC). Root can be set via `MIGRATION_LOG_ROOT`.
  - Rate limits (per API key): Gemini 2.5 Pro RPM=2/TPM=125k/RPD=50; Gemini 2.5 Flash RPM=10/TPM=250k/RPD=250.
  - Existing Agno QA agent lives under `00-template/` with key rotation utilities.

[Unreleased]: ./04-changelog.md
[0.1.0]: ./04-changelog.md#010--2025-11-07
