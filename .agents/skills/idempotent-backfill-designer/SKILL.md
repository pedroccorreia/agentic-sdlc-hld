---
name: Idempotent Data Backfill Engine
description: Authors restartable, chunked, and fully reconcilable data migration pipelines that backfill historical loan books from Azure to GCP with cent-for-cent parity.
---

# Idempotent Data Backfill Engine Skill

## Purpose
Design, execute, and verify large-scale historical data backfills (3+ years of loans, repayments, and journal entries) from legacy Azure SQL/Cosmos to Google Cloud Spanner / Cloud SQL, ensuring that pipelines can be stopped, restarted, or replayed indefinitely without data duplication or state divergence.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Migrating an enterprise loan servicing platform requires moving millions of historical loan accounts and tens of millions of repayment records.
  - Failures (network timeouts, database deadlocks, rate limits) during multi-day migrations are inevitable.
  - If a migration script is not strictly idempotent, running it twice results in duplicate payment entries, phantom double charges, or corrupt balances.
  - Source data often has legacy format anomalies, missing foreign keys, or timezone ambiguities.

### Phase 2: Define (Convergent)
- **Mathematical Invariants:**
  - **Invariant 1 (Idempotence Property):** For any migration function $f$ applied to dataset $X$:
    $$f(f(X)) \\equiv f(X)$$
  - **Invariant 2 (Reconciliation Balance Invariant):**
    $$\\sum_{i \\in Source} \\text{Balance}_i \\equiv \\sum_{j \\in Target} \\text{Balance}_j$$
  - **Invariant 3 (Natural Deterministic Keys):** Primary keys in the target system must be deterministically derived from source identifiers or content hashes, preventing duplicate surrogate key insertion.

### Phase 3: Develop (Divergent)
- **Idempotent Pipeline Architecture:**
  1. **Cursor & Watermark Pagination:** Track migration progress using monotonic checkpoint tables (`last_processed_id`, `updated_at_watermark`).
  2. **Upsert Semantics:** Use `ON CONFLICT (source_system, source_id) DO UPDATE` or Cloud Spanner `InsertOrUpdate` mutations.
  3. **Chunking & Batch Transactions:** Partition loan book into isolated account chunks (e.g. 500 loans per transaction boundary).
  4. **Post-Batch Checkpoint Verification:** Verify debits == credits for each migrated batch before advancing the watermark.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Cloud Run / GKE backfill job blueprints, verification checksum scripts, and resume-from-failure runbooks.

---

## Operational Guide & Instructions

### When to Apply
- Phase 3 & 5 data migration planning.
- Designing ETL / ELT pipelines for historical loan book ingestion.
- Re-baselining shadow state after detected divergences.

---

## Verification & Exit Criteria
- [ ] Re-executing the migration on already-migrated data produces zero row additions and zero balance mutations.
- [ ] Source vs target count, balance summation, and status hash match 100.00%.
- [ ] Crash simulation at 50% completion resumes seamlessly without manual data cleanup.
