# Ivisa Tamagui Design System

Modern, Tamagui-first recreation of shadcn/ui ergonomics for the Ivisa product surfaces. This workspace hosts the mono-repo, documentation, automation scripts, and the `ivisa-tamagui` package that exposes tokens, atoms, molecules, and organisms built on Tamagui primitives plus headless logic integrations.

> 📘 **Onboarding shortcut:** Start with [`AGENTS.md`](./AGENTS.md). It documents safety rules (archive instead of delete), tooling, and the Atomic Design methodology enforced across the repo.

## Repository Layout

| Path | Description |
| --- | --- |
| `ivisa-tamagui/` | Yarn workspace containing the `packages/ui` design-system package and supporting configs. |
| `docs/` | Living documentation (`01-plan`, `02-tasks`, `03-architecture`, `04-changelog`, `06-rules`, etc.). |
| `scripts/` | Utility scripts such as `migrate_old_port.py` and Playwright visual-test harnesses. |
| `_archive/` | Safe holding area for retired assets (never delete outright). |
| `AGENTS.md` | Project charter + operating rules for every contributor. |

The design system package (`packages/ui`) follows **Atomic Design**:

```
theme/       # Tokens + tamagui.config
atoms/       # Button, Input, Textarea, Checkbox, etc.
molecules/   # Card, Dialog, Popover, Select, Calendar, DatePicker
organisms/   # DataTable, Form, Carousel, Command Palette
bento/       # (optional) Marketing layouts from Tamagui Bento Free
```

## Requirements

- Node.js 20+
- **Yarn** (v1) - `npm` and `pnpm` are forbidden.
- Python 3.10+ (for helper scripts)
- Playwright browsers (install via `npx playwright install chromium`)

> 🛡️ **Linux watcher limits:** Storybook and Vite need higher `inotify` counts. Run `sudo sysctl fs.inotify.max_user_watches=524288` once per machine (add to `/etc/sysctl.conf` for persistence) to avoid `ENOSPC` errors.

## Setup & Commands

```bash
cd ivisa-tamagui
yarn install                    # install workspace deps
yarn storybook                  # launch Storybook (Webpack 5) (default: http://localhost:6006)
yarn test                       # run unit tests (Jest)
yarn lint                       # run eslint
# node scripts/visual-check.js  # Playwright screenshots (Pending restoration)
```

- Storybook already aliases `react-native` → `react-native-web` and injects `process.env` polyfills for Tamagui.
- `scripts/visual-check.js` requires a running Storybook (use `yarn storybook` in another terminal). It captures PNG snapshots and fails on console errors.

## Deployment (Vercel)

Deployment is managed via `ivisa-tamagui/vercel.json` which enforces:
- **Build Command:** `yarn build:ci` (Static build, never dev server)
- **Output:** `packages/ui/storybook-static`
- **Root Directory:** `ivisa-tamagui`

See [`docs/03-architecture.md`](./docs/03-architecture.md) for full deployment details.

## Development Workflow

1. **Plan → Tasks → Architecture**
   - Confirm direction in `docs/01-plan.md`.
   - Pick items from `docs/02-tasks.md` (Phase tracker) before coding.
   - Review structural rules in `docs/03-architecture.md`.
2. **Implement via Atomic Design**
   - Add/modify components inside the correct layer (`atoms/`, `molecules/`, `organisms/`).
   - Export from `packages/ui/src/index.ts` and update accompanying stories under the same folder.
3. **Testing**
   - Prefer TDD for new composites (Jest + React Testing Library).
   - Verify visually through Storybook (Visual check script pending).
4. **Documentation**
   - Log noteworthy changes in `docs/04-changelog.md`.
   - Update task status and any architecture impacts immediately.
5. **Archiving**
   - Never delete source/docs outright. Move legacy files into `_archive/` (mirrored structure) so reviewers can inspect diffs.

## Troubleshooting

| Issue | Fix |
| --- | --- |
| `ENOSPC: System limit for number of file watchers reached` | Increase `fs.inotify.max_user_watches` as noted above. |
| Storybook fails to resolve `react-native` | Ensure `react-native-web` is installed and rely on the alias in `.storybook/main.ts`. |
| Playwright script errors complaining about missing browsers | Run `npx playwright install chromium`. |
| Missing CSS in Storybook | `AppProviders` no longer disables Tamagui CSS. If styles vanish, confirm `disableInjectCSS` is **not** set anywhere else. |

## Documentation Map

- [`docs/01-plan.md`](./docs/01-plan.md) – Vision, methodologies, roadmap.
- [`docs/02-tasks.md`](./docs/02-tasks.md) – Detailed task board (phases, subtasks, completion state).
- [`docs/03-architecture.md`](./docs/03-architecture.md) – Atomic layout, headless integration rules.
- [`docs/04-changelog.md`](./docs/04-changelog.md) – Release log + notable changes.
- [`docs/06-rules.md`](./docs/06-rules.md) – The Code of Law.
- [`docs/08-submodule-strategy.md`](./docs/08-submodule-strategy.md) – Git Submodule usage & framework-agnostic rules.

Keep these files synchronized with code changes to maintain a reliable onboarding trail.
