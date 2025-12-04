---
description: How to delegate tasks to Jules Swarm for parallel execution
---

# Jules Swarm Workflow

This workflow defines the standard operating procedure for delegating work to the Jules AI agent using the "Swarm" protocol.

## 1. Preparation (The Golden Rule)
**CRITICAL**: Jules clones from GitHub, not your local machine.
- [ ] Ensure all local changes are committed and pushed.
```bash
git add . && git commit -m "chore: save state before swarm" && git push
```

## 2. Context Loading
- [ ] Read the protocol files in `docs/jules/` to refresh your memory on the rules:
    - `docs/jules/jules-rules.md`
    - `docs/jules/jules-rules2.md`
    - `docs/jules/jules-swarm-protocol.md`
    - `docs/jules/jules-prompt.md`

## 3. Task Selection & Grouping
- [ ] Open `docs/02-tasks.md`.
- [ ] Identify tasks that are:
    - **Parallelizable**: Don't depend on each other.
    - **Well-Defined**: Have clear acceptance criteria.
    - **Low-Context**: Don't require deep knowledge of the entire system history.
- [ ] **Grouping Strategy**:
    - Group tasks by **Domain** (e.g., "Auth", "UI Components") or **File Proximity**.
    - *Rule of Thumb*: 1 Session = 1 Domain or 3-5 small related tasks.

## 4. Execution (The Swarm)
- [ ] Open a terminal for each task group.
- [ ] Run the Jules CLI command:
```bash
jules remote new --repo <your-repo> --session "<Task Name>"
```
- [ ] **Prompting**: Use the "Middle Ground" strategy defined in `docs/jules-prompt.md`.
    - Copy the template.
    - Paste the specific task items from `docs/02-tasks.md`.
    - Send.

## 5. Review & Merge
- [ ] After 5~10 minutes, Jules will open a Pull Request.
- [ ] **Verify**: Check the code and the tests.
- [ ] **Merge**: Squash and merge into the main branch.
- [ ] **Sync**: `git pull` locally before starting the next swarm.