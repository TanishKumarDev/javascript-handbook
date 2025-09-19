# JavaScript Conditional 

**Conditional Statements** control program flow by executing code based on conditions that evaluate to `true` or `false` (or coerce to boolean via truthy/falsy). They’re essential for decision-making, input validation, and dynamic logic.

**Why Conditional Statements Matter**:
- Enable decisions (e.g., user authentication, grade calculation).
- Handle edge cases (e.g., `null`, invalid inputs).
- Common in interviews for coercion, scoping, and control flow questions.
- Tie to operators (e.g., comparison, logical) and variables (e.g., block scope).

### Key Constructs
- **`if`, `else`, `else if`**: Flexible for any condition.
- **`switch`**: Efficient for multiple equality checks.
- **Ternary Operator (`?:`)**: Concise for simple conditions (covered in operators).

### Key Characteristics
- **Conditions**: Evaluate to booleans or coerce via truthy/falsy.
- **Scope**: `let`/`const` in blocks are scoped; `var` leaks.
- **Coercion**: Non-booleans in conditions coerce to `true`/`false`.
- **Use Cases**: Validation, branching, state management.

---

## Key Concepts
- **Truthy/Falsy**: Non-booleans coerce (falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`).
- **Block Scope**: `let`/`const` limit variables to `{}`.
- **Switch Mechanics**: Uses `===`, supports fall-through.
- **Edge Cases**: Coercion surprises, missing `break`, nested ternaries.
- **Best Practices**: Use `===`, include `default`, avoid complex ternaries.

---

## JavaScript Conditional Statements: 

### 1. `if`, `else`, `else if` Statements

Execute code based on boolean or truthy/falsy conditions.

**Syntax**:
```js
if (condition) {
  // Code if condition is truthy
} else if (anotherCondition) {
  // Code if anotherCondition is truthy
} else {
  // Code if all conditions are falsy
}
```

**Example**:
```js
let age = 20;
if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teen");
} else {
  console.log("Adult");
}
```

**Dry Run**:
1. `age = 20`: Assigns `20`.
2. `age < 13`: `20 < 13` → `false`, skip.
3. `age < 18`: `20 < 18` → `false`, skip.
4. `else`: Executes → `"Adult"`.

**Output**: `Adult`

**Example with Coercion**:
```js
let value = "hello";
if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
```

**Dry Run**:
1. `value = "hello"`: Assigns string.
2. `if (value)`: `"hello"` is truthy → `"Truthy"`.

**Output**: `Truthy`

**Edge Cases**:
- **Falsy Values**: `0`, `""`, `null`, `undefined`, `NaN`, `false` skip `if`.
  ```js
  let x = 0; if (x) console.log("Truthy"); // Skipped
  ```
- **Var Leakage**: `var` in `if` blocks leaks scope.
  ```js
  if (true) { var x = 10; } console.log(x); // 10
  ```

**Interview Tip**:
- Link to data types: “Conditions coerce to booleans using truthy/falsy rules.”
- Connect to variables: “Use `let` in `if` blocks for proper scoping.”
- Say: “I use `===` in conditions to avoid coercion surprises.”

### 2. `switch` Statement

Matches an expression against multiple values using strict equality (`===`).

**Syntax**:
```js
switch (expression) {
  case value1:
    // Code if expression === value1
    break;
  case value2:
    // Code if expression === value2
    break;
  default:
    // Code if no match
}
```

**Example**:
```js
let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid day");
}
```

**Dry Run**:
1. `day = 3`: Assigns `3`.
2. `switch (day)`: Compares `3` with cases using `===`.
3. `case 3`: Matches, prints `"Wednesday"`.
4. `break`: Exits `switch`.

**Output**: `Wednesday`

**Example with Fall-Through**:
```js
let fruit = "apple";
switch (fruit) {
  case "apple":
  case "pear":
    console.log("Sweet fruit");
    break;
  case "lemon":
    console.log("Sour fruit");
    break;
  default:
    console.log("Unknown fruit");
}
```

**Dry Run**:
1. `fruit = "apple"`: Assigns `"apple"`.
2. `switch (fruit)`: Matches `case "apple"`.
3. No `break`: Falls through to `case "pear"`.
4. Prints `"Sweet fruit"`, then `break`.

**Output**: `Sweet fruit`

**Edge Cases**:
- **No Break**: Causes fall-through, executing subsequent cases.
  ```js
  switch (1) { case 1: console.log("One"); case 2: console.log("Two"); } // One, Two
  ```
- **Type Mismatch**: `switch` uses `===`, no coercion.
  ```js
  switch ("1") { case 1: console.log("Number"); break; } // Skipped
  ```

**Interview Tip**:
- Link to operators: “`switch` uses `===`, avoiding coercion issues.”
- Say: “I include `default` for robust error handling.”
- Connect to arrays: “`switch` is useful for mapping array values (e.g., `arr[0]`).”

### 3. Ternary Operator (`?:`)

A concise `if-else` alternative, returning a value based on a condition.

**Syntax**:
```js
condition ? valueIfTrue : valueIfFalse
```

**Example**:
```js
let score = 85;
let grade = score >= 60 ? "Pass" : "Fail";
console.log(grade);
```

**Dry Run**:
1. `score = 85`: Assigns `85`.
2. `score >= 60`: `true`.
3. `true ? "Pass" : "Fail"`: Returns `"Pass"`.

**Output**: `Pass`

**Edge Case**:
- **Nesting**: Hard to read, error-prone.
  ```js
  let x = 10 > 5 ? 10 < 15 ? "In range" : "High" : "Low"; // In range
  ```

**Interview Tip**:
- Link to operators: “Ternary is a shorthand from the operators family.”
- Say: “I use ternaries for simple assignments, `if-else` for complex logic.”

### 4. Connection to Previous Topics

- **Data Types**: Conditions rely on truthy/falsy coercion.
  ```js
  let x = null; if (!x) console.log("Falsy"); // Falsy
  ```
- **Variables**: `let`/`const` in `if` blocks are block-scoped; `var` leaks.
  ```js
  if (true) { let x = 10; } console.log(x); // Error
  ```
- **Operators**: Comparison (`===`, `>`) and logical (`&&`, `||`) operators drive conditions.
  ```js
  let x = 5; if (x === 5 && x > 0) console.log("Valid"); // Valid
  ```
- **Arrays**: Conditionals often process arrays (e.g., checking `length`).
  ```js
  let arr = []; if (arr.length) console.log("Not empty"); // Skipped
  ```

**Interview Tip**:
- Say: “I combine conditionals with `typeof` and `Array.isArray()` for robust checks.”

### 5. Interview Questions and Answers

#### Beginner-Level
1. **What are conditional statements in JavaScript?**
   - **Answer**: `if`, `else`, `else if`, `switch`, and ternary (`?:`) control code execution based on conditions.
   - **Code**: `if (true) console.log("Run"); // Run`
   - **Tip**: Mention truthy/falsy.

2. **What’s the difference between `if` and `switch`?**
   - **Answer**: `if` handles any condition (ranges, logic); `switch` matches values with `===`.
   - **Code**: `if (x > 0) console.log("Positive"); switch(x) { case 1: console.log("One"); }`
   - **Tip**: Say: “Use `switch` for equality, `if` for ranges.”

3. **What are truthy and falsy values?**
   - **Answer**: Falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`; others are truthy.
   - **Code**: `if ("") console.log("Truthy"); // Skipped`
   - **Tip**: List falsy values confidently.

4. **What happens without `break` in `switch`?**
   - **Answer**: Execution falls through to next case.
   - **Code**: `switch (1) { case 1: console.log("One"); case 2: console.log("Two"); } // One, Two`
   - **Tip**: Mention intentional fall-through.

5. **How does the ternary operator work?**
   - **Answer**: `condition ? value1 : value2`, returns a value.
   - **Code**: `let x = 10 > 5 ? "Yes" : "No"; // Yes`
   - **Tip**: Avoid nesting.

#### Intermediate-Level
6. **How does type coercion affect conditions?**
   - **Answer**: Non-booleans coerce to `true`/`false` via truthy/falsy.
   - **Code**: `if ("0") console.log("Truthy"); // Truthy`
   - **Tip**: Link to data types; suggest `===`.

7. **What’s the difference between `if-else` and ternary?**
   - **Answer**: `if-else` for complex logic/blocks; ternary for single expressions.
   - **Code**: `let x = 10 > 5 ? "Big" : "Small"; // Big`
   - **Tip**: Use ternary for assignments.

8. **How does block scope work in `if`?**
   - **Answer**: `let`/`const` are block-scoped; `var` leaks.
   - **Code**: `if (true) { let x = 10; } console.log(x); // Error`
   - **Tip**: Link to variables.

9. **Can `switch` handle non-equality conditions?**
   - **Answer**: No, uses `===`. Use `if` for ranges.
   - **Code**: `switch (true) { case x > 5: console.log("Big"); } // Workaround`
   - **Tip**: Rarely use this workaround.

10. **What’s the output?**
    - **Code**: `let x = null; if (x) console.log("Truthy"); else console.log("Falsy");`
    - **Answer**: `"Falsy"` (`null` is falsy).
    - **Tip**: List falsy values.

#### Advanced-Level
11. **When is `switch` fall-through useful?**
    - **Answer**: For shared logic across cases (e.g., multiple values map to same output).
    - **Code**: `switch (x) { case "a": case "b": console.log("Letter"); break; }`
    - **Tip**: Document intentional fall-through.

12. **What happens with `var` in `if` blocks?**
    - **Answer**: `var` leaks to function/global scope.
    - **Code**: `if (true) { var x = 10; } console.log(x); // 10`
    - **Tip**: Recommend `let`.

13. **How does `switch` handle type coercion?**
    - **Answer**: Uses `===`, no coercion.
    - **Code**: `switch ("1") { case 1: console.log("Number"); } // Skipped`
    - **Tip**: Contrast with `if (x == 1)`.

14. **What’s the risk of nested ternaries?**
    - **Answer**: Poor readability, error-prone.
    - **Code**: `let x = 10 > 5 ? 10 < 15 ? "In range" : "High" : "Low";`
    - **Tip**: Rewrite as `if-else`.

15. **What’s the output?**
    - **Code**: `let x = 0; switch (x) { case false: console.log("False"); case 0: console.log("Zero"); break; }`
    - **Answer**: `"Zero"` (`0 === 0` matches first).
    - **Tip**: Explain `switch` stops at first match.

---

## Best Practices for Interviews

1. **Use `===` in Conditions**:
   - Avoids coercion surprises.
   ```js
   if (x === 5) console.log("Equal"); // Safe
   ```

2. **Include `default` in `switch`**:
   - Handles unexpected inputs.
   ```js
   switch (x) { default: console.log("Invalid"); }
   ```

3. **Use `let`/`const` in Blocks**:
   - Prevents scope leakage.
   ```js
   if (true) { let x = 10; } // x not accessible
   ```

4. **Simplify Ternaries**:
   - Avoid nesting; use `if-else` for complex logic.
   ```js
   let x = y > 0 ? "Positive" : "Negative";
   ```

5. **Test Conditions Explicitly**:
   - Use `typeof`, `Array.isArray()` for robust checks.
   ```js
   if (typeof x === "number") console.log("Number");
   ```

---

## Common Pitfalls

1. **Coercion in Conditions**:
   - Falsy values skip `if`.
   ```js
   if (0) console.log("Truthy"); // Skipped
   ```

2. **Missing `break` in `switch`**:
   - Causes fall-through.
   ```js
   switch (1) { case 1: console.log("One"); case 2: console.log("Two"); } // One, Two
   ```

3. **Var Leakage**:
   - `var` in blocks leaks scope.
   ```js
   if (true) { var x = 10; } console.log(x); // 10
   ```

4. **Nested Ternaries**:
   - Hard to read.
   ```js
   let x = a ? b ? "c" : "d" : "e";
   ```

5. **Type Mismatch in `switch`**:
   - Uses `===`, no coercion.
   ```js
   switch ("1") { case 1: console.log("Number"); } // Skipped
   ```

---

## Quick Reference Table

| **Statement** | **Use Case** | **Key Notes** | **Example** |
| --- | --- | --- | --- |
| `if`/`else` | General conditions | Handles ranges, complex logic; truthy/falsy coercion | `if (x > 0) console.log("Positive");` |
| `switch` | Equality checks | Uses `===`, supports fall-through; include `default` | `switch (x) { case 1: console.log("One"); break; }` |
| Ternary (`?:`) | Simple assignments | Concise `if-else`, avoid nesting | `x > 0 ? "Yes" : "No"` |

| **Falsy Values** | **Example** |
| --- | --- |
| `false`, `0`, `""`, `null`, `undefined`, `NaN` | `if (null) console.log("Skipped");` |
