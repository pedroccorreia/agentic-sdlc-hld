---
name: Cent-for-Cent ($0.00) Drift Prover
description: Executes cent-for-cent dual-run shadow reconciliation comparing legacy Azure LMS outputs against GCP target outputs, guaranteeing absolute zero dollar drift.
---

# Cent-for-Cent ($0.00) Drift Prover Skill

## Purpose
Operate as the mathematical proof engine for Phase 6 (Shadow Traffic Gate), executing automated, high-throughput comparison of millions of loan records, payment transactions, and balance calculations between the legacy Azure LMS and the new GCP microservices, enforcing the non-negotiable exit gate: Zero Unexplained Divergence.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Replacing an in-flight core loan servicing system without disrupting business operations requires a shadow run (dual-run) where real-world traffic is processed concurrently by both systems. Even tiny differences in rounding rules, timestamp precision, or interest compounding create divergences that accumulate into tens of thousands of dollars of balance drift over time.
- **Divergence Causes:**
  1. *Timestamp Jitter:* Azure server clock differs by 30ms from GCP, causing an event occurring at 23:59:59.990 to record in different calendar days.
  2. *Legacy Bug Discrepancies:* Azure LMS contains known bugs (e.g. leap year day drop). When GCP computes the mathematically correct value, an apparent divergence is triggered.
  3. *Rounding Truncation:* Intermediate calculations rounded to 2 decimal places instead of 4 decimal places.

### Phase 2: Define (Convergent)
- **Mathematical Invariants:**
  - **Invariant 1 (Zero-Cent Drift Condition):**
    $$\\forall \\text{ loan } L, \\forall \\text{ date } D: | \\text{Balance}_{GCP}(L, D) - \\text{Balance}_{Azure}(L, D) | = \\$0.00$$
    Unless explicitly accounted for by a verified, documented legacy bug dispensation.
  - **Invariant 2 (Explanatory Completeness):**
    $$\\text{Unexplained Divergences} \\equiv 0$$
    Every single discrepancy must be automatically or manually attributed to one of the 4 standard taxonomy classes.

### Phase 3: Develop (Divergent)
- **BigQuery High-Throughput Reconciliation Pipeline:**
  - Ingest dual-run event streams from Pub/Sub into BigQuery shadow datasets.
  - Partition by `loan_id` and cluster by `transaction_date`.
  - Execute full outer join reconciliation:
    ```sql
    SELECT 
      COALESCE(gcp.loan_id, az.loan_id) AS loan_id,
      gcp.balance_cents AS gcp_balance,
      az.balance_cents AS azure_balance,
      (gcp.balance_cents - az.balance_cents) AS delta_cents,
      CASE 
        WHEN gcp.balance_cents = az.balance_cents THEN 'MATCH'
        WHEN az.known_bug_flag IS TRUE THEN 'CLASS_2_AZURE_BUG'
        WHEN ABS(gcp.balance_cents - az.balance_cents) <= 1 THEN 'CLASS_3_ROUNDING'
        ELSE 'UNEXPLAINED'
      END AS status
    FROM gcp_shadow_ledger gcp
    FULL OUTER JOIN azure_legacy_ledger az
      ON gcp.loan_id = az.loan_id AND gcp.effective_date = az.effective_date
    WHERE gcp.balance_cents <> az.balance_cents;
    ```

### Phase 4: Deliver (Convergent)
- **Deliverable:** Automated drift reporting dashboard, BigQuery SQL reconciliation jobs, and threshold alerts for executive cutover sign-off.

---

## Operational Guide & Instructions

### When to Apply
- Stage 5 & 6 shadow dual-run validation.
- Daily reconciliation of shadow ledger balances against production Azure dumps.
- Cutover readiness verification for Delivery Lead Eric Blassberg and CISO Chris Nelms.

---

## Verification & Exit Criteria
- [ ] Zero unexplained divergences across a 14-day continuous evaluation window.
- [ ] 100% of explained variances mapped to approved ADRs or legacy bug logs.
- [ ] Reconciliation pipeline processes 10,000 transactions/sec within a 5-minute latency SLA.
