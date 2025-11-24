#!/usr/bin/env python3
"""Parallel agent executor for shadcn2tamagui conversion.

Coordinates multiple worker agents operating on different aspects 
of the migration simultaneously.
"""

from __future__ import annotations

import concurrent.futures
import json
import subprocess
import sys
import time
from pathlib import Path
from typing import Dict, List

# Add parent directory to path for logger_utils
sys.path.insert(0, str(Path(__file__).parent))
from logger_utils import get_logger
from rate_limiter import RateLimiter

AGENT_SCRIPTS = Path(__file__).parent.parent / "00-template"

logger = get_logger("parallel-agents", verbose=True)
RATE_LIMITER = RateLimiter.from_env(logger)


def create_agent_workspace(agent_id: str, base_dir: Path) -> Path:
    """Create isolated workspace for agent."""
    workspace = base_dir / f"agent-{agent_id}"
    workspace.mkdir(exist_ok=True)
    return workspace


def run_agent_task(agent_id: str, task_config: Dict, workspace: Path) -> Dict:
    """Execute a single agent task."""
    start_time = time.time()
    
    try:
        logger.info(f"Starting agent {agent_id}: {task_config['type']}")
        
        # Use our worker agent script
        worker_script = Path(__file__).parent / "worker_agent.py"
        cmd = [
            "conda", "run", "-n", "12", "python", 
            str(worker_script),
            task_config["type"],
            str(workspace)
        ]
        
        RATE_LIMITER.acquire()
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=300
        )
        
        execution_time = time.time() - start_time
        
        return {
            "agent_id": agent_id,
            "type": task_config["type"],
            "status": "success" if result.returncode == 0 else "failed",
            "exit_code": result.returncode,
            "execution_time": execution_time,
            "stdout": result.stdout[-1000:] if result.stdout else "",
            "stderr": result.stderr[-1000:] if result.stderr else "",
            "workspace": str(workspace)
        }
        
    except subprocess.TimeoutExpired:
        return {
            "agent_id": agent_id,
            "type": task_config["type"],
            "status": "timeout",
            "execution_time": time.time() - start_time,
            "stderr": "Task timed out after 300 seconds"
        }
    except Exception as exc:
        return {
            "agent_id": agent_id,
            "type": task_config["type"],
            "status": "error",
            "execution_time": time.time() - start_time,
            "error": str(exc)
        }


def main() -> int:
    """Execute parallel agent tasks for shadcn2tamagui conversion."""
    
    # Phase 2: Component Implementation with Improved Templates
    task_configs = [
        {"type": "dialog", "description": "Dialog component with portal setup"},
        {"type": "alert", "description": "Alert component with variant system"},
        {"type": "checkbox", "description": "Checkbox component with a11y"},
        {"type": "tooltip", "description": "Tooltip with portal positioning"},
        {"type": "popover", "description": "Popover with overlay system"},
        {"type": "switch", "description": "Switch toggle component"},
        {"type": "radio", "description": "Radio group component"},
        {"type": "textarea", "description": "Textarea form control"},
        {"type": "select", "description": "Select dropdown component"},
        {"type": "badge", "description": "Badge status component"},
    ]
    
    # Create workspace directory
    workspace_root = Path.cwd() / ".agents-output"
    workspace_root.mkdir(exist_ok=True)
    
    # Run tasks in parallel
    logger.info(f"Starting {len(task_configs)} parallel component implementation tasks")
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        # Submit all tasks
        future_to_config = {}
        for i, task_config in enumerate(task_configs):
            agent_id = f"agent-{i+1:02d}"
            workspace = create_agent_workspace(agent_id, workspace_root)
            
            future = executor.submit(run_agent_task, agent_id, task_config, workspace)
            future_to_config[future] = (agent_id, task_config)
            
        # Collect results
        results = []
        for future in concurrent.futures.as_completed(future_to_config, timeout=600):
            agent_id, config = future_to_config[future]
            try:
                result = future.result()
                results.append(result)
                logger.info(f"Completed {agent_id}: {result['status']} ({result['execution_time']:.1f}s)")
            except Exception as exc:
                logger.error(f"Agent {agent_id} failed: {exc}")
                results.append({
                    "agent_id": agent_id,
                    "type": config["type"],
                    "status": "exception",
                    "error": str(exc)
                })
    
    # Save results summary
    summary_file = workspace_root / "execution-summary.json"
    summary_file.write_text(json.dumps(results, indent=2), encoding="utf-8")
    
    # Print summary
    successes = sum(1 for r in results if r["status"] == "success")
    logger.info(f"Parallel execution complete: {successes}/{len(results)} succeeded")
    
    for result in results:
        logger.info(f"  {result['agent_id']} ({result['type']}): {result['status']}")
    
    return 0 if successes >= 6 else 1  # Need at least 6 successful in Phase 2


if __name__ == "__main__":
    sys.exit(main())
