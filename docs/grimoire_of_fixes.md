# THE GRIMOIRE OF FIXES: RESURRECTION COMPLETE

**Necromancer:** The Senior Architect
**Date:** 2024-05-24
**Status:** IMMORTAL

---

## 💀 Rite of Resurrection: Input.tsx - Structural Suicide

**The Rot (Original Sin):**
> "Logic Suicide. `variants` structure is broken. It spreads `...inputVariants.variant` directly into the top level."

**The Purification Strategy:**
Refactored the `Input` component to strictly adhere to Tamagui's nested `variants` structure. The `variants` object now correctly maps `variant` and `size` keys to their respective style maps. "Zombie comments" were exorcised.

**The Immortal Code (Excerpt):**
```typescript
const StyledInput = styled(TamaguiInput, {
  // ...
  variants: {
    variant: inputVariants.variant, // Correct nesting
    size: {
      sm: { ...inputVariants.size.sm, fontSize: '$2' },
      // ...
    }
  } as const,
  // ...
})
```

---

## 💀 Rite of Resurrection: RichText.tsx - The XSS Open Door

**The Rot (Original Sin):**
> "Security Hole. The component exposes `onChange` which returns `editor.getHTML()`. This passes raw, potentially malicious HTML to the parent."

**The Purification Strategy:**
Installed `isomorphic-dompurify` and implemented a mandatory sanitization layer in the `onChange` callback. Malicious scripts are stripped before they leave the component boundary.

**The Immortal Code (Excerpt):**
```typescript
import DOMPurify from 'isomorphic-dompurify'

// ...
onUpdate: ({ editor }) => {
    if (onChange) {
        // 🛡️ Security: Sanitize HTML before passing it up
        const rawHtml = editor.getHTML()
        const cleanHtml = DOMPurify.sanitize(rawHtml)
        onChange(cleanHtml)
    }
},
```

---

## 💀 Rite of Resurrection: Sidebar.tsx - The FOUC Ghost

**The Rot (Original Sin):**
> "UX Failure (FOUC). `HydrationGuard` renders a placeholder `View` with desktop width while waiting for `useEffect`."

**The Purification Strategy:**
Replaced the JS-based `HydrationGuard` logic with CSS/Tamagui media query-based visibility toggles. Both Mobile (Sheet) and Desktop (Panel) components are rendered but hidden/shown via CSS `display` properties based on the breakpoint. This eliminates hydration mismatches and layout shifts.

**The Immortal Code (Excerpt):**
```typescript
// Visible only on 'sm' (mobile)
<YStack display="none" $sm={{ display: 'flex' }}>
  <Sheet>...</Sheet>
</YStack>

// Visible on desktop
<YStack display="flex" $sm={{ display: 'none' }}>
  <DesktopSidebar ... />
</YStack>
```

---

## 💀 Rite of Resurrection: DataTable.tsx - The Performance Killer

**The Rot (Original Sin):**
> "Performance Kill. The table renders all rows... No virtualization. If `data` contains 5,000 rows, the browser will crash."

**The Purification Strategy:**
Enforced strict pagination limits. The table now defaults to a `pageSize` of 10. Added a runtime guard that forcibly enables pagination if the dataset exceeds 100 rows, preventing catastrophic DOM explosions.

**The Immortal Code (Excerpt):**
```typescript
// 🛡️ Guard: Performance Protection
if (!showPagination && data.length > MAX_ROWS_WITHOUT_PAGINATION) {
  console.warn("Forcibly enabling pagination due to large dataset.")
  showPagination = true
}

// ...
initialState: {
  pagination: {
    pageSize: DEFAULT_PAGE_SIZE,
  },
},
```

---

## 💀 Rite of Resurrection: DatePicker.tsx - The Fragile Calendar

**The Rot (Original Sin):**
> "Crash Risk. `format(date)` is called without checking if `date` is a valid Date object."

**The Purification Strategy:**
Imported `isValid` from `date-fns` and wrapped all date operations in strict guards. Invalid dates (e.g., from malformed API responses) now trigger a warning log instead of crashing the React tree.

**The Immortal Code (Excerpt):**
```typescript
const handleSelect = (newDate: Date | undefined) => {
  // 🛡️ Guard: Ensure valid date
  if (newDate && !isValid(newDate)) {
    console.warn('DatePicker: Invalid date', newDate)
    return
  }
  onDateChange?.(newDate)
}
```
