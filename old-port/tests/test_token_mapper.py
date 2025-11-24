"""Tests for the token mapper script."""

from __future__ import annotations

import csv
from pathlib import Path

import pytest

from scripts import token_mapper


FIXTURES = Path(__file__).parent / "fixtures"


class TestComputeMappings:
    def test_matches_and_diffs_are_detected(self) -> None:
        tailwind = token_mapper.extract_tailwind_tokens(
            token_mapper.load_json_config(FIXTURES / "tailwind_tokens.json")
        )
        tamagui = token_mapper.extract_tamagui_tokens(
            token_mapper.load_json_config(FIXTURES / "tamagui_tokens.json")
        )

        rows = token_mapper.compute_mappings(tailwind, tamagui)

        statuses = {row["status"] for row in rows}
        assert {"match", "value-diff", "alias-match", "extra", "unmapped"}.issubset(statuses)


class TestMain:
    def test_main_generates_csv_and_logs(self, tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
        output = tmp_path / "token-mapping.csv"
        log_root = tmp_path / "logs"
        monkeypatch.setenv("MIGRATION_LOG_ROOT", str(log_root))

        exit_code = token_mapper.main(
            [
                "--tailwind-config",
                str(FIXTURES / "tailwind_tokens.json"),
                "--tamagui-config",
                str(FIXTURES / "tamagui_tokens.json"),
                "--output",
                str(output),
            ]
        )

        assert exit_code == 0
        assert output.exists()
        with output.open(encoding="utf-8") as csv_file:
            reader = csv.DictReader(csv_file)
            rows = list(reader)
        assert rows, "expected rows to be written"

        log_files = list(log_root.glob("token-mapper/log-token-mapper-*.log"))
        assert log_files, "expected token mapper log file"
