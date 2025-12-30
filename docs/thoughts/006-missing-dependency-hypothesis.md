# Hypothesis: Missing `react-native-web` in Storybook environment

## Observation
- `packages/ui/package.json` does NOT list `react-native-web`.
- `main.cjs` (Storybook webpack config) aliases `react-native` internals to `react-native-web`.
- `Sheet` (and other Tamagui components) rely on React Native primitives.

## Mechanism
- When running Storybook (Web), `tamagui` tries to render `View`, `Text`, etc.
- If `react-native-web` is missing, imports from `react-native` (aliased or direct) might fail or resolve to empty objects if not properly shimmed.
- "Element type is invalid ... got: undefined" usually happens when an import is successful (file found) but the default export or named export is missing.
- If `react-native-web` is missing, the alias `'react-native$': 'react-native-web'` fails.

## Verification
1. Check root `package.json` for `react-native-web`.
2. Check `node_modules` for `react-native-web`.
3. If missing, add it to `packages/ui`.
