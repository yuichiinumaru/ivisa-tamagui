# The Grimoire of Fixes: Resurrection of `ivisa-tamagui`

**Necromancer:** Senior Architect Necromancer
**Date:** 2024-05-22
**Status:** **RESURRECTED**

This document records the rites performed to purge weakness from the codebase.

---

### 💀 Rite of Resurrection: `Form.tsx` - Type Safety & Context Integrity

**The Rot (Original Sin):**
> `React.createContext({} as FormFieldContextValue)`
> *Lying to the compiler by casting an empty object to a required type. This leads to silent runtime failures.*

**The Purification Strategy:**
Initialized contexts with `null`. Implemented strict guards in hooks (`useFormField`) to throw loud, descriptive errors if used outside a provider. Memoized context values to prevent render thrashing.

**The Immortal Code:**
```typescript
const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }
  // ...
}
```

---

### 💀 Rite of Resurrection: `Input.tsx` - Strict Typing & Ref Unification

**The Rot (Original Sin):**
> `ref={ref as any}` and `eslint-disable-next-line @typescript-eslint/no-explicit-any`
> *The "God Cast" bypassing all type safety.*

**The Purification Strategy:**
Unified the `ref` type to `TamaguiElement` (which covers both Web `HTMLElement` and Native `View`). Removed the `any` cast. Removed the ineffective `withErrorLogging` wrapper.

**The Immortal Code:**
```typescript
const InputImpl = React.forwardRef<TamaguiElement, InputProps>(
  ({ ...props }, ref) => {
    // ...
    // No more casting.
    return <StyledInput ref={ref} {...props} />
  }
)
```

---

### 💀 Rite of Resurrection: `Sidebar.tsx` - SSR Hydration Safety

**The Rot (Original Sin):**
> `if (media.sm) { return ... }`
> *Conditional rendering based on hook state causes server/client HTML mismatches (Hydration Error).*

**The Purification Strategy:**
Implemented a `ClientOnly` component to ensure the component only renders after mounting on the client, preventing mismatches. Extracted magic numbers (`60`, `280`) to named constants.

**The Immortal Code:**
```typescript
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;
  return <>{children}</>;
};
```

---

### 💀 Rite of Resurrection: `DataTable.tsx` - Style Extraction

**The Rot (Original Sin):**
> `style={{ flex: 1, minWidth: 100 }}`
> *Inline style objects prevent compiler optimization and break design token usage.*

**The Purification Strategy:**
Replaced inline styles with `styled()` components (`TableCellFrame`, `NoResultsCell`) and extracted magic numbers to constants.

**The Immortal Code:**
```typescript
const TableCellFrame = styled(View, {
  flex: 1,
  minWidth: MIN_COLUMN_WIDTH,
})
```

---

### 💀 Rite of Resurrection: `ContextMenu.native.tsx` - Honest Stubs

**The Rot (Original Sin):**
> *Silent failure stubs hiding unused variable warnings with `eslint-disable`.*

**The Purification Strategy:**
Removed lint suppressions. Cleaned function signatures. Added explicit comments acknowledging the stub status.

---

**Verification Spell:**
Run `pnpm typecheck` (or `tsc --noEmit`) to verify that `Form.tsx` and `Input.tsx` no longer generate generic type errors.
