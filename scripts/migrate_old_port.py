import os
import shutil
from pathlib import Path

# Configuration
PROJECT_ROOT = Path(__file__).parent.parent
OLD_PORT_ROOT = PROJECT_ROOT / "old-port"
NEW_UI_ROOT = PROJECT_ROOT / "ivisa-tamagui/packages/ui"
DOCS_ROOT = PROJECT_ROOT / "docs"

# Mappings: (Source Path relative to OLD_PORT_ROOT, Destination Path relative to PROJECT_ROOT)
MAPPINGS = [
    # Specs -> docs/specs
    (
        "specs",
        DOCS_ROOT / "specs"
    ),
    # Components (The entire components folder structure)
    (
        "tamagui-components-final/src/components",
        NEW_UI_ROOT / "src/migrated"
    ),
    # Tests -> packages/ui/tests/migrated
    (
        "tamagui-components-final/tests",
        NEW_UI_ROOT / "tests/migrated"
    ),
    # Providers reference
    (
        "tamagui-components-final/src/providers.tsx",
        NEW_UI_ROOT / "src/migrated/providers-ref.tsx"
    ),
    # Utils
    (
        "tamagui-components-final/src/utils",
        NEW_UI_ROOT / "src/migrated/utils"
    )
]

def import_assets():
    print(f"🚀 Starting migration from {OLD_PORT_ROOT} to {PROJECT_ROOT}")

    for source_subpath, dest_path in MAPPINGS:
        source_path = OLD_PORT_ROOT / source_subpath
        
        if not source_path.exists():
            print(f"⚠️  Source not found: {source_path}")
            continue

        print(f"\n📂 Processing {source_subpath}...")
        
        # Handle single file copy
        if source_path.is_file():
            # If dest is a directory, copy into it. If it looks like a file (has suffix), copy to it.
            if dest_path.suffix:
                # Ensure parent exists
                dest_path.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(source_path, dest_path)
                print(f"   ✅ Copied file to {dest_path.relative_to(PROJECT_ROOT)}")
            else:
                dest_path.mkdir(parents=True, exist_ok=True)
                shutil.copy2(source_path, dest_path / source_path.name)
                print(f"   ✅ Copied file to {(dest_path / source_path.name).relative_to(PROJECT_ROOT)}")
            continue

        # Handle directory copy
        if not dest_path.exists():
            os.makedirs(dest_path, exist_ok=True)
            print(f"   Created directory: {dest_path}")

        # Copy files from directory
        file_count = 0
        for item in source_path.iterdir():
            if item.is_file():
                shutil.copy2(item, dest_path / item.name)
                file_count += 1
            elif item.is_dir():
                # Recursive copy for directories (like sub-components if any)
                # shutil.copytree(item, dest_path / item.name, dirs_exist_ok=True)
                # For now, just top level files as per structure observation, but let's use copytree for safety if structure is deep
                 shutil.copytree(item, dest_path / item.name, dirs_exist_ok=True)
                 file_count += 1 # Count dir as 1 item for summary
        
        print(f"   ✅ Imported {file_count} items to {dest_path.relative_to(PROJECT_ROOT)}")

    print("\n✨ Migration script finished.")
    print("   Next steps: Review 'src/migrated', refactor imports, and move to 'src/components'.")

if __name__ == "__main__":
    import_assets()
