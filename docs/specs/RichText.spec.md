# RichText Component Specification

## 1. Overview

The `RichText` component is an organism that provides a WYSIWYG editing experience. It abstracts the underlying implementation details to provide a consistent API across Web and Native platforms.

- **Web:** Uses `@tiptap/react` and `@tiptap/starter-kit` for a robust, headless editing experience.
- **Native:** Uses `@siposdani87/expo-rich-text-editor` (or similar bridge) to provide rich text capabilities on mobile devices.

## 2. Composition & Pattern

The `RichText` component follows a "Wrapper" pattern / "Split Implementation" strategy.

- **`RichText` (Web):** A wrapper around the Tiptap editor engine, styled with Tamagui.
- **`RichText` (Native):** A wrapper around a native-compatible rich text library.
- **toolbar:** A set of buttons to format text (Bold, Italic, List, etc.), usually rendered above the editor area.

## 3. Component API

### `RichTextProps`

| Prop       | Type                               | Required | Description                                      |
| :--------- | :--------------------------------- | :------- | :----------------------------------------------- |
| `value`    | `string`                           | No       | The initial HTML content of the editor.          |
| `onChange` | `(content: string) => void`        | No       | Callback function fired when content changes.    |
| `editable` | `boolean`                          | No       | If `false`, the editor is read-only. Default `true`. |
| `placeholder` | `string`                        | No       | Placeholder text to display when empty.          |
| `...StackProps` | `StackProps`                  | No       | Inherits Tamagui Stack props for the container.  |

## 4. Usage Example

```tsx
import { RichText } from '@ivisa/ui'
import { useState } from 'react'

const MyEditor = () => {
  const [content, setContent] = useState('<p>Hello World</p>')

  return (
    <RichText
      value={content}
      onChange={setContent}
      editable={true}
      borderWidth={1}
      borderColor="$borderColor"
      height={300}
    />
  )
}
```

## 5. Accessibility

- **Web:** Tiptap handles most accessibility attributes (ARIA roles for toolbar buttons, contenteditable region).
- **Native:** Ensure the underlying native view is accessible.
- **Focus:** The editor should handle focus states visually (e.g., border color change).

## 6. Future Enhancements

- **Custom Extensions:** Support for passing custom Tiptap extensions.
- **Image Upload:** Built-in handler for drag-and-drop image uploads.
- **Markdown Support:** Option to input/output Markdown instead of HTML.
