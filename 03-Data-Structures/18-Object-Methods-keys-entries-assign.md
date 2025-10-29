### JavaScript Object Methods (Object.keys, entries, assign, etc.)

#### 1. Definition
**Object methods** are built-in static functions on the `Object` constructor that help **inspect, copy, transform, and control** object properties.

---

#### 2. Theory / Concept
These methods are **non-mutating** (except `assign`, `freeze`, etc.) and work on **any object**.

| Method | Purpose | Returns |
|-------|--------|--------|
| `Object.keys()` | Array of **enumerable own string keys** | `["a", "b"]` |
| `Object.values()` | Array of **property values** | `[1, 2]` |
| `Object.entries()` | Array of `[key, value]` pairs | `[["a",1], ["b",2]]` |
| `Object.assign()` | Copy properties to target | Modified target |
| `Object.fromEntries()` | Convert entries → object | `{ key: value }` |
| `Object.hasOwn()` | Check own property | `true/false` |
| `Object.freeze()` | Prevent all changes | Frozen object |

**Step-by-Step Process**:
1. Use `keys/values/entries` → get iterable data.
2. Transform with `map`, `filter`, `reduce`.
3. Rebuild with `fromEntries` or `assign`.

---

#### 3. Syntax
```javascript
Object.keys(obj)           → string[]
Object.values(obj)         → any[]
Object.entries(obj)        → [string, any][]
Object.assign(target, src) → target
Object.fromEntries(iterable) → object
```

---

#### 4. Types / Variants
| Method | Type | Use Case |
|-------|------|--------|
| **`keys()`** | Inspection | List properties |
| **`values()`** | Extraction | Sum, average |
| **`entries()`** | Transformation | Map → Object |
| **`assign()`** | Copy/Merge | Combine configs |
| **`fromEntries()`** | Build | From Map or array |
| **`hasOwn()`** | Safety | Avoid prototype |
| **`freeze/seal`** | Immutability | Protect data |

---

#### 5. Examples

**Example 1: `keys`, `values`, `entries`**
```javascript
const user = { name: "Alice", age: 30, city: "NY" };

Object.keys(user);     // ["name", "age", "city"]
Object.values(user);   // ["Alice", 30, "NY"]
Object.entries(user);  // [["name","Alice"], ...]
```

**Example 2: `assign`**
```javascript
const defaults = { theme: "light" };
const prefs = { theme: "dark" };
const config = Object.assign({}, defaults, prefs);
```

**Example 3: `fromEntries`**
```javascript
const entries = [["x", 10], ["y", 20]];
const point = Object.fromEntries(entries); // { x:10, y:20 }
```

---

#### 6. Core Methods in Depth

```javascript
// keys + filter
Object.keys(obj).filter(k => obj[k] > 0);

// values + reduce
Object.values(scores).reduce((a,b) => a+b, 0);

// entries + map + fromEntries
Object.fromEntries(
  Object.entries(obj).map(([k,v]) => [k.toUpperCase(), v])
);

// assign (merge)
Object.assign({}, base, overrides);

// hasOwn (safe check)
if (Object.hasOwn(obj, 'name')) { ... }

// freeze
const config = Object.freeze({ api: "..." });
config.api = "new"; // ignored
```

---

#### 7. Use Cases
- **Config Merging**: `Object.assign`
- **API Transformation**: `entries` → `map` → `fromEntries`
- **Validation**: `keys` + schema
- **Data Export**: `entries` → CSV
- **Immutability**: `freeze` for constants
- **Pick/Omit**: Build with `fromEntries`

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **`assign` mutates target** | First arg is modified | Use `{}` as target |
| **`keys` misses non-enumerable** | `defineProperty` | Use `getOwnPropertyNames` |
| **Prototype pollution** | `hasOwnProperty` overridden | Use `Object.hasOwn()` |
| **Deep objects in `assign`** | Shallow copy | Write deep merge |
| **`fromEntries` with duplicate keys** | Last wins | Filter first |

**Bug Example:**
```javascript
const target = { a: 1 };
Object.assign(target, { a: 2 }); // target.a === 2
```

**Fix:**
```javascript
const result = Object.assign({}, target, source);
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Write `pick(obj, keys)` using `fromEntries`.
2. **Exercise 2**: Write `omit(obj, keys)` using `filter` + `fromEntries`.
3. **Exercise 3**: Deep merge two objects.

**Sample Solution for Exercise 1**:
```javascript
function pick(obj, keys) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => keys.includes(k))
  );
}
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Say: **“`entries` + `fromEntries` = full object pipeline.”**
- Show **pick/omit** pattern.
- Explain **shallow vs deep copy**.
- Know **immutability triad**: `freeze`, `seal`, `preventExtensions`.

**Questions**:

- **Q**: `Object.keys` vs `for...in`?  
  **A**: `keys` → array, no prototype; `for...in` → includes inherited.

- **Q**: How to copy object safely?  
  **A**: `Object.assign({}, obj)` or `{ ...obj }`.

- **Q**: What does `Object.freeze` prevent?  
  **A**: Add, delete, modify properties.

- **Q**: Convert `Map` to object?  
  **A**: `Object.fromEntries(map.entries())`.

---

#### 11. Summary Table

| Key Point              | Description |
|------------------------|-------------|
| **Definition**         | Static methods on `Object` |
| **Core Concept**       | Inspect, copy, transform objects |
| **Syntax**             | `Object.keys(obj)`, `assign({}, src)` |
| **Variants**           | Inspection, copy, immutability |
| **Common Use**         | Merge, pick/omit, transform |
| **Typical Errors**     | Mutating target, shallow copy |
| **Practice Focus**     | `entries` → `fromEntries` pipeline |
| **Interview Prep**     | Immutability, safe copy, transformation |

---

**Next Topic?** Just say **“Destructuring (Arrays, Objects)”** or paste content — I’ll deliver **perfect, clean, structured notes** just like this!

### JavaScript Object Methods (Object.keys, entries, assign, etc.)

#### 1. Definition
**Object methods** are built-in static functions on the `Object` constructor that help **inspect, copy, transform, and control** object properties.

---

#### 2. Theory / Concept
These methods are **non-mutating** (except `assign`, `freeze`, etc.) and work on **any object**.

| Method | Purpose | Returns |
|-------|--------|--------|
| `Object.keys()` | Array of **enumerable own string keys** | `["a", "b"]` |
| `Object.values()` | Array of **property values** | `[1, 2]` |
| `Object.entries()` | Array of `[key, value]` pairs | `[["a",1], ["b",2]]` |
| `Object.assign()` | Copy properties to target | Modified target |
| `Object.fromEntries()` | Convert entries → object | `{ key: value }` |
| `Object.hasOwn()` | Check own property | `true/false` |
| `Object.freeze()` | Prevent all changes | Frozen object |

**Step-by-Step Process**:
1. Use `keys/values/entries` → get iterable data.
2. Transform with `map`, `filter`, `reduce`.
3. Rebuild with `fromEntries` or `assign`.

---

#### 3. Syntax
```javascript
Object.keys(obj)           → string[]
Object.values(obj)         → any[]
Object.entries(obj)        → [string, any][]
Object.assign(target, src) → target
Object.fromEntries(iterable) → object
```

---

#### 4. Types / Variants
| Method | Type | Use Case |
|-------|------|--------|
| **`keys()`** | Inspection | List properties |
| **`values()`** | Extraction | Sum, average |
| **`entries()`** | Transformation | Map → Object |
| **`assign()`** | Copy/Merge | Combine configs |
| **`fromEntries()`** | Build | From Map or array |
| **`hasOwn()`** | Safety | Avoid prototype |
| **`freeze/seal`** | Immutability | Protect data |

---

#### 5. Examples

**Example 1: `keys`, `values`, `entries`**
```javascript
const user = { name: "Alice", age: 30, city: "NY" };

Object.keys(user);     // ["name", "age", "city"]
Object.values(user);   // ["Alice", 30, "NY"]
Object.entries(user);  // [["name","Alice"], ...]
```

**Example 2: `assign`**
```javascript
const defaults = { theme: "light" };
const prefs = { theme: "dark" };
const config = Object.assign({}, defaults, prefs);
```

**Example 3: `fromEntries`**
```javascript
const entries = [["x", 10], ["y", 20]];
const point = Object.fromEntries(entries); // { x:10, y:20 }
```

---

#### 6. Core Methods in Depth

```javascript
// keys + filter
Object.keys(obj).filter(k => obj[k] > 0);

// values + reduce
Object.values(scores).reduce((a,b) => a+b, 0);

// entries + map + fromEntries
Object.fromEntries(
  Object.entries(obj).map(([k,v]) => [k.toUpperCase(), v])
);

// assign (merge)
Object.assign({}, base, overrides);

// hasOwn (safe check)
if (Object.hasOwn(obj, 'name')) { ... }

// freeze
const config = Object.freeze({ api: "..." });
config.api = "new"; // ignored
```

---

#### 7. Use Cases
- **Config Merging**: `Object.assign`
- **API Transformation**: `entries` → `map` → `fromEntries`
- **Validation**: `keys` + schema
- **Data Export**: `entries` → CSV
- **Immutability**: `freeze` for constants
- **Pick/Omit**: Build with `fromEntries`

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **`assign` mutates target** | First arg is modified | Use `{}` as target |
| **`keys` misses non-enumerable** | `defineProperty` | Use `getOwnPropertyNames` |
| **Prototype pollution** | `hasOwnProperty` overridden | Use `Object.hasOwn()` |
| **Deep objects in `assign`** | Shallow copy | Write deep merge |
| **`fromEntries` with duplicate keys** | Last wins | Filter first |

**Bug Example:**
```javascript
const target = { a: 1 };
Object.assign(target, { a: 2 }); // target.a === 2
```

**Fix:**
```javascript
const result = Object.assign({}, target, source);
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Write `pick(obj, keys)` using `fromEntries`.
2. **Exercise 2**: Write `omit(obj, keys)` using `filter` + `fromEntries`.
3. **Exercise 3**: Deep merge two objects.

**Sample Solution for Exercise 1**:
```javascript
function pick(obj, keys) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => keys.includes(k))
  );
}
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Say: **“`entries` + `fromEntries` = full object pipeline.”**
- Show **pick/omit** pattern.
- Explain **shallow vs deep copy**.
- Know **immutability triad**: `freeze`, `seal`, `preventExtensions`.

**Questions**:

- **Q**: `Object.keys` vs `for...in`?  
  **A**: `keys` → array, no prototype; `for...in` → includes inherited.

- **Q**: How to copy object safely?  
  **A**: `Object.assign({}, obj)` or `{ ...obj }`.

- **Q**: What does `Object.freeze` prevent?  
  **A**: Add, delete, modify properties.

- **Q**: Convert `Map` to object?  
  **A**: `Object.fromEntries(map.entries())`.

---

#### 11. Summary Table

| Key Point              | Description |
|------------------------|-------------|
| **Definition**         | Static methods on `Object` |
| **Core Concept**       | Inspect, copy, transform objects |
| **Syntax**             | `Object.keys(obj)`, `assign({}, src)` |
| **Variants**           | Inspection, copy, immutability |
| **Common Use**         | Merge, pick/omit, transform |
| **Typical Errors**     | Mutating target, shallow copy |
| **Practice Focus**     | `entries` → `fromEntries` pipeline |
| **Interview Prep**     | Immutability, safe copy, transformation |

---
