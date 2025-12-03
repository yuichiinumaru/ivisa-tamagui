# AGENTS Policy & Onboarding for Ivisa Tamagui DS

## 1. 👋 Welcome, Agent
You are working on the **Ivisa Tamagui Design System**, a project that aims to replicate the ergonomics and visual identity of `shadcn/ui` using **Tamagui** primitives, **Bento** layouts, and **Headless** libraries.

### 🚨 CRITICAL RULES (The "Laws")
1. **Safe Operations:** NEVER use `rm -rf` on project source/docs. Always move to `_archive/`.
2. **No Hidden Runtimes:** Do not suggest or install background daemons or agent orchestrators.
3. **Secrets:** Never output secrets. Use `.env`.

---

## 2. Project Structure & Methodology
This project strictly follows **Atomic Design** methodology (`packages/ui/src/`):

| Layer | Folder | Description | Examples |
| :--- | :--- | :--- | :--- |
| **Theme** | `theme/` | Tokens (colors, radius, spacing). | `tokens.ts`, `tamagui.config.ts` |
| **Atoms** | `atoms/` | Basic building blocks. Wrappers around `tamagui`. | `Button`, `Input`, `Checkbox` |
| **Molecules** | `molecules/` | Simple groups of atoms. | `Card`, `Dialog`, `Select`, `Calendar` |
| **Organisms** | `organisms/` | Complex logic + UI. | `DataTable`, `Form` (React Hook Form) |

---

## 3. Recommended Workflow for Agents

### 1️⃣ Understand Context
Before starting a task, ALWAYS read these documents in order:
1. `docs/01-plan.md` - The master plan and philosophy ("Frankenstein Controlado").
2. `docs/02-tasks.md` - The active task board. **Check what is done vs pending.**
3. `docs/03-architecture.md` - How components are structured and exported.

### 2️⃣ Verify Environment
- **Package Manager:** `pnpm`
- **Monorepo:** We are inside `ivisa-tamagui` (root).
- **Testing:**
    - **Visual:** `scripts/visual-check.js` (uses Storybook + Playwright).
    - **Unit:** `vitest`.

### 3️⃣ Implementation Pattern
When asked to build a component (e.g., "Build a Carousel"):
1. **Check `docs/02-tasks.md`** for the recommended headless library (e.g., `embla-carousel`).
2. **Create File:** `packages/ui/src/[molecules|organisms]/Carousel.tsx`.
3. **Create Story:** `packages/ui/src/[molecules|organisms]/Carousel.stories.tsx`.
4. **Export:** Add to `packages/ui/src/index.ts`.
4. **Export:** Add to `packages/ui/src/index.ts`.
5. **Verify:** Run `pnpm storybook` and `node scripts/visual-check.js`.

### 4️⃣ Component Strategy (The "Frankenstein" Model)

We categorize components into three types:

| Type | Description | Examples |
| :--- | :--- | :--- |
| **Native** | Direct styling of Tamagui primitives. No extra libs. | `Button`, `Card`, `Sheet`, `Dialog`, `Avatar`. |
| **Wrapper** | Wraps a headless library (Hook/Logic) with Tamagui UI. | `DataTable` (@tanstack), `Calendar` (@rehookify), `Carousel` (embla). |
| **Composition** | Complex UI built by assembling existing Atoms/Molecules. | **`Sidebar`** (Sheet + YStack), `DashboardLayout`. |

> **Note on Sidebar:** The "App Sidebar" is a **Composition**. Do not look for a `@sidebar/react` library. Build it using `Sheet` (mobile), `YStack` (desktop), and `AnimatePresence`.

---

## 4. Current Status (As of Phase 4)
- **Phase 1 (Foundation):** ✅ Complete. Theme, Primitives (Atoms) ready.
- **Phase 2 (High-Impact):** ✅ Complete. Forms, DataTable, Calendar/DatePicker.
- **Phase 3 (Expansion):** ✅ Complete. Carousel, Command Palette, Menubar, etc.
- **Phase 4 (Docs & Polish):** 🚧 In Progress. Storybook population, Spec cleanup, and missing Atoms (`Label`, `Kbd`).

---

## 5. Allowed Tooling
- **UI:** Tamagui, Radix Primitives (via Tamagui).
- **Logic:** `react-hook-form`, `zod`, `@tanstack/react-table`, `@rehookify/datepicker`.
- **Dev:** `pnpm`, `tsup`, `storybook`, `vitest`, `playwright`.

