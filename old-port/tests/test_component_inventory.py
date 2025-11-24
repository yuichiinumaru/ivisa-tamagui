"""Tests for component_inventory script (TDD scaffold)."""

from __future__ import annotations

from pathlib import Path
from typing import List

import pytest

from scripts.component_inventory import parse_registry, write_inventory, main


FIXTURES = Path(__file__).parent / "fixtures"


class TestParseRegistry:
    def test_parses_minimal_registry(self) -> None:
        registry_path = FIXTURES / "registry_minimal.ts"

        records = parse_registry(registry_path)

        assert isinstance(records, list)
        assert [record["name"] for record in records] == ["button", "accordion"]
        accordion = next(record for record in records if record["name"] == "accordion")
        assert accordion["tailwind"] == {
            "keyframes": {
                "accordion-down": {
                    "from": {"height": "0"},
                    "to": {"height": "var(--radix-accordion-content-height)"},
                }
            },
            "animation": {"accordion-down": "accordion-down 0.2s ease-out"},
        }


class TestWriteInventory:
    def test_write_inventory_json(self, tmp_path: Path) -> None:
        output_file = tmp_path / "inventory.json"
        records = parse_registry(FIXTURES / "registry_minimal.ts")

        write_inventory(records, output_file, output_format="json")

        assert output_file.exists()
        data = output_file.read_text(encoding="utf-8")
        assert "accordion" in data

    def test_write_inventory_csv(self, tmp_path: Path) -> None:
        output_file = tmp_path / "inventory.csv"
        records = parse_registry(FIXTURES / "registry_minimal.ts")

        write_inventory(records, output_file, output_format="csv")

        contents = output_file.read_text(encoding="utf-8").splitlines()
        assert contents[0].split(",")[0] == "name"
        assert any(line.startswith("accordion,") for line in contents[1:])


class TestMain:
    def test_main_creates_inventory_and_log(self, tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
        output_file = tmp_path / "inventory.json"
        env_log_root = tmp_path / "logs"
        monkeypatch.setenv("MIGRATION_LOG_ROOT", str(env_log_root))

        exit_code = main([
            "--registry",
            str(FIXTURES / "registry_minimal.ts"),
            "--output",
            str(output_file),
            "--format",
            "json",
        ])

        assert exit_code == 0
        assert output_file.exists()

        component_logs = env_log_root / "component-inventory"
        log_files: List[Path] = list(component_logs.glob("log-component-inventory-*.log"))
        assert log_files, "expected a component inventory log file to be created"
