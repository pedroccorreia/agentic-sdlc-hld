---
name: Bitemporal Schema Auditor
description: Validates database schemas and queries for bitemporal ledger integrity, distinguishing Valid-Time (business occurrence) from Transaction-Time (system assertion).
---

# Bitemporal Schema Auditor Skill

## Purpose
Ensure all financial ledger tables, loan accounts, payment history, and credit line records adhere to bitemporal data architecture, enabling deterministic historical replay, retroactive corrections without audit trail mutation, and point-in-time state reconstruction.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  In financial accounting, time has two distinct dimensions:
  1. **Valid-Time (Effective Time):** When an event actually took place in the real world (e.g., a borrower made an ACH payment on Friday).
  2. **Transaction-Time (System Time):** When the database actually recorded that event (e.g., the ACH file was received and posted on Monday morning).
  Without bitemporal modeling, backdated adjustments (such as a reversed payment from 10 days ago) overwrite current balances, making it impossible to answer: *"What did we think the customer's balance was on Sunday?"* vs *"What was the true balance on Sunday given what we know today?"*

### Phase 2: Define (Convergent)
- **Schema Invariants:**
  - **Invariant 1 (Bitemporal Column Standard):** Every ledger and state table MUST have:
    - `valid_from` & `valid_to` (`valid_period` range in PostgreSQL / Spanner)
    - `system_from` & `system_to` (`system_period` range, managed by immutable system clock)
  - **Invariant 2 (System Time Monotonicity):** `system_from` is assigned strictly by `CURRENT_TIMESTAMP` at insert time; `system_to` defaults to `infinity` and is closed only upon supersession.
  - **Invariant 3 (No Historical Overwrites):** Updating a past event inserts a new row with the corrected `valid_time` and a new `system_time`, setting `system_to = NOW()` on the prior record.

### Phase 3: Develop (Divergent)
- **PostgreSQL / Spanner Temporal Pattern:**
  ```sql
  CREATE TABLE loan_balance_history (
    loan_id VARCHAR(64) NOT NULL,
    balance_cents BIGINT NOT NULL,
    -- Valid Time (Effective in business reality)
    valid_from TIMESTAMPTZ NOT NULL,
    valid_to TIMESTAMPTZ NOT NULL DEFAULT 'infinity',
    -- Transaction Time (Recorded in system reality)
    system_from TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    system_to TIMESTAMPTZ NOT NULL DEFAULT 'infinity',
    CONSTRAINT balance_non_negative CHECK (balance_cents >= 0),
    PRIMARY KEY (loan_id, valid_from, system_from)
  );
  ```
- **Point-in-Time Query Pattern (As-Of As-At):**
  ```sql
  -- Balance as of business date V, as known to the system at time T
  SELECT balance_cents 
  FROM loan_balance_history
  WHERE loan_id = :loan_id
    AND valid_from <= :valid_time AND :valid_time < valid_to
    AND system_from <= :system_time AND :system_time < system_to;
  ```

### Phase 4: Deliver (Convergent)
- **Deliverable:** DDL linters, AST verification rules for SQL queries, and audit certification scripts.

---

## Operational Guide & Instructions

### When to Apply
- Reviewing schema DDL for PostgreSQL or Spanner ledger services.
- Designing loan balance history and transaction recording tables.
- Building historical audit replay and dispute reconstruction endpoints.

---

## Verification & Exit Criteria
- [ ] All financial state tables include dual temporal ranges (`valid_period` and `system_period`).
- [ ] Point-in-time queries return identical reproducible states across successive runs.
- [ ] No physical `DELETE` queries permitted on bitemporal entities.
