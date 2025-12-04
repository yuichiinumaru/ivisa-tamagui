# RichText Spec

## Overview
A rich text editor component.
- **Web**: Uses `@tiptap/react` and `@tiptap/starter-kit`.
- **Native**: Uses `@siposdani87/expo-rich-text-editor` (in `RichText.native.tsx`).

## API
- `value` (string): HTML content.
- `onChange` (function): Callback with new HTML content.
- `editable` (boolean): Read-only mode.
- `...StackProps`: Inherits Tamagui Stack props.

## Styling
- Web: Uses `proseMirror.css` for internal editor styling.
- Container: Styled Tamagui Stack.
