# docs/rules/git-standards.md — GIT & VERSION CONTROL PROTOCOLS

> **CONTEXT**: Load this file when you are preparing to commit code, creating PRs, or managing branches.

---

## 1. THE "PARANOID ADD" PROTOCOL (Security)
**Target**: Preventing secret leaks (env vars, keys) and heavy file commits.

Before running `git add`, you **MUST** execute this mental check:
1.  **Status Check**: Run `git status` to see exactly what is being staged.
2.  **Secret Scan**: Does any new file contain `sk-`, `API_KEY`, or `.env` content?
    * *If yes*: STOP. Add to `.gitignore` immediately. Rotate the key if it touched the disk.
3.  **Weight Check**: Are you adding `node_modules/`, `venv/`, `dist/`, or large binaries?
    * *If yes*: STOP. Add to `.gitignore`.
4.  **Lockfile Sync**: Did you modify `package.json`? If so, `package-lock.json` (or equivalent) MUST be included.

---

## 2. ATOMIC COMMITS
**Target**: Preventing "Mega-Commits" that are impossible to review or revert.

* **One Context, One Commit**: Do not mix a "Refactor of Authentication" with "Fix typo in CSS".
* **State**: The codebase must be buildable and testable at every single commit. Do not commit broken intermediate states.

---

## 3. CONVENTIONAL COMMITS
**Target**: Automating Changelogs and semantic versioning.

Use the format: `type(scope): description`

| Type | Use Case | Example |
| :--- | :--- | :--- |
| `feat` | New feature | `feat(auth): add google oauth provider` |
| `fix` | Bug fix | `fix(cart): prevent negative quantity updates` |
| `docs` | Documentation only | `docs(arch): update diagram for payment flow` |
| `refactor` | Code change, no behavior change | `refactor(utils): simplify date parsing logic` |
| `chore` | Maintenance, dependencies | `chore(deps): upgrade prisma to v5` |
| `test` | Adding/fixing tests | `test(auth): add regression test for login` |

**Rule**: The description must be imperative ("add" not "added").

---

## 4. PULL REQUEST (PR) STANDARDS
When creating a PR description:
1.  **Link**: Reference the task ID from `docs/02-tasks.md`.
2.  **Proof**: Include a screenshot (frontend) or log snippet (backend) proving it works.
3.  **Self-Review**: Explicitly state: "I have reviewed my own code for commented-out blocks and console.logs".