# MonthsPicker Component Specification

## 1. Overview
The `MonthsPicker` component allows users to select a specific month from a list. It utilizes the `Select` component to present a list of months.

## 2. Usage
```tsx
import { MonthsPicker } from '@ivisa/ui'

// Basic usage
<MonthsPicker />

// Controlled usage
<MonthsPicker value={month} onValueChange={setMonth} />
```

## 3. Props API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `undefined` | The currently selected month name (e.g., "January"). |
| `onValueChange` | `(value: string) => void` | `undefined` | Callback fired when a month is selected. |
| `placeholder` | `string` | `"Select Month"` | Text to display when no month is selected. |

## 4. Anatomy
- **Root**: `Select` component.
- **Trigger**: `SelectTrigger` displaying the value.
- **Content**: `SelectContent` containing the list of months.
- **Item**: `SelectItem` for each month.

## 5. Behavior
- **Selection**: Selecting a month updates the value and closes the dropdown.
- **Adaptability**: Uses `Adapt` to render as a `Sheet` on small touch devices.

## 6. Accessibility
- Standard `Select` accessibility (keyboard navigation, ARIA roles).
