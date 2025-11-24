# Component Inventory Script Requirements

## Purpose
Automate extraction of shadcn component metadata to support migration planning and spec generation.

## Inputs
- `registry_file`: Path to shadcn registry file (default `reference-repos/ui/apps/v4/registry/new-york-v4/ui/_registry.ts`).
- Optional `--output-format` (`json`, `csv`).
- Optional `--filters` (comma-separated component names or groups).

## Outputs
- Primary: `exports/components-inventory.json` containing array of component records.
- Optional CSV when `--output-format csv`.
- Summary metrics in stdout (total components processed, missing dependencies).

## Record Schema
```json
{
  "name": "button",
  "group": "core",
  "dependencies": ["@radix-ui/react-slot"],
  "registryDependencies": ["separator"],
  "files": ["ui/button.tsx"],
  "tailwindConfig": true,
  "cssVars": true
}
```

## Acceptance Criteria
1. CLI executes via `conda run -n 12 python scripts/component_inventory.py`.
2. Generates JSON file with all registry items excluding deprecated entries.
3. Logs written to `/logs/migration/shadcn-tamagui/component-inventory/log-component-inventory-aaaammdd hhmmss.log`.
4. Supports filtering and output format options.
5. Exits with non-zero status on parsing failures and writes error details to log.
6. Provides unit tests covering parsing, filtering, and error handling (pytest).

## Test Plan (TDD)
- Parse minimal fixture with two components and verify output.
- Validate filter behavior (include/exclude).
- Assert log file is created with expected naming convention.
- Simulate missing file to ensure graceful failure.

## Dependencies
- Python standard library (`argparse`, `json`, `pathlib`), `dataclasses` (optional), `logging`.
- No third-party packages required.

## Future Enhancements
- Integrate with token mapper to cross-reference token usage.
- Support diffing against previous inventories to track changes.
