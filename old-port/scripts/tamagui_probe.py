"""Tamagui component coverage probe.

Scans the Tamagui components directory, compares it against the shadcn
component inventory, and emits a JSON report summarizing coverage gaps.
"""

from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Iterable, List, Sequence

from scripts.logger_utils import get_logger

DEFAULT_INVENTORY = Path("exports/components-inventory.json")
DEFAULT_TAMAGUI_ROOT = Path("tamagui-components-final/src/components")
DEFAULT_OUTPUT = Path("exports/tamagui-component-coverage.json")


def parse_args(argv: Sequence[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate Tamagui coverage report")
    parser.add_argument(
        "--inventory",
        type=Path,
        default=DEFAULT_INVENTORY,
        help="Path to components-inventory JSON",
    )
    parser.add_argument(
        "--tamagui-root",
        type=Path,
        default=DEFAULT_TAMAGUI_ROOT,
        help="Path to Tamagui components root",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help="Path to tamagui-component-coverage JSON output",
    )
    parser.add_argument("--verbose", action="store_true", help="Enable verbose logging")
    return parser.parse_args(argv)


def load_inventory_names(inventory_path: Path) -> List[str]:
    if not inventory_path.exists():
        raise FileNotFoundError(inventory_path)

    data = json.loads(inventory_path.read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise ValueError("Inventory JSON must be a list")

    names: List[str] = []
    for record in data:
        if isinstance(record, dict) and "name" in record and isinstance(record["name"], str):
            names.append(record["name"])
    return names


def collect_components(tamagui_root: Path) -> Dict[str, Path]:
    """Return mapping of normalized component name -> relative file path."""

    if not tamagui_root.exists():
        return {}

    components: Dict[str, Path] = {}
    for file_path in tamagui_root.rglob("*.tsx"):
        if file_path.name.startswith("_"):
            continue
        if _is_test_file(file_path):
            continue
        name = normalize_name(file_path.stem)
        components[name] = file_path.relative_to(tamagui_root)
    return components


def _is_test_file(file_path: Path) -> bool:
    """Return True if the file path represents a test file we should skip."""

    if any(part.startswith("__tests__") for part in file_path.parts):
        return True

    stem = file_path.stem.lower()
    return stem.endswith(".test") or stem.endswith(".spec")


def build_coverage_report(
    inventory_names: Iterable[str],
    implemented: Dict[str, Path],
    tamagui_root: Path,
    inventory_path: Path,
) -> dict:
    normalized_inventory = [normalize_name(name) for name in inventory_names]
    implemented_components = []
    missing_components = []

    for name, normalized in zip(inventory_names, normalized_inventory):
        component_entry = {
            "name": name,
            "status": "implemented" if normalized in implemented else "missing",
            "file": str(tamagui_root / implemented[normalized]) if normalized in implemented else None,
        }
        if component_entry["status"] == "implemented":
            implemented_components.append(component_entry)
        else:
            missing_components.append(component_entry)

    extras = [
        {
            "name": extra_name,
            "file": str(tamagui_root / relative_path),
        }
        for extra_name, relative_path in implemented.items()
        if extra_name not in normalized_inventory
    ]

    summary = {
        "implemented": len(implemented_components),
        "missing": len(missing_components),
        "extra": len(extras),
        "total": len(normalized_inventory),
    }

    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "summary": summary,
        "components": implemented_components + missing_components,
        "extras": sorted(extras, key=lambda item: item["name"]),
        "source": {
            "inventory": str(inventory_path),
            "tamagui_root": str(tamagui_root),
        },
    }


def write_report(report: dict, output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def normalize_name(name: str) -> str:
    return name.strip().lower().replace(" ", "-")


def main(argv: Sequence[str] | None = None) -> int:
    args = parse_args(argv)
    logger = get_logger("tamagui-probe", verbose=args.verbose)

    logger.info(
        "Starting Tamagui probe",
        extra={"inventory": str(args.inventory), "tamagui_root": str(args.tamagui_root)},
    )

    try:
        inventory_names = load_inventory_names(args.inventory)
        implemented = collect_components(args.tamagui_root)
        report = build_coverage_report(inventory_names, implemented, args.tamagui_root, args.inventory)
        write_report(report, args.output)
    except Exception as exc:  # noqa: BLE001
        logger.error("Tamagui probe failed", extra={"error": str(exc)})
        return 1

    logger.info("Tamagui probe completed", extra={"summary": report["summary"]})
    return 0


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
