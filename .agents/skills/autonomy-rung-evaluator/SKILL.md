---
name: Autonomy Rung Promotion & Demotion Governor
description: Evaluates task class execution histories, escaped defect rates, and test coverage to dynamically promote task classes to Level 4 full autonomy or demote to Level 2 human review.
---

# Autonomy Rung Promotion & Demotion Governor Skill

## Purpose
Govern the factory's autonomy progression across 4 formal autonomy rungs (L1 Human-in-the-loop, L2 Human-approval, L3 Autonomous-with-exception, L4 Full-autonomy), ensuring that high-stakes financial operations are only automated when mathematically justified by empirical performance.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Unconstrained agentic autonomy in financial software development creates systemic risk.
  - Allowing an agent to autonomously deploy payment processing code without proven history invites disaster.
  - Conversely, requiring human review for every trivial getter function destroys developer velocity.
- **The Four Autonomy Rungs:**
  - **L1 (Assisted):** Human authors; agent suggests completions.
  - **L2 (Supervised):** Agent drafts spec/code; human review and approval is mandatory before each phase transition.
  - **L3 (Autonomous with Exceptions):** Agent executes phase transitions automatically; human is alerted only upon policy exceptions or test failures.
  - **L4 (Full Autonomy):** Agent autonomously specifies, codes, tests, and deploys within bound token budgets and verified test gates.

### Phase 2: Define (Convergent)
- **Promotion / Demotion Invariants:**
  - **Promotion to L4 Rule:** A task class (e.g. read-only reporting endpoint, schema migration) qualifies for L4 promotion **only if**:
    1. $\\ge 200$ consecutive runs without an escaped defect or human rollback.
    2. Test coverage on the generated code is $\\ge 95\\%$.
    3. Conformance diff is 100% clean.
  - **Immediate Demotion to L2 Rule:**
    - Any escaped defect in production $\\implies$ Immediate demotion of that task class back to L2.
    - Any double-entry imbalance or security vulnerability detected $\\implies$ Immediate demotion.

### Phase 3: Develop (Divergent)
- **Evaluation Engine:**
  - Queries task telemetry database (`factory_telemetry.task_executions`).
  - Computes rolling pass rate, MTTR, and escaped defect metrics per task class.
  - Issues signed Autonomy Entitlement Tokens authorizing agents to bypass manual human gates for qualified rungs.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Governor service policy engine, audit log recorder, and CISO governance dashboard.

---

## Operational Guide & Instructions

### When to Apply
- Stage 2 Dispatch: Check current rung authorization before routing tasks.
- Stage 7 Compounding Learning: Re-evaluate task rungs at cycle closeout.
- Managed by Autonomy Rung Governor (`F3`) and CISO Chris Nelms.

---

## Verification & Exit Criteria
- [ ] No task class promoted to L4 without meeting the 200 clean run threshold.
- [ ] Single defect triggers immediate automatic demotion to L2.
- [ ] All rung transitions logged with cryptographic tamper-evident audit records.
