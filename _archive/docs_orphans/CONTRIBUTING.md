# Contributing to Ivisa Tamagui

## Development Stack

- **Package Manager**: `yarn` (v1.22.22). **DO NOT** use `npm` or `pnpm`.
- **Monorepo**: Packages are managed via Yarn Workspaces.
- **Framework**: React / Tamagui / Webpack (Storybook) / Vite (Builds).
- **Testing**: Jest / React Testing Library.

## Workflow Commands

### 1. Setup
```bash
yarn install
```

### 2. Storybook (Development)
The primary workspace for UI development is `@ivisa/ui`.
```bash
# Run Storybook on port 6010
yarn storybook
```

### 3. Testing
We use Jest for unit and component testing.
```bash
# Run all tests
yarn test

# Watch mode
yarn workspace @ivisa/ui test --watch
```

### 4. Linting
```bash
yarn lint
```

### 5. Building
```bash
# Build the UI package and Storybook static site
yarn build:ci
```

## Creating New Components

1. **Check `docs/02-tasks.md`**: Pick a task.
2. **Follow Protocols**: Refer to `docs/07-protocols.md` for architectural rules.
3. **Follow Storybook Standards**: Refer to `docs/06-rules.md` (Tier 1 is mandatory).
4. **Create Files**:
   - `src/[type]/[Name]/[Name].tsx`
   - `src/[type]/[Name]/[Name].stories.tsx`
   - `src/[type]/[Name]/[Name].test.tsx`
   - `src/[type]/[Name]/index.ts`
5. **Export**: Add to `src/index.ts`.

## Deployment

- **Vercel**: Deploys automatically on push to `main`.
- **Config**: Controlled by `vercel.json` and `package.json`.
- **Constraint**: Vercel builds MUST use `yarn build:ci` to ensure both lib and storybook compile.
