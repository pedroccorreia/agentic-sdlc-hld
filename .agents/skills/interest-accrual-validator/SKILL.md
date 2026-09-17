---
name: Interest Accrual Validator
description: Validates daily and periodic interest accruals against financial day-count conventions (Actual/365, 30/360, Rule of 78s, Actual/Actual) and handles leap-year accruals without penny leakage.
---

# Interest Accrual Validator Skill

## Purpose
Provide deterministic verification of daily per-diem interest accruals, monthly accrual sweeps, and statutory day-count conventions across the Zip Loan Management System, ensuring exact parity between interest accounting and ledger postings.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  In consumer credit, interest accrues daily on the unpaid principal balance. The method of counting elapsed days between transactions drastically changes the dollar amount accrued over time:
  - **Actual/365 (Fixed):** Divides annual rate by 365, regardless of leap year. Common in consumer revolving credit and installment lending.
  - **Actual/360 (Commercial / Money Market):** Divides annual rate by 360, resulting in 5.25 extra days of interest per year. Often prohibited or strictly regulated for US consumer loans.
  - **30/360 (Bond / Conventional):** Assumes 30 days per month and 360 days per year.
  - **Rule of 78s (Sum-of-Digits):** Front-loads precomputed interest. Banned in the US under federal law (HPA / TILA) for loans over 61 months and prohibited in most consumer installment contracts.
- **Divergence Risks:**
  - Leap-year Feb 29 day inclusion causing 1-day interest misstatement.
  - Rounding per-diem interest daily vs accumulating unrounded fractions until month-end statement generation.

### Phase 2: Define (Convergent)
- **Mathematical Invariants:**
  - **Invariant 1 (Per-Diem Interest Formula):**
    $$I_{daily} = \\text{Principal} \\times \\frac{\\text{APR}}{\\text{DayCountBasis}}$$
  - **Invariant 2 (Fractional Accumulator Invariant):** Servicing systems must maintain an unrounded fractional interest accumulator ($I_{unrounded}$ with $\\ge 8$ decimal digits). At each settlement or billing cut, integer cents are recognized:
    $$Cents_{posted} = \\lfloor I_{accumulated} \\rfloor$$
    and the fractional remainder ($I_{accumulated} - Cents_{posted}$) rolls forward to the next day.
  - **Invariant 3 (Rule of 78s Ban):** Automatic rejection of any precomputed sum-of-the-digits accrual schedule on consumer loans.

### Phase 3: Develop (Divergent)
- **Day-Count Logic Implementation:**
  - Compute day-delta $\\Delta D$ between $Date_{prev}$ and $Date_{current}$.
  - Actual/365: $\\Delta D / 365.0$.
  - 30/360 (US NASD): If day1 is 31, day1 = 30. If day2 is 31 and day1 >= 30, day2 = 30.
  - Leap year logic: Check whether leap year day (Feb 29) is traversed, adjust denominator if using Actual/Actual.

### Phase 4: Deliver (Convergent)
- **Executable Validation Engine:**
  Integrates as a pre-commit AST/spec check and runtime ledger audit tool for Shadow Gate reconciliation.

---

## Operational Guide & Instructions

### When to Apply
- Reviewing interest accrual engines in `zip-repayments`.
- Shadow gate reconciliation of monthly interest accrual batches between Azure and GCP.
- Verifying loan restructuring and modification interest adjustments.

### Reference Code (Fractional Accumulator Model)
```python
from decimal import Decimal, ROUND_FLOOR

class DailyAccrualEngine:
    def __init__(self, principal_cents: int, apr: Decimal, day_count_basis: int = 365):
        self.principal = Decimal(principal_cents)
        self.daily_rate = apr / Decimal(day_count_basis)
        self.accumulator = Decimal("0.0")

    def accrue_day(self) -> int:
        """Accrues one day of interest and returns posted integer cents."""
        daily_interest = self.principal * self.daily_rate
        self.accumulator += daily_interest
        cents_to_post = int(self.accumulator.quantize(Decimal("1"), rounding=ROUND_FLOOR))
        self.accumulator -= Decimal(cents_to_post)
        return cents_to_post
```

---

## Verification & Exit Criteria
- [ ] Day-count convention verified against loan agreement terms (Actual/365 standard).
- [ ] Fractional remainder never discarded; rolled forward to eliminate cumulative cent loss.
- [ ] Banned Rule of 78s patterns flagged with zero tolerance.
- [ ] Zero unexplained divergence during 365-day back-test against legacy ledger.
