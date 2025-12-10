# 07 – Architecture Protocols

This document serves as the **Single Source of Truth** for the architectural patterns used in the Ivisa Tamagui Design System. It defines the "Algorithms" for upgrading Molecules and Organisms to ensure consistency, scalability, and ease of use.

---

## 🧬 Molecule Protocol: The "Harmonic Upgrade"

Molecules are the "chords" of the system. If an atom is a note, the molecule is the harmony. Errors here propagate upwards and break entire screens.

### 1. The Collision Test (Layout & Spacing)
*Molecules are the judges that prevent atoms from "killing" each other.*

- **Vertical Alignment Validation**: Draw a horizontal line through the center of side-by-side atoms (e.g., Icon + Text + Button). Do their optical centers align?
    - *Fix:* Use `alignItems: 'center'` on the container.
- **The "Breathing Zone" (Gaps)**: NEVER use margins on atoms (e.g., `mr-2`) when inside a molecule. The molecule controls space via `gap`.
    - *Test:* If you remove the middle atom, is the space between the first and third double? (If yes, you failed. Use `gap`).
- **The "Squish" Test**: What happens in a 200px container?
    - Who shrinks? (e.g., Input)
    - Who stays fixed? (e.g., Icon Button -> `flex-shrink-0`)
    - Who wraps? (e.g., Text)

### 2. State Unification (The Puppeteer Pattern)
*A molecule acts as a single unit, not a bag of parts.*

- **Error Propagation**: If the molecule has an error:
    - Label turns red?
    - Input border turns red?
    - Icon appears?
    - *Rule:* The `error` prop belongs to the molecule, which distributes it to atoms.
- **Unified Loading**: `isLoading` prop on the molecule should:
    - Disable buttons and show spinners.
    - Set inputs to `readOnly`.

### 3. API Facade (DX Simplification)
*Don't make consumers import 10 parts for a simple search bar.*

- **Composed vs. Ready-made**:
    - Support Composition: `<Card><CardHeader>...</CardHeader></Card>` (ShadCN style).
    - Provide Presets: `<UserCard user={data} />` for common 80% use cases.
- **Smart Defaults**: If a DatePicker has presets (Yesterday, Today), "Today" should be pre-selected if it simplifies usage.

### 4. The "Joker Slot" Test (Extensibility)
*Rigid molecules die early.*

- **Action Extensibility**: In a `ListTile` (Avatar + Name + Action), the Action slot must accept `ReactNode`.
    - Today it's a `DeleteButton`. Tomorrow it's a `Switch`, `Checkbox`, or `MenuKebab`.

### 5. Reality Simulation (Skeleton & Async)
- **Integrated Skeleton**: The molecule must have a skeleton variant that mimics its layout (circle for avatar, bar for text), controlled by `loading={true}`.

---

## 🏗️ Organism Protocol: The "Symphony Architecture"

Organisms are where engineering meets architecture. They must be **Layout Resilient** and **Data Agnostic**.

### 1. The "Fluid Container" Test
*Organisms do not define their external size; they fill the space given.*

- **Width Agnostic**: The organism must adapt to 300px or 1000px width without breaking.
    - *Rule:* Use `w-full` / `h-full`.
- **Scroll Isolation**: If content overflows vertically:
    - The page SHOULD NOT scroll.
    - The organism's content area SHOULD scroll (`overflow-y-auto`).

### 2. Data Lifecycle (Loading & Empty)
*An organism is rarely "ready". It loads, fails, or is empty.*

- **Full Page Skeleton**: Don't use 50 flickering skeletons. Use one `<DashboardSkeleton />` that mimics the macro structure (Header, Sidebar, Content).
- **Zero Data (Empty State)**: If `data=[]`, render a helpful "Empty State" component with an action (e.g., "Create Item"), never a blank screen.
- **Partial Data**: If a user has no photo, the layout must hold (use resilient atoms).

### 3. Visual Dependency Injection (Structural Slots)
*Rigid organisms fail when requirements change.*

- **Action Slots**: Do not hardcode a "Save" button in a `PageHeader`.
    - Use an `actions` prop (`ReactNode`). Let the consumer decide if it's one button or a dropdown.
- **Context Wrappers**: If internal components need Providers (Tooltip, Dialog), ensure the organism wraps them or documents the requirement.

### 4. "Props In, Events Out" (Dumb Organism)
*Organisms scream; they don't fetch.*

- **Event Bubbling**:
    - *Wrong:* Button inside organism calls `fetch('/api/save')`.
    - *Right:* Organism exposes `onSubmit(data)`. Consumer handles logic.
- **Hybrid Control**: For complex state (Tabs, Accordion), support both Controlled (`value`, `onValueChange`) and Uncontrolled modes.

### 5. Reality Check (Mock Data)
- **Faker.js**: Use realistic, varied data in stories.
    - Test long names, weird characters, and edge cases.
- **Grid Breaking**: Test list/grid views with 1 item, 3 items, and 5 items to check alignment and wrapping.

---

## 🤖 Agent Instructions

When instructing an AI to build components:

1. **For Molecules**: "Apply the *Molecule Protocol*. specifically checking for Collision Tests and State Unification."
2. **For Organisms**: "Apply the *Organism Protocol*, ensuring Fluid Container behavior and proper Data Lifecycle (Empty/Skeleton states)."
3. **For Charts**: "Use `ChartContainer`, `ChartTooltip`, and `ChartConfig` from ShadCN. Do not use raw Recharts without the Design System wrappers."
