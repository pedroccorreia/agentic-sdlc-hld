---
name: Currency Precision Guard
description: AST linter and static analysis guard that detects and bans IEEE-754 floating-point arithmetic on currency, enforcing fixed-point minor units (cents) or Decimal types.
---

# Currency Precision Guard Skill

## Purpose
Enforce zero-tolerance static and AST linting rules across all codebase repositories, preventing engineers or code-generation agents from introducing binary floating-point numbers (`float`, `double`, `float32`, `float64`) for currency balances, interest calculations, or fee allocations.

---

## Double Diamond Design Process

### Phase 1: Discover (Divergent)
- **Problem Space & Context:**
  Standard hardware floating-point representations (IEEE-754) represent fractions as binary sums ($2^{-n}$). Most decimal fractions cannot be represented exactly in binary:
  ```python
  0.1 + 0.2 == 0.30000000000000004  # True in IEEE-754
  ```
  In a lending platform handling millions of daily transactions, cumulative floating-point errors create mysterious ledger imbalances, breaking double-entry proofs and triggering regulatory scrutiny.

### Phase 2: Define (Convergent)
- **AST Rules & Invariants:**
  - **Rule 1 (Data Type Ban):** Ban `float`, `double`, `float32`, `float64` in any struct, class, function parameter, or database column representing money.
  - **Rule 2 (Approved Representation):**
    - Option A: Signed integer cents (`int64` / `BIGINT`), e.g., $100.50 represented as `10050`.
    - Option B: High-precision decimal string / fixed-point type (`decimal.Decimal` in Python, `decimal.Decimal` in C#, `shopspring/decimal` in Go, `NUMERIC(18, 4)` in SQL).
  - **Rule 3 (Division Guard):** Every division operation involving currency must explicitly declare a rounding mode (e.g. `ROUND_HALF_EVEN`).

### Phase 3: Develop (Divergent)
- **Python / Go AST Scanner Implementation:**
  Inspects syntax trees during Phase 3 build and Phase 4 review:
  ```python
  import ast

  class CurrencyPrecisionVisitor(ast.NodeVisitor):
      def visit_Call(self, node):
          # Detect float(x)
          if isinstance(node.func, ast.Name) and node.func.id == "float":
              raise SyntaxError(f"Prohibited use of float() on line {node.lineno}")
          self.generic_visit(node)

      def visit_BinOp(self, node):
          # Detect binary division / without Decimal quantize
          if isinstance(node.op, ast.Div):
              pass # Flag division requiring Decimal
          self.generic_visit(node)
  ```

### Phase 4: Deliver (Convergent)
- **Deliverable:** Integrated pre-commit hook, CI/CD Cloud Build linter step, and ADK agent capability.

---

## Operational Guide & Instructions

### When to Apply
- Stage 3 code generation: run immediately after code authoring.
- Stage 4 review: block merge if any floating-point type is detected in financial paths.
- Reverse-engineering legacy C# .NET code: flag any legacy floats for conversion to integer cents.

---

## Verification & Exit Criteria
- [ ] 100% of money fields represented as integer cents or high-precision Decimal.
- [ ] Zero instances of `float`, `double`, or `float64` in financial packages.
- [ ] CI pipeline fails with exit code 1 if floating-point division is detected without explicit rounding.
