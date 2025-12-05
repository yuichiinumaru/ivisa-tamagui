# The Quality Indictment

## Section 1: The Table of Lies

| Severity | File/Test | The Lie (Crime) | Why it is dangerous | The Fix |
| :--- | :--- | :--- | :--- | :--- |
| **CRITICAL** | `apps/expo/App.integration.test.tsx` | **Over-Mocking (The Echo Chamber)** | Mocks the entire Design System (`@ivisa/ui`) AND `tamagui`. It tests the *Mock*, not the App. | Remove global component mocks. Test against real `AppProviders` and components, or use shallow rendering only where strictly necessary. |
| **CRITICAL** | `apps/expo/App.test.tsx` | **Assertionless Runner (Cowardice)** | `expect(toJSON()).toBeDefined()` verifies nothing but "it didn't crash". | Assert presence of specific text, IDs, or accessibility labels. |
| **HIGH** | `packages/ui/src/atoms/Input/Input.test.tsx` | **Happy Path Bias** | Only tests that inputs render. Ignores validation, missing context errors (which the code claims to handle), or focus states. | Add negative tests: "Should throw if `Input.Field` used outside `Input.Box`". |
| **HIGH** | `packages/ui/src/molecules/OTPInput/OTPInput.test.tsx` | **Mocking Illusions (JSDOM)** | Tests fail because they assume JSDOM handles focus/input events like a browser. | Use `userEvent` properly with `await`, or integration test in a real browser via Playwright. |
| **MED** | `packages/ui/src/molecules/Select/Select.test.tsx` | **Implementation Leakage** | Manually mocking `window.HTMLElement.prototype.hasPointerCapture` inside the test. | Move global DOM mocks to `vitest.setup.tsx` or `test-setup.ts`. |
| **MED** | `packages/ui/src/organisms/DataTable/DataTable.test.tsx` | **Happy Path Bias** | Tests rendering with 1 row. No pagination tests, no sorting, no empty state check. | Add tests for: Empty data, Sorting click, Pagination interaction. |

---

## Section 2: The Necromancy of Verification (The Fixes)

### A. The Test Resurrection: `Input.test.tsx`

**The Rot (Original Sin):**
> "Only tests that inputs render. Ignores validation, missing context errors."

**The Immortal Test:**

```tsx
// ivisa-tamagui/packages/ui/src/atoms/Input/Input.test.tsx
import { render, screen } from '../../../vitest.setup'
import { describe, it, expect, vi } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  // 1. The Happy Path (Value)
  it('renders standard input with placeholder', () => {
    render(<Input placeholder="test" />)
    expect(screen.getByPlaceholderText('test')).toBeInTheDocument()
  })

  // 2. The Verification of State (Structure)
  it('renders composed input correctly', () => {
    render(
      <Input.Box>
        <Input.Field placeholder="composed" />
        <Input.Button>Submit</Input.Button>
      </Input.Box>
    )
    expect(screen.getByPlaceholderText('composed')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  // 3. The Law of Determinism (Negative Testing)
  it('fails loudly if Input.Field is used without context', () => {
    // Suppress console.error for the expected throw
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => render(<Input.Field placeholder="orphan" />)).toThrow(
      'Input compound components (Input.Field, Input.Icon, Input.Button) must be used within <Input.Box>'
    )

    consoleSpy.mockRestore()
  })
})
```

### B. The Coverage Mandate

**Missing Critical Scenarios:**

1.  **DataTable Pagination:** The `DataTable.tsx` has logic to *force* pagination if rows > 100.
    *   *Mandate:* Create a test passing 101 items and asserting pagination controls appear even if `showPagination={false}`.
2.  **App Integration:** The current `App.integration.test.tsx` is a "Mock of a Mock".
    *   *Mandate:* Delete the `@ivisa/ui` mock. The integration test should use the *real* UI library to verify the contract between App and UI. Only mock native modules (Camera, FileSystem).
3.  **OTP Security:**
    *   *Mandate:* Verify `autocomplete="one-time-code"` attribute presence in `OTPInput.test.tsx`.

---

**Final Instruction:**
Proceed to rewrite the tests. Start with `Input.test.tsx` (to prove the "Fail Loudly" doctrine works) and `DataTable.test.tsx` (to cover the business logic). Do not touch `App.integration.test.tsx` yet as it requires a larger refactor of the test environment.
