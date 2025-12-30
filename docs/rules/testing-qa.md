# docs/rules/testing-qa.md — TESTING & QA PROTOCOLS

> **CONTEXT**: Load this file when writing tests, debugging, or verifying tasks.

---

## 1. THE "NO FAKE TESTS" RULE
**Target**: Preventing tests that pass by accident or vacuity.

* **Forbidden**: `expect(true).toBe(true)` or testing constants against constants.
* **Required**: Tests must assert **behavior**, not implementation details.
* **The "Red-Green" Check**: If possible, see the test FAIL first before making it PASS. If you write a test for existing code, break the code intentionally to ensure the test catches it.

---

## 2. REGRESSION TESTING PROTOCOL
**Target**: Protecting critical business logic.

If you are refactoring critical paths (Billing, Auth, Data Integrity):
1.  **Freeze**: Create a test case that asserts the *current* (correct) behavior.
2.  **Refactor**: Change the code.
3.  **Verify**: Ensure the test still passes without modification.

---

## 3. DEPRECATION HANDLING
**Target**: Keeping the codebase modern.

If a linter or compiler warns about "Deprecated":
1.  **Do NOT Ignore**: Do not suppress the warning with `// @ts-ignore` unless absolutely necessary.
2.  **Consult**: Check `docs/libs/` or official docs for the migration path.
3.  **Upgrade**: Use the modern alternative immediately.

---

## 4. TEST STRUCTURE STANDARD
* **Unit Tests**: Mock external dependencies (DB, APIs). Test logic in isolation.
* **Integration Tests**: Use a real (test) database/container. Test the flow.
* **Naming**: `should [expected behavior] when [condition]`.
    * *Bad*: `testLogin`
    * *Good*: `should return 401 when password is incorrect`