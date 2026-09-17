---
name: Zip SDLC Code Quality & Architectural Linter
description: Enforces Zip engineering standards, clean architecture layer boundaries, idiomatic Go/Python conventions, structured logging, and robust error wrapping.
---

# Zip SDLC Code Quality & Architectural Linter Skill

## Purpose
Enforce house engineering standards, boundary isolation, domain-driven design layer separation, structured JSON logging, and explicit error wrapping across all generated code in the Zip Agentic Factory.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  AI code generation agents left to generic defaults produce disparate styles, inconsistent error handling, leaky database abstractions into HTTP controllers, and unparseable log strings. In an enterprise system, this technical debt quickly makes the codebase unmaintainable and breaks production observability.
- **House Style Hazards:**
  - Ignoring errors or using bare `except: pass`.
  - Leaking database SQL models directly into API response payloads.
  - Using unstructured string formatting (`log.Printf("User %d did %s")`) instead of structured key-value JSON logging.
  - Lack of context propagation (`context.Context` in Go / `asyncio` context in Python).

### Phase 2: Define (Convergent)
- **Architecture Invariants:**
  - **Invariant 1 (Clean Architecture Layers):** Presentation (HTTP/gRPC) -> Application/Use-Case -> Domain -> Infrastructure. Dependencies MUST point inward. Presentation never touches Database Repositories directly.
  - **Invariant 2 (Explicit Error Wrapping):** Every error must be wrapped with domain context (`fmt.Errorf("amortization failed: %w", err)` in Go; custom exception hierarchies in Python).
  - **Invariant 3 (Structured Observability):** All logs must output structured JSON containing `trace_id`, `span_id`, `service`, `account_id` (pseudonymized), and `event_type`.

### Phase 3: Develop (Divergent)
- **Linter Rule Sets (golangci-lint / flake8 / ruff custom plugins):**
  - Layer boundary import checker: `pkg/api` cannot import `pkg/db`.
  - Context enforcement: Public functions must accept `ctx context.Context` as first parameter.
  - Banned standard library loggers in favor of zap / slog / structlog.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Configured linter rulesets (`.golangci.yml`, `pyproject.toml`), pre-commit hooks, and automated PR review feedback.

---

## Operational Guide & Instructions

### When to Apply
- Stage 3 code generation: run immediately after code authoring.
- Stage 4 review: automated code quality gating.
- Reverse-engineering legacy C# code: enforce clean architecture when porting to Go.

---

## Verification & Exit Criteria
- [ ] Clean architecture layer imports verified.
- [ ] 100% of logs conform to structured JSON schema.
- [ ] Zero unhandled errors or swallowed exceptions.
