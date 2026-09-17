/**
 * Zip Agentic Factory — Project Plan & 18-Month Program Roadmap View
 * Official 2024 Zip Brand Guidelines (v2.0) · WCAG 2.1 Level AAA Compliant
 */
window.PlanningView = {
  activeTab: 'scenarios',
  weekFilter: 'all',

  render(subtab) {
    if (subtab && ['scenarios', 'sow', 'raci', 'weekbyweek', 'roadmap'].includes(subtab)) {
      this.activeTab = subtab;
    }
    const stage = document.getElementById('mainStage');
    if (!stage) return;

    const data = window.PLANNING_DATA;
    if (!data) {
      stage.innerHTML = `<div class="card"><p>Planning data not loaded.</p></div>`;
      return;
    }

    stage.innerHTML = `
      <div class="planning-container" style="display:flex;flex-direction:column;gap:1.5rem;padding-bottom:2.5rem">
        
        <!-- Executive Header Banner -->
        <div class="card" style="background:linear-gradient(135deg, var(--zip-confidence) 0%, #2F1563 100%);color:#FFFFFA;border:none;padding:1.75rem;border-radius:14px;box-shadow:0 12px 32px rgba(26,8,38,0.16)">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1.25rem">
            <div style="max-width:720px">
              <div style="display:flex;align-items:center;gap:0.65rem;margin-bottom:0.65rem">
                <span class="zip-slant-badge" style="background:#AA8FFF;color:#1A0826;font-weight:800;font-size:0.75rem;padding:0.25rem 0.65rem">PROJECT CATALYST</span>
                <span style="font-size:0.78rem;font-weight:700;color:#EDE6FF;letter-spacing:0.05em;text-transform:uppercase">Scoping · Delivery SoW · RACI · 18-Month Roadmap</span>
              </div>
              <h1 style="font-size:1.85rem;font-weight:800;color:#FFFFFA;margin:0 0 0.5rem 0;letter-spacing:-0.02em">
                Program Delivery Plan &amp; <span style="color:#AA8FFF">Execution Roadmap</span>
              </h1>
              <p style="font-size:0.95rem;color:#EDE6FF;line-height:1.55;margin:0">
                ${data.meta.subtitle}
              </p>
            </div>

            <!-- Key Program KPIs -->
            <div style="display:grid;grid-template-columns:repeat(2, minmax(130px, 1fr));gap:0.75rem">
              <div style="background:rgba(255,255,250,0.08);border:1px solid rgba(170,143,255,0.35);padding:0.75rem 1rem;border-radius:10px;text-align:center">
                <div style="font-size:1.35rem;font-weight:800;color:#AA8FFF;font-family:var(--font-mono)">12 Weeks</div>
                <div style="font-size:0.75rem;color:#EDE6FF;font-weight:600">Recommended Build</div>
              </div>
              <div style="background:rgba(255,255,250,0.08);border:1px solid rgba(170,143,255,0.35);padding:0.75rem 1rem;border-radius:10px;text-align:center">
                <div style="font-size:1.35rem;font-weight:800;color:#FFFFFA;font-family:var(--font-mono)">61.0 PW</div>
                <div style="font-size:0.75rem;color:#EDE6FF;font-weight:600">Total Scoped Effort</div>
              </div>
              <div style="background:rgba(255,255,250,0.08);border:1px solid rgba(170,143,255,0.35);padding:0.75rem 1rem;border-radius:10px;text-align:center">
                <div style="font-size:1.35rem;font-weight:800;color:#AA8FFF;font-family:var(--font-mono)">1x FDE</div>
                <div style="font-size:0.75rem;color:#EDE6FF;font-weight:600">+ Quantium Co-Delivery</div>
              </div>
              <div style="background:rgba(255,255,250,0.08);border:1px solid rgba(170,143,255,0.35);padding:0.75rem 1rem;border-radius:10px;text-align:center">
                <div style="font-size:1.35rem;font-weight:800;color:#86EFAC;font-family:var(--font-mono)">$0.00</div>
                <div style="font-size:0.75rem;color:#EDE6FF;font-weight:600">Ledger Drift Target</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sub-Navigation Tabs -->
        <div role="tablist" aria-label="Project Plan Subviews" style="display:flex;gap:0.5rem;flex-wrap:wrap;background:var(--zip-lightest);padding:0.5rem;border-radius:12px;border:1px solid var(--zip-lighter)">
          <button type="button" role="tab" aria-selected="${this.activeTab === 'scenarios'}" class="btn ${this.activeTab === 'scenarios' ? 'btn-primary' : ''}" onclick="PlanningView.switchTab('scenarios')">
            📊 8–12W Scoping &amp; 3 Scenarios
          </button>
          <button type="button" role="tab" aria-selected="${this.activeTab === 'sow'}" class="btn ${this.activeTab === 'sow' ? 'btn-primary' : ''}" onclick="PlanningView.switchTab('sow')">
            📋 SoW &amp; Definition of Done (DoD)
          </button>
          <button type="button" role="tab" aria-selected="${this.activeTab === 'raci'}" class="btn ${this.activeTab === 'raci' ? 'btn-primary' : ''}" onclick="PlanningView.switchTab('raci')">
            👥 RACI &amp; Handover Ladder
          </button>
          <button type="button" role="tab" aria-selected="${this.activeTab === 'weekbyweek'}" class="btn ${this.activeTab === 'weekbyweek' ? 'btn-primary' : ''}" onclick="PlanningView.switchTab('weekbyweek')">
            🗓️ 12-Week Phased Plan
          </button>
          <button type="button" role="tab" aria-selected="${this.activeTab === 'roadmap'}" class="btn ${this.activeTab === 'roadmap' ? 'btn-primary' : ''}" onclick="PlanningView.switchTab('roadmap')">
            🗺️ 18-Month Program Roadmap
          </button>
        </div>

        <!-- Active Subview Content -->
        <div id="planningSubviewContent">
          ${this.renderActiveSubview(data)}
        </div>

      </div>
    `;
  },

  switchTab(tabName) {
    this.activeTab = tabName;
    this.render();
    if (window.showZipToast) {
      const labels = {
        scenarios: 'Scoping & 3 Delivery Scenarios',
        sow: 'Statement of Work & Verifiable DoD Gates',
        raci: 'RACI Matrix & Progressive Ownership Ladder',
        weekbyweek: '12-Week Execution Plan (Weeks 1–12)',
        roadmap: '18-Month Enterprise Program Roadmap'
      };
      window.showZipToast(`Viewing: ${labels[tabName] || tabName}`, 'info');
    }
  },

  setWeekFilter(filterVal) {
    this.weekFilter = filterVal;
    const contentEl = document.getElementById('planningSubviewContent');
    if (contentEl && window.PLANNING_DATA) {
      contentEl.innerHTML = this.renderActiveSubview(window.PLANNING_DATA);
    }
  },

  inspectDodGate(gateId) {
    const data = window.PLANNING_DATA;
    const gate = data.dodGates.find(g => g.id === gateId);
    if (gate && window.ArtifactDrawer) {
      window.ArtifactDrawer.open({
        id: gate.id,
        name: `${gate.id}: ${gate.milestone}`,
        category: 'Verifiable Definition of Done Gate',
        description: gate.requirement,
        proofMechanism: gate.proof,
        signOffAuthority: gate.authority,
        status: 'Machine-Verifiable Contract Gate'
      });
    }
  },

  renderActiveSubview(data) {
    switch (this.activeTab) {
      case 'scenarios':
        return this.renderScenariosTab(data);
      case 'sow':
        return this.renderSowTab(data);
      case 'raci':
        return this.renderRaciTab(data);
      case 'weekbyweek':
        return this.renderWeekByWeekTab(data);
      case 'roadmap':
        return this.renderRoadmapTab(data);
      default:
        return this.renderScenariosTab(data);
    }
  },

  renderScenariosTab(data) {
    const v = data.verdict;
    return `
      <div style="display:flex;flex-direction:column;gap:1.5rem">
        
        <!-- Executive Verdict Callout -->
        <div class="card" style="border-left:5px solid #44268C;background:var(--zip-lightest)">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem">
            <span class="badge" style="background:#2F1563;color:#FFFFFA;font-weight:700">${v.badge}</span>
            <span class="badge" style="background:#065F46;color:#FFFFFA;font-weight:700">✓ ${v.status}</span>
          </div>
          <h2 style="font-size:1.35rem;font-weight:800;color:var(--zip-confidence);margin:0 0 0.5rem 0">${v.headline}</h2>
          <p style="font-size:0.95rem;color:var(--zip-text-secondary);line-height:1.6;margin:0 0 1rem 0">
            ${v.summary}
          </p>
          <div style="background:#FFFFFA;padding:1rem;border-radius:10px;border:1px solid var(--zip-lighter);font-size:0.88rem;color:var(--zip-confidence)">
            <strong style="color:#44268C">⚡ The Critical Dividing Line:</strong> ${v.dividingLine}
          </div>
        </div>

        <!-- 3 Scenarios Grid -->
        <div>
          <h3 style="font-size:1.2rem;font-weight:800;color:var(--zip-confidence);margin:0 0 1rem 0">Three Delivery Scenarios Evaluated</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem">
            ${data.scenarios.map(s => {
              const borderStyle = s.recommended
                ? 'border:2.5px solid #44268C;box-shadow:0 10px 26px rgba(68,38,140,0.14)'
                : s.riskLevel === 'high'
                ? 'border:1.5px solid #9F1239'
                : 'border:1.5px solid #92400E';
              const badgeBg = s.recommended
                ? 'background:#065F46;color:#FFFFFA'
                : s.riskLevel === 'high'
                ? 'background:#881337;color:#FFFFFA'
                : 'background:#78350F;color:#FFFFFA';
              return `
                <div class="card" style="${borderStyle};display:flex;flex-direction:column;justify-content:space-between;gap:1rem;position:relative">
                  <div>
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.75rem">
                      <span class="badge" style="background:var(--zip-confidence);color:#FFFFFA;font-weight:800">${s.number}</span>
                      <span class="badge" style="${badgeBg};font-weight:700">${s.riskBadge}</span>
                    </div>
                    <h4 style="font-size:1.2rem;font-weight:800;color:var(--zip-confidence);margin:0 0 0.25rem 0">${s.title}</h4>
                    <div style="font-size:0.84rem;font-weight:700;color:#44268C;margin-bottom:0.65rem">"${s.tagline}"</div>
                    <p style="font-size:0.88rem;color:var(--zip-text-secondary);line-height:1.5;margin:0 0 1rem 0">${s.description}</p>
                    
                    <div style="background:var(--zip-lightest);padding:0.85rem;border-radius:8px;border:1px solid var(--zip-lighter);font-size:0.82rem;display:flex;flex-direction:column;gap:0.35rem">
                      <div><strong style="color:var(--zip-confidence)">Google FDE:</strong> ${s.metrics.googleFde}</div>
                      <div><strong style="color:var(--zip-confidence)">Zip Team:</strong> ${s.metrics.zipTeam}</div>
                      <div><strong style="color:var(--zip-confidence)">Partner (Quantium):</strong> ${s.metrics.partner}</div>
                      <div><strong style="color:var(--zip-confidence)">Pilot Scope:</strong> ${s.metrics.pilotScope}</div>
                      <div><strong style="color:var(--zip-confidence)">Handover:</strong> ${s.metrics.handover}</div>
                    </div>
                  </div>

                  <div style="padding-top:0.75rem;border-top:1px solid var(--zip-lighter);font-size:0.82rem;color:var(--zip-text-secondary);line-height:1.45">
                    <strong style="color:var(--zip-confidence)"> Strategic Outcome:</strong> ${s.tradeoff}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Detailed Scenario Comparison Matrix Table -->
        <div class="card">
          <h3 style="font-size:1.15rem;font-weight:800;color:var(--zip-confidence);margin:0 0 1rem 0">Detailed Scenario Comparison Matrix</h3>
          <div style="overflow-x:auto">
            <table style="width:100%;border-collapse:collapse;font-size:0.86rem">
              <thead>
                <tr style="background:var(--zip-confidence);color:#FFFFFA;text-align:left">
                  <th style="padding:0.75rem 1rem;border-radius:8px 0 0 0">Evaluation Dimension</th>
                  <th style="padding:0.75rem 1rem">Scenario 1 (8 Weeks)</th>
                  <th style="padding:0.75rem 1rem">Scenario 2 (10 Weeks)</th>
                  <th style="padding:0.75rem 1rem;background:#2F1563;color:#AA8FFF;border-radius:0 8px 0 0">Scenario 3 (12 Weeks · Recommended)</th>
                </tr>
              </thead>
              <tbody>
                ${data.comparisonMatrix.map((row, idx) => `
                  <tr style="border-bottom:1px solid var(--zip-lighter);background:${idx % 2 === 0 ? '#FFFFFA' : 'var(--zip-lightest)'}">
                    <td style="padding:0.7rem 1rem;font-weight:700;color:var(--zip-confidence)">${row.dimension}</td>
                    <td style="padding:0.7rem 1rem;color:var(--zip-text-secondary)">${row.s1}</td>
                    <td style="padding:0.7rem 1rem;color:var(--zip-text-secondary)">${row.s2}</td>
                    <td style="padding:0.7rem 1rem;font-weight:700;color:#2F1563;background:rgba(170,143,255,0.12)">${row.s3}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- WBS & Capacity Plan -->
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem">
            <h3 style="font-size:1.15rem;font-weight:800;color:var(--zip-confidence);margin:0">Work Breakdown Structure (WBS) &amp; Capacity Plan (Scenario 3: 12 Weeks)</h3>
            <span class="badge" style="background:#2F1563;color:#FFFFFA;font-family:var(--font-mono)">Total: 48.5 Core PW + CISO Governance = 61 PW Program</span>
          </div>
          <div style="overflow-x:auto">
            <table style="width:100%;border-collapse:collapse;font-size:0.86rem">
              <thead>
                <tr style="background:var(--zip-lightest);color:var(--zip-confidence);border-bottom:2px solid var(--zip-confidence);text-align:left">
                  <th style="padding:0.75rem 1rem">Workstream</th>
                  <th style="padding:0.75rem 1rem">Google FDE</th>
                  <th style="padding:0.75rem 1rem">Zip Arch</th>
                  <th style="padding:0.75rem 1rem">Partner (Quantium)</th>
                  <th style="padding:0.75rem 1rem">Zip SWEs</th>
                  <th style="padding:0.75rem 1rem">Core Milestone Deliverable</th>
                </tr>
              </thead>
              <tbody>
                ${data.wbs.map(w => `
                  <tr style="border-bottom:1px solid var(--zip-lighter)">
                    <td style="padding:0.7rem 1rem;font-weight:700;color:var(--zip-confidence)">${w.workstream}</td>
                    <td style="padding:0.7rem 1rem;font-family:var(--font-mono);font-weight:700;color:#44268C">${w.fde}</td>
                    <td style="padding:0.7rem 1rem;font-family:var(--font-mono)">${w.arch}</td>
                    <td style="padding:0.7rem 1rem;font-family:var(--font-mono)">${w.partner}</td>
                    <td style="padding:0.7rem 1rem;font-family:var(--font-mono)">${w.swe}</td>
                    <td style="padding:0.7rem 1rem;color:var(--zip-text-secondary)">${w.deliverable}</td>
                  </tr>
                `).join('')}
                <tr style="background:var(--zip-confidence);color:#FFFFFA;font-weight:800">
                  <td style="padding:0.8rem 1rem">Total Effort (Person-Weeks)</td>
                  <td style="padding:0.8rem 1rem;color:#AA8FFF;font-family:var(--font-mono)">12.0 PW</td>
                  <td style="padding:0.8rem 1rem;font-family:var(--font-mono)">4.5 PW</td>
                  <td style="padding:0.8rem 1rem;font-family:var(--font-mono)">14.0 PW</td>
                  <td style="padding:0.8rem 1rem;font-family:var(--font-mono)">18.0 PW</td>
                  <td style="padding:0.8rem 1rem;color:#AA8FFF">Fully operational sovereign factory delivered &amp; transferred</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;
  },

  renderSowTab(data) {
    return `
      <div style="display:flex;flex-direction:column;gap:1.5rem">
        
        <!-- SoW In-Scope vs Out-of-Scope -->
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem">
            <div>
              <span class="badge" style="background:#2F1563;color:#FFFFFA;margin-bottom:0.35rem">CONTRACT BOUNDARIES</span>
              <h2 style="font-size:1.35rem;font-weight:800;color:var(--zip-confidence);margin:0">Statement of Work (SoW) — Engagement Boundaries</h2>
            </div>
            <span class="badge" style="background:#065F46;color:#FFFFFA">1x GOOGLE FDE ENGAGEMENT SCOPE</span>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));gap:1.25rem">
            
            <!-- In Scope -->
            <div style="background:var(--zip-lightest);padding:1.25rem;border-radius:10px;border:2px solid #065F46">
              <h3 style="font-size:1.05rem;font-weight:800;color:#065F46;margin:0 0 0.85rem 0;display:flex;align-items:center;gap:0.5rem">
                <span>✅ IN-SCOPE (Google FDE Delivers in Weeks 1–12)</span>
              </h3>
              <ul style="margin:0;padding-left:1.2rem;display:flex;flex-direction:column;gap:0.65rem;font-size:0.88rem;color:var(--zip-text-secondary);line-height:1.5">
                ${data.sow.inScope.map(item => `
                  <li><strong style="color:var(--zip-confidence)">${item.title}:</strong> ${item.detail}</li>
                `).join('')}
              </ul>
            </div>

            <!-- Out of Scope -->
            <div style="background:var(--zip-lightest);padding:1.25rem;border-radius:10px;border:2px solid #881337">
              <h3 style="font-size:1.05rem;font-weight:800;color:#881337;margin:0 0 0.85rem 0;display:flex;align-items:center;gap:0.5rem">
                <span>🚫 OUT-OF-SCOPE (Governed by Quantium &amp; Zip in Stages 3–4)</span>
              </h3>
              <ul style="margin:0;padding-left:1.2rem;display:flex;flex-direction:column;gap:0.65rem;font-size:0.88rem;color:var(--zip-text-secondary);line-height:1.5">
                ${data.sow.outOfScope.map(item => `
                  <li><strong style="color:var(--zip-confidence)">${item.title}:</strong> ${item.detail}</li>
                `).join('')}
              </ul>
            </div>

          </div>
        </div>

        <!-- Pilot Dry Run Target Rationale -->
        <div class="card" style="background:linear-gradient(135deg, #FFFFFA 0%, var(--zip-lightest) 100%);border:2px solid #44268C">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem">
            <span class="badge" style="background:#44268C;color:#FFFFFA">PILOT DRY RUN TARGET</span>
            <span class="badge" style="background:var(--zip-confidence);color:#AA8FFF">HIGH-STAKES FINANCIAL PROOF</span>
          </div>
          <h3 style="font-size:1.25rem;font-weight:800;color:var(--zip-confidence);margin:0 0 0.4rem 0">
            Pilot Dry Run Module: Repayments &amp; Loan Amortization Engine
          </h3>
          <p style="font-size:0.9rem;color:var(--zip-text-secondary);margin:0 0 1rem 0">
            Why the Repayments Engine is selected as the optimal proving ground before scaling across all 5 LMS domains:
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem">
            ${data.sow.pilotRationale.map(r => `
              <div style="background:#FFFFFA;padding:1rem;border-radius:8px;border:1px solid var(--zip-lighter)">
                <div style="font-weight:800;color:#44268C;font-size:0.9rem;margin-bottom:0.35rem">${r.title}</div>
                <div style="font-size:0.84rem;color:var(--zip-text-secondary);line-height:1.45">${r.detail}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Verifiable Definition of Done (DoD) Table -->
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem">
            <div>
              <h3 style="font-size:1.2rem;font-weight:800;color:var(--zip-confidence);margin:0">Verifiable Definition of Done (DoD) Checklist</h3>
              <p style="font-size:0.84rem;color:var(--zip-text-secondary);margin:0.2rem 0 0 0">Click any DoD Gate row to inspect its machine-verifiable proof contract in the right-hand Artifact Drawer.</p>
            </div>
            <span class="badge" style="background:#065F46;color:#FFFFFA">8 MACHINE-VERIFIABLE GATES</span>
          </div>

          <div style="overflow-x:auto">
            <table style="width:100%;border-collapse:collapse;font-size:0.86rem">
              <thead>
                <tr style="background:var(--zip-confidence);color:#FFFFFA;text-align:left">
                  <th style="padding:0.75rem 1rem">Gate ID</th>
                  <th style="padding:0.75rem 1rem">Milestone</th>
                  <th style="padding:0.75rem 1rem">Verifiable Requirement</th>
                  <th style="padding:0.75rem 1rem">Proof Mechanism &amp; Artifact</th>
                  <th style="padding:0.75rem 1rem">Sign-Off Authority</th>
                </tr>
              </thead>
              <tbody>
                ${data.dodGates.map((g, idx) => `
                  <tr onclick="PlanningView.inspectDodGate('${g.id}')" style="cursor:pointer;border-bottom:1px solid var(--zip-lighter);background:${idx % 2 === 0 ? '#FFFFFA' : 'var(--zip-lightest)'};transition:background 150ms ease" onmouseover="this.style.background='rgba(170,143,255,0.18)'" onmouseout="this.style.background='${idx % 2 === 0 ? '#FFFFFA' : 'var(--zip-lightest)'}'">
                    <td style="padding:0.75rem 1rem;font-family:var(--font-mono);font-weight:800;color:#44268C">${g.id} 🔍</td>
                    <td style="padding:0.75rem 1rem"><span class="badge" style="background:#2F1563;color:#FFFFFA;font-size:0.75rem">${g.milestone}</span></td>
                    <td style="padding:0.75rem 1rem;font-weight:600;color:var(--zip-confidence)">${g.requirement}</td>
                    <td style="padding:0.75rem 1rem;color:var(--zip-text-secondary)">${g.proof}</td>
                    <td style="padding:0.75rem 1rem;font-weight:700;color:#065F46">${g.authority}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;
  },

  renderRaciTab(data) {
    return `
      <div style="display:flex;flex-direction:column;gap:1.5rem">
        
        <!-- 4-Stage Progressive Ownership Ladder -->
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem">
            <span class="badge" style="background:#2F1563;color:#FFFFFA">COLLABORATION FRAMEWORK</span>
            <span class="badge" style="background:#065F46;color:#FFFFFA">ANTI-LOCK-IN HANDOVER</span>
          </div>
          <h2 style="font-size:1.35rem;font-weight:800;color:var(--zip-confidence);margin:0 0 0.4rem 0">
            The 4-Stage Progressive Ownership Ladder
          </h2>
          <p style="font-size:0.92rem;color:var(--zip-text-secondary);line-height:1.55;margin:0 0 1.25rem 0">
            Handover is not a post-project documentation dump at Week 12. It is an embedded progressive transfer starting at Week 5, ensuring Quantium and Zip engineers are driving the factory unassisted before the Google FDE departs:
          </p>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem">
            ${data.handoverLadder.map((st, i) => `
              <div style="background:var(--zip-lightest);border:2px solid ${i >= 2 ? '#065F46' : '#44268C'};border-radius:10px;padding:1.1rem;display:flex;flex-direction:column;justify-content:space-between;gap:0.85rem">
                <div>
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
                    <span class="badge" style="background:var(--zip-confidence);color:#FFFFFA;font-weight:800">${st.stage}</span>
                    <span style="font-size:0.78rem;font-weight:800;color:#44268C;font-family:var(--font-mono)">${st.weeks}</span>
                  </div>
                  <h4 style="font-size:1.05rem;font-weight:800;color:var(--zip-confidence);margin:0 0 0.4rem 0">${st.title}</h4>
                  <p style="font-size:0.84rem;color:var(--zip-text-secondary);line-height:1.45;margin:0">${st.desc}</p>
                </div>

                <!-- Ownership Progress Bar -->
                <div style="background:#FFFFFA;padding:0.65rem;border-radius:8px;border:1px solid var(--zip-lighter)">
                  <div style="display:flex;justify-content:space-between;font-size:0.75rem;font-weight:700;margin-bottom:0.3rem">
                    <span style="color:#44268C">Google FDE: ${st.fdePct}%</span>
                    <span style="color:#065F46">Zip/Quantium: ${st.zipPct}%</span>
                  </div>
                  <div style="height:8px;background:#EDE6FF;border-radius:4px;overflow:hidden;display:flex">
                    <div style="width:${st.fdePct}%;background:#44268C"></div>
                    <div style="width:${st.zipPct}%;background:#065F46"></div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Cross-Functional RACI Matrix Table -->
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem">
            <h3 style="font-size:1.2rem;font-weight:800;color:var(--zip-confidence);margin:0">Cross-Functional RACI Governance Matrix</h3>
            <span class="badge" style="background:#2F1563;color:#FFFFFA">6 ROLES ACROSS 8 WORKSTREAMS</span>
          </div>

          <div style="overflow-x:auto">
            <table style="width:100%;border-collapse:collapse;font-size:0.86rem">
              <thead>
                <tr style="background:var(--zip-confidence);color:#FFFFFA;text-align:left">
                  <th style="padding:0.75rem 1rem">Workstream</th>
                  <th style="padding:0.75rem 1rem;text-align:center">Google FDE</th>
                  <th style="padding:0.75rem 1rem;text-align:center">Zip Factory Arch</th>
                  <th style="padding:0.75rem 1rem;text-align:center">Zip Arch Team</th>
                  <th style="padding:0.75rem 1rem;text-align:center">Partner (Quantium)</th>
                  <th style="padding:0.75rem 1rem;text-align:center">Zip Senior SWEs (14)</th>
                  <th style="padding:0.75rem 1rem;text-align:center">Execs (Nelms/Blassberg)</th>
                </tr>
              </thead>
              <tbody>
                ${data.raciMatrix.map((row, idx) => {
                  const styleRole = (r) => {
                    if (r === 'R') return 'background:#065F46;color:#FFFFFA;font-weight:800;padding:0.2rem 0.55rem;border-radius:6px;display:inline-block';
                    if (r === 'A') return 'background:#44268C;color:#FFFFFA;font-weight:800;padding:0.2rem 0.55rem;border-radius:6px;display:inline-block';
                    if (r === 'C') return 'background:#EDE6FF;color:#1A0826;font-weight:700;padding:0.2rem 0.55rem;border-radius:6px;display:inline-block';
                    return 'color:var(--zip-text-muted);font-weight:600';
                  };
                  return `
                    <tr style="border-bottom:1px solid var(--zip-lighter);background:${idx % 2 === 0 ? '#FFFFFA' : 'var(--zip-lightest)'}">
                      <td style="padding:0.7rem 1rem;font-weight:700;color:var(--zip-confidence)">${row.workstream}</td>
                      <td style="padding:0.7rem 1rem;text-align:center"><span style="${styleRole(row.fde)}">${row.fde}</span></td>
                      <td style="padding:0.7rem 1rem;text-align:center"><span style="${styleRole(row.factoryArch)}">${row.factoryArch}</span></td>
                      <td style="padding:0.7rem 1rem;text-align:center"><span style="${styleRole(row.archTeam)}">${row.archTeam}</span></td>
                      <td style="padding:0.7rem 1rem;text-align:center"><span style="${styleRole(row.quantium)}">${row.quantium}</span></td>
                      <td style="padding:0.7rem 1rem;text-align:center"><span style="${styleRole(row.zipSwes)}">${row.zipSwes}</span></td>
                      <td style="padding:0.7rem 1rem;text-align:center"><span style="${styleRole(row.execs)}">${row.execs}</span></td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
          <div style="margin-top:0.85rem;font-size:0.82rem;color:var(--zip-text-secondary);display:flex;gap:1.25rem;flex-wrap:wrap">
            <span><strong style="color:#065F46">R = Responsible</strong> (Executes the work)</span>
            <span><strong style="color:#44268C">A = Accountable</strong> (Approves deliverable &amp; holds veto)</span>
            <span><strong>C = Consulted</strong> (Provides critical domain input)</span>
            <span><strong>I = Informed</strong> (Kept updated via automated telemetry)</span>
          </div>
        </div>

        <!-- Handover Artifact Pack -->
        <div class="card">
          <h3 style="font-size:1.15rem;font-weight:800;color:var(--zip-confidence);margin:0 0 0.85rem 0">
            Handover Artifact Pack Deliverables (Milestone Gate M4 Sign-Off)
          </h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(230px, 1fr));gap:1rem">
            ${data.handoverArtifacts.map(a => `
              <div style="background:var(--zip-lightest);padding:0.95rem;border-radius:8px;border:1px solid var(--zip-lighter)">
                <div style="font-weight:800;color:#2F1563;font-size:0.9rem;margin-bottom:0.3rem">${a.title}</div>
                <div style="font-size:0.82rem;color:var(--zip-text-secondary);line-height:1.4">${a.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;
  },

  renderWeekByWeekTab(data) {
    const filteredWeeks = this.weekFilter === 'gates'
      ? data.weeklyPlan.filter(w => w.isGate)
      : data.weeklyPlan;

    return `
      <div style="display:flex;flex-direction:column;gap:1.25rem">
        
        <div class="card" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
          <div>
            <h2 style="font-size:1.3rem;font-weight:800;color:var(--zip-confidence);margin:0">12-Week Phased Execution Plan (Week-by-Week)</h2>
            <p style="font-size:0.88rem;color:var(--zip-text-secondary);margin:0.2rem 0 0 0">Synchronized delivery schedule across Google FDE, Zip Engineers, and Quantium Partner Squads (October – December 2026).</p>
          </div>
          <div style="display:flex;gap:0.5rem">
            <button type="button" class="btn ${this.weekFilter === 'all' ? 'btn-primary' : ''}" onclick="PlanningView.setWeekFilter('all')">
              All 12 Weeks
            </button>
            <button type="button" class="btn ${this.weekFilter === 'gates' ? 'btn-primary' : ''}" onclick="PlanningView.setWeekFilter('gates')">
              🎯 Milestone Gates Only (M1–M4)
            </button>
          </div>
        </div>

        <!-- Visual Gantt Ribbon -->
        <div class="card" style="padding:1rem 1.25rem">
          <div style="font-size:0.78rem;font-weight:800;color:var(--zip-text-secondary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.65rem">
            12-Week Milestone Gate Timeline Strip
          </div>
          <div style="display:grid;grid-template-columns:repeat(12, 1fr);gap:0.35rem">
            ${data.weeklyPlan.map(w => `
              <div onclick="document.getElementById('week-card-${w.week}').scrollIntoView({behavior:'smooth', block:'center'})" style="cursor:pointer;padding:0.5rem 0.25rem;border-radius:6px;text-align:center;background:${w.isGate ? '#065F46' : 'var(--zip-lightest)'};color:${w.isGate ? '#FFFFFA' : 'var(--zip-confidence)'};border:1px solid ${w.isGate ? '#065F46' : 'var(--zip-lighter)'};transition:transform 150ms ease" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
                <div style="font-size:0.75rem;font-weight:800;font-family:var(--font-mono)">W${w.week}</div>
                <div style="font-size:0.65rem;font-weight:700;opacity:0.9">${w.isGate ? '★ GATE' : 'Sprint'}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Week Cards -->
        <div style="display:flex;flex-direction:column;gap:1rem">
          ${filteredWeeks.map(w => `
            <div id="week-card-${w.week}" class="card" style="border-left:5px solid ${w.isGate ? '#065F46' : '#44268C'};background:${w.isGate ? 'linear-gradient(90deg, rgba(6,95,70,0.05) 0%, #FFFFFA 100%)' : '#FFFFFA'}">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.5rem">
                <div style="display:flex;align-items:center;gap:0.5rem">
                  <span class="badge" style="background:var(--zip-confidence);color:#FFFFFA;font-family:var(--font-mono);font-weight:800">WEEK ${w.week} · ${w.month}</span>
                  <span class="badge" style="background:${w.isGate ? '#065F46' : '#2F1563'};color:#FFFFFA;font-weight:700">${w.phase}</span>
                </div>
                ${w.isGate ? `<span class="badge" style="background:#AA8FFF;color:#1A0826;font-weight:800">★ VERIFIABLE GATE (${w.gateId})</span>` : ''}
              </div>
              <h3 style="font-size:1.15rem;font-weight:800;color:var(--zip-confidence);margin:0 0 0.4rem 0">${w.title}</h3>
              <p style="font-size:0.9rem;color:var(--zip-text-secondary);line-height:1.55;margin:0 0 0.75rem 0">${w.desc}</p>
              <div style="background:var(--zip-lightest);padding:0.65rem 0.9rem;border-radius:8px;border:1px solid var(--zip-lighter);font-size:0.84rem;color:var(--zip-confidence)">
                <strong style="color:#44268C">📦 Core Deliverables:</strong> ${w.deliverables}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;
  },

  renderRoadmapTab(data) {
    return `
      <div style="display:flex;flex-direction:column;gap:1.5rem">
        
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem">
            <div>
              <h2 style="font-size:1.35rem;font-weight:800;color:var(--zip-confidence);margin:0">Project Catalyst 18-Month Enterprise Program Roadmap</h2>
              <p style="font-size:0.9rem;color:var(--zip-text-secondary);margin:0.25rem 0 0 0">
                The macro multi-stage timeline from Day-0 foundation through single-domain pilot, historical shadow gating, 5-domain LMS scaling, and Azure LMS retirement.
              </p>
            </div>
            <span class="badge" style="background:#2F1563;color:#FFFFFA;font-weight:800">5 ENDURING PROGRAM STAGES</span>
          </div>
        </div>

        <!-- 5 Stages Timeline -->
        <div style="display:flex;flex-direction:column;gap:1.25rem">
          ${data.programRoadmap.map((st, idx) => `
            <div class="card" style="border-left:6px solid ${idx === 4 ? '#065F46' : '#44268C'}">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.75rem">
                <div>
                  <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.35rem">
                    <span class="badge" style="background:var(--zip-confidence);color:#AA8FFF;font-family:var(--font-mono);font-weight:800">${st.stage} · ${st.months}</span>
                    <span class="badge" style="background:var(--zip-lightest);color:var(--zip-confidence);border:1px solid var(--zip-lighter);font-weight:700">Owner: ${st.owner}</span>
                  </div>
                  <h3 style="font-size:1.25rem;font-weight:800;color:var(--zip-confidence);margin:0">${st.title}</h3>
                </div>
                <div style="background:#065F46;color:#FFFFFA;padding:0.4rem 0.75rem;border-radius:8px;font-size:0.78rem;font-weight:700">
                  🎯 Exit Gate: ${st.exitGate}
                </div>
              </div>

              <p style="font-size:0.92rem;color:var(--zip-text-secondary);line-height:1.55;margin:0 0 1rem 0">
                ${st.summary}
              </p>

              <!-- 4 Workstream Columns -->
              <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:0.85rem">
                ${st.workstreams.map(ws => `
                  <div style="background:var(--zip-lightest);padding:0.85rem;border-radius:8px;border:1px solid var(--zip-lighter)">
                    <div style="font-weight:800;color:#44268C;font-size:0.86rem;margin-bottom:0.4rem;text-transform:uppercase;letter-spacing:0.03em">${ws.name}</div>
                    <ul style="margin:0;padding-left:1.1rem;font-size:0.82rem;color:var(--zip-text-secondary);display:flex;flex-direction:column;gap:0.25rem">
                      ${ws.items.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;
  }
};
