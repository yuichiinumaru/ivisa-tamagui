"""Logging helper utilities for migration tooling."""

from __future__ import annotations

import logging
import os
import time
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional


@dataclass(frozen=True)
class LoggerConfig:
    """Structured configuration for migration loggers."""

    file_format: str = "%(asctime)sZ | %(levelname)s | %(message)s"
    date_format: str = "%Y-%m-%dT%H:%M:%S"
    stream_format: str = "%(levelname)s | %(message)s"
    use_utc: bool = True


_DEFAULT_LOG_ROOT = Path.cwd() / "logs" / "migration" / "shadcn-tamagui"
DEFAULT_LOGGER_CONFIG = LoggerConfig()


def _log_root() -> Path:
    """Determine log root honoring MIGRATION_LOG_ROOT if provided."""

    env_root = os.getenv("MIGRATION_LOG_ROOT")
    root = Path(env_root).expanduser() if env_root else _DEFAULT_LOG_ROOT
    root.mkdir(parents=True, exist_ok=True)
    return root


def _ensure_directory(area: str) -> Path:
    """Ensure the log directory for the given area exists."""

    area_path = _log_root() / area
    area_path.mkdir(parents=True, exist_ok=True)
    return area_path


def _build_timestamp(timestamp: Optional[str]) -> str:
    """Return timestamp in required format (YYYYMMDD HHMMSS)."""

    if timestamp is not None:
        return timestamp
    return datetime.now(timezone.utc).strftime("%Y%m%d %H%M%S")


def _build_filename(area: str, timestamp: Optional[str]) -> Path:
    """Build full path to log file using naming convention."""

    ts = _build_timestamp(timestamp)
    return _ensure_directory(area) / f"log-{area}-{ts}.log"


def _make_formatter(fmt: str, datefmt: str, *, use_utc: bool) -> logging.Formatter:
    formatter = logging.Formatter(fmt, datefmt)
    if use_utc:
        formatter.converter = time.gmtime
    return formatter


def _normalize_area(area: str) -> str:
    return area.strip().replace(" ", "-").lower()


def _file_handler_exists(logger: logging.Logger, log_file: Path) -> bool:
    return any(
        isinstance(handler, logging.FileHandler) and handler.baseFilename == str(log_file)
        for handler in logger.handlers
    )


def _stream_handler_exists(logger: logging.Logger) -> bool:
    return any(isinstance(handler, logging.StreamHandler) and not isinstance(handler, logging.FileHandler)
               for handler in logger.handlers)


def _attach_file_handler(
    logger: logging.Logger,
    *,
    log_file: Path,
    verbose: bool,
    config: LoggerConfig,
) -> None:
    if _file_handler_exists(logger, log_file):
        return

    file_handler = logging.FileHandler(log_file, encoding="utf-8")
    file_handler.setLevel(logging.DEBUG if verbose else logging.INFO)
    file_handler.setFormatter(
        _make_formatter(config.file_format, config.date_format, use_utc=config.use_utc)
    )
    logger.addHandler(file_handler)


def _attach_stream_handler(logger: logging.Logger, *, config: LoggerConfig) -> None:
    if _stream_handler_exists(logger):
        return

    stream_handler = logging.StreamHandler()
    stream_handler.setLevel(logging.DEBUG)
    stream_handler.setFormatter(_make_formatter(config.stream_format, config.date_format, use_utc=config.use_utc))
    logger.addHandler(stream_handler)


def get_logger(
    area: str,
    *,
    timestamp: str | None = None,
    verbose: bool = False,
    config: LoggerConfig | None = None,
) -> logging.Logger:
    """Return configured logger writing to migration log directory."""

    if not isinstance(area, str) or not area.strip():
        raise ValueError("area must be a non-empty string")

    normalized_area = _normalize_area(area)
    logger = logging.getLogger(f"migration.{normalized_area}")
    logger.setLevel(logging.DEBUG if verbose else logging.INFO)

    config = config or DEFAULT_LOGGER_CONFIG
    log_file = _build_filename(normalized_area, timestamp)

    _attach_file_handler(logger, log_file=log_file, verbose=verbose, config=config)

    if verbose:
        _attach_stream_handler(logger, config=config)

    logger.propagate = False
    return logger
