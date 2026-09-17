# Page 4 — Open Action Items

> **Source:** `zip  architecture.pdf`, scan page 4 of 4.
> **Original page label:** *(none written on the page)*
> **Transcription convention:** `‹?›` marks an uncertain reading. The page is a
> bulleted list written with `×` as the bullet glyph; that glyph is preserved
> below as `✗`.

---

## Heading

> **Open Action Items**

---

## The list — verbatim

| # | Item as written |
|---|---|
| 1 | ✗ **DER for Registry**‹?› |
| 2 | ✗ **Personas & sub-processes per phase** *(Dispatch, Review)* |
| 3 | ✗ **Documentation upkeep** — *non existing* ✓ |
| 4 | ✗ **Agents that can build archetypes** — *tightly coupled / dependent on evaluation* |
| 5 | ✗ **Some basics need to be locked in for building:** <br>• Programming language <br>• Monitoring <br>• CI/CD path <br>• Documentation repo |
| 6 | ✗ **Dynamic allocation of agents** should be a **stretch goal** |
| 7 | ✗ **Should evaluation scenarios be built alongside the PRD?** → *How does Zip manage them?* |

---

## Notes on individual items

**Item 1 — "DER for Registry".** Read as **D.E.R.** = *Data Entity
Relationship* (i.e. an entity-relationship model for the registry). The
abbreviation is not expanded anywhere on the page. This is the single most
load-bearing open item in the document: pages 1 and 2 define registry
**metadata** for six artifacts plus the agent record, but never define the
**relationships** between those entities.

**Item 2 — "Personas & sub-processes per phase".** Only two phases are named as
examples, `Dispatch` and `Review`. Note that **`Review` is named here but never
appears in the numbered phase list** anywhere in the document — and the numbered
list is missing exactly one entry, `(4)`.

**Item 3 — "Documentation upkeep — non existing".** Carries a ✓ mark, which
reads as *acknowledged/confirmed* rather than *done*. This is the problem
statement that page 3's two documentation loops are the proposed answer to.

**Item 4 — "Agents that can build archetypes".** The dependency noted is on
**evaluation** — archetype-building agents can't be trusted until there is a way
to score their output.

**Item 5 — "Some basics need to be locked in".** Four concrete platform
decisions. As of this document only two are even partially answered elsewhere:
*Monitoring* (page 3 names Cloud Logging + Cloud Monitoring) and, loosely,
*Documentation repo* (page 2 mentions a `github repo` for agents). **Programming
language** and **CI/CD path** are entirely unanswered.

**Item 6 — "Dynamic allocation of agents ... stretch goal".** Explicitly
deferred. This is the counterpart to page 2's *"Registry has a deterministic way
of choosing agents"* — deterministic routing is v1, dynamic allocation is later.

**Item 7 — "Should evaluation scenarios be built alongside the PRD?"** Left as
an open question, with a second-order question attached: *how does Zip manage
them?* Page 1's PRD already carries a **`UNIT TEST STRATEGY`** field, so the
question is really about scope — whether *evaluation* (agent-level scoring) also
belongs in the PRD next to *testing* (code-level correctness).

---

## Cross-cutting observation

Four of the seven items (1, 4, 6, 7) are ultimately about the **same gap**:
there is no defined **evaluation model**. The registry can't be modelled without
knowing what a rating relates to; archetype agents are blocked on evaluation;
dynamic allocation needs ratings to allocate against; and item 7 asks outright
where evaluation scenarios live. Page 2 sketches a `Rating` field with
quantitative and qualitative halves, but nothing defines how it is computed,
stored, or acted upon.
