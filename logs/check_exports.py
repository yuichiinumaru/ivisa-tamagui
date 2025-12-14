
import os
import re

INDEX_PATH = r"f:\AI\ivisa-tamagui\ivisa-tamagui\packages\ui\src\index.ts"
BASE_DIR = os.path.dirname(INDEX_PATH)

def check_exports():
    if not os.path.exists(INDEX_PATH):
        print(f"Error: index.ts not found at {INDEX_PATH}")
        return

    with open(INDEX_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to capture "export * from './path'" or "export { ... } from './path'"
    # Supports single or double quotes
    pattern = re.compile(r"export\s+(?:\*|\{.*?\})\s+from\s+['\"](.*?)['\"]")
    
    exports = pattern.findall(content)
    
    print(f"Checking {len(exports)} exports...")
    
    errors = 0
    for export_path in exports:
        # Resolve 'export * from ./atoms/Button' -> '.../src/atoms/Button'
        full_path = os.path.normpath(os.path.join(BASE_DIR, export_path))
        
        # Check potential extensions
        candidates = [
            full_path, 
            full_path + ".ts", 
            full_path + ".tsx", 
            os.path.join(full_path, "index.ts"),
            os.path.join(full_path, "index.tsx")
        ]
        
        found = any(os.path.exists(p) for p in candidates)
        
        if not found:
            print(f"❌ MISSING EXPORT: {export_path}")
            print(f"   Checked: {candidates}")
            errors += 1
            
    if errors == 0:
        print("✅ All exports verified successfully.")
    else:
        print(f"⚠️ Found {errors} missing exports.")

if __name__ == "__main__":
    check_exports()
