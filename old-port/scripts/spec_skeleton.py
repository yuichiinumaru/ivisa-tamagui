"""Spec skeleton generator for Tamagui migration specs."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Dict, Iterable, List, Sequence

from scripts.logger_utils import get_logger

INDEX_START = "<!-- spec-index:start -->"
INDEX_END = "<!-- spec-index:end -->"


def slugify(name: str) -> str:
    """Return a filesystem/document-friendly slug."""

    slug = re.sub(r"[^a-z0-9]+", "-", name.lower())
    return slug.strip("-")


def title_case(slug: str) -> str:
    """Convert a slug to display title (e.g., "alert-dialog" -> "Alert Dialog")."""

    return slug.replace("-", " ").title()


def load_inventory(inventory_path: Path) -> List[str]:
    """Load component names from the inventory JSON file."""

    data = json.loads(inventory_path.read_text(encoding="utf-8"))
    names: List[str] = []
    for entry in data:
        name = entry.get("name")
        if not isinstance(name, str) or not name:
            continue
        names.append(name)
    return names


def extract_inline_components(doc_text: str, valid_slugs: Iterable[str]) -> Dict[str, str]:
    """Return inline component sections already documented inside component-specs."""

    inline_sections: Dict[str, str] = {}
    regex = re.compile(r"^##\s+(.+)$", re.MULTILINE)
    valid_set = set(valid_slugs)
    for match in regex.finditer(doc_text):
        heading = match.group(1).strip()
        slug = slugify(heading)
        if slug in valid_set:
            inline_sections[slug] = heading
    return inline_sections


def render_template(template: str, component_name: str) -> str:
    """Fill the component name placeholder inside the template."""

    marker = "- **Component Name:**"
    replacement = f"{marker} {component_name}"
    if marker in template:
        return template.replace(marker, replacement, 1)
    return template


def build_index_rows(
    slugs: Sequence[str],
    inline_components: Dict[str, str],
    specs_dir: Path,
) -> List[str]:
    """Build markdown table rows describing spec sources."""

    rows: List[str] = []
    for slug in slugs:
        spec_path = specs_dir / f"{slug}.md"
        display = inline_components.get(slug, title_case(slug))
        if spec_path.exists():
            source = f"[specs/{spec_path.name}](../specs/{spec_path.name})"
        elif slug in inline_components:
            source = "Inline"
        else:
            source = "Missing"
        rows.append(f"| {display} | {source} |")
    return rows


def insert_index_block(doc_text: str, rows: Sequence[str]) -> str:
    """Insert or replace the spec index section in docs/component-specs.md."""

    block_lines = [
        INDEX_START,
        "",
        "| Component | Source |",
        "| --- | --- |",
        *rows,
        "",
        INDEX_END,
    ]
    block = "\n".join(block_lines)

    if INDEX_START in doc_text and INDEX_END in doc_text:
        pattern = re.compile(
            rf"{re.escape(INDEX_START)}.*?{re.escape(INDEX_END)}",
            flags=re.DOTALL,
        )
        return pattern.sub(block, doc_text)

    return doc_text.rstrip() + "\n\n" + block + "\n"


def ensure_spec_file(
    template: str,
    component_slug: str,
    component_name: str,
    specs_dir: Path,
) -> bool:
    """Create a spec file if missing. Returns True if generated."""

    target = specs_dir / f"{component_slug}.md"
    if target.exists():
        return False
    content = render_template(template, component_name)
    target.write_text(content, encoding="utf-8")
    return True


def run(
    inventory_path: Path,
    template_path: Path,
    specs_dir: Path,
    component_specs_path: Path,
) -> int:
    """Core workflow for generating spec skeletons."""

    logger = get_logger("spec-skeleton")

    inventory = load_inventory(inventory_path)
    if not inventory:
        logger.warning("No inventory entries found at %s", inventory_path)
        return 0

    specs_dir.mkdir(parents=True, exist_ok=True)

    template = template_path.read_text(encoding="utf-8")
    doc_text = component_specs_path.read_text(encoding="utf-8")

    slugs = [slugify(name) for name in inventory]
    inline_components = extract_inline_components(doc_text, slugs)

    generated_count = 0
    for slug, original_name in zip(slugs, inventory):
        component_name = inline_components.get(slug, title_case(slug))
        if ensure_spec_file(template, slug, component_name, specs_dir):
            generated_count += 1
            logger.info("Generated spec skeleton for %s", component_name)

    rows = build_index_rows(slugs, inline_components, specs_dir)
    updated_doc = insert_index_block(doc_text, rows)
    component_specs_path.write_text(updated_doc, encoding="utf-8")

    logger.info(
        "Spec skeleton generation complete",
        extra={"generated": generated_count, "total": len(slugs)},
    )
    return generated_count


def parse_args(argv: Sequence[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate spec skeletons")
    parser.add_argument(
        "--inventory",
        type=Path,
        default=Path("exports/components-inventory.json"),
        help="Path to components inventory JSON",
    )
    parser.add_argument(
        "--template",
        type=Path,
        default=Path("docs/component-spec-template.md"),
        help="Spec template path",
    )
    parser.add_argument(
        "--specs-dir",
        type=Path,
        default=Path("specs"),
        help="Directory to write spec files",
    )
    parser.add_argument(
        "--component-specs",
        type=Path,
        default=Path("docs/component-specs.md"),
        help="Component specs aggregate markdown",
    )
    return parser.parse_args(argv)


def main(argv: Sequence[str] | None = None) -> int:
    args = parse_args(argv or [])
    return run(args.inventory, args.template, args.specs_dir, args.component_specs)


if __name__ == "__main__":  # pragma: no cover - CLI entrypoint
    raise SystemExit(main(sys.argv[1:]))
