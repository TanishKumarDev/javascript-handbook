### JavaScript Spread and Rest Operators (`...`)

#### 1. Definition
The **three-dot syntax (`...`)** is used in two ways:
- **Spread**: **Expands** an iterable (array/object) into individual elements.
- **Rest**: **Collects** multiple elements into a single array/object.

> **Same syntax, different context.**

---

#### 2. Theory / Concept

| Operator | Context | Purpose |
|--------|--------|--------|
| **Spread** | Right side of `=` | **Unpack** elements |
| **Rest**   | Left side of `=` (destructuring) or function params | **Pack** elements |

**Step-by-Step**:
1. **Spread** → `...arr` becomes `1, 2, 3`
2. **Rest** → `...rest` collects remaining values into array

---

#### 3. Syntax

```js
// Spread
[...arr1, ...arr2]           // merge arrays
{ ...obj1, ...obj2 }         // merge objects
fn(...args)                  // pass array as args

// Rest
const [a, ...rest] = arr;    // collect rest
function f(...args) { }      // collect all args
const { x, ...rest } = obj;  // collect rest props
```

---

#### 4. Types / Variants

| Type | Syntax | Example |
|------|--------|--------|
| **Array Spread** | `[...arr]` | `[1, ...[2,3]] → [1,2,3]` |
| **Object Spread** | `{...obj}` | `{a:1, ...{b:2}} → {a:1,b:2}` |
| **Function Spread** | `fn(...args)` | `Math.max(...nums)` |
| **Rest in Destructuring** | `[...rest]` | `[1, ...rest]` |
| **Rest in Parameters** | `(...args)` | `sum(...numbers)` |
| **Rest in Object Destructuring** | `{...rest}` | `{a, ...rest}` |

---

#### 5. Examples

**Example 1: Array Spread**
```js
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];     // [1,2,3,4]
const copy = [...a];        // shallow copy
```

**Example 2: Object Spread**
```js
const user = { name: "Alice" };
const updates = { age: 25, name: "Bob" };
const merged = { ...user, ...updates }; // { name: "Bob", age: 25 }
```

**Example 3: Function + Rest**
```js
function log(...messages) {
  console.log(messages);
}
log("Hi", 123, true); // ["Hi", 123, true]
```

**Example 4: Rest in Destructuring**
```js
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]

const { name, ...info } = { name: "John", age: 30, city: "NY" };
console.log(info); // { age: 30, city: "NY" }
```

---

#### 6. Core Use Cases

| Use Case | Code |
|--------|------|
| **Copy Array** | `const copy = [...original];` |
| **Copy Object** | `const copy = { ...obj };` |
| **Merge Arrays** | `[...a, ...b]` |
| **Merge Objects** | `{ ...obj1, ...obj2 }` |
| **Pass Array to Function** | `fn(...args)` |
| **Collect Args** | `function f(...args)` |
| **Remove Duplicates** | `[...new Set(arr)]` |
| **Flatten One Level** | `[].concat(...nested)` |

---

#### 7. Practical Examples

```js
// 1. Clone + Modify
const todos = [{ id: 1, done: false }];
const newTodos = [...todos, { id: 2, done: true }];

// 2. Update Object in Array
const updated = todos.map(t => 
  t.id === 1 ? { ...t, done: true } : t
);

// 3. Flexible API Function
function api(path, ...query) {
  return `https://api.com${path}?${query.join('&')}`;
}
api('/users', 'page=1', 'limit=10');
```

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **Deep objects mutated** | Shallow copy | Use deep clone if needed |
| **Order matters in merge** | Later properties override | Put defaults first |
| **Spreading non-iterable** | `...null`, `...5` → error | Check type first |
| **Rest in wrong position** | `[...rest, a]` → invalid | Rest must be last |

**Bug Example:**
```js
const obj = { a: 1 };
const copy = { ...obj };
copy.a = 2;
console.log(obj.a); // 1 (ok)
copy.nested.x = 5;  // mutates original if nested!
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Merge 3 arrays, remove duplicates.
2. **Exercise 2**: Write `omit(obj, keys)` using rest.
3. **Exercise 3**: Create `log(tag, ...msgs)` that logs with tag.

**Sample Solution for Exercise 2**:
```js
function omit(obj, keys) {
  const { [keys]: _, ...rest } = obj; // not direct
  // Better:
  const result = { ...obj };
  keys.forEach(k => delete result[k]);
  return result;
}
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Say: **“Spread expands, rest collects.”**
- Show **shallow copy** with `{ ...obj }`.
- Use **Math.max(...arr)** example.
- Know **rest must be last** in destructuring.

**Questions**:

- **Q**: Spread vs `concat`?  
  **A**: Spread is cleaner, more flexible.

- **Q**: How to copy object?  
  **A**: `{ ...obj }` — shallow copy.

- **Q**: Can you spread string?  
  **A**: Yes → `... "abc"` → `'a','b','c'`

- **Q**: Rest in object destructuring?  
  **A**: Yes → `{ a, ...rest } = obj`

---

#### 11. Summary Table

| Key Point              | Description |
|------------------------|-------------|
| **Definition**         | `...` = spread (unpack) or rest (pack) |
| **Core Concept**       | Same syntax, context decides behavior |
| **Syntax**             | `[...arr]`, `{...obj}`, `(...args)` |
| **Variants**           | Array, object, function, destructuring |
| **Common Use**         | Copy, merge, pass args, collect |
| **Typical Errors**     | Shallow copy, order, non-iterable |
| **Practice Focus**     | Clone + modify, flexible functions |
| **Interview Prep**     | Copy, merge, Math.max, rest last |

---