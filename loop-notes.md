# JavaScript Loops 

**Why Loops Matter**:
- Automate repetitive tasks (e.g., summing array elements).
- Process data structures (arrays, objects, strings).
- Common in interviews for iteration logic, scoping, and performance questions.
- Tie to arrays (iteration), operators (conditions), and variables (scope).

### Key Loops
- **`for`**: Known iteration count (e.g., array loops).
- **`while`**: Unknown iteration count (e.g., until condition fails).
- **`do...while`**: Runs at least once (e.g., user input).
- **`for...in`**: Iterates object properties (keys).
- **`for...of`**: Iterates iterable values (arrays, strings, maps, sets).
- **`break`/`continue`**: Controls loop flow.

### Key Characteristics
- **Condition**: Loops run while condition is truthy (uses coercion).
- **Scope**: `let`/`const` in loops are block-scoped; `var` leaks.
- **Iterables**: Arrays, strings, maps, sets support `for...of`.
- **Edge Cases**: Infinite loops, inherited properties in `for...in`.

---

## JavaScript Loops: 

### 1. `for` Loop

Iterates a fixed number of times, ideal for arrays or known ranges.

**Syntax**:
```js
for (let i = 0; i < n; i++) {
  // Code
}
```

**Example**:
```js
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

**Dry Run**:
1. `i = 0`, `0 < 3` → `true`, print `arr[0]` → `1`.
2. `i = 1`, `1 < 3` → `true`, print `arr[1]` → `2`.
3. `i = 2`, `2 < 3` → `true`, print `arr[2]` → `3`.
4. `i = 3`, `3 < 3` → `false`, exit.

**Output**: `1`, `2`, `3`.

**Edge Case**:
- **Infinite Loop**: Missing `i++` or incorrect condition.
  ```js
  for (let i = 0; i < 5; ) console.log(i); // Infinite: 0, 0, ...
  ```

**Interview Tip**:
- Link to arrays: “`for` loops are great for array iteration with index access.”
- Say: “I use `let` for block scope to avoid `var` leakage.”

### 2. `while` Loop

Runs while a condition is truthy, ideal for unknown iteration counts.

**Syntax**:
```js
while (condition) {
  // Code
}
```

**Example**:
```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

**Dry Run**:
1. `i = 0`, `0 < 3` → `true`, print `0`, `i = 1`.
2. `i = 1`, `1 < 3` → `true`, print `1`, `i = 2`.
3. `i = 2`, `2 < 3` → `true`, print `2`, `i = 3`.
4. `i = 3`, `3 < 3` → `false`, exit.

**Output**: `0`, `1`, `2`.

**Edge Case**:
- **Coercion**: Condition coerces to boolean (e.g., `0` is falsy).
  ```js
  let x = "0"; while (x) console.log(x--); // 0 (string coerces to truthy)
  ```

**Interview Tip**:
- Link to conditionals: “`while` uses truthy/falsy like `if`.”
- Say: “I ensure `while` conditions update to avoid infinite loops.”

### 3. `do...while` Loop

Runs at least once, then continues while condition is truthy.

**Syntax**:
```js
do {
  // Code
} while (condition);
```

**Example**:
```js
let x = 5;
do {
  console.log(x);
} while (x < 0);
```

**Dry Run**:
1. Execute body: print `5`.
2. `x < 0`: `5 < 0` → `false`, exit.

**Output**: `5`.

**Edge Case**:
- **Runs Once**: Even if condition is false.
  ```js
  let x = 0; do { console.log("Run"); } while (false); // Run
  ```

**Interview Tip**:
- Link to operators: “`do...while` uses comparison operators like `<`.”
- Say: “I use `do...while` for guaranteed first execution, like user prompts.”

### 4. `for...in` Loop

Iterates over **enumerable properties** (keys) of objects, not recommended for arrays.

**Syntax**:
```js
for (let key in object) {
  // Code
}
```

**Example (Object)**:
```js
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}
```

**Dry Run**:
1. `key = "a"`, print `"a"`, `obj["a"]` → `1`.
2. `key = "b"`, print `"b"`, `obj["b"]` → `2`.
3. `key = "c"`, print `"c"`, `obj["c"]` → `3`.

**Output**: `a 1`, `b 2`, `c 3`.

**Example (Array, Problematic)**:
```js
let arr = ["x", "y"];
Array.prototype.custom = 1;
for (let index in arr) {
  console.log(index, arr[index]);
}
```

**Dry Run**:
1. `index = "0"`, print `"0"`, `arr[0]` → `"x"`.
2. `index = "1"`, print `"1"`, `arr[1]` → `"y"`.
3. `index = "custom"`, print `"custom"`, `arr["custom"]` → `undefined`.

**Output**: `0 x`, `1 y`, `custom undefined`.

**Edge Case**:
- **Inherited Properties**: Included, causing bugs.
  ```js
  Object.prototype.custom = 1;
  let obj = { a: 1 };
  for (let key in obj) console.log(key); // a, custom
  ```

**Best Practice**:
- Use `hasOwnProperty()` to filter inherited properties.
  ```js
  for (let key in obj) if (obj.hasOwnProperty(key)) console.log(key);
  ```

**Interview Tip**:
- Link to objects: “`for...in` is designed for object key iteration.”
- Say: “I avoid `for...in` for arrays due to inherited properties.”

### 5. `for...of` Loop

Iterates over **values** of iterables (arrays, strings, maps, sets), ideal for arrays.

**Syntax**:
```js
for (let value of iterable) {
  // Code
}
```

**Example (Array)**:
```js
let arr = ["x", "y", "z"];
for (let value of arr) {
  console.log(value);
}
```

**Dry Run**:
1. `value = "x"`, print `"x"`.
2. `value = "y"`, print `"y"`.
3. `value = "z"`, print `"z"`.

**Output**: `x`, `y`, `z`.

**Example (String)**:
```js
let str = "abc";
for (let char of str) {
  console.log(char);
}
```

**Dry Run**:
1. `char = "a"`, print `"a"`.
2. `char = "b"`, print `"b"`.
3. `char = "c"`, print `"c"`.

**Output**: `a`, `b`, `c`.

**Example (Object, Error)**:
```js
let obj = { a: 1, b: 2 };
for (let value of obj) console.log(value); // TypeError: obj is not iterable
```

**Workaround**:
```js
for (let [key, value] of Object.entries(obj)) console.log(key, value); // a 1, b 2
```

**Edge Case**:
- **Non-Iterables**: Objects require `Object.keys()` or `Object.entries()`.
  ```js
  for (let key of Object.keys(obj)) console.log(key); // a, b
  ```

**Interview Tip**:
- Link to arrays: “`for...of` is ideal for array values, ignoring inherited properties.”
- Say: “I use `arr.entries()` for index-value pairs.”

### 6. `break` and `continue`

Control loop flow.

**`break`**:
- Exits loop immediately.
```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // 0, 1, 2
}
```

**`continue`**:
- Skips current iteration.
```js
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i); // 0, 1, 2, 4
}
```

**Labeled Loops**:
- Control nested loops.
```js
outer: for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    if (i === 1) break outer;
    console.log(i, j); // 0 0, 0 1
  }
}
```

**Interview Tip**:
- Link to conditionals: “`break`/`continue` pair with `if` for flow control.”
- Say: “I use labeled `break` for nested loops to avoid confusion.”

### 7. Connection to Previous Topics

- **Data Types**: Loops handle strings, arrays, objects; coercion in conditions.
  ```js
  let x = "0"; while (x) console.log(x--); // Coerces to truthy
  ```
- **Variables**: `let` in loops is block-scoped; `var` leaks.
  ```js
  for (var i = 0; i < 3; i++) {} console.log(i); // 3
  ```
- **Operators**: Conditions use comparison (`<`) and logical (`&&`) operators.
  ```js
  for (let i = 0; i < 5 && i !== 3; i++) console.log(i); // 0, 1, 2
  ```
- **Conditionals**: Loops often embed `if` statements.
  ```js
  for (let i = 0; i < 5; i++) if (i % 2 === 0) console.log(i); // 0, 2, 4
  ```
- **Arrays**: `for...of` and `for` are common for array iteration.
  ```js
  let arr = [1, 2, 3]; for (let v of arr) console.log(v); // 1, 2, 3
  ```
- **JavaScript Working**: Async in loops (e.g., `setTimeout`) needs closure or `let`.
  ```js
  for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 0, 1, 2
  ```

**Interview Tip**:
- Say: “I use `for...of` with `Array.isArray()` for safe array iteration.”

---

## Interview Questions and Answers

### Beginner-Level
1. **What are the different types of loops in JavaScript?**
   - **Answer**: `for`, `while`, `do...while`, `for...in` (object keys), `for...of` (iterable values).
   - **Code**: `for (let i = 0; i < 3; i++) console.log(i);`
   - **Tip**: Mention `for...of` for ES6.

2. **What’s the difference between `for...in` and `for...of`?**
   - **Answer**: `for...in` iterates object keys; `for...of` iterates iterable values (arrays, strings).
   - **Code**: 
     ```js
     let arr = ["a", "b"];
     for (let i in arr) console.log(i); // 0, 1
     for (let v of arr) console.log(v); // a, b
     ```
   - **Tip**: Say: “`for...of` is safer for arrays.”

3. **What does `break` do in a loop?**
   - **Answer**: Exits the loop immediately.
   - **Code**: `for (let i = 0; i < 5; i++) if (i === 3) break; else console.log(i); // 0, 1, 2`
   - **Tip**: Mention labeled `break`.

4. **What does `continue` do in a loop?**
   - **Answer**: Skips current iteration, continues with next.
   - **Code**: `for (let i = 0; i < 5; i++) if (i === 3) continue; else console.log(i); // 0, 1, 2, 4`
   - **Tip**: Link to conditionals.

5. **Why use `do...while` instead of `while`?**
   - **Answer**: Guarantees at least one execution.
   - **Code**: `do { console.log("Run"); } while (false); // Run`
   - **Tip**: Mention user input use cases.

### Intermediate-Level
6. **Why avoid `for...in` for arrays?**
   - **Answer**: Iterates indices as strings, includes inherited properties, and order isn’t guaranteed.
   - **Code**: 
     ```js
     Array.prototype.custom = 1;
     let arr = [1, 2];
     for (let i in arr) console.log(i); // 0, 1, custom
     ```
   - **Tip**: Recommend `for...of`.

7. **How do you iterate objects with `for...of`?**
   - **Answer**: Use `Object.keys()` or `Object.entries()`.
   - **Code**: 
     ```js
     let obj = { a: 1, b: 2 };
     for (let [k, v] of Object.entries(obj)) console.log(k, v); // a 1, b 2
     ```
   - **Tip**: Highlight ES6 destructuring.

8. **What’s the output?**
   - **Code**: 
     ```js
     let arr = [1, 2, 3];
     for (let i in arr) console.log(arr[i]); // 1, 2, 3
     for (let v of arr) console.log(v); // 1, 2, 3
     ```
   - **Answer**: Both print `1, 2, 3` (`for...in` via indices, `for...of` via values).
   - **Tip**: Explain why `for...of` is cleaner.

9. **How does `var` vs `let` affect loops?**
   - **Answer**: `var` leaks scope; `let` is block-scoped.
   - **Code**: 
     ```js
     for (var i = 0; i < 3; i++) {} console.log(i); // 3
     for (let j = 0; j < 3; j++) {} console.log(j); // ReferenceError
     ```
   - **Tip**: Link to variables.

10. **What’s the output with `break` in a nested loop?**
    - **Code**: 
      ```js
      outer: for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          if (i === 1) break outer;
          console.log(i, j);
        }
      }
      ```
    - **Answer**: `0 0`, `0 1` (breaks outer loop when `i === 1`).
    - **Tip**: Explain labeled `break`.

### Advanced-Level
11. **How does `for...in` handle inherited properties?**
    - **Answer**: Includes them, causing potential bugs.
    - **Code**: 
      ```js
      Object.prototype.custom = 1;
      let obj = { a: 2 };
      for (let key in obj) console.log(key); // a, custom
      ```
    - **Tip**: Use `hasOwnProperty()`.

12. **What’s the output with `setTimeout` in a loop?**
    - **Answer**: With `var`, prints last index; with `let`, prints correct indices.
    - **Code**: 
      ```js
      for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 3, 3, 3
      for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); // 0, 1, 2
      ```
    - **Tip**: Link to JavaScript working (event loop, closures).

13. **How do you optimize loops for performance?**
    - **Answer**: Cache array lengths, avoid heavy computations, use `for` or `for...of` over `forEach`.
    - **Code**: 
      ```js
      let arr = [1, 2, 3];
      let len = arr.length; // Cache length
      for (let i = 0; i < len; i++) console.log(arr[i]);
      ```
    - **Tip**: Mention JIT compilation impact.

14. **What’s the output with async in `for...of`?**
    - **Code**: 
      ```js
      async function test() {
        let arr = [1, 2, 3];
        for (let v of arr) {
          await new Promise(r => setTimeout(r, 100));
          console.log(v);
        }
      }
      test(); // 1, 2, 3 (sequential)
      ```
    - **Answer**: Values print sequentially due to `await`.
    - **Tip**: Contrast with parallel `Promise.all`.

15. **What’s the output with nested `for...of`?**
    - **Code**: 
      ```js
      let arr = [[1, 2], [3, 4]];
      for (let sub of arr) for (let v of sub) console.log(v);
      ```
    - **Answer**: `1, 2, 3, 4` (flattens nested arrays).
    - **Tip**: Link to array iteration.

---