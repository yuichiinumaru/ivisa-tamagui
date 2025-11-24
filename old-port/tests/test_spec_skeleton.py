"""Tests for the spec_skeleton automation script."""

from __future__ import annotations

import json
from pathlib import Path

import pytest

from scripts import spec_skeleton


def test_extract_inline_components_filters_non_inventory() -> None:
    doc_text = """
# Component Specs – Phase 0 Draft

Intro text.

## Button
Body

## Logging Hooks for Specs
Misc content
"""

    inline = spec_skeleton.extract_inline_components(
        doc_text, valid_slugs={"button", "accordion"}
    )

    assert inline == {"button": "Button"}


def test_main_generates_specs_and_updates_index(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    exports_dir = tmp_path / "exports"
    docs_dir = tmp_path / "docs"
    specs_dir = tmp_path / "specs"
    exports_dir.mkdir()
    docs_dir.mkdir()
    specs_dir.mkdir()

    inventory_path = exports_dir / "components-inventory.json"
    template_path = docs_dir / "component-spec-template.md"
    doc_path = docs_dir / "component-specs.md"
    existing_spec = specs_dir / "avatar.md"

    inventory_records = [
        {"name": "button"},
        {"name": "avatar"},
        {"name": "select"},
    ]
    inventory_path.write_text(json.dumps(inventory_records), encoding="utf-8")

    template_path.write_text(
        """
# Component Spec Template – VIVI Agent Chat

## 1. Metadata & Scope
- **Component Name:**
""".strip()
        + "\n",
        encoding="utf-8",
    )

    doc_path.write_text(
        """
# Component Specs – Phase 0 Draft

Intro text.

## Button
Existing inline spec
""".strip()
        + "\n",
        encoding="utf-8",
    )

    existing_spec.write_text("Existing Avatar spec", encoding="utf-8")

    log_root = tmp_path / "logs"
    monkeypatch.setenv("MIGRATION_LOG_ROOT", str(log_root))

    exit_code = spec_skeleton.main(
        [
            "--inventory",
            str(inventory_path),
            "--template",
            str(template_path),
            "--specs-dir",
            str(specs_dir),
            "--component-specs",
            str(doc_path),
        ]
    )

    assert exit_code == 2

    button_spec = specs_dir / "button.md"
    select_spec = specs_dir / "select.md"
    assert button_spec.exists(), "expected Button spec skeleton to be generated"
    assert select_spec.exists(), "expected Select spec skeleton to be generated"
    assert "Component Name:** Button" in button_spec.read_text(encoding="utf-8")
    assert "Component Name:** Select" in select_spec.read_text(encoding="utf-8")

    doc_text = doc_path.read_text(encoding="utf-8")
    assert "<!-- spec-index:start -->" in doc_text
    assert "| Button | [specs/button.md](../specs/button.md) |" in doc_text
    assert "| Avatar | [specs/avatar.md](../specs/avatar.md) |" in doc_text
    assert "| Select | [specs/select.md](../specs/select.md) |" in doc_text

    log_files = list((log_root / "spec-skeleton").glob("log-spec-skeleton-*.log"))
    assert log_files, "expected spec skeleton logs to be written"
