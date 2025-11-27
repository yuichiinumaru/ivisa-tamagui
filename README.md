# Ivisa Tamagui Design System

Modern, Tamagui-first recreation of shadcn/ui ergonomics for the Ivisa product surfaces. This workspace hosts the mono-repo, documentation, automation scripts, and the `ivisa-tamagui` package that exposes tokens, atoms, molecules, and organisms built on Tamagui primitives plus headless logic integrations.

> 📘 **Onboarding shortcut:** Start with [`AGENTS.md`](./AGENTS.md). It documents safety rules (archive instead of delete), tooling, and the Atomic Design methodology enforced across the repo.

## Repository Layout

| Path | Description |
| --- | --- |
| `ivisa-tamagui/` | PNPM workspace containing the `packages/ui` design-system package and supporting configs. |
| `docs/` | Living documentation (`01-plan`, `02-tasks`, `03-architecture`, `04-changelog`, `06-testing-process`, etc.). |
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
- PNPM (see `corepack enable` if not available)
- Python 3.10+ (for helper scripts)
- Playwright browsers (install via `npx playwright install chromium`)

> 🛡️ **Linux watcher limits:** Storybook and Vite need higher `inotify` counts. Run `sudo sysctl fs.inotify.max_user_watches=524288` once per machine (add to `/etc/sysctl.conf` for persistence) to avoid `ENOSPC` errors.

## Setup & Commands

```bash
pnpm install                # install workspace deps
pnpm storybook              # launch Storybook (default: http://localhost:6006)
pnpm test                   # run unit + interaction tests (Vitest)
pnpm lint                   # run eslint/ruff (see package.json scripts)
node scripts/visual-check   # Playwright screenshots + console log scanning
python scripts/migrate_old_port.py --help  # tooling to import legacy assets
```

- Storybook already aliases `react-native` → `react-native-web` and injects `process.env` polyfills for Tamagui.
- `scripts/visual-check.js` requires a running Storybook (use `pnpm storybook` in another terminal). It captures PNG snapshots and fails on console errors.

## Development Workflow

1. **Plan → Tasks → Architecture**
   - Confirm direction in `docs/01-plan.md`.
   - Pick items from `docs/02-tasks.md` (Phase tracker) before coding.
   - Review structural rules in `docs/03-architecture.md`.
2. **Implement via Atomic Design**
   - Add/modify components inside the correct layer (`atoms/`, `molecules/`, `organisms/`).
   - Export from `packages/ui/src/index.ts` and update accompanying stories under the same folder.
3. **Testing**
   - Prefer TDD for new composites (Vitest + React Testing Library).
   - Verify visually through Storybook + `scripts/visual-check.js` (see `docs/06-testing-process.md`).
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
- [`docs/06-testing-process.md`](./docs/06-testing-process.md) – Storybook + Playwright workflow, troubleshooting.
- [`docs/08-submodule-strategy.md`](./docs/08-submodule-strategy.md) – Git Submodule usage & framework-agnostic rules.

Keep these files synchronized with code changes to maintain a reliable onboarding trail.

## Contributing Checklist

1. Create a feature branch (`feat/<component>` or `fix/<issue>`).
2. Follow TDD where possible; commit only after tests + visual checks pass.
3. Update docs + changelog alongside the code.
4. Move any removed assets to `_archive/` and note their origin in the PR.
5. Submit a PR referencing the relevant task ID from `docs/02-tasks.md`.

Happy building! 🎉
