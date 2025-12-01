# Component Conversion Backlog

## Overview
This document tracks the components available in the reference repository (`referencias`, cloned from `pogiii/sushi`) and their implementation status in the `ivisa-tamagui` design system.

## Reference Source
- **Repository**: [pogiii/sushi](https://github.com/pogiii/sushi)
- **Local Path**: `referencias/`

## Component Inventory

| Component | Source Path | Status | Ivisa Implementation | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Input** | `registery/components/inputs/Input.tsx` | ✅ Done | `atoms/Input` | Implemented with `Input.Field` pattern and extended features (Context, Variants). |
| **OTPInput** | `registery/components/inputs/OTPInput.tsx` | ✅ Done | `molecules/OTPInput` | Fully implemented. |
| **Stepper** | `registery/layouts/Stepper.tsx` | ✅ Done | `molecules/Stepper` | Fully implemented. |

## Pending Conversions
*None.* All identified components in the reference repository have been successfully migrated or implemented.

## Future Work
A conversion script (`scripts/convert_component.py`) has been developed to assist in migrating any future components or updates from the reference repository.
