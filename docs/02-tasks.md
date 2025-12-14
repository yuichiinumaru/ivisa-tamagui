# 02 – Tasks for the Ivisa Tamagui Design System

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Tags: `JULES` (AI Agent), `LOCAL` (Human), `CRITICAL` (Blocker)

---

## � Wave 0: Local Stabilization (Done)
**Goal:** Fix infrastructure and "stupid" bugs locally before unleashing Swarm.

- [x] **Fix Critical Exports:** Remove ghost `NotificationCard` export.
- [x] **Fix Assets:** Point Storybook to correct `src/assets`.
- [x] **Fix Fonts:** Enforce `Cera Pro` in Button.
- [x] **Adoption:** Confirm Recharts strategy.

---

## 🌊 Wave 1: Showstoppers (Jules Swarm)
**Goal:** Fix Critical Logic Crashes & Core Functionality.

### 🛠️ 1.1 "Headless" Crash Fixes (Molecules)
- [ ] **Calendar/DatePicker:** Fix critical render crash (`Cannot read properties of null (reading 'map')`). Ensure headless lib initializes with valid data. `JULES`
- [ ] **Accordion:** Fix crash on missing data arrays. `JULES`
- [ ] **PageHeader:** Fix `displayName` read error on children. `JULES`
- [ ] **NotificationCard:** Re-implement or fix render crash if component is restored. `JULES`

### 🛠️ 1.2 Charting Engine Reborn (Organisms)
- [ ] **Refactor to Recharts:** Replace Victory with Recharts for:
    - [ ] `BarChart` / `ColumnChart`
    - [ ] `LineChart`
    - [ ] `PieChart` / `DonutChart`
    - [ ] `AreaChart`
- [ ] **Fix SVG Nesting:** Ensure no `<tspan>` inside `<text>` violations. `JULES`
- [ ] **Fix ResizeObserver:** Solve infinite loop performance degradation. `JULES`

---

## 🌊 Wave 2: Visual Integrity (Jules Swarm)
**Goal:** Fix "Ugly" UI, Broken Assets, and Prop Leaks.

### 🎨 2.1 Atoms & Assets
- [ ] **Avatar:** Fix broken image assets (404s). `JULES`
- [ ] **Empty:** Fix broken illustration path. `JULES`
- [ ] **Button:** Add visible Spinner for loading state; fix height jumps. `JULES`
- [ ] **Input:** Fix icon alignment; remove `uncontrolled` warnings. `JULES`
- [ ] **Tooltip:** Fix z-index clipping. `JULES`

### 🎨 2.2 Molecules Polish
- [ ] **Card:** Fix Hero Image assets; implement text overflow for long titles. `JULES`
- [ ] **AvatarGroup:** Fix border clipping on counters. `JULES`
- [ ] **DropdownMenu:** Fix z-index clipping by parent. `JULES`
- [ ] **Select:** Stop `hasError` prop leakage to DOM. `JULES`

---

## 🌊 Wave 3: Organism Expansion (Product)
**Goal:** High-fidelity components for real apps.

- [ ] **DataTable:** Fix empty state illustration; ensure safe sorting on null data. `JULES`
- [ ] **DashboardShell:** Fix loading skeleton layout shifts. `JULES`
- [ ] **Timeline:** Fix SVG transform errors. `JULES`
- [ ] **Form:** Fix z-index clipping of internal popovers. `JULES`

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

- [ ] **Component Registry:** Auto-generate JSON registry from source. `NODE`
- [ ] **MCP Server:** Python/FastAPI server to serve registry & docs. `PYTHON`
- [ ] **Scaffolding Tool:** Agent tool to generate full page layouts. `MCP`
