# Analysis of "Cannot assign to read only property" Errors

## The Issue
The error `Cannot assign to read only property '0' of object '[object Array]'` occurs when a component attempts to mutate an array that has been frozen.
This is common in **Storybook** environments because Storybook automatically freezes the `args` (props) passed to stories to ensure immutability.

If a component (or a library it uses, like `Recharts`) attempts to:
1. Sort the data in place (`data.sort()`)
2. Assign to an index (`data[i] = ...`)
3. Push/Splice (`data.push(...)`)

It will throw this error if `data` is a prop from Storybook.

## The Fix: Defensive Copying
To fix this, components should never assume props are mutable. They should create a shallow copy (state or memoized) before passing it to libraries or mutating it.

### Fixed: `BarChart.tsx`
We applied this fix to `BarChart.tsx`:
```tsx
// Before
<RechartsBarChart data={data} ... />

// After
const chartData = React.useMemo(() => (data ? [...data] : []), [data])
<RechartsBarChart data={chartData} ... />
```

## Potential Risks Detected
We scanned the codebase for unsafe mutation patterns (`.sort(`, `.push(`, `.reverse(`, `.splice(`).

**High Risk:**
- **`SankeyDiagram.tsx`**: Uses `push` and `sort` extensively on `nodes` and `links`. If these come from props, it WILL crash in Storybook.
  ```typescript
  l.sourceNode.sourceLinks.push(l)
  n.sourceLinks.sort(...)
  ```

**Safe (Chained):**
- **`RidgelinePlot.tsx`**: `.reverse()` is called after a `.map(...)`, so it mutates a fresh array. Safe.
- **`TreemapChart.tsx`**: `.sort()` called after `.map(...)`. Safe.

**Medium Risk (Needs Check):**
- **`AvatarGroup.tsx`**: `{visibleAvatars.reverse()}`. Depending on how `visibleAvatars` is derived, this might be safe (if from `toArray`), but explicit reversing in render is weird.

## Recommendation
Implement the defensive copy pattern (using `useMemo` or `useState`) in `SankeyDiagram` and any other component that needs to calculate/normalize data from props.
