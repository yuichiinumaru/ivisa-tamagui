
import sys
import os
import json
import asyncio
from pathlib import Path

# Add src to path
sys.path.append(os.path.join(os.getcwd(), "src"))

# We need to make sure server.py can find the registry relative to where we run this
# server.py expects "../ui/component-registry.json" relative to ITSELF (packages/mcp-server/src)?
# No, "assuming we run from packages/mcp-server": REGISTRY_PATH = Path("../ui/component-registry.json").resolve()
# If we run this test from packages/mcp-server, it should work.

from server import handle_list_tools, handle_call_tool, registry_data

async def test():
    print(f"Registry loaded with {len(registry_data.get('components', []))} components.")
    
    tools = await handle_list_tools()
    print(f"Tools: {[t.name for t in tools]}")
    
    # Test Search
    print("\nTesting Search 'button':")
    results = await handle_call_tool("search_components", {"query": "button"})
    print(results[0].text[:500] + "..." if len(results[0].text) > 500 else results[0].text)
    
    # Test Get Code (if matches found)
    if registry_data.get("components"):
        first_id = registry_data["components"][0]["id"]
        print(f"\nTesting Get Code for '{first_id}':")
        code_res = await handle_call_tool("get_component_code", {"componentId": first_id})
        print(code_res[0].text[:500] + "...")
    else:
        print("\nNo components found in registry to test get_code.")

if __name__ == "__main__":
    asyncio.run(test())
