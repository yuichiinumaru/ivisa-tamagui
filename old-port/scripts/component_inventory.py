"""Component inventory extraction utility.

Parses shadcn registry metadata into normalized records and writes them to disk.
All operations emit structured logging via :mod:`scripts.logger_utils`.
"""

from __future__ import annotations

import argparse
import ast
import csv
import json
import re
from pathlib import Path
from typing import Any, Iterable, List, Optional, Sequence

from scripts.logger_utils import get_logger

DEFAULT_REGISTRY = Path("reference-repos/ui/apps/v4/registry/new-york-v4/ui/_registry.ts")


def parse_registry(registry_path: Path) -> List[dict]:
    """Parse a shadcn registry TypeScript file into component records.

    Args:
        registry_path: Path to `_registry.ts` file describing components.

    Returns:
        A list of dictionaries describing components.
    """

    if not registry_path.exists():
        raise FileNotFoundError(registry_path)

    text = registry_path.read_text(encoding="utf-8")
    match = re.search(r"=\s*(\[[\s\S]*?\])\s*;?\s*$", text, flags=re.DOTALL)
    if not match:
        raise ValueError(f"Could not locate registry array in {registry_path}")

    array_text = match.group(1)
    python_literal = _typescript_array_to_python_literal(array_text)
    try:
        records_raw = ast.literal_eval(python_literal)
    except (SyntaxError, ValueError) as exc:  # pragma: no cover - defensive
        raise ValueError(f"Failed to parse registry: {registry_path}") from exc

    normalized_records = [_normalize_record(record) for record in _ensure_record_list(records_raw)]
    return normalized_records


def write_inventory(
    records: Iterable[dict],
    output_path: Path,
    output_format: str = "json",
) -> None:
    """Write component records to disk in the selected format."""

    record_list = list(records)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    fmt = output_format.lower()

    if fmt == "json":
        output_path.write_text(
            json.dumps(record_list, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
    elif fmt == "csv":
        _write_csv(record_list, output_path)
    else:
        raise ValueError(f"Unsupported output format: {output_format}")


def main(argv: Optional[List[str]] = None) -> int:
    """CLI entrypoint for component inventory script."""

    parser = argparse.ArgumentParser(description="Generate component inventory from shadcn registry")
    parser.add_argument("--registry", type=Path, default=DEFAULT_REGISTRY, help="Path to _registry.ts file")
    parser.add_argument("--output", type=Path, default=Path("exports/components-inventory.json"), help="Output file path")
    parser.add_argument("--format", choices=("json", "csv"), default="json", help="Output format")
    parser.add_argument("--verbose", action="store_true", help="Enable verbose logging")
    args = parser.parse_args(argv)

    logger = get_logger("component-inventory", verbose=args.verbose)
    logger.info("Starting component inventory", extra={"registry": str(args.registry)})

    try:
        records = parse_registry(args.registry)
        write_inventory(records, args.output, output_format=args.format)
    except Exception as exc:  # noqa: BLE001
        logger.error("Component inventory failed", extra={"error": str(exc)})
        return 1

    logger.info(
        "Component inventory written",
        extra={"count": len(records), "output": str(args.output), "format": args.format},
    )
    return 0


def _typescript_array_to_python_literal(array_text: str) -> str:
    """Convert a TypeScript array literal into a Python-evaluable string."""

    transformed = array_text
    transformed = re.sub(r"//.*", "", transformed)
    transformed = re.sub(r"/\*[\s\S]*?\*/", "", transformed)
    transformed = transformed.replace("'", '"')
    transformed = _quote_object_keys(transformed)
    transformed = re.sub(r"\btrue\b", "True", transformed)
    transformed = re.sub(r"\bfalse\b", "False", transformed)
    transformed = re.sub(r"\bnull\b", "None", transformed)
    transformed = re.sub(r",(\s*[}\]])", r"\1", transformed)
    return transformed


def _write_csv(records: Sequence[dict], output_path: Path) -> None:
    """Write records to CSV file using union of keys as headers."""

    if not records:
        output_path.write_text("", encoding="utf-8")
        return

    preferred_order = ["name", "type", "dependencies", "registryDependencies", "files", "tailwind"]
    union_keys = []
    for record in records:
        for key in record.keys():
            if key not in union_keys:
                union_keys.append(key)

    headers = [key for key in preferred_order if key in union_keys]
    headers.extend(key for key in union_keys if key not in headers)
    with output_path.open("w", encoding="utf-8", newline="") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=headers)
        writer.writeheader()
        for record in records:
            writer.writerow({key: _normalize_for_csv(record.get(key)) for key in headers})


def _normalize_for_csv(value: Any) -> Any:
    """Normalize nested values for CSV output."""

    if isinstance(value, (dict, list)):
        return json.dumps(value, ensure_ascii=False)
    return value


def _ensure_record_list(data: Any) -> List[dict]:
    """Ensure the parsed registry evaluates to a list of dictionaries."""

    normalized = json.loads(json.dumps(data, ensure_ascii=False))
    if not isinstance(normalized, list) or not all(isinstance(item, dict) for item in normalized):
        raise ValueError("Registry must evaluate to a list of dictionaries")
    return normalized


def _quote_object_keys(text: str) -> str:
    """Surround bare object keys with double quotes."""

    pattern = r"(?P<prefix>[{,]\s*)(?P<key>[A-Za-z0-9_\-]+)\s*:"

    def repl(match: re.Match[str]) -> str:
        prefix = match.group("prefix")
        key = match.group("key")
        return f'{prefix}"{key}":'

    return re.sub(pattern, repl, text)


def _normalize_record(record: dict) -> dict:
    """Apply cleanups to registry records for downstream consumption."""

    result = dict(record)

    tailwind = result.get("tailwind")
    if isinstance(tailwind, dict):
        config = tailwind.get("config", {}) if isinstance(tailwind.get("config"), dict) else {}
        theme = config.get("theme", {}) if isinstance(config.get("theme"), dict) else {}
        extend = theme.get("extend", {}) if isinstance(theme.get("extend"), dict) else {}

        pruned_tailwind: dict[str, Any] = {}
        keyframes = extend.get("keyframes")
        if isinstance(keyframes, dict):
            pruned_tailwind["keyframes"] = keyframes
        animation = extend.get("animation")
        if isinstance(animation, dict):
            pruned_tailwind["animation"] = animation

        result["tailwind"] = pruned_tailwind if pruned_tailwind else tailwind

    return result


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
