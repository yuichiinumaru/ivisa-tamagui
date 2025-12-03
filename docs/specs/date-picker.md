# DatePicker Component Specification

## 1. Overview
The `DatePicker` component allows users to select a single date from a calendar view. It combines a `Popover` for the overlay and a `Calendar` component for date selection.

## 2. Usage
```tsx
import { DatePicker } from '@ivisa/ui'

// Basic usage
<DatePicker />

// Controlled usage
<DatePicker date={selectedDate} onDateChange={setSelectedDate} />
```

## 3. Props API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `date` | `Date` | `undefined` | The currently selected date. |
| `onDateChange` | `(date: Date) => void` | `undefined` | Callback fired when a date is selected. |
| `placeholder` | `string` | `"Pick a date"` | Text to display when no date is selected. |

## 4. Anatomy
- **Trigger**: A `Button` displaying the selected date or placeholder.
- **Content**: A `Popover` containing the `Calendar`.
- **Calendar**: The core date selection interface.

## 5. Behavior
- **Open/Close**: Clicking the trigger opens the popover. Selecting a date closes it.
- **Formatting**: Displays the date using `PPP` format (e.g., "April 29th, 2023").

## 6. Accessibility
- The trigger should be a button with `aria-haspopup="dialog"`.
- The calendar should support keyboard navigation for dates.
