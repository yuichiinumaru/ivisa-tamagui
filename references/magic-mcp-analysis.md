# Magic MCP Analysis & Adaptation Plan

## 1. Overview of `magic-mcp`
The `magic-mcp` repository is an MCP (Model Context Protocol) server that bridges an AI agent (in an IDE like Cursor/Windsurf) with the `21st.dev` UI component library and generation engine.

### Core Architecture
*   **Server**: Node.js based, using `@modelcontextprotocol/sdk`.
*   **Tools**:
    *   `21st_magic_component_builder` (`CreateUiTool`):
        *   **Workflow**:
            1.  Receives a user prompt.
            2.  Starts a local HTTP "Callback Server" on a random port.
            3.  Constructs a URL (`https://21st.dev/magic-chat?...`) with the prompt and local port.
            4.  Opens this URL in the user's default browser.
            5.  **Human-in-the-Loop**: The user interacts with the web UI (refines prompt, previews component).
            6.  **Callback**: The web UI sends the final component code via POST to `localhost:{port}/data`.
            7.  The tool returns this code to the AI agent as text.
            8.  The agent writes the code to the user's project.
    *   `21st_magic_component_inspiration` (`FetchUiTool`):
        *   **Workflow**:
            1.  Receives a search query.
            2.  Calls the `21st.dev` API (`/api/fetch-ui`).
            3.  Returns JSON data of matching components (inspiration/snippets).

### Key Concepts for Adaptation
1.  **Callback Server**: A powerful pattern for "Interactive Tools". It allows the agent to offload complex visual tasks to a browser UI and wait for the result.
2.  **Hybrid Workflow**: Combines AI generation (server-side) with local codebase integration (agent-side).
3.  **Registry First**: `FetchUiTool` proves the value of a searchable component database.

---

## 2. Adaptation Plan for `ivisa-tamagui` ("The Component Foundry")

We will adapt these ideas to build our own **Component Foundry** MCP server, but tailored to our specific Design System (`ivisa-tamagui`) and requirements.

### Goal
To empower AI agents to build complex UIs using *our* existing Atoms, Molecules, and Organisms, rather than generating generic React code.

### Proposed Architecture

#### A. The Python MCP Server
We will stick to the plan of using **Python/FastAPI** (using `mcp-python-sdk` or similar) to serve our tools.

#### B. Tool: `fetch_ivisa_component` (The Registry)
*   **Inspiration**: `FetchUiTool`
*   **Adaptation**: instead of querying an external API, this tool will query our local `packages/ui/component-registry.json`.
*   **Functionality**:
    *   **Input**: Component name (e.g., "Button", "Card") or functional description ("date picker").
    *   **Logic**: Fuzzy search `component-registry.json`.
    *   **Output**: The component's import path, props interface, and a "Usage Example" (extracted from its Storybook story).
    *   **Why**: Helps agents use the correct imports and props without hallucinating.

#### C. Tool: `scaffold_ivisa_layout` (The Builder)
*   **Inspiration**: `CreateUiTool`
*   **Adaptation**: We likely don't need the browser callback immediately (unless we build a "Visual Builder" web app). We can start with a "Smart Template" approach.
*   **Functionality**:
    *   **Input**: A layout description (e.g., "A dashboard with a sidebar, a header, and a data grid").
    *   **Logic**:
        *   Retrieves standard layouts (e.g., `DashboardShell`, `Sidebar`, `ActionHeader`).
        *   Composes them into a valid page structure.
        *   Injects the necessary `useTheme`, `YStack`, `XStack` primitives from Tamagui.
    *   **Output**: Complete page code (JSX/TSX).

#### D. Tool: `visual_guided_generation` (Future / "Visual Builder")
*   **Inspiration**: The "Callback Server" pattern.
*   **Concept**:
    *   Agent starts tool -> Opens `http://localhost:8000/builder` (our local Python server serving a React app).
    *   User drags & drops `ivisa-tamagui` components.
    *   Click "Export to Agent" -> POST to callback -> Agent gets the code.

## 3. Implementation Steps (Wave 6)

1.  **Analyze Registry**: Ensure `component-registry.json` contains enough metadata (Docs, Props, Examples).
2.  **Init Server**: Create `packages/mcp-server` (or `apps/mcp-server`) using Python/FastAPI.
3.  **Implement `fetch_ivisa_component`**: Load JSON and implement search.
4.  **Implement `scaffold_ivisa_layout`**: Create templates for common screens (Login, Dashboard, Form).

## 4. Key Differences
| Feature | Magic MCP | Ivisa Foundry |
| :--- | :--- | :--- |
| **Source** | External (`21st.dev`) | Local (`ivisa-tamagui`) |
| **Style** | Shadcn/UI (Generic) | Tamagui + Ivisa Tokens |
| **Generation** | AI on Server | Templates + Local AI Agent |
| **Interaction** | Browser Callback | Direct Tool Output (Initially) |
