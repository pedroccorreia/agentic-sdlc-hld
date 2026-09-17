---
name: Fair Debt Collection Practices Act (FDCPA) Scanner
description: Scans collection communications, borrower outreach workflows, and contact automation for statutory Mini-Miranda disclosures, permissible calling hours, and cease-and-desist flags.
---

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
