# Presentation Plan — Zip Agentic Factory architecture

How the transcribed material becomes something you can stand in front of.

---

## 1. Audience & purpose

**Primary audience:** Zip stakeholders (Chris Nelms, Eric Blassberg and the
Project Catalyst working group) plus the Google FDE/CE side.

**Purpose:** this is a **read-back and gap-closing session**, not a pitch. The
deck's job is to prove we understood the whiteboard, then land the open
questions hard enough that decisions get made in the room.

That framing drives every design choice below. Specifically: **the gaps get
equal billing with the content.** A deck that only shows the pretty parts wastes
the meeting.

---

## 2. Narrative arc

Six movements, roughly 25–30 minutes with discussion:

| # | Movement | Beat | Slides |
|---|---|---|---|
| 1 | **"Here's what you drew"** | Establish faithful transcription. Earns the right to critique later. | 1–3 |
| 2 | **The process** | The 7-phase pipeline — and the hole where phase 4 should be. First gap, planted early. | 4 |
| 3 | **The artifacts** | Six artifacts, their metadata, how they chain. The substance of the design. | 5–9 |
| 4 | **The agents** | Agents as code, registry as routing table, ratings — and the evaluation gap. | 10–12 |
| 5 | **Running it** | Control plane, human-in-the-loop, observability, cost. | 13–14 |
| 6 | **The loop** | Documentation as a closed cycle — the quiet keystone. | 15 |
| 7 | **Honest assessment** | What's strong, what's missing, what to decide next. | 16–19 |

**The turn:** movements 1–6 build credit by being accurate and generous about
the design's real strengths. Movement 7 spends that credit on the gaps. Ending
on three concrete decisions gives the room something to actually do.

---

## 3. Slide list

| # | Slide | Content | Source |
|---|---|---|---|
| 1 | **Title** | Zip Agentic Factory — Architecture Read-Back | — |
| 2 | **Provenance** | 4 handwritten pages → editable artifacts. What we did. | all |
| 3 | **Four core ideas** | Artifact-first · registry backbone · disagreement is an artifact · docs close the loop | synthesis |
| 4 | **The pipeline** | 7 phases, with **(4) rendered as an explicit red gap** | p1, p3 |
| 5 | **Six artifacts** | Overview table, external vs internal | p1, p2 |
| 6 | **BRD → PRD** | The engineering contract: guardrails, test strategy, target tech, stack impact | p1 |
| 7 | **Assignment & reports** | Project Assignment, Build Report, Final Report + metadata | p1 |
| 8 | **Negotiation File** | The side-car ledger. Human↔agent disagreement made auditable. | p2 |
| 9 | **Dependency graph** | Solid = production, dashed = negotiation | p2 |
| 10 | **Agents as code** | Skills, Scripts, Agents.MD, github, local→cloud | p2 |
| 11 | **Registry = routing table** | `Use when`, deterministic selection, consumed by Project Assignment | p2 |
| 12 | **Rating model** | Quantitative + qualitative — **and what's undefined** | p2 |
| 13 | **Control plane** | Dispatch, approve gate, operator console with kill | p3 |
| 14 | **Observability & cost** | Cloud Logging/Monitoring → perf, token usage, errors | p3 |
| 15 | **Documentation loop** | Upstream + downstream legs, drift warning | p3 |
| 16 | **What's strong** | Six genuine strengths | synthesis |
| 17 | **What's missing** | Seven gaps, ranked | synthesis |
| 18 | **Parking lot** | The full open-items board, colour-coded by severity | p4 + synthesis |
| 19 | **Decide these three** | Evaluation model · phase 4 · platform basics | synthesis |
| 20 | **Appendix** | The original scans, for reference during discussion | all |

---

## 4. Design approach

**Format.** A single self-contained `index.html`. No build step, no server, no
network dependency — double-click and present. This matters for a customer
meeting: nothing to install, nothing to fail on someone else's laptop.

**Why not reveal.js / Marp?** Both need either a CDN fetch or a toolchain. A
hand-rolled deck is ~400 lines of CSS and ~40 of JS, and it can't break in a
room with bad wifi. The `.mmd` files remain the editable diagram source for
anyone who wants to regenerate them elsewhere.

**Diagrams.** Hand-authored **inline SVG**, not Mermaid-at-runtime — same
reasoning. The Mermaid sources in `diagrams/` stay the canonical editable
version and are kept semantically in sync.

**Palette.** Deep purple with a lime accent, echoing Zip's brand. Set as CSS
custom properties at the top of the file (`--zip-purple`, `--zip-lime`, …) so
the exact hexes can be swapped in one place once we have the official brand
values — **the current values are an approximation, not official brand assets.**

**Visual conventions carried consistently through the deck:**

| Convention | Meaning |
|---|---|
| Blue fill | External / stakeholder-facing artifact |
| Amber fill | Internal artifact |
| Purple fill | The Negotiation File / ledger |
| Green fill | Google Cloud services |
| **Red dashed** | **Gap, unknown, or open question** |
| Solid arrow | Production / derivation flow |
| Dashed arrow | Feedback, approval, or derived analytics |

The red-dashed convention is the important one: it appears on slide 4 (phase 4),
recurs on slides 12 and 17, and pays off on slide 18. The audience learns the
visual language early and reads the gaps instantly by slide 18.

**Speaker notes.** Embedded per slide, toggled with `S`, so the deck carries its
own briefing rather than needing a separate doc.

**Navigation.** Arrow keys / space / click; `F` fullscreen; `S` speaker notes;
`O` slide overview; slide counter and progress bar.

---

## 5. Build & verification

1. Generate `presentation/index.html` from the transcripts + `data/artifacts.json`.
2. Verify it renders — structure, all 20 slides present, no broken SVG.
3. Open in a browser to confirm visually before it goes near a customer.

---

## 6. Follow-on options (not built yet)

- **Google Slides version** via the `gslides` integration, if the deck needs to
  live in Zip's Drive rather than as a local file.
- **PDF export** for circulation — print-to-PDF from the HTML gets there.
- **Per-page scan overlay**, showing the original handwriting beside each
  transcribed slide, useful for a line-by-line validation session with the
  author.
