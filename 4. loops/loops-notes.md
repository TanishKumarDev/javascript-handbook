# JavaScript Loops and Control Statements

JavaScript **loops** allow repeated execution of code blocks, ideal for iterating over data like arrays or performing tasks multiple times. **Control statements** like break and continue modify loop behavior. Loops are fundamental for efficiency, but improper use can cause infinite loops or crashes.

**Key Loop Types**:
- **For**: Fixed iterations with initialization, condition, and increment.
- **While**: Condition-checked before execution.
- **Do While**: Executes at least once, condition after.

**Why Loops Matter**:
- Handle repetition (e.g., array processing).
- Optimize performance vs manual code.
- Common in interviews: infinite loops, scope, break/continue usage.

### Key Characteristics
- **Initialization**: Sets starting values (e.g., counter).
- **Condition**: Evaluates to continue (truthy/falsy coercion).
- **Increment/Decrement**: Updates variables per iteration.
- **Scope**: `let` in loops is block-scoped; `var` is function-scoped.
- **Infinite Loops**: Missing increment crashes browser.
- **Labels**: Allow breaking/continuing specific outer loops.

---

## Key Concepts
- **Use Cases**: Array iteration, counters, data processing.
- **Loop Control**: Break exits loop; continue skips iteration.
- **Edge Cases**: Omitted expressions, fall-through without break, scope issues.
- **Best Practices**: Use `let` for scoping, avoid infinite loops, prefer for-of for arrays.
- **Performance**: For simple loops, all similar; while/do-while for dynamic conditions.

---

Below is a detailed breakdown with examples, outputs, and insights.

### 1. For Loop

Executes a fixed number of times with 3 expressions: init, condition, update.

#### 1.1 Basic For
- **Definition**: `for (init; condition; update) { ... }`.
- **Use Case**: Array traversal, counters.
- **Key Points**: Init once, condition per iteration, update after block.

**Example**:
```js
// Initialize text
let text = "";

// For loop to build string
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

// Log result
console.log(text);
// Output: "The number is 0<br>The number is 1<br>The number is 2<br>The number is 3<br>The number is 4<br>"
```

**Dry Run**:
1. Init: `i = 0`.
2. Condition: `0 < 5` → true → execute block → text += "0<br>".
3. Update: `i++` → i=1.
4. Repeat until `i=5` → false → exit.
5. Log text.

**Tip**: Use for known iteration counts.

#### 1.2 For with Array
- Iterate collections.

**Example**:
```js
// Array of cars
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

// Loop over array
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

// Log result
console.log(text);
// Output: "BMW<br>Volvo<br>Saab<br>Ford<br>"
```

**Dry Run**:
1. `i=0`, `0 < 4` → true → "BMW<br>".
2. Increment i, repeat for all.
3. `i=4` → false.

#### 1.3 Omitted Expressions
- Flexible but risky.

**Example** (Omit init):
```js
// Pre-init i
let i = 2;
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

// Omit init
for (; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

// Log (starts from index 2)
console.log(text);
// Output: "Saab<br>Ford<br>"
```

**Dry Run**:
1. Starts with i=2.
2. `2 < 4` → "Saab<br>".
3. i=3 → "Ford<br>".
4. i=4 → exit.

**Example** (Omit condition, use break):
```js
// Omit condition
let i = 0;
let text = "";
for (; ; i++) {  // Infinite without break
  if (i >= 5) break;
  text += i + "<br>";
}

// Log
console.log(text);
// Output: "0<br>1<br>2<br>3<br>4<br>"
```

**Tip**: Omit condition only with internal break to avoid infinite loops.

#### 1.4 Loop Scope
- `let` vs `var`.

**Example**:
```js
// var scope (function-scoped)
var j = 5;
for (var j = 0; j < 10; j++) {}  // Redeclares
console.log(j); // 10 (updated)

// let scope (block-scoped)
let k = 5;
for (let k = 0; k < 10; k++) {}
console.log(k); // 5 (original)
```

**Dry Run**:
1. var: Loop updates outer j → 10.
2. let: Loop k local → outer unchanged.

**Tip**: Use let for safety.

**Edge Cases**:
- Decrement: `for (let i=5; i>0; i--)` → countdown.
- Infinite: Missing update → crash.

**Interview Tip**: Explain expressions' order; why omit condition needs break.

### 2. While Loop

Runs while condition true; checks before execution.

- **Definition**: `while (condition) { ... }`.
- **Use Case**: Unknown iterations (e.g., until condition met).
- **Key Points**: No init/update built-in; manual inside.

**Example**:
```js
// Init counter
let i = 0;
let text = "";

// While loop
while (i < 5) {
  text += "The number is " + i + "<br>";
  i++;  // Must increment
}

// Log
console.log(text);
// Output: Same as for loop
```

**Dry Run**:
1. `i=0 <5` → true → append, i=1.
2. Repeat until i=5 → false.
3. No increment → infinite.

**Tip**: For dynamic conditions; compare to for.

**Edge Cases**:
- False start: No execution.
- Infinite: Forgot increment.

### 3. Do While Loop

Variant of while; executes once before check.

- **Definition**: `do { ... } while (condition);`.
- **Use Case**: Run at least once (e.g., user input).

**Example**:
```js
// Init
let i = 0;
let text = "";

// Do while
do {
  text += "The number is " + i + "<br>";
  i++;
} while (i < 5);

// Log
console.log(text);
// Output: Same as above
```

**Dry Run**:
1. Execute block first → append 0, i=1.
2. Check `1<5` → true → repeat.
3. Even if i=5 initially → runs once.

**Example** (Runs once even if false):
```js
let i = 5;
let text = "";
do {
  text += i;
  i++;
} while (i < 5);
console.log(text); // "5"
```

**Tip**: Use when minimum one execution needed.

**Edge Cases**:
- Infinite: No increment.

**Interview Tip**: Contrast with while: "Do while guarantees one run."

### 4. Break Statement

Exits loop or switch early.

- **Definition**: `break;` or `break label;`.
- **Use Case**: Terminate on condition.
- **Key Points**: Jumps out; with label, targets outer.

**Example** (In loop):
```js
let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) break;  // Exit at 3
  text += i + "<br>";
}
console.log(text); // "0<br>1<br>2<br>"
```

**Dry Run**:
1. i=0-2 → append.
2. i=3 → break → exit.

**Example** (Labeled break):
```js
let text = "";
outer: for (let j = 0; j < 3; j++) {
  for (let i = 0; i < 3; i++) {
    if (i === 2) break outer;  // Exit outer
    text += i;
  }
}
console.log(text); // "010"
```

**Dry Run**:
1. j=0, i=0-1 → "01".
2. i=2 → break outer → exit all.
3. No more.

**Tip**: Labels for nested loops.

**Edge Cases**:
- In switch: Prevents fall-through.

### 5. Continue Statement

Skips current iteration, continues next.

- **Definition**: `continue;` or `continue label;`.
- **Use Case**: Skip invalid values.

**Example**:
```js
let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;  // Skip 3
  text += i + "<br>";
}
console.log(text); // "0<br>1<br>2<br>4<br>"
```

**Dry Run**:
1. i=3 → continue → skip append, increment.
2. Continues to i=4.

**Example** (Labeled continue):
```js
let text = "";
outer: for (let j = 0; j < 3; j++) {
  for (let i = 0; i < 3; i++) {
    if (i === 2) continue outer;  // Skip to next outer
    text += i;
  }
}
console.log(text); // "0101"
```

**Dry Run**:
1. For each j, i=0-1 → append, i=2 → continue outer → next j.

**Tip**: Use to filter in loops.

**Edge Cases**:
- In while: Ensure update before continue.

---

## 6. Common Interview Questions

#### Beginner-Level
1. **What’s the output?**
   ```js
   let x = ''; for (let i=0; i<=5; i++) x += i; console.log(x); // "012345"
   ```
   - **Answer**: Includes 5.
   - **Tip**: Condition <=.

2. **What’s the output?**
   ```js
   let i=15, x=''; do { x += 'Num ' + i; } while (i<10); console.log(x); // "Num 15"
   ```
   - **Answer**: Runs once.
   - **Tip**: Do while vs while.

3. **What’s the output without break?**
   ```js
   for (let i=0; i<5; i++) { if (i==3) /* no break */; x += i; } // All
   ```
   - **Answer**: Continues after if.

#### Intermediate-Level
4. **Why infinite loop?**
   - **Answer**: Missing increment.
   - **Code**: `while (true) {}` or forgot `i++`.

5. **What’s the output?**
   ```js
   let x=''; for (let i=0; i<5; i++) { if (i==2) continue; x += i; } // "0134"
   ```
   - **Answer**: Skips 2.

6. **Scope difference?**
   - **Answer**: var updates outer; let doesn't.

#### Advanced-Level
7. **Labeled break use?**
   - **Answer**: Exit outer in nested.
   - **Code**: See example.

8. **What’s the output?**
   ```js
   let x=''; outer: for(let j=0;j<3;j++) for(let i=0;i<3;i++) { if(i==1) continue outer; x+=i; } // "000"
   ```
   - **Answer**: Continues outer on i=1.

9. **Omit all expressions in for?**
   - **Answer**: `for (;;) { break condition; }` infinite without break.

---

## Best Practices for Interviews

1. **Use Appropriate Loop**:
   - For: Known count.
   ```js
   for (let i=0; i<len; i++) ...
   ```

2. **Manual Increment**:
   - In while/do-while.
   ```js
   while (cond) { ... i++; }
   ```

3. **Break/Continue Wisely**:
   - With labels in nested.
   ```js
   outer: for (...) { if (...) break outer; }
   ```

4. **Avoid Infinite**:
   - Always update counter.

5. **Scope with let**:
   - Prevent leaks.

---

## Common Pitfalls

1. **Infinite Loops**:
   - Forgot `i++`.
   ```js
   while (i<10) {} // Crash
   ```

2. **Off-by-One**:
   - `<` vs `<=`.
   ```js
   for (i=0; i<5; i++) // 0-4
   ```

3. **Scope Issues**:
   - var redeclares outer.
   ```js
   var i=5; for(var i=0;...) // i=10 after
   ```

4. **No Break in Switch**:
   - Fall-through unintended.

5. **Continue Skips Update**:
   - If update after continue.
   ```js
   for(...) { if(...) continue; i++; } // OK
   ```

---

## Quick Reference Table

| **Loop** | **Syntax** | **Example** | **Key Notes** |
| --- | --- | --- | --- |
| For | `for (init; cond; update) { ... }` | `for (i=0; i<5; i++)` | Fixed iterations. |
| While | `while (cond) { ... }` | `while (i<5) { i++; }` | Check before. |
| Do While | `do { ... } while (cond);` | `do { i++; } while (i<5);` | At least once. |
| Break | `break;` or `break label;` | `if (i==3) break;` | Exit loop/switch. |
| Continue | `continue;` or `continue label;` | `if (i==3) continue;` | Skip iteration. |
