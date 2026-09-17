---
name: Underwriting Decisioning Scorer
description: Evaluates borrower credit applications against underwriting policy bounds, DTI thresholds, credit bureau attributes, and generates statutory Adverse Action reason codes.
---

# Underwriting Decisioning Scorer Skill

## Purpose
Guide agents in encoding, verifying, and testing consumer credit decisioning rules, underwriting cutoffs, Debt-to-Income (DTI) bounds, risk tier assignments, and automated Adverse Action notice generation in strict compliance with the Equal Credit Opportunity Act (Reg B) and FCRA.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Underwriting decisioning determines whether an applicant is approved for an installment loan or credit line, what credit limit is assigned, and what APR applies. Under US federal law (ECOA / Reg B & FCRA):
  - Every decline must produce up to 4 principal reasons (Adverse Action reasons) accurately describing why the applicant was denied.
  - Models and scorecards must never use prohibited bases (race, color, religion, national origin, sex, marital status, age, public assistance receipt).
  - Proxy variables (e.g., zip code or educational institution correlating with protected classes) must be strictly scrutinized for disparate impact.

### Phase 2: Define (Convergent)
- **Mathematical Invariants & Rules:**
  - **Invariant 1 (DTI Calculation Invariant):**
    $$DTI = \\frac{\\text{Monthly Debt Obligations} + \\text{Proposed Loan Payment}}{\\text{Gross Monthly Income}} \\le DTI_{max}$$
  - **Invariant 2 (Deterministic Scoring):** Identical inputs $X$ into decision engine version $V$ must yield identical score $S$, tier $T$, and adverse action reason set $R$.
  - **Invariant 3 (Adverse Action Completeness):** If `Outcome == DECLINED`, then `1 <= len(AdverseActionCodes) <= 4` and each code maps to a standardized FCRA/ECOA explanation dictionary.

### Phase 3: Develop (Divergent)
- **Rule Engine Architecture:**
  1. Policy Filters (Hard Knocks): Age $\\ge 18$, OFAC sanctions clear, state licensing active.
  2. Bureau Attribute Ingestion: FICO/Vantage score, revolving utilization, delinquencies past 24m, hard inquiries past 6m.
  3. Ability to Repay (ATR): DTI calculation and minimum disposable income test.
  4. Scoring Model: Score calculation -> Risk Tier assignment (A, B, C, D, Decline).
  5. Reason Extraction: Top negative scoring factors identified for declined applications.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Testable rule tables, schema validation for credit applications, and audit log generation for model governance.

---

## Operational Guide & Instructions

### When to Apply
- Developing the `zip-decisioning-plugin` and underwriting engine.
- Auditing credit score cutoffs and risk tier allocations.
- Generating automated Adverse Action letters and FCRA disclosure notices.

### Interface Schema
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "CreditDecisionRequest",
  "type": "object",
  "required": ["applicant_id", "gross_monthly_income_cents", "monthly_debt_cents", "requested_amount_cents", "credit_score"],
  "properties": {
    "applicant_id": { "type": "string" },
    "gross_monthly_income_cents": { "type": "integer", "minimum": 1 },
    "monthly_debt_cents": { "type": "integer", "minimum": 0 },
    "requested_amount_cents": { "type": "integer", "minimum": 5000 },
    "credit_score": { "type": "integer", "minimum": 300, "maximum": 850 }
  }
}
```

---

## Verification & Exit Criteria
- [ ] No prohibited attributes or demographic proxies present in decision trees.
- [ ] Adverse Action reason codes generated for 100% of declined applications.
- [ ] DTI and ATR limits enforced without floating point inaccuracies.
