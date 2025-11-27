# Git Submodule Strategy & Framework Agnosticism

## **Overview**

This repository (`ivisa-tamagui`) is designed to serve as a **Git Submodule** for various frontend projects within the ecosystem. It provides a centralized, consistent UI library based on Tamagui.

**CRITICAL ARCHITECTURAL RULE:**
> **This repository MUST remain Framework Agnostic.**
> It strictly forbids dependencies on application frameworks such as **Next.js**, **Expo**, **Remix**, or **Vue**.

## **Why Submodules?**

Using git submodules allows us to:
1.  **Centralize UI Logic**: Maintain a single source of truth for the design system.
2.  **Version Control**: precise control over which version of the UI library each consuming project uses.
3.  **Framework Independence**: The UI library can be consumed by a Next.js web app, an Expo mobile app, or a pure React SPA without carrying unnecessary baggage.

## **Rules of Engagement**

### **1. No Framework Dependencies**
*   **Forbidden**: `next`, `expo`, `react-native-web` (as a direct dependency), `@remix-run/*`.
*   **Allowed**: `react`, `react-dom`, `@tamagui/*`, `react-hook-form`, `zod`, `date-fns`.
*   **Reasoning**: Adding a framework dependency would break compatibility with other frameworks. For example, importing `next/link` would crash an Expo app.

### **2. Peer Dependencies**
*   `react` and `react-dom` should always be **Peer Dependencies**.
*   The consuming application is responsible for providing the React runtime.

### **3. Build Process**
*   The library uses `tsup` to bundle for both ESM and CJS.
*   It does **not** rely on Next.js build pipelines or Expo bundlers internally.

## **Integration Workflow**

To add this library to a new project:

```bash
git submodule add <repo-url> packages/ui
```

### **Consuming in Next.js**
1.  Add to `next.config.js` transpile packages:
    ```javascript
    const nextConfig = {
      transpilePackages: ['@ivisa/ui'],
    }
    ```

### **Consuming in Expo**
1.  Ensure `metro.config.js` is configured to resolve the submodule path if necessary (though usually standard node module resolution works if installed/linked correctly).

## **Maintenance**

When modifying this repository:
1.  **Check `package.json`**: Ensure no framework-specific packages are added to `dependencies`.
2.  **Test Isolation**: Verify components in Storybook or a detached test environment, not just inside a specific example app.
