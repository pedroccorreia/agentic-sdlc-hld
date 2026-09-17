---
name: Merchant Fee & MDR Settler
description: Simulates and validates interchange fee calculations, Merchant Discount Rate (MDR) deductions, and net settlement disbursements for retail partners.
---

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
