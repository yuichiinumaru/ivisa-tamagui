# 02 – Tasks for the Ivisa Tamagui Design System

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Tags: `JULES` (AI Agent), `LOCAL` (Human), `CRITICAL` (Blocker)

---

##  Wave 0: Local Stabilization (Done)
**Goal:** Fix infrastructure and "stupid" bugs locally before unleashing Swarm.

- [x] **Fix Critical Exports:** Remove ghost `NotificationCard` export.
- [x] **Fix Assets:** Point Storybook to correct `src/assets`.
- [x] **Fix Fonts:** Enforce `Cera Pro` in Button.
- [x] **Adoption:** Confirm Recharts strategy.

---

## 🌊 Wave 1: Showstoppers (Jules Swarm)
**Goal:** Fix Critical Logic Crashes & Core Functionality.

### 🛠️ 1.1 "Headless" Crash Fixes (Molecules)
- [x] **Calendar/DatePicker:** Fix critical render crash (`Cannot read properties of null (reading 'map')`). Ensure headless lib initializes with valid data. `JULES`
- [x] **Accordion:** Fix crash on missing data arrays. `JULES`
- [x] **PageHeader:** Fix `displayName` read error on children. `JULES`
- [x] **NotificationCard:** Fixed `NotificationFeed` import crashes. `JULES`

### 🛠️ 1.2 Charting Engine Reborn (Organisms)
- [x] **Refactor to Recharts:** Replace Victory with Recharts for:
    - [x] `BarChart` / `ColumnChart`
    - [x] `LineChart`
    - [x] `PieChart` / `DonutChart`
    - [x] `AreaChart`
- [x] **Fix SVG Nesting:** Ensure no `<tspan>` inside `<text>` violations. `JULES`
- [x] **Fix ResizeObserver:** Solve infinite loop performance degradation. `JULES`

---

## 🌊 Wave 2: Visual Integrity (Jules Swarm)
**Goal:** Fix "Ugly" UI, Broken Assets, and Prop Leaks.

### 🎨 2.1 Atoms & Assets
- [x] **Avatar:** Fix broken image assets (404s). `JULES`
- [x] **Empty:** Fix broken illustration path. `JULES`
- [x] **Button:** Add visible Spinner for loading state; fix height jumps. `JULES`
- [x] **Input:** Fix icon alignment; remove `uncontrolled` warnings. `JULES`
- [x] **Tooltip:** Fix z-index clipping. `JULES`

### 🎨 2.2 Molecules Polish
- [x] **Card:** Fix Hero Image assets; implement text overflow for long titles. `JULES`
- [x] **AvatarGroup:** Fix border clipping on counters. `JULES`
- [x] **DropdownMenu:** Fix z-index clipping by parent. `JULES`
- [x] **Select:** Stop `hasError` prop leakage to DOM. `JULES`

---

## 🌊 Wave 3: Organism Expansion (Product)
**Goal:** High-fidelity components for real apps.

- [x] **DataTable:** Fix DOM nesting violations. `JULES`
- [x] **DashboardShell:** Fix loading skeleton layout shifts. `JULES`
- [ ] **Timeline:** Fix SVG transform errors. `JULES`
- [ ] **Form:** Fix z-index clipping of internal popovers. `JULES`
- [x] **AgentAnimations:** Create `AgentAnimationPanel` and `AgentAnimationModal` for visualizing agent events. `JULES`

---

## 🌊 Wave 4: Field Operations (New)
**Goal:** Tools for the "Fiscal na Rua" (Health Inspector).

- [ ] **SignaturePad:** Canvas-based capture for digital signatures. `JULES`
- [ ] **ImageAnnotator:** Draw/Annotate on photos (Red circle on violations). `JULES`
- [ ] **ScannerView:** Camera overlay for QR/Barcode reading. `JULES`
- [ ] **LocationStatus:** GPS Accuracy badge & timestamp. `JULES`

---

## 🌊 Wave 5: Legal & Compliance
**Goal:** Tools for bureaucratic safety.

- [ ] **PDFPreview:** Responsive PDF rendering in Modal/Drawer. `JULES`
- [ ] **DiffViewer:** Visual text comparison (Legislation/Reports). `JULES`
- [ ] **TimelineAudit:** Immutable log visualization (Who, When, What). `JULES`
- [ ] **A11yToolbar:** Gov-standard accessibility menu (Font size, Contrast). `JULES`

---

## 🚀 Wave 6: The AI Backend (MCP)
**Goal:** "The Component Foundry" - Serve components to Agents.

- [x] **Component Registry:** Auto-generate JSON registry from source. `NODE`
- [ ] **MCP Server:** Python/FastAPI server to serve registry & docs. `PYTHON`
- [ ] **Scaffolding Tool:** Agent tool to generate full page layouts. `MCP`

---

## 💎 Wave 7: Storybook Perfection (Carbon Copy)
**Goal:** Elevate Storybook to World-Class status inspired by IBM Carbon.

### 7.1 Localization & Structure
- [x] **Hierarchy:** Rename to `Átomos`, `Moléculas`, `Organismos` and Chart consolidation. `JULES`
- [ ] **Overview Pages:** Create `Overview.mdx` for key organisms. `JULES`

### 7.2 The Skeleton Crew
- [ ] **Skeleton Audit:** Ensure every data-fetching component has a Skeleton story. `JULES`
- [x] **DataTable Skeleton:** Implement perfect loading state. `JULES`
- [ ] **Charts Skeleton:** Implement placeholder visuals for charts. `JULES`

### 7.3 Advanced Patterns
- [ ] **Breadcrumb:** Implement "Collapse to Dropdown" behavior. `JULES`
- [ ] **ComboButton:** Create Split/Combo Button molecule. `JULES`
- [ ] **Component Status:** Add Stable/Experimental/Deprecated badges to docs. `JULES`

---

## 💠 Wave 8: Storybook Professionalization (Adobe Spectrum)
**Goal:** Adopt patterns from Adobe Spectrum Web Components to reach enterprise grade.

### 8.1 Taxonomy & Organization
- [ ] **Docs/Canvas Separation:** Ensure `*.stories.tsx` exports `Default` for Canvas and uses MDX for Docs. `JULES`
- [ ] **T-Shirt Sizing:** Standardize `size` props (`$sm`, `$md`, `$lg`, `$xl`) across all components. `JULES`
- [ ] **Density Modes:** Implement `density` (Compact/Spacious) prop/context globally. `JULES`

### 8.2 Component Variations
- [ ] **Quiet Variants:** Add `variant="quiet"`/`ghost` to Inputs, Selects, Tabs, Buttons. `JULES`
- [ ] **Static/Overlay:** Add stories for components on fixed dark/colored backgrounds. `JULES`
- [ ] **Pending States:** Ensure visible loading states for Inputs, Selects, Buttons. `JULES`

### 8.3 Micro-Behaviors & Edge Cases
- [ ] **Mobile Views:** Add stories using Viewport to force mobile modes (e.g. Picker -> Sheet). `JULES`
- [ ] **Virtualization:** Implement/Doc `virtualized` modes for Tables/Lists. `JULES`
- [ ] **Drag & Drop:** Visualize "Drag Over" states for file uploads. `JULES`
- [ ] **Stress Testing:** Add "Long Text", "Nesting" (Popover inside Dialog), and "Scroll" stories. `JULES`

### 8.4 Missing Atoms (Gap Analysis)
- [x] **Meter:** Implement capacity/relevance indicator. `JULES`
- [x] **StatusLight:** Implement semantic dot (Green/Yellow/Red) with text. `JULES`
- [ ] **Coachmark:** Implement onboarding popover + highlight. `JULES`
- [ ] **Dropzone:** Implement file drag-and-drop UI. `JULES`
