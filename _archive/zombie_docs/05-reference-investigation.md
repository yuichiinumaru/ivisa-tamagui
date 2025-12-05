# 05 – Reference Investigation & Implementation Patterns

This document synthesizes the research from `docs/00-draft-new-research.md` and the strategy from `docs/01-plan.md` with concrete, actionable implementation patterns discovered in the `/_reference` repositories. It serves as a practical guide for building the VIVI Tamagui Design System.

## 1. Core Architectural Patterns Confirmed

The investigation of `pogiii/sushi` and `dohomi/tamagui-kitchen-sink` validates our "Frankenstein Controlado" strategy. Key architectural patterns to adopt are:

1.  **Isolate Logic into Packages:** As seen in `tamagui-kitchen-sink`, complex,-dependent logic (like form handling) should be isolated into its own package within the monorepo (e.g., `packages/forms`). This keeps the main `packages/ui` clean.
2.  **Embrace the Wrapper Pattern:** For integrating headless libraries, the pattern is consistent:
    *   Create a base, unstyled or theme-aware component that knows nothing about the headless library (e.g., `LmInput`).
    *   Create a "wrapper" or "adaptor" component that uses the headless library's hooks/components (`Controller` from `react-hook-form`) and injects the necessary props into the base component (e.g., `LmInputRhf`).
3.  **Leverage Composition:** As demonstrated by `pogiii/sushi`, build complex components by composing Tamagui primitives. Use `Object.assign` to attach sub-components (`Input.Field`, `Input.Icon`) to a base component, creating a flexible and intuitive API.

---

## 2. Implementation Blueprints for Key Gaps

This section provides a concrete blueprint for each major component gap identified in `docs/02-tasks.md`.

### **2.1. Composed Input (`Input`)**

*   **Goal:** Create an `Input` component that allows for composition with icons and buttons, similar to Shadcn.
*   **Reference:** `_reference/sushi/registery/components/inputs/Input.tsx`
*   **Blueprint:**
    1.  **`InputFrame`:** Create a styled `XStack` that provides the main border, background, and focus styles. This will act as the container.
    2.  **`UnframedInput`:** Create a styled `TamaguiInput` with all borders and background set to `transparent`. This is the field where the user types.
    3.  **`InputIcon` / `InputButton`:** Create small, styled wrappers for icons and buttons that will be placed inside the `InputFrame`.
    4.  **`BaseInput` Logic:** The main component will check for `props.children`.
        *   If children exist, render the `InputFrame` and pass the children inside.
        *   If no children exist, render a standard `TamaguiInput`.
    5.  **Final Export:** Use `Object.assign` to attach the `UnframedInput` (as `Input.Field`), `InputIcon` (as `Input.Icon`), and `InputButton` (as `Input.Button`) to the `BaseInput`.

```typescript
// packages/ui/src/primitives/Input.tsx (Simplified Example)

import { styled, Input as TamaguiInput, XStack, Button } from 'tamagui';
import { forwardRef } from 'react';

const InputFrame = styled(XStack, { /* ... styles for border, bg, etc. */ });
const UnframedInput = styled(TamaguiInput, { background: 'transparent', borderWidth: 0 });
const InputButton = styled(Button, { borderRadius: 0 });

const BaseInput = forwardRef((props, ref) => {
  return props.children ? (
    <InputFrame>{props.children}</InputFrame>
  ) : (
    <TamaguiInput ref={ref} {...props} />
  );
});

export const Input = Object.assign(BaseInput, {
  Field: UnframedInput,
  Button: InputButton,
});

// Usage:
// <Input><Input.Field /><Input.Button>Submit</Input.Button></Input>
```

### **2.2. OTP Input (`InputOTP`)**

*   **Goal:** Create a multi-character input for one-time passcodes.
*   **Reference:** `_reference/sushi/registery/components/inputs/OTPInput.tsx`
*   **Blueprint:**
    1.  **Component Signature:** Takes a `length` prop.
    2.  **State Management:** Use two state arrays: `valueArray` to store the input values and `focusArray` to manage which input is active.
    3.  **Focus Logic (`focusOnNextInput`):** On text change, update the `valueArray` and then update the `focusArray` to move focus to the next input. Handle backspace to move focus backward.
    4.  **Rendering:** Map over an array of the specified `length` and render a styled `TamaguiInput` for each item, passing the correct `value`, `autoFocus`, and `onChangeText` props.

### **2.3. Form Integration (`react-hook-form`)**

*   **Goal:** Connect our custom Tamagui components to `react-hook-form`.
*   **Reference:** `_reference/tamagui-kitchen-sink/packages/form/src/rhf/LmInputRhf.tsx`
*   **Blueprint:**
    1.  **Create Base Components:** Build your themed `Input`, `Checkbox`, `Select`, etc. in `packages/ui/primitives`. These components should know nothing about forms and accept standard props like `value`, `onChangeText`, `error`, `checked`, `onCheckedChange`.
    2.  **Create RHF Wrappers:** For each primitive, create a wrapper component (e.g., `InputRHF.tsx`).
    3.  **Use `Controller`:** Inside the wrapper, use the `<Controller />` component from `react-hook-form`.
    4.  **Map Props:** In the `render` prop of the `Controller`, map the `field` and `fieldState` properties to the props of your base component.
        *   `field.value` -> `value`
        *   `field.onChange` -> `onChangeText` or `onCheckedChange`
        *   `fieldState.error` -> `error` and `helperText`

```typescript
// packages/forms/src/InputRHF.tsx (Simplified Example)

import { Controller } from 'react-hook-form';
import { Input } from '@my-app/ui'; // Your base component

export function InputRHF({ name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...rest}
          value={field.value}
          onChangeText={field.onChange}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}
```

### **2.4. Data Table, Calendar, Command Palette, etc.**

For the remaining gaps, the pattern is consistent with the Form Integration blueprint:

1.  **Select Headless Library:** Choose the library identified in `docs/01-plan.md` (e.g., `@tanstack/react-table`, `@rehookify/datepicker`, `cmdk`).
2.  **Create a Composite Wrapper:** Build a new component in `packages/ui/composites/`.
3.  **Use Headless Hooks:** Call the main hook from the library (e.g., `useReactTable()`).
4.  **Render with Tamagui:** Map over the data structures returned by the hook and render the UI using Tamagui primitives (`Stack`, `Text`, `Button`, `Sheet`, `Dialog`). The headless library handles the logic; Tamagui handles the presentation.

---

## 3. Final Workspace Organization

Based on this investigation, the `frankenstein.code-workspace` structure proposed in the previous turn is confirmed as the optimal approach.

```
/projeto-frankenstein/
|
├── 🚀_meu-app-tamagui/
|   ├── packages/
|   |   ├── ui/         <-- Primitives, Composites (from blueprints), Bento
|   |   └── forms/      <-- RHF wrappers (following kitchen-sink pattern)
|   └── ...
|
├── 📚_referencias-headless/
|   ├── sushi/
|   ├── tamagui-kitchen-sink/
|   └── ... (other clones for inspection)
|
└── 🛠️frankenstein.code-workspace
```

This structure isolates our implementation (`_meu-app-tamagui`) from the reference code, ensuring a clean and maintainable project while still allowing easy access to the patterns we need to accelerate development.
