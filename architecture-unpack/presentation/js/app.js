// Zip Architecture Workbench — Core Application Controller & Router (Track A Turn 3)
window.App = {
  currentView: 'storyline',
  toastContainer: null,

  init() {
    this.ensureMicroInteractionsStylesheet();
    this.ensureToastContainer();
    this.ensureShortcutModal();
    this.enhanceHeaderActions();
    ArtifactDrawer.init();
    this.bindEvents();
    this.routeFromHash();
  },

  ensureMicroInteractionsStylesheet() {
    if (!document.querySelector('link[href*="zip-micro-interactions.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/zip-micro-interactions.css';
      document.head.appendChild(link);
    }
  },

  ensureToastContainer() {
    if (!document.getElementById('zipToastContainer')) {
      const container = document.createElement('div');
      container.id = 'zipToastContainer';
      container.className = 'zip-toast-container';
      document.body.appendChild(container);
    }
    this.toastContainer = document.getElementById('zipToastContainer');
  },

  enhanceHeaderActions() {
    const headerActions = document.querySelector('.header-actions');
    if (headerActions && !document.getElementById('headerShortcutsBtn')) {
      const btn = document.createElement('button');
      btn.id = 'headerShortcutsBtn';
      btn.className = 'btn';
      btn.title = 'Keyboard Shortcuts (?)';
      btn.innerHTML = '⌨️ Shortcuts <span class="kbd-badge" style="margin-left:0.2rem">?</span>';
      btn.addEventListener('click', () => this.toggleShortcutModal());
      headerActions.insertBefore(btn, headerActions.firstChild);
    }
  },

  ensureShortcutModal() {
    if (!document.getElementById('shortcutModalBackdrop')) {
      const backdrop = document.createElement('div');
      backdrop.id = 'shortcutModalBackdrop';
      backdrop.className = 'shortcut-modal-backdrop';
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.toggleShortcutModal(false);
      });
      backdrop.innerHTML = `
        <div class="shortcut-modal" role="dialog" aria-modal="true" aria-labelledby="shortcutModalTitle">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.8rem">
            <h3 id="shortcutModalTitle" style="font-size:1.1rem">Keyboard Navigation &amp; Shortcuts</h3>
            <button class="btn btn-icon" onclick="App.toggleShortcutModal(false)" aria-label="Close Shortcuts Modal">✕</button>
          </div>
          <p style="font-size:0.8rem;color:var(--zip-text-muted)">Navigate the Zip Agentic Factory workbench with zero latency.</p>
          <div class="shortcut-grid">
            <div class="shortcut-row"><span>Switch to Executive Storyline</span><span class="kbd-badge">1</span></div>
            <div class="shortcut-row"><span>Switch to SDLC Phases</span><span class="kbd-badge">2</span></div>
            <div class="shortcut-row"><span>Switch to Skills &amp; Artifacts Registry</span><span class="kbd-badge">3</span></div>
            <div class="shortcut-row"><span>Switch to Day in the Life Simulator</span><span class="kbd-badge">4</span></div>
            <div class="shortcut-row"><span>Switch to Project Plan &amp; Roadmap</span><span class="kbd-badge">5</span></div>
            <div class="shortcut-row"><span>Focus Registry Search or Quick Command Palette</span><span class="kbd-badge">/</span></div>
            <div class="shortcut-row"><span>Toggle Keyboard Shortcuts Cheat-Sheet</span><span class="kbd-badge">?</span></div>
            <div class="shortcut-row"><span>Close Active Drawer or Modal</span><span class="kbd-badge">ESC</span></div>
          </div>
        </div>
      `;
      document.body.appendChild(backdrop);
    }
  },

  bindEvents() {
    window.addEventListener('hashchange', () => this.routeFromHash());
    document.addEventListener('keydown', (e) => {
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
      const isInput = tag === 'input' || tag === 'textarea' || (e.target && e.target.isContentEditable);

      if (e.metaKey && e.key === 'k') {
        e.preventDefault();
        this.toggleSearch();
        return;
      }

      if (e.key === 'Escape') {
        ArtifactDrawer.close();
        this.closeSearch();
        this.toggleShortcutModal(false);
        return;
      }

      if (isInput) return;

      if (e.key === '1') {
        this.switchView('storyline', true);
      } else if (e.key === '2') {
        this.switchView('pipeline', true);
      } else if (e.key === '3') {
        this.switchView('registry', true);
      } else if (e.key === '4') {
        this.switchView('simulator', true);
      } else if (e.key === '5') {
        this.switchView('planning', true);
      } else if (e.key === '/') {
        e.preventDefault();
        this.handleQuickSearchShortcut();
      } else if (e.key === '?') {
        e.preventDefault();
        this.toggleShortcutModal();
      }
    });
  },

  handleQuickSearchShortcut() {
    const registryInput = document.getElementById('registrySearchInput') ||
      (this.currentView === 'registry' ? document.querySelector('#mainStage input[type="text"], #mainStage input[type="search"]') : null);
    if (registryInput) {
      registryInput.focus();
      if (window.showZipToast) {
        window.showZipToast('Focused Registry Search', 'shortcut');
      }
    } else {
      this.toggleSearch();
    }
  },

  switchView(viewName, fromShortcut = false) {
    const isSameView = this.currentView === viewName && document.getElementById('mainStage')?.children.length > 0;
    this.currentView = viewName;
    if (location.hash !== `#${viewName}`) {
      history.replaceState(null, '', `#${viewName}`);
    }
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.view === viewName);
    });

    const stage = document.getElementById('mainStage');
    if (!stage) return;

    if (!isSameView) {
      stage.classList.add('view-transitioning');
      setTimeout(() => {
        stage.classList.remove('view-transitioning');
      }, 150);
    }

    if (viewName === 'storyline') {
      StorylineView.render(stage);
    } else if (viewName === 'pipeline') {
      PipelineView.render(stage);
    } else if (viewName === 'registry') {
      RegistryView.render(stage);
    } else if (viewName === 'simulator') {
      SimulatorView.render(stage);
    } else if (viewName === 'planning') {
      PlanningView.render(stage);
    }

    if (fromShortcut && window.showZipToast) {
      const labels = {
        storyline: 'Executive Storyline (1)',
        pipeline: 'SDLC Phases (2)',
        registry: 'Skills & Artifacts Registry (3)',
        simulator: 'Day in the Life Simulator (4)',
        planning: 'Project Plan & Roadmap (5)'
      };
      window.showZipToast(`Switched to ${labels[viewName] || viewName}`, 'shortcut');
    }
  },

  routeFromHash() {
    const hash = (location.hash || '').replace('#', '');
    if (['storyline', 'pipeline', 'registry', 'simulator', 'planning'].includes(hash)) {
      this.switchView(hash);
    } else if (hash.startsWith('s') && !isNaN(hash.slice(1))) {
      this.switchView('storyline');
      StorylineView.currentIndex = parseInt(hash.slice(1), 10) - 1;
      StorylineView.render(document.getElementById('mainStage'));
    } else {
      this.switchView('storyline');
    }
  },

  toggleShortcutModal(forceState) {
    const backdrop = document.getElementById('shortcutModalBackdrop');
    if (!backdrop) return;
    const isOpen = typeof forceState === 'boolean' ? forceState : !backdrop.classList.contains('open');
    backdrop.classList.toggle('open', isOpen);
  },

  toggleTheme() {
    document.body.classList.toggle('theme-dark');
  },

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  },

  toggleSearch() {
    const el = document.getElementById('searchModal');
    if (el) {
      el.classList.toggle('open');
      if (el.classList.contains('open')) {
        const input = el.querySelector('.search-input');
        if (input) input.focus();
      }
    }
  },

  closeSearch() {
    const el = document.getElementById('searchModal');
    if (el) el.classList.remove('open');
  }
};

window.showZipToast = function(message, type = 'info') {
  if (!window.App.toastContainer) {
    window.App.ensureToastContainer();
  }
  const toast = document.createElement('div');
  toast.className = 'zip-toast';
  const badgeText = type === 'success' ? 'Done' : type === 'shortcut' ? 'Key' : 'Zip';
  toast.innerHTML = `<span class="zip-toast-badge">${badgeText}</span><span>${message}</span>`;
  window.App.toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  let dismissTimer = null;
  const startTimer = () => {
    dismissTimer = setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 180);
    }, 2400);
  };

  toast.addEventListener('mouseenter', () => {
    if (dismissTimer) clearTimeout(dismissTimer);
  });
  toast.addEventListener('mouseleave', () => {
    startTimer();
  });

  startTimer();
};

document.addEventListener('DOMContentLoaded', () => App.init());


// Project Plan & Roadmap integration bridges
window.openExplorerSection = function(section, subtab) {
  if (section === 'planning' || section === 'roadmap' || section === 'raci' || section === 'sow') {
    App.switchView('planning');
    if (window.PlanningView && subtab) {
      window.PlanningView.switchTab(subtab);
    } else if (window.PlanningView && section !== 'planning') {
      window.PlanningView.switchTab(section);
    }
  }
};

window.switchSection = function(section, subtab) {
  if (section === 'planning' || section === 'sec-planning') {
    App.switchView('planning');
    if (window.PlanningView && subtab) {
      window.PlanningView.switchTab(subtab);
    }
  }
};
