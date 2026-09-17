/**
 * Zip Agentic Factory — Project Catalyst Scoping, SoW, RACI, 12-Week Plan & 18-Month Roadmap
 * Decoupled Data Asset (Official 2024 Zip Brand Guidelines v2.0 Compliant)
 */
window.PLANNING_DATA = {
  meta: {
    title: "Project Catalyst Scoping & Phased Plan",
    subtitle: "Capacity feasibility evaluation for the 8–12 week factory build window, 3 delivery scenarios, Statement of Work (SoW), Definition of Done (DoD), cross-functional RACI, 12-week phased execution plan, and the enduring 18-month enterprise roadmap.",
    windowWeeks: "8–12 Weeks",
    recommendedScenario: "Scenario 3 (12 Weeks · Sequential Handover)",
    totalEffortPW: 61.0,
    driftTarget: "$0.00"
  },

  verdict: {
    badge: "EXECUTIVE SCOPING EVALUATION",
    status: "VERDICT: ADEQUATE & VIABLE (WITH DISCIPLINE)",
    headline: "Is the 8–12 Week Timeline Adequate for 1x Google FDE?",
    summary: "Yes, the 8–12 week timeframe is adequate and viable — provided there is strict scoping discipline: The 1x Google Field Deployed Engineer (FDE) must be scoped exclusively as the technical spearhead who builds the factory machine and executes a single pilot dry run (Repayments & Loan Amortization Engine). The subsequent 12-month migration of all 5 Loan Management System (LMS) domains and live shadow gating is executed by Partner FDEs (Quantium) and Zip Senior Engineers (14 SWEs over 9 months).",
    dividingLine: "The Google FDE builds the assembly line and validates the first car through it. Zip and Quantium operate the plant to manufacture the fleet. If the Google FDE is still hands-on at Week 20, knowledge transfer has failed and the enduring Zip asset premise becomes an outsourced dependency."
  },

  scenarios: [
    {
      id: "scenario-1",
      number: "SCENARIO 1",
      riskBadge: "⚠️ HIGH RISK",
      riskLevel: "high",
      title: "8-Week Accelerated Sprint",
      tagline: "Aggressive Minimum Viable Build",
      description: "Compresses control plane setup, harness, and a synthetic mock pilot into 8 weeks. Feasible only if GCP VPC, IAM, and Vertex AI quotas are 100% pre-provisioned on Day 0.",
      metrics: {
        googleFde: "8 Person-Weeks (100%)",
        zipTeam: "12 Person-Weeks (2 SWEs)",
        partner: "Minimal (observing only)",
        pilotScope: "Synthetic mock test (no replay)",
        handover: "Async README & recorded demo"
      },
      tradeoff: "Fastest completion, but fragile to enterprise delays. High probability that partner/Zip engineers cannot operate the factory independently without ongoing Google escalations."
    },
    {
      id: "scenario-2",
      number: "SCENARIO 2",
      riskBadge: "🟡 PRAGMATIC BASELINE",
      riskLevel: "moderate",
      title: "10-Week Balanced MVP",
      tagline: "Functional Build + Sample Replay",
      description: "Provides buffer for initial GCP landing zone provisioning, stands up the 10 MVP personas, and runs the Repayments pilot against a 1-month sample of historical transactions.",
      metrics: {
        googleFde: "10 Person-Weeks (100%)",
        zipTeam: "18 Person-Weeks (2 SWEs + Arch)",
        partner: "4 Person-Weeks (onboarding W8)",
        pilotScope: "1-Month historical sample replay",
        handover: "2-week compressed pairing"
      },
      tradeoff: "Solid technical validation, but partner co-delivery is compressed into 2 weeks. Leaves limited margin if historical data reconciliation uncovers subtle float rounding edge cases."
    },
    {
      id: "scenario-3",
      number: "SCENARIO 3 · RECOMMENDED",
      riskBadge: "🟢 ENTERPRISE DERISKED",
      riskLevel: "low",
      recommended: true,
      title: "12-Week Sequential Handover",
      tagline: "Complete Build + Full Replay + 4-Week Partner Transfer",
      description: "The executive-preferred and Google-recommended model. Google FDE spearheads MVP build & pilot in Weeks 1–8; then conducts a formal 4-week co-delivery workshop with Quantium & Zip engineers in Weeks 9–12.",
      metrics: {
        googleFde: "12 Person-Weeks (100% W1–8, tapering W9–12)",
        zipTeam: "28 Person-Weeks (4 SWEs + Arch + CISO)",
        partner: "16 Person-Weeks (4 FDEs W9–12)",
        pilotScope: "3-Year historical replay ($0.00 drift)",
        handover: "4-week Progressive Ownership Ladder"
      },
      tradeoff: "Guarantees operational autonomy. Quantium and Zip engineers independently run a second dry run unassisted before the Google FDE departs, preventing long-term vendor lock-in."
    }
  ],

  comparisonMatrix: [
    { dimension: "Primary Objective", s1: "Fastest technical proof", s2: "Functional MVP + Sample verification", s3: "Production-grade factory + Certified partner handover" },
    { dimension: "Google FDE Allocation", s1: "8 Person-Weeks (100%)", s2: "10 Person-Weeks (100%)", s3: "12 Person-Weeks (100% W1–8, 50% W9–10, 25% W11–12)" },
    { dimension: "Zip Resourcing Required", s1: "2 Senior SWEs (part-time)", s2: "2 SWEs + 1 Architect (50%)", s3: "1 Factory Architect + 4 Senior SWEs + CISO sign-off" },
    { dimension: "Partner Resourcing (Quantium)", s1: "0 active weeks (observer)", s2: "2 active weeks (onboarding W9–10)", s3: "4 active weeks (co-delivery squad W9–12)" },
    { dimension: "Pilot Module Depth", s1: "Synthetic unit tests only", s2: "1-Month transaction sample replay", s3: "Full 3-year historical loan replay (50,000+ accounts)" },
    { dimension: "Ledger Reconciliation Proof", s1: "Mock assert ($0.00 synthetic)", s2: "Partial ledger diff ($0.00 sample)", s3: "Full $0.00 zero-cent balance drift against legacy Snowflake" },
    { dimension: "Personas Deployed", s1: "6 Core Personas", s2: "10 MVP Personas", s3: "10 MVP Personas + Versioned Prompts + Eval Harness" },
    { dimension: "Handover Mechanism", s1: "Code drop & documentation", s2: "2-week pairing sprint", s3: "4-Stage Progressive Ownership Ladder (FDE → Zip/Quantium)" },
    { dimension: "GCP Pre-Conditions Dependency", s1: "CRITICAL: Day-0 full landing zone", s2: "Standard enterprise ramp (1 week buffer)", s3: "Standard enterprise ramp (2 weeks buffer)" },
    { dimension: "Overall Program Risk", s1: "HIGH RISK", s2: "MODERATE", s3: "LOW / DERISKED" }
  ],

  wbs: [
    { workstream: "1. Landing Zone & GKE Control Plane", fde: "2.0 PW", arch: "0.5 PW", partner: "0.5 PW", swe: "0.5 PW", deliverable: "GKE cluster, Temporal orchestrator, Cloud SQL registry" },
    { workstream: "2. Agentic SDLC Harness & Tool Adapters", fde: "2.5 PW", arch: "0.5 PW", partner: "0.5 PW", swe: "1.0 PW", deliverable: "Cloud Run sandboxes, GitHub/Jira/Postgres MCP Hub" },
    { workstream: "3. 10 MVP Personas & Isolated TDD", fde: "2.0 PW", arch: "0.5 PW", partner: "1.0 PW", swe: "1.5 PW", deliverable: "10 calibrated personas, zero-code-access test runner" },
    { workstream: "4. Repayments Dry Run (Iteration 1)", fde: "2.5 PW", arch: "1.0 PW", partner: "2.0 PW", swe: "3.0 PW", deliverable: "Repayments Go/Python microservice, AST diff pass" },
    { workstream: "5. Historical Ledger Replay ($0.00 Drift)", fde: "1.0 PW", arch: "0.5 PW", partner: "3.0 PW", swe: "3.0 PW", deliverable: "50k loan account replay against Snowflake logs" },
    { workstream: "6. Handover Workshop & Dry Run (Iter 2)", fde: "1.0 PW", arch: "1.0 PW", partner: "5.0 PW", swe: "6.0 PW", deliverable: "Partner/Zip engineers run full cycle unassisted" },
    { workstream: "7. Governance, Runbooks & Sign-Off", fde: "1.0 PW", arch: "0.5 PW", partner: "2.0 PW", swe: "3.0 PW", deliverable: "Handover pack signed off by Chris Nelms & Eric Blassberg" }
  ],

  sow: {
    inScope: [
      { title: "Factory Substrate", detail: "GKE Control Plane, Temporal orchestrator, Cloud SQL Agent Registry, and Vertex AI Multi-Model Gateway." },
      { title: "Safety Controls", detail: "Sub-second Slack MCP kill switch (<750ms propagation) and immutable Cloud Logging audit trail." },
      { title: "Harness & Sandboxes", detail: "Disposable Cloud Run container execution sandboxes and single-task ephemeral IAM credentials." },
      { title: "10 MVP Personas", detail: "Calibrated system prompts, YAML contracts, and bounded tool suites across the 26-Persona catalog." },
      { title: "Isolated TDD Runner", detail: "Test Engineer running in zero-code isolation strictly from signed PRD contracts." },
      { title: "Pilot Dry Run (Iteration 1)", detail: "End-to-end factory build of the Repayments & Loan Amortization Engine." },
      { title: "Historical Ledger Proof", detail: "Replay validation achieving $0.00 zero-cent drift against legacy Azure logs." },
      { title: "Handover Pack", detail: "Architecture decision records (ADRs), Terraform modules, operational runbooks, and 4 weeks of paired coaching." }
    ],
    outOfScope: [
      { title: "Remaining 4 LMS Domains", detail: "Full re-platforming of Decisioning, Issuing, Customer Master, and Merchant Engine (carried out in Stage 3)." },
      { title: "Production Cutover", detail: "Live DNS write switch from Azure LMS to Google Cloud Platform (Stage 4)." },
      { title: "Azure Monolith Decommission", detail: "Commercial retirement and data archival of the legacy Azure environment." },
      { title: "Long-Term 24/7 Operations", detail: "Ongoing on-call support and production incident triage." },
      { title: "Hiring & Team Management", detail: "Sourcing and onboarding the 14 permanent Zip senior engineers." }
    ],
    pilotRationale: [
      { title: "1. Decimal Precision", detail: "Demands exact fixed-point minor-unit (int64 cents) representations (zero IEEE 754 float drift) across interest accruals and daily principal splits." },
      { title: "2. Double-Entry Invariant", detail: "Strict mathematical balance proof: total debits minus total credits must equal $0.00 on every journal posting." },
      { title: "3. Statutory Alignment", detail: "Ingests Truth in Lending Act (Reg Z) APR disclosure tolerances and Equal Credit Opportunity Act (Reg B) rules." },
      { title: "4. Legacy Truth Data", detail: "3 years of production logs in Snowflake/Databricks provide an indisputable ground-truth replay dataset." }
    ]
  },

  dodGates: [
    { id: "DOD-1", milestone: "M1 · Week 2", requirement: "GKE Control Plane & Temporal orchestrator running with 99.9% health check.", proof: "Automated synthetic heartbeat workflow & Cloud SQL schema dump", authority: "Platform Architect" },
    { id: "DOD-2", milestone: "M1 · Week 2", requirement: "Sub-second Slack kill switch aborts all active execution sandboxes within 750ms.", proof: "Automated chaos test log & signed kill-switch audit trace", authority: "Chris Nelms (CISO)" },
    { id: "DOD-3", milestone: "M2 · Week 5", requirement: "Vertex AI multi-model gateway routes Gemini 1.5 Pro and Gemini 1.5 Flash with token quota caps.", proof: "Token telemetry Grafana dashboard & rate limit enforcement test", authority: "Google FDE" },
    { id: "DOD-4", milestone: "M2 · Week 5", requirement: "10 MVP Personas registered with versioned prompt templates, tool boundaries, and YAML contracts.", proof: "PRD frontmatter validator & Agent Registry query", authority: "Persona Steward" },
    { id: "DOD-5", milestone: "M2 · Week 5", requirement: "Test Engineer operates in zero-code sandbox; spec-derived tests execute and fail before codegen (TDD).", proof: "Git commit timeline & sandbox network boundary audit log", authority: "Test Engineer (Isolated)" },
    { id: "DOD-6", milestone: "M3 · Week 8", requirement: "Repayments microservice passes 100% of isolated unit tests and AST conformance diff.", proof: "Build Report & Negotiation File CODEOWNERS approval", authority: "Systems Engineer" },
    { id: "DOD-7", milestone: "M3 · Week 8", requirement: "Historical ledger replay of 50,000+ loan accounts achieves $0.00 zero-cent balance drift.", proof: "Final Report & BigQuery drift diff report", authority: "Reconciliation Analyst" },
    { id: "DOD-8", milestone: "M4 · Week 12", requirement: "Two named Zip engineers and two Quantium FDEs independently run a full factory cycle with 0 FDE touches.", proof: "Unassisted execution recording & Handover Artifact Pack sign-off", authority: "Chris Nelms & Eric Blassberg" }
  ],

  handoverLadder: [
    { stage: "STAGE 1", weeks: "WEEKS 1–4", title: "FDE Drives · Zip Observes", desc: "Google FDE deploys GKE Control Plane, Temporal orchestrator, and Cloud SQL registry. Named Zip/Quantium engineers shadow architecture setup sessions.", fdePct: 100, zipPct: 15 },
    { stage: "STAGE 2", weeks: "WEEKS 5–8", title: "FDE Drives · Zip/Quantium Pairs", desc: "Google FDE leads Repayments Dry Run (Iteration 1). Partner and Zip engineers actively pair on PRD contract authoring, AST verification, and ledger reconciliation.", fdePct: 80, zipPct: 50 },
    { stage: "STAGE 3", weeks: "WEEKS 9–10", title: "Zip/Quantium Drives · FDE Pairs", desc: "Partner FDEs and Zip engineers take the keyboard to execute Repayments Dry Run (Iteration 2). Google FDE steps into an advisory/pairing support posture.", fdePct: 40, zipPct: 85 },
    { stage: "STAGE 4", weeks: "WEEKS 11–12", title: "Zip/Quantium Owns · FDE Observes", desc: "Zip and Quantium run an unassisted full factory cycle with zero Google intervention. Complete handover pack sign-off and transition to Stage 3 scaling.", fdePct: 15, zipPct: 100 }
  ],

  raciMatrix: [
    { workstream: "1. Landing Zone & VPC Alignment", fde: "R", factoryArch: "C", archTeam: "C", quantium: "I", zipSwes: "I", execs: "A" },
    { workstream: "2. GKE Substrate & Control Plane", fde: "R", factoryArch: "C", archTeam: "C", quantium: "I", zipSwes: "I", execs: "A" },
    { workstream: "3. Agentic SDLC Harness & 10 Personas", fde: "R", factoryArch: "C", archTeam: "C", quantium: "C", zipSwes: "C", execs: "A" },
    { workstream: "4. Isolated TDD & Eval Suites", fde: "R", factoryArch: "C", archTeam: "I", quantium: "C", zipSwes: "C", execs: "A" },
    { workstream: "5. Repayments Dry Run (Iteration 1)", fde: "R", factoryArch: "C", archTeam: "C", quantium: "C", zipSwes: "C", execs: "A" },
    { workstream: "6. Historical Ledger Replay ($0.00 Drift)", fde: "C", factoryArch: "C", archTeam: "C", quantium: "R", zipSwes: "R", execs: "A" },
    { workstream: "7. Repayments Dry Run (Iteration 2 — Handover)", fde: "C", factoryArch: "R", archTeam: "C", quantium: "R", zipSwes: "R", execs: "A" },
    { workstream: "8. Multi-Domain LMS Scaling (Stage 3 W13+)", fde: "I", factoryArch: "A", archTeam: "C", quantium: "R", zipSwes: "R", execs: "A" }
  ],

  handoverArtifacts: [
    { title: "1. ADR Repository", desc: "Complete architecture decision records indexed in GitHub from Day 1." },
    { title: "2. Terraform Modules", desc: "Production IaC for GKE, Cloud Run, and Cloud SQL with automated rollback." },
    { title: "3. Spec Templates", desc: "Standardized PRD contract format with YAML frontmatter and statutory bindings." },
    { title: "4. Persona Library", desc: "10 MVP personas versioned in Git with regression evaluation test suites." },
    { title: "5. Eval Test Harness", desc: "Automated harness scoring agent PRDs and AST diffs against regressions." },
    { title: "6. On-Call Runbook", desc: "Step-by-step incident response for sandbox escapes and model throttling." },
    { title: "7. Limitations Register", desc: "Documented technical debt and deferred items triaged in the Parking Lot." },
    { title: "8. Certification Record", desc: "Formal training record for 2 named Zip engineers and 2 Quantium FDEs." }
  ],

  weeklyPlan: [
    { week: 1, month: "OCTOBER 2026", phase: "DISCOVERY & FOUNDATION", isGate: false, title: "Onboarding, Landing Zone & Discovery Validation", desc: "Joint architecture review with Zip Architecture Team and Quantium lead. Confirm GCP VPC peering, IAM policies, and Vertex AI quota reservations. Validate Repayments domain legacy schema in Azure.", deliverables: "Azure→GCP current-state gap matrix · ADR-001 (Control Plane Topology) · Quota approval confirmation." },
    { week: 2, month: "OCTOBER 2026", phase: "MILESTONE GATE M1 (SUBSTRATE)", isGate: true, gateId: "DOD-1 / DOD-2", title: "Control Plane Substrate & Central Kill Switch", desc: "Deploy GKE Control Plane cluster, Temporal workflow orchestrator, and Cloud SQL Agent Registry. Implement the sub-second Slack MCP kill switch and verify sub-750ms process termination across all active nodes.", deliverables: "Operational GKE cluster · Cloud SQL Agent Registry schema · Signed kill-switch drill test report." },
    { week: 3, month: "OCTOBER 2026", phase: "MODEL TIER", isGate: false, title: "Multi-Model Gateway & Token Economics", desc: "Configure Vertex AI routing for Gemini 1.5 Pro (deep specification, code generation, and statutory review) and Gemini 1.5 Flash (syntax linting and fast evaluation). Stand up token telemetry.", deliverables: "Model Gateway proxy · Per-task token quota middleware · Cost-per-spec tracking dashboard." },
    { week: 4, month: "OCTOBER 2026", phase: "SANDBOXES & MCP HUB", isGate: false, title: "Disposable Sandboxes & Tool Adapters", desc: "Build Cloud Run disposable container runtime templates. Connect GitHub Enterprise, Jira MCP (read-only), and PostgreSQL tools with single-task ephemeral IAM credentials.", deliverables: "Cloud Run container images · MCP Hub adapter daemon · Ephemeral token lifecycle manager." },
    { week: 5, month: "NOVEMBER 2026", phase: "MILESTONE GATE M2 (HARNESS & PERSONAS)", isGate: true, gateId: "DOD-3 / DOD-4 / DOD-5", title: "10 MVP Personas & Isolated TDD Runner", desc: "Version and register the 10 MVP personas with calibrated prompts in Cloud SQL. Configure the Isolated Test Engineer sandbox with strict zero-code access, enforcing spec-derived test generation (TDD).", deliverables: "10 versioned persona definitions · Zero-code TDD runner pipeline · First pairing session with Zip engineers." },
    { week: 6, month: "NOVEMBER 2026", phase: "DRY RUN SPECIFICATION", isGate: false, title: "Repayments PRD Contract & Adversarial Audit", desc: "Ingest Repayments domain rules. Author high-definition PRD contract with YAML frontmatter. Execute Spec Adversary and Regulatory Analyst to uncover ambiguities, untestable assertions, and Reg Z clauses.", deliverables: "Signed Repayments PRD contract · Spec ambiguity triage log · Reg Z/B statutory verification assertions." },
    { week: 7, month: "NOVEMBER 2026", phase: "CODEGEN & REVIEW", isGate: false, title: "Microservice Generation & AST Conformance Diff", desc: "Implementation Engineer generates Go/Python Repayments microservice in Cloud Run. Isolated Test Engineer executes spec-derived test suite. AST diff analyzer checks conformance. Human Systems Engineer reviews.", deliverables: "Generated microservice repository · 100% test pass report · Approved Negotiation File." },
    { week: 8, month: "NOVEMBER 2026", phase: "MILESTONE GATE M3 (REPAYMENTS PILOT VERIFIED)", isGate: true, gateId: "DOD-6 / DOD-7", title: "Historical Ledger Replay ($0.00 Cent Drift Proof)", desc: "Play back 50,000+ historical loan transactions from Snowflake/Databricks through the new Repayments engine. Compare balances cent-for-cent against legacy Azure logs. Assert $0.00 drift across all accounts.", deliverables: "Final Report · $0.00 drift verification certificate · Evidence Pack uploaded to GCS · MVP Iteration 1 Complete." },
    { week: 9, month: "DECEMBER 2026", phase: "CO-DELIVERY WORKSHOP", isGate: false, title: "Handover Workshop — Dry Run Iteration 2 (Partner Drives)", desc: "Quantium FDEs and Zip engineers take the keyboard to author and execute a modification cycle (e.g. promotional interest tier). Google FDE steps into a pairing/coaching role.", deliverables: "Second clean factory cycle driven by partner · Iteration 2 microservice build · Calibration adjustments." },
    { week: 10, month: "DECEMBER 2026", phase: "OPERATIONS & RESILIENCE", isGate: false, title: "Control Plane Operations & Failure Drills", desc: "Zip and Quantium engineers manage deployment, monitoring, and sandbox scaling. Execute Chaos Mesh pod killing and latency degradation drills. Verify automated recovery.", deliverables: "Chaos drill pass report · Incident management runbooks validated · Alerting rules configured." },
    { week: 11, month: "DECEMBER 2026", phase: "UNASSISTED EXECUTION", isGate: false, title: "Unassisted Factory Cycle & Artifact Pack Finalization", desc: "Zip and Quantium run an end-to-end factory cycle with zero Google intervention. Handover artifact pack (ADRs, Terraform, persona evals) reviewed and accepted by the receiving team.", deliverables: "Unassisted execution audit log · Complete Handover Artifact Pack · Token spend baseline report." },
    { week: 12, month: "DECEMBER 2026", phase: "MILESTONE GATE M4 (HANDOVER CERTIFIED & EXIT)", isGate: true, gateId: "DOD-8", title: "Executive Sign-Off & Transition to Stage 3 Scaling", desc: "Formal review of all 8 Definition of Done exit criteria. Executive sign-off from Chris Nelms (CISO) and Eric Blassberg (Delivery Lead). Transition to Quantium-led Stage 3 multi-domain build. Google FDE exits on schedule.", deliverables: "Signed Engagement Closure Charter · Training certifications for named Zip engineers · Stage 3 handover baseline." }
  ],

  programRoadmap: [
    {
      stage: "STAGE 0",
      months: "MONTHS 1–2",
      title: "Foundation & Sandbox Isolation (FDE Spearhead)",
      owner: "Platform Architect & Cloud Security",
      exitGate: "Penetration test & sandbox escape audit",
      summary: "Standing up the immutable GCP control plane, disposable Cloud Run sandbox container templates, Vertex AI multi-model routing, and verifying sub-second central kill switch propagation.",
      workstreams: [
        { name: "Platform", items: ["GKE Control plane cluster", "Temporal orchestrator deploy", "Cloud SQL Agent Registry"] },
        { name: "Governance", items: ["Skills Agent SDLC baselines", "Agent certificate issuer", "Least-privilege token quotas"] },
        { name: "Model Tier", items: ["Vertex AI Gemini 1.5 Pro routing", "Vertex AI Gemini 1.5 Flash routing", "Token economics telemetry"] },
        { name: "Security Gate", items: ["Sandbox escape pentest", "Slack MCP kill-switch test", "Immutable audit log setup"] }
      ]
    },
    {
      stage: "STAGE 1",
      months: "MONTHS 3–5",
      title: "Single Domain Pilot — Repayments Engine (FDE & Partner Transfer)",
      owner: "Domain SME Lead & Systems Engineer",
      exitGate: "Human CODEOWNERS review pass, 0 regulatory gaps",
      summary: "First full factory execution cycle on the highest-value LMS domain. Tests paired specification authoring, isolated TDD test generation, and human Systems Engineer review.",
      workstreams: [
        { name: "Specification", items: ["PRD contract formulation", "Spec Adversary review", "Reg Z/B clause mapping"] },
        { name: "Isolated TDD", items: ["Test Engineer spec ingest", "100% spec-derived suites", "Zero-code-access verify"] },
        { name: "Generation", items: ["Cloud Run sandboxes", "AST Conformance diff", "Negotiation File triage"] },
        { name: "Review Gate", items: ["Human Systems Engineer", "CODEOWNERS sign-off", "Scoring to Cloud SQL"] }
      ]
    },
    {
      stage: "STAGE 2",
      months: "MONTHS 6–8",
      title: "Shadow Gate & Historical Ledger Playback (Partner-Led)",
      owner: "Integration Engineer & Data Architect",
      exitGate: "Cent-for-cent ($0.00) historical ledger reconciliation",
      summary: "Validating financial integrity by playing back 3 years of historical loan transactions against new microservices, and configuring GKE Service Mesh side-effect suppression.",
      workstreams: [
        { name: "Data Movement", items: ["Idempotent ETL scripts", "Historical loan backfill", "State re-baselining sync"] },
        { name: "Reconciliation", items: ["Double-entry proofs", "Zero-cent drift validation", "Rounding rule baseline"] },
        { name: "Service Mesh", items: ["Traffic mirroring setup", "Side-effect suppression", "Card rails blocked"] },
        { name: "Evidence", items: ["Historical replay log", "Bank compliance audit", "GCS Evidence Pack"] }
      ]
    },
    {
      stage: "STAGE 3",
      months: "MONTHS 9–14",
      title: "Multi-Domain Scaling — All 5 LMS Domains (Quantium & 14 Zip Engineers)",
      owner: "Delivery Lead Eric Blassberg",
      exitGate: "Unit cost per spec decreases >30% (compounding proven)",
      summary: "Scaling out the factory across Issuing, Customer Master, Merchant Engine, and Ledger. Activating the Autonomy Rung Governor to promote clean task classes from L2 supervised to L4 autonomous.",
      workstreams: [
        { name: "Domain Expansion", items: ["Issuing microservices", "Customer Master service", "Merchant Engine rebuild"] },
        { name: "Autonomy Rungs", items: ["L2 -> L4 promotion", "Escaped-defect demotion", "Review bottleneck relief"] },
        { name: "Compounding Loop", items: ["Golden spec template reuse", "ADR indexing in Phase 7", "Unit cost reduction >30%"] },
        { name: "Resilience", items: ["10x load chaos testing", "Chaos Mesh injection", "SLO dashboard verification"] }
      ]
    },
    {
      stage: "STAGE 4",
      months: "MONTHS 15–18",
      title: "Production Cutover & Azure Retirement",
      owner: "Chris Nelms & Eric Blassberg",
      exitGate: "14 consecutive days clean shadow run, Azure decommission",
      summary: "Live traffic transition from Azure LMS to Google Cloud Platform. 14 consecutive clean days of shadow mirroring without unexplained divergences, 15-minute emergency rollback verification, and retiring legacy commits.",
      workstreams: [
        { name: "Shadow Mirroring", items: ["100% production traffic", "Real-time divergence triage", "0 unexplained variances"] },
        { name: "Safety Rollback", items: ["15-minute revert drill", "Automated switchback test", "Runbook sign-off"] },
        { name: "Executive Cutover", items: ["Chris Nelms sign-off", "Eric Blassberg sign-off", "LMS write cutover"] },
        { name: "Retirement", items: ["Azure LMS decommission", "Commercial commit end", "Legacy DB archival"] }
      ]
    }
  ]
};
