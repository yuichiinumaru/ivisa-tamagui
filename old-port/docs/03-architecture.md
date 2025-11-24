# 03 – Architecture for Design System Migration

## 1. Design System Context
- **Bounded Context:** "Design System" governs UI primitives, tokens, and interaction patterns shared across surfaces.
- **Integration Surfaces:** Next.js (web), Expo (native) leveraging Tamagui for parity; legacy shadcn components exist as reference only.
- **Foundational Providers:** `TamaguiProvider` (theme, tokens) and `PortalProvider` (floating UI) must wrap every render target.

## 2. Component Inventory & Priority
| Component Group | Specific Components | Domain Usage | Priority | Dependencies |
| --- | --- | --- | --- | --- |
| Core Primitives | Button, IconButton, Link, Text, Heading, Paragraph | Navigation, CTAs, transcript controls | High | Tamagui tokens, theming |
| Layout & Surfaces | Card, Sheet, ScrollArea, Separator, Stack primitives | Chat layout panes, settings drawers | High | PortalProvider (Sheet), responsive config |
| Feedback & Status | Badge, Toast, Alert, Skeleton | Agent state, system notifications | High | Toast portal, logging hooks |
| Input Controls | Input, Textarea, Select, ComboBox, Checkbox, Radio, Switch, Slider | Prompt submission, filters, settings toggles | High | createStyledContext, a11y adapters |
| Data Display | Table, Tabs, Accordion, Tooltip, Popover, Avatar, Progress | Conversation metadata, agent selection | Medium | Portal scopes, accessibility roles |
| Overlays | Dialog, Drawer, Popover, Modal-based flows | Action confirmations, settings modals | Medium | PortalProvider, focus scopes |
| Navigation | Breadcrumb, Pagination, Command Palette | Knowledge base drilling, agent tools | Medium | Keyboard shortcuts, search services |
| Advanced Widgets | Calendar, Date Picker, Charts (custom) | Scheduling, analytics | Low | Third-party integration, virtualization |
| Utility | Resizable Panel, HoverCard, Context Menu | Power-user tools, debugging consoles | Low | Custom gesture handling |

## 3. Tamagui Configuration
- **Fonts:** Inter-based heading/body fonts mirror shadcn typography scale (sizes 12–32px) to preserve visual rhythm.
- **Color Tokens:** Semantic palette aligns with shadcn Tailwind defaults (`background`, `foreground`, `primary`, `secondary`, `muted`, `accent`, `destructive`) with light/dark themes created via `createTheme`.
- **Radius & Space Tokens:** Radii (`$1`–`$8`) cover shadcn `rounded-sm` through pill shapes; spacing tokens (`$1`–`$11`) map to Tailwind spacing for consistent paddings/margins.
- **Media Queries:** Breakpoints (`xs`–`xl`) align with existing chat layout requirements; ensures responsive variants behave consistently across web/native.
- **Theme Export:** `tamagui-components-final/src/tamagui.config.ts` exports `tamaguiConfig` and derived types; `src/themes.ts` exposes semantic token grouping for component consumption.
- **Rationale:** Provides single source of truth for tokens so specs (Phase 0) and upcoming components leverage identical values, reducing drift between shadcn reference and Tamagui implementation.

## 4. Provider Composition
- `src/providers.tsx` exports `AppProviders`, a thin wrapper composing `TamaguiProvider` (with `tamaguiConfig`) and `PortalProvider` with configurable theme.
- Library tests render components through `AppProviders` to guarantee consistent theming/portal wiring.
- Host applications reuse `AppProviders` or replicate pattern in their root layout to unlock floating UI components (Dialog, Tooltip, Toast).

## 5. Component Gallery Reference
- `src/gallery/TamaguiGallery.tsx` renders a scrollable catalog of converted components with status badges indicating `implemented`, `placeholder`, or `missing`.
- `componentCatalog` centralizes metadata (import path, description) reused in documentation or Storybook.
- Gallery cards reuse existing Tamagui primitives (Card, Button, Badge, Separator), serving as a living style reference while highlighting remaining migration work.

## 6. Primitive Implementations
- **Typography (`components/ui/Typography.tsx`):** Provides `Heading`, `TypographyText`, `MutedText`, `LeadText`, and `Blockquote` primitives built on Tamagui `Text`/`Paragraph` with level/size/align variants mirroring shadcn defaults.
- **Stack (`components/ui/Stack.tsx`):** Wraps Tamagui `Stack` with direction, gap, alignment, justify, and wrap variants plus `HStack`/`VStack` shortcuts to replicate common layout patterns.
- **Testing:** Added Vitest suites (`typography.spec.tsx`, `stack.spec.tsx`) that render through `AppProviders`, ensuring primitives stay compatible with shared providers and future regression coverage.

## 7. Component File Structure
- **Components:** All components are located in `tamagui-components-final/src/components/`. They are organized into subdirectories based on their domain (e.g., `primitives`, `forms`, `overlays`).
- **Tests:** Component tests are located in `tamagui-components-final/tests/`. The test file for a component should have the same name as the component file, with the `.test.tsx` extension.
- **Stories:** (If using Storybook) Component stories are located in the same directory as the component file, with the `.stories.tsx` extension.

## 8. Automation & Tooling Roadmap
- **Component Inventory (shipped):** `scripts/component_inventory.py` parses the shadcn registry and populates `exports/components-inventory.json`. Logged via `log-component-inventory-*` and governed by `docs/component-inventory-requirements.md`.
- **Upcoming helpers (see Tasks S1–S4 in `docs/02-tasks.md`):**
  - `scripts/tamagui_probe.py` will scan Tamagui sources to surface parity gaps and emit `exports/tamagui-component-coverage.json`.
  - `scripts/spec_skeleton.py` will consume inventory JSON + `docs/component-spec-template.md` to scaffold missing specs automatically.
  - `scripts/token_mapper.py` will diff Tailwind vs. Tamagui tokens and generate `exports/token-mapping.csv` for designers.
  - `scripts/agent_orchestrator.py` will coordinate multi-agent runs, producing structured run logs/metrics tied into the rate limiter.
- Each helper must:
  - Use `scripts/logger_utils.get_logger` with the naming convention `log-<script>-aaaammdd hhmmss.log`.
  - Ship with pytest coverage + fixtures under `tests/`.
  - Update the changelog and relevant docs (automation plan, specs, tasks) when delivered.
