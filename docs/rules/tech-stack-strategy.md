# docs/rules/tech-stack-strategy.md — Architecture & Stack Rules

## 1. The "Frankenstein Controlado" Strategy
We do NOT port Shadcn code directly. We construct our own using:
* **Core:** Tamagui (`@tamagui/core`, `@tamagui/ui`)
* **Logic:** Headless Libs (TanStack Table, Hook Form, etc)
* **Layout:** Bento methodology (Marketing focus)
* **Style:** Shadcn/Pink Tokens mapped to our Theme.

## 2. Atomic Design Structure
Strictly adhere to `packages/ui/src/`:
* **Atoms**: Single elements (Button, Input).
* **Molecules**: Simple groups (Card, DatePicker).
* **Organisms**: Complex logic (DataTable, Sidebar).
* **Theme**: Tokens and Config.

## 3. Visual Integrity
1.  **Typography**: MUST resolve to **Cera Pro**.
2.  **Tokens**: Never use raw values. Use `$color12`, `$md`.
3.  **Missing Tokens**: If a token is missing, add aliases in `tamagui.config.ts`, do not hardcode values.

## 4. Architecture Violations
* **Forbidden Imports**: Never import Atoms/Molecules directly from `@tamagui/ui` or `tamagui` package if a local version exists.
    * *Bad*: `import { Button } from 'tamagui'`
    * *Good*: `import { Button } from '../../atoms/Button'`
* **Check**: Run `yarn lint:arch` to detect these.