# Autocomplete Component Specification

## 1. Overview

The `Autocomplete` component is an organism that provides a user-friendly way to select a value from a large set of options. It combines a text input with a dropdown list of suggestions that filters as the user types. This component is ideal for scenarios where the user needs to quickly find an item in a long list, such as selecting a country, a user, or a product.

## 2. Composition & Pattern

The `Autocomplete` component is a "Wrapper" component, built by combining several Tamagui atoms and molecules. It leverages the `Popover` molecule to display the list of options and the `Input` atom for filtering.

-   **`Popover` (Molecule):** The root of the component is a `Popover` which controls the visibility and positioning of the options list.
-   **`Popover.Trigger`:** The trigger is a `Button` that displays the currently selected value or a placeholder. Clicking it opens the `Popover`.
-   **`Popover.Content`:** This contains the search input and the list of options.
-   **`Input` (Atom):** A text input that allows the user to filter the list of options.
-   **`ScrollView`:** The options are displayed within a `ScrollView` to handle long lists.
-   **`ListItem`:** Each option is rendered as a `ListItem` for consistent styling and interaction.

## 3. Component API

### `Autocomplete`

The main wrapper component.

| Prop              | Type                                  | Description                                                                 |
| ----------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| `options`         | `AutocompleteOption[]`                | **Required.** An array of objects with `label` and `value` properties.      |
| `value`           | `AutocompleteOption | null`           | The currently selected option.                                              |
| `onValueChange`   | `(value: AutocompleteOption | null) => void` | Callback function that is called when an option is selected.                  |
| `placeholder`     | `string`                              | The placeholder text to display when no value is selected. Defaults to "Select...". |
| `emptyMessage`    | `string`                              | The message to display when no options match the search query. Defaults to "No options found.". |

### `AutocompleteOption` (Interface)

| Prop    | Type             | Description                             |
| ------- | ---------------- | --------------------------------------- |
| `label` | `string`         | The text to display for the option.     |
| `value` | `string | number` | The unique value for the option.        |

## 4. Usage Example

```tsx
import { Autocomplete, AutocompleteOption } from './Autocomplete'
import { useState } from 'react'

const MyComponent = () => {
  const [value, setValue] = useState<AutocompleteOption | null>(null)

  const options: AutocompleteOption[] = [
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
  ]

  return (
    <Autocomplete
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder="Select a framework..."
    />
  )
}
```

## 5. Accessibility

The current implementation has some accessibility features, but it can be improved:

-   **Roles:** The trigger `Button` has `role="combobox"` and `aria-expanded` is used to indicate the state of the popover.
-   **State Management:** The selected option is visually indicated with a checkmark.
-   **Focus Management:** The search input should be focused when the popover opens.
-   **Keyboard Navigation:** The options list should support keyboard navigation (e.g., using arrow keys to select an option and Enter to confirm).

## 6. Future Enhancements

-   **`onInputChange` Callback:** Add a callback prop to the `Autocomplete` component that fires when the search input value changes.
-   **Controlled State:** Allow the search input value to be controlled via props.
-   **Asynchronous Loading:** Support for asynchronously loading options from an API.
-   **Custom Rendering:** Allow for custom rendering of the options in the list.
-   **Allow custom input:** Add a prop to allow the user to enter a custom value that is not in the options list.
