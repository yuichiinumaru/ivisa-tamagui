# TASK: Refactor and Perfect the Molecule Component: [COMPONENT_NAME]

## 1. PRE-ASSESSMENT & CONTEXT
**CRITICAL INSTRUCTION:** Before writing any code, rigorously read all documents in the `docs/` folder. Analyze the current codebase state comparatively against the documentation standards.
* **Goal:** Upgrade the `[COMPONENT_NAME]` to a robust, "Production-Ready" molecule that orchestrates child atoms perfectly.
* **Constraint - Dependency Isolation:** Do NOT install new npm packages. Use the existing stack (React, TailwindCSS, Radix/Shadcn, Lucide React). Reuse existing Atoms wherever possible instead of rewriting HTML elements.

## 2. REFACTORING PROTOCOL (The "Molecule Algorithm")
You must execute the following upgrades on `[COMPONENT_NAME].tsx` and `[COMPONENT_NAME].stories.tsx`:

### A. Localization (PT-BR)
* Translate ALL visible text, empty states, error messages, and aria-labels to **Portuguese (Brazil)**.
* Ensure date/currency formatting (if any) uses PT-BR locale standards.

### B. Layout Integrity & Collision Testing
* **Gap over Margin:** Strictly use Flexbox/Grid `gap` properties on the container to manage spacing between atoms. Remove external margins (`m-`) from child atoms.
* **Vertical Alignment:** Ensure all atoms (icons, text, buttons) are optically aligned using `items-center`.
* **Squish Protection:** Apply `flex-shrink-0` to fixed elements (Avatars, Icons, Action Buttons) to prevent them from deforming when the molecule is placed in a narrow container.

### C. State Unification (The "Puppeteer" Pattern)
* **Single Source of Truth:** The molecule must accept high-level props like `isLoading`, `hasError`, or `isDisabled`.
    * When `isLoading={true}` is passed to the molecule, it must automatically propagate the loading state to child Buttons/Inputs and/or replace content with a Skeleton.
    * When `hasError={true}` is passed, it must color child labels/inputs red without requiring individual props on them.

### D. API Facade & Smart Defaults
* **Data Object Support:** If the molecule represents an entity (e.g., User, Product), allow passing a single object prop (e.g., `user={object}`) instead of requiring multiple individual string props. Destructure it internally.
* **Action Slots:** Do not hardcode specific action buttons. Implement a generic `actions` or `rightSlot` prop that accepts `ReactNode`, allowing for future extensibility.

### E. Stress Testing (Unhappy Paths)
Create Stories that simulate real-world data issues:
1.  **Partial Data:** A story where optional fields (like subtitles or images) are missing. The layout must adjust gracefully.
2.  **Constraint Check:** A story wrapping the molecule in a narrow container to verify text truncation and wrapping behavior.
3.  **Skeleton/Loading:** A story showing the specific Skeleton state of this molecule.

### F. Documentation & DX
* **JSDoc:** Add clear comments explaining complex props, especially those involving data objects.
* **Clean Source:** Ensure the "Show Code" in Storybook is clean.
* **Composed vs. Pre-built:** If component is complex, export both Sub-components and a "Ready-to-use" Main Component.

### G. Accessibility (A11y)
* **Group Semantics:** If the molecule is a list item, use `<li>`. If it's a card, use `<article>` or generic `<div>` with appropriate ARIA roles.
* **Keyboard Navigation:** Ensure tab order flows logically through interactive elements within the molecule.

## 3. DELIVERABLES
* Updated `[COMPONENT_NAME].tsx`
* Updated `[COMPONENT_NAME].stories.tsx`

Proceed with the refactoring now, strictly adhering to the file structure and styling conventions observed in the `docs/`.
