# JavaScript Error Handling 

**Error handling** manages runtime errors to prevent crashes, improve user experience, and ensure robust code. JavaScript uses `try...catch` to catch errors, `throw` to create them, and `finally` for cleanup, with the `Error` object providing error details.

**Why Error Handling Matters**:
- Prevents crashes from issues like undefined variables or API failures.
- Provides meaningful feedback (e.g., custom error messages).
- Common in interviews for error types, async handling, and robustness.
- Ties to conditionals (error checks), variables (scope), and JavaScript working (async errors).

### Key Constructs
- **`try...catch`**: Catches runtime errors.
- **`finally`**: Runs cleanup code regardless of outcome.
- **`throw`**: Creates custom errors.
- **`Error` Object**: Provides `name`, `message`, `stack` properties.

### Key Characteristics
- **Runtime Errors**: Handled by `try...catch` (not syntax errors).
- **Scope**: `catch` block is block-scoped for `let`/`const`.
- **Async Errors**: Handled with Promises or `async/await`.
- **Edge Cases**: Uncaught errors, non-`Error` throws, nested `try...catch`.

---

## JavaScript Error Handling:

Below is a detailed breakdown of error handling constructs, with examples, outputs, dry runs, and connections to prior topics (data types, variables, operators, conditionals, arrays, loops, JavaScript working).

### 1. `try...catch`

Catches and handles runtime errors in a `try` block.

**Syntax**:
```js
try {
  // Code that might fail
} catch (error) {
  // Handle error
}
```

**Example**:
```js
try {
  let x = undefinedVar; // ReferenceError
} catch (error) {
  console.log(error.name, error.message);
}
```

**Dry Run**:
1. `try`: Attempts `x = undefinedVar`.
2. `undefinedVar` undefined → throws `ReferenceError`.
3. `catch`: Captures error, prints `error.name` (`ReferenceError`), `error.message` (`undefinedVar is not defined`).

**Output**: `ReferenceError undefinedVar is not defined`.

**Edge Case**:
- **Non-Error Throw**: `catch` handles any thrown value.
  ```js
  try { throw "Oops"; } catch (e) { console.log(e); } // Oops
  ```

**Interview Tip**:
- Link to data types: “`catch` handles any thrown value, but `Error` objects are standard.”
- Say: “I log `error.message` for user-friendly feedback.”

### 2. `finally`

Runs code regardless of `try`/`catch` outcome, ideal for cleanup.

**Syntax**:
```js
try {
  // Code
} catch (error) {
  // Handle error
} finally {
  // Cleanup
}
```

**Example**:
```js
try {
  console.log("Trying");
  throw new Error("Fail");
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  console.log("Cleanup");
}
```

**Dry Run**:
1. `try`: Prints `Trying`, throws `Error("Fail")`.
2. `catch`: Prints `Caught: Fail`.
3. `finally`: Prints `Cleanup`.

**Output**: `Trying`, `Caught: Fail`, `Cleanup`.

**Edge Case**:
- **No Catch**: `finally` still runs.
  ```js
  try { console.log("Try"); } finally { console.log("Finally"); } // Try, Finally
  ```

**Interview Tip**:
- Link to JavaScript working: “`finally` ensures cleanup, like closing resources in async tasks.”
- Say: “I use `finally` for mandatory cleanup, like resetting state.”

### 3. `throw`

Creates and throws custom errors, halting execution unless caught.

**Syntax**:
```js
throw new Error("Message");
```

**Example**:
```js
try {
  let age = -5;
  if (age < 0) throw new Error("Age cannot be negative");
} catch (error) {
  console.log(error.message);
}
```

**Dry Run**:
1. `try`: `age = -5`, `age < 0` → `true`, throws `Error("Age cannot be negative")`.
2. `catch`: Prints `error.message` (`Age cannot be negative`).

**Output**: `Age cannot be negative`.

**Edge Case**:
- **Non-Error Throw**: Any value can be thrown, but lacks `Error` properties.
  ```js
  try { throw 42; } catch (e) { console.log(e); } // 42
  ```

**Interview Tip**:
- Link to conditionals: “`throw` pairs with `if` for validation.”
- Say: “I throw `Error` objects for stack traces and consistency.”

### 4. Custom Error Objects

Extend `Error` for specific error types with custom properties.

**Syntax**:
```js
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
```

**Example**:
```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
try {
  let input = "";
  if (!input) throw new ValidationError("Empty input");
} catch (error) {
  console.log(error.name, error.message);
}
```

**Dry Run**:
1. `try`: `input = ""`, `!input` → `true`, throws `ValidationError("Empty input")`.
2. `catch`: Prints `ValidationError`, `Empty input`.

**Output**: `ValidationError Empty input`.

**Edge Case**:
- **Custom Properties**: Add fields like `code`.
  ```js
  class AuthError extends Error {
    constructor(message, code) {
      super(message);
      this.name = "AuthError";
      this.code = code;
    }
  }
  throw new AuthError("Unauthorized", 401); // AuthError: Unauthorized, code: 401
  ```

**Interview Tip**:
- Link to objects: “Custom errors are objects extending `Error`.”
- Say: “I use custom errors for specific scenarios like validation or authentication.”

### 5. Common Error Types

- **ReferenceError**: Undefined variable access.
  ```js
  console.log(x); // ReferenceError: x is not defined
  ```
- **TypeError**: Invalid type operation (e.g., calling non-function).
  ```js
  null.prop; // TypeError: Cannot read properties of null
  ```
- **SyntaxError**: Invalid syntax (not caught by `try...catch`).
  ```js
  let x = ; // SyntaxError
  ```
- **RangeError**: Value out of range (e.g., invalid array length).
  ```js
  new Array(-1); // RangeError: Invalid array length
  ```
- **Error**: Generic base error.

**Example**:
```js
try {
  let obj = null;
  obj.prop; // TypeError
} catch (error) {
  console.log(error.name);
}
```

**Output**: `TypeError`.

**Interview Tip**:
- Link to data types: “Error types like `TypeError` relate to type mismatches.”
- Say: “I check `error.name` to handle specific errors.”

### 6. Connection to Previous Topics

- **Data Types**: Errors often stem from type issues (e.g., `null` access → `TypeError`).
  ```js
  try { null.prop; } catch (e) { console.log(e.name); } // TypeError
  ```
- **Variables**: `catch` block is block-scoped for `let`/`const`.
  ```js
  try { throw new Error("Test"); } catch (e) { let x = e.message; } console.log(x); // ReferenceError
  ```
- **Operators**: Use comparison/logical operators in `throw` conditions.
  ```js
  if (x === undefined) throw new Error("Missing value");
  ```
- **Conditionals**: Error checks use `if` or `instanceof`.
  ```js
  try { throw new TypeError("Bad type"); } catch (e) { if (e instanceof TypeError) console.log("Type"); } // Type
  ```
- **Arrays**: Validate array inputs with error handling.
  ```js
  try { if (!Array.isArray(arr)) throw new Error("Not an array"); } catch (e) { console.log(e.message); }
  ```
- **Loops**: Handle errors in iterative tasks.
  ```js
  let arr = [1, null, 3];
  for (let v of arr) {
    try { v.prop; } catch (e) { console.log("Error at value", v); } // Error at value null
  }
  ```
- **JavaScript Working**: Async errors require Promises/`async` handling.
  ```js
  async function fetchData() {
    try { await fetch("bad-url"); } catch (e) { console.log("Fetch failed"); }
  }
  ```

**Interview Tip**:
- Say: “I combine error handling with `typeof` or `Array.isArray()` for robust checks.”

### 7. Async Error Handling

Handles errors in asynchronous code using Promises or `async/await`.

**Example (Promise)**:
```js
fetch("bad-url")
  .then(res => res.json())
  .catch(error => console.log("Fetch error:", error.message));
```

**Example (Async/Await)**:
```js
async function fetchData() {
  try {
    let res = await fetch("bad-url");
    let data = await res.json();
  } catch (error) {
    console.log("Async error:", error.message);
  }
}
fetchData();
```

**Dry Run (Async/Await)**:
1. `try`: `fetch("bad-url")` fails → throws error.
2. `catch`: Prints `Async error:` and error message (e.g., `Failed to fetch`).

**Output**: `Async error: Failed to fetch`.

**Edge Case**:
- **Uncaught Promise Errors**: Use `window.onerror` or `.catch()`.
  ```js
  Promise.reject("Error").catch(e => console.log(e)); // Error
  ```

**Interview Tip**:
- Link to JavaScript working: “Async errors use the event loop’s microtask queue.”
- Say: “I use `try...catch` with `async/await` for cleaner async error handling.”

---

## Interview Questions and Answers

### Beginner-Level
1. **What is error handling in JavaScript?**
   - **Answer**: Using `try...catch` to manage runtime errors, preventing crashes and providing feedback.
   - **Code**: 
     ```js
     try { undefinedVar; } catch (e) { console.log(e.message); } // undefinedVar is not defined
     ```
   - **Tip**: Mention `finally` for cleanup.

2. **What does `throw` do?**
   - **Answer**: Creates and throws a custom error, stopping execution unless caught.
   - **Code**: `throw new Error("Fail");`
   - **Tip**: Use `Error` objects for stack traces.

3. **What’s the role of `finally`?**
   - **Answer**: Runs code regardless of `try`/`catch` outcome, used for cleanup.
   - **Code**: 
     ```js
     try { console.log("Try"); } finally { console.log("Finally"); } // Try, Finally
     ```
   - **Tip**: Highlight resource cleanup.

4. **What are common error types in JavaScript?**
   - **Answer**: `ReferenceError`, `TypeError`, `SyntaxError`, `RangeError`, `Error`.
   - **Code**: `try { null.prop; } catch (e) { console.log(e.name); } // TypeError`
   - **Tip**: Link to type mismatches.

5. **What’s the output?**
   - **Code**: 
     ```js
     try { throw new Error("Test"); } catch (e) { console.log(e.message); }
     ```
   - **Answer**: `Test`.
   - **Tip**: Explain error object properties.

### Intermediate-Level
6. **How does `try...catch` handle different error types?**
   - **Answer**: Catches all errors; use `instanceof` or `error.name` for specific handling.
   - **Code**: 
     ```js
     try { null.prop; } catch (e) { if (e instanceof TypeError) console.log("Type"); } // Type
     ```
   - **Tip**: Show specific error handling.

7. **Can you throw non-Error values?**
   - **Answer**: Yes, but `Error` objects provide `name`, `message`, `stack`.
   - **Code**: 
     ```js
     try { throw "Oops"; } catch (e) { console.log(typeof e); } // string
     ```
   - **Tip**: Recommend `new Error()`.

8. **What’s the output with `finally`?**
   - **Code**: 
     ```js
     try { console.log("Try"); throw new Error("Fail"); } catch (e) { console.log(e.message); } finally { console.log("Done"); }
     ```
   - **Answer**: `Try`, `Fail`, `Done`.
   - **Tip**: Explain `finally` always runs.

9. **How do you handle errors in a loop?**
   - **Answer**: Use `try...catch` inside loop to avoid breaking iteration.
   - **Code**: 
     ```js
     let arr = [1, null, 3];
     for (let v of arr) try { v.prop; } catch (e) { console.log("Error"); } // Error
     ```
   - **Tip**: Link to loops.

10. **What’s the output in async code?**
    - **Code**: 
      ```js
      async function test() {
        try { await Promise.reject("Fail"); } catch (e) { console.log(e); }
      }
      test();
      ```
    - **Answer**: `Fail`.
    - **Tip**: Explain `await` with `try...catch`.

### Advanced-Level
11. **How do you create a custom error?**
    - **Answer**: Extend `Error` with custom name/message.
    - **Code**: 
      ```js
      class MyError extends Error {
        constructor(message) { super(message); this.name = "MyError"; }
      }
      throw new MyError("Custom"); // MyError: Custom
      ```
    - **Tip**: Mention stack trace.

12. **What happens if an error isn’t caught?**
    - **Answer**: Bubbles up, potentially crashing the program or triggering `window.onerror`.
    - **Code**: `throw new Error("Uncaught"); // Uncaught Error`
    - **Tip**: Suggest global handlers.

13. **How do you handle async errors?**
    - **Answer**: Use `.catch()` for Promises or `try...catch` with `async/await`.
    - **Code**: 
      ```js
      async function test() {
        try { await fetch("bad-url"); } catch (e) { console.log("Failed"); }
      }
      test(); // Failed
      ```
    - **Tip**: Link to event loop.

14. **What’s the output with nested `try...catch`?**
    - **Code**: 
      ```js
      try {
        try { throw new Error("Inner"); } catch (e) { console.log(e.message); throw new Error("Outer"); }
      } catch (e) { console.log(e.message); }
      ```
    - **Answer**: `Inner`, `Outer`.
    - **Tip**: Explain error bubbling.

15. **How do you handle errors in a Promise chain?**
    - **Answer**: Use `.catch()` to handle rejections.
    - **Code**: 
      ```js
      Promise.resolve()
        .then(() => { throw new Error("Fail"); })
        .catch(e => console.log(e.message)); // Fail
      ```
    - **Tip**: Mention microtask queue.

---

## Best Practices for Interviews

1. **Use Descriptive Errors**:
   - Throw `new Error()` with clear messages.
   ```js
   throw new Error("Invalid input: cannot be empty");
   ```

2. **Check Error Types**:
   - Use `instanceof` or `error.name` for specific handling.
   ```js
   try { null.prop; } catch (e) { if (e instanceof TypeError) console.log("Type"); }
   ```

3. **Use `finally` for Cleanup**:
   - Ensure resources are released.
   ```js
   try { /* Open connection */ } finally { /* Close connection */ console.log("Closed"); }
   ```

4. **Handle Async Errors**:
   - Use `try...catch` with `async/await` or `.catch()` for Promises.
   ```js
   async function test() { try { await Promise.reject("Fail"); } catch (e) { console.log(e); } }
   ```

5. **Debug with Stack Traces**:
   - Log `error.stack` for detailed debugging.
   ```js
   try { throw new Error("Test"); } catch (e) { console.log(e.stack); }
   ```

---

## Common Pitfalls

1. **Non-Error Throws**:
   - Lacks `name`, `stack`.
   ```js
   try { throw "Oops"; } catch (e) { console.log(e); } // Oops
   ```

2. **Uncaught Errors**:
   - Crashes program or triggers global handlers.
   ```js
   throw new Error("Uncaught"); // Crashes
   ```

3. **Syntax Errors**:
   - Not caught by `try...catch`.
   ```js
   try { let x = ; } catch (e) { console.log(e); } // SyntaxError (uncaught)
   ```

4. **Async Error Miss**:
   - Missing `.catch()` or `try...catch` in async code.
   ```js
   Promise.reject("Fail"); // UnhandledPromiseRejection
   ```

5. **Overusing `finally`**:
   - Complex logic in `finally` can obscure flow.
   ```js
   try { /* Code */ } finally { /* Avoid complex logic */ }
   ```

---

## Quick Reference Table

| **Construct** | **Purpose** | **Example** |
| --- | --- | --- |
| `try...catch` | Catches runtime errors | `try { null.prop; } catch (e) { console.log(e.name); }` |
| `finally` | Runs cleanup code | `try { /* Code */ } finally { console.log("Cleanup"); }` |
| `throw` | Creates custom errors | `throw new Error("Fail");` |
| `Custom Error` | Specific error types | `class MyError extends Error {}` |

| **Error Type** | **Cause** | **Example** |
| --- | --- | --- |
| `ReferenceError` | Undefined variable | `console.log(x);` |
| `TypeError` | Invalid type operation | `null.prop;` |
| `SyntaxError` | Invalid syntax | `let x = ;` |
| `RangeError` | Out-of-range value | `new Array(-1);` |

---

## Practice Tips for Mastery

1. **Predict Outputs**: Test `try...catch` with different error types and throws.
2. **DevTools**: Throw errors in console and catch them.
3. **Mini-Project**: Build a form validator with custom errors.
4. **Explain Aloud**: Describe `try...catch` flow to a beginner.
5. **Edge Cases**: Test uncaught errors, async errors, and nested `try...catch`.

---

## Additional Interview Questions

### Beginner-Level
16. **What’s the difference between runtime and syntax errors?**
    - **Answer**: Runtime errors (e.g., `ReferenceError`) are caught by `try...catch`; syntax errors (e.g., invalid code) stop parsing.
    - **Code**: `try { console.log(x); } catch (e) { console.log("Caught"); } // Caught`
    - **Tip**: Mention `SyntaxError` is uncaught.

17. **Why use `Error` objects for `throw`?**
    - **Answer**: Provide `name`, `message`, `stack` for debugging.
    - **Code**: `throw new Error("Fail"); // Error: Fail`
    - **Tip**: Contrast with throwing strings.

18. **What’s the output?**
    - **Code**: `try { console.log("Try"); } catch (e) { console.log("Catch"); } // Try`
    - **Answer**: `Try` (no error, `catch` skipped).
    - **Tip**: Explain `catch` only runs on error.

### Intermediate-Level
19. **How do you handle errors in array iteration?**
    - **Answer**: Use `try...catch` inside loop to continue iteration.
    - **Code**: 
      ```js
      let arr = [1, null, 3];
      for (let v of arr) try { v.prop; } catch (e) { console.log("Error"); } // Error
      ```
    - **Tip**: Link to loops and arrays.

20. **What’s the output with `finally` and no `catch`?**
    - **Code**: 
      ```js
      try { throw new Error("Fail"); } finally { console.log("Finally"); }
      ```
    - **Answer**: `Finally`, then crashes (uncaught error).
    - **Tip**: Explain `finally` runs before crash.

### Advanced-Level
21. **How do you handle errors globally?**
    - **Answer**: Use `window.onerror` (browser) or `process.on('uncaughtException')` (Node.js).
    - **Code**: 
      ```js
      window.onerror = (msg) => console.log("Global:", msg);
      throw new Error("Test"); // Global: Error: Test
      ```
    - **Tip**: Mention unhandled Promise rejections.

22. **What’s the output with async and multiple catches?**
    - **Code**: 
      ```js
      async function test() {
        try {
          await Promise.reject("Fail");
        } catch (e) {
          console.log(e);
          throw new Error("Outer");
        }
      }
      test().catch(e => console.log(e.message));
      ```
    - **Answer**: `Fail`, `Outer`.
    - **Tip**: Explain async error bubbling.

23. **How do you add custom properties to errors?**
    - **Answer**: Extend `Error` and add properties.
    - **Code**: 
      ```js
      class MyError extends Error {
        constructor(message, code) { super(message); this.name = "MyError"; this.code = code; }
      }
      try { throw new MyError("Fail", 500); } catch (e) { console.log(e.code); } // 500
      ```
    - **Tip**: Useful for API error codes.
