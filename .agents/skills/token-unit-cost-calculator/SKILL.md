---
name: Token Economics & Unit Cost Attribution
description: Instruments and analyzes token consumption, caching efficiency, model routing costs, and compute infrastructure spend to prove the declining unit cost of delivery thesis.
---

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
