"""Rate limiting utilities for Gemini 2.5 automation scripts and agents."""

from __future__ import annotations

import os
import threading
import time
import json
from collections import deque
from dataclasses import dataclass
from typing import Callable, Deque, Dict, Optional, Tuple

from scripts.logger_utils import get_logger

SECONDS_PER_MINUTE = 60
SECONDS_PER_DAY = 60 * 60 * 24


@dataclass
class RateLimitConfig:
    requests_per_minute: int
    tokens_per_minute: int
    requests_per_day: int
    model: str


DEFAULT_MODEL_LIMITS = {
    "gemini-2.5-pro": RateLimitConfig(2, 125_000, 50, "gemini-2.5-pro"),
    "gemini-2.5-flash": RateLimitConfig(10, 250_000, 250, "gemini-2.5-flash"),
}

# Simple cost estimation table for agent tasks
TASK_TOKEN_COSTS = {
    "default": 2000,
    "inventory": 1000,
    "token-mapping": 3000,
    "specs": 4000,
    "component-implementation": 8000,
    "consolidation": 5000,
}



class RateLimiter:
    """Token bucket-based rate limiter supporting RPM, TPM, RPD limits."""

    def __init__(
        self,
        config: RateLimitConfig,
        *,
        logger=None,
        now: Callable[[], float] = time.monotonic,
        sleep: Callable[[float], None] = time.sleep,
        task_costs: Optional[Dict[str, int]] = None,
    ) -> None:
        self.config = config
        self._logger = logger or get_logger("rate-limit")
        self._now = now
        self._sleep = sleep
        self._lock = threading.Lock()

        self._minute_requests: Deque[float] = deque()
        self._minute_tokens: Deque[Tuple[float, int]] = deque()
        self._minute_token_usage = 0

        self._day_requests: Deque[float] = deque()
        self._task_costs: Dict[str, int] = dict(TASK_TOKEN_COSTS)
        if task_costs:
            self._task_costs.update({k: int(v) for k, v in task_costs.items()})

    def acquire(self, token_cost: int = 0) -> None:
        """Block until performing another request would respect all limits."""

        while True:
            wait_for = 0.0

            with self._lock:
                now = self._now()
                self._prune_windows(now)

                wait_for_rpm = self._wait_time_for_rpm(now)
                wait_for_tpm = self._wait_time_for_tpm(now, token_cost)
                wait_for_rpd = self._wait_time_for_rpd(now)

                wait_for = max(wait_for_rpm, wait_for_tpm, wait_for_rpd)

                if wait_for <= 0:
                    self._register_request(now, token_cost)
                    return

            self._log_wait(wait_for)
            self._sleep(wait_for)

    def consume(self, task_name: str, token_cost: Optional[int] = None) -> int:
        """Resolve task cost metadata, acquire the limiter, and return the cost used."""

        resolved_cost = token_cost
        if resolved_cost is None:
            resolved_cost = self._task_costs.get(task_name, self._task_costs.get("default", 0))

        resolved_cost = max(0, int(resolved_cost))
        self.acquire(token_cost=resolved_cost)
        self._logger.info(
            "Rate limiter consumption",
            extra={"task": task_name, "token_cost": resolved_cost},
        )
        return resolved_cost

    @classmethod
    def from_env(cls, logger=None) -> "RateLimiter":
        model = os.getenv("GENAI_MODEL", "gemini-2.5-pro").lower()
        config = DEFAULT_MODEL_LIMITS.get(model, DEFAULT_MODEL_LIMITS["gemini-2.5-pro"])

        rpm = int(os.getenv("GENAI_RPM", config.requests_per_minute))
        tpm = int(os.getenv("GENAI_TPM", config.tokens_per_minute))
        rpd = int(os.getenv("GENAI_RPD", config.requests_per_day))

        custom = RateLimitConfig(rpm, tpm, rpd, model)
        task_costs = cls._task_cost_overrides()
        return cls(custom, logger=logger, task_costs=task_costs)

    @staticmethod
    def _task_cost_overrides() -> Dict[str, int]:
        raw = os.getenv("GENAI_TASK_COSTS")
        if not raw:
            return {}

        overrides: Dict[str, int] = {}
        raw = raw.strip()
        try:
            parsed = json.loads(raw)
            if not isinstance(parsed, dict):
                raise ValueError
            for key, value in parsed.items():
                overrides[str(key)] = int(value)
            return overrides
        except ValueError:
            pass

        # Fallback to simple comma separated entries like "task=123,other=456"
        for chunk in raw.split(","):
            if "=" not in chunk:
                continue
            name, value = chunk.split("=", 1)
            name = name.strip()
            value = value.strip()
            if not name or not value:
                continue
            try:
                overrides[name] = int(value)
            except ValueError:
                continue
        return overrides

    def _prune_windows(self, now: float) -> None:
        while self._minute_requests and now - self._minute_requests[0] >= SECONDS_PER_MINUTE:
            self._minute_requests.popleft()

        while self._minute_tokens and now - self._minute_tokens[0][0] >= SECONDS_PER_MINUTE:
            _, tokens = self._minute_tokens.popleft()
            self._minute_token_usage -= tokens

        while self._day_requests and now - self._day_requests[0] >= SECONDS_PER_DAY:
            self._day_requests.popleft()

    def _wait_time_for_rpm(self, now: float) -> float:
        limit = self.config.requests_per_minute
        if limit <= 0:
            return 0.0
        if len(self._minute_requests) < limit:
            return 0.0
        earliest = self._minute_requests[0]
        return max(0.0, SECONDS_PER_MINUTE - (now - earliest))

    def _wait_time_for_tpm(self, now: float, token_cost: int) -> float:
        limit = self.config.tokens_per_minute
        if limit <= 0:
            return 0.0
        if self._minute_token_usage + token_cost <= limit:
            return 0.0
        # Need the earliest token entry to expire
        timestamp, _ = self._minute_tokens[0]
        return max(0.0, SECONDS_PER_MINUTE - (now - timestamp))

    def _wait_time_for_rpd(self, now: float) -> float:
        limit = self.config.requests_per_day
        if limit <= 0:
            return 0.0
        if len(self._day_requests) < limit:
            return 0.0
        earliest = self._day_requests[0]
        return max(0.0, SECONDS_PER_DAY - (now - earliest))

    def _register_request(self, now: float, token_cost: int) -> None:
        self._minute_requests.append(now)
        self._minute_tokens.append((now, token_cost))
        self._minute_token_usage += token_cost
        self._day_requests.append(now)
        if token_cost > 0:
            self._logger.info(
                "Token usage event",
                extra={
                    "model": self.config.model,
                    "token_cost": token_cost,
                    "minute_token_usage": self._minute_token_usage,
                    "rpm_current": len(self._minute_requests),
                },
            )

    def _log_wait(self, wait: float) -> None:
        if wait <= 0:
            return
        self._logger.info(
            "Rate limit reached; sleeping", extra={"seconds": round(wait, 3), "model": self.config.model}
        )
