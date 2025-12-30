# Analysis Report 003: Avatar Invisibility in Storybook

## Problem Overview
The `Avatar` and `AvatarGroup` components are rendered with 0 width and height in Storybook, making them invisible. The only exception is the `+N` indicator in the `AvatarGroup` atom, which is visible.

## Root Cause Analysis
The theme configuration in `packages/ui/src/theme/tokens.ts` defines the `sizeScale` using ONLY named aliases:
```typescript
const sizeScale = {
  0: 0,
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  '2xl': 64,
  '3xl': 80,
  '15': 300,
  true: 40,
};
```

However, the components and stories use numeric-style tokens:
- `Avatar.tsx` (atom) uses `size: '$10'`.
- `AvatarGroup.tsx` (molecule) uses `size: '$10'`.
- Storybook controls allow selecting `$4`, `$8`, `$10`, `$12`, `$14`, `$16`.

When Tamagui attempts to resolve `$10`, it doesn't find it in the `size` tokens, leading to:
1. `AvatarFrame` (styled TamaguiAvatar) having undefined/0 dimensions.
2. `AvatarGroupItemFrame` having invalid CSS values (e.g., `width: "$10"`).

### Visible `+N` Indicator explained
The `MoreIndicator` in the `AvatarGroup` atom (`atoms/AvatarGroup.tsx`) has **hardcoded dimensions**:
```typescript
const MoreIndicator = styled(YStack, {
    // ...
    width: 40,
    height: 40,
});
```
This component is visible because it doesn't rely on the missing `$10` token.

## Proposed Fix
Add a compatible numeric size scale to `tokens.ts` that maps to the existing named aliases and provides coverage for commonly used sizes ($1 to $20).

### Mapping Strategy
- `$1` to `$20` scale.
- `$10` (the default for Avatars) will be mapped to `40px` (matching `md`).
- This ensures all existing components using numeric sizes will resolve correctly.

## Verification Plan
1. Apply changes to `packages/ui/src/theme/tokens.ts`.
2. Verify if `Avatar` and `AvatarGroup` appear in Storybook (or simulate rendering in a test if Storybook is not accessible/running).
3. Run `yarn test` to ensure no regressions in layout snapshots.
