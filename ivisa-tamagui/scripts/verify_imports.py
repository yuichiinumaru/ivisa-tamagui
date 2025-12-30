
import os
import re
import sys

def get_imports(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Matches: import { A, B } from './path' OR import A from './path'
    # Simplified regex, good enough for most cases
    import_pattern = re.compile(r'import\s+(?:(\w+)|\{(.*?)\})\s+from\s+[\'"](.*?)[\'"]')
    imports = []
    
    for match in import_pattern.finditer(content):
        default_import = match.group(1)
        named_imports = match.group(2)
        path = match.group(3)
        
        if default_import:
            imports.append({'type': 'default', 'name': default_import, 'path': path})
        if named_imports:
            names = [n.split(' as ')[0].strip() for n in named_imports.split(',')]
            for name in names:
                if name:
                    imports.append({'type': 'named', 'name': name, 'path': path})
                    
    return imports

def check_file(file_path, root_dir):
    imports = get_imports(file_path)
    errors = []
    
    for imp in imports:
        path = imp['path']
        if not path.startswith('.'):
            continue # Skip node_modules
            
        # Resolve absolute path
        dir_name = os.path.dirname(file_path)
        abs_path = os.path.normpath(os.path.join(dir_name, path))
        
        # Check if file exists (try .ts, .tsx, .js, /index.ts, etc)
        candidates = [
            abs_path + '.ts',
            abs_path + '.tsx',
            abs_path + '/index.ts',
            abs_path + '/index.tsx',
            abs_path + '.js',
            abs_path
        ]
        
        found_file = None
        for c in candidates:
            if os.path.isfile(c):
                found_file = c
                break
        
        if not found_file:
            errors.append(f"Errors in {file_path}: Import '{path}' not found (resolved to {abs_path})")
            continue
            
        # Check for self-import (cycle via index)
        # If the resolved file is the package root index.ts, that's almost always a bad idea inside the package
        if found_file.endswith('packages/ui/src/index.ts'):
             errors.append(f"Errors in {file_path}: Self-import detected! Importing from package root index.ts is a circular dependency risk.")

        # Check exports (very basic check)
        # We perform a grep-like check for "export ... name" or "export const name" or "export { name }"
        with open(found_file, 'r') as f:
            target_content = f.read()
            
        if imp['type'] == 'named':
            # Check for: export const Name, export function Name, export class Name, export { Name }, export { ... as Name }
            # AND export * from ...
            
            # Simple heuristic regexes
            patterns = [
                rf'export\s+(?:const|function|class|interface|type)\s+{imp["name"]}\b',
                rf'export\s+\{{[^}}]*\b{imp["name"]}\b[^}}]*\}}',
                r'export\s+\*\s+from' # Giving up on resolving wildcard exports for now, assuming safe if present
            ]
            
            found_export = False
            for p in patterns:
                if re.search(p, target_content):
                    found_export = True
                    break
            
            if not found_export:
                 # Check if the file is a barrel file (index.ts) that re-exports variables
                 if found_file.endswith('index.ts'):
                     # It might be `export * from './SubFile'`
                     # Accessing Subfiles would require recursive checking, let's just warn for now
                     # unless we see "export *"
                    if "export *" not in target_content:
                         errors.append(f"Potential missing export '{imp['name']}' in {found_file} (imported by {file_path})")
            
    return errors

def scan_dir(start_dir):
    all_errors = []
    for root, dirs, files in os.walk(start_dir):
        if 'node_modules' in root:
            continue
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                full_path = os.path.join(root, file)
                all_errors.extend(check_file(full_path, start_dir))
    return all_errors

if __name__ == '__main__':
    target_dir = sys.argv[1] if len(sys.argv) > 1 else '.'
    errors = scan_dir(target_dir)
    if errors:
        print("Found possible import errors:")
        for e in errors:
            print(e)
    else:
        print("No obvious import errors found.")
