# - shadcn/ui to Tamagui Migration

This repository contains the project for migrating shadcn/ui components to a custom, cross-platform Tamagui component library for the application.

The primary goal is to create a robust, themeable, and performant component library that works seamlessly across web and native platforms.

## Current Status

The project is currently focused on establishing a solid foundation for manual component development and testing. The main blocker is a `Missing theme` error in the Vitest test environment for custom components.

## Historical Context: Automated Migration (Archived)

Initially, this project attempted a highly ambitious automated migration using a fleet of parallel AI agents. The goal was to have agents perform the code translation, styling, and consolidation with minimal human oversight.

- **Approach:** An orchestrator script (`scaled_orchestrator.py`) was designed to deploy 20+ "worker agents" simultaneously. Each agent was responsible for a specific task, such as implementing a single component (e.g., Button, Dialog) or handling infrastructure (e.g., token mapping).
- **Outcome:** While the system successfully generated a large volume of code and demonstrated the potential of parallel agent workflows, the quality and consistency of the output required significant manual correction. Key challenges included hallucinations, incorrect API usage, and difficulty in managing context across dozens of agents.
- **Decision:** The fully automated approach was abandoned in favor of a more pragmatic, manual, TDD-based workflow. The agent scripts and logs in `scripts/` and `tamagui-components-final/infrastructure/` are kept as a historical artifact of this experiment.

## Development Workflow

This project follows a Test-Driven Development (TDD) workflow. For a detailed guide on how to add new components, please refer to the [Playbook: Adding New Components](docs/playbook-new-components.md).
