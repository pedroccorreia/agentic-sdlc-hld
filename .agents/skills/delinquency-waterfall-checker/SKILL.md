---
name: Delinquency Waterfall Allocator
description: Validates repayment allocation waterfalls across fees, accrued interest, and principal reduction, enforcing statutory payment hierarchy and delinquency aging buckets.
---

# Delinquency Waterfall Allocator Skill

## Purpose
Ensure borrower repayments and partial settlements are distributed strictly according to Zip policy and statutory hierarchy (e.g., Late Fees -> Accrued Interest -> Principal Reduction, or statutory consumer protection ordering). Manages delinquency aging buckets (1-30, 31-60, 61-90, 90+ DPD) deterministically.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  When a consumer makes a payment—especially a partial payment on a delinquent loan—the sequence in which that money is applied dictates whether the borrower remains delinquent, whether late fees are legally assessed, and how much interest compounds.
- **Statutory & Business Constraints:**
  - *Credit CARD Act & State Installment Laws:* In many jurisdictions, payments in excess of minimum payment must be allocated to the balance with the highest APR first.
  - *Pyramiding Late Fees Violation (FTC / CFPB Rule):* Assessing a late fee when the only delinquency is an unpaid previous late fee is an illegal practice (*pyramiding*). A timely payment of the full monthly contractual amount must satisfy the current period regardless of prior unpaid fees.
  - *Delinquency Days Past Due (DPD):* Calculated based on the oldest unpaid contractual installment due date, NOT the date of last payment.

### Phase 2: Define (Convergent)
- **Mathematical Invariants:**
  - **Invariant 1 (Waterfall Balance Preservation):**
    $$Payment_{in} = \\Delta Fee_{paid} + \\Delta Interest_{paid} + \\Delta Principal_{paid} + Unapplied_{excess}$$
  - **Invariant 2 (Non-Negative Balances):** At no point may any bucket balance become negative.
  - **Invariant 3 (Anti-Pyramiding Invariant):** Current contractual installment paid in full $\\implies$ Zero new late fee assessment.
  - **Invariant 4 (Aging Bucket Monotonicity):**
    $$DPD = \\max(0, \\text{CurrentDate} - \\text{OldestUnsatisfiedDueDate})$$

### Phase 3: Develop (Divergent)
- **Waterfall Allocation Algorithm:**
  1. Input: `PaymentAmountCents`, `AccountBalances: {UnpaidFees, AccruedInterest, Principal, Unapplied}`.
  2. Step 1: Allocate to `AccruedInterest` up to total accrued.
  3. Step 2: Allocate to `Principal` up to current scheduled installment.
  4. Step 3: Allocate to `UnpaidFees` (if contractual and legal).
  5. Step 4: Allocate remainder to `PrincipalReduction` (curtailment).
  6. If overpaid, allocate remainder to `UnappliedFunds` (suspense account).

### Phase 4: Deliver (Convergent)
- **Executable Specification:**
  Supplies test suites, schema verifiers, and transaction validation logic for loan payment processing agents.

---

## Operational Guide & Instructions

### When to Apply
- Repayment microservice design in `zip-repayments`.
- Delinquency batch processing and charge-off transition workflows.
- Compliance audits of borrower payment application histories.

### Reference Waterfall Logic
```python
def allocate_payment_waterfall(payment_cents: int, balances: dict) -> dict:
    rem = payment_cents
    alloc = {"fee": 0, "interest": 0, "principal": 0, "unapplied": 0}
    
    # In Zip Standard Consumer Order: Interest -> Principal -> Fees -> Prepayment
    # 1. Interest
    interest_due = balances.get("accrued_interest_cents", 0)
    alloc["interest"] = min(rem, interest_due)
    rem -= alloc["interest"]
    
    # 2. Scheduled Principal
    principal_due = balances.get("scheduled_principal_cents", 0)
    alloc["principal"] = min(rem, principal_due)
    rem -= alloc["principal"]
    
    # 3. Unpaid Fees
    fees_due = balances.get("unpaid_fees_cents", 0)
    alloc["fee"] = min(rem, fees_due)
    rem -= alloc["fee"]
    
    # 4. Curtailment (Excess Principal)
    remaining_balance = balances.get("total_principal_cents", 0) - alloc["principal"]
    excess_principal = min(rem, remaining_balance)
    alloc["principal"] += excess_principal
    rem -= excess_principal
    
    # 5. Unapplied
    alloc["unapplied"] = rem
    assert sum(alloc.values()) == payment_cents
    return alloc
```

---

## Verification & Exit Criteria
- [ ] Conservation of funds: Sum of allocations equals payment input.
- [ ] Zero pyramiding: Timely contractual payments never trigger downstream late fees.
- [ ] DPD accurately tracked from oldest unsatisfied due date.
