"""Migration Assistant CLI scaffold used by automation tests."""

from __future__ import annotations

import argparse
import os
from dataclasses import dataclass
from typing import Any, Iterable, List, Sequence

from scripts.logger_utils import get_logger


@dataclass
class MCPServerParams:
    command: str
    args: Sequence[str]


class MCPTools:
    def __init__(self, *, server_params: MCPServerParams) -> None:
        self.server_params = server_params


class Agent:
    def __init__(
        self,
        *,
        model: "Gemini",
        tools: Iterable[MCPTools],
        name: str,
        description: str,
        instructions: List[str],
        markdown: bool,
    ) -> None:
        self.model = model
        self.tools = list(tools)
        self.name = name
        self.description = description
        self.instructions = instructions
        self.markdown = markdown

    def run(self, prompt: str) -> Any:
        return f"{prompt}\n\n[agent:{self.name}]"


class Gemini:
    def __init__(self, *, id: str, api_key: str, temperature: float) -> None:
        self.id = id
        self.api_key = api_key
        self.temperature = temperature


class APIKeyRotator:
    def __init__(self, keys: list[str]) -> None:
        self._keys = keys

    def get_key_count(self) -> int:
        return len(self._keys)


def _load_keys() -> list[str]:
    keys_env = os.getenv("GENAI_API_KEYS")
    if keys_env:
        return [key.strip() for key in keys_env.split(",") if key.strip()]
    single = os.getenv("GENAI_API_KEY")
    return [single] if single else []


def get_rotator() -> APIKeyRotator:
    return APIKeyRotator(_load_keys())


def get_api_key() -> str:
    keys = _load_keys()
    if not keys:
        raise ValueError("No API keys configured")
    return keys[0]


class MigrationAssistant:
    def __init__(self, *, agent: Agent, logger) -> None:
        self.agent = agent
        self.logger = logger

    def _build_prompt(self, task: str, context: str | None) -> str:
        context_section = f"\nContext: {context}" if context else ""
        return f"Task: {task}{context_section}"

    def run_task(self, task: str, *, context: str | None, dry_run: bool = False) -> str:
        prompt = self._build_prompt(task, context)
        if dry_run:
            self.logger.info("Dry run prompt generated", extra={"task": task})
            return prompt

        response = self.agent.run(prompt)
        content = getattr(response, "content", response)

        usage = getattr(response, "usage", None)
        if isinstance(usage, dict):
            self.logger.info(
                "Agent token usage",
                extra={
                    "task": task,
                    "prompt_tokens": usage.get("prompt_tokens"),
                    "completion_tokens": usage.get("completion_tokens"),
                },
            )

        return content


def build_migration_assistant(*, logger, model_id: str, temperature: float, verbose: bool) -> MigrationAssistant:
    rotator = get_rotator()
    logger.info("Building Migration Assistant", extra={"available_keys": rotator.get_key_count(), "model": model_id})

    api_key = get_api_key()
    model = Gemini(id=model_id, api_key=api_key, temperature=temperature)
    tools = [MCPTools(server_params=MCPServerParams(command="playwright", args=["--stdio"]))]

    instructions = [
        "Follow TDD, FDD, SDD, and DDD guardrails.",
        "Respect rate limits and log usage for every task.",
    ]

    agent = Agent(
        model=model,
        tools=tools,
        name="Migration Assistant",
        description="Supports shadcn → Tamagui migration tasks",
        instructions=instructions,
        markdown=True,
    )

    return MigrationAssistant(agent=agent, logger=logger)


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the Migration Assistant scaffold")
    parser.add_argument("--task", required=True, help="Task description for the assistant")
    parser.add_argument("--context", help="Optional context for the task")
    parser.add_argument("--dry-run", action="store_true", help="Emit prompt without contacting Gemini")
    parser.add_argument("--model-id", default="gemini-2.5-pro", help="Gemini model identifier")
    parser.add_argument("--temperature", type=float, default=0.25, help="Sampling temperature")
    parser.add_argument("--verbose", action="store_true", help="Enable verbose logging output")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    logger = get_logger("migration-assistant", verbose=args.verbose)

    assistant = build_migration_assistant(
        logger=logger,
        model_id=args.model_id,
        temperature=args.temperature,
        verbose=args.verbose,
    )

    result = assistant.run_task(
        args.task,
        context=args.context,
        dry_run=args.dry_run,
    )

    print(result)
    return 0


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
