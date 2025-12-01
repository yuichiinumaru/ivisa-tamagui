import re
import sys
import argparse

def convert_component_source(source_code, component_name):
    """
    Converts a reference component source code to the project's standard format.
    """

    # 0. Detect usage of React.forwardRef and replace it
    if "React.forwardRef" in source_code:
        source_code = source_code.replace("React.forwardRef", "forwardRef")

    # 1. Clean up imports logic
    # Check if 'forwardRef' is already imported
    is_imported = re.search(r"import .*?\{.*?forwardRef.*?\} from ['\"]react['\"]", source_code, re.DOTALL)

    if not is_imported:
        if "import React" in source_code:
            # Case: import React from 'react'
            # Case: import React, { ... } from 'react'
            def import_replacer(match):
                full_match = match.group(0)
                if "{" in full_match:
                    return full_match.replace("{", "{ forwardRef, ")
                else:
                    return full_match.replace("from", ", { forwardRef } from")

            source_code = re.sub(r"import React.*?from ['\"]react['\"]", import_replacer, source_code, count=1)

        elif re.search(r"import .*?from ['\"]react['\"]", source_code):
             # Case: import { Component } from 'react' - no default React import
             source_code = re.sub(r"import \s*\{(.*?)\}\s*from ['\"]react['\"]", r"import { forwardRef, \1 } from 'react'", source_code, flags=re.DOTALL)
        else:
             source_code = "import { forwardRef } from 'react'\n" + source_code

    # 2. Cleanup formatting
    source_code = source_code.replace(", ,", ",")
    source_code = source_code.replace("{ forwardRef, }", "{ forwardRef }")
    source_code = source_code.replace("{ forwardRef,  ", "{ forwardRef, ")

    # 3. Handle naming collisions (Shadowing)
    import_pattern = r"import\s*\{[^}]*\b" + component_name + r"\b[^}]*\}\s*from\s*['\"]tamagui['\"]"
    if re.search(import_pattern, source_code, re.DOTALL):

        def alias_replacer(match):
            content = match.group(0)
            return re.sub(r"\b" + component_name + r"\b", f"{component_name} as Tamagui{component_name}", content)

        source_code = re.sub(import_pattern, alias_replacer, source_code, flags=re.DOTALL)

        # Simple string replace for '<Component' -> '<TamaguiComponent'
        source_code = source_code.replace(f"<{component_name}", f"<Tamagui{component_name}")
        source_code = source_code.replace(f"</{component_name}", f"</Tamagui{component_name}")

        # Replace dot notation usages safely
        source_code = re.sub(r"(?<!Tamagui)" + component_name + r"\.", f"Tamagui{component_name}.", source_code)


    # 4. Handle 'export function Component' -> 'export const Component = forwardRef'
    match = re.search(r"export function (\w+)", source_code)
    if match:
        original_name = match.group(1)

        if original_name.startswith("Lm"):
            new_props_name = component_name + "Props"
            source_code = source_code.replace(f"{original_name}Props", new_props_name)

        # Find the function definition
        pattern = r"export function " + original_name + r"\s*\((.*?)\)\s*\{"

        # Replacement
        replacement = f"export const {component_name} = forwardRef<any, {component_name}Props>((\\1, ref) => {{"

        source_code = re.sub(pattern, replacement, source_code, flags=re.DOTALL)

        # Wrap the end of the component
        if f"export const {component_name} = forwardRef" in source_code:
             # Heuristic: Find the matching closing brace.
             # Since doing full brace matching is hard without AST, we will assume for now
             # that if the file ends with }, it's the component.
             # If NOT, we warn or try to find the last }.

             # Better approach for TDD scope:
             # If the function was at the end of the file, convert the last '}' to '})'.
             # If there is code after it, this might break.
             # For now, we stick to the heuristic but document/warn.

             source_code = source_code.rstrip()
             if source_code.endswith("}"):
                 source_code = source_code[:-1] + "})"

             source_code = source_code.replace(original_name, component_name)

    return source_code

def main():
    parser = argparse.ArgumentParser(description="Convert a Tamagui reference component to project standard.")
    parser.add_argument("input_file", help="Path to the input component file (.tsx)")
    parser.add_argument("output_file", help="Path to the output component file (.tsx)")
    parser.add_argument("--name", help="New component name (default: auto-detect from filename)")

    args = parser.parse_args()

    try:
        with open(args.input_file, 'r') as f:
            source = f.read()

        name = args.name
        if not name:
            # Auto-detect from filename (e.g. LmStarRating.tsx -> StarRating)
            filename = args.input_file.split('/')[-1].replace('.tsx', '')
            if filename.startswith('Lm'):
                name = filename[2:]
            else:
                name = filename

        converted = convert_component_source(source, name)

        with open(args.output_file, 'w') as f:
            f.write(converted)

        print(f"Successfully converted {args.input_file} to {args.output_file} (Component: {name})")

    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
