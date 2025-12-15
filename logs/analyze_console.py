
import re
import collections

LOG_PATH = r"f:\AI\ivisa-tamagui\logs\console.md"

def analyze_log():
    try:
        with open(LOG_PATH, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Log file not found at {LOG_PATH}")
        return

    errors = collections.defaultdict(int)
    components = collections.defaultdict(set)
    
    lines = content.split('\n')
    current_story = "Unknown"
    
    # Regex patterns
    p_story = re.compile(r"path=/story/([\w%-]+)")
    p_text_node = re.compile(r"Unexpected text node: (.*?). A text node cannot be a child of a <View>")
    p_dom_prop = re.compile(r"React does not recognize the `(.*?)` prop")
    p_invalid_attr = re.compile(r"Invalid attribute name: `(.*?)`")
    p_missing_token = re.compile(r"missing token color in category color - (\$\w+)")
    p_font_size = re.compile(r"No font size found (\w+) \{font: '\$body'\}")
    p_children_only = re.compile(r"React.Children.only expected to receive a single React element child")

    for line in lines:
        # Track current story context if possible (from URL lines)
        m_story = p_story.search(line)
        if m_story:
            current_story = m_story.group(1)

        # 1. Text Node Errors (Critical - causes white screen/native crash)
        m_text = p_text_node.search(line)
        if m_text:
            msg = f"Unexpected Text Node: '{m_text.group(1)}'"
            errors[msg] += 1
            components[msg].add(current_story)
            continue

        # 2. DOM Prop Warnings (Annoying but non-fatal)
        m_dom = p_dom_prop.search(line)
        if m_dom:
            msg = f"Invalid DOM Prop: '{m_dom.group(1)}'"
            errors[msg] += 1
            components[msg].add(current_story)
            continue

        # 3. Invalid Attributes
        m_attr = p_invalid_attr.search(line)
        if m_attr:
            msg = f"Invalid Attribute: '{m_attr.group(1)}'"
            errors[msg] += 1
            components[msg].add(current_story)
            continue

        # 4. Missing Tokens
        m_token = p_missing_token.search(line)
        if m_token:
            msg = f"Missing Color Token: '{m_token.group(1)}'"
            errors[msg] += 1
            components[msg].add(current_story)
            continue

        # 5. Font Size Errors
        m_font = p_font_size.search(line)
        if m_font:
            msg = f"Missing Font Size: '{m_font.group(1)}'"
            errors[msg] += 1
            components[msg].add(current_story)
            continue

        # 6. React.Children.only (Crash)
        if p_children_only.search(line):
            msg = "Crash: React.Children.only expected single child"
            errors[msg] += 1
            components[msg].add(current_story)
            continue

    print("=== ERROR SUMMARY ===")
    for error, count in sorted(errors.items(), key=lambda x: x[1], reverse=True):
        print(f"[{count}] {error}")
        affected = list(components[error])[:3]
        if len(components[error]) > 3:
            affected.append("...")
        print(f"    Affected: {affected}")

if __name__ == "__main__":
    analyze_log()
