---
name: Equal Credit Opportunity Act (Reg B) Auditor
description: Audits credit decision trees, scorecards, and adverse action workflows for prohibited demographic bias, disparate impact, and FCRA/ECOA notice compliance under 12 CFR Part 1002.
---

# Equal Credit Opportunity Act (Reg B) Auditor Skill

## Purpose
Audit automated decisioning pipelines, machine learning scorecards, and credit tiering algorithms to guarantee compliance with the Equal Credit Opportunity Act (ECOA / Regulation B - 12 CFR Part 1002) and Fair Credit Reporting Act (FCRA), preventing unfair discrimination and verifying mandatory Adverse Action reason generation.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Statutory Context (12 CFR § 1002.4 & § 1002.9):**
  - A creditor shall not discriminate against an applicant on a prohibited basis: race, color, religion, national origin, sex, marital status, age (provided applicant has capacity to contract), receipt of public assistance, or good-faith exercise of CCPA rights.
  - **Disparate Treatment vs Disparate Impact:** Even facially neutral criteria (e.g., educational institution, zip code, digital device type) that disproportionately exclude protected groups without demonstrable business necessity constitute unlawful disparate impact.
  - **Adverse Action Notice Requirement:** Creditor must notify applicant of action taken within 30 days of receiving a completed application, including statement of specific reasons.

### Phase 2: Define (Convergent)
- **Audit Invariants:**
  - **Invariant 1 (Banned Feature Set):** Zero presence of prohibited demographic features in training data, inference features, or rule sets.
  - **Invariant 2 (Four-Fifths / Adverse Impact Ratio Rule):** The selection rate for any protected demographic group should not be less than 80% (4/5ths) of the rate for the group with the highest selection rate, unless strictly justified by credit risk necessity.
  - **Invariant 3 (Adverse Action Determinism):**
    $$\\forall \\text{ declined application } A: 1 \\le |\\text{AdverseActionReasons}(A)| \\le 4$$
    and reasons must represent the actual principal factors that reduced the applicant's score.

### Phase 3: Develop (Divergent)
- **Auditing Tooling:**
  - Feature scanning to flag prohibited tokens (`marital_status`, `gender`, `spouse`, `zip_prefix`, `hbcu`).
  - Feature importance / SHAP value inspection on ML scorecards to ensure top negative score contributors map to approved ECOA reason code taxonomy.
  - Automated notice generation testing validating sample mail/email templates.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Static rule auditor, adverse action code validator, and regulatory reporting pack generator.

---

## Operational Guide & Instructions

### When to Apply
- Reviewing decisioning and underwriting engine specifications (`zip-decisioning-plugin`).
- Auditing machine learning credit scoring models before production deployment.
- Verifying Adverse Action notification triggers and reason code dictionaries.

---

## Verification & Exit Criteria
- [ ] Zero prohibited demographic fields or direct proxies detected in feature stores.
- [ ] 100% of declined applications trigger an Adverse Action notice with 1-4 valid reason codes.
- [ ] Disparate impact ratio meets compliance threshold ($\\ge 0.80$).
