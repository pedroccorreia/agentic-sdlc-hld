# Zip Agentic Factory — Agent Guidelines & Execution Invariants

## 1. Single-Approval Batch Execution (Anti-Fatigue Protocol)
- **Consolidate Script Execution:** When performing multi-file generation, data transformations, or repository updates, NEVER execute fragmented, piecemeal commands that require the user to approve 10+ successive prompts.
- **Single-Shot Runner Pattern:** Write all generation logic into a single self-contained script in a scratch/work directory (e.g., `_work/run_update.py`) and execute it in a single command invocation so the user reviews and approves execution ONCE.
- **Pre-Validation & Self-Testing:** All scripts must perform internal validation and self-testing before reporting completion.

## 2. Decoupled Web & Data Architecture
- **Separate Data from Presentation:** Never inline large catalogs, entity registries, or dynamic models directly into 5,000+ line HTML files.
- **Dedicated Data Assets:** Store structured data in dedicated JSON or JS files (e.g., `architecture-unpack/data/skills_catalog.json`, `architecture-unpack/presentation/data/factory_data.js`) and load them dynamically via `<script src="data/factory_data.js"></script>` or `fetch()`.
- **Zero Regex HTML Surgery:** Update data files directly rather than executing risky regex search-and-replace scripts on monolithic HTML markup.

## 3. Upfront Permission Scoping
- If multiple writes or file touches are anticipated within a directory (such as `architecture-unpack/` or `.agents/skills/`), consolidate them or request the required directory scope upfront so that subsequent operations run without interrupting the developer.
