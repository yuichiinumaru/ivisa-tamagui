# TASK: Refactor and Perfect the Atom Component: [COMPONENT_NAME]

## 1. PRE-ASSESSMENT & CONTEXT
**CRITICAL INSTRUCTION:** Before writing any code, rigorously read all documents in the `docs/` folder. Analyze the current codebase state comparatively against the documentation standards.
* **Goal:** Your objective is to elevate the `[COMPONENT_NAME]` component to a "Production-Grade Design System" level.
* **Constraint - Dependency Isolation:** Do NOT install new npm packages or external libraries. Use only the existing stack found in `package.json` (likely React, TailwindCSS, Radix UI/Shadcn, Lucide React). If a feature seems to require a lib, implement a native CSS/React solution instead.

## 2. REFACTORING PROTOCOL (The "Atom Algorithm")
You must execute the following upgrades on `[COMPONENT_NAME].tsx` and `[COMPONENT_NAME].stories.tsx`:

### A. Localization (PT-BR)
* Translate ALL visible text, labels, placeholders, and aria-labels within the component and its stories to **Portuguese (Brazil)**.
* Example: Change "Submit" to "Enviar", "Type here" to "Digite aqui".

### B. API Normalization & Controls
* **Refactor Props:** Ensure every prop exported by the component has a corresponding entry in the Storybook `argTypes`.
* **Strict Controls:** Use specific control types (e.g., `radio` or `select` for variants, `boolean` for toggles) instead of free text.
* **Clean Default Story:** The `Default` story must not have hardcoded JSX children/labels. Move all dynamic content to `args`.

### C. Composition & Slotting
* **Slot Pattern:** Ensure the component supports the `asChild` prop (if applicable/available in the codebase structure) to allow polymorphism (e.g., rendering as a Next.js Link).
* **Icon Slots:** If the component accepts text, implement/verify support for `leftIcon` (prefix) and `rightIcon` (suffix) logic to ensure perfect alignment using Flexbox/Gap.
* **Null Safety:** Ensure the component renders gracefully (or returns null/skeleton) if essential props are missing, without crashing.

### D. Stress Testing (Unhappy Paths)
Create specific Stories to demonstrate resilience:
1.  **Long Text:** A story with a very long string (100+ chars) to verify text wrapping or truncation logic.
2.  **Constraint Check:** A story wrapped in a small container (e.g., `max-w-[100px]`) to verify constraint behavior.
3.  **Loading State:** If applicable, add a visual `loading` state (disabled + spinner) and a corresponding story.

### E. Interaction & Feedback
* **Visual States:** Ensure `:hover`, `:focus-visible`, and `:active` states are clearly defined in Tailwind classes.
* **Play Function:** In the story file, implement a basic `play` function that interacts with the component (clicks, focuses, or types) to assert that events are firing correctly in the "Actions" panel.

### F. Documentation & DX
* **JSDoc:** Add descriptive JSDoc comments (`/** ... */`) above all exported props in the component file.
* **Clean Source:** Configure `parameters.docs.source` if necessary to ensure the "Show Code" tab displays clean, copy-pasteable code.

### G. Accessibility (A11y)
* Ensure semantic HTML (e.g., use `<button>` not `<div>`).
* Verify keyboard navigation (Focus Ring must be visible).
* Ensure adequate color contrast for text in all variants.

## 3. DELIVERABLES
* Updated `[COMPONENT_NAME].tsx`
* Updated `[COMPONENT_NAME].stories.tsx`

Proceed with the refactoring now, strictly adhering to the file structure and styling conventions observed in the `docs/` and existing codebase.
