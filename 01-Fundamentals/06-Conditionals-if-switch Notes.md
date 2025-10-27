### JavaScript Conditionals (if, switch)

#### 1. Definition
Conditionals in JavaScript are control structures that allow programs to execute specific code blocks based on the evaluation of conditions, enabling dynamic decision-making in code execution.

#### 2. Theory / Concept
Conditionals evaluate expressions to determine which code path to follow, typically producing boolean results (`true` or `false`). JavaScript provides `if` statements for flexible conditions, `switch` statements for multiple discrete matches, and the ternary operator for concise conditional expressions.  
- **If Statements**: Evaluate a condition; execute a block if true. Use `else` for alternatives and `else if` for chained conditions. Nesting enables complex logic.  
- **Switch Statements**: Compare a single value against multiple cases, executing the matching block. `break` prevents fall-through, and `default` handles unmatched cases.  
- **Ternary Operator**: A shorthand for simple `if-else`, returning a value based on a condition.  
- **Truthy/Falsy**: Conditions coerce values to booleans (e.g., `0`, `""`, `null` are falsy; non-zero numbers, non-empty strings are truthy).  

**Step-by-Step Process**:  
1. Define the condition (e.g., comparison, logical expression).  
2. Use `if`, `switch`, or ternary to evaluate and select a code path.  
3. Execute the corresponding block or return a value.  
4. Handle edge cases (e.g., invalid inputs) with `else` or `default`.  

#### 3. Syntax
```javascript
// Basic if
if (condition) {
    // Code if condition is true
}

// If-else
if (condition) {
    // Code if true
} else {
    // Code if false
}

// If-else if-else
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition2 is true
} else {
    // Code if all conditions are false
}

// Switch
switch (expression) {
    case value1:
        // Code if expression === value1
        break;
    case value2:
        // Code if expression === value2
        break;
    default:
        // Code if no cases match
}

// Ternary
let result = condition ? valueIfTrue : valueIfFalse;
```

#### 4. Types / Variants
- **Basic If**: Single condition check.  
  ```javascript
  if (age >= 18) {
      console.log("Adult");
  }
  ```
- **If-Else**: Adds an alternative block for false conditions.  
  ```javascript
  if (score >= 60) {
      console.log("Pass");
  } else {
      console.log("Fail");
  }
  ```
- **If-Else If-Else**: Chains multiple conditions.  
  ```javascript
  if (score >= 90) {
      console.log("A");
  } else if (score >= 80) {
      console.log("B");
  } else {
      console.log("C or lower");
  }
  ```
- **Nested If**: Conditions within conditions for complex logic.  
  ```javascript
  if (user.isLoggedIn) {
      if (user.isAdmin) {
          console.log("Admin access");
      }
  }
  ```
- **Switch**: Matches a value against cases.  
  ```javascript
  switch (day) {
      case "monday":
          console.log("Work starts");
          break;
      default:
          console.log("Regular day");
  }
  ```
- **Ternary Operator**: Concise `if-else` for expressions.  
  ```javascript
  let status = age >= 18 ? "Adult" : "Minor";
  ```

#### 5. Examples
**Example 1: If-Else If for Grading**  
```javascript
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}
console.log(getGrade(85)); // "B"
```

**Example 2: Switch for Day Messages**  
```javascript
function getDayMessage(day) {
    switch (day.toLowerCase()) {
        case "monday":
            return "Start of the week";
        case "friday":
            return "Weekend soon!";
        default:
            return "Midweek day";
    }
}
console.log(getDayMessage("friday")); // "Weekend soon!"
```

**Example 3: Ternary for Status**  
```javascript
let user = { status: "active" };
let color = user.status === "active" ? "green" : user.status === "pending" ? "yellow" : "red";
console.log(color); // "green"
```

#### 6. Use Cases
- **Form Validation**: Check user inputs (e.g., email format, password length).  
- **User Authentication**: Control access based on roles or login status.  
- **Game Logic**: Determine outcomes (e.g., win/loss based on scores).  
- **E-commerce**: Calculate shipping or discounts based on order total or user type.  
- **UI Rendering**: Display components conditionally (e.g., show/hide based on state).

#### 7. Common Bugs / Mistakes
- **Missing Braces in If**: Omitting `{}` for single statements can lead to errors with added lines. **Fix**: Always use braces for clarity.  
  ```javascript
  // Bad
  if (true) console.log("This runs");
    console.log("This unexpectedly runs");
  // Good
  if (true) { console.log("This runs"); }
  ```
- **No Break in Switch**: Forgetting `break` causes fall-through. **Fix**: Include `break` or use intentional fall-through sparingly.  
  ```javascript
  // Bad
  switch (day) {
      case "monday":
          console.log("Monday");
      case "tuesday":
          console.log("Tuesday"); // Runs unexpectedly
  }
  // Good
  switch (day) {
      case "monday":
          console.log("Monday");
          break;
  }
  ```
- **Overusing Nested Ifs**: Deep nesting reduces readability. **Fix**: Refactor with early returns or logical operators.  
  ```javascript
  // Bad
  if (user) {
      if (user.role === "admin") {
          if (user.active) {
              console.log("Access");
          }
      }
  }
  // Good
  if (!user || user.role !== "admin" || !user.active) return;
  console.log("Access");
  ```
- **Overusing Ternary**: Nested ternaries are hard to read. **Fix**: Use `if` for complex conditions.  
  ```javascript
  // Bad
  let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
  // Good
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "D";
  ```
- **Falsy Value Errors**: Misinterpreting falsy values in conditions. **Fix**: Use explicit checks or `??`.  
  ```javascript
  // Bad
  if (user.name) { /* Fails for name = "" */ }
  // Good
  if (user.name ?? false) { /* Handles null/undefined */ }
  ```

#### 8. Problem Solving / Practice Questions
1. **Exercise 1**: Write a function that uses `if-else` to categorize a temperature (e.g., < 0: "Freezing", 0-15: "Cold", 16-25: "Mild", >25: "Hot").  
2. **Exercise 2**: Create a `switch` function to map HTTP status codes (200, 404, 500) to messages (e.g., "OK", "Not Found", "Server Error").  
3. **Exercise 3**: Use a ternary operator to assign a discount rate (10% if total > 100, else 0%).

**Sample Solution for Exercise 1**:  
```javascript
function categorizeTemperature(temp) {
    if (temp < 0) return "Freezing";
    else if (temp <= 15) return "Cold";
    else if (temp <= 25) return "Mild";
    else return "Hot";
}
console.log(categorizeTemperature(20)); // "Mild"
```

#### 9. Interview Tips & Questions
**Tips**:  
- Explain when to use `if` vs. `switch` (ranges vs. exact matches).  
- Demonstrate clean, readable conditional logic with early returns.  
- Highlight the importance of `break` in `switch` and avoiding nested ternaries.  

**Questions**:  
- **Q**: When should you use a `switch` statement instead of `if-else`?  
  **A**: Use `switch` for multiple exact value matches (e.g., day names, status codes) for readability. Use `if-else` for ranges or complex conditions (e.g., age > 18).  
- **Q**: How does JavaScript evaluate conditions in `if` statements?  
  **A**: Conditions are coerced to booleans using truthy/falsy rules. Falsy values include `0`, `""`, `null`, `undefined`, `NaN`; others are truthy.  
- **Q**: What’s wrong with nested ternaries, and how would you refactor them?  
  **A**: Nested ternaries are hard to read and maintain. Refactor using `if-else` or a function for clarity, especially for multiple conditions.

#### 10. Summary Table
| Key Point            | Description |
|----------------------|-------------|
| Definition           | Structures for executing code based on conditions. |
| Core Concept         | Evaluate conditions to control code flow (`if`, `switch`, ternary). |
| Syntax               | `if`, `else`, `else if`, `switch`, `case`, `break`, `?:`. |
| Variants             | Basic if, if-else, chained if, nested if, switch, ternary. |
| Common Use           | Validation, authentication, game logic, e-commerce rules. |
| Typical Errors       | Missing braces, no `break` in switch, nested ternaries, falsy misuse. |
| Practice Focus       | Write clean conditionals, use switch for matches, ternaries for simple cases. |
| Interview Prep       | Explain if vs. switch, truthy/falsy, refactoring nested logic. |
