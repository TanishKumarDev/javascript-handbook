### JavaScript Conditionals (`if`, `switch`)

#### 1. Definition
**Conditionals** are **control structures** that **execute different code blocks** based on **boolean conditions**. They make your program **make decisions**.

---

#### 2. Theory / Concept
Conditionals evaluate an **expression** → **boolean** → **execute code** if `true`.

| Type | Use Case | Syntax |
|------|----------|--------|
| **`if`** | Single condition | `if (cond) { ... }` |
| **`if-else`** | Two options | `if (cond) { } else { }` |
| **`if-else if-else`** | Multiple options | `if () {} else if () {} else {}` |
| **`switch`** | Multiple exact values | `switch (val) { case x: ... }` |
| **Ternary** | One-liner | `cond ? true : false` |

**Step-by-Step Process**:
1. Evaluate condition → boolean.
2. If `true` → run **if** block.
3. If `false` → check **else if** → run **else**.

---

#### 3. Syntax

```js
// if
if (age >= 18) { console.log("Adult"); }

// if-else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// if-else if-else
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}

// switch
switch (day) {
  case "Mon": console.log("Work"); break;
  default: console.log("Weekend");
}

// Ternary
let status = age >= 18 ? "Adult" : "Minor";
```

---

#### 4. Types / Variants

| Type | Best For | Example |
|------|----------|---------|
| **`if-else`** | Simple yes/no | User logged in? |
| **`if-else if-else`** | Ranges | Grade calculator |
| **`switch`** | Exact values | Day of week |
| **Ternary** | Short condition | Set default |
| **Nested** | Complex logic | Permission check |

---

#### 5. Examples

**Example 1: `if-else`**
```js
let temp = 25;
if (temp > 30) {
  console.log("Hot");
} else {
  console.log("Cool");
}
```

**Example 2: `if-else if-else`**
```js
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else return "F";
}
```

**Example 3: `switch`**
```js
let fruit = "apple";
switch (fruit) {
  case "apple":
  case "banana":
    console.log("Fruit");
    break;
  case "carrot":
    console.log("Veggie");
    break;
  default:
    console.log("Unknown");
}
```

**Example 4: Ternary**
```js
let message = score >= 60 ? "Pass" : "Fail";
```

---

#### 6. `switch` vs `if-else`

| `switch` | `if-else` |
|----------|-----------|
| **Exact matches** | **Ranges/complex** |
| **Multiple cases** | **Boolean logic** |
| **No fall-through** (`break`) | **No breaks needed** |

```js
// switch (exact)
switch (status) {
  case "active": return "Green"; break;
}

// if-else (range)
if (age < 13) return "Child";
```

---

#### 7. Use Cases

- **Validation**: Check form inputs.
- **Routing**: Navigate by URL.
- **UI Logic**: Show/hide elements.
- **Games**: Win/lose conditions.
- **API Responses**: Handle success/error.

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **No `break` in `switch`** | Fall-through | Add `break;` |
| **Nested hell** | Too many levels | Refactor to function |
| **Falsy confusion** | `if (0)` → false | `if (x !== null)` |
| **Missing `else`** | Unhandled cases | Add `default` |
| **Ternary nesting** | Unreadable | Use `if-else` |

```js
// Bug: No break
switch (day) {
  case "Mon": console.log("Work");
  case "Tue": console.log("More work"); // Runs too!
}

// Fix:
case "Mon": console.log("Work"); break;
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Grade calculator (`if-else if`).
2. **Exercise 2**: Day checker (`switch`).
3. **Exercise 3**: User role access (`nested if`).

**Sample Solution for Exercise 1**:
```js
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else return "F";
}
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Say: **“`switch` for exact; `if` for ranges.”**
- Show **ternary** for short conditions.
- Explain **`break`** in `switch`.
- Use **early return** to avoid nesting.

**Questions**:

- **Q**: `switch` without `break`?  
  **A**: **Fall-through** — executes next cases.

- **Q**: Ternary vs `if-else`?  
  **A**: Ternary = one-liner; `if` = multi-line.

- **Q**: `if (0)`?  
  **A**: `false` (falsy).

- **Q**: Best for multiple strings?  
  **A**: `switch` with `break`.

---

#### 11. Summary Table

| Key Point | Description |
|---------|-----------|
| **Definition** | Execute code based on conditions |
| **`if-else`** | Simple decisions |
| **`switch`** | Multiple exact values |
| **Ternary** | One-line condition |
| **Best Practice** | Early return, `break`, avoid deep nesting |
| **Common Bugs** | No `break`, falsy confusion |
| **Next** | **Loops** (`for`, `while`) |

---