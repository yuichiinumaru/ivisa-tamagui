# Exploration Phase 2: Dependency and Configuration Analysis

## Workspace Structure
- **Root**: Manager for workspaces.
- **Workspaces**:
    - `@ivisa/ui` (`packages/ui`): Core design system package.
    - `@ivisa/forms` (`packages/forms`): Form handling (seen in tsconfig paths, though not deeply analyzed yet).
    - `ivisa-expo` (`apps/expo`): Consumer app (Expo/React Native).

## Dependencies
- **Core**: `react`, `react-dom`, `react-native-web`.
- **Design System**: `tamagui` (v1.143.1), `@tamagui/*`.
- **Headless**: `@radix-ui/*` (collapsible, context-menu, dropdown-menu, etc.), `react-hook-form`, `zod`.
- **Charts/Viz**: `victory-native`, `recharts`, `@tanstack/react-table`.
- **Utils**: `date-fns`, `sonner` (toasts).
- **Testing**: `jest`, `@playwright/test`, `@testing-library/react`, `ts-jest`.
- **Build**: `tsup` (for package build), `webpack` (for Storybook).

## Configuration
### Jest (`ivisa-tamagui/packages/ui/jest.config.js`)
- **Preset**: `ts-jest`.
- **Environment**: `jsdom`.
- **Transform Ignore**: Explicitly allows transforming `tamagui`, `react-native`, `victory-native` etc.
- **Mappings**: `react-native` -> `react-native-web`.

### TypeScript (`ivisa-tamagui/tsconfig.json`)
- **Paths**:
    - `@ivisa/ui`: `packages/ui/src/index.ts`
    - `@ivisa/forms`: `packages/forms/src/index.ts`
    - `react-native`: `node_modules/react-native-web`

### Tamagui (`ivisa-tamagui/packages/ui/src/tamagui.config.ts`)
- **Fonts**: Cera Pro (400, 500, 900).
- **Themes**: `claro` (light), `escuro` (dark), `prefRio`.
- **Animations**: `bouncy`, `lazy`, `quick`, `medium`.
- **Shorthands**: Standard set (`p`, `m`, `f`, etc.).
