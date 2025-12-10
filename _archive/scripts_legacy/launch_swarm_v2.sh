#!/bin/bash

# JULES SWARM LAUNCHER v2.0
# Usage: ./launch_swarm_v2.sh -t <atoms|molecules|organisms> [-n <concurrency_limit>]

# Default values
LIMIT=5
TYPE=""

# Parse arguments
while getopts "t:n:" opt; do
  case $opt in
    t) TYPE="$OPTARG"
    ;;
    n) LIMIT="$OPTARG"
    ;;
    \?) echo "Invalid option -$OPTARG" >&2
    exit 1
    ;;
  esac
done

# Validation
if [[ -z "$TYPE" ]]; then
    echo "❌ Error: You must specify a task type using -t (atoms|molecules|organisms)"
    exit 1
fi

TASK_FILE="scripts/tasks/${TYPE}.txt"
PROMPT_FILE="scripts/prompts/${TYPE}_prompt.md"

if [[ ! -f "$TASK_FILE" ]]; then
    echo "❌ Error: Task file not found at $TASK_FILE"
    exit 1
fi

if [[ ! -f "$PROMPT_FILE" ]]; then
    echo "❌ Error: Prompt template not found at $PROMPT_FILE"
    exit 1
fi

# Load prompt template
TEMPLATE=$(cat "$PROMPT_FILE")

echo "🚀 Launching Jules Swarm for [${TYPE}]"
echo "ℹ️  Concurrency Limit: ${LIMIT}"
echo "ℹ️  Task Source: ${TASK_FILE}"
echo "----------------------------------------"

# Read tasks and execute
while IFS= read -r component || [[ -n "$component" ]]; do
    # Skip empty lines
    if [[ -z "$component" ]]; then continue; fi
    
    # Manage Concurrency
    while [ $(jobs -r | wc -l) -ge "$LIMIT" ]; do
        sleep 2
    done

    echo "🤖 Dispatching Agent for: $component"
    
    # Prepare Prompt: Replace placeholder with component name
    # We use awk to escape special characters if any, but simplified here for substitution
    CURRENT_PROMPT="${TEMPLATE//\[COMPONENT_NAME\]/$component}"
    
    # Construct Session Name
    SESSION_NAME="Refactor ${TYPE}: ${component}"

    # Execute Jules in background
    # We pass the prompt as the --session "message" or equivalent arg
    # Assuming 'jules remote new --repo ... --session "..."' logic from v1
    jules remote new \
        --repo yuichiinumaru/ivisa-tamagui \
        --session "$CURRENT_PROMPT" > /dev/null 2>&1 &
    
    PID=$!
    echo "   ↳ Job started (PID: $PID)"
    
    # Slight delay to prevent API burst
    sleep 1

done < "$TASK_FILE"

echo "----------------------------------------"
echo "⏳ All tasks dispatched. Waiting for active jobs to finish..."
wait
echo "✅ Swarm Execution Complete."
