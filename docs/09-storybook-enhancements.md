# 09 - Storybook Enhancement Plan (The Carbon Copy)

## 1. Analysis of IBM Carbon Storybook
Based on the analysis of Carbon Design System's Storybook, the following patterns have been identified as "Gold Standard":

### Structure & Organization
- **Overview Pages:** Every component has a dedicated "Overview" documentation page (MDX) separate from the "Playground" story.
- **Behavioral Stories:** Stories are not just visual variants (Primary/Secondary) but functional scenarios:
  - `Controlled` vs `Uncontrolled`
  - `Skeleton` (Loading state)
  - `WithLayer` (Stacking context)
  - `Overflow` (Responsive behavior)
- **Feature Flags:** A dedicated section to manage and preview feature flags (`enable-css-grid`, etc.), allowing runtime testing of experimental features.

### Specific Component Patterns
- **Accordion:** Explicit `Skeleton` story.
- **Breadcrumb:** Handling overflow with a "..." menu.
- **Modal:** Variations for `Passive` (No action), `Full Width`.
- **ComboButton:** A pattern for grouping related actions (Primary + Dropdown), which we should evaluate for adoption.
- **AI Label:** A specific component for explaining AI-generated content (Explainability Popover).

### Developer Experience
- **Class Prefixing:** Documentation on how to handle CSS class prefixes (less relevant for Tamagui, but "Theme Prefixing" is relevant).
- **Code Snippets:** High-fidelity code examples including inline and multi-line variations.

---

## 2. Enhancement Strategy for @ivisa/ui

We will adopt the following improvements to elevate our Storybook to World-Class status:

### A. The "Overview" Standard
**Goal:** Convert auto-generated docs into curated Guidelines.
- **Action:** Create an `Overview.mdx` for each Organism.
- **Content:** Usage guidelines, Best Practices (Do's/Don'ts), and Accessibility notes.

### B. The "Skeleton" Mandate
**Goal:** Zero layout shift during loading.
- **Action:** Every data-fetching component (`DataTable`, `Charts`, `Dashboard`) MUST have a `Skeleton` story that perfectly mimics the layout.

### C. Scenario-Based Stories
**Goal:** Test logic, not just pixels.
- **Action:** Add stories for:
  - `Error State` (Simulated failure)
  - `Empty State` (Zero data)
  - `Overflow/Mobile` (Constrained width)

### D. New Components (Harvested from Carbon)
- **ComboButton:** We will implement a `SplitButton` or `ComboButton` using `Popover` + `Button`.
- **Breadcrumb (Collapsible):** Enhance our `Breadcrumb` to collapse items into a dropdown when width is limited.

---

## 3. Implementation Plan

### Phase 1: Structure & Localization (Immediate)
- [x] Rename Storybook hierarchy to Portuguese (`Átomos`, `Moléculas`, `Organismos`).
- [ ] Create `docs/templates/Overview.mdx` template.

### Phase 2: The Skeleton Crew
- [ ] Audit all Organisms for `isLoading` prop.
- [ ] Implement `Skeleton` stories for:
  - `DataTable`
  - `Charts` (Bar, Line, Pie)
  - `Sidebar`
  - `NotificationFeed`

### Phase 3: Advanced Patterns
- [ ] Implement `Breadcrumb` collapsing logic.
- [ ] Create `ComboButton` molecule.
- [ ] Add "Feature Flags" decorator if we introduce experimental components.
