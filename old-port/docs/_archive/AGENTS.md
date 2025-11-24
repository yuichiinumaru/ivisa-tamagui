# AGENTS 

## Shadcn → Tamagui Migration

This workspace drives the migration from shadcn/ui to Tamagui for VIVI Agent Chat, supported by automation scripts and Agno agents. It follows TDD, FDD, SDD, and DDD, with strict logging and Gemini free-tier rate-limit management.

## What this project is about
- Migrate shadcn components to Tamagui with platform parity (web/native).
- Automate tedious steps (component inventory, spec scaffolding, token mapping).
- Use agents to accelerate work while respecting rate limits per API key.

## Where things live
- **/docs** – Project documentation
  - `01-plan.md` – Why & how: vision, scope, methodologies, roadmap
  - `02-tasks.md` – Task board by phase (tags: TDD, FDD, SDD, DDD, LOG, RLM)
  - `03-architecture.md` – Design system context, providers, prioritized inventory
  - `04-changelog.md` – Notable changes for this workspace
  - `automation-plan.md` – Script suite overview and methodology
  - `component-inventory-requirements.md` – Inventory script spec (inputs/outputs, tests)
  - `logging-utility-requirements.md` – Shared logger requirements
  - `logging-strategy.md` – Log taxonomy, storage, retention, CI artifacts
  - `communication-protocol.md` – Live agent status board and manager guidance
- **/scripts** – Utilities and automation
  - `logger_utils.py` – Shared logger with UTC timestamps and env-configurable root
  - `component_inventory.py` – TDD stub for shadcn registry parsing
- **/tests** – Pytest suites and fixtures
  - `test_logger_utils.py` – Logger behavior and idempotence tests
  - `test_component_inventory.py` – TDD scaffold for inventory script
  - `fixtures/registry_minimal.ts` – Minimal shadcn registry sample
- **/00-template** – Agno agent assets (ready-to-run QA agent)
  - `agente_tester_v2.py` – QA agent: Agno v2 + Gemini 2.5 + Playwright MCP + Cognee (memory)
  - `api_key_rotation.py`, `cognee_api_rotation.py` – API key rotation utilities
  - `templates/*.md` – System prompt templates (governance/specs/architecture/ops)
  - `agno-docs.md`, `README.md` – Vendor docs and usage notes
- **/reference-repos** – Read-only upstream sources (e.g., shadcn registry). Do not modify.

## How the docs folder works
- Documents mirror the lifecycle:
  - Plan → Tasks → Architecture → Changes. Supporting specs live alongside.
- You can jump in via:
  - Start here: `01-plan.md`
  - Execute/track: `02-tasks.md`
  - Deep design: `03-architecture.md`
  - Record changes: `04-changelog.md`
  - Automation specifics & agent orchestration: `automation-plan.md`, `communication-protocol.md`, plus requirements docs

## Agents in this repo
- **WebAppTesterV2 (ready)**
  - Path: `00-template/agente_tester_v2.py`
  - Purpose: exploratory/functional testing with browser tools and memory
  - Run:
    ```bash
    conda run -n 12 python 00-template/agente_tester_v2.py --url http://localhost:3000 --timeout 300
    ```
- **Migration Assistant (ready)**
  - Path: `00-template/migration_assistant.py`
  - Purpose: methodology-driven assistant for component inventory, spec scaffolds, doc updates, and automation guidance.
  - Uses: `scripts/logger_utils.get_logger` (writes to `logs/migration/shadcn-tamagui/migration-assistant/`), `api_key_rotation.get_api_key`, Playwright MCP tools.
  - Run examples:
    ```bash
    # Dry-run preview of the prompt (no Gemini usage)
    conda run -n 12 python 00-template/migration_assistant.py \
      --task "Produce Tamagui parity plan for Button" \
      --context "Focus on accessibility + log hooks" \
      --dry-run

    # Execute with logging and verbose output
    conda run -n 12 python 00-template/migration_assistant.py \
      --task "Author spec draft for Dialog" \
      --context "Use docs/component-spec-template.md" \
      --verbose
    ```
  - Logs: `MIGRATION_LOG_ROOT` can redirect output; filenames follow `log-migration-assistant-YYYYMMDD HHMMSS.log`.
  - Tests: `tests/test_migration_assistant.py` covers builder wiring, dry-run behavior, usage logging, and CLI integration.
- **Documentation Scribe (optional)**
  - Keeps `/docs` coherent using provided templates; updates tasks/changelog.

## Logging
- Naming: `log-<area>-aaaammdd hhmmss.log` (UTC).
- Root: defaults to `./logs/migration/shadcn-tamagui`, override with `MIGRATION_LOG_ROOT`.
- Use in Python:
  ```python
  from scripts.logger_utils import get_logger
  logger = get_logger("component-inventory", verbose=True)
  logger.info("starting parse")
  ```

## Gemini free-tier rate limits (per API key)
- Gemini 2.5 Pro: RPM=2, TPM=125,000, RPD=50
- Gemini 2.5 Flash: RPM=10, TPM=250,000, RPD=250
- Key rotation:
  - Provide comma-separated keys in `GENAI_API_KEYS` or a single `GENAI_API_KEY`.
  - Utilities: `00-template/api_key_rotation.py`, `00-template/cognee_api_rotation.py`.
  - Log all key failures and stop cleanly when keys are exhausted.

## Environment & setup
- Python via Conda env `12` (see user rules). Example:
  ```bash
  conda run -n 12 python -m pytest -q
  ```
- JS tooling: prefer `pnpm` (if/when needed for UI code).
- Secrets: never commit `.env`; see `.env.example`.

## Typical workflows
- **Run tests**
  ```bash
  conda run -n 12 python -m pytest -q
  ```
- **Generate logs to a custom root**
  ```bash
  export MIGRATION_LOG_ROOT=$PWD/.artifacts/logs
  conda run -n 12 python - <<'PY'
  from scripts.logger_utils import get_logger
  get_logger("smoke", timestamp="20250101 000000").info("ok")
  PY
  ```
- **Work with docs**
  - Update tasks: `docs/02-tasks.md`
  - Add architecture decisions: `docs/03-architecture.md`
  - Record changes: `docs/04-changelog.md`

## Delegating to Sub-Agents

When spinning up parallel agents, follow this delegation playbook:

1. **Pick a task slice from `docs/02-tasks.md`.** Each Phase 1–3 item now lists subtask IDs (e.g., *6b*, *6c*). Reference them verbatim in the agent brief so status updates map back cleanly.
2. **Provide Required Artifacts:**
   - Code paths (e.g., `tamagui-components-final/tests/web/Button.spec.tsx`).
   - Supporting docs (spec sections, logging strategy pages, etc.).
   - Expected output format (patch, test report, changelog entry).
3. **Quality Gates:**
   - Must run relevant tests (`pnpm vitest --run`, `pnpm expo test`, etc.) when touching code.
   - All new logic needs TDD + type hints + logging per project rules.
   - Update `docs/02-tasks.md` subtasks and `docs/04-changelog.md` when work lands.
4. **Logging & Metrics:** Ensure every agent run emits structured logs (see Phase 1b Tasks 7–9). Use `logger_utils.get_logger` and respect Gemini rate limits noted above.
5. **Handoff Notes:** Each agent should leave a short summary in the PR/issue linking to:
   - Subtask checklist items completed.
   - Test commands run.
   - Any follow-up blockers.

Suggested agent roles align with the task board:

| Role | Primary Tasks |
| --- | --- |
| Providers QA | Phase 1 Task 4 (subtasks 4a–4d) |
| Tooling Lead | Phase 1 Task 5 (5a–5c) |
| Test Harness | Phase 1 Task 6 (6b–6d) |
| Logging Infra | Phase 1b Task 7 |
| Rate Limit Steward | Phase 1b Task 8 |
| Telemetry Ops | Phase 1b Task 9 |
| Radio UX | Phase 3 Task 12 |
| Select Squad | Phase 3 Task 13 |
| Form QA | Phase 3 Task 14 |
| Overlay A/B | Phase 3 Tasks 15–16 |
| Regression Harness | Phase 3 Task 17 |

Each agent should cite the relevant checklist ID (e.g., "Completed 6b, 6c") in their final message for traceability.

## Notes
- domain: DDD concepts apply to component boundaries and flows.
- If your larger system uses Qdrant (vectors) and Neo4j (graph), integrate them in your application services; this workspace focuses on the design-system migration and agent tooling.
- Follow branching and semantic commits; practice TDD for all new logic.
- **Component organization (2025-11)**
  - All Tamagui components now live under `tamagui-components-final/src/components/<domain>/`.
  - Current domains: `primitives`, `forms`, `feedback`, `data-display`, `overlays`, `navigation`, `typography`.
  - Tests mirror platform concerns: `tests/web` for JSDOM + React Testing Library and `tests/native` for React Native.
  - Shared providers, config, and utilities remain in `tamagui-components-final/src`.
- **Safeguards when adding/changing components**
  1. Prefer creating a new file in the correct domain folder rather than reusing another component's file.
  2. Update `src/index.ts` and `src/gallery/components-map.ts` in the same PR to keep exports/catalog in sync.
  3. Place web-specific tests under `tests/web`, native ones under `tests/native`; mixed coverage lives in the root `tests/` directory only if unavoidable.
  4. Run `pnpm -C tamagui-components-final vitest --run --watch=false` (or via `gemini-cli` runner) before opening a PR; CI expects green web + native suites.
  5. When touching Tooltip or other overlay components, ensure accessibility props (aria-*, describedby wiring) still pass existing snapshots.
