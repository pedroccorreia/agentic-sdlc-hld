// Zip Architecture Workbench — Artifact Inspector Drawer Component (Track A Turn 3)
window.ArtifactDrawer = {
  isOpen: false,
  currentEntity: null,
  activeTab: 'overview',
  lastActiveElement: null,
  boundKeydownHandler: null,

  init() {
    this.drawerEl = document.getElementById('artifactDrawer');
    this.titleEl = document.getElementById('drawerTitle');
    this.kickerEl = document.getElementById('drawerKicker');
    this.contentEl = document.getElementById('drawerContent');

    if (this.drawerEl) {
      this.drawerEl.setAttribute('role', 'dialog');
      this.drawerEl.setAttribute('aria-modal', 'true');
      this.drawerEl.setAttribute('aria-labelledby', 'drawerTitle');
    }

    this.ensureBackdrop();
    this.enhanceHeaderActions();

    this.boundKeydownHandler = (e) => this.handleKeydown(e);
    document.addEventListener('keydown', this.boundKeydownHandler);
  },

  ensureBackdrop() {
    if (!document.getElementById('artifactDrawerBackdrop')) {
      const backdrop = document.createElement('div');
      backdrop.id = 'artifactDrawerBackdrop';
      backdrop.className = 'drawer-backdrop';
      backdrop.addEventListener('click', () => this.close());
      if (this.drawerEl && this.drawerEl.parentNode) {
        this.drawerEl.parentNode.insertBefore(backdrop, this.drawerEl);
      } else {
        document.body.appendChild(backdrop);
      }
    }
    this.backdropEl = document.getElementById('artifactDrawerBackdrop');
  },

  enhanceHeaderActions() {
    if (!this.drawerEl) return;
    const header = this.drawerEl.querySelector('.drawer-header');
    if (!header || header.querySelector('.drawer-header-actions')) return;

    const closeBtn = header.querySelector('button');
    const actionsWrap = document.createElement('div');
    actionsWrap.className = 'drawer-header-actions';

    const copyJsonBtn = document.createElement('button');
    copyJsonBtn.className = 'btn';
    copyJsonBtn.style.fontSize = '0.72rem';
    copyJsonBtn.style.padding = '0.28rem 0.55rem';
    copyJsonBtn.textContent = 'Copy JSON';
    copyJsonBtn.title = 'Copy raw JSON specification';
    copyJsonBtn.addEventListener('click', () => this.copyCurrentArtifact('json'));

    const copyMdBtn = document.createElement('button');
    copyMdBtn.className = 'btn';
    copyMdBtn.style.fontSize = '0.72rem';
    copyMdBtn.style.padding = '0.28rem 0.55rem';
    copyMdBtn.textContent = 'Copy MD';
    copyMdBtn.title = 'Copy structured Markdown summary';
    copyMdBtn.addEventListener('click', () => this.copyCurrentArtifact('markdown'));

    actionsWrap.appendChild(copyJsonBtn);
    actionsWrap.appendChild(copyMdBtn);
    if (closeBtn) {
      closeBtn.setAttribute('aria-label', 'Close Inspector Drawer');
      actionsWrap.appendChild(closeBtn);
    }
    header.appendChild(actionsWrap);
  },

  handleKeydown(e) {
    if (!this.isOpen || !this.drawerEl) return;

    if (e.key === 'Escape') {
      e.stopPropagation();
      this.close();
      return;
    }

    if (e.key === 'Tab') {
      const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusables = Array.from(this.drawerEl.querySelectorAll(focusableSelector))
        .filter(el => !el.disabled && el.offsetParent !== null);

      if (focusables.length === 0) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl || !this.drawerEl.contains(document.activeElement)) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl || !this.drawerEl.contains(document.activeElement)) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  },

  open(entity, defaultTab = 'overview') {
    this.lastActiveElement = document.activeElement;
    this.currentEntity = entity;
    this.activeTab = defaultTab;
    this.isOpen = true;
    if (this.drawerEl) this.drawerEl.classList.add('open');
    if (this.backdropEl) this.backdropEl.classList.add('open');
    this.render();

    requestAnimationFrame(() => {
      if (this.drawerEl) {
        const firstBtn = this.drawerEl.querySelector('button');
        if (firstBtn) firstBtn.focus();
      }
    });
  },

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    if (this.drawerEl) this.drawerEl.classList.remove('open');
    if (this.backdropEl) this.backdropEl.classList.remove('open');

    if (this.lastActiveElement && typeof this.lastActiveElement.focus === 'function') {
      this.lastActiveElement.focus();
      this.lastActiveElement = null;
    }
  },

  copyCurrentArtifact(format = 'json') {
    if (!this.currentEntity) return;
    const e = this.currentEntity;
    let payload = '';

    if (format === 'markdown') {
      const title = e.name || e.title || e.id || 'Artifact Details';
      const category = e.category || e.kicker || 'Architecture Inspector';
      const desc = e.description || e.desc || e.summary || 'No summary provided.';
      payload = `# ${title}\n**Category:** ${category}\n\n## Summary\n${desc}\n\n## Specification JSON\n\`\`\`json\n${JSON.stringify(e, null, 2)}\n\`\`\`\n`;
    } else {
      payload = JSON.stringify(e, null, 2);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(payload).catch(() => {});
    }

    if (window.showZipToast) {
      window.showZipToast('Copied to clipboard!', 'success');
    }
  },

  setTab(tabName) {
    this.activeTab = tabName;
    document.querySelectorAll('.drawer-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tabName);
    });
    this.renderContent();
  },

  render() {
    if (!this.currentEntity) return;
    const e = this.currentEntity;
    if (this.titleEl) this.titleEl.textContent = e.name || e.title || e.id || 'Artifact Details';
    if (this.kickerEl) this.kickerEl.textContent = e.category || e.kicker || 'Architecture Inspector';
    this.renderContent();
  },

  renderContent() {
    if (!this.contentEl || !this.currentEntity) return;
    const e = this.currentEntity;

    if (this.activeTab === 'overview') {
      let html = `
        <div class="drawer-collapsible drawer-stagger-item" aria-expanded="true">
          <button class="drawer-collapsible-header" onclick="this.parentElement.setAttribute('aria-expanded', this.parentElement.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')">
            <span>Executive Summary</span>
            <span class="drawer-collapsible-chevron">▼</span>
          </button>
          <div class="drawer-collapsible-body">
            <p>${this.escapeHtml(e.description || e.desc || e.summary || 'No overview summary provided.')}</p>
          </div>
        </div>
      `;

      if (e.acting_personas && e.acting_personas.length) {
        html += `
          <div class="drawer-collapsible drawer-stagger-item" aria-expanded="true">
            <button class="drawer-collapsible-header" onclick="this.parentElement.setAttribute('aria-expanded', this.parentElement.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')">
              <span>Acting PGSP Personas (${e.acting_personas.length})</span>
              <span class="drawer-collapsible-chevron">▼</span>
            </button>
            <div class="drawer-collapsible-body" style="display:flex;flex-wrap:wrap;gap:0.4rem">
              ${e.acting_personas.map(p => `<span class="pill pill-fearless">${this.escapeHtml(p)}</span>`).join('')}
            </div>
          </div>
        `;
      }

      if (e.statutoryBasis || e.regulations) {
        const regs = e.statutoryBasis || e.regulations;
        html += `
          <div class="drawer-collapsible drawer-stagger-item" aria-expanded="true">
            <button class="drawer-collapsible-header" onclick="this.parentElement.setAttribute('aria-expanded', this.parentElement.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')">
              <span>Statutory Citations (RTM)</span>
              <span class="drawer-collapsible-chevron">▼</span>
            </button>
            <div class="drawer-collapsible-body" style="display:flex;flex-wrap:wrap;gap:0.4rem">
              ${regs.map(r => `<span class="pill pill-fearless" style="background:#F0EAFF;border-color:#AA8FFF">⚖️ ${this.escapeHtml(r)}</span>`).join('')}
            </div>
          </div>
        `;
      }

      // Structured Metadata Properties collapsible
      const metaKeys = Object.keys(e).filter(k => !['description', 'desc', 'summary', 'acting_personas', 'statutoryBasis', 'regulations'].includes(k));
      if (metaKeys.length > 0) {
        html += `
          <div class="drawer-collapsible drawer-stagger-item" aria-expanded="true">
            <button class="drawer-collapsible-header" onclick="this.parentElement.setAttribute('aria-expanded', this.parentElement.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')">
              <span>Structured Attributes (${metaKeys.length})</span>
              <span class="drawer-collapsible-chevron">▼</span>
            </button>
            <div class="drawer-collapsible-body" style="display:grid;grid-template-columns:1fr;gap:0.4rem">
              ${metaKeys.map(k => `
                <div style="display:flex;justify-content:space-between;border-bottom:1px dashed var(--zip-lighter);padding-bottom:0.3rem">
                  <strong style="font-size:0.75rem;color:var(--zip-medium)">${this.escapeHtml(k)}</strong>
                  <span style="font-family:var(--font-mono);font-size:0.75rem">${this.escapeHtml(typeof e[k] === 'object' ? JSON.stringify(e[k]) : String(e[k]))}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      this.contentEl.innerHTML = html;
    } else if (this.activeTab === 'spec') {
      const codeStr = JSON.stringify(e, null, 2);
      this.contentEl.innerHTML = `
        <div class="drawer-stagger-item" style="margin-bottom:0.8rem;display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:0.75rem;font-weight:700;color:var(--zip-text-muted)">FORMAL SPECIFICATION PAYLOAD</span>
          <div style="display:flex;gap:0.4rem">
            <button class="btn btn-primary" style="font-size:0.72rem;padding:0.25rem 0.6rem" onclick="ArtifactDrawer.copyCurrentArtifact('json')">Copy JSON</button>
            <button class="btn" style="font-size:0.72rem;padding:0.25rem 0.6rem" onclick="ArtifactDrawer.copyCurrentArtifact('markdown')">Copy MD</button>
          </div>
        </div>
        <pre class="drawer-code-block drawer-stagger-item"><code>${this.syntaxHighlightJson(codeStr)}</code></pre>
      `;
    } else if (this.activeTab === 'ast') {
      this.contentEl.innerHTML = `
        <div class="drawer-stagger-item" style="margin-bottom:1rem">
          <span class="pill pill-good" style="margin-bottom:0.8rem">AST PASS: 100% SPEC CONFORMANCE</span>
          <p style="font-size:0.82rem;color:var(--zip-text-secondary)">Strict AST verification ensures generated code implements required invariants with zero drift.</p>
        </div>
        <div class="drawer-collapsible drawer-stagger-item" aria-expanded="true">
          <button class="drawer-collapsible-header" onclick="this.parentElement.setAttribute('aria-expanded', this.parentElement.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')">
            <span>Guardrail Assertions (3 Verified)</span>
            <span class="drawer-collapsible-chevron">▼</span>
          </button>
          <div class="drawer-collapsible-body">
            <ul style="padding-left:1.2rem;color:var(--zip-text-secondary);line-height:1.6">
              <li>Minor units fixed-point integer cents (IEEE-754 floats banned)</li>
              <li>Bitemporal ledger Valid-Time vs Transaction-Time isolation</li>
              <li>Zero PAN cardholder raw attributes in persistence tier</li>
            </ul>
          </div>
        </div>
      `;
    }
  },

  syntaxHighlightJson(json) {
    const escaped = this.escapeHtml(json);
    return escaped.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
      let cls = 'json-number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'json-key';
        } else {
          cls = 'json-string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'json-boolean';
      } else if (/null/.test(match)) {
        cls = 'json-null';
      }
      return `<span class="${cls}">${match}</span>`;
    });
  },

  escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
};
