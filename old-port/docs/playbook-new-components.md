# Playbook: Adding New Components

This playbook outlines the process for adding a new component to the Tamagui design system, ensuring consistency with the project's TDD, FDD, and SDD methodologies.

## 1. Scaffolding and Specification (SDD)

1.  **Create a Spec:** Draft a new component specification in `docs/component-specs.md`. Use `docs/component-spec-template.md` as a starting point. The spec should define:
    *   **Component Name & Description:** A clear title and purpose.
    *   **Props & API:** The component's public interface.
    *   **Behavioral Requirements:** How the component should function, including interactions and states (e.g., hover, focus, disabled).
    *   **Accessibility (A11y) Requirements:** ARIA roles, states, and properties.
    *   **Token Mapping:** How Tamagui tokens (colors, spacing, fonts) should be applied.
    *   **Acceptance Criteria:** A checklist of requirements for the component to be considered "done."

2.  **Update Inventory:** Add the new component to the `docs/component-inventory.md` with a "planned" status.

## 2. Test-Driven Development (TDD)

1.  **Create Test File:** Create a new test file in `tamagui-components-final/tests/`. The file should be named `[ComponentName].test.tsx`.

2.  **Write Failing Tests:** Before writing any implementation code, write a suite of failing tests that cover the acceptance criteria from your spec. These should include:
    *   **Rendering:** Basic rendering of the component and its variants.
    *   **Props:** Assertions for how the component handles different props.
    *   **State Changes:** Tests for different states (e.g., `disabled`, `active`).
    *   **Accessibility:** Assertions for ARIA attributes and roles.
    *   **Snapshots:** Snapshot tests for both web and native to catch unexpected visual regressions.

## 3. Implementation (FDD)

1.  **Create Component File:** Create the component file in the appropriate subdirectory of `tamagui-components-final/src/components/`.

2.  **Implement the Component:** Write the component code, adhering to the spec and the architectural patterns established in `docs/03-architecture.md`. Use Tamagui's styled components and variants to create a flexible and themeable component.

3.  **Pass the Tests:** Iteratively develop the component until all the tests you wrote in the previous step are passing.

## 4. Documentation and Integration

1.  **Update Component Gallery:** Add the new component to the `tamagui-components-final/src/gallery/TamaguiGallery.tsx` so it appears in the visual component library.

2.  **Update `index.ts`:** Export the new component from `tamagui-components-final/src/index.ts`.

3.  **Finalize Documentation:** Update any relevant documentation, including `docs/03-architecture.md` if the new component introduces any new architectural patterns.

4.  **Update Changelog:** Add an entry to `docs/04-changelog.md` under the "[Unreleased]" section, detailing the new component.

## 5. Pull Request and Review

1.  **Create a Pull Request:** Once all the above steps are complete, create a pull request.

2.  **Peer Review:** Have a team member review the PR for code quality, adherence to the spec, and test coverage.

3.  **Merge:** Once the PR is approved, merge it into the main branch.
