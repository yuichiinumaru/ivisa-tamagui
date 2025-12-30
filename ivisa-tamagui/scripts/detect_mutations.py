import os
import re

def scan_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    unsafe_methods = [r'\.sort\(', r'\.reverse\(', r'\.splice\(', r'\.fill\(', r'\.push\(']
    
    # Simple regex to see if it looks like a copy: [...x].sort() or x.slice().sort()
    # It's hard to be perfect with regex, but we can flag suspicious ones.
    
    issues = []
    for i, line in enumerate(lines):
        for method in unsafe_methods:
            if re.search(method, line):
                # Check if it has .slice() or [... before it on the same line (heuristic)
                safe_patterns = [r'\.slice\(', r'\[\.\.\.']
                is_safe = False
                for safe in safe_patterns:
                    if re.search(safe, line.split(method.replace('\\', ''))[0]):
                        is_safe = True
                
                if not is_safe and not 'eslint-disable' in line:
                    issues.append((i + 1, line.strip()))

    return issues

def main():
    target_dir = 'packages/ui/src'
    print(f"Scanning {target_dir} for unsafe array mutations...")
    
    for root, dirs, files in os.walk(target_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                path = os.path.join(root, file)
                issues = scan_file(path)
                if issues:
                    print(f"\n{path}:")
                    for line_num, line_content in issues:
                        print(f"  Line {line_num}: {line_content}")

if __name__ == '__main__':
    main()
