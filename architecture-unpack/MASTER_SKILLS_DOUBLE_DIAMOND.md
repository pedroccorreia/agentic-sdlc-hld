# Zip Agentic Factory — Master Domain & Governance Skills Catalog
**Recursive Double Diamond Design Specifications**
**Project Catalyst · Agent Factory / LMS Rebuild**
**Date:** September 2, 2026
**Target Architecture:** Google Cloud Platform & Zip Sovereign Lending Assets

---

## 1. Executive Summary

This master document provides the authoritative, end-to-end design synthesis for all **23 proprietary domain, ledger, regulatory, and SDLC governance skills** in the Zip Agentic Factory. Each skill has been designed using the recursive **Double Diamond Design Process** (Discover, Define, Develop, Deliver) to ensure mathematical precision, statutory compliance, zero-drift financial integrity, and deterministic execution.

```
                  RECURSIVE DOUBLE DIAMOND FOR SKILLS
       ┌─────────────────────────┐   ┌─────────────────────────┐
       │       DIAMOND 1         │   │       DIAMOND 2         │
       │      PROBLEM SPACE      │   │      SOLUTION SPACE     │
       │  Discover  ➔   Define   │ ➔ │   Develop   ➔  Deliver  │
       │ (Divergent) (Convergent)│   │ (Divergent) (Convergent)│
       └─────────────────────────┘   └─────────────────────────┘
```

---

## 2. Master Skills Inventory & Classification

| # | Skill ID | Category | Runtime Substrate | MVP? | Primary Acting Personas | Core Invariant Enforced |
|---|---|---|:---:|:---:|---|---|
| 1 | `loan_amortization_calculator` | Lending Invariants | Universal / Both | ⭐ | `A2 Domain SME`, `C1 Impl Eng` | Cent summation: $\\sum P_t = P_0$; zero float drift |
| 2 | `interest_accrual_validator` | Lending Invariants | Universal / Both | ⭐ | `A2 Domain SME`, `D1 Spec Judge` | Actual/365 per-diem fractional rolling accumulator |
| 3 | `delinquency_waterfall_checker` | Lending Invariants | Universal / Both | ⭐ | `A2 Domain SME`, `C1 Impl Eng` | Strict statutory waterfall; anti-pyramiding fee protection |
| 4 | `merchant_fee_settler` | Lending Invariants | Universal / Both | | `A2 Domain SME`, `C1 Impl Eng` | Net disbursement balance: $GMV - Fees - Reserves = Payout$ |
| 5 | `credit_decisioning_scorer` | Lending Invariants | Universal / Both | | `A2 Domain SME`, `C1 Impl Eng` | Deterministic scoring; 1-4 statutory Adverse Action codes |
| 6 | `double_entry_balance_checker` | Banking Ledger | Universal / Both | ⭐ | `B2 Data Arch`, `D6 Recon Analyst` | $\\sum Debits \\equiv \\sum Credits$; zero unbalanced events |
| 7 | `zero_cent_drift_prover` | Banking Ledger | Universal / Both | ⭐ | `D6 Recon Analyst`, `B2 Data Arch` | Cent-for-cent ($0.00) parity against legacy Azure LMS |
| 8 | `bitemporal_schema_auditor` | Banking Ledger | Universal / Both | ⭐ | `B2 Data Arch` | Valid-time (business) vs System-time (assertion) isolation |
| 9 | `currency_precision_validator` | Banking Ledger | Agent Platform | ⭐ | `B2 Data Arch`, `D1 Spec Judge` | Zero IEEE-754 floats; mandatory integer cents or Decimal |
| 10 | `idempotent_backfill_designer` | Banking Ledger | Cloud Run BYOD | ⭐ | `C3 Backfill Eng`, `B2 Data Arch` | Idempotent restartability: $f(f(X)) = f(X)$; zero duplicate rows |
| 11 | `reg_z_tila_checker` | Regulatory Compliance | Universal / Both | ⭐ | `A3 Compliance`, `D4 Reg Verifier` | Actuarial APR tolerance: $|APR_{calc} - APR_{disc}| \\le 0.125\\%$ |
| 12 | `reg_b_ecoa_auditor` | Regulatory Compliance | Universal / Both | | `A3 Compliance`, `D4 Reg Verifier` | Zero prohibited attributes; 4/5ths disparate impact rule |
| 13 | `fdcpa_disclosure_scanner` | Regulatory Compliance | Universal / Both | ⭐ | `A3 Compliance`, `D4 Reg Verifier` | Mini-Miranda mandatory inclusion; 8am-9pm local call window |
| 14 | `pci_dss_tokenization_verifier` | Regulatory Compliance | Agent Platform | ⭐ | `A3 Compliance`, `D2 Security Red Team` | Zero raw PAN (Luhn check) or CVV/CVC in application tier |
| 15 | `statutory_clause_mapper` | Regulatory Compliance | Universal / Both | ⭐ | `A3 Compliance`, `A5 Req Arch` | 100% bilateral PRD-to-statute traceability matrix |
| 16 | `zip_coding_standards_linter` | SDLC Governance | Agent Platform | ⭐ | `C4 Systems Eng`, `C1 Impl Eng` | Clean architecture inward dependencies; structured JSON logs |
| 17 | `isolated_tdd_test_generator` | SDLC Governance | Agent Platform | ⭐ | `C2 Test Eng (Isolated)` | Zero-code access; tests derived strictly from PRD assertions |
| 18 | `ast_conformance_differ` | SDLC Governance | Agent Platform | ⭐ | `D1 Spec Judge` | Bidirectional AST diff: "Nothing more, nothing less" |
| 19 | `side_effect_suppression_filter` | SDLC Governance | Cloud Run BYOD | ⭐ | `D6 Recon Analyst`, `D5 SRE` | 100% outbound payment/credit rail write suppression in shadow |
| 20 | `shadow_divergence_classifier` | SDLC Governance | Universal / Both | ⭐ | `D6 Recon Analyst`, `A2 Domain SME` | 4-class taxonomy: GCP Bug, Azure Bug, Rounding, Intentional |
| 21 | `adr_extractor` | SDLC Governance | Agent Platform | ⭐ | `E2 Doc Curator`, `B1 Software Arch` | Harvests resolved dispute threads into permanent MADR records |
| 22 | `autonomy_rung_evaluator` | SDLC Governance | Universal / Both | ⭐ | `F3 Autonomy Governor` | 200 consecutive clean runs for L4; instant L2 demotion on bug |
| 23 | `token_unit_cost_calculator` | SDLC Governance | Universal / Both | ⭐ | `F4 Token Econ Analyst` | Unit cost drops $\\ge 30\\%$ per cycle via cache & deduplication |

---

## 3. Detailed Double Diamond Specifications


### 1. Loan Amortization Calculator (`loan_amortization_calculator`)

*Source: [`.agents/skills/loan-amortization-calculator/SKILL.md`](.agents/skills/loan-amortization-calculator/SKILL.md)*

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

---

### 2. Interest Accrual Validator (`interest_accrual_validator`)

*Source: [`.agents/skills/interest-accrual-validator/SKILL.md`](.agents/skills/interest-accrual-validator/SKILL.md)*

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

---

### 3. Delinquency Waterfall Allocator (`delinquency_waterfall_checker`)

*Source: [`.agents/skills/delinquency-waterfall-checker/SKILL.md`](.agents/skills/delinquency-waterfall-checker/SKILL.md)*

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

---

### 4. Merchant Fee & MDR Settler (`merchant_fee_settler`)

*Source: [`.agents/skills/merchant-fee-settler/SKILL.md`](.agents/skills/merchant-fee-settler/SKILL.md)*

# Merchant Fee & MDR Settler Skill

## Purpose
Orchestrate, calculate, and reconcile merchant transaction fees, Merchant Discount Rates (MDR), promotional subventions, and net settlement disbursements for retail and e-commerce partners participating in the Zip Merchant Engine.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  When a Zip consumer completes a BNPL purchase at a merchant (e.g., \$100 purchase at 4% MDR + \$0.30 fixed fee), Zip pays the merchant a net settlement:
  $$\\text{Net Disbursement} = \\text{Gross GMV} - (\\text{GMV} \\times \\text{MDR}\\%) - \\text{PerTransactionFee} - \\text{RefundDeductions} - \\text{ChargebackReserve}$$
- **Discrepancy Hazards:**
  - Rounding MDR fee per item vs rounding on the aggregated daily batch settlement.
  - Prorated merchant fee clawbacks during partial consumer refunds.
  - Multi-currency merchant settlements across cross-border subsidiaries.

### Phase 2: Define (Convergent)
- **Mathematical Invariants:**
  - **Invariant 1 (Net Settlement Equation):**
    $$NetDisbursement = \\sum GMV - \\sum MDRFee - \\sum FlatFees - \\sum Chargebacks - \\sum RefundClawbacks \\pm ReserveAdjustment$$
  - **Invariant 2 (Fee Rounding Standard):** Fee amounts must be calculated at the transaction level using Banker\'s Rounding (`ROUND_HALF_EVEN`) to the cent, guaranteeing that batch sums equal ledger journal lines.
  - **Invariant 3 (Refund Proration):**
    $$MDR_{refunded} = \\text{round}(MDR_{original} \\times \\frac{RefundAmount}{GrossAmount})$$

### Phase 3: Develop (Divergent)
- **Settlement Architecture:**
  - Process daily cutoff ledger events for merchant $M$.
  - Group authorized transactions, settled captures, full/partial refunds, and chargebacks.
  - Compute fee deductions using merchant contractual tier contract.
  - Generate double-entry settlement voucher:
    - Debit: Merchant Accounts Payable (\$95.70)
    - Debit: Merchant Fee Revenue (\$4.30)
    - Credit: Zip Cash Clearing Account (\$95.70)
    - Credit: Accounts Receivable (\$100.00)

### Phase 4: Deliver (Convergent)
- **Operational Package:**
  Provides calculation harnesses, merchant reconciliation extract validators, and daily automated balancing scripts.

---

## Operational Guide & Instructions

### When to Apply
- Implementing `zip-merchant-plugin` services.
- Reconciling daily ACH / wire disbursement files sent to merchant banking partners.
- Validating merchant invoice statements and dispute settlements.

### Reference Calculation (Python)
```python
from decimal import Decimal, ROUND_HALF_EVEN

def calculate_merchant_settlement(gross_cents: int, mdr_rate: Decimal, flat_fee_cents: int) -> dict:
    gross = Decimal(gross_cents)
    mdr_fee_raw = gross * mdr_rate
    mdr_fee_cents = int(mdr_fee_raw.quantize(Decimal("1"), rounding=ROUND_HALF_EVEN))
    total_fee_cents = mdr_fee_cents + flat_fee_cents
    net_cents = gross_cents - total_fee_cents
    
    assert net_cents + total_fee_cents == gross_cents
    return {
        "gross_cents": gross_cents,
        "mdr_fee_cents": mdr_fee_cents,
        "flat_fee_cents": flat_fee_cents,
        "total_fee_cents": total_fee_cents,
        "net_disbursement_cents": net_cents
    }
```

---

## Verification & Exit Criteria
- [ ] Net disbursement + total fees equals gross GMV for every settlement batch.
- [ ] Fee calculations match contract rate card precision.
- [ ] Double-entry ledger vouchers balance exactly to \$0.00.

---

### 5. Underwriting Decisioning Scorer (`credit_decisioning_scorer`)

*Source: [`.agents/skills/credit-decisioning-scorer/SKILL.md`](.agents/skills/credit-decisioning-scorer/SKILL.md)*

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

---

### 6. Double-Entry Ledger Integrity Verifier (`double_entry_balance_checker`)

*Source: [`.agents/skills/double-entry-balance-checker/SKILL.md`](.agents/skills/double-entry-balance-checker/SKILL.md)*

# Double-Entry Ledger Integrity Verifier Skill

## Purpose
Enforce core banking double-entry bookkeeping invariants across all financial ledger schemas, transaction posting services, and migration backfills in the Zip Loan Management System. Guarantees that every financial event is balanced to exactly $0.00.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Single-entry systems or loosely coupled CRUD databases record balance updates as mutations on an account row (`UPDATE accounts SET balance = balance + ?`). In financial institutions, this creates unrecoverable auditing disasters: if a write fails halfway, money vanishes or appears from nowhere.
- **Core Banking Integrity Rules:**
  - Every transaction consists of a balanced journal entry containing at least two lines (one debit, one credit).
  - In traditional banking:
    - **Assets & Expenses:** Increased by Debits, decreased by Credits.
    - **Liabilities, Equity, & Revenue:** Increased by Credits, decreased by Debits.
  - Multi-entity transactions (e.g., consumer repayment: cash clearing debit, interest income credit, loan principal asset credit) must balance across the transaction boundary.

### Phase 2: Define (Convergent)
- **Mathematical Invariants:**
  - **Invariant 1 (Fundamental Double-Entry Invariant):** For any transaction $T$ composed of $m$ journal entry lines:
    $$\\sum_{i=1}^{m} \\text{DebitAmount}_i \\equiv \\sum_{i=1}^{m} \\text{CreditAmount}_i \\iff \\sum_{i=1}^{m} (\\text{DebitAmount}_i - \\text{CreditAmount}_i) = 0$$
  - **Invariant 2 (System Conservation of Value):** Across the entire ledger database at any timestamp $t$:
    $$\\sum_{all\ entries} \\text{Debits} \\equiv \\sum_{all\ entries} \\text{Credits}$$
  - **Invariant 3 (Immutability):** Posted journal entries are append-only. Corrections must occur via explicit reversal or adjustment entries, never SQL `UPDATE` or `DELETE`.

### Phase 3: Develop (Divergent)
- **Verification Engine Architecture:**
  - **Pre-Commit Verification:** AST / middleware hooks validate incoming transaction payloads before database execution.
  - **Database Constraint Verification:** PostgreSQL check constraints and triggers verify sum of debits == sum of credits inside the ACID transaction.
  - **Periodic Ledger Reconciliation Query:** Automated PromQL and SQL integrity scanner scanning table balances:
    ```sql
    SELECT transaction_id, 
           SUM(debit_amount_cents) as total_debit, 
           SUM(credit_amount_cents) as total_credit,
           SUM(debit_amount_cents) - SUM(credit_amount_cents) as imbalance
    FROM ledger_entries
    GROUP BY transaction_id
    HAVING SUM(debit_amount_cents) <> SUM(credit_amount_cents);
    ```
    Must always return zero rows.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Continuous ledger audit harness, migration validator, and PostgreSQL assertion templates.

---

## Operational Guide & Instructions

### When to Apply
- Reviewing schema or code for `zip-repayments` and core ledger microservices.
- Auditing transaction endpoints prior to production deployment.
- Verifying historical ledger migration backfill integrity.

### Reference Assertion Template
```python
def verify_journal_entry(lines: list[dict]) -> bool:
    total_debit = sum(line["amount_cents"] for line in lines if line["direction"] == "DEBIT")
    total_credit = sum(line["amount_cents"] for line in lines if line["direction"] == "CREDIT")
    if total_debit != total_credit:
        raise ValueError(
            f"Double-entry violation! Debits ({total_debit}) != Credits ({total_credit}). "
            f"Net imbalance: {total_debit - total_credit} cents"
        )
    return True
```

---

## Verification & Exit Criteria
- [ ] Every financial event has equal debits and credits.
- [ ] No direct `UPDATE` queries exist on historical ledger entry balance columns.
- [ ] Continuous audit query returns 0 unbalanced transactions.

---

### 7. Cent-for-Cent ($0.00) Drift Prover (`zero_cent_drift_prover`)

*Source: [`.agents/skills/zero-cent-drift-prover/SKILL.md`](.agents/skills/zero-cent-drift-prover/SKILL.md)*

# Cent-for-Cent ($0.00) Drift Prover Skill

## Purpose
Operate as the mathematical proof engine for Phase 6 (Shadow Traffic Gate), executing automated, high-throughput comparison of millions of loan records, payment transactions, and balance calculations between the legacy Azure LMS and the new GCP microservices, enforcing the non-negotiable exit gate: Zero Unexplained Divergence.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Replacing an in-flight core loan servicing system without disrupting business operations requires a shadow run (dual-run) where real-world traffic is processed concurrently by both systems. Even tiny differences in rounding rules, timestamp precision, or interest compounding create divergences that accumulate into tens of thousands of dollars of balance drift over time.
- **Divergence Causes:**
  1. *Timestamp Jitter:* Azure server clock differs by 30ms from GCP, causing an event occurring at 23:59:59.990 to record in different calendar days.
  2. *Legacy Bug Discrepancies:* Azure LMS contains known bugs (e.g. leap year day drop). When GCP computes the mathematically correct value, an apparent divergence is triggered.
  3. *Rounding Truncation:* Intermediate calculations rounded to 2 decimal places instead of 4 decimal places.

### Phase 2: Define (Convergent)
- **Mathematical Invariants:**
  - **Invariant 1 (Zero-Cent Drift Condition):**
    $$\\forall \\text{ loan } L, \\forall \\text{ date } D: | \\text{Balance}_{GCP}(L, D) - \\text{Balance}_{Azure}(L, D) | = \\$0.00$$
    Unless explicitly accounted for by a verified, documented legacy bug dispensation.
  - **Invariant 2 (Explanatory Completeness):**
    $$\\text{Unexplained Divergences} \\equiv 0$$
    Every single discrepancy must be automatically or manually attributed to one of the 4 standard taxonomy classes.

### Phase 3: Develop (Divergent)
- **BigQuery High-Throughput Reconciliation Pipeline:**
  - Ingest dual-run event streams from Pub/Sub into BigQuery shadow datasets.
  - Partition by `loan_id` and cluster by `transaction_date`.
  - Execute full outer join reconciliation:
    ```sql
    SELECT 
      COALESCE(gcp.loan_id, az.loan_id) AS loan_id,
      gcp.balance_cents AS gcp_balance,
      az.balance_cents AS azure_balance,
      (gcp.balance_cents - az.balance_cents) AS delta_cents,
      CASE 
        WHEN gcp.balance_cents = az.balance_cents THEN 'MATCH'
        WHEN az.known_bug_flag IS TRUE THEN 'CLASS_2_AZURE_BUG'
        WHEN ABS(gcp.balance_cents - az.balance_cents) <= 1 THEN 'CLASS_3_ROUNDING'
        ELSE 'UNEXPLAINED'
      END AS status
    FROM gcp_shadow_ledger gcp
    FULL OUTER JOIN azure_legacy_ledger az
      ON gcp.loan_id = az.loan_id AND gcp.effective_date = az.effective_date
    WHERE gcp.balance_cents <> az.balance_cents;
    ```

### Phase 4: Deliver (Convergent)
- **Deliverable:** Automated drift reporting dashboard, BigQuery SQL reconciliation jobs, and threshold alerts for executive cutover sign-off.

---

## Operational Guide & Instructions

### When to Apply
- Stage 5 & 6 shadow dual-run validation.
- Daily reconciliation of shadow ledger balances against production Azure dumps.
- Cutover readiness verification for Delivery Lead Eric Blassberg and CISO Chris Nelms.

---

## Verification & Exit Criteria
- [ ] Zero unexplained divergences across a 14-day continuous evaluation window.
- [ ] 100% of explained variances mapped to approved ADRs or legacy bug logs.
- [ ] Reconciliation pipeline processes 10,000 transactions/sec within a 5-minute latency SLA.

---

### 8. Bitemporal Schema Auditor (`bitemporal_schema_auditor`)

*Source: [`.agents/skills/bitemporal-schema-auditor/SKILL.md`](.agents/skills/bitemporal-schema-auditor/SKILL.md)*

# Bitemporal Schema Auditor Skill

## Purpose
Ensure all financial ledger tables, loan accounts, payment history, and credit line records adhere to bitemporal data architecture, enabling deterministic historical replay, retroactive corrections without audit trail mutation, and point-in-time state reconstruction.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  In financial accounting, time has two distinct dimensions:
  1. **Valid-Time (Effective Time):** When an event actually took place in the real world (e.g., a borrower made an ACH payment on Friday).
  2. **Transaction-Time (System Time):** When the database actually recorded that event (e.g., the ACH file was received and posted on Monday morning).
  Without bitemporal modeling, backdated adjustments (such as a reversed payment from 10 days ago) overwrite current balances, making it impossible to answer: *"What did we think the customer's balance was on Sunday?"* vs *"What was the true balance on Sunday given what we know today?"*

### Phase 2: Define (Convergent)
- **Schema Invariants:**
  - **Invariant 1 (Bitemporal Column Standard):** Every ledger and state table MUST have:
    - `valid_from` & `valid_to` (`valid_period` range in PostgreSQL / Spanner)
    - `system_from` & `system_to` (`system_period` range, managed by immutable system clock)
  - **Invariant 2 (System Time Monotonicity):** `system_from` is assigned strictly by `CURRENT_TIMESTAMP` at insert time; `system_to` defaults to `infinity` and is closed only upon supersession.
  - **Invariant 3 (No Historical Overwrites):** Updating a past event inserts a new row with the corrected `valid_time` and a new `system_time`, setting `system_to = NOW()` on the prior record.

### Phase 3: Develop (Divergent)
- **PostgreSQL / Spanner Temporal Pattern:**
  ```sql
  CREATE TABLE loan_balance_history (
    loan_id VARCHAR(64) NOT NULL,
    balance_cents BIGINT NOT NULL,
    -- Valid Time (Effective in business reality)
    valid_from TIMESTAMPTZ NOT NULL,
    valid_to TIMESTAMPTZ NOT NULL DEFAULT 'infinity',
    -- Transaction Time (Recorded in system reality)
    system_from TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    system_to TIMESTAMPTZ NOT NULL DEFAULT 'infinity',
    CONSTRAINT balance_non_negative CHECK (balance_cents >= 0),
    PRIMARY KEY (loan_id, valid_from, system_from)
  );
  ```
- **Point-in-Time Query Pattern (As-Of As-At):**
  ```sql
  -- Balance as of business date V, as known to the system at time T
  SELECT balance_cents 
  FROM loan_balance_history
  WHERE loan_id = :loan_id
    AND valid_from <= :valid_time AND :valid_time < valid_to
    AND system_from <= :system_time AND :system_time < system_to;
  ```

### Phase 4: Deliver (Convergent)
- **Deliverable:** DDL linters, AST verification rules for SQL queries, and audit certification scripts.

---

## Operational Guide & Instructions

### When to Apply
- Reviewing schema DDL for PostgreSQL or Spanner ledger services.
- Designing loan balance history and transaction recording tables.
- Building historical audit replay and dispute reconstruction endpoints.

---

## Verification & Exit Criteria
- [ ] All financial state tables include dual temporal ranges (`valid_period` and `system_period`).
- [ ] Point-in-time queries return identical reproducible states across successive runs.
- [ ] No physical `DELETE` queries permitted on bitemporal entities.

---

### 9. Currency Precision Guard (`currency_precision_validator`)

*Source: [`.agents/skills/currency-precision-validator/SKILL.md`](.agents/skills/currency-precision-validator/SKILL.md)*

# Currency Precision Guard Skill

## Purpose
Enforce zero-tolerance static and AST linting rules across all codebase repositories, preventing engineers or code-generation agents from introducing binary floating-point numbers (`float`, `double`, `float32`, `float64`) for currency balances, interest calculations, or fee allocations.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Standard hardware floating-point representations (IEEE-754) represent fractions as binary sums ($2^{-n}$). Most decimal fractions cannot be represented exactly in binary:
  ```python
  0.1 + 0.2 == 0.30000000000000004  # True in IEEE-754
  ```
  In a lending platform handling millions of daily transactions, cumulative floating-point errors create mysterious ledger imbalances, breaking double-entry proofs and triggering regulatory scrutiny.

### Phase 2: Define (Convergent)
- **AST Rules & Invariants:**
  - **Rule 1 (Data Type Ban):** Ban `float`, `double`, `float32`, `float64` in any struct, class, function parameter, or database column representing money.
  - **Rule 2 (Approved Representation):**
    - Option A: Signed integer cents (`int64` / `BIGINT`), e.g., $100.50 represented as `10050`.
    - Option B: High-precision decimal string / fixed-point type (`decimal.Decimal` in Python, `decimal.Decimal` in C#, `shopspring/decimal` in Go, `NUMERIC(18, 4)` in SQL).
  - **Rule 3 (Division Guard):** Every division operation involving currency must explicitly declare a rounding mode (e.g. `ROUND_HALF_EVEN`).

### Phase 3: Develop (Divergent)
- **Python / Go AST Scanner Implementation:**
  Inspects syntax trees during Phase 3 build and Phase 4 review:
  ```python
  import ast

  class CurrencyPrecisionVisitor(ast.NodeVisitor):
      def visit_Call(self, node):
          # Detect float(x)
          if isinstance(node.func, ast.Name) and node.func.id == "float":
              raise SyntaxError(f"Prohibited use of float() on line {node.lineno}")
          self.generic_visit(node)

      def visit_BinOp(self, node):
          # Detect binary division / without Decimal quantize
          if isinstance(node.op, ast.Div):
              pass # Flag division requiring Decimal
          self.generic_visit(node)
  ```

### Phase 4: Deliver (Convergent)
- **Deliverable:** Integrated pre-commit hook, CI/CD Cloud Build linter step, and ADK agent capability.

---

## Operational Guide & Instructions

### When to Apply
- Stage 3 code generation: run immediately after code authoring.
- Stage 4 review: block merge if any floating-point type is detected in financial paths.
- Reverse-engineering legacy C# .NET code: flag any legacy floats for conversion to integer cents.

---

## Verification & Exit Criteria
- [ ] 100% of money fields represented as integer cents or high-precision Decimal.
- [ ] Zero instances of `float`, `double`, or `float64` in financial packages.
- [ ] CI pipeline fails with exit code 1 if floating-point division is detected without explicit rounding.

---

### 10. Idempotent Data Backfill Engine (`idempotent_backfill_designer`)

*Source: [`.agents/skills/idempotent-backfill-designer/SKILL.md`](.agents/skills/idempotent-backfill-designer/SKILL.md)*

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

---

### 11. Truth in Lending Act (Reg Z) APR Checker (`reg_z_tila_checker`)

*Source: [`.agents/skills/reg-z-tila-checker/SKILL.md`](.agents/skills/reg-z-tila-checker/SKILL.md)*

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

---

### 12. Equal Credit Opportunity Act (Reg B) Auditor (`reg_b_ecoa_auditor`)

*Source: [`.agents/skills/reg-b-ecoa-auditor/SKILL.md`](.agents/skills/reg-b-ecoa-auditor/SKILL.md)*

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

---

### 13. Fair Debt Collection Practices Act (FDCPA) Scanner (`fdcpa_disclosure_scanner`)

*Source: [`.agents/skills/fdcpa-disclosure-scanner/SKILL.md`](.agents/skills/fdcpa-disclosure-scanner/SKILL.md)*

# Fair Debt Collection Practices Act (FDCPA) Scanner Skill

## Purpose
Audit automated customer collection communications, outbound SMS/email notifications, IVR dialers, and debt recovery workflows against the Fair Debt Collection Practices Act (FDCPA - 15 U.S.C. § 1692) and CFPB Regulation F (12 CFR Part 1006).

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Statutory Rules & Restrictions:**
  - **Permissible Calling / Contact Hours (15 U.S.C. § 1692c(a)(1)):** Outbound communications cannot occur before 8:00 AM or after 9:00 PM in the **borrower's local time zone**.
  - **Mini-Miranda Disclosure (15 U.S.C. § 1692e(11)):**
    - Initial communication must state: *"This is an attempt to collect a debt and any information obtained will be used for that purpose."*
    - Subsequent communications must state: *"This communication is from a debt collector."*
  - **Cease & Desist / Representation Flags:** Immediate cessation of collection communications upon receipt of written refusal to pay or attorney representation notification.
  - **Regulation F Frequency Limits (7-in-7 Rule):** Maximum of 7 telephone calls placed within a 7-day period regarding a particular debt.

### Phase 2: Define (Convergent)
- **Invariants & Constraints:**
  - **Invariant 1 (Time Zone Window):**
    $$08:00 \\le \\text{LocalTime}(\\text{RecipientZipCode}, \\text{Timestamp}) \\le 21:00$$
  - **Invariant 2 (Disclosure Completeness):** Initial collection messages must match the statutory Mini-Miranda regex.
  - **Invariant 3 (Hard Stop on Cease/Attorney):**
    $$\\text{AccountStatus} \\in \\{\\text{CEASE_AND_DESIST}, \\text{ATTORNEY_REPRESENTED}\\} \\implies \\text{BlockOutboundContact} = \\text{TRUE}$$

### Phase 3: Develop (Divergent)
- **Scanner Implementation:**
  - Text pattern matching across message templates for mandatory disclosures.
  - Contact scheduler policy verifying recipient zip code to local solar time conversion before scheduling SMS or push notifications.
  - Integration with borrower contact preference and legal hold flags.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Static template scanner, runtime dispatch interceptor, and communication audit logger.

---

## Operational Guide & Instructions

### When to Apply
- Reviewing customer communication templates and collection messaging services.
- Designing debt recovery and late payment notification workflows in `zip-repayments`.
- Pre-release compliance sign-off for consumer servicing agents.

---

## Verification & Exit Criteria
- [ ] All collection communications contain compliant Mini-Miranda disclosures.
- [ ] No messages scheduled outside 8:00 AM - 9:00 PM borrower local time.
- [ ] Hard stop verified: Zero communications sent to accounts with active legal holds or cease notices.

---

### 14. PCI DSS Cardholder Data Tokenization Verifier (`pci_dss_tokenization_verifier`)

*Source: [`.agents/skills/pci-dss-tokenization-verifier/SKILL.md`](.agents/skills/pci-dss-tokenization-verifier/SKILL.md)*

# PCI DSS Cardholder Data Tokenization Verifier Skill

## Purpose
Enforce PCI DSS (Payment Card Industry Data Security Standard v4.0) compliance across all microservices, API schemas, log aggregators, and database migrations, strictly verifying that raw credit/debit card numbers (PAN) and CVV codes are tokenized at the edge and never enter the internal Zip application tier.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **PCI DSS v4.0 Scope & Requirements:**
  - Storing raw PAN requires expensive, high-friction Cardholder Data Environment (CDE) controls (Req 3, Req 8, HSMs, network isolation).
  - Storing Sensitive Authentication Data (SAD - CVV, CVV2, PIN blocks) after authorization is **strictly prohibited under any circumstances**.
  - **Tokenization Strategy:** Zip leverages edge payment gateway tokenization (e.g., Stripe / Checkout / Adyen client-side SDKs). Zip systems only ever receive and store opaque tokens (e.g., `tok_1N4u...`) and non-sensitive card metadata (card brand, last 4 digits, expiry month/year).
- **Leakage Vectors:**
  - Raw cardholder numbers accidentally logged in HTTP request bodies or Cloud Logging standard output.
  - Database schema column named `card_number` using plain string storage.
  - Developer debug dumps containing unmasked card data.

### Phase 2: Define (Convergent)
- **Security Invariants:**
  - **Invariant 1 (Zero Raw PAN Invariant):**
    $$\\forall \\text{ string } S \\text{ in logs, db, payloads}: \\text{LuhnCheck}(S) \\implies \\text{REJECT & ALERT}$$
  - **Invariant 2 (Banned Storage of SAD):** Zero database columns, caches, or structs storing CVV / CVC / PIN.
  - **Invariant 3 (Masked Presentation):** Maximum display format is First-6 and Last-4 (`BIN******1234`), with middle digits masked.

### Phase 3: Develop (Divergent)
- **Luhn Algorithm & Card Regex Scanner:**
  Scans git commits, Docker images, test fixtures, and Cloud SQL schemas:
  ```python
  import re

  CARD_REGEX = re.compile(r"\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})\b")

  def luhn_valid(n_str: str) -> bool:
      digits = [int(c) for c in n_str]
      for i in range(len(digits) - 2, -1, -2):
          digits[i] = digits[i] * 2 if digits[i] * 2 < 10 else digits[i] * 2 - 9
      return sum(digits) % 10 == 0

  def scan_content_for_pan(content: str):
      matches = CARD_REGEX.findall(content)
      for m in matches:
          if luhn_valid(m):
              raise SecurityError(f"CRITICAL PCI DSS VIOLATION: Raw PAN detected: {m[:4]}...{m[-4:]}")
  ```

### Phase 4: Deliver (Convergent)
- **Deliverable:** SAST plugin rule, Cloud Logging redaction filter, and schema DDL auditor.

---

## Operational Guide & Instructions

### When to Apply
- Stage 3 code generation: automated check on all repository files.
- Stage 4 review: Security Red Team and CISO verification.
- Stage 6 shadow traffic: verify mirrored payload scrubbing.

---

## Verification & Exit Criteria
- [ ] Zero valid Luhn numbers found across all repository source code, configs, or test data.
- [ ] No database columns storing CVV or unmasked card numbers.
- [ ] Cloud Logging sink configured with automated regex masking for card patterns.

---

### 15. Statutory Clause-to-Code Traceability Mapper (`statutory_clause_mapper`)

*Source: [`.agents/skills/statutory-clause-mapper/SKILL.md`](.agents/skills/statutory-clause-mapper/SKILL.md)*

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

---

### 16. Zip SDLC Code Quality & Architectural Linter (`zip_coding_standards_linter`)

*Source: [`.agents/skills/zip-coding-standards-linter/SKILL.md`](.agents/skills/zip-coding-standards-linter/SKILL.md)*

# Zip SDLC Code Quality & Architectural Linter Skill

## Purpose
Enforce house engineering standards, boundary isolation, domain-driven design layer separation, structured JSON logging, and explicit error wrapping across all generated code in the Zip Agentic Factory.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  AI code generation agents left to generic defaults produce disparate styles, inconsistent error handling, leaky database abstractions into HTTP controllers, and unparseable log strings. In an enterprise system, this technical debt quickly makes the codebase unmaintainable and breaks production observability.
- **House Style Hazards:**
  - Ignoring errors or using bare `except: pass`.
  - Leaking database SQL models directly into API response payloads.
  - Using unstructured string formatting (`log.Printf("User %d did %s")`) instead of structured key-value JSON logging.
  - Lack of context propagation (`context.Context` in Go / `asyncio` context in Python).

### Phase 2: Define (Convergent)
- **Architecture Invariants:**
  - **Invariant 1 (Clean Architecture Layers):** Presentation (HTTP/gRPC) -> Application/Use-Case -> Domain -> Infrastructure. Dependencies MUST point inward. Presentation never touches Database Repositories directly.
  - **Invariant 2 (Explicit Error Wrapping):** Every error must be wrapped with domain context (`fmt.Errorf("amortization failed: %w", err)` in Go; custom exception hierarchies in Python).
  - **Invariant 3 (Structured Observability):** All logs must output structured JSON containing `trace_id`, `span_id`, `service`, `account_id` (pseudonymized), and `event_type`.

### Phase 3: Develop (Divergent)
- **Linter Rule Sets (golangci-lint / flake8 / ruff custom plugins):**
  - Layer boundary import checker: `pkg/api` cannot import `pkg/db`.
  - Context enforcement: Public functions must accept `ctx context.Context` as first parameter.
  - Banned standard library loggers in favor of zap / slog / structlog.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Configured linter rulesets (`.golangci.yml`, `pyproject.toml`), pre-commit hooks, and automated PR review feedback.

---

## Operational Guide & Instructions

### When to Apply
- Stage 3 code generation: run immediately after code authoring.
- Stage 4 review: automated code quality gating.
- Reverse-engineering legacy C# code: enforce clean architecture when porting to Go.

---

## Verification & Exit Criteria
- [ ] Clean architecture layer imports verified.
- [ ] 100% of logs conform to structured JSON schema.
- [ ] Zero unhandled errors or swallowed exceptions.

---

### 17. Spec-Derived Isolated TDD Test Authoring (`isolated_tdd_test_generator`)

*Source: [`.agents/skills/isolated-tdd-test-generator/SKILL.md`](.agents/skills/isolated-tdd-test-generator/SKILL.md)*

# Spec-Derived Isolated TDD Test Authoring Skill

## Purpose
Operationalize Zip Design Principle 2.1 (*"Author and judge are never the same persona"*) by generating rigorous, adversarial test suites strictly derived from the High-Definition PRD specifications, operating in complete isolation from the implementation code.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  When an AI agent writes both implementation code and unit tests, it inevitably encodes its own bugs, misunderstandings, and hallucinations as expected test behavior. The resulting test suite passes with 100% green coverage, creating an illusion of quality while failing basic real-world requirements.
- **Isolation Principle:**
  - The Isolated Test Engineer (`C2`) is provided **only**:
    1. The approved High-Definition PRD specification.
    2. Input/Output schemas and interface contracts.
    3. Regulatory and domain invariant requirements.
  - The implementation source code is **completely withheld**.

### Phase 2: Define (Convergent)
- **Test Generation Invariants:**
  - **Invariant 1 (Black-Box Isolation):** Zero read access to implementation repository paths during test generation.
  - **Invariant 2 (Three-Tier Test Suite):**
    1. *Happy Path Conformance:* Tests all documented specification scenarios.
    2. *Boundary & Edge Cases:* Extreme dates (Feb 29, Dec 31), maximum credit limits, zero dollar balances, odd-day intervals.
    3. *Negative & Adversarial Paths:* Malformed payloads, SQL injection tokens, unauthorized actors, duplicate event IDs.
  - **Invariant 3 (Property-Based Invariants):** Hypotheses asserting mathematical laws (e.g., $PMT \\times n \\ge Principal$).

### Phase 3: Develop (Divergent)
- **Test Harness Generation Strategy:**
  - Parse PRD assertions into test scenarios.
  - Generate contract mocks using OpenAPI / gRPC Protobuf schemas.
  - Implement property-based test suites using `hypothesis` (Python) or `testing/quick` (Go).
  - Execute test suite against candidate implementation inside an ephemeral sandbox.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Isolated test suite repository, mock service stubs, and test execution report.

---

## Operational Guide & Instructions

### When to Apply
- Stage 2 Dispatch -> Stage 3 Build: Spawned in parallel with Implementation Engineer (`C1`).
- Generating adversarial test suites for loan servicing logic.
- Verifying external API contract compliance.

---

## Verification & Exit Criteria
- [ ] Test suite derived 100% from PRD assertions without implementation knowledge.
- [ ] At least 30% of test cases cover boundary, extreme, and negative scenarios.
- [ ] Property-based testing validates core mathematical invariants across 1,000 randomized iterations.

---

### 18. AST Spec Conformance Diff Analyzer (`ast_conformance_differ`)

*Source: [`.agents/skills/ast-conformance-differ/SKILL.md`](.agents/skills/ast-conformance-differ/SKILL.md)*

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

---

### 19. Shadow Rail Side-Effect Suppression Filter (`side_effect_suppression_filter`)

*Source: [`.agents/skills/side-effect-suppression-filter/SKILL.md`](.agents/skills/side-effect-suppression-filter/SKILL.md)*

# Shadow Rail Side-Effect Suppression Filter Skill

## Purpose
Safely execute live shadow traffic mirroring on financial microservices without duplicating external real-world side effects. Suppresses payment rail debits, card processing calls, credit bureau reporting, and customer communications while capturing and recording the intended actions for full ledger comparison.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  During Phase 6 (Shadow Traffic Gate), live production traffic is mirrored from the legacy Azure LMS to the new GCP microservices.
  - If a mirrored payment request executes in GCP, it must compute interest, reduce balance, and record journal entries.
  - **HOWEVER:** It must **NEVER** fire an actual bank API call to debit the customer's checking account a second time, must **NEVER** report a 30-day delinquency to Equifax/Experian twice, and must **NEVER** send duplicate SMS receipts to the borrower.
- **Failure Hazards:**
  Double-debiting customers or double-reporting to credit bureaus causes immediate regulatory enforcement actions, CFPB fines, and severe reputational damage.

### Phase 2: Define (Convergent)
- **Suppression Invariants:**
  - **Invariant 1 (Zero Outbound Real-World Mutations in Shadow Mode):**
    $$\\forall \\text{ call } C \\text{ to external financial/notification rails}: \\text{Environment} == \\text{SHADOW} \\implies C.\\text{status} = \\text{SUPPRESSED_AND_LOGGED}$$
  - **Invariant 2 (Shadow State Fidelity):** The shadow ledger records the transaction exactly as if it succeeded, storing the suppressed payload and synthetic success response in the shadow audit log.
  - **Invariant 3 (Air-Gap Network Security):** Network policies at the VPC / Service Mesh layer physically block outbound egress to live payment partner CIDR blocks.

### Phase 3: Develop (Divergent)
- **Filter Implementation (Envoy / Istio / Application Proxy):**
  - Inject smart mock outbound adapter:
    ```go
    type PaymentRailClient interface {
        DisburseFunds(ctx context.Context, req DisbursementRequest) (*DisbursementResponse, error)
    }

    type ShadowSuppressedPaymentClient struct {
        AuditStore ShadowAuditRecorder
    }

    func (s *ShadowSuppressedPaymentClient) DisburseFunds(ctx context.Context, req DisbursementRequest) (*DisbursementResponse, error) {
        // Suppress actual network dispatch
        s.AuditStore.RecordSuppressedSideEffect(ctx, "DISBURSEMENT", req)
        return &DisbursementResponse{
            Status: "SYNTHETIC_SHADOW_SUCCESS",
            TransactionID: "shadow_" + uuid.New().String(),
        }, nil
    }
    ```

### Phase 4: Deliver (Convergent)
- **Deliverable:** Egress firewall rules, Service Mesh filter configurations, and synthetic response test harnesses.

---

## Operational Guide & Instructions

### When to Apply
- Deploying microservices to the Phase 6 Shadow Run environment.
- Testing outbound integrations against third-party mock endpoints.
- Verifying shadow dual-run safety prior to turning on live traffic mirroring.

---

## Verification & Exit Criteria
- [ ] 100% of outbound financial write-paths intercepted and suppressed.
- [ ] Network egress audit confirms zero outgoing connections to live banking endpoints.
- [ ] Suppressed intents recorded with full fidelity for shadow reconciliation.

---

### 20. Shadow Gate Divergence Taxonomy Classifier (`shadow_divergence_classifier`)

*Source: [`.agents/skills/shadow-divergence-classifier/SKILL.md`](.agents/skills/shadow-divergence-classifier/SKILL.md)*

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

---

### 21. ADR Closed-Loop Knowledge Harvester (`adr_extractor`)

*Source: [`.agents/skills/adr-extractor/SKILL.md`](.agents/skills/adr-extractor/SKILL.md)*

# ADR Closed-Loop Knowledge Harvester Skill

## Purpose
Guarantee the factory's core compounding knowledge thesis (Axiom A14): harvest every hard-won technical decision, resolved adversarial dispute, and edge-case resolution into immutable, git-committed Architecture Decision Records (ADRs), ensuring that cycle $n+1$ never re-litigates decisions settled in cycle $n$.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  During Stage 1 specification and Stage 4 review, personas engage in multi-turn adversarial negotiations (e.g., Software Architect vs Data Architect debating decimal precision; Spec Adversary challenging PM on grace period edge cases).
  - Without structured knowledge harvesting, these discussions are lost in ephemeral chat logs.
  - Future agents and engineers re-introduce the same settled antipatterns, causing the cost per delivered spec to plateau or rise.

### Phase 2: Define (Convergent)
- **ADR Structure (MADR Format):**
  - **Title:** `ADR-[NUMBER]: [DECISION TITLE]`
  - **Status:** Proposed, Accepted, Rejected, Superseded
  - **Context:** The specific architectural challenge or adversarial dispute.
  - **Decision Drivers:** Regulatory compliance, performance, cost, security.
  - **Considered Options:** The technical alternatives evaluated.
  - **Decision Outcome:** The chosen option and exact rationale.
  - **Consequences:** Positive and negative downstream impacts.

### Phase 3: Develop (Divergent)
- **Knowledge Harvester Workflow:**
  1. Ingest resolved negotiation file (`negotiation_log.json` / `dispute_threads.md`).
  2. Detect consensus milestone or CODEOWNERS approval event.
  3. Synthesize the debate into standard MADR markdown format.
  4. Automatically assign next sequential ID and commit to `architecture/adr/`.
  5. Index key decision embeddings into the Calibration Vector Ledger for RAG retrieval during Phase 1 of subsequent cycles.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Git commit generator, ADR catalog indexer, and prompt memory injection utility.

---

## Operational Guide & Instructions

### When to Apply
- Stage 4 closeout upon PR merge.
- Stage 7 compounding learning loop.
- Operated by Documentation & Knowledge Curator (`E2`) and Software Architect (`B1`).

---

## Verification & Exit Criteria
- [ ] 100% of resolved architectural disputes recorded as formal ADRs.
- [ ] All ADRs follow standard MADR template with clear rationale.
- [ ] New ADRs indexed into vector storage for immediate agent context retrieval.

---

### 22. Autonomy Rung Promotion & Demotion Governor (`autonomy_rung_evaluator`)

*Source: [`.agents/skills/autonomy-rung-evaluator/SKILL.md`](.agents/skills/autonomy-rung-evaluator/SKILL.md)*

# Autonomy Rung Promotion & Demotion Governor Skill

## Purpose
Govern the factory's autonomy progression across 4 formal autonomy rungs (L1 Human-in-the-loop, L2 Human-approval, L3 Autonomous-with-exception, L4 Full-autonomy), ensuring that high-stakes financial operations are only automated when mathematically justified by empirical performance.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Unconstrained agentic autonomy in financial software development creates systemic risk.
  - Allowing an agent to autonomously deploy payment processing code without proven history invites disaster.
  - Conversely, requiring human review for every trivial getter function destroys developer velocity.
- **The Four Autonomy Rungs:**
  - **L1 (Assisted):** Human authors; agent suggests completions.
  - **L2 (Supervised):** Agent drafts spec/code; human review and approval is mandatory before each phase transition.
  - **L3 (Autonomous with Exceptions):** Agent executes phase transitions automatically; human is alerted only upon policy exceptions or test failures.
  - **L4 (Full Autonomy):** Agent autonomously specifies, codes, tests, and deploys within bound token budgets and verified test gates.

### Phase 2: Define (Convergent)
- **Promotion / Demotion Invariants:**
  - **Promotion to L4 Rule:** A task class (e.g. read-only reporting endpoint, schema migration) qualifies for L4 promotion **only if**:
    1. $\\ge 200$ consecutive runs without an escaped defect or human rollback.
    2. Test coverage on the generated code is $\\ge 95\\%$.
    3. Conformance diff is 100% clean.
  - **Immediate Demotion to L2 Rule:**
    - Any escaped defect in production $\\implies$ Immediate demotion of that task class back to L2.
    - Any double-entry imbalance or security vulnerability detected $\\implies$ Immediate demotion.

### Phase 3: Develop (Divergent)
- **Evaluation Engine:**
  - Queries task telemetry database (`factory_telemetry.task_executions`).
  - Computes rolling pass rate, MTTR, and escaped defect metrics per task class.
  - Issues signed Autonomy Entitlement Tokens authorizing agents to bypass manual human gates for qualified rungs.

### Phase 4: Deliver (Convergent)
- **Deliverable:** Governor service policy engine, audit log recorder, and CISO governance dashboard.

---

## Operational Guide & Instructions

### When to Apply
- Stage 2 Dispatch: Check current rung authorization before routing tasks.
- Stage 7 Compounding Learning: Re-evaluate task rungs at cycle closeout.
- Managed by Autonomy Rung Governor (`F3`) and CISO Chris Nelms.

---

## Verification & Exit Criteria
- [ ] No task class promoted to L4 without meeting the 200 clean run threshold.
- [ ] Single defect triggers immediate automatic demotion to L2.
- [ ] All rung transitions logged with cryptographic tamper-evident audit records.

---

### 23. Token Economics & Unit Cost Attribution (`token_unit_cost_calculator`)

*Source: [`.agents/skills/token-unit-cost-calculator/SKILL.md`](.agents/skills/token-unit-cost-calculator/SKILL.md)*

# Token Economics & Unit Cost Attribution Skill

## Purpose
Instrument, calculate, and prove the core economic thesis of the Zip Agentic Factory: that through persona refinement, spec compounding, and prompt caching, the net token and dollar cost per delivered microservice drops by $\\ge 30\\%$ on each successive release cycle.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Many AI initiatives claim compounding value but lack financial instrumentation.
  - Without granular cost accounting, token sprawl, repeated retry loops, and expensive reasoning calls on simple tasks balloon operational expenses.
  - To prove ROI to executive leadership (Chris Nelms & Eric Blassberg), every token spent must be attributed to its specific phase, domain, persona, and task outcome.

### Phase 2: Define (Convergent)
- **Economic Invariants & Formulas:**
  - **Invariant 1 (Unit Cost Formula):**
    $$\\text{UnitCost}_{spec} = \\frac{\\sum (\\text{PromptTokens} \\times C_{in} + \\text{OutputTokens} \\times C_{out}) + \\text{SandboxComputeUSD}}{\\text{ApprovedSpecsDelivered}}$$
  - **Invariant 2 (Compounding Cost Decline Target - Axiom A14):**
    $$\\text{UnitCost}_{cycle\ n+1} \\le 0.70 \\times \\text{UnitCost}_{cycle\ n}$$
  - **Invariant 3 (Waste Attribution):** Measure and categorize:
    - *Useful Work:* Tokens generating merged code and passing tests.
    - *Rework / Retries:* Tokens expended recovering from failed test runs or syntax errors.
    - *Drift Overhead:* Tokens spent re-litigating previously settled ADRs.

### Phase 3: Develop (Divergent)
- **Telemetry Ingestion & Analytics Pipeline:**
  - Intercept GenAI SDK responses via OpenTelemetry metrics wrapper.
  - Record `prompt_token_count`, `candidates_token_count`, `cached_content_token_count`, and latency.
  - Aggregate in BigQuery table `factory_economics.token_ledger`.
  - Calculate cache savings:
    $$\\text{CacheEfficiency} = \\frac{\\text{CachedTokens}}{\\text{TotalPromptTokens}} \\times 100\\%$$

### Phase 4: Deliver (Convergent)
- **Deliverable:** BigQuery token accounting models, Looker cost dashboard, and cycle-over-cycle ROI reports.

---

## Operational Guide & Instructions

### When to Apply
- Continuous monitoring across all stages (1 through 7).
- Stage 2: Bind token budgets to dispatch tasks.
- Stage 7: Deliver unit cost attribution reports to leadership.

---

## Verification & Exit Criteria
- [ ] 100% of LLM calls attributed to a specific phase, domain, and persona.
- [ ] Cache hit efficiency tracked and visible on cost dashboards.
- [ ] Cycle-over-cycle cost reduction mathematically proven and documented.

---
