---
name: Shadow Gate Divergence Taxonomy Classifier
description: Triages, explains, and categorizes live shadow comparison discrepancies into the standard 4-class taxonomy: GCP Bug, Azure Bug, Known Rounding, or Intentional Spec Difference.
---

# Shadow Gate Divergence Taxonomy Classifier Skill

## Purpose
Automate the triage and explanation of the thousands of balance and transaction differences that emerge during high-volume dual-run shadow evaluation, categorizing every variance into a formal 4-class taxonomy to achieve the factory exit gate: Zero Unexplained Divergences.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  When comparing millions of loan calculations between a 10-year-old monolithic Azure system and a modern GCP microservice, differences are continuous. Without automated triage, human engineers are overwhelmed by an unmanageable divergence queue, stalling the migration.
- **The Four-Class Taxonomy:**
  - **Class 1 (GCP Microservice Bug):** Logic error, calculation flaw, or state bug in the new GCP code. Requires immediate code remediation and cycle replay.
  - **Class 2 (Azure Legacy Bug):** Flaw in the legacy system (e.g., incorrect day-count on leap years, failed fee refund) where GCP is mathematically correct. Requires documented dispensation.
  - **Class 3 (Known Rounding / Precision Difference):** Variance of $\\le \\$0.02$ caused by intermediate rounding differences (2-decimal vs 4-decimal math).
  - **Class 4 (Intentional Specification Difference):** Deliberate product/policy improvement approved in the PRD (e.g., grace period extended from 3 to 5 days).

### Phase 2: Define (Convergent)
- **Classification Rules:**
  - **Rule 1 (Completeness):** Every discrepancy record must receive exactly one taxonomy classification.
  - **Rule 2 (Root Cause Attribution):** Class 1 and Class 2 classifications must link to an identifiable AST node, formula difference, or event log.
  - **Rule 3 (Zero Unexplained Target):**
    $$\\text{Unexplained Divergences} = \\text{Total Variances} - (\\text{Class 1} + \\text{Class 2} + \\text{Class 3} + \\text{Class 4}) \\equiv 0$$

### Phase 3: Develop (Divergent)
- **Automated Classifier Pipeline:**
  - BigQuery SQL anomaly classification routine:
    ```sql
    CREATE OR REPLACE TABLE shadow_analysis.classified_divergences AS
    SELECT 
      d.*,
      CASE 
        WHEN ABS(d.delta_cents) <= 2 THEN 'CLASS_3_ROUNDING'
        WHEN l.known_legacy_defect_id IS NOT NULL THEN 'CLASS_2_AZURE_BUG'
        WHEN p.intentional_policy_id IS NOT NULL THEN 'CLASS_4_INTENTIONAL_SPEC'
        ELSE 'CLASS_1_GCP_BUG_OR_UNEXPLAINED'
      END AS classification
    FROM shadow_reconciliation_deltas d
    LEFT JOIN known_legacy_bugs l ON d.error_signature = l.signature
    LEFT JOIN intentional_spec_changes p ON d.rule_id = p.rule_id;
    ```

### Phase 4: Deliver (Convergent)
- **Deliverable:** BigQuery classification pipeline, triage queue dashboard, and automatic Jira/ADR linkage.

---

## Operational Guide & Instructions

### When to Apply
- Continuous operation in Stage 6 Shadow Traffic Gate.
- Operated primarily by the Reconciliation Analyst (`D6`) persona.
- Preparing weekly cutover readiness reports for executive leadership.

---

## Verification & Exit Criteria
- [ ] 100% of shadow variances assigned to one of the 4 taxonomy classes.
- [ ] Zero unclassified variances remaining in the queue.
- [ ] Automated regression check prevents recurrence of resolved Class 1 bugs.
