# TASK: Refactor and Perfect the Organism Component: [COMPONENT_NAME]

## 1. PRE-ASSESSMENT & CONTEXT
**CRITICAL INSTRUCTION:** Before writing any code, rigorously read all documents in the `docs/` folder. Analyze the current codebase state comparatively against the documentation standards.
* **Goal:** Upgrade the `[COMPONENT_NAME]` to a resilient, architectural component that composes Atoms and Molecules flawlessly using **Tamagui**.
* **Constraint - Dependency Isolation:** Do NOT install new npm packages. Use the existing stack (Tamagui, React, Lucide React). Reuse existing Atoms (`packages/ui/src/atoms`) and Molecules (`packages/ui/src/molecules`) instead of rewriting low-level elements.

## 2. REFACTORING PROTOCOL (The "Organism Algorithm")
You must execute the following upgrades on `[COMPONENT_NAME].tsx` and `[COMPONENT_NAME].stories.tsx`:

### A. Tamagui-First Implementation
* **Composition:** Use `XStack` (row) and `YStack` (column) for ALL layouts.
* **Gap over Margin:** Strictly use the `gap` prop on Stacks to manage spacing. Avoid margins (`m-`) on children.
* **Tokens:** Use strict Tamagui tokens (e.g., `padding="$4"`, `borderRadius="$2"`, `backgroundColor="$background"`).
* **Styling:** Use `styled()` factory for creating component parts. Avoid inline styles.
* **Responsiveness:** Use Tamagui's responsive syntax (e.g., `width={{ base: '100%', gtSm: '50%' }}`) where needed.

### B. Localization (PT-BR)
* Translate ALL visible text, column headers, empty state messages, and tooltips to **Portuguese (Brazil)**.
* Ensure date/currency formatting uses `Intl.NumberFormat` or `date-fns` with `pt-BR` locale.

### C. Layout Architecture (Container Agnosticism)
* **Width Agnostic:** The organism must NOT have a fixed width. It must use `width="100%"` (or `flex={1}`) to adapt to its parent container.
* **Scroll Isolation:** If the organism contains a list or table, use `ScrollArea` or `ScrollView` appropriately, ensuring headers/footers remain fixed if designed that way.
* **Collapsible Logic:** If applicable (e.g. Sidebars), use Tamagui animations or conditional rendering for smooth transitions.

### D. Data Lifecycle Management (The "Triad of States")
Implement handling for the three critical states:
1.  **Loading State:** Render a dedicated Skeleton structure (reuse `Skeleton` atom) that mimics the organism's layout.
2.  **Empty State:** If data array is empty, render a friendly UI (Icon + Message + CTA) instead of blank space.
3.  **Error State:** If an `error` prop is passed, display a retry mechanism or alert using proper tokens (red colors).

### E. Slotting & Composition (Dependency Injection)
* **Action Slots:** Do not hardcode buttons like "Save". Define props like `headerActions` or `footerContent` that accept `ReactNode`.
* **Context Wrappers:** If the organism relies on Tooltips or Dialogs, ensure the Storybook story wraps it in the necessary Providers (e.g., `ToastProvider`).

### F. "Props In, Events Out" (Dumb Organism)
* **Decoupled Logic:** The component should receive data via `props`. Avoid internal API calls.
* **Event Bubbling:** User interactions (clicks, filters) must trigger callback props (e.g., `onFilterChange`) carrying data payload.

### G. Realism & Stress Testing (Stories)
Create Stories that reflect real production scenarios:
1.  **"Golden Path":** A story with perfect, populated mock data (use realistic mocks, NOT Lorem Ipsum).
2.  **Zero Data:** A story passing empty arrays/nulls to verify Empty State.
3.  **Loading:** A story forcing the Skeleton view.
4.  **Layout Stress:** A story wrapping the organism in a restricted container to verify responsiveness.

### H. Accessibility (A11y)
* **Landmarks:** Use semantic tags via `tag` prop (e.g., `tag="aside"`).
* **Focus Management:** If the organism opens a drawer/panel, ensure focus is managed.

## 3. DELIVERABLES
* Updated `[COMPONENT_NAME].tsx`
* Updated `[COMPONENT_NAME].stories.tsx` (With realistic mocks)

Proceed with the refactoring now, strictly adhering to the file structure and Tamagui conventions.
