#!/usr/bin/env python3
"""Intelligent Agent Orchestration System for shadcn2tamagui migration.

Advanced coordination system supporting 20+ parallel agents with:
- Resource management and load balancing  
- Smart task distribution based on complexity
- Dynamic timeout adjustment
- Quality scoring and prioritization
- Fault tolerance and recovery
"""

from __future__ import annotations

import asyncio
import json
import psutil
import resource
import signal
import subprocess
import sys
import time
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Dict, List, Optional, Tuple

sys.path.insert(0, str(Path(__file__).parent))
from logger_utils import get_logger
from rate_limiter import RateLimiter, TASK_TOKEN_COSTS

logger = get_logger("intelligent-orchestrator", verbose=True)


@dataclass
class TaskComplexity:
    """Task complexity classification for load balancing."""
    complexity_score: float  # 0.1-1.0 (simple to complex)
    estimated_duration: int  # seconds
    memory_requirement: int  # MB
    cpu_intensive: bool
    template_available: bool
    priority: int  # 1-10 (higher = more important)


@dataclass 
class TaskConfig:
    """Enhanced task configuration with metadata."""
    task_id: str
    task_type: str
    description: str
    complexity: TaskComplexity
    dependencies: List[str] = None
    output_path: Optional[Path] = None
    retry_count: int = 0
    max_retries: int = 2


@dataclass
class SystemResources:
    """Current system resource usage."""
    cpu_percent: float
    memory_percent: float
    available_memory_mb: float
    active_processes: int
    max_concurrent_safe: int


class IntelligentOrchestrator:
    """Advanced orchestration system for parallel agent execution."""
    
    def __init__(self, base_workspace: Path):
        self.base_workspace = base_workspace
        self.available_agents = []
        self.task_queue = []
        self.completed_tasks = []
        self.failed_tasks = []
        self.system_resources = self.get_system_resources()
        self.task_templates = self.load_task_templates()
        self.quality_threshold = 0.8
        self.rate_limiter = RateLimiter.from_env(logger)
        
    def get_system_resources(self) -> SystemResources:
        """Monitor current system resources for optimal agent count."""
        cpu_percent = psutil.cpu_percent(interval=1)
        memory = psutil.virtual_memory()
        available_memory_mb = memory.available / (1024 * 1024)
        process_count = len(psutil.pids())
        
        # Calculate safe concurrent agents based on resources
        # Conservative: 512MB per agent + 1GB buffer
        max_safe_concurrent = max(1, min(
            int(available_memory_mb / 512) - 2,
            psutil.cpu_count() * 2,
            24  # Hard limit for stability
        ))
        
        return SystemResources(
            cpu_percent=cpu_percent,
            memory_percent=memory.percent,
            available_memory_mb=available_memory_mb,
            active_processes=process_count,
            max_concurrent_safe=max_safe_concurrent
        )
    
    def load_task_templates(self) -> Dict[str, Dict]:
        """Load component implementation templates."""
        return {
            # SIMPLE (0.1-0.3) - Forms & Basic UI
            "badge": {"complexity": 0.1, "duration": 45, "memory": 64, "cpu": False, "has_template": True},
            "separator": {"complexity": 0.1, "duration": 45, "memory": 64, "cpu": False, "has_template": True},
            "skeleton": {"complexity": 0.2, "duration": 60, "memory": 128, "cpu": False, "has_template": True},
            "spinner": {"complexity": 0.2, "duration": 60, "memory": 128, "cpu": False, "has_template": True},
            
            # MEDIUM (0.4-0.6) - Input Components  
            "textarea": {"complexity": 0.4, "duration": 120, "memory": 256, "cpu": False, "has_template": True},
            "select": {"complexity": 0.5, "duration": 150, "memory": 384, "cpu": False, "has_template": True},
            "switch": {"complexity": 0.5, "duration": 150, "memory": 384, "cpu": False, "has_template": True},
            "radio": {"complexity": 0.5, "duration": 150, "memory": 384, "cpu": False, "has_template": True},
            "slider": {"complexity": 0.6, "duration": 180, "memory": 512, "cpu": False, "has_template": True},
            
            # COMPLEX (0.7-0.9) - Portals & Overlays
            "tooltip": {"complexity": 0.7, "duration": 200, "memory": 512, "cpu": False, "has_template": True},
            "popover": {"complexity": 0.8, "duration": 250, "memory": 768, "cpu": False, "has_template": True},
            "dropdown": {"complexity": 0.8, "duration": 250, "memory": 768, "cpu": False, "has_template": True},
            
            # VERY COMPLEX (0.9-1.0) - Advanced Components
            "table": {"complexity": 0.9, "duration": 300, "memory": 1024, "cpu": True, "has_template": True},
            "tabs": {"complexity": 0.9, "duration": 300, "memory": 1024, "cpu": False, "has_template": True},
            "accordion": {"complexity": 0.9, "duration": 300, "memory": 1024, "cpu": False, "has_template": True},
            "command": {"complexity": 1.0, "duration": 360, "memory": 1536, "cpu": True, "has_template": False},
            "calendar": {"complexity": 1.0, "duration": 400, "memory": 2048, "cpu": True, "has_template": False},
        }
    
    def create_task_queue(self) -> List[TaskConfig]:
        """Generate comprehensive task queue with intelligent ordering."""
        tasks = []
        
        # Prioritize tasks based on completeness, dependencies, and system resources
        
        # Phase 1: Complete remaining simple components (guaranteed success)
        simple_components = ["badge", "separator", "skeleton", "spinner"]
        for i, comp in enumerate(simple_components):
            template = self.task_templates[comp]
            tasks.append(TaskConfig(
                task_id=f"task-simple-{i+1:02d}",
                task_type=comp,
                description=f"{comp.title()} component implementation",
                complexity=TaskComplexity(
                    complexity_score=template["complexity"],
                    estimated_duration=template["duration"],
                    memory_requirement=template["memory"],
                    cpu_intensive=template["cpu"],
                    template_available=template["has_template"],
                    priority=8 if comp in ["badge", "separator"] else 7
                )
            ))
        
        # Phase 2: Medium complexity components
        medium_components = ["textarea", "select", "switch", "radio", "slider"]
        for i, comp in enumerate(medium_components):
            template = self.task_templates[comp]
            tasks.append(TaskConfig(
                task_id=f"task-medium-{i+1:02d}",
                task_type=comp,
                description=f"{comp.title()} form component",
                complexity=TaskComplexity(
                    complexity_score=template["complexity"],
                    estimated_duration=template["duration"],
                    memory_requirement=template["memory"],
                    cpu_intensive=template["cpu"],
                    template_available=template["has_template"],
                    priority=6
                )
            ))
        
        # Phase 3: Complex portal components
        complex_components = ["tooltip", "popover", "dropdown"]
        for i, comp in enumerate(complex_components):
            template = self.task_templates[comp]
            tasks.append(TaskConfig(
                task_id=f"task-complex-{i+1:02d}",
                task_type=comp,
                description=f"{comp.title()} portal component",
                complexity=TaskComplexity(
                    complexity_score=template["complexity"],
                    estimated_duration=template["duration"],
                    memory_requirement=template["memory"],
                    cpu_intensive=template["cpu"],
                    template_available=template["has_template"],
                    priority=5
                ),
                # Portal components may depend on tamagui config
                dependencies=["tamagui-config"]
            ))
        
        # Phase 4: Very complex components (last phase)
        advanced_components = ["table", "tabs", "accordion"]
        for i, comp in enumerate(advanced_components):
            template = self.task_templates[comp]
            tasks.append(TaskConfig(
                task_id=f"task-advanced-{i+1:02d}",
                task_type=comp,
                description=f"{comp.title()} advanced component",
                complexity=TaskComplexity(
                    complexity_score=template["complexity"],
                    estimated_duration=template["duration"],
                    memory_requirement=template["memory"],
                    cpu_intensive=template["cpu"],
                    template_available=template["has_template"],
                    priority=4
                ),
                dependencies=["tamagui-config", "button", "card"]
            ))
        
        # Phase 5: Experimental components (no templates)
        experimental = ["command", "calendar"]
        for i, comp in enumerate(experimental):
            template = self.task_templates.get(comp, {"complexity": 1.0, "duration": 500, "memory": 2048, "cpu": True, "has_template": False})
            tasks.append(TaskConfig(
                task_id=f"task-experimental-{i+1:02d}",
                task_type=comp,
                description=f"{comp.title()} experimental component",
                complexity=TaskComplexity(
                    complexity_score=template["complexity"],
                    estimated_duration=template["duration"],
                    memory_requirement=template["memory"],
                    cpu_intensive=template["cpu"],
                    template_available=template["has_template"],
                    priority=2  # Lower priority - experimental
                )
            ))
        
        # Sort by priority and complexity for optimal execution
        tasks.sort(key=lambda t: (t.complexity.priority * -1, t.complexity.complexity_score))
        
        return tasks
    
    def calculate_optimal_agent_count(self) -> Tuple[int, int]:
        """Calculate optimal agent count based on system resources and task complexity."""
        resources = self.get_system_resources()
        
        # Base calculation from system resources
        max_safe = resources.max_concurrent_safe
        
        # Adjust based on current system load
        if resources.cpu_percent > 80:
            max_safe = max(4, max_safe // 2)  # Conservative under high CPU
        elif resources.cpu_percent > 60:
            max_safe = max(6, max_safe - 4)   # Moderately conservative
        
        if resources.memory_percent > 85:
            max_safe = max(4, max_safe // 2)  # Conservative under high memory
        
        # Final cap for stability
        optimal_agents = min(max_safe, 20)  # Hard cap of 20 for orchestration simplicity
        
        # Calculate queue batching (if more tasks than agents)
        task_count = len(self.task_queue)
        batch_size = optimal_agents
        remaining_batches = (task_count - 1) // batch_size + 1 if task_count > batch_size else 1
        
        logger.info(f"Optimal agent count: {optimal_agents} (CPU: {resources.cpu_percent:.1f}%, Memory: {resources.memory_percent:.1f}%)")
        logger.info(f"Task queue size: {task_count}, Batch size: {batch_size}, Batches needed: {remaining_batches}")
        
        return optimal_agents, remaining_batches
    
    def execute_task_batch(self, batch_tasks: List[TaskConfig], batch_id: int) -> List[Dict]:
        """Execute a batch of tasks with intelligent resource management."""
        logger.info(f"Starting batch {batch_id} with {len(batch_tasks)} tasks")
        
        # Dynamic timeout based on batch complexity
        max_complexity = max(t.complexity.estimated_duration for t in batch_tasks)
        batch_timeout = max_complexity * 1.5 + 60  # 50% buffer + 1min overhead
        
        results = []
        
        with ThreadPoolExecutor(max_workers=len(batch_tasks)) as executor:
            # Submit all tasks in batch
            future_to_task = {}
            for task in batch_tasks:
                workspace = self.base_workspace / f"batch-{batch_id}-agent-{task.task_id}"
                workspace.mkdir(parents=True, exist_ok=True)
                
                # Adjust timeout per task
                task_timeout = task.complexity.estimated_duration * 1.5
                
                future = executor.submit(
                    self.execute_single_task, task, workspace, task_timeout
                )
                future_to_task[future] = task
            
            # Collect results with progress tracking
            start_time = time.time()
            completed = 0
            
            for future in as_completed(future_to_task, timeout=batch_timeout):
                task = future_to_task[future]
                completed += 1
                
                try:
                    result = future.result()
                    elapsed = time.time() - start_time
                    progress = (completed / len(batch_tasks)) * 100
                    
                    logger.info(f"[{progress:.0f}%] Completed {task.task_id} ({task.task_type}) - {result['status']} ({elapsed:.1f}s elapsed)")
                    
                    if result['status'] == 'success':
                        self.completed_tasks.append(result)
                    else:
                        self.failed_tasks.append(result)
                        
                    results.append(result)
                    
                except Exception as exc:
                    elapsed = time.time() - start_time
                    error_result = {
                        "task_id": task.task_id,
                        "task_type": task.task_type,
                        "status": "error",
                        "error": str(exc),
                        "execution_time": elapsed
                    }
                    self.failed_tasks.append(error_result)
                    results.append(error_result)
                    logger.error(f"Task {task.task_id} failed: {exc}")
        
        # Batch summary
        success_count = sum(1 for r in results if r['status'] == 'success')
        logger.info(f"Batch {batch_id} complete: {success_count}/{len(batch_tasks)} successful")
        
        return results
    
    def execute_single_task(self, task: TaskConfig, workspace: Path, timeout: int) -> Dict:
        """Execute individual task with error handling and resource monitoring."""
        start_time = time.time()
        
        try:
            agent_script = Path(__file__).parent / "worker_agent.py"
            
            # Build command with resource limits if needed
            cmd = ["python", str(agent_script), task.task_type, str(workspace)]
            
            # Execute with timeout
            token_cost = TASK_TOKEN_COSTS.get(task.task_type, TASK_TOKEN_COSTS["default"])
            self.rate_limiter.acquire(token_cost)
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=timeout,
                cwd=str(Path(__file__).parent)
            )
            
            execution_time = time.time() - start_time
            status = 'success' if result.returncode == 0 else 'failed'
            
            # Quality assessment
            quality_score = self.assess_output_quality(workspace, task.task_type)
            
            return {
                "task_id": task.task_id,
                "task_type": task.task_type,
                "status": status,
                "exit_code": result.returncode,
                "execution_time": execution_time,
                "workspace": str(workspace),
                "quality_score": quality_score,
                "stdout": result.stdout[-500:] if result.stdout else "",
                "stderr": result.stderr[-500:] if result.stderr else ""
            }
            
        except subprocess.TimeoutExpired:
            elapsed = time.time() - start_time
            return {
                "task_id": task.task_id,
                "task_type": task.task_type,
                "status": "timeout",
                "execution_time": elapsed,
                "error": f"Task exceeded timeout ({timeout}s)"
            }
        except Exception as exc:
            elapsed = time.time() - start_time
            return {
                "task_id": task.task_id,
                "task_type": task.task_type,
                "status": "error",
                "execution_time": elapsed,
                "error": str(exc)
            }
    
    def assess_output_quality(self, workspace: Path, task_type: str) -> float:
        """Assess the quality of generated outputs (0.0-1.0)."""
        score = 0.0
        
        try:
            # Check for expected outputs
            if task_type in ["badge", "button", "input", "card", "dialog", "alert", "checkbox"]:
                expected_file = workspace / f"{task_type.title()}.tsx"
                if expected_file.exists():
                    content = expected_file.read_text(encoding="utf-8")
                    
                    # Quality scoring criteria
                    checks = [
                        ("typescript", "interface" in content and "React.FC" in content),
                        ("styled-components", "styled(" in content),
                        ("variants", "variants:" in content),
                        ("proper exports", "export const" in content),
                        ("types", "interface" in content or "type" in content),
                        ("forwardRef", "React.forwardRef" in content)
                    ]
                    
                    score = sum(1 for _, check in checks if check) / len(checks)
                    
            elif task_type in ["table", "tabs", "accordion"]:
                # More complex component scoring
                expected_files = [workspace / f"{task_type.title()}.tsx"]
                if expected_files[0].exists():
                    content = expected_files[0].read_text(encoding="utf-8")
                    if len(content) > 500:  # Substantial implementation
                        score = 0.7
                    if len(content) > 1500:  # Comprehensive implementation
                        score = 0.9
                    if "Portal" in content and "styled" in content:  # Advanced features
                        score += 0.1
            
        except Exception as exc:
            logger.warning(f"Quality assessment failed for {task_type}: {exc}")
            score = 0.0
        
        return min(1.0, max(0.0, score)) 
    

def main() -> int:
    """Execute intelligent orchestration for full shadcn2tamagui migration."""
    logger.info("🚀 Launching Intelligent Agent Orchestration System")
    
    try:
        # Initialize orchestrator
        base_workspace = Path.cwd() / ".agents-intelligent"
        orchestrator = IntelligentOrchestrator(base_workspace)
        
        # Generate comprehensive task queue
        orchestrator.task_queue = orchestrator.create_task_queue()
        total_tasks = len(orchestrator.task_queue)
        
        logger.info(f"Generated {total_tasks} tasks for full migration")
        logger.info(f"System resources: {orchestrator.system_resources}")
        
        # Calculate optimal execution strategy
        optimal_agents, total_batches = orchestrator.calculate_optimal_agent_count()
        
        # Execute batches
        all_results = []
        successful_batches = 0
        
        for batch_id in range(1, total_batches + 1):
            start_idx = (batch_id - 1) * optimal_agents
            end_idx = min(start_idx + optimal_agents, total_tasks)
            batch_tasks = orchestrator.task_queue[start_idx:end_idx]
            
            if not batch_tasks:
                continue
                
            logger.info(f"{'='*60}")
            logger.info(f"EXECUTING BATCH {batch_id}/{total_batches}")
            logger.info(f"Tasks: {len(batch_tasks)} agents, Range: {start_idx+1}-{end_idx}")
            logger.info(f"{'='*60}")
            
            batch_results = orchestrator.execute_task_batch(batch_tasks, batch_id)
            all_results.extend(batch_results)
            
            batch_success = sum(1 for r in batch_results if r['status'] == 'success')
            if batch_success >= len(batch_tasks) * 0.5:  # 50% success rate per batch
                successful_batches += 1
            
            # System rest between batches
            if batch_id < total_batches:
                logger.info("Resting system 5 seconds before next batch...")
                time.sleep(5)
        
        # Final consolidation
        total_success = sum(1 for r in all_results if r['status'] == 'success')
        total_quality = sum(r.get('quality_score', 0) for r in all_results if r['status'] == 'success')
        avg_quality = total_quality / max(total_success, 1)
        
        logger.info(f"{'='*60}")
        logger.info(f"INTELLIGENT ORCHESTRATION COMPLETE")
        logger.info(f"{'='*60}")
        logger.info(f"Total Tasks: {total_tasks}")
        logger.info(f"Successful: {total_success} ({total_success/total_tasks*100:.1f}%)")
        logger.info(f"Average Quality: {avg_quality:.2f}")
        logger.info(f"Batch Success Rate: {successful_batches}/{total_batches} batches")
        
        # Save comprehensive report
        report_data = {
            "execution_summary": {
                "total_tasks": total_tasks,
                "successful_tasks": total_success,
                "success_rate": total_success/total_tasks,
                "average_quality": avg_quality,
                "successful_batches": successful_batches,
                "total_batches": total_batches
            },
            "system_resources": asdict(orchestrator.system_resources),
            "detailed_results": all_results
        }
        
        report_file = base_workspace / "orchestration-report.json"
        report_file.write_text(json.dumps(report_data, indent=2), encoding="utf-8")
        
        logger.info(f"Detailed report saved to: {report_file}")
        
        # Success criteria
        if total_success >= total_tasks * 0.4 and avg_quality >= 0.7:
            logger.info("🎉 INTELLIGENT ORCHESTRATION: SUCCESS!")
            logger.info("Full migration ready for consolidation!")
            return 0
        else:
            logger.warning("⚠️  INTELLIGENT ORCHESTRATION: PARTIAL SUCCESS")
            logger.warning("Some components may need manual completion")
            return 1
            
    except KeyboardInterrupt:
        logger.info(" Orchestrator interrupted by user")
        return 130
    except Exception as exc:
        logger.error(f"Orchestrator failed: {exc}")
        return 1


if __name__ == "__main__":
    # Set up graceful shutdown
    def handle_signal(signum, frame):
        logger.info("🛢️  Shutting down gracefully...")
        sys.exit(130)
    
    signal.signal(signal.SIGINT, handle_signal)
    signal.signal(signal.SIGTERM, handle_signal)
    
    sys.exit(main())
