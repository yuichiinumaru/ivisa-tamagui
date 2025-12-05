# Integration Plan: Shadcn to Tamagui

## 1. Executive Summary
This document outlines the strategy to integrate new components (referenced from `_referencias`, typically Shadcn/UI adaptations) into the `ivisa-tamagui` design system. The goal is to maintain the "Frankenstein" architecture: utilizing Tamagui for styling and Headless libraries (Radix, TanStack) for logic, ensuring full compatibility with Storybook and Native targets.

## 2. Current State Assessment
Before integration can proceed effectively, the following environmental issues must be addressed:

### 🔴 Blockers
*   **Missing Source Files**: The folder `_referencias` (or `📚_referencias-headless`) is currently missing from the repository.
*   **Broken Test Suite**: Unit tests in `packages/ui/tests/migrated` fail due to incorrect relative import paths (e.g., `../../../src` instead of `../../../../src`).
*   **Outdated Verification Script**: `scripts/visual-check.cjs` references incorrect Storybook IDs (e.g., `atoms-ivisabutton` instead of `atoms-button`), rendering automated visual checks unreliable.

### ✅ Ready
*   **Architecture**: The `atoms/molecules/organisms` structure is well-established.
*   **Storybook**: The server is functional, and most existing components have stories.

## 3. Integration Protocol (The "Frankenstein" Method)

For each component found in `_referencias`, follow this standardized process:

### Phase 1: Analysis
1.  **Identify Logic vs. Style**: Determine if the component is purely visual (Atom) or requires state/behavior (Molecule/Organism).
2.  **Select Headless Primitive**:
    *   If the component relies on complex interaction (e.g., `Accordion`, `Dialog`), identify the corresponding Radix UI primitive or Headless library (as defined in `AGENTS.md`).
    *   *Constraint*: Do not copy Shadcn's `class-variance-authority` (CVA) or Tailwind classes. Convert them to Tamagui `styled` variants.

### Phase 2: Implementation
1.  **Create Directory**:
    *   Path: `packages/ui/src/[type]/[Component]/`
    *   Files: `[Component].tsx`, `[Component].stories.tsx`, `[Component].test.tsx`, `index.ts`.
2.  **Code Structure**:
    ```tsx
    // packages/ui/src/[type]/[Component]/[Component].tsx
    import { styled } from 'tamagui'
    // import headless lib if needed

    const ComponentFrame = styled(Stack, {
      // Convert Shadcn/Tailwind classes to Tamagui tokens here
      backgroundColor: '$background',
      padding: '$4',
      variants: { ... }
    })

    export const Component = ComponentFrame
    ```
3.  **Native Support**:
    *   Ensure all imports are Web/Native compatible.
    *   If using a Web-only library (like some Radix primitives), provide a `[Component].native.tsx` fallback or implementation.

### Phase 3: Documentation & Verification
1.  **Storybook**:
    *   Create stories that mirror the Shadcn examples (Default, Secondary, Destructive, etc.).
    *   Ensure `argTypes` are defined for interactive controls.
2.  **Testing**:
    *   Write unit tests using `@testing-library/react` (or `react-native` equivalent via the unified runner).
    *   **Crucial**: Verify the component exports correctly in `packages/ui/src/index.ts`.

## 4. Execution Roadmap

### Step 1: Environment Repair (Immediate)
*   [ ] Fix relative import paths in `packages/ui/tests/migrated`.
*   [ ] Update `scripts/visual-check.cjs` to match actual Storybook IDs.
*   [ ] Run `pnpm lint` and resolve outstanding issues.

### Step 2: Reference Acquisition
*   [ ] Locate or clone the `_referencias` folder containing the source components.

### Step 3: Component Integration
*   [ ] Iterate through the reference list and apply the Integration Protocol above.
