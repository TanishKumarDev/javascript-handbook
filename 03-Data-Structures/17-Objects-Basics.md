### JavaScript Objects — Basics

#### 1. Definition
An **object** is a collection of **key-value pairs** (called **properties**) that represent real-world entities. Keys are strings (or symbols), values can be any type.

---

#### 2. Theory / Concept
Objects are **unordered** (except insertion order in modern JS) and **mutable**. They are the foundation of JS — almost everything is an object.

- **Key Features**:
  - **Properties**: `key: value`
  - **Methods**: Properties that are functions
  - **Dynamic**: Add/delete properties anytime
  - **Reference Type**: Stored by reference
- **Dot vs Bracket Notation**:
  - `obj.name` → clean, only valid identifiers
  - `obj["name"]` → dynamic keys, hyphens, spaces

**Step-by-Step Process**:
1. Create object (literal or constructor).
2. Access/modify via `.key` or `["key"]`.
3. Add methods using function expressions.
4. Iterate with `for...in`, `Object.keys/values/entries`.

---

#### 3. Syntax
```javascript
// Object literal
const obj = {
    name: "Alice",
    age: 30,
    greet() { return "Hi"; }
};

// Access
obj.name;           // "Alice"
obj["age"];         // 30

// Modify
obj.age = 31;
obj["city"] = "NY";
```

---

#### 4. Types / Variants
| Type | Description | Example |
|------|-----------|--------|
| **Plain Object** | Simple key-value | `{ name: "Bob" }` |
| **Nested Object** | Objects inside objects | `{ address: { city: "NY" } }` |
| **Method Object** | Has functions | `{ calc: () => 2+2 }` |
| **Factory Object** | Function returns object | `createUser()` |
| **Config Object** | Settings bundle | `{ api: { url: "..." } }` |

---

#### 5. Examples

**Example 1: Create & Access**
```javascript
const car = {
    brand: "Honda",
    model: "Civic",
    year: 2023,
    "fuel-type": "hybrid"
};

console.log(car.brand);           // "Honda"
console.log(car["fuel-type"]);    // "hybrid"
```

**Example 2: Add/Modify**
```javascript
car.color = "blue";
car["mileage"] = 15000;
car.year = 2024;
```

**Example 3: Method + Chaining**
```javascript
const calc = {
    value: 0,
    add(n) { this.value += n; return this; },
    multiply(n) { this.value *= n; return this; },
    get() { return this.value; }
};

calc.add(5).multiply(2).get(); // 10
```

---

#### 6. Core Operations

**Access:**
```javascript
obj.key
obj["key"]
obj[variable]
```

**Add/Modify:**
```javascript
obj.newKey = value;
obj["key"] = value;
```

**Delete:**
```javascript
delete obj.key;
```

**Check Existence:**
```javascript
"key" in obj
obj.hasOwnProperty("key")
```

**Iteration:**
```javascript
for (let key in obj) { ... }
Object.keys(obj)     → ["key1", "key2"]
Object.values(obj)   → [val1, val2]
Object.entries(obj)  → [["key", val], ...]
```

---

#### 7. Use Cases
- **Data Modeling**: User, product, config
- **State Management**: App state, form data
- **Configuration**: API settings, UI options
- **Method Bundling**: Group related functions
- **Prototypes**: Base for inheritance

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **Reference copy** | `obj2 = obj1` → same object | Use spread `{...obj}` or `Object.assign()` |
| **Arrow function methods** | `this` not bound to object | Use method shorthand `greet() {}` |
| **Assuming property order** | Older JS didn’t guarantee order | Modern JS preserves insertion order |
| **Dynamic key typo** | `obj[key]` with wrong `key` | Log or validate key |

**Bug Example (Reference):**
```javascript
const a = { x: 1 };
const b = a;
b.x = 2;
console.log(a.x); // 2 — mutated!
```

**Fix (Shallow Copy):**
```javascript
const b = { ...a };
b.x = 2;
console.log(a.x); // 1
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Create a `todo` object with `addTask()`, `completeTask()`, `listTasks()`.
2. **Exercise 2**: Build a `bankAccount` with private balance (use closure).
3. **Exercise 3**: Deep clone a nested object using `JSON.parse/stringify`.

**Sample Solution for Exercise 1**:
```javascript
const todo = {
    tasks: [],
    addTask(text) {
        this.tasks.push({ text, done: false });
    },
    completeTask(index) {
        if (this.tasks[index]) this.tasks[index].done = true;
    },
    listTasks() {
        return this.tasks.map(t => `${t.done ? '[x]' : '[ ]'} ${t.text}`);
    }
};
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Say: **“Objects are mutable reference types.”**
- Show **method chaining** and **shallow copy**.
- Explain **dot vs bracket**: when to use which.
- Know **iteration methods**: `keys`, `values`, `entries`.

**Questions**:

- **Q**: Dot vs bracket notation?  
  **A**: Dot for valid identifiers; bracket for dynamic, hyphens, spaces.

- **Q**: How to copy an object?  
  **A**: `{ ...obj }` or `Object.assign({}, obj)` — **shallow copy**.

- **Q**: Why avoid arrow functions as methods?  
  **A**: `this` is not bound to the object.

- **Q**: How to check if property exists?  
  **A**: `"key" in obj` or `obj.hasOwnProperty("key")`.

---

#### 11. Summary Table

| Key Point              | Description |
|------------------------|-------------|
| **Definition**         | Collection of key-value pairs |
| **Core Concept**       | Mutable, reference type, dynamic |
| **Syntax**             | `{ key: value, method() {} }` |
| **Variants**           | Nested, method-rich, config, factory |
| **Common Use**         | Modeling data, state, config |
| **Typical Errors**     | Reference copy, arrow `this`, order assumption |
| **Practice Focus**     | CRUD ops, methods, iteration |
| **Interview Prep**     | Copying, `this` in methods, iteration |

---

Perfect — you just shared the **“Objects — Basics”** lesson content from AceDevHub.
Let’s make **complete study notes** out of it — clean, structured, and easy to revise (Hinglish + teaching tone).

---

# **JavaScript Objects — Complete Notes**

---

## **1. Concept**

* Object = key–value pairs (like a dictionary in Python).
* It helps represent **real-world entities** — like a person, car, or product.
* Keys are always **strings (or symbols)**, and values can be of **any type** (number, array, object, function, etc.).

---

## **2. Creating Objects**

### **a. Object Literal (most common)**

```js
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  isEmployed: true
};
```

### **b. Constructor**

```js
const user = new Object();
user.name = "Bob";
user.age = 25;
```

### **c. Nested Objects**

```js
const student = {
  name: "Charlie",
  grades: { math: 95, science: 87 },
  address: { city: "Boston", zip: "02101" }
};
```

---

## **3. Accessing Properties**

```js
const car = { brand: "Toyota", "fuel-type": "gasoline" };

// Dot notation
console.log(car.brand);

// Bracket notation (for dynamic keys or special chars)
console.log(car["fuel-type"]);

const key = "brand";
console.log(car[key]); // "Toyota"
```

**Note:**
If property doesn’t exist → returns `undefined`.

---

## **4. Adding or Modifying Properties**

```js
const product = { name: "Laptop", price: 999 };

// Add
product.brand = "Dell";
product["warranty"] = "2 years";

// Modify
product.price = 899;
```

**Dynamic property name:**

```js
const key = "color";
product[key] = "silver";
```

---

## **5. Deleting Properties**

```js
const user = { name: "John", age: 30, password: "secret" };

delete user.password;

console.log("password" in user); // false
console.log(user.hasOwnProperty("age")); // true
```

---

## **6. Object Methods**

Methods = functions inside objects.

```js
const calculator = {
  result: 0,

  add(num) {
    this.result += num;
    return this;
  },

  subtract(num) {
    this.result -= num;
    return this;
  },

  multiply: (num) => {
    console.log(this); // Arrow function doesn't bind 'this'
  },

  getValue() {
    return this.result;
  }
};

calculator.add(10).subtract(3);
console.log(calculator.getValue()); // 7
```

**Note:** Arrow functions **don’t have their own `this`**, so avoid them for object methods.

---

## **7. Iterating Over Objects**

```js
const person = { name: "Alice", age: 30, city: "New York" };

// for...in loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object.keys / values / entries
console.log(Object.keys(person));   // ["name", "age", "city"]
console.log(Object.values(person)); // ["Alice", 30, "New York"]
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 30], ["city", "New York"]]
```

---

## **8. Copying Objects**

```js
const original = { name: "John", hobbies: ["reading", "gaming"] };

// Shallow copy
const copy1 = { ...original };
const copy2 = Object.assign({}, original);

// Deep copy (for simple objects)
const deepCopy = JSON.parse(JSON.stringify(original));
```

**Note:**
Shallow copy → nested objects/arrays share same reference.
Deep copy → creates full independent copy.

---

## **9. Comparing Objects**

```js
const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Alice", age: 30 };
const obj3 = obj1;

console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true

// Shallow content comparison
function objectsEqual(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(key => a[key] === b[key]);
}
```

---

## **10. Practical Examples**

### **a. User Profile**

```js
const userProfile = {
  username: "alice_dev",
  profile: { firstName: "Alice", lastName: "Johnson" },
  settings: { theme: "dark", notifications: true },

  getFullName() {
    return `${this.profile.firstName} ${this.profile.lastName}`;
  },

  updateSetting(key, value) {
    this.settings[key] = value;
  }
};
```

---

### **b. Shopping Cart**

```js
const cart = {
  items: [],

  addItem(product, qty = 1) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) existing.quantity += qty;
    else this.items.push({ ...product, quantity: qty });
  },

  getTotal() {
    return this.items.reduce((t, i) => t + i.price * i.quantity, 0);
  }
};
```

---

### **c. Game Character**

```js
const character = {
  name: "Hero",
  level: 1,
  health: 100,
  stats: { strength: 10 },

  levelUp() {
    this.level++;
    this.stats.strength += 2;
  }
};
```

---

## **11. Object Patterns**

### **a. Factory Function**

```js
function createUser(name, email) {
  return {
    name,
    email,
    isActive: true,
    toggle() { this.isActive = !this.isActive; }
  };
}

const user1 = createUser("Alice", "alice@example.com");
```

---

### **b. Configuration Object**

```js
const config = {
  api: { baseUrl: "https://api.example.com" },
  ui: { theme: "light" },

  get(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], this);
  },

  set(path, value) {
    const keys = path.split('.');
    const last = keys.pop();
    const target = keys.reduce((obj, key) => obj[key], this);
    target[last] = value;
  }
};
```

---

## **12. Common Mistakes**

1. **Modifying references directly**

   ```js
   const settings = { theme: "light" };
   const userSettings = settings; // same reference
   userSettings.theme = "dark"; // modifies both
   ```

   ✅ Fix: use `{ ...settings }` copy

2. **Using arrow functions for methods**

   ```js
   const obj = { name: "Test", greet: () => console.log(this.name) };
   ```

   ❌ `this` won’t refer to `obj`.

3. **Assuming property order**
   Object property order isn’t guaranteed in old JS versions.

---

## **13. Quick Summary (To Remember)**

1. Objects = key-value pairs.
2. Access via dot or bracket notation.
3. Methods = functions inside objects; avoid arrow functions.
4. Copy using spread (`...obj`) or `Object.assign`.
5. Compare by **reference**, not value.
6. `Object.keys`, `values`, `entries` → iteration tools.
7. Use **JSON.stringify** for deep cloning simple objects.
8. Always be careful with nested references.

---

Would you like me to now prepare the next part (**“Object Methods (Object.keys, entries, assign, etc.)”**) in the same structured Hinglish + teaching format?
