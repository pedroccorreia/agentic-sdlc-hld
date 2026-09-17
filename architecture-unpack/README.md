# Zip Architecture — unpacked

**Five pages** of handwritten architecture notes (no text layer) turned into
editable, reusable artifacts — plus a presentation and a parking lot of open
items.

**Scan sources:** `zip arc1.pdf` (document page 1 — setup/environment and the
stages, supplied separately) and `zip  architecture.pdf` (document pages 2–5).

**Also cross-referenced —** the working corpus already in the project folder:
`zip_persona_catalogue.md`, `zip_prd.md`, `zip_fde_scope_notes.md`,
`zip_engagement_plan.md`, `zip_internal_agentic_factory.md`. Reading these
against the whiteboard **closed five open items and advanced five more**, and
surfaced four new ones. Deck slides marked *"from the working corpus"* draw on
these rather than the scans.

> `zip_adk_eval_deepdive.md` was deliberately **not** used. It records a Google
> product deep-dive — platform capability rather than Zip's architecture — and
> folding it into a read-back of Zip's own design would turn the deck into a
> pitch. Easy to add if an internal variant is wanted.

---

## Start here

| If you want to… | Open |
|---|---|
| **Present it** | [`presentation/index.html`](presentation/index.html) — double-click, no install |
| **Understand the architecture** | [`ARCHITECTURE.md`](ARCHITECTURE.md) — the synthesis |
| **Explore the 56 Skills Catalog & Matrix** | [`SKILLS_CATALOG.md`](SKILLS_CATALOG.md) — dual-layer catalog, dual-runtime sandboxing |
| **See what's unresolved** | [`PARKING_LOT.md`](PARKING_LOT.md) — 8 closed, 5 advanced, 4 newly raised |
| **Check a claim against the scan** | [`transcripts/`](transcripts/) — verbatim, one file per page |
| **Reuse the model in code** | [`data/artifacts.json`](data/artifacts.json) & [`data/skills_catalog.json`](data/skills_catalog.json) |
| **Edit a diagram** | [`diagrams/*.mmd`](diagrams/) — Mermaid source |
| **See how the deck was designed** | [`PRESENTATION_PLAN.md`](PRESENTATION_PLAN.md) |

---

## Layout

```
architecture-unpack/
├── README.md                  ← you are here
├── ARCHITECTURE.md            synthesis: the architecture as a coherent whole
├── SKILLS_CATALOG.md          master catalog: 56 skills, dual-runtime sandboxing (Agent Platform vs Cloud Run)
├── PARKING_LOT.md             33 open items + 3 closed, triaged by severity
├── PRESENTATION_PLAN.md       narrative arc, slide list, design rationale
│
├── transcripts/               VERBATIM record — one file per document page
│   ├── page-0-setup-and-stages.md        p1: environment, toolchain, MCP,
│   │                                         6 stages + gates, Q.1–Q.7
│   ├── page-1-artifacts.md               p2: artifacts A–E, metadata
│   ├── page-2-negotiation-and-agents.md  p3: Negotiation File, deps, agent & rating
│   ├── page-3-documentation-and-control.md  p4: doc loops, control plane
│   └── page-4-open-action-items.md       p5: the author's own open-items list
│
├── diagrams/                  EDITABLE diagram source (Mermaid)
│   ├── 01-artifact-dependencies.mmd
│   ├── 02-phase-pipeline.mmd
│   ├── 03-documentation-loops.mmd
│   ├── 04-control-plane.mmd
│   ├── 05-agent-registry.mmd
│   ├── 06-registry-entities.mmd    ← RECONSTRUCTED draft, not transcribed
│   ├── 07-setup-environment.mmd
│   └── 08-stages-with-gates.mmd
│
├── data/
│   └── artifacts.json         structured model: phases, artifacts, metadata,
│                              dependencies, agent model, control plane,
│                              setup/environment, human gates, Q.1–Q.7
│
├── presentation/
│   └── index.html             self-contained 23-slide deck
│
├── scans/                     page00–page04, extracted from both PDFs
└── _work/                     scratch (extraction + check scripts) — ignorable
```

> **Filename note:** transcript files keep their original `page-0…page-4`
> names (the order they were processed) while the *document* pages are 1–5.
> The mapping is in the table above and in each file's header.

---

## The transcription contract

Three layers, deliberately kept apart so you can challenge the interpretation
without losing the source of truth:

1. **`transcripts/`** — what is *written on the page*. Verbatim. Uncertain
   readings marked `‹?›` rather than guessed.
2. **`ARCHITECTURE.md` / `data/artifacts.json`** — the *synthesis*. Anywhere it
   reasons beyond the page it is marked **⟨inferred⟩** with a `PL-nn` pointer.
3. **`PARKING_LOT.md`** — everything unresolved, including the inferences.

One file breaks the pattern on purpose:
**`diagrams/06-registry-entities.mmd`** is a *reconstruction*, not a
transcription. The source contains no entity-relationship diagram — building one
is the top open action item. Every relationship in it needs confirming.

**The discipline paid off.** Two things flagged as inferences after the first
four pages — that phase (4) was probably `Review`, and that a page might be
missing — were both settled the moment page 1 arrived. Both flags were right.

---

## Headline findings

- **Six artifacts**, each registered, each tagged external or internal, with
  relational metadata chaining BRD → PRD → Project Assignment → reports.
- **Seven phases, all now named:** Specify → Dispatch → Generate → **Review** →
  Verify → Ship & Observe → Update Documentation, with **three explicit human
  gates**.
- **The Negotiation File** — a ledger of human↔agent disagreement — is the
  standout idea. Most agentic designs lose this in chat history.
- **Documentation is a closed loop**: phase 7 writes what phase 1 reads.
- **Agents are code**: a GitHub repo, promoted local → cloud, with
  Antigravity / VS Code / gcloud / Terraform as the toolchain, and **Cloud SQL +
  Cloud Storage** behind the registry.
- **The evaluation model is still the biggest gap.** Q.5 gives the principle —
  *user feedback + data-driven pass-tests* — but not the computation. Four other
  open items sit behind it.
- **The Skills Agent is resolved via Agent Plugins 1.0.0.** *"Skills Agent = Zip SDLC
  Principles"* is materialized as a versioned enterprise plugin suite conforming to
  the vendor-neutral **Agent Plugins 1.0.0** standard (Google, Amazon, Microsoft, OpenAI, Cursor, Vercel),
  with instructions, linting scripts, and MCP declarations locked cryptographically in `skills-lock.json`.
- **Blast radius is bounded by separating packaging from runtime auth.** Tools are declared
  portably in `mcp.json`, while GKE Control Plane Workload Identity injects least-privilege tokens
  at launch and restricts container egress. Database ops drop in Google's **Data Agent Kit** (Cloud SQL & BigQuery).

### From the working corpus

- **The persona work already exists** — six families, ~28 definitions, ~45
  running instances across five LMS domains, on the same stage numbering as the
  whiteboard. Three design principles underpin it, the sharpest being
  **author and judge are never the same persona**.
- **Every stage has a named oversight level**, and the split is meaningful:
  stages 1–3 are *human supervised* (authorised before the fact), stages 4–6 are
  *human verified* (confirmed against evidence after it).
- **"Shadow gate testing" is explained** — merged code mirrors live production
  traffic against the incumbent at scale with zero customer impact.
- **⚠ But the shadow gate has two missing sub-steps** — *side-effect
  suppression* and *state re-baselining*. On a system that moves money, without
  the first, mirrored traffic can fire real disbursements and collections;
  without the second, the divergence queue becomes noise within weeks and the
  gate silently stops meaning anything. **This is now the top open item.**
- **The two views are drifting apart.** The whiteboard is the artifact-and-control
  view, the corpus is the persona-and-process view — which is exactly the
  documentation-drift failure the architecture's own closed loop exists to
  prevent.

### Closed by the late-arriving page 1

| Was open | Now |
|---|---|
| Phase (4) never named | ✅ It is **Review** — produces score, feedback register, approve/not-approve |
| A page may be missing from the scan | ✅ **Nothing is missing.** The sheet labelled "Page 4" *is* document page 4 once page 1 is counted |
| Registry technology unstated | ✅ **Cloud SQL** (scoring runs) + **Cloud Storage** (artefacts) |

---

## Verification status

| Check | Result |
|---|---|
| All 5 pages extracted and transcribed | ✅ |
| `data/artifacts.json` parses; all 7 phases attested | ✅ |
| Deck: 28 slides, HTML tags balanced | ✅ |
| Deck: all `pill` style variants used are defined in CSS | ✅ |
| Deck: all image refs resolve, all SVG markers defined | ✅ |
| Deck: all SVG geometry within viewBox bounds | ✅ |
| Deck: no stale pre-page-1 content remaining | ✅ |
| **Deck: rendered screenshot / visual check** | ⚠️ **NOT DONE** |

> **⚠️ The deck has not been visually confirmed.** Headless rendering is blocked
> in this environment, so the checks above are structural and geometric rather
> than visual. **Open `presentation/index.html` in a browser before showing it
> to anyone.** It's plain HTML/CSS/SVG with no dependencies, so it should render
> anywhere — but it hasn't been seen.

---

## Using the deck

Open `presentation/index.html`. No build step, no server, no network.

| Key | Action |
|---|---|
| `→` `←` `space` | Navigate |
| `F` | Fullscreen |
| `S` | Speaker notes (every slide has them) |
| `O` | Slide overview / jump |
| `Home` `End` | First / last slide |

Print to PDF from the browser for a circulatable version.

**Palette note:** the purple/lime theme is a *Zip-inspired approximation*, not
official brand assets. The hexes are CSS custom properties at the top of the
file (`--zip-purple`, `--zip-lime`, …) — swap them in one place once the real
brand values are to hand.

---

## Next steps

Recommended order — these three unblock the most:

1. **Fix the shadow gate's two missing sub-steps** (PL-37). Promoted to the top
   after reading the corpus: side-effect suppression and state re-baselining.
   It fails *silently*, on a system that moves money.
2. **Finish the evaluation model** (PL-16 + Q.5). The principle is stated and
   the surrounding roles now exist; the scoring function does not. Standardize via Google
   **Agents CLI** eval plugins persisting to Cloud SQL.
3. **Specify the Skills Agent via Agent Plugins 1.0.0** (PL-36). Materialize house rules
   and domain invariants into the open **Agent Plugins 1.0.0** format, locked via
   `skills-lock.json`.

Then: run-level control of a Generate run (Q.3 — the biggest cost exposure, and
absent from both views) · authorisation scope across the MCP surface (PL-19 +
PL-35; resolved by keeping credentials in GKE Workload Identity, not `mcp.json`) · the ER model, now needing personas as first-class entities (PL-02 +
PL-38) · spec format (Q.1) · where documentation lives (Q.6).

**No longer needs deciding:** Q.2 (kill switch), Q.4 (disposable sandboxes) and
Q.7 (Gemini/Claude routing via Agent Plugins 1.0.0 + Vertex AI) are answered in
the working corpus — they need **building**, not deciding.
