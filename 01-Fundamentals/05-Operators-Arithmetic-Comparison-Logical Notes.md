### JavaScript Operators (Arithmetic, Comparison, Logical)

#### 1. Definition
**Operators** are **symbols or keywords** that perform **operations** on one or more **operands** (values/variables). They are used for calculations, comparisons, and logic.

---

#### 2. Theory / Concept
Operators are classified by type and number of operands:

| Type | Description | Operands |
|------|-------------|----------|
| **Arithmetic** | Mathematical calculations | Unary/Binary |
| **Comparison** | Compare values → boolean | Binary |
| **Logical** | Combine booleans | Unary/Binary |
| **Assignment** | Assign values | Binary |
| **Others** | `++`, `--`, `??`, etc. | Varied |

**Precedence**: Order of evaluation (e.g., `*` before `+`). Use `()` to override.  
**Associativity**: Direction (left-to-right or right-to-left).

---

#### 3. Syntax
```js
// Arithmetic
5 + 3;     // 8

// Comparison
5 > 3;     // true

// Logical
true && false; // false

// Assignment
let x = 5;
x += 3;    // x = 8
```

---

#### 4. Types / Variants
| Category | Operators | Example |
|----------|-----------|---------|
| **Arithmetic** | `+`, `-`, `*`, `/`, `%`, `**` | `5 + 3` |
| **Unary Arithmetic** | `+`, `-`, `++`, `--` | `++x` |
| **Comparison** | `==`, `===`, `!=`, `!==`, `>`, `>=`, `<`, `<=` | `5 === 5` |
| **Logical** | `&&`, `||`, `!` | `true && false` |
| **Assignment** | `=`, `+=`, `-=`, `*=` | `x += 5` |
| **Modern (ES6+)** | `??`, `??=`, `&&=`, `||=` | `x ?? "default"` |

---

#### 5. Examples

**Example 1: Arithmetic**
```js
let a = 10, b = 3;
console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1
console.log(a ** b);  // 1000
```

**Example 2: Comparison**
```js
let x = 5, y = "5";
console.log(x === y); // false (type)
console.log(x == y);  // true (coercion)
console.log(x > 3);   // true
```

**Example 3: Logical**
```js
let p = true, q = false;
console.log(p && q);  // false
console.log(p || q);  // true
console.log(!p);      // false
```

**Example 4: Assignment**
```js
let n = 5;
n += 3;               // 8
n *= 2;               // 16
```

---

#### 6. Unary Operators

```js
let x = 5;
console.log(+x);      // 5
console.log(-x);      // -5
x++;                  // x=6 (post)
++x;                  // x=7 (pre)
```

---

#### 7. Short-Circuit & Nullish

```js
// &&
user && user.name;    // "John" or undefined

// ||
let theme = user.theme || "light";

// ??
let retries = config.retries ?? 3; // only if null/undefined
```

---

#### 8. Precedence & Associativity

```js
2 + 3 * 4;            // 14 (* first)
(2 + 3) * 4;          // 20
2 ** 3 ** 2;          // 512 (right-to-left)
```

**Common Order** (high to low):  
`()` → `**` → `* / %` → `+ -` → `< >` → `== ===` → `&&` → `||` → `=`

---

#### 9. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **"5" + 3 → "53"** | `+` concatenates | `Number("5") + 3` |
| **`==` coercion** | `0 == false` → true | Use `===` |
| **Precedence error** | `2 + 3 * 4` → 14 | Use `()` |
| **!x = y** | Precedence | `!(x = y)` |

```js
// Bad
if (userInput == 0) { } // true for "0", false

// Good
if (Number(userInput) === 0) { }
```

---

#### 10. Problem Solving / Practice Questions

1. **Exercise 1**: Build `calc(a, b, op)` for arithmetic.
2. **Exercise 2**: Validate form with comparisons/logicals.
3. **Exercise 3**: Short-circuit to safe-get user.name or "Guest".

**Sample Solution for Exercise 1**:
```js
function calc(a, b, op) {
  if (op === "+") return a + b;
  // ... add others
}
```

---

#### 11. Interview Tips & Questions

**Tips**:
- Say: **“Use `===` over `==` for safety.”**
- Explain **short-circuit**: `&&` for guards, `||` for defaults.
- Show **precedence** with example + fix.
- Know **`??` vs `||`** (`??` ignores falsy except null/undefined).

**Questions**:

- **Q**: `"1" + 2 + 3`?  
  **A**: `"123"` (`+` left-to-right, concat)

- **Q**: `false == 0`?  
  **A**: `true` → use `=== false`

- **Q**: Precedence of `&&` vs `||`?  
  **A**: `&&` higher → `a && b || c` = `(a && b) || c`

- **Q**: What is short-circuit?  
  **A**: `&&` skips right if left false; `||` skips if left true.

---

#### 12. Summary Table

| Key Point | Description |
|---------|-----------|
| **Definition** | Symbols for operations |
| **Arithmetic** | `+ - * / % **` (math) |
| **Comparison** | `== === > < >= <=` (boolean) |
| **Logical** | `&& || ! ??` (combine booleans) |
| **Assignment** | `= += -=` (update variables) |
| **Precedence** | `* /` > `+ -` > comparisons > logicals |
| **Best Practice** | `===`, `()`, short-circuit |
| **Common Bugs** | Coercion, precedence, `+` concat |
| **Next** | **Conditionals (if, switch)** |

---
