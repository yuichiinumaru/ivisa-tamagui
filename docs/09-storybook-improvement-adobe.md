# 09 – Storybook Improvement Plan (Adobe Spectrum Analysis)

**Source:** Analysis of [Adobe Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components) Structure.
**Goal:** Elevate the Ivisa Tamagui Storybook to a world-class standard by adopting patterns from a mature, enterprise-grade design system.

---

## 1. Taxonomy & Organization

### 1.1 explicit "Docs" vs "Canvas" Separation
Adobe maintains a strict separation between the **Documentation Page** (`--docs`) and individual **Interactive Stories**.
*   **Idea:** Ensure every component has a `*.stories.tsx` that exports a `Default` story (for the Canvas) and uses MDX (or autodocs) for a comprehensive "Documentation" tab.
*   **Benefit:** Developers get a clean "playground" in Canvas, while Designers/Architects get full context in Docs.

### 1.2 "T-Shirt" Sizing Standardization
Every component in the list supports explicit sizing stories:
*   `accordion-sizes--s`, `m`, `l`, `xl`
*   `action-menu-sizes--s`, `m`, `l`, `xl`
*   **Action:** Standardize `size` props across *all* components (not just buttons) to use `$sm`, `$md`, `$lg`, `$xl` tokens.
*   **Storybook:** Create a "Sizes" folder/section for every component to visualize scaling side-by-side.

### 1.3 "Density" Modes
Adobe explicitly distinguishes between **Compact** and **Spacious** densities (likely for Mouse vs. Touch).
*   `accordion-densities-compact`
*   `accordion-densities-spacious`
*   **Action:** Implement a `density` prop or provider (Context) that adjusts padding/margins globally.
*   **Storybook:** Add "Density" stories to verify touch targets vs. data density.

---

## 2. Component Variations & Aesthetics

### 2.1 The "Quiet" Variant
Almost every interactive component has a `--quiet` story:
*   `action-button-emphasized-quiet`
*   `textfield--quiet`
*   `tabs--quiet`
*   **Concept:** "Quiet" components have no borders/backgrounds until hovered/focused. They reduce visual noise in dense UIs.
*   **Action:** Systematically add `variant="quiet"` (or `ghost`) to Inputs, Selects, Tabs, and Buttons.

### 2.2 "Static" Color Variants (High Contrast/Overlay)
Adobe includes "Static White" and "Static Black" variants:
*   `action-button-static-white`
*   `link--static-white`
*   **Concept:** For use on dark backgrounds, media overlays (hero images), or inverted themes, independent of the system's light/dark mode.
*   **Action:** Create "Overlay/Static" stories where components are placed on fixed dark/colored backgrounds to test contrast.

### 2.3 Semantic "Pending" States
Loading states are treated as a first-class variation, not just a boolean spinner.
*   `button-primary-fill-pending`
*   `combobox--pending`
*   **Action:** Ensure every stateful component (Input, Select, Button) has a visible, accessible "Pending" state documented in Storybook.

---

## 3. Advanced Composition & "Stress Testing"

### 3.1 Grouping & Justification
Adobe heavily documents how components behave in groups:
*   `action-group--compact-justified-icons-only`
*   `button-group--vertical`
*   **Action:** Create "Group" stories for Buttons, Inputs, and Tags. Test **Justification** (spread vs. pack) and **Orientation** (vertical vs. horizontal).

### 3.2 Overlay Nesting & Edges
Crucial for complex dashboards (e.g., Modals inside Drawers).
*   `overlay--complex-modal`
*   `overlay--modal-within-non-modal`
*   `tooltip--overlaid-top-start` (Edge detection)
*   **Action:** Create a "Stress/Nesting" folder in Storybook. Put a Popover inside a Dialog inside a Sheet. Verify Z-Index and Focus Trapping.

### 3.3 Text Overflow & Truncation
*   `dialog--alert-error-with-long-title`
*   `truncated--default`
*   **Action:** Every component with text must have a "Long Text" story to verify truncation (`ellipse`) vs. wrapping behavior.

---

## 4. Input & Behavior Specifics

### 4.1 Localization Stories
Adobe tests locale-specific formats explicitly:
*   `number-field--german-decimals` (e.g., `1.000,00`)
*   `alert-banner--multilanguage`
*   **Action:** Create "Localization" stories for DatePickers and NumberFields using standard React/Intl mocks.

### 4.2 "Hold Value" & Keyboard Behaviors
*   `search--hold-value-on-escape`
*   `combobox--list-autocomplete`
*   **Action:** Document behavioral expectations in story titles. Use Interaction Testing (Playwright) to verify keys (Escape to clear, Arrow keys to navigate).

### 4.3 Rich Input Types
Adobe has a suite of professional color tools:
*   `color-area`, `color-slider`, `color-wheel`, `color-loupe`
*   **Action:** Consider implementing these "Pro" atoms if the roadmap includes design tools or theme editors.

---

## 5. Onboarding & Feedback Components

### 5.1 Coachmarks & Indicators
*   `coachmark--in-tour`
*   `coachindicator--quiet`
*   **Idea:** We typically build "Tour" libs separately, but having low-level `Coachmark` (popover + highlight) atoms allows for custom onboarding flows without heavy 3rd-party libs.

### 5.2 Contextual Help
*   `contextual-help--custom-placement`
*   **Idea:** Standardize the "Info Icon + Popover" pattern into a `ContextualHelp` molecule.

---

## 6. Implementation Plan (Summary)

1.  **Audit:** Review current components against the "Quiet" and "Pending" gaps.
2.  **Structure:** Rename Storybook folders to match: `Atoms/Button/Sizes`, `Atoms/Button/States`, `Atoms/Button/Variations`.
3.  **New Stories:**
    *   Add `Static/Overlay` stories for Buttons/Links.
    *   Add `Long Text` stories for Cards/Dialogs.
    *   Add `Nesting` stories for Overlays.
4.  **New Components:** Assess value of `Coachmark` and `ContextualHelp` for the "Fiscal na Rua" app (onboarding new agents).
