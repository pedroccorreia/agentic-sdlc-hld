---
name: ADR Closed-Loop Knowledge Harvester
description: Extracts settled architectural decisions and resolved multi-turn disputes from the negotiation log into permanent Architecture Decision Records (ADRs) to ensure compounding learning.
---

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
