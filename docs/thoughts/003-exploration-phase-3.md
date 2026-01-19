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
