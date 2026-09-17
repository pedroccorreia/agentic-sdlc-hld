---
name: PCI DSS Cardholder Data Tokenization Verifier
description: AST code and database schema verifier that guarantees zero raw Primary Account Numbers (PAN) or sensitive authentication data (CVV/CVC) enter the application or ledger tier.
---

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
