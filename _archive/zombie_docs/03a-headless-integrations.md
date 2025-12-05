# Headless Integrations & Upgrade Strategy

## Philosophy
We follow a "Frankenstein Controlado" strategy:
1.  **Headless for Logic**: Use battle-tested libraries for complex logic (state, accessibility, interactions).
2.  **Tamagui for UI**: Wrap these libraries with Tamagui styled components for consistent theming and cross-platform support.

## Current Integrations

| Feature | Library | Wrapper Component |
| :--- | :--- | :--- |
| **Forms** | `react-hook-form` + `zod` | `Form` (Organism) |
| **Data Tables** | `@tanstack/react-table` | `DataTable` (Organism) |
| **Date Picker** | `@rehookify/datepicker` | `Calendar`, `DatePicker` (Molecules) |
| **Carousel** | `embla-carousel-react` | `Carousel` (Organism) |
| **Charts** | `victory-native` / `victory` | `Charts` (Organism) |

## Upgrade Strategy

1.  **Version Pinning**: We pin versions of headless libraries to avoid breaking changes in patch updates.
2.  **Wrapper Isolation**: Direct dependency on the headless library should be limited to the wrapper component (e.g., `DataTable.tsx`). Consumers should use the wrapper, not the library directly.
3.  **Breaking Changes**:
    - If a headless library introduces a breaking change, we update the wrapper to handle it.
    - We aim to keep the *public API* of our wrapper stable, even if the internal library changes significantly.

## Adding New Integrations
- Prefer libraries that are "headless" (no styles included).
- Check for React Native compatibility if the component is needed on mobile.
- Create a clear interface in the wrapper that exposes necessary functionality without leaking too much of the underlying library's complexity.
