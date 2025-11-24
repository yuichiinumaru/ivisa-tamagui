from __future__ import annotations

from dataclasses import dataclass

import pytest

from scripts.rate_limiter import RateLimitConfig, RateLimiter


@dataclass
class FakeClock:  # Simple clock to avoid real sleeping in tests
    now: float = 0.0

    def time(self) -> float:
        return self.now

    def advance(self, seconds: float) -> None:
        self.now += seconds

    def sleep(self, seconds: float) -> None:
        self.advance(seconds)



class DummyLogger:
    def info(self, *args, **kwargs) -> None:  # pragma: no cover - noop logger
        pass


def make_limiter(config: RateLimitConfig, clock: FakeClock) -> RateLimiter:
    return RateLimiter(config, logger=DummyLogger(), now=clock.time, sleep=clock.sleep)


def test_acquire_within_limits_does_not_sleep() -> None:
    clock = FakeClock()
    limiter = make_limiter(RateLimitConfig(5, 100_000, 100, "test"), clock)

    limiter.acquire()
    limiter.acquire(token_cost=10)

    assert clock.now == 0.0


def test_acquire_respects_requests_per_minute() -> None:
    clock = FakeClock()
    limiter = make_limiter(RateLimitConfig(2, 100_000, 100, "test"), clock)

    limiter.acquire()
    limiter.acquire()
    limiter.acquire()

    assert clock.now == 60.0


def test_acquire_respects_tokens_per_minute() -> None:
    clock = FakeClock()
    limiter = make_limiter(RateLimitConfig(10, 20, 100, "test"), clock)

    limiter.acquire(token_cost=15)
    limiter.acquire(token_cost=10)

    assert clock.now == 60.0


def test_acquire_respects_requests_per_day() -> None:
    clock = FakeClock()
    limiter = make_limiter(RateLimitConfig(100, 100_000, 2, "test"), clock)

    limiter.acquire()
    limiter.acquire()
    limiter.acquire()

    assert clock.now == 86_400.0


def test_from_env_defaults(monkeypatch: pytest.MonkeyPatch, tmp_path) -> None:
    monkeypatch.delenv("GENAI_MODEL", raising=False)
    monkeypatch.delenv("GENAI_RPM", raising=False)
    monkeypatch.setenv("MIGRATION_LOG_ROOT", str(tmp_path))
    limiter = RateLimiter.from_env(logger=DummyLogger())

    assert limiter.config.requests_per_minute == 2
