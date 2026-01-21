# Exploration Phase 3: Source Code Deep Dive

## Theme (`packages/ui/src/theme`)
- **Tokens**: `createTokens` with extensive palettes (Rio Brand, Ivisa Legacy, Semantic).
- **Themes**: `builtThemes` generated via `createThemes` from `@tamagui/theme-builder`.
- **Structure**: `light`/`dark` palettes mapped to `claro`/`escuro` themes.

## Atoms (`packages/ui/src/atoms`)
- **Pattern**: Functional components wrapping `styled` Tamagui components.
- **Examples**:
    - `Button`: Variants (default, secondary, destructive, outline, ghost), sizes.
    - `Alert`: Compound component pattern (`Alert.Title`, `Alert.Description`).
    - `Typography`: Maps semantic HTML tags (`h1`-`h6`, `p`) to Tamagui styled text.

## Molecules (`packages/ui/src/molecules`)
- **Pattern**: Composition of atoms + logic.
- **Examples**:
    - `Card`: "Smart" (data prop) vs "Dumb" (children) modes. `elevated` variant.
    - `DatePicker`: Combines `Input`, `Button`, `Popover`, `Calendar`. Uses `date-fns` (pt-BR).
    - `Select`: Wraps `TamaguiSelect` with custom trigger and sheet adaptation for mobile.

## Organisms (`packages/ui/src/organisms`)
- **Pattern**: Complex logic, external library integration (TanStack Table, React Hook Form).
- **Examples**:
    - `DataTable`: robust implementation with sorting, filtering, pagination.
    - `Sidebar`: Responsive (desktop collapsible, mobile sheet).
    - `Form`: Context-based wrapper for `react-hook-form` components (`FormItem`, `FormField`, etc.).
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
