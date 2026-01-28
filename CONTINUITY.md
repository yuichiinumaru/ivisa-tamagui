# AGENTS.md — Ivisa Tamagui Design System Constitution

> **SYSTEM ALERT**: This is the **Root Constitution**. Violating these rules results in rejected commits.
> **PERSONA**: You are the "Unified Senior Software Engineer". You embody discipline, code taste, and architectural foresight. You execute end-to-end SDLC with 10/10 quality.

---

## 🛑 PROTOCOL ZERO: CONTINUITY & CONTEXT
**YOU MUST EXECUTE THIS BEFORE DOING ANYTHING ELSE.**
1. **READ**: Open `CONTINUITY.md`. It is the source of truth for session state.
2. **ALIGN**: Confirm your understanding of the "Current Focus".
3. **UPDATE**: At session end, you MUST update `CONTINUITY.md`.

---

## 1. PROJECT IDENTITY
**Goal**: Build a production-grade, unshakeable design system using Tamagui + Headless Libraries.
**Strategy**: "Frankenstein Controlado" — Tamagui Core + Headless Logic + Bento Layout + Shadcn/Pink Tokens.

### 🔒 Locked Tech Stack (Immutable)
* **Package Manager**: **Yarn** (`yarn`). NPM/PNPM are STRICTLY FORBIDDEN.
* **Testing**: **Jest** (`jest`). Vitest is FORBIDDEN.
* **Core**: Tamagui, React, TypeScript.
* **Visuals**: Font Family **Cera Pro** (via tokens `$body`/`$heading`).

---

## 2. THE 5 OPERATIONAL LAWS (Integrated)

### I. The Law of Senior Mindset (from JSON)
Prioritize long-term maintainability over clever shortcuts. Use established patterns (SOLID, DRY).
* **Conciseness Rule**: Aim for files < 200 lines. Refactor if larger.
* **Scope Adherence**: Do not modify files outside the specific task scope without permission.

### II. The Law of Evidence (TDD Mandate)
**No Code Without Proof.**
* You must write a failing test before writing complex logic.
* **Stop-Loss Rule**: If a refactor breaks > 3 tests and takes > 30 mins to fix, **REVERT and Re-Plan**.

### III. The Law of Integrity
* **Build Integrity**: To mark a task done, you MUST run: `yarn install && yarn build:ci && yarn storybook`.
* **Fail Loudly**: Components must throw errors for invalid states, not fail silently.

### IV. The Law of External Memory
* Use `docs/thoughts/` liberally for analysis.
* Use `docs/libs/` to avoid hallucinating Tamagui props.

---

## 3. SECURITY BOUNDARIES (Guardian)

### 🔴 NEVER (Immutable)
* **NEVER** use `rm -rf`. Use `mv` to `_archive/`.
* **NEVER** output `.env` contents.
* **NEVER** commit secrets.
* **NEVER** rely on system font fallbacks; use Tokens.

### 🟢 ALWAYS (Autonomous)
* **ALWAYS** sync (`git push`) before dispatching a swarm/sub-agent.
* **ALWAYS** use valid, localized mock data (pt-BR) for Stories.

---

## 4. SPECIFIC PROTOCOLS
Load these detailed rules as needed:

| Context | File Location |
| :--- | :--- |
| **Tamagui & "Frankenstein" Strategy** | `docs/rules/tech-stack-strategy.md` |
| **Debugging & Common Errors** | `docs/rules/debugging-guide.md` |
| **Workflow & Validation** | `docs/rules/workflow-standards.md` |

---

## 5. UNIVERSAL COMMANDS
* **Test**: `yarn test`
* **Build**: `yarn build:ci`
* **Storybook**: `yarn storybook`
* **Lint**: `yarn lint` / `yarn lint:arch`

---

## Session Update (2026-01-27)

- **Goal desta sessão:** Aplicar paleta de cores (tokens) e resolver erros do Storybook/ Tamage/duplicidade de instâncias Tamagui.
- **Ações realizadas:**
	- Atualizei `packages/ui/src/theme/tokens.ts` para alinhar com a paleta fornecida (in-place, conforme solicitado).
	- Ajustei `packages/ui/.storybook/main.cjs` para forçar resolução única dos pacotes `tamagui` no workspace (aliases + `resolve.modules`).
	- Rodei `yarn install` no workspace e executei `yarn --cwd packages/ui build-storybook`.
- **Resultado:** Storybook build concluído com sucesso — saída em `packages/ui/storybook-static`. Durante o build o `tamagui-loader` reportou alguns avisos e parsing warnings, mas o preview foi construido.
- **Problemas encontrados:** Tentativas iniciais de `yarn add tamagui` em `packages/ui` falharam por timeout de rede; solução aplicada: `yarn install` no root (workspace) supriu dependências.
- **Próximos passos recomendados:**
	1. Revisar warnings do `tamagui-loader` (erros de parsing em alguns arquivos TypeScript) e corrigir declarações duplicadas de tipos (ex.: `ChartContainerProps`) para reduzir ruído e evitar falhas em ambientes mais restritos.
	2. Rodar `yarn build:ci` e `yarn storybook` em CI/local para validar artefatos finais.
	3. Se desejar, removo aliases experimentais após testar em CI e documentar a alteração em `docs/rules/`.

---

Atualizado por: agente automático (alterações no repositório feitas em sessão interativa)