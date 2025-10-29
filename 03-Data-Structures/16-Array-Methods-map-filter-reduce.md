### JavaScript Array Methods (map, filter, reduce, etc.)

#### 1. Definition
**Array methods** are built-in functions that let you **transform, filter, search, and process** arrays **without mutating the original** (most are **immutable**). They make code clean and readable.

---

#### 2. Theory / Concept
Most array methods:
- Take a **callback function** `(element, index, array)`.
- Return a **new array** (except `forEach`, `sort`, etc.).
- Are **chainable** → powerful data pipelines.

| Method | Returns | Mutates Original? |
|--------|--------|-------------------|
| `map` | New array (transformed) | No |
| `filter` | New array (filtered) | No |
| `reduce` | Single value | No |
| `find` / `findIndex` | Element or index | No |
| `some` / `every` | `true`/`false` | No |
| `forEach` | `undefined` | No |
| `sort` | Same array (sorted) | Yes |
| `reverse` | Same array | Yes |

**Step-by-Step Process**:
1. Pass a function to method.
2. JS calls it for each element.
3. Collect results → return new data.

---

#### 3. Syntax
```javascript
arr.map(callback(element, index, array))
arr.filter(callback)
arr.reduce(callback(accumulator, current), initialValue)
arr.find(callback)
```

---

#### 4. Types / Variants
| Method | Purpose | Example |
|--------|-------|--------|
| **`map()`** | Transform each item | Double numbers |
| **`filter()`** | Keep items that pass test | Even numbers |
| **`reduce()`** | Reduce to single value | Sum, max, group |
| **`find()`** | First match | User by ID |
| **`some()` / `every()`** | Check condition | Any adult? All active? |
| **`forEach()`** | Run side-effect | Log items |
| **`sort()`** | Sort in place | Alphabetical |
| **`slice()`** | Copy portion | Extract subarray |

---

#### 5. Examples

**Example 1: `map()`**
```javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

**Example 2: `filter()`**
```javascript
const ages = [12, 17, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [25, 30]
```

**Example 3: `reduce()`**
```javascript
const total = [10, 20, 30].reduce((sum, n) => sum + n, 0);
console.log(total); // 60
```

**Example 4: Chaining**
```javascript
const result = users
  .filter(u => u.active)
  .map(u => u.name.toUpperCase())
  .sort();
```

---

#### 6. Core Methods in Depth

```javascript
// map()
[1, 2, 3].map((x, i) => x + i); // [1, 3, 5]

// filter()
[1, 2, 3, 4].filter(x => x > 2); // [3, 4]

// reduce()
[1, 2, 3].reduce((a, b) => a + b, 0); // 6

// find() / findIndex()
users.find(u => u.id === 5); // {id:5, ...}
users.findIndex(u => u.id === 5); // 4

// some() / every()
nums.some(n => n > 10); // true if any
nums.every(n => n > 0); // true if all

// forEach()
nums.forEach(n => console.log(n));

// sort()
[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]

// slice()
[1, 2, 3, 4].slice(1, 3); // [2, 3]
```

---

#### 7. Use Cases
- **Data Transformation**: Format user data.
- **Filtering**: Search, pagination.
- **Aggregation**: Totals, averages, grouping.
- **Validation**: `some`, `every`.
- **Rendering**: React lists → `map`.
- **Pipelines**: Clean, readable data flow.

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **Mutating in `map`** | Changing original object | Return new object |
| **`reduce` without initial value** | First element used → skip logic | Always pass `0` or `{}` |
| **`sort` without compare function** | Sorts strings → `10 < 2` | Use `(a,b) => a - b` |
| **`forEach` expecting return** | Returns `undefined` | Use `map` |
| **Infinite loop in `filter`** | Mutating array inside | Don’t modify array in loop |

**Bug Example:**
```javascript
// Bad: mutating in map
users.map(u => { u.active = true; return u; }); // Mutates!
```

**Fix:**
```javascript
users.map(u => ({ ...u, active: true })); // New objects
```

---

#### 9. Problem Solving / Practice Questions

1. **Exercise 1**: From array of objects, get array of names in uppercase.
2. **Exercise 2**: Filter active users over 25, return total salary.
3. **Exercise 3**: Group products by category using `reduce`.

**Sample Solution for Exercise 2**:
```javascript
const total = users
  .filter(u => u.active && u.age > 25)
  .reduce((sum, u) => sum + u.salary, 0);
```

---

#### 10. Interview Tips & Questions

**Tips**:
- Say: **“`map` transforms, `filter` selects, `reduce` combines.”**
- Show **chaining** → real-world pipeline.
- Explain **immutability** → safer code.
- Know **performance**: one pass vs multiple.

**Questions**:

- **Q**: `map` vs `forEach`?  
  **A**: `map` returns new array, `forEach` returns `undefined`.

- **Q**: How to find max without `Math.max`?  
  **A**: `arr.reduce((max, n) => n > max ? n : max, arr[0])`

- **Q**: Why `sort()` breaks numbers?  
  **A**: Sorts lexicographically → `"10" < "2"`.

- **Q**: Can you chain `sort` and `map`?  
  **A**: Yes — but `sort` mutates, so order matters.

---

#### 11. Summary Table

| Key Point              | Description |
|------------------------|-------------|
| **Definition**         | Built-in methods to process arrays |
| **Core Concept**       | `map`, `filter`, `reduce` → functional style |
| **Syntax**             | `arr.method(callback)` |
| **Variants**           | Transform, filter, aggregate, search |
| **Common Use**         | Data pipelines, UI rendering, analysis |
| **Typical Errors**     | Mutating in `map`, no initial in `reduce` |
| **Practice Focus**     | Chain methods, group data |
| **Interview Prep**     | Chaining, immutability, `reduce` patterns |

---
Perfect — tu ab **JavaScript Arrays (Basics)** chapter pe hai from your AceDevHub roadmap.
Neeche maine **complete, well-structured notes** bana diye hain with:
👉 Concept | Example | Code | Output | Notes
(Explained in your preferred *Hinglish teaching tone*).

---

# **JavaScript Arrays — Complete Notes**

---

## **1. Concept: What is an Array?**

* Array ek **ordered collection** hoti hai multiple values ka.
* Ek hi variable me multiple items store karne ke liye use hoti hai.
* JavaScript arrays are **dynamic** — means unka size fixed nahi hota.
* Arrays can hold **different data types** (string, number, object, etc.)

---

## **2. Creating Arrays**

### **(a) Array Literal (Most Common)**

```js
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];
```

### **(b) Array Constructor**

```js
const arr1 = new Array();       // Empty array []
const arr2 = new Array(5);      // 5 empty slots
const arr3 = new Array(1, 2, 3); // [1, 2, 3]
```

### **(c) Nested / Mixed Data**

```js
const data = [
  "string",
  123,
  true,
  { name: "John" },
  [1, 2, 3],
  function() { return "hello"; }
];
```

---

## **3. Accessing Array Elements**

```js
const colors = ["red", "green", "blue", "yellow"];

console.log(colors[0]); // red
console.log(colors[colors.length - 1]); // yellow
console.log(colors[10]); // undefined
console.log(colors[-1]); // undefined (no negative indexing like Python)
```

---

## **4. Array Properties**

```js
const items = ["a", "b", "c", "d"];
console.log(items.length); // 4

items.length = 2; // Truncate array
console.log(items); // ["a", "b"]

items.length = 5; // Extend with empty slots
console.log(items); // ["a", "b", empty × 3]
```

---

## **5. Adding Elements**

```js
const fruits = ["apple", "banana"];

// Add to end
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]

// Add to beginning
fruits.unshift("strawberry");
console.log(fruits); // ["strawberry", "apple", "banana", "orange"]

// Add at specific index (creates holes)
fruits[10] = "kiwi";
console.log(fruits.length); // 11
```

---

## **6. Removing Elements**

```js
const numbers = [1, 2, 3, 4, 5];

// Remove last
numbers.pop(); // removes 5

// Remove first
numbers.shift(); // removes 1

// Delete by index (creates hole)
delete numbers[1]; // [2, empty, 4]

// Best way → splice()
const colors = ["red", "green", "blue", "yellow"];
const removed = colors.splice(1, 2);
console.log(removed); // ["green", "blue"]
console.log(colors);  // ["red", "yellow"]
```

---

## **7. Modifying Elements**

```js
const pets = ["dog", "cat", "bird"];

// Update element
pets[1] = "hamster";

// Add element
pets[3] = "fish";

// Replace multiple
pets.splice(1, 2, "rabbit", "turtle");
// ["dog", "rabbit", "turtle", "fish"]
```

---

## **8. Common Array Methods**

```js
const arr = [1, 2, 3];

console.log(Array.isArray(arr)); // true
console.log(arr.toString()); // "1,2,3"
console.log(arr.join(" - ")); // "1 - 2 - 3"

const fruits = ["apple", "banana", "orange", "banana"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.lastIndexOf("banana")); // 3
console.log(fruits.includes("apple")); // true
```

---

## **9. Copying Arrays**

```js
const original = [1, 2, 3];

// Shallow copies
const copy1 = [...original];
const copy2 = Array.from(original);
const copy3 = original.slice();

copy1.push(4);
console.log(original); // [1, 2, 3]
console.log(copy1); // [1, 2, 3, 4]

// Warning: Shallow copy
const nested = [1, [2, 3], 4];
const shallowCopy = [...nested];
shallowCopy[1].push(5);
console.log(nested); // [1, [2, 3, 5], 4]
```

---

## **10. Combining Arrays**

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// concat()
const combined1 = arr1.concat(arr2);

// spread (...)
const combined2 = [...arr1, ...arr2];
const combined3 = [...arr1, "middle", ...arr2];
```

---

## **11. Practical Examples**

### **Shopping Cart**

```js
const cart = [];

function addToCart(item) {
  cart.push(item);
  console.log(`Added ${item} to cart`);
}

function removeFromCart(item) {
  const index = cart.indexOf(item);
  if (index > -1) {
    cart.splice(index, 1);
    console.log(`Removed ${item} from cart`);
  }
}

function showCart() {
  console.log("Cart contents:", cart.join(", "));
}
```

---

### **Todo List**

```js
const todos = [];

function addTodo(task) {
  todos.push({
    id: Date.now(),
    task,
    completed: false
  });
}

function completeTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.completed = true;
}

function getTodos() {
  return todos.filter(t => !t.completed);
}
```

---

### **Student Grades**

```js
const grades = [85, 92, 78, 96, 88];

function addGrade(grade) {
  if (grade >= 0 && grade <= 100) grades.push(grade);
}

function getAverage() {
  const sum = grades.reduce((total, g) => total + g, 0);
  return sum / grades.length;
}

function getHighestGrade() {
  return Math.max(...grades);
}

console.log("Average:", getAverage());
console.log("Highest:", getHighestGrade());
```

---

## **12. Common Array Patterns**

```js
// Initialize arrays
const zeros = new Array(5).fill(0);
const sequence = Array.from({ length: 5 }, (_, i) => i + 1);

// Remove duplicates
const numbers = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(numbers)];

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.flat();

// Check if empty
function isEmpty(arr) {
  return arr.length === 0;
}

// Get random element
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Shuffle array (Fisher-Yates algorithm)
function shuffle(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
```

---

## **13. Key Points to Remember**

1. Arrays are zero-indexed and dynamic in JS.
2. Use `.push()` and `.pop()` for end operations.
3. Use `.unshift()` and `.shift()` for beginning operations.
4. Use `.splice()` for adding/removing at specific index.
5. `Array.isArray()` helps verify array type.
6. Spread (`...`) and `Array.from()` make shallow copies.
7. `flat()` and `reduce()` can flatten nested arrays.
8. Avoid `delete` for arrays — creates holes.
9. Use `join()`, `includes()`, `indexOf()` for easy operations.
10. Always use `let` or `const` (not `var`) to avoid scope issues.

---