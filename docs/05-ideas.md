# 05 – Ideas & Future Improvements

This document captures ideas, wishlist items, and potential improvements that are not yet prioritized in `02-tasks.md`.

## Component Wishlist
- [ ] **Multi-Select**: A robust multi-select component (wrapping `cmdk` or similar).
- [ ] **Tree View**: For hierarchical data.
- [ ] **Virtual List**: Integration with `@tanstack/react-virtual` for large lists (maybe as `VirtualScrollArea`).
- [ ] **Code Block**: A specialized component for displaying code with syntax highlighting (maybe using `prism` or `shiki`).

## Architecture & Tooling
- [ ] **Bit.dev Integration**: Investigate if Bit is suitable for distributing individual components.
- [ ] **CLI Tool**: A `create-ivisa-app` or similar CLI to scaffold new apps with the design system pre-configured.
- [ ] **Theme Builder**: Integrate `@tamagui/theme-builder` fully to allow designers to tweak tokens via a GUI and export JSON.
- [ ] **Screenshot Testing**: Move from local `visual-check.js` to a cloud service like Chromatic or Percy for better diff management.

## DX Improvements
- [ ] **Snippets**: VSCode snippets for common patterns (e.g., `styled` component boilerplate).
- [ ] **Prop Tables**: Improve Storybook prop tables to include more descriptive types and defaults.
