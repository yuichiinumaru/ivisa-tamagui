# 001-yarn-vs-pnpm.md — Package Manager Verification

## 1. Experiment
The user requested verification of the project build using both `yarn` and `pnpm`, with the instruction to investigate errors but not fix them.

### Yarn (Blessed Path)
*   **Command**: `yarn install && yarn build:ci`
*   **Result**: ✅ **SUCCESS**
*   **Details**: Build completed, Storybook compiled, no fatal errors.

### PNPM (Alternative)
*   **Command**: `pnpm install`
*   **Result**: 🔴 **FAILED (Config Blocked)**
*   **Error**:
    ```text
    This project is configured to use yarn because .../package.json has a "packageManager" field
    ```
*   **Analysis**: The project explicitly enforces Yarn via the `packageManager` field. PNPM cannot run without bypassing this restriction or modifying `package.json`.

## 2. Policy Conflict
*   **User Request**: "Run with pnpm."
*   **Constitution (`AGENTS.md`)**: "NPM/PNPM are STRICTLY FORBIDDEN."
*   **Conclusion**: To support PNPM, the Constitution must be amended and the `packageManager` field updated.

## 3. Recommended Action
*   Add urgent task to resolve this conflict.
*   If PNPM is desired, `AGENTS.md` must be updated to remove the prohibition.
