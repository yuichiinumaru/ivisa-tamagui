# 06 - Code Standards & Debugging Protocols

## 1. Testing Standards

### 1.1 Image Testing in JSDOM
*   **Context**: `react-native-web` and `tamagui` often mock `Image` components as `div`s with background images or complex structures in JSDOM.
*   **Rule**: Do not rely on `getByRole('img')` or `toHaveAttribute('src')` for checking images in unit tests.
*   **Standard**:
    *   Add `data-testid="component-image"` to the `Image` component.
    *   Use `expect(screen.getByTestId('component-image')).toBeInTheDocument()`.

### 1.2 Style Testing
*   **Context**: Jest's `toHaveStyle` cannot resolve Tamagui tokens (e.g., `var(--red10)`) reliably across different environments.
*   **Rule**: Never test computed styles for logic verification (e.g., error states).
*   **Standard**:
    *   Bind logic to data attributes: `data-has-error={hasError}`.
    *   Test the attribute: `expect(element).toHaveAttribute('data-has-error', 'true')`.

### 1.3 Mocking Tamagui
*   **Context**: When manual mocking of `tamagui` is necessary (e.g., to avoid circular deps or speed up tests), aggressive mocking can break `styled` components.
*   **Rule**: Mocks must support the `.styleable` method used by `styled` components.
*   **Standard**:
    ```javascript
    jest.mock('tamagui', () => ({
      // ...
      styled: (Comp) => {
        const MockComp = (props) => React.createElement(Comp, props);
        MockComp.styleable = (fn) => fn; // Crucial for components like Skeleton
        return MockComp;
      },
    }));
    ```

### 1.4 Test Providers
*   **Context**: `AppProviders` includes ErrorBoundaries and Portals which may conflict with aggressive mocks.
*   **Rule**: If a test fails with "Missing theme" or invalid element types when using `test-utils`, use a minimal local `TamaguiProvider`.
*   **Standard**:
    ```typescript
    const Wrapper = ({ children }) => (
      <TamaguiProvider config={config} defaultTheme="claro">{children}</TamaguiProvider>
    );
    render(ui, { wrapper: Wrapper });
    ```

## 2. Component Implementation

### 2.1 Composite Component Exports
*   **Rule**: Always ensure subcomponents used by consumers (e.g., `Sheet.ScrollView`) are explicitly attached to the main component export.
*   **Fix**:
    ```typescript
    const Sheet = withStaticProperties(SheetComponent, {
      // ...
      ScrollView: TamaguiSheet.ScrollView, // Don't forget this!
    });
    ```

### 2.2 Prop filtering
*   **Rule**: Filter out React-specific or animation props (`animationName`, `animationDuration`) before passing `...rest` to a DOM element (or a Tamagui Stack that renders a div).
*   **Standard**:
    ```typescript
    const { animationName, animationDuration, ...validProps } = props;
    return <Frame {...validProps} />;
    ```

### 2.3 Text Nodes in React Native Web
*   **Context**: React Native Web (and Tamagui) requires all text strings to be wrapped in `<Text>` components. Raw strings inside `View` (div) cause "Unexpected text node" errors.
*   **Rule**: Always wrap children that might be strings in `<Text>`.
*   **Standard**:
    ```typescript
    <View>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </View>
    ```

### 2.4 Controlled vs Uncontrolled Inputs
*   **Context**: Passing both `value` and `defaultValue` to an input causes React warnings and undefined behavior.
*   **Rule**: Logic must strictly separate controlled (`value` !== undefined) and uncontrolled states.
*   **Standard**:
    ```typescript
    // Do NOT force value="" if undefined
    <Input
      value={value} // if undefined, React treats as uncontrolled
      defaultValue={defaultValue}
    />
    ```
