# JavaScript Data Types

**JavaScript Data Types** define the kind of data a variable can hold, influencing how it’s stored, manipulated, and compared. JavaScript is **dynamically typed**, allowing variables to change types at runtime without explicit declaration. Data types are split into:

- **Primitive Types**: Simple, immutable values (passed by value).
- **Reference Types**: Complex, mutable objects (passed by reference).

**Why Data Types Matter**:
- Determine behavior in operations (e.g., `1 + "2" = "12"` due to coercion).
- Affect performance (primitives are lightweight; references are heavier).
- Common in interviews for type checking, coercion, and memory management questions.

### Key Characteristics
- **Primitives**: Immutable, copied by value, include String, Number, Boolean, Null, Undefined, Symbol, BigInt.
- **Reference Types**: Mutable, referenced by memory location, primarily Objects (including arrays, functions).
- **Dynamic Typing**: Types inferred at runtime, enabling flexibility but requiring careful type handling.
- **Type Coercion**: Automatic or manual type conversion during operations.

---

## Key Concepts
- **Use Cases**: Store data (e.g., user info as objects), validate inputs, perform calculations.
- **Type Checking**: Use `typeof`, `instanceof`, `Array.isArray()` to verify types.
- **Type Conversion**: Implicit (automatic) or explicit (manual) conversion affects code behavior.
- **Edge Cases**: `typeof null`, coercion surprises, reference sharing.
- **Best Practices**: Use `===`, validate types, avoid unintended mutations.

---

Below is a detailed breakdown of data types, type checking, and type conversion, with examples, outputs, and interview insights.

### 1. Primitive Types

Primitives are simple, immutable values stored directly in memory and copied by value. JavaScript has seven primitives.

#### 1.1 String
- **Definition**: Text or character sequences (e.g., `"hello"`, `'world'`).
- **Use Case**: Names, messages, JSON data.
- **Key Points**:
  - Enclosed in `'`, `"`, or ``` (template literals).
  - Immutable: Can’t modify characters directly.
  - Methods: `length`, `toUpperCase()`, `slice()`, `includes()`.

**Example**:
```js
let str = "Hello";
let template = `Hi, ${str}!`;
console.log(str.length, str.toUpperCase(), template);
// Output: 5 HELLO Hi, Hello!
```

**Dry Run**:
1. `str = "Hello"`: Stores string.
2. `template`: Interpolates `str` → `"Hi, Hello!"`.
3. `str.length`: Counts characters → `5`.
4. `str.toUpperCase()`: Returns `"HELLO"`.
5. `template`: Prints `"Hi, Hello!"`.

#### 1.2 Number
- **Definition**: Integers or floating-point numbers (e.g., `42`, `3.14`).
- **Use Case**: Calculations, counters.
- **Key Points**:
  - Includes `NaN`, `Infinity`, `-Infinity`.
  - Methods: `toFixed()`, `parseInt()`, `parseFloat()`.

**Example**:
```js
let num = 42;
let price = 19.99;
console.log(num + price, price.toFixed(1), 1 / 0, "abc" * 1);
// Output: 61.99 19.9 Infinity NaN
```

**Dry Run**:
1. `num + price`: `42 + 19.99 = 61.99`.
2. `price.toFixed(1)`: Rounds `19.99` to `19.9`.
3. `1 / 0`: Results in `Infinity`.
4. `"abc" * 1`: Invalid operation → `NaN`.

#### 1.3 Boolean
- **Definition**: `true` or `false`.
- **Use Case**: Conditionals, toggles.
- **Key Points**:
  - Truthy/falsy values coerce in logical operations.
  - Falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`.

**Example**:
```js
let isActive = true;
console.log(isActive, !!0, !!"hello");
// Output: true false true
```

**Dry Run**:
1. `isActive`: Prints `true`.
2. `!!0`: `0` is falsy → `false`.
3. `!!"hello"`: Non-empty string is truthy → `true`.

#### 1.4 Null
- **Definition**: Intentional absence of value.
- **Use Case**: Reset variables, indicate no data.
- **Key Points**:
  - `typeof null` returns `"object"` (bug).
  - Explicitly set by developers.

**Example**:
```js
let user = null;
console.log(user, typeof user);
// Output: null object
```

**Dry Run**:
1. `user = null`: Stores `null`.
2. `typeof user`: Returns `"object"`.

#### 1.5 Undefined
- **Definition**: Uninitialized or undeclared variable.
- **Use Case**: Default for unassigned variables.
- **Key Points**:
  - `typeof undefined` → `"undefined"`.
  - Common in hoisted `var` or missing object properties.

**Example**:
```js
let x;
console.log(x, typeof x);
// Output: undefined undefined
```

**Dry Run**:
1. `x`: Unassigned → `undefined`.
2. `typeof x`: Returns `"undefined"`.

#### 1.6 Symbol
- **Definition**: Unique, immutable identifiers (ES6).
- **Use Case**: Unique object keys, private properties.
- **Key Points**:
  - Created with `Symbol(description)`.
  - Always unique, even with same description.

**Example**:
```js
let id1 = Symbol("id");
let id2 = Symbol("id");
let obj = { [id1]: "unique" };
console.log(id1 === id2, obj[id1]);
// Output: false unique
```

**Dry Run**:
1. `id1`, `id2`: Different symbols despite same description.
2. `id1 === id2`: `false` (unique).
3. `obj[id1]`: Accesses `"unique"`.

#### 1.7 BigInt
- **Definition**: Integers beyond `Number.MAX_SAFE_INTEGER` (2^53 - 1).
- **Use Case**: Large numbers (e.g., financial calculations).
- **Key Points**:
  - Use `n` suffix or `BigInt()`.
  - No mixing with Number without conversion.

**Example**:
```js
let big = 12345678901234567890n;
console.log(big + 1n);
// Output: 12345678901234567891n
```

**Dry Run**:
1. `big`: Stores BigInt.
2. `big + 1n`: Adds `1n` → `12345678901234567891n`.

**Edge Cases**:
- **Null Bug**: `typeof null` → `"object"`.
- **Number Pitfalls**: `NaN`, `Infinity` are numbers.
- **Immutable Primitives**: `str[0] = "x"` doesn’t change string.

**Interview Tip**:
- List all primitives confidently.
- Explain `typeof null` bug and use `=== null` for checks.

### 2. Reference Types

Reference types are mutable, stored as memory references, and passed by reference.

#### 2.1 Objects
- **Definition**: Key-value pairs (e.g., `{ name: "Alice" }`).
- **Use Case**: Structured data, JSON.
- **Key Points**:
  - Mutable: Change properties directly.
  - Methods: `Object.keys()`, `Object.values()`, `Object.assign()`.

**Example**:
```js
let person = { name: "Alice", age: 25 };
person.age = 26;
console.log(person.name, Object.keys(person));
// Output: Alice ["name", "age"]
```

**Dry Run**:
1. `person`: Stores object.
2. `person.age = 26`: Updates `age`.
3. `person.name`: Accesses `"Alice"`.
4. `Object.keys(person)`: Returns `["name", "age"]`.

#### 2.2 Arrays
- **Definition**: Ordered lists with numeric keys (e.g., `[1, 2]`).
- **Use Case**: Lists, collections.
- **Key Points**:
  - Objects with numeric indices.
  - Methods: `push()`, `map()`, `filter()`.

**Example**:
```js
let arr = [1, 2];
arr.push(3);
console.log(arr, arr.map(x => x * 2));
// Output: [1, 2, 3] [2, 4, 6]
```

**Dry Run**:
1. `arr`: Stores `[1, 2]`.
2. `arr.push(3)`: Adds `3` → `[1, 2, 3]`.
3. `arr.map(x => x * 2)`: Returns `[2, 4, 6]`.

#### 2.3 Functions
- **Definition**: Callable objects (e.g., `function() {}`).
- **Use Case**: Reusable logic, event handlers.
- **Key Points**:
  - `typeof` returns `"function"`.
  - Can have properties like objects.

**Example**:
```js
function greet() { return "Hello"; }
greet.custom = "data";
console.log(greet(), typeof greet, greet.custom);
// Output: Hello function data
```

**Dry Run**:
1. `greet`: Stores function.
2. `greet()`: Returns `"Hello"`.
3. `typeof greet`: Returns `"function"`.
4. `greet.custom`: Accesses `"data"`.

**Edge Cases**:
- **Reference Sharing**: `let b = a` shares object/array reference.
- **Deep Copy**: Use `JSON.parse(JSON.stringify())` for deep copies (limited).

**Interview Tip**:
- Explain pass-by-reference: “Changes to an object affect all references.”
- Show shallow vs deep copy examples.

### 3. Type Checking with `typeof`

`typeof` returns a string indicating a value’s type, critical for validation.

| **Type** | **Code** | **Output** | **Why** |
| --- | --- | --- | --- |
| String | `typeof "hello"` | `"string"` | Text data. |
| Number | `typeof 42` | `"number"` | Includes `NaN`, `Infinity`. |
| Boolean | `typeof true` | `"boolean"` | True/false values. |
| Null | `typeof null` | `"object"` | Historical bug. |
| Undefined | `typeof undefined` | `"undefined"` | Unassigned variables. |
| Symbol | `typeof Symbol("id")` | `"symbol"` | Unique identifiers. |
| BigInt | `typeof 1n` | `"bigint"` | Large integers. |
| Object | `typeof {}` | `"object"` | Key-value pairs. |
| Array | `typeof []` | `"object"` | Arrays are objects. |
| Function | `typeof (() => {})` | `"function"` | Callable objects. |

**Example**:
```js
let arr = [1, 2];
console.log(typeof arr, Array.isArray(arr), null === null);
// Output: object true true
```

**Dry Run**:
1. `typeof arr`: Array is object → `"object"`.
2. `Array.isArray(arr)`: Confirms array → `true`.
3. `null === null`: Confirms `null` → `true`.

**Edge Cases**:
- `typeof null` → `"object"`: Use `=== null`.
- `typeof []` → `"object"`: Use `Array.isArray()`.
- `typeof NaN` → `"number"`: Use `Number.isNaN()`.

**Interview Tip**:
- Combine `typeof` with `Array.isArray()` and `=== null` for robust checks.
- Explain `typeof null` bug confidently.

### 4. Type Conversion

#### 4.1 Implicit Coercion
- JavaScript automatically converts types during operations.

**Example**:
```js
console.log(1 + "2", 1 - "2", [] == false);
// Output: "12" -1 true
```

**Dry Run**:
1. `1 + "2"`: `1` → `"1"`, concatenates → `"12"`.
2. `1 - "2"`: `"2"` → `2`, subtracts → `-1`.
3. `[] == false`: `[]` → `""` → `0`, `false` → `0`, equals `true`.

#### 4.2 Explicit Coercion
- Manual conversion using functions/methods.

| **Method** | **Code** | **Output** | **Why** |
| --- | --- | --- | --- |
| `Number()` | `Number("123")` | `123` | String to number. |
| `parseInt()` | `parseInt("123.45")` | `123` | Parses integer. |
| `parseFloat()` | `parseFloat("123.45")` | `123.45` | Parses float. |
| `String()` | `String(123)` | `"123"` | Number to string. |
| `toString()` | `(123).toString()` | `"123"` | Number to string (not for `null`). |
| `Boolean()` | `Boolean("hello")` | `true` | Converts to boolean. |

**Example**:
```js
let str = "123.45";
console.log(Number(str), parseInt(str), parseFloat(str), String(123), !!0);
// Output: 123.45 123 123.45 "123" false
```

**Dry Run**:
1. `Number(str)`: `"123.45"` → `123.45`.
2. `parseInt(str)`: Parses `123`.
3. `parseFloat(str)`: Parses `123.45`.
4. `String(123)`: `123` → `"123"`.
5. `!!0`: Falsy → `false`.

**Edge Cases**:
- `Number("abc")` → `NaN`.
- `parseInt("123px")` → `123`.
- `null.toString()` → Error.

**Interview Tip**:
- Use `parseInt(str, 10)` for clarity.
- Check `NaN` with `Number.isNaN()`.

### 5. Common Interview Questions and Outputs

#### Beginner-Level
1. **What’s the difference between `null` and `undefined`?**
   - **Answer**: `null` is intentional absence; `undefined` is unassigned.
   - **Code**: `console.log(null == undefined); // true`
   - **Tip**: Mention `typeof null` bug.

2. **What are falsy values?**
   - **Answer**: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
   - **Code**: `console.log(!!0); // false`
   - **Tip**: List all falsy values.

3. **What’s the output?**
   ```js
   console.log(1 + "2"); // "12"
   ```
   - **Answer**: String concatenation.
   - **Tip**: Explain `+` coercion.

#### Intermediate-Level
4. **Why does `[] == false` return `true`?**
   - **Answer**: `[]` coerces to `""` → `0`, `false` → `0`.
   - **Code**: `console.log([] == false); // true`
   - **Tip**: Recommend `===`.

5. **How do you copy an array without affecting the original?**
   - **Answer**: Use `[...arr]` or `arr.slice()`.
   - **Code**: `let copy = [...[1, 2]]; copy.push(3); // Original unchanged`
   - **Tip**: Mention deep copy limitations.

6. **What’s the output?**
   ```js
   let obj = { x: 1 };
   let copy = obj;
   copy.x = 2;
   console.log(obj.x); // 2
   ```
   - **Answer**: Reference sharing.
   - **Tip**: Suggest spread operator.

#### Advanced-Level
7. **Why does `typeof null` return `"object"`?**
   - **Answer**: Historical bug, kept for compatibility.
   - **Tip**: Use `=== null`.

8. **What’s the output?**
   ```js
   console.log([1] + [2]); // "1,2"
   ```
   - **Answer**: Arrays coerce to strings via `toString()`.
   - **Tip**: Explain array coercion.

9. **How do you handle BigInt in operations?**
   - **Answer**: Convert Number to BigInt with `BigInt()`.
   - **Code**: `console.log(BigInt(1) + 1n); // 2n`
   - **Tip**: Highlight type safety.

---

## Best Practices for Interviews

1. **Use `===` for Comparisons**:
   - Avoids coercion surprises.
   ```js
   console.log(1 === "1"); // false
   ```

2. **Validate Types**:
   - Use `typeof`, `Array.isArray()`, `=== null`.
   ```js
   if (Array.isArray(arr)) console.log("Array");
   ```

3. **Handle Coercion**:
   - Explicitly convert with `Number()`, `String()`.
   ```js
   let num = Number("123"); // 123
   ```

4. **Deep Copy Objects**:
   - Use spread for shallow, `JSON.parse(JSON.stringify())` for deep.
   ```js
   let copy = JSON.parse(JSON.stringify({ x: 1 }));
   ```

5. **Explain Memory**:
   - Primitives: Copied by value (stack).
   - References: Shared by reference (heap).

---

## Common Pitfalls

1. **Type Coercion**:
   - `1 + "2" = "12"`, but `1 - "2" = -1`.
   ```js
   console.log(1 + "2" - 3); // "12" - 3 = 9
   ```

2. **Null Bug**:
   - `typeof null` → `"object"`.
   ```js
   let x = null;
   if (x === null) console.log("Null"); // Correct check
   ```

3. **Reference Sharing**:
   - Modifying a copied reference affects the original.
   ```js
   let arr = [1];
   let b = arr;
   b.push(2); // arr = [1, 2]
   ```

4. **Sparse Arrays**:
   - `new Array(3)` creates empty slots.
   ```js
   console.log(new Array(3)[0]); // undefined
   ```

5. **NaN Handling**:
   - Use `Number.isNaN()` for safety.
   ```js
   console.log(Number.isNaN(Number("abc"))); // true
   ```

---

## Quick Reference Table

| **Type** | **Category** | **Example** | **typeof** | **Key Notes** |
| --- | --- | --- | --- | --- |
| String | Primitive | `"hello"` | `"string"` | Immutable, template literals. |
| Number | Primitive | `42`, `NaN` | `"number"` | Includes `Infinity`. |
| Boolean | Primitive | `true` | `"boolean"` | Truthy/falsy coercion. |
| Null | Primitive | `null` | `"object"` | Intentional absence. |
| Undefined | Primitive | `undefined` | `"undefined"` | Unassigned variables. |
| Symbol | Primitive | `Symbol("id")` | `"symbol"` | Unique keys. |
| BigInt | Primitive | `123n` | `"bigint"` | Large integers. |
| Object | Reference | `{ x: 1 }` | `"object"` | Mutable, key-value pairs. |
| Array | Reference | `[1, 2]` | `"object"` | Ordered lists. |
| Function | Reference | `() => {}` | `"function"` | Callable objects. |

| **Conversion** | **Method** | **Example** | **Output** |
| --- | --- | --- | --- |
| To Number | `Number()` | `Number("123")` | `123` |
| To Integer | `parseInt()` | `parseInt("123.45")` | `123` |
| To Float | `parseFloat()` | `parseFloat("123.45")` | `123.45` |
| To String | `String()` | `String(123)` | `"123"` |
| To Boolean | `Boolean()` | `Boolean("hello")` | `true` |
