### JavaScript Destructuring (Arrays, Objects)

#### 1. Definition
**Destructuring** is a **convenient syntax** to **unpack values from arrays** or **properties from objects** into **distinct variables** in a single line.

---

#### 2. Theory / Concept
Instead of:
```js
const name = user.name;
const age = user.age;
```
You write:
```js
const { name, age } = user;
```

- **Array destructuring**: Matches by **position**.
- **Object destructuring**: Matches by **property name**.
- Works with **nested data**, **defaults**, **rest**, and **function params**.

**Step-by-Step Process**:
1. Write pattern that mirrors data structure.
2. JS matches and assigns values.
3. Use defaults if missing.

---

#### 3. Syntax
```javascript
// Array
const [a, b, c] = arr;

// Object
const { prop1, prop2 } = obj;

// With defaults
const [x = 1, y = 2] = arr;
const { theme = 'light' } = config;

// Renaming
const { old: newName } = obj;

// Nested
const { user: { profile: { name } } } = data;
```

---

#### 4. Types / Variants
| Type | Syntax | Example |
|------|--------|--------|
| **Array** | `[a, b]` | `[1, 2]` |
| **Object** | `{a, b}` → `a` | `{a:1}` |
| **Nested** | `{a: {b}}` | `{a: {b:2}}` |
| **Rest** | `[...rest]` | `[1, ...rest]` |
| **Default** | `x = 10` | `x = 10` |
| **Rename** | `old: new` | `id: userId` |

---

#### 5. Examples

**Example 1: Array Destructuring**
```javascript
const rgb = ['red', 'green', 'blue'];
const [primary, secondary] = rgb;
console.log(primary); // "red"

// Skip & rest
const [first, , third, ...others] = [1, 2, 3, 4, 5];
console.log(others); // [4, 5]
```

**Example 2: Object Destructuring**
```javascript
const user = { name: 'Alice', age: 25, city: 'NY' };
const { name, age } = user;

// Rename + default
const { name: fullName, role = 'user' } = user;
```

**Example 3: Nested**
```javascript
const data = {
  user: { profile: { name: 'Bob', email: 'b@x.com' } }
};
const { user: { profile: { name, email } } } = data;
```

---

#### 6. Core Features

**Default Values:**
```javascript
const [a = 1, b = 2] = [5];     // a=5, b=2
const { theme = 'light' } = {}; // theme="light"
```

**Rest in Arrays/Objects:**
```javascript
const [x, ...rest] = [1,2,3,4];     // rest=[2,3,4]
const { a, ...others } = { a:1, b:2, c:3 }; // others={b:2,c:3}
```

**Swap Variables:**
```javascript
let x = 1, y = 2;
[x, y] = [y, x]; // x=2, y=1
```

**Function Parameters:**
```javascript
function draw({ x, y, color = 'black' }) { ... }
draw({ x: 10, y: 20 });
```

---

#### 7. Use Cases
- **API Responses**: Extract `data`, `status`, `users`
- **Function Returns**: Multiple values
- **Config Objects**: Pull `theme`, `apiUrl`
- **React Props**: `function User({ name, age })`
- **Node.js**: `const { readFile } = require('fs').promises`

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **Order mismatch (array)** | `[b, a] = [1, 2]` → wrong vars | Match position |
| **Typo in property name** | `{ nam }` → undefined | Check spelling |
| **Forgetting defaults** | `{ role }` from empty → undefined | Add `= 'guest'` |
| **Destructuring `null/undefined`** | `const {a} = null` → error | Check first or use `|| {}` |
| **Mutating original in params** | `function f({x}) { x++ }` → doesn't affect original | Copy if needed |

**Bug Example:**
```javascript
const { length } = null; // TypeError
```

**Fix:**
```javascript
const { length = 0 } = obj || {};
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Extract first 2 items and rest from array.
2. **Exercise 2**: From nested user object, get `name` and `street`.
3. **Exercise 3**: Write function that takes config with defaults.

**Sample Solution for Exercise 2**:
```javascript
const { address: { street } } = user;
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Say: **“Destructuring is syntactic sugar for assignment.”**
- Show **nested + default + rest** in one line.
- Use in **function params** → clean APIs.
- Know **swap trick**.

**Questions**:

- **Q**: Array vs Object destructuring?  
  **A**: Array → position, Object → property name.

- **Q**: How to set default in object destructuring?  
  **A**: `{ prop = 'default' } = obj`

- **Q**: Can you destructure in function params?  
  **A**: Yes — `function f({x, y}) {}`

- **Q**: What is rest in destructuring?  
  **A**: Collects remaining elements/properties.

---

#### 11. Summary Table

| Key Point              | Description |
|------------------------|-------------|
| **Definition**         | Unpack array/object into variables |
| **Core Concept**       | Matches structure → assigns values |
| **Syntax**             | `[a,b]`, `{a,b}`, nested, defaults |
| **Variants**           | Array, object, rest, rename, params |
| **Common Use**         | API data, props, config, returns |
| **Typical Errors**     | Typo, order, null, no default |
| **Practice Focus**     | Nested, function params, defaults |
| **Interview Prep**     | Swap, rest, defaults, params |

---


### **📘 Concept Recap — Object Methods**

These are **built-in utility functions** that help you:

* Access object keys, values, and entries.
* Copy, merge, and transform objects.
* Lock or protect objects from modification.

---

### **🧠 Key Points to Remember (8 Highlights)**

1. **`Object.keys(obj)`** → Returns array of property names (keys).
   Example: `Object.keys({a:1,b:2}) → ["a","b"]`.

2. **`Object.values(obj)`** → Returns array of property values.
   Example: `Object.values({a:1,b:2}) → [1,2]`.

3. **`Object.entries(obj)`** → Returns array of `[key, value]` pairs.
   Useful with `Object.fromEntries()` for transformations.

4. **`Object.assign(target, ...sources)`** → Copies properties from source(s) to target.

   * Mutates target (so use `{}` as target for immutability).
   * Common for merging configs.

5. **`Object.fromEntries(entries)`** → Converts `[key,value]` pairs back into object.
   Perfect for mapping, filtering, and transforming.

6. **`Object.hasOwn(obj, key)`** (ES2022) → Safely checks if key exists directly on the object (not inherited).
   Prefer over `obj.hasOwnProperty()` for modern JS.

7. **`Object.freeze() / seal() / preventExtensions()`** →

   * `freeze()` → fully immutable.
   * `seal()` → can modify, not add/delete.
   * `preventExtensions()` → can’t add new properties.

8. **`Object.getOwnPropertyNames(obj)`** → Returns all property names, even non-enumerable ones.

---

### **💻 Practical Use Cases**

* **Data Transformation:**
  Use `Object.entries()` + `Object.fromEntries()` to modify or filter object properties easily.

* **Deep Merge or Clone:**
  Use custom utilities with recursion (like `deepMerge()`).

* **Validation & Filtering:**
  Use `pick()` / `omit()` patterns for object sanitization.

---

### **⚡Performance Tips**

* Cache `Object.keys()` when iterating multiple times.
* Use `Object.hasOwn()` instead of `hasOwnProperty()`.
* Use `Map` if you need frequent key lookups.
* Use spread `{ ...obj }` for small shallow copies.

---
