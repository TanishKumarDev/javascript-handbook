### JavaScript `this` Keyword

#### 1. Definition
The **`this` keyword** refers to the **object that is currently executing or calling the function**. Its value depends on **how and where** the function is called — not where it’s defined.

---

#### 2. Theory / Concept
JavaScript uses **dynamic `this` binding** — `this` is determined at **runtime**, not compile time.

- **Key Rule**: `this` = the object **before the dot** (or `undefined` in strict mode).
- **Four Main Rules**:
  1. **Global Context** → `this` = `window` (browser) or `global` (Node.js)
  2. **Object Method** → `this` = the object
  3. **Simple Function Call** → `this` = `window` / `undefined` (strict)
  4. **Constructor (`new`)** → `this` = new object

**Step-by-Step Process**:
1. Look at **how the function is called**.
2. Apply the correct `this` binding rule.
3. `call`, `apply`, `bind` can override it.

---

#### 3. Syntax
```javascript
// Global
console.log(this === window); // true (in browser)

// Object method
const person = {
    name: "Alice",
    greet: function() {
        console.log(this.name);
    }
};
person.greet(); // "Alice"

// Constructor
function Car(model) {
    this.model = model;
}
const myCar = new Car("Tesla");
```

---

#### 4. Types / Variants
| Context Type             | `this` Refers To                                  | Code Example |
|--------------------------|---------------------------------------------------|--------------|
| **Global**               | `window` (non-strict) / `undefined` (strict)      | ```javascript
| **Object Method**        | The object owning the method                      | ```javascript<br>obj.method() → this = obj``` |
| **Simple Function**      | `window` / `undefined`                            | ```javascript<br>fn() → this = window``` |
| **Constructor (`new`)**  | Newly created object                              | ```javascript<br>new Fn() → this = {}``` |
| **Event Handler**        | The element that triggered the event              | ```javascript<br>btn.onclick = function() { this }``` |
| **Arrow Function**       | `this` from enclosing scope (lexical)             | ```javascript<br>() => this``` |

---

#### 5. Examples

**Example 1: Object Method**
```javascript
const user = {
    name: "Bob",
    sayHi() {
        console.log("Hi, " + this.name);
    }
};
user.sayHi(); // "Hi, Bob"
```

**Example 2: Lost `this` in Callback**
```javascript
const game = {
    score: 100,
    showScore: function() {
        setTimeout(function() {
            console.log(this.score); // undefined!
        }, 100);
    }
};
game.showScore();
```

**Fix with Arrow Function:**
```javascript
showScore: function() {
    setTimeout(() => {
        console.log(this.score); // 100
    }, 100);
}
```

**Example 3: Constructor**
```javascript
function Animal(type) {
    this.type = type;
}
const cat = new Animal("Cat");
console.log(cat.type); // "Cat"
```

---

#### 6. Arrow Functions & `this`

Arrow functions **do not have their own `this`** — they inherit `this` from the **outer scope** (lexical scoping).

```javascript
const team = {
    members: ["A", "B"],
    getMembers: function() {
        // Regular function → this = team
        this.members.forEach(function() {
            console.log(this); // window (lost!)
        });

        // Arrow → this = team
        this.members.forEach(() => {
            console.log(this === team); // true
        });
    }
};
```

---

#### 7. Use Cases
- **Object methods**: Access object properties.
- **Constructors**: Build objects with `new`.
- **Event listeners**: `this` = DOM element.
- **Fixing `this`**: Use `bind`, arrow functions, or `const self = this`.
- **Classes**: `this` refers to instance.

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **Lost `this` in callback** | Regular function creates new `this` | Use arrow or `bind` |
| **Using arrow in object method** | Inherits wrong `this` | Use regular function |
| **Forgetting `new`** | `this` becomes `window` | Always use `new` |
| **Event handler `this`** | Not understanding DOM binding | Use `event.currentTarget` |

**Bug Example:**
```javascript
const btn = document.querySelector("button");
btn.onclick = function() {
    console.log(this); // <button>
};

btn.onclick = () => {
    console.log(this); // window (wrong!)
};
```

**Fix:**
```javascript
btn.addEventListener("click", function() {
    this.style.color = "red"; // works
});
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Fix a method that logs `undefined` in `setTimeout`.
2. **Exercise 2**: Create a `Person` constructor with `greet` method.
3. **Exercise 3**: Why does arrow function break `this` in object?

**Sample Solution for Exercise 1**:
```javascript
const counter = {
    count: 0,
    increment: function() {
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};
counter.increment(); // 1
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Memorize **4 rules** of `this`.
- Know **arrow functions don’t bind `this`**.
- Show **lost `this` in callback** + fix.
- Explain **call/apply/bind** (next topic).

**Questions**:

- **Q**: What is `this` in a regular function call?  
  **A**: `window` (non-strict) or `undefined` (strict).

- **Q**: Why does `this` become `undefined` in a method passed as callback?  
  **A**: Called without object → global context.

- **Q**: How do arrow functions handle `this`?  
  **A**: Lexically inherit `this` from outer scope.

- **Q**: How to preserve `this` in a callback?  
  **A**: Use arrow function, `bind()`, or `const self = this`.

---

#### 11. Summary Table

| Key Point                | Description |
|--------------------------|-------------|
| **Definition**           | Refers to the calling object |
| **Core Concept**         | Dynamic binding based on call context |
| **Syntax**               | Depends on how function is invoked |
| **Variants**             | Global, object, constructor, event, arrow |
| **Common Use**           | Object methods, constructors, events |
| **Typical Errors**       | Lost `this` in callbacks, arrow misuse |
| **Practice Focus**       | Fix `this` in loops/callbacks, use `bind` |
| **Interview Prep**       | Know 4 rules, arrow vs regular, fix lost `this` |

---
