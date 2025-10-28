### JavaScript Call, Apply, Bind

#### 1. Definition
`call()`, `apply()`, and `bind()` are **built-in function methods** that let you **explicitly control what `this` refers to** when calling a function.

---

#### 2. Theory / Concept
In JavaScript, `this` depends on **how** a function is called. These methods give you **full control** over `this`.

| Method | Purpose | Returns |
|--------|--------|--------|
| `call(thisArg, arg1, arg2, ...)` | Calls function immediately with given `this` and args | Result of function |
| `apply(thisArg, [argsArray])` | Same as `call`, but args as **array** | Result of function |
| `bind(thisArg, arg1, ...)` | **Returns a new function** with fixed `this` | New bound function |

**Step-by-Step Process**:
1. Choose the object you want `this` to be.
2. Use `call`/`apply` → run now.
3. Use `bind` → get a reusable function.

---

#### 3. Syntax
```javascript
// call
func.call(thisObj, arg1, arg2);

// apply
func.apply(thisObj, [arg1, arg2]);

// bind
const boundFunc = func.bind(thisObj, arg1);
boundFunc(arg2); // later
```

---

#### 4. Types / Variants
| Method | Syntax | Use Case |
|--------|--------|---------|
| **`call()`** | `func.call(obj, a, b)` | When you know args individually |
| **`apply()`** | `func.apply(obj, [a, b])` | When args are in an array |
| **`bind()`** | `func.bind(obj, a)` → returns function | Reuse function with fixed `this` |

---

#### 5. Examples

**Example 1: `call()`**
```javascript
function greet(greeting) {
    return `${greeting}, ${this.name}!`;
}

const person = { name: "Alice" };
console.log(greet.call(person, "Hello")); // "Hello, Alice!"
```

**Example 2: `apply()`**
```javascript
function intro(greeting, city) {
    return `${greeting}, I'm ${this.name} from ${city}`;
}

const user = { name: "Bob" };
const args = ["Hi", "Delhi"];
console.log(intro.apply(user, args)); // "Hi, I'm Bob from Delhi"
```

**Example 3: `bind()`**
```javascript
function sayHi() {
    return `Hi, ${this.name}`;
}

const user1 = { name: "Sam" };
const greetSam = sayHi.bind(user1);
console.log(greetSam()); // "Hi, Sam"
```

---

#### 6. Practical Use Cases

**1. Borrowing Methods**
```javascript
const person = {
    name: "John",
    getName: function() { return this.name; }
};

const another = { name: "Jane" };
console.log(person.getName.call(another)); // "Jane"
```

**2. Array Methods on Array-Like Objects**
```javascript
const divs = document.querySelectorAll('div');
const divArray = Array.prototype.slice.call(divs);
console.log(divArray); // Real array
```

**3. Math.max with Array**
```javascript
const nums = [3, 7, 1, 9];
console.log(Math.max.apply(null, nums)); // 9
// Modern: Math.max(...nums)
```

**4. Event Handlers (Preserve `this`)**
```javascript
class Button {
    constructor() {
        this.count = 0;
        document.getElementById('btn')
            .addEventListener('click', this.click.bind(this));
    }
    click() {
        this.count++;
        console.log("Clicked:", this.count);
    }
}
```

**5. Partial Application**
```javascript
function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
console.log(double(5)); // 10
```

---

#### 7. Use Cases
- **Fix `this` in callbacks** (events, timers).
- **Borrow methods** from other objects.
- **Convert array-like** → real array.
- **Create reusable functions** with preset args.
- **Functional programming** (partial apply, compose).

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **Using `bind` in render (React)** | Creates new function every time → performance drop | Use arrow function or bind in constructor |
| **Wrong `this` in event handler** | `this` becomes DOM element | Use `.bind(this)` or arrow function |
| **Using `apply` with wrong args** | Forgetting array | Pass `[arg1, arg2]` |
| **Calling `bind` twice** | First bind ignored | Only bind once |

**Bug Example:**
```javascript
// Bad (React re-render creates new function)
<button onClick={this.handleClick.bind(this)}>Click</button>

// Good
constructor() {
    this.handleClick = this.handleClick.bind(this);
}
// or use arrow
handleClick = () => { ... }
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Create a `log` function that prefixes with object name using `bind`.
2. **Exercise 2**: Convert a `NodeList` to array using `call`.
3. **Exercise 3**: Build a `createAdder(n)` that returns a function adding `n`.

**Sample Solution for Exercise 1**:
```javascript
function log(message) {
    console.log(`[${this.name}]: ${message}`);
}

const app = { name: "MyApp" };
const appLog = log.bind(app);
appLog("Started"); // "[MyApp]: Started"
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Say: **“`call` and `apply` run now, `bind` returns a new function.”**
- Show **event handler + bind**.
- Compare: `call` vs `apply` → **args list vs array**.
- Mention **partial application**.

**Questions**:

- **Q**: Difference between `call` and `apply`?  
  **A**: `call` takes args one by one, `apply` takes an array.

- **Q**: What does `bind` return?  
  **A**: A **new function** with fixed `this` and preset args.

- **Q**: How to fix `this` in event handler?  
  **A**: Use `.bind(this)` or arrow function.

- **Q**: Can you use `bind` with arrow functions?  
  **A**: No — arrow functions ignore `bind` (lexical `this`).

---

#### 11. Summary Table

| Key Point              | Description |
|------------------------|-------------|
| **Definition**         | Control `this` when calling functions |
| **Core Concept**       | `call`/`apply` → immediate, `bind` → returns function |
| **Syntax**             | `call(obj, a, b)`, `apply(obj, [a,b])`, `bind(obj)` |
| **Variants**           | `call`, `apply`, `bind` |
| **Common Use**         | Fix `this`, borrow methods, partial apply |
| **Typical Errors**     | `bind` in render, wrong args in `apply` |
| **Practice Focus**     | Event handlers, array conversion |
| **Interview Prep**     | Explain `call` vs `apply`, show `bind` in class |

---
