---
name: Statutory Clause-to-Code Traceability Mapper
description: Generates and validates the Regulatory Traceability Matrix (RTM), mapping PRD requirements and code modules to specific federal and state statutory citations.
---

# Statutory Clause-to-Code Traceability Mapper Skill

## Purpose
Build and maintain an end-to-end, auditor-legible Regulatory Traceability Matrix (RTM) that maps every business requirement, algorithm, and microservice component directly to governing state and federal statutes (Reg Z, Reg B, FDCPA, GLBA, UDAAP, SCRA, MLA, State Lending Licenses).

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  In regulated financial technology, code is not acceptable merely because it compiles and passes functional tests. Regulators (CFPB, state banking commissioners, FDIC partner banks) require **affirmative proof of compliance**:
  - Why is interest calculated this way? (Cite: 12 CFR § 1026.17)
  - Why is this disclosure timing enforced? (Cite: 12 CFR § 1026.18)
  - What protects against discriminatory scoring? (Cite: 12 CFR § 1002.4)
  Traditional development documents compliance as an afterthought in disconnected spreadsheets, resulting in regulatory audit findings when code changes silently deviate from statutory intent.

### Phase 2: Define (Convergent)
- **Traceability Invariants:**
  - **Invariant 1 (Bilateral Traceability):**
    1. Every regulatory requirement in scope must link to at least one testable assertion in the PRD and one code implementation module.
    2. Every financial calculation or disclosure method in code must cite its governing statutory authority.
  - **Invariant 2 (Orphan Detection):**
    - Flag any requirement with *no statutory basis* (potential unapproved scope creep).
    - Flag any governing statute with *no implementing assertion* (material compliance omission).

### Phase 3: Develop (Divergent)
- **RTM Schema & Tooling:**
  ```json
  {
    "statute_id": "12_CFR_1026_22_A_2",
    "statute_name": "Truth in Lending Act - APR Regular Transaction Tolerance",
    "regulatory_body": "CFPB",
    "prd_clause_id": "PRD-REP-004",
    "code_module": "pkg/lending/amortization/actuarial.go",
    "test_suite": "tests/regulatory/reg_z_test.go",
    "verification_evidence": "gs://zip-audit-evidence/phase-5/reg_z_tolerance.json",
    "audit_status": "COMPLIANT"
  }
  ```

### Phase 4: Deliver (Convergent)
- **Deliverable:** Automated Markdown/JSON RTM generator, PRD annotation tool, and audit evidence pack compiler for Stage 5 V&V.

---

## Operational Guide & Instructions

### When to Apply
- Stage 1: Specification authoring with Regulatory & Compliance Analyst persona.
- Stage 4: Code review compliance sign-off.
- Stage 5: Evidence pack compilation for CISO Chris Nelms and bank partner auditors.

---

## Verification & Exit Criteria
- [ ] 100% of consumer lending features mapped to verified statutory citations.
- [ ] Zero orphan requirements or un-implemented statutory rules.
- [ ] Generated matrix exportable as auditor-ready PDF / Markdown table.
