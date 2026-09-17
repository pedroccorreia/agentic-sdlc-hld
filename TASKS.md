# Zip Project Catalyst — PRD & FDE Request Document Alignment Tasks

> **Target Document:** [Zip Agent Factory PRD / FDE Request Doc](https://docs.google.com/document/d/1NXWPzZCWUyJtNCkHqnx9Bls_x-iXFMzF4QsGr4CDISs/edit)  
> **Source Baseline:** `Zip - Agentic Factory` Repository & Architecture Read-Back Blueprint  
> **Status:** Open / Ready for Manual Document Updates

---

## Section 1: Executive Summary, Governance & Stakeholders

- [ ] **1.1 Update Document Header & Governance Roles**
  - Add **Pedro Correia** as Google Cloud CE / FDE Technical Lead alongside **Phoebe Gunter** (Account Lead).
  - Add **Chris Nelms** (CISO / Security Co-sponsor) and **Eric Blassberg** (Delivery Lead) under Zip POCs.
  - Note **Quantium** (Steve / Delivery Leadership) under delivery partner integrations.
  - Elevate document title from *Zip Agent Factory PRD (Draft)* to *Zip Project Catalyst — Agentic Factory Architectural Blueprint & FDE Engagement Statement of Work*.

- [ ] **1.2 Update Context & Strategic Framing**
  - Clarify the "House Next Door" strategy: building an enduring, spec-driven factory on GCP in parallel with legacy Azure LMS.
  - Explicitly state the engagement core principle: **"Build the Factory Substrate, Not Manual Code"** (preventing the infinite pilot trap).

---

## Section 2: Core Architecture & 7-Phase Meta-DAG (Replacing Linear 6-Step CUJ)

- [ ] **2.1 Replace Linear Journey with the 7-Phase Recursive Double Diamond Model**
  - [ ] **Phase 1 (Specify):** Ingest legacy C#/SQL code archaeology, BRD, and statutory regulations (Reg Z, Reg B, GLBA, PCI DSS) → create formal PRD Contract via multi-turn adversarial challenge (Threads 2.0).
  - [ ] **Phase 2 (Dispatch):** Classify Autonomy Rungs (Rung 1–4), synthesize boundary mocks/stubs, and provision ephemeral sandbox environments via Terraform.
  - [ ] **Phase 3 (Generate):** Spec-driven Abstract Syntax Tree (AST) code generation, parallel microservice scaffolding, and automated unit/integration test synthesis.
  - [ ] **Phase 4 (Review):** Automated AST conformance diffs, SAST/DAST security scanning, and multi-agent review with human consensus.
  - [ ] **Phase 5 (Verify):** Chaos resilience testing, pre-production double-entry financial proofs ($0.00 ledger drift invariant), regulatory audit pack compilation, and automated 15-minute rollback drill.
  - [ ] **Phase 6 (Ship & Observe):** Istio/service-mesh traffic mirroring, live shadow evaluation, and 4-Class Divergence Taxonomy triage.
  - [ ] **Phase 7 (Update Documentation / Learning Loop):** Harvest defects, synthesize Architecture Decision Records (ADRs), promote golden specs, and re-seed prompt/skill catalog back into Phase 1.

- [ ] **2.2 Document Recursive Double Diamond Lifecycle**
  - Explain that within *each* of the 7 phases, execution follows: **Discover → Define → Develop → Deliver**.

---

## Section 3: Registered Artifact Registry & Negotiation File

- [ ] **3.1 Add Central Artifact Registry Contract**
  - Explicitly register the 7 formal, cryptographic handoff artifacts:
    - `Artifact A`: Business Requirements Document (BRD), Regulatory Traceability Matrix (A.1), and Legacy Invariant Register (A.2).
    - `Artifact B`: Signed PRD Contract with formal interface definitions.
    - `Artifact C`: Project Assignment & Topology Contract (Agents, Skills, Tools).
    - `Artifact D`: Generated Source Code & Ephemeral Sandbox Build Report.
    - `Artifact E`: Final Verification Report & Financial Ledger Evidence Pack ($0.00 proof).
    - `Artifact F`: Production Telemetry, Shadow Traffic Evaluation & Cutover Sign-off.
    - `Artifact G`: Living Documentation, Architecture Decision Records (ADRs), and Golden Specs.

- [ ] **3.2 Formalize the Negotiation File**
  - Add documentation for the auditable Markdown/JSON Negotiation File to capture all agent-to-agent and human-to-agent trade-offs, security vetoes, and architectural consensus.

---

## Section 4: Persona Catalogue & Autonomy Levels (Replacing Generic Roles)

- [ ] **4.1 Replace Generic Roles with 6 Persona Families (24+ Roles)**
  - [ ] **Family A (Product & Domain):** Product Manager (A1), Lending Domain SMEs (A2), Regulatory Analyst (A3), Journey Architect (A4).
  - [ ] **Family B (Architecture & System):** Software Architect (B1), Data Architect (B2), Integration Lead (B3), FinOps Lead (B4).
  - [ ] **Family C (Security & Governance):** AppSec Engineer (C1), Compliance Officer (C2), Threat Modeler (C3), IAM Specialist (C4).
  - [ ] **Family D (Engineering & Factory):** Backend Engineer (D1), Frontend Engineer (D2), Test Engineer (D3), Migration Specialist (D4).
  - [ ] **Family E (Quality & Verification):** SRE Performance Engineer (E1), Chaos Engineer (E2), Reconciliation Specialist (E3), Executive Owner (E4).
  - [ ] **Family F (Operations & Intelligence):** Telemetry Lead (F1), Knowledge Engineer (F2), Cost Attribution Lead (F3), Release Manager (F4).

- [ ] **4.2 Embed the 4-Level Autonomy Framework**
  - [ ] *Rung 1 (Assisted):* Human writes, agent assists.
  - [ ] *Rung 2 (Semi-Autonomous):* Agent generates, human reviews and approves every individual step.
  - [ ] *Rung 3 (Autonomous with Human Gate):* Agent executes full phase end-to-end; human holds phase-exit gate.
  - [ ] *Rung 4 (Fully Autonomous):* Fully autonomous execution for deterministic, policy-verified tasks.

---

## Section 5: Tooling, Plugins & Standards Substrate

- [ ] **5.1 Standardize on Agent Plugins 1.0.0 Specification**
  - Reference the open standard `skills/` structure with `mcp.json` tool manifests and deterministic `skills-lock.json` dependency pinning to eliminate prompt drift.

- [ ] **5.2 Explicitly Detail Model Context Protocol (MCP) Tool Substrate**
  - Jira MCP Server (backlog and task tracking synchronization).
  - Slack MCP Server (human-in-the-loop approvals and asynchronous alerts).
  - Google Cloud Storage MCP (artifact storage & versioning).
  - Data Agent Kit MCP (Cloud SQL & BigQuery ledger reconciliation and scoring).
  - Custom Zip Core MCP (legacy Azure introspection and mock harnesses).

- [ ] **5.3 Scaffolding & Infrastructure as Code**
  - Reference Antigravity CLI, Agents CLI, gcloud, and automated Terraform GCP infrastructure modules.

---

## Section 6: Shadow Evaluation & Financial Correctness Invariants

- [ ] **6.1 Add Mathematical Double-Entry Ledger Drift Invariant**
  - Define the strict `$0.00 balance drift` threshold across Repayments, Interest Accruals, and Fee Calculations when dual-running against legacy Azure.

- [ ] **6.2 Formalize the 4-Class Divergence Taxonomy**
  - **Class 1 (Legacy Defect):** Discrepancy caused by verified legacy Azure bug (GCP calculation is correct).
  - **Class 2 (GCP Factory Defect):** Discrepancy caused by new GCP service error (blocks release).
  - **Class 3 (Race / Timing Variance):** Acceptable asynchronous timing variances in distributed events.
  - **Class 4 (Design Enhancement):** Intentional calculation improvement mandated by new domain rules.

- [ ] **6.3 Establish Production Cutover Exit Gate**
  - Require a **14-day consecutive clean window** with zero unresolved Class 2 divergences under 100% mirrored production traffic before final DNS/traffic cutover.

---

## Section 7: FDE Statement of Work, RACI & Phase-by-Phase Definition of Done (DoD)

- [ ] **7.1 Add FDE vs Customer Delivery Guardrails**
  - Clarify Google FDE responsibilities: building the Factory substrate, persona runners, evaluation harnesses, and skill plugins.
  - Clarify Zip responsibilities: domain business rule validation, legacy access, and final production cutover decisions.

- [ ] **7.2 Establish Phase-by-Phase Definition of Done (DoD)**
  - *Phase 1 DoD:* 100% regulatory matrix coverage, signed PRD contract (Artifact B).
  - *Phase 2 DoD:* Validated boundary mocks, green sandbox health checks.
  - *Phase 3 DoD:* Clean compilation, 100% AST unit test pass rate.
  - *Phase 4 DoD:* Zero critical/high SAST findings, multi-agent consensus log approved.
  - *Phase 5 DoD:* 100% synthetic ledger reconciliation, verified 15-minute rollback drill.
  - *Phase 6 DoD:* 14-day zero Class 2 defect window under 100% mirrored production load.
  - *Phase 7 DoD:* Golden spec repository updated, prompt/skill re-seeding active.

- [ ] **7.3 Define Canonical Pilot Scope**
  - Anchor Phase 1–5 factory validation on a high-value, bounded initial pilot domain: **Repayments / Interest Accrual Engine**, prior to scaling across all 5 lending domains (Issuing, Decisioning, Repayments, Customer Master, Merchant Engine).

- [ ] **7.4 Add Formal 3-Way RACI Matrix**
  - Map every phase and deliverable across **Zip (Chris/Eric)**, **Google FDE/CE (Pedro/Phoebe)**, and **Quantium**.
