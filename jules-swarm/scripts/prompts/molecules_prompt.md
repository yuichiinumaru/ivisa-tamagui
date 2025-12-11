# TASK: Refactor and Perfect the Molecule Component: [COMPONENT_NAME]

## 1. PRE-ASSESSMENT & CONTEXT
**CRITICAL INSTRUCTION:** Before writing any code, rigorously read all documents in the `docs/` folder. Analyze the current codebase state comparatively against the documentation standards.
* **Goal:** Upgrade the `[COMPONENT_NAME]` to a robust, "Production-Ready" molecule that orchestrates child atoms perfectly.
* **Constraint - Dependency Isolation:** Do NOT install new npm packages. Use the existing stack (Tamagui, React, Lucide React). Reuse existing Atoms (`packages/ui/src/atoms`) wherever possible instead of rewriting low-level elements.

## 2. REFACTORING PROTOCOL (The "Molecule Algorithm")
You must execute the following upgrades on `[COMPONENT_NAME].tsx` and `[COMPONENT_NAME].stories.tsx`:

### A. Tamagui-First Implementation
* **Composition:** Use `XStack` (row) and `YStack` (column) for ALL layouts.
* **Gap over Margin:** Strictly use the `gap` prop on Stacks to manage spacing between atoms. Avoid margins (`m-`) on child atoms unless absolutely necessary.
* **Tokens:** Use strict Tamagui tokens for all values (e.g., `padding="$4"`, `borderRadius="$2"`, `backgroundColor="$background"`).
* **Styling:** Use `styled()` factory for creating the component parts. Avoid inline styles unless dynamic.

### B. Localization (PT-BR)
* Translate ALL visible text, empty states, error messages, and aria-labels to **Portuguese (Brazil)**.
* Ensure date/currency formatting (if any) uses PT-BR locale standards.

### C. State Unification (The "Puppeteer" Pattern)
* **Single Source of Truth:** The molecule must accept high-level props like `isLoading`, `hasError`, or `isDisabled`.
    * When `isLoading={true}` is passed, propagates it to child `Button` or replaces content with a `Skeleton`.
    * When `hasError={true}` is passed, it must style children (e.g. borders red) without requiring deep prop drilling.

### D. API Facade & Smart Defaults
* **Data Object Support:** If the molecule represents an entity (e.g., User, Product), allow passing a single object prop (e.g., `user={object}`) instead of requiring multiple individual string props. Destructure it internally.
* **Action Slots:** Do not hardcode specific action buttons. Implement a generic `actions` or `rightSlot` prop that accepts `ReactNode`.

### E. Stress Testing (Unhappy Paths)
Create Stories that simulate real-world data issues:
1.  **Partial Data:** Optional fields missing.
2.  **Constraint Check:** Narrow container to verify text truncation (`ellipse` prop in Text).
3.  **Skeleton/Loading:** A story showing the specific Skeleton state.

### F. Accessibility (A11y)
* **Group Semantics:** If it's a list item, use `tag="li"`.
* **Keyboard Navigation:** Ensure tab order flows logically.

## 3. DELIVERABLES
* Updated `[COMPONENT_NAME].tsx`
* Updated `[COMPONENT_NAME].stories.tsx`

Proceed with the refactoring now, strictly adhering to the file structure and Tamagui conventions.
