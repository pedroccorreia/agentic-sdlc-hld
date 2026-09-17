# Page 0 (document page 1) — Setup / Environment, and the six stages

> **Source:** `zip arc1.pdf`, single page — supplied separately, **this is the
> first page of the set** and was missing from `zip  architecture.pdf`.
> **Transcription convention:** `‹?›` marks an uncertain reading. Handwritten
> emphasis is noted in *italics*. Circled question markers on the page are
> transcribed as `Q.n` and collected at the bottom.

---

## ⚑ Why this page matters

This page **resolves the two biggest unknowns** flagged when the other four
pages were transcribed:

1. **Phase (4) is `Review`** — written explicitly here. Previously it was an
   inference (PL-01).
2. **The page-numbering mismatch is explained** (PL-15). With this page inserted
   at the front, the set reads: *page 1 = this page*, page 2 = artifacts,
   page 3 = negotiation & agents, **page 4 = documentation & control plane** —
   which is exactly the "Page 4" label the author wrote on that sheet. The
   sequence now fits with no page missing.

It also introduces material that appears nowhere else: the **development
environment**, the **toolchain**, the **MCP integration surface**, the
**persistence layer**, and a set of **seven numbered open questions**.

---

## Part 1 — SETUP / ENVIRONMENT

### The repository is the hub

```
[ Engineering / Architecture team ]  ──push──►  ┌──────────────┐
                                                │ GITHUB REPO  │
[ Dev1 ]  [ Dev2 ]  [ Dev3 ]         ◄──pull──  └──────────────┘
```

- Annotation on the pushing party: **"Engineering / Arch. team will maintain the
  repo."**
- Attached to the repo, drawn in a cloud/callout shape:
  **"Skills Agent (= Zip SDLC Principles)"**

> The repo does not just hold code — it carries **Zip's SDLC principles encoded
> as a Skills Agent**. That is the mechanism by which house rules reach every
> agent, and it appears nowhere else in the document set.

### Developer toolchain

Listed against the developer laptops:

| Tool |
|---|
| **Antigravity** |
| **Antigravity CLI** |
| **VS Code** |
| **gcloud** |
| **Terraform** |

### Google Cloud side

**GCP** — box with two responsibilities:

- **Deploy infrastructure**
- **Run tests**

**MCP / integration surface** — drawn as connected services:

| Service |
|---|
| **Jira MCP Server** |
| **Slack** |
| **Custom MCP** |

**Persistence** — drawn on dashed connections:

| Store | Purpose |
|---|---|
| **Cloud SQL** | → **scoring runs** |
| **Storage** | → **artefacts storage** |

> This answers where the registry and artifacts physically live (previously
> PL-24, unstated): **Cloud SQL for scoring runs, Cloud Storage for artefacts.**

---

## Part 2 — STAGES

The six stages, with the personas and hand-offs drawn between them.

### (1) Specify

- **IN:** *High level design* — **BRD**
- Converts **business requirements into a tech spec**
- Checks documentation, implements **architecture principles** — `Q.6`
- **Human persona gate:** **"PRD GO / NO-GO"** *(dashed hand-off into stage 2)*

### (2) Dispatch — `Q.3`

- Input: **REVIEWED PRD** — `Q.1`
- *"An assigned Agent gets assigned the task, opens the process."*
- **\* Akin to a taxi dispatcher — best agent for the job**
- *"Might be a GKE or Data Agent."*

> The "taxi dispatcher" analogy is the clearest statement of intent for the
> Project Assignment service anywhere in the document set.

### (3) Generate — `Q.7`

- Inputs drawn as **(A) Reviewed PRD** and **(B) Agent** → *Stages*
- *"Agents fleet works **sequentially or in parallel** to the task given"* — `Q.4`
- A **tree diagram** of agent nodes is drawn, indicating a hierarchy / fan-out of
  agents under the dispatched parent.
- `Q.2` annotated here: **kill switch / devices‹?› — how to do it centrally**
- Output: **Build** → **unit test** → **handover** *(flag marker)*

### (4) Review

> **This is the phase that was missing from the other four pages.**

- **Reviews the Build Report and provides a score** — `Q.5`
- Human personas drawn at this stage
- The review produces three things:

| Output |
|---|
| **Score agent** |
| **Feedback register** |
| **Approve / Not approve** — with **Reason** |

> **"Feedback register"** here is almost certainly the **Negotiation File / Decision
> Registry** from page 3 of the set, seen from the process side rather than the
> artifact side.

### (5) Verify

- *"Autonomous agent stack will run integration test, performance, adversarial,
  etc."*
- Named test categories:
  - **(a) Integration**
  - **(b) Load**
  - **(c) Adversarial**
- Output: **Build / Results**, with a human persona attached

### (6) Ship & Observe

- *"Code is merged, sent to **shadow gate testing**"* ‹?›
- Drawn with a **stop sign** marker — a hard gate before production

---

## Part 3 — Open questions (Q.1 – Q.7)

Numbered and circled on the page, referenced from the stages above.

| Q | Question as written | Refers to |
|---|---|---|
| **Q.1** | **Spec format — `.md`?** | The reviewed PRD entering Dispatch |
| **Q.2** | **Centralized kill switch** | Generate — how to do it centrally |
| **Q.3** | **How to control a Generate run** | Dispatch → Generate |
| **Q.4** | **Unit test in disposable sandboxes** | Generate — parallel agent execution |
| **Q.5** | **Score should be user feedback + data driven (pass tests)** | Review — scoring |
| **Q.6** | **Where is their documentation** | Specify — checking existing docs |
| **Q.7** | **Multi-Model Inference on Vertex AI** | Generate |

---

## Cross-cutting observations

- **The stage list here is the process view; the other pages are the artifact
  view.** They line up: Specify→BRD, Dispatch→PRD + Project Assignment,
  Generate→Build, Review→Build Report + score, Verify→Final Report,
  Ship & Observe. This page supplies the **personas and gates** between them
  that the artifact pages omit.
- **Only six stages are drawn here**, ending at Ship & Observe. The
  *(7) Update Documentation* step from page 4 of the set is **not** on this
  page — consistent with page 4's own note that it is *"part of Phase 6 or a
  parallel phase 7"*.
- **Q.5 is a partial answer to the evaluation-model gap** — it states the
  *principle* (user feedback **plus** data-driven pass-tests) without defining
  the computation. Combined with "Score agent" and "Feedback register" at stage
  4, the shape of the evaluation model is now visible even though the mechanics
  are not.
- **Q.7 "Multi-Model Inference on Vertex AI"** names a third-party model vendor. Flagging it as
  a commercial/strategic point rather than a technical one — worth handling
  deliberately before this material is used in a Google-facing conversation.
- **Two human gates are explicit**: *PRD GO / NO-GO* at stage 1→2, and
  *Approve / Not approve + Reason* at stage 4. A third persona sits at stage 5.
  This is the clearest statement of the human-in-the-loop design in the set.
