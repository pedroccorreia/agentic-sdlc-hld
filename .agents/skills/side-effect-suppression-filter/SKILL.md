---
name: Shadow Rail Side-Effect Suppression Filter
description: Outbound proxy and network interceptor that suppresses external write-paths (ACH, card debits, credit bureau reporting, borrower notifications) during live shadow dual-run.
---

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
