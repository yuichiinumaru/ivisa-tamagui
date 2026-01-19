# Exploration Phase 4: Tests and CI/CD

## Testing Strategy
- **Unit Tests**: Colocated with components (e.g., `Button.test.tsx`).
- **Tools**: Jest, React Testing Library, `ts-jest`.
- **Utils**: `test-utils.tsx` wraps tests with Tamagui providers.
- **Visual Tests**:
    - `ivisa-tamagui/tests/visual-checks`: Stores reference screenshots.
    - `scripts/visual-check.js`: Playwright script to screenshot Storybook.

## CI/CD (`.github/workflows/ci.yml`)
- **Status**: **CONFLICT DETECTED**.
- **Issue**: The CI workflow uses `pnpm`, but `AGENTS.md` strictly forbids it and mandates `yarn`. The project root contains `yarn.lock` and `.yarnrc.yml`.
- **Steps**: Security scan is the only job currently defined.

## Scripts
- `lint-architecture.js`: Custom script for architectural linting.
- `visual-check.js`: Automated visual verification via Storybook.
