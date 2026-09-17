---
name: Double-Entry Ledger Integrity Verifier
description: Mathematically proves that Debits equal Credits across all ledger transaction journal entries, preventing orphaned balances or out-of-balance postings.
---

# Double-Entry Ledger Integrity Verifier Skill

## Purpose
Enforce core banking double-entry bookkeeping invariants across all financial ledger schemas, transaction posting services, and migration backfills in the Zip Loan Management System. Guarantees that every financial event is balanced to exactly $0.00.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Single-entry systems or loosely coupled CRUD databases record balance updates as mutations on an account row (`UPDATE accounts SET balance = balance + ?`). In financial institutions, this creates unrecoverable auditing disasters: if a write fails halfway, money vanishes or appears from nowhere.
- **Core Banking Integrity Rules:**
  - Every transaction consists of a balanced journal entry containing at least two lines (one debit, one credit).
  - In traditional banking:
    - **Assets & Expenses:** Increased by Debits, decreased by Credits.
    - **Liabilities, Equity, & Revenue:** Increased by Credits, decreased by Debits.
  - Multi-entity transactions (e.g., consumer repayment: cash clearing debit, interest income credit, loan principal asset credit) must balance across the transaction boundary.

### Phase 2: Define (Convergent)
- **Mathematical Invariants:**
  - **Invariant 1 (Fundamental Double-Entry Invariant):** For any transaction $T$ composed of $m$ journal entry lines:
    $$\\sum_{i=1}^{m} \\text{DebitAmount}_i \\equiv \\sum_{i=1}^{m} \\text{CreditAmount}_i \\iff \\sum_{i=1}^{m} (\\text{DebitAmount}_i - \\text{CreditAmount}_i) = 0$$
  - **Invariant 2 (System Conservation of Value):** Across the entire ledger database at any timestamp $t$:
    $$\\sum_{all\ entries} \\text{Debits} \\equiv \\sum_{all\ entries} \\text{Credits}$$
  - **Invariant 3 (Immutability):** Posted journal entries are append-only. Corrections must occur via explicit reversal or adjustment entries, never SQL `UPDATE` or `DELETE`.

### Phase 3: Develop (Divergent)
- **Verification Engine Architecture:**
  - **Pre-Commit Verification:** AST / middleware hooks validate incoming transaction payloads before database execution.
  - **Database Constraint Verification:** PostgreSQL check constraints and triggers verify sum of debits == sum of credits inside the ACID transaction.
  - **Periodic Ledger Reconciliation Query:** Automated PromQL and SQL integrity scanner scanning table balances:
    ```sql
    SELECT transaction_id, 
           SUM(debit_amount_cents) as total_debit, 
           SUM(credit_amount_cents) as total_credit,
           SUM(debit_amount_cents) - SUM(credit_amount_cents) as imbalance
    FROM ledger_entries
    GROUP BY transaction_id
    HAVING SUM(debit_amount_cents) <> SUM(credit_amount_cents);
    ```
    Must always return zero rows.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Continuous ledger audit harness, migration validator, and PostgreSQL assertion templates.

---

## Operational Guide & Instructions

### When to Apply
- Reviewing schema or code for `zip-repayments` and core ledger microservices.
- Auditing transaction endpoints prior to production deployment.
- Verifying historical ledger migration backfill integrity.

### Reference Assertion Template
```python
def verify_journal_entry(lines: list[dict]) -> bool:
    total_debit = sum(line["amount_cents"] for line in lines if line["direction"] == "DEBIT")
    total_credit = sum(line["amount_cents"] for line in lines if line["direction"] == "CREDIT")
    if total_debit != total_credit:
        raise ValueError(
            f"Double-entry violation! Debits ({total_debit}) != Credits ({total_credit}). "
            f"Net imbalance: {total_debit - total_credit} cents"
        )
    return True
```

---

## Verification & Exit Criteria
- [ ] Every financial event has equal debits and credits.
- [ ] No direct `UPDATE` queries exist on historical ledger entry balance columns.
- [ ] Continuous audit query returns 0 unbalanced transactions.
