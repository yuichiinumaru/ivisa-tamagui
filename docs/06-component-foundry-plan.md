# Component Foundry: MCP Server Strategy

## 1. Vision
The **Component Foundry** is an intelligent MCP (Model Context Protocol) server designed to act as the "Librarian" and "Architect" for the Ivisa Tamagui Design System. It empowers AI agents (Cursor, Windsurf, etc.) to search, retrieve, and correctly implement UI components without hallucination.

This strategy matches the "Magic MCP" concept but adapts it for an **internal, private Design System**.

## 2. Architecture

### Core Components
1.  **Registry (The Database)**: A machine-readable `registry.json` containing metadata, props schemas, imports, and usage examples for all UI components.
2.  **Server (The API)**: A Python-based MCP server (FastAPI) that exposes Tools and Resources.
3.  **Clients (The Agents)**: Local or remote LLM agents connecting via standard MCP transports (Stdio/SSE).

### Comparison: Magic MCP vs. Ivisa Foundry

| Feature | Magic MCP | Ivisa Foundry |
| :--- | :--- | :--- |
| **Source of Truth** | 21st.dev (Public) | `packages/ui` (Local/Private) |
| **Discovery** | `fetch-ui` (API) | `search_components` (Local Registry) |
| **Generation** | `create-ui` (React/Shadcn) | `scaffold_page` (Tamagui + Templates) |
| **Feedback Loop** | Browser Callback + Visual | Direct Tool Output (Phase 1) |

## 3. Implementation Roadmap (Phase 6)

### Phase 6a: The Harvester (Registry Generation)
*Goal: Create the `registry.json` source of truth.*

*   **Schema Definition**: Define JSON structure for component metadata.
*   **Extraction Script**: Node.js script using `ts-morph` or `react-docgen` to parse `packages/ui`.
    *   Extract JSDoc descriptions.
    *   Extract Prop Types and interfaces.
*   **Storybook Scraper**: Extract "Gold Standard" usage examples from `.stories.tsx` files.
*   **Build Integration**: `npm run build:registry` to keep it in sync.

### Phase 6b: The Brain (MCP Server)
*Goal: Serve the registry via MCP protocol.*

*   **Stack**: Python + `mcp-server-fastapi`.
*   **Resources**:
    *   `ivisa://tokens/all`: Returns all design tokens (colors, spacing).
    *   `ivisa://context/rules`: Returns frontend guidelines.
*   **Tools**:
    *   `search_components(query: str)`: Fuzzy search registry.
    *   `get_component_code(id: str)`: Returns imports, code, and usage.
    *   `search_icons(query: str)`: Semantic search for icons (Lucide).

### Phase 6c: The Architect (Scaffolding)
*Goal: Generate complex structures.*

*   **Templates**: Store standard layouts (Dashboard, Auth, Form) as parametrized templates.
*   **Tool**: `scaffold_page(template: str, props: dict)`: Returns a full page/screen codebase.
*   **Validation**: `validate_usage(code: str)` tool to check for common anti-patterns (optional).

## 4. Technical Specifications

### Registry Schema (`registry.json`)
```json
{
  "last_updated": "2023-10-27T10:00:00Z",
  "components": [
    {
      "name": "Button",
      "id": "button",
      "category": "atom",
      "description": "Standard interactive button component.",
      "props": {
        "variant": { "type": "string", "options": ["default", "outline", "ghost"] },
        "size": { "type": "string", "options": ["sm", "md", "lg"] }
      },
      "import_path": "@package/ui",
      "usage_example": "<Button variant='primary'>Click Me</Button>",
      "docs_url": "http://storybook..."
    }
  ]
}
```

### Server Structure
```text
apps/mcp-server/
├── main.py           # Server entrypoint
├── tools/
│   ├── search.py     # Search logic
│   ├── scaffold.py   # Page scaffolding
│   └── validate.py   # Linter wrapper
├── resources/
│   └── tokens.py     # Token exposure
└── registry/
    └── loader.py     # Component Registry loader
```

## 5. Next Steps
1.  Implement **Phase 6a (The Harvester)**.
2.  Verify registry generation against existing components.
3.  Bootstrap the MCP Server.
