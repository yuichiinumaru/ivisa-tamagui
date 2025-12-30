# docs/AGENTS.md — ENGINEERING STANDARDS & DOCUMENTATION PROTOCOLS

> **SYSTEM ALERT**: This file defines the **Operational Standards** for maintaining this project.
> It instructions you on *how* to think, document, and preserve context.
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
| `docs/research/` | **Investigation**. Deep dives, competitive analysis, and spikes. |

---

## 2. THE "CORTEX" PROTOCOL (docs/thoughts/)

**Principle: Non-Economic Memory**
We do not ration tokens here. You are encouraged to "think out loud" extensively. If you are analyzing a complex file, planning a refactor, or debugging a hard issue, **create a thought file first**.

### 2.1. Naming Convention
Use `NNN-category-title.md` or `YYYY-MM-DD-topic.md`.
* `001-auth-refactor-analysis.md`
* `002-performance-audit.md`

### 2.2. The Batch Processing Workflow
When facing a large codebase or complex task, do not try to fit everything into the chat context.
1.  **Create a Thought File**: e.g., `docs/thoughts/005-legacy-migration.md`.
2.  **Analyze in Batches**: Read a chunk of code → Write findings to the file.
3.  **Incremental Saves**: Save the file after every major insight. Do not wait until the end.
4.  **Synthesize**: Once the analysis is done, summarize the *actionable* points into `02-tasks.md` or `03-architecture.md`.
5.  **Status Tagging**: Mark the file header:
    * `Status: [DRAFT]` (Thinking in progress)
    * `Status: [SYNTHESIZED]` (Done, info moved to main docs)
    * `Status: [ARCHIVED]` (Old context)

*Tip: You may create subfolders (e.g., `docs/thoughts/auth-migration/`) for massive tasks to keep individual notes organized.*

---

## 3. THE "GROUNDING" PROTOCOL (docs/libs/)

**Principle: Anti-Hallucination**
You are strictly forbidden from guessing API methods for core libraries.

### 3.1. The Check
Before using a library (e.g., Prisma, Tailwind, Stripe), check `docs/libs/`.

### 3.2. The Usage
* **If file exists (e.g., `stripe.txt`)**: You **MUST** read the file, follow the official documentation links provided, and base your code on the actual docs.
* **If file is missing**: You **MUST** create it.
    1.  Search the web for the official documentation.
    2.  Create `docs/libs/<library>.txt`.
    3.  Paste the URLs to the core concepts, API reference, and guides.
    4.  *Then* proceed to code.

---

## 4. THE MAINTENANCE PROTOCOL

### 4.1. The "Self-Healing" Rule
Documentation is code. If you change the code, you must update the documentation in the same atomic operation.
* **Scenario**: You change a database schema.
* **Action**: You MUST update `docs/03-architecture.md` (or `04-specs`) immediately.
* **Conflict**: If code contradicts documentation, **assume the code is the reality** (unless the code is buggy), and update the documentation to match the code.

### 4.2. The "Atomic Update" Rule
Never leave documentation in a broken state between prompts.
* If you mark a task `[x]` in `02-tasks.md`, ensure the code is committed and tests pass.
* If you add a decision to `CHANGELOG.md`, ensure the implementation is complete.

---

## 5. THE CHANGELOG PROTOCOL

**Location**: `PROJECT_ROOT/CHANGELOG.md`

This is our **Institutional Memory**. It tracks *decisions*, not just commits.

### Entry Format
Every significant change requires an entry:
```markdown
## [YYYY-MM-DD] - Feature/Refactor Name
* **What**: Brief description of change.
* **Why**: The business or technical reason (The Context).
* **Lessons**: What went wrong? What did we learn? (Critical for self-improvement).