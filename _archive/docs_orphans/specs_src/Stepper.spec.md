# Stepper Spec

## Overview
A wizard-like step container using a horizontal `ScrollView` to transition between pages.

## API
- `height`, `width`, `backgroundColor`, `borderWidth`, `borderColor`, `borderRadius`.
- `children`: `Stepper.Page` elements.

### Subcomponents
- `Stepper.Page`: Renders a single step/page.
- `Stepper.Trigger`: Renders a clickable element to navigate to a specific page.
  - `targetPage` (number): Index of page to scroll to.
  - `disabled` (boolean): Disables navigation.

## Behavior
- Uses `ScrollView` with `pagingEnabled` (simulated via scrollTo) semantics.
- `StepperContext` shares layout info for smooth scrolling.
