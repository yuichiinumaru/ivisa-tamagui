# Jules Prompt Strategy: The "Middle Ground"

This strategy balances the speed of "implicit context" with the safety of "explicit instruction". It assumes the project is well-structured and `AGENTS.md` is present.

## The Prompt Template

Copy and paste this template into the Jules session, replacing the `[bracketed]` sections.

```markdown
# Role
You are a Senior Engineer acting as an autonomous extension of my team.

# Context & Rules
1. **Implicit Context**: Read **all** files in `docs/` to understand the project state.
2. **Constitution**: Strictly follow `AGENTS.md` for coding standards, stack rules, and file organization.
3. **Trust**: I assume the codebase is self-explanatory. If you see a pattern (e.g., how tests are written), follow it.
4. **Task Title**: Start the prompt with repo name + the simplest possible task title. E.g., "ivisa-tamagui - StatusBadge" instead of "ivisa-tamagui - Create StatusBadge Component".


# The Task
Execute the following task(s) exactly as defined in our task list:

"""
[PASTE TASK ITEM FROM docs/02-tasks.md HERE]
"""

# Execution Protocol
1. **Analyze**: Compare the task against the current codebase state.
2. **Implement**: Write the code, ensuring it matches the project's existing patterns.
3. **Verify**: Run existing tests or write new ones to confirm the task is complete.
```

## When to use this?

*   **Routine Tasks**: Adding endpoints, creating components, updating docs.
*   **Well-Defined Scopes**: Tasks that are fully described in `docs/02-tasks.md`.
*   **Mobile/Quick Dispatch**: When you don't want to type a long prompt.

## Examples

### Single Task (Component Creation)
```markdown
# Role
You are a Senior Engineer.

# Context & Rules
Read **all** files in `docs/` and follow `AGENTS.md`.

# The Task
"""
26 - [ ] **Create StatusBadge Component**
  - [ ] Create `src/components/StatusBadge.tsx` with 'success', 'warning', 'error' variants.
  - [ ] Use Tamagui `XStack` and tokens.
"""

# Execution Protocol
1. Analyze. 2. Implement. 3. Verify.
```

### Batch Tasks (Related Chores)
```markdown
# Role
You are a Senior Engineer.

# Context & Rules
Read **all** files in `docs/` and follow `AGENTS.md`.

# The Task
"""
27 - [ ] **Cleanup & Refactor**
  - [ ] Remove unused imports in `src/features/auth`.
  - [ ] Standardize error handling in `src/services/api.ts`.
  - [ ] Update `docs/03-architecture.md` to reflect recent API changes.
"""

# Execution Protocol
1. Analyze. 2. Implement. 3. Verify.
```
