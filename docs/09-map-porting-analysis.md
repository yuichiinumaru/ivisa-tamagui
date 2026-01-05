# 09 – Map Porting Analysis

## 1. Context
The user requested to analyze and evaluate porting the `mapcn` repository (a Shadcn-style map wrapper for `maplibre-gl`) to `@ivisa/ui`.

Reference: `https://github.com/AnmolSaini16/mapcn`
Current Status: Submodule added to `references/mapcn`.

## 2. Component Analysis: `Map`
The core component is `Map` (and its subcomponents `MapMarker`, `MapControls`, etc.) located in `references/mapcn/src/registry/map.tsx`.

### Dependency Analysis
- **Core Library:** `maplibre-gl` (Web-only WebGL mapping library).
- **React Wrapper:** Custom implementation using `useEffect` to initialize `MapLibreGL.Map`.
- **Styling:** Tailwind CSS (`clsx`, `tailwind-merge`) for controls and markers.
- **Icons:** `lucide-react`.
- **Portals:** `createPortal` for rendering React components inside MapLibre markers/popups.

### Feasibility for `@ivisa/ui` (React Native / Tamagui)
- **Problem:** `maplibre-gl` is **web-only**. It relies on the DOM (`containerRef`) and WebGL in a browser context.
- **Native Equivalent:** `@maplibre/maplibre-react-native` (formerly `@rnmapbox/maps`).
- **Constraint Check:**
  - Project guidelines strictly forbid adding new npm packages unless critical.
  - "Due to the absence of `d3-hierarchy` and `d3-geo`, the `SunburstChart`, `DecompositionTree`, and `Maps` components implement custom layout and projection algorithms... using `react-native-svg` primitives."
  - This suggests our existing "Maps" solution is **SVG-based**, not a full tile-based interactive map like Google Maps or Mapbox.

### Porting Strategy options
1.  **Option A: Full Port (Blocked)**
    - Install `@maplibre/maplibre-react-native`.
    - **Pros:** True interactive maps.
    - **Cons:** Violates "no new packages" rule. Adds heavy native dependency requiring linking.

2.  **Option B: Web-Only Wrapper (Limited)**
    - Port the `maplibre-gl` code but wrap it in `Platform.OS === 'web'`.
    - **Pros:** Works on web.
    - **Cons:** Broken on mobile (unless using WebView). The repo goal is "web/native parity".

3.  **Option C: SVG-Based "Geo" Component (Recommended)**
    - Improve our existing `Maps` organism (based on `react-native-svg`) to support the *API patterns* of `mapcn` (markers, popups) but using our projection engine.
    - **Pros:** No new deps. Consistent with current architecture.
    - **Cons:** Not a "tile map" (no street view, zooming is different).

4.  **Option D: WebView Integration (Compromise)**
    - Render the web map inside a `WebView` on mobile.
    - **Pros:** Parity in visuals.
    - **Cons:** Performance, complexity of bridging events.

### Decision
Given the strict "no new packages" and the existing SVG-based `Maps` implementation memory, the direct port of `maplibre-gl` is **not feasible** without breaking rules.
However, the *value* of `mapcn` lies in its **API Design** (React Context for Map, composable Markers/Popups/Controls).

**Plan:**
1.  Refactor/Enhance our existing `Maps` organism to adopt the `MapContext` pattern from `mapcn`.
2.  Implement `MapMarker`, `MapPopup`, `MapControls` using Tamagui + SVG, mimicking the `mapcn` API.
3.  Document that this is a "Projection-based Map" (Choropleth/Dot Density) suitable for BI, not a "Navigation Map" (Street View).

**Wait**, if the user explicitly pointed to `mapcn`, they likely want *street maps*.
If I strictly follow "no new packages", I cannot give them street maps.
But maybe `ivisa-tamagui` ALREADY has a map library?
I need to double-check `ivisa-tamagui/package.json` very carefully. I requested it before but the output was "File not found" or just empty?
Ah, I see `read_file(ivisa-tamagui/package.json)` failed in the first turn ("File not found").
I listed `ivisa-tamagui/` and it has `package.json`.
I should try reading `ivisa-tamagui/package.json` again. It is CRITICAL to know the dependencies.

## 3. Other Components
- `Sidebar`: `mapcn` has a sidebar. We have `Drawer` (Sheet-based) and `Sidebar` (Organism).
- `Table`: We have `DataTable`.
- `Sheet`: We have `Sheet`.

**Conclusion:** The unique value is the **Map**.

## 4. Action Items
1.  Read `ivisa-tamagui/package.json` (Try again).
2.  If no map lib exists:
    - Create `Map` organism using the **SVG approach** (Mercator projection) but with the **API of `mapcn`** (Markers, Tooltips).
    - This satisfies "porting" the *design pattern* without breaking the "no new deps" rule.
    - We will call it `GeoMap` or `Map` but clarify it's SVG-based.
3.  Implement `MapControls` (Zoom/Pan) using `react-native-svg` transforms.
