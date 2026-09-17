# DESIGN.md — OpenDesign Brand System Contract (v2.0)

> **Contract Status:** `LOCKED & ENFORCED (WCAG 2.1 Level AAA Verified: 8.72:1 to 18.98:1)`  
> **System Identity:** Official 2024 Zip Merchant Brand Guidelines v2.0 · Executive Architecture Workbench  
> **Specification Standard:** `od-design-md` / `od-brand-guidelines` / `od-design-review`  
> **Primary Canvas:** `#FFFFFA` (Control White) · **Primary Ink:** `#1A0826` (Confidence Aubergine)

---

## 1. Brand Philosophy & Executive Design Direction

The **Zip Agentic Factory Architecture Workbench** embodies the **Official 2024 Zip Merchant Brand Guidelines v2.0** (`https://zip.co/nz/assets/merchant-guidelines-2024.pdf`). The design system fuses institutional financial rigor (**Confidence**) with autonomous engineering velocity (**Fearlessness**) atop a warm, distraction-free operational canvas (**Control**).

### Core Architectural Design Principles
1. **Cent-for-Cent Mathematical Precision:** Every UI card, ledger table, bitemporal timeline, and AST diff block is engineered for zero ambiguity and immediate executive comprehension.
2. **Strict WCAG 2.1 Level AAA Contrast Hardening:** Every single text-bearing foreground-to-background pairing strictly exceeds the **7.0:1** AAA standard, with all production text pairings mathematically proven between **8.72:1 and 18.98:1** (exceeding the target **8.5:1 to 15.6:1+** executive envelope).
3. **Zero Vendor Lock-In & Pure Google Cloud Native:** All architectural diagrams, model routing topologies, and specification contracts exclusively reflect Google Cloud Platform (`Vertex AI`, `Gemini 1.5 Pro`, `Gemini 1.5 Flash`, `Cloud Run`, `Cloud Spanner / AlloyDB`) with zero third-party vendor leaks.

---

## 2. Official 2024 Zip Brand Palette & Semantic Tokens

### 2.1 Core Palette (Primary Tri-Tone Foundation — PDF Page 6)

| Token Name | CSS Custom Property | Hex Value | RGB | Role & Architectural Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Control** | `--zip-control` | `#FFFFFA` | `rgb(255, 255, 250)` | Warm Alabaster Control White — Primary application canvas & active tab surface |
| **Confidence** | `--zip-confidence` | `#1A0826` | `rgb(26, 8, 38)` | Deep Aubergine Confidence Dark — Primary ink, headings, code wells, & high-contrast badges |
| **Fearlessness** | `--zip-fearlessness` | `#AA8FFF` | `rgb(170, 143, 255)` | Signature Lilac Violet — Brand logomark accent, active borders, & progress fills |

### 2.2 Fearless Tints & Accessible Structural Ramp

| Token Name | CSS Custom Property | Hex Value | Role & Architectural Usage |
| :--- | :--- | :--- | :--- |
| **Lightest** | `--zip-lightest` | `#EDE6FF` | Left navigation rail surface, subtle tag fills, & hover backgrounds |
| **Lighter** | `--zip-lighter` | `#DBCCFF` | Structural 1px hairline borders, card dividers, & table rules |
| **Light** | `--zip-light` | `#C9B3FF` | Secondary interactive hover states & dark-theme accent highlights |
| **Accessible CTA Lilac** | `--zip-cta-fill` | `#B8A2FF` | Fearless Interactive Button Fill (`#1A0826` text on `#B8A2FF` yields **8.72:1** AAA contrast) |
| **Medium (Brand Focus Ring)** | `--zip-focus-ring` | `#6542BE` | Canonical Brand Medium Iris for crisp 2px `:focus-visible` outlines (`outline: 2px solid #6542BE`) |
| **Hardened Medium Text** | `--zip-medium` | `#44268C` | Hardened Iris Violet for text labels & badges (**11.01:1** on `#FFFFFA`, **9.13:1** on `#EDE6FF`) |
| **Dark** | `--zip-dark` | `#411361` | Dark Plum elevated surfaces, executive hero gradients, & dark cards |
| **Accessible Secondary Text** | `--zip-text-secondary` | `#462B54` | Official Deep Plum secondary body copy, lede paragraphs, & table descriptions |
| **Accessible Muted Text** | `--zip-text-muted` | `#4D335B` | Hardened muted captions, timestamps, and metadata labels (**10.79:1** on `#FFFFFA`, **8.95:1** on `#EDE6FF`) |
| **Badge Deep Iris** | `--zip-badge-text` | `#2F1563` | Deep Royal Iris for `.nav-badge` counters on `#DBCCFF` (**10.01:1** AAA contrast) |

### 2.3 Semantic Status & Architectural Alert Tokens

| State | Foreground Token | Background Token | Border Token | Measured Ratio |
| :--- | :--- | :--- | :--- | :--- |
| **Phase Gap / Alert (Red)** | `#7A0D29` (`--zip-gap-text`) | `#FFF1F2` (`--zip-gap-bg`) | `#E11D48` (`--zip-gap-red`) | **9.97 : 1** (AAA) |
| **Verified / Parity (Green)** | `#044332` (`--zip-good-text`) | `#ECFDF5` (`--zip-good-bg`) | `#059669` (`--zip-good-green`) | **10.75 : 1** (AAA) |

---

## 3. WCAG AAA Contrast Verification Matrix (8.72:1 to 18.98:1 Proven)

Every text-bearing color combination in the Zip Architecture Workbench has been mathematically audited against relative luminance ($L$) formulas under WCAG 2.1 Level AAA standards:

$$\text{Contrast Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05}$$

| Foreground Element | Foreground Hex | Background Surface | Background Hex | Measured Ratio | WCAG AAA Status (≥7.0:1) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Ink (`--zip-confidence`)** | `#1A0826` | Card Surface (`--zip-card-bg`) | `#FFFFFF` | **18.98 : 1** | ✅ **PASS (AAA)** |
| **Primary Ink (`--zip-confidence`)** | `#1A0826` | Control Canvas (`--zip-control`) | `#FFFFFA` | **18.92 : 1** | ✅ **PASS (AAA)** |
| **Code Block Text (`--zip-code-text`)** | `#F3EDFC` | Code Well (`--zip-code-bg`) | `#1A0826` | **16.56 : 1** | ✅ **PASS (AAA)** |
| **Primary Ink (`--zip-confidence`)** | `#1A0826` | Navigation Rail (`--zip-lightest`) | `#EDE6FF` | **15.69 : 1** | ✅ **PASS (AAA)** |
| **Secondary Text (`--zip-text-secondary`)** | `#462B54` | Card Surface (`--zip-card-bg`) | `#FFFFFF` | **12.11 : 1** | ✅ **PASS (AAA)** |
| **Secondary Text (`--zip-text-secondary`)** | `#462B54` | Control Canvas (`--zip-control`) | `#FFFFFA` | **12.07 : 1** | ✅ **PASS (AAA)** |
| **Title Slide Lede (`#EDE6FF`)** | `#EDE6FF` | Title Hero Dark Plum (`--zip-dark`) | `#411361` | **11.65 : 1** | ✅ **PASS (AAA)** |
| **Hardened Medium Accent (`--zip-medium`)** | `#44268C` | Card Surface (`--zip-card-bg`) | `#FFFFFF` | **11.05 : 1** | ✅ **PASS (AAA)** |
| **Hardened Medium Accent (`--zip-medium`)** | `#44268C` | Control Canvas (`--zip-control`) | `#FFFFFA` | **11.01 : 1** | ✅ **PASS (AAA)** |
| **Hardened Muted Text (`--zip-text-muted`)** | `#4D335B` | Card Surface (`--zip-card-bg`) | `#FFFFFF` | **10.83 : 1** | ✅ **PASS (AAA)** |
| **Hardened Muted Text (`--zip-text-muted`)** | `#4D335B` | Control Canvas (`--zip-control`) | `#FFFFFA` | **10.79 : 1** | ✅ **PASS (AAA)** |
| **Verified Green Text (`--zip-good-text`)** | `#044332` | Good Alert Surface (`--zip-good-bg`) | `#ECFDF5` | **10.75 : 1** | ✅ **PASS (AAA)** |
| **Primary Ink (`--zip-confidence`)** | `#1A0826` | Secondary Hover (`--zip-light`) | `#C9B3FF` | **10.28 : 1** | ✅ **PASS (AAA)** |
| **Nav Badge Text (`--zip-badge-text`)** | `#2F1563` | Navigation Badge Fill (`--zip-lighter`) | `#DBCCFF` | **10.01 : 1** | ✅ **PASS (AAA)** |
| **Secondary Text (`--zip-text-secondary`)** | `#462B54` | Navigation Rail (`--zip-lightest`) | `#EDE6FF` | **10.01 : 1** | ✅ **PASS (AAA)** |
| **Phase Gap Red Text (`--zip-gap-text`)** | `#7A0D29` | Gap Alert Surface (`--zip-gap-bg`) | `#FFF1F2` | **9.97 : 1** | ✅ **PASS (AAA)** |
| **Hardened Medium Accent (`--zip-medium`)** | `#44268C` | Fearless Pill Fill (`--zip-lightest`) | `#EDE6FF` | **9.13 : 1** | ✅ **PASS (AAA)** |
| **Hardened Muted Text (`--zip-text-muted`)** | `#4D335B` | Navigation Rail (`--zip-lightest`) | `#EDE6FF` | **8.95 : 1** | ✅ **PASS (AAA)** |
| **Primary Ink (`--zip-confidence`)** | `#1A0826` | Primary Lilac CTA (`--zip-cta-fill`) | `#B8A2FF` | **8.72 : 1** | ✅ **PASS (AAA)** |
| **Dark Mode Primary Text** | `#FAF8FF` | Dark Control Canvas (`#12051B`) | `#12051B` | **18.75 : 1** | ✅ **PASS (AAA)** |
| **Dark Mode Secondary Text** | `#DFD2F0` | Dark Card Surface (`#1A0826`) | `#1A0826` | **13.21 : 1** | ✅ **PASS (AAA)** |
| **Dark Mode Medium Accent** | `#D5C4FF` | Dark Card Surface (`#1A0826`) | `#1A0826` | **11.90 : 1** | ✅ **PASS (AAA)** |
| **Dark Mode Nav Badge** | `#EDE6FF` | Dark Badge Surface (`#3B1B54`) | `#3B1B54` | **11.81 : 1** | ✅ **PASS (AAA)** |
| **Dark Mode Muted Text** | `#C7B6DC` | Dark Card Surface (`#1A0826`) | `#1A0826` | **10.08 : 1** | ✅ **PASS (AAA)** |

---

## 4. Typography & Structural Hierarchy

The typography system pairs a high-impact geometric grotesque display face with a precision monospace typeface for financial ledgers and AST conformance trees.

### 4.1 Display & UI Typeface: `Plus Jakarta Sans`
- **Brand Role:** Structural geometric grotesque equivalent to **Sharp Grotesk 25 / Cooper Hewitt** (Everyday Voice Aesthetic).
- **Weights & Usage:**
  - `800 (ExtraBold)`: Executive slide headers (`h1`, `h2`), KPI counters, and navigation titles (`letter-spacing: -0.025em`).
  - `700 (Bold)`: Section sub-headings (`h3`), active navigation items, and interactive pill badges.
  - `600 (SemiBold)`: Interactive buttons, drawer tabs, and table column headers.
  - `500 (Medium)`: Metadata subtitles, card descriptions, and status banners.
  - `400 (Regular)`: Long-form specification prose and body paragraphs (`line-height: 1.6`).

### 4.2 Code & Financial Ledger Typeface: `JetBrains Mono`
- **Brand Role:** Fixed-point mathematical proof, AST diff inspection, and bitemporal schema definitions.
- **Weights & Usage:**
  - `700 (Bold)` / `500 (Medium)`: Currency figures (`$0.00`), statutory citations (`12 CFR § 1026`), and JSON schema keys.

---

## 5. Signature Geometric Motif (`-7°` Forward Slant)

A defining visual signature of the Official 2024 Zip Brand System is the **`-7°` forward slant** (`transform: skewX(-7deg)`), derived directly from the angled "i" pocket in the Zip logomark.

- **CSS Token:** `--zip-angle: -7deg;`
- **Utility Class:** `.zip-slant-badge` / `.zip-toast-badge`
  - Uses `transform: skewX(-7deg)` on the container with `transform: skewX(7deg)` counter-skew on inner text/icons so typography remains optically razor-sharp while the container projects forward momentum.

---

## 6. Interactive Accessibility, Responsive Architecture & Print Hardening

### 6.1 Focus Ring Invariant
All interactive controls (`button`, `[role="tab"]`, `a`, `input`, `.phase-card`, `.search-item`, `.sim-preset-card`, `.slide-thumb-card`) enforce a high-visibility 2px focus ring:
```css
:focus-visible {
  outline: 2px solid #6542BE !important;
  outline-offset: 2px !important;
  box-shadow: 0 0 0 4px rgba(170, 143, 255, 0.35) !important;
}
```

### 6.2 Responsive Breakpoint Grid
- **Desktop (`> 1024px`):** Three-column workbench (`270px` Left Navigation Rail + Fluid Main Stage + `480px` Slide-Over Inspector Drawer).
- **Tablet (`≤ 1024px`):** Compact rail (`220px`), 4-column pipeline stepper grid, adaptive slide padding (`2.2rem`).
- **Mobile Tablet / Large Phone (`≤ 768px`):** Sticky horizontal top navigation bar, collapsible KPI strip, 2-column pipeline stepper, full-width slide stage, full-screen inspector drawer.
- **Compact Mobile (`≤ 480px`):** Single-column stacked cards, touch-friendly 44px minimum tap targets, condensed header actions.

### 6.3 Executive Print Stylesheet (`@media print`)
- Automatically hides UI chrome (`.top-header`, `.nav-sidebar`, `.artifact-drawer`, `.slide-controls`, `.deck-top-bar`, `.skip-link`, `.exec-footer`).
- Expands `.main-stage` and `.slide-box` to 100% landscape page width with crisp `#1A0826` borders and zero page-break clipping inside cards.

---

## 7. Three-Iteration Producer-Reviewer Audit Trail

### Iteration 1 (Foundation & Core OpenDesign Contract)
- **Producer Pass:** Created initial `DESIGN.md` v2.0 contract; added `.skip-link`, `:focus-visible` states (`outline: 2px solid #6542BE`), and `@media` responsive/print rules to `zip-workbench-theme.css`; upgraded `index.html` with `<link rel="stylesheet" href="css/zip-micro-interactions.css">`, ARIA roles (`tablist`, `tab`, `tabpanel`), header contract button, and executive footer.
- **Reviewer Critique:** Automated luminance audit revealed `.nav-badge` (`#4A2B96` on `#DBCCFF`) measured `6.78:1` (below the `7.0:1` WCAG AAA requirement) and identified unstyled dynamic classes in `storyline-view.js` (`.deck-top-bar`, `.slide-grid-modal`) and `simulator-view.js` (`.sim-playback-bar`) plus legacy inline hex colors injected by JS views.

### Iteration 2 (Component Hardening & Inline Override Shield)
- **Producer Pass:** Upgraded `.nav-badge` text to Deep Royal Iris (`#2F1563` on `#DBCCFF` = `10.01:1`); added CSS attribute selector shields (`[style*="color:#846D93"]`, `[style*="color:#6542BE"]`) to automatically promote dynamic JS inline styles to AAA contrast tokens; styled all `.deck-*` and `.sim-*` dynamic classes; harmonized `#contractModal` in `index.html` with Track A `.shortcut-modal` classes and added WAI-ARIA vertical tablist keyboard arrow navigation (`ArrowUp`/`ArrowDown`).
- **Reviewer Critique:** Verified `0` WCAG AAA contrast failures (`>= 7.0:1` across all 24 pairs). Identified opportunity to elevate the minimum contrast floor from `7.30:1` to `>8.5:1` across all primary buttons and muted text on tinted surfaces to satisfy the `8.5:1 to 15.6:1+` executive contrast envelope.

### Iteration 3 (Executive Polish & 8.72:1+ Floor Perfection)
- **Producer Pass:** Refined `--zip-medium` to `#44268C` (`9.13:1` on `#EDE6FF`, `11.01:1` on `#FFFFFA`), `--zip-text-muted` to `#4D335B` (`8.95:1` on `#EDE6FF`, `10.79:1` on `#FFFFFA`), and `--zip-cta-fill` to `#B8A2FF` (`8.72:1` with `#1A0826` ink); updated `DESIGN.md` and `index.html` contract modal with final verified luminance metrics (`8.72:1 to 18.98:1`).
- **Reviewer Sign-Off:** 100% WCAG 2.1 Level AAA compliance verified across all 24 light/dark pairings (`8.72:1` minimum floor); zero missing assets; zero vendor leaks in owned and active application files.
