import argparse
import os
import shutil
from pathlib import Path

def generate_story(component_name):
    return f"""import type {{ Meta, StoryObj }} from '@storybook/react';
import {{ {component_name} }} from './{component_name}';

const meta: Meta<typeof {component_name}> = {{
  title: 'Migrated/{component_name}',
  component: {component_name},
  tags: ['autodocs'],
}};

export default meta;
type Story = StoryObj<typeof {component_name}>;

export const Default: Story = {{
  render: (args) => <{component_name} {{...args}} />,
}};
"""

def generate_test(component_name):
    return f"""import {{ render, screen }} from '@testing-library/react';
import {{ describe, it, expect }} from 'vitest';
import {{ {component_name} }} from './{component_name}';

describe('{component_name}', () => {{
  it('renders correctly', () => {{
    render(<{component_name} />);
    // Add assertions here
  }});
}});
"""

def convert_component(source_path, out_dir):
    source_path = Path(source_path)
    if not source_path.exists():
        print(f"Error: Source file {source_path} does not exist.")
        exit(1)

    component_name = source_path.stem
    destination_dir = Path(out_dir) / component_name
    destination_dir.mkdir(parents=True, exist_ok=True)

    # 1. Copy Source
    dest_source = destination_dir / f"{component_name}.tsx"
    shutil.copy2(source_path, dest_source)
    print(f"✅ Created {dest_source}")

    # 2. Create Story
    dest_story = destination_dir / f"{component_name}.stories.tsx"
    if not dest_story.exists():
        dest_story.write_text(generate_story(component_name))
        print(f"✅ Created {dest_story}")
    else:
        print(f"ℹ️  {dest_story} already exists, skipping.")

    # 3. Create Test
    dest_test = destination_dir / f"{component_name}.test.tsx"
    if not dest_test.exists():
        dest_test.write_text(generate_test(component_name))
        print(f"✅ Created {dest_test}")
    else:
        print(f"ℹ️  {dest_test} already exists, skipping.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert/Scaffold a component from a source file.")
    parser.add_argument("source", help="Path to the source component file (.tsx)")
    parser.add_argument("--out-dir", default="packages/ui/src/migrated", help="Output directory root")

    args = parser.parse_args()
    convert_component(args.source, args.out_dir)
