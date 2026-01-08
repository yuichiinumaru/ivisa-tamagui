
import json
import asyncio
import os
from typing import List, Optional
from pathlib import Path
from mcp.server.models import InitializationOptions
import mcp.types as types
from mcp.server import NotificationOptions, Server
import mcp.server.stdio

# Configuration
# Assuming we run from packages/mcp-server
REGISTRY_PATH = Path("../ui/component-registry.json").resolve()

server = Server("ivisa-component-foundry")

def load_registry():
    if not REGISTRY_PATH.exists():
        print(f"Warning: Registry not found at {REGISTRY_PATH}")
        return {"components": []}
    with open(REGISTRY_PATH, "r") as f:
        return json.load(f)

# Cache registry in memory
registry_data = load_registry()

@server.list_tools()
async def handle_list_tools() -> list[types.Tool]:
    return [
        types.Tool(
            name="search_components",
            description="Search for UI components in the Ivisa Tamagui design system registry.",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Search query (e.g., 'button', 'card', 'date picker')"
                    },
                    "type": {
                        "type": "string",
                        "enum": ["atom", "molecule", "organism"],
                        "description": "Filter by component type"
                    }
                },
                "required": ["query"]
            },
        ),
        types.Tool(
            name="get_component_code",
            description="Retrieve the code and usage examples for a specific component.",
            inputSchema={
                "type": "object",
                "properties": {
                    "componentId": {
                        "type": "string",
                        "description": "The unique ID of the component (e.g., 'atom-button'). Get this from search_components."
                    }
                },
                "required": ["componentId"]
            },
        ),
    ]

@server.call_tool()
async def handle_call_tool(
    name: str, arguments: dict | None
) -> list[types.TextContent | types.ImageContent | types.EmbeddedResource]:
    if name == "search_components":
        query = arguments.get("query", "").lower()
        com_type = arguments.get("type")
        
        matches = []
        for comp in registry_data.get("components", []):
            if com_type and comp["type"] != com_type:
                continue
            
            # Simple fuzzy-ish search
            score = 0
            if query in comp["name"].lower(): score += 10
            if query in comp["description"].lower(): score += 5
            
            if score > 0:
                matches.append(comp)
        
        # Format results
        result_text = "Found components:\n\n"
        for m in matches:
            result_text += f"- **{m['name']}** ({m['type']}) [ID: {m['id']}]\n  {m['description']}\n"
            
        return [types.TextContent(type="text", text=result_text)]

    elif name == "get_component_code":
        comp_id = arguments.get("componentId")
        component = next((c for c in registry_data.get("components", []) if c["id"] == comp_id), None)
        
        if not component:
            return [types.TextContent(type="text", text=f"Component with ID '{comp_id}' not found.")]
            
        # Get full code from file logic could go here, but registry might already have path
        # For now, return what we have in registry + examples
        
        examples_text = ""
        for ex in component.get("usageExamples", []):
            examples_text += f"### Example: {ex['name']}\n```tsx\n{ex['code']}\n```\n\n"
        
        props_text = "### Props\n"
        for p in component.get("props", []):
            props_text += f"- `{p['name']}` ({p['type']}): {p['description']}\n"

        content = f"""# {component['name']}
{component['description']}

{props_text}

## Usage Examples
{examples_text}

---
Path: {component['filePath']}
"""
        return [types.TextContent(type="text", text=content)]

    raise ValueError(f"Unknown tool: {name}")

async def main():
    # Run the server using stdin/stdout streams
    async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            InitializationOptions(
                server_name="ivisa-component-foundry",
                server_version="0.1.0",
                capabilities=server.get_capabilities(
                    notification_options=NotificationOptions(),
                    experimental_capabilities={},
                ),
            ),
        )

if __name__ == "__main__":
    asyncio.run(main())
