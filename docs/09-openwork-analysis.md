# 09 - Analysis & Extraction of OpenWork

## Context
This document records the analysis of `langchain-ai/openwork` and the subsequent extraction of UI components into the `@ivisa/ui` package. The goal was to accelerate "Wave 9: Intelligence & Governance" by adopting battle-tested patterns for Agentic UIs.

## Extracted Components

### 1. ChatPanel (Organism)
**Source:** `src/renderer/src/components/chat/ChatContainer.tsx`
**Description:** A complete chat interface supporting user input, message history, and specialized rendering for Agent/Tool interactions.
**Adaptation:**
- Replaced `shadcn/ui` with Tamagui primitives (`Stack`, `Text`, `Button`, `Input`).
- Replaced `lucide-react` with `@tamagui/lucide-icons`.
- Implemented `MessageBubble` with markdown-like code block parsing using `CodeBlock`.
- Implemented `ToolCallRenderer` to visualize complex tool executions (read_file, execute, etc.).

### 2. TaskBoard (Organism)
**Source:** `src/renderer/src/components/sidebar/ThreadSidebar.tsx` & `TodoPanel.tsx`
**Description:** A visualization component for tracking agent tasks (Todos) and their status (Pending, In Progress, Completed).
**Adaptation:**
- Extracted logic into `AgentTodoList` (Molecule) and `TaskBoard` (Organism).
- Used `Progress` atom for visual completion tracking.
- Standardized `Todo` interface in `types.ts`.

### 3. CodeBlock (Organism)
**Source:** `src/renderer/src/components/tabs/CodeViewer.tsx`
**Description:** A syntax-highlighting code viewer.
**Adaptation:**
- **Simplification:** The original used `shiki` (heavy WASM dependency). The extracted version currently implements a lightweight text-based renderer with line numbers and a copy button.
- **Future Work:** Integrate `prismjs` or a lighter highlighter for true syntax coloring without the weight of Shiki.

### 4. TokenUsageMeter (Molecule)
**Source:** `src/renderer/src/components/chat/ContextUsageIndicator.tsx`
**Description:** A visual indicator for LLM context window usage.
**Adaptation:**
- Integrated into `ChatPanel` or usable standalone.
- Visualizes input/output tokens against model limits.

## Architecture & Decisions

### "Frankenstein" Strategy Applied
- We did **not** import the entire `openwork` electron logic or store (Zustand).
- We extracted **presentation logic only** and adapted it to receive props (`messages`, `todos`, `tokenUsage`).
- This decoupling ensures `ChatPanel` is state-agnostic and can be driven by any backend (MCP, LangChain, Vercel AI SDK).

### Zero Magic Strings
- Labels and status text ("Pending", "Agent Tasks") are currently hardcoded in English within the components but structurally isolated to allow future i18n via `I18N` constants.

## Next Steps
- **Syntax Highlighting:** Upgrade `CodeBlock` to use a lightweight highlighter.
- **Interactive Tools:** Implement the `onApprovalDecision` callback logic in the consuming application to handle "Human-in-the-Loop" flows.
