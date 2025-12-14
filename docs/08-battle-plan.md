# 08 – The Battle Plan (Jules & Local Strategy)

## 🛑 Phase 0: Local Quick Fixes (Immediate Execution)
*Goal: Stabilize the base and fix "careless" errors before unleashing the Swarm.*
*Status: **Execution Now***

### 0.1 Infrastructure Repair
*   **[Critical] Fix Component Exports:** Resolve `Element type is invalid` in `src/index.ts` (Charts, Card, NotificationCard). This is a simple import/export mismatch.
*   **[Critical] Storybook Assets:** Update `.storybook/main.ts` to include `../src/assets` in `staticDirs`.
*   **[Critical] Button Font:** Explicitly set `fontFamily: '$body'` in `atoms/Button`.
*   **[Critical] Env Setup:** Populate `jules-swarm/.env` with keys (User action required, but verified).

### 0.2 Task Definition
*   **Update `docs/02-tasks.md`:** Formally adopt **Recharts (Shadcn Charts)** over Victory for the "Intelligent Organisms".

---

## 🌊 Wave 1: Jules Swarm (The "Showstoppers")
*Goal: Fix complex Logic Crashes via parallel agents.*

### 🛠️ 1.1 The "Headless" Crash Fix
*   **Agents:** 2 (Parallel)
*   **Task:** Refactor `Calendar` and `DataTable` Stories.
*   **Prompt:** "Fix Null Pointer Exceptions by creating robust Decorators that provide valid Mock Contexts. Do not change component logic, just the test/story harness."

### 🛠️ 1.2 The Charting Engine Reborn
*   **Agents:** 3 (Parallel)
*   **Task:** Implement `Recharts` wrappers for `BarChart`, `PieChart`, `LineChart`.
*   **Prompt:** "Refactor `[Components]` to use Recharts with `ResponsiveContainer`. Ensure `categorizeData` utility exists. Fix SVG nesting errors."

---

## 🌊 Wave 2: Visual Integrity (The "Polish")
*Goal: Fix Broken UI and "Ugly" States.*

### 🎨 2.1 Static Assets & Styles
*   **Agents:** 2 (Parallel)
*   **Task:** Audit `Card`, `Empty`, `Avatar`.
*   **Prompt:** "Replace broken image paths with imported assets or valid public URLs. Implement `text-overflow: ellipsis` for long text variants."

### 🎨 2.2 Interaction Refinement
*   **Agents:** 2 (Parallel)
*   **Task:** Refactor `Button` (Loading) and `Input` (Controlled).
*   **Prompt:** "Implement strict Loading state (spinner, pointer-events: none) and ensure Inputs default to empty string."

---

## 🌊 Wave 3: Organism Expansion (The "Product")
*Goal: Create the "Real" components needed for Field Ops.*

### 🚀 3.1 Advanced Variants
*   **Agents:** 3 (Parallel)
*   **Task:** Create `StatsCard`, `ModalForm`, `DashboardHeader`.
*   **Prompt:** "Implement high-fidelity Organisms using the new Cera Pro font and Elevation tokens."
