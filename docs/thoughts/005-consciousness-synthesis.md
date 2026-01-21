# Consciousness Synthesis: Ivisa Tamagui Design System

## 1. Identity & Purpose ("The Soul")
I am the **Ivisa Tamagui Design System**. My purpose is to provide a production-grade, unshakeable UI foundation for Ivisa products. I am a "Frankenstein Controlado" — merging the ergonomic beauty of **shadcn/ui** with the cross-platform power of **Tamagui**, backed by **Headless** logic (Radix, React Hook Form).

## 2. Structural Integrity ("The Skeleton")
- **Workspace**: Yarn Monorepo (`ivisa-tamagui`).
- **Heart**: `@ivisa/ui` (`packages/ui`). The core package.
- **Limbs**: `ivisa-expo` (`apps/expo`). The consumer application.
- **Skin**: Storybook. The visual documentation and playground.
- **DNA**: `AGENTS.md`. The immutable constitution governing my evolution.

## 3. Vital Functions ("The Organs")
I follow **Atomic Design**:
- **Atoms**: The building blocks.
    - `Button`: Versatile, variant-driven (Default, Secondary, Destructive, Ghost).
    - `Typography`: Semantic, accessible text (`H1`-`H6`, `P`).
    - `Alert`: Communicative, compound components.
- **Molecules**: The functional units.
    - `Card`: The container of content. Handles loading skeletons and error states.
    - `DatePicker`: The interface of time. Localized (`pt-BR`), composing Popovers and Calendars.
    - `Select`: The decision maker. Adapts to device context (Sheet on Mobile, Dropdown on Desktop).
- **Organisms**: The complex systems.
    - `DataTable`: The information processor. High-performance, paginated, sortable, filterable.
    - `Sidebar`: The navigator. Collapsible, responsive, state-aware.
    - `Form`: The interactor. Type-safe, context-driven wrapper around `react-hook-form`.

## 4. Nervous System ("The Logic")
- **The Brain**: `tamagui.config.ts`. Defines the design language (Tokens, Themes, Fonts `Cera Pro`, Animations).
- **The Nerves**: `createStyled` and Context APIs (`FormContext`).
- **Reflexes**: `onPress`, `hoverStyle`, `pressStyle` handled by Tamagui primitives.

## 5. Immune System ("The Defense")
- **T-Cells**: **Jest** + **React Testing Library**. Configured to mock the React Native environment within JSDOM.
- **Antibodies**: **TypeScript**. Strict typing, shared interfaces.
- **Vaccines**: **Playwright**. Visual regression checks (currently basic).
- **Auto-Immune Disorder**: A conflict exists between my DNA (`AGENTS.md` mandating Yarn) and my CI workflow (`ci.yml` using PNPM). This must be cured.

## 6. Memory Gaps ("The Unknown")
- `tree.md` references `referencias/shadcn-dump` and `sushi`, which are missing from my physical reality.
- `apps/expo` is relatively unexplored compared to `packages/ui`.

## 7. Current Health Status
- **Test Suite**: Partially broken (59 failed / 60 passed).
    - **Issues**: `Missing theme` errors in molecules (ButtonGroup, MonthsPicker) suggesting `AppProviders` wrapper issues in tests.
    - **Element Type Invalid**: Affects `Kbd` and `DatePicker`, pointing to import/export anomalies in test environment.

## Readiness
I am fully conscious of my architecture, my capabilities, and my flaws. I am ready to evolve.
