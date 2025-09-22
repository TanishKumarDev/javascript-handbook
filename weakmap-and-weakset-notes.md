# JavaScript WeakMap and WeakSet

### Simplified Explanation
**`WeakMap`** and **`WeakSet`** are specialized collections in JavaScript designed for **memory-efficient storage** of key-value pairs (`WeakMap`) or unique values (`WeakSet`). Unlike `Map` and `Set`, they hold **weak references** to their keys (WeakMap) or values (WeakSet), allowing objects to be **garbage collected** if no other references exist. They are primarily used for scenarios where memory management or private data encapsulation is critical.

**Why WeakMap and WeakSet Matter**:
- Prevent memory leaks by allowing garbage collection of unused objects.
- Useful for private data storage, caching, or metadata without affecting object lifecycle.
- Common in interviews for advanced topics like memory management, object references, or design patterns.
- Limited API ensures lightweight, specific use cases.

**Key Concepts**:
- **Weak References**: Objects as keys (WeakMap) or values (WeakSet) can be garbage collected.
- **Creation**: `new WeakMap([iterable])`, `new WeakSet([iterable])`.
- **Methods**: Limited to `set`, `get`, `has`, `delete` (WeakMap); `add`, `has`, `delete` (WeakSet).
- **Use Cases**: Private data, DOM caching, object metadata.
- **Edge Cases**: Non-iterable, non-object keys/values, garbage collection unpredictability.

---

## 1. WeakMap

### Overview
A `WeakMap` is a key-value collection where **keys must be objects** (or other non-primitive types like functions), and values can be any type. Keys are weakly held, meaning they can be garbage collected if no other references exist, freeing associated values.

**Key Characteristics**:
- **Keys**: Objects only (or non-primitives); primitives throw `TypeError`.
- **No Iteration**: Not iterable; no `size`, `keys`, `values`, `entries`, or `forEach`.
- **Garbage Collection**: Keys are eligible for garbage collection if no other references exist.

### Creating WeakMap
- **`new WeakMap()`**: Empty WeakMap.
- **`new WeakMap(iterable)`**: Initializes with `[key, value]` pairs (keys must be objects).

**Code Example**:
```js
let weakMap = new WeakMap();
let obj1 = { id: 1 };
let obj2 = { id: 2 };
weakMap.set(obj1, "one");
weakMap.set(obj2, "two");
console.log(weakMap.get(obj1)); // one
console.log(weakMap.has(obj2)); // true
```

**Dry Run**:
1. `new WeakMap()`: Creates empty WeakMap.
2. `set(obj1, "one")`: Adds `obj1 => "one"`.
3. `set(obj2, "two")`: Adds `obj2 => "two"`.
4. `get(obj1)`: Returns `"one"`.
5. `has(obj2)`: Returns `true`.

**Output**: `one`, `true`.

**Important Points**:
- **Object Keys**: Only objects (or non-primitives) allowed as keys.
- **Weak References**: If `obj1` is set to `null` and garbage collected, its entry is removed.
- **Edge Case**: Primitive keys throw `TypeError`.

**Code Example (Error Case)**:
```js
try {
  let weakMap = new WeakMap();
  weakMap.set("key", "value"); // TypeError
} catch (error) {
  console.log(error.message); // Invalid value used as weak map key
}
```

### Methods
- **`set(key, value)`**: Adds/updates key-value pair (returns WeakMap).
- **`get(key)`**: Retrieves value for key (returns `undefined` if not found).
- **`has(key)`**: Checks if key exists (returns `true`/`false`).
- **`delete(key)`**: Removes key-value pair (returns `true` if removed, `false` if not found).

**Code Example**:
```js
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "data");
console.log(weakMap.get(obj)); // data
console.log(weakMap.has(obj)); // true
weakMap.delete(obj);
console.log(weakMap.has(obj)); // false
```

**Dry Run**:
1. `set(obj, "data")`: Adds `obj => "data"`.
2. `get(obj)`: Returns `"data"`.
3. `has(obj)`: Returns `true`.
4. `delete(obj)`: Removes entry → `has(obj)` returns `false`.

**Output**: `data`, `true`, `false`.

**Tips**:
- Use `set` for dynamic updates; `get` for lookups.
- Check `has` before `get` to avoid `undefined`.

---

## 2. WeakSet

### Overview
A `WeakSet` is a collection of **unique objects** (or non-primitives), where values are weakly held, allowing garbage collection if no other references exist. It’s similar to `Set` but limited to objects and non-iterable.

**Key Characteristics**:
- **Values**: Objects only (or non-primitives); primitives throw `TypeError`.
- **No Iteration**: Not iterable; no `size`, `keys`, `values`, `entries`, or `forEach`.
- **Garbage Collection**: Values can be garbage collected if no other references exist.

### Creating WeakSet
- **`new WeakSet()`**: Empty WeakSet.
- **`new WeakSet(iterable)`**: Initializes with objects from iterable.

**Code Example**:
```js
let weakSet = new WeakSet();
let obj1 = { id: 1 };
let obj2 = { id: 2 };
weakSet.add(obj1);
weakSet.add(obj2);
weakSet.add(obj1); // Duplicate ignored
console.log(weakSet.has(obj1)); // true
```

**Dry Run**:
1. `new WeakSet()`: Creates empty WeakSet.
2. `add(obj1)`: Adds `obj1`.
3. `add(obj2)`: Adds `obj2`.
4. `add(obj1)`: Duplicate ignored.
5. `has(obj1)`: Returns `true`.

**Output**: `true`.

**Important Points**:
- **Object Values**: Only objects (or non-primitives) allowed.
- **Weak References**: If `obj1` is set to `null` and garbage collected, it’s removed.
- **Edge Case**: Primitive values throw `TypeError`.

**Code Example (Error Case)**:
```js
try {
  let weakSet = new WeakSet();
  weakSet.add(123); // TypeError
} catch (error) {
  console.log(error.message); // Invalid value used in weak set
}
```

### Methods
- **`add(value)`**: Adds an object (returns WeakSet).
- **`has(value)`**: Checks if object exists (returns `true`/`false`).
- **`delete(value)`**: Removes object (returns `true` if removed, `false` if not found).

**Code Example**:
```js
let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
weakSet.delete(obj);
console.log(weakSet.has(obj)); // false
```

**Dry Run**:
1. `add(obj)`: Adds `obj`.
2. `has(obj)`: Returns `true`.
3. `delete(obj)`: Removes `obj` → `has(obj)` returns `false`.

**Output**: `true`, `false`.

**Tips**:
- Use `add` for dynamic additions; `has` for membership checks.
- WeakSet is minimal; use for simple object tracking.

---

## 3. Garbage Collection

### How It Works
- **Weak References**: Objects in `WeakMap` (keys) or `WeakSet` (values) are eligible for garbage collection if no other references exist.
- **No Control**: Garbage collection is handled by the JavaScript engine (unpredictable timing).

**Code Example (WeakMap)**:
```js
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "data");
console.log(weakMap.has(obj)); // true
obj = null; // Remove reference
// Garbage collection may remove obj from weakMap (not guaranteed in console)
```

**Code Example (WeakSet)**:
```js
let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
obj = null; // Remove reference
// Garbage collection may remove obj from weakSet
```

**Important Points**:
- **No Inspection**: Can’t check if an entry was garbage collected (no iteration).
- **Use Case**: Prevents memory leaks in long-running apps.
- **Edge Case**: Garbage collection is non-deterministic; don’t rely on immediate removal.

**Tips**:
- Use WeakMap/WeakSet when objects should be freed automatically.
- Avoid relying on garbage collection timing in logic.

---

## 4. Practical Use Cases

### Private Data (WeakMap)
- Store private data for objects without exposing it.

**Code Example**:
```js
const privateData = new WeakMap();
function createPerson(name) {
  let person = {};
  privateData.set(person, { name });
  return {
    getName: () => privateData.get(person).name
  };
}
let person = createPerson("John");
console.log(person.getName()); // John
person = null; // privateData entry may be garbage collected
```

**Output**: `John`.

### DOM Caching (WeakMap)
- Cache DOM elements without preventing garbage collection.

**Code Example**:
```js
const cache = new WeakMap();
function getElementData(element) {
  if (!cache.has(element)) {
    cache.set(element, { clicks: 0 });
  }
  return cache.get(element);
}
let div = document.createElement("div");
console.log(getElementData(div)); // { clicks: 0 }
div = null; // Element and cache entry may be garbage collected
```

**Output**: `{ clicks: 0 }`.

### Object Tracking (WeakSet)
- Track objects without preventing garbage collection.

**Code Example**:
```js
const processed = new WeakSet();
function process(obj) {
  if (processed.has(obj)) return "Already processed";
  processed.add(obj);
  return "Processed";
}
let obj = {};
console.log(process(obj)); // Processed
console.log(process(obj)); // Already processed
obj = null; // obj may be garbage collected from processed
```

**Output**: `Processed`, `Already processed`.

**Tips**:
- Use WeakMap for private properties or metadata.
- Use WeakSet for tracking processed objects (e.g., in recursive algorithms).
- Combine with other data structures for complex logic.

---

## 5. WeakMap vs Map, WeakSet vs Set

| **Feature** | **Map** | **WeakMap** | **Set** | **WeakSet** |
| --- | --- | --- | --- | --- |
| **Keys/Values** | Any type | Keys: Objects only | Any type | Objects only |
| **Iteration** | `keys`, `values`, `entries`, `forEach` | None | `keys`, `values`, `entries`, `forEach` | None |
| **Size** | `size` property | None | `size` property | None |
| **Garbage Collection** | Strong references | Weak keys | Strong references | Weak values |
| **Use Case** | General key-value storage | Private data, caching | Unique values | Object tracking |

**Code Example (Comparison)**:
```js
let map = new Map();
let weakMap = new WeakMap();
let obj = {};
map.set(obj, "data");
weakMap.set(obj, "data");
console.log(map.size); // 1
// weakMap.size // Error: no size property
obj = null; // weakMap entry may be garbage collected; map retains
```

**Tips**:
- Use `Map`/`Set` for iterable collections.
- Use `WeakMap`/`WeakSet` for memory-sensitive cases.

---

## 6. Edge Cases and Quirks

### Non-Object Keys/Values
- Primitives in `WeakMap` (keys) or `WeakSet` (values) throw `TypeError`.

**Code Example**:
```js
let weakMap = new WeakMap();
try {
  weakMap.set(123, "value"); // TypeError
} catch (error) {
  console.log(error.message); // Invalid value used as weak map key
}
```

### Non-Iterable
- WeakMap/WeakSet are not iterable; no `size` or inspection.

**Code Example**:
```js
let weakMap = new WeakMap([[{}, "data"]]);
console.log(weakMap.get({})); // undefined (different reference)
// No way to list keys/values
```

### NaN and Object Equality
- `NaN` as a key (WeakMap) or value (WeakSet) is invalid (must be object).
- Objects are compared by reference.

**Code Example**:
```js
let weakMap = new WeakMap();
let obj1 = {};
let obj2 = {};
weakMap.set(obj1, "data");
console.log(weakMap.get(obj2)); // undefined (different reference)
```

**Output**: `undefined`.

**Tips**:
- Use unique object references as keys/values.
- Avoid expecting `size` or iteration.
- Test garbage collection behavior in Node.js or browsers.

---

## 7. Error Handling
- Handle invalid inputs or operations.

**Code Example**:
```js
function safeWeakMapSet(weakMap, key, value) {
  try {
    if (typeof key !== "object" || key === null) throw new TypeError("Key must be an object");
    return weakMap.set(key, value);
  } catch (error) {
    console.log(error.message);
    return weakMap;
  }
}
let weakMap = new WeakMap();
let obj = {};
console.log(safeWeakMapSet(weakMap, obj, "data")); // WeakMap { ... }
console.log(safeWeakMapSet(weakMap, 123, "data")); // Key must be an object, WeakMap { ... }
```

**Output**: `WeakMap { ... }`, `Key must be an object`, `WeakMap { ... }`.

**Tips**:
- Validate keys/values with `typeof` or `instanceof`.
- Handle `undefined` from `get` for nonexistent keys.

---

## 8. Interview Questions and Answers

### Beginner-Level
1. **What is a WeakMap in JavaScript?**
   - **Answer**: A key-value collection with object keys, weak references, and no iteration.
   - **Code**:
     ```js
     let weakMap = new WeakMap();
     let obj = {};
     weakMap.set(obj, "data");
     console.log(weakMap.get(obj)); // data
     ```
   - **Tip**: Mention garbage collection.

2. **What is a WeakSet?**
   - **Answer**: A collection of unique objects with weak references, no iteration.
   - **Code**:
     ```js
     let weakSet = new WeakSet();
     let obj = {};
     weakSet.add(obj);
     console.log(weakSet.has(obj)); // true
     ```
   - **Tip**: Highlight object-only values.

3. **How do you check if a key exists in a WeakMap?**
   - **Answer**: Use `has(key)`.
   - **Code**:
     ```js
     let weakMap = new WeakMap();
     let obj = {};
     weakMap.set(obj, "data");
     console.log(weakMap.has(obj)); // true
     ```
   - **Tip**: Mention O(1) lookup.

### Intermediate-Level
4. **What’s the difference between Map and WeakMap?**
   - **Answer**: Map allows any key type, is iterable, and holds strong references; WeakMap requires object keys, is non-iterable, and uses weak references.
   - **Code**:
     ```js
     let map = new Map();
     let weakMap = new WeakMap();
     let obj = {};
     map.set(obj, "data");
     weakMap.set(obj, "data");
     console.log([...map.keys()]); // [{}]
     // weakMap.keys() // Error
     ```
   - **Tip**: Highlight memory management.

5. **How do you use WeakMap for private data?**
   - **Answer**: Store private data with object keys.
   - **Code**:
     ```js
     const privateData = new WeakMap();
     function Person(name) {
       privateData.set(this, { name });
       this.getName = () => privateData.get(this).name;
     }
     let person = new Person("John");
     console.log(person.getName()); // John
     ```
   - **Tip**: Explain encapsulation.

6. **What’s the output?**
   - **Code**:
     ```js
     let weakMap = new WeakMap();
     let obj = {};
     weakMap.set(obj, "data");
     obj = null;
     // console.log(weakMap.get(obj)); // Cannot test directly
     ```
   - **Answer**: Entry may be garbage collected; can’t inspect.
   - **Tip**: Explain weak references.

### Advanced-Level
7. **How do you use WeakSet to track processed objects?**
   - **Answer**: Use WeakSet to mark objects without preventing garbage collection.
   - **Code**:
     ```js
     let processed = new WeakSet();
     function process(obj) {
       if (processed.has(obj)) return "Done";
       processed.add(obj);
       return "Processed";
     }
     let obj = {};
     console.log(process(obj)); // Processed
     console.log(process(obj)); // Done
     ```
   - **Tip**: Highlight memory efficiency.

8. **What’s the output?**
   - **Code**:
     ```js
     let weakMap = new WeakMap();
     let obj1 = {};
     let obj2 = {};
     weakMap.set(obj1, "data");
     console.log(weakMap.get(obj2)); // undefined
     ```
   - **Answer**: Different object reference; returns `undefined`.
   - **Tip**: Explain reference equality.

9. **Why can’t you iterate a WeakMap or WeakSet?**
   - **Answer**: Weak references allow garbage collection, making iteration unreliable.
   - **Code**:
     ```js
     let weakMap = new WeakMap();
     // weakMap.forEach // Error: no forEach
     ```
   - **Tip**: Emphasize design for memory management.

---

## Small Tricks and Tips for Interviews
1. **Weak References**:
   - Say: “I use WeakMap/WeakSet to avoid memory leaks with object keys/values.”
   - **Why**: Shows advanced knowledge.
   - **Code**: `weakMap.set(obj, "data")`.

2. **Private Data**:
   - Say: “I use WeakMap for private object properties.”
   - **Why**: Demonstrates encapsulation.
   - **Code**: `privateData.set(this, { name })`.

3. **No Iteration**:
   - Say: “WeakMap/WeakSet are non-iterable to support garbage collection.”
   - **Why**: Explains design choice.
   - **Code**: `weakMap.has(obj)`.

4. **Interview Analogy**:
   - “WeakMap is like a secret notebook: only accessible with the right object, and entries vanish when objects are gone.”
   - **Why**: Simplifies for interviewers.

5. **Debugging**:
   - Log `has` or `get` results: `console.log(weakMap.get(obj))`.
   - **Why**: Limited inspection options.

---

## Tricky Questions to Watch Out For
1. **What’s the output?**
   ```js
   let weakMap = new WeakMap();
   let obj = {};
   weakMap.set(obj, "data");
   console.log(weakMap.get({})); // undefined
   ```
   - **Answer**: Different object reference.
   - **Trick**: Highlight reference equality.

2. **What’s the output?**
   ```js
   let weakSet = new WeakSet();
   let obj = {};
   weakSet.add(obj);
   obj = null;
   // console.log(weakSet.has(obj)); // Cannot test directly
   ```
   - **Answer**: Object may be garbage collected.
   - **Trick**: Explain weak references.

3. **What’s the output?**
   ```js
   let weakMap = new WeakMap();
   try {
     weakMap.set("key", "value");
   } catch (error) {
     console.log(error.message); // Invalid value used as weak map key
   }
   ```
   - **Answer**: Primitive keys are invalid.
   - **Trick**: Emphasize object-only keys.

---

## Practice Tips
1. **Predict Outputs**: Test `set`, `get`, `has`, `delete` with objects.
2. **DevTools**: Experiment with WeakMap/WeakSet and garbage collection (e.g., set object to `null`).
3. **Mini-Project**: Build a private data store or DOM cache.
4. **Explain Aloud**: Describe WeakMap for private data or WeakSet for tracking.
5. **Edge Cases**: Test non-object keys, garbage collection, reference equality.
