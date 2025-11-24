from __future__ import annotations

from pathlib import Path
from unittest.mock import MagicMock

import pytest

from scripts.migration_assistant_agent import MigrationAssistant, write_run_summary
from scripts.rate_limiter import TASK_TOKEN_COSTS


def test_migration_assistant_dry_run(monkeypatch, tmp_path: Path) -> None:
    monkeypatch.setenv("MIGRATION_LOG_ROOT", str(tmp_path / "logs"))

    from scripts import migration_assistant_agent as module

    monkeypatch.setattr(module, "get_api_key", lambda: "test-key-1234")

    assistant = MigrationAssistant(model="gemini-2.5-pro", verbose=False)
    result = assistant.run("draft spec", dry_run=True)

    assert result["status"] == "dry_run"

    output_dir = tmp_path / "out"
    path = write_run_summary(output_dir, result)
    assert path.exists()


def test_migration_assistant_uses_token_costs(monkeypatch: pytest.MonkeyPatch, tmp_path: Path) -> None:
    monkeypatch.setenv("MIGRATION_LOG_ROOT", str(tmp_path / "logs"))

    from scripts import migration_assistant_agent as module

    mock_rate_limiter = MagicMock()
    monkeypatch.setattr(module.RateLimiter, "from_env", lambda logger: mock_rate_limiter)
    monkeypatch.setattr(module, "get_api_key", lambda: "test-key-1234")

    assistant = MigrationAssistant(model="gemini-2.5-pro", verbose=False)
    assistant.run("specs", dry_run=True)

    expected_cost = TASK_TOKEN_COSTS["specs"]
    mock_rate_limiter.acquire.assert_called_once_with(expected_cost)


def test_migration_assistant_uses_default_token_cost(monkeypatch: pytest.MonkeyPatch, tmp_path: Path) -> None:
    monkeypatch.setenv("MIGRATION_LOG_ROOT", str(tmp_path / "logs"))

    from scripts import migration_assistant_agent as module

    mock_rate_limiter = MagicMock()
    monkeypatch.setattr(module.RateLimiter, "from_env", lambda logger: mock_rate_limiter)
    monkeypatch.setattr(module, "get_api_key", lambda: "test-key-1234")

    assistant = MigrationAssistant(model="gemini-2.5-pro", verbose=False)
    assistant.run("a-non-existent-task", dry_run=True)

    expected_cost = TASK_TOKEN_COSTS["default"]
    mock_rate_limiter.acquire.assert_called_once_with(expected_cost)