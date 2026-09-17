---
name: AST Spec Conformance Diff Analyzer
description: Abstract Syntax Tree (AST) analyzer that diffs generated implementation code against PRD specifications, enforcing "nothing more, nothing less" compliance.
---

# AST Spec Conformance Diff Analyzer Skill

## Purpose
Enforce absolute fidelity between the High-Definition PRD specification and the generated code, verifying both *downward completeness* (all specified requirements are implemented) and *upward restraint* (no unrequested features, hidden endpoints, or hallucinated logic exist in code).

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  LLMs are notorious for adding unsolicited behavior: adding speculative parameters, logging extra customer data, generating administrative backdoors, or omitting difficult edge cases while claiming completion. In a regulated consumer lending environment, an undocumented feature is a compliance finding and security vulnerability.
- **Bilateral Conformance Check:**
  - **Nothing Less:** Every required method, validation rule, and error code must exist in the AST.
  - **Nothing More:** Every public method, API route, and database query must map directly to an approved PRD assertion.

### Phase 2: Define (Convergent)
- **Conformance Invariants:**
  - **Invariant 1 (Completeness Metric):**
    $$\\text{SpecCoverage} = \\frac{|\\text{Implemented PRD Clauses}|}{|\\text{Total Approved PRD Clauses}|} \\equiv 100\\%$$
  - **Invariant 2 (Zero Unrequested Behavior):**
    $$\\text{UnsolicitedASTNodes} \\equiv 0$$
    Any endpoint, public function, or schema mutation not justified by the PRD fails the conformance gate.

### Phase 3: Develop (Divergent)
- **AST Diff Engine Architecture:**
  1. Ingest PRD semantic graph into an Expected Capability Schema (ECS).
  2. Parse implementation source code into AST (via `go/parser` or Python `ast`).
  3. Extract all routes, public functions, data models, and external call sites into an Observed Capability Schema (OCS).
  4. Perform bidirectional set difference:
     - $Missing = ECS - OCS$ (Defects / Incompleteness)
     - $Unrequested = OCS - ECS$ (Hallucinations / Scope creep)

### Phase 4: Deliver (Convergent)
- **Deliverable:** AST Conformance Report, PR blocking hook, and diff visualizer.

---

## Operational Guide & Instructions

### When to Apply
- Stage 4 Review: Executed by Spec Conformance Judge (`D1`).
- Prior to human Systems Engineer CODEOWNERS sign-off.
- Evaluating model accuracy across autonomous generation cycles.

---

## Verification & Exit Criteria
- [ ] SpecCoverage equals 100.0%.
- [ ] Zero unrequested endpoints, data mutations, or public exports.
- [ ] Conformance diff certified and archived in the immutable build evidence pack.
