---
name: Spec-Derived Isolated TDD Test Authoring
description: Authors unit, integration, and property-based test suites strictly from PRD requirements and specifications with ZERO access to implementation source code.
---

# Spec-Derived Isolated TDD Test Authoring Skill

## Purpose
Operationalize Zip Design Principle 2.1 (*"Author and judge are never the same persona"*) by generating rigorous, adversarial test suites strictly derived from the High-Definition PRD specifications, operating in complete isolation from the implementation code.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  When an AI agent writes both implementation code and unit tests, it inevitably encodes its own bugs, misunderstandings, and hallucinations as expected test behavior. The resulting test suite passes with 100% green coverage, creating an illusion of quality while failing basic real-world requirements.
- **Isolation Principle:**
  - The Isolated Test Engineer (`C2`) is provided **only**:
    1. The approved High-Definition PRD specification.
    2. Input/Output schemas and interface contracts.
    3. Regulatory and domain invariant requirements.
  - The implementation source code is **completely withheld**.

### Phase 2: Define (Convergent)
- **Test Generation Invariants:**
  - **Invariant 1 (Black-Box Isolation):** Zero read access to implementation repository paths during test generation.
  - **Invariant 2 (Three-Tier Test Suite):**
    1. *Happy Path Conformance:* Tests all documented specification scenarios.
    2. *Boundary & Edge Cases:* Extreme dates (Feb 29, Dec 31), maximum credit limits, zero dollar balances, odd-day intervals.
    3. *Negative & Adversarial Paths:* Malformed payloads, SQL injection tokens, unauthorized actors, duplicate event IDs.
  - **Invariant 3 (Property-Based Invariants):** Hypotheses asserting mathematical laws (e.g., $PMT \\times n \\ge Principal$).

### Phase 3: Develop (Divergent)
- **Test Harness Generation Strategy:**
  - Parse PRD assertions into test scenarios.
  - Generate contract mocks using OpenAPI / gRPC Protobuf schemas.
  - Implement property-based test suites using `hypothesis` (Python) or `testing/quick` (Go).
  - Execute test suite against candidate implementation inside an ephemeral sandbox.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Isolated test suite repository, mock service stubs, and test execution report.

---

## Operational Guide & Instructions

### When to Apply
- Stage 2 Dispatch -> Stage 3 Build: Spawned in parallel with Implementation Engineer (`C1`).
- Generating adversarial test suites for loan servicing logic.
- Verifying external API contract compliance.

---

## Verification & Exit Criteria
- [ ] Test suite derived 100% from PRD assertions without implementation knowledge.
- [ ] At least 30% of test cases cover boundary, extreme, and negative scenarios.
- [ ] Property-based testing validates core mathematical invariants across 1,000 randomized iterations.
