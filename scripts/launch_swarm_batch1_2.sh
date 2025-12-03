#!/bin/bash

# Define the tasks for Batch 1 (remaining) and Batch 2
TASKS=(
  "35b – Create specs for DatePicker & MonthsPicker"
  "35c – Create specs for StarRating"
  "35d – Create specs for Stepper"
  "35e – Create specs for Autocomplete"
  "35f – Create specs for DataTable"
  "35g – Create specs for RichText"
  "35h – Create specs for Video"
)

echo "🚀 Launching Jules Swarm for Batches 1 & 2..."

for task in "${TASKS[@]}"; do
  echo "----------------------------------------------------------------"
  echo "🚀 Dispatching Agent for: $task"
  
  # Launch Jules in the background
  jules remote new --repo . --session "1) Read **all** documents to understand project context.
2) Analyze codebase and compare with documents to understand current project development state.
3) Execute the following tasks:
- [ ] $task" &
  
  # Small delay to prevent API rate limiting or race conditions
  sleep 3
done

# Wait for all background processes to finish (this waits for the CLI commands to return, not the agents)
wait

echo "----------------------------------------------------------------"
echo "✅ All agents dispatched successfully!"
echo "Use 'jules remote list --repo .' to monitor their status."
