# Logging Utility Requirements

## Purpose
Provide a reusable logging helper for automation scripts to ensure consistent formatting, file output, and naming convention compliance (`log-<area>-aaaammdd hhmmss.log`).

## Functional Requirements
1. Expose `get_logger(area: str, *, timestamp: datetime | None = None) -> logging.Logger`.
2. Create directories under `${MIGRATION_LOG_ROOT or ./logs/migration/shadcn-tamagui}/<area>/` if they do not exist.
3. Generate filenames as `log-<area>-aaaammdd hhmmss.log` with UTC 24-hour formatting.
4. Support optional stream handler for stdout when `--verbose` flag (future enhancement) is set.
5. Prevent duplicate handlers on repeated calls.

## Non-Functional Requirements
- Pure Python standard library (`logging`, `datetime`, `pathlib`, `os`, `time`).
- Compatible with scripts executed via `conda run -n 12 python ...`.
- Thread-safe handler creation (use file locking if concurrency added later).
- Duplicated copies (e.g., under `tamagui-components-final/infrastructure`) must stay in sync with canonical implementation.

## Acceptance Criteria
1. `get_logger("component-inventory")` returns configured logger writing to expected path.
2. Logger honors naming convention, uses UTC timestamps, and UTF-8 encoding.
3. Subsequent calls for same area reuse existing handler.
4. Errors creating directories produce descriptive exceptions.

## Test Plan
- Temporary directory patch for logs root; verify file creation and naming.
- Ensure multiple calls do not duplicate handlers.
- Simulate permission error and assert exception raised.

## Future Enhancements
- Add JSON log formatter for machine parsing.
- Integrate with remote log shipping (e.g., ELK, Datadog).
