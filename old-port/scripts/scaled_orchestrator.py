#!/usr/bin/env python3
"""Scaled Agent Orchestrator - Massive Parallel Deployment.

Simplified orchestration system for deploying 20+ agents simultaneously.
Focus on maximum parallel execution capacity with basic resource monitoring.
"""

from __future__ import annotations

import json
import os
import signal
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Tuple

sys.path.insert(0, str(Path(__file__).parent))
from logger_utils import get_logger

logger = get_logger("scaled-orchestrator", verbose=True)


@dataclass
class TaskInfo:
    """Basic task information for orchestration."""
    task_id: str
    task_type: str
    description: str
    priority: int
    estimated_seconds: int


class ScaledOrchestrator:
    """High-capacity orchestrator for 20+ parallel agents."""
    
    def __init__(self, base_workspace: Path):
        self.base_workspace = base_workspace
        self.active_tasks = []
        self.completed_results = []
        self.total_executed = 0
        self.max_parallel = 20  # Conservative default, can be adjusted
        
    def determine_parallel_capacity(self) -> int:
        """Determine optimal parallel agent count based on system constraints."""
        
        # CPU-based estimation
        cpu_count = os.cpu_count() or 8
        
        # Memory-based estimation (assume 1GB available for safety)
        try:
            import psutil
            memory = psutil.virtual_memory()
            available_mb = memory.available / (1024 * 1024)
            memory_based_max = max(4, int(available_mb / 1024))  # 1GB per agent
        except ImportError:
            memory_based_max = 8  # Conservative fallback
        
        # Take minimum of constraints
        optimal = min(cpu_count * 2, memory_based_max, 20)
        
        logger.info(f"System capacity: CPU={cpu_count}, Memory={memory_based_max}MB-based, Optimal={optimal}")
        self.max_parallel = optimal
        return optimal
    
    def create_task_queue(self) -> List[TaskInfo]:
        """Generate comprehensive task queue with 18+ components."""
        
        tasks = [
            # Simple components (fastest, highest success rate)
            TaskInfo("badge-01", "badge", "Badge status component", 10, 60),
            TaskInfo("separator-02", "separator", "Visual separator component", 10, 60),
            TaskInfo("skeleton-03", "skeleton", "Loading skeleton component", 9, 90),
            TaskInfo("spinner-04", "spinner", "Loading spinner component", 9, 90),
            
            # Form components (medium complexity)
            TaskInfo("textarea-05", "textarea", "Textarea input component", 8, 120),
            TaskInfo("select-06", "select", "Select dropdown component", 8, 150),
            TaskInfo("switch-07", "switch", "Switch toggle component", 8, 120),
            TaskInfo("radio-08", "radio", "Radio group component", 8, 120),
            TaskInfo("slider-09", "slider", "Slider input component", 7, 150),
            
            # Portal components (higher complexity)
            TaskInfo("tooltip-10", "tooltip", "Tooltip with portal", 7, 200),
            TaskInfo("popover-11", "popover", "Popover overlay component", 6, 250),
            TaskInfo("dropdown-12", "dropdown", "Dropdown menu component", 6, 250),
            
            # Complex components (experimental)
            TaskInfo("table-13", "table", "Data table component", 5, 300),
            TaskInfo("tabs-14", "tabs", "Tabs navigation component", 5, 300),
            TaskInfo("accordion-15", "accordion", "Accordion component", 5, 300),
            
            # Advanced components
            TaskInfo("command-16", "command", "Command palette component", 3, 360),
            TaskInfo("calendar-17", "calendar", "Calendar picker component", 3, 400),
            
            # Additional utility components
            TaskInfo("breadcrumb-18", "breadcrumb", "Breadcrumb navigation", 4, 180),
            TaskInfo("pagination-19", "pagination", "Pagination component", 4, 180),
            
            # Form enhancements
            TaskInfo("form-20", "form", "Form layout component", 4, 150),
            TaskInfo("field-label-21", "field-label", "Form field labels", 4, 90),
        ]
        
        # Sort by priority (highest first), then by duration (fastest first)
        tasks.sort(key=lambda t: (t.priority * -1, t.estimated_seconds))
        
        logger.info(f"Created task queue with {len(tasks)} components")
        return tasks
    
    def execute_single_task(self, task: TaskInfo, workspace: Path, timeout: int) -> Dict:
        """Execute individual task with comprehensive error handling."""
        start_time = time.time()
        
        try:
            # Use worker_agent script
            agent_script = Path(__file__).parent / "worker_agent.py"
            cmd = ["python", str(agent_script), task.task_type, str(workspace)]
            
            # Execute with task-specific timeout
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=timeout,
                cwd=str(Path(__file__).parent)
            )
            
            execution_time = time.time() - start_time
            status = 'success' if result.returncode == 0 else 'failed'
            
            # Quick quality check
            quality_score = self.quick_quality_check(workspace)
            
            return {
                "task_id": task.task_id,
                "task_type": task.task_type,
                "status": status,
                "exit_code": result.returncode,
                "execution_time": execution_time,
                "workspace": str(workspace),
                "quality_score": quality_score,
                "stdout_length": len(result.stdout),
                "stderr_length": len(result.stderr)
            }
            
        except subprocess.TimeoutExpired:
            return {
                "task_id": task.task_id,
                "task_type": task.task_type,
                "status": "timeout",
                "execution_time": time.time() - start_time,
                "error": f"Task exceeded {timeout}s timeout"
            }
        except Exception as exc:
            return {
                "task_id": task.task_id,
                "task_type": task.task_type,
                "status": "error",
                "execution_time": time.time() - start_time,
                "error": str(exc)
            }
    
    def quick_quality_check(self, workspace: Path) -> float:
        """Quick quality assessment (0.0-1.0)."""
        try:
            expected_file = None
            for file_pattern in ["*.tsx", "*.ts"]:
                files = list(workspace.glob(file_pattern))
                if files:
                    expected_file = files[0]
                    break
            
            if not expected_file:
                return 0.0
            
            content = expected_file.read_text(encoding="utf-8")
            
            # Quick quality heuristics
            checks = [
                ("has_content", len(content) > 200),
                ("typescript", "interface" in content or "React.FC" in content),
                ("styled_components", "styled(" in content),
                ("proper_exports", "export" in content),
                ("not_empty", "---" not in content[:100])  # Not just comments
            ]
            
            score = sum(1 for _, check in checks if check) / len(checks)
            return min(1.0, max(0.0, score))
            
        except Exception:
            return 0.0
    
    def execute_batch(self, task_batch: List[TaskInfo], batch_number: int) -> List[Dict]:
        """Execute a batch of tasks in parallel."""
        batch_start = time.time()
        logger.info(f"{'='*60}")
        logger.info(f"STARTING BATCH #{batch_number}")
        logger.info(f"Tasks: {len(task_batch)} | Parallel: {self.max_parallel}")
        logger.info(f"{'='*60}")
        
        batch_results = []
        completed_count = 0
        start_time = time.time()
        
        # Create individual workspaces
        task_workspaces = {}
        for task in task_batch:
            workspace = self.base_workspace / f"batch{batch_number}-{task.task_id}"
            workspace.mkdir(parents=True, exist_ok=True)
            task_workspaces[task.task_id] = workspace
        
        # Execute with thread pool
        with ThreadPoolExecutor(max_workers=self.max_parallel) as executor:
            # Submit all tasks
            future_to_task = {}
            for task in task_batch:
                timeout = task.estimated_seconds * 1.5 + 30  # 50% buffer + 30s overhead
                workspace = task_workspaces[task.task_id]
                
                future = executor.submit(
                    self.execute_single_task, task, workspace, timeout
                )
                future_to_task[future] = task
            
            # Collect results
            for future in as_completed(future_to_task, timeout=600):
                task = future_to_task[future]
                completed_count += 1
                progress = (completed_count / len(task_batch)) * 100
                elapsed = time.time() - start_time
                
                try:
                    result = future.result()
                    logger.info(f"[{progress:.0f}%] {task.task_id} ({task.task_type}) -> {result['status']} ({elapsed:.1f}s)")
                    batch_results.append(result)
                    
                except Exception as exc:
                    error_result = {
                        "task_id": task.task_id,
                        "task_type": task.task_type,
                        "status": "exception",
                        "execution_time": time.time() - start_time,
                        "error": str(exc)
                    }
                    batch_results.append(error_result)
                    logger.error(f"Task {task.task_id} exception: {exc}")
        
        # Batch summary
        batch_duration = time.time() - batch_start
        success_count = sum(1 for r in batch_results if r['status'] == 'success')
        avg_quality = sum(r.get('quality_score', 0) for r in batch_results) / max(len(batch_results), 1)
        
        logger.info(f"Batch #{batch_number} Complete: {batch_duration:.1f}s")
        logger.info(f"Success: {success_count}/{len(task_batch)} ({success_count/len(task_batch)*100:.1f}%)")
        logger.info(f"Avg Quality: {avg_quality:.2f}/1.0")
        logger.info(f"{'='*60}")
        
        return batch_results
    
    def execute_all_batches(self) -> List[Dict]:
        """Execute all tasks in optimal batches."""
        
        tasks = self.create_task_queue()
        parallel_capacity = self.determine_parallel_capacity()
        
        # Calculate batch sizes
        total_tasks = len(tasks)
        batch_size = parallel_capacity
        total_batches = (total_tasks - 1) // batch_size + 1
        
        logger.info(f"Executing {total_tasks} tasks in {total_batches} batches")
        logger.info(f"Batch size: {batch_size}, Parallel capacity: {parallel_capacity}")
        
        all_results = []
        
        # Execute batches sequentially
        for batch_idx in range(total_batches):
            start_idx = batch_idx * batch_size
            end_idx = min(start_idx + batch_size, total_tasks)
            batch_tasks = tasks[start_idx:end_idx]
            
            if batch_tasks:
                batch_results = self.execute_batch(batch_tasks, batch_idx + 1)
                all_results.extend(batch_results)
                
                # Brief pause between batches
                if batch_idx < total_batches - 1:
                    logger.info("System rest 3 seconds...")
                    time.sleep(3)
        
        return all_results


def main() -> int:
    """Execute scaled orchestration for massive parallel deployment."""
    logger.info("🚀 Scaled Agent Orchestrator - Parallel Deployment System")
    logger.info("Deploying 20+ agents for shadcn2tamagui full migration")
    
    try:
        # Initialize system
        base_workspace = Path.cwd() / ".agents-scaled"
        orchestrator = ScaledOrchestrator(base_workspace)
        base_workspace.mkdir(parents=True, exist_ok=True)
        
        # Execute all batches
        all_results = orchestrator.execute_all_batches()
        
        # Final analysis
        successful = [r for r in all_results if r['status'] == 'success']
        failed = [r for r in all_results if r['status'] != 'success']
        
        total_tasks = len(all_results)
        success_rate = len(successful) / total_tasks if total_tasks > 0 else 0
        avg_quality = sum(r.get('quality_score', 0) for r in successful) / max(len(successful), 1)
        
        logger.info(f"{'='*60}")
        logger.info(f"SCALED DEPLOYMENT COMPLETE")
        logger.info(f"{'='*60}")
        logger.info(f"Total Tasks Executed: {total_tasks}")
        logger.info(f"Successful: {len(successful)} ({success_rate*100:.1f}%)")
        logger.info(f"Failed: {len(failed)}")
        logger.info(f"Average Quality: {avg_quality:.2f}/1.0")
        
        # Failure analysis
        failure_by_type = {}
        for result in failed:
            error_type = result['status']
            failure_by_type[error_type] = failure_by_type.get(error_type, 0) + 1
        
        if failure_by_type:
            logger.info("Failure Analysis:")
            for error_type, count in failure_by_type.items():
                logger.info(f"  {error_type}: {count}")
        
        # Save comprehensive report
        report_data = {
            "execution_summary": {
                "total_tasks": total_tasks,
                "successful": len(successful),
                "success_rate": success_rate,
                "average_quality": avg_quality,
                "failure_breakdown": failure_by_type,
                "execution_strategy": {
                    "max_parallel": orchestrator.max_parallel,
                    "batch_execution": len({r['workspace'].split('/')[1] for r in all_results if r['status'] == 'success'}),
                    "quality_threshold": 0.8
                }
            },
            "detailed_results": all_results
        }
        
        report_file = base_workspace / "scaled-deployment-report.json"
        report_file.write_text(json.dumps(report_data, indent=2, ensure_ascii=False), encoding="utf-8")
        
        logger.info(f"Detailed report saved: {report_file}")
        
        # Success criteria
        if success_rate >= 0.4 and avg_quality >= 0.6:
            logger.info("🎉 SCALED DEPLOYMENT: SUCCESS!")
            logger.info(f"Successfully generated {len(successful)} components with high parallelism")
            return 0
        else:
            logger.warning("⚠️  SCALED DEPLOYMENT: PARTIAL SUCCESS")
            logger.warning(f"Success rate {success_rate:.1%} below target 40% or quality {avg_quality:.2f} below target 0.6")
            return 1
    
    except KeyboardInterrupt:
        logger.info("Process interrupted by user")
        return 130
    except Exception as exc:
        logger.error(f"Scaled deployment failed: {exc}")
        import traceback
        logger.error(traceback.format_exc())
        return 1


if __name__ == "__main__":
    # Graceful shutdown
    def signal_handler(signum, frame):
        logger.info("🛢️  Shutting down gracefully...")
        sys.exit(130)
    
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    sys.exit(main())
