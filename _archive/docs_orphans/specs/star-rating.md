# StarRating Component Specification

## 1. Overview
The `StarRating` component allows users to provide a rating by selecting a number of stars. It supports both controlled and uncontrolled modes, custom icons, and various styling options.

## 2. Usage
```tsx
import { StarRating } from '@ivisa/ui'

// Basic usage
<StarRating />

// Controlled usage
<StarRating value={rating} onChange={setRating} />

// Custom count and size
<StarRating count={10} size="$4" />
```

## 3. Props API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `count` | `number` | `5` | The total number of stars to display. |
| `value` | `number \| null` | `undefined` | The current value of the rating (controlled). |
| `defaultValue` | `number \| null` | `null` | The initial value of the rating (uncontrolled). |
| `onChange` | `(rating: number \| null) => void` | `undefined` | Callback fired when the rating changes. |
| `size` | `SizeTokens` | `'$1'` | The size of the stars. |
| `disabled` | `boolean` | `undefined` | Whether the rating is read-only/disabled. |
| `gap` | `number \| string` | `'$1'` | The space between stars. |
| `color` | `string` | `'$gray7'` | The color of unfilled stars. |
| `colorActive` | `string` | `'$yellow10'` | The color of filled stars. |
| `colorHover` | `string` | `'$yellow7'` | The color of stars on hover. |
| `colorActiveHover` | `string` | `'$yellow8'` | The color of filled stars on hover. |
| `Icon` | `any` | `Star` | Custom icon component to use instead of the default Star. |
| `iconProps` | `any` | `undefined` | Props to pass to the icon component. |

## 4. Anatomy
- **Root**: `XStack` container.
- **Item**: Individual star icons (using `Button` or interactive `Stack`).

## 5. Behavior
- **Hover**: Stars highlight up to the hovered index.
- **Selection**: Clicking a star sets the rating. Clicking the same star again resets it to null (if allowed).
- **Disabled**: No interaction allowed.

## 6. Accessibility
- Should support keyboard navigation (Arrow keys to change rating).
- Should have appropriate ARIA labels (`role="slider"`, `aria-valuenow`, etc.).
