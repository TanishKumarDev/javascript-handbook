# JavaScript Maps

### Simplified Explanation
A **`Map`** in JavaScript is a built-in object that stores **key-value pairs**, where keys and values can be of any type (primitives, objects, etc.), maintaining insertion order. Unlike plain objects, Maps allow any data type as keys, offer efficient methods for manipulation, and are designed for dynamic key-value storage.

**Why Maps Matter**:
- Ideal for key-value data with non-string keys (e.g., objects, functions).
- Simplifies tasks like deduplication, caching, or mapping data.
- Common in interviews for algorithmic problems, data structures, or collection manipulation.
- Offers O(1) average-time lookup, addition, and deletion.

**Key Concepts**:
- **Creation**: `new Map([iterable])`.
- **Methods**: `set`, `get`, `delete`, `has`, `clear`, `size`.
- **Iteration**: `forEach`, `for...of`, `keys`, `values`, `entries`.
- **Use Cases**: Key-value storage, object deduplication, caching.
- **Edge Cases**: Object key references, `NaN` keys, empty Maps.

---

## 1. Creating Maps

### Methods to Create Maps
- **`new Map()`**: Empty Map.
- **`new Map(iterable)`**: Initializes with `[key, value]` pairs from an iterable (e.g., array of arrays).

**Code Example**:
```js
let emptyMap = new Map();
let arrayMap = new Map([[1, "one"], [2, "two"], [2, "duplicate"]]);
let objMap = new Map([[{ id: 1 }, "obj1"], [{ id: 2 }, "obj2"]]);

console.log(emptyMap); // Map(0) {}
console.log(arrayMap); // Map(2) {1 => "one", 2 => "two"}
console.log(objMap); // Map(2) {{id: 1} => "obj1", {id: 2} => "obj2"}
```

**Dry Run**:
1. `new Map()`: Creates empty Map → `Map(0) {}`.
2. `new Map([[1, "one"], [2, "two"], [2, "duplicate"]])`: Adds pairs; last value for key `2` overwrites → `Map(2) {1 => "one", 2 => "two"}`.
3. `new Map([[{ id: 1 }, "obj1"], [{ id: 2 }, "obj2"]])`: Uses objects as keys → `Map(2)`.

**Output**: `Map(0) {}`, `Map(2) {1 => "one", 2 => "two"}`, `Map(2) {{id: 1} => "obj1", {id: 2} => "obj2"}`.

**Important Points**:
- **Key Uniqueness**: Keys are unique; setting a key again overwrites its value.
- **Any Key Type**: Keys can be primitives, objects, functions, etc.
- **Edge Case**: Non-iterable inputs throw `TypeError`.

**Tips**:
- Use array of `[key, value]` pairs for initialization.
- Validate iterable input to avoid errors.

**Code Example (Error Case)**:
```js
try {
  let invalid = new Map(123); // Non-iterable
} catch (error) {
  console.log(error.message); // 123 is not iterable
}
```

---

## 2. Map Methods

### Core Methods
- **`set(key, value)`**: Adds or updates a key-value pair (returns Map).
- **`get(key)`**: Retrieves value for a key (returns `undefined` if not found).
- **`delete(key)`**: Removes a key-value pair (returns `true` if removed, `false` if not found).
- **`has(key)`**: Checks if a key exists (returns `true`/`false`).
- **`clear()`**: Removes all key-value pairs.
- **`size`**: Property returning number of pairs.

**Code Example**:
```js
let map = new Map();
map.set("a", 1).set("b", 2); // Chaining
console.log(map.get("a")); // 1
console.log(map.has("b")); // true
console.log(map.size); // 2
map.delete("a"); // Remove "a"
console.log(map); // Map(1) {"b" => 2}
map.clear();
console.log(map); // Map(0) {}
```

**Dry Run**:
1. `map.set("a", 1).set("b", 2)`: Adds `"a" => 1`, `"b" => 2` → `Map(2)`.
2. `get("a")`: Returns `1`.
3. `has("b")`: Returns `true`.
4. `size`: Returns `2`.
5. `delete("a")`: Removes `"a" => 1` → `Map(1) {"b" => 2}`.
6. `clear()`: Empties Map → `Map(0) {}`.

**Output**: `1`, `true`, `2`, `Map(1) {"b" => 2}`, `Map(0) {}`.

**Important Points**:
- **Chaining**: `set` returns Map, enabling chaining.
- **Performance**: `get`, `set`, `has`, `delete` are O(1) on average.
- **Edge Case**: `get` returns `undefined` for nonexistent keys.

**Tips**:
- Use `set` for dynamic updates; `get` for lookups.
- Check `size` instead of iterating for count.

---

## 3. Iteration Over Maps
- Maps are iterable with `for...of`, `forEach`, `keys`, `values`, `entries`.

**Code Example**:
```js
let map = new Map([["a", 1], ["b", 2], ["c", 3]]);

// for...of (entries)
for (let [key, value] of map) {
  console.log(key, value); // a 1, b 2, c 3
}

// forEach
map.forEach((value, key) => console.log(key, value)); // a 1, b 2, c 3

// keys, values, entries
console.log([...map.keys()]); // ["a", "b", "c"]
console.log([...map.values()]); // [1, 2, 3]
console.log([...map.entries()]); // [["a", 1], ["b", 2], ["c", 3]]
```

**Dry Run**:
1. `for...of`: Iterates `[key, value]` pairs → `"a", 1`, `"b", 2`, `"c", 3`.
2. `forEach`: Calls callback with `value, key` → same output.
3. `keys()`: Returns keys → `["a", "b", "c"]`.
4. `values()`: Returns values → `[1, 2, 3]`.
5. `entries()`: Returns `[key, value]` pairs → `[["a", 1], ["b", 2], ["c", 3]]`.

**Output**: `a 1`, `b 2`, `c 3`, `a 1`, `b 2`, `c 3`, `["a", "b", "c"]`, `[1, 2, 3]`, `[["a", 1], ["b", 2], ["c", 3]]`.

**Important Points**:
- **Insertion Order**: Maps maintain order of addition.
- **entries**: Default for `for...of` iteration.
- **Edge Case**: Empty Map iterates zero times.

**Tips**:
- Use `for...of` with destructuring for key-value access.
- Spread with `[...map]` to convert to array of entries.

---

## 4. Practical Use Cases

### Key-Value Storage
- Store data with non-string keys (e.g., objects).

**Code Example**:
```js
let map = new Map();
let user = { id: 1 };
map.set(user, "John");
console.log(map.get(user)); // John
```

**Output**: `John`.

### Object Deduplication
- Use unique keys to deduplicate objects.

**Code Example**:
```js
let objects = [{ id: 1 }, { id: 1 }, { id: 2 }];
let map = new Map(objects.map(obj => [obj.id, obj]));
let unique = [...map.values()];
console.log(unique); // [{ id: 1 }, { id: 2 }]
```

**Output**: `[{ id: 1 }, { id: 2 }]`.

### Caching
- Cache computed results by key.

**Code Example**:
```js
function cacheFactorial() {
  let cache = new Map();
  return function(n) {
    if (cache.has(n)) return cache.get(n);
    let result = n === 0 ? 1 : n * arguments.callee(n - 1);
    cache.set(n, result);
    return result;
  };
}
let factorial = cacheFactorial();
console.log(factorial(5)); // 120
console.log(factorial(5)); // 120 (cached)
```

**Output**: `120`, `120`.

**Tips**:
- Use Maps for object keys instead of plain objects.
- Combine with array methods for data processing.

---

## 5. Edge Cases and Quirks

### Object Keys
- Maps compare keys by reference, not value.

**Code Example**:
```js
let map = new Map();
let obj1 = { id: 1 };
let obj2 = { id: 1 };
map.set(obj1, "first");
map.set(obj2, "second");
console.log(map.size); // 2
console.log(map.get(obj1)); // first
console.log(map.get(obj2)); // second
```

**Output**: `2`, `first`, `second`.

**Workaround**: Use unique identifiers (e.g., `id`) as keys.

### NaN Keys
- `NaN` is treated as the same key.

**Code Example**:
```js
let map = new Map();
map.set(NaN, "value1");
map.set(NaN, "value2");
console.log(map.size); // 1
console.log(map.get(NaN)); // value2
```

**Output**: `1`, `value2`.

### Empty Maps
- `size` is `0`; iteration yields nothing.

**Code Example**:
```js
let map = new Map();
console.log(map.size); // 0
map.forEach(() => console.log("never")); // No output
```

**Output**: `0`.

**Tips**:
- Use `Map` for object keys; plain objects convert keys to strings.
- Check `has` before `get` to avoid `undefined`.
- Use `Number.isNaN` to confirm `NaN` keys.

---

## 6. Error Handling with Maps
- Handle non-iterable inputs or invalid operations.

**Code Example**:
```js
function createMap(iterable) {
  try {
    return new Map(iterable);
  } catch (error) {
    console.log(error.message);
    return new Map();
  }
}
console.log(createMap([["a", 1], ["b", 2]])); // Map(2) {"a" => 1, "b" => 2}
console.log(createMap(123)); // 123 is not iterable, Map(0) {}
```

**Output**: `Map(2) {"a" => 1, "b" => 2}`, `123 is not iterable`, `Map(0) {}`.

**Tips**:
- Validate iterable with `Array.isArray` or `typeof`.
- Handle `undefined` from `get` for nonexistent keys.

---

## 7. Maps vs Objects
- **Keys**: Maps allow any type; objects convert keys to strings.
- **Iteration**: Maps have built-in iteration (`forEach`, `for...of`); objects need `Object.keys()` or similar.
- **Size**: Maps have `size` property; objects need `Object.keys().length`.
- **Performance**: Maps are optimized for frequent additions/deletions.

**Code Example**:
```js
let map = new Map();
let obj = {};
let key = { id: 1 };
map.set(key, "value");
obj[key] = "value";
console.log(map.get(key)); // value
console.log(obj["[object Object]"]); // value (key coerced to string)
```

**Output**: `value`, `value`.

**Tips**:
- Use Maps for non-string keys or frequent updates.
- Use objects for simple string-keyed data or JSON compatibility.

---

## 8. Interview Questions and Answers

### Beginner-Level
1. **What is a JavaScript Map?**
   - **Answer**: A collection of key-value pairs with any key type, maintaining insertion order.
   - **Code**:
     ```js
     let map = new Map([["a", 1]]);
     console.log(map.get("a")); // 1
     ```
   - **Tip**: Mention key flexibility.

2. **How do you add a key-value pair to a Map?**
   - **Answer**: Use `set(key, value)`.
   - **Code**:
     ```js
     let map = new Map();
     map.set("a", 1);
     console.log(map); // Map(1) {"a" => 1}
     ```
   - **Tip**: Highlight chaining.

3. **How do you check if a key exists in a Map?**
   - **Answer**: Use `has(key)`.
   - **Code**:
     ```js
     let map = new Map([["a", 1]]);
     console.log(map.has("a")); // true
     ```
   - **Tip**: Mention O(1) lookup.

### Intermediate-Level
4. **What’s the difference between Map and Object?**
   - **Answer**: Maps allow any key type, have `size`, and are iterable; objects use string/symbol keys.
   - **Code**:
     ```js
     let map = new Map();
     let obj = {};
     let key = {};
     map.set(key, 1);
     obj[key] = 1;
     console.log(map.size, Object.keys(obj).length); // 1, 1
     ```
   - **Tip**: Explain key coercion in objects.

5. **How do you deduplicate objects by a property?**
   - **Answer**: Use Map with property as key.
   - **Code**:
     ```js
     let objects = [{ id: 1 }, { id: 1 }, { id: 2 }];
     let unique = [...new Map(objects.map(obj => [obj.id, obj])).values()];
     console.log(unique); // [{ id: 1 }, { id: 2 }]
     ```
   - **Tip**: Show mapping logic.

6. **What’s the output?**
   - **Code**:
     ```js
     let map = new Map();
     map.set(NaN, "value");
     console.log(map.get(NaN)); // value
     ```
   - **Answer**: `NaN` is treated as the same key.
   - **Tip**: Explain `NaN` behavior.

### Advanced-Level
7. **How do you implement a cache with Map?**
   - **Answer**: Store results by key for reuse.
   - **Code**:
     ```js
     let cache = new Map();
     function compute(n) {
       if (cache.has(n)) return cache.get(n);
       let result = n * n;
       cache.set(n, result);
       return result;
     }
     console.log(compute(5)); // 25
     console.log(compute(5)); // 25 (cached)
     ```
   - **Tip**: Highlight performance gain.

8. **What’s the output?**
   - **Code**:
     ```js
     let map = new Map();
     let obj1 = { id: 1 };
     let obj2 = { id: 1 };
     map.set(obj1, "first");
     map.set(obj2, "second");
     console.log(map.size); // 2
     ```
   - **Answer**: Different object references.
   - **Tip**: Explain reference equality.

9. **How do you convert a Map to an array?**
   - **Answer**: Use spread or `Array.from` with `entries`, `keys`, or `values`.
   - **Code**:
     ```js
     let map = new Map([["a", 1], ["b", 2]]);
     console.log([...map.entries()]); // [["a", 1], ["b", 2]]
     console.log([...map.values()]); // [1, 2]
     ```
   - **Tip**: Mention flexibility.

---

## Small Tricks and Tips for Interviews
1. **Non-String Keys**:
   - Say: “I use Maps for object or function keys.”
   - **Why**: Highlights Map’s strength.
   - **Code**: `map.set({ id: 1 }, "value")`.

2. **Deduplication**:
   - Say: “I use Map to deduplicate objects by a unique property.”
   - **Why**: Shows practical application.
   - **Code**: `new Map(objects.map(obj => [obj.id, obj])).values()`.

3. **Performance**:
   - Say: “Maps are efficient for dynamic key-value operations.”
   - **Why**: Emphasizes O(1) operations.
   - **Code**: `map.has(key)`.

4. **Interview Analogy**:
   - “Maps are like a dictionary: any key type, fast lookups, and ordered entries.”
   - **Why**: Simplifies for interviewers.

5. **Debugging**:
   - Log with spread: `console.log([...map])`.
   - **Why**: Makes Maps easier to inspect.

---

## Tricky Questions to Watch Out For
1. **What’s the output?**
   ```js
   let map = new Map();
   map.set(NaN, "value1").set(NaN, "value2");
   console.log(map.size, map.get(NaN)); // 1, value2
   ```
   - **Answer**: `NaN` is same key; last value wins.
   - **Trick**: Explain `NaN` equality.

2. **What’s the output?**
   ```js
   let map = new Map();
   let obj = { id: 1 };
   map.set(obj, "value");
   console.log(map.get({ id: 1 })); // undefined
   ```
   - **Answer**: Different object reference.
   - **Trick**: Highlight reference equality.

3. **What’s the output?**
   ```js
   let map = new Map([["a", 1]]);
   map.set("a", 2);
   console.log(map.get("a")); // 2
   ```
   - **Answer**: `set` overwrites existing key.
   - **Trick**: Explain key uniqueness.
