# Exploration Phase 4: Tests and CI/CD

## Testing Infrastructure
- **Framework**: Jest with `ts-jest`.
- **Environment**: `jsdom`.
- **Setup**: `packages/ui/jest-setup.ts` heavily mocks React Native primitives (`View`, `Text`, `Image`, `TextInput`) and third-party libraries (`tamagui`, `react-native-svg`, `victory-native`) to allow running in JSDOM.
- **Visual Testing**: `scripts/visual-check.js` uses Playwright to capture a screenshot of Storybook. It's a basic implementation (Home page only) and requires Storybook to be running locally.

## CI/CD (`.github/workflows/ci.yml`)
- **Triggers**: Push/PR to main/master.
- **Jobs**: Security Scan.
- **Anomaly**: The CI workflow uses **PNPM**, but `AGENTS.md` explicitly mandates **Yarn** and forbids PNPM. This is a critical configuration drift. The repo contains `yarn.lock` and `.yarnrc.yml`, confirming Yarn is the correct tool. The CI pipeline is likely broken or testing a different environment hypothesis.

## Key Observations
- The project has a TDD mandate (`AGENTS.md`), supported by the Jest setup.
- Visual regression testing is in early stages.
- The CI configuration conflicts with the project constitution (`AGENTS.md`).
