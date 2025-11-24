
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEMPLATE_DIR = ROOT / "00-template"

for path in {ROOT, TEMPLATE_DIR}:
    str_path = str(path)
    if str_path not in sys.path:
        sys.path.insert(0, str_path)
