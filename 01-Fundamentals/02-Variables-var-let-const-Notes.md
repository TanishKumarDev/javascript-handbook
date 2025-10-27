### JavaScript Variables (var, let, const)

#### 1. Definition
Variables in JavaScript are containers used to store data values, such as numbers, strings, or objects, which can be accessed and manipulated throughout a program. They act like labeled storage boxes, holding data that can be referenced by their names.

#### 2. Theory / Concept
Variables are fundamental to programming, enabling data storage, retrieval, and manipulation. JavaScript provides three ways to declare variables—`var`, `let`, and `const`—each with distinct behaviors:  
- **Declaration and Initialization**: Declaring a variable reserves a name, while initialization assigns it a value.  
- **Scope**: Determines where a variable is accessible (block, function, or global scope).  
- **Reassignment**: `let` and `var` allow reassignment, while `const` does not (though `const` objects/arrays can have their contents modified).  
- **Hoisting**: `var` declarations are hoisted to the top of their scope, while `let` and `const` are hoisted but not initialized, causing a "temporal dead zone."  
- **Best Practice**: Modern JavaScript favors `let` and `const` over `var` due to clearer scoping and fewer errors.

**Step-by-Step Process**:  
1. Declare a variable using `var`, `let`, or `const`.  
2. Optionally initialize it with a value.  
3. Use the variable in operations, functions, or conditions.  
4. Reassign (if allowed) or access the variable within its scope.

#### 3. Syntax
```javascript
// Declaring variables with var (legacy, avoid in modern code)
var variableName = value;  // Function-scoped, hoisted, allows redeclaration

// Declaring variables with let (modern, reassignable)
let variableName = value;  // Block-scoped, hoisted but not initialized

// Declaring variables with const (modern, constant)
const variableName = value;  // Block-scoped, must be initialized, no reassignment

// Examples
var count = 10;         // Can be redeclared and reassigned
let userName = "John";  // Can be reassigned, not redeclared
const PI = 3.14159;     // Cannot be reassigned or redeclared
```

#### 4. Types / Variants
- **`var`**: Legacy declaration, function-scoped, allows redeclaration, and is hoisted with `undefined`.  
  ```javascript
  var x = 5;
  var x = 10;  // Redeclaration allowed
  console.log(x);  // Output: 10
  ```
- **`let`**: Block-scoped, does not allow redeclaration, hoisted but inaccessible before declaration (temporal dead zone).  
  ```javascript
  let y = 20;
  // let y = 30;  // SyntaxError: Identifier 'y' has already been declared
  y = 30;  // Reassignment allowed
  console.log(y);  // Output: 30
  ```
- **`const`**: Block-scoped, must be initialized, prevents reassignment but allows mutable object/array modifications.  
  ```javascript
  const z = 100;
  // z = 200;  // TypeError: Assignment to constant variable
  const obj = { key: "value" };
  obj.key = "newValue";  // Allowed: modifying object properties
  console.log(obj.key);  // Output: newValue
  ```

#### 5. Examples
**Example 1: Basic Variable Usage**  
```javascript
// Declaring variables with different keywords
let score = 95;          // Reassignable
const maxScore = 100;    // Constant
var attempts = 3;        // Legacy, avoid

// Reassigning let variable
score = score - 10;      // Subtract 10
console.log("Score:", score);  // Output: Score: 85

// Accessing const
console.log("Max Score:", maxScore);  // Output: Max Score: 100

// Modifying var
attempts += 1;           // Increment attempts
console.log("Attempts:", attempts);  // Output: Attempts: 4
```

**Example 2: Block Scope with let/const**  
```javascript
// Demonstrating block scope
if (true) {
    let blockVar = "I'm inside a block";  // Only accessible in block
    const blockConst = "I'm constant";    // Only accessible in block
    console.log(blockVar, blockConst);    // Output: I'm inside a block I'm constant
}
// console.log(blockVar);  // ReferenceError: blockVar is not defined
```

**Example 3: const with Objects**  
```javascript
// Using const with an object
const user = {
    name: "Alice",
    age: 30
};

// Modifying object properties (allowed)
user.age = 31;
user.city = "London";
console.log("User:", user);  // Output: User: { name: "Alice", age: 31, city: "London" }

// Attempting to reassign the variable (not allowed)
// user = {};  // TypeError: Assignment to constant variable
```

#### 6. Use Cases
- **State Management**: Storing application state (e.g., `let isLoggedIn = false;` for user authentication status).  
- **Configuration Settings**: Using `const` for fixed values (e.g., `const API_URL = "https://api.example.com";` in a web app).  
- **Dynamic Data**: Using `let` for counters or accumulators in loops (e.g., `let total = 0;` in a shopping cart calculation).  
- **Data Structures**: Storing complex data like objects or arrays with `const` to prevent reassignment while allowing content updates (e.g., `const cart = []; cart.push(item);`).  
- **Global Constants**: Defining app-wide constants like `const MAX_USERS = 1000;` for scalability limits.

#### 7. Common Bugs / Mistakes
- **Using `var` in Modern Code**: Leads to scope issues (e.g., `var` variables leaking outside blocks). **Fix**: Use `let` or `const`.  
  ```javascript
  // Bad: var leaks outside block
  if (true) { var x = 10; }
  console.log(x);  // Output: 10 (unexpected)
  
  // Good: let is block-scoped
  if (true) { let y = 10; }
  // console.log(y);  // ReferenceError
  ```
- **Uninitialized `const`**: Forgetting to initialize a `const` variable. **Fix**: Always assign a value during declaration.  
  ```javascript
  // Bad
  const PI;  // SyntaxError: Missing initializer
  
  // Good
  const PI = 3.14159;
  ```
- **Reassigning `const`**: Attempting to reassign a `const` variable. **Fix**: Use `let` if reassignment is needed.  
  ```javascript
  // Bad
  const count = 5;
  count = 10;  // TypeError
  
  // Good
  let count = 5;
  count = 10;  // Works
  ```
- **Accessing Variables in Temporal Dead Zone**: Using `let`/`const` before declaration. **Fix**: Declare variables before use.  
  ```javascript
  // Bad
  console.log(x);  // ReferenceError: Cannot access 'x' before initialization
  let x = 5;
  
  // Good
  let x = 5;
  console.log(x);  // Output: 5
  ```
- **Non-Descriptive Names**: Using vague names like `a` or `temp`. **Fix**: Use meaningful, camelCase names (e.g., `userAge`).

#### 8. Problem Solving / Practice Questions
1. **Exercise 1**: Declare a `const` variable for a website’s name and a `let` variable for a page counter. Increment the counter and log both values.  
2. **Exercise 2**: Create an object with `const` to store book details (title, author, year). Update the year and add a genre property, then log the object.  
3. **Exercise 3**: Write a function that uses `let` to track the number of times it’s called, storing the count in a variable, and returns the count. Test it multiple times.

**Sample Solution for Exercise 1**:  
```javascript
const siteName = "AceDevHub";
let pageCounter = 1;
pageCounter++;
console.log("Site:", siteName, "Page:", pageCounter);  // Output: Site: AceDevHub Page: 2
```

#### 9. Interview Tips & Questions
**Tips**:  
- Explain the differences between `var`, `let`, and `const` clearly, emphasizing scope and hoisting.  
- Demonstrate proper use of `const` for immutable references and `let` for reassignable variables.  
- Be ready to debug scope-related issues or explain why `var` is outdated.  

**Questions**:  
- **Q**: What are the differences between `var`, `let`, and `const`?  
  **A**: `var` is function-scoped, hoisted with `undefined`, and allows redeclaration. `let` is block-scoped, hoisted but not initialized, and allows reassignment. `const` is block-scoped, must be initialized, and prevents reassignment but allows object/array mutations.  
- **Q**: What is the temporal dead zone?  
  **A**: It’s the period between entering a scope and the declaration of a `let`/`const` variable, where accessing the variable causes a `ReferenceError`.  
- **Q**: Why might `const` still allow changes to an object?  
  **A**: `const` prevents reassignment of the variable but allows mutation of object/array properties, as the reference remains constant.

#### 10. Summary Table
| Key Point            | Description |
|----------------------|-------------|
| Definition           | Containers for storing data values. |
| Core Concept         | Store, retrieve, manipulate data with different scoping rules. |
| Syntax               | `var` (function-scoped), `let` (block-scoped, reassignable), `const` (block-scoped, constant). |
| Variants             | `var` (legacy), `let` (reassignable), `const` (immutable reference). |
| Common Use           | State management, configurations, counters, data structures. |
| Typical Errors       | Using `var`, uninitialized `const`, temporal dead zone access. |
| Practice Focus       | Declare, reassign, scope variables correctly. |
| Interview Prep       | Explain scoping, hoisting, and `const` mutability. |
