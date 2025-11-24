# Automation Plan – Component Mapping Support Scripts

## Objectives
- Accelerate shadcn → Tamagui mapping by automating data extraction, gap detection, and spec scaffolding.
- Maintain adherence to TDD, logging standards, and DDD terminology while producing reusable tooling.

## Script Suite Overview
| Script | Description | Inputs | Outputs | Logging |
| --- | --- | --- | --- | --- |
| `scripts/component_inventory.py` | Parse shadcn registry metadata to produce normalized component list with dependencies. | Registry root path (default: `reference-repos/ui/apps/v4/registry/new-york-v4/ui/_registry.ts`). | JSON/CSV summary at `exports/components-inventory.json`. | `log-component-inventory-aaaammdd hhmmss.log` capturing source files processed and item counts. |
| `scripts/tamagui_probe.py` (Task S1) | Inspect Tamagui repo to detect equivalent primitives and variant coverage; flag missing components. | Tamagui repo path (default: `reference-repos/tamagui`). | Report `exports/tamagui-component-coverage.json` with status per component. | `log-tamagui-probe-aaaammdd hhmmss.log` with module scans and resolution notes. |
| `scripts/spec_skeleton.py` (Task S2) | Generate component spec markdown files using template for prioritized items (Phase 0 output). | Component list JSON (`exports/components-inventory.json`), template path (`docs/component-spec-template.md`), spec aggregate (`docs/component-specs.md`). | Markdown files under `specs/<component>.md` with component names injected + spec index table refresh in `docs/component-specs.md`. | `log-spec-skeleton-aaaammdd hhmmss.log` recording components scaffolded. Run via `conda run -n 12 python -m scripts.spec_skeleton --help`. |
| `scripts/token_mapper.py` (Task S3) | Map shadcn Tailwind tokens to Tamagui tokens; highlight unmapped values. Implemented 2025-11-14 with pytest fixtures/tests. | Tailwind config (CLI `--tailwind-config`, defaults to JSON), Tamagui config (CLI `--tamagui-config`). | Diff report `exports/token-mapping.csv` + status counts. | `log-token-mapper-aaaammdd hhmmss.log` with unresolved tokens list. |
| `scripts/agent_orchestrator.py` (Task S4) | Wrap automation scripts with task queue + logging (no longer tied to Agno); enforce rate limits and emit structured run reports documented in `docs/automation-plan.md` + `communication-protocol.md`. | Task definition YAML/JSON, rate limiter config. | `exports/agent-run-<timestamp>.json` + logs per worker. | `log-agent-orchestrator-aaaammdd hhmmss.log` with queue events + metrics. |

## Development Methodology
1. **TDD First:**
   - Author tests under `tests/` using pytest (via `conda run -n 12 python -m pytest`).
   - Mock filesystem inputs where practical; include golden fixtures for registry snippets.
2. **Logging:**
   - Use shared logger utility writing to `/logs/migration/shadcn-tamagui/<script>/` with naming convention `log-<script>-aaaammdd hhmmss.log`. (Component inventory, Tamagui probe, spec skeleton, and token mapper all follow this now.)
3. **Configuration:**
   - CLI args using `argparse` with defaults pointing to reference repos.
   - Allow `--output-format` (`json`, `csv`, `md`).
4. **Documentation:**
   - Each script includes README snippet appended to `docs/03-architecture.md` (Tooling section) after implementation.
   - Update `docs/04-changelog.md` upon release and add future enhancements to `docs/05-ideas.md`.

## Task Integration (docs/02-tasks.md)
- Add Phase 0 tasks for automations: requirements gathering, test authoring, script implementation, logging verification, documentation.
- Schedule script work alongside component mapping discovery to keep deliverables synchronized.

## Finalized Automation Requirements

### Component Inventory CLI
- **Inputs:** registry path, optional filters, output format, verbosity.
- **Processing:** parse TypeScript array, normalize JSON records, prune Tailwind noise.
- **Outputs:** JSON/CSV plus log summary (count, missing deps, elapsed time).
- **Acceptance Criteria:** listed in `docs/component-inventory-requirements.md`; ensure log file + non-zero exit on failure.
- **Tests:** fixture parsing, filter handling, error paths.

### Shared Logging Utility (`scripts/logger_utils.py`)
- **Purpose:** provide single UTC timestamped logger for all scripts/agents.
- **Key Behaviors:**
  - Honors `MIGRATION_LOG_ROOT` env var with default fallback.
  - Prevents duplicate handlers per `(area, timestamp)`.
  - Supports optional verbose Console handler.
- **Outputs:** log files under `<root>/<area>/log-<area>-aaaammdd hhmmss.log`.
- **Acceptance Criteria:** documented in `docs/logging-utility-requirements.md`; pytest coverage located in `tests/test_logger_utils.py`.
- **Integration:** agents must import canonical module; duplicated copies must remain in sync (tracked as follow-up).

### Agent Integration (Migration Assistant / Worker Agents)
- **Scope:** orchestrators + worker agents in `scripts/` leverage automation pipeline to generate components, specs, and reports.
- **Requirements:**
  - Adopt shared logger for telemetry.
  - Respect Gemini rate limits using rotation utilities (`00-template/api_key_rotation.py`).
  - Write execution summaries to `.agents-*` directories and final reports under `migration-output/` or `tamagui-components-final/infrastructure`.
  - Provide CLI entrypoints for orchestration (`scripts/intelligent_orchestrator.py`, `scripts/parallel_agents.py`).
- **Acceptance Criteria:**
  - Agents exit non-zero on failure, produce report JSON.
  - Logs stored in `/logs/migration/shadcn-tamagui/agents/`.
  - Invocation flow captured in this document plus `communication-protocol.md`; Migration Assistant README will reference both.
- **Testing:** smoke tests verifying agent command wiring (mocked subprocess) and log creation.

## CI Command Reference
- `conda run -n 12 python -m pytest`
- `conda run -n 12 python scripts/component_inventory.py --registry reference-repos/ui/apps/v4/registry/new-york-v4/ui/_registry.ts --output exports/components-inventory.json`
