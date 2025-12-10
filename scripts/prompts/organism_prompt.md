# TASK: Refactor and Perfect the Organism Component: [COMPONENT_NAME]

## 1. PRE-ASSESSMENT & CONTEXT
**CRITICAL INSTRUCTION:** Before writing any code, rigorously read all documents in the `docs/` folder. Analyze the current codebase state comparatively against the documentation standards.
* **Goal:** Upgrade the `[COMPONENT_NAME]` to a resilient, architectural component that composes Atoms and Molecules flawlessly.
* **Constraint - Dependency Isolation:** Do NOT install new npm packages. Use the existing stack (React, TailwindCSS, Radix/Shadcn, Recharts). Assume Atoms and Molecules are already perfected and available for import.

## 2. REFACTORING PROTOCOL (The "Organism Algorithm")
You must execute the following upgrades on `[COMPONENT_NAME].tsx` and `[COMPONENT_NAME].stories.tsx`:

### A. Localization (PT-BR)
* Translate ALL visible text, column headers, empty state messages, and tooltips to **Portuguese (Brazil)**.
* Ensure date/currency formatting uses `Intl.NumberFormat` or `date-fns` with `pt-BR` locale.

### B. Layout Architecture (Container Agnosticism)
* **Width Agnostic:** The organism must NOT have a fixed width. It must use `w-full` and `h-full` to adapt to its parent container.
* **Scroll Isolation:** If the organism contains a list or table, apply `overflow-y-auto` to the content area, ensuring header/footer remain fixed.
* **Collapsible Logic:** If applicable (e.g., Sidebars), implement smooth CSS transitions for collapsed states.

### C. Data Lifecycle Management (The "Triad of States")
Implement handling for the three critical states:
1.  **Loading State:** Render a dedicated Skeleton structure (e.g., `<DashboardSkeleton />`) that mimics the organism's layout.
2.  **Empty State:** If data array is empty, render a friendly UI (Icon + Message + CTA) instead of blank space.
3.  **Error State:** If an `error` prop is passed, display a retry mechanism or alert without breaking layout.

### D. Slotting & Composition (Dependency Injection)
* **Action Slots:** Do not hardcode buttons like "Save". Define props like `headerActions` or `footerContent` that accept `ReactNode`.
* **Context Wrappers:** If the organism relies on Tooltips or Dialogs, ensure the Storybook story wraps it in the necessary Providers.

### E. "Props In, Events Out" (Dumb Organism)
* **Decoupled Logic:** The component must NOT perform API calls internally. It should receive data via `props`.
* **Event Bubbling:** User interactions (clicks, filters) must trigger callback props (e.g., `onFilterChange`) carrying data payload.

### F. Realism & Stress Testing (Stories)
Create Stories that reflect real production scenarios:
1.  **"Golden Path":** A story with perfect, populated mock data (use realistic mocks, NOT Lorem Ipsum).
2.  **Zero Data:** A story passing empty arrays/nulls to verify Empty State.
3.  **Loading:** A story forcing the Skeleton view.
4.  **Layout Stress:** A story wrapping the organism in a restricted container to verify responsiveness.

### G. Accessibility (A11y)
* **Landmarks:** Use semantic HTML regions (`<aside>`, `<main>`, `<section>`) appropriately.
* **Focus Management:** If the organism opens a drawer or panel, ensure focus is trapped or managed correctly.

## 3. DELIVERABLES
* Updated `[COMPONENT_NAME].tsx`
* Updated `[COMPONENT_NAME].stories.tsx` (With realistic mocks)

Proceed with the refactoring now, strictly adhering to the file structure and styling conventions observed in the `docs/`.
