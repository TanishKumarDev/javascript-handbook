### JavaScript Closures

#### 1. Definition
A **closure** is a function that remembers and can access variables from its outer (parent) scope — even after the outer function has finished running. It "closes over" the variables it needs.

---

#### 2. Theory / Concept
Closures happen naturally in JavaScript because functions are **first-class citizens** and use **lexical scoping**. This means an inner function can access variables from where it was *defined*, not just where it is *called*.

- **Key Idea**: The inner function keeps a reference to the outer scope’s variables.
- **Why it matters**: Enables data privacy, state preservation, and powerful patterns like modules and factories.
- **How it works**:
  1. A function is defined inside another function.
  2. The inner function references a variable from the outer function.
  3. The outer function returns the inner function (or passes it somewhere).
  4. Even after the outer function ends, the inner function still remembers the variable.

**Step-by-Step Process**:
1. Define an outer function with a local variable.
2. Define an inner function that uses that variable.
3. Return the inner function.
4. Call the returned function later — it still remembers the original variable!

---

#### 3. Syntax
```javascript
// Basic Closure Syntax
function outer() {
    let secret = "I'm hidden!";
    
    return function inner() {
        console.log(secret); // Can access 'secret'
    };
}

const myClosure = outer();  // outer() finishes
myClosure();                // Still prints "I'm hidden!"
```

---

#### 4. Types / Variants
| Closure Type           | Explanation                                                                 | Code Example |
|------------------------|-----------------------------------------------------------------------------|--------------|
| **Basic Closure**      | Inner function accesses outer variable after outer ends.                    | ```javascript
| **Function Factory**   | Returns customized functions based on input.                                 | ```javascript<br>function multiplyBy(n) { return (x) => x * n; }<br>const double = multiplyBy(2);``` |
| **Private Variables**  | Hide data using closure; expose only methods.                               | ```javascript<br>function Counter() { let count = 0; return { inc: () => ++count }; }``` |
| **Module Pattern**     | IIFE creates private scope with public API.                                 | ```javascript<br>const Module = (function() { let x = 0; return { get: () => x }; })();``` |
| **Loop Closure Fix**   | Use `let` or IIFE to capture loop variable per iteration.                   | See section 8 |

---

#### 5. Examples

**Example 1: Simple Closure**
```javascript
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

**Example 2: Private Counter**
```javascript
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Example 3: Module Pattern (IIFE)**
```javascript
const Calculator = (function() {
    let result = 0;
    
    return {
        add: (n) => result += n,
        subtract: (n) => result -= n,
        get: () => result,
        reset: () => result = 0
    };
})();

Calculator.add(10);
console.log(Calculator.get()); // 10
```

---

#### 6. Closures with Loops (Common Pitfall)

**Problem with `var`:**
```javascript
function badLoop() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 100);
    }
}
badLoop(); // Prints: 3, 3, 3
```

**Fix 1: Use `let` (Block Scope)**
```javascript
function goodLoop() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 100);
    }
}
goodLoop(); // Prints: 0, 1, 2
```

**Fix 2: Use IIFE (Closure per iteration)**
```javascript
function fixedWithIIFE() {
    for (var i = 0; i < 3; i++) {
        (function(index) {
            setTimeout(() => console.log(index), 100);
        })(i);
    }
}
fixedWithIIFE(); // Prints: 0, 1, 2
```

---

#### 7. Use Cases
- **Data Privacy**: Create private variables (no direct access).
- **Function Factories**: Generate functions with preset behavior.
- **Module Pattern**: Build self-contained modules.
- **Event Handlers**: Preserve state in callbacks.
- **Memoization**: Cache results of expensive functions.
- **State in Functional Components** (React `useState` uses closures internally).

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **Loop variable shared** | `var` has function scope | Use `let` or IIFE |
| **Memory leaks** | Closure holds large data | Only capture needed values |
| **Accidental global access** | Forgetting to return inner function | Always return the closure |
| **Thinking scope is dynamic** | Misunderstanding lexical vs dynamic scoping | JS uses **lexical** scoping |

**Bad (Memory Leak Risk):**
```javascript
function badHandler() {
    const hugeArray = new Array(1000000).fill('*');
    return function() {
        console.log("Hi"); // hugeArray still in memory!
    };
}
```

**Good:**
```javascript
function goodHandler() {
    const hugeArray = new Array(1000000).fill('*');
    const size = hugeArray.length; // Extract only what you need
    return function() {
        console.log("Size:", size);
    };
}
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Create a `createGreeting(name)` function that returns a function saying "Hello, [name]!".
2. **Exercise 2**: Build a `createBankAccount(balance)` with private `balance` and methods: `deposit`, `withdraw`, `checkBalance`.
3. **Exercise 3**: Fix a loop that creates 5 buttons; each should log its own index when clicked.

**Sample Solution for Exercise 2**:
```javascript
function createBankAccount(initial) {
    let balance = initial;
    
    return {
        deposit: (amt) => {
            if (amt > 0) balance += amt;
            return balance;
        },
        withdraw: (amt) => {
            if (amt > 0 && amt <= balance) balance -= amt;
            return balance;
        },
        checkBalance: () => balance
    };
}

const acc = createBankAccount(100);
acc.deposit(50);
console.log(acc.checkBalance()); // 150
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Always explain **"remembers even after outer function ends"**.
- Show **private counter** or **module pattern**.
- Mention **lexical scoping** vs dynamic.
- Know the **loop + closure** gotcha.

**Questions**:

- **Q**: What is a closure?  
  **A**: A function that retains access to its lexical scope even when executed outside that scope.

- **Q**: How do closures help with data privacy?  
  **A**: Variables in outer function are not accessible from outside, but inner functions can use them.

- **Q**: Why does `var` in a loop cause issues with closures?  
  **A**: `var` is function-scoped, so all iterations share the same `i`. Use `let` for block scope.

- **Q**: Can you create private methods in objects using closures?  
  **A**: Yes — return an object with methods that close over private data.

---

#### 11. Summary Table

| Key Point              | Description |
|------------------------|-----------|
| **Definition**         | Function that remembers outer scope variables |
| **Core Concept**       | Lexical scoping + function returns inner function |
| **Syntax**             | Outer function returns inner function |
| **Variants**           | Factory, private vars, module pattern |
| **Common Use**         | Privacy, state, modules, event handlers |
| **Typical Errors**     | Loop with `var`, memory leaks |
| **Practice Focus**     | Build private counters, fix loops |
| **Interview Prep**     | Explain memory, show module pattern |

---
