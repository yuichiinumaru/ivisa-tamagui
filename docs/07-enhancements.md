# 07 – UI Enhancement Proposal

Based on the visual verification of the newly implemented organisms, the following enhancements are proposed to elevate the UX and visual quality.

## 1. AvatarGroup (Molecule)
*   **Context Propagation**: Implement an `AvatarGroupContext` to automatically pass `size` and `circular` props to all child `Avatar` components, avoiding manual repetition.
*   **Customization**: Add `borderColor` and `borderWidth` props to the group to control the separation ring between avatars.
*   **Interactivity**: Add an `onPress` handler for the overflow indicator (e.g., to open a modal with the full list).

## 2. BadgeCounter (Molecule)
*   **Positioning**: Add a `placement` prop (`top-right` | `top-left` | `bottom-right` | `bottom-left`) to support different UI contexts (e.g., bottom navigation tabs).
*   **Animation**: Integrate `@tamagui/animations-moti` to animate the badge scale/opacity when the count changes.
*   **Dot Mode**: Add a `variant="dot"` to show a simple indicator without a number.

## 3. Timeline (Organism)
*   **Active State**: Add `activeIndex` prop to highlight completed steps (e.g., green dot/line) vs. pending steps (gray).
*   **Custom Icons**: Allow passing a custom icon (React Node) for the timeline dot (e.g., Checkmark for completed, Loader for in-progress).
*   **Horizontal Layout**: Support `orientation="horizontal"` for desktop steppers.

## 4. FileUpload (Organism)
*   **Visual Feedback**: Implement "Drag Over" state styling (highlight border) using `onDragEnter`/`onDragLeave` events (Web).
*   **Previews**: Display a thumbnail preview for image uploads immediately after selection.
*   **Progress**: Add a progress bar (using `Progress` atom) for upload simulation.
*   **Native Support**: Integrate `expo-document-picker` for full React Native support.

## 5. System-Wide Fixes
*   **Font Loading**: Resolve `CeraPro` font missing errors in Storybook by ensuring assets are correctly linked or providing a robust fallback font stack.
*   **DataTable Virtualization**: Upgrade `DataTable` to use `@shopify/flash-list` or `@tanstack/react-virtual` for performance with large datasets.
