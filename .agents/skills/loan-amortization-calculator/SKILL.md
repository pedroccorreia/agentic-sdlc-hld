---
name: Loan Amortization Calculator
description: Calculates loan amortization schedules, compounding interest, periodic principal reductions, and payoff quotes with fixed-point arithmetic adhering to US lending regulations.
---

# Loan Amortization Calculator Skill

## Purpose
Guide agents in generating, validating, and verifying loan amortization schedules, periodic compounding interest, monthly/weekly principal splits, and payoff calculations for consumer installment loans and BNPL products at Zip. Enforces exact mathematical precision with zero binary floating-point drift.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  In US consumer installment lending (under Reg Z / TILA), loan amortization schedules dictate the exact timing and proportion of payments allocated between principal reduction and interest charges. Discrepancies between loan servicing systems (e.g., legacy Azure LMS vs new GCP microservice) arise from differing compounding intervals, payment calendar rounding, leap year day-counts, and odd-first-period adjustments.
- **Legacy & Edge-Case Hazards:**
  1. *Binary Floating Point Drift:* Using standard IEEE-754 floats (`0.1 + 0.2 != 0.3`) causes penny drift across 12-to-60 month loan schedules.
  2. *Odd Days in First Period:* If the first payment occurs 45 days after origination instead of 30, simple amortizers miscalculate first-period interest.
  3. *Final Payment Truncation:* Rounding intermediate cents leads to under- or over-collecting the final balance.
  4. *Prepayment & Early Payoff Quotes:* Calculating payoff quotes as of date $T$ requires exact per-diem interest calculation without unearned future interest.

### Phase 2: Define (Convergent)
- **Mathematical Invariants:**
  - **Invariant 1 (Cent Summation):** $\\sum_{t=1}^{N} \\text{Principal}_t \\equiv \\text{Original Principal}$.
  - **Invariant 2 (Precision Type):** All monetary amounts MUST be represented as 64-bit signed integers (representing minor currency units / cents) or exact fixed-point `Decimal` with $\\ge 4$ internal fractional precision, rounded to 2 decimal places using Banker\'s Rounding (`ROUND_HALF_EVEN`) or Statutory Rounding.
  - **Invariant 3 (Periodic Payment Formula):**
    $$PMT = P \\times \\frac{r(1+r)^n}{(1+r)^n - 1}$$
    where $P$ is principal in cents, $r$ is periodic interest rate ($APR / \\text{periods per year}$), and $n$ is total payments.
  - **Invariant 4 (Payoff Invariant):**
    $$\\text{Payoff}(T) = \\text{Unpaid Principal Balance} + \\text{Accrued Interest}(T) + \\text{Unpaid Fees} - \\text{Unapplied Funds}$$

### Phase 3: Develop (Divergent)
- **Algorithmic Logic (Fixed-Point Amortization Engine):**
  1. Convert loan principal $P$ to integer cents: $P_{cents} = \\text{round}(P \\times 100)$.
  2. Compute exact base payment in cents using high-precision decimal arithmetic.
  3. Iterate from period $t = 1$ to $N-1$:
     - Accrue periodic interest: $I_t = \\text{round}(B_{t-1} \\times r)$.
     - Compute principal: $P_t = PMT - I_t$.
     - Update remaining balance: $B_t = B_{t-1} - P_t$.
  4. At period $N$ (Final Period):
     - Calculate remaining balance: $P_N = B_{N-1}$.
     - Accrue final interest: $I_N = \\text{round}(B_{N-1} \\times r)$.
     - Final payment $PMT_N = P_N + I_N$ (automatically absorbs intermediate penny rounding).

### Phase 4: Deliver (Convergent)
- **Executable Specification & Interface:**
  The skill delivers standard execution instructions, Python/Go reference code, and automated test vectors for validating loan servicing microservices.

---

## Operational Guide & Instructions

### When to Apply
- Authoring loan origination or repayment schedule microservices (`zip-repayments`).
- Generating amortization tables for borrower disclosures (TILA disclosure box).
- Validating payoff quote requests and early settlement calculations.
- Reverse-engineering legacy C# .NET amortization methods during Phase 1/3.

### Interface Schema (JSON Schema)
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "AmortizationScheduleRequest",
  "type": "object",
  "required": ["principal_cents", "annual_percentage_rate", "term_months", "payment_frequency", "origination_date", "first_payment_date"],
  "properties": {
    "principal_cents": { "type": "integer", "minimum": 100 },
    "annual_percentage_rate": { "type": "string", "pattern": "^[0-9]+(\\.[0-9]{1,4})?$" },
    "term_months": { "type": "integer", "minimum": 1, "maximum": 120 },
    "payment_frequency": { "type": "string", "enum": ["MONTHLY", "BIWEEKLY", "WEEKLY"] },
    "origination_date": { "type": "string", "format": "date" },
    "first_payment_date": { "type": "string", "format": "date" },
    "day_count_convention": { "type": "string", "enum": ["ACTUAL_365", "THIRTY_360", "ACTUAL_ACTUAL"], "default": "ACTUAL_365" }
  }
}
```

### Reference Implementation (Python Decimal Standard)
```python
from decimal import Decimal, ROUND_HALF_EVEN

def calculate_amortization_schedule(principal_cents: int, apr_str: str, term_months: int):
    P = Decimal(principal_cents)
    apr = Decimal(apr_str)
    r = apr / Decimal(12)
    n = Decimal(term_months)
    factor = (Decimal(1) + r) ** n
    pmt_raw = P * (r * factor) / (factor - Decimal(1))
    pmt_cents = int(pmt_raw.quantize(Decimal("1"), rounding=ROUND_HALF_EVEN))
    
    schedule = []
    balance = principal_cents
    for period in range(1, term_months):
        interest_cents = int((Decimal(balance) * r).quantize(Decimal("1"), rounding=ROUND_HALF_EVEN))
        principal_cents_period = pmt_cents - interest_cents
        balance -= principal_cents_period
        schedule.append({
            "period": period,
            "payment_cents": pmt_cents,
            "principal_cents": principal_cents_period,
            "interest_cents": interest_cents,
            "remaining_balance_cents": balance
        })
    final_interest_cents = int((Decimal(balance) * r).quantize(Decimal("1"), rounding=ROUND_HALF_EVEN))
    schedule.append({
        "period": term_months,
        "payment_cents": balance + final_interest_cents,
        "principal_cents": balance,
        "interest_cents": final_interest_cents,
        "remaining_balance_cents": 0
    })
    assert sum(s["principal_cents"] for s in schedule) == principal_cents
    return schedule
```

---

## Verification & Exit Criteria
- [ ] **Cent Summation Verified:** Total principal paid in schedule matches original loan principal to the cent ($0.00 drift).
- [ ] **No Floating-Point Operations:** Code audit verifies zero `float` or `double` datatypes.
- [ ] **Final Balance Zero:** Remaining balance at period $N$ is exactly $0$.
- [ ] **TILA Disclosures Compatible:** Sum of payments matches Finance Charge + Amount Financed.
