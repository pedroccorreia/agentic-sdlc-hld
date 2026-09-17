# Zip Agent Factory PRD

&nbsp;

| \[Zip\] Agent Factory & LMS re-write PRD&nbsp; |  | Summary Build an Agent Factory for Zip Co US with the first use case of re-building their Loan Management System via Agentic Driven Development landing on GCP.&nbsp; |
| :---- | :---- | :---- |
| Author: [Phoebe Gunter](mailto:phoebeg@google.com) **Zip POC:**   Exec Sponsor: rory.herriman@zip.co  (CTO/COO) Project Leads:  chris.nelms@zip.co  eric.blassberg@zip.co&nbsp;&nbsp; | **Status**: Draft**Last revised**: 24 Aug 2026 **Length**:  Main doc: \~10 min read&nbsp; | **Context:**   [Zip FDE Request](https://drive.google.com/open?id=1OTwYjX1Dfe0YYsGrePOxn1L-M6neTqCO&resourcekey=0-4NVkCfGlrwdNO6KwVQs14g)&nbsp; |

&nbsp;

**Discovery session:**&nbsp;

* {Between GCP & Quantium}&nbsp;  
  * [Zip x Quantium Intro - 2026/08/21 07:59 AEST – Recording](https://drive.google.com/file/d/1wG7cZZf5Jc2fq5yS4eXWwdZ3TlHzt2cJ/view)  
  * [Zip x Quantium Intro – 2026/08/21 07:59 AEST – Notes by Gemini](https://docs.google.com/document/d/1VPQK3YAT0uCpJ9sF0G43bMUWiIVf8e4gnyLLXAfm89c/edit?tab=t.i2lwsntchobv)

## **1\. USE CASE**&nbsp;

**Project Catalyst** (Zip Internal Program Name) represents a critical strategic shift for Zip: moving away from maintaining a heavily constrained, legacy Loan Management System (LMS) on Azure to building a net-new, AI-native lending platform from scratch on Google Cloud Platform (GCP). To execute this without reproducing legacy architectural debt (such as event sourcing patterns), Zip is adopting a "house next door" strategy, building a production-grade, spec-driven Agentic Factory in parallel with the LMS. This factory serves as an enduring asset owned permanently by Zip, enabling engineers to convert&nbsp;

product intent into high-definition specifications, while autonomous AI agents generate, verify, and shadow-test code on a quarterly release drumbeat.

&nbsp;

**Primary Objective:** For Zip's product and systems engineers, replace traditional manual development cycles with an AI-assisted development lifecycle (AI DLC) using spec-driven design. This compresses the LMS rebuild across 5 core domains into a 37–45 week delivery cycle while establishing a durable build engine that progressively lowers the unit cost of delivery.

&nbsp;

&nbsp;

| Dimension | Specification |
| :---- | :---- |
| **Title** | Validate Agent Factory approach to rebuild  ZIP's US Loan Management System via an Agentic Factory |
| **Persona Identification** | "As a Zip Product Engineer or Systems Engineer" |
| **Context Trigger** | Zip's engineering capacity is consumed by maintaining the legacy LMS stack on Azure, creating a ceiling on growth and preventing the rollout of next-gen credit products. |
| **The Goal** | Establish a production-grade Agentic Factory and rebuild the core LMS across 5 key domains in parallel, landing on GCP. |
| **Strategic Outcome** | Unit cost of delivery falls each cycle. Every release grows the spec library and sharpens the pipeline, so the next one is faster and cheaper. Capacity freed from maintenance is redirected to growth, not eliminated. |

&nbsp;

**Strategic Opportunity Analysis**

The current IT and product development model is burdened by legacy architectural constraints and high maintenance overhead. Rebuilding the LMS via an Agentic Factory transitions Zip from a closed-loop product to an open-loop platform while driving significant efficiency:

&nbsp;

**Speed (Compressed Delivery Timelines)**: Rebuilding a core banking and lending system traditionally takes multi-year roadmaps. The Agentic Factory compresses this rebuild into 37–45 weeks to shadow gate, with the initial factory setup taking 8–12 weeks. Sprints compress from 2-week cycles down to daily iteration loops.

&nbsp;

**Cost (Token Economics & Decreasing Unit Cost):** By replacing manual coding with L4 high-automation generation and automated verification & validation (V\&V), capacity freed from maintenance is redirected toward growth. Every quarterly release compounds the specification library, making subsequent releases faster and cheaper.

&nbsp;

## **2\. PAIN POINTS & PROBLEMS**

Addressing these systemic blockers is the prerequisite for achieving rapid LMS delivery and successfully retiring the incumbent Azure infrastructure.

&nbsp;

| Classification | Pain Point | Description & Operational Impact |
| :---- | :---- | :---- |
| **Blocker (Adoption-Preventing)** | Legacy Event Sourcing & Architectural Constraints&nbsp; | The current LMS platform is built on legacy event-sourcing patterns that compound complexity. Maintenance outweighs evolution, placing a ceiling on company growth.&nbsp; |
| **Blocker (Adoption-Preventing)** | Zip Current Azure Commitment Timeline | Zip’s current commit-to-consume contract with Azure  ends by December 2026\. Setting up the GCP foundation, GKE clusters, and Agentic Factory before December is required to land new agentic platform on.&nbsp; |
| **Friction (Efficiency-Draining)** | Constrained Product Development Capacity&nbsp; | Engineering capacity is disproportionately consumed by maintaining existing code, making every new product capability prohibitively expensive to build under traditional SDLC.&nbsp; |
| **Friction (Efficiency-Draining)** | Ramp-Up & Time Zone Coordination&nbsp; | Ramping up internal headcount from 14–15 engineers while standing up the factory and building 5 LMS domains requires embedded FDE and partner support to bridge capacity and expertise gaps.&nbsp; |

&nbsp;

&nbsp;

## **3\. CRITICAL USER JOURNEYS (CUJS)**

The following user journeys outline the step-by-step interaction between human engineers (author/judge) and the Agentic Factory plane.

&nbsp;

### **CUJ 1: Agent Factory Led Development**

| Step | Phase | Action Details |
| :---- | :---- | :---- |
| **1** | High-definition domain spec (Human Control)&nbsp; | This is the foundational planning and design phase of the cycle. Before any AI begins work, humans (such as Product Managers or Domain Architects) write and formalize a highly structured, unambiguous specification defining the required business logic and boundaries. Keeping this stage at L2 ensures that the entire cycle initiates with human intent and clear guidelines. |
| **2** | Factory Run: AI generates code & tests (High Automation)&nbsp; | This is the first of two highly automated machine steps. The Agentic Factory's AI engine ingests the high-definition domain specification written in Step 1\. It then autonomously generates the core application code along with corresponding unit and integration test suites. This eliminates the repetitive overhead of manual coding and draft creation. |
| **3** | Systems Engineer accepts output (Human Control) | To ensure quality and safety, the automated output from Step 2 is immediately sent to a human gatekeeper. A Systems Engineer reviews the AI-generated code, architecture, and test outputs. The engineer must manually approve and accept the output before it can move forward, preventing any unchecked AI errors from propagating. |
| **4** | Automated V\&V (Verification and Validation): Regulatory & security agents  (High Automation)&nbsp; | This represents the second highly automated stage in the pipeline. Once the human engineer approves the code, specialized automated security and regulatory agents scan the codebase. These agents verify compliance with industry regulations, internal security practices, and licensing constraints, allowing deep, comprehensive validation at scale without manual bottlenecks. |
| **5** | SRE Deep Review (Human Control) | After passing automated compliance scans, the code goes through a manual deep-dive review by a Site Reliability Engineer (SRE). This human-led review evaluates how the new code integrates into the larger system architecture and assesses critical performance criteria like latency, scalability, resource usage, and overall platform stability. |
| **6** | Integration Milestone (Human Control) | The final phase of the cycle is a human-coordinated, cross-domain synchronization scheduled on a regular 4-week cadence. Teams align across different development domains to officially merge the thoroughly vetted changes into the main system branch, preparing the consolidated, tested update for final release. |

&nbsp;

## **4\. INFORMATION ARCHITECTURE & DAG DESIGN**

AskIT leverages the Agent Designer Directed Acyclic Graph (DAG) architecture for modularity and safety.

&nbsp;

&nbsp;

| Architecture Component | Type | Details & Functionality |
| :---- | :---- | :---- |
| **Triggers** | Manual / Spec Commit | Signed spec commit in the GitHub spec repo starts the factory workflow. |
| **Triggers** | Event-Driven | Webhook events from GitHub PRs, Temporal workflow schedules, and GKE orchestrator tasks. |
| **Nodes** | Spec Repo Node | GitHub repository storing domain specifications, AI-DLC methods, quality gates, and Jira traceability. |
| **Nodes** | Registry & Dispatch Node | Control plane hosted on GKE utilizing Temporal, Cloud SQL, and Cloud Logging for audit trails and credential issuance. |
| **Nodes** | Generation Sandbox Node | Antigravity fleet executing in disposable Cloud Run sandboxes using Vertex AI (Gemini, Claude 3.5) and Model Context Protocol (MCP) tools. |
| **Nodes** | Review Node | GitHub PR management utilizing CODEOWNERS and branch protection rules for human acceptance. |
| **Nodes** | Verification Node | Owned evaluation harness executing policy-as-code and exporting regulatory/reconciliation evidence packs to Google Cloud Storage (GCS). |
| **Nodes** | Shadow Gate Node | Cloud Deploy and GKE managing service-mesh traffic mirroring against the legacy stack. |
| **Logic Gates** | Autonomy Rung Manager | Dynamically promotes/demotes agent autonomy levels based on defect rates and evidence packs. |
| **Logic Gates** | Sandbox Kill-Switch | Control plane level kill-switch that instantly terminates Cloud Run sandboxes upon security or policy violations. |
| **Logic Gates** | Executive Cutover Gate | Final human decision point before production traffic redirection. |

&nbsp;

This technical architecture is strictly contingent upon the General Availability (GA) of the underlying Cloud AI platform capabilities.

&nbsp;

## **5\. PRIORITIZED REQUIREMENTS & PLATFORM LAUNCH ALIGNMENT**

&nbsp;

&nbsp;

| Feature | Priority | GA Date |
| :---- | :---- | :---- |
| Project Catalyst (Zip Internal Project Name) Official Kick-off | P0 | September 1, 2026 |
| GCP Core Landing Zone & GKE Control Plane Setup Landing Zone being set up by TOC Foundations Team | P0 | October 2026 (Weeks 1–4) |
| Standing Up Initial Agentic Factory Pipeline | P0 | October–November 2026 (Weeks 8–12) |
| Vertex AI Model Routing (Gemini & Claude via Vertex) | P1 | October 2026 |
| Rebuild LMS Domains (Decisioning, Issuing, Repayments, Customer Master, Merchant Engine) | P0 | November 2026 – April 2027 (Phase 2, 20–22 weeks) |
| Complete Migration from Azure to GCP | P0 | December 2026 (Retire Azure Commit) |
| Shadow Evaluation Gate & Service-Mesh Traffic Mirroring | P1 | May–July 2027 (Phase 3, 9–12 weeks) |

&nbsp;

## **6\. HYPOTHESES TO TEST**

Validation of these core assumptions is required to ensure safety, speed, and long-term operating efficiency.

| Hypothesis | Core Belief | Pivot / Mitigation Plan |
| :---- | :---- | :---- |
| **Hypothesis 1: Spec-Driven Generation** | Separating the author (AI) from the judge (SME/Engineer) via high-definition specs eliminates hallucinated edge cases. | If spec ambiguity causes build errors, mandate paired SME/Systems Engineer spec refinement before dispatch. |
| **Hypothesis 2: Autonomy Rung Demotion** | Agent autonomy earned via evidence (and demoted upon escaped defects) limits operational risk. | Escaped defects trigger automatic demotion of the specific task class back to mandatory L2 human review. |
| **Hypothesis 3: Zero Divergence Shadow Gate** | Mirroring live volume against legacy LMS identifies 100% of discrepancy edge cases prior to cutover. | Maintain full rollback capabilities on GCP with zero redirection of live customer traffic until cleared. |
| **Hypothesis 4: Commodity Inference via Vertex** | Procuring LLMs as a commodity via Vertex AI prevents model lock-in and allows seamless model upgrades. | Implement multi-model routing (Gemini/Claude) in the Antigravity plane based on task classification. |

&nbsp;

## **7\. SCOPE EXCLUSIONS**

To maintain the architectural integrity of the MVP, the following boundaries have been established:

&nbsp;

&nbsp;

| Category | Excluded Scope & Boundaries |
| :---- | :---- |
| **Legacy Tooling Overhaul** | Revamping existing Jira, GitHub, or legacy SDLC workflows is out of scope. The "house next door" strategy builds net-new patterns completely separate from current setups. |
| **Direct Core Integration (Phase 1\)** | Direct active integration back into the legacy core platform during initial MVP build is excluded (treated as a 12–18 month milestone). |
| **Non-GCP Cloud Target** | Building or deploying factory pipelines on non-GCP cloud providers is excluded; all new infrastructure targets GCP. |

## **8\. STAKEHOLDERS & BUSINESS VALUE METRICS**

&nbsp;

Establishing clear alignment across leadership, delivery teams, and key performance indicators ensures that Project Catalyst translates software engineering modernization into measurable business outcomes.

| Stakeholder / Metric Area | Key Personnel & Target Details |
| ----- | ----- |
| **Project Leadership (Zip)** | **Chris Nelms** (CISO & Executive Transformation Owner) **Eric Blassberg** (Delivery & Program Execution Lead) |
| **Google Cloud Team** | **Phoebe Gunter** (Customer Engineer / Google Owner) **Stu Turner** (Google Cloud Account Lead) |
| **Partner Leadership (Quantium)** | **Stephen Smyth** (Financial Services Executive Lead) **Justin Spratt** (Head of AI Partnerships) |
| **User Impact & Target Audience** | Zip Product Engineers, Systems Engineers, and Domain SMEs across 5 LMS domains transitioning from traditional SDLC to an AI DLC. |
| **Core Value Metric** | Compression of core platform rebuild from a multi-year effort down to **37–45 weeks to shadow gate**; Agentic Factory operational in **8–12 weeks**. |
| **Efficiency & Financial Gain** | Progressive reduction in engineering unit cost of delivery across quarterly release drumbeats; compression of sprint cycles from 2 weeks to daily iterations. |
| **Phase 1 Success Metric** | Agentic Factory stood up on GCP in 8–12 weeks (by Nov 2026); successful pilot execution on single LMS domain sub-component. |
| **Phase 2 Success Metric** | Parallel build across all 5 LMS domains meeting 4-week cross-domain integration milestones. |
| **Phase 3 Success Metric** | Zero unexplained divergences under live production traffic mirrored through GKE service-mesh; full retirement of Azure commit-to-consume by December 2026\. |

&nbsp;

## **9\. BUILD SCOPE**

The following activities define the core engineering scope for the embedded Google FDE and partner pod:

* **Control Plane & Sandbox Infrastructure**: Build the GKE control plane, Temporal orchestrator, Cloud SQL registry, and disposable Cloud Run sandboxes.  
* **Vertex AI Model Pipeline**: Configure Vertex AI routing for Gemini and Claude models with Model Context Protocol (MCP) integrations.  
* **Spec-Driven Harness & Eval Harness**: Construct the GitHub spec repo template framework, policy-as-code eval suites, and GCS evidence collection pipeline.  
* **LMS Domain Co-Development**: Co-build net-new LMS microservices across the 5 core domains (Decisioning, Issuing, Repayments, Customer Master, Merchant Engine) in parallel.  
* **Shadow Gate Mirroring Pipeline**: Configure service-mesh mirroring on GKE to mirror live production traffic for reconciliation.

## **10\. PROJECT TIMELINE**

&nbsp;

| Milestone | Description & Expected Deliverables |
| :---- | :---- |
| **Week 0 (Mobilization)** | NDAs executed, customer team aligned, project charter and GCP landing zone established. |
| **Weeks 1–4 (Foundation)** | Core SDLC foundations complete. GKE plane deployed, spec repo established, discovery on LMS domain requirements finalized. |
| **Weeks 5–8 (Factory Setup & Pilot)** | Initial Agentic Factory pipeline operational. Pilot run executed on a single domain sub-component. |
| **Weeks 9–12 (Factory GA & Azure Retirement Readiness)** | Agentic Factory fully operational. Parallel LMS domain generation starts. GCP infrastructure prepared for Azure retirement (Dec 2026). |
| **Weeks 13–32 (Parallel Domain Build)** | 5 domain squads build in parallel to 4-week integration milestones using Kanban factory flow. |
| **Weeks 33–45 (Shadow Evaluation & Cutover)** | Live traffic mirrored through shadow gate. Divergence analysis completed, leading to executive cutover sign-off. |

## **11\. TESTING AND SUCCESS CRITERIA**

### Testing Protocol

* **Spec Separation**: Mandatory author/judge separation on 100% of generated pull requests.  
* **Automated V\&V**: Regulatory conformance, security, and legacy reconciliation suites executed autonomously for every build.  
* **Shadow Mode Reconciliation**: Automated output comparison across production-volume traffic mirrored through GKE service-mesh.

### Success Criteria

* **Factory Deployment**: Agentic Factory operational on GCP within 8–12 weeks from kick-off (by November 2026).  
* **Delivery Compression**: Compression of 5-domain LMS rebuild into 37–45 weeks to shadow gate.  
* **Quality & Accuracy**: Zero unexplained divergences between net-new LMS and legacy outputs during Phase 3 shadow testing.

## **12\. POD STRUCTURE**

&nbsp;

| Stakeholder / Metric Area | Target Details |
| :---- | :---- |
| **Project Leadership** | Google Owner: [Phoebe Gunter](mailto:phoebeg@google.com) Zip POC: [chris.nelms@zip.co](mailto:chris.nelms@zip.co)[eric.blassberg@zip.co](mailto:eric.blassberg@zip.co) |
| **User Impact** | Zip Product and Systems Engineers transitioning from manual SDLC to AI DLC. |
| **Core Value Metric** | Multi-year LMS rebuild compressed to 37–45 weeks; initial factory running in 8–12 weeks. |
| **Efficiency Gain** | Progressive reduction in unit cost of delivery with compounding spec libraries; sprint compression to daily cycles. |
| **Phase 1 Success** | Agentic Factory stood up on GCP in 8–12 weeks; pilot spec run validated. |
| **Phase 2 Success** | Parallel build across all 5 LMS domains meeting 4-week integration drumbeats. |
| **Phase 3 Success** | Zero unexplained divergences under mirrored live traffic leading to executive cutover. |

## 

| Stakeholder / Role | Responsibilities & Personnel |
| :---- | :---- |
| **Project Leadership & Executive Owners** | **Zip Owners**: Chris Nelms (CISO & Executive Transformation Owner), Eric Blassberg (Delivery Lead)**Google Owner**: Phoebe Gunter (Customer Engineer)**Partner Owner**: Stephen Smyth (Quantium Financial Services Lead) |
| **Zip Team Structure: Catalyst Squads (5x Squads)** | 5x (Domain SME \+ Systems Engineer) owning spec fidelity and output validation across the 5 LMS domains. |
| **AI Architecture & Platform Pod** | Principal AI Architect, Factory Lead, Google FDEs, and DevOps Engineers owning the GKE control plane, Vertex AI pipelines, and toolchain. |
| **Verification & Validation (BMV) Pod** | V\&V Lead and SREs (former QA leads) owning test strategy, regulatory verification, policy-as-code, and merge sign-offs. |

&nbsp;