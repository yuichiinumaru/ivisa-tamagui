# Exploration Phase 3: Source Code Deep Dive

## Atomic Design Implementation

### Theme (`packages/ui/src/theme`)
- **Tokens**: Extensive palette including "Rio Brand" colors (`rioDeepBlue`) and legacy mappings.
- **Themes**: `light`/`dark` mapped to `claro`/`escuro`. Generated via `@tamagui/theme-builder`.
- **Typing**: `tokens.ts` exports `createTokens` result.

### Atoms (`packages/ui/src/atoms`)
- **Philosophy**: Small, single-responsibility components.
- **Button**: `styled(View)` with variants (default, secondary, destructive, outline, ghost). Supports icons and loading state.
- **Alert**: Compound component (`Alert.Title`, `Alert.Description`).
- **Typography**: Maps semantic HTML tags (`h1`-`h6`, `p`) to Tamagui components.

### Molecules (`packages/ui/src/molecules`)
- **Card**: "Smart" (data prop) vs "Dumb" (children) modes. built on `YStack`.
- **DatePicker**: Composes `Input`, `Popover`, `Calendar`. Uses `date-fns` with `ptBR`.
- **Select**: Adapts `TamaguiSelect` with custom triggers and sheets for mobile.

### Organisms (`packages/ui/src/organisms`)
- **DataTable**:
    - Powered by `@tanstack/react-table`.
    - Features: Sorting, Filtering, Pagination (enforced for >100 rows).
    - Localization: Built-in support (pt-BR default).
- **Sidebar**:
    - Responsive: Collapsible sidebar on desktop, Sheet on mobile.
    - States: Loading (Skeleton), Empty, Error.
- **Form**:
    - `react-hook-form` integration.
    - Context-based `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage`.
    - Closely matches *shadcn/ui* API.

## Observations
- **Code Quality**: High. Strong typing, consistent use of `styled` factory, careful handling of props (e.g., `...rest` spreading).
- **Accessibility**: ARIA roles present (`role="alert"`, `aria-label`).
- **Performance**: `useMemo` in DataTable, explicit optimization comments.
- **Testing**: Tests are co-located (`.test.tsx`).
