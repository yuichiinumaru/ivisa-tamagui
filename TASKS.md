# GRAND_UNIFIED_AUDIT v3.0: Master Fix Queue

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Priority: `P0` (Critical), `P1` (High), `P2` (Medium), `P3` (Low)

---

## Q_bug: Critical Bug Fixes

### 1. [ ] Fix the Entire Unit Test Suite (P0)
- **TDD Spec:**
  - **Given:** A clean checkout of the repository.
  - **When:** The command `pnpm test` is executed from the `ivisa-tamagui` directory.
  - **Then:** The command must exit with code 0, and the test runner must report that all test suites have passed.
- **Notes:** All 28 test files in `packages/ui/tests/migrated` are failing due to incorrect relative import paths. This is the highest priority task, as no code changes can be safely verified until the test suite is functional.

---

## Q_sec: Security Enhancements

### 2. [ ] Implement Security Scanning (P1)
- **TDD Spec:**
  - **Given:** A package.json with a new `scan:security` script.
  - **When:** The command `pnpm run scan:security` is executed.
  - **Then:** A security scanner (e.g., `snyk`, `npm audit`) runs and reports on known vulnerabilities. The script should be configured to fail the build if critical vulnerabilities are found.
- **Notes:** The initial audit revealed a lack of dedicated security scanning tools. This task involves researching and integrating a suitable tool into the CI/CD pipeline.

---

## Q_tech: Technical Debt Reduction

### 3. [ ] Resolve All Linting Errors (P1)
- **TDD Spec:**
  - **Given:** A fully linted codebase.
  - **When:** The command `pnpm lint` is executed from the `ivisa-tamagui` directory.
  - **Then:** The command must exit with code 0 and report no errors.
- **Notes:** The initial scan identified 74 ESLint errors, primarily related to unused variables and `any` types. Fixing these will improve code quality and maintainability.

---

## Q_doc: Documentation and Missing Components

### 4. [ ] Restore Visual Testing Capabilities (P2)
- **TDD Spec:**
  - **Given:** A new script at `scripts/visual-check.js`.
  - **When:** The command `node scripts/visual-check.js` is executed from the `ivisa-tamagui` directory.
  - **Then:** The script should execute without errors, indicating that the visual testing harness is functional.
- **Notes:** The `visual-check.js` script, mentioned in the `AGENTS.md`, is missing. This task is to recreate or restore this script.

### 5. [ ] Implement Missing Components (P2)
- **TDD Spec:**
  - **Given:** New component files for `Menubar` and `ToggleGroup`.
  - **When:** The components are rendered in a test environment.
  - **Then:** The components should render without errors and have basic stories created for them in Storybook.
- **Notes:** The `Menubar` and `ToggleGroup` components were identified as missing during the integrity scan.

### 6. [ ] Document `ComponentErrorBoundary` (P3)
- **TDD Spec:**
  - **Given:** A new story file for `ComponentErrorBoundary.tsx`.
  - **When:** Storybook is run.
  - **Then:** The `ComponentErrorBoundary` should be visible and interactive in the Storybook UI.
- **Notes:** The `ComponentErrorBoundary.tsx` component is the only component without documentation or stories.
