# Autopsy Report: The Forensic Code Pathologist

**Pathologist:** Jules (Zero-Mercy Mode)
**Date:** 2024-05-24
**Doctrine:** Atomic Decomposition & Recursive Micro-Analysis

---

## Section 1: The File-by-File Breakdown

### File: `ivisa-tamagui/packages/ui/src/atoms/Input/Input.tsx`
**Shame Score:** 50/100
**Findings:**
* `[Line 16]` **(High)**: **Schizophrenic API Design.** The component uses `children` presence to toggle between two completely different rendering modes (Context Provider vs. Flat Element). This violates the Single Responsibility Principle and confuses consumers.
* `[Line 19]` **(Med)**: **Implicit Context Failure.** `useInputContext` throws an error ("Fail Loudly"), which is good, but the component structure allows `Input.Field` to be imported and used independently without type-level protection, relying on runtime crashes.
* `[Line 142]` **(Nit)**: **Generic Ref Typing.** `React.forwardRef<TamaguiElement, ...>` uses `TamaguiElement` which is too broad. It should be `HTMLInputElement | TextInput` depending on the platform or a specific unified type.
* `[Line 21]` **(Nit)**: **Vague Variable Name.** `inputVariants` is descriptive, but inside `variants` prop (Line 80), it's spread `...inputVariants.size.sm`. This coupling suggests the styled component definition is too far from its variant map.

### File: `ivisa-tamagui/packages/ui/src/organisms/DataTable/DataTable.tsx`
**Shame Score:** 40/100
**Findings:**
* `[Line 75]` **(High)**: **Prop Mutation.** `showPagination = true` explicitly mutates the function argument. This is a cardinal sin in React functional components. Props are read-only.
* `[Line 76]` **(Med)**: **Magic Number/Logic Coupling.** `MAX_ROWS_WITHOUT_PAGINATION` (100) is hardcoded. If a user wants 101 rows without pagination for a specific reason (e.g., printing), they are blocked by this "Nanny Code".
* `[Line 73]` **(Nit)**: **Zombie Comment.** `// 🛡️ Guard: Performance Protection`. The emoji is cute but unprofessional code clutter. Code should be self-documenting.
* `[Line 115]` **(Nit)**: **Loose Typing.** `marginHorizontal="$true"`. In Tamagui, `$true` is often valid but semantically meaningless for spacing. It should be a specific token like `$4` or `$md`.
* `[Line 215]` **(Low)**: **Accessibility Gap.** `NoResultsCell` just renders text. It lacks `role="status"` or `aria-live="polite"` to inform screen readers that the search yielded no results.

### File: `ivisa-tamagui/apps/expo/App.tsx`
**Shame Score:** 20/100
**Findings:**
* `[Line 16]` **(Critical)**: **Hardcoded Strings.** "Chat", "Dashboard", "Settings" are hardcoded. This prevents localization (i18n) and is a technical debt factory.
* `[Line 39]` **(High)**: **Style Override with Magic Numbers.** `borderBottomLeftRadius={0}`. Overriding theme tokens with raw numbers defeats the purpose of a design system.
* `[Line 9]` **(Med)**: **Wrapper Hell.** `SafeView` is a styled `SafeAreaView`. Why? It just adds `flex: 1`. This could be inline or a standard atom. It creates unnecessary indirection.
* `[Line 23]` **(Nit)**: **Zombie Comment.** `// TODO: Replace with proper i18n`. If you know it's wrong, fix it. Don't leave a tombstone.

### File: `ivisa-tamagui/packages/ui/src/molecules/OTPInput/OTPInput.tsx`
**Shame Score:** 60/100
**Findings:**
* `[Line 270]` **(High)**: **Security Risk.** `type: mask ? 'password' : 'text'`. Using `type="password"` for OTPs is dangerous. Password managers will try to save the OTP as the user's login password. Use `type="text"` with `autocomplete="one-time-code"`.
* `[Line 118]` **(Med)**: **Web/Native Divergence.** The `useEffect` and event handlers are heavily guarded with `isWeb` checks or distinct logic (Line 275). This "split-brain" component is hard to maintain and test. It should likely be split into `OTPInput.web.tsx` and `OTPInput.native.tsx`.
* `[Line 45]` **(Nit)**: **Inefficient Regex.** `/[a-z0-9]/i` is created inside the function `sanitizeChar` on every keystroke (indirectly). Compile regexes outside functions.
* `[Line 118]` **(Med)**: **Mutable Ref Arrays.** `inputRefs.current[index] = node`. While standard for managing focus, manually managing an array of refs is error-prone. One off-by-one error (e.g. in `handleKeyDown`) breaks the entire flow.

### File: `ivisa-tamagui/packages/ui/src/tamagui.config.ts`
**Shame Score:** 80/100
**Findings:**
* `[Line 20]` **(High)**: **Magic Numbers in Theme.** Font sizes (e.g., `8: 48`) are hardcoded integers. These should ideally reference a primitive scale to ensure consistency across properties (e.g., spacing vs font size).
* `[Line 126]` **(Nit)**: **Shorthand Overload.** The config defines every shorthand under the sun (`ac`, `ai`, `als`...). While convenient, it raises the learning curve and encourages cryptic code (`<Stack ai="center" jc="center" />` vs `<Stack alignItems="center" ... />`).
* `[Line 45]` **(Med)**: **Font Face Mapping.** `400: { normal: 'CeraPro-Regular' }`. This assumes the font is loaded globally with that exact postscript name. If the font loading fails or the name differs on Android, the app crashes or looks broken. Needs a fallback system.

### File: `ivisa-tamagui/packages/ui/src/molecules/Select/Select.test.tsx`
**Shame Score:** 10/100
**Findings:**
* `[Line 7]` **(Critical)**: **Skipped Tests.** `it.skip(...)`. The main functionality of the component is NOT tested. This file is essentially a placebo. It passes "green" but verifies nothing.
* `[Line 39]` **(High)**: **Defeatist Comment.** `// TODO: Fix Radix Select interaction in JSDOM`. The developer gave up. If JSDOM is insufficient, use Playwright/E2E. Leaving a skipped test is creating false confidence.

### File: `AGENTS.md`
**Shame Score:** 70/100
**Findings:**
* `[Line 5]` **(Med)**: **Vague Instruction.** "NEVER use rm -rf". While good advice, it lacks system enforcement (e.g., a pre-commit hook or shell alias). It relies on developer discipline, which is non-existent.
* `[Line 24]` **(Nit)**: **Duplicate Truth.** It lists the `docs/` structure again. This is redundant with `docs/00-draft.md` or the directory listing itself. If `AGENTS.md` gets out of sync, it becomes a lie.

---

## Section 2: The Consolidated Table of Shame

| Severity | File:Line | Error Type | Description | The Fix |
| :--- | :--- | :--- | :--- | :--- |
| **CRITICAL** | `apps/expo/App.tsx:16` | Hygiene | Hardcoded user-facing strings ("Chat", "Dashboard"). | Implement proper i18n dictionaries. |
| **CRITICAL** | `molecules/Select/Select.test.tsx:7` | Testing | `it.skip` used on primary functionality. Code is effectively untested. | Unskip and fix mocks, or move to E2E testing. |
| **HIGH** | `atoms/Input/Input.tsx:16` | Logic | Schizophrenic API (Conditional Context). | Split into `Input` (Simple) and `InputComposite`. |
| **HIGH** | `organisms/DataTable/DataTable.tsx:75` | Logic | Mutating Props (`showPagination = true`). | Use derived state/variable `shouldPagination`. |
| **HIGH** | `molecules/OTPInput/OTPInput.tsx:270` | Security | `type="password"` for OTP inputs. | Use `type="text"` + `autocomplete="one-time-code"`. |
| **HIGH** | `tamagui.config.ts:20` | Styling | Magic numbers in font definition. | Abstract into a `scales` object or tokens. |
| **MED** | `molecules/OTPInput/OTPInput.tsx:118` | Complexity | Web/Native split logic in one file. | Split into `.web.tsx` and `.native.tsx`. |
| **MED** | `atoms/Input/Input.tsx:19` | Reliability | Implicit Context dependency for `Input.Field`. | Enforce context at type level or handle missing context gracefully. |
| **MED** | `tamagui.config.ts:45` | Reliability | Fragile Font Face mapping without fallbacks. | Add system font fallbacks. |
