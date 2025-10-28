### JavaScript Arrays — Basics

#### 1. Definition
**Arrays** are **ordered collections** of items (any data type) stored in a **single variable**. They use **zero-based indexing** to access elements quickly.

---

#### 2. Theory / Concept
Arrays are **dynamic** (can grow/shrink) and **heterogeneous** (hold mixed types). They're **objects** under the hood with special numeric keys.

- **Index**: Position starting from `0`.
- **Length**: Number of elements (`arr.length`).
- **Sparse arrays**: Can have "holes" (missing indices).
- **Mutable**: Can change size/content after creation.

**Step-by-Step Process**:
1. Create array with `[]` or `new Array()`.
2. Access with `arr[index]`.
3. Modify with assignment, `push`, `pop`, etc.
4. Check length with `arr.length`.

---

#### 3. Syntax
```javascript
// Create arrays
const arr1 = [];                    // Empty
const arr2 = [1, 2, 3];            // Literal
const arr3 = new Array(1, 2, 3);   // Constructor

// Access
arr2[0];   // 1 (first)
arr2[2];   // 3 (last)

// Modify
arr2[1] = 99;
arr2.push(4);     // Add end
arr2.shift();     // Remove start
```

---

#### 4. Types / Variants
| Creation Method | Explanation | Code Example |
|-----------------|-------------|--------------|
| **Array Literal `[]`** | Most common, clean syntax | ```javascript
| **Constructor** | `new Array()` or `new Array(n)` | ```javascript<br>const arr = new Array(3); // [empty × 3]``` |
| **From String** | `string.split()` | ```javascript<br>const arr = "1,2,3".split(',');``` |
| **Empty Array** | `[]` or `new Array()` | ```javascript<br>const empty = [];``` |

---

#### 5. Examples

**Example 1: Basic Operations**
```javascript
const fruits = ["apple", "banana"];

// Add
fruits.push("orange");     // ["apple", "banana", "orange"]
fruits.unshift("kiwi");    // ["kiwi", "apple", "banana", "orange"]

// Remove
fruits.pop();              // ["kiwi", "apple", "banana"]
fruits.shift();            // ["apple", "banana"]

console.log(fruits.length); // 2
```

**Example 2: Mixed Types**
```javascript
const mixed = [
    "text",      // string
    42,          // number
    true,        // boolean
    { name: "John" },  // object
    [1, 2],      // nested array
    () => "hi"   // function
];
```

**Example 3: Sparse Array**
```javascript
const sparse = [];
sparse[0] = "first";
sparse[10] = "last";
console.log(sparse);       // ["first", empty × 9, "last"]
console.log(sparse.length); // 11
```

---

#### 6. Array Methods (Basics)

| Method | Purpose | Modifies Original? |
|--------|---------|-------------------|
| `push(item)` | Add to **end** | ✅ Yes |
| `pop()` | Remove from **end** | ✅ Yes |
| `unshift(item)` | Add to **start** | ✅ Yes |
| `shift()` | Remove from **start** | ✅ Yes |
| `splice(idx, count, ...items)` | Remove/insert at index | ✅ Yes |
| `slice(start, end)` | **Copy** portion | ❌ No |

**Code Examples:**
```javascript
const arr = [1, 2, 3];

// Add/Remove
arr.push(4);        // [1,2,3,4]
arr.pop();          // [1,2,3]
arr.unshift(0);     // [0,1,2,3]

// Remove specific
arr.splice(1, 2);   // [0,3] (removes 1,2)
```

---

#### 7. Use Cases
- **Lists**: Shopping cart, todo items.
- **Data storage**: User scores, form inputs.
- **Iteration**: Loop through collections.
- **Stack/Queue**: LIFO/FIFO operations.
- **Matrices**: 2D arrays `[ [1,2], [3,4] ]`.

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **Out of bounds** | Accessing `arr[999]` | Check `if (arr[index] !== undefined)` |
| **`delete` creates holes** | `delete arr[1]` | Use `splice()` or `filter()` |
| **Negative index** | `arr[-1]` → `undefined` | Use `arr[arr.length-1]` |
| **Modifying copies** | `const copy = arr;` | Use `[...arr]` or `slice()` |
| **Length confusion** | Setting `arr.length = 0` | Truncates array |

**Bug Example:**
```javascript
const arr = [1, 2, 3];
delete arr[1];     // [1, empty, 3] ← Hole!
arr.length;        // Still 3
```

**Fix:**
```javascript
arr.splice(1, 1);  // [1, 3] ← Clean
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: Create shopping cart with `addItem`, `removeItem`, `getTotalItems`.
2. **Exercise 2**: Build todo list with `addTodo`, `completeTodo`, `getPending`.
3. **Exercise 3**: Reverse array **without** using `reverse()`.

**Sample Solution for Exercise 1:**
```javascript
const cart = [];

function addItem(item) {
    cart.push({ name: item, qty: 1 });
}

function removeItem(item) {
    const index = cart.findIndex(x => x.name === item);
    if (index > -1) cart.splice(index, 1);
}

function getTotalItems() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Say: **"Arrays are zero-indexed, dynamic, mutable objects."**
- Know **mutable vs immutable** methods.
- Show **shallow copy** with `[...arr]`.
- Mention **sparse arrays** and holes.

**Questions**:

- **Q**: How to copy array without mutating original?  
  **A**: `[...arr]`, `arr.slice()`, `Array.from(arr)`.

- **Q**: Difference `push` vs `unshift`?  
  **A**: `push` → **end** (faster), `unshift` → **start** (slower).

- **Q**: What happens with `delete arr[1]`?  
  **A**: Creates **hole**, length unchanged.

- **Q**: Fastest way to empty array?  
  **A**: `arr.length = 0` (fastest).

---

#### 11. Summary Table

| Key Point              | Description |
|------------------------|-------------|
| **Definition**         | Ordered collection with numeric indices |
| **Core Concept**       | Zero-based, dynamic, mutable, can mix types |
| **Syntax**             | `[]`, `new Array()`, `arr[index]` |
| **Variants**           | Literal, constructor, sparse |
| **Common Methods**     | `push/pop`, `shift/unshift`, `splice/slice` |
| **Typical Errors**     | Holes from `delete`, no deep copy |
| **Practice Focus**     | Cart/todo apps, copy arrays |
| **Interview Prep**     | Copy methods, `push` vs `unshift`, sparse arrays |

---

**Next Topic?** Just say **"Array Methods (map, filter, reduce, etc.)"** or paste content — I'll deliver **perfect notes** just like this! 🚀