# AGENTS Policy for the Ivisa Tamagui Design System

## 1. Current Status
- This repository does **not** run, embed, or depend on automation agents, subagents, Agno, Gemini, or any rate-limiting orchestration stacks.
- Previous experiments with agent swarms were archived under `docs/_archive/` during the pivot to a Tamagui-first design system.

## 2. Guiding Principles
1. **Manual, Inspectable Code:** All contributions must be authored and reviewed by humans. Generated code must be curated before landing.
2. **No Hidden Runtimes:** Avoid background daemons, long-lived agent processes, or remote orchestrators. Tooling should be deterministic (pnpm, Storybook, Vitest, etc.).
3. **Security & Privacy:** Do not paste secrets or credentials into agent prompts. All environment variables must stay local (`.env`, never committed).

## 3. Allowed Tooling
- UI/dev tooling: Tamagui, pnpm, Storybook, Vitest, React Testing Library, ESLint, Prettier.
- Reference repositories under `_reference/` for manual inspection only.

## 4. Future Changes
- Any proposal to reintroduce automation/agent systems must include: scope, security review, and an update to this file plus `docs/04-changelog.md`.
