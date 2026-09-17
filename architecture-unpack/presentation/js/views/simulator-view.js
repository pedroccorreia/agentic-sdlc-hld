// Zip Architecture Workbench — Day-in-the-Life Live Simulator View (Track C: Turn 3 Final Producer Polish)
// Official 2024 Zip Brand Guidelines (v2.0) · Live Agent Execution Terminal, AST Diff Viewer & Telemetry Ribbon
// Zero third-party vendor leaks (Google Cloud Vertex AI / Gemini 1.5 Pro & Gemini Flash exclusively)

window.SimulatorView = {
  rawData: typeof dayInTheLifeData !== 'undefined' ? dayInTheLifeData : null,
  activePresetId: 'preset_full_18',
  currentStepIndex: 0,
  activeTab: 'narrative', // 'narrative' | 'terminal' | 'diff'
  isPlaying: false,
  playbackSpeed: 1, // 1 = 1x (3500ms), 2 = 2x (1750ms)
  copyFeedback: '',
  _timerId: null,
  _keyBound: false,

  presets: {
    preset_full_18: {
      id: 'preset_full_18',
      badge: 'Preset 1 · Full 18-Step Flow',
      title: 'End-to-End Loan Engine Migration (Full 18-Step SDLC Flow)',
      subtitle: 'Complete autonomous lifecycle from Executive BRD intake through isolated TDD codegen to 50k-account $0.00 Shadow Cutover.',
      stepIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      targetMetric: '50,000 Accounts Replayed · $0.00 Variance',
      modelEngine: 'Vertex AI Gemini 1.5 Pro (2M Context) + Gemini Flash'
    },
    preset_regz_hotfix: {
      id: 'preset_regz_hotfix',
      badge: 'Preset 2 · Statutory Hotfix',
      title: 'Emergency Statutory Compliance Hotfix (Reg Z APR & ECOA Adverse Action Verification)',
      subtitle: 'Rapid-response regulatory workflow enforcing 12 CFR § 1026.22 APR tolerances (0.125%) and 12 CFR § 1002 Adverse Action reason codes.',
      stepIndices: [1, 3, 7, 8, 9, 10, 12],
      targetMetric: '0.000% Reg Z APR Deviation · 100% ECOA Coverage',
      modelEngine: 'Vertex AI Gemini 1.5 Pro Constitutional Compliance Guard'
    },
    preset_shadow_proveout: {
      id: 'preset_shadow_proveout',
      badge: 'Preset 3 · Shadow Prove-Out',
      title: 'Shadow Dual-Run Cent-for-Cent ($0.00) Reconciliation Prove-Out',
      subtitle: 'Live traffic mirroring from Azure C# monolith via Pub/Sub with Envoy outbound side-effect suppression and BigQuery mathematical proof.',
      stepIndices: [5, 11, 13, 14, 15, 16, 17],
      targetMetric: '250,000 Journal Entries · 14 Clean Days $0.00 Drift',
      modelEngine: 'Vertex AI Agent Platform Sandbox + BigQuery Reconciler'
    }
  },

  initKeyNavigation() {
    if (this._keyBound) return;
    this._keyBound = true;
    document.addEventListener('keydown', (e) => {
      if (window.App && window.App.currentView !== 'simulator') return;
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.nextStep();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prevStep();
      } else if (e.key === ' ') {
        e.preventDefault();
        this.togglePlayback();
      } else if (e.key === '1') {
        this.setTab('narrative');
      } else if (e.key === '2') {
        this.setTab('terminal');
      } else if (e.key === '3') {
        this.setTab('diff');
      }
    });
  },

  injectStyles() {
    if (document.getElementById('simulator-track-c-styles')) return;
    const style = document.createElement('style');
    style.id = 'simulator-track-c-styles';
    style.textContent = `
      .sim-preset-bar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.85rem;
        margin-bottom: 1.15rem;
      }
      @media (max-width: 900px) {
        .sim-preset-bar { grid-template-columns: 1fr; }
      }
      .sim-preset-card {
        background: var(--zip-card-bg);
        border: 1.5px solid var(--zip-card-border);
        border-radius: var(--radius-md);
        padding: 0.9rem 1.1rem;
        cursor: pointer;
        transition: all 0.16s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .sim-preset-card:hover {
        border-color: var(--zip-fearlessness);
        transform: translateY(-2px);
        box-shadow: var(--shadow-subtle);
      }
      .sim-preset-card.active {
        border-color: var(--zip-medium);
        border-width: 2px;
        background: var(--zip-lightest);
        box-shadow: var(--shadow-elevated);
      }
      .sim-telemetry-ribbon {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 0.75rem;
        margin-bottom: 1.1rem;
      }
      .sim-telemetry-tile {
        background: var(--zip-card-bg);
        border: 1px solid var(--zip-lighter);
        border-radius: var(--radius-sm);
        padding: 0.65rem 0.9rem;
        display: flex;
        flex-direction: column;
        box-shadow: var(--shadow-subtle);
      }
      .sim-telemetry-label {
        font-size: 0.68rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--zip-text-muted);
      }
      .sim-telemetry-val {
        font-family: var(--font-mono);
        font-size: 0.95rem;
        font-weight: 800;
        color: var(--zip-confidence);
        margin-top: 0.15rem;
      }
      .sim-playback-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--zip-card-bg);
        border: 1px solid var(--zip-card-border);
        border-radius: var(--radius-md);
        padding: 0.75rem 1.15rem;
        margin-bottom: 1rem;
        box-shadow: var(--shadow-subtle);
        flex-wrap: wrap;
        gap: 0.8rem;
      }
      .sim-timeline-strip {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(38px, 1fr));
        gap: 0.35rem;
        margin-bottom: 1.25rem;
        background: var(--zip-card-bg);
        border: 1px solid var(--zip-card-border);
        padding: 0.65rem;
        border-radius: var(--radius-md);
      }
      .sim-step-node {
        height: 36px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--zip-lighter);
        background: var(--zip-card-elevated);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-family: var(--font-mono);
        font-size: 0.72rem;
        font-weight: 700;
        color: var(--zip-text-secondary);
        transition: all 0.15s ease;
        position: relative;
      }
      .sim-step-node:hover {
        border-color: var(--zip-fearlessness);
        background: var(--zip-lightest);
        transform: translateY(-2px);
      }
      .sim-step-node.completed {
        background: var(--zip-good-bg);
        border-color: var(--zip-good-green);
        color: var(--zip-good-text);
      }
      .sim-step-node.active {
        background: var(--zip-fearlessness);
        border-color: var(--zip-confidence);
        color: var(--zip-confidence);
        font-weight: 800;
        box-shadow: 0 0 0 2px var(--zip-confidence);
      }
      /* Tabbed Inspector */
      .sim-inspector-card {
        background: var(--zip-card-bg);
        border: 1px solid var(--zip-card-border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-elevated);
        overflow: hidden;
      }
      .sim-inspector-header {
        padding: 1.2rem 1.5rem;
        background: var(--zip-card-elevated);
        border-bottom: 1px solid var(--zip-lighter);
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .sim-tab-bar {
        display: flex;
        background: var(--zip-card-bg);
        border-bottom: 1px solid var(--zip-lighter);
        padding: 0 1.2rem;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .sim-tab-btn {
        padding: 0.85rem 1.15rem;
        font-family: var(--font-display);
        font-size: 0.84rem;
        font-weight: 700;
        color: var(--zip-text-muted);
        background: transparent;
        border: none;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        transition: all 0.15s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
      }
      .sim-tab-btn:hover {
        color: var(--zip-text-primary);
      }
      .sim-tab-btn.active {
        color: var(--zip-medium);
        border-bottom-color: var(--zip-fearlessness);
        background: var(--zip-lightest);
      }
      .sim-tab-body {
        padding: 1.5rem;
      }
      /* Terminal CLI Window */
      .sim-terminal-box {
        background: var(--zip-confidence);
        color: #F3EDFC;
        border-radius: var(--radius-md);
        border: 1px solid var(--zip-dark);
        font-family: var(--font-mono);
        font-size: 0.8rem;
        line-height: 1.55;
        overflow-x: auto;
        box-shadow: inset 0 2px 12px rgba(0,0,0,0.4);
      }
      .sim-terminal-topbar {
        background: #260E38;
        padding: 0.55rem 1rem;
        border-bottom: 1px solid #3B1B54;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.74rem;
        color: var(--zip-light);
      }
      .sim-terminal-dots {
        display: flex;
        gap: 0.4rem;
      }
      .sim-terminal-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
      .sim-terminal-content {
        padding: 1.15rem 1.3rem;
      }
      .cli-line {
        margin-bottom: 0.4rem;
        display: flex;
        gap: 0.75rem;
      }
      .cli-ts { color: #9D8BB2; user-select: none; flex-shrink: 0; }
      .cli-tag-vertex { color: #AA8FFF; font-weight: 700; flex-shrink: 0; }
      .cli-tag-mcp { color: #38BDF8; font-weight: 700; flex-shrink: 0; }
      .cli-tag-ast { color: #F472B6; font-weight: 700; flex-shrink: 0; }
      .cli-tag-pass { color: #34D399; font-weight: 700; flex-shrink: 0; }
      /* Diff Viewer */
      .sim-diff-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      @media (max-width: 900px) {
        .sim-diff-grid { grid-template-columns: 1fr; }
      }
      .sim-diff-pane {
        border: 1px solid var(--zip-lighter);
        border-radius: var(--radius-md);
        overflow: hidden;
        background: var(--zip-confidence);
        color: #F3EDFC;
        font-family: var(--font-mono);
        font-size: 0.78rem;
      }
      .sim-diff-header {
        padding: 0.6rem 1rem;
        font-weight: 700;
        font-size: 0.76rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .sim-diff-header.legacy-hdr {
        background: rgba(225, 29, 72, 0.25);
        color: #FDA4AF;
        border-bottom: 1px solid rgba(225, 29, 72, 0.4);
      }
      .sim-diff-header.target-hdr {
        background: rgba(5, 150, 105, 0.25);
        color: #6EE7B7;
        border-bottom: 1px solid rgba(5, 150, 105, 0.4);
      }
      .sim-diff-code {
        padding: 1rem;
        overflow-x: auto;
        line-height: 1.5;
        white-space: pre;
      }
      .diff-del { background: rgba(225, 29, 72, 0.22); color: #FECDD3; display: block; padding: 0 0.4rem; }
      .diff-add { background: rgba(5, 150, 105, 0.22); color: #A7F3D0; display: block; padding: 0 0.4rem; }
      /* Persona Dialogue Cards */
      .sim-persona-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1.15rem;
      }
      .sim-dialogue-bubble {
        background: var(--zip-card-elevated);
        border: 1px solid var(--zip-lighter);
        border-left: 4px solid var(--zip-medium);
        border-radius: var(--radius-sm);
        padding: 0.85rem 1.1rem;
        margin-bottom: 0.7rem;
      }
      .sim-invariants-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        gap: 0.7rem;
        margin-top: 1.15rem;
      }
      .sim-inv-card {
        background: var(--zip-good-bg);
        border: 1px solid var(--zip-good-green);
        border-radius: var(--radius-sm);
        padding: 0.65rem 0.85rem;
        display: flex;
        flex-direction: column;
      }
    `;
    document.head.appendChild(style);
  },

  getActiveSteps() {
    if (!this.rawData || !this.rawData.steps) return [];
    const preset = this.presets[this.activePresetId] || this.presets.preset_full_18;
    return preset.stepIndices.map(i => this.rawData.steps[i]).filter(Boolean);
  },

  setTab(tabName) {
    this.activeTab = tabName;
    this.copyFeedback = '';
    this.render(document.getElementById('mainStage'));
  },

  selectPreset(presetId) {
    this.stopPlayback();
    this.activePresetId = presetId;
    this.currentStepIndex = 0;
    this.copyFeedback = '';
    this.render(document.getElementById('mainStage'));
  },

  togglePlayback() {
    if (this.isPlaying) {
      this.stopPlayback();
    } else {
      this.startPlayback();
    }
  },

  startPlayback() {
    const activeSteps = this.getActiveSteps();
    if (!activeSteps.length) return;
    if (this.currentStepIndex >= activeSteps.length - 1) {
      this.currentStepIndex = 0;
    }
    this.isPlaying = true;
    this.render(document.getElementById('mainStage'));
    const intervalMs = this.playbackSpeed === 2 ? 1750 : 3500;
    this._timerId = setInterval(() => {
      const steps = this.getActiveSteps();
      if (this.currentStepIndex < steps.length - 1) {
        this.currentStepIndex++;
        this.render(document.getElementById('mainStage'));
      } else {
        this.stopPlayback();
      }
    }, intervalMs);
  },

  stopPlayback() {
    this.isPlaying = false;
    if (this._timerId) {
      clearInterval(this._timerId);
      this._timerId = null;
    }
    const stage = document.getElementById('mainStage');
    if (stage && window.App && window.App.currentView === 'simulator') {
      this.render(stage);
    }
  },

  setSpeed(speed) {
    this.playbackSpeed = speed;
    if (this.isPlaying) {
      this.stopPlayback();
      this.startPlayback();
    } else {
      this.render(document.getElementById('mainStage'));
    }
  },

  jumpToStep(idx) {
    const activeSteps = this.getActiveSteps();
    if (idx >= 0 && idx < activeSteps.length) {
      this.currentStepIndex = idx;
      this.copyFeedback = '';
      this.render(document.getElementById('mainStage'));
    }
  },

  nextStep() {
    const activeSteps = this.getActiveSteps();
    if (this.currentStepIndex < activeSteps.length - 1) {
      this.currentStepIndex++;
      this.copyFeedback = '';
      this.render(document.getElementById('mainStage'));
    }
  },

  prevStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.copyFeedback = '';
      this.render(document.getElementById('mainStage'));
    }
  },

  copyActiveBuffer(type) {
    const activeSteps = this.getActiveSteps();
    const step = activeSteps[this.currentStepIndex] || {};
    let text = '';
    if (type === 'cli') {
      text = this.generateCliLogs(step).map(l => `[${l.ts}] [${l.tag}] ${l.msg}`).join('\n');
    } else {
      const d = this.generateDiffData(step);
      text = `${d.legacyTitle}\n${d.legacyLines.join('\n')}\n\n${d.targetTitle}\n${d.targetLines.join('\n')}`;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    this.copyFeedback = type;
    this.render(document.getElementById('mainStage'));
  },

  // Generate realistic Vertex AI / Gemini CLI logs per step
  generateCliLogs(step) {
    const stepNum = step.step || 1;
    const skillId = (step.skill && step.skill.id) ? step.skill.id : 'zero-cent-drift-prover';
    const senderName = (step.sender && step.sender.name) ? step.sender.name : 'Persona Lead';
    const receiverName = (step.receiver && step.receiver.name) ? step.receiver.name : 'Verification Judge';
    const docId = (step.document && step.document.id) ? step.document.id : `ARTIFACT-S${stepNum}.json`;

    return [
      { ts: '09:14:01.104', tag: 'VERTEX-AI', cls: 'cli-tag-vertex', msg: `Initializing Google Cloud Vertex AI session · Model: gemini-1.5-pro-002 (2M context window, temperature=0.0)` },
      { ts: '09:14:01.240', tag: 'MCP-HUB', cls: 'cli-tag-mcp', msg: `Ephemeral Cloud Run sandbox provisioned (sandbox-us-central1-s${stepNum}) · 15m down-scoped OAuth2 token bound` },
      { ts: '09:14:01.512', tag: 'PERSONA', cls: 'cli-tag-vertex', msg: `[${senderName}] ➔ [${receiverName}] Handshake verified under Constitutional Separation of Powers` },
      { ts: '09:14:01.890', tag: 'SKILL-EXEC', cls: 'cli-tag-mcp', msg: `Invoking skill '${skillId}' via Agent Platform Skill Registry (ref: .agents/skills/${skillId}/SKILL.md)` },
      { ts: '09:14:02.310', tag: 'AST-LINT', cls: 'cli-tag-ast', msg: `Scanning AST syntax tree for IEEE-754 float/double types... Result: 0 violations found (100% int64 minor units)` },
      { ts: '09:14:02.645', tag: 'REG-CHECK', cls: 'cli-tag-ast', msg: `Verifying statutory compliance clauses: CFPB Reg Z (12 CFR § 1026.22) & Reg B (12 CFR § 1002)... PASS` },
      { ts: '09:14:03.012', tag: 'ARTIFACT', cls: 'cli-tag-mcp', msg: `Committed signed contract '${docId}' to Cloud SQL PostgreSQL 16 JSONB ledger (SHA-256: 9f8e2a4b...c71d)` },
      { ts: '09:14:03.280', tag: 'INVARIANT', cls: 'cli-tag-pass', msg: `✔ GATE PASSED: Debits == Credits verified · Shadow Ledger Drift = $0.00 across 50,000 accounts · Kill Switch <750ms ARMED` }
    ];
  },

  // Generate Spec vs Implementation Diff per step
  generateDiffData(step) {
    const stepNum = step.step || 1;
    return {
      legacyTitle: `Legacy Azure Monolith C# (Float & Coupled Waterfall) — Step ${stepNum}`,
      targetTitle: `GCP Target Go Microservice (int64 Minor Units & Bitemporal Ledger) — Step ${stepNum}`,
      legacyLines: [
        `// Legacy Azure LMS: RepaymentCalculator.cs`,
        `public class RepaymentWaterfall {`,
        `-   // CRITICAL FLAW: IEEE-754 double causes penny rounding drift`,
        `-   public double CalculateDailyAccrual(double principal, double apr) {`,
        `-       double dailyRate = apr / 365.0;`,
        `-       return Math.Round(principal * dailyRate, 2); // Cumulative drift!`,
        `-   }`,
        `-   public void ApplyPayment(double amount, SqlConnection conn) {`,
        `-       // Direct un-audited SQL mutation without bitemporal trail`,
        `-       ExecuteRawSql("UPDATE Loans SET Balance = Balance - " + amount, conn);`,
        `-   }`,
        `}`
      ],
      targetLines: [
        `// GCP Target LMS: repayment_waterfall.go (Generated by Family C SWE)`,
        `package ledger`,
        `+   // FIXED-POINT MINOR UNITS: Exact int64 cents, zero IEEE-754 floats`,
        `+   type MinorCents int64`,
        `+   // Enforces CFPB Reg Z (12 CFR § 1026) Actual/365 fixed-point accrual`,
        `+   func CalculateDailyAccrualCents(principalCents MinorCents, aprBasisPoints int64) MinorCents {`,
        `+       // Deterministic integer arithmetic with statutory half-even rounding`,
        `+       return (principalCents * aprBasisPoints + 1825000) / 3650000`,
        `+   }`,
        `+   // Enforces statutory hierarchy: 1. Fees ➔ 2. Finance Charges ➔ 3. Principal`,
        `+   func AllocateWaterfall(tx BitemporalTx, payCents MinorCents) (JournalEntry, error) {`,
        `+       return PostDoubleEntryBalanced(tx, payCents) // Proves Debits == Credits ($0.00 drift)`,
        `+   }`
      ]
    };
  },

  render(container) {
    this.initKeyNavigation();
    this.injectStyles();
    if (!this.rawData) {
      container.innerHTML = '<div class="card"><p>Simulator data not loaded.</p></div>';
      return;
    }

    const preset = this.presets[this.activePresetId] || this.presets.preset_full_18;
    const activeSteps = this.getActiveSteps();
    if (this.currentStepIndex >= activeSteps.length) this.currentStepIndex = 0;
    const step = activeSteps[this.currentStepIndex] || {};
    const cliLogs = this.generateCliLogs(step);
    const diffData = this.generateDiffData(step);
    const invariants = step.invariants || [
      { label: "Minor Units (int64)", status: "Enforced", pass: true },
      { label: "Debits == Credits", status: "Balanced", pass: true },
      { label: "Float Count", status: "0 Violations", pass: true },
      { label: "Balance Drift", status: "Verified $0.00", pass: true },
      { label: "Kill Switch", status: "Armed (<750ms)", pass: true }
    ];

    // Dynamic telemetry calculations based on active step
    const stepRatio = (this.currentStepIndex + 1) / activeSteps.length;
    const accountsReconciled = Math.round(50000 * stepRatio).toLocaleString();
    const tokensProcessed = (142500 + (this.currentStepIndex * 38400)).toLocaleString();

    container.innerHTML = `
      <div style="margin-bottom:1.1rem">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.8rem">
          <div>
            <span class="pill pill-fearless" style="margin-bottom:0.4rem">Interactive Execution Simulator · Google Cloud Vertex AI</span>
            <h1 style="margin-bottom:0.25rem">Day in the Life of the Autonomous Factory</h1>
            <p class="lede" style="margin-bottom:0">${preset.subtitle}</p>
          </div>
          <div style="text-align:right">
            <span class="pill pill-good">${preset.targetMetric}</span>
            <div style="font-size:0.75rem;color:var(--zip-text-muted);margin-top:0.3rem;font-family:var(--font-mono)">
              Runtime: ${preset.modelEngine}
            </div>
          </div>
        </div>
      </div>

      <!-- Scenario Preset Selector (3 Distinct Execution Workflows) -->
      <div class="sim-preset-bar">
        ${Object.values(this.presets).map(p => {
          const isActive = p.id === this.activePresetId;
          return `
            <div class="sim-preset-card ${isActive ? 'active' : ''}" onclick="SimulatorView.selectPreset('${p.id}')">
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.35rem">
                  <span class="pill ${isActive ? 'pill-active' : 'pill-fearless'}">${p.badge}</span>
                  <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:var(--zip-medium)">
                    ${p.stepIndices.length} Steps
                  </span>
                </div>
                <h3 style="font-size:0.95rem;margin-bottom:0.3rem;color:var(--zip-text-primary)">${p.title}</h3>
              </div>
              <div style="font-size:0.75rem;color:var(--zip-text-secondary);margin-top:0.4rem">
                ${isActive ? '● Active Scenario Workflow' : 'Click to load preset →'}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Live Telemetry & Cost Attribution Ribbon -->
      <div class="sim-telemetry-ribbon">
        <div class="sim-telemetry-tile">
          <span class="sim-telemetry-label">Vertex AI Context Tokens</span>
          <span class="sim-telemetry-val">${tokensProcessed} tok</span>
        </div>
        <div class="sim-telemetry-tile">
          <span class="sim-telemetry-label">Context Cache Efficiency</span>
          <span class="sim-telemetry-val" style="color:var(--zip-good-text)">94.2% Hit Rate</span>
        </div>
        <div class="sim-telemetry-tile">
          <span class="sim-telemetry-label">Accounts Reconciled</span>
          <span class="sim-telemetry-val">${accountsReconciled} / 50,000</span>
        </div>
        <div class="sim-telemetry-tile">
          <span class="sim-telemetry-label">Cumulative Ledger Drift</span>
          <span class="sim-telemetry-val" style="color:var(--zip-good-text)">$0.00 (Zero Cent)</span>
        </div>
        <div class="sim-telemetry-tile">
          <span class="sim-telemetry-label">Kill Switch Latency SLA</span>
          <span class="sim-telemetry-val" style="color:var(--zip-medium)">&lt; 750ms Armed</span>
        </div>
      </div>

      <!-- Playback Control Bar -->
      <div class="sim-playback-bar">
        <div style="display:flex;align-items:center;gap:0.5rem">
          <button class="btn ${this.isPlaying ? 'btn-primary' : ''}" onclick="SimulatorView.togglePlayback()">
            ${this.isPlaying ? '⏸ Pause Auto-Advance (Space)' : '▶ Play Auto-Advance (Space)'}
          </button>
          <button class="btn" onclick="SimulatorView.prevStep()" ${this.currentStepIndex === 0 ? 'disabled' : ''}>
            ⏮ Step Back (←)
          </button>
          <button class="btn" onclick="SimulatorView.nextStep()" ${this.currentStepIndex === activeSteps.length - 1 ? 'disabled' : ''}>
            Step Forward (→) ⏭
          </button>
        </div>

        <div style="display:flex;align-items:center;gap:0.65rem">
          <span style="font-size:0.78rem;font-weight:700;color:var(--zip-text-muted)">Playback Speed:</span>
          <button class="btn ${this.playbackSpeed === 1 ? 'btn-primary' : ''}" onclick="SimulatorView.setSpeed(1)" style="padding:0.3rem 0.65rem">
            1x Normal
          </button>
          <button class="btn ${this.playbackSpeed === 2 ? 'btn-primary' : ''}" onclick="SimulatorView.setSpeed(2)" style="padding:0.3rem 0.65rem">
            2x Fast
          </button>
        </div>

        <div style="font-family:var(--font-mono);font-size:0.8rem;font-weight:700;color:var(--zip-confidence)">
          Step ${this.currentStepIndex + 1} of ${activeSteps.length} (Factory Step #${step.step || (this.currentStepIndex + 1)})
        </div>
      </div>

      <!-- Interactive Timeline Strip (Direct Click-to-Jump) -->
      <div class="sim-timeline-strip">
        ${activeSteps.map((s, idx) => {
          const isCurrent = idx === this.currentStepIndex;
          const isDone = idx < this.currentStepIndex;
          return `
            <div class="sim-step-node ${isCurrent ? 'active' : (isDone ? 'completed' : '')}"
                 onclick="SimulatorView.jumpToStep(${idx})"
                 title="Step ${idx + 1}: ${s.title} (Phase ${s.phase}: ${s.phaseName})">
              <span>S${s.step}</span>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Active Step Tabbed Inspector Card -->
      <div class="sim-inspector-card">
        <div class="sim-inspector-header">
          <div>
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.35rem">
              <span class="pill pill-fearless">Phase ${step.phase}: ${step.phaseName}</span>
              <span class="pill pill-active">${step.subphaseName || step.subphase || 'Execution'}</span>
              <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--zip-text-muted)">
                Signal: ${(step.signal && step.signal.type) ? step.signal.type : 'HANDOFF_SIGNAL'}
              </span>
            </div>
            <h2 style="margin:0;font-size:1.35rem">${step.title || 'Step Execution'}</h2>
          </div>
          <div style="display:flex;align-items:center;gap:0.6rem">
            <span class="pill pill-good">✔ Invariants Verified ($0.00 Drift)</span>
          </div>
        </div>

        <!-- 3-Tab Switcher -->
        <div class="sim-tab-bar">
          <button class="sim-tab-btn ${this.activeTab === 'narrative' ? 'active' : ''}" onclick="SimulatorView.setTab('narrative')">
            📋 Tab 1: Step Execution Narrative &amp; Gate Checks
          </button>
          <button class="sim-tab-btn ${this.activeTab === 'terminal' ? 'active' : ''}" onclick="SimulatorView.setTab('terminal')">
            💻 Tab 2: Simulated Agent CLI &amp; AST Verification Log
          </button>
          <button class="sim-tab-btn ${this.activeTab === 'diff' ? 'active' : ''}" onclick="SimulatorView.setTab('diff')">
            🔍 Tab 3: Spec vs Implementation Diff (C# vs Go int64)
          </button>
        </div>

        <!-- Tab Content Body -->
        <div class="sim-tab-body">
          ${this.activeTab === 'narrative' ? `
            <!-- TAB 1: Narrative, Persona Handoff & Invariant Gate Checks -->
            <div class="sim-persona-grid">
              <div class="card" style="margin:0;background:var(--zip-card-elevated)">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.4rem">
                  <span style="font-size:0.72rem;font-weight:800;text-transform:uppercase;color:var(--zip-medium)">Sender Persona</span>
                  <span class="pill pill-fearless" style="font-size:0.65rem">${(step.sender && step.sender.rung) || 'L2 Supervised'}</span>
                </div>
                <div style="display:flex;align-items:center;gap:0.65rem">
                  <span style="font-size:1.6rem">${(step.sender && step.sender.avatar) || '🤖'}</span>
                  <div>
                    <h4 style="margin:0;font-size:0.95rem">${(step.sender && step.sender.name) || 'Sender Lead'}</h4>
                    <div style="font-size:0.78rem;color:var(--zip-text-muted)">${(step.sender && step.sender.family) || ''} · ${(step.sender && step.sender.role) || ''}</div>
                  </div>
                </div>
              </div>

              <div class="card" style="margin:0;background:var(--zip-card-elevated)">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.4rem">
                  <span style="font-size:0.72rem;font-weight:800;text-transform:uppercase;color:var(--zip-medium)">Receiver Persona</span>
                  <span class="pill pill-fearless" style="font-size:0.65rem">${(step.receiver && step.receiver.rung) || 'L4 Autonomous'}</span>
                </div>
                <div style="display:flex;align-items:center;gap:0.65rem">
                  <span style="font-size:1.6rem">${(step.receiver && step.receiver.avatar) || '🛡️'}</span>
                  <div>
                    <h4 style="margin:0;font-size:0.95rem">${(step.receiver && step.receiver.name) || 'Receiver Judge'}</h4>
                    <div style="font-size:0.78rem;color:var(--zip-text-muted)">${(step.receiver && step.receiver.family) || ''} · ${(step.receiver && step.receiver.role) || ''}</div>
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-bottom:1.15rem">
              <h4 style="font-size:0.82rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--zip-text-muted);margin-bottom:0.6rem">
                Constitutional Multi-Agent Dialogue &amp; Handoff Transcript
              </h4>
              ${(step.dialogue || []).map(d => `
                <div class="sim-dialogue-bubble">
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.3rem">
                    <strong style="font-size:0.84rem;color:var(--zip-confidence)">${d.speaker} <span style="font-weight:500;color:var(--zip-text-muted)">(${d.role})</span></strong>
                    <span style="font-family:var(--font-mono);font-size:0.72rem;color:var(--zip-text-muted)">${d.time || '09:14:02'}</span>
                  </div>
                  <p style="margin:0;font-size:0.88rem;color:var(--zip-text-primary)">${d.text}</p>
                </div>
              `).join('')}
            </div>

            <!-- 5 Live Gate Invariant Cards -->
            <div>
              <h4 style="font-size:0.82rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--zip-text-muted);margin-bottom:0.4rem">
                Non-Negotiable Constitutional Gate Invariants
              </h4>
              <div class="sim-invariants-row">
                ${invariants.map(inv => `
                  <div class="sim-inv-card">
                    <span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;color:var(--zip-good-text)">✔ ${inv.label}</span>
                    <strong style="font-family:var(--font-mono);font-size:0.85rem;color:var(--zip-confidence);margin-top:0.2rem">${inv.status}</strong>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${this.activeTab === 'terminal' ? `
            <!-- TAB 2: Simulated Agent CLI & AST Verification Log -->
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.65rem">
              <span style="font-size:0.8rem;font-weight:700;color:var(--zip-text-secondary)">
                Google Cloud Vertex AI Agent Platform Sandbox · Ephemeral Execution Trace
              </span>
              <button class="btn" onclick="SimulatorView.copyActiveBuffer('cli')" style="padding:0.25rem 0.65rem;font-size:0.75rem">
                ${this.copyFeedback === 'cli' ? '✓ Copied CLI Log!' : '📋 Copy CLI Trace'}
              </button>
            </div>
            <div class="sim-terminal-box">
              <div class="sim-terminal-topbar">
                <div class="sim-terminal-dots">
                  <span class="sim-terminal-dot" style="background:#EF4444"></span>
                  <span class="sim-terminal-dot" style="background:#F59E0B"></span>
                  <span class="sim-terminal-dot" style="background:#10B981"></span>
                </div>
                <span>google-cloud-vertex-ai-agent-sandbox — node22-mcp-hub — bash (80x24)</span>
                <span style="color:#6EE7B7;font-weight:700">● LIVE STREAM</span>
              </div>
              <div class="sim-terminal-content">
                ${cliLogs.map(log => `
                  <div class="cli-line">
                    <span class="cli-ts">[${log.ts}]</span>
                    <span class="${log.cls}">[${log.tag}]</span>
                    <span>${log.msg}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${this.activeTab === 'diff' ? `
            <!-- TAB 3: Spec vs Implementation Diff (Legacy C# vs GCP Target Go) -->
            <div style="margin-bottom:0.85rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem">
              <span style="font-size:0.84rem;font-weight:700;color:var(--zip-text-primary)">
                AST Spec Conformance Verification: Eliminating IEEE-754 Float Drift &amp; Enforcing Statutory Waterfall
              </span>
              <div style="display:flex;align-items:center;gap:0.5rem">
                <span class="pill pill-good">AST Conformance Score: 100.0%</span>
                <button class="btn" onclick="SimulatorView.copyActiveBuffer('diff')" style="padding:0.25rem 0.65rem;font-size:0.75rem">
                  ${this.copyFeedback === 'diff' ? '✓ Copied Diff!' : '📋 Copy Diff'}
                </button>
              </div>
            </div>
            <div class="sim-diff-grid">
              <div class="sim-diff-pane">
                <div class="sim-diff-header legacy-hdr">
                  <span>✕ ${diffData.legacyTitle}</span>
                  <span>LEGACY AZURE</span>
                </div>
                <div class="sim-diff-code">${diffData.legacyLines.map(line => {
                  if (line.startsWith('-')) return `<span class="diff-del">${line}</span>`;
                  return `<span>${line}\n</span>`;
                }).join('')}</div>
              </div>

              <div class="sim-diff-pane">
                <div class="sim-diff-header target-hdr">
                  <span>✔ ${diffData.targetTitle}</span>
                  <span>GCP SOVEREIGN TARGET</span>
                </div>
                <div class="sim-diff-code">${diffData.targetLines.map(line => {
                  if (line.startsWith('+')) return `<span class="diff-add">${line}</span>`;
                  return `<span>${line}\n</span>`;
                }).join('')}</div>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }
};
