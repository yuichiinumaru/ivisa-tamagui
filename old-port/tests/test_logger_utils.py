"""Tests for logger_utils."""

from __future__ import annotations

import logging
from pathlib import Path

import pytest

from scripts.logger_utils import LoggerConfig, get_logger


@pytest.mark.parametrize("area", ["component-inventory", "specs", " logging "])
def test_get_logger_creates_file(tmp_path: Path, monkeypatch: pytest.MonkeyPatch, area: str) -> None:
    monkeypatch.setenv("MIGRATION_LOG_ROOT", str(tmp_path))

    logger = get_logger(area, timestamp="20250101 010101")
    logger.info("test entry")

    normalized = area.strip().replace(" ", "-").lower()
    log_file = tmp_path / normalized / "log-{}-20250101 010101.log".format(normalized)

    assert log_file.exists()
    contents = log_file.read_text(encoding="utf-8")
    assert "test entry" in contents


def test_get_logger_prevents_duplicate_handlers(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    monkeypatch.setenv("MIGRATION_LOG_ROOT", str(tmp_path))

    logger = get_logger("duplicate", timestamp="20250101 020202", verbose=True)
    logger.debug("first call")

    handler_count = len(logger.handlers)

    logger_again = get_logger("duplicate", timestamp="20250101 020202", verbose=True)
    logger_again.debug("second call")

    assert handler_count == len(logger_again.handlers)


def test_get_logger_allows_custom_config(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    monkeypatch.setenv("MIGRATION_LOG_ROOT", str(tmp_path))

    config = LoggerConfig(
        file_format="%(levelname)s:%(message)s",
        date_format="%S",
        stream_format="stream:%(message)s",
        use_utc=False,
    )

    logger = get_logger("custom", timestamp="20250101 030303", verbose=True, config=config)
    logger.info("custom message")

    log_file = tmp_path / "custom" / "log-custom-20250101 030303.log"
    assert log_file.exists()
    assert "INFO:custom message" in log_file.read_text(encoding="utf-8")

    handler_count = len(logger.handlers)
    logger_again = get_logger("custom", timestamp="20250101 030303", verbose=True, config=config)
    assert handler_count == len(logger_again.handlers)


def test_get_logger_invalid_area() -> None:
    with pytest.raises(ValueError):
        get_logger(" ")


def test_infrastructure_scripts_reference_canonical_logger() -> None:
    project_root = Path(__file__).parents[1]
    canonical = project_root / "scripts" / "logger_utils.py"
    duplicate = project_root / "tamagui-components-final" / "infrastructure" / "logger_utils.py"

    assert canonical.exists()
    assert not duplicate.exists(), "Infrastructure should import shared logger_utils, not a duplicate copy"

    infra_scripts = [
        project_root / "tamagui-components-final" / "infrastructure" / "parallel_agents.py",
        project_root / "tamagui-components-final" / "infrastructure" / "scaled_orchestrator.py",
        project_root / "tamagui-components-final" / "infrastructure" / "consolidate_migration.py",
    ]

    for script_path in infra_scripts:
        contents = script_path.read_text(encoding="utf-8")
        assert "from scripts.logger_utils import get_logger" in contents
