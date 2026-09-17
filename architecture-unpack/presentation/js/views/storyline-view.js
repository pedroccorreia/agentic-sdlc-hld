// Zip Architecture Workbench — Storyline Deck View (Track C: Turn 3 Final Producer Polish)
// Official 2024 Zip Brand Guidelines (v2.0) · Rich Executive Takeaways, Architectural Comparisons, Deep Links & Act Filter Grid Modal

window.StorylineView = {
  currentIndex: 0,
  isGridOpen: false,
  isNotesOpen: false,
  gridFilterAct: 'ALL',
  gridSearchQuery: '',
  slides: typeof storylineSlidesData !== 'undefined' ? storylineSlidesData : [],
  _keyHandlerBound: false,

  // Rich Architectural Enhancements per Slide (Executive Takeaways, Comparisons & Cross-View Deep Links)
  slideEnhancements: {
    0: {
      takeaway: "Project Catalyst transforms Zip's core lending modernization from a multi-year manual rewrite into an industrialized, contract-first autonomous software factory on Google Cloud Platform.",
      impactMetric: "4 Acts · 17 Executive Slides · $0.00 Tolerance",
      comparison: {
        title: "Strategic Transformation Paradigm",
        leftHeader: "Legacy Manual Modernization",
        leftPoints: ["Linear multi-year waterfall rewrite", "Tribal knowledge trapped in C# monolith", "High risk of regressions & compliance gaps"],
        rightHeader: "Zip Autonomous Software Factory (GCP)",
        rightPoints: ["Contract-first JSON Schema generation", "Constitutional separation of author & judge", "Cent-for-cent ($0.00) dual-run verification"]
      },
      deepLinks: [
        { label: "🔄 Explore SDLC Phases", action: "App.switchView('pipeline')" },
        { label: "⚡ Browse 31 Factory Skills", action: "App.switchView('registry')" },
        { label: "⏱️ Launch 18-Step Live Simulator", action: "App.switchView('simulator')" }
      ]
    },
    1: {
      takeaway: "Standard generative AI coding assistants fail in regulated consumer lending due to float rounding drift and circular test bias. Zip permanently owns the sovereign methodology Above the Waterline.",
      impactMetric: "Δ = $0.00 Mandatory Ledger Parity",
      comparison: {
        title: "Copilot Prompting vs. Deterministic GCP Substrate",
        leftHeader: "Naive Generative Copilots",
        leftPoints: ["IEEE-754 floating-point penny leakage", "Author writes own tests (circular bias)", "Ambient cloud credentials risk live rails"],
        rightHeader: "Sovereign Waterline Architecture",
        rightPoints: ["Fixed-point minor units (int64 cents)", "Zero-code-access isolated TDD test author", "15-minute down-scoped Cloud Run sandboxes"]
      },
      deepLinks: [
        { label: "⚖️ Inspect Currency Precision Guard", action: "StorylineView.jumpToSkill('currency-precision-validator')" },
        { label: "🧪 Inspect Isolated TDD Generator", action: "StorylineView.jumpToSkill('isolated-tdd-test-generator')" }
      ]
    },
    2: {
      takeaway: "Resolving the historic whiteboard anomaly: Phase 4 (Review & Verification) acts as an independent constitutional firewall before any generated code reaches integration testing.",
      impactMetric: "7 End-to-End Phases · 0 Unverified Merges",
      comparison: {
        title: "Whiteboard Anomaly vs. Resolved Factory Pipeline",
        leftHeader: "Original Whiteboard (Stages 1,2,3,5,6,7)",
        leftPoints: ["Skipped Stage 4 entirely", "Code moved directly from Generation to Validation", "No independent adversarial security challenge"],
        rightHeader: "Resolved 7-Phase Pipeline (Phase 4 Firewall)",
        rightPoints: ["Dedicated AST Spec Conformance Diffing", "Automated Red Team & PCI-DSS PAN scanning", "Formal human & constitutional gatekeeping"]
      },
      deepLinks: [
        { label: "⚠️ Inspect Phase 4 Gap Resolution", action: "App.switchView('pipeline');setTimeout(()=>PipelineView.inspectGap&&PipelineView.inspectGap(),100)" },
        { label: "🔍 Inspect AST Spec Conformance Differ", action: "StorylineView.jumpToSkill('ast-conformance-differ')" }
      ]
    },
    3: {
      takeaway: "Applying the British Design Council's Double Diamond recursively within every single phase guarantees requirements are mathematically unambiguous before a single line of code is written.",
      impactMetric: "2x Convergence Gates per Phase",
      comparison: {
        title: "Macro Waterfall vs. Recursive Micro-Diamonds",
        leftHeader: "Traditional Macro Double Diamond",
        leftPoints: ["6-month discovery phase before any code", "Requirements decay before implementation", "Late discovery of architectural blockers"],
        rightHeader: "Recursive Phase Double Diamond",
        rightPoints: ["Discover & Define inside every phase", "Machine-verifiable JSON Schema convergence", "Zero prompt-to-code ambiguity"]
      },
      deepLinks: [
        { label: "🔄 View SDLC Phases DAG", action: "App.switchView('pipeline')" },
        { label: "📐 Inspect Double Diamond Skill", action: "StorylineView.jumpToSkill('double-diamond-design')" }
      ]
    },
    4: {
      takeaway: "Handwritten notes are replaced by 10 strongly-typed JSON Schema artifacts (A through F). Disagreements between agents are recorded as immutable, signed engineering contracts.",
      impactMetric: "10 Typed Artifacts · 100% OCC/CFPB Audit Traceability",
      comparison: {
        title: "Informal Docs vs. Strongly-Typed DER Contracts",
        leftHeader: "Informal Confluence & Jira Tickets",
        leftPoints: ["Unstructured prose open to misinterpretation", "Design trade-offs lost in Slack threads", "Manual compliance evidence gathering"],
        rightHeader: "Typed Artifacts (A–F) & Negotiation Ledger",
        rightPoints: ["Strict JSON Schema validation on every handoff", "Artifact B captures multi-turn agent disputes", "Artifact F packages cryptographic regulator proof"]
      },
      deepLinks: [
        { label: "📜 Inspect Statutory Clause Mapper", action: "StorylineView.jumpToSkill('statutory-clause-mapper')" },
        { label: "📚 Inspect ADR Knowledge Harvester", action: "StorylineView.jumpToSkill('adr-extractor')" }
      ]
    },
    5: {
      takeaway: "Constitutional Separation of Powers across 28 specialized personas ensures the agent authoring implementation code never sees or authors the verification test suite.",
      impactMetric: "28 Personas · 111 Executable Skills · 0 Circular Bias",
      comparison: {
        title: "Single-Agent Codegen vs. Adversarial Persona Matrix",
        leftHeader: "Single-Agent / Monolithic Prompting",
        leftPoints: ["Agent writes code and unit tests together", "Tests assert against the agent's own bugs", "Zero separation of security privileges"],
        rightHeader: "Constitutional Separation (6 Persona Families)",
        rightPoints: ["Family C (Build) air-gapped from Family D (Judges)", "Spec Adversary challenges Requirements Architect", "Strictly scoped per-persona MCP tool allowlists"]
      },
      deepLinks: [
        { label: "⚡ Explore Skills & Persona Registry", action: "App.switchView('registry')" },
        { label: "🛡️ Inspect Autonomy Rung Governor", action: "StorylineView.jumpToSkill('autonomy-rung-evaluator')" }
      ]
    },
    6: {
      takeaway: "The 5-Tier GCP Sovereign Cloud Substrate strips agents of persistent ambient authority, isolating execution inside ephemeral Cloud Run sandboxes with Istio outbound side-effect suppression.",
      impactMetric: "5 GCP Tiers · 15-Min Ephemeral Tokens",
      comparison: {
        title: "Ambient Cloud Access vs. 5-Tier Sovereign GCP Substrate",
        leftHeader: "Standard Cloud Agent Deployment",
        leftPoints: ["Persistent IAM service account keys", "Direct outbound internet & payment rail access", "Shared state across concurrent runs"],
        rightHeader: "5-Tier GCP Sovereign Architecture",
        rightPoints: ["Ephemeral Cloud Run sandboxes with read-only rootfs", "Envoy mesh blocks ACH/Card/SMS side effects", "Vertex AI Gemini 1.5 Pro + Flash intelligent routing"]
      },
      deepLinks: [
        { label: "🚫 Inspect Side-Effect Suppression Filter", action: "StorylineView.jumpToSkill('side-effect-suppression-filter')" },
        { label: "☁️ Inspect Cloud Run Sandbox Skill", action: "StorylineView.jumpToSkill('cloud_run_basics')" }
      ]
    },
    7: {
      takeaway: "A centralized Node.js 22 MCP Hub orchestrates 71 domain tools over SSE, backed by a hardware-isolated Slack Enterprise Kill Switch verified at under 750ms end-to-end latency.",
      impactMetric: "< 750ms Verified Emergency Kill Switch Latency",
      comparison: {
        title: "Polling Loops vs. Reactive SSE & Sub-Second Abort",
        leftHeader: "Unmanaged Agent Tooling",
        leftPoints: ["Wasteful polling loops burning tokens", "No centralized tool audit logging", "Slow manual container termination"],
        rightHeader: "Node.js 22 MCP Hub & 3-Layer Kill Switch",
        rightPoints: ["Reactive <wake> SSE protocol eliminates polling", "Cloud SQL PostgreSQL JSONB optimistic locking", "<100ms OAuth revoke + <250ms SIGKILL + <400ms Temporal cancel"]
      },
      deepLinks: [
        { label: "⏱️ Test Kill Switch in Live Simulator", action: "App.switchView('simulator')" },
        { label: "🔒 Inspect PCI-DSS Tokenization Verifier", action: "StorylineView.jumpToSkill('pci-dss-tokenization-verifier')" }
      ]
    },
    8: {
      takeaway: "The factory architecture synthesizes three battle-tested Google Cloud reference blueprints: Mission-Kit (14 Axioms), Agentic-Network (Threads 2.0), and MAM Platform (3-Layer Governance).",
      impactMetric: "14 Invariant Axioms · Self-Healing Annealing",
      comparison: {
        title: "Ad-Hoc Frameworks vs. Proven Reference Triad",
        leftHeader: "Bespoke Experimental Agent Frameworks",
        leftPoints: ["Unbounded debate loops without convergence", "Prompt drift across engineering squads", "Repeated test failures on identical edge cases"],
        rightHeader: "Reference Triad (Mission-Kit + Threads 2.0 + MAM)",
        rightPoints: ["'3 cycles without narrowing = Park' escalation rule", "Queryable Calibration Ledger (calibrations.yaml)", "Self-healing annealing updates SOPs automatically"]
      },
      deepLinks: [
        { label: "📚 Inspect Zip Coding Standards Linter", action: "StorylineView.jumpToSkill('zip-coding-standards-linter')" },
        { label: "⚡ View All Reference Skills", action: "App.switchView('registry')" }
      ]
    },
    9: {
      takeaway: "The Google FDE Spearhead engagement builds the manufacturing machine and proves it on the Repayments Engine; Zip and Quantium scale the factory across the remaining 4 lending domains.",
      impactMetric: "1x Google FDE Spearhead · Clear SoW Waterline",
      comparison: {
        title: "Staff Augmentation vs. Sovereign Factory Construction",
        leftHeader: "Traditional Consulting / Staff Augmentation",
        leftPoints: ["Consultants manually write bespoke domain code", "Customer remains dependent after engagement ends", "High ongoing cost per additional microservice"],
        rightHeader: "Google FDE Spearhead Engagement Model",
        rightPoints: ["FDE builds GKE substrate, harness & 10 MVP personas", "Proves factory via Repayments dry run ($0.00 drift)", "Full handover pack enables independent scaling"]
      },
      deepLinks: [
        { label: "⏱️ Run Preset 1: Full 18-Step Migration", action: "App.switchView('simulator');setTimeout(()=>SimulatorView.selectPreset('preset_full_18'),100)" }
      ]
    },
    10: {
      takeaway: "Progress is governed by 4 hard Milestone Gates (M1–M4) and an 8-Gate Verifiable Definition of Done. No milestone is signed off on subjective intent—only automated mathematical proof.",
      impactMetric: "4 Milestone Gates · 8 Verifiable DoD Criteria",
      comparison: {
        title: "Subjective Status Reports vs. Verifiable Gate DoD",
        leftHeader: "Traditional Project Governance",
        leftPoints: ["Slide-deck progress updates ('80% done')", "Integration bugs discovered weeks after sign-off", "Sudden chaotic handover at project end"],
        rightHeader: "Automated 8-Gate Verifiable DoD",
        rightPoints: ["M1 (W2): <750ms kill switch verified by CISO", "M3 (W8): 50k loans replay with $0.00 zero drift", "M4 (W12): Unassisted dry run with 0 FDE touches"]
      },
      deepLinks: [
        { label: "⚖️ Inspect Double-Entry Balance Verifier", action: "StorylineView.jumpToSkill('double-entry-balance-checker')" },
        { label: "📊 Inspect Bitemporal Schema Auditor", action: "StorylineView.jumpToSkill('bitemporal-schema-auditor')" }
      ]
    },
    11: {
      takeaway: "The Repayments & Loan Amortization Engine is selected as the pilot target because it demands absolute mathematical purity: exact decimal arithmetic, Reg Z disclosures, and $0.00 ledger drift.",
      impactMetric: "50,000 Real Loans Replayed · 14 Clean Days $0.00 Drift",
      comparison: {
        title: "Fuzzy NLP Domains vs. Repayments Financial Rigor",
        leftHeader: "Soft Pilot Targets (FAQ / Chat / UI)",
        leftPoints: ["Subjective output quality evaluations", "Hides underlying float and concurrency flaws", "Fails to prove bank-grade regulatory readiness"],
        rightHeader: "Repayments & Amortization Pilot Target",
        rightPoints: ["Strict statutory waterfall: Fees ➔ Interest ➔ Principal", "3-year Snowflake/Databricks historical replay", "Proves factory can manufacture any banking domain"]
      },
      deepLinks: [
        { label: "⏱️ Run Preset 2: Reg Z Compliance Hotfix", action: "App.switchView('simulator');setTimeout(()=>SimulatorView.selectPreset('preset_regz_hotfix'),100)" },
        { label: "🧮 Inspect Delinquency Waterfall Allocator", action: "StorylineView.jumpToSkill('delinquency-waterfall-checker')" }
      ]
    },
    12: {
      takeaway: "Evaluating 8 vs. 10 vs. 12 weeks: Scenario 3 (12-Week Handover, 56–61 PW) is the derisked executive recommendation, guaranteeing full 50k loan replay and 4 weeks of partner co-delivery.",
      impactMetric: "12 Weeks Recommended · Aligns with Dec 31 Azure Expiry",
      comparison: {
        title: "Scoping Options Trade-Off Matrix",
        leftHeader: "Scenario 1 (8 Weeks) & Scenario 2 (10 Weeks)",
        leftPoints: ["8W: Synthetic tests only; high risk of orphaned platform", "10W: Compressed 1,000-loan sample replay", "Insufficient partner co-delivery runway"],
        rightHeader: "Scenario 3: 12-Week Derisked Handover (Recommended)",
        rightPoints: ["Full 3-year, 50,000-loan historical replay ($0.00 drift)", "4 full weeks of Zip & Quantium co-delivery pairing", "Concludes Dec 31, 2026 matching Azure commit expiry"]
      },
      deepLinks: [
        { label: "⏱️ Run Preset 3: Shadow Dual-Run Prove-Out", action: "App.switchView('simulator');setTimeout(()=>SimulatorView.selectPreset('preset_shadow_proveout'),100)" }
      ]
    },
    13: {
      takeaway: "Operational ownership transfers progressively across 4 structured stages starting in Week 5, backed by an unambiguous RACI matrix across Google FDE, Zip Architecture, and Quantium.",
      impactMetric: "4-Stage Progressive Ladder · 0 FDE Touches by Week 11",
      comparison: {
        title: "Abrupt Handover vs. 4-Stage Progressive Ladder",
        leftHeader: "Final-Week Documentation Dump",
        leftPoints: ["Engineers see runbooks for the first time in Week 12", "Zero operational muscle memory during incidents", "Blurred accountability between vendor and internal SRE"],
        rightHeader: "Progressive Ownership Transfer (Weeks 1–12)",
        rightPoints: ["W1–4: FDE Drives, Zip/Quantium Observes", "W5–8: Co-Driving Iteration 1 | W9–10: Partner Drives", "W11–12: Zip/Quantium Owns Unassisted GA Run"]
      },
      deepLinks: [
        { label: "💎 Inspect Phase Gates in Pipeline View", action: "App.switchView('pipeline')" }
      ]
    },
    14: {
      takeaway: "A synchronized 12-week Work Breakdown Structure executes across three parallel tracks (Platform Substrate, SDLC & Personas, Repayments Pilot) delivering 8 certified handover artifacts.",
      impactMetric: "3 Parallel Tracks · 8 Certified Handover Deliverables",
      comparison: {
        title: "Sequential Bottlenecks vs. Parallel Track Execution",
        leftHeader: "Sequential Infrastructure-Then-Code",
        leftPoints: ["Waiting 6 weeks for infra before writing specs", "Late integration of compliance rules", "Rushed testing in final fortnight"],
        rightHeader: "Synchronized 3-Track WBS (Oct 1 – Dec 31, 2026)",
        rightPoints: ["Track A builds GKE/MCP while Track B defines Artifacts A–F", "Track C extracts Snowflake replay data in Week 1", "Continuous milestone verification at W2, W5, W8, W12"]
      },
      deepLinks: [
        { label: "⚡ Browse All 31 Factory Capabilities", action: "App.switchView('registry')" }
      ]
    },
    15: {
      takeaway: "Following Factory GA on December 31, 2026, the compounding economic flywheel reduces unit delivery cost by 30% per cycle, scaling across all 5 lending domains in 2027.",
      impactMetric: "30% Unit Cost Reduction per Cycle (Cycle N+1 ≤ 0.70 · Cycle N)",
      comparison: {
        title: "Linear Scaling Cost vs. Compounding Factory Flywheel",
        leftHeader: "Linear Engineering Scaling",
        leftPoints: ["Each new microservice costs the same engineering hours", "Knowledge lost when squad members rotate", "18+ months to migrate remaining 4 domains"],
        rightHeader: "Compounding Autonomous Flywheel (2027 Roadmap)",
        rightPoints: ["Reusable skills, golden PRD templates & calibrations", "Q1–Q2 2027: Scale across Decisioning, Issuing, Customer", "Q3–Q4 2027: 14-day clean shadow run & Azure decommission"]
      },
      deepLinks: [
        { label: "💰 Inspect Token Economics Calculator", action: "StorylineView.jumpToSkill('token-unit-cost-calculator')" }
      ]
    },
    16: {
      takeaway: "Executive Decision Point: Align on Scenario 3 (12-Week Derisked Handover) to establish Zip's sovereign software factory, prove $0.00 drift on 50,000 loans, and retire the Azure monolith on schedule.",
      impactMetric: "Ready for October 1, 2026 Kickoff · Dec 31 GA",
      comparison: {
        title: "Executive Value Summary",
        leftHeader: "Risk of Delay or Status Quo",
        leftPoints: ["Continued Azure monolith maintenance overhead", "Manual regulatory compliance bottlenecks", "Missed December 31 commit transition window"],
        rightHeader: "Project Catalyst Approved (Scenario 3)",
        rightPoints: ["Velocity with mathematical certainty ($0.00 drift)", "Bank-grade cryptographic OCC/CFPB evidence packs", "100% sovereign Zip & Quantium operational ownership"]
      },
      deepLinks: [
        { label: "⏱️ Launch Interactive Simulator (Preset 1)", action: "App.switchView('simulator');setTimeout(()=>SimulatorView.selectPreset('preset_full_18'),100)" },
        { label: "⚡ Explore Full Skills Catalog", action: "App.switchView('registry')" }
      ]
    }
  },

  initKeyNavigation() {
    if (this._keyHandlerBound) return;
    this._keyHandlerBound = true;

    document.addEventListener('keydown', (e) => {
      if (window.App && window.App.currentView !== 'storyline') return;
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (this.isGridOpen) {
          this.toggleGrid(false);
        } else {
          this.next();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (this.isGridOpen) {
          this.toggleGrid(false);
        } else {
          this.prev();
        }
      } else if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        this.toggleGrid();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        this.toggleNotes();
      } else if (e.key === 'Escape' && this.isGridOpen) {
        e.preventDefault();
        this.toggleGrid(false);
      }
    });
  },

  injectStyles() {
    if (document.getElementById('storyline-track-c-styles')) return;
    const style = document.createElement('style');
    style.id = 'storyline-track-c-styles';
    style.textContent = `
      .deck-top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--zip-card-bg);
        border: 1px solid var(--zip-card-border);
        border-radius: var(--radius-md);
        padding: 0.65rem 1.1rem;
        margin-bottom: 1rem;
        box-shadow: var(--shadow-subtle);
        gap: 1rem;
        flex-wrap: wrap;
      }
      .deck-progress-cluster {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        flex: 1;
        min-width: 240px;
      }
      .deck-progress-track {
        flex: 1;
        height: 8px;
        background: var(--zip-lightest);
        border-radius: 99px;
        overflow: hidden;
        border: 1px solid var(--zip-lighter);
        max-width: 320px;
      }
      .deck-progress-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--zip-medium) 0%, var(--zip-fearlessness) 100%);
        border-radius: 99px;
        transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .deck-slide-counter {
        font-family: var(--font-display);
        font-size: 0.84rem;
        font-weight: 800;
        color: var(--zip-text-primary);
        white-space: nowrap;
      }
      .deck-pct-badge {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--zip-medium);
        background: var(--zip-lightest);
        padding: 0.15rem 0.5rem;
        border-radius: 99px;
        border: 1px solid var(--zip-lighter);
      }
      /* Executive Takeaway Banner */
      .exec-takeaway-banner {
        background: linear-gradient(135deg, var(--zip-confidence) 0%, var(--zip-dark) 100%);
        color: #FFFFFF;
        border-radius: var(--radius-md);
        padding: 1.1rem 1.4rem;
        margin-top: 1.15rem;
        border-left: 5px solid var(--zip-fearlessness);
        box-shadow: var(--shadow-subtle);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.25rem;
        flex-wrap: wrap;
      }
      .exec-takeaway-text {
        flex: 1;
        min-width: 280px;
      }
      .exec-takeaway-kicker {
        font-size: 0.7rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--zip-fearlessness);
        margin-bottom: 0.25rem;
        display: block;
      }
      .exec-takeaway-body {
        font-size: 0.92rem;
        line-height: 1.45;
        color: #FAF8FF;
        margin: 0;
        font-weight: 500;
      }
      /* Architectural Comparison Grid */
      .arch-comparison-card {
        background: var(--zip-card-bg);
        border: 1px solid var(--zip-card-border);
        border-radius: var(--radius-md);
        padding: 1.15rem 1.4rem;
        margin-top: 1rem;
        box-shadow: var(--shadow-subtle);
      }
      .arch-comp-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 0.75rem;
      }
      @media (max-width: 768px) {
        .arch-comp-grid { grid-template-columns: 1fr; }
      }
      .arch-comp-col {
        padding: 0.85rem 1rem;
        border-radius: var(--radius-sm);
        border: 1px solid var(--zip-lighter);
      }
      .arch-comp-col.legacy {
        background: var(--zip-gap-bg);
        border-color: rgba(225, 29, 72, 0.3);
      }
      .arch-comp-col.target {
        background: var(--zip-good-bg);
        border-color: rgba(5, 150, 105, 0.35);
      }
      .arch-comp-col h4 {
        font-size: 0.84rem;
        font-weight: 800;
        margin-bottom: 0.45rem;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }
      .arch-comp-col.legacy h4 { color: var(--zip-gap-text); }
      .arch-comp-col.target h4 { color: var(--zip-good-text); }
      .arch-comp-list {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 0.82rem;
      }
      .arch-comp-list li {
        margin-bottom: 0.35rem;
        display: flex;
        align-items: flex-start;
        gap: 0.45rem;
        color: var(--zip-text-primary);
      }
      /* Deep links bar */
      .deep-links-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.75rem;
        background: var(--zip-card-elevated);
        border: 1px solid var(--zip-lighter);
        border-radius: var(--radius-md);
        padding: 0.8rem 1.2rem;
        margin-top: 1rem;
      }
      /* Slide Grid Modal */
      .slide-grid-modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(26, 8, 38, 0.65);
        backdrop-filter: blur(6px);
        z-index: 120;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }
      .slide-grid-modal-backdrop.open {
        display: flex;
      }
      .slide-grid-modal {
        background: var(--zip-control);
        border: 1px solid var(--zip-card-border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-elevated);
        width: 100%;
        max-width: 1180px;
        max-height: 88vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .slide-grid-header {
        padding: 1.1rem 1.5rem;
        background: var(--zip-card-bg);
        border-bottom: 1px solid var(--zip-lighter);
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .slide-grid-filterbar {
        padding: 0.75rem 1.5rem;
        background: var(--zip-card-elevated);
        border-bottom: 1px solid var(--zip-lighter);
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.8rem;
      }
      .slide-grid-body {
        padding: 1.4rem 1.5rem;
        overflow-y: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 1rem;
      }
      .slide-thumb-card {
        background: var(--zip-card-bg);
        border: 1.5px solid var(--zip-card-border);
        border-radius: var(--radius-md);
        padding: 1rem;
        cursor: pointer;
        transition: all 0.16s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 145px;
        position: relative;
      }
      .slide-thumb-card:hover {
        border-color: var(--zip-fearlessness);
        transform: translateY(-3px);
        box-shadow: var(--shadow-elevated);
      }
      .slide-thumb-card.active-slide {
        border-color: var(--zip-medium);
        border-width: 2px;
        background: var(--zip-lightest);
      }
      .slide-thumb-num {
        font-family: var(--font-mono);
        font-size: 0.74rem;
        font-weight: 800;
        color: var(--zip-medium);
        background: var(--zip-card-elevated);
        padding: 0.15rem 0.5rem;
        border-radius: 6px;
        border: 1px solid var(--zip-lighter);
      }
    `;
    document.head.appendChild(style);
  },

  jumpToSkill(skillId) {
    if (!window.App) return;
    window.App.switchView('registry');
    setTimeout(() => {
      if (typeof skillsCatalogData !== 'undefined' && window.ArtifactDrawer) {
        const found = skillsCatalogData.find(s => s.id === skillId || (s.local_ref && s.local_ref.includes(skillId)));
        if (found) {
          window.ArtifactDrawer.open(found);
        }
      }
    }, 120);
  },

  getActCode(idx) {
    const slideNum = idx + 1;
    if (slideNum <= 2) return 'PROLOGUE';
    if (slideNum <= 6) return 'ACT1';
    if (slideNum <= 9) return 'ACT2';
    if (slideNum <= 12) return 'ACT3';
    if (slideNum <= 16) return 'ACT4';
    return 'EPILOGUE';
  },

  getActLabel(idx) {
    const slideNum = idx + 1;
    if (slideNum <= 2) return 'Prologue · Strategic Framing';
    if (slideNum <= 6) return 'Act 1 · Concepts & Phases';
    if (slideNum <= 9) return 'Act 2 · Platform Architecture';
    if (slideNum <= 12) return 'Act 3 · FDE Statement of Work';
    if (slideNum <= 16) return 'Act 4 · Phased Implementation';
    return 'Epilogue · Executive Decision';
  },

  setGridFilter(actCode) {
    this.gridFilterAct = actCode;
    this.render(document.getElementById('mainStage'));
  },

  setGridSearch(q) {
    this.gridSearchQuery = q;
    this.render(document.getElementById('mainStage'));
  },

  render(container) {
    this.initKeyNavigation();
    this.injectStyles();

    if (!this.slides || !this.slides.length) {
      container.innerHTML = '<div class="card"><p>No storyline slides available.</p></div>';
      return;
    }

    if (this.currentIndex < 0) this.currentIndex = 0;
    if (this.currentIndex >= this.slides.length) this.currentIndex = this.slides.length - 1;

    const slide = this.slides[this.currentIndex];
    const isTitle = slide.isTitleSlide;
    const total = this.slides.length;
    const currentNum = this.currentIndex + 1;
    const progressPct = Math.round((currentNum / total) * 100);
    const actLabel = this.getActLabel(this.currentIndex);
    const enhance = this.slideEnhancements[this.currentIndex] || this.slideEnhancements[0];

    const filteredSlides = this.slides
      .map((s, idx) => ({ s, idx }))
      .filter(({ s, idx }) => {
        if (this.gridFilterAct !== 'ALL' && this.getActCode(idx) !== this.gridFilterAct) return false;
        if (this.gridSearchQuery.trim()) {
          const q = this.gridSearchQuery.toLowerCase();
          const titleMatch = (s.title || '').toLowerCase().includes(q);
          const slugMatch = (s.slug || '').toLowerCase().includes(q);
          return titleMatch || slugMatch;
        }
        return true;
      });

    container.innerHTML = `
      <div class="slide-stage-wrap">
        <!-- Executive Deck Top Control Bar -->
        <div class="deck-top-bar">
          <div class="deck-progress-cluster">
            <span class="pill pill-fearless">${actLabel}</span>
            <span class="deck-slide-counter">Slide ${currentNum} of ${total}</span>
            <div class="deck-progress-track" title="${progressPct}% Complete">
              <div class="deck-progress-bar-fill" style="width:${progressPct}%"></div>
            </div>
            <span class="deck-pct-badge">${progressPct}%</span>
          </div>

          <div style="display:flex;align-items:center;gap:0.5rem">
            <span style="font-family:var(--font-mono);font-size:0.72rem;color:var(--zip-text-muted);margin-right:0.3rem">
              Keys: ←/→ · G Grid · N Notes
            </span>
            <button class="btn" onclick="StorylineView.prev()" ${this.currentIndex === 0 ? 'disabled' : ''} title="Previous Slide (Left Arrow)">
              ← Prev
            </button>
            <button class="btn btn-primary" onclick="StorylineView.next()" ${this.currentIndex === total - 1 ? 'disabled' : ''} title="Next Slide (Right Arrow)">
              Next →
            </button>
            <button class="btn" onclick="StorylineView.toggleGrid(true)" title="Open 17-Slide Grid Overview (G)">
              ⊞ Slide Grid (${total})
            </button>
          </div>
        </div>

        <!-- Main Slide Stage Box -->
        <div class="slide-box ${isTitle ? 'title-slide-box' : ''}">
          ${slide.html}
        </div>

        <!-- Executive Takeaway Banner -->
        <div class="exec-takeaway-banner">
          <div class="exec-takeaway-text">
            <span class="exec-takeaway-kicker">Executive Takeaway · Slide ${currentNum} Synthesis</span>
            <p class="exec-takeaway-body">${enhance.takeaway}</p>
          </div>
          <div>
            <span class="pill pill-active" style="font-family:var(--font-mono);font-size:0.78rem;padding:0.35rem 0.8rem">
              ★ ${enhance.impactMetric}
            </span>
          </div>
        </div>

        <!-- Architectural Comparison Card -->
        ${enhance.comparison ? `
          <div class="arch-comparison-card">
            <div style="display:flex;align-items:center;justify-content:space-between">
              <span style="font-size:0.75rem;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:var(--zip-medium)">
                Architectural Paradigm Contrast · ${enhance.comparison.title}
              </span>
              <span class="pill pill-fearless" style="font-size:0.68rem">Waterline Governance</span>
            </div>
            <div class="arch-comp-grid">
              <div class="arch-comp-col legacy">
                <h4>✕ ${enhance.comparison.leftHeader}</h4>
                <ul class="arch-comp-list">
                  ${enhance.comparison.leftPoints.map(pt => `<li><span>•</span><span>${pt}</span></li>`).join('')}
                </ul>
              </div>
              <div class="arch-comp-col target">
                <h4>✓ ${enhance.comparison.rightHeader}</h4>
                <ul class="arch-comp-list">
                  ${enhance.comparison.rightPoints.map(pt => `<li><span>✓</span><span><strong>${pt}</strong></span></li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Interactive Cross-View Deep Links Bar -->
        ${enhance.deepLinks && enhance.deepLinks.length ? `
          <div class="deep-links-bar">
            <span style="font-size:0.78rem;font-weight:800;color:var(--zip-confidence);text-transform:uppercase;letter-spacing:0.04em">
              🔗 Interactive Workbench Deep Links:
            </span>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
              ${enhance.deepLinks.map(dl => `
                <button class="btn" onclick="${dl.action}" style="font-size:0.78rem;padding:0.35rem 0.75rem">
                  ${dl.label}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Bottom Deck Control Bar -->
        <div class="slide-controls">
          <div style="display:flex;gap:0.5rem;align-items:center">
            <button class="btn" onclick="StorylineView.prev()" ${this.currentIndex === 0 ? 'disabled' : ''}>← Previous</button>
            <button class="btn btn-primary" onclick="StorylineView.next()" ${this.currentIndex === total - 1 ? 'disabled' : ''}>Next Slide →</button>
            <button class="btn" onclick="StorylineView.toggleGrid(true)">⊞ All ${total} Slides</button>
          </div>

          <span style="font-size:0.82rem;font-weight:700;color:var(--zip-text-muted)">
            Slide ${currentNum} of ${total} · ${slide.slug || slide.title}
          </span>

          <div style="display:flex;gap:0.45rem">
            <button class="btn" onclick="StorylineView.toggleNotes()">
              💬 Speaker Notes ${slide.notes ? '●' : ''}
            </button>
            <button class="btn" onclick="App.toggleFullscreen()">⛶ Fullscreen</button>
          </div>
        </div>

        <!-- Speaker Notes Panel -->
        ${slide.notes ? `
          <div id="slideNotesBox" class="card" style="margin-top:1rem;display:${this.isNotesOpen ? 'block' : 'none'};background:var(--zip-lightest);border-color:var(--zip-lighter)">
            <strong style="color:var(--zip-medium);font-size:0.8rem;text-transform:uppercase;letter-spacing:0.06em">Executive Speaker Notes & Framing:</strong>
            <p style="margin-top:0.4rem;font-size:0.88rem;color:var(--zip-confidence)">${slide.notes}</p>
          </div>
        ` : ''}

        <!-- 17-Slide Responsive Grid Overview Modal -->
        <div id="slideGridModalBackdrop" class="slide-grid-modal-backdrop ${this.isGridOpen ? 'open' : ''}" onclick="if(event.target===this)StorylineView.toggleGrid(false)">
          <div class="slide-grid-modal" role="dialog" aria-modal="true" aria-label="Slide Grid Overview">
            <div class="slide-grid-header">
              <div>
                <span class="pill pill-fearless" style="margin-bottom:0.2rem">Executive Deck Navigator</span>
                <h3 style="margin:0;font-size:1.15rem">All ${total} Storyline Slides — Direct Jump</h3>
              </div>
              <button class="btn" onclick="StorylineView.toggleGrid(false)">✕ Close (ESC)</button>
            </div>

            <!-- Act Filter & Search Bar -->
            <div class="slide-grid-filterbar">
              <div style="display:flex;gap:0.4rem;flex-wrap:wrap">
                ${[
                  { code: 'ALL', label: `All Slides (${total})` },
                  { code: 'PROLOGUE', label: 'Prologue' },
                  { code: 'ACT1', label: 'Act 1: Concepts' },
                  { code: 'ACT2', label: 'Act 2: Platform' },
                  { code: 'ACT3', label: 'Act 3: FDE SoW' },
                  { code: 'ACT4', label: 'Act 4: Roadmap' }
                ].map(f => `
                  <button class="btn ${this.gridFilterAct === f.code ? 'btn-primary' : ''}"
                          onclick="StorylineView.setGridFilter('${f.code}')"
                          style="padding:0.3rem 0.65rem;font-size:0.75rem">
                    ${f.label}
                  </button>
                `).join('')}
              </div>
              <div>
                <input type="text"
                       placeholder="Filter slides by title..."
                       value="${this.gridSearchQuery}"
                       oninput="StorylineView.setGridSearch(this.value)"
                       style="padding:0.35rem 0.75rem;border-radius:var(--radius-sm);border:1px solid var(--zip-lighter);font-size:0.78rem;background:var(--zip-card-bg);color:var(--zip-text-primary);min-width:200px">
              </div>
            </div>

            <div class="slide-grid-body">
              ${filteredSlides.map(({ s, idx }) => {
                const active = idx === this.currentIndex;
                const act = this.getActLabel(idx).split('·')[0].trim();
                const enh = this.slideEnhancements[idx] || {};
                return `
                  <div class="slide-thumb-card ${active ? 'active-slide' : ''}" onclick="StorylineView.goTo(${idx})">
                    <div>
                      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.55rem">
                        <span class="slide-thumb-num">Slide ${idx + 1}</span>
                        <span class="pill pill-fearless" style="font-size:0.65rem;padding:0.1rem 0.45rem">${act}</span>
                      </div>
                      <h4 style="font-size:0.92rem;font-weight:800;line-height:1.3;color:var(--zip-text-primary);margin-bottom:0.35rem">
                        ${s.title || s.slug}
                      </h4>
                      <p style="font-size:0.74rem;color:var(--zip-text-secondary);line-height:1.35;margin:0">
                        ${enh.impactMetric || ''}
                      </p>
                    </div>
                    <div style="font-size:0.74rem;color:var(--zip-text-muted);display:flex;align-items:center;justify-content:space-between;margin-top:0.5rem;padding-top:0.45rem;border-top:1px solid var(--zip-lighter)">
                      <span>${s.slug}</span>
                      <span style="font-weight:700;color:var(--zip-medium)">${active ? '● Active' : 'Jump →'}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  goTo(index) {
    if (index >= 0 && index < this.slides.length) {
      this.currentIndex = index;
      this.isGridOpen = false;
      this.render(document.getElementById('mainStage'));
    }
  },

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.render(document.getElementById('mainStage'));
    }
  },

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render(document.getElementById('mainStage'));
    }
  },

  toggleGrid(forceState) {
    this.isGridOpen = typeof forceState === 'boolean' ? forceState : !this.isGridOpen;
    const modal = document.getElementById('slideGridModalBackdrop');
    if (modal && !this.gridSearchQuery && this.gridFilterAct === 'ALL') {
      modal.classList.toggle('open', this.isGridOpen);
    } else {
      this.render(document.getElementById('mainStage'));
    }
  },

  toggleNotes() {
    this.isNotesOpen = !this.isNotesOpen;
    const el = document.getElementById('slideNotesBox');
    if (el) {
      el.style.display = this.isNotesOpen ? 'block' : 'none';
    }
  }
};

// Legacy inline slide HTML bridge functions
window.show = function(slideIndexOrNum) {
  if (typeof slideIndexOrNum === 'number') {
    const targetIdx = slideIndexOrNum < StorylineView.slides.length ? slideIndexOrNum : slideIndexOrNum - 1;
    StorylineView.goTo(targetIdx);
  }
};

window.openExplorerSection = function(sectionName) {
  if (!window.App) return;
  if (sectionName === 'pipeline' || sectionName === 'planning') {
    window.App.switchView('pipeline');
  } else if (sectionName === 'artifacts' || sectionName === 'personas' || sectionName === 'samples' || sectionName === 'architecture') {
    window.App.switchView('registry');
  } else if (sectionName === 'storyline') {
    window.App.switchView('storyline');
  } else {
    window.App.switchView('simulator');
  }
};

window.setAppMode = function(mode) {
  if (window.App) {
    window.App.switchView(mode === 'explorer' ? 'pipeline' : 'storyline');
  }
};
