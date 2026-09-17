# Page 3 — Documentation loops, control plane, monitoring & logging

> **Source:** `zip  architecture.pdf`, scan page 3 of 4.
> **Original page label:** **"Page 4"** *(written on the page — the scan order
> and the author's own numbering disagree; see `PARKING_LOT.md`)*.
> **Transcription convention:** `‹?›` marks an uncertain reading. Handwritten
> emphasis is noted in *italics*.

---

## Documentation

The page splits documentation into two loops — one that runs **after** the build
and one that runs **before** it.

### (L) Downstream — *As part of Phase 6, or as a parallel Phase 7*

```
(5) Verify ──build results──► (6) Ship & Observe
                                      │
                                      ▼
                            (7) Update documentation
```

- With all artifacts, check **what part of functional & technical documentation
  should be updated**.
- ⚠ **Documentation drift is an issue** — *annotated with a warning marker.*

### (L) Upstream — *Support the PRD creation*

```
(1) Specify ──BRD──► (2) Dispatch
```

- ✗ Check **existing documentation** to build things **in context**.
- ✗ Produces a **stronger, more fit-for-purpose PRD**.

> **Reading:** documentation is treated as a **closed loop**, not a deliverable
> at the end. What Phase 7 writes out is what Phase 1 reads back in. The
> upstream leg is the payoff; the downstream leg is the cost of earning it.

---

## Control / Monitoring / Logging

### Dispatch and approval flow

```
[laptop] ──dispatch──► [ Control Plane ]
[laptop] ◄╌╌approve╌╌╌ [ Control Plane ]
```

- The **Control Plane** is drawn as a box containing an inner component box and
  a **database cylinder** (persistent state / the registry).
- **Approve** returns on a **dashed** line back to the operator's laptop — the
  human-in-the-loop gate.
- A second dashed line runs from the laptop to the **metrics** side of the
  diagram.

### Control plane surface — *what the operator sees*

| Panel | Content |
|---|---|
| **Agents Running** | `6` *(example value on the page)* |
| **Agents Completed** | `7` *(example value on the page)* |
| **tasks in flight** | |
| **List of running agents** | with a **`kill`** action |

### Observability backends

Two Google Cloud services are named as boxes:

- **Cloud Logging**
- **Cloud Monitoring**

Each feeds, on **dashed** lines, into:

- ⇢ **Analytics on Agent Performance** — *token usage*, *tool calling*
- ⇢ **Error Monitoring**

---

## Cross-cutting observations on this page

- This is the only page that names **specific platform services** (Cloud
  Logging, Cloud Monitoring) and, with page 2's `GKE`, the only concrete
  technology commitments in the whole document.
- The control plane is explicitly an **operator console**, not just a
  scheduler — `kill`, `tasks in flight` and a live agent list are
  human-operator affordances. Combined with the dashed **Approve** path, the
  design keeps a person in command of a fleet of running agents.
- **Token usage** as a first-class metric alongside performance and errors
  signals that **cost control** is an explicit design concern, not an
  afterthought.
- The phase numbering visible across the document runs `(1) Specify`,
  `(2) Dispatch`, `(3) Generate`, `(5) Verify`, `(6) Ship & Observe`,
  `(7) Update documentation`. **Phase (4) is never written down anywhere in the
  four pages** — see `PARKING_LOT.md`.
