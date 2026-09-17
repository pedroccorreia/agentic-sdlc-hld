# Page 2 — Negotiation File, artifact dependencies, agent & rating definition

> **Source:** `zip  architecture.pdf`, scan page 2 of 4.
> **Original page label:** *(none written on the page)*
> **Transcription convention:** `‹?›` marks an uncertain reading. Handwritten
> emphasis is noted in *italics*. Inferences live in `PARKING_LOT.md`, not here.

---

## (F) Negotiation File — *AKA Decision Registry* — `[internal]`

- A **ledger of feedback** between **Entity A** and **Entity B**, where
  `A, B ∈ [Human, Agent]`.
- Used across **≠ phases** *(i.e. different phases — the "≠" glyph is used on
  the page as shorthand for "differing/various")*.

**Registry ✓ — fields**

| Field | Notes |
|---|---|
| `phase` | |
| `entity A` | |
| `entity B` | |
| `date raised` | |
| `FEEDBACK` | free-text, drawn as ruled lines |
| `Decision` | free-text, drawn as ruled lines |

> This is the artifact that makes human↔agent and agent↔agent disagreement
> **first-class and auditable** rather than lost in chat history.

---

## DEP FOR ARTIFACTS — *artifact dependency graph*

The page draws a dependency graph using two link types:

- **Solid arrows** = production/derivation flow (one artifact produces the next)
- **Dashed lines** = association with the Negotiation File (feedback attaches here)

**Solid chain:**

```
BRD ──► PRD ──► Project Assignment ──► Final Report
                        │
                        ▼
                   Build Report
```

**Dashed associations (Negotiation File):**

```
BRD              ⇠⇢ Negotiation File
PRD              ⇠⇢ Negotiation File
Negotiation File ⇠⇢ Project Assignment
Final Report     ⇠⇢ ‹?› (dashed link runs back toward the PRD/Negotiation cluster)
```

**Reading:** the Negotiation File sits *underneath* the main production chain
and is attached to the artifacts where human review actually happens — the BRD,
the PRD and the Project Assignment. It is a **side-car ledger**, not a stage in
the pipeline.

---

## Agent / Rating definition

*Header annotation:* **(cardinality to be defined)**

### The Agent box

| Element | Content |
|---|---|
| **Description** | *(ruled lines — free text)* |
| **Tech** | `GKE` \| `DATA` \| `Agents` — *annotated:* **when to choose this** |
| **Deployment** | deployed **locally → cloud**: `Skills`, `Scripts`, `Agents.MD`; **github repo** |

### Manage in a Registry / plane

*A 2×2 grid of agents is drawn:*

```
┌────┬────┐
│ A1 │ A2 │
├────┼────┤
│(A3)│ A4 │      ← A3 is circled and expanded below
└────┴────┘
```

- ✗ **Registry has a deterministic way of choosing agents**

### A3 expanded — the per-agent record

| Field | Notes |
|---|---|
| `Description` | |
| `Use when` | the selection criterion the registry keys off |
| `# of times deployed` | usage counter |
| `Successful runs` | success counter |
| `Rating` | composite — see below |

**Rating decomposes into two sources:**

| Kind | Source |
|---|---|
| **Quantitative** | *inferred from test bugs associated* |
| **Qualitative** | *user provided* |

---

## Cross-cutting observations on this page

- The agent registry is **not** a passive catalogue. `Use when` +
  `deterministic way of choosing agents` means the registry is the **routing
  table** that the Project Assignment service (page 1, artifact C) reads from.
- `# of times deployed`, `Successful runs` and `Rating` make agents
  **measurable over time** — the registry accumulates a performance history,
  which is what would eventually permit the "dynamic allocation of agents"
  listed as a stretch goal on page 4.
- Agents are versioned as **code** (`github repo`, `Agents.MD`, `Skills`,
  `Scripts`) and promoted **local → cloud**, which implies an agent SDLC that
  mirrors ordinary software CI/CD.
- The **`(cardinality to be defined)`** note is an explicit open question — see
  `PARKING_LOT.md`.
