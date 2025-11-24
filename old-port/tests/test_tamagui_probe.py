"""Tests for the tamagui_probe automation script."""

from __future__ import annotations

import json
from pathlib import Path

import pytest

from scripts.tamagui_probe import (
    build_coverage_report,
    collect_components,
    load_inventory_names,
    main,
)


def _write_component(root: Path, relative_path: str) -> Path:
    file_path = root / relative_path
    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text("export const Component = () => null;\n", encoding="utf-8")
    return file_path


def _write_inventory(tmp_path: Path, names: list[str]) -> Path:
    inventory = tmp_path / "inventory.json"
    inventory.write_text(json.dumps([{ "name": name } for name in names]), encoding="utf-8")
    return inventory


def test_load_inventory_names_returns_trimmed_values(tmp_path: Path) -> None:
    inventory_path = _write_inventory(tmp_path, [" Button ", "checkbox"])

    names = load_inventory_names(inventory_path)

    assert names == [" Button ", "checkbox"]


def test_collect_components_discovers_tsx_files(tmp_path: Path) -> None:
    components_root = tmp_path / "components"
    _write_component(components_root, "primitives/Button.tsx")
    _write_component(components_root, "forms/Radio.tsx")
    _write_component(components_root, "forms/__tests__/Radio.test.tsx")

    discovered = collect_components(components_root)

    assert set(discovered) == {"button", "radio"}
    assert discovered["button"].as_posix() == "primitives/Button.tsx"


def test_build_coverage_report_counts_statuses(tmp_path: Path) -> None:
    components_root = tmp_path / "components"
    _write_component(components_root, "primitives/Button.tsx")
    _write_component(components_root, "forms/Radio.tsx")

    implemented = collect_components(components_root)
    inventory_names = ["button", "checkbox"]

    report = build_coverage_report(inventory_names, implemented, components_root, tmp_path / "inventory.json")

    assert report["summary"] == {"implemented": 1, "missing": 1, "extra": 1, "total": 2}
    components = {component["name"]: component for component in report["components"]}
    assert components["button"]["status"] == "implemented"
    assert components["checkbox"]["status"] == "missing"
    assert components["checkbox"]["file"] is None
    assert report["extras"] == [{"name": "radio", "file": str(components_root / "forms/Radio.tsx") }]


def test_main_generates_report_and_logs(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
    components_root = tmp_path / "components"
    _write_component(components_root, "primitives/Button.tsx")

    inventory_path = _write_inventory(tmp_path, ["button", "checkbox"])
    output_path = tmp_path / "coverage.json"
    log_root = tmp_path / "logs"
    monkeypatch.setenv("MIGRATION_LOG_ROOT", str(log_root))

    exit_code = main(
        [
            "--inventory",
            str(inventory_path),
            "--tamagui-root",
            str(components_root),
            "--output",
            str(output_path),
        ]
    )

    assert exit_code == 0
    assert output_path.exists()
    data = json.loads(output_path.read_text(encoding="utf-8"))
    assert data["summary"]["implemented"] == 1

    log_dir = log_root / "tamagui-probe"
    log_files = list(log_dir.glob("log-tamagui-probe-*.log"))
    assert log_files, "expected tamagui probe log file to be created"
