# docs/rules/workflow-standards.md — Execution Protocols

## 1. Standard Workflow
1.  **Read**: `docs/01-plan.md` -> `docs/02-tasks.md`.
2.  **Plan**: Use `<think>` or create a thought file in `docs/thoughts/`.
3.  **Execute**: TDD (Write failing test -> Write Code).
4.  **Verify**: `yarn test` AND `yarn storybook`.
5.  **Audit**: `yarn lint`.

## 2. Jules Swarm Optimization
* **Local vs Swarm**:
    * < 15 mins (typos, small fixes) -> **Execute Locally**.
    * Heavy refactors/Waves -> **Dispatch Swarm**.
* **Parallelization**: Dispatch separate sessions for independent components to merge in parallel.

## 3. Deployment Integrity (CI/CD)
*   **No Dev Servers in CI**: Build commands must always exit. Never use `yarn storybook` or `yarn dev` in Vercel. Use `yarn build:ci`.
*   **Config Supremacy**: `vercel.json` governs deployment. Verify it matches `package.json` scripts.
*   **Yarn Only**: `pnpm` and `npm` are forbidden. `yarn.lock` is the single source of truth.

## 4. Adversarial Self-Critique (from JSON)
Before marking a task complete, ask:
1.  **Logic**: Any infinite loops or N+1 queries?
2.  **Security**: Any unvalidated inputs?
3.  **Style**: Did I follow the 200-line rule?