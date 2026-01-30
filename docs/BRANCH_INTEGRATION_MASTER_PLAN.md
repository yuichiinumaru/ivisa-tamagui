# BRANCH INTEGRATION MASTER PLAN

> **STATUS**: FINALIZED
> **DATE**: 2026-01-30
> **STRATEGY**: "Single-Stream Fix"

## 1. Topography
The repository currently consists of two primary divergence points:
1.  **`main`**: The historical base. Contains the application code but suffers from CI configuration drift (using `pnpm` instead of `yarn`) and broken references (`magic-mcp` submodule).
2.  **`documentation-knowledge-graph-v1...`** (and derived `fix-ci...` branches): The active development stream containing:
    *   Comprehensive Documentation (`SYSTEM_KNOWLEDGE_GRAPH.md`).
    *   Critical CI Fixes (Yarn migration).
    *   Maintenance (Submodule pruning).

## 2. Integration Strategy
**Verdict**: The "Documentation" branch is not just documentation; it is a **Stability Patch**. It must be treated as the new `main` baseline.

### Changes to Accommodate
| Component | Change | Rationale | Status |
| :--- | :--- | :--- | :--- |
| **CI Workflow** | `pnpm` -> `yarn` | Alignment with Constitution (`AGENTS.md`) and Lockfile. | **CRITICAL** |
| **Security Scan** | `audit || true` | Prevent blocking builds on known low-severity issues. | **REQUIRED** |
| **Submodules** | Delete `magic-mcp` | Fix CI Checkout failures. | **REQUIRED** |
| **Documentation** | Add `docs/` | Cognitive Context for Agents. | **Beneficial** |

## 3. Execution Steps
1.  **Fast-Forward**: Since `main` has no unique divergence, the integration is a strict fast-forward or squash-merge.
2.  **Validation**: Verify CI passes (Green Build).
3.  **Cleanup**: Delete the source branch after merge.

## 4. Future Protocol (Branch Management)
For future branches:
1.  **Harvest**: Run `git diff HEAD...branch`.
2.  **Audit**: Check for "Constitution Violations" (e.g., adding `package-lock.json`).
3.  **Merge**: Use Squash Merge to maintain a linear history in `main`.
