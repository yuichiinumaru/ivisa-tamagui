#!/usr/bin/env python3
"""Scaffold for the Migration Assistant agent leveraging Gemini + Agno stack."""

from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path
from typing import Any, Dict

from .logger_utils import get_logger
from .rate_limiter import RateLimiter, TASK_TOKEN_COSTS

# Reuse key rotation utilities from template directory
TEMPLATE_DIR = Path(__file__).resolve().parent.parent / "00-template"
sys.path.insert(0, str(TEMPLATE_DIR))
from api_key_rotation import get_api_key  # type: ignore # noqa: E402


class MigrationAssistant:
    """Minimal harness around Gemini agents to be extended in later phases."""

    def __init__(self, *, model: str, verbose: bool) -> None:
        self.model = model
        self.logger = get_logger("migration-assistant", verbose=verbose)
        self.rate_limiter = RateLimiter.from_env(self.logger)

    def run(self, task: str, *, dry_run: bool = False) -> Dict[str, Any]:
        """Execute the requested task skeleton, returning a structured result."""

        self.logger.info("Starting migration assistant task", extra={"task": task, "model": self.model})

        api_key = self._rotate_key()
        if api_key is None:
            message = "No API keys available; aborting agent run"
            self.logger.error(message)
            return {"status": "error", "message": message}

        token_cost_hint = TASK_TOKEN_COSTS.get(task, TASK_TOKEN_COSTS["default"])
        token_cost = self.rate_limiter.consume(task, token_cost=token_cost_hint)

        if dry_run:
            self.logger.info("Dry run mode enabled; skipping Gemini call", extra={"task": task})
            return {
                "status": "dry_run",
                "task": task,
                "model": self.model,
                "timestamp": datetime.utcnow().isoformat() + "Z",
            }

        # Placeholder for future Agno/Gemini invocation
        self.logger.info("Executing synthetic agent workflow", extra={"task": task})
        return {
            "status": "pending_implementation",
            "task": task,
            "model": self.model,
            "timestamp": datetime.utcnow().isoformat() + "Z",
        }

    def _rotate_key(self) -> str | None:
        try:
            key = get_api_key()
        except ValueError as exc:  # Raised when no keys configured
            self.logger.error("API key rotation failed", extra={"error": str(exc)})
            return None
        if not key:
            return None
        masked = key[:4] + "..." + key[-4:]
        self.logger.info("Using API key", extra={"key_hint": masked})
        return key


def write_run_summary(output_dir: Path, result: Dict[str, Any]) -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.utcnow().strftime("%Y%m%d-%H%M%S")
    output_path = output_dir / f"migration-assistant-{timestamp}.json"
    output_path.write_text(json.dumps(result, indent=2), encoding="utf-8")
    return output_path


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run Migration Assistant agent scaffold")
    parser.add_argument("--task", required=True, help="Task description to hand to the assistant")
    parser.add_argument("--model", default="gemini-2.5-pro", help="Gemini model identifier")
    parser.add_argument("--dry-run", action="store_true", help="Skip external API calls")
    parser.add_argument("--output", type=Path, default=Path(".agents-output/migration-assistant"))
    parser.add_argument("--verbose", action="store_true")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)

    assistant = MigrationAssistant(model=args.model, verbose=args.verbose)
    result = assistant.run(args.task, dry_run=args.dry_run)

    output_path = write_run_summary(args.output, result)
    assistant.logger.info("Migration assistant run saved", extra={"output": str(output_path)})

    return 0 if result.get("status") in {"dry_run", "pending_implementation"} else 1


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
