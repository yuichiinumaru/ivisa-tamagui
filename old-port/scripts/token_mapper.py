"""Token mapping utility for Tailwind -> Tamagui diffs."""

from __future__ import annotations

import argparse
import csv
import json
from collections import Counter
from pathlib import Path
from typing import Any, Dict, Iterable, List, Tuple

from scripts.logger_utils import get_logger

CATEGORY_MAPPINGS: Dict[str, Tuple[str, ...]] = {
    "colors": ("color",),
    "spacing": ("space",),
    "borderRadius": ("radius",),
    "fontSize": ("size",),
}


def load_json_config(path: Path) -> dict[str, Any]:
    """Load a JSON config file."""

    if not path.exists():
        raise FileNotFoundError(path)

    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:  # pragma: no cover - defensive
        raise ValueError(f"Failed to parse JSON config: {path}") from exc


def extract_tailwind_tokens(config: dict[str, Any]) -> dict[str, dict[str, Any]]:
    """Return Tailwind token categories we care about."""

    theme = config.get("theme", {}) if isinstance(config, dict) else {}
    result: dict[str, dict[str, Any]] = {}
    for category in CATEGORY_MAPPINGS:
        values = theme.get(category, {}) if isinstance(theme.get(category), dict) else {}
        result[category] = values
    return result


def extract_tamagui_tokens(config: dict[str, Any]) -> dict[str, dict[str, Any]]:
    """Return Tamagui tokens from config JSON."""

    tokens = config.get("tokens", {}) if isinstance(config, dict) else {}
    result: dict[str, dict[str, Any]] = {}
    for _, tam_keys in CATEGORY_MAPPINGS.items():
        for key in tam_keys:
            values = tokens.get(key)
            if isinstance(values, dict):
                result[key] = values
    return result


def normalize_value(value: Any) -> str:
    """Normalize values for comparison/serialization."""

    if isinstance(value, (dict, list)):
        return json.dumps(value, sort_keys=True, ensure_ascii=False)
    return str(value)


def _match_token_by_value(tamagui_tokens: dict[str, Any], target_value: Any) -> str | None:
    normalized_target = normalize_value(target_value)
    for name, value in tamagui_tokens.items():
        if normalize_value(value) == normalized_target:
            return name
    return None


def compute_mappings(
    tailwind_tokens: dict[str, dict[str, Any]],
    tamagui_tokens: dict[str, dict[str, Any]],
) -> List[dict[str, str]]:
    """Compute mapping rows between Tailwind and Tamagui tokens."""

    rows: List[dict[str, str]] = []
    used_tamagui: dict[str, set[str]] = {key: set() for key in tamagui_tokens}

    for tailwind_category, entries in tailwind_tokens.items():
        tam_candidates = CATEGORY_MAPPINGS.get(tailwind_category, ())
        tam_tokens = None
        tam_category_name = None
        for candidate in tam_candidates:
            if candidate in tamagui_tokens:
                tam_tokens = tamagui_tokens[candidate]
                tam_category_name = candidate
                break

        for token_name, token_value in entries.items():
            row = {
                "category": tailwind_category,
                "tailwind_token": token_name,
                "tailwind_value": normalize_value(token_value),
                "tamagui_token": "",
                "tamagui_value": "",
                "status": "unmapped",
            }

            if tam_tokens and tam_category_name:
                if token_name in tam_tokens:
                    tam_value = tam_tokens[token_name]
                    row["tamagui_token"] = token_name
                    row["tamagui_value"] = normalize_value(tam_value)
                    if normalize_value(tam_value) == row["tailwind_value"]:
                        row["status"] = "match"
                    else:
                        row["status"] = "value-diff"
                    used_tamagui[tam_category_name].add(token_name)
                else:
                    alias_name = _match_token_by_value(tam_tokens, token_value)
                    if alias_name:
                        tam_value = tam_tokens[alias_name]
                        row["tamagui_token"] = alias_name
                        row["tamagui_value"] = normalize_value(tam_value)
                        row["status"] = "alias-match"
                        used_tamagui[tam_category_name].add(alias_name)

            rows.append(row)

    # Tamagui tokens without Tailwind counterparts
    for tam_category, tokens in tamagui_tokens.items():
        unmatched = set(tokens.keys()) - used_tamagui.get(tam_category, set())
        if not unmatched:
            continue
        inverse_tailwind_category = next(
            (tw_category for tw_category, cands in CATEGORY_MAPPINGS.items() if tam_category in cands),
            tam_category,
        )
        for token_name in unmatched:
            rows.append(
                {
                    "category": inverse_tailwind_category,
                    "tailwind_token": "",
                    "tailwind_value": "",
                    "tamagui_token": token_name,
                    "tamagui_value": normalize_value(tokens[token_name]),
                    "status": "extra",
                }
            )

    return rows


def write_csv(rows: Iterable[dict[str, str]], output_path: Path) -> None:
    """Write mapping rows to CSV."""

    output_path.parent.mkdir(parents=True, exist_ok=True)
    fieldnames = [
        "category",
        "tailwind_token",
        "tailwind_value",
        "tamagui_token",
        "tamagui_value",
        "status",
    ]
    with output_path.open("w", encoding="utf-8", newline="") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
        writer.writeheader()
        for row in rows:
            writer.writerow(row)


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate token mapping CSV between Tailwind and Tamagui tokens")
    parser.add_argument("--tailwind-config", type=Path, required=True, help="Path to Tailwind config JSON with theme tokens")
    parser.add_argument("--tamagui-config", type=Path, required=True, help="Path to Tamagui config JSON with tokens")
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("exports/token-mapping.csv"),
        help="CSV output path (default: exports/token-mapping.csv)",
    )
    parser.add_argument("--verbose", action="store_true", help="Enable verbose logging")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    logger = get_logger("token-mapper", verbose=args.verbose)
    logger.info(
        "Starting token mapper",
        extra={
            "tailwind_config": str(args.tailwind_config),
            "tamagui_config": str(args.tamagui_config),
            "output": str(args.output),
        },
    )

    try:
        tailwind_config = load_json_config(args.tailwind_config)
        tamagui_config = load_json_config(args.tamagui_config)
        tailwind_tokens = extract_tailwind_tokens(tailwind_config)
        tamagui_tokens = extract_tamagui_tokens(tamagui_config)
        rows = compute_mappings(tailwind_tokens, tamagui_tokens)
        write_csv(rows, args.output)
    except Exception as exc:  # noqa: BLE001
        logger.error("Token mapper failed", extra={"error": str(exc)})
        return 1

    status_counts = Counter(row["status"] for row in rows)
    logger.info("Token mapper completed", extra={"rows": len(rows), "status_counts": dict(status_counts)})
    return 0


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
