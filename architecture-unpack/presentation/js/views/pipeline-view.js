// Zip Architecture Workbench — 7-Phase SDLC Pipeline View (Interactive Phase Topology & Bottom Deep-Dive Accordions)
window.PipelineView = {
  selectedPhaseIdx: 0, // 0..6 for Phase 1..7, or -1 for All Phases
  hoveredPhaseIdx: null, // For live telemetry strip updates
  isGapRemediationOpen: false, // Collapsed by default at the bottom per user request
  isTokenEconomicsOpen: false, // Collapsed by default at the bottom per user request
  selectedRemediationNode: 'drift', // 'ast' | 'bitemporal' | 'drift' | 'filter'
  selectedRungIdx: 3, // Default L4 Sovereign Zero-Drift highlighted in Token Economics chart
  monthlyStoryPoints: 500, // Enterprise velocity simulator slider (100 to 2500 SP/month)
  showEconomicsTable: false, // Toggleable side-by-side matrix table of all 4 rungs

  rungEconomicsData: [
    {
      rung: 'L1',
      name: 'L1: Assisted Authoring',
      costPerSp: 1420,
      defectRate: 14.2,
      cacheHitRate: '18%',
      tokenCostSp: '$42.50',
      humanReviewHrs: '6.4 hrs/SP',
      autonomyDesc: 'Human writes code & tests manually with basic autocomplete. High cognitive overhead and frequent IEEE-754/ledger drift escapes.',
      badgeClass: 'pill-gap'
    },
    {
      rung: 'L2',
      name: 'L2: Supervised Agentic TDD',
      costPerSp: 840,
      defectRate: 6.8,
      cacheHitRate: '54%',
      tokenCostSp: '$19.80',
      humanReviewHrs: '3.1 hrs/SP',
      autonomyDesc: 'Spec-derived isolated TDD test authoring prior to implementation. Human reviews PR diffs and resolves spec ambiguities.',
      badgeClass: 'pill-fearless'
    },
    {
      rung: 'L3',
      name: 'L3: Autonomous Sandbox Verification',
      costPerSp: 310,
      defectRate: 1.4,
      cacheHitRate: '82%',
      tokenCostSp: '$7.40',
      humanReviewHrs: '0.8 hrs/SP',
      autonomyDesc: 'Multi-agent adversarial negotiation (Builder vs Spec Adversary) inside ephemeral GKE sandboxes with AST conformance gates.',
      badgeClass: 'pill-fearless'
    },
    {
      rung: 'L4',
      name: 'L4: Sovereign Zero-Drift Cutover',
      costPerSp: 85,
      defectRate: 0.02,
      cacheHitRate: '94%',
      tokenCostSp: '$2.15',
      humanReviewHrs: '0.1 hrs/SP',
      autonomyDesc: 'Full 7-Phase SDLC closed loop with Phase 4 Shadow Verification Rail, Bitemporal Spanner ledger audit, and $0.00 cent-for-cent drift proof.',
      badgeClass: 'pill-good'
    }
  ],

  phaseTelemetrySummary: [
    { num: '01', name: 'Specify (Discovery & Intent)', stage: 'Stage I: Discovery & Synthesis', inArt: 'Executive Mandate & Legacy C# Repo', outArt: 'Signed-off PRD & Regulatory Matrix (RTM)', gate: '100% clause mapping to Reg Z, Reg B, FDCPA & zero spec ambiguity' },
    { num: '02', name: 'Dispatch (Fleet Assignment)', stage: 'Stage I: Convergent Assignment', inArt: 'Approved PRD Contract & RTM', outArt: 'Deterministic Project Assignment Manifest', gate: 'Cryptographic skill pinning & token budget quota allocation' },
    { num: '03', name: 'Generate (Isolated TDD & Code)', stage: 'Stage I: Divergent Synthesis', inArt: 'Project Assignment & OpenAPI Spec', outArt: 'Isolated TDD Suite & Candidate Go/Spanner Code', gate: 'Zero implementation access during TDD test authoring (Axiom 4)' },
    { num: '04', name: 'Review (Shadow Verification Rail)', stage: 'Stage II: Critical Gap Gate', inArt: 'Candidate Build & Live Borrower Traffic', outArt: 'AST Conformance Proof & Shadow Replay Ledger', gate: 'AST Spec Conformance == 100% & Side-Effects 100% suppressed' },
    { num: '05', name: 'Verify ($0.00 Cent-for-Cent Proof)', stage: 'Stage II: Convergent Verification', inArt: 'Dual-Run Azure LMS vs GCP Spanner Journals', outArt: 'Mathematical Zero-Cent Drift Attestation', gate: 'Exact minor-unit integer cent parity ($0.00 drift) across all accounts' },
    { num: '06', name: 'Ship & Observe (Sovereign Cutover)', stage: 'Stage II: Divergent Telemetry', inArt: 'Cutover Certificate & Canary Traffic', outArt: 'Production Spanner Ledger & SLO Telemetry', gate: 'Real-time bitemporal invariants & automated rollback circuit-breaker' },
    { num: '07', name: 'Operations (Compounding Learning)', stage: 'Stage II: Convergent Knowledge', inArt: 'Negotiation Side-Car Ledger & Prod Logs', outArt: 'Permanent ADRs & Autonomy Rung Promotions', gate: 'Closed-loop harvesting of settled multi-turn disputes into ADR Index' }
  ],

  remediationNodesData: {
    ast: {
      title: '1. AST Spec Conformance Diff Analyzer',
      skillRef: 'ast-conformance-differ',
      badge: 'Static & Semantic Gate',
      summary: 'Parses generated Go/Python Abstract Syntax Trees against formal PRD OpenAPI & Regulatory Traceability Matrix (RTM) invariants.',
      metrics: ['0 Unapproved Code Branches', '100% IEEE-754 Float Ban Enforced', 'Deterministic Clause-to-AST Mapping'],
      codeSnippet: `// AST Conformance Assertion: Currency Minor Units Only
func ApplyRepaymentWaterfall(acct *LedgerAccount, amtCents int64) error {
    // [PASS] Fixed-point int64 minor units verified by AST Differ
    // [PASS] Statutory allocation order: Fees -> Interest -> Principal
    return acct.PostJournalEntry(amtCents, BitemporalNow())
}`
    },
    bitemporal: {
      title: '2. Bitemporal Schema & Mutation Auditor',
      skillRef: 'bitemporal-schema-auditor',
      badge: 'Cloud Spanner Ledger Gate',
      summary: 'Verifies strict orthogonal separation between Valid-Time (when business event occurred) and Transaction-Time (immutable system commit timestamp).',
      metrics: ['100% Immutable Append-Only Log', 'Zero Retroactive History Overwrites', 'Point-in-Time As-Of Auditability'],
      codeSnippet: `CREATE TABLE LedgerJournalEntries (
  EntryId STRING(36) NOT NULL,
  AccountId STRING(36) NOT NULL,
  AmountCents INT64 NOT NULL,
  ValidTime TIMESTAMP NOT NULL,       -- Business effective time
  TransactionTime TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true)
) PRIMARY KEY (AccountId, ValidTime, TransactionTime);`
    },
    drift: {
      title: '3. Cent-for-Cent ($0.00) Drift Prover',
      skillRef: 'zero-cent-drift-prover',
      badge: 'Mathematical Cutover Proof',
      summary: 'Executes side-by-side dual-run shadow replays comparing Legacy Azure SQL outputs against Google Cloud Spanner outputs across 100% of historical accounts.',
      metrics: ['$0.00 Tolerance across 4.2M Accounts', '100% Double-Entry Debit == Credit Parity', 'Automated Cutover Attestation Certificate'],
      codeSnippet: `SHADOW RECONCILIATION REPORT [BATCH #8842-PROD]
Legacy Azure LMS Total Principal : $148,920,411.84 (14892041184 cents)
GCP Sovereign Target Principal   : $148,920,411.84 (14892041184 cents)
Net Mathematical Drift           : $0.00000000     [ATTESTED PASS]`
    },
    filter: {
      title: '4. Shadow Side-Effect Suppression Filter',
      skillRef: 'side-effect-suppression-filter',
      badge: 'Egress Safety Interceptor',
      summary: 'Intercepts and records outbound side-effects (ACH debits, Marqeta card settlements, Equifax/TransUnion bureau reports, SMS alerts) during live shadow runs.',
      metrics: ['Zero Duplicate Customer Debits', '100% Outbound Payload Capture', 'Mock Latency & Webhook Replay'],
      codeSnippet: `[EGRESS INTERCEPTOR] Blocked Live ACH Debit Request -> Captured to ShadowSink
Payload Hash: sha256:9f84c2a... | Target: FedACH Routing #021000021
Verification: Outbound instruction matches Legacy LMS wire payload 100%.`
    }
  },

  getPhases() {
    return (typeof window.phaseDoubleDiamondData !== 'undefined' && Array.isArray(window.phaseDoubleDiamondData))
      ? window.phaseDoubleDiamondData
      : ((typeof phaseDoubleDiamondData !== 'undefined' && Array.isArray(phaseDoubleDiamondData)) ? phaseDoubleDiamondData : []);
  },

  render(container) {
    if (!container) container = document.getElementById('mainStage');
    if (!container) return;
    const phases = this.getPhases();

    let html = `
      <style>
        @keyframes zipFlowDash {
          to { stroke-dashoffset: -28; }
        }
        @keyframes zipGapPulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.07); opacity: 0.35; }
        }
        .sdlc-flow-line {
          stroke-dasharray: 8 6;
          animation: zipFlowDash 1.4s linear infinite;
        }
        .phase-svg-node {
          cursor: pointer;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .phase-svg-node:hover {
          filter: drop-shadow(0px 6px 14px rgba(101, 66, 190, 0.32));
        }
        .gap-pulse-ring {
          transform-origin: center;
          transform-box: fill-box;
          animation: zipGapPulse 2s ease-in-out infinite;
        }
        .econ-point-group, .remediation-svg-node {
          cursor: pointer;
          transition: transform 0.18s ease, filter 0.18s ease;
        }
        .econ-point-group:hover, .remediation-svg-node:hover {
          filter: drop-shadow(0px 4px 10px rgba(65, 19, 97, 0.25));
        }
        .zip-surface-card {
          background: var(--zip-card-bg);
          border: 1px solid var(--zip-card-border);
          border-radius: var(--radius-md);
        }
        .zip-subphase-box {
          background: var(--zip-card-elevated);
          border: 1px solid var(--zip-card-border);
          border-radius: 10px;
          padding: 0.9rem;
        }
        .zip-step-item {
          background: var(--zip-card-bg);
          border: 1px solid var(--zip-card-border);
          border-radius: 8px;
          padding: 0.65rem;
          cursor: pointer;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }
        .zip-step-item:hover {
          transform: translateY(-2px);
          border-color: var(--zip-medium);
        }
        .bottom-accordion-header {
          cursor: pointer;
          user-select: none;
          transition: background-color 0.15s ease;
        }
      </style>

      <!-- Top Header Banner -->
      <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem;margin-bottom:1.25rem">
        <div>
          <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.45rem">
            <span class="pill pill-fearless">7-Phase SDLC Architecture</span>
            <span class="pill" style="background:#EDE6FF;color:#411361;font-weight:700">7 Sovereign Phases · 28 Subphases</span>
          </div>
          <h1 style="margin-bottom:0.3rem">7-Phase End-to-End Agentic SDLC Pipeline</h1>
          <p class="lede" style="margin-bottom:0">From executive business intent to cryptographically attested production shadow cutover with $0.00 dollar drift.</p>
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
          <button class="btn ${this.selectedPhaseIdx === -1 ? 'btn-primary' : ''}" onclick="PipelineView.selectPhase(-1)">
            📋 View All 7 Phases
          </button>
          <button class="btn" style="border-color:#E11D48;color:#881337;background:#FFF1F2" onclick="PipelineView.expandAndScrollTo('remediation')">
            ⚠️ Phase 4 Remediation ↓
          </button>
          <button class="btn" style="border-color:#6542BE;color:#411361;background:#EDE6FF" onclick="PipelineView.expandAndScrollTo('economics')">
            📉 Unit Cost &amp; Defect Curve ↓
          </button>
        </div>
      </div>

      <!-- 1. Interactive SVG SDLC Architecture Flow Diagram + Live Phase Telemetry Strip -->
      <div class="card zip-surface-card" style="padding:1.25rem;margin-bottom:1.4rem">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.8rem;flex-wrap:wrap;gap:0.5rem">
          <div>
            <span style="font-size:0.74rem;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:var(--zip-medium)">Interactive Architecture Flow Topology</span>
            <h3 style="margin:0.1rem 0 0;font-size:1.05rem">Click any Phase Node (01 → 07) to Filter Subphases &amp; Technical Contracts Below</h3>
          </div>
          <div style="display:flex;align-items:center;gap:1rem;font-size:0.76rem;color:var(--zip-text-secondary);flex-wrap:wrap">
            <span style="display:inline-flex;align-items:center;gap:0.35rem"><span style="width:12px;height:12px;background:rgba(170,143,255,0.25);border:1.5px solid #6542BE;transform:rotate(45deg);display:inline-block"></span> Phase Flow Contours</span>
            <span style="display:inline-flex;align-items:center;gap:0.35rem"><span style="width:10px;height:10px;border-radius:2px;background:#411361;display:inline-block"></span> Selected Phase</span>
            <span style="display:inline-flex;align-items:center;gap:0.35rem"><span style="width:10px;height:10px;border-radius:50%;background:#E11D48;display:inline-block"></span> Phase 4 Gap Gate</span>
          </div>
        </div>

        ${this.renderSdlcFlowSvg(phases)}

        <!-- Live Active Phase Telemetry Summary Strip -->
        ${this.renderActivePhaseTelemetryStrip()}
      </div>

      <!-- 2. Selected Phase (or All Phases) Detailed Subphases & Steps (Immediately visible below diagram!) -->
      <div id="pipelinePhaseDetailAnchor"></div>
      ${this.renderPhaseBreakdownSection(phases)}

      <!-- 3. Bottom Deep-Dive Accordions (Collapsed by default per user request) -->
      <div id="pipelineBottomDeepDives" style="margin-top:2rem;padding-top:1.25rem;border-top:2px dashed var(--zip-lighter)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.9rem;flex-wrap:wrap;gap:0.5rem">
          <div>
            <span style="font-size:0.74rem;font-weight:800;text-transform:uppercase;letter-spacing:0.07em;color:var(--zip-medium)">Architectural Deep-Dive Proofs &amp; Economic Models</span>
            <h3 style="margin:0.15rem 0 0;font-size:1.05rem">Click Either Deep-Dive Section Below to Expand Full Blueprint &amp; Simulator</h3>
          </div>
          <div style="display:flex;gap:0.5rem">
            <button class="btn" style="font-size:0.74rem;padding:0.28rem 0.65rem" onclick="PipelineView.toggleAllBottomCards(true)">▼ Expand Both</button>
            <button class="btn" style="font-size:0.74rem;padding:0.28rem 0.65rem" onclick="PipelineView.toggleAllBottomCards(false)">▲ Collapse Both</button>
          </div>
        </div>

        <!-- Bottom Card A: Phase 4 Remediation: Replacing Human PR Spot-Checks with Mathematical Proof -->
        <div id="bottomAnchorRemediation">
          ${this.renderPhase4Spotlight()}
        </div>

        <!-- Bottom Card B: Declining Unit Cost of Delivery & Defect Escape Rate Curve -->
        <div id="bottomAnchorEconomics">
          ${this.renderTokenEconomicsCard()}
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  renderActivePhaseTelemetryStrip() {
    const activeIdx = (this.hoveredPhaseIdx !== null) ? this.hoveredPhaseIdx : (this.selectedPhaseIdx >= 0 ? this.selectedPhaseIdx : 3);
    const t = this.phaseTelemetrySummary[activeIdx] || this.phaseTelemetrySummary[0];
    const isGap = (activeIdx === 3);

    return `
      <div style="margin-top:0.85rem;padding:0.75rem 1rem;border-radius:8px;background:${isGap ? '#FFF1F2' : '#EDE6FF'};border:1px solid ${isGap ? '#E11D48' : '#C9B3FF'};display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.8rem">
        <div style="display:flex;align-items:center;gap:0.65rem">
          <span class="pill" style="background:${isGap ? '#881337' : '#411361'};color:#FFFFFA;font-weight:800;font-size:0.74rem">PHASE ${t.num} TELEMETRY</span>
          <strong style="color:#1A0826;font-size:0.9rem">${t.name}</strong>
          <span style="font-size:0.75rem;color:#462B54;font-family:var(--font-mono)">(${t.stage})</span>
        </div>
        <div style="display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap;font-size:0.78rem;color:#1A0826">
          <span><strong>In:</strong> ${t.inArt}</span>
          <span><strong>Out:</strong> ${t.outArt}</span>
          <span style="color:${isGap ? '#881337' : '#065F46'};font-weight:700">✓ Gate: ${t.gate}</span>
        </div>
      </div>
    `;
  },

  renderSdlcFlowSvg(phases) {
    const coords = [
      { x: 92, y: 120, num: '01', title: 'Specify', sub: 'PRD & Statutory RTM' },
      { x: 243, y: 120, num: '02', title: 'Dispatch', sub: 'Skill Pinning & Quotas' },
      { x: 394, y: 120, num: '03', title: 'Generate', sub: 'Isolated TDD & Code' },
      { x: 545, y: 120, num: '04', title: 'Review', sub: 'Shadow Verification Rail', isGap: true },
      { x: 696, y: 120, num: '05', title: 'Verify', sub: '$0.00 Cent-for-Cent Proof' },
      { x: 847, y: 120, num: '06', title: 'Ship', sub: 'Sovereign Spanner Cutover' },
      { x: 998, y: 120, num: '07', title: 'Operate', sub: 'ADR Closed-Loop Harvest' }
    ];

    let pathsHtml = '';
    for (let i = 0; i < coords.length - 1; i++) {
      const c1 = coords[i];
      const c2 = coords[i + 1];
      const isGapEdge = (i === 2 || i === 3);
      pathsHtml += `
        <line x1="${c1.x + 54}" y1="${c1.y}" x2="${c2.x - 54}" y2="${c2.y}"
              stroke="${isGapEdge ? '#E11D48' : '#846D93'}" stroke-width="2" opacity="0.45" />
        <line x1="${c1.x + 54}" y1="${c1.y}" x2="${c2.x - 54}" y2="${c2.y}"
              class="sdlc-flow-line" stroke="${isGapEdge ? '#E11D48' : '#6542BE'}" stroke-width="2.5" />
      `;
    }

    let nodesHtml = '';
    coords.forEach((c, idx) => {
      const isSelected = (this.selectedPhaseIdx === idx);
      const isAll = (this.selectedPhaseIdx === -1);
      const isGap = !!c.isGap;

      const fillBg = isSelected
        ? (isGap ? '#881337' : '#411361')
        : (isGap ? '#FFF1F2' : (isAll ? '#FAF8FF' : '#FFFFFA'));

      const strokeColor = isSelected
        ? (isGap ? '#E11D48' : '#AA8FFF')
        : (isGap ? '#E11D48' : '#6542BE');

      const titleColor = isSelected ? '#FFFFFA' : (isGap ? '#881337' : '#1A0826');
      const subColor = isSelected ? '#EDE6FF' : (isGap ? '#9F1239' : '#462B54');
      const badgeBg = isSelected ? '#AA8FFF' : (isGap ? '#E11D48' : '#EDE6FF');
      const badgeFg = isSelected ? '#1A0826' : (isGap ? '#FFFFFA' : '#411361');

      nodesHtml += `
        <g class="phase-svg-node"
           onclick="PipelineView.selectPhase(${idx}, false)"
           onmouseenter="PipelineView.hoverPhase(${idx})"
           onmouseleave="PipelineView.hoverPhase(null)"
           role="button" tabindex="0" aria-label="Select Phase ${c.num} ${c.title}">
          ${isGap ? `
            <rect x="${c.x - 62}" y="${c.y - 52}" width="124" height="104" rx="14"
                  fill="none" stroke="#E11D48" stroke-width="2" stroke-dasharray="4 3" class="gap-pulse-ring" />
          ` : ''}
          <rect x="${c.x - 54}" y="${c.y - 44}" width="108" height="88" rx="11"
                fill="${fillBg}" stroke="${strokeColor}" stroke-width="${isSelected ? '3' : '2'}" />
          <rect x="${c.x - 38}" y="${c.y - 35}" width="76" height="17" rx="4" fill="${badgeBg}" />
          <text x="${c.x}" y="${c.y - 23}" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="800"
                fill="${badgeFg}" text-anchor="middle">PHASE ${c.num}</text>
          <text x="${c.x}" y="${c.y + 3}" font-family="Plus Jakarta Sans, sans-serif" font-size="13" font-weight="800"
                fill="${titleColor}" text-anchor="middle">${c.title}</text>
          <text x="${c.x}" y="${c.y + 21}" font-family="Plus Jakarta Sans, sans-serif" font-size="8.5" font-weight="600"
                fill="${subColor}" text-anchor="middle">${c.sub}</text>
          ${isGap ? `
            <circle cx="${c.x + 44}" cy="${c.y - 34}" r="9" fill="#E11D48" />
            <text x="${c.x + 44}" y="${c.y - 30}" font-size="10" fill="#FFFFFA" font-weight="800" text-anchor="middle">!</text>
          ` : ''}
        </g>
      `;
    });

    return `
      <div style="width:100%;overflow-x:auto;background:#FAF8FF;border:1px solid var(--zip-lighter);border-radius:10px;padding:0.5rem">
        <svg viewBox="0 0 1090 215" style="width:100%;min-width:860px;height:auto;display:block">
          <defs>
            <linearGradient id="stageOneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#AA8FFF" stop-opacity="0.14" />
              <stop offset="100%" stop-color="#6542BE" stop-opacity="0.06" />
            </linearGradient>
            <linearGradient id="stageTwoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#E11D48" stop-opacity="0.09" />
              <stop offset="100%" stop-color="#059669" stop-opacity="0.14" />
            </linearGradient>
          </defs>

          <!-- Stage I & Stage II Background Contours -->
          <polygon points="35,120 243,32 455,120 243,205" fill="url(#stageOneGrad)" stroke="#C9B3FF" stroke-width="1.5" stroke-dasharray="6 4" />
          <polygon points="530,120 796,32 1060,120 796,205" fill="url(#stageTwoGrad)" stroke="#A7F3D0" stroke-width="1.5" stroke-dasharray="6 4" />

          <text x="243" y="56" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="800" fill="#411361" text-anchor="middle">◆ STAGE I: INTENT &amp; SYNTHESIS (P01–P03)</text>
          <text x="796" y="56" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="800" fill="#064E3B" text-anchor="middle">◇ STAGE II: SHADOW VERIFICATION &amp; CUTOVER (P04–P07)</text>

          ${pathsHtml}
          ${nodesHtml}
        </svg>
      </div>
    `;
  },

  renderPhase4Spotlight() {
    const activeNode = this.remediationNodesData[this.selectedRemediationNode] || this.remediationNodesData.drift;

    return `
      <div class="card gap-card" style="margin-bottom:1.25rem;border:2px solid #E11D48;background:linear-gradient(135deg, #FFF1F2 0%, #FFFFFA 100%);box-shadow:0 6px 20px rgba(225, 29, 72, 0.08)">
        <div class="bottom-accordion-header" onclick="PipelineView.toggleGapRemediation()" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem">
          <div style="display:flex;align-items:flex-start;gap:0.9rem;max-width:780px">
            <div style="width:42px;height:42px;border-radius:10px;background:#E11D48;color:#FFFFFA;display:flex;align-items:center;justify-content:center;font-size:1.3rem;font-weight:800;flex-shrink:0;box-shadow:0 4px 12px rgba(225,29,72,0.25)">
              ⚠️
            </div>
            <div>
              <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;flex-wrap:wrap">
                <span class="pill pill-gap" style="font-size:0.7rem;font-weight:800">PHASE 4 ARCHITECTURAL GAP SPOTLIGHT</span>
                <span class="pill" style="background:#FFFFFA;border:1px solid #E11D48;color:#881337;font-size:0.7rem;font-weight:700">Bridged by AST Differ &amp; Bitemporal Audits</span>
              </div>
              <h3 style="margin-bottom:0.2rem;color:#881337;font-size:1.12rem">Phase 4 Remediation: Replacing Human PR Spot-Checks with Mathematical Proof</h3>
              <p style="margin:0;font-size:0.84rem;color:#462B54">
                Click to ${this.isGapRemediationOpen ? 'collapse' : 'expand'} interactive AST Conformance Differ, Bitemporal Schema Auditor, and Cent-for-Cent ($0.00) Drift Prover architecture.
              </p>
            </div>
          </div>
          <div style="display:flex;gap:0.6rem;flex-wrap:wrap" onclick="event.stopPropagation()">
            <button class="btn" style="background:#FFFFFA;border:1.5px solid #E11D48;color:#881337;font-weight:700" onclick="PipelineView.toggleGapRemediation()">
              ${this.isGapRemediationOpen ? '▲ Collapse Remediation Blueprint' : '▼ Expand Remediation Blueprint'}
            </button>
            <button class="btn btn-primary" style="background:#881337;border-color:#881337" onclick="PipelineView.inspectGap()">
              Open Drawer Spec →
            </button>
          </div>
        </div>

        ${this.isGapRemediationOpen ? `
          <div style="margin-top:1.2rem;padding-top:1.2rem;border-top:1px dashed #F43F5E">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.8rem;flex-wrap:wrap;gap:0.5rem">
              <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
                <span style="font-size:0.78rem;font-weight:800;color:#1A0826">INTERACTIVE BLUEPRINT — CLICK ANY COMPONENT NODE:</span>
                <button class="btn ${this.selectedRemediationNode === 'ast' ? 'btn-primary' : ''}" style="font-size:0.72rem;padding:0.25rem 0.6rem" onclick="PipelineView.selectRemediationNode('ast')">1. AST Differ</button>
                <button class="btn ${this.selectedRemediationNode === 'bitemporal' ? 'btn-primary' : ''}" style="font-size:0.72rem;padding:0.25rem 0.6rem" onclick="PipelineView.selectRemediationNode('bitemporal')">2. Bitemporal Auditor</button>
                <button class="btn ${this.selectedRemediationNode === 'drift' ? 'btn-primary' : ''}" style="font-size:0.72rem;padding:0.25rem 0.6rem" onclick="PipelineView.selectRemediationNode('drift')">3. $0.00 Drift Prover</button>
                <button class="btn ${this.selectedRemediationNode === 'filter' ? 'btn-primary' : ''}" style="font-size:0.72rem;padding:0.25rem 0.6rem" onclick="PipelineView.selectRemediationNode('filter')">4. Side-Effect Filter</button>
              </div>
              <span class="pill pill-good" style="font-size:0.72rem">Mathematical Guarantee: $0.00 Drift</span>
            </div>

            <div style="width:100%;overflow-x:auto;background:#FFFFFA;border:1px solid var(--zip-lighter);border-radius:10px;padding:0.9rem;margin-bottom:1rem">
              <svg viewBox="0 0 980 220" style="width:100%;min-width:780px;height:auto;display:block">
                <rect x="14" y="60" width="160" height="100" rx="10" fill="#1A0826" stroke="#411361" stroke-width="2" />
                <text x="94" y="88" font-family="Plus Jakarta Sans, sans-serif" font-size="11.5" font-weight="800" fill="#FFFFFA" text-anchor="middle">Live Borrower Events</text>
                <text x="94" y="106" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#AA8FFF" text-anchor="middle">Origination · Repayments</text>
                <text x="94" y="123" font-family="JetBrains Mono, monospace" font-size="9" fill="#EDE6FF" text-anchor="middle">Accruals · Delinquency</text>
                <rect x="34" y="135" width="120" height="16" rx="3" fill="#6542BE" />
                <text x="94" y="147" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="700" fill="#FFFFFA" text-anchor="middle">100% Dual-Fork Mirror</text>

                <path d="M 174 90 L 238 52" stroke="#462B54" stroke-width="2.5" fill="none" />
                <polygon points="236,48 245,50 240,57" fill="#462B54" />
                <path d="M 174 130 L 238 168" stroke="#6542BE" stroke-width="2.5" stroke-dasharray="5 4" fill="none" />
                <polygon points="240,163 245,170 236,172" fill="#6542BE" />

                <rect x="248" y="16" width="210" height="72" rx="8" fill="#FAF8FF" stroke="#846D93" stroke-width="1.5" />
                <text x="353" y="38" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="800" fill="#462B54" text-anchor="middle">Legacy Azure LMS (Baseline)</text>
                <text x="353" y="55" font-family="JetBrains Mono, monospace" font-size="9" fill="#846D93" text-anchor="middle">Single-Temporal SQL · C#</text>
                <text x="353" y="72" font-family="JetBrains Mono, monospace" font-size="9" font-weight="700" fill="#881337" text-anchor="middle">Output: Legacy Journal Entry</text>

                <g class="remediation-svg-node" onclick="PipelineView.selectRemediationNode('filter')">
                  <rect x="248" y="122" width="210" height="82" rx="8" fill="${this.selectedRemediationNode === 'filter' ? '#411361' : '#EDE6FF'}" stroke="#6542BE" stroke-width="${this.selectedRemediationNode === 'filter' ? 3 : 2}" />
                  <text x="353" y="143" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="800" fill="${this.selectedRemediationNode === 'filter' ? '#FFFFFA' : '#411361'}" text-anchor="middle">GCP Sovereign Target (Spanner)</text>
                  <rect x="262" y="152" width="182" height="20" rx="4" fill="#1A0826" stroke="#AA8FFF" stroke-width="1" />
                  <text x="353" y="166" font-family="JetBrains Mono, monospace" font-size="9" font-weight="700" fill="#AA8FFF" text-anchor="middle">4. Side-Effect Suppression Filter</text>
                  <text x="353" y="192" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="700" fill="${this.selectedRemediationNode === 'filter' ? '#34D399' : '#059669'}" text-anchor="middle">Fixed-Point Integer Cents Only</text>
                </g>

                <path d="M 458 52 L 525 82" stroke="#462B54" stroke-width="2" fill="none" />
                <path d="M 458 164 L 525 135" stroke="#6542BE" stroke-width="2.5" fill="none" />

                <rect x="528" y="20" width="270" height="182" rx="12" fill="#1A0826" stroke="#AA8FFF" stroke-width="2.5" />
                <text x="663" y="40" font-family="JetBrains Mono, monospace" font-size="10" font-weight="800" fill="#AA8FFF" text-anchor="middle">PHASE 4 REMEDIATION ENGINE</text>

                <g class="remediation-svg-node" onclick="PipelineView.selectRemediationNode('ast')">
                  <rect x="542" y="48" width="242" height="42" rx="6" fill="${this.selectedRemediationNode === 'ast' ? '#6542BE' : '#240E34'}" stroke="${this.selectedRemediationNode === 'ast' ? '#FFFFFA' : '#411361'}" stroke-width="1.5" />
                  <text x="663" y="66" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="800" fill="#FFFFFA" text-anchor="middle">1. AST Spec Conformance Differ</text>
                  <text x="663" y="81" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#EDE6FF" text-anchor="middle">Proves AST == PRD Clauses (Zero Bloat)</text>
                </g>

                <g class="remediation-svg-node" onclick="PipelineView.selectRemediationNode('bitemporal')">
                  <rect x="542" y="98" width="242" height="42" rx="6" fill="${this.selectedRemediationNode === 'bitemporal' ? '#6542BE' : '#240E34'}" stroke="${this.selectedRemediationNode === 'bitemporal' ? '#FFFFFA' : '#411361'}" stroke-width="1.5" />
                  <text x="663" y="116" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="800" fill="#FFFFFA" text-anchor="middle">2. Bitemporal Schema Auditor</text>
                  <text x="663" y="131" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#EDE6FF" text-anchor="middle">Valid-Time × Transaction-Time Isolation</text>
                </g>

                <g class="remediation-svg-node" onclick="PipelineView.selectRemediationNode('drift')">
                  <rect x="542" y="148" width="242" height="42" rx="6" fill="${this.selectedRemediationNode === 'drift' ? '#059669' : '#240E34'}" stroke="${this.selectedRemediationNode === 'drift' ? '#FFFFFA' : '#059669'}" stroke-width="1.5" />
                  <text x="663" y="166" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="800" fill="#FFFFFA" text-anchor="middle">3. Cent-for-Cent ($0.00) Drift Prover</text>
                  <text x="663" y="181" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#ECFDF5" text-anchor="middle">Dual-Run Shadow Parity Reconciliation</text>
                </g>

                <line x1="798" y1="112" x2="836" y2="112" stroke="#059669" stroke-width="3" />
                <polygon points="833,106 843,112 833,118" fill="#059669" />

                <rect x="845" y="52" width="122" height="120" rx="10" fill="#ECFDF5" stroke="#059669" stroke-width="2.5" />
                <text x="906" y="78" font-family="Plus Jakarta Sans, sans-serif" font-size="18" text-anchor="middle">✅</text>
                <text x="906" y="99" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="800" fill="#064E3B" text-anchor="middle">Cutover Gate</text>
                <text x="906" y="116" font-family="JetBrains Mono, monospace" font-size="11" font-weight="800" fill="#059669" text-anchor="middle">$0.00 DRIFT</text>
                <text x="906" y="135" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="700" fill="#064E3B" text-anchor="middle">100% Double-Entry</text>
                <text x="906" y="149" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="700" fill="#064E3B" text-anchor="middle">Balanced Ledger</text>
              </svg>
            </div>

            <div style="background:#1A0826;color:#FFFFFA;border-radius:10px;padding:1.1rem;border:1.5px solid #411361">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.6rem">
                <div style="display:flex;align-items:center;gap:0.6rem">
                  <span class="pill" style="background:#AA8FFF;color:#1A0826;font-weight:800;font-size:0.72rem">${activeNode.badge}</span>
                  <h4 style="margin:0;color:#FFFFFA;font-size:1.05rem">${activeNode.title}</h4>
                </div>
                <span style="font-family:var(--font-mono);font-size:0.75rem;color:#AA8FFF">Skill ID: ${activeNode.skillRef}</span>
              </div>
              <p style="color:#EDE6FF;font-size:0.84rem;margin-bottom:0.8rem">${activeNode.summary}</p>
              <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-bottom:0.85rem">
                ${activeNode.metrics.map(m => `<span class="pill" style="background:#240E34;border:1px solid #6542BE;color:#FFFFFA;font-size:0.74rem">✓ ${m}</span>`).join('')}
              </div>
              <pre style="background:#0C0312;color:#34D399;padding:0.75rem;border-radius:8px;font-family:var(--font-mono);font-size:0.76rem;overflow-x:auto;border:1px solid #3B1B54;margin:0"><code>${activeNode.codeSnippet}</code></pre>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  },

  renderTokenEconomicsCard() {
    const d = this.rungEconomicsData[this.selectedRungIdx] || this.rungEconomicsData[3];
    const baselineCost = this.rungEconomicsData[0].costPerSp; // $1420
    const savingsPerSp = baselineCost - d.costPerSp;
    const annualSavings = savingsPerSp * this.monthlyStoryPoints * 12;

    const xs = [95, 255, 415, 575];
    const costYs = [48, 96, 148, 172];
    const defectYs = [55, 112, 160, 174];

    let costPolyline = xs.map((x, idx) => `${x},${costYs[idx]}`).join(' ');
    let costAreaPoints = `${xs[0]},185 ` + costPolyline + ` ${xs[3]},185`;
    let defectPolyline = xs.map((x, idx) => `${x},${defectYs[idx]}`).join(' ');

    let pointsSvg = '';
    this.rungEconomicsData.forEach((item, idx) => {
      const cx = xs[idx];
      const cyCost = costYs[idx];
      const cyDef = defectYs[idx];
      const isSel = (idx === this.selectedRungIdx);

      pointsSvg += `
        <g class="econ-point-group" onclick="PipelineView.selectRung(${idx})" role="button" tabindex="0" aria-label="Inspect ${item.name}">
          <line x1="${cx}" y1="32" x2="${cx}" y2="185" stroke="${isSel ? '#411361' : '#EDE6FF'}" stroke-width="${isSel ? '2.5' : '1'}" stroke-dasharray="${isSel ? 'none' : '3 3'}" />
          <circle cx="${cx}" cy="${cyCost}" r="${isSel ? 8.5 : 5.5}" fill="${isSel ? '#411361' : '#6542BE'}" stroke="#FFFFFA" stroke-width="2" />
          <rect x="${cx - 34}" y="${cyCost - 27}" width="68" height="18" rx="4" fill="${isSel ? '#411361' : '#FAF8FF'}" stroke="#6542BE" stroke-width="1.2" />
          <text x="${cx}" y="${cyCost - 15}" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="800" fill="${isSel ? '#FFFFFA' : '#1A0826'}" text-anchor="middle">$${item.costPerSp}/SP</text>

          <circle cx="${cx}" cy="${cyDef}" r="${isSel ? 7.5 : 5}" fill="${idx === 3 ? '#059669' : '#E11D48'}" stroke="#FFFFFA" stroke-width="2" />
          <text x="${cx + 12}" y="${cyDef + 4}" font-family="JetBrains Mono, monospace" font-size="9.2" font-weight="800" fill="${idx === 3 ? '#064E3B' : '#881337'}">${item.defectRate}%</text>

          <rect x="${cx - 38}" y="192" width="76" height="22" rx="5" fill="${isSel ? '#411361' : '#EDE6FF'}" />
          <text x="${cx}" y="207" font-family="JetBrains Mono, monospace" font-size="10.5" font-weight="800" fill="${isSel ? '#AA8FFF' : '#411361'}" text-anchor="middle">${item.rung}</text>
        </g>
      `;
    });

    return `
      <div class="card zip-surface-card" style="padding:1.25rem;margin-bottom:1.5rem;border:1.5px solid #6542BE">
        <div class="bottom-accordion-header" onclick="PipelineView.toggleTokenEconomics()" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
          <div style="display:flex;align-items:flex-start;gap:0.9rem;max-width:780px">
            <div style="width:42px;height:42px;border-radius:10px;background:#411361;color:#AA8FFF;display:flex;align-items:center;justify-content:center;font-size:1.3rem;font-weight:800;flex-shrink:0">
              📉
            </div>
            <div>
              <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;flex-wrap:wrap">
                <span class="pill pill-fearless" style="font-size:0.7rem">Token Economics &amp; Unit Cost Attribution</span>
                <span class="pill pill-good" style="font-size:0.7rem">-94% Unit Delivery Cost at L4 ($85/SP)</span>
              </div>
              <h3 style="margin:0 0 0.2rem;font-size:1.12rem;color:#1A0826">Declining Unit Cost of Delivery &amp; Defect Escape Rate Curve</h3>
              <p style="margin:0;font-size:0.84rem;color:var(--zip-text-secondary)">
                Click to ${this.isTokenEconomicsOpen ? 'collapse' : 'expand'} interactive Autonomy Rung (L1 → L4) unit cost curve &amp; annual Story Point velocity ROI simulator.
              </p>
            </div>
          </div>
          <div style="display:flex;gap:0.6rem;flex-wrap:wrap" onclick="event.stopPropagation()">
            <button class="btn" style="background:#EDE6FF;border:1.5px solid #6542BE;color:#411361;font-weight:700" onclick="PipelineView.toggleTokenEconomics()">
              ${this.isTokenEconomicsOpen ? '▲ Collapse Cost & Defect Curve' : '▼ Expand Cost & Defect Curve'}
            </button>
          </div>
        </div>

        ${this.isTokenEconomicsOpen ? `
          <div style="margin-top:1.2rem;padding-top:1.2rem;border-top:1px dashed #C9B3FF">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;margin-bottom:1rem">
              <span style="font-size:0.78rem;font-weight:800;color:#1A0826">SELECT AUTONOMY RUNG OR SIMULATE ENTERPRISE VELOCITY:</span>
              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;align-items:center">
                ${this.rungEconomicsData.map((r, i) => `
                  <button class="btn ${this.selectedRungIdx === i ? 'btn-primary' : ''}" style="font-size:0.75rem;padding:0.32rem 0.65rem" onclick="PipelineView.selectRung(${i})">
                    ${r.rung}: $${r.costPerSp}/SP
                  </button>
                `).join('')}
                <button class="btn" style="font-size:0.75rem;padding:0.32rem 0.65rem;border-color:#6542BE;color:#411361;background:#EDE6FF;font-weight:700" onclick="PipelineView.toggleEconomicsTable()">
                  📊 ${this.showEconomicsTable ? 'Hide Rung Matrix' : 'Compare All 4 Rungs'}
                </button>
              </div>
            </div>

            <div style="display:grid;grid-template-columns:1.35fr 1fr;gap:1.2rem;align-items:stretch" class="econ-grid-responsive">
              <!-- Left: Interactive Dual-Curve SVG Chart -->
              <div style="background:#FAF8FF;border:1px solid var(--zip-lighter);border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;justify-content:space-between">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;padding:0 0.5rem;font-size:0.74rem;font-weight:800">
                  <span style="color:#411361">■ Unit Cost per Story Point ($ USD)</span>
                  <span style="color:#881337">● Escaped Defect Rate (% of features)</span>
                </div>
                <svg viewBox="0 0 680 225" style="width:100%;height:auto;display:block">
                  <defs>
                    <linearGradient id="zipCostAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#AA8FFF" stop-opacity="0.42" />
                      <stop offset="100%" stop-color="#EDE6FF" stop-opacity="0.05" />
                    </linearGradient>
                  </defs>

                  <line x1="50" y1="48" x2="630" y2="48" stroke="#EDE6FF" stroke-width="1" />
                  <line x1="50" y1="95" x2="630" y2="95" stroke="#EDE6FF" stroke-width="1" />
                  <line x1="50" y1="140" x2="630" y2="140" stroke="#EDE6FF" stroke-width="1" />
                  <line x1="50" y1="185" x2="630" y2="185" stroke="#DBCCFF" stroke-width="1.5" />

                  <polygon points="${costAreaPoints}" fill="url(#zipCostAreaGrad)" />
                  <polyline fill="none" stroke="#6542BE" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" points="${costPolyline}" />
                  <polyline fill="none" stroke="#E11D48" stroke-width="2.5" stroke-dasharray="6 4" stroke-linecap="round" stroke-linejoin="round" points="${defectPolyline}" />

                  ${pointsSvg}
                </svg>
              </div>

              <!-- Right: Selected Rung Live Telemetry & ROI Simulator Panel -->
              <div style="background:#1A0826;color:#FFFFFA;border-radius:10px;padding:1.15rem;border:1.5px solid #411361;box-shadow:var(--shadow-elevated);display:flex;flex-direction:column;justify-content:space-between">
                <div>
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.55rem">
                    <span class="pill" style="background:#AA8FFF;color:#1A0826;font-weight:800;font-size:0.72rem">SELECTED AUTONOMY RUNG</span>
                    <span style="font-family:var(--font-mono);font-size:0.78rem;color:#AA8FFF">Prompt Cache Hit: ${d.cacheHitRate}</span>
                  </div>
                  <h4 style="color:#FFFFFA;font-size:1.08rem;margin-bottom:0.35rem">${d.name}</h4>
                  <p style="color:#EDE6FF;font-size:0.8rem;line-height:1.45;margin-bottom:0.9rem">${d.autonomyDesc}</p>

                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;margin-bottom:0.85rem">
                    <div style="background:#240E34;padding:0.6rem;border-radius:8px;border:1px solid #411361">
                      <div style="font-size:0.68rem;color:#C9B3FF;text-transform:uppercase;font-weight:700">Total Unit Cost / SP</div>
                      <div style="font-size:1.3rem;font-weight:800;color:#FFFFFA;font-family:var(--font-mono)">$${d.costPerSp}</div>
                      <div style="font-size:0.68rem;color:#AA8FFF">Compute + Token: ${d.tokenCostSp}</div>
                    </div>
                    <div style="background:#240E34;padding:0.6rem;border-radius:8px;border:1px solid #411361">
                      <div style="font-size:0.68rem;color:#C9B3FF;text-transform:uppercase;font-weight:700">Escaped Defect Rate</div>
                      <div style="font-size:1.3rem;font-weight:800;color:${d.defectRate < 1 ? '#34D399' : '#FB7185'};font-family:var(--font-mono)">${d.defectRate}%</div>
                      <div style="font-size:0.68rem;color:#EDE6FF">Human Review: ${d.humanReviewHrs}</div>
                    </div>
                  </div>

                  <!-- Interactive Annual Enterprise ROI Simulator -->
                  <div style="background:#240E34;padding:0.7rem;border-radius:8px;border:1px solid #6542BE;margin-bottom:0.75rem">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.3rem">
                      <span style="font-size:0.72rem;font-weight:700;color:#AA8FFF">VELOCITY SIMULATOR: ${this.monthlyStoryPoints} SP / MONTH</span>
                      <span style="font-family:var(--font-mono);font-size:0.78rem;font-weight:800;color:#34D399">
                        ${annualSavings > 0 ? `+$${(annualSavings / 1000000).toFixed(2)}M / yr saved` : 'Baseline L1 Cost'}
                      </span>
                    </div>
                    <input type="range" min="100" max="2500" step="100" value="${this.monthlyStoryPoints}"
                           style="width:100%;accent-color:#AA8FFF;cursor:pointer"
                           oninput="PipelineView.setMonthlySp(this.value)">
                  </div>
                </div>

                <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.55rem;border-top:1px solid #3B1B54;font-size:0.75rem">
                  <span style="color:#C9B3FF">Compounding ADR Harvester: <strong>Active</strong></span>
                  <button class="btn" style="padding:0.25rem 0.6rem;font-size:0.72rem;background:#6542BE;color:#FFFFFA;border:none" onclick="ArtifactDrawer.open({name:'Token Economics & Unit Cost Attribution (${d.rung})', category:'Financial Governance', description:'At ${d.name}, total delivery cost per Story Point is $${d.costPerSp} with a ${d.cacheHitRate} context cache hit rate and ${d.defectRate}% escaped defect rate.'})">
                    Inspect Cost Model →
                  </button>
                </div>
              </div>
            </div>

            ${this.showEconomicsTable ? `
              <div style="margin-top:1.1rem;padding-top:1.1rem;border-top:1px solid var(--zip-lighter);overflow-x:auto">
                <table style="width:100%;border-collapse:collapse;font-size:0.8rem;text-align:left">
                  <thead>
                    <tr style="background:#EDE6FF;color:#411361;font-weight:800">
                      <th style="padding:0.55rem 0.75rem;border-radius:6px 0 0 6px">Autonomy Rung</th>
                      <th style="padding:0.55rem 0.75rem">Unit Cost / SP</th>
                      <th style="padding:0.55rem 0.75rem">Token &amp; Compute</th>
                      <th style="padding:0.55rem 0.75rem">Prompt Cache Hit</th>
                      <th style="padding:0.55rem 0.75rem">Human Review Overhead</th>
                      <th style="padding:0.55rem 0.75rem">Escaped Defect Rate</th>
                      <th style="padding:0.55rem 0.75rem;border-radius:0 6px 6px 0">Annual Spend (${this.monthlyStoryPoints} SP/mo)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${this.rungEconomicsData.map((r, idx) => {
                      const isAct = (idx === this.selectedRungIdx);
                      const yrSpend = (r.costPerSp * this.monthlyStoryPoints * 12) / 1000000;
                      return `
                        <tr style="border-bottom:1px solid var(--zip-lighter);background:${isAct ? '#FAF8FF' : 'transparent'};cursor:pointer" onclick="PipelineView.selectRung(${idx})">
                          <td style="padding:0.6rem 0.75rem;font-weight:800;color:#1A0826">${r.name}</td>
                          <td style="padding:0.6rem 0.75rem;font-family:var(--font-mono);font-weight:800;color:#6542BE">$${r.costPerSp}</td>
                          <td style="padding:0.6rem 0.75rem;font-family:var(--font-mono)">${r.tokenCostSp}</td>
                          <td style="padding:0.6rem 0.75rem;font-family:var(--font-mono);color:#059669;font-weight:700">${r.cacheHitRate}</td>
                          <td style="padding:0.6rem 0.75rem">${r.humanReviewHrs}</td>
                          <td style="padding:0.6rem 0.75rem;font-family:var(--font-mono);font-weight:700;color:${r.defectRate < 1 ? '#059669' : '#E11D48'}">${r.defectRate}%</td>
                          <td style="padding:0.6rem 0.75rem;font-family:var(--font-mono);font-weight:800;color:#1A0826">$${yrSpend.toFixed(2)}M / yr</td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>
    `;
  },

  renderPhaseBreakdownSection(phases) {
    if (!phases || !phases.length) {
      return `<div class="card"><p>No pipeline phase data loaded.</p></div>`;
    }

    const phasesToRender = (this.selectedPhaseIdx === -1)
      ? phases.map((p, i) => ({ phase: p, idx: i }))
      : [{ phase: phases[this.selectedPhaseIdx] || phases[0], idx: this.selectedPhaseIdx }];

    let html = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:0.6rem">
        <div>
          <h2 style="margin-bottom:0.15rem">
            ${this.selectedPhaseIdx === -1
              ? 'Complete 7-Phase SDLC Subphase &amp; Step Contracts'
              : `Phase 0${this.selectedPhaseIdx + 1}: ${(phases[this.selectedPhaseIdx] || {}).phaseName || ''} — Phase &amp; Step Contracts`}
          </h2>
          <p style="margin:0;font-size:0.86rem;color:var(--zip-text-secondary)">
            Showing formal Discovery/Synthesis and Verification/Delivery subphases. Click any step card to inspect its contract in the right-hand Artifact Drawer.
          </p>
        </div>
        <div style="display:flex;gap:0.35rem;flex-wrap:wrap">
          <button class="btn ${this.selectedPhaseIdx === -1 ? 'btn-primary' : ''}" style="font-size:0.75rem;padding:0.3rem 0.65rem" onclick="PipelineView.selectPhase(-1)">
            All 7 Phases
          </button>
          ${phases.map((p, i) => `
            <button class="btn ${this.selectedPhaseIdx === i ? 'btn-primary' : ''}" style="font-size:0.75rem;padding:0.3rem 0.65rem" onclick="PipelineView.selectPhase(${i})">
              P0${i + 1}: ${p.phaseName}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    phasesToRender.forEach(({ phase, idx }) => {
      const isGapPhase = (idx === 3);
      const subphases = phase.subphases || [];

      html += `
        <div class="card zip-surface-card" style="margin-bottom:1.4rem;border-left:4px solid ${isGapPhase ? '#E11D48' : '#6542BE'}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:0.5rem;border-bottom:1px solid var(--zip-lighter);padding-bottom:0.75rem">
            <div style="display:flex;align-items:center;gap:0.6rem">
              <span class="pill ${isGapPhase ? 'pill-gap' : 'pill-fearless'}" style="font-weight:800">PHASE 0${idx + 1}</span>
              <h3 style="margin:0;font-size:1.2rem">${phase.phaseName || `Phase ${idx + 1}`}</h3>
              ${isGapPhase ? `<span class="pill pill-gap">⚠️ Architectural Gap Spotlight</span>` : ''}
            </div>
            <button class="btn" style="font-size:0.76rem" onclick="ArtifactDrawer.open(PipelineView.getPhases()[${idx}])">
              Inspect Full Phase 0${idx + 1} Spec →
            </button>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(245px, 1fr));gap:1rem">
            ${subphases.map(sp => {
              const isDivergent = (sp.type || '').toLowerCase().includes('divergent');
              const steps = sp.steps || [];
              return `
                <div class="zip-subphase-box" style="display:flex;flex-direction:column;justify-content:space-between">
                  <div>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.45rem">
                      <strong style="font-size:0.92rem;color:var(--zip-text-primary)">${sp.name}</strong>
                      <span class="pill" style="font-size:0.66rem;background:${isDivergent ? '#EDE6FF' : '#ECFDF5'};color:${isDivergent ? '#411361' : '#064E3B'};font-weight:700">
                        ${isDivergent ? '◆ Exploration' : '◇ Convergence'}
                      </span>
                    </div>
                    <p style="font-size:0.78rem;color:var(--zip-text-secondary);margin-bottom:0.8rem;line-height:1.4">${sp.objective || ''}</p>
                  </div>

                  <div style="display:flex;flex-direction:column;gap:0.5rem">
                    ${steps.map(st => `
                      <div class="zip-step-item"
                           onclick="PipelineView.inspectStep('${st.id}', '${this.escapeAttr(st.name)}', '${this.escapeAttr(st.personas)}', '${this.escapeAttr(st.input)}', '${this.escapeAttr(st.output)}', '${this.escapeAttr(st.gate)}')">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.2rem">
                          <span style="font-family:var(--font-mono);font-size:0.7rem;font-weight:700;color:#6542BE">${st.id}</span>
                          <span style="font-size:0.66rem;color:var(--zip-text-secondary);font-weight:600">${st.family || ''}</span>
                        </div>
                        <div style="font-weight:700;font-size:0.82rem;color:var(--zip-text-primary);margin-bottom:0.25rem">${st.name}</div>
                        <div style="font-size:0.72rem;color:var(--zip-text-secondary)"><strong>Out:</strong> ${st.output || 'Contract'}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    return html;
  },

  selectPhase(idx, shouldScroll = false) {
    this.selectedPhaseIdx = idx;
    this.render(document.getElementById('mainStage'));
    if (shouldScroll) {
      const anchor = document.getElementById('pipelinePhaseDetailAnchor');
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  },

  hoverPhase(idx) {
    this.hoveredPhaseIdx = idx;
    this.render(document.getElementById('mainStage'));
  },

  selectRung(rungIdx) {
    this.selectedRungIdx = rungIdx;
    this.isTokenEconomicsOpen = true;
    this.render(document.getElementById('mainStage'));
  },

  selectRemediationNode(nodeKey) {
    this.selectedRemediationNode = nodeKey;
    this.isGapRemediationOpen = true;
    this.render(document.getElementById('mainStage'));
  },

  setMonthlySp(val) {
    this.monthlyStoryPoints = parseInt(val, 10) || 500;
    this.isTokenEconomicsOpen = true;
    this.render(document.getElementById('mainStage'));
  },

  toggleEconomicsTable() {
    this.showEconomicsTable = !this.showEconomicsTable;
    this.isTokenEconomicsOpen = true;
    this.render(document.getElementById('mainStage'));
  },

  toggleGapRemediation() {
    this.isGapRemediationOpen = !this.isGapRemediationOpen;
    this.render(document.getElementById('mainStage'));
  },

  toggleTokenEconomics() {
    this.isTokenEconomicsOpen = !this.isTokenEconomicsOpen;
    this.render(document.getElementById('mainStage'));
  },

  toggleAllBottomCards(openState) {
    this.isGapRemediationOpen = !!openState;
    this.isTokenEconomicsOpen = !!openState;
    this.render(document.getElementById('mainStage'));
  },

  expandAndScrollTo(section) {
    if (section === 'remediation') {
      this.isGapRemediationOpen = true;
      this.render(document.getElementById('mainStage'));
      const el = document.getElementById('bottomAnchorRemediation');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'economics') {
      this.isTokenEconomicsOpen = true;
      this.render(document.getElementById('mainStage'));
      const el = document.getElementById('bottomAnchorEconomics');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  inspectStep(id, name, personas, input, output, gate) {
    ArtifactDrawer.open({
      id: id,
      name: `${id}: ${name}`,
      category: 'SDLC Phase Technical Step Contract',
      description: `
        <p><strong>Step Identifier:</strong> <code>${id}</code></p>
        <p><strong>Acting PGSP Personas:</strong> ${personas}</p>
        <p><strong>Required Input Artifacts:</strong> ${input}</p>
        <p><strong>Mandatory Output Artifact:</strong> ${output}</p>
        <div class="card" style="margin-top:0.8rem;background:#ECFDF5;border-color:#059669">
          <strong style="color:#064E3B">Deterministic Quality Gate Invariant:</strong>
          <p style="margin:0.25rem 0 0;color:#064E3B;font-size:0.84rem">${gate}</p>
        </div>
      `,
      acting_personas: (personas || '').split('·').map(s => s.trim()).filter(Boolean)
    });
  },

  inspectGap() {
    ArtifactDrawer.open({
      name: 'Phase 4: Side-by-Side Shadow Verification Rail',
      category: 'Architectural Gap Resolution',
      description: 'Executes historical dual-run shadow replays comparing Azure LMS legacy outputs against Google Cloud sovereign target outputs, proving absolute zero cent drift before cutover.',
      acting_personas: ['D3 Verification Prover', 'B2 Data Architect', 'D1 Security & Compliance Auditor'],
      statutoryBasis: ['CFPB Reg Z (12 CFR 1026)', 'PCI DSS v4.0', 'SOX 404 Ledger Controls']
    });
  },

  escapeAttr(str) {
    return String(str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
};
