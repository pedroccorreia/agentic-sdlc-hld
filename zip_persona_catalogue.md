# **Zip Agentic Factory — Persona Catalogue & Stage Detail**

**Project Catalyst · Agent Factory / LMS Rebuild** Prepared for: Pedro Correia · 27 August 2026 · Working draft

---

## **1\. Purpose**

This document defines the agent persona library for Zip's Agentic Factory, and expands the six-stage pipeline to the next level of detail.

Personas are the factory's actual product. The generated code is disposable and regenerable; the **persona library plus the spec library** is what compounds and makes cycle *n+1* cheaper than cycle *n*. The PRD's core value claim — that unit cost of delivery falls each release — is a claim about these two assets, not about the LMS.

---

## **2\. Three design principles**

### **2.1 Author and judge are never the same persona**

Stage 1 of Zip's model already states this for specification. It must hold at **every** stage, not just spec. If the agent that writes the code also writes its tests, the tests encode the code's bugs as expected behaviour and coverage metrics become theatre.

Personas should therefore be commissioned in **adversarial pairs** — a generator and an opposing judge with a different objective function.

### **2.2 Personas are versioned, evaluated assets — not prompt snippets**

The PRD states that "tools, skills, and evals remain owned assets." A persona is one of those assets. Each requires:

- A named human owner  
- A version number and changelog  
- An eval suite that scores whether it is still performing  
- A re-baselining process triggered by model upgrades

A persona that silently degrades after a frontier model upgrade is an undetected quality regression across every domain simultaneously. This is a material risk with no current mitigation in the PRD.

### **2.3 Not everything is a persona**

Stage 2 (Dispatch) is control-plane policy, not reasoning. Certificate validation, entitlement checks and budget allocation are deterministic platform functions. Do not build an agent where a policy check belongs — it adds latency, cost and non-determinism to a step that must be auditable.

---

## **3\. Persona catalogue**

### **Family A — Intent & scope (Stage 1\)**

| Persona | Primary focus | What they evaluate | Prompting angle |
| :---- | :---- | :---- | :---- |
| Product Manager | Value & scope | Business alignment, user ROI, feature prioritisation, MVP boundary | "Act as a strict PM. Challenge this requirement. Is it truly necessary for MVP, or is it scope creep?" |
| Domain SME (×5) | Lending correctness | Domain logic per LMS domain: Decisioning, Issuing, Repayments, Customer Master, Merchant Engine | "You are a 15-year Repayments SME. Where does this spec contradict how loan servicing actually works?" |
| Regulatory & Compliance Analyst | Regulatory basis | Reg Z (TILA), Reg B (ECOA), FDCPA, GLBA, UDAAP, SCRA/MLA, state lending licences, PCI DSS | "Map every clause in this spec to the regulation it implements. Flag any requirement with no regulatory basis, and any regulation with no requirement." |
| UX/UI Designer | Usability & flow | User friction, accessibility (WCAG), clarity, consistency | "Review this flow as an easily frustrated, non-technical user in financial distress." |
| Requirements Architect *(author)* | Spec fidelity | Converts intent into a high-definition, testable specification | "Convert this into an unambiguous spec. Every behaviour must be testable and every number must have a unit." |
| Spec Adversary *(judge)* | Ambiguity | Contradiction, untestable assertions, silent assumptions | "Find every sentence in this spec that two competent engineers could implement differently. You are not allowed to approve it." |

**Notes**

The **Regulatory & Compliance Analyst at specification time** is the most significant gap in the current model. Compliance discovered at Stage 5 is a rebuild; compliance encoded at Stage 1 is free. For a US consumer lender this persona is non-negotiable, and it is the one most likely to resonate with Chris Nelms as CISO and Executive Transformation Owner.

The **Spec Adversary** is what makes PRD Hypothesis 1 testable. The PRD's current mitigation for spec ambiguity is "mandate paired SME/Systems Engineer refinement" — a human process applied after failure. This persona applies the same pressure before human cycles are spent.

### **Family B — Design & architecture (Stage 1 → 2\)**

| Persona | Primary focus | What they evaluate | Prompting angle |
| :---- | :---- | :---- | :---- |
| Software Architect | Scale & system | Bottlenecks, design patterns, stack compatibility, technical debt | "Analyse this proposal for architectural risk and scalability constraints. Name the pattern being used and the one being violated." |
| Data Architect | Ledger integrity | Money representation, rounding, accrual basis, double-entry integrity, bitemporal history, audit tables | "Review this schema as a core-banking data modeller. Where can money be lost, double-counted, or become unauditable?" |
| Integration Engineer | Boundaries | Contracts, API and event schemas, idempotency, retries, ordering, partial-failure modes | "You own the boundary. What happens when this downstream call times out after the write succeeded?" |
| Identity & Access Engineer | AuthN / AuthZ | Entitlements, least privilege, segregation of duties, token lifecycle | "Enumerate every actor who can reach this resource and prove least privilege for each." |

**Notes**

**Data Architect must be separate from Software Architect.** In a loan management system the money model *is* the system — decimal versus float, rounding direction, accrual basis, double-entry integrity, bitemporal history. General-purpose architecture personas consistently under-serve this, and it is precisely where shadow-gate divergences originate.

**Integration Engineer has an unusual Phase 1 remit.** The "house next door" strategy excludes direct core integration for 12–18 months, so during the initial build this persona is not integrating — it is defining contracts and building stubs against systems it cannot yet touch. Scope this explicitly or the persona will attempt to solve an out-of-bounds problem.

**Identity & Access as a distinct persona** is the concrete instance of the "separate SDLC per workload class" argument. It carries different review criteria, different evals and different sign-off authority from application code.

### **Family C — Build (Stage 3\)**

| Persona | Primary focus | What they evaluate | Prompting angle |
| :---- | :---- | :---- | :---- |
| Implementation Engineer | Generation | Produces code to specification | "Implement exactly this spec. Add nothing not specified. Where the spec is silent, stop and raise a question." |
| Test Engineer *(isolated)* | Conformance proof | Generates tests from the spec, never from the implementation | "You have the spec but not the implementation. Write the suite that proves conformance." |
| Migration & Backfill Engineer | Data movement | Loan book, balances, payment history, reconciliation to source | "Design the backfill so it is restartable, idempotent, and reconcilable to the cent against source." |

**Notes**

The isolation constraint on **Test Engineer** is the single most important control in the build stage. Provide the spec, withhold the implementation.

**Migration & Backfill** is absent from the PRD's build scope (§9) entirely. For an LMS rebuild this is a material omission — a system with no loan book in it cannot be shadow-tested.

### **Family D — Adversarial judges (Stages 4–5)**

| Persona | Primary focus | What they evaluate | Prompting angle |
| :---- | :---- | :---- | :---- |
| Spec Conformance Judge | Fidelity both ways | Whether code does what the spec said — and nothing more | "Diff implementation against spec. Report unimplemented requirements AND unrequested behaviour." |
| Security Engineer / Red Team | Vulnerabilities | OWASP Top 10, secrets handling, injection, privilege escalation, attack paths | "You are a malicious actor with valid credentials. Find your path to another customer's data." |
| QA / Adversarial Tester | Coverage | Edge cases, boundary conditions, negative paths, concurrency | "Generate 10 negative and boundary scenarios. Prioritise ones involving money, dates, and concurrency." |
| Regulatory Conformance Verifier | Evidence | Tests the built artefact against the Stage 1 regulatory map | "Execute the conformance suite. Produce auditor-legible evidence, not a pass/fail." |
| SRE / Resilience | Operability | Latency, scalability, resource usage, chaos and failure injection | "Where does this degrade first under 10× load, and what is the customer-visible symptom?" |
| Reconciliation Analyst | Divergence | Shadow-gate output comparison, triage, explanation, disposition | "This output differs from legacy by $0.03. Explain the mechanism, or escalate as unexplained." |

**Notes**

**"Nothing more" matters as much as "nothing less."** Unrequested behaviour in generated code is common, and in a regulated lender an undocumented feature is a compliance finding.

**Reconciliation Analyst is the persona the programme lives or dies on.** At production volume across five domains the shadow gate will generate a substantial divergence queue, and the stated pass bar — "zero *unexplained* divergences" — means every item requires a human-legible explanation. This is the highest-volume judgement work in the entire programme and currently has no owner in the PRD. If one persona from this catalogue is built first, it should be this one.

### **Family E — Sustain (Stage 6 and cross-cutting)**

| Persona | Primary focus | What they evaluate | Prompting angle |
| :---- | :---- | :---- | :---- |
| Observability Engineer | Operability | SLOs, telemetry coverage, alert quality, diagnosability | "What question will the on-call engineer ask at 3am, and can this telemetry answer it?" |
| Documentation & Knowledge Curator | Compounding assets | ADRs, runbooks, API docs, and spec library curation | "Write this so a new engineer can operate it without asking anyone. Then find the three specs this one duplicates." |
| Release & Change Manager | Cutover readiness | Change control, rollback plans, release sequencing | "Produce the rollback plan. If it cannot be executed in 15 minutes, it is not one." |

**Note on Documentation.** This is strategically load-bearing rather than clerical, and should be named accordingly when presented to Zip. The entire cost thesis depends on the spec library compounding — which only occurs if someone curates it, deduplicates entries, promotes recurring patterns into reusable templates and retires stale specs. Without curation the library accumulates 400 near-identical specs and cycle *n+1* costs the same as cycle *n*. **This persona is the mechanism behind the business case.**

### **Family F — Factory governance**

None of these appear anywhere in the current PRD. They are the layer that distinguishes a factory from a collection of prompts.

| Persona | Primary focus | What they evaluate | Prompting angle |
| :---- | :---- | :---- | :---- |
| Persona Steward | The library itself | Persona versioning, drift after model upgrades, overlap and redundancy | "This persona's outputs drifted after the model upgrade. Diagnose and re-baseline." |
| Eval Engineer | The scoring harness | Eval coverage, escaped-defect analysis, harness maintenance | "Design the eval that would have caught this escaped defect. Add it to the suite." |
| Autonomy Rung Governor | Trust decisions | Promotion and demotion evidence per task class | "This task class has run clean 200 times. Justify promotion to L4, or explain what evidence is still missing." |
| Token Economics Analyst | Unit cost | Cost per spec, per domain, per cycle; rework and retry attribution | "Unit cost rose this cycle. Attribute the increase and say whether it is rework, retries, or scope." |

**Notes**

**Eval Engineer** is implied by the PRD's "evals remain owned assets" but never staffed.

**Token Economics Analyst** is what converts "unit cost of delivery falls each cycle" from an unfalsifiable assertion into a measurable claim. Nothing in the PRD currently instruments this, which means the programme's core value metric cannot be proven at the end of the pilot.

---

## **4\. Stage detail — the next level**

Zip's six-stage model expanded into sub-steps, active personas and gate criteria.

| Stage | Sub-steps | Personas active | Gate to pass |
| :---- | :---- | :---- | :---- |
| **1 Specify** | Intent capture → regulatory overlay → spec draft → architecture & data design → adversarial review → human signature | PM, Domain SME, Compliance Analyst, UX, Requirements Architect, Software Architect, Data Architect, Spec Adversary | Signed spec; zero open ambiguity flags; regulatory map attached; ADR recorded |
| **2 Dispatch** | Spec schema validation → certificate & entitlement check → task decomposition & model routing → token budget and blast-radius allocation → audit record issuance | *Control-plane policy, not personas.* Routing rules owned by Persona Steward | Valid certificate; entitlements scoped least-privilege; budget bound; audit record issued |
| **3 Generate** | Implementation → isolated test generation → build & lint → documentation and ADR generation → integration contract stubs | Implementation Engineer, Test Engineer (isolated), Integration Engineer, Documentation Curator | Builds clean; tests derived from spec not code; kill-switch armed; no policy violation |
| **4 Review** | Spec-conformance diff → code quality review → security review → contract review → human systems-engineer acceptance | Spec Conformance Judge, Security Red Team, Integration Engineer, Systems Engineer *(human)* | CODEOWNERS approval; zero criticals; no unrequested behaviour; conformance diff clean |
| **5 Verify** | Regulatory conformance suite → reconciliation suite → load testing → chaos and resilience → evidence pack assembly → V\&V sign-off | Regulatory Conformance Verifier, QA Adversary, SRE, Eval Engineer | Evidence pack complete and auditor-legible; V\&V signature; independence from generation provable |
| **6 Ship & observe** | Shadow deploy → **side-effect suppression** → traffic mirroring → divergence capture → triage and explanation → **state re-baselining** → executive cutover decision | Reconciliation Analyst, Observability Engineer, SRE, Release Manager, executive *(human)* | Zero unexplained divergences; rollback rehearsed; executive sign-off |

### **4.1 Two missing sub-steps in Stage 6**

Both are absent from the current model and both are load-bearing.

**Side-effect suppression.** A loan management system moves money. You cannot mirror a payment and allow both systems to debit the customer. Every outbound effect requires stubbing or isolation — payment rails, card networks, credit bureau reporting, customer notifications, general ledger postings — plus a separate shadow ledger. The PRD's build scope describes this as "configure service-mesh mirroring," which substantially understates it. Read-path mirroring is straightforward; write-path mirroring on a financial ledger is a programme of work.

**State re-baselining.** Once shadow state diverges from legacy by even a single rounding difference, every subsequent comparison inherits the error and produces cascading false divergences. Without periodic re-baselining from the system of record, the divergence queue becomes noise within weeks and the gate stops carrying meaning.

---

## **5\. Practical shape**

### **5.1 Real persona count**

Domain SME instantiates five times, and Implementation Engineer, Test Engineer and Spec Conformance Judge will likely specialise per domain as well.

- **\~28 persona definitions**  
- **\~45 running instances** at full parallel build across five domains

### **5.2 Phase 1 minimum viable set**

Do not build all of them. For the pilot on a single domain sub-component, ten personas carry the loop:

1. Product Manager  
2. Domain SME (pilot domain only)  
3. Regulatory & Compliance Analyst  
4. Requirements Architect  
5. Spec Adversary  
6. Implementation Engineer  
7. Test Engineer (isolated)  
8. Spec Conformance Judge  
9. Security Engineer / Red Team  
10. Reconciliation Analyst

Everything else earns its way in once the loop is proven.

### **5.3 Why this closes the scope argument**

**A defined persona set is a scope boundary.** It is a far more concrete answer to "what will the factory be allowed to build" than a policy statement, because it is enumerable, reviewable and resourced.

It also makes the per-workload-class SDLC argument concrete. Agent development, analytics and authentication each require their own persona subset, their own gate criteria and their own evals — the same six stages, a different cast. That version of the argument is considerably harder to wave away than an abstract one.

---

## **6\. Open questions for Zip & Architectural Resolutions**

All 5 core institutional questions have been systematically analyzed and resolved in the authoritative specifications:

1. **Who owns the persona library, and does that role exist today?**  
   ✅ **RESOLVED.** Formally codified the **`F1 Persona Steward`** role in Family F (Factory Governance) ([`MASTER_PERSONAS_PGSP.md`](architecture-unpack/MASTER_PERSONAS_PGSP.md#L71)), paired with the human Systems Engineer / Architect (`B1`) and Delivery Lead (Eric Blassberg). Governed via a 12-week progressive handover to Zip’s 14 senior engineers ([`04_PHASED_PLAN_AND_RACI.md`](architecture-unpack/storyline/04_PHASED_PLAN_AND_RACI.md#L55)).

2. **Who staffs divergence triage during shadow evaluation, and at what volume assumption?**  
   ✅ **RESOLVED.** Assigned to **`D6 Reconciliation Analyst`** paired with **`A2 Domain SMEs`** across the 5 domains ([`DOUBLE_DIAMOND_SUBPHASES_DAG.md` Step 6.2.1](architecture-unpack/DOUBLE_DIAMOND_SUBPHASES_DAG.md#L371)). Staffed by Quantium and Zip engineers during Months 6–12. Volume bounded via the **4-Class Divergence Taxonomy** (Class 1 GCP bug, Class 2 Azure bug, Class 3 rounding, Class 4 intentional) to suppress non-actionable noise.

3. **What is the re-baselining strategy for persona drift after a frontier model upgrade?**  
   ✅ **RESOLVED.** Defined automated regression benchmarking in Phase 7 ([`DOUBLE_DIAMOND_SUBPHASES_DAG.md` Step 7.3.2](architecture-unpack/DOUBLE_DIAMOND_SUBPHASES_DAG.md#L427)). When a model is updated, `F1 Persona Steward` executes the frozen regression eval test bank (`Artifact G.3`), detects drift, and re-baselines prompt directives in Cloud SQL.

4. **Is there an instrumented definition of "unit cost of delivery," and who reports it?**  
   ✅ **RESOLVED.** Formulated metric: $\text{Unit Cost} = \frac{\text{Total Cost (Inference Tokens + Compute + Storage)}}{\text{Approved PRD Specs}}$. Reported by **`F4 Token Economics Analyst`** via [`token-unit-cost-calculator`](.agents/skills/token-unit-cost-calculator/SKILL.md) in `Unit Cost Attribution Report (Artifact G.4)` ([Step 7.4.1](architecture-unpack/DOUBLE_DIAMOND_SUBPHASES_DAG.md#L428)). Target: $\ge 30\%$ cycle-over-cycle reduction.

5. **Which persona subsets apply to non-LMS workload classes, and are those in or out of scope for the factory?**  
   ✅ **RESOLVED.** Declared **OUT OF SCOPE** for the 12-week factory build and Phase 1 MVP ([`03_FDE_SOW_AND_DOD.md` §2.2](architecture-unpack/storyline/03_FDE_SOW_AND_DOD.md#L87)). The factory scope is strictly dedicated to US Regulated Consumer Lending (LMS rebuild).

---

## **7\. Related documents & Authoritative Specifications**

- **Master Personas Modern Agent Specifications (P-G-S-P)** — [`architecture-unpack/MASTER_PERSONAS_PGSP.md`](architecture-unpack/MASTER_PERSONAS_PGSP.md) (All 26 Personas synthesized via Double Diamond and specified in Persona-Goal-Skills-Protocol format)
- **Master Skills Double Diamond Catalog** — [`architecture-unpack/MASTER_SKILLS_DOUBLE_DIAMOND.md`](architecture-unpack/MASTER_SKILLS_DOUBLE_DIAMOND.md) (All 23 proprietary domain, ledger, regulatory, and SDLC governance skills)
- **Master Skills & Capabilities Catalog** — [`architecture-unpack/SKILLS_CATALOG.md`](architecture-unpack/SKILLS_CATALOG.md)
- **Call prep & discovery questions (Chris Nelms, 27 Aug)** — `https://docs.google.com/document/d/1tpkk9iff-Z_1jMEDhdG1Ij-G6kBaUDrovfgEq_J8DBw`  
- **[Zip] Agent Factory & LMS re-write PRD** — `https://docs.google.com/document/d/1NXWPzZCWUyJtNCkHqnx9Bls_x-iXFMzF4QsGr4CDISs`  
- **`fde-agent-factory` repo** — `https://github.com/cloud-gtm/fde-agent-factory`


