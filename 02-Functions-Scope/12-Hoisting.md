### JavaScript Hoisting

#### 1. Definition
**Hoisting** is JavaScript’s behavior of **moving variable and function declarations to the top of their scope** during the **compilation phase**, before the code actually runs.

---

#### 2. Theory / Concept
JavaScript processes code in **two phases**:
1. **Compilation** → All declarations are hoisted.
2. **Execution** → Code runs line by line.

- Only **declarations** are hoisted — **assignments stay in place**.
- `var` → hoisted and set to `undefined`.
- `let`/`const` → hoisted but **not initialized** → enter **Temporal Dead Zone (TDZ)**.
- **Function declarations** → fully hoisted (name + body).
- **Function expressions & arrow functions** → only variable is hoisted (`undefined`).

**Step-by-Step Process**:
1. JS engine scans the scope.
2. Moves `var` and function declarations to the top.
3. `let`/`const` are hoisted but remain inaccessible until declared.
4. Execution begins.

---

#### 3. Syntax
```javascript
// var Hoisting
console.log(x); // undefined
var x = 10;

// let/const (TDZ)
console.log(y); // ReferenceError
let y = 20;

// Function Declaration (fully hoisted)
greet(); // Works
function greet() {
    console.log("Hello");
}

// Function Expression (not hoisted)
sayHi(); // TypeError
var sayHi = function() {
    console.log("Hi");
};
```

---

#### 4. Types / Variants
| Type                     | Behavior                                                                 | Code Example |
|--------------------------|--------------------------------------------------------------------------|--------------|
| **`var` Hoisting**       | Hoisted + initialized to `undefined`                                     | ```javascript
| **`let/const` Hoisting** | Hoisted but **not initialized** → TDZ                                    | ```javascript<br>console.log(b); // ReferenceError<br>let b = 10;``` |
| **Function Declaration** | Fully hoisted (name + body)                                              | ```javascript<br>hello(); // "Hi"<br>function hello() { console.log("Hi"); }``` |
| **Function Expression**  | Variable hoisted as `undefined`                                          | ```javascript<br>fn(); // TypeError<br>var fn = () => console.log("No");``` |
| **Class Declaration**    | Hoisted but in TDZ (like `let`)                                          | ```javascript<br>new User(); // ReferenceError<br>class User {}``` |

---

#### 5. Examples

**Example 1: `var` Hoisting**
```javascript
console.log(name); // undefined
var name = "Alice";
console.log(name); // "Alice"

// JS sees it as:
var name;
console.log(name); // undefined
name = "Alice";
```

**Example 2: `let` in TDZ**
```javascript
{
    console.log(age); // ReferenceError
    let age = 25;
}
```

**Example 3: Function Hoisting**
```javascript
sayHello(); // "Hello!"

function sayHello() {
    console.log("Hello!");
}
```

**Example 4: Function Expression (Not Hoisted)**
```javascript
console.log(typeof fn); // "undefined"
var fn = function() { return "Hi"; };
console.log(typeof fn); // "function"
```

---

#### 6. Temporal Dead Zone (TDZ)

The **TDZ** is the period from the start of the block until the `let`/`const` is declared.

```javascript
console.log(typeof x); // ReferenceError (not "undefined"!)
let x = 100;
```

**TDZ in Default Parameters (Bug):**
```javascript
// Bad
function bad(a = b, b = 5) { } // ReferenceError

// Good
function good(a = 5, b = a + 1) {
    return a + b;
}
```

---

#### 7. Use Cases
- **Call functions before declaring** (function declarations only).
- **Avoid bugs** by using `let`/`const` → prevents use before init.
- **Strict mode** → catches undeclared variables.
- **Code clarity** → declare variables at top (modern: use `let`/`const`).

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **Using `let` before declaration** | TDZ | Declare first |
| **Thinking `let` is not hoisted** | Misunderstanding | It **is** hoisted, just not initialized |
| **`var` in loops + closures** | Function scope | Use `let` or IIFE |
| **Assuming expressions hoist** | Confusion | Only declarations hoist |

**Bug: Loop with `var`**
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3
```

**Fix with `let`:**
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Predict the output:
   ```javascript
   console.log(a);
   var a = 1;
   console.log(b);
   let b = 2;
   hello();
   function hello() { console.log("Hi"); }
   ```
2. **Exercise 2**: Fix default parameter TDZ error.
3. **Exercise 3**: Create 5 buttons — each logs its own number.

**Sample Solution for Exercise 1**:
```javascript
undefined
ReferenceError
Hi
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Say: **“Hoisting happens at compile time.”**
- Show **TDZ with `typeof`** → throws error!
- Compare `var` vs `let` vs function.
- Key phrase: **“Declarations up, assignments stay.”**

**Questions**:

- **Q**: What is hoisting?  
  **A**: Moving declarations to the top of scope during compilation.

- **Q**: What prints?
  ```javascript
  console.log(x);
  var x = 10;
  ```
  **A**: `undefined`

- **Q**: Why does `typeof x` in TDZ throw error?  
  **A**: `let`/`const` are hoisted but uninitialized — even `typeof` fails.

- **Q**: Are arrow functions hoisted?  
  **A**: No — they are expressions, variable is hoisted as `undefined`.

---

#### 11. Summary Table

| Key Point              | Description |
|------------------------|-------------|
| **Definition**         | Declarations moved to top of scope |
| **Core Concept**       | `var` → `undefined`, `let` → TDZ, functions → full |
| **Syntax**             | `var`, `let`, `function`, expressions |
| **Variants**           | `var`, `let/const`, decl vs expr, class |
| **Common Use**         | Call early, avoid TDZ bugs |
| **Typical Errors**     | `let` before init, `var` in loops |
| **Practice Focus**     | Predict output, fix loops |
| **Interview Prep**     | TDZ, `var` vs `let`, function hoisting |

---