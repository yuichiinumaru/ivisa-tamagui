# Visual Testing Process

## Overview
We have established a lightweight but effective visual testing strategy using **Storybook** and **Playwright**. This allows us to verify that our Tamagui components render correctly in a web environment and catch regressions or configuration errors (like missing tokens).

## Tools
- **Storybook (v8+)**: Serves as the component catalog and development environment.
- **Playwright**: Used for automated browser automation to visit stories and capture screenshots.
- **Custom Script (`scripts/visual-check.js`)**: Orchestrates the testing workflow.

## The Workflow

1.  **Start Storybook**: The test script requires a running instance of Storybook.
    ```bash
    pnpm storybook
    ```
    (Runs on `http://localhost:6006`)

2.  **Run Visual Check**:
    ```bash
    node scripts/visual-check.js
    ```

## What the Script Does
1.  **Health Check**: Verifies it can connect to the Storybook server.
2.  **Story Navigation**: Iterates through a defined list of critical component stories (e.g., `primitives-ivisabutton--primary`).
3.  **Console Monitoring**: Listens for browser console errors and warnings. This was crucial for debugging:
    -   Missing Tamagui tokens (e.g., `Expected $true key`).
    -   React hydration mismatches.
    -   Module export errors.
4.  **Visual Snapshot**: Captures a full-page screenshot of each story to `tests/visual-checks/`.

## Key Findings & Fixes
During the implementation of this process, we uncovered and fixed several issues:
-   **React Native Web Compatibility**: Polyfilled `process.env` in `.storybook/main.ts` to prevent crashes in the browser.
-   **Token Configuration**: Added `true` keys to `size`, `space`, and `zIndex` scales in `tokens.ts`. Tamagui requires these defaults for prop-less sizing.
-   **Component Integrity**: Identified a corrupted `Button.tsx` file via visual inspection failure and restored it.

## Future Improvements
-   **CI Integration**: Run this script in GitHub Actions using `start-server-and-test`.
-   **Diffing**: Implement image comparison (e.g., `pixelmatch`) to automatically flag visual regressions against baseline images.
-   **Interaction Testing**: Use Playwright to click triggers (like Dialog/Popover) and verify the overlay content appears.
