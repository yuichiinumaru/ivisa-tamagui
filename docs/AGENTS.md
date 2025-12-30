# docs/AGENTS.md — ENGINEERING STANDARDS & DOCUMENTATION PROTOCOLS

> **SYSTEM ALERT**: This file defines the **Operational Standards** for maintaining this project.
> It instructs you on *how* to think, document, and preserve context.
> **Violating these protocols leads to context rot and technical debt.**

---

## 1. THE KNOWLEDGE GRAPH (FILE STRUCTURE)

You must strictly adhere to this file organization. Do not create random markdown files at the root.

### Core Documentation
| File | Purpose |
| :--- | :--- |
| `docs/00-draft.md` | **The Why**. Problem analysis, initial research, and rejected alternatives. |
| `docs/01-plan.md` | **The Strategy**. Architecture Decision Records (ADRs), high-level design, and domain boundaries. |
| `docs/02-tasks.md` | **The Execution**. Granular task list with status `[ ]` / `[x]`. |
| `docs/03-architecture.md` | **The Map**. Implementation details, directory structure, and component relationships. |
| `docs/04-specs-features.md`| **The Product**. Detailed feature specs, API contracts, and data schemas. |

### Dynamic Context (The Brain)
| Directory | Purpose |
| :--- | :--- |
| `docs/thoughts/` | **Working Memory**. Infinite scratchpad for analysis, reasoning, and batch processing. |
| `docs/libs/` | **Grounding**. Indices of external library documentation to prevent hallucination. |
| `docs/rules/` | **The Law**. Specific sub-protocols linked from `AGENTS.md`. |

---

## 2. HOW TO DOCUMENT (THE 3-TIER STANDARD)

### Tier 1: The "Why" (Strategic)
**Location**: `00-draft.md`, `01-plan.md`
*   **Trigger**: Before writing code.
*   **Content**: "We chose X over Y because..."
*   **Format**: Plain text, bullet points.

### Tier 2: The "What" (Tactical)
**Location**: `02-tasks.md`, `04-specs-features.md`
*   **Trigger**: Before implementing a feature.
*   **Content**: "The API endpoint is `/v1/users` and returns JSON."
*   **Format**: Tables, JSON schemas, Mermaid diagrams.

### Tier 3: The "How" (Technical)
**Location**: `.md` files next to code, inline comments.
*   **Trigger**: While coding complex logic.
*   **Content**: "This regex handles edge case Z."
*   **Format**: Code comments, TSDoc.

---

## 3. STORYBOOK STANDARDS
We adhere to a 3-Tier maturity model for stories.

### Tier 1: The Basics (Mandatory)
*Without this, it's just a static viewer.*
- **Args & Controls**: No hardcoded values. All props must be controlable via `args`.
- **Autodocs**: Must include `tags: ['autodocs']` for automatic documentation generation.
- **Actions**: Event handlers (`onClick`, `onSubmit`) must log to the Actions panel.

### Tier 2: Developer Experience (Expected)
*Facilitates consumption and maintenance.*
- **Clean Source**: The "Show Code" button must output copy-pasteable code (clean args).
- **Layout Decorators**: Use decorators to center or pad components appropriately.
- **Explicit Variants**: Critical states (`Error`, `Loading`, `Destructive`) gets their own explicit stories, not just controls.

### Tier 3: Gold Standard (Professional)
*differentiation.*
- **Dark Mode Compatibility**: Components must render correctly in Dark Mode (toggleable).
- **Accessibility (a11y)**: Must pass `addon-a11y` checks.
- **Play Functions**: Scripted interactions (click, type, open) to validate behavior within the story.
