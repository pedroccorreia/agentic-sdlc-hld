# Page 1 — Artifacts: what gets created and where

> **Source:** `zip  architecture.pdf`, scan page 1 of 4.
> **Original page label:** *(none written on the page)*
> **Transcription convention:** `‹?›` marks an uncertain reading; `‹illegible›`
> marks text that could not be resolved. Handwritten emphasis (boxes, circles,
> underlines) is noted in *italics*. Nothing has been invented — inferences are
> confined to `PARKING_LOT.md`.

---

## Page heading

> **Artifacts** — *when gets created and where*

A vertical bracket runs down the left margin of the page, tying the artifact
list to the numbered **phases** of the delivery process. Phase annotations
appear next to the artifacts they produce.

---

## (A) BRD — `[ext]`

*Document icon, annotated:* `txt / md / doc / pdf`

- A business-user-level understanding of the **LMS component** to be designed.
- **HUMAN CURATED / AI GENERATED**

**Registry ✓ — metadata**

| Field | Notes |
|---|---|
| `ID` | |
| `creation date` | |

---

## (B) PRD — `[ext]`

*Document icon labelled* `SPEC`‹?›

- **AI GENERATED / APPROVED BY HUMAN**
- Translates the **BRD** into a **PRD**.
- **CREATE** a set of tasks that will be created:
  - **RESTRICTIONS / GUARDRAILS** *(architectural inputs)*
  - **UNIT TEST STRATEGY**
  - **TARGET TECHNOLOGY** 🔗
  - **STACK IMPACT** — *[which part of LMS]* 🔗

**Registry ✓ — metadata**

| Field | Notes |
|---|---|
| `BRD_ID` | |
| `creation date` | |
| `review cycles` | sub-fields: `- FEEDBACK`, `- REVIEW` |
| `components impacted []` | *marked as an array* |
| `target technology []` | *marked as an array* |

*A margin annotation reading* **`ARRAY [ ] [ ] [ ]`** *points at the bracketed
fields, flagging them as repeating/multi-valued.*

**Phase annotation (left margin):** `(2) Dispatch`

---

## (C) Project Assignment — `[internal]`

*Sketch:*

```
Agent1 —[ task1, task2 ]
Agent2 —[ task1, task2 ]
```

- A **service** that will apply **deterministic rules** on how an agent gets
  assigned.

**Registry ✓ — metadata**

| Field | Notes |
|---|---|
| `BRD ID` | |
| `creation date` | |
| `[Agent X [tasks] assignment reasoning]` | *nested array* |

**Phase annotations (left margin):** `(2) Dispatch`, `(3) Generate`

---

## (D) Handover / Build Report — `[External]`

*Sketch:*

```
Agent1 —[ task1 ✓, task2 ✓ ]
...
```

- `summary`, `test results`
- An artifact that will work as a **record of what was accomplished**.

**Registry ✓ — metadata**

| Field | Notes |
|---|---|
| `Project_ID` | |
| `creation_date` | |
| `TIME FINISHED` | |
| `review cycles` | sub-fields: `- FEEDBACK`, `- Actions` |
| `SCORE` | |

---

## (E) Final Report — `[External]`

- Final output of results
- **Integration test** results
- **Load balancing**
- **Adversarial**

**Registry ✓ — metadata**

| Field | Notes |
|---|---|
| `Project ID` | |

---

## Cross-cutting observations on this page

- Every one of the five artifacts carries a **`Registry ✓`** marker — the
  registry is the common backbone, not a per-artifact afterthought.
- Artifacts are consistently tagged **`[ext]` / `[External]`** or
  **`[internal]`**, i.e. whether the artifact is customer/stakeholder-facing or
  a machine-to-machine intermediate:
  - **External:** BRD, PRD, Handover/Build Report, Final Report
  - **Internal:** Project Assignment
- Metadata is deliberately **relational** — `BRD_ID` on the PRD, `BRD ID` on the
  Project Assignment, `Project_ID` on the reports. The chain is traceable end
  to end.
- Two artifacts (PRD, Build Report) carry an explicit **`review cycles`**
  structure, which is the hook the Negotiation File on page 2 plugs into.
