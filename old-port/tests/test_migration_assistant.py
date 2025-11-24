"""Tests for the migration assistant agent scaffolding."""

from __future__ import annotations

import sys
from pathlib import Path
from types import ModuleType, SimpleNamespace

import pytest

from scripts.logger_utils import get_logger

migration_assistant = __import__("migration_assistant")


class DummyAgent:
    def __init__(self, response: object) -> None:
        self._response = response
        self.calls: list[str] = []

    def run(self, prompt: str) -> object:
        self.calls.append(prompt)
        return self._response





def test_build_migration_assistant_uses_rotator(monkeypatch: pytest.MonkeyPatch) -> None:
    captured: dict[str, object] = {}

    class FakeRotator:
        def __init__(self) -> None:
            self._count = 3

        def get_key_count(self) -> int:
            return self._count

    monkeypatch.setattr(migration_assistant, "get_rotator", lambda: FakeRotator())
    monkeypatch.setattr(migration_assistant, "get_api_key", lambda: "rotated-key")

    class FakeGemini:
        def __init__(self, *, id: str, api_key: str, temperature: float) -> None:  # noqa: D401
            captured["gemini"] = {"id": id, "api_key": api_key, "temperature": temperature}

    monkeypatch.setattr(migration_assistant, "Gemini", FakeGemini)

    class FakeAgent:
        def __init__(self, *, model: object, tools: list[object], name: str, description: str, instructions: list[str], markdown: bool) -> None:  # noqa: D401,E501
            captured["agent"] = {"model": model, "name": name, "instructions": instructions}

        def run(self, prompt: str) -> str:
            return prompt

    monkeypatch.setattr(migration_assistant, "Agent", FakeAgent)

    class FakeMCPTools:
        def __init__(self, *, server_params: object) -> None:
            captured["mcp"] = server_params

    monkeypatch.setattr(migration_assistant, "MCPTools", FakeMCPTools)

    class FakeServerParams:
        def __init__(self, *, command: str, args: list[str]) -> None:
            captured["server"] = {"command": command, "args": args}

    logger = get_logger("test.migration-assistant")

    assistant = migration_assistant.build_migration_assistant(
        logger=logger,
        model_id="gemini-2.5-pro",
        temperature=0.25,
        verbose=True,
    )

    assert isinstance(assistant, migration_assistant.MigrationAssistant)
    assert assistant.logger is logger
    assert captured["gemini"] == {"id": "gemini-2.5-pro", "api_key": "rotated-key", "temperature": 0.25}
    assert "Migration" in captured["agent"]["name"]  # type: ignore[index]
    assert any("TDD" in step for step in captured["agent"]["instructions"])  # type: ignore[index]

def test_run_task_dry_run_returns_prompt(monkeypatch: pytest.MonkeyPatch) -> None:
    logger = get_logger("test.migration-assistant")
    dummy_agent = DummyAgent(response="unused")
    assistant = migration_assistant.MigrationAssistant(agent=dummy_agent, logger=logger)

    prompt = assistant.run_task("inventory analysis", context="focus on Button", dry_run=True)

    assert "inventory analysis" in prompt
    assert "Button" in prompt
    assert dummy_agent.calls == []


def test_run_task_executes_agent_and_logs(caplog: pytest.LogCaptureFixture) -> None:
    import logging
    logger = get_logger("test.migration-assistant")
    response = SimpleNamespace(content="Task completed", usage={"prompt_tokens": 128, "completion_tokens": 64})
    dummy_agent = DummyAgent(response=response)
    assistant = migration_assistant.MigrationAssistant(agent=dummy_agent, logger=logger)

    with caplog.at_level(logging.INFO, logger=logger.name):
        output = assistant.run_task("spec draft", context=None)

    assert output == "Task completed"
    assert len(dummy_agent.calls) == 1
    assert "spec draft" in dummy_agent.calls[0]
    assert any(getattr(record, "prompt_tokens", None) == 128 for record in caplog.records)


def test_main_creates_log_and_runs(tmp_path: Path, monkeypatch: pytest.MonkeyPatch, capsys: pytest.CaptureFixture[str]) -> None:
    log_root = tmp_path / "logs"
    monkeypatch.setenv("MIGRATION_LOG_ROOT", str(log_root))

    calls: dict[str, object] = {}

    class DummyAssistant:
        def __init__(self) -> None:
            self.invocations: list[dict[str, object]] = []

        def run_task(self, task: str, *, context: str | None, dry_run: bool) -> str:
            self.invocations.append({"task": task, "context": context, "dry_run": dry_run})
            return "ok"

    dummy_assistant = DummyAssistant()

    def fake_build(**kwargs: object) -> DummyAssistant:  # type: ignore[override]
        calls["build_kwargs"] = kwargs
        return dummy_assistant

    monkeypatch.setattr(migration_assistant, "build_migration_assistant", fake_build)

    exit_code = migration_assistant.main([
        "--task",
        "inventory sweep",
        "--context",
        "priority components",
        "--dry-run",
    ])

    assert exit_code == 0
    assert dummy_assistant.invocations == [
        {"task": "inventory sweep", "context": "priority components", "dry_run": True}
    ]

    log_dir = log_root / "migration-assistant"
    log_files = list(log_dir.glob("log-migration-assistant-*.log"))
    assert log_files, "expected migration assistant log file"

    stdout = capsys.readouterr().out
    assert stdout.endswith("ok\n")
