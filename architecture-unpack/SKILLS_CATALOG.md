# Zip Agentic Factory — Master Skills & Capabilities Catalog

**Project Catalyst · Agent Factory / LMS Rebuild**  
**Executive Architecture Read-Back & Technical Reference**  
**Co-Developed by:** Google FDE / CE Team & Zip Engineering Leadership (Chris Nelms, Eric Blassberg)  
**Date:** September 2, 2026  
**Reference Standards:** [Agent Plugins 1.0.0](https://agent-plugins.org/) · [Google Skills Ecosystem](https://github.com/google/skills) · [Double Diamond Design](.agents/skills/double-diamond-design/SKILL.md) · Resolving [PL-43](PARKING_LOT.md)  

---

## 1. Executive Summary & Provenance Architecture

The Zip Agentic Factory requires two complementary classes of machine-executable capabilities to safely and autonomously rebuild the core Loan Management System (LMS) on Google Cloud Platform:

1. **Google Cloud Platform Skills (`google/skills`):** Infrastructure provisioning, sandbox isolation, database and ledger storage, high-throughput BigQuery analytics, Cloud Logging/Monitoring observability, IAM/Workload Identity security, and agent evaluation/lifecycle management.
2. **Zip Proprietary Domain & Governance Skills:** US consumer lending business rules (amortization, day-count conventions, delinquency waterfalls), core-banking double-entry ledger balance proofs ($0.00 zero-cent drift), federal/state statutory compliance (Reg Z, Reg B, FDCPA, PCI DSS), and house SDLC principles (spec-derived TDD authoring, AST conformance diffing, and side-effect suppression).

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           DUAL-LAYER SKILLS ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│ LAYER 1: GCP PLATFORM SKILLS (Google Provided - Ready in google/skills)          │
│ • Compute & Sandboxes (cloud-run, gke, cloud-build)                             │
│ • Databases & Ledgers (cloud-sql-postgres, spanner, bigquery)                   │
│ • Observability & Telemetry (cloud-logging, cloud-monitoring, promql, slo)      │
│ • Security & Governance (waf-security, iam-simulator, securecoder-scanner)     │
│ • Agent Lifecycle (agents-cli, gemini-agents-api, antigravity-sdk)              │
├─────────────────────────────────────────────────────────────────────────────────┤
│ LAYER 2: ZIP LENDING & SDLC SKILLS (Zip Provided - Authored as Agent Plugins)   │
│ • Lending Invariants (amortization calc, accrual validator, delinquency rules)  │
│ • Banking Ledger Proofs (double-entry checker, $0.00 zero-cent drift prover)    │
│ • Regulatory Compliance (Reg Z APR checker, Reg B ECOA, FDCPA, PCI DSS)        │
│ • SDLC Governance (isolated TDD author, AST conformance differ, rail suppressor)│
└─────────────────────────────────────────────────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                      DUAL-RUNTIME EXECUTION SUBSTRATE                           │
├──────────────────────────────────────┬──────────────────────────────────────────┤
│ TIER A: AGENT PLATFORM SANDBOX       │ TIER B: CLOUD RUN BYOD SANDBOX           │
│ (Google Managed · Zero-Trust)        │ (Self-Managed Containers · BYO-Docker)   │
│ • Built-in `code_execution` & tools  │ • Full custom Docker container images    │
│ • Native network allowlists          │ • Legacy C# reverse-engineering tools    │
│ • Mounts from GCS & Skill Registry   │ • Multi-container mock test harnesses    │
│ • Fast TDD unit tests & linting      │ • Phase 5 Chaos Mesh & 10x load testing  │
└──────────────────────────────────────┴──────────────────────────────────────────┘
```

---

## 2. Dual-Runtime Sandboxing Architecture

To balance enterprise zero-trust security with deep compiler flexibility, the factory implements a **Dual-Runtime Execution Strategy**:

### Tier A: Agent Platform Code Execution Sandbox (Managed Zero-Trust)
* **Underlying Technology:** Google Cloud Gemini Enterprise Agent Platform's built-in `code_execution` and `filesystem` tools via the Managed Agents API (`gemini-agents-api`).
* **Strengths:** Instant container provisioning, zero image build overhead, native network allowlists (`network.allowlist`), and direct mounting of versioned skills from Google Cloud Storage or the Agent Platform Skill Registry (`agent-platform-skill-registry`).
* **Target Workloads:** Phase 1 AST spec compilation, Phase 3 spec-derived unit test generation (isolated TDD), code syntax linting, currency floating-point detection, and lightweight script validation.

### Tier B: Cloud Run / GKE BYOD Sandbox (Custom Docker Isolation)
* **Underlying Technology:** Disposable Cloud Run containers and GKE job runners running custom OCI container images with sub-second lifecycle APIs and centralized kill switch triggers.
* **Strengths:** Complete **Bring-Your-Own-Docker (BYOD)** support. Accommodates specialized compilers (e.g. .NET 8 / C# decompilers for legacy Azure LMS reverse-engineering), multi-service mock harnesses, localized Redis/PostgreSQL instances, and Phase 5 Chaos Mesh fault injection.
* **Target Workloads:** Complex microservice compilation, historical data backfill ETL pipelines, multi-container integration testing, and live shadow traffic mirroring.

### Dispatcher Routing Policy (Phase 2)
The Phase 2 Dispatcher evaluates task metadata: if a task requires custom system binaries, multi-container stubs, or legacy C# decompilation, it routes to **Tier B (Cloud Run BYOD)**; if it requires standard Python/Go execution, TDD assertion derivation, or linting, it routes to **Tier A (Agent Platform Sandbox)**.

---

## 3. Skills Summary Metrics Matrix

| Category | Total Skills | Google Provided | Zip Provided | Have Resource (Ready) | Need to Build (To Author) | Phase 1 MVP Critical |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **GCP Compute & Sandboxes** | 7 | 7 | 0 | 7 | 0 | 5 |
| **GCP Databases & Storage** | 7 | 7 | 0 | 7 | 0 | 3 |
| **GCP Analytics & Data** | 3 | 3 | 0 | 3 | 0 | 2 |
| **GCP Observability & Telemetry** | 4 | 4 | 0 | 4 | 0 | 3 |
| **GCP Security & Governance** | 6 | 6 | 0 | 6 | 0 | 5 |
| **Agent Lifecycle & Operations** | 5 | 5 | 0 | 5 | 0 | 5 |
| **SDLC & Engineering Governance** | 9 | 0 | 9 | 9 | 0 | 9 |
| **Lending Domain Invariants** | 5 | 0 | 5 | 5 | 0 | 3 |
| **Banking Ledger Integrity** | 5 | 0 | 5 | 5 | 0 | 5 |
| **Regulatory & Statutory Compliance** | 5 | 0 | 5 | 5 | 0 | 4 |
| **TOTALS** | **56** | **32** | **24** | **56** | **0** | **44** |

---

## 4. Master Skills Inventory & Capability Registry

### 4.1 GCP Compute, Build & Sandboxing (Google Provided)

| Skill ID | Skill Name | Resource Status | Runtime Target | Upstream Resource Reference | Acting Personas | Phase | MVP? | Operational Purpose |
|---|---|:---:|:---:|---|---|:---:|:---:|---|
| `cloud_run_basics` | Cloud Run Sandbox Management | **Ready** | Cloud Run BYOD | `google/skills/cloud-run-basics` | `C1`, `B3` | 3 | ⭐ | Provisions and executes isolated disposable containers with custom Docker dependencies. |
| `agent_platform_code_execution` | Agent Platform Code Execution | **Ready** | Agent Platform | `gemini-agents-api` / `code_execution` | `C1`, `C2` | 3 | ⭐ | Google-managed zero-trust execution sandbox with native network allowlists. |
| `gke_basics` | GKE Cluster Workload Operations | **Ready** | Cloud Run BYOD | `google/skills/gke-basics` | `D5`, `B1` | 2, 5, 6 | ⭐ | Manages core GKE cluster provisioning, credentials, and Workload Identity. |
| `gke_app_onboarding` | GKE Application Manifests | **Ready** | Universal / Both | `google/skills/gke-app-onboarding` | `B1`, `C1` | 3, 5 | | Generates production Kubernetes manifests, Deployments, and ConfigMaps. |
| `gke_service_networking` | GKE Service Mesh & Edge Traffic | **Ready** | Cloud Run BYOD | `google/skills/gke-service-networking` | `B3`, `D5` | 5, 6 | ⭐ | Configures Gateway API, Container-Native NEGs, and traffic mirroring meshes. |
| `gke_reliability` | GKE Workload Reliability & Probes | **Ready** | Universal / Both | `google/skills/gke-reliability` | `D5` | 5 | | Configures PDBs, health probes (liveness/readiness), and topology spread. |
| `cloud_build_basics` | Cloud Build CI/CD Automation | **Ready** | Universal / Both | `google/skills/cloud-build-basics` | `B1`, `E3` | 3, 5 | ⭐ | Automates container image compilation and automated test trigger execution. |

### 4.2 GCP Databases & Core Ledger Storage (Google Provided)

| Skill ID | Skill Name | Resource Status | Runtime Target | Upstream Resource Reference | Acting Personas | Phase | MVP? | Operational Purpose |
|---|---|:---:|:---:|---|---|:---:|:---:|---|
| `cloud_sql_postgres_data` | Cloud SQL PostgreSQL Data Ops | **Ready** | Universal / Both | `google/skills/cloud-sql-postgres-data` | `B2`, `F2` | 2, 4, 7 | ⭐ | Explores schemas, executes queries, and manages agent registry & scoring records. |
| `cloud_sql_postgres_admin` | Cloud SQL PostgreSQL Admin | **Ready** | Cloud Run BYOD | `google/skills/cloud-sql-postgres-admin` | `B2`, `B4` | 1, 2 | ⭐ | Provisions Cloud SQL instances, databases, users, and maintenance flags. |
| `cloud_sql_postgres_monitor` | Cloud SQL Performance & Locks | **Ready** | Universal / Both | `google/skills/cloud-sql-postgres-monitor` | `B2`, `D5` | 5, 6 | | Diagnoses database locks, connection pooling saturation, and engine metrics. |
| `spanner_basics` | Cloud Spanner Schema Design | **Ready** | Universal / Both | `google/skills/spanner-basics` | `B2` | 1, 2 | | Designs horizontally scalable schemas, interleaving, and transaction semantics. |
| `spanner_data` | Cloud Spanner Data Operations | **Ready** | Universal / Both | `google/skills/spanner-data` | `B2`, `C3` | 3, 5 | | Executes distributed read/write SQL queries across Spanner databases. |
| `google_cloud_storage_basics` | GCS Artifact & Evidence Storage | **Ready** | Universal / Both | `google/skills/google-cloud-storage-basics` | `D4`, `E2` | 1, 5, 7 | ⭐ | Stores and retrieves immutable auditor evidence packs and golden spec templates. |
| `google_cloud_storage_diagnostic` | GCS IAM & Permission Diagnostic | **Ready** | Universal / Both | `google/skills/google-cloud-storage-diagnostic` | `B4` | 2, 5 | | Troubleshoots 403 Permission Denied errors, UBLA, and bucket IAM service agents. |

### 4.3 GCP Analytics & Shadow Reconciliation (Google Provided)

| Skill ID | Skill Name | Resource Status | Runtime Target | Upstream Resource Reference | Acting Personas | Phase | MVP? | Operational Purpose |
|---|---|:---:|:---:|---|---|:---:|:---:|---|
| `bigquery_basics` | BigQuery Data Operations | **Ready** | Universal / Both | `google/skills/bigquery-basics` | `D6`, `F4` | 5, 6, 7 | ⭐ | Runs analytical queries and orchestrates jobs for loan transaction histories. |
| `bigquery_sql` | BigQuery High-Performance SQL | **Ready** | Universal / Both | `google/skills/bigquery-sql` | `D6`, `B2` | 5, 6 | ⭐ | Optimizes high-volume reconciliation queries comparing historical loan books. |
| `bigquery_analytics` | BigQuery Automated Insights | **Ready** | Universal / Both | `google/skills/bigquery-analytics` | `F4`, `D6` | 6, 7 | | Generates predictive unit cost forecasts and automated divergence anomaly trends. |

### 4.4 GCP Observability, Telemetry & SRE (Google Provided)

| Skill ID | Skill Name | Resource Status | Runtime Target | Upstream Resource Reference | Acting Personas | Phase | MVP? | Operational Purpose |
|---|---|:---:|:---:|---|---|:---:|:---:|---|
| `cloud_logging_query_generation` | Cloud Logging LQL Query Gen | **Ready** | Universal / Both | `google/skills/cloud-logging-query-generation` | `E1`, `F4` | 3, 4, 6 | ⭐ | Generates Logging Query Language (LQL) to inspect container stdout and audit logs. |
| `cloud_monitoring_promql_query` | Cloud Monitoring PromQL Query | **Ready** | Universal / Both | `google/skills/cloud-monitoring-promql-query` | `E1`, `D5` | 5, 6 | ⭐ | Generates PromQL queries across microservices for latency SLOs and error budgets. |
| `cloud_monitoring_metric_selection` | Cloud Monitoring Metric Discovery | **Ready** | Universal / Both | `google/skills/cloud-monitoring-metric-selection` | `E1` | 1, 5, 6 | | Discovers metric descriptors across Cloud Run, GKE, and Cloud SQL. |
| `google_cloud_slo_alert_configuration` | Cloud SLO Alert Policy Gen | **Ready** | Universal / Both | `google/skills/google-cloud-slo-alert-configuration` | `D5`, `E1` | 1, 5 | ⭐ | Generates Terraform alert policies for banking service level objectives. |

### 4.5 GCP Security, IAM & Governance (Google Provided)

| Skill ID | Skill Name | Resource Status | Runtime Target | Upstream Resource Reference | Acting Personas | Phase | MVP? | Operational Purpose |
|---|---|:---:|:---:|---|---|:---:|:---:|---|
| `google_cloud_waf_security` | Google Cloud WAF Security Review | **Ready** | Universal / Both | `google/skills/google-cloud-waf-security` | `D2`, `B4` | 1, 4, 5 | ⭐ | Evaluates architectures against Well-Architected Framework security principles. |
| `iam_helper_for_policy_simulator` | IAM Policy Simulator | **Ready** | Universal / Both | `google/skills/iam-helper-for-policy-simulator` | `B4` | 2, 4 | ⭐ | Simulates proposed IAM allow policy changes against logs to prevent outages. |
| `iam_helper_for_pam` | Privileged Access Manager (PAM) | **Ready** | Universal / Both | `google/skills/iam-helper-for-privileged-access-management` | `B4` | 2, 6 | | Manages temporary, audited access elevations for shadow-gate operations. |
| `google_cloud_recipe_auth` | Workload Identity Authentication | **Ready** | Universal / Both | `google/skills/google-cloud-recipe-auth` | `B4`, `C1` | 2, 3 | ⭐ | Configures Workload Identity Federation and ephemeral OAuth credential injection. |
| `run_security_scanner` | Static Security Scanner (SAST) | **Ready** | Agent Platform | `Google.securecoder.securecoder` | `D2`, `D0` | 4 | ⭐ | Scans generated code for OWASP Top 10, hardcoded secrets, and injection paths. |
| `scan_dependencies` | Dependency Safety & CVE Scanner | **Ready** | Agent Platform | `Google.securecoder.securecoder` | `B1`, `D2` | 3, 4 | ⭐ | Validates third-party package dependencies for CVEs and license compliance. |

### 4.6 Agent Lifecycle & Operations (Google Provided)

| Skill ID | Skill Name | Resource Status | Runtime Target | Upstream Resource Reference | Acting Personas | Phase | MVP? | Operational Purpose |
|---|---|:---:|:---:|---|---|:---:|:---:|---|
| `agents_cli_onboarding` | Agents CLI Lifecycle & Eval | **Ready** | Universal / Both | `google/skills/google-agents-cli-onboarding` | `F1`, `F2` | 2, 4, 7 | ⭐ | ADK lifecycle: local execution, evaluation suites, benchmark scoring, publishing. |
| `gemini_api` | Vertex AI Gemini SDK Client | **Ready** | Universal / Both | `google/skills/gemini-api` | `C1`, `A5` | 1, 3 | ⭐ | Guides Gen AI SDK usage, structured outputs, multi-model tool calling, caching. |
| `gemini_agents_api` | Managed Agents Control Plane | **Ready** | Universal / Both | `google/skills/gemini-agents-api` | `F1`, `CP` | 2, 7 | ⭐ | Provisions stateful Agent resources, mounting GCS folders and MCP tools. |
| `agent_platform_skill_registry` | Agent Platform Skill Registry | **Ready** | Universal / Both | `google/skills/agent-platform-skill-registry` | `F1`, `E2` | 2, 7 | ⭐ | Discovers, uploads, versions, and retrieves skills in the cloud-hosted registry. |
| `google_antigravity_sdk` | Antigravity Multi-Agent Fleet | **Ready** | Universal / Both | `google-antigravity-sdk` | `CP`, `F3` | 2, 3, 4 | ⭐ | Orchestrates multi-agent pipelines, parallel subagents, and task graph execution. |

---

### 4.7 Lending Domain Invariants & Banking Ledgers (Zip Provided)

| Skill ID | Skill Name | Resource Status | Runtime Target | Planned Plugin Location | Acting Personas | Phase | MVP? | Operational Purpose |
|---|---|:---:|:---:|---|---|:---:|:---:|---|
| `loan_amortization_calculator` | Loan Amortization Engine | **Ready** | Universal / Both | `zip-repayments-plugin/skills/amortization` | `A2`, `C1` | 1, 3, 4 | ⭐ | Calculates compounding interest, periodic principal amortizations, and payoffs. |
| `interest_accrual_validator` | Interest Accrual & Conventions | **Ready** | Universal / Both | `zip-repayments-plugin/skills/interest-accrual` | `A2`, `D1` | 1, 4, 6 | ⭐ | Verifies Actual/365, 30/360, Rule of 78s, and leap-year day-count conventions. |
| `delinquency_waterfall_checker` | Delinquency Waterfall Allocator | **Ready** | Universal / Both | `zip-repayments-plugin/skills/waterfall` | `A2`, `C1` | 1, 3, 5 | ⭐ | Validates payment cascade order: late fees -> interest -> principal reduction. |
| `merchant_fee_settler` | Merchant Fee & MDR Settlement | **Ready** | Universal / Both | `zip-merchant-plugin/skills/fee-settlement` | `A2`, `C1` | 1, 3 | | Simulates interchange fees, MDR deductions, and net settlement disbursements. |
| `credit_decisioning_scorer` | Underwriting Decisioning Scorer | **Ready** | Universal / Both | `zip-decisioning-plugin/skills/underwriting-scorer` | `A2`, `C1` | 1, 3 | | Evaluates borrower risk tier, DTI bounds, and credit policy rules. |
| `double_entry_balance_checker` | Double-Entry Integrity Verifier | **Ready** | Universal / Both | `zip-repayments-plugin/skills/double-entry` | `B2`, `D6` | 1, 3, 5, 6 | ⭐ | Proves Debits equal Credits across all ledger transaction tables. |
| `zero_cent_drift_prover` | $0.00 Cent-for-Cent Drift Prover | **Ready** | Universal / Both | `zip-repayments-plugin/skills/drift-prover` | `D6`, `B2` | 5, 6 | ⭐ | Executes cent-for-cent balance comparisons between legacy Azure LMS and GCP. |
| `bitemporal_schema_auditor` | Bitemporal Schema Auditor | **Ready** | Universal / Both | `zip-sdlc-plugin/skills/bitemporal-audit` | `B2` | 1, 2 | ⭐ | Validates schema adherence to valid-time and transaction-time models. |
| `currency_precision_validator` | Currency Precision Guard | **Ready** | Agent Platform | `zip-sdlc-plugin/skills/currency-precision` | `B2`, `D1` | 3, 4 | ⭐ | AST scanner enforcing fixed-point decimals/integers and banning IEEE-754 floats. |
| `idempotent_backfill_designer` | Idempotent Data Backfill Engine | **Ready** | Cloud Run BYOD | `zip-repayments-plugin/skills/backfill-engine` | `C3`, `B2` | 3, 5, 6 | ⭐ | Authors restartable data migration pipelines importing 3-year historical loan books. |

### 4.8 Regulatory Compliance & SDLC Governance (Zip Provided)

| Skill ID | Skill Name | Resource Status | Runtime Target | Planned Plugin Location | Acting Personas | Phase | MVP? | Operational Purpose |
|---|---|:---:|:---:|---|---|:---:|:---:|---|
| `reg_z_tila_checker` | Truth in Lending Act APR Check | **Ready** | Universal / Both | `zip-compliance-plugin/skills/reg-z-checker` | `A3`, `D4` | 1, 5 | ⭐ | Validates statutory Reg Z APR disclosures and finance charge tolerance limits. |
| `reg_b_ecoa_auditor` | Equal Credit Opportunity Act | **Ready** | Universal / Both | `zip-compliance-plugin/skills/reg-b-auditor` | `A3`, `D4` | 1, 5 | | Scans decisioning trees for disparate impact and Adverse Action notice triggers. |
| `fdcpa_disclosure_scanner` | Fair Debt Collection Scanner | **Ready** | Universal / Both | `zip-compliance-plugin/skills/fdcpa-scanner` | `A3`, `D4` | 1, 4, 5 | ⭐ | Enforces contact hours and statutory debt collection disclosures in borrower communications. |
| `pci_dss_tokenization_verifier` | PCI DSS Tokenization Verifier | **Ready** | Agent Platform | `zip-compliance-plugin/skills/pci-dss-verifier` | `A3`, `D2` | 1, 4, 5 | ⭐ | Scans code and schemas to guarantee zero raw PAN/CVV cardholder data enters app tier. |
| `statutory_clause_mapper` | Statutory Clause Traceability | **Ready** | Universal / Both | `zip-compliance-plugin/skills/clause-mapper` | `A3`, `A5` | 1, 5 | ⭐ | Generates the Regulatory Traceability Matrix mapping PRD clauses to statutes. |
| `double_diamond_design` | Double Diamond Design Process | **Ready** | Universal / Both | `.agents/skills/double-diamond-design/SKILL.md` | `A5`, `A1` | 1, 2 | ⭐ | Framed problem/solution space (Discover, Define, Develop, Deliver) locked in git. |
| `zip_coding_standards_linter` | Zip SDLC Quality & Arch Linter | **Ready** | Agent Platform | `zip-sdlc-plugin/skills/house-linter` | `C4`, `C1` | 3, 4 | ⭐ | Enforces idiomatic Go/Python conventions, error handling, and clean boundaries. |
| `isolated_tdd_test_generator` | Spec-Derived Isolated TDD | **Ready** | Agent Platform | `zip-sdlc-plugin/skills/isolated-tdd` | `C2` | 2, 3 | ⭐ | Derives unit test suites strictly from PRD assertions with zero code access. |
| `ast_conformance_differ` | AST Spec Conformance Diff | **Ready** | Agent Platform | `zip-sdlc-plugin/skills/ast-diff` | `D1` | 4 | ⭐ | AST diff comparing generated code against PRD requirements ("nothing more/less"). |
| `side_effect_suppression_filter` | Shadow Side-Effect Suppressor | **Ready** | Cloud Run BYOD | `zip-sdlc-plugin/skills/side-effect-filter` | `D6`, `D5` | 6 | ⭐ | Intercepts and suppresses payment rails during live shadow traffic mirroring. |
| `shadow_divergence_classifier` | Shadow Divergence Classifier | **Ready** | Universal / Both | `zip-sdlc-plugin/skills/divergence-classifier` | `D6`, `A2` | 6 | ⭐ | Triages shadow differences into standard 4-class taxonomy (GCP bug, Azure bug, Rounding, Intentional). |
| `adr_extractor` | ADR Knowledge Harvester | **Ready** | Agent Platform | `zip-sdlc-plugin/skills/adr-harvester` | `E2`, `B1` | 4, 7 | ⭐ | Extracts resolved disputes from Negotiation File into permanent Architecture Decision Records. |
| `autonomy_rung_evaluator` | Autonomy Rung Governor | **Ready** | Universal / Both | `zip-governance-plugin/skills/rung-governor` | `F3` | 2, 4 | ⭐ | Promotes reliable task classes to L4 autonomy or demotes to mandatory L2 human review. |
| `token_unit_cost_calculator` | Token Unit Cost Attribution | **Ready** | Universal / Both | `zip-governance-plugin/skills/token-economics` | `F4` | 3, 6, 7 | ⭐ | Calculates inference costs per approved spec to prove declining delivery cost thesis. |

---

## 5. Phase 1 MVP Critical Path Sprint (Repayments Focus)

To achieve **Exit Gate 1** (Single Domain Pilot on Repayments) and unblock CISO Chris Nelms and Delivery Lead Eric Blassberg, the following **46 MVP skills** form the immediate delivery backlog:

1. **Immediate Adoption (35 Ready Google Skills):** Drop in the Google Cloud skills for Cloud Run, GKE, Cloud SQL, BigQuery, Cloud Logging/Monitoring, Workload Identity, SAST scanner, and Agents CLI.
2. **Immediate Authoring (11 Zip Core Skills):**
   * `loan_amortization_calculator` (Reg Z interest amortization engine)
   * `interest_accrual_validator` (Actual/365 day-count convention)
   * `delinquency_waterfall_checker` (Fee-interest-principal allocation)
   * `double_entry_balance_checker` (Debits == Credits invariant)
   * `zero_cent_drift_prover` ($0.00 drift comparison harness)
   * `currency_precision_validator` (No-float AST linting)
   * `reg_z_tila_checker` (Statutory APR disclosure bounds)
   * `zip_coding_standards_linter` (Go/Python SDLC house rules)
   * `isolated_tdd_test_generator` (Zero-code-access test authoring)
   * `ast_conformance_differ` (PRD AST conformance verification)
   * `side_effect_suppression_filter` (Payment rail suppression for shadow gate)
