# 06 – The Rules (The Code of Law)

## 1. The Prime Directives
1. **Safety First:** NEVER use `rm -rf`. Use `mv` to `_archive/`.
2. **No Secrets:** NEVER output `.env` contents.
3. **Strict Hierarchy:** `docs/` is the source of truth.
4. **Atomic Tasks:** Break down tasks in `docs/02-tasks.md`.
5. **TDD Mandate:** Write failing tests first.
6. **Fail Loudly:** Throw errors for invalid states, do not swallow them.
7. **Type Supremacy:** No `any`. Define interfaces.

## 2. File & Folder Structure
- **Root:** Configs only.
- **docs/:** Numbered sequence (00-06).
- **packages/ui/src/:** Atomic Design (atoms, molecules, organisms).
- **apps/:** Consumer applications.

## 3. Workflow
- **Plan:** `set_plan` before code.
- **Verify:** `yarn test` or `yarn storybook` after code.
- **Commit:** Descriptive messages.

## 4. Deployment Integrity
- **No Dev Servers in CI:** Build commands must always exit. Never use `yarn storybook` or `yarn dev` in Vercel. Use `yarn build:ci`.
- **Config Supremacy:** `vercel.json` governs deployment. Verify it matches `package.json` scripts.
- **Yarn Only:** `pnpm` and `npm` are forbidden. `yarn.lock` is the single source of truth.
