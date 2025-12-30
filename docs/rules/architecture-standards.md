# docs/rules/architecture-standards.md — ARCHITECTURE & CODE STANDARDS

> **CONTEXT**: Load this file when creating new files, refactoring, or designing modules.

---

## 1. THE "UTILS SPRAWL" PREVENTION
**Target**: Preventing 50 different helper files with duplicate logic.

* **Search First**: Before creating `utils/date.ts`, search for existing date formatters.
* **Centralize**: If you find duplicates, refactor them into a single shared library *before* adding your new feature.
* **Naming**: Avoid generic names like `Manager`, `Handler`, or `Data`. Be specific: `InvoicePdfGenerator`.

---

## 2. MODULE BOUNDARIES (The Firewall)
**Target**: Preventing "Spaghetti Code" and circular dependencies.

* **Direction**: Dependencies should flow **inwards** (towards domain core) or **downwards** (towards shared infrastructure).
* **Forbidden Imports**:
    * Frontend should NEVER import from Backend source files (except shared types).
    * Domain entities should NEVER import from UI components.
* **Circular Deps**: If file A imports B, and B imports A, stop. You need a third file C (Shared) or an interface.

---

## 3. DEAD CODE PROTOCOL
**Target**: Preventing codebase bloat.

* **No Commented-Out Code**: Do not commit blocks of commented code. We have Git for history. Delete it.
* **No Zombie Files**: If you rename `User.ts` to `Customer.ts`, delete `User.ts`. Do not leave it "just in case".
* **Cleanup**: If you see a function marked `// TODO: Remove this`, and it is unused, **remove it**.

---

## 4. NEW TECH ADOPTION
**Target**: Preventing "Resume Driven Development".

* **Locked Stack**: Follow the "Locked Tech Stack" in `/AGENTS.md`.
* **Justification**: If you must introduce a new library (e.g., Zod, Zustand):
    1.  Check if an existing lib can solve it.
    2.  Write a brief "Thought" in `docs/thoughts/` justifying the trade-off (bundle size vs. dev experience).
    3.  Ask the user for permission.