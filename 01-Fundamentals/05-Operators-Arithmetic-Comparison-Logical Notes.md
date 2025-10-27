### JavaScript Operators (Arithmetic, Comparison, Logical)

#### 1. Definition
Operators in JavaScript are symbols or keywords that perform operations on one or more values (operands), such as calculations, comparisons, or logical evaluations, to produce a result. They help manipulate data and make decisions in code.

#### 2. Theory / Concept
Operators enable data manipulation and control flow by acting on operands. They follow precedence rules (e.g., multiplication before addition) and associativity (e.g., left-to-right for most).  
- **Arithmetic**: Perform math operations, with implicit type coercion (e.g., string to number).  
- **Comparison**: Evaluate relationships between values, returning booleans, with strict vs. loose variants.  
- **Logical**: Combine booleans, using short-circuit evaluation to skip unnecessary computations.  
- **Assignment**: Update variables, often combining with other operators for shorthand.  

**Step-by-Step Process**:  
1. Identify the operator type and operands.  
2. Apply precedence and associativity to evaluate expressions.  
3. Handle type coercion if needed (e.g., in loose comparisons).  
4. Execute the operation, considering short-circuiting for logical operators.  
5. Use parentheses to override default order for clarity.

#### 3. Syntax
```javascript
// Arithmetic operators
let result = operand1 + operand2;  // Addition (or concatenation for strings)

// Comparison operators
let isEqual = operand1 === operand2;  // Strict equality

// Logical operators
let condition = (value1 && value2) || value3;  // AND and OR with short-circuit

// Assignment operators
let variable = value;  // Basic assignment
variable += increment;  // Compound assignment (variable = variable + increment)
```

#### 4. Types / Variants
- **Arithmetic Operators**:  
  - Basic: `+` (add/concat), `-` (subtract), `*` (multiply), `/` (divide), `%` (modulus), `**` (exponent).  
    ```javascript
    console.log(10 + 5);  // 15
    console.log("Hello" + " World");  // "Hello World"
    ```
  - Unary: `+` (to number), `-` (negate), `++` (increment), `--` (decrement).  
    ```javascript
    let x = 5;
    console.log(++x);  // 6 (pre-increment)
    ```
- **Comparison Operators**:  
  - Strict: `===` (equal value/type), `!==` (not equal value/type).  
    ```javascript
    console.log(5 === "5");  // false
    ```
  - Loose: `==` (equal after coercion), `!=` (not equal after coercion).  
    ```javascript
    console.log(5 == "5");  // true
    ```
  - Relational: `>`, `>=`, `<`, `<=`.  
    ```javascript
    console.log(10 > 5);  // true
    ```
- **Logical Operators**:  
  - Basic: `&&` (AND), `||` (OR), `!` (NOT).  
    ```javascript
    console.log(true && false);  // false
    ```
  - Modern: `??` (nullish coalescing), `&&=`, `||=`, `??=`.  
    ```javascript
    let val = null ?? "default";  // "default"
    ```
- **Assignment Operators**:  
  - Basic: `=`.  
  - Compound: `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.  
    ```javascript
    let num = 10;
    num += 5;  // 15
    ```

#### 5. Examples
**Example 1: Arithmetic Operations**  
```javascript
// Basic arithmetic with numbers
let a = 10;
let b = 3;
console.log(a + b);  // 13 (addition)
console.log(a - b);  // 7 (subtraction)
console.log(a * b);  // 30 (multiplication)
console.log(a / b);  // 3.333... (division)
console.log(a % b);  // 1 (modulus)
console.log(a ** b); // 1000 (exponentiation)
```

**Example 2: Comparison and Logical**  
```javascript
// Comparing values and combining conditions
let x = 5;
let y = "5";
console.log(x === y);  // false (strict equality)
console.log(x == y);   // true (loose equality)
console.log(x > 0 && y > 0); // true (logical AND)
console.log(x > 10 || y > 0); // true (logical OR)
console.log(!(x === y)); // true (logical NOT)
```

**Example 3: Assignment with Defaults**  
```javascript
// Using logical assignment for defaults
let user = { name: null };
user.name ??= "Guest";  // Assign if null/undefined
console.log(user.name); // "Guest"

let score = 0;
score ||= 100;  // Assign if falsy
console.log(score);     // 100
```

#### 6. Use Cases
- **Arithmetic**: Calculating totals in e-commerce (e.g., subtotal = price * quantity), generating random numbers for games, or handling financial computations.  
- **Comparison**: Validating user input (e.g., age >= 18), sorting data, or checking equality in authentication.  
- **Logical**: Conditional rendering in UI (e.g., user && user.name), setting defaults (e.g., value ?? "default"), or combining validation rules in forms.  
- **Assignment**: Updating counters in loops (e.g., total += item.price), shorthand for state updates in apps like shopping carts or score trackers.

#### 7. Common Bugs / Mistakes
- **Loose vs. Strict Equality**: Using `==` leads to coercion surprises (e.g., `0 == false` is true). **Fix**: Always use `===` for strict checks.  
- **Operator Precedence**: Miscalculating order (e.g., `2 + 3 * 4` is 14, not 20). **Fix**: Use parentheses for clarity, like `(2 + 3) * 4`.  
- **Short-Circuit Misuse**: Assuming `&&` always evaluates both sides (it doesn’t if left is false). **Fix**: Rely on it for guards, like `user && user.name`.  
- **Falsy Value Confusion**: Treating `0` or `""` as nullish. **Fix**: Use `??` instead of `||` for defaults to handle falsy non-null values.  
- **Division by Zero**: Results in `Infinity`. **Fix**: Check divisor !== 0 before dividing.

#### 8. Problem Solving / Practice Questions
1. **Exercise 1**: Write a function that takes two numbers and an operator (`+`, `-`, `*`, `/`, `%`, `**`), performs the operation, and handles errors like division by zero.  
2. **Exercise 2**: Create a function to check if a person is eligible to vote (age >= 18 && citizen === true), using strict comparisons.  
3. **Exercise 3**: Implement a default value setter using `??=` for an object property (e.g., config.theme ??= "light").

**Sample Solution for Exercise 1**:  
```javascript
function calc(a, b, op) {
    if (op === "/" && b === 0) return "Error: Division by zero";
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        case "%": return a % b;
        case "**": return a ** b;
        default: return "Invalid operator";
    }
}
console.log(calc(10, 5, "/")); // 2
```

#### 9. Interview Tips & Questions
**Tips**:  
- Explain precedence with examples and how to override it.  
- Differentiate `==` vs. `===`, and `||` vs. `??`.  
- Demonstrate short-circuit evaluation in code snippets.  

**Questions**:  
- **Q**: What is the difference between `==` and `===`?  
  **A**: `==` allows type coercion (e.g., `5 == "5"` is true), while `===` checks both value and type (e.g., `5 === "5"` is false). Use `===` to avoid unexpected results.  
- **Q**: How does short-circuit evaluation work in `&&` and `||`?  
  **A**: For `&&`, if the left operand is falsy, it returns that without evaluating the right. For `||`, if the left is truthy, it returns that. Example: `user && user.name` avoids errors if user is null.  
- **Q**: What does `a ?? b` do, and how does it differ from `a || b`?  
  **A**: `??` returns `b` only if `a` is null or undefined, while `||` returns `b` if `a` is any falsy value (e.g., 0, ""). Use `??` for defaults ignoring other falsy values.

#### 10. Summary Table
| Key Point            | Description |
|----------------------|-------------|
| Definition           | Symbols/keywords for operations on values. |
| Core Concept         | Manipulate data via arithmetic, comparisons, logic; follow precedence. |
| Syntax               | e.g., `+`, `===`, `&&`, `=`, `+=`. |
| Variants             | Arithmetic (basic/unary), Comparison (strict/loose), Logical (basic/modern), Assignment (basic/compound). |
| Common Use           | Calculations, validations, defaults, updates in apps/forms/games. |
| Typical Errors       | Loose equality, precedence issues, falsy confusion. |
| Practice Focus       | Build calculators, validators, default setters. |
| Interview Prep       | Explain strict vs. loose, short-circuit, `??` vs. `||`.