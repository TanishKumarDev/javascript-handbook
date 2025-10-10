
# JavaScript Variables

**Variables** in JavaScript are containers for storing data (e.g., numbers, strings, objects). Declared with `var`, `let`, or `const`, they differ in **scope** (where they’re accessible) and **hoisting** (how they’re initialized during execution). Understanding variables is critical for managing data, avoiding bugs, and mastering JavaScript’s dynamic typing.

**Why Variables Matter**:
- Store and manipulate data dynamically (e.g., user inputs, counters).
- Scope affects accessibility, preventing or causing conflicts.
- Hoisting influences code execution, especially in interviews (e.g., TDZ questions).
- Tie to data types (e.g., primitive vs. reference) and type checking (`typeof`).

### Key Characteristics
- **Declaration Keywords**: `var` (legacy), `let` (reassignable), `const` (fixed reference).
- **Scope Types**: Global, function, block.
- **Hoisting**: Declarations move to the top of their scope; behavior varies by keyword.
- **Dynamic Typing**: Variables can hold any data type (e.g., `let x = 1; x = "text";`).

---

## Key Concepts
- **Use Cases**: Store data (e.g., arrays for lists), control logic (e.g., loop counters), manage state.
- **Mutating vs. Non-Mutating**: `const` allows object/array mutation but not reassignment.
- **Edge Cases**: `var` scope leaks, TDZ errors, undeclared variables.
- **Best Practices**: Prefer `let/const`, use `"use strict"`, avoid global pollution.

---

### 1. Variable Declaration

Variables are declared using `var`, `let`, or `const`, each with distinct behaviors.

| **Keyword** | **Redeclare** | **Reassign** | **Scope** | **Hoisting** | **Use Case** |
| --- | --- | --- | --- | --- | --- |
| `var` | Yes | Yes | Function/Global | Hoisted with `undefined` | Legacy code, loops (avoid) |
| `let` | No | Yes | Block | Hoisted, TDZ | Reassignable variables (e.g., counters) |
| `const` | No | No | Block | Hoisted, TDZ | Constants, fixed references |

**Example**:
```js
var x = 10; var x = 20; x = 30; // Redeclare, reassign OK
let y = 10; y = 20; // Reassign OK
// let y = 30; // Error: Cannot redeclare
const z = 10; // z = 20; // Error: Cannot reassign
const obj = { name: "Alice" }; obj.name = "Bob"; // Mutation OK
console.log(x, y, z, obj.name);
// Output: 30 20 10 Bob
```

**Dry Run**:
1. `var x`: Declares `x`, assigns `10`, redeclares to `20`, reassigns to `30`.
2. `let y`: Declares `y`, assigns `10`, reassigns to `20`.
3. `const z`: Declares `z`, assigns `10` (fixed).
4. `const obj`: Declares object, mutates `name` to `"Bob"`.

**Edge Case**:
- **Const Mutation**: `const` arrays/objects can be mutated but not reassigned.
  ```js
  const arr = [1]; arr.push(2); // OK: [1, 2]
  // arr = [3]; // Error
  ```

**Interview Tip**:
- Clarify: “`const` locks the reference, not the data.”
- Connect to data types: “`const` with arrays (reference type) allows mutation, unlike primitives.”

### 2. Scope

**Scope** determines where a variable is accessible:
- **Global**: Outside functions/blocks, accessible everywhere.
- **Function**: Inside functions, accessible only there.
- **Block**: Inside `{}` (e.g., `if`, `for`) with `let/const`, limited to block.

**Example**:
```js
let globalVar = "global"; // Global scope
function test() {
  var funcVar = "function"; // Function scope
  let blockVar = "also function"; // Function scope
  if (true) {
    var varBlock = "leaks"; // Leaks to function/global
    let letBlock = "block"; // Block scope
    console.log(globalVar, funcVar, letBlock); // global function block
  }
  console.log(varBlock); // leaks
}
test();
console.log(globalVar, varBlock); // global leaks
// console.log(funcVar); // Error: Not defined
// console.log(letBlock); // Error: Not defined
```

**Dry Run**:
1. `globalVar`: Global, accessible everywhere.
2. Inside `test`:
   - `funcVar` (`var`): Function-scoped, accessible in `test`.
   - `blockVar` (`let`): Function-scoped.
   - Inside `if`:
     - `varBlock` (`var`): Leaks to function/global scope.
     - `letBlock` (`let`): Block-scoped, only in `if`.
3. Logs: `globalVar`, `funcVar`, `letBlock` in `if`; `varBlock` outside `if`.
4. Outside `test`: `globalVar`, `varBlock` accessible; others throw errors.

**Output**:
```
global function block
leaks
global leaks
```

**Edge Case**:
- **Var Leakage**: `var` in loops/forEach causes issues (see Q8 in interviews).
  ```js
  for (var i = 0; i < 3; i++) {} console.log(i); // 3 (leaks)
  ```

**Interview Tip**:
- Emphasize: “Use `let/const` for block scope to avoid `var` leaks.”
- Connect to arrays: “Block scope is critical when iterating arrays with `let` in `for` loops.”

### 3. Hoisting

**Hoisting** moves variable and function declarations to the top of their scope during the **creation phase**, but initialization stays in place.

- **var**: Hoisted with `undefined`.
- **let/const**: Hoisted but in **Temporal Dead Zone (TDZ)**, inaccessible until declared.
- **Function Declarations**: Fully hoisted (code included).

**Example**:
```js
console.log(a); // undefined
var a = 10;
console.log(a); // 10
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
fn(); // Hello
function fn() { console.log("Hello"); }
```

**Dry Run**:
1. **Creation Phase**:
   - `var a`: Hoisted, set to `undefined`.
   - `let b`: Hoisted, in TDZ.
   - `fn`: Fully hoisted with code.
2. **Execution Phase**:
   - `console.log(a)`: Prints `undefined`.
   - `a = 10`: Assigns `10`.
   - `console.log(a)`: Prints `10`.
   - `console.log(b)`: Errors (TDZ).
   - `fn()`: Runs, prints `Hello`.

**Output**:
```
undefined
10
Hello
```

**Edge Case**:
- **TDZ in Async**: Accessing `let` in `setTimeout` before declaration fails.
  ```js
  setTimeout(() => console.log(x), 0); // ReferenceError
  let x = 10;
  ```

**Interview Tip**:
- Explain TDZ: “`let/const` are hoisted but block access until declared, unlike `var`.”
- Link to `typeof`: “`typeof undeclaredVar` returns `"undefined"`, safe for hoisted checks.”

### 4. Connection to Data Types and `typeof`

Variables hold data types (primitives or references), and their behavior ties to type checking.

- **Primitive Variables**: Copied by value, immutable.
  ```js
  let str = "hello"; str = "world"; // New value, not mutation
  ```
- **Reference Variables**: Share memory, mutable (e.g., `const` arrays).
  ```js
  const arr = [1]; arr.push(2); // OK: [1, 2]
  ```
- **Type Checking**: Use `typeof` to verify variable types.
  ```js
  let x = 10;
  console.log(typeof x); // number
  ```

**Edge Case**:
- **Null Bug**: `typeof null` → `"object"`, impacts variable checks.
  ```js
  let x = null; if (typeof x === "object" && x === null) console.log("Null");
  ```

**Interview Tip**:
- Say: “I check variable types with `typeof` and `Array.isArray()` for arrays, combining with `=== null` for safety.”

### 5. Interview Questions and Answers

#### Beginner-Level
1. **What’s the difference between `var`, `let`, and `const`?**
   - **Answer**: `var` is function-scoped, redeclarable, hoisted with `undefined`. `let` is block-scoped, reassignable, TDZ. `const` is block-scoped, non-reassignable, TDZ.
   - **Code**: `var x = 1; var x = 2; let y = 1; y = 2; const z = 1;`
   - **Tip**: Mention `const` mutation for objects/arrays.

2. **What is variable scope?**
   - **Answer**: Scope defines accessibility: global (everywhere), function (within functions), block (within `{}` with `let/const`).
   - **Code**: `if (true) { let x = 1; } console.log(x); // Error`
   - **Tip**: Highlight `var` leakage issues.

3. **What is hoisting?**
   - **Answer**: Declarations move to scope’s top; `var` gets `undefined`, `let/const` in TDZ.
   - **Code**: `console.log(x); var x = 10; // undefined`
   - **Tip**: Draw creation vs execution phase.

4. **Can you redeclare `let` in the same scope?**
   - **Answer**: No, throws `SyntaxError`; `var` allows it.
   - **Code**: `let x = 1; let x = 2; // Error`
   - **Tip**: Contrast with `var`.

5. **What happens when you access a `const` before declaration?**
   - **Answer**: `ReferenceError` due to TDZ.
   - **Code**: `console.log(x); const x = 1; // Error`
   - **Tip**: Link to `typeof x` → `"undefined"` for undeclared.

#### Intermediate-Level
6. **Why does `const` allow array mutations?**
   - **Answer**: `const` locks the reference, not the data.
   - **Code**: `const arr = [1]; arr.push(2); // OK`
   - **Tip**: Connect to reference types (from data types section).

7. **What’s the output in a `var` loop with closures?**
   - **Code**:
     ```js
     for (var i = 0; i < 3; i++) {
       setTimeout(() => console.log(i), 0); // 3, 3, 3
     }
     for (let i = 0; i < 3; i++) {
       setTimeout(() => console.log(i), 0); // 0, 1, 2
     }
     ```
   - **Answer**: `var` shares one `i` (final value `3`); `let` creates new binding per iteration.
   - **Tip**: Common interview trap; explain block scope.

8. **What is TDZ, and why does it exist?**
   - **Answer**: TDZ is the period where `let/const` are hoisted but inaccessible, preventing unsafe access.
   - **Code**: `console.log(x); let x = 1; // Error`
   - **Tip**: Contrast with `var`.

9. **How does `"use strict"` affect variables?**
   - **Answer**: Prevents undeclared variables, throwing `ReferenceError`.
   - **Code**: `"use strict"; x = 10; // Error`
   - **Tip**: Emphasize modern JS safety.

10. **What’s the output?**
    - **Code**: `var x = 1; function test() { var x = 2; console.log(x); } test(); console.log(x);`
    - **Answer**: `2`, `1` (function-scoped `x`).
    - **Tip**: Explain scope hierarchy.

#### Advanced-Level
11. **How does hoisting affect async code?**
    - **Answer**: Hoisted `var` is `undefined`; `let/const` in TDZ cause errors in async callbacks.
    - **Code**: `setTimeout(() => console.log(x), 0); let x = 10; // Error`
    - **Tip**: Link to event loop.

12. **What’s the difference between undeclared and undefined variables?**
    - **Answer**:
      - **Undeclared**: No declaration, global in non-strict mode.
      - **Undefined**: Declared with `var`, no value.
    - **Code**: `console.log(x); // undefined (var) vs ReferenceError (undeclared in strict)`
    - **Tip**: Use `typeof` for safe checks.

13. **Why avoid `var` in modern JS?**
    - **Answer**: No block scope, redeclaration risks, hoisting issues.
    - **Code**: `for (var i = 0; i < 3; i++) {} console.log(i); // 3`
    - **Tip**: Advocate `let/const`.

14. **How does block scope help with array iteration?**
    - **Answer**: `let` in `for` loops creates fresh bindings, avoiding closure issues in array iterations.
    - **Code**: `let arr = [1, 2]; for (let i = 0; i < arr.length; i++) { setTimeout(() => console.log(arr[i]), 0); } // 1, 2`
    - **Tip**: Connect to arrays cheat sheet.

15. **What’s the output?**
    - **Code**:
      ```js
      var x = 1;
      if (true) { let x = 2; console.log(x); }
      console.log(x);
      ```
    - **Answer**: `2`, `1` (`let x` is block-scoped).
    - **Tip**: Clarify scope boundaries.

---

## Best Practices for Interviews

1. **Prefer `let/const`**:
   - Use `let` for reassignable variables, `const` for fixed references.
   ```js
   const arr = [1]; arr.push(2); // OK
   ```

2. **Use `"use strict"`**:
   - Prevents undeclared globals.
   ```js
   "use strict"; x = 10; // Error
   ```

3. **Avoid Var in Loops**:
   - Use `let` for correct closure behavior.
   ```js
   for (let i = 0; i < 3; i++) { console.log(i); } // 0, 1, 2
   ```

4. **Check Types with `typeof`**:
   - Safe for undeclared variables, connects to data types.
   ```js
   console.log(typeof undeclared); // undefined
   ```

5. **Explain Scope Visually**:
   - Sketch global → function → block scopes as nested boxes.

---

## Common Pitfalls

1. **Var Leakage**:
   - `var` in blocks leaks to outer scope.
   ```js
   if (true) { var x = 1; } console.log(x); // 1
   ```

2. **TDZ Errors**:
   - Accessing `let/const` before declaration.
   ```js
   console.log(x); let x = 1; // Error
   ```

3. **Global Pollution**:
   - Undeclared variables become globals.
   ```js
   function test() { x = 10; } test(); console.log(x); // 10
   ```

4. **Closure in Loops**:
   - `var` in loops shares one variable.
   ```js
   for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i)); } // 3, 3, 3
   ```

5. **Const Misunderstanding**:
   - Assuming `const` prevents all changes.
   ```js
   const obj = { x: 1 }; obj.x = 2; // OK
   ```

---

## Quick Reference Table

| **Keyword** | **Scope** | **Hoisting** | **Redeclare** | **Reassign** | **Example** |
| --- | --- | --- | --- | --- | --- |
| `var` | Function/Global | `undefined` | Yes | Yes | `var x = 1; var x = 2;` |
| `let` | Block | TDZ | No | Yes | `let x = 1; x = 2;` |
| `const` | Block | TDZ | No | No | `const x = 1;` |

| **Scope** | **Description** | **Example** |
| --- | --- | --- |
| Global | Accessible everywhere | `let x = 1;` |
| Function | Within function | `function f() { var x = 1; }` |
| Block | Within `{}` (`let/const`) | `if (true) { let x = 1; }` |
