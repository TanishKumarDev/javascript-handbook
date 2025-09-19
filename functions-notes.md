# JavaScript Functions 

**Why Functions Matter**:
- Organize code into reusable units (e.g., form validation, calculations).
- Enable advanced concepts (closures, callbacks, recursion).
- Common in interviews for scoping, `this`, and functional programming.
- Tie to arrays (higher-order methods), error handling (try-catch in functions), and JavaScript working (async callbacks).

### Key Constructs
- **Declaration**: Named, hoisted function.
- **Expression**: Anonymous or named, assigned to variables.
- **Arrow**: Concise ES6 syntax, no own `this`.
- **Higher-Order**: Functions that take/return functions.
- **Closure**: Functions retaining access to outer scope.
- **IIFE**: Immediately invoked functions for encapsulation.
- **Recursion**: Functions calling themselves.

### Key Characteristics
- **Scope**: Block (with `let`/`const`) or function scope (with `var`).
- **Hoisting**: Declarations are hoisted; expressions are not.
- **Return**: Defaults to `undefined` if omitted.
- **This**: Context depends on call site, altered by `call`/`bind`.

---

## JavaScript Functions: 

### 1. Function Declaration

Named function, hoisted, callable anywhere in scope.

**Syntax**:
```js
function name(param) {
  return value;
}
```

**Example**:
```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
```

**Dry Run**:
1. `greet("Alice")`: `name = "Alice"`.
2. Returns `"Hello, Alice!"`.
3. Prints result.

**Output**: `Hello, Alice!`.

**Edge Case**:
- **Missing Argument**: Parameter becomes `undefined`.
  ```js
  console.log(greet()); // Hello, undefined!
  ```

**Interview Tip**:
- Link to JavaScript working: “Declarations are hoisted to the top of scope.”
- Say: “I use declarations for top-level functions due to hoisting.”

### 2. Function Expression

Function assigned to a variable, not hoisted.

**Syntax**:
```js
const name = function(param) {
  return value;
};
```

**Example**:
```js
const square = function(num) {
  return num * num;
};
console.log(square(4));
```

**Dry Run**:
1. `square = function`, `num = 4`.
2. Returns `4 * 4` → `16`.
3. Prints `16`.

**Output**: `16`.

**Edge Case**:
- **Call Before Definition**: Causes error.
  ```js
  console.log(square(2)); // ReferenceError
  const square = function(num) { return num * num; };
  ```

**Interview Tip**:
- Link to variables: “Expressions use `const` for immutability.”
- Say: “I use expressions for callbacks or module exports.”

### 3. Arrow Function (ES6+)

Concise syntax, no own `this`, ideal for short functions or callbacks.

**Syntax**:
```js
const name = (param) => value; // Implicit return
// OR
const name = (param) => { return value; }; // Explicit return
```

**Example**:
```js
const double = (num) => num * 2;
console.log(double(5));
```

**Dry Run**:
1. `double(5)`: `num = 5`.
2. Returns `5 * 2` → `10`.
3. Prints `10`.

**Output**: `10`.

**Edge Case**:
- **No `this` Binding**: Inherits `this` from outer scope.
  ```js
  const obj = { value: 42, fn: () => this.value };
  console.log(obj.fn()); // undefined (no own this)
  ```

**Interview Tip**:
- Link to JavaScript working: “Arrow functions are great for async callbacks.”
- Say: “I use arrow functions for concise syntax but avoid them for methods needing `this`.”

### 4. Parameters and Arguments

Functions accept inputs via parameters; arguments are values passed during calls.

**Example (Default Parameters)**:
```js
function greet(greeting = "Hello", name = "Guest") {
  return `${greeting}, ${name}!`;
}
console.log(greet("Hi", "Alice"));
console.log(greet());
```

**Dry Run**:
1. `greet("Hi", "Alice")`: `greeting = "Hi"`, `name = "Alice"`, returns `Hi, Alice!`.
2. `greet()`: `greeting = "Hello"`, `name = "Guest"`, returns `Hello, Guest!`.

**Output**: `Hi, Alice!`, `Hello, Guest!`.

**Example (Rest Parameters)**:
```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));
```

**Dry Run**:
1. `sum(1, 2, 3)`: `numbers = [1, 2, 3]`.
2. `reduce`: `0 + 1 + 2 + 3` → `6`.
3. Prints `6`.

**Output**: `6`.

**Example (Destructuring)**:
```js
function display({ name, age }) {
  return `${name} is ${age} years old.`;
}
console.log(display({ name: "Alice", age: 30 }));
```

**Dry Run**:
1. `display({ name: "Alice", age: 30 })`: Destructures to `name = "Alice"`, `age = 30`.
2. Returns `Alice is 30 years old.`.

**Output**: `Alice is 30 years old.`.

**Edge Case**:
- **Type Coercion**: Undefined parameters can cause issues.
  ```js
  function add(a, b) { return a + b; }
  console.log(add(1)); // NaN (1 + undefined)
  ```

**Interview Tip**:
- Link to arrays: “Rest parameters create arrays, perfect for `reduce`.”
- Say: “I use default parameters to handle missing arguments safely.”

### 5. Return Values

Functions return a value or `undefined` by default.

**Example**:
```js
function test() {
  return 42;
  console.log("Unreached");
}
console.log(test());
```

**Dry Run**:
1. `test()`: Returns `42`, skips rest.
2. Prints `42`.

**Output**: `42`.

**Edge Case**:
- **No Return**: Defaults to `undefined`.
  ```js
  function noReturn() {}
  console.log(noReturn()); // undefined
  ```

**Interview Tip**:
- Link to operators: “Early `return` with conditions optimizes logic.”
- Say: “I always ensure explicit returns for clarity.”

### 6. Function Scope and Hoisting

Functions create scope; declarations are hoisted, expressions are not.

**Example**:
```js
try {
  console.log(hoisted());
  function hoisted() {
    let local = "scoped";
    return "I'm hoisted";
  }
  console.log(local);
} catch (error) {
  console.log(error.name, error.message);
}
```

**Dry Run**:
1. `hoisted()`: Hoisted, returns `I'm hoisted`.
2. `local`: Undefined outside function → throws `ReferenceError`.
3. `catch`: Prints `ReferenceError`, `local is not defined`.

**Output**: `I'm hoisted`, `ReferenceError local is not defined`.

**Interview Tip**:
- Link to variables: “`let` in functions is block-scoped.”
- Say: “I use `let`/`const` to avoid `var` scope issues.”

### 7. The `this` Keyword

Refers to the object calling the function, altered by `call`/`bind`.

**Example**:
```js
const obj = {
  value: 42,
  method: function() {
    return this.value;
  }
};
console.log(obj.method());
console.log(obj.method.call({ value: 100 }));
```

**Dry Run**:
1. `obj.method()`: `this = obj`, returns `42`.
2. `method.call({ value: 100 })`: `this = { value: 100 }`, returns `100`.

**Output**: `42`, `100`.

**Edge Case**:
- **Arrow Functions**: No own `this`, inherit from outer scope.
  ```js
  const obj = { value: 42, fn: () => this.value };
  console.log(obj.fn()); // undefined
  ```

**Interview Tip**:
- Link to JavaScript working: “`this` depends on call site, managed by the call stack.”
- Say: “I use `call`/`bind` to control `this` explicitly.”

### 8. Higher-Order Functions and Callbacks

Functions that take/return functions; callbacks are functions passed as arguments.

**Example**:
```js
function process(numbers, callback) {
  return numbers.map(callback);
}
const double = n => n * 2;
console.log(process([1, 2, 3], double));
```

**Dry Run**:
1. `process([1, 2, 3], double)`: `numbers = [1, 2, 3]`, `callback = double`.
2. `map`: Applies `double` to each → `[2, 4, 6]`.
3. Prints `[2, 4, 6]`.

**Output**: `[2, 4, 6]`.

**Edge Case**:
- **Async Callbacks**: Need proper error handling.
  ```js
  setTimeout(() => console.log("Done"), 0); // Async callback
  ```

**Interview Tip**:
- Link to arrays: “Higher-order functions like `map` are common for arrays.”
- Say: “I use callbacks for async tasks and functional programming.”

### 9. IIFE (Immediately Invoked Function Expression)

Function executed immediately, often for encapsulation.

**Example**:
```js
try {
  (function() {
    let private = "secret";
    console.log(private);
  })();
  console.log(private);
} catch (error) {
  console.log(error.name, error.message);
}
```

**Dry Run**:
1. IIFE: Prints `secret`.
2. `private`: Undefined outside IIFE → throws `ReferenceError`.
3. `catch`: Prints `ReferenceError`, `private is not defined`.

**Output**: `secret`, `ReferenceError private is not defined`.

**Interview Tip**:
- Link to error handling: “IIFEs with `try...catch` ensure safe encapsulation.”
- Say: “I use IIFEs for one-time initialization or private variables.”

### 10. Closures

Functions retaining access to outer scope variables, enabling data encapsulation.

**Example**:
```js
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
}
const myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.get());
```

**Dry Run**:
1. `counter()`: Creates `count = 0`, returns object with `increment`, `get`.
2. `myCounter.increment()`: `++count` → `1`, returns `1`.
3. `myCounter.get()`: Returns `count` → `1`.

**Output**: `1`, `1`.

**Edge Case**:
- **Scope Access**: `count` is private, inaccessible outside.
  ```js
  console.log(myCounter.count); // undefined
  ```

**Interview Tip**:
- Link to variables: “Closures use lexical scope to keep variables private.”
- Say: “I use closures for state management and encapsulation.”

### 11. Recursion

Functions calling themselves, requiring a base case to avoid infinite loops.

**Example**:
```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));
```

**Dry Run**:
1. `fibonacci(5)`: `n > 1`, calls `fibonacci(4) + fibonacci(3)`.
2. `fibonacci(4)`: `fibonacci(3) + fibonacci(2)` → `2 + 1` → `3`.
3. `fibonacci(3)`: `fibonacci(2) + fibonacci(1)` → `1 + 1` → `2`.
4. `fibonacci(5)`: `3 + 2` → `5`.

**Output**: `5`.

**Edge Case**:
- **Stack Overflow**: No base case causes infinite recursion.
  ```js
  function loop() { loop(); } // RangeError
  ```

**Interview Tip**:
- Link to loops: “Recursion replaces loops for problems like tree traversal.”
- Say: “I ensure base cases to prevent stack overflow.”

### 12. Pure vs. Impure Functions

**Pure**: Same input → same output, no side effects.
**Impure**: Modifies external state or has side effects.

**Example (Pure)**:
```js
function pureAdd(a, b) {
  return a + b;
}
console.log(pureAdd(1, 2));
```

**Output**: `3`.

**Example (Impure)**:
```js
let total = 0;
function impureAdd(amount) {
  total += amount;
}
impureAdd(100);
console.log(total);
```

**Output**: `100`.

**Interview Tip**:
- Link to functional programming: “Pure functions are predictable and testable.”
- Say: “I prefer pure functions for maintainability.”

### 13. Connection to Previous Topics

- **Data Types**: Functions handle various types; coercion in parameters.
  ```js
  function add(a, b) { return a + b; } console.log(add("1", 2)); // "12"
  ```
- **Variables**: Functions create scope; `let`/`const` are block-scoped.
  ```js
  function fn() { let x = 1; } console.log(x); // ReferenceError
  ```
- **Operators**: Used in function logic (e.g., `===` in conditions).
  ```js
  function check(x) { return x === 0; }
  ```
- **Conditionals**: Functions often include `if` for logic.
  ```js
  function even(num) { if (num % 2 === 0) return true; return false; }
  ```
- **Arrays**: Higher-order functions like `map` process arrays.
  ```js
  [1, 2, 3].map(x => x * 2); // [2, 4, 6]
  ```
- **Loops**: Functions replace repetitive loops.
  ```js
  function printArray(arr) { for (let v of arr) console.log(v); }
  ```
- **Error Handling**: Functions use `try...catch` for robustness.
  ```js
  function safeParse(json) {
    try { return JSON.parse(json); } catch (e) { return null; }
  }
  ```
- **JavaScript Working**: Async functions use event loop for callbacks.
  ```js
  function asyncFn(cb) { setTimeout(() => cb("Done"), 0); }
  ```

**Interview Tip**:
- Say: “I combine functions with `Array.isArray()` or `try...catch` for robust code.”

---

## Interview Questions and Answers

### Beginner-Level
1. **What is a function in JavaScript?**
   - **Answer**: A reusable code block that performs a task, accepting parameters and returning values.
   - **Code**: `function add(a, b) { return a + b; } console.log(add(1, 2)); // 3`
   - **Tip**: Mention modularity.

2. **What’s the difference between declaration and expression?**
   - **Answer**: Declarations are hoisted; expressions are not, assigned to variables.
   - **Code**: 
     ```js
     console.log(decl()); // Works
     function decl() { return "Hi"; }
     console.log(expr()); // ReferenceError
     const expr = () => "Hi";
     ```
   - **Tip**: Link to hoisting.

3. **What does an arrow function do?**
   - **Answer**: Concise function with no own `this`, ideal for callbacks.
   - **Code**: `const add = (a, b) => a + b; console.log(add(1, 2)); // 3`
   - **Tip**: Mention `this` behavior.

4. **What’s the output?**
   - **Code**: `function test() {} console.log(test());`
   - **Answer**: `undefined` (no return statement).
   - **Tip**: Explain default return.

5. **What are default parameters?**
   - **Answer**: Parameters with fallback values if undefined.
   - **Code**: `function greet(name = "Guest") { return name; } console.log(greet()); // Guest`
   - **Tip**: Link to ES6.

### Intermediate-Level
6. **How does `this` work in functions?**
   - **Answer**: Refers to the calling object, altered by `call`/`bind`.
   - **Code**: 
     ```js
     const obj = { value: 42, fn: function() { return this.value; } };
     console.log(obj.fn.call({ value: 100 })); // 100
     ```
   - **Tip**: Contrast with arrow functions.

7. **What’s a closure, and why use it?**
   - **Answer**: A function retaining outer scope variables, used for encapsulation.
   - **Code**: 
     ```js
     function makeCounter() { let count = 0; return () => ++count; }
     const counter = makeCounter();
     console.log(counter()); // 1
     ```
   - **Tip**: Link to scope.

8. **What’s the output?**
   - **Code**: 
     ```js
     const obj = { value: 42, fn: () => this.value };
     console.log(obj.fn());
     ```
   - **Answer**: `undefined` (arrow function has no own `this`).
   - **Tip**: Explain `this` inheritance.

9. **What’s a higher-order function?**
   - **Answer**: Takes or returns functions, often used with arrays.
   - **Code**: 
     ```js
     function map(arr, fn) { return arr.map(fn); }
     console.log(map([1, 2], x => x * 2)); // [2, 4]
     ```
   - **Tip**: Link to array methods.

10. **What’s the output with IIFE?**
    - **Code**: 
      ```js
      (function() { console.log("IIFE"); })(); console.log("Done");
      ```
    - **Answer**: `IIFE`, `Done`.
    - **Tip**: Explain immediate execution.

### Advanced-Level
11. **How does recursion work, and what’s a base case?**
    - **Answer**: Function calls itself; base case prevents infinite recursion.
    - **Code**: 
      ```js
      function factorial(n) { if (n <= 1) return 1; return n * factorial(n - 1); }
      console.log(factorial(3)); // 6
      ```
    - **Tip**: Mention stack overflow risk.

12. **What’s the difference between pure and impure functions?**
    - **Answer**: Pure: Same input → same output, no side effects. Impure: Modifies state.
    - **Code**: 
      ```js
      function pure(a) { return a + 1; } // Pure
      let x = 0; function impure() { x++; } // Impure
      ```
    - **Tip**: Highlight testability of pure functions.

13. **What’s the output with async callback?**
    - **Code**: 
      ```js
      function asyncFn(cb) { setTimeout(() => cb("Done"), 0); }
      asyncFn(console.log);
      console.log("Sync");
      ```
    - **Answer**: `Sync`, `Done` (async callback runs after sync code).
    - **Tip**: Link to event loop.

14. **How do you handle errors in functions?**
    - **Answer**: Use `try...catch` or return error indicators.
    - **Code**: 
      ```js
      function safeParse(json) {
        try { return JSON.parse(json); } catch (e) { return null; }
      }
      console.log(safeParse("bad")); // null
      ```
    - **Tip**: Link to error handling.

15. **What’s the output with closure and loop?**
    - **Code**: 
      ```js
      for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 0);
      }
      ```
    - **Answer**: `0`, `1`, `2` (`let` creates block scope per iteration).
    - **Tip**: Contrast with `var` (prints `3`, `3`, `3`).

---

## Best Practices for Interviews

1. **Use Arrow Functions for Callbacks**:
   - Concise for array methods or async tasks.
   ```js
   [1, 2].map(x => x * 2); // [2, 4]
   ```

2. **Use Closures for Encapsulation**:
   - Keep variables private.
   ```js
   function makeCounter() { let count = 0; return () => ++count; }
   ```

3. **Handle Errors in Functions**:
   - Use `try...catch` for robustness.
   ```js
   function parse(json) { try { return JSON.parse(json); } catch (e) { return null; } }
   ```

4. **Ensure Base Cases in Recursion**:
   - Prevent stack overflow.
   ```js
   function factorial(n) { if (n <= 1) return 1; return n * factorial(n - 1); }
   ```

5. **Prefer Pure Functions**:
   - Improve predictability and testability.
   ```js
   function add(a, b) { return a + b; }
   ```

---

## Common Pitfalls

1. **Missing Return**:
   - Returns `undefined`.
   ```js
   function test() {} console.log(test()); // undefined
   ```

2. **Arrow Function `this`**:
   - No own `this`, inherits from outer scope.
   ```js
   const obj = { fn: () => this.value }; console.log(obj.fn()); // undefined
   ```

3. **Var in Loops with Async**:
   - Causes incorrect values due to shared scope.
   ```js
   for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 3, 3, 3
   ```

4. **Infinite Recursion**:
   - Causes stack overflow.
   ```js
   function loop() { loop(); } // RangeError
   ```

5. **Uncaught Errors in Functions**:
   - Crash program if not caught.
   ```js
   function fail() { throw new Error("Fail"); } fail(); // Uncaught Error
   ```

---

## Quick Reference Table

| **Construct** | **Purpose** | **Example** |
| --- | --- | --- |
| Declaration | Named, hoisted function | `function add(a, b) { return a + b; }` |
| Expression | Assigned to variable, not hoisted | `const add = (a, b) => a + b;` |
| Arrow Function | Concise, no own `this` | `(x) => x * 2` |
| Closure | Retains outer scope | `function make() { let x = 0; return () => x++; }` |
| IIFE | Immediate execution | `(function() { console.log("Run"); })();` |

| **Feature** | **Key Note** | **Example** |
| --- | --- | --- |
| `this` | Depends on call site | `obj.method.call({ value: 100 })` |
| Default Params | Fallback for undefined | `function fn(x = 0) { return x; }` |
| Rest Params | Collects arguments as array | `function sum(...nums) { return nums.reduce(...); }` |

---

## Practice Tips for Mastery

1. **Predict Outputs**: Test functions with missing arguments, async callbacks, or recursion.
2. **DevTools**: Experiment with `this`, closures, and IIFEs in console.
3. **Mini-Project**: Build a counter with closure or a recursive factorial.
4. **Explain Aloud**: Describe closures or `this` to a beginner.
5. **Edge Cases**: Test `var` in loops, arrow function `this`, or uncaught errors.

---

## Additional Interview Questions

### Beginner-Level
16. **What’s the difference between `function` and `=>`?**
    - **Answer**: `function` has own `this`, hoisted if declaration; `=>` has no `this`, concise.
    - **Code**: 
      ```js
      function fn() { return this; } const arrow = () => this;
      ```
    - **Tip**: Mention arrow function use in callbacks.

17. **What’s the output?**
    - **Code**: `function test(x = 1) { return x; } console.log(test());`
    - **Answer**: `1` (default parameter).
    - **Tip**: Explain default parameters.

18. **Why use IIFEs?**
    - **Answer**: Encapsulate variables, avoid global pollution.
    - **Code**: `(function() { let x = 1; })();`
    - **Tip**: Link to scope.

### Intermediate-Level
19. **How do rest parameters work?**
    - **Answer**: Collect arguments into an array.
    - **Code**: 
      ```js
      function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
      console.log(sum(1, 2, 3)); // 6
      ```
    - **Tip**: Link to array methods.

20. **What’s the output with closure?**
    - **Code**: 
      ```js
      function make() { let x = 0; return () => x++; }
      const fn = make();
      console.log(fn()); console.log(fn());
      ```
    - **Answer**: `0`, `1` (closure retains `x`).
    - **Tip**: Explain lexical scope.

### Advanced-Level
21. **How does `call`/`bind` work with `this`?**
    - **Answer**: `call` invokes with specified `this`; `bind` creates new function with fixed `this`.
    - **Code**: 
      ```js
      function fn() { return this.value; }
      console.log(fn.call({ value: 42 })); // 42
      ```
    - **Tip**: Mention `apply` similarity.

22. **What’s the output with recursion?**
    - **Code**: 
      ```js
      function sum(n) { if (n <= 0) return 0; return n + sum(n - 1); }
      console.log(sum(3));
      ```
    - **Answer**: `6` (`3 + 2 + 1`).
    - **Tip**: Explain base case importance.

23. **How do you handle async errors in functions?**
    - **Answer**: Use `try...catch` in `async` functions or `.catch` for Promises.
    - **Code**: 
      ```js
      async function test() {
        try { await Promise.reject("Fail"); } catch (e) { console.log(e); }
      }
      test(); // Fail
      ```
    - **Tip**: Link to event loop and error handling.
