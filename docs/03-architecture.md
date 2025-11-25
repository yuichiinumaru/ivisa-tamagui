# 03 – Architecture for the VIVI Tamagui Design System

## 1. Design System Context
- **Goal:** Provide a Tamagui-based design system that powers across web and native while delivering a shadcn/Pink-inspired visual identity.
- **Scope:** Shared tokens, primitives, and composites used by chat UI, settings, dashboards, and marketing surfaces.
- **Non-goal:** Porting shadcn components one-to-one. We focus on Tamagui-first components with similar ergonomics.

## 2. Theme & Tokens
- A single Tamagui config defines:
  - **Color tokens:** Derived from shadcn or Appwrite Pink (background, foreground, primary, secondary, accent, destructive, muted, etc.).
  - **Radius tokens:** Mapped from shadcn border radius presets to Tamagui radius scales.
  - **Space & size tokens:** Consistent spacing and sizing scales for layout primitives.
  - **Typography tokens:** Heading/body scales and weights aligned with the desired visual style.
- Tokens are composed into themes (light/dark, potentially per-brand variants) via `createTheme` and exported for use in apps and Storybook.

## 3. Providers & Entry Points
- Host apps (Next.js web, Expo native, or others) wrap their root layouts with:
  - `TamaguiProvider` configured with the shared config and themes.
  - `PortalProvider` to support overlays such as Dialog, Sheet, Toast, Popover, and Tooltip.
- The design system components assume that providers are already mounted and do not re-declare them.

## 4. Design System Package Layout (`packages/ui`)

The shared UI lives in a dedicated package (e.g. `packages/ui`) and follows the **Atomic Design** methodology:

- `theme/`
  - `tokens.ts` – Raw token definitions (colors, radius, spacing, typography).
  - `index.ts` – Tamagui config + `createTheme` calls; exports theme objects and helpers.
- `atoms/`
  - Basic building blocks. Can't be broken down further.
  - Examples: `Button`, `Input`, `Textarea`, `Checkbox`, `Label`.
  - Thin wrappers around `tamagui/ui` primitives with project-specific defaults.
- `molecules/`
  - Groups of atoms functioning together.
  - Examples: `Card` (Header, Content, Footer), `Dialog`, `Popover`, `Select`, `Calendar`, `DatePicker`.
- `organisms/`
  - Complex, distinct sections of an interface.
  - Examples: `DataTable`, `Form` (wraps `react-hook-form` logic + atoms), `CommandPalette`.
- `bento/` (Optional)
  - Components copied from Tamagui Bento Free (Hero, FeatureGrid, Stats blocks, etc.), adjusted to consume the shared theme.
- `index.ts`
  - Re-exports grouped entrypoints for `theme`, `atoms`, `molecules`, `organisms`.

This separation keeps the system understandable: theme → atoms → molecules → organisms → application usage.

## 5. Headless Integration Pattern

For components that Tamagui does not ship out of the box, we follow a consistent integration pattern:

1. **Choose a headless library** that provides the logic we need (e.g. `@tanstack/react-table` for tabular data, `@rehookify/datepicker` for calendars, `cmdk` for command palettes, `embla-carousel` for carousels).
2. **Wrap headless hooks/logic in a composite** under `composites/`:
   - Map the headless API (state, actions, render callbacks) into simple, well-typed props.
   - Render exclusively with Tamagui primitives and design system tokens.
3. **Keep feature code decoupled** from headless APIs:
   - Screens and flows depend on `packages/ui` exports, not directly on TanStack/Embla/cmdk.
   - This makes it easier to evolve or swap headless libs later.
4. **Test at the composite boundary**:
   - Write tests covering core behaviors (sorting, pagination, selection, keyboard navigation) using the composite’s public API.

## 6. External References & Cloned Repositories

To avoid polluting the main project, external references live in a separate folder (e.g. `_reference/`) and are not part of the design system package:

- Example clones:
  - `tamagui/tamagui` – Source of Tamagui UI and config patterns.
  - `dohomi/tamagui-kitchen-sink` – Examples of forms and advanced layouts.
  - `pogiii/sushi` – Patterns for composed inputs (`Input`, `OTPInput`) and multi-step layouts (`Stepper`).
  - Headless libraries and utilities (TanStack Table/Query, Rehookify Datepicker, cmdk, Embla Carousel, Downshift, Radix Primitives, input-otp, etc.).
- The workspace can be opened as a multi-root VS Code workspace so the main app and `_reference/` are visible side by side while keeping Git history, search, and watchers separate.
- Only concepts and patterns are copied from these references into `packages/ui`; the design system remains self-contained.

## 7. Testing & Documentation

- **Testing:**
  - Unit/render tests for primitives and composites using the shared Tamagui providers.
  - Interaction tests for composites that integrate headless logic (table, calendar, command palette, carousel, OTP input, menus).
- **Storybook (or similar):**
  - Runs against `packages/ui` to visualize each component in isolation.
  - Serves as living documentation for developers and designers.
  - Commands:
    - `pnpm storybook` – launches the local catalog (default port `6006`, falls back to the next open port).
    - `pnpm build-storybook` – generates the static Storybook build for preview/handoff.
- **Docs alignment:**
  - `docs/01-plan.md` captures high-level direction and phases.
  - `docs/02-tasks.md` tracks concrete tasks and status.
  - `docs/03-architecture.md` (this file) describes how the design system is structured and how headless integrations are wired.
  - `docs/04-changelog.md` records significant changes to the design system and docs.

## 8. Evolution

- The architecture is intentionally conservative: Tamagui is the foundation, headless libs are plugged in only where needed, and external registries are treated as inspiration.
- Over time, additional composites from references like `rn-primitives` or `pogiii/sushi` can be adopted by following the same pattern:
  - Understand the logic → wrap it with Tamagui primitives → expose a clean API from `packages/ui` → cover with tests.
- This keeps the system flexible and maintainable while still benefiting from the broader open-source ecosystem.
