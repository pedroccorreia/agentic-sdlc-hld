# How Long Does It Take to Set Up an Agentic SDLC?

**Internal reference benchmark analysis · Zip · Project Catalyst**
Prepared for: Pedro Correia (AI CE / FDE, Google Cloud)
Date: 1 September 2026
Status: Draft for internal review — **not customer-ready without the caveats in §8**

---

## 1. Bottom line up front

Building an agentic SDLC from scratch took **~19 calendar weeks, representing ~12 FTE-weeks of actual effort** (range 9.6–16.7), sustained at roughly **0.63 FTE** by one person working with an AI agent fleet. Onboarding a *new domain application* onto that finished factory took **18 calendar days** — of which the entire working application landed in a single **6-hour-5-minute window**. These two numbers differ by more than an order of magnitude, and Zip's PRD collapses them into one "8–12 week" figure.

**Verdict on Zip's 8–12 weeks: defensible but tight**, and only if it means "a working factory," not a hardened one. A full-time FDE needs ~12–13 weeks on measured effort alone, before any customer-delivery overhead.

**The sharper finding: the engagement plan under-resources the harness build by roughly 5x** — ~2.5 FDE-weeks budgeted against ~12 FTE-weeks measured.

---

## 2. What "setting up an Agentic SDLC" actually means

The factory is not one artifact. The reference implementation separates into three layers with **three different time constants**, and this decomposition is the analytical core of this document.

| Layer | What it is | Reference artifact |
|---|---|---|
| **Platform / harness** | Agent runtime, MCP tool surface, state backplane, orchestration, consensus, CI/deploy | `agentic-network` |
| **Doctrine / governance** | Axioms, schemas, personas, the engineering constitution | `mission-kit` |
| **Domain application** | The thing the factory is actually built to produce | `mam-learning-portfolio-engine` |

Zip's Double Diamond DAG describes seven phases (Specify → Dispatch → Generate → Validate → Integrate → Shadow → Harvest), each recursively applying discover/define/develop/deliver. That is the *process* the factory runs. The three layers above are the *machinery* that must exist before the process can run at all.

---

## 3. The three benchmarks — measured

All figures below are `[MEASURED]` — derived directly from git history.

| | `agentic-network` | `mission-kit` | `mam-*-engine` |
|---|---|---|---|
| Role | Platform / harness | Doctrine | Domain app *on* the harness |
| First → last commit | 2026-04-16 → 08-07 | 2026-05-24 → 08-26 | 2026-08-06 → 08-28 |
| Commits | 1,102 | 162 | 78 |
| Elapsed | 16.3 wks | 13.6 wks | 3.3 wks |
| Active days | 75 | 33 | 11 |
| Duty cycle | 66% | 35% | 48% |
| Commits / active day | 14.7 | 4.9 | 7.1 |
| Contributors | **1 human + agent fleet** | **1 human + agent fleet** | **2 humans** |

### 3.1 The contributor finding

The repos *appear* to have three to five contributors each. They do not.

In `agentic-network` and `mission-kit`, 93.5% of commits trace to a **single mailbox** via plus-addressed aliases:

```
Andrew Obersnel  <aobersnel@apnex.com.au>
apnex-greg       <aobersnel+apnex-greg@apnex.com.au>
apnex-lily       <aobersnel+apnex-lily@apnex.com.au>
hermes           <hermes@apnex.local>
```

`greg`, `lily` and `kate` are **agent identities inside the product being built** — one commit records a "live greg↔kate P2P smoke" test. They are nodes under test, not colleagues. All merges are the one human landing `agent/*` branches. **Reading five contributors as five engineers overstates headcount by ~5x.**

86 commits name a specific Claude Opus model as co-author. That is a **floor, not a ceiling**: the final commit in the repo is titled *"zero AI attribution: includeCoAuthoredBy=false… husky commit-msg strip; deploy guard asserts the flag."* `mission-kit` shows zero AI trailers, but shipped an "AI-attribution scrub" skill in its very first commit — a clean trailer record there is a **policy outcome, not evidence of human authorship**.

**`mam-learning-portfolio-engine` is different and breaks the one-person premise.** Five author strings collapse to two real humans — Scott Zanevra (49 commits) and Davesh Patel (28) — plus a CI bot. `Davesh Patel` and `devp333` share a byte-identical author email; `szanevra`/`scottzanevra` are the terminal and web-UI identities of one GitHub account. Branch initials confirm exactly two tokens (`sz`, `devp`). Its figures are reported separately and never pooled with the single-operator repos.

---

## 4. Build the factory vs. onboard onto it

This is the distinction that decides whether Zip's number is right.

### 4.1 Building it — the expensive part

**~19 calendar weeks, ~12 FTE-weeks of effort.**

Critically, `agentic-network` and `mission-kit` **overlap in time and share one builder**. 25 of `mission-kit`'s 33 active days were days the author was already committing to `agentic-network`. Adding the doctrine layer grew true days worked from 75 to 83 — **+8 days, not +33**. Summing per-repo days inflates the total by 23%.

### 4.2 Onboarding onto it — the cheap part

**18 days repo-init → working end-to-end domain slice** (bracket 18–19 days). But the decomposition matters far more than the headline:

- **13 days of solo business analysis producing zero runnable code.** At the end of this phase the tree held 30 files and exactly 3 Python files — all document-authoring scripts. No `backend/`, no `agents/`, no `frontend/`, no `tests/`, no `pyproject.toml`.
- **A 6-day gap**, invisible to git.
- **Then the entire application on 2026-08-24, between 12:05:47 and 18:10:44 — six hours and five minutes.** Four ADK agent teams, knowledge graph, ingestion, BFF, React console, BigQuery schema, launcher, and live RAG deployment over 64 real deal files.

### 4.3 The leverage, quantified

The app **inherited** the harness rather than rebuilding it. The proof is a single symlink:

```
.agents/plugins/conductor → /Users/daveshp/.gemini/config/plugins/conductor
```

The harness is *mounted from the developer's machine*, not vendored. Corroborating: zero source references to mission-kit / agentic-network / apnex; no submodules; 17 runtime dependencies, none a platform library; no state-backplane implementation anywhere in the repo.

**~94% of the ecosystem's committed engineering — 1,264 of 1,342 commits — sits outside the application repo.** That is the leverage the factory buys, and it is the strongest argument in Zip's favour anywhere in this analysis.

---

## 5. Intensity calibration — from calendar weeks to FTE-weeks

Elapsed time is not effort. This section bridges the two, because it is what determines whether Zip's resourcing plan holds.

**Method.** Raw daily work-windows mislead badly: `agentic-network` shows a median 11.5-hour first-to-last-commit span, which naively reads as twelve-hour days every other day. Not credible. The inter-commit gap data explains it — median gap of 20 minutes (tight, hands-on iteration) with a long tail of 91 same-day gaps exceeding 4 hours. The day is a long *envelope* containing dense bursts separated by dead air.

Session clustering was used instead: commits group into sessions, a gap over *G* minutes breaks the session, each session is charged its span plus a prelude *P* for uncommitted thinking. Uncertainty bands come from varying *(G, P)* rather than an arbitrary ±%.

| Measure | Value |
|---|---|
| Hours per active day (clustered) | **~5.6 h** |
| Duty cycle inside the 11.5 h envelope | 55% |
| Cross-check (`active days × 6 h`) | agrees within 7% |
| **Factory build total** | **~12 FTE-weeks** (9.6–16.7) |
| Average intensity | **~0.63 FTE** |
| Calendar-to-effort overstatement | **~1.6x** |

**The work pattern is a self-directed builder, not an employee.** Active days are perfectly flat across all seven weekdays (10–12 each) and **Sunday is the single heaviest commit day**. There is no weekday/weekend boundary in this schedule. Against that, 54% of commits fall in business hours and volume is sustained — this is not a casual side project either. The call is **heavy part-time with full-time bursts**.

By contrast, `mam` shows **zero weekend commits and 88% business-hours work** — a normal two-person professional cadence, with no crunch inflating its velocity. That strengthens the onboarding benchmark's transferability.

---

## 6. Verdict on Zip's stated numbers

### 6.1 The PRD's 8–12 weeks — optimistic but defensible

A full-time FDE needs **~12–13 weeks on measured effort alone**. The reference build carried none of the customer-delivery overhead Zip's engagement will: no stakeholder reviews, no security sign-off, no CISO, no unfamiliar-codebase onboarding, no change control. Adding a realistic 30–40% for that lands at **16–20 weeks**.

That happens to match the observed elapsed time, but for entirely different reasons — coincidence, not corroboration. Flagged as judgement, not measurement.

### 6.2 The engagement plan's harness window — short by ~5x

Weeks 2–8 at ~35% of one FDE is ~2.5 FDE-weeks, or roughly **12 person-days**, against **~12 FTE-weeks measured**. **This is the single number to fix before the plan is baselined with Eric Blassberg.**

### 6.3 What Zip is actually buying

If "8–12 weeks" is read as *onboarding a domain onto a working factory*, it is wildly generous — the reference did it in 18 days, six hours of which was the build. The 8–12 weeks only makes sense as *factory construction*, and on that reading it is tight rather than wrong.

---

## 7. Three time constants nobody has budgeted

**(a) First light → trustworthy ≈ 1:30.** 96.5% of `agentic-network`'s calendar and 85.9% of its commits fall *after* the first working loop, and it is almost entirely hardening: bug-fix commits outnumber feature commits roughly **10:1**. The single largest effort in the repo's life is a mid-life organ transplant — replacing the original GCS document store with the Postgres JSONB substrate on day 31. **The backplane the architecture doc advertises was not in the original design.** For a core lending system, "usable" and "trustworthy" are the whole distance apart.

**(b) Doctrine is a lagging artifact.** `mission-kit`'s founding commit says it in its own subject line: 13 axioms *"from OIS teles"* — extracted from telemetry of the platform already running. It starts 5.5 weeks after the platform, and its early 20-day dead gap aligns with the period those lessons were being earned elsewhere. Thirteen of fourteen axioms then land in a **single commit on a single day**: a publication venue, not a workshop. **Zip cannot plan to author the constitution up front.**

**(c) Doctrine → enforceable doctrine took 12.4 weeks.** CI and the checker suite arrive on day 87 of 94 — sixteen of seventeen tooling files on one day. For **92% of its life the constitution was prose obeyed voluntarily**. The moment checkers landed they found real decay: 63 duplicated rules, two silent mangles, and a hand-maintained index that had been quietly missing two of its fourteen axioms for roughly six weeks. Unchecked prose rots silently.

---

## 8. Caveats — read before this reaches a customer

1. **The "3 days to first light" figure is not reproducible and must never be cited bare.** `agentic-network`'s first commit is a squashed import of 156 files / 38,039 lines that *already contained* eight end-to-end test suites, production smoke tests and Terraform IaC. Nobody writes an `e2e-chaos` suite for software that has never run. **The working loop predates the repository; the true from-scratch build time is invisible to this data, and every elapsed figure here is therefore a floor.**
2. **The 6-hour application build is committed time, not total effort.** The 6-day gap preceding it is invisible to git. Design or harness familiarisation may have happened off-repo. This is the largest hidden variable in the onboarding benchmark.
3. **Nothing proves the harness gates actually ran** in the domain app. The binding is declarative (manifests) and environmental (the symlink) — not an import or a CI job.
4. **The calibration only transfers to a team working the same way.** 64% of `agentic-network` commits carry AI agent persona identities; the factory was itself built *by* a mini agentic factory. Zip's 14–15 ramping engineers are not currently that team.
5. **One expert ≠ a ramping team.** Brooks' law cuts against assuming headcount divides the calendar. The reference builder had already internalised the doctrine; Zip's engineers are learning it.
6. **Two-owner thrash is real and measurable.** 21% of all churn in the domain repo is a merge/revert/revert-the-revert collision (PRs #8→#9→#10) costing 32,628 lines for zero net effect — a *two-owner* failure mode that will scale badly to 14.
7. **Commit counts understate changes but overstate labour.** Median commit is 198 lines, 23% exceed 500, and 61% are squashed PRs. But 28% of line churn is `docs/` — cheap for an agent, expensive for a human. Volume comparisons against human-written repos are not like-for-like.
8. **Git cannot strictly prove** no second human ever used the author's credentials — only that there is no positive evidence of one anywhere.

---

## 9. Recommendation

1. **Split the number.** Stop quoting "8–12 weeks for factory setup." Quote *factory construction* (12–20 weeks, resourcing-dependent) and *domain onboarding* (2–4 weeks) as separate line items. The conflation is the single biggest credibility risk in the PRD.
2. **Fix the harness allocation** before baselining. ~2.5 FDE-weeks against ~12 FTE-weeks measured is a 5x gap.
3. **Sequence doctrine after platform**, not before. The reference proves it cannot be authored up front.
4. **Budget the enforcement layer explicitly.** It took 12.4 weeks to arrive in the reference and it is the difference between a constitution and a gate.
5. **Reconcile the PRD's week numbering** with Eric Blassberg — it currently places Weeks 13–32 in November 2026 while also placing Weeks 9–12 in December 2026.

---

## 10. Sources

**Reference repositories** (git history, read-only):
`sample-repos/agentic-network` · `sample-repos/mission-kit` · `sample-repos/mam-learning-portfolio-engine`

**Zip planning artifacts:**
`zip_prd.md` · `zip_engagement_plan.md` · `zip_fde_scope_notes.md` · `architecture-unpack/DOUBLE_DIAMOND_SUBPHASES_DAG.md` · `architecture-unpack/ARCHITECTURE.md` · `sample-repos/SAMPLE_REPOS_KNOWLEDGE_AND_SETUP.md`

**Underlying forensic reports** (full commit-level evidence, every figure tagged `[MEASURED]` / `[INFERRED]`, all commands reproducible):
`agentic_network_forensics.md` · `mission_kit_forensics.md` · `mam_forensics.md` (819 lines) · `intensity_calibration.md`
