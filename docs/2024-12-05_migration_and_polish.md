# Log: The Great Migration & Visual Polish (2025-12-05)

## 1. The Context
The project was suffering from severe stability issues:
- **Build Failures:** Circular dependencies in Vite caused `ReferenceError: Cannot access '...' before initialization`.
- **Test Inconsistency:** Vitest was integrated poorly with the Tamagui/React Native Web ecosystem.
- **Visual Glitches:** Storybook components had broken fonts ("Times New Roman"), clipping layouts, and crashes in `Accordion` and `ContextMenu`.

## 2. The Solution: Hard Pivot to Webpack & Jest
We decided to abandon the Vite/Vitest stack for the `ui` package and revert to the battle-tested Webpack 5 (for Storybook) and Jest (for Testing).

### 2.1. Dependency Migration
- **Removed:** `vite`, `vitest`, `@tamagui/vite-plugin`, `@storybook/react-vite`.
- **Added:** `jest`, `ts-jest`, `jest-environment-jsdom`, `@storybook/react-webpack5`.
- **Result:** Elimination of circular dependency build errors.

### 2.2. Configuration Overhaul
- Created `packages/ui/jest.config.js` to handle interactions and standard usage.
- Updated `packages/ui/.storybook/main.cjs` to use Webpack 5.
- Fixed `package.json` scripts to point to the new tools.

## 3. Structural Repairs
Once the build system was stable, we fixed component-level crashes:
- **Sidebar:** Refactored to manually control `Sheet` state and fixed missing exports.
- **Accordion:** Fixed invalid animation token (`medium` -> `quick`) that caused runtime crashes.
- **ContextMenu:** Added `asChild` to `Trigger` to resolve Radix UI composition errors (`d.setPosition is not a function`).

## 4. Visual Polish & "ShadCNification"
The final phase focused on aesthetics and correctness.

### 4.1. Font Fixes
- **Global Rule:** Added `body { font-family: 'Cera Pro'; }` to `preview-head.html` to prevent system font fallback.
- **Atom Hardening:** Explicitly added `fontFamily: '$body'` to `Input`, `Badge`, `Kbd`, and `Alert` to ensure they inherit the brand font even in isolation.

### 4.2. Avatar Resurrection
- **Bug:** `Avatar` was not rendering.
- **Fix:** Removed ambiguous `source: { uri: '' }` default prop from `AvatarImage`.

### 4.3. ShadCN Aesthetic Polish
To achieve a premium, cohesive look:
- **Radius Tuning:** Updated `tokens.ts` radius scale.
    - `$md`: **8px** (was 10px) - The ShadCN/Tailwind standard.
    - `$sm`: **4px** (was 6px).
    - `$lg`: **12px** (was 14px).
- **Component Updates:**
    - `Input`: Updated to use `$md` radius.
    - `Alert`: Updated to use `$md` radius.
    - `Badge`: Updated to use `$full` (pill shape).

## 5. Outcome
- **Stability:** Storybook builds reliably with Webpack.
- **Visuals:** Components look consistent, use the correct font, and have a tighter, premium feel.
- **Testing:** Jest is ready for unit testing.
