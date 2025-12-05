# How to Add a New Component

This guide outlines the standard process for adding a new component to the `@ivisa/ui` package.

## 1. Determine Component Type

Before starting, identify the type of component you are building:

| Type | Description | Location | Examples |
| :--- | :--- | :--- | :--- |
| **Atom** | Basic building block. Direct wrapper around Tamagui. | `src/atoms/` | `Button`, `Input`, `Label` |
| **Molecule** | Group of atoms or simple composite. | `src/molecules/` | `Card`, `Select`, `Dialog` |
| **Organism** | Complex UI logic, often wrapping a headless library. | `src/organisms/` | `DataTable`, `Form`, `Sidebar` |

## 2. Check Reference Implementation

We use a "Frankenstein" approach. Check these references in priority order:
1. **Tamagui Docs**: Is there a primitive? (e.g. `Sheet`, `Dialog`)
2. **Headless Libraries**: Do we need logic? (e.g. `cmdk`, `tanstack-table`)
3. **Reference Repos**: Check `pogiii/sushi` or `tamagui-kitchen-sink` (in `referencias/` or online).

## 3. Create Files

Create the component directory in the appropriate folder (e.g., `src/atoms/MyComponent/`).

Structure:
```
src/atoms/MyComponent/
├── MyComponent.tsx          # Implementation
├── MyComponent.stories.tsx  # Storybook stories
├── MyComponent.test.tsx     # Unit tests
└── index.ts                 # Export file
```

### Implementation (`MyComponent.tsx`)
- Use `styled` from `tamagui` for atoms.
- Use `React.forwardRef` and wrap with `TamaguiElement` type if needed.
- Ensure strict typing (avoid `any`).

```tsx
import { styled, View } from 'tamagui'

export const MyComponent = styled(View, {
  name: 'MyComponent',
  backgroundColor: '$background',
  // ... styles
})
```

### Stories (`MyComponent.stories.tsx`)
- Define `component`, `title`, and `parameters.docs.description.component`.
- Add variations (Default, Sizes, Colors).

### Tests (`MyComponent.test.tsx`)
- Use `render` from `packages/ui/vitest.setup.tsx` (it wraps with Providers).
- Test rendering and basic interactions.

## 4. Export

Add the component to `src/atoms/index.ts` (or molecules/organisms index).
Then ensure it is exported in the main `src/index.ts` if it belongs there.

## 5. Verify

1. **Lint**: Run `pnpm lint`.
2. **Test**: Run `pnpm test` to ensure unit tests pass.
3. **Visual**: Run `pnpm storybook` and check rendering.
4. **Accessibility**: Run `node scripts/accessibility-check.js` (if available).

## 6. Commit

Follow the project's commit message convention.

## 7. Agent & Automation Rules

If you are an AI agent or using automation:
- **Read `AGENTS.md`**: It contains critical rules and context.
- **Do not verify via browser**: Use `scripts/visual-check.js` (if active) or `scripts/accessibility-check.js`.
