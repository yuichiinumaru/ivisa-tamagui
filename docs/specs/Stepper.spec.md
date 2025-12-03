# Stepper Component Specification

## 1. Overview

The `Stepper` is a composite component designed to create multi-step interfaces, such as form wizards, onboarding flows, or tutorials. It provides a structured way to break down a complex process into individual, manageable steps. The component manages the display of one step at a time and provides a trigger mechanism to navigate between them.

## 2. Composition & Pattern

The `Stepper` component follows a "Native" composition pattern, built directly from Tamagui primitives without relying on an external headless library. Its architecture is based on React Context to facilitate communication between the main container and its child components.

-   **`Stepper` (Container):** The root component is a Tamagui `ScrollView` configured to be horizontal and non-scrollable by the user. It acts as a container for the pages and uses a React Context (`StepperContext`) to provide its `layout` information and a `scrollTo` function to its children.
-   **`Stepper.Page`:** Each page is a Tamagui `View` that automatically expands to fill the full width of the `Stepper` container. It represents the content of a single step in the process.
-   **`Stepper.Trigger`:** The trigger is a Tamagui `View` with an `onPress` handler. When pressed, it uses the `scrollTo` function from the context to navigate the `ScrollView` to the specified `targetPage`.

## 3. Component API

The `Stepper` component is exposed as a compound component with the following parts:

### `Stepper`

The main wrapper component.

| Prop              | Type         | Description                                                |
| ----------------- | ------------ | ---------------------------------------------------------- |
| `height`          | `number`     | The height of the stepper container.                       |
| `width`           | `number`     | The width of the stepper container.                        |
| `backgroundColor` | `ThemeValue` | The background color of the container.                     |
| `borderWidth`     | `number`     | The border width of the container.                         |
| `borderColor`     | `ThemeValue` | The border color of the container.                         |
| `borderRadius`    | `ThemeValue` | The border radius of the container.                        |
| `children`        | `ReactNode`  | Should consist of one or more `Stepper.Page` components.   |

### `Stepper.Page`

A component to define the content of a single step. It accepts all standard Tamagui `ViewProps`.

### `Stepper.Trigger`

A component used to control navigation between steps.

| Prop         | Type        | Description                                                  |
| ------------ | ----------- | ------------------------------------------------------------ |
| `targetPage` | `number`    | **Required.** The zero-based index of the `Stepper.Page` to navigate to. |
| `disabled`   | `boolean`   | If `true`, the trigger will be unresponsive and styled accordingly. |
| `children`   | `ReactNode` | The content of the trigger, typically a `Button` or other pressable element. |

## 4. Usage Example

```tsx
import { Stepper } from './Stepper'
import { Button } from '../../atoms/Button'
import { YStack, Text, XStack } from 'tamagui'

const MyFormWizard = () => (
  <YStack gap="$4" width={400}>
    {/* Triggers can be placed anywhere */}
    <XStack gap="$2" justifyContent="center">
      <Stepper.Trigger targetPage={0}>
        <Button size="sm">Step 1</Button>
      </Stepper.Trigger>
      <Stepper.Trigger targetPage={1}>
        <Button size="sm">Step 2</Button>
      </Stepper.Trigger>
    </XStack>

    <Stepper height={150} width={400} borderWidth={1} borderRadius="$4">
      <Stepper.Page justifyContent="center" alignItems="center">
        <Text>Content for Page 1</Text>
      </Stepper.Page>
      <Stepper.Page justifyContent="center" alignItems="center">
        <Text>Content for Page 2</Text>
      </Stepper.Page>
    </Stepper>
  </YStack>
)
```

## 5. Accessibility

The current implementation has minimal accessibility features. To improve accessibility, the following enhancements are recommended:

-   **Roles:** The container holding the triggers should have `role="tablist"`, `Stepper.Trigger` should have `role="tab"`, and `Stepper.Page` should have `role="tabpanel"`.
-   **State Management:** Use `aria-selected` on the active `Stepper.Trigger` and `aria-hidden` on inactive `Stepper.Page` components to communicate the current state to screen readers.
-   **Focus Management:** When a new step is displayed, focus should be programmatically moved to the `Stepper.Page` container or its first focusable element.
-   **Keyboard Navigation:** The `Stepper.Trigger` group should support keyboard navigation (e.g., using arrow keys) as is standard for tab-like interfaces.

## 6. Future Enhancements

-   **`onStepChange` Callback:** Add a callback prop to the `Stepper` component that fires when the active step changes, providing the new step index as an argument.
-   **Controlled State:** Allow the active step to be controlled via props (e.g., `currentPage`) for more complex state management.
-   **Visual Indicators:** Add an optional sub-component to render visual indicators (e.g., dots, numbers) to show progress through the steps.
