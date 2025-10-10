# JavaScript Conditionals and Logical Operators

JavaScript **conditionals** allow you to execute different code based on conditions, enabling decision-making in your programs. **Logical operators** combine or modify these conditions for more complex logic. JavaScript is dynamically typed, so conditions often involve type coercion, which can lead to surprises.

**Key Structures**:
- **If/Else**: Basic conditional execution.
- **Ternary Operator**: Shorthand for if/else.
- **Switch**: Multi-case selection for readability with many options.
- **Logical Operators**: Combine booleans (`&&`, `||`, `!`, `??`).

**Why They Matter**:
- Essential for control flow, user input validation, and dynamic behavior.
- Affect performance in loops or large datasets.
- Common in interviews: coercion in conditions, short-circuiting, fall-through in switch.

### Key Characteristics
- **Truthy/Falsy**: Non-boolean values coerce to true/false in conditions (e.g., non-empty string is truthy, 0 is falsy).
- **Short-Circuiting**: `&&` and `||` evaluate left-to-right, stopping early.
- **Strict Comparison**: Use `===` to avoid coercion bugs.
- **Nullish Coalescing**: `??` handles `null`/`undefined` without treating falsy values as invalid.

---

## Key Concepts
- **Use Cases**: Validate inputs (e.g., age checks), handle states (e.g., user roles), or route logic (e.g., day-based messages).
- **Nesting**: If statements can be nested, but avoid deep nesting for readability—use logical operators instead.
- **Fall-Through in Switch**: Without `break`, execution continues to next cases.
- **Edge Cases**: Coercion (e.g., `"0" == 0`), falsy values, missing defaults in switch.
- **Best Practices**: Use ternary for simple assignments, switch for enums, logical ops for guards.

---

Below is a detailed breakdown with examples, outputs, and insights.

### 1. If Statement

Executes code if a condition is true.

#### 1.1 Basic If
- **Definition**: Runs block if condition evaluates to truthy.
- **Use Case**: Simple checks like time-based greetings.
- **Key Points**: Condition can be any expression; no else means skip if false.

**Example**:
```js
// Get current hour
const hour = new Date().getHours();
// Greeting variable
let greeting;

// Basic if check
if (hour < 18) {
  greeting = "Good day"; // Executes if true
}

// Log result (assuming hour < 18)
console.log(greeting);
// Output: "Good day"
```

**Dry Run**:
1. `hour`: Current hour (e.g., 14).
2. `if (hour < 18)`: 14 < 18 → true.
3. Assigns "Good day" to greeting.
4. If hour >= 18, greeting remains undefined.
5. Log greeting.

**Tip**: Always initialize variables before if to avoid undefined.

#### 1.2 Nested If
- **Definition**: If inside if for multi-level checks.
- **Use Case**: Combined conditions like age and country.

**Example**:
```js
// Variables
const age = 16;
const country = "USA";
let message = "You cannot drive!";

// Nested if
if (country === "USA") {
  if (age >= 16) {
    message = "You can drive!";
  }
}

// Log result
console.log(message);
// Output: "You can drive!"
```

**Dry Run**:
1. Check `country === "USA"` → true.
2. Nested: `age >= 16` → true.
3. Assigns "You can drive!".
4. If outer false, skips inner.
5. Log message.

**Tip**: Prefer logical operators for flat code: `if (country === "USA" && age >= 16)`.

**Edge Cases**:
- Falsy conditions: `if (0)` → false.
- Coercion: `if ("0")` → true (non-empty string).

**Interview Tip**: Explain why nesting can lead to "callback hell" and suggest flattening.

### 2. Else and Else If

Extends if for false cases or multiple conditions.

#### 2.1 If/Else
- **Definition**: Else runs if if is false.
- **Use Case**: Binary outcomes like day/evening.

**Example**:
```js
// Current hour
const hour = new Date().getHours();
let greeting;

// If/else
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Log result (assuming hour < 18)
console.log(greeting);
// Output: "Good day"
```

**Dry Run**:
1. `if (hour < 18)` → true → "Good day".
2. Else skipped.
3. If false, "Good evening".
4. Log greeting.

#### 2.2 If/Else If/Else
- **Definition**: Chains conditions; else catches all false.
- **Use Case**: Time-based multi-greetings.

**Example**:
```js
// Current time (assume 15)
const time = 15;
let greeting;

// Multi-condition
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Log result
console.log(greeting);
// Output: "Good day"
```

**Dry Run**:
1. `time < 10` → false.
2. `time < 20` → true → "Good day".
3. Else skipped.
4. Log greeting.

**Tip**: Order matters—check specific to general.

**Edge Cases**:
- Multiple true: First match wins.
- No else: Possible no execution.

**Interview Tip**: Show how to refactor to switch for many conditions.

### 3. Ternary Operator (?:)

Shorthand for if/else assignments.

- **Definition**: `condition ? trueExpr : falseExpr`.
- **Use Case**: Concise value setting.
- **Key Points**: Only for expressions, not blocks; chainable but avoid complexity.

**Example**:
```js
// Age check
const age = 17;
const status = (age < 18) ? "Minor" : "Adult";

// Log result
console.log(status);
// Output: "Minor"
```

**Dry Run**:
1. `age < 18` → true.
2. Assigns "Minor".
3. If false, "Adult".
4. Log status.

**Example with Chaining**:
```js
// Membership discount
const isMember = true;
const discount = isMember ? 0.2 : 0;

// Log result
console.log(discount);
// Output: 0.2
```

**Dry Run**:
1. `isMember` → true → 0.2.
2. Log discount.

**Tip**: Use for simple cases; prefer if/else for readability with complex logic.

**Edge Cases**:
- Nested ternaries: Readable? `(cond1 ? val1 : (cond2 ? val2 : val3))`.

**Interview Tip**: Rewrite an if/else as ternary and discuss pros/cons.

### 4. Switch Statement

Selects code blocks based on expression match.

- **Definition**: Matches expression to cases; default for no match.
- **Use Case**: Enum-like values (e.g., weekdays).
- **Key Points**: Strict comparison (`===`); break prevents fall-through.

**Example**:
```js
// Weekday number (0=Sun, 6=Sat)
const dayNum = new Date().getDay();
let dayName;

// Switch for weekday
switch (dayNum) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day"; // Fallback
}

// Log result (assume Sunday)
console.log(dayName);
// Output: "Sunday"
```

**Dry Run**:
1. `dayNum` (e.g., 0).
2. Matches case 0 → "Sunday".
3. `break` exits switch.
4. If no match, default.
5. Log dayName.

#### 4.1 Common Code Blocks (Fall-Through)
- Group cases without break.

**Example**:
```js
// Weekday check
const dayNum = 5;
let message;

// Grouped cases
switch (dayNum) {
  case 0:
  case 6:
    message = "It's the weekend!";
    break;
  case 4:
  case 5:
    message = "Soon it's weekend";
    break;
  default:
    message = "Looking forward to the weekend";
}

// Log result
console.log(message);
// Output: "Soon it's weekend"
```

**Dry Run**:
1. `dayNum = 5` → falls to case 5 (no break after 4) → "Soon it's weekend".
2. `break` exits.
3. Log message.

#### 4.2 Default Placement
- Can be anywhere, but end with break if not last.

**Example**:
```js
// Default first
switch (dayNum) {
  default:
    message = "Weekday";
    break;
  case 0:
  case 6:
    message = "Weekend";
}

// Log (assume 3)
console.log(message);
// Output: "Weekday"
```

**Dry Run**:
1. No match → default → "Weekday".
2. `break` needed.

**Edge Cases**:
- No break: Fall-through (intentional or bug).
- Type coercion: `switch("0") { case 0: }` → no match (strict ===).
- Multiple matches: First wins.

**Interview Tip**: Explain fall-through with example; when to use switch vs if chains.

### 5. Logical Operators

Combine booleans or expressions.

| Operator | Name | Description | Example (x=6, y=3) |
| --- | --- | --- | --- |
| && | AND | True if both true | `(x < 10 && y > 1)` → true |
| || | OR | True if either true | `(x === 5 || y === 5)` → false |
| ! | NOT | Inverts boolean | `!(x === y)` → true |
| ?? | Nullish Coalescing | First non-nullish | `null ?? "default"` → "default" |

#### 5.1 Logical AND (&&)
- Short-circuits if left false.

**Example**:
```js
// Variables
const x = 6;
const y = 3;

// AND check
const isValid = (x < 10 && y > 1);

// Log result
console.log(isValid);
// Output: true
```

**Dry Run**:
1. `x < 10` → true.
2. Evaluate `y > 1` → true.
3. `true && true` → true.
4. Log isValid.

#### 5.2 Logical OR (||)
- Short-circuits if left true.

**Example**:
```js
// OR check
const hasPositive = (x > 0 || y > 0);

// Log result
console.log(hasPositive);
// Output: true
```

**Dry Run**:
1. `x > 0` → true.
2. Skips `y > 0`.
3. Returns true.

#### 5.3 Logical NOT (!)
- Inverts value.

**Example**:
```js
// NOT check
const areEqual = (x === 8);
const notEqual = !areEqual;

// Log results
console.log(areEqual, notEqual);
// Output: false true
```

**Dry Run**:
1. `x === 8` → false.
2. `!false` → true.
3. Log values.

#### 5.4 Nullish Coalescing (??)
- Returns right if left is null/undefined.

**Example**:
```js
// Nullish
const username = null;
const displayName = username ?? "Guest";

// Log result
console.log(displayName);
// Output: "Guest"
```

**Dry Run**:
1. `username` null → returns "Guest".
2. If username = "", returns "" (falsy but not nullish).
3. Log displayName.

**Tip**: Use `??` over `||` to allow falsy values like 0 or "".

**Edge Cases**:
- Short-circuit: `false && alert("skipped")` → no alert.
- Coercion: `"" || "default"` → "default" ("" falsy).

**Interview Tip**: Demonstrate short-circuiting for guards: `user && user.name`.

---

## 6. Common Interview Questions and Outputs

#### Beginner-Level
1. **What’s the output?**
   ```js
   if ("0") console.log("Truthy"); // "Truthy"
   ```
   - **Answer**: Non-empty string is truthy.
   - **Tip**: List falsy values.

2. **What’s the output?**
   ```js
   let text = (18 < 18) ? "Minor" : "Adult"; // "Adult"
   ```
   - **Answer**: False → else value.
   - **Tip**: Ternary is expression, assignable.

3. **What’s the output without break?**
   ```js
   switch(1) { case 1: console.log(1); case 2: console.log(2); } // 1 2
   ```
   - **Answer**: Fall-through.
   - **Tip**: Intentional for groups.

#### Intermediate-Level
4. **Why `null ?? 0` → 0, but `null || 0` → 0?**
   - **Answer**: ?? ignores falsy, not nullish.
   - **Code**: `"" ?? "default" // ""` ("" not nullish).

5. **What’s the output?**
   ```js
   false || console.log("Short-circuit"); // "Short-circuit"
   ```
   - **Answer**: || evaluates right if left false.
   - **Tip**: No short-circuit here since left false.

6. **Rewrite with ternary.**
   ```js
   let msg; if (age >= 18) msg = "Adult"; else msg = "Minor";
   ```
   - **Answer**: `let msg = age >= 18 ? "Adult" : "Minor";`

#### Advanced-Level
7. **Why switch("0") doesn’t match case 0?**
   - **Answer**: Strict ===, types differ.
   - **Tip**: Use if for loose checks.

8. **What’s the output?**
   ```js
   let a = false && "Skipped"; console.log(a); // false
   ```
   - **Answer**: Short-circuits, returns left.

9. **Handle multiple conditions without nesting.**
   - **Answer**: Use &&/||.
   - **Code**: `age >= 16 && country === "USA" && (message = "Drive")`.

---

## Best Practices for Interviews

1. **Use Strict Checks**:
   - `===` in conditions.
   ```js
   if (x === 0) // Avoids "0" coercion
   ```

2. **Short-Circuit for Defaults**:
   - `const name = user.name || "Guest";`
   - Better: `user.name ?? "Guest";`

3. **Avoid Deep Nesting**:
   - Flatten with &&/|| or early returns.
   ```js
   if (!valid) return; // Guard clause
   ```

4. **Switch for Readability**:
   - For fixed values over long if-chains.
   ```js
   switch(status) { case "active": ... }
   ```

5. **Handle Falsy**:
   - Explicit checks: `if (arr.length > 0)`

---

## Common Pitfalls

1. **Coercion Surprises**:
   - `if ("false")` → true (string truthy).
   ```js
   if (0 == "0") // true, loose ==
   ```

2. **Missing Break in Switch**:
   - Unintended fall-through.
   ```js
   switch(1) { case 1: log(1); case 2: log(2); } // Logs both
   ```

3. **Ternary Misuse**:
   - Complex nesting unreadable.
   ```js
   cond ? a : cond2 ? b : c // OK, but limit
   ```

4. **Logical Op Precedence**:
   - `true || false && false` → true (&& higher).
   ```js
   (true || false) && false // false
   ```

5. **Nullish vs OR**:
   - `0 || 1` → 1, but `0 ?? 1` → 0.

---

## Quick Reference Table

| **Structure** | **Syntax** | **Example** | **Notes** |
| --- | --- | --- | --- |
| If | `if (cond) { ... }` | `if (age > 18) { ... }` | Truthy check. |
| Else | `else { ... }` | After if | False path. |
| Else If | `else if (cond) { ... }` | Chain conditions | Sequential. |
| Ternary | `cond ? trueVal : falseVal` | `age > 18 ? "Adult" : "Minor"` | Assignment shorthand. |
| Switch | `switch(expr) { case val: ... break; default: ... }` | Weekday mapping | Strict match, break required. |
| && | `expr1 && expr2` | `valid && proceed()` | Short-circuit if false. |
| || | `expr1 || expr2` | `name || "Guest"` | Short-circuit if true. |
| ! | `!expr` | `!isEmpty` | Invert. |
| ?? | `expr1 ?? expr2` | `value ?? default` | Non-nullish. |
