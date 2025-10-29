### JavaScript Variables (`var`, `let`, `const`)

#### 1. Definition
**Variables** are **named containers** that store data values in memory. They allow you to **store**, **retrieve**, and **update** information in your program.

> Think of a variable as a **labeled box**:
> - Box labeled `userName` → contains `"Alice"`
> - Box labeled `userAge` → contains `25`

---

#### 2. Theory / Concept

| Keyword | Scope | Reassignable? | Redeclarable? | Hoisting |
|--------|-------|---------------|----------------|----------|
| **`let`** | **Block** `{}` | Yes | No | Yes (TDZ) |
| **`const`** | **Block** `{}` | No | No | Yes (TDZ) |
| **`var`** | **Function** | Yes | Yes | Yes (to `undefined`) |

> **TDZ = Temporal Dead Zone** → `let`/`const` exist but can't be accessed before declaration.

---

#### 3. Syntax

```js
let name = "Alice";        // mutable
const PI = 3.14159;        // immutable (reassignment)
var legacy = "old way";    // avoid
```

---

#### 4. Types / Variants

| Type | Use Case |
|------|--------|
| **`let`** | When value **changes** |
| **`const`** | When value **never reassigns** |
| **`var`** | Legacy — **avoid in modern JS** |

> **Note**: `const` prevents **reassignment**, not **mutation**:
```js
const arr = [1, 2];
arr.push(3);     // OK
arr = [4, 5];    // TypeError
```

---

#### 5. Examples

**Example 1: `let` (Reassignable)**
```js
let score = 90;
score = 95;      // OK
console.log(score); // 95
```

**Example 2: `const` (Immutable Reference)**
```js
const user = { name: "Bob" };
user.name = "Charlie";  // OK
// user = { name: "Dave" }; // TypeError
```

**Example 3: `var` (Avoid)**
```js
var x = 10;
var x = 20;      // No error! Confusing
console.log(x);  // 20
```

---

#### 6. Scope Comparison

```js
// Block Scope (let, const)
{
  let x = 1;
  const y = 2;
}
console.log(x); // ReferenceError

// Function Scope (var)
function test() {
  var z = 3;
}
console.log(z); // ReferenceError

// Global Scope
let globalVar = "I'm global";
```

---

#### 7. Hoisting Behavior

| Declaration | Hoisted? | Initial Value | Accessible Before Declaration? |
|------------|---------|----------------|-------------------------------|
| `var`      | Yes | `undefined` | Yes (but `undefined`) |
| `let`      | Yes | **TDZ** | No → `ReferenceError` |
| `const`    | Yes | **TDZ** | No → `ReferenceError` |

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
```

---

#### 8. Naming Rules & Conventions

**Rules (Must Follow)**:
- Start with: `letter`, `_`, `$`
- Cannot start with: `number`
- No spaces or hyphens
- Not a reserved word

```js
let userName = "john";     // OK
let _id = 123;             // OK
let $button = "click";     // OK
// let 1stUser = "bad";    // SyntaxError
// let user-name = "bad";  // SyntaxError
```

**Conventions (Best Practice)**:
- `camelCase`
- Descriptive names
- `CONSTANTS_IN_UPPER_CASE`

```js
let firstName = "John";
const MAX_LOGIN_ATTEMPTS = 3;
```

---

#### 9. Best Practices

| Rule | Example |
|------|--------|
| **Use `const` by default** | `const user = {...}` |
| **Use `let` only when reassigning** | `let count = 0; count++;` |
| **Never use `var`** | Avoid legacy bugs |
| **Declare at top of scope** | Improves readability |
| **Group related variables** | Use objects |

```js
// Good
const API_URL = "https://api.com";
let isLoading = false;
let userData = null;
```

---

#### 10. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **Using `var` in loops** | Leaks to outer scope | Use `let` |
| **Reassigning `const`** | Forgetting rule | Use `let` |
| **Not initializing `const`** | `const x;` | Must initialize |
| **Accessing `let` before declaration** | TDZ | Declare first |
| **Poor naming** | `let x = 5;` | Use `let score = 5;` |

```js
// Bug: var in loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

// Fix: let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}
```

---

#### 11. Practice Exercises

```js
// Exercise 1: User Profile
const userId = 101;
let userName = "alice_dev";
let isPremium = true;

// Update name
userName = "Alice";

// Exercise 2: Shopping Cart
let itemCount = 0;
let cartTotal = 0;
const TAX_RATE = 0.08;

// Add item
itemCount++;
cartTotal += 29.99;

// Exercise 3: Config Object
const appConfig = {
  name: "MyApp",
  version: "2.0",
  debug: true
};

// Modify
appConfig.debug = false;
```

---

#### 12. Interview Tips & Questions

**Tips**:
- Say: **“`const` by default, `let` when needed, never `var`.”**
- Explain **block scope** vs **function scope**.
- Show **hoisting + TDZ** example.
- Use **real-world analogy**: `const` = read-only label, not immutable content.

**Common Questions**:

- **Q**: `let` vs `const`?  
  **A**: `let` = reassignable; `const` = not reassignable (but mutable).

- **Q**: Why avoid `var`?  
  **A**: Function scope, hoisting to `undefined`, redeclaration → bugs.

- **Q**: What is TDZ?  
  **A**: Time between `let/const` declaration and initialization — access causes `ReferenceError`.

- **Q**: Can `const` object change?  
  **A**: Yes — properties can change, but variable cannot be reassigned.

---

#### 13. Summary Table

| Key Point | Description |
|---------|-----------|
| **Definition** | Named storage for data |
| **Keywords** | `let` (mutable), `const` (immutable ref), `var` (avoid) |
| **Scope** | `let/const` → block; `var` → function |
| **Hoisting** | `var` → `undefined`; `let/const` → TDZ |
| **Best Practice** | `const` default → `let` only if reassigning |
| **Naming** | `camelCase`, descriptive, `UPPER_CASE` for true constants |
| **Common Bugs** | `var` in loops, TDZ, poor names |
| **Next** | **Data Types** (number, string, boolean, etc.) |

---