# Atlassian Design System: Deep Dive & Gap Analysis

**Date:** December 2025
**Source:** Review of [Atlassian Design System](https://atlassian.design/) Storybook & Patterns.
**Objective:** Extract actionable patterns to elevate the Ivisa Tamagui Design System to enterprise-grade maturity.

---

## 1. Executive Summary

The Atlassian Design System (ADS) distinguishes itself not just by component breadth, but by **governance** and **future-proofing**. While our current system focuses on "Visual Parity" and "React Components", ADS focuses on "Platform Scale" and "AI Trust".

**Key Strategic Shifts for Us:**
1.  **AI as a First-Class Citizen:** Move from "ChatWidget" to a systemic "AI Layer" (Transparency, Attribution, Actions).
2.  **Governance via Tooling:** Shift from "Documentation" to "Automated Linting" (ensuring token usage).
3.  **Content as UX:** Formalize "Designing Messages" (Error/Empty/Success) patterns.

---

## 2. Pillar I: The AI-First Interface (Rovo Patterns)

Atlassian's "Rovo" patterns solve the "Black Box" problem of AI. They don't just "show chat"; they build trust.

### 2.1 The "Telepointer" & Transparency
*   **Concept:** A visual indicator that specifically shows *where* the AI is looking or working on the page.
*   **Our Gap:** We have `AgentAnimationPanel` (logs), but no visual "presence" on the main UI.
*   **Recommendation:** Create an `AIPresence` atom—a glowing cursor or highlight border that can overlay other components to indicate "Scanning" or "Processing".

### 2.2 Explicit "AI Actions" vs. Generic Buttons
*   **Concept:** Buttons that trigger AI distinct from standard actions. Atlassian uses specific iconography (sparkles/Rovo logo) and "Skills Tags".
*   **Our Gap:** We use generic buttons for everything.
*   **Recommendation:** Introduce an `AIButton` variant or a specific `leftIcon="ai"` preset that applies a gradient border or "shimmer" effect to distinguish AI actions.

### 2.3 Contextual "Sidebar Chat"
*   **Concept:** Chat that lives *beside* the work, not *over* it.
*   **Our Gap:** We have a generic `ChatWidget`.
*   **Recommendation:** Refactor `ChatWidget` to support a `mode="sidebar"` that pushes content layout (resizable) rather than just floating over it (z-index).

---

## 3. Pillar II: Developer Experience & Governance

ADS ensures consistency not by asking nicely, but by enforcing it in code.

### 3.1 The "Linting" Architecture
*   **Concept:** `eslint-plugin-design-system` forbids hardcoded colors and enforces token usage.
*   **Our Gap:** We rely on code review. We have `lint:arch` but it's basic.
*   **Recommendation:** Implement a custom ESLint rule (or use `restrict-imports`) to **forbid** hex codes (`#000`, `rgb(...)`) in our app code, forcing usage of `$tokens`.

### 3.2 "Primitives" over "Divs"
*   **Concept:** ADS exports `Box`, `Stack`, `Inline`, `Grid` as the *only* way to do layout.
*   **Our Gap:** We use `XStack`/`YStack` (Good!), but we often see raw `View` or `div` in older components.
*   **Recommendation:** Strict audit to replace all `div`/`View` usage with `Stack` primitives to ensure spacing tokens are respected.

### 3.3 Composition over Configuration
*   **Concept:** Components like `Spotlight` (Onboarding) are composed of smaller parts (`Target`, `Pulse`, `Dialog`).
*   **Our Gap:** Our `Tour` or `Onboarding` plans are often monolithic libraries.
*   **Recommendation:** Build `Coachmark` as a primitive (Popover + highlighted z-index layer) so developers can script their own tours without a heavy 3rd-party lib.

---

## 4. Pillar III: Foundations & Content Design

### 4.1 "Designing Messages"
*   **Concept:** ADS has strict patterns for *how* to write errors, warnings, and empty states.
*   **Our Gap:** Our `Empty` component is visual only.
*   **Recommendation:** Update `Empty` and `Alert` stories to include "Content Guidelines" in the MDX docs (e.g., "Error messages must suggest a solution").

### 4.2 Accessibility as a Foundation
*   **Concept:** "Reduced Motion" support is baked into their `Motion` primitives.
*   **Our Gap:** We have animations, but do they respect `prefers-reduced-motion`?
*   **Recommendation:** Ensure our `tamagui.config.ts` animation driver respects system motion settings.

---

## 5. Implementation Roadmap (Integrated)

We will integrate these into **Wave 9**.

1.  **AI Identity Package:**
    *   `Atom`: `AIBadge` (Transparency label).
    *   `Atom`: `AIPresence` (Telepointer/Highlight).
    *   `Variant`: `Button variant="ai"` (Shimmer/Gradient).

2.  **Governance Tooling:**
    *   `Script`: `verify-tokens.js` (Scan for hex codes).
    *   `Docs`: "Content Design" guidelines added to Storybook Introduction.

3.  **Layout Primitives:**
    *   `Molecule`: `ResizableSidebar` (for AI Chat context).
    *   `Molecule`: `Coachmark` (for onboarding).
