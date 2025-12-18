# 02 – Tasks for the Ivisa Tamagui Design System

## Legend
- Status: `[ ]` pending, `[~]` in progress, `[x]` completed
- Tags: `JULES` (AI Agent), `LOCAL` (Human), `CRITICAL` (Blocker)

---

## 🌊 Wave 3: Organism Expansion (Product)
**Goal:** High-fidelity components for real apps.

- [ ] **Timeline:** Fix SVG transform errors. `JULES`
- [ ] **Form:** Fix z-index clipping of internal popovers. `JULES`
- [x] **AgentAnimations:** Create `AgentAnimationPanel` and `AgentAnimationModal` for visualizing agent events. `JULES`

---

## 🌊 Wave 4: Field Operations (New)
**Goal:** Tools for the "Fiscal na Rua" (Health Inspector).

- [x] **SignaturePad:** Canvas-based capture for digital signatures. `JULES`
- [x] **ImageAnnotator:** Draw/Annotate on photos (Red circle on violations). `JULES`
- [x] **ScannerView:** Camera overlay for QR/Barcode reading. `JULES`
- [x] **LocationStatus:** GPS Accuracy badge & timestamp. `JULES`

---

## 🌊 Wave 5: Legal & Compliance
**Goal:** Tools for bureaucratic safety.

- [x] **PDFPreview:** Responsive PDF rendering in Modal/Drawer. `JULES`
- [x] **DiffViewer:** Visual text comparison (Legislation/Reports). `JULES`
- [x] **TimelineAudit:** Immutable log visualization (Who, When, What). `JULES`
- [x] **A11yToolbar:** Gov-standard accessibility menu (Font size, Contrast). `JULES`

---

## 🚀 Wave 6: The AI Backend (MCP)
**Goal:** "The Component Foundry" - Serve components to Agents.

- [ ] **MCP Server:** Python/FastAPI server to serve registry & docs. `PYTHON`
- [ ] **Scaffolding Tool:** Agent tool to generate full page layouts. `MCP`

---

## 💎 Wave 7: Storybook Perfection (Carbon Copy)
**Goal:** Elevate Storybook to World-Class status inspired by IBM Carbon.

- [ ] **Skeleton Audit:** Ensure every data-fetching component has a Skeleton story. `JULES`
- [ ] **Charts Skeleton:** Implement placeholder visuals for charts. `JULES`
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
- [ ] **Coachmark:** Implement onboarding popover + highlight. `JULES`
- [ ] **Dropzone:** Implement file drag-and-drop UI. `JULES`

---

## 🧠 Wave 9: Intelligence & Governance (Atlassian Inspired)
**Goal:** "The AI-First Interface" - Trust, Transparency, and Tooling.

### 9.1 AI Patterns (Rovo)
- [ ] **AIPresence:** Implement "Telepointer" / "Scanning" visual indicator atom. `JULES`
- [ ] **AIButton:** Implement distinct styling (gradient/shimmer) for AI actions. `JULES`
- [ ] **ResizableSidebar:** Implement a sidebar layout that pushes content (for context-aware chat). `JULES`

### 9.2 Governance Tooling
- [ ] **Linting:** Implement `restrict-imports` or custom ESLint rule to ban hex colors. `NODE`
- [ ] **Primitive Audit:** Scan codebase to replace `div`/`View` with `Stack`. `NODE`

### 9.3 Foundations
- [ ] **A11y Motion:** Verify `prefers-reduced-motion` support in `tamagui.config.ts`. `JULES`
- [ ] **Content Guidelines:** Add "Designing Messages" section to Storybook Intro. `JULES`

---

## ✅ Completed Tasks Archive

### Wave 0: Local Stabilization
- [x] **Fix Critical Exports:** Remove ghost `NotificationCard` export.
- [x] **Fix Assets:** Point Storybook to correct `src/assets`.
- [x] **Fix Fonts:** Enforce `Cera Pro` in Button.
- [x] **Adoption:** Confirm Recharts strategy.

### Wave 1: Showstoppers
- [x] **Calendar/DatePicker:** Fix critical render crash.
- [x] **Accordion:** Fix crash on missing data arrays.
- [x] **PageHeader:** Fix `displayName` read error.
- [x] **NotificationCard:** Fixed `NotificationFeed` import crashes.
- [x] **Refactor to Recharts:** Bar, Line, Pie, Area.
- [x] **Fix SVG Nesting:** Ensure no `<tspan>` inside `<text>` violations.
- [x] **Fix ResizeObserver:** Solve infinite loop performance degradation.

### Wave 2: Visual Integrity
- [x] **Avatar:** Fix broken image assets.
- [x] **Empty:** Fix broken illustration path.
- [x] **Button:** Add visible Spinner for loading state.
- [x] **Input:** Fix icon alignment.
- [x] **Tooltip:** Fix z-index clipping.
- [x] **Card:** Fix Hero Image assets.
- [x] **AvatarGroup:** Fix border clipping.
- [x] **DropdownMenu:** Fix z-index clipping.
- [x] **Select:** Stop `hasError` prop leakage.

### Wave 3: Organism Expansion
- [x] **DataTable:** Fix DOM nesting violations.
- [x] **DashboardShell:** Fix loading skeleton layout shifts.
- [x] **AgentAnimations:** Create `AgentAnimationPanel` and `AgentAnimationModal`.

### Wave 6: AI Backend
- [x] **Component Registry:** Auto-generate JSON registry from source.

### Wave 7: Storybook Perfection
- [x] **Hierarchy:** Rename to `Átomos`, `Moléculas`, `Organismos`.
- [x] **Overview Pages:** Create `Overview.mdx`.
- [x] **DataTable Skeleton:** Implement perfect loading state.

### Wave 8: Storybook Professionalization
- [x] **Meter:** Implement capacity/relevance indicator.
- [x] **StatusLight:** Implement semantic dot with text.
