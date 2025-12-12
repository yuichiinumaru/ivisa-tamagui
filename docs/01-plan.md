# 01 – Plan for Tamagui Design System

## 1. Vision & Scope
- Build an internal Tamagui-based design system for that delivers web + native parity and a clean, shadcn-like aesthetic.
- Assemble this design system 100% from free/open-source building blocks: Tamagui core + `tamagui/ui`, Tamagui Bento free components, headless logic libraries (TanStack Table, Rehookify Datepicker, cmdk, Embla Carousel, Downshift, Radix Primitives, etc.), and selected community registries (e.g. `pogiii/sushi`).
- Avoid a literal shadcn → Tamagui "port". Instead, copy the theme and compose on top of Tamagui primitives and headless logic so that we keep performance, DX, and maintainability aligned with Tamagui.

## 2. Guiding Methodologies
- **TDD (Test-Driven Development):** Author failing tests (unit/render/integration) before implementing composites and wrappers, especially around headless logic integrations (tables, calendars, command palette).
- **FDD (Feature-Driven Development):** Slice work by user-visible features (e.g. Data Table, Command Palette, Date Picker) that deliver end-to-end value for chat operations or internal dashboards.
- **SDD (Spec-Driven Development):** For each composite component, write a short spec describing responsibilities, accessibility guarantees, props surface, and how it maps onto headless libraries + Tamagui primitives.
- **DDD (Domain-Driven Design):** Treat the design system as a bounded context with clear domains (primitives, composites, marketing blocks). Keep domain language consistent across code, docs, and tests.

## 3. Implementation Strategy – "Frankenstein Controlado 100% Free"
- **Copy the theme, not the components.**
  - Create a `themes.ts` / Tamagui config that mirrors shadcn (or Appwrite Pink) tokens: background, foreground, primary, secondary, accent, destructive, border radius, etc.
  - Map CSS variables / HSL values into Tamagui tokens via `createTheme` and shared scales.
- **Use Tamagui UI for the basics.**
  - For dialogs, forms, sheets, tabs, cards, popovers, selects, tooltips, toast, etc., rely directly on `tamagui/ui` components styled by our theme.
  - This covers the majority of application UI without any porting.
- **Use Bento Free for marketing/landing surfaces.**
  - Source hero sections, feature grids, stats blocks and other marketing layouts from Bento Free via `npx bento-get`, copying only components allowed by the free tier.
  - Treat these as web-only building blocks that can live under a `bento/` namespace inside the design system package.
- **Fill gaps with headless libraries.**
  - For components Tamagui does not provide (Data Table, Calendar/Date Picker, Command Palette, Carousel, Navigation Menu, Menubar, Context Menu, OTP input, Pagination, Breadcrumb), use headless libraries for logic and render them with Tamagui primitives.
  - Examples: `@tanstack/react-table`, `@rehookify/datepicker`, `cmdk`, `embla-carousel`, `downshift`, Radix Primitives, `react-right-click-context-menu`, `input-otp`.
- **Mine existing OSS registries for patterns, not full adoption.**
  - Use `tamagui-kitchen-sink`, `tamagui-react-hook-form`, and `pogiii/sushi` as references for how to structure composites (e.g. composed `Input`, OTP input, stepper layouts) and adapt patterns into our `packages/ui` design system package.

## 4. Key Research Insights
1. There is no realistic, end-to-end shadcn → Tamagui port. Because shadcn is built on Tailwind + Radix and Tamagui is a compiled style system with tokens/variants, any "port" becomes a full reimplementation. The theme + headless approach is significantly cheaper and safer.
2. Tamagui Bento and Takeout clarify the split between what is free (copy-paste components, some layouts) and what is paid (Takeout repo, premium screens). We will only use the Bento free tier and OSS examples for marketing-style blocks.
3. Shadcn itself uses headless libraries (e.g. TanStack Table) composed with its own primitives for advanced components. We mirror this pattern with Tamagui primitives instead of trying to translate shadcn JSX line by line.
4. The React Native ecosystem now has multiple shadcn-style libraries (React Native Reusables, Gluestack UI v2, NativeCN UI). They validate the copy-paste philosophy on mobile, but they are Tailwind/NativeWind-centric and do not integrate cleanly with Tamagui. For this project they function as **reference material only**, not as dependencies.
5. Projects like `rn-primitives` and `pogiii/sushi` demonstrate how to implement Radix-like primitives and composed inputs on top of React Native / Tamagui. We will reference them selectively for patterns (e.g. composed `Input`/`OTPInput` and steppers) while keeping our own design system centered on Tamagui.

## 5. Architectural Guardrails
1. **Single Tamagui config + theme:** Maintain a single source of truth for colors, radius, spacing and typography tokens. All primitives and composites must consume these tokens instead of hard-coded values.
2. **Providers and portals:** Ensure all app entrypoints (web and native) are wrapped in `TamaguiProvider` and `PortalProvider`. Composites can assume this environment and do not re-mount providers.
3. **Naming Convention:** All custom-built composite components will be prefixed with the company name, `Ivisa` (e.g., `DataTable`, `Calendar`), to distinguish them from base primitives and third-party libraries.
4. **Design system package boundary:** Host all shared UI inside a `packages/ui` (or similar) package exposing:
   - `theme/` – tokens and Tamagui theme setup.
   - `primitives/` – thin wrappers around `tamagui/ui` primitives.
   - `composites/` – higher-level components that integrate headless libs with Tamagui.
   - `bento/` – Bento-derived marketing components.
5. **Headless integration isolation:** For each headless integration (Table, Datepicker, Command Palette, Carousel, etc.), isolate logic into small wrappers/hooks within the design system. Feature code should use simple, well-typed props and not depend directly on headless APIs.
6. **Testing Stack and Strategy:** Maintain tests for all components using **Vitest** and **React Testing Library**. This includes unit/render tests for primitives and interaction tests for composites that integrate headless logic (table, calendar, command palette).

### 5.1 Shared Tamagui Config Directive
- The design team’s reference config at `docs/tamaguiconfig.txt` is the **canonical source of palette and theme scales** for the company.
- This project currently uses a local `tokens.ts` + `tamagui.config.ts` implementation for light/dark themes; **Task 14** in `docs/02-tasks.md` tracks the work to align those tokens/themes with the shared config (likely using `@tamagui/theme-builder`).
- Rationale: we keep the design system stable while we migrate toward the shared config in a controlled way, preserving existing component contracts and Atomic Design documentation.

## 6. Phase Roadmap

### Phase 0 – Research & Scoping (completed)
- Capture ecosystem research and constraints in `docs/00-draft-new-research.md`.
- Identify which surfaces will use `tamagui/ui`, which can be sourced from Bento Free, and which require headless libraries + Tamagui composites.
- Decide explicitly **not** to port shadcn components 1:1, but to build a Tamagui-first design system with shadcn-inspired theming.

### Phase 1 – Foundation: Theme, Config, Forms & Tooling (Completed)
- Implement Tamagui theme/tokens mirroring shadcn or Pink colors and radius (e.g., `themes.ts` + `tamagui.config.ts`).
- Wire `TamaguiProvider` + `PortalProvider` into the app entrypoints and smoke-test basic primitives.
- Establish the forms stack: `react-hook-form` + `zod`.
- Create the design system package structure (`packages/ui`).
- **Testing & Storybook Setup:**
    - Configure the testing framework (**Vitest** + **React Testing Library**).
    - Perform a minimal setup of **Storybook** to enable isolated component development and visual tracking from the start.

### Phase 2 – High-Impact Gaps (Data Table, Calendar, Command Palette) (Completed)
- **Data Table:** Implement an `DataTable` composite using `@tanstack/react-table` for logic and Tamagui primitives for rendering.
- **Calendar / Date Picker:** Implement an `Calendar` / `DatePicker` composite using `@rehookify/datepicker` hooks, rendered inside a Tamagui `Sheet` or `Dialog`.
- **Command Palette (Cmd+K):** Implement an `CommandPalette` composite using `cmdk` as headless logic, wrapped inside a Tamagui `Dialog` or `Sheet`.

### Phase 3 – Medium / Low-Effort Components (Completed)
- **Carousel:** Implement an `Carousel` composite using `embla-carousel`.
- **Input OTP:** Implement an `OTPInput` composite, using patterns from `pogiii/sushi`.
- **Pagination & Breadcrumb:** Implement lightweight, Tamagui-only `Pagination` and `Breadcrumb` components.
- **Sidebar & Charts:** Implemented as Organisms.

### Phase 3.1 – Structural Resurrection (Current)
- **Governance:** Enforce "FORGE v2" protocols.
- **Audit:** Conduct "Zero-Mercy" code autopsy and set remediation plan.
- **Documentation:** Align `docs/` with reality and prepare for strict enforcement.

### Phase 4 – Web-Specific UX & Full Documentation
- **Navigation Menu / Menubar / Context Menu:** For desktop-style navigation, use Radix Primitives and render them with Tamagui primitives. (Completed)
- **Missing Atoms (Parity):** Implement `Label` and `Kbd`. (Completed)
- **Populate Storybook Content (Primary Documentation):** Since markdown specs are deprecated, Storybook is the source of truth. Flesh out Storybook with comprehensive stories for every component. (Completed)
- **Spec Cleanup:** Remove empty markdown templates. (Completed)
- Document sourcing decisions for each composite.

### Phase 5 – Integration & Handoff
- Integrate the design system components into application flows.
- Stabilize tests across platforms.
- Prepare handoff documentation for future maintenance.

### Phase 6 – Finalize & Publish Storybook
- Polish the already-populated Storybook (visual QA, controls, docs tab) and ensure parity with `packages/ui` exports.
- Produce distribution artifacts (e.g., static build) and document the contribution process for future updates.

## 7. Success Metrics
- **Coverage:** All prioritized UI surfaces (chat UI, settings, key dashboards) can be built using the Tamagui-based design system without falling back to ad-hoc styling.
- **Visual parity:** Stakeholders agree that the visual feel matches the desired shadcn/Pink aesthetic while remaining coherent with Tamagui constraints.
- **Cross-platform parity:** Core components behave consistently on web and native, with platform-appropriate affordances (e.g. Sheet on mobile, Dialog on desktop).
- **Maintainability:** Headless integrations are confined to a small number of well-documented composites; app feature code depends only on the design system, not on external headless APIs.
- **Documentation:** `docs/01-plan.md`, `docs/02-tasks.md`, `docs/03-architecture.md` and `docs/04-changelog.md` remain accurate and are updated as new components and patterns are introduced.
- **Storybook readiness:** A final Storybook build exists with coverage for all primitives/composites, along with instructions for running/updating it as the design system evolves.

## 8. Development Workflow: Multi-Root Workspace
To efficiently manage external references without polluting the main codebase, we use a VSCode Multi-Root Workspace.
- **Structure:**
  - Root 1: `ivisa-tamagui` (Main Project)
  - Root 2: `referencias` (External Clones like `sushi`, `tamagui-kitchen-sink`)
- **Configuration:** Use a `.code-workspace` file to exclude reference `node_modules` from search and watchers.
- **Process:** Clone reference repos into `referencias/` but do NOT commit them to the main repo (they are gitignored). Use them solely for code harvesting and pattern analysis.
