# 10 – Map Porting Tasks

## Tasks
- [ ] **Create Organism:** `Map` in `packages/ui/src/organisms/Map`. `JULES`
- [ ] **Implement Context:** Create `MapContext` to manage state (zoom, pan, projection, bounds). `JULES`
- [ ] **Implement Primitives:**
  - [ ] `Map` (Container with SVG Surface + Pan/Zoom logic).
  - [ ] `MapMarker` (Absolute View positioned by projection).
  - [ ] `MapPopup` (Popover/Tooltip anchored to Marker).
  - [ ] `MapControls` (Zoom In/Out buttons).
- [ ] **Port Logic:** Adapt `mapcn`'s composable API (`<Map><MapMarker /></Map>`) to our SVG engine.
- [ ] **Documentation:** Add Storybook story `Map.stories.tsx`. `JULES`
- [ ] **Refine:** Ensure it handles GeoJSON data correctly and projects it.
