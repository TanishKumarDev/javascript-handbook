### JavaScript Function Scope

#### 1. Definition
Scope in JavaScript determines the accessibility of variables within different parts of a program. It defines where variables and functions can be accessed, ensuring predictable and controlled behavior in code execution.

#### 2. Theory / Concept
Scope governs variable visibility, organized into global, function, and block levels. Understanding scope is essential for managing data privacy, avoiding unintended side effects, and leveraging advanced patterns like closures.  
- **Global Scope**: Variables declared outside functions are accessible everywhere.  
- **Function Scope**: Variables declared within a function are only accessible within that function.  
- **Block Scope**: Variables declared with `let` or `const` inside blocks (e.g., `{}` in `if` or `for`) are confined to that block.  
- **Variable Shadowing**: A variable in a narrower scope can override one with the same name in an outer scope.  
- **Hoisting**: Variable and function declarations are moved to the top of their scope, affecting accessibility.  

**Step-by-Step Process**:  
1. Identify the scope of a variable based on its declaration (`var`, `let`, `const`) and location (global, function, block).  
2. Determine accessibility based on lexical scope (inner scopes access outer scopes).  
3. Account for hoisting and shadowing effects.  
4. Use scope to encapsulate data for privacy or modularity.

#### 3. Syntax
```javascript
// Global Scope
let globalVar = "Accessible everywhere";

// Function Scope
function myFunction() {
    let functionVar = "Only in function";
    // Access functionVar here
}

// Block Scope
if (true) {
    let blockVar = "Only in block";
    // Access blockVar here
}

// Nested Scope
function outer() {
    let outerVar = "Outer scope";
    function inner() {
        let innerVar = "Inner scope";
        // Access outerVar and innerVar
    }
}
```

#### 4. Types / Variants
| Scope Type         | Explanation                                                                 | Code Example                                                                 |
|--------------------|-----------------------------------------------------------------------------|------------------------------------------------------------------------------|
| **Global Scope**   | Variables declared outside functions, accessible everywhere.                | ```javascript
| **Function Scope** | Variables (`var`, `let`, `const`) inside a function, accessible only there. | ```javascript<br>function fn() { let x = 1; console.log(x); }<br>fn(); // 1<br>// console.log(x); // Error``` |
| **Block Scope**    | `let`/`const` variables inside `{}` (e.g., `if`, `for`), limited to block.  | ```javascript<br>if (true) { let x = 1; }<br>// console.log(x); // Error``` |
| **Nested Scope**   | Inner functions access outer function variables (lexical scoping).          | ```javascript<br>function outer() { let x = 1; function inner() { console.log(x); } inner(); }<br>outer(); // 1``` |
| **Variable Shadowing** | Inner scope variable overrides outer scope variable with same name.       | ```javascript<br>let x = "Global"; function fn() { let x = "Local"; console.log(x); }<br>fn(); // "Local"``` |

#### 5. Examples
**Example 1: Global and Function Scope**  
```javascript
let globalVar = "I'm global";
function showScope() {
    let functionVar = "I'm local";
    console.log(globalVar); // "I'm global"
    console.log(functionVar); // "I'm local"
}
showScope();
// console.log(functionVar); // Error: functionVar is not defined
```

**Example 2: Block Scope with `let`**  
```javascript
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // Error: i is not defined
```

**Example 3: Variable Shadowing**  
```javascript
let name = "Global";
function testShadowing() {
    let name = "Local";
    if (true) {
        let name = "Block";
        console.log(name); // "Block"
    }
    console.log(name); // "Local"
}
testShadowing();
console.log(name); // "Global"
```

#### 6. Hoisting and Scope
- **var Hoisting**: Declared variables are hoisted to the top of their scope, initialized as `undefined`.  
- **let/const Hoisting**: Hoisted but not initialized (Temporal Dead Zone).  
- **Function Hoisting**: Declarations are fully hoisted; expressions are not.  
```javascript
console.log(varVar); // undefined
var varVar = "Hoisted";
console.log(letVar); // ReferenceError: Cannot access 'letVar' before initialization
let letVar = "Not hoisted";
sayHello(); // "Hello"
function sayHello() { console.log("Hello"); }
```

#### 7. Use Cases
- **Data Privacy**: Use function scope to create private variables (e.g., `createCounter`).  
- **Module Patterns**: Encapsulate data with IIFEs to expose only public methods.  
- **Loop Isolation**: Use block scope (`let`) to avoid issues in loops with closures.  
- **Configuration Management**: Maintain settings in a controlled scope (e.g., `createConfig`).  
- **Avoiding Global Pollution**: Minimize global variables to prevent conflicts.

#### 8. Common Bugs / Mistakes
- **Accidental Globals**: Omitting `var`/`let`/`const` creates global variables. **Fix**: Always declare variables.  
  ```javascript
  // Bad
  function fn() { x = 1; } // Creates global x
  fn();
  console.log(x); // 1
  // Good
  function fn() { let x = 1; }
  ```
- **var in Loops**: `var` causes unexpected behavior in closures. **Fix**: Use `let` or IIFEs.  
  ```javascript
  // Bad
  for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 100); // 3, 3, 3
  }
  // Good
  for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 100); // 0, 1, 2
  }
  ```
- **Temporal Dead Zone Errors**: Accessing `let`/`const` before declaration. **Fix**: Declare before use.  
  ```javascript
  // Bad
  console.log(x); // ReferenceError
  let x = 1;
  ```
- **Overusing Global Scope**: Leads to conflicts. **Fix**: Minimize global variables, use modules.  
  ```javascript
  // Bad
  var data = "Global";
  // Good
  function fn() { let data = "Local"; }
  ```
- **Shadowing Confusion**: Unintentionally overriding variables. **Fix**: Use unique names or check scopes.  
  ```javascript
  // Bad
  let x = 1;
  function fn() { let x = 2; } // Shadows x
  ```

#### 9. Problem Solving / Practice Questions
1. **Exercise 1**: Create a counter function that uses function scope to keep `count` private.  
2. **Exercise 2**: Write a module pattern using an IIFE to manage a private todo list.  
3. **Exercise 3**: Fix a loop with `var` that logs incorrect values in a `setTimeout`.

**Sample Solution for Exercise 1**:  
```javascript
function createCounter() {
    let count = 0;
    return {
        increment: () => count++,
        get: () => count
    };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.get()); // 1
```

#### 10. Interview Tips & Questions
**Tips**:  
- Explain differences between `var`, `let`, and `const` in scope.  
- Demonstrate how to use scope for data privacy (e.g., module pattern).  
- Clarify hoisting behavior with practical examples.  

**Questions**:  
- **Q**: How does block scope differ from function scope?  
  **A**: Block scope (`let`/`const`) limits variables to `{}` blocks (e.g., `if`, `for`); function scope (`var`) limits to the function, ignoring blocks.  
- **Q**: What is the Temporal Dead Zone?  
  **A**: The period between entering a scope and the declaration of `let`/`const` variables, where accessing them causes a `ReferenceError`.  
- **Q**: How can you create private variables in JavaScript?  
  **A**: Use function scope or IIFEs to encapsulate variables, exposing only public methods (e.g., `createCounter`).

#### 11. Summary Table
| Key Point            | Description |
|----------------------|-------------|
| Definition           | Determines variable accessibility in code. |
| Core Concept         | Global, function, and block scopes control visibility; hoisting and shadowing affect behavior. |
| Syntax               | `var` (function scope), `let`/`const` (block scope), function declarations. |
| Variants             | Global, function, block, nested, shadowing. |
| Common Use           | Data privacy, module patterns, loop isolation, configuration management. |
| Typical Errors       | Accidental globals, `var` in loops, TDZ errors, shadowing confusion. |
| Practice Focus       | Create private variables, fix loop issues, use block scope. |
| Interview Prep       | Explain scope types, hoisting, and privacy patterns. |
