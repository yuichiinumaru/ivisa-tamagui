import unittest
import os
import shutil
import tempfile
from pathlib import Path
import sys

# Add scripts dir to path to import the module to be tested if needed,
# or just invoke it via subprocess. Invoking via subprocess is safer for a CLI tool test.
import subprocess

class TestConvertComponent(unittest.TestCase):
    def setUp(self):
        self.test_dir = Path(tempfile.mkdtemp())
        self.source_file = self.test_dir / "TestComp.tsx"
        self.source_file.write_text("""
import { styled, View } from 'tamagui'

export const TestComp = styled(View, {
    name: 'TestComp',
    backgroundColor: 'red'
})
""")
        self.out_dir = self.test_dir / "output"
        self.script_path = Path(__file__).parent / "convert_component.py"

    def tearDown(self):
        shutil.rmtree(self.test_dir)

    def test_conversion_scaffolding(self):
        # Run the script
        cmd = [
            sys.executable,
            str(self.script_path),
            str(self.source_file),
            "--out-dir",
            str(self.out_dir)
        ]

        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.returncode != 0:
            print("Script stdout:", result.stdout)
            print("Script stderr:", result.stderr)

        self.assertEqual(result.returncode, 0, "Script failed to run")

        # Check if files are created
        component_dir = self.out_dir / "TestComp"
        self.assertTrue(component_dir.exists(), "Component directory not created")

        # Check Source File
        dest_source = component_dir / "TestComp.tsx"
        self.assertTrue(dest_source.exists(), "Source file not copied")
        content = dest_source.read_text()
        self.assertIn("export const TestComp", content)

        # Check Story
        dest_story = component_dir / "TestComp.stories.tsx"
        self.assertTrue(dest_story.exists(), "Story file not created")
        story_content = dest_story.read_text()
        self.assertIn("import { TestComp }", story_content)
        self.assertIn("meta", story_content)

        # Check Test
        dest_test = component_dir / "TestComp.test.tsx"
        self.assertTrue(dest_test.exists(), "Test file not created")
        test_content = dest_test.read_text()
        self.assertIn("describe('TestComp'", test_content)

if __name__ == '__main__':
    unittest.main()
