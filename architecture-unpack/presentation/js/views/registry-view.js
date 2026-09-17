// Zip Architecture Workbench — Skills & Architecture Registry View (Track B Visual Analytics — Final Iteration 3)
window.RegistryView = {
  currentTab: 'skills',      // 'skills' | 'artifacts' | 'personas' | 'axioms'
  currentCategory: 'all',    // Category or segment filter
  currentPhaseFilter: 'all', // 'all' | '1' .. '7'
  currentRungFilter: 'all',  // 'all' | 'mvp' | 'L2' | 'L3' | 'L4'
  sortBy: 'alpha',           // 'alpha' | 'phase' | 'complexity' | 'category'
  searchQuery: '',
  chartMode: 'domain',       // 'domain' (Stacked Category Bar) | 'phase' (SDLC Phase Coverage Heatmap)

  getSkills() {
    return (typeof window.skillsCatalogData !== 'undefined' && Array.isArray(window.skillsCatalogData))
      ? window.skillsCatalogData
      : ((typeof skillsCatalogData !== 'undefined' && Array.isArray(skillsCatalogData)) ? skillsCatalogData : []);
  },

  getArtifacts() {
    return (typeof window.artifactsData !== 'undefined' && window.artifactsData)
      ? window.artifactsData
      : ((typeof artifactsData !== 'undefined' && artifactsData) ? artifactsData : {});
  },

  getPersonas() {
    const rawObj = (typeof window.pgspPersonasData !== 'undefined' && window.pgspPersonasData)
      ? window.pgspPersonasData
      : ((typeof pgspPersonasData !== 'undefined' && pgspPersonasData) ? pgspPersonasData : {});
    return Object.keys(rawObj).map(k => {
      const p = rawObj[k];
      const firstLine = (p.raw || '').split('\n')[0] || k;
      const rungMatch = (p.raw || '').match(/Autonomy Rung:\*\*\s*`?([^|`\n]+)`?/i);
      const phaseMatch = (p.raw || '').match(/Phase:\*\*\s*`?([^|`\n]+)`?/i);
      return {
        id: k,
        name: `${k}: ${firstLine.replace(/^[#*`\s]+/, '')}`,
        title: firstLine.replace(/^[#*`\s]+/, ''),
        rung: rungMatch ? rungMatch[1].trim() : 'L3 Autonomous',
        phase: phaseMatch ? phaseMatch[1].trim() : 'Phases 1-6',
        category: k.startsWith('A') ? 'Family A: Intent & Compliance'
                : k.startsWith('B') ? 'Family B: Architecture & Data'
                : k.startsWith('C') ? 'Family C: Implementation & TDD'
                : k.startsWith('D') ? 'Family D: Verification & Security'
                : 'Family E: Operations & Governance',
        description: p.double_diamond || p.p_profile || p.raw || '',
        rawObj: p
      };
    });
  },

  getAxioms() {
    return (typeof window.axiomsData !== 'undefined' && Array.isArray(window.axiomsData))
      ? window.axiomsData
      : ((typeof axiomsData !== 'undefined' && Array.isArray(axiomsData)) ? axiomsData : []);
  },

  render(container) {
    if (!container) container = document.getElementById('mainStage');
    if (!container) return;

    const skills = this.getSkills();
    const artifactsObj = this.getArtifacts();
    const artifactsCount = Object.keys(artifactsObj).length || 10;
    const personas = this.getPersonas();
    const axioms = this.getAxioms();

    let html = `
      <style>
        .dist-bar-segment {
          cursor: pointer;
          transition: opacity 0.18s ease, filter 0.18s ease;
        }
        .dist-bar-segment:hover {
          opacity: 0.92;
          filter: brightness(1.12);
        }
        mark.zip-hl {
          background-color: #AA8FFF;
          color: #1A0826;
          padding: 0 3px;
          border-radius: 3px;
          font-weight: 800;
        }
        .autonomy-meter {
          display: inline-flex;
          gap: 2px;
          align-items: center;
        }
        .autonomy-meter span {
          width: 6px;
          height: 10px;
          border-radius: 1.5px;
          display: inline-block;
        }
        .zip-reg-card {
          background: var(--zip-card-bg);
          border: 1px solid var(--zip-card-border);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 0;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }
        .zip-reg-card:hover {
          transform: translateY(-2px);
          border-color: var(--zip-medium);
        }
        .zip-kpi-tile {
          background: var(--zip-card-bg);
          padding: 0.75rem 0.9rem;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.15s ease;
        }
        .zip-kpi-tile:hover {
          transform: translateY(-1px);
        }
      </style>

      <!-- Header -->
      <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem;margin-bottom:1.2rem">
        <div>
          <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem">
            <span class="pill pill-fearless">Agent Registry Backbone</span>
            <span class="pill" style="background:#EDE6FF;color:#411361;font-weight:700">106 Cryptographically Pinned Entities</span>
          </div>
          <h1 style="margin-bottom:0.3rem">Skills, Artifacts, Personas &amp; Axioms Registry</h1>
          <p class="lede" style="margin-bottom:0">Deterministic agent capabilities, formal schemas, PGSP personas, and constitutional guardrails preventing dollar drift.</p>
        </div>
        <div style="display:flex;gap:0.5rem;align-items:center">
          <button class="btn" onclick="RegistryView.resetFilters()">🔄 Reset All Filters</button>
        </div>
      </div>

      <!-- 1. Visual Analytics Header & Dual Distribution / Phase Coverage Chart Card -->
      ${this.renderVisualAnalyticsHeader(skills, artifactsCount, personas, axioms)}

      <!-- 2. Main Entity Pillar Tabs -->
      <div style="display:flex;gap:0.5rem;margin-bottom:1rem;border-bottom:1px solid var(--zip-lighter);padding-bottom:0.65rem;flex-wrap:wrap;align-items:center;justify-content:space-between">
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
          <button class="btn ${this.currentTab === 'skills' ? 'btn-primary' : ''}" onclick="RegistryView.setTab('skills')">
            ⚡ ${skills.length} Agent Skills
          </button>
          <button class="btn ${this.currentTab === 'artifacts' ? 'btn-primary' : ''}" onclick="RegistryView.setTab('artifacts')">
            📦 ${artifactsCount} Core Artifacts
          </button>
          <button class="btn ${this.currentTab === 'personas' ? 'btn-primary' : ''}" onclick="RegistryView.setTab('personas')">
            🎭 ${personas.length} PGSP Personas
          </button>
          <button class="btn ${this.currentTab === 'axioms' ? 'btn-primary' : ''}" onclick="RegistryView.setTab('axioms')">
            ⚖️ ${axioms.length} Constitutional Axioms
          </button>
        </div>
        <div id="registryLiveCounter" style="font-family:var(--font-mono);font-size:0.78rem;font-weight:700;color:#411361;background:#EDE6FF;padding:0.3rem 0.75rem;border-radius:6px">
          Active View: ${this.currentTab.toUpperCase()}
        </div>
      </div>

      <!-- 3. Search, Multi-Tag Filters & Sort Bar -->
      ${this.renderFilterAndSearchBar(skills, personas)}

      <!-- 4. Active Catalog Grid -->
      <div id="registryCatalogContainer">
        ${this.renderActiveCatalog(skills, artifactsObj, personas, axioms)}
      </div>
    `;

    container.innerHTML = html;
    this.updateLiveCounter();
  },

  renderVisualAnalyticsHeader(skills, artifactsCount, personas, axioms) {
    const palette = ['#411361', '#6542BE', '#AA8FFF', '#462B54', '#059669', '#2563EB', '#D97706', '#E11D48', '#1A0826', '#7C3AED'];

    let segments = [];
    if (this.currentTab === 'skills') {
      const counts = {};
      skills.forEach(s => {
        const c = s.category || 'General';
        counts[c] = (counts[c] || 0) + 1;
      });
      segments = Object.keys(counts).map((cat, idx) => ({
        label: cat,
        count: counts[cat],
        pct: ((counts[cat] / (skills.length || 1)) * 100).toFixed(1),
        color: palette[idx % palette.length]
      }));
    } else if (this.currentTab === 'personas') {
      const counts = {};
      personas.forEach(p => {
        counts[p.category] = (counts[p.category] || 0) + 1;
      });
      segments = Object.keys(counts).map((cat, idx) => ({
        label: cat,
        count: counts[cat],
        pct: ((counts[cat] / (personas.length || 1)) * 100).toFixed(1),
        color: palette[idx % palette.length]
      }));
    } else if (this.currentTab === 'axioms') {
      const counts = {};
      axioms.forEach(a => {
        const t = a.tag || 'Constitutional';
        counts[t] = (counts[t] || 0) + 1;
      });
      segments = Object.keys(counts).map((cat, idx) => ({
        label: cat,
        count: counts[cat],
        pct: ((counts[cat] / (axioms.length || 1)) * 100).toFixed(1),
        color: palette[idx % palette.length]
      }));
    } else {
      segments = [
        { label: 'Phase 1: Intent & PRD', count: 3, pct: '30.0', color: '#411361' },
        { label: 'Phase 2: Dispatch Manifest', count: 2, pct: '20.0', color: '#6542BE' },
        { label: 'Phase 3-5: Build & Shadow Proof', count: 3, pct: '30.0', color: '#AA8FFF' },
        { label: 'Phase 6-7: Cutover & ADR Ledger', count: 2, pct: '20.0', color: '#059669' }
      ];
    }

    // Build SVG proportional bar (Mode A: Domain distribution)
    let currentX = 0;
    const svgWidth = 900;
    const barSvgRects = segments.map(seg => {
      const w = Math.max(14, (parseFloat(seg.pct) / 100) * svgWidth);
      const x = currentX;
      currentX += w;
      const isAct = (this.currentCategory === seg.label);
      return `
        <g class="dist-bar-segment" onclick="RegistryView.setCategory('${this.escapeAttr(seg.label)}')">
          <title>${seg.label}: ${seg.count} items (${seg.pct}%)</title>
          <rect x="${x}" y="4" width="${Math.max(3, w - 3)}" height="30" rx="5" fill="${seg.color}" stroke="${isAct ? '#1A0826' : 'none'}" stroke-width="${isAct ? 2.5 : 0}" />
          ${w > 48 ? `<text x="${x + w / 2}" y="23" font-family="JetBrains Mono, monospace" font-size="10" font-weight="800" fill="#FFFFFA" text-anchor="middle">${seg.count}</text>` : ''}
        </g>
      `;
    }).join('');

    // Build SVG Phase Coverage Heatmap Bar Chart (Mode B: SDLC Phases 01..07)
    const phaseCounts = [1, 2, 3, 4, 5, 6, 7].map(pNum => {
      const count = skills.filter(s => (s.phases || []).includes(pNum)).length;
      return { phaseNum: pNum, label: `P0${pNum}`, count };
    });
    const maxPhaseCount = Math.max(...phaseCounts.map(p => p.count), 1);
    const phaseBarSvg = phaseCounts.map((item, idx) => {
      const colW = 122;
      const x = 15 + idx * 125;
      const isAct = (String(this.currentPhaseFilter) === String(item.phaseNum));
      const isGap = (item.phaseNum === 4);
      const fillCol = isGap ? '#E11D48' : (isAct ? '#411361' : '#6542BE');
      return `
        <g class="dist-bar-segment" onclick="RegistryView.setPhaseFilter('${isAct ? 'all' : item.phaseNum}')">
          <rect x="${x}" y="4" width="${colW}" height="30" rx="5" fill="${fillCol}" opacity="${isAct ? '1' : '0.85'}" />
          <text x="${x + colW / 2}" y="23" font-family="JetBrains Mono, monospace" font-size="10.5" font-weight="800" fill="#FFFFFA" text-anchor="middle">
            ${item.label}: ${item.count} Skills
          </text>
        </g>
      `;
    }).join('');

    const mvpCount = skills.filter(s => s.is_mvp).length;
    const prodCount = skills.length - mvpCount;
    const mvpPct = Math.round((mvpCount / (skills.length || 1)) * 100);

    return `
      <div class="card" style="padding:1.15rem;margin-bottom:1.25rem;background:var(--zip-card-elevated);border:1px solid var(--zip-card-border)">
        <!-- Top 4-Pillar Macro KPI Strip -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(190px, 1fr));gap:0.8rem;margin-bottom:1.1rem">
          <div class="zip-kpi-tile" style="border:2px solid ${this.currentTab === 'skills' ? '#6542BE' : 'var(--zip-card-border)'}" onclick="RegistryView.setTab('skills')">
            <div style="font-size:0.72rem;font-weight:800;color:var(--zip-text-secondary);text-transform:uppercase">Agent Skills Catalog</div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;margin-top:0.2rem">
              <span style="font-size:1.5rem;font-weight:800;color:#6542BE;font-family:var(--font-mono)">${skills.length}</span>
              <span class="pill pill-fearless" style="font-size:0.68rem">10 Domains</span>
            </div>
          </div>

          <div class="zip-kpi-tile" style="border:2px solid ${this.currentTab === 'artifacts' ? '#6542BE' : 'var(--zip-card-border)'}" onclick="RegistryView.setTab('artifacts')">
            <div style="font-size:0.72rem;font-weight:800;color:var(--zip-text-secondary);text-transform:uppercase">Formal Artifacts</div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;margin-top:0.2rem">
              <span style="font-size:1.5rem;font-weight:800;color:#6542BE;font-family:var(--font-mono)">${artifactsCount}</span>
              <span class="pill" style="font-size:0.68rem;background:#EDE6FF;color:#411361;font-weight:700">JSON Schemas</span>
            </div>
          </div>

          <div class="zip-kpi-tile" style="border:2px solid ${this.currentTab === 'personas' ? '#6542BE' : 'var(--zip-card-border)'}" onclick="RegistryView.setTab('personas')">
            <div style="font-size:0.72rem;font-weight:800;color:var(--zip-text-secondary);text-transform:uppercase">PGSP Agent Personas</div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;margin-top:0.2rem">
              <span style="font-size:1.5rem;font-weight:800;color:var(--zip-text-primary);font-family:var(--font-mono)">${personas.length}</span>
              <span class="pill pill-good" style="font-size:0.68rem">5 Families</span>
            </div>
          </div>

          <div class="zip-kpi-tile" style="border:2px solid ${this.currentTab === 'axioms' ? '#6542BE' : 'var(--zip-card-border)'}" onclick="RegistryView.setTab('axioms')">
            <div style="font-size:0.72rem;font-weight:800;color:var(--zip-text-secondary);text-transform:uppercase">Constitutional Axioms</div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;margin-top:0.2rem">
              <span style="font-size:1.5rem;font-weight:800;color:#059669;font-family:var(--font-mono)">${axioms.length}</span>
              <span class="pill pill-good" style="font-size:0.68rem">Zero-Drift Laws</span>
            </div>
          </div>
        </div>

        <!-- Interactive SVG Distribution Bar + Chart Mode Toggle + MVP Readiness Meter -->
        <div style="display:grid;grid-template-columns:1fr 245px;gap:1.2rem;align-items:center" class="registry-dist-grid">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.45rem;flex-wrap:wrap;gap:0.5rem">
              <div style="display:flex;align-items:center;gap:0.6rem">
                <span style="font-size:0.76rem;font-weight:800;color:var(--zip-text-primary);text-transform:uppercase;letter-spacing:0.04em">
                  ${this.chartMode === 'domain' ? `Category Distribution (${this.currentTab.toUpperCase()})` : 'SDLC Phase Coverage Heatmap (P01–P07)'}
                </span>
                <div style="display:inline-flex;background:#EDE6FF;padding:2px;border-radius:6px">
                  <button class="btn" style="padding:0.15rem 0.5rem;font-size:0.68rem;border:none;background:${this.chartMode === 'domain' ? '#411361' : 'transparent'};color:${this.chartMode === 'domain' ? '#FFFFFA' : '#411361'}" onclick="RegistryView.setChartMode('domain')">By Domain</button>
                  <button class="btn" style="padding:0.15rem 0.5rem;font-size:0.68rem;border:none;background:${this.chartMode === 'phase' ? '#411361' : 'transparent'};color:${this.chartMode === 'phase' ? '#FFFFFA' : '#411361'}" onclick="RegistryView.setChartMode('phase')">By SDLC Phase</button>
                </div>
              </div>
              ${this.currentCategory !== 'all' ? `
                <span class="pill pill-fearless" style="cursor:pointer;font-size:0.72rem;font-weight:800" onclick="RegistryView.setCategory('all')">
                  Filter Active: ${this.currentCategory} ✕
                </span>
              ` : `<span style="font-size:0.73rem;color:var(--zip-text-secondary);font-weight:600">Click any bar segment to filter</span>`}
            </div>

            <svg viewBox="0 0 ${svgWidth} 38" style="width:100%;height:38px;display:block;margin-bottom:0.6rem">
              ${this.chartMode === 'domain' ? barSvgRects : phaseBarSvg}
            </svg>

            <!-- Clickable Segment Legend Pills -->
            <div style="display:flex;flex-wrap:wrap;gap:0.4rem">
              <button class="btn ${this.currentCategory === 'all' ? 'btn-primary' : ''}" style="font-size:0.72rem;padding:0.24rem 0.6rem" onclick="RegistryView.setCategory('all')">
                All (${segments.reduce((acc, s) => acc + s.count, 0)})
              </button>
              ${segments.map(seg => {
                const isAct = (this.currentCategory === seg.label);
                return `
                  <button class="btn" style="font-size:0.72rem;padding:0.24rem 0.6rem;border-color:${seg.color};background:${isAct ? seg.color : 'var(--zip-card-bg)'};color:${isAct ? '#FFFFFA' : 'var(--zip-text-primary)'};font-weight:${isAct ? '800' : '600'}"
                          onclick="RegistryView.setCategory('${this.escapeAttr(seg.label)}')">
                    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${isAct ? '#FFFFFA' : seg.color};margin-right:4px"></span>
                    ${seg.label} (${seg.count})
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Right Mini Gauge: MVP vs Production Readiness -->
          <div style="background:#1A0826;color:#FFFFFA;padding:0.85rem;border-radius:10px;border:1px solid #411361">
            <div style="font-size:0.7rem;font-weight:800;color:#AA8FFF;text-transform:uppercase;margin-bottom:0.35rem">Sovereign Readiness Split</div>
            <div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:0.3rem">
              <span>MVP Core Skills: <strong>${mvpCount}</strong></span>
              <span style="color:#34D399">${mvpPct}%</span>
            </div>
            <div style="width:100%;height:8px;background:#240E34;border-radius:4px;overflow:hidden;margin-bottom:0.5rem">
              <div style="width:${mvpPct}%;height:100%;background:linear-gradient(90deg, #AA8FFF, #34D399)"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:#EDE6FF">
              <span>Full Production: ${prodCount}</span>
              <button class="btn" style="padding:0.15rem 0.45rem;font-size:0.68rem;background:#6542BE;color:#FFFFFA;border:none"
                      onclick="RegistryView.setRungFilter('${this.currentRungFilter === 'mvp' ? 'all' : 'mvp'}')">
                ${this.currentRungFilter === 'mvp' ? 'Show All' : 'Filter MVP Only'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderFilterAndSearchBar(skills, personas) {
    return `
      <div class="card" style="padding:0.85rem 1rem;margin-bottom:1.2rem;background:var(--zip-card-bg);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.8rem">
        <!-- Left: Instant Keyword Search Input -->
        <div style="display:flex;align-items:center;gap:0.5rem;flex:1;min-width:240px">
          <span style="font-size:1rem">🔍</span>
          <input type="text" id="registrySearchInput" value="${this.escapeAttr(this.searchQuery)}"
                 placeholder="Instant keyword search across titles, descriptions, personas &amp; statutes (highlights matches)..."
                 style="width:100%;padding:0.45rem 0.75rem;border:1.5px solid var(--zip-card-border);border-radius:var(--radius-sm);font-size:0.84rem;font-family:var(--font-body);outline:none;background:var(--zip-card-elevated);color:var(--zip-text-primary)"
                 oninput="RegistryView.setSearchQuery(this.value)">
          ${this.searchQuery ? `<button class="btn" style="padding:0.3rem 0.55rem;font-size:0.74rem" onclick="RegistryView.setSearchQuery('')">✕</button>` : ''}
        </div>

        <!-- Middle: Multi-Tag Filters (SDLC Phase & Autonomy Rung / MVP) -->
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
          <label style="font-size:0.74rem;font-weight:800;color:var(--zip-text-primary)">Phase:</label>
          <select style="padding:0.38rem 0.6rem;border:1px solid var(--zip-card-border);border-radius:var(--radius-sm);font-size:0.78rem;background:var(--zip-card-bg);color:var(--zip-text-primary);font-weight:700"
                  onchange="RegistryView.setPhaseFilter(this.value)">
            <option value="all" ${this.currentPhaseFilter === 'all' ? 'selected' : ''}>All Phases (01-07)</option>
            ${[1, 2, 3, 4, 5, 6, 7].map(p => `<option value="${p}" ${this.currentPhaseFilter === String(p) ? 'selected' : ''}>Phase 0${p}</option>`).join('')}
          </select>

          <label style="font-size:0.74rem;font-weight:800;color:var(--zip-text-primary)">Tier:</label>
          <select style="padding:0.38rem 0.6rem;border:1px solid var(--zip-card-border);border-radius:var(--radius-sm);font-size:0.78rem;background:var(--zip-card-bg);color:var(--zip-text-primary);font-weight:700"
                  onchange="RegistryView.setRungFilter(this.value)">
            <option value="all" ${this.currentRungFilter === 'all' ? 'selected' : ''}>All Autonomy Tiers</option>
            <option value="mvp" ${this.currentRungFilter === 'mvp' ? 'selected' : ''}>MVP Critical Only</option>
            <option value="L2" ${this.currentRungFilter === 'L2' ? 'selected' : ''}>L2 Supervised</option>
            <option value="L3" ${this.currentRungFilter === 'L3' ? 'selected' : ''}>L3 Autonomous Sandbox</option>
            <option value="L4" ${this.currentRungFilter === 'L4' ? 'selected' : ''}>L4 Sovereign Zero-Drift</option>
          </select>

          <label style="font-size:0.74rem;font-weight:800;color:var(--zip-text-primary)">Sort:</label>
          <select style="padding:0.38rem 0.6rem;border:1px solid var(--zip-card-border);border-radius:var(--radius-sm);font-size:0.78rem;background:var(--zip-card-bg);color:var(--zip-text-primary);font-weight:700"
                  onchange="RegistryView.setSortBy(this.value)">
            <option value="alpha" ${this.sortBy === 'alpha' ? 'selected' : ''}>Alphabetical (A → Z)</option>
            <option value="phase" ${this.sortBy === 'phase' ? 'selected' : ''}>SDLC Phase Order (01 → 07)</option>
            <option value="complexity" ${this.sortBy === 'complexity' ? 'selected' : ''}>Autonomy / MVP Priority</option>
            <option value="category" ${this.sortBy === 'category' ? 'selected' : ''}>Domain Category</option>
          </select>
        </div>
      </div>
    `;
  },

  renderActiveCatalog(skills, artifactsObj, personas, axioms) {
    if (this.currentTab === 'skills') {
      return this.renderSkillsGrid(skills);
    } else if (this.currentTab === 'artifacts') {
      return this.renderArtifactsGrid(artifactsObj);
    } else if (this.currentTab === 'personas') {
      return this.renderPersonasGrid(personas);
    } else {
      return this.renderAxiomsGrid(axioms);
    }
  },

  renderAutonomyMeter(rungStr) {
    const level = (rungStr || '').includes('L4') ? 4 : (rungStr || '').includes('L2') ? 2 : 3;
    let bars = '';
    for (let i = 1; i <= 4; i++) {
      const col = i <= level ? (level === 4 ? '#059669' : '#6542BE') : '#EDE6FF';
      bars += `<span style="background:${col}"></span>`;
    }
    return `<div class="autonomy-meter" title="Autonomy Level L${level}">${bars}</div>`;
  },

  renderSkillsGrid(skills) {
    let list = skills.filter(s => {
      if (this.currentCategory !== 'all' && (s.category || '') !== this.currentCategory) return false;
      if (this.currentPhaseFilter !== 'all') {
        const phases = (s.phases || []).map(String);
        if (!phases.includes(String(this.currentPhaseFilter))) return false;
      }
      if (this.currentRungFilter === 'mvp' && !s.is_mvp) return false;
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        const hay = `${s.id} ${s.name} ${s.category} ${s.description} ${(s.acting_personas || []).join(' ')}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    list.sort((a, b) => {
      if (this.sortBy === 'alpha') return (a.name || '').localeCompare(b.name || '');
      if (this.sortBy === 'phase') return ((a.phases && a.phases[0]) || 9) - ((b.phases && b.phases[0]) || 9);
      if (this.sortBy === 'complexity') return (b.is_mvp ? 1 : 0) - (a.is_mvp ? 1 : 0);
      return (a.category || '').localeCompare(b.category || '');
    });

    this.lastFilteredCount = list.length;
    this.lastTotalCount = skills.length;

    if (!list.length) {
      return `<div class="card" style="text-align:center;padding:2.5rem;color:var(--zip-text-muted)">No skills match the active filters. <button class="btn" style="margin-left:0.5rem" onclick="RegistryView.resetFilters()">Reset Filters</button></div>`;
    }

    return `
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(330px, 1fr));gap:1rem">
        ${list.map(s => {
          const personas = s.acting_personas || [];
          const phases = s.phases || [3];
          const rung = phases.includes(4) || phases.includes(5) ? 'L4' : 'L3';
          return `
            <div class="card registry-card zip-reg-card">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.45rem;gap:0.5rem">
                  <strong style="font-size:0.98rem;line-height:1.25;color:var(--zip-text-primary)">${this.highlightText(s.name)}</strong>
                  <div style="display:flex;align-items:center;gap:0.35rem;flex-shrink:0">
                    ${this.renderAutonomyMeter(rung)}
                    <span class="pill ${s.is_mvp ? 'pill-fearless' : 'pill-good'}" style="font-size:0.66rem">${s.is_mvp ? 'MVP CORE' : 'PROD'}</span>
                  </div>
                </div>
                <div style="font-family:var(--font-mono);font-size:0.7rem;color:#6542BE;font-weight:700;margin-bottom:0.45rem">ID: ${this.highlightText(s.id)} · ${this.highlightText(s.category || 'Skill')}</div>
                <p style="font-size:0.83rem;line-height:1.45;margin-bottom:0.85rem;color:var(--zip-text-secondary)">${this.highlightText(s.description || 'Deterministic agent skill.')}</p>
              </div>

              <div>
                ${personas.length ? `
                  <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-bottom:0.65rem">
                    ${personas.slice(0, 3).map(p => `<span class="pill" style="font-size:0.65rem;background:#EDE6FF;color:#411361;font-weight:700">${this.highlightText(p)}</span>`).join('')}
                  </div>
                ` : ''}
                <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--zip-card-border);padding-top:0.55rem;margin-top:0.2rem">
                  <span style="font-size:0.74rem;font-weight:800;color:var(--zip-text-primary)">SDLC Phases: ${phases.map(p => `P0${p}`).join(', ')}</span>
                  <button class="btn btn-primary" style="font-size:0.73rem;padding:0.28rem 0.65rem" onclick="ArtifactDrawer.open(RegistryView.getSkill('${this.escapeAttr(s.id)}'))">
                    🔍 Quick Inspect
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  renderArtifactsGrid(artifactsObj) {
    const keys = Object.keys(artifactsObj);
    let list = keys.map(k => ({ id: k, ...artifactsObj[k] }));
    if (!list.length) {
      list = [
        { id: 'BRD', title: 'Business Requirements Document', desc: 'Executive business intent, customer distress journeys, and ROI benchmarks signed off by stakeholders.', phase: 'Phase 1' },
        { id: 'PRD', title: 'Product Requirements Document (Contract)', desc: 'High-definition technical contract with OpenAPI specs, invariants, and RTM mappings.', phase: 'Phase 1' },
        { id: 'ProjectAssignment', title: 'Project Assignment Manifest', desc: 'Deterministic dispatch manifest binding skills, tools, and token quotas to autonomous agent fleet.', phase: 'Phase 2' },
        { id: 'NegotiationFile', title: 'Negotiation File (Side-Car Ledger)', desc: 'Durable multi-turn ledger capturing human-agent disputes, rejected assertions, and settled ADRs.', phase: 'Phases 1-6' },
        { id: 'BuildReport', title: 'Build & AST Conformance Report', desc: 'AST spec conformance diffs, isolated test execution proofs, and token economics spend attribution.', phase: 'Phase 3-4' },
        { id: 'FinalReport', title: 'Final Cutover Attestation Report', desc: 'Zero-cent drift dual-run verification proof, production cutover certificate, and compounding learning metrics.', phase: 'Phase 7' }
      ];
    }

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter(a => `${a.id} ${a.title} ${a.description || a.desc || ''}`.toLowerCase().includes(q));
    }

    this.lastFilteredCount = list.length;
    this.lastTotalCount = keys.length || 10;

    return `
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(330px, 1fr));gap:1rem">
        ${list.map(a => `
          <div class="card registry-card zip-reg-card">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.45rem">
                <strong style="font-size:1rem;color:var(--zip-text-primary)">${this.highlightText(a.title || a.id)}</strong>
                <span class="pill pill-fearless">${this.highlightText(a.id)}</span>
              </div>
              <p style="font-size:0.84rem;color:var(--zip-text-secondary);margin-bottom:0.9rem;line-height:1.45">${this.highlightText(a.description || a.desc || 'Formal JSON schema contract artifact.')}</p>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--zip-card-border);padding-top:0.55rem">
              <span style="font-size:0.74rem;color:var(--zip-text-primary);font-weight:800">${a.phase || 'SDLC Lifecycle Contract'}</span>
              <button class="btn btn-primary" style="font-size:0.73rem;padding:0.28rem 0.65rem" onclick="ArtifactDrawer.open(RegistryView.getArtifact('${this.escapeAttr(a.id)}'))">
                🔍 Quick Inspect
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderPersonasGrid(personas) {
    let list = personas.filter(p => {
      if (this.currentCategory !== 'all' && p.category !== this.currentCategory) return false;
      if (this.currentRungFilter !== 'all' && this.currentRungFilter !== 'mvp') {
        if (!p.rung.includes(this.currentRungFilter)) return false;
      }
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        if (!`${p.id} ${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)) return false;
      }
      return true;
    });

    if (this.sortBy === 'alpha') list.sort((a, b) => a.name.localeCompare(b.name));

    this.lastFilteredCount = list.length;
    this.lastTotalCount = personas.length;

    return `
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(330px, 1fr));gap:1rem">
        ${list.map(p => `
          <div class="card registry-card zip-reg-card">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.4rem;gap:0.5rem">
                <strong style="font-size:0.98rem;color:var(--zip-text-primary)">${this.highlightText(p.name)}</strong>
                <div style="display:flex;align-items:center;gap:0.35rem">
                  ${this.renderAutonomyMeter(p.rung)}
                  <span class="pill pill-fearless" style="font-size:0.68rem">${this.highlightText(p.rung)}</span>
                </div>
              </div>
              <div style="font-size:0.72rem;font-weight:800;color:#6542BE;margin-bottom:0.45rem">${this.highlightText(p.category)} · ${this.highlightText(p.phase)}</div>
              <p style="font-size:0.82rem;color:var(--zip-text-secondary);line-height:1.45;margin-bottom:0.85rem">${this.highlightText((p.description || '').slice(0, 190))}...</p>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--zip-card-border);padding-top:0.55rem">
              <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:var(--zip-text-primary)">PGSP Specification</span>
              <button class="btn btn-primary" style="font-size:0.73rem;padding:0.28rem 0.65rem" onclick="ArtifactDrawer.open(RegistryView.getPersona('${this.escapeAttr(p.id)}'))">
                🔍 Quick Inspect
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderAxiomsGrid(axioms) {
    let list = axioms.filter(a => {
      if (this.currentCategory !== 'all' && (a.tag || 'Constitutional') !== this.currentCategory) return false;
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        if (!`${a.id} ${a.title} ${a.mandate} ${a.why} ${a.falsifier}`.toLowerCase().includes(q)) return false;
      }
      return true;
    });

    this.lastFilteredCount = list.length;
    this.lastTotalCount = axioms.length;

    return `
      <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(330px, 1fr));gap:1rem">
        ${list.map(a => `
          <div class="card registry-card zip-reg-card">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.45rem">
                <strong style="font-size:0.98rem;color:var(--zip-text-primary)">${this.highlightText(`${a.id}: ${a.title}`)}</strong>
                <span class="pill pill-good" style="font-size:0.68rem">${this.highlightText(a.tag || 'Axiom')}</span>
              </div>
              <p style="font-size:0.83rem;color:var(--zip-text-primary);line-height:1.45;margin-bottom:0.5rem"><strong>Mandate:</strong> ${this.highlightText(a.mandate)}</p>
              <p style="font-size:0.78rem;color:var(--zip-text-secondary);line-height:1.4;margin-bottom:0.8rem"><strong>Falsifier:</strong> ${this.highlightText(a.falsifier || 'Zero tolerance')}</p>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--zip-card-border);padding-top:0.55rem">
              <span style="font-size:0.72rem;font-weight:800;color:#059669">Constitutional Invariant</span>
              <button class="btn btn-primary" style="font-size:0.73rem;padding:0.28rem 0.65rem" onclick="ArtifactDrawer.open(RegistryView.getAxiom('${this.escapeAttr(a.id)}'))">
                🔍 Quick Inspect
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  updateLiveCounter() {
    const el = document.getElementById('registryLiveCounter');
    if (el && typeof this.lastFilteredCount !== 'undefined') {
      el.textContent = `Showing ${this.lastFilteredCount} of ${this.lastTotalCount} ${this.currentTab.toUpperCase()}`;
    }
  },

  setTab(tabName) {
    this.currentTab = tabName;
    this.currentCategory = 'all';
    this.render(document.getElementById('mainStage'));
  },

  setChartMode(mode) {
    this.chartMode = mode;
    this.render(document.getElementById('mainStage'));
  },

  setCategory(cat) {
    this.currentCategory = (this.currentCategory === cat) ? 'all' : cat;
    this.render(document.getElementById('mainStage'));
  },

  setPhaseFilter(val) {
    this.currentPhaseFilter = String(val);
    this.render(document.getElementById('mainStage'));
  },

  setRungFilter(val) {
    this.currentRungFilter = val;
    this.render(document.getElementById('mainStage'));
  },

  setSortBy(val) {
    this.sortBy = val;
    this.render(document.getElementById('mainStage'));
  },

  setSearchQuery(val) {
    this.searchQuery = val || '';
    const container = document.getElementById('registryCatalogContainer');
    if (container) {
      container.innerHTML = this.renderActiveCatalog(this.getSkills(), this.getArtifacts(), this.getPersonas(), this.getAxioms());
      this.updateLiveCounter();
    }
  },

  filterCategory(val) {
    this.searchQuery = val || '';
    this.render(document.getElementById('mainStage'));
  },

  resetFilters() {
    this.currentCategory = 'all';
    this.currentPhaseFilter = 'all';
    this.currentRungFilter = 'all';
    this.sortBy = 'alpha';
    this.searchQuery = '';
    this.render(document.getElementById('mainStage'));
  },

  highlightText(str) {
    const safe = String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    if (!this.searchQuery || !this.searchQuery.trim()) return safe;
    const q = this.searchQuery.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    try {
      const regex = new RegExp(`(${q})`, 'gi');
      return safe.replace(regex, '<mark class="zip-hl">$1</mark>');
    } catch (e) {
      return safe;
    }
  },

  getSkill(id) {
    const skills = this.getSkills();
    return skills.find(s => s.id === id) || { id, name: id };
  },

  getArtifact(id) {
    const artifacts = this.getArtifacts();
    const a = artifacts[id] || { id, title: id };
    return {
      id: id,
      name: a.title || id,
      category: 'Formal Architecture Schema Artifact',
      description: a.description || a.desc || 'Formal contract artifact schema.',
      ...a
    };
  },

  getPersona(id) {
    const personas = this.getPersonas();
    const p = personas.find(x => x.id === id) || { id, name: id };
    return {
      id: p.id,
      name: p.name,
      category: `${p.category} · ${p.rung}`,
      description: `<pre style="white-space:pre-wrap;font-family:var(--font-body);font-size:0.83rem;line-height:1.5">${p.rawObj ? p.rawObj.raw : p.description}</pre>`,
      acting_personas: [p.name]
    };
  },

  getAxiom(id) {
    const axioms = this.getAxioms();
    const a = axioms.find(x => x.id === id) || { id, title: id };
    return {
      id: a.id,
      name: `Axiom ${a.id}: ${a.title}`,
      category: `Constitutional Axiom (${a.tag || 'Core'})`,
      description: `
        <p><strong>Constitutional Mandate:</strong> ${a.mandate}</p>
        <p><strong>Architectural Rationale (Why):</strong> ${a.why}</p>
        <div class="card" style="background:#FFF1F2;border-color:#E11D48;margin-top:0.8rem">
          <strong style="color:#881337">Falsifier / Violation Trigger:</strong>
          <p style="margin:0.25rem 0 0;color:#881337;font-size:0.84rem">${a.falsifier}</p>
        </div>
      `
    };
  },

  escapeAttr(str) {
    return String(str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
};
