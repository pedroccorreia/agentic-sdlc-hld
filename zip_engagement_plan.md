# **FDE Engagement Plan**

**Zip · Project Catalyst — Agentic Factory / LMS Rebuild** Working draft · 27 August 2026

---

## **1\. The shape of it**

The FDE engagement is **the factory build window and nothing else**. It opens when the GCP foundation work starts and closes when the factory reaches GA. The LMS domain build and the shadow gate — the two longest phases of Project Catalyst — happen after the FDE has left, carried by the AI CE, the Platforms CE and Quantium.

This maps cleanly onto three things that already exist:

- Zip's own **8–12 week factory setup window** (PRD Phase 1\)  
- Rob Sibo's resourcing position — **100% for Q4, then ramp down to CE support**  
- Google Cloud FY **Q4 \= October–December 2026**

Those are the same twelve weeks. The engagement plan writes itself from that alignment, and the ramp-down Rob wants becomes a planned exit at a named milestone rather than a resourcing argument in January.

|  |  |
| :---- | :---- |
| **Engagement window** | Week 1 – Week 12 (October – December 2026\) |
| **Pre-engagement ramp** | September 2026 (Week 0), part-time |
| **Exit milestone** | Factory GA, end Week 12 / 31 December 2026 |
| **Allocation** | 100% Weeks 1–10, tapering Weeks 11–12 |
| **Continuity after exit** | AI CE \+ Platforms CE \+ Quantium |

---

## **2\. How it relates to the overall programme**

| Programme phase | Weeks | Dates | Who leads | FDE involved |
| :---- | :---- | :---- | :---- | :---- |
| Mobilisation | Week 0 | Sep 2026 | AI CE \+ Platforms CE | Part-time, observing |
| Foundation — landing zone & GKE control plane | 1–4 | Oct 2026 | TOC Foundations team | **Yes — 100%** |
| Factory setup & pilot | 5–8 | Nov 2026 | FDE \+ AI CE | **Yes — 100%** |
| Factory GA & Azure retirement readiness | 9–12 | Dec 2026 | Zip, FDE shadowing | **Yes — tapering** |
| Parallel domain build (5 LMS domains) | 13–32 | Jan – Apr 2027 | Quantium \+ Zip squads | No — AI CE \+ Platforms CE |
| Shadow evaluation & cutover | 33–45 | May – Jul 2027 | Zip \+ Quantium | No — AI CE \+ Platforms CE |

**The dividing line is deliberate.** The FDE builds the machine; Zip and the partner operate it. If the FDE is still hands-on at Week 20, the handover has failed and the "enduring asset owned permanently by Zip" premise has quietly become a Google-operated service.

> ⚠️ **Baselining note.** The PRD's week numbers and month labels do not reconcile — it places "Weeks 13–32" in November 2026 while also placing "Weeks 9–12" in December 2026\. This plan uses **weeks from the 1 September kick-off** as the primary reference, with Week 1 beginning October. This needs to be settled with Eric Blassberg before anything is baselined.

---

## **3\. Workstreams**

Seven workstreams across the twelve weeks. Handover is not one of them — it is embedded in the delivery workstreams from Week 5, which is the only way it actually happens.

| \# | Workstream | Design owner | Delivery owner | Window |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Discovery | AI CE | AI CE \+ FDE \+ Platforms CE | Week 0 – Week 2 |
| 2 | SDLC harness for the factory | AI CE | **FDE** | Weeks 2–8 |
| 3 | Skill hardening for GCP builds | Platforms CE | **FDE** | Weeks 3–12 |
| 4 | MVP test — migrate one existing component | AI CE | **FDE** \+ Zip engineers | Weeks 5–8 |
| 5 | Documentation | FDE | FDE \+ Zip | Weeks 1–12 (continuous) |
| 6 | Handover | AI CE | FDE → Zip | Weeks 5–12 (progressive) |
| 7 | Project management sync | AI CE | All | Weeks 0–12 (continuous) |

### **Indicative FDE effort split**

| Workstream | Share of FDE capacity |
| :---- | :---- |
| SDLC harness | 35% |
| Skill hardening | 20% |
| MVP test | 20% |
| Documentation | 10% |
| Discovery | 10% |
| PM sync | 5% |

**One FDE cannot own all seven at depth.** The harness, the MVP test and skill hardening are the FDE's real deliverables. Discovery is CE-led with FDE input. Documentation is continuous but lightweight if done as you go. PM sync belongs to the AI CE. Presenting it this way protects the FDE from being treated as a general-purpose delivery resource.

---

## **4\. Week-by-week**

### **Week 0 — September 2026 · Mobilisation**

Programme: NDAs executed, team aligned, project charter agreed, GCP landing zone initiated by TOC Foundations.

| Activity | Owner |
| :---- | :---- |
| FDE enablement completion (4–6 weeks from late August) | FDE |
| Discovery kick-off — Azure current state, domain landscape | AI CE \+ Platforms CE |
| Engagement charter, RACI, success criteria | AI CE |
| Persona scope agreed — Phase 1 set of ten | AI CE \+ FDE |
| Weekly delivery sync established | AI CE |

**FDE allocation: \~25%, ramping.** The FDE is completing training through most of September and is not at full strength for the 1 September kick-off. September discovery is therefore CE-led *by design*, not by accident — worth stating plainly to Zip rather than letting it look like a slow start.

**Exit from Week 0:** signed charter, agreed pilot component candidate list, confirmed landing zone start date.

### **Weeks 1–4 — October 2026 · Foundation**

Programme: GKE control plane deployed, spec repo established, LMS domain discovery finalised. Landing zone owned by TOC Foundations.

| Week | FDE focus | Output |
| :---- | :---- | :---- |
| 1–2 | **Discovery** completion — joint AI CE \+ FDE \+ Platforms CE | Azure→GCP current-state map; pilot component selected; architecture validated or challenged; documented non-goals |
| 2–4 | **SDLC harness** build begins | Spec repo template framework; CODEOWNERS and branch protection; Temporal / GKE control-plane scaffolding; eval harness skeleton; GCS evidence pipeline stub |
| 3–4 | **Skill hardening** begins | Terraform module standards; scripting conventions; architecture principles; first paired sessions with Zip engineers |
| 1–4 | **Documentation** | ADR practice established from Week 1 — not deferred to the end |

**FDE allocation: 100%.**

**Exit from Week 4:** harness skeleton executing a trivial spec end to end; two Zip engineers have completed paired Terraform sessions; pilot component formally selected and specified.

### **Weeks 5–8 — November 2026 · Factory Setup & MVP Test**

Programme: initial agentic factory pipeline operational; pilot run on a single domain sub-component.

This is the proof point for the entire programme.

| Week | FDE focus | Output |
| :---- | :---- | :---- |
| 5–6 | **MVP test, iteration 1** — one existing component through the full loop: specify → dispatch → generate → review → verify | Working end-to-end run; instrumented; defects and friction logged |
| 6–7 | **Learnings loop** — harden the factory against what iteration 1 exposed | Revised personas, spec templates, gate criteria; eval suite extended |
| 7–8 | **MVP test, iteration 2** — same component or adjacent, Zip engineers driving | Second clean run with materially less FDE intervention |
| 5–8 | **Skill hardening** — Zip engineers now driving, FDE pairing | Named engineers competent on control plane and Terraform |
| 5–8 | **Handover begins** | Progressive ownership ladder starts (see §5) |
| 5–8 | **Documentation** | Runbooks, spec authoring guide, persona definitions with owners |

**FDE allocation: 100%.**

**Exit from Week 8:** two complete MVP cycles; measured unit-cost baseline for one component; documented improvements folded back into the factory.

### **Weeks 9–12 — December 2026 · Factory GA & Exit**

Programme: factory fully operational, parallel LMS domain generation begins, GCP infrastructure prepared for Azure retirement readiness.

| Week | FDE focus | Output |
| :---- | :---- | :---- |
| 9–10 | Zip drives the factory, FDE pairs | Zip-run cycle with FDE support only on escalation |
| 11 | Zip drives, FDE observes only | Zip-run cycle with zero FDE intervention |
| 11–12 | Handover artefact pack completed and validated by the receiving team | Signed-off pack (see §5) |
| 12 | Exit criteria review and formal sign-off | Engagement closure record |

**FDE allocation: 100% → tapering across Weeks 11–12.**

**Engagement ends 31 December 2026\.**

### **Weeks 13–45 — January – July 2027 · Post-FDE**

| Phase | Weeks | Google coverage |
| :---- | :---- | :---- |
| Parallel domain build across 5 LMS domains | 13–32 | AI CE (primary), Platforms CE (infrastructure) |
| Shadow evaluation, divergence triage, cutover | 33–45 | AI CE, Platforms CE, escalation paths |

**Optional time-boxed advisory.** One useful exception: a 2–3 day FDE checkpoint around Week 30, before shadow gate design is locked. Side-effect suppression and state re-baselining are the two hardest problems in Phase 3 and neither is currently in the PRD. A short, scoped return is far cheaper than an unplanned re-engagement — but it should be booked now as a discrete item, not left as an open door.

---

## **5\. Handover**

**Handover runs from Week 5, not Week 12\.** The mechanism is a progressive ownership ladder, so that by the time the FDE leaves, Zip has already been running the factory unaided for a fortnight.

| Weeks | Model |
| :---- | :---- |
| 1–4 | FDE drives · Zip observes |
| 5–8 | FDE drives · Zip pairs |
| 9–10 | Zip drives · FDE pairs |
| 11–12 | Zip drives · FDE observes |
| 12 | Sign-off |

### **Handover artefact pack**

1. Architecture decision records  
2. Terraform modules and infrastructure runbooks  
3. Spec repo template framework and authoring guide  
4. Persona library — definitions, versions, named owners, evals  
5. Eval harness and policy-as-code suites  
6. Operations runbook and on-call guide  
7. Known limitations and deferred items register  
8. Training completion record for named Zip engineers

### **Exit criteria**

The engagement closes when all seven are true:

1. The factory executes a full specify→ship cycle on the pilot component with **no FDE intervention**  
2. **Two named Zip engineers** have each independently run the loop end to end  
3. The handover artefact pack is complete and **validated by the receiving team**  
4. The Phase 1 persona set is defined, versioned and **owned by name**  
5. The eval harness is operational with a **named owner**  
6. A unit-cost baseline is instrumented and the **first measurement taken**  
7. A named Zip owner for the factory control plane exists and is **resourced**

Criteria 2, 3 and 7 are the ones that will slip. All three depend on Zip standing up a receiving team, which does not exist today.

---

## **6\. RACI**

| Workstream | FDE | AI CE | Platforms CE | Quantium | Zip |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Discovery | C | **A/R** | R | I | C |
| SDLC harness | **R** | **A** | C | I | C |
| Skill hardening | **R** | C | **A** | I | C |
| MVP test | **R** | **A** | C | C | R |
| Documentation | **R** | C | C | I | **A** |
| Handover | **R** | **A** | R | C | **A** |
| PM sync | C | **A/R** | C | C | R |
| Landing zone | I | I | **A/R** | I | C |
| Domain build (W13+) | — | **A** | C | **R** | R |
| Shadow gate (W33+) | — | **A** | C | R | **A** |

---

## **7\. Risks**

| \# | Risk | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| 1 | FDE completing enablement 4–6 weeks from late August; not at full strength for 1 Sep kick-off | Perceived slow start | September is CE-led discovery by design; state this to Zip up front |
| 2 | PRD week numbers and month labels do not reconcile | Plan cannot be baselined | Settle with Eric Blassberg before Week 0 closes |
| 3 | "Azure retirement December 2026" versus shadow gate May–Jul 2027 | Programme-level contradiction | This plan assumes December is **commit expiry, not workload cutover**. If that assumption is wrong, the FDE exit point must be revisited |
| 4 | Landing zone slips — TOC Foundations dependency | Harness work blocked from Week 2 | Platforms CE owns the interface; define a degraded-mode start |
| 5 | No named Zip team to receive handover | Exit criteria unmeetable; FDE retained by default | Raise at Week 0; make it a charter condition |
| 6 | FDE pulled into domain build from Week 13 | Ramp-down never happens | Exit is a milestone with signed criteria, not a date |
| 7 | Factory scope creeps beyond LMS microservices | Single FDE spread across archetypes | Phase 1 persona set defines the boundary |
| 8 | Zip engineer availability for paired sessions | Skill hardening fails; handover fails | Named engineers committed in the charter, not volunteered later |

---

## **8\. What to settle before Week 0**

1. Is December 2026 a commit expiry or a workload cutover?  
2. Who is the named Zip owner of the factory after handover, and are they funded?  
3. Which component is the MVP test target?  
4. Which two Zip engineers are committed to the paired build?  
5. Do the PRD's week numbers or its month labels govern?  
6. Is the Week 30 shadow-gate advisory checkpoint in or out?

---

## **9\. Related**

- **\[Zip\] Agent Factory & LMS re-write PRD** — `https://docs.google.com/document/d/1NXWPzZCWUyJtNCkHqnx9Bls_x-iXFMzF4QsGr4CDISs`  
- **Persona catalogue & stage detail** — see "Personas analysis" tab  
- **Call prep & discovery questions** — see "Call Prep" tab

