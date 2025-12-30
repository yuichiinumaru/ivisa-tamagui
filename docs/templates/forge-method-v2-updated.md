# FORGE METHOD v2 — Updated Bootstrap Prompt for AI Coding Projects

**Version**: 2.0  
**Last Updated**: 2025-01-12  
**Status**: Production-Ready  
**Based on**: AGENTS.md Standard + GitHub Research + Field Testing

---

## EXECUTIVE SUMMARY

This is the **updated Forge Method bootstrap prompt** incorporating:

1. ✅ **AGENTS.md as the single source of truth** (cross-tool compatible)
2. ✅ **CONTINUITY.md for context preservation** during long sessions
3. ✅ **docs/AGENTS.md** complementing root AGENTS.md with documentation maintenance rules
4. ✅ **CHANGELOG.md at project root** (not in docs/)
5. ✅ **docs/thoughts/** folder for agent memory offloading
6. ✅ **docs/libs/** for curated dependency documentation
7. ✅ **docs/research/** for ideas + competitive analysis
8. ✅ **docs/04-specs-features.md** replacing generic "ideas"
9. ✅ **Tool-agnostic approach** (no .cursorrules, .cursorignore unless explicitly requested)

This prompt is designed for **multi-agent teams, long projects, and organizational memory retention**.

---

## CORRECTIONS & IMPROVEMENTS AT A GLANCE

| Issue | Old Approach | New Approach | Impact |
|-------|-------------|--------------|--------|
| **Tool Lock-in** | Cursor-specific files (.cursorrules, .cursorignore) | AGENTS.md only (symlink if user wants) | Cross-tool compatible |
| **llms.txt Purpose** | Project summary for LLMs | Dependency documentation index | Keeps docs focused |
| **Changelog Location** | docs/04-changelog.md | CHANGELOG.md at root | Visible, emphasizes importance |
| **Agent Memory** | Lost between sessions | docs/thoughts/ folder | Preserves context |
| **Rules Location** | docs/06-rules.md | docs/AGENTS.md | Clearer intent |
| **Dependency Docs** | External/manual | docs/libs/{package}.txt | Organized, accessible |
| **Future Ideas** | 05-ideas.md unstructured | docs/research/ with methodology | Research-driven |

---

## COMPLETE UPDATED WORKFLOW (8 STEPS)

```
STEP 0: Ask About Tool Choice
         ↓
STEP 1: Gather Constitutional Requirements
         ↓
STEP 2: Create AGENTS.md (Root Constitution) + CONTINUITY.md
         ↓
STEP 3: Create docs/AGENTS.md (Documentation Maintenance Rules)
         ↓
STEP 4: Create docs/00-draft.md (Research & Problem Analysis)
         ↓
STEP 5: Create docs/01-plan.md (Strategic Architecture Decisions)
         ↓
STEP 6: Create docs/02-tasks.md (Granular Execution Breakdown)
         ↓
STEP 7: Create Remaining Documentation Files
         ├─ docs/03-architecture.md (Implementation Map)
         ├─ docs/04-specs-features.md (Specifications & Features)
         ├─ docs/05-research/ (Research & Competitive Analysis)
         ├─ docs/thoughts/ (Agent Memory Bank)
         ├─ docs/libs/ (Dependency Documentation)
         └─ CHANGELOG.md (Project Root)
         ↓
STEP 8: Verification Pass (Cross-Reference Audit)
```

---

## STEP 0: TOOL CHOICE (NEW)

### Objective
Determine which AI coding tools the user uses, so we only create tool-specific files if needed.

### Instructions for AI Agent

Ask the user:

```
Before we bootstrap your project, I need to understand your development setup:

1. Which AI coding tools will you use?
   - Cursor (native support for AGENTS.md via symlink fallback)
   - Claude Code / Claude in IDE (reads AGENTS.md automatically)
   - Windsurf (reads AGENTS.md via config)
   - Cline (reads AGENTS.md via .clinerulesrules.md)
   - Zed AI (reads AGENTS.md via settings)
   - Multiple tools simultaneously? (name them)
   - CLI agents only (Codex, claude-code CLI, etc.)?

2. If you're using Cursor specifically:
   - Do you want me to create .cursorrules symlink to AGENTS.md?
   - Do you want .cursorignore? (only if you have large files to exclude)

3. Will this be a monorepo with multiple teams?
   - Each team might need its own AGENTS.md in subdirectories
```

**Store this info** and proceed based on answer:

- **Single tool specified** → Create tool-specific symlink only if user explicitly asks
- **Multiple tools** → Create AGENTS.md + suggest symlink pattern (Appendix)
- **No preference** → AGENTS.md only (safest, vendor-agnostic)

---

## STEP 1: GATHER CONSTITUTIONAL REQUIREMENTS

[SAME AS ORIGINAL - No changes needed]

---

## STEP 2: CREATE AGENTS.md (ROOT) + CONTINUITY.md

### File Location
```
PROJECT_ROOT/
├─ AGENTS.md           (Main constitution)
└─ CONTINUITY.md       (Session context preservation)
```

### 2a. CREATE AGENTS.md

**Use the original template from Forge v1**, but **add this section at the very top** (before section 1):

```markdown
# AGENTS.md — [PROJECT_NAME] Project Constitution

## CONTINUITY LEDGER (compaction-safe)

Maintain a single Continuity Ledger for this workspace in `CONTINUITY.md`. The ledger is the canonical session briefing designed to survive context compaction; do not rely on earlier chat text unless it's reflected in the ledger.

### How it works
- At the start of every assistant turn, read `CONTINUITY.md`, update it to reflect the latest goal/constraints/decisions/state, then proceed with the work.
- Update `CONTINUITY.md` again whenever any of these change: goal, constraints, assumptions, key decisions, progress state (Done/Now/Next), or important tool outcomes.
- Keep it short and stable: facts only, no transcripts. Prefer bullets. Mark uncertainty as `UNCONFIRMED` (never guess).
- If you notice missing recall or a compaction/summary event: refresh/rebuild the ledger from visible context, mark gaps `UNCONFIRMED`, ask up to 1-3 targeted questions, then continue.

**See CONTINUITY.md for current state.**

---

[REST OF AGENTS.md AS BEFORE]
```

### 2b. CREATE CONTINUITY.md

**Location**: `PROJECT_ROOT/CONTINUITY.md`

```markdown
# CONTINUITY.md — Session Briefing Ledger

**Project**: [PROJECT_NAME]  
**Created**: [DATE]  
**Last Updated**: [DATE] [TIME]  
**Last Updated By**: [AGENT_NAME] / [HUMAN_NAME]

---

## GOAL (Current Intent)

[ONE_SENTENCE_PROJECT_GOAL]

**Phase**: [BOOTSTRAP/PHASE_1/PHASE_2/etc]  
**Current Focus**: [WHAT_ARE_WE_DOING_RIGHT_NOW]

---

## KEY CONTEXT (Must Remember)

### Project Identity
- **Name**: [PROJECT_NAME]
- **Purpose**: [ONE_SENTENCE]
- **Tech Stack**: [COMMA_SEPARATED: Frontend, Backend, Database, Infrastructure]
- **Owner/Decision Maker**: [NAME]

### Critical Constraints (Non-Negotiable)
- [CONSTRAINT_1]
- [CONSTRAINT_2]
- [CONSTRAINT_3]

### Assumptions (To Be Validated)
- [ASSUMPTION_1] — confidence: [HIGH/MEDIUM/LOW]
- [ASSUMPTION_2] — confidence: [LEVEL]

---

## PROGRESS STATE

### Done ✓
- [COMPLETED_TASK_1]
- [COMPLETED_TASK_2]

### Now (In Progress)
- [CURRENT_TASK] — Started [DATE], Est. completion [DATE]
- [CURRENT_TASK_2]

### Next (Queued)
- [UPCOMING_TASK_1]
- [UPCOMING_TASK_2]

---

## KEY DECISIONS MADE

| Decision | Rationale | Status | Date |
|----------|-----------|--------|------|
| [DECISION_1] | [WHY] | ACCEPTED | [DATE] |
| [DECISION_2] | [WHY] | ACCEPTED / UNDER_REVIEW | [DATE] |

---

## OPEN QUESTIONS / BLOCKERS

- [ ] [QUESTION_1]: Impact if unanswered: [CONSEQUENCE]. Assigned to: [WHO]
- [ ] [QUESTION_2]: [CONTEXT]. Status: WAITING_FOR [PERSON/DATE]

---

## LAST SESSION SUMMARY

**What Happened**: [BRIEF_RECAP]  
**Outcomes**: [WHAT_WAS_COMPLETED]  
**Errors/Issues**: [WHAT_FAILED_AND_HOW_FIXED]  
**Lessons**: [WHAT_TO_DO_DIFFERENTLY_NEXT_TIME]

---

## AGENT NOTES (This Section Owned By AI Agent)

- [NOTE_1]: [CONTEXT_FOR_NEXT_AGENT]
- [NOTE_2]: [INSIGHT_OR_OBSERVATION]
- Memory offload: See `docs/thoughts/` for detailed analysis

---

## FILE LOCATIONS (Quick Reference)

| File | Purpose | Last Updated |
|------|---------|--------------|
| AGENTS.md | Constitution | [DATE] |
| CONTINUITY.md | This file | [DATE] |
| docs/AGENTS.md | Docs maintenance rules | [DATE] |
| docs/00-draft.md | Research & problem | [DATE] |
| docs/01-plan.md | Architecture | [DATE] |
| docs/02-tasks.md | Task breakdown | [DATE] |
| docs/03-architecture.md | Implementation map | [DATE] |
| docs/04-specs-features.md | Specs & features | [DATE] |
| docs/05-research/ | Research folder | [DATE] |
| docs/thoughts/ | Memory offload | [DATE] |
| docs/libs/ | Dependency docs | [DATE] |
| CHANGELOG.md | Project changelog | [DATE] |

---

## PROTOCOL: When You (AI Agent) Arrive

1. **Read this file completely** (2 min)
2. **Check GOAL section** — what are we doing?
3. **Check PROGRESS STATE** — where did we leave off?
4. **Check OPEN QUESTIONS** — what's blocking?
5. **If context lost**: Ask 1-3 targeted questions, mark answers in CONTINUITY.md
6. **At end of your turn**: Update sections that changed (Keep full CONTINUITY.md, don't truncate)

---

**End of CONTINUITY.md**
```

**Agent Instructions for Step 2**:

1. Create both AGENTS.md and CONTINUITY.md
2. Display both to user for review
3. Ask: "Does the constitution and continuity ledger capture the project? Any corrections?"
4. Proceed only after approval

---

## STEP 3: CREATE docs/AGENTS.md (DOCUMENTATION RULES)

### File Location
```
PROJECT_ROOT/docs/AGENTS.md
```

### Purpose

This file documents **how to maintain Forge Method documentation**, not project rules. It lives in `docs/` because it's meta-documentation (documentation about documentation).

### Template

```markdown
# docs/AGENTS.md — Forge Method Documentation Maintenance Guide

**Project**: [PROJECT_NAME]  
**Purpose**: Rules for maintaining and evolving project documentation  
**Owner**: [TECH_LEAD_OR_PM]  
**Last Updated**: [DATE]

---

## 1. DOCUMENTATION STRUCTURE (The Stack)

All project knowledge is organized in this specific structure. **Do not deviate without consensus.**

```
PROJECT_ROOT/
├─ AGENTS.md                    (Root: project constitution)
├─ CONTINUITY.md               (Session briefing ledger)
├─ CHANGELOG.md                (What changed, why, lessons)
│
├─ docs/
│  ├─ AGENTS.md                (This file: meta-documentation)
│  ├─ 00-draft.md              (Research, problem analysis)
│  ├─ 01-plan.md               (Architecture decisions + rationale)
│  ├─ 02-tasks.md              (Granular execution tasks)
│  ├─ 03-architecture.md       (Implementation details)
│  ├─ 04-specs-features.md     (Specifications, libraries, features)
│  │
│  ├─ thoughts/                (Agent memory offload)
│  │  ├─ 001-initial-analysis.md
│  │  ├─ 002-codebase-review.md
│  │  └─ README.md             (Thoughts folder guide)
│  │
│  ├─ libs/                    (Dependency documentation)
│  │  ├─ react.txt             (Curated docs index)
│  │  ├─ typescript.txt
│  │  └─ README.md             (Libs folder guide)
│  │
│  └─ research/                (Ideas, analysis, competitive research)
│     ├─ 001-competitor-analysis.md
│     ├─ 002-user-research.md
│     └─ README.md             (Research folder guide)
```

---

## 2. MAINTENANCE RULES (How to Keep It Fresh)

### Rule 2.1: Update CONTINUITY.md at Every Session Start & End

**Who**: Every AI agent or human contributor  
**When**: Beginning of session (read), end of session (update)  
**What to Update**:
- [x] Current goal and phase
- [x] Completed tasks
- [x] Any decisions made
- [x] Open questions
- [x] Last session summary

**Why**: CONTINUITY.md is the "save file" for long-running projects. Without it, context resets every session.

---

### Rule 2.2: One File Per Major Topic (Avoid Monoliths)

**Pattern**:
- ❌ One giant docs/documentation.md (hard to find things)
- ✅ docs/00-draft.md, docs/01-plan.md, docs/02-tasks.md (organized)

**Rationale**: AI agents navigate better with small, focused files.

---

### Rule 2.3: Use Heading Hierarchy Consistently

**Standard Hierarchy**:
```
# Section (File name level)
## Subsection
### Detail level
#### Implementation detail
```

**Why**: Agents parse markdown headers to understand file structure.

---

### Rule 2.4: Cross-Reference Aggressively

**Format**:
- File reference: `See docs/01-plan.md section 3.2`
- Task reference: `See docs/02-tasks.md Task 1.1`
- Similar to hyperlinks: `[link text](filepath#heading)`

**Why**: Prevents information silos, helps agents (and humans) find context.

---

### Rule 2.5: Every Decision Documented with Rationale

**When**: Whenever you make an architectural or procedural decision  
**Where**: In `docs/01-plan.md` section "Architectural Decision Log" OR in `CHANGELOG.md` if made during development  
**Format**:
```markdown
### ADR-001: [Decision Title]
**Date**: [DATE]  
**Context**: [Why we needed to decide]  
**Decision**: [What we chose]  
**Rationale**: [Why this over alternatives]  
**Consequences**: [What changes as a result]  
```

**Why**: Prevents re-discussing the same issues. Historical decisions inform future ones.

---

### Rule 2.6: CHANGELOG.md Is Cumulative, Never Truncated

**Where**: PROJECT_ROOT/CHANGELOG.md (not docs/)  
**Entry Format**:
```markdown
## [DATE] — [Feature/Fix/Decision Name]

**What Changed**: [WHAT_WAS_DONE]  
**Why**: [BUSINESS_REASON_OR_TECHNICAL_PROBLEM_SOLVED]  
**How It Works**: [BRIEF_TECHNICAL_EXPLANATION]  
**Lessons Learned**: [WHAT_WE_LEARNED_FOR_NEXT_TIME]  
**Related Tasks**: Task X.Y, Task Z.W  
```

**Why**: Institutional memory. Years from now, you'll want to know "why did we choose X over Y?"

---

### Rule 2.7: docs/thoughts/ Is a Free-Form Memory Bank

**Purpose**: Agents (and humans) offload context here instead of keeping it in brain/chat  
**Naming Convention**: `NNN-type-title.md`
```
001-codebase-analysis.md     (analysis work)
002-performance-investigation.md
003-integration-spike.md     (research on a specific feature)
```

**Usage**:
- **Batch processing**: Analyze component A → write notes → analyze component B → write notes
- **Long refactors**: Document progress as you go, not in one giant brain dump at the end
- **Investigations**: "Why is X slow?" → research → findings → recommendations
- **Design alternatives**: "Should we use pattern A or B?" → pros/cons → decision

**Organization**:
- Can create subfolders for long-running investigations
- Keep a `README.md` in docs/thoughts/ explaining current analysis
- Safe to delete old thoughts after decisions are moved to main docs

**Example Structure**:
```
docs/thoughts/
├─ README.md (current state of investigations)
├─ 001-authentication-analysis.md
├─ 002-database-performance-review.md
├─ 003-frontend-refactor-plan.md
└─ investigation-codebase-review/
   ├─ 001-api-layer-audit.md
   ├─ 002-service-layer-audit.md
   └─ 003-ui-component-audit.md
```

**When to move thoughts to main docs**:
- When investigation completes → move decision to docs/01-plan.md or CHANGELOG.md
- When findings are stable → condense into docs/03-architecture.md or docs/04-specs-features.md
- When documenting a lesson → add to CHANGELOG.md

---

### Rule 2.8: docs/libs/ Contains Dependency Documentation Indices

**Purpose**: Make dependency docs easily accessible without external context switching

**How It Works**:

**If package has official llms.txt** (e.g., Agno, Anthropic packages):
```bash
# docs/libs/agno.txt should contain the official docs
curl https://docs.agno.com/llms.txt > docs/libs/agno.txt
```

**If package has NO llms.txt** (e.g., SurrealDB, custom libraries):
```bash
# 1. Scrape documentation links
# 2. Create docs/libs/[package].txt with structure:

# [Package Name] Documentation Index
# https://official-docs.com/docs

## Core Concepts
- [Article Title](https://official-docs.com/docs/article-1)
  Brief description of what this covers

- [Article Title](https://official-docs.com/docs/article-2)
  Brief description

## API Reference
- [Function Reference](https://official-docs.com/api/functions)
  What functions are available

## Examples
- [Example Name](https://official-docs.com/examples/example-1)
  What the example demonstrates

## FAQ
- [Common Issues](https://official-docs.com/faq)
  Troubleshooting guide
```

**Agent Instruction** (Crucial):
> When using a library, **OPEN the links in docs/libs/[package].txt and read the official documentation**. 
> These are not cached docs—they're pointers to live documentation. You must follow the links.

**Maintenance**:
- Review quarterly or when package version updates
- Keep descriptions short (1-2 sentences per link)
- Remove dead links immediately
- Add new sections as documentation evolves

---

### Rule 2.9: docs/research/ For Competitive Analysis, Trends, Future Ideas

**Purpose**: Store research that doesn't fit in main docs but informs decisions

**Subfolders**:
```
docs/research/
├─ competitive-analysis/
│  ├─ competitor-a-review.md
│  ├─ competitor-b-review.md
│  └─ market-trends.md
├─ user-research/
│  ├─ interview-summaries.md
│  ├─ survey-results.md
│  └─ user-personas.md
├─ spike-investigations/
│  ├─ performance-spike-report.md
│  ├─ integration-spike-report.md
│  └─ technology-spike-report.md
└─ README.md (what's been researched, what's next)
```

**Format**:
```markdown
# [Research Topic]

**Date**: [DATE]  
**Researcher**: [WHO_DID_THIS]  
**Status**: [DRAFT/COMPLETE/NEEDS_DECISION]

## Summary
[One paragraph capturing key findings]

## Findings
- [Finding 1]: [Details]
- [Finding 2]: [Details]

## Implications for [PROJECT_NAME]
[How does this affect our project?]

## Recommended Next Steps
- [Action 1]
- [Action 2]

## Related Documents
- See docs/01-plan.md section [X] for decision made based on this research
```

---

## 3. WHEN TO CREATE NEW DOCUMENTATION

| Trigger | Create | Location | Format |
|---------|--------|----------|--------|
| New major feature | Spec | docs/04-specs-features.md | Heading section |
| Architecture decision | ADR | docs/01-plan.md + CHANGELOG.md | ADR template |
| Long investigation | Report | docs/research/ or docs/thoughts/ | [Research topic].md |
| Session progress | Update | CONTINUITY.md + CHANGELOG.md | Session entry |
| Task breakdown needed | Tasks | docs/02-tasks.md | Task list with checkboxes |
| Learning/lesson | Memory | docs/thoughts/ or CHANGELOG.md | [NNN-type-title].md |

---

## 4. WHO OWNS WHAT

**AGENTS.md (Root)**: Project lead or PM  
**CONTINUITY.md**: Updated by current session agent + human leads  
**CHANGELOG.md**: Updated after every meaningful change  
**docs/AGENTS.md (this file)**: Tech lead (when rules need updating)  
**docs/00-draft.md**: PM or researcher (during planning)  
**docs/01-plan.md**: Tech lead or architect  
**docs/02-tasks.md**: PM or tech lead (daily updates)  
**docs/03-architecture.md**: Tech lead (when architecture changes)  
**docs/04-specs-features.md**: PM or feature owner  
**docs/thoughts/**: Any agent or developer (self-managed)  
**docs/libs/**: Tech lead (quarterly review)  
**docs/research/**: Researcher or domain expert  

---

## 5. COMMON MISTAKES TO AVOID

❌ **Mistake 1**: Creating docs/AGENTS.md at project root (confusion)  
✅ **Fix**: Root gets AGENTS.md, docs/ gets docs/AGENTS.md

❌ **Mistake 2**: Putting changelog in docs/ instead of root  
✅ **Fix**: CHANGELOG.md belongs at PROJECT_ROOT (visibility)

❌ **Mistake 3**: Ignoring CONTINUITY.md between sessions  
✅ **Fix**: Read at start, update at end of every session

❌ **Mistake 4**: docs/thoughts/ becomes a graveyard  
✅ **Fix**: Periodically consolidate findings into main docs, then delete old thoughts

❌ **Mistake 5**: Documentation gets out of sync with code  
✅ **Fix**: Update docs alongside code, treat docs as part of "definition of done"

---

## 6. EVOLUTION & UPDATES

This guide is itself a living document. When you find better patterns:

1. Document the discovery in docs/thoughts/
2. Propose change to [TECH_LEAD]
3. If approved, update this file (docs/AGENTS.md)
4. Update CHANGELOG.md to record the improvement

---

**End of docs/AGENTS.md**
```

**Agent Instructions**:
1. Create docs/AGENTS.md at specified location
2. Display for review
3. Ask: "Does this documentation maintenance guide cover your needs?"
4. Proceed only after approval

---

## STEP 4: CREATE docs/00-draft.md

[SAME AS ORIGINAL - No changes needed]

---

## STEP 5: CREATE docs/01-plan.md

[SAME AS ORIGINAL - No changes needed]

---

## STEP 6: CREATE docs/02-tasks.md

[SAME AS ORIGINAL - No changes needed]

---

## STEP 7: CREATE REMAINING FILES

### 7a. CREATE docs/03-architecture.md

[SAME AS ORIGINAL - No changes needed]

### 7b. CREATE docs/04-specs-features.md (NEW — Replaces generic ideas)

**Location**: `PROJECT_ROOT/docs/04-specs-features.md`

**Purpose**: Specifications, libraries, features, and technical specifications (not future ideas).

```markdown
# docs/04-specs-features.md — Specifications & Feature Library

**Project**: [PROJECT_NAME]  
**Owner**: [PM_OR_FEATURE_LEAD]  
**Last Updated**: [DATE]

---

## 1. FEATURE SPECIFICATIONS

[For each major feature, document:]

### Feature: [Feature Name]

**Description**: [What it does]  
**User Value**: [Why users care]  
**Acceptance Criteria**:
- [ ] [CRITERION_1]
- [ ] [CRITERION_2]
- [ ] [CRITERION_3]

**Technical Notes**: [How it's implemented]  
**Dependencies**: [What must exist first]  
**Estimate**: [Time to implement]  
**Status**: [PLANNED/IN_PROGRESS/COMPLETE]

---

## 2. API SPECIFICATIONS

### Endpoint: [Method] /api/v1/[resource]

**Purpose**: [What this endpoint does]  
**Parameters**: [Request schema]  
**Response**: [Response schema]  
**Errors**: [Possible error codes]  
**Example**:
```json
Request: {...}
Response: {...}
```

---

## 3. DATA SPECIFICATIONS

### Entity: [Entity Name]

**Schema**:
```
- id: UUID (primary key)
- field1: type (description)
- field2: type (description)
```

**Business Rules**:
- [INVARIANT_1]: [CONSEQUENCE_IF_VIOLATED]
- [INVARIANT_2]

---

## 4. LIBRARY SPECIFICATIONS

### Library: [Library Name] v[VERSION]

**Purpose**: [What it's used for]  
**Key Classes/Functions**: [MAIN_API]  
**Documentation**: See docs/libs/[library].txt for full index  
**Why This Version**: [RATIONALE]  
**Known Limitations**: [CONSTRAINTS]

---

**End of docs/04-specs-features.md**
```

### 7c. CREATE docs/research/ FOLDER

**Location**: `PROJECT_ROOT/docs/research/`

**Create README.md**:

```markdown
# docs/research/ — Research & Analysis Storage

**Purpose**: Competitive analysis, user research, spike investigations, trends

**How to Use**:
- Add `.md` files for completed research
- Use subfolders for related topics
- Update this README when research status changes

**Current Research Status**:
- [ ] Competitive analysis: [STATUS]
- [ ] User research: [STATUS]
- [ ] Technology spikes: [STATUS]

---

**End of README.md**
```

### 7d. CREATE docs/thoughts/ FOLDER (AGENT MEMORY BANK)

**Location**: `PROJECT_ROOT/docs/thoughts/`

**Create README.md**:

```markdown
# docs/thoughts/ — Agent Memory & Context Offload

**Purpose**: Free-form memory bank for agents to offload context, analysis, and investigations

**Naming Convention**: `NNN-type-title.md`
```
001-codebase-analysis.md       (Analysis work)
002-performance-investigation.md
003-integration-spike.md       (Research)
```

**Usage Pattern**:
1. Agent encounters large analysis task
2. Analyzes in batches (Batch A → notes → Batch B → notes)
3. Each batch gets its own file or section
4. Final decision moves to main docs (01-plan.md, 03-architecture.md, etc.)
5. Memory file can be deleted or archived

**Example Structure**:
```
docs/thoughts/
├─ README.md (this file)
├─ 001-initial-codebase-audit.md
├─ 002-database-schema-review.md
├─ 003-authentication-redesign-options.md
└─ long-refactor-project/
   ├─ 001-phase-1-audit.md
   ├─ 002-phase-2-implementation-plan.md
   └─ 003-testing-strategy.md
```

**When to Clean Up**:
- After investigation completes, move decision to main docs
- Delete the memory file or archive to a `_archive/` subfolder
- Keep only active investigations in root

**Pro Tip for Agents**:
> Use this folder liberally. Write as if thinking out loud. Better to document analysis here than lose context.

---

**End of README.md**
```

### 7e. CREATE docs/libs/ FOLDER (DEPENDENCY DOCUMENTATION)

**Location**: `PROJECT_ROOT/docs/libs/`

**Create README.md**:

```markdown
# docs/libs/ — Dependency Documentation Index

**Purpose**: Curated indices of external package documentation for quick access

**How to Use**:
1. For each major dependency, create a `.txt` file
2. Extract or link to official documentation
3. Include key sections with brief descriptions
4. Keep it updated when package versions change

**Format Example** (docs/libs/react.txt):
```
React v18.3 Documentation Index
https://react.dev

## Core Concepts
- [JSX and Components](https://react.dev/learn)
  Understanding React fundamentals

- [Hooks API](https://react.dev/reference/react/hooks)
  useState, useEffect, useContext, etc.

## Common Patterns
- [Forms and Validation](https://react.dev/learn/sharing-state-between-components)
  Handling user input

## Troubleshooting
- [FAQ](https://react.dev/learn/react-core-concepts#faqs)
  Common questions
```

**Dependencies Currently Documented**:
- [Package Name]: [VERSION]
- [Package Name]: [VERSION]

**Notes**:
- When opening a link from these files, **ALWAYS read the official documentation**
- These are pointers, not cached content
- Update quarterly or after version upgrades

---

**End of README.md**
```

### 7f. CREATE CHANGELOG.md (AT PROJECT ROOT)

**Location**: `PROJECT_ROOT/CHANGELOG.md`

```markdown
# CHANGELOG.md — Project Changelog & Institutional Memory

**Project**: [PROJECT_NAME]  
**Last Updated**: [DATE]  
**Format**: [Date] — [Topic] | What Changed + Why + Lessons

---

## Bootstrap Phase

### [DATE] — Project Bootstrap (Forge Method)

**What Changed**: Initial project documentation created per Forge Method v2  
**Why**: Establish clear governance, specifications, and validation criteria before writing code  
**Lessons Learned**: [Will fill as development progresses]

---

## Phase 1 (Future Updates)

[Entries will be added as development progresses]

### [DATE] — [Feature/Decision/Fix Name]

**What Changed**: [WHAT_WAS_IMPLEMENTED_OR_DECIDED]  
**Why**: [BUSINESS_REASON_OR_TECHNICAL_PROBLEM_SOLVED]  
**How**: [BRIEF_TECHNICAL_EXPLANATION]  
**Lessons**: [WHAT_WE_LEARNED_FOR_NEXT_TIME]  
**Related**: Task X.Y, docs/01-plan.md ADR-001, etc.

---

**End of CHANGELOG.md**
```

---

## STEP 8: VERIFICATION PASS

[SAME AS ORIGINAL - Verification checklist applies]

---

## APPENDIX: TOOL-SPECIFIC SETUP (Optional)

### If User Explicitly Requests Cursor Support

Create symlinks in PROJECT_ROOT:

```bash
# Unified AGENTS.md across all tools
ln -s AGENTS.md CLAUDE.md                    # Claude Code fallback
ln -s AGENTS.md .cursorrules                 # Cursor
ln -s AGENTS.md .clinerulesrules.md          # Cline
ln -s AGENTS.md .windsurfrules.md            # Windsurf
ln -s AGENTS.md .zedagents.md                # Zed

git add AGENTS.md CLAUDE.md .cursorrules .clinerulesrules.md .windsurfrules.md .zedagents.md
git commit -m "chore: unified AGENTS.md across all AI tools"
```

### If User Requests .cursorignore

**Location**: `PROJECT_ROOT/.cursorignore`

```
node_modules/
.git/
.env
.env.local
dist/
build/
coverage/
.next/
.turbo/
*.log
*.pid
.DS_Store
.idea/
.vscode/
*.swp
*.swo
*~
.cache/
temp/
tmp/
[ANY_LARGE_FILES_OR_DIRECTORIES_USER_SPECIFIES]
```

---

## KEY DIFFERENCES FROM FORGE v1 → v2

| Aspect | v1 | v2 | Why |
|--------|----|----|-----|
| **Tool Files** | Creates .cursorrules, .cursorignore always | Optional, only if user asks | Vendor-agnostic |
| **llms.txt** | Project summary | Dependency doc index | Clearer purpose |
| **Rules** | docs/06-rules.md | docs/AGENTS.md | Reflects actual meta-docs |
| **Changelog** | docs/04-changelog.md | CHANGELOG.md (root) | Visibility, importance |
| **Ideas** | docs/05-ideas.md | docs/research/ | More structured |
| **Agent Memory** | None (lost between sessions) | docs/thoughts/ | Organizational memory |
| **Session Context** | Implicit, lost on compaction | CONTINUITY.md | Explicit, survives compression |
| **Dependency Docs** | Manual/external | docs/libs/ | Organized, accessible |

---

## QUICK REFERENCE: What Goes Where

| Content Type | File Location | Purpose |
|--------------|---------------|---------|
| Project constitution | AGENTS.md | Root authority |
| Session briefing | CONTINUITY.md | Context preservation |
| Documentation rules | docs/AGENTS.md | Meta-docs governance |
| Problem & research | docs/00-draft.md | Historical context |
| Architecture decisions | docs/01-plan.md | Strategic choices |
| Task breakdown | docs/02-tasks.md | Execution plan |
| Implementation details | docs/03-architecture.md | Code map |
| Features & specs | docs/04-specs-features.md | Feature definitions |
| Competitive research | docs/research/ | Market analysis |
| Agent memory | docs/thoughts/ | Context offload |
| Dependency guides | docs/libs/ | Tool documentation |
| Project history | CHANGELOG.md | "Why" decisions |

---

**END OF FORGE METHOD v2 — Updated Bootstrap Prompt**

This document is production-ready and incorporates:
- ✅ AGENTS.md standard research (2500+ repos analyzed)
- ✅ CONTINUITY.md pattern (context preservation)
- ✅ docs/AGENTS.md complementary approach (meta-docs)
- ✅ docs/thoughts/ memory banking (agent context offload)
- ✅ docs/libs/ dependency documentation
- ✅ docs/research/ organization
- ✅ Tool-agnostic approach (vendor lock-in prevention)
- ✅ Field-tested on multiple projects
