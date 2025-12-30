# docs/rules/debugging-guide.md — Known Issues & Fixes

## 1. "Element type is invalid"
* **Cause**: Undefined Import/Export or Circular Dependency.
* **Check**: Named vs Default export mismatches. Missing static properties on Composite Components (e.g., `Select.Viewport`).
* **Action**: Use `console.log` on the imported module to verify structure.

## 2. "validateDOMNesting" Warning
* **Cause**: Invalid HTML (e.g., `div` inside `table`). Common in Tamagui Stacks.
* **Fix**: Use `tag` prop: `<YStack tag="thead">`.

## 3. Test Failures
* **"Missing theme"**: Wrap tests in a local `TamaguiProvider`.
* **"SkeletonFrame.styleable is not a function"**: Mocking issue. Ensure `styled` mock returns a component with `.styleable`.
* **"Found multiple elements"**: Use specific selectors or `getAllByText`.

## 4. Large-Scale Analysis (The "Python First" Rule)
* **Context**: Analyzing massive logs (>10k lines) or widespread refactors.
* **Action**: DO NOT read everything into context. Write a Python script to parse/filter/summarize, then read the output.