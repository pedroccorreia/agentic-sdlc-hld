# Parking Lot — Open Items & Closed Resolutions

> **Sources:** `zip arc1.pdf` (document page 1 — setup/environment + stages) and
> `zip  architecture.pdf` (document pages 2–5 — artifacts, agents, control
> plane, open action items).
>
> **Status key:** ✅ resolved · 🟡 partially resolved / awaiting external input · 🔴 blocking / open decision
>
> **Current Ledger:** **40 Resolved / Closed** · **2 Partially Resolved (Awaiting Kickoff/Repo URLs)** · **1 Open Decision (Pilot Weight Calibration)**

---

## 🏆 Master Status Summary

| Category | Total | ✅ Resolved | 🟡 Partially Resolved | 🔴 Open Decision |
|---|:---:|:---:|:---:|:---:|
| **A. Whiteboard Questions (Q.1 – Q.7)** | 7 | 6 | 1 (Q.6 Legacy Repo Access) | 0 |
| **B. Source Document Gaps (PL-01 – PL-15)** | 15 | 15 | 0 | 0 |
| **C. Cross-Cutting Architectural Gaps (PL-16 – PL-25, PL-33 – PL-43)** | 21 | 19 | 1 (PL-16 Weight Calibration) | 1 (PL-16 Pilot Calibration) |
| **Total Tracked Items** | **43** | **40** | **2** | **1** |

---

## ✅ Section 1: Resolved & Closed Items (40 Items)

The following items have been fully resolved, architected, and codified across [`DOUBLE_DIAMOND_SUBPHASES_DAG.md`](DOUBLE_DIAMOND_SUBPHASES_DAG.md), [`MASTER_PERSONAS_PGSP.md`](MASTER_PERSONAS_PGSP.md), [`MASTER_SKILLS_DOUBLE_DIAMOND.md`](MASTER_SKILLS_DOUBLE_DIAMOND.md), [`SKILLS_CATALOG.md`](SKILLS_CATALOG.md), and the 4-act storyline.

### Group 1: Whiteboard Numbered Questions (Q.1 – Q.5, Q.7)

| ID | Item | Resolution Details & Governing Specifications |
|---|---|---|
| **PL-26 / Q.1** | **Spec format — `.md`?** | ✅ **RESOLVED.** Standardized on **GitHub Flavored Markdown with structured YAML frontmatter** ([`DOUBLE_DIAMOND_SUBPHASES_DAG.md` Step 1.2.1](DOUBLE_DIAMOND_SUBPHASES_DAG.md)). Enforces machine-validatable contract parsing against JSON Schema; natural language ambiguity is strictly prohibited. |
| **PL-27 / Q.2** | **Centralized kill switch** | ✅ **RESOLVED.** Specified as an always-on cross-cutting control on GKE Control Plane with sub-second API endpoint (<750ms SLA) and Slack MCP administrative trigger ([`03_FDE_SOW_AND_DOD.md` §2.2](storyline/03_FDE_SOW_AND_DOD.md)). Terminate containers instantaneously upon anomalous network or token events. |
| **PL-28 / Q.3 (PL-40)** | **How to control a Generate run** | ✅ **RESOLVED.** Run-level control (pause, resume, concurrency throttles, token spend caps) is managed deterministically via **Temporal state machine workflows** on GKE ([`03_FDE_SOW_AND_DOD.md`](storyline/03_FDE_SOW_AND_DOD.md) and [`DOUBLE_DIAMOND_SUBPHASES_DAG.md` Step 2.3.1](DOUBLE_DIAMOND_SUBPHASES_DAG.md)). |
| **PL-29 / Q.4** | **Unit test in disposable sandboxes** | ✅ **RESOLVED.** Architected a **Dual-Runtime Execution Substrate**: Tier A (Agent Platform zero-trust managed `code_execution` for AST/TDD/linting) and Tier B (disposable Cloud Run / GKE BYOD containers with read-only root filesystems and zero outbound egress) ([`SKILLS_CATALOG.md`](SKILLS_CATALOG.md) & [`DOUBLE_DIAMOND_SUBPHASES_DAG.md` Step 2.3.1](DOUBLE_DIAMOND_SUBPHASES_DAG.md)). |
| **PL-30 / Q.5** | **Score = user feedback + data driven** | ✅ **RESOLVED.** Built composite scoring algorithm combining quantitative spec pass rates ($W_1$), adversarial edge-case survivability ($W_2$), and human CODEOWNERS review ratings ($W_3$). Enforced by `F2 Eval Engineer` & `F3 Autonomy Rung Governor` persisting scores to Cloud SQL ([`DOUBLE_DIAMOND_SUBPHASES_DAG.md` Step 4.2.1](DOUBLE_DIAMOND_SUBPHASES_DAG.md)). |
| **PL-32 / Q.7** | **Multi-Model Inference on Vertex AI** | ✅ **RESOLVED.** Frontier models are consumed as swappable inference backends routed across **Gemini 1.5 Pro/Flash and Gemini 1.5 Pro on Vertex AI Model Gateway**, while skills, tools, and evals remain permanent owned assets standardized via **Agent Plugins 1.0.0** and pinned cryptographically in [`skills-lock.json`](../skills-lock.json). |

### Group 2: Process, Data Architecture & Registry

| ID | Item | Resolution Details & Governing Specifications |
|---|---|---|
| **PL-01** | **Phase (4) never named** | ✅ **RESOLVED.** Attested on document page 1 as **`Review`**; produces Build Report evaluation, Feedback register, and Approve / Not Approve + Reason gates. |
| **PL-02** | **DER for Registry (Entity Relationship Model)** | ✅ **RESOLVED.** Codified in [`diagrams/06-registry-entities.mmd`](diagrams/06-registry-entities.mmd) and [`DOUBLE_DIAMOND_SUBPHASES_DAG.md` §4.1](DOUBLE_DIAMOND_SUBPHASES_DAG.md), establishing full relational schema across all 20 factory artifacts (BRD A, PRD B, Assignment C, Source C.1, Tests C.2, Report D, Score D.3, Final E, Shadow Log F.1, Golden Specs G.1, ADR Index G.2, etc.). |
| **PL-03** | **Personas & sub-processes per phase** | ✅ **RESOLVED.** Mapped 28 personas across 6 families in [`MASTER_PERSONAS_PGSP.md`](MASTER_PERSONAS_PGSP.md), with full sub-phase role assignments across all 28 sub-phases in [`DOUBLE_DIAMOND_SUBPHASES_DAG.md`](DOUBLE_DIAMOND_SUBPHASES_DAG.md). |
| **PL-04** | **Documentation upkeep — non-existent** | ✅ **RESOLVED.** Phase 7 ("Update Documentation / Compounding Learning") established as a mandatory closed-loop cycle harvesting ADRs (`G.2`), Golden Spec Templates (`G.1`), and Regression Evals (`G.3`) to re-seed Phase 1 Cycle $N+1$. |
| **PL-05** | **Agent cardinality** | ✅ **RESOLVED.** Formally defined: 1 Lead Persona archetype per task role, parallelized into discrete ephemeral container instances per microservice task (e.g. 5x `A2 Domain SME` instances across 5 domains; ephemeral `C1 Implementation Engineer` instances per build slice). |
| **PL-06** | **Agents that can build archetypes** | ✅ **RESOLVED.** Supported via Golden Spec Templates (`G.1`) and ADRs (`G.2`) in Phase 7, curated by `E2 Documentation Curator`. |
| **PL-07** | **Platform basics: languages, monitoring, CI/CD** | ✅ **RESOLVED.** Target languages: Go and Python for net-new GCP microservices; C# (.NET 8 / ILSpy) for legacy reverse-engineering. Monitoring: Google Cloud Observability (Cloud Logging, Monitoring, PromQL, OpenTelemetry). CI/CD: GitHub Actions + GKE Control Plane + Temporal. |
| **PL-08** | **Dynamic allocation of agents** | ✅ **RESOLVED FOR V1.** Formally deferred to post-MVP. Deterministic routing based on capability tags and skill hashes is established for v1. |
| **PL-09** | **Evaluation scenarios built alongside PRD** | ✅ **RESOLVED.** Confirmed: Step 2.3.2 (Test Shift-Left) and Step 3.3.2 ([`isolated-tdd-test-generator`](../.agents/skills/isolated-tdd-test-generator/SKILL.md)) author test suites strictly from PRD requirements with zero access to source code. |
| **PL-10** | **Deterministic agent selection** | ✅ **RESOLVED.** Stage 2 Dispatcher matches structured capability tags and cryptographic skill hashes from [`skills-lock.json`](../skills-lock.json) in Cloud SQL, eliminating free-text ambiguity. |
| **PL-11** | **PRD icon labelled 'SPEC'?** | ✅ **RESOLVED.** Confirmed glyph denotes Candidate PRD / Specification of Record. |
| **PL-12** | **'DER' = Data Entity Relationship?** | ✅ **RESOLVED.** Attested as Data Entity Relationship model for Cloud SQL Agent Registry. |
| **PL-13** | **Final Report -> ledger edge** | ✅ **RESOLVED.** Traced in Step 5.2.1 and Step 6.1.1: Final Report feeds the immutable ledger verification evidence in BigQuery. |
| **PL-14** | **DATA as peer of GKE platform** | ✅ **RESOLVED.** Confirmed `DATA` represents the Cloud SQL + BigQuery data tier managed alongside GKE. |
| **PL-15** | **Page numbering mismatch** | ✅ **RESOLVED.** 5-page whiteboard scan verified complete (p1 = setup & stages, p2 = artifacts, p3 = negotiation, p4 = control plane, p5 = open items). |
| **PL-17** | **Scope of LMS Domains** | ✅ **RESOLVED.** Formally defined 5 core lending domains: Decisioning, Issuing, Repayments, Customer Master, Merchant Engine ([`03_FDE_SOW_AND_DOD.md`](storyline/03_FDE_SOW_AND_DOD.md)). |
| **PL-18** | **`SCORE` vs `Rating`** | ✅ **RESOLVED.** `SCORE` is the run-level evaluation result of a single Build Report (`Artifact D.3`); `Rating` is the cumulative historical rolling average of the persona/agent in Cloud SQL governing its autonomy rung. |
| **PL-19 & PL-35** | **Security, identity & MCP blast radius** | ✅ **RESOLVED.** Standardized on Agent Plugins 1.0.0. Tool packaging (`mcp.json`) is decoupled from runtime policy; GKE Workload Identity dynamically injects least-privilege OAuth tokens; Cloud Run sandboxes enforce strict egress blocking; Model Armor inspects prompts. |
| **PL-20 & PL-33** | **Failure / rollback & shadow gate** | ✅ **RESOLVED.** Step 5.3.1 enforces a 15-minute automated rollback rehearsal; Step 6.4.1 enforces a 14-day zero-drift clean shadow window before cutover. |
| **PL-21 & PL-22** | **Dispute lifecycle & review loops** | ✅ **RESOLVED.** Threads 2.0 turn-alternating consensus with a max 3-cycle stopping rule; unresolved disputes escalate to human `D0 Systems Engineer`; resolved disputes harvested into permanent MADR ADRs (`G.2`). |
| **PL-23** | **Artifact versioning** | ✅ **RESOLVED.** SemVer for specs/personas, immutable Git commit SHAs for approved PRDs, and SHA-256 lockfile for skills. |
| **PL-24** | **Registry physical storage** | ✅ **RESOLVED.** Cloud SQL (PostgreSQL JSONB) for state/runs, Cloud Storage for artifacts, BigQuery for ledger audit proofs. |
| **PL-25** | **Human review bottleneck** | ✅ **RESOLVED.** Autonomy Rung Governor (`F3`): task classes graduate to Level 4 autonomy after 200 consecutive defect-free runs, reducing human review burden over time. |
| **PL-34** | **Q.2 "kill switch / devices?"** | ✅ **RESOLVED.** Confirmed as sub-second API endpoint terminating Cloud Run container instances. |
| **PL-36** | **"Skills Agent = Zip SDLC Principles"** | ✅ **RESOLVED.** Formalized into 23 proprietary Double Diamond skills in [`.agents/skills/`](../.agents/skills/) pinned in [`skills-lock.json`](../skills-lock.json). |
| **PL-37 (DD-Q1)** | **Shadow gate missing sub-steps & Code Archaeology** | ✅ **RESOLVED.** Implemented [`side-effect-suppression-filter`](../.agents/skills/side-effect-suppression-filter/SKILL.md) and [`zero-cent-drift-prover`](../.agents/skills/zero-cent-drift-prover/SKILL.md); Step 6.1.1 suppresses payment rails; Step 6.3.2 re-baselines state against legacy snapshots; Step 1.1.2 defines Code Archaeology. |
| **PL-38 (DD-Q2)** | **Personas as registry entities & PRD NFRs** | ✅ **RESOLVED.** Formatted in P-G-S-P structure in [`MASTER_PERSONAS_PGSP.md`](MASTER_PERSONAS_PGSP.md) with version, rating, and eval history; PRD Step 1.2.2 freezes machine-readable YAML NFR bounds. |
| **PL-39 (DD-Q3)** | **Whiteboard vs. corpus drift** | ✅ **RESOLVED.** Unified in [`DOUBLE_DIAMOND_SUBPHASES_DAG.md`](DOUBLE_DIAMOND_SUBPHASES_DAG.md) and the 4-act storyline. |
| **PL-40 (DD-Q4)** | **Negotiation deadlock escalation protocol** | ✅ **RESOLVED.** Max 3 cycles before escalation to human `D0 Systems Engineer`. |
| **PL-41 (DD-Q5)** | **Shadow divergence taxonomy** | ✅ **RESOLVED.** Classified into 4 explicit categories: Class 1 (GCP Bug), Class 2 (Azure Bug), Class 3 (Float Rounding), Class 4 (Intentional Spec Divergence). |
| **PL-42 (DD-Q6)** | **Knowledge compounding KPI** | ✅ **RESOLVED.** Measured by Artifact G.4 (% golden spec reuse, token unit cost decline $\ge 30\%$). |
| **PL-43** | **Skills catalog & dual runtime** | ✅ **RESOLVED.** 56-skill catalog across Tier A (Agent Platform) and Tier B (Cloud Run BYOD). |

---

## 🟡 Section 2: Partially Resolved / Awaiting External Provisioning (2 Items)

| ID | Item | What Has Been Solved | What Remains Open / Action Needed |
|---|---|---|---|
| **PL-31 / Q.6** | **Where is their documentation?** | Step 1.1.2 establishes automated **Code Archaeology** via Tier B Cloud Run (.NET 8 SDK / ILSpy decompilation + AST extraction directly from C#/SQL repos) into an immutable `Domain Invariant Register (Artifact A.2)`. | **Requires Zip Action:** Provisioning repository URLs and read-only access credentials to Zip's legacy Azure C# / SQL repositories. |
| **PL-16 / Q.5** | **Scoring Function Weight Constants** | Composite evaluation framework is fully designed ($W_1$ spec pass + $W_2$ adversarial survivability + $W_3$ human review) and integrated with Google Agents CLI and Cloud SQL schema. | **Requires Calibration:** Empirical tuning of weight constants ($W_1, W_2, W_3$) during the Pilot Dry Run (Repayments & Amortization Engine). |

---

## 🔴 Section 3: Open Strategic & Commercial Decisions (1 Item)

| ID | Item | Decision Context | Owners & Timing |
|---|---|---|---|
| **Commercial / Scope Sign-off** | **12-Week FDE SoW & Quantium Tripartite Contract** | Full Statement of Work (Act 3) and Tripartite Collaboration Model (Act 4) are authored with strict scope boundaries (FDE builds factory & leads Repayments pilot; Quantium/Zip build remaining 4 domains). | **Chris Nelms (CISO) & Eric Blassberg (Delivery Lead)** to ratify at project kickoff. |

---

## Suggested Triage for Next Working Session

1. **Verify Repayments Pilot Scope:** Confirm the 10 MVP personas and 23 Double Diamond skills for the Pilot Dry Run.
2. **Collect Legacy Repo Credentials (Q.6):** Ensure Git credentials for legacy Azure C# repo are available on Day 1 for Code Archaeology.
3. **Calibrate Evaluation Weights (Q.5):** Run synthetic benchmark calibration in Week 3 to freeze $W_1, W_2, W_3$.
