---
name: Truth in Lending Act (Reg Z) APR Checker
description: Validates statutory APR disclosures, finance charge calculations, and federal tolerance limits (0.125% regular, 0.250% irregular) under CFPB Regulation Z (12 CFR Part 1026).
---

# Truth in Lending Act (Reg Z) APR Checker Skill

## Purpose
Ensure all loan contracts, periodic statements, promotional offers, and repayment schedules strictly comply with the federal Truth in Lending Act (TILA / Regulation Z), verifying that disclosed Annual Percentage Rates (APR) and finance charges stay within statutory federal tolerance limits.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Statutory Context (12 CFR § 1026.22):**
  Under Regulation Z, the APR is a measure of the cost of credit, expressed as a yearly rate. It relates the amount and timing of value received by the consumer to the amount and timing of payments made.
- **Statutory Tolerances:**
  - **Regular Transactions:** The disclosed APR is considered accurate if it is within **1/8 of 1 percentage point (0.125% or 0.00125)** of the actual APR calculated in accordance with the actuarial method or US Rule.
  - **Irregular Transactions:** If payments are irregular in size or interval, or include odd periods, tolerance is **1/4 of 1 percentage point (0.250% or 0.0025)**.
- **Finance Charge Definitions:**
  Must include interest, origination fees, service charges, credit report fees (if financed), but exclude statutory government filing fees and bona fide late payment penalties.

### Phase 2: Define (Convergent)
- **Actuarial Formula (CFPB Appendix J to Part 1026):**
  The APR is the rate $r$ that satisfies the general equation of value:
  $$\\sum_{k=1}^{m} \\frac{A_k}{(1 + e_k r)(1 + r)^{t_k}} = \\sum_{j=1}^{n} \\frac{P_j}{(1 + f_j r)(1 + r)^{s_j}}$$
  where:
  - $A_k$ is the amount of the $k$-th advance (loan disbursement).
  - $P_j$ is the amount of the $j$-th installment payment.
  - $t_k, s_j$ are the full unit-periods from origination to advance/payment.
  - $e_k, f_j$ are fractions of a unit-period in the first interval.
- **Tolerance Invariant:**
  $$| \\text{Disclosed APR} - \\text{Calculated Actuarial APR} | \\le 0.125\\%$$

### Phase 3: Develop (Divergent)
- **Actuarial Solver Algorithm (Newton-Raphson / Bisection):**
  Implement an iterative solver using high-precision decimal arithmetic to find the root of the discounted cash flow equation, comparing the root with the contract's disclosed APR field.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Automated APR verification engine, TILA disclosure box validator, and CI/CD audit runner.

---

## Operational Guide & Instructions

### When to Apply
- Reviewing loan origination documents and borrower agreement generators.
- Phase 1 specification review of repayment and fee policies.
- Stage 5 regulatory conformance verification.

---

## Verification & Exit Criteria
- [ ] Computed actuarial APR matches disclosed APR within 0.125% regular tolerance.
- [ ] Finance charge accurately sums all mandatory pre-conditions of credit.
- [ ] TILA Box fields (Amount Financed, Finance Charge, Total of Payments) fully balance.
