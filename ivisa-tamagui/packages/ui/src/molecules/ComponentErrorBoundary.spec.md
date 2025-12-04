# ComponentErrorBoundary Spec

## Overview
Wraps children in a React Error Boundary to catch render errors and log them using `utils/logging`. Prevents the entire app from crashing.

## API
- `componentName` (string): Name of the component being wrapped (for logging).
- `children` (ReactNode): Content to render.

## Behavior
- On error, logs error and stack to console/service.
- Returns `null` instead of crashing content.
- In test environment, re-throws error to allow test failure.
