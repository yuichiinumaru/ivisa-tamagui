# 02 – Tasks for the Ivisa Tamagui Design System

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Tags: `TDD`, `FDD`, `SDD`, `DDD`, `DOC`, `UX`

---

## 🚀 Priority 1: Component Refactor & BI Expansion (Jules Swarm)

### ⚛️ ATOMS
**Goal:** Refactor for PT-BR, A11y, and Robustness using the "Atom Algorithm".

*(All Priority 1 Atoms have been refactored and moved to 'Completed Tasks'.)*

### 🧪 MOLECULES
**Goal:** Upgrade for State Orchestration and Layout Integrity using the "Molecule Algorithm".

*(All Priority 1 Molecules have been refactored and moved to 'Completed Tasks'.)*

### 🧬 ORGANISMS
**Goal:** Upgrade for Data Lifecycle and Container Agnosticism using the "Organism Algorithm".

*(All Priority 1 Organisms have been implemented and moved to 'Completed Tasks'.)*

---

## 🚀 Priority 2: Intelligent Organisms (Phase 5)
**Goal:** Transition from "Parts" to "Solutions" using complex logic and composition.

- [x] Implement `SchemaForm` (Dynamic Form Engine)
- [ ] Implement `Scheduler` (Big Calendar)
- [ ] Implement `ChatWidget` (AI Interface)
- [ ] Implement `CookieBanner` (Compliance)
- [ ] Implement `AnimatedSegmentedControl` (Smart Tabs)
- [x] Implement `WizardForm` (Multi-Step Logic)
- [x] Implement `FilterBar` (Advanced Search)
- [x] Implement `NotificationFeed` (History)
- [ ] Implement `MediaGrid` (Asset Manager)
- [ ] Implement `AuthScreen` (Unified Login)

---

## 🚀 Phase 5a: BI & Data Visualization Expansion
**Goal:** Implement a comprehensive suite of data visualization components using Recharts (Shadcn Charts) as primary and Victory as native fallback.

- [ ] **Review & Enhance Existing BI Components**
  - [ ] Review `DataTable` against requirements (Add Sparklines support)
  - [ ] Review `KPIGrid` (KPI Cards) against requirements (Add Sparklines/Trend support)
  - [ ] Review `GaugeChart` against requirements (Consider RadialBar variant)
  - [ ] Review `TimeSeriesChart` (Line Chart)
  - [ ] Review `Timeline` organism for BI suitability (History/Licensing view)
- [ ] **Standard Charts (Wave 1)**
  - [ ] Refactor `Charts` to `BarChart` (and `ColumnChart` alias)
  - [ ] Implement `LineChart` (Generic Categorical)
  - [ ] Implement `PieChart` (Pie & Donut variants)
  - [ ] Implement `AreaChart` (Standard & Stacked)
  - [ ] Implement `ScatterChart` (Scatter & Bubble)
  - [ ] Implement `ComboChart` (Mixed Bar/Line/Scatter)
  - [ ] Implement `Sparkline` (Micro-charts for tables/cards)
- [ ] **Advanced Charts (Wave 2)**
  - [ ] Implement `PopulationPyramid` (Bi-directional Bar Chart)
  - [ ] Implement `BoxPlotChart` (Box & Whisker)
  - [ ] Implement `RadarChart` (Spider/Radar)
  - [ ] Implement `PolarChart` (Rose/Coxcomb/Polar Area)
  - [ ] Implement `WaterfallChart`
  - [ ] Implement `FunnelChart`
  - [ ] Implement `BulletChart`
  - [ ] Implement `RadialBar` (Apple Watch Rings style)
- [ ] **Complex & Custom Charts (Wave 3)**
  - [~] Implement `HeatmapChart` (Matrix & Calendar/GitHub style)
  - [ ] Implement `GanttChart` (Project/Inspection Phases)
  - [~] Implement `TreemapChart`
  - [~] Implement `SankeyDiagram`
  - [~] Implement `ChordDiagram`
  - [~] Implement `NetworkGraph` (Force-Directed)
  - [ ] Implement `SunburstChart`
  - [ ] Implement `ParallelCoordinates`
  - [ ] Implement `MarimekkoChart`
  - [ ] Implement `RidgelinePlot` (Joyplot)
  - [ ] Implement `DecompositionTree`
  - [ ] Implement `GeoMap` (Choropleth & Dot Density for Rio)

---

## 🚀 Phase 5b: Field Operations & Legal Tools
**Goal:** Specific components for government field work (Sanitary Surveillance) and legal compliance.

- [ ] **Field Operations (Wave 4)**
  - [ ] Implement `SignaturePad` (Canvas based)
  - [ ] Implement `ImageAnnotator` (Draw on Image)
  - [ ] Implement `ScannerView` (QR/Barcode Overlay)
  - [ ] Implement `LocationStatus` (GPS Accuracy & Timestamp)
- [ ] **Legal & Compliance (Wave 5)**
  - [ ] Implement `DiffViewer` (Text comparison)
  - [ ] Implement `PDFPreview` (Responsive rendering)
  - [ ] Implement `TimelineAudit` (Immutable logs)
  - [ ] Implement `GeoFenceSelector` (Map Polygon Drawing)
  - [ ] Implement `A11yToolbar` (Gov standard compliance)

---

## 🚀 Current Focus: Phase 4 – Web-Specific UX & Full Documentation

25 - [x] **Populate Storybook as Source of Truth** (DOC)
  - [x] 25a – **Primary Docs**: Ensure every component has a Storybook entry with full description and props documentation.
  - [x] 25b – **Visual States**: Create stories for all variants and states (hover, press, error).
  - [x] 25c – **Usage Notes**: Add usage guidelines directly in Storybook MDX or description fields.

26 - [x] **Documentation Passes** (DOC)
  - [x] 26a – Ensure `docs/01-plan.md`, `docs/02-tasks.md`, and `docs/03-architecture.md` are in sync with current implementation.
  - [x] 26b – Record major milestones and decisions in `docs/04-changelog.md`.
  - [x] 26c – **Document Multi-Root Workspace**: Add instructions for setting up VSCode Multi-Root Workspace for referencing `sushi` and `tamagui-kitchen-sink`.

---

## ⏭️ Upcoming: Phase 5c – Integration & Handoff

27 - [ ] **Integrate Design System into Flows** (FDD, UX)
  - [ ] 27a – Replace ad-hoc UI in chat, settings, and key dashboards with `packages/ui` components.
  - [ ] 27b – Add end-to-end tests for at least one representative flow per area.

28 - [ ] **Finalize Accessibility and Cross-Platform Checks** (TDD, UX)
  - [ ] 28a – Run accessibility inspections on web.
  - [ ] 28b – Validate main components on iOS/Android using Expo.

29 - [ ] **Handoff Package and Docs** (DOC)
  - [ ] 29a – Write "How to add a new component" guide for `packages/ui`.
  - [ ] 29b – Summarize headless integrations and upgrade strategy.
  - [ ] 29c – Capture future ideas in `docs/05-ideas.md` if needed.

---

## 🛠️ Backlog: Phase 6 – Gap Fill, QA & Tech Debt

37 - [ ] **QA & Cleanup**
  - [ ] 37a – **Resolve Linting Errors**: Fix remaining lint warnings in `packages/ui` (if any).
  - [ ] 37b – **Standardize Structure**: Ensure all tests are co-located or strictly organized.
  - [ ] 37c – **Atoms Coverage**: Add tests for `Stack`, `Dot`, `NavLink`.
  - [ ] 38a – **Fix Disabled Tests**: Resolve issues in `Command`, `Menubar`, `DropdownMenu`, and `Autocomplete` tests.
  - [ ] 38b – **Molecules Coverage**: Add tests for `HoverCard`, `NavigationMenu`, `OTPInput`, `Resizable`.
  - [ ] 38c – **Interaction Tests**: Improve reliability of tests involving Radix/Headless interactions in JSDOM.

---

## 🚀 Phase 7: AI Backend & MCP Integration (The Component Foundry)
**Goal:** Create a robust Model Context Protocol (MCP) server that acts as an intelligent librarian for the Design System, allowing AI agents to query, retrieve, and assemble UI components with strict adherence to the system's rules.

### 🛠️ 7a – Component Registry Extraction (The Harvester)
**Context:** Before serving components, we need to extract metadata (props, types, examples) from the codebase into a machine-readable format.
- [ ] **Design Schema Definition** `[Backend]`
    - Define the JSON Schema for `registry.json` (id, name, type, props, dependencies, code_snippet, usage_example).
- [ ] **AST Extraction Script** `[Node/TS]`
    - Implement a Node.js script using `ts-morph` or `react-docgen` to parse `packages/ui` source files.
    - Automate extraction of Component descriptions (JSDoc) and Prop Types.
- [ ] **Storybook Scraper** `[Node]`
    - Implement logic to read `.stories.tsx` files to extract "Gold Standard" usage examples for each component.
    - *Rationale:* Agents perform better with few-shot examples; Storybook is the perfect source for this.
- [ ] **Registry Build Pipeline** `[CI/CD]`
    - Create a `npm run build:registry` script that generates the `registry.json` file.
    - Integrate this into the CI pipeline to ensure the AI registry is always in sync with the latest UI package version.

### 🧠 7b – MCP Server Implementation (The Brain)
**Context:** Building the server using `fastapi-mcp` to serve the registry to AI clients (Cursor, Windsurf, Claude).
- [ ] **Server Initialization** `[Python/FastAPI]`
    - Initialize the `ivisa-mcp-server` repository using `fastapi-mcp`.
    - Configure basic logging and health checks (`/health`).
- [ ] **Resource: Design Tokens** `[MCP]`
    - Implement `@mcp.resource("ivisa://tokens/all")`: Return JSON with all colors, spacing, radius, and typography tokens.
    - *Goal:* Allow agents to reference correct hex codes and spacing units without hallucinating magic numbers.
- [ ] **Tool: Component Search** `[MCP]`
    - Implement `@mcp.tool("search_components")`: Fuzzy search logic to find components by name or description (e.g., query "user card" returns `Card` and `Avatar`).
- [ ] **Tool: Component Retrieval** `[MCP]`
    - Implement `@mcp.tool("get_component_source")`: Return the full code, required imports, and a usage example for a specific component ID.
    - *Critical:* Ensure the output format is copy-paste ready for the agent.
- [ ] **Tool: Icon Retrieval** `[MCP]`
    - Implement `@mcp.tool("search_icons")`: Integration with Lucide/Phosphor (whatever you use) to help agents find the correct icon name.

### ⚡ 7c – Advanced Agent Capabilities (The Logic)
**Context:** Going beyond simple retrieval to intelligent scaffolding.
- [ ] **Template Scaffolding** `[MCP]`
    - Create a `templates/` directory in the backend with standard layouts (e.g., `DashboardLayout`, `FormLayout`, `DataGridPage`).
    - Implement `@mcp.tool("scaffold_page")`: Returns a full page structure based on a selected template.
- [ ] **Validation Logic** `[MCP]`
    - Implement `@mcp.tool("validate_usage")`: Accepting a code snippet and checking if it violates basic Design System rules (e.g., using inline styles instead of Tamagui props).
- [ ] **Context Awareness (Rio Specifics)** `[MCP]`
    - Implement a resource `ivisa://context/rules`: Return a summary of "Frontend Guidelines for Rio City Hall" (Accessibility requirements, Color contrast rules).

### 🚢 7d – Infrastructure & Connectivity
**Context:** Making the server accessible to local IDEs and potentially remote agents.
- [ ] **Dockerization** `[DevOps]`
    - Create a `Dockerfile` for the FastAPI server (optimized for Python 3.11+).
    - Ensure `registry.json` is mounted or copied correctly into the container.
- [ ] **MCP Proxy Setup** `[DevOps]`
    - Implement `mcp-proxy` configuration to bridge SSE (Server-Sent Events) to Stdio.
    - *Goal:* Allow local IDEs (like Cursor) to connect to the Dockerized server easily.
- [ ] **Authentication Layer** `[Security]`
    - Implement basic API Key authentication in `fastapi-mcp` to prevent unauthorized access if deployed publicly.
- [ ] **IDE Configuration Guide** `[DOC]`
    - Write a `docs/AI_AGENT_SETUP.md` explaining how developers can add the MCP server to their Cursor/Windsurf `settings.json`.

---

## ✅ Completed Tasks

- [x] Refactor `Alert`
- [x] Refactor `AspectRatio`
- [x] Refactor `Avatar`
- [x] Refactor `Badge`
- [x] Refactor `Button`
- [x] Refactor `Checkbox`
- [x] Refactor `Input`
- [x] Refactor `Kbd`
- [x] Refactor `Label`
- [x] Refactor `Progress`
- [x] Refactor `ScrollArea`
- [x] Refactor `Separator`
- [x] Refactor `Skeleton`
- [x] Refactor `Slider`
- [x] Refactor `Spinner`
- [x] Refactor `Stack`
- [x] Refactor `Switch`
- [x] Refactor `Textarea`
- [x] Refactor `Toggle`
- [x] Refactor `Typography`
- [x] Implement `NavLink`
- [x] Implement `Logo`
- [x] Implement `Dot`
- [x] Refactor `Accordion`
- [x] Refactor `AlertDialog`
- [x] Refactor `AvatarGroup`
- [x] Refactor `BadgeCounter`
- [x] Refactor `Breadcrumb`
- [x] Refactor `ButtonGroup`
- [x] Refactor `Calendar`
- [x] Refactor `Card`
- [x] Refactor `Collapsible`
- [x] Refactor `ComponentErrorBoundary`
- [x] Refactor `ContextMenu`
- [x] Refactor `Dialog`
- [x] Refactor `Drawer`
- [x] Refactor `Empty`
- [x] Refactor `Field`
- [x] Refactor `HoverCard`
- [x] Refactor `InputGroup`
- [x] Refactor `Item`
- [x] Refactor `Menubar`
- [x] Refactor `MonthsPicker`
- [x] Refactor `NativeSelect`
- [x] Refactor `NavigationMenu`
- [x] Refactor `OTPInput`
- [x] Refactor `Pagination`
- [x] Refactor `Popover`
- [x] Refactor `RadioGroup`
- [x] Refactor `Resizable`
- [x] Refactor `Select`
- [x] Refactor `Sheet`
- [x] Refactor `Sonner`
- [x] Refactor `StarRating`
- [x] Refactor `Stepper`
- [x] Refactor `Table`
- [x] Refactor `Tabs`
- [x] Refactor `Toast`
- [x] Refactor `ToggleGroup`
- [x] Refactor `Tooltip`
- [x] Implement `MetricCard`
- [x] Implement `NavGroup`
- [x] Implement `ChartContainer`
- [x] Implement `RadialChartContent`
- [x] Implement `HorizontalBarGroup`
- [x] Refactor `Autocomplete`
- [x] Refactor `Carousel`
- [x] Refactor `Charts`
- [x] Refactor `Command`
- [x] Refactor `DashboardShell` (formerly DashboardLayout)
- [x] Refactor `DataTable`
- [x] Refactor `FileUpload`
- [x] Refactor `Form`
- [x] Refactor `RichText`
- [x] Refactor `Sidebar`
- [x] Refactor `Timeline`
- [x] Implement `KPIGrid`
- [x] Implement `TimeSeriesChart`
- [x] Implement `GaugeChart`
- [x] Implement `RankingChart`
- [x] **Restore Visual Check**: Re-implement `scripts/visual-check.js`.
- [x] **Fix Current Unit Test Failures (P0)**: Fixed snapshot/style mismatches in `Button`, `Typography`, etc.
- [x] **Implement Security Scanning (P1)**: Integrated security scanner.
- [x] **Resolve All Linting Errors (P1)**: Fixed 70+ ESLint errors.
- [x] **Restore Visual Testing Capabilities (P2)**: Restored `scripts/visual-check.js`.
- [x] **Component Acceleration Phase**: Harvested `pogiii/sushi` and `tamagui-kitchen-sink`.
- [x] **Task 36a**: Implement `button-group`
- [x] **Task 36b**: Implement `empty` state component
- [x] **Task 36c**: Implement `field` component
- [x] **Task 36d**: Implement `input-group`
- [x] **Task 36e**: Implement `item` component
- [x] **Task 36f**: Implement `kbd` (Keyboard shortcut display)
- [x] **Task 36g**: Implement `label`
- [x] **Task 36h**: Implement `native-select`
- [x] **Task 36i**: Implement `sonner` (Toast alternative)
- [x] **Task 36j**: Implement `table` (Basic table)
- [x] **Command Palette**: Implemented `Command`.
- [x] **Date Picker**: Implemented `Calendar` + `DatePicker`.
- [x] **DropdownMenu**: Implemented `DropdownMenu`.
- [x] **HoverCard**: Implemented using `Popover`.
- [x] **Carousel**: Implemented using `embla-carousel`.
- [x] **AspectRatio**: Implemented.
- [x] **Collapsible**: Implemented.
- [x] **Spinner**: Implemented.
- [x] **Phase 0 (Research)**: Ecosystem research, direction decided.
- [x] **Phase 1 (Foundation)**: Theme, Config, Forms, Providers, Testing Setup.
- [x] **Phase 2 (High Impact)**: DataTable, Calendar, Command.
- [x] **Phase 3 (Expansion)**: Carousel, OTPInput, Pagination, Breadcrumb, Sidebar, Charts.
- [x] **Phase 4 (Web UX - Partial)**: NavigationMenu, ToggleGroup, Alert, Badge, Switch, Sheet, Toast, Avatar, Tabs, Accordion, Slider, RadioGroup, Skeleton, Progress, Separator, Toggle, ScrollArea, Resizable, Drawer, Tooltip, ContextMenu.
- [x] **Brand Integration**: IVISA branding applied.
- [x] **Submodule Strategy**: Documentation created.
