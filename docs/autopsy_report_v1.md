# Forensic Code Autopsy Report: Case #2024-05-22

**Pathologist:** Senior Engineer Forensic Pathologist
**Subject:** `ivisa-tamagui` (Tissue Sample: 6 Files)
**Cause of Death:** Multiple Organ Failure (Type Safety, Logic, & Architecture)

---

## Section 1: The File-by-File Breakdown

### File 1: `packages/ui/src/atoms/Input/Input.tsx`
**Shame Score:** 20/100 (Critical Condition)
**Findings:**
* `[Line 1]` **(Nitpick)**: Imports `useContext` but `React` is default import. Standardize.
* `[Line 80]` **(High)**: **Polymorphic Chaos**. The component returns either an `Input` or a `View` (Frame) depending on `children` prop. This changes the DOM node type dynamically, breaking refs and accessibility expectations.
* `[Line 124]` **(Critical)**: `eslint-disable-next-line @typescript-eslint/no-explicit-any`. Willful ignorance of type safety.
* `[Line 125]` **(Critical)**: `ref={ref as any}`. The "God Cast". You are forcing a square peg (`View` ref) into a round hole (`Input` ref). This will crash at runtime if a user tries to call `focus()` on the Frame.
* `[Line 156]` **(Med)**: `Object.assign`. While common, it obscures the type definition of the `Input` compound component.

### File 2: `packages/ui/src/organisms/Sidebar/Sidebar.tsx`
**Shame Score:** 30/100 (Severe Trauma)
**Findings:**
* `[Line 3]` **(Nitpick)**: Imports `useMedia`.
* `[Line 21]` **(Critical)**: `if (media.sm) { return ... }`. **Hydration Mismatch**. The server (Node) does not know the screen size. It renders Desktop. The client (Browser) sees Mobile. React throws a hydration error and repaints. This is performance suicide.
* `[Line 40]` **(Med)**: `width={... ? 60 : 280}`. **Magic Numbers**. Why 60? Why 280? Define these as constants or tokens.
* `[Line 61]` **(Med)**: `right={-15}`. Negative margins are a sign of "fighting the framework".

### File 3: `packages/ui/src/molecules/ContextMenu/ContextMenu.native.tsx`
**Shame Score:** 0/100 (Dead on Arrival)
**Findings:**
* `[Line 1-19]` **(Critical)**: **The Phantom Component**. Every export is a functional no-op. `ContextMenuContent` returns `null`. `ContextMenuTrigger` returns `children`.
* `[Line 7]` **(High)**: `eslint-disable` used to hide the fact that `_children` is unused because the component does nothing.
* `[Line 13]` **(Nitpick)**: `height={1}`. Magic number for separator.

### File 4: `packages/ui/src/molecules/Sheet.tsx`
**Shame Score:** 50/100 (Identity Crisis)
**Findings:**
* `[Line 11]` **(High)**: **Semantic Dishonesty**. "Shadcn Sheet is a sidebar... Tamagui Sheet is a bottom sheet." You are aliasing a Bottom Sheet as a Sidebar. This misleads the consumer and the user.
* `[Line 48]` **(Med)**: `SheetContent` wraps `SheetOverlay` and `SheetHandle`. In Tamagui, `Overlay` is typically a sibling to the Frame (Content), not a child. This might cause z-index layering issues.
* `[Line 17]` **(Med)**: `opacity: 0.5`. Hardcoded value. Should be a token.

### File 5: `packages/ui/src/organisms/DataTable/DataTable.tsx`
**Shame Score:** 60/100 (Infected)
**Findings:**
* `[Line 98, 118, 125]` **(High)**: `style={{ flex: 1, minWidth: 100 }}`. **Inline Styles**. In a design system using Tamagui (an optimizing compiler), inline style objects defeat the purpose. Use `styled` components or Tamagui props (`flex={1} minWidth={100}`).
* `[Line 125]` **(Med)**: `padding: 20`. Magic number. Use `$4` or tokens.
* `[Line 94]` **(Med)**: Nested `.map()` calls inside the render function. While standard for tables, it reduces readability. Consider extracting `renderHeader` and `renderRows`.
* `[Line 144]` **(Nitpick)**: Pagination controls are hardcoded to "Previous" / "Next" text. Not localizable.

### File 6: `packages/ui/src/organisms/Form/Form.tsx`
**Shame Score:** 40/100 (Unstable)
**Findings:**
* `[Line 12]` **(Critical)**: `React.createContext({} as FormFieldContextValue)`. **The Lie**. You initialize context as `{}` but tell TS it has `name`. It does not.
* `[Line 39]` **(High)**: `if (!fieldContext)`. Since the default is `{}`, this check is always false (object is truthy). `fieldContext.name` will be `undefined`, causing `getFieldState` to potentially throw obscure errors.
* `[Line 119]` **(Med)**: `id={formItemId}` on a `View`. React Native `View` components do not support `id`. This is web-centric thinking leaking into cross-platform code.
* `[Line 67]` **(Med)**: `value={{ id }}`. You are creating a new object identity on every render, forcing all consumers of `FormItemContext` to re-render. Memoize this.

---

## Section 2: The Consolidated Table of Shame

| Severity | File:Line | Error Type | Description | The Fix |
| :--- | :--- | :--- | :--- | :--- |
| **CRITICAL** | `Input.tsx:125` | Type Safety | `ref={ref as any}` casting. | Remove `any`, fix ref types. |
| **CRITICAL** | `Input.tsx:124` | Linting | `eslint-disable` for `any`. | Remove disable, fix code. |
| **CRITICAL** | `Sidebar.tsx:21` | Logic/SSR | Hydration mismatch via `useMedia`. | Use `<ClientOnly>` or CSS media queries. |
| **CRITICAL** | `ContextMenu.native.tsx:All` | Logic | Component is a no-op stub. | Implement Native ActionSheet. |
| **CRITICAL** | `Form.tsx:12` | Type Safety | Context `{} as Type` lying to compiler. | Init with `null`, check for `null`. |
| **HIGH** | `Input.tsx:80` | Architecture | Dynamic root element (View vs Input). | Split into two components. |
| **HIGH** | `Sheet.tsx:11` | Semantic | Aliasing Bottom Sheet as Sidebar. | Rename or implement true Sidebar. |
| **HIGH** | `DataTable.tsx:98` | Style | Inline `style` objects in Tamagui. | Use Tamagui props/tokens. |
| **HIGH** | `Form.tsx:39` | Logic | Ineffective null check for Context. | Check `Object.keys` or use `null`. |
| **MED** | `Sidebar.tsx:40` | Hygiene | Magic Numbers (60, 280). | Extract constants. |
| **MED** | `Sidebar.tsx:61` | Hygiene | Negative Margins. | Fix layout structure. |
| **MED** | `DataTable.tsx:144` | i18n | Hardcoded strings. | Use props or i18n lib. |
| **MED** | `Form.tsx:67` | Perf | Unmemoized Context value. | Use `useMemo`. |

**Autopsy Conclusion:**
The patient died from a combination of **Type Deception** (lying to the compiler) and **Platform Schizophrenia** (treating Native like Web). Immediate resuscitation required via strict typing and platform-specific implementations.
