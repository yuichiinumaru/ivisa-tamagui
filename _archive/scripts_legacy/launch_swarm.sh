#!/bin/bash

# JULES SWARM LAUNCHER v2.0
# Launches 5 parallel agents for Ivisa Design System tasks.

declare -a tasks=(
    # TASK 1: Sidebar
    "
    [PHASE 1: CONTEXT UPLOAD]
    INSTRUCTION:
    1. Read docs/* to understand the design system architecture.
    2. Check packages/ui/src for existing patterns.

    [PHASE 2: METHODOLOGY REFLECTION]
    INSTRUCTION:
    - Choose TDD or FDD.

    [PHASE 3: EXECUTION]
    TASK: Implement Sidebar (Organism)
    DETAILS:
    - Create src/organisms/Sidebar.tsx
    - Implement 'App Sidebar' pattern with Collapsible, Fixed, and Floating variants.
    - Use Sheet for mobile and YStack + AnimatePresence for desktop.
    - Ensure it composes well with other atoms.

    [PHASE 4: VERIFICATION]
    REQUIREMENT:
    - Write a test to validate the sidebar renders and toggles.
    "

    # TASK 2: Charts
    "
    [PHASE 1: CONTEXT UPLOAD]
    INSTRUCTION:
    1. Read docs/* to understand the design system architecture.

    [PHASE 2: METHODOLOGY REFLECTION]
    INSTRUCTION:
    - Choose TDD or FDD.

    [PHASE 3: EXECUTION]
    TASK: Implement Charts (Organism)
    DETAILS:
    - Research a cross-platform charting library (e.g., Victory Native).
    - Create src/organisms/Charts/ wrapper components.
    - Implement at least one LineChart and one BarChart example.

    [PHASE 4: VERIFICATION]
    REQUIREMENT:
    - Write a test to validate the chart component renders without errors.
    "

    # TASK 3: Storybook Atoms
    "
    [PHASE 1: CONTEXT UPLOAD]
    INSTRUCTION:
    1. Read docs/* and packages/ui/src/atoms.

    [PHASE 2: METHODOLOGY REFLECTION]
    INSTRUCTION:
    - Use DOC/SDD.

    [PHASE 3: EXECUTION]
    TASK: Storybook for Atoms
    DETAILS:
    - Scan packages/ui/src/atoms for all components.
    - Create or update .stories.tsx files for EACH atom.
    - Ensure all variants (size, color, state) are showcased.

    [PHASE 4: VERIFICATION]
    REQUIREMENT:
    - Run a build check on storybook if possible, or ensure files are valid TSX.
    "

    # TASK 4: Storybook Molecules
    "
    [PHASE 1: CONTEXT UPLOAD]
    INSTRUCTION:
    1. Read docs/* and packages/ui/src/molecules.

    [PHASE 2: METHODOLOGY REFLECTION]
    INSTRUCTION:
    - Use DOC/SDD.

    [PHASE 3: EXECUTION]
    TASK: Storybook for Molecules
    DETAILS:
    - Scan packages/ui/src/molecules for all components.
    - Create or update .stories.tsx files for EACH molecule.
    - Cover interactive states (open/close for dialogs, etc).

    [PHASE 4: VERIFICATION]
    REQUIREMENT:
    - Ensure files are valid TSX.
    "

    # TASK 5: Storybook Organisms
    "
    [PHASE 1: CONTEXT UPLOAD]
    INSTRUCTION:
    1. Read docs/* and packages/ui/src/organisms.

    [PHASE 2: METHODOLOGY REFLECTION]
    INSTRUCTION:
    - Use DOC/SDD.

    [PHASE 3: EXECUTION]
    TASK: Storybook for Organisms
    DETAILS:
    - Scan packages/ui/src/organisms.
    - Create or update .stories.tsx files for EACH organism (DataTable, Form, etc).
    - Mock necessary data for display.

    [PHASE 4: VERIFICATION]
    REQUIREMENT:
    - Ensure files are valid TSX.
    "
)

echo "🚀 Launching Jules Swarm (5 Agents)..."
echo "----------------------------------------"

for task in "${tasks[@]}"; do
    # Extract a short name for the log (first line of task after newlines)
    short_name=$(echo "$task" | grep "TASK:" | head -n 1)
    echo "🤖 Dispatching: $short_name"
    
    # Launch in background
    jules remote new --repo yuichiinumaru/ivisa-tamagui --session "$task" & 
    
    sleep 2
done

wait

echo "----------------------------------------"
echo "✅ Swarm Dispatched. Run 'jules remote list' to monitor."
