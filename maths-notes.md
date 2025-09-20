# JavaScript Numbers
**Numbers** in JavaScript represent numeric values, including integers, floating-point numbers, and special values like `NaN`, `Infinity`, and `-Infinity`. JavaScript uses a single `Number` type (64-bit floating-point, IEEE 754) for all numeric operations, with additional support for `BigInt` for large integers. The `Number` object and related methods provide tools for manipulation, formatting, and validation.

**Why Numbers Matter**:
- Essential for calculations (e.g., financial apps, games).
- Common in interviews for arithmetic, precision, and type-checking problems.
- Impacts correctness due to floating-point precision issues.
- Supports validation and formatting for user-facing applications.

**Key Concepts**:
- **Types**: `Number` (integers, floats, `NaN`, `Infinity`), `BigInt`.
- **Operations**: Arithmetic, comparison, bitwise.
- **Methods**: `Number` object methods (e.g., `toFixed`), `Math` methods.
- **Special Values**: `NaN`, `Infinity`, `-Infinity`.
- **Edge Cases**: Precision errors, type coercion, overflow.

---

## 1. Number Types in JavaScript

### Number
- Represents integers and floating-point numbers (64-bit IEEE 754).
- Includes special values: `NaN`, `Infinity`, `-Infinity`.

**Code Example**:
```js
let integer = 42;
let float = 3.14;
let nan = NaN;
let inf = Infinity;

console.log(typeof integer); // number
console.log(typeof float); // number
console.log(typeof nan); // number
console.log(typeof inf); // number
```

**Dry Run**:
1. `integer = 42`: Integer → `typeof` returns `"number"`.
2. `float = 3.14`: Float → `"number"`.
3. `nan = NaN`: Special number → `"number"`.
4. `inf = Infinity`: Special number → `"number"`.

**Output**: `number`, `number`, `number`, `number`.

### BigInt
- Represents integers with arbitrary precision (no size limit).
- Created with `n` suffix or `BigInt()`.

**Code Example**:
```js
let bigInt = 12345678901234567890n;
let bigInt2 = BigInt("12345678901234567890");
console.log(typeof bigInt); // bigint
console.log(bigInt + bigInt2); // 24691357802469135780n
```

**Dry Run**:
1. `bigInt`: `12345678901234567890n` → `typeof` returns `"bigint"`.
2. `bigInt2`: Converts string to `BigInt`.
3. `bigInt + bigInt2`: Adds `BigInt` values → `24691357802469135780n`.

**Output**: `bigint`, `24691357802469135780n`.

**Important Points**:
- **Number**: Limited precision (~15-17 decimal digits).
- **BigInt**: No precision loss, but no decimals; requires `n` or `BigInt()`.
- **Edge Case**: Mixing `Number` and `BigInt` throws `TypeError`.

**Tips**:
- Use `Number` for most calculations; `BigInt` for large integers (e.g., cryptography).
- Check `typeof` to distinguish: `"number"` vs `"bigint"`.

---

## 2. Number Operations

### Arithmetic
- `+`, `-`, `*`, `/`, `%`, `**` (exponentiation).

**Code Example**:
```js
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** 2); // 100
```

**Output**: `13`, `7`, `30`, `3.333...`, `1`, `100`.

### Comparison
- `==`, `===`, `<`, `>`, `<=`, `>=`.

**Code Example**:
```js
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 > 3); // true
```

**Output**: `true`, `false`, `true`.

### Bitwise
- `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`.

**Code Example**:
```js
let x = 5; // 0101
let y = 3; // 0011
console.log(x & y); // 1 (0001)
console.log(x | y); // 7 (0111)
```

**Output**: `1`, `7`.

**Important Points**:
- **Precision**: Floating-point errors (e.g., `0.1 + 0.2 ≠ 0.3`).
- **Type Coercion**: Loose equality (`==`) converts types.
- **BigInt**: Use `BigInt` for bitwise on large numbers.

**Tips**:
- Use `===` to avoid coercion surprises.
- Scale and round for floating-point issues.

---

## 3. Number Methods and Formatting

### Number Object Methods
- **`toFixed(n)`**: Formats to `n` decimal places (returns string).
- **`toPrecision(n)`**: Formats to `n` significant digits (returns string).
- **`toString(base)`**: Converts to string in given base (e.g., 2 for binary).

**Code Example**:
```js
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
console.log(num.toPrecision(3)); // "3.14"
console.log((10).toString(2)); // "1010"
```

**Dry Run**:
1. `toFixed(2)`: Rounds to 2 decimals → `"3.14"`.
2. `toPrecision(3)`: 3 significant digits → `"3.14"`.
3. `toString(2)`: Converts `10` to binary → `"1010"`.

**Output**: `"3.14"`, `"3.14"`, `"1010"`.

### Parsing Methods
- **`parseInt(str, base)`**: Parses integer from string.
- **`parseFloat(str)`**: Parses float from string.
- **`Number(str)`**: Converts to number.

**Code Example**:
```js
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45
console.log(Number("123.45")); // 123.45
```

**Output**: `123`, `123.45`, `123.45`.

**Important Points**:
- **toFixed/toPrecision**: Return strings, not numbers.
- **parseInt**: Ignores decimals; specify base for non-decimal (e.g., `parseInt("ff", 16)`).
- **Edge Case**: Invalid strings return `NaN`.

**Tips**:
- Use `parseFloat` or `Number` for decimals; `parseInt` for integers.
- Validate inputs before parsing.

---

## 4. Special Values

### NaN
- Represents "Not a Number" (e.g., invalid math operations).

**Code Example**:
```js
console.log(0 / 0); // NaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc")); // false
```

**Output**: `NaN`, `true`, `false`.

### Infinity/-Infinity
- Represents values beyond number limits.

**Code Example**:
```js
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(isFinite(1000)); // true
console.log(isFinite(Infinity)); // false
```

**Output**: `Infinity`, `-Infinity`, `true`, `false`.

**Important Points**:
- **NaN**: `typeof NaN` is `"number"`; use `Number.isNaN()` for checks.
- **Infinity**: Results from overflow or division by zero.
- **Edge Case**: `NaN` is not equal to itself (`NaN !== NaN`).

**Tips**:
- Use `Number.isNaN()` over `isNaN()` for strict checks.
- Check `isFinite()` for valid numbers.

---

## 5. Floating-Point Precision Issues

### Problem
- JavaScript’s 64-bit floating-point (IEEE 754) causes precision errors.

**Code Example**:
```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2)); // "0.30"
```

**Dry Run**:
1. `0.1 + 0.2`: IEEE 754 error → `0.30000000000000004`.
2. `toFixed(2)`: Rounds to `"0.30"`.

**Output**: `0.30000000000000004`, `"0.30"`.

**Workaround**:
- Scale and round: `(0.1 * 100 + 0.2 * 100) / 100`.
- Use libraries like `decimal.js` for high precision.

**Code Example (Workaround)**:
```js
console.log(Math.round((0.1 + 0.2) * 100) / 100); // 0.3
```

**Output**: `0.3`.

**Tips**:
- Explain precision issues in interviews (IEEE 754).
- Use `toFixed` for display, not calculations.

---

## 6. Practical Use Cases

### Number Validation
**Code Example**:
```js
function isValidNumber(input) {
  return typeof input === "number" && !Number.isNaN(input) && isFinite(input);
}
console.log(isValidNumber(42)); // true
console.log(isValidNumber(NaN)); // false
console.log(isValidNumber("42")); // false
```

**Output**: `true`, `false`, `false`.

### Financial Calculations
**Code Example**:
```js
function calculateTotal(prices) {
  return Number(prices.reduce((sum, p) => sum + p, 0).toFixed(2));
}
console.log(calculateTotal([10.99, 5.49])); // 16.48
```

**Output**: `16.48`.

### Random Number Generation
**Code Example**:
```js
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // e.g., 7
```

**Output**: Random integer (e.g., `7`).

**Tips**:
- Validate inputs for calculations.
- Use `toFixed` for currency formatting.
- Combine with `Math` for advanced operations.

---

## 7. Error Handling with Numbers
- Handle invalid inputs and special values.

**Code Example**:
```js
function safeDivide(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") throw new TypeError("Invalid number");
    if (b === 0) throw new Error("Division by zero");
    if (!isFinite(a) || !isFinite(b)) throw new Error("Non-finite number");
    return a / b;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // Division by zero, null
console.log(safeDivide("10", 2)); // Invalid number, null
```

**Output**: `5`, `Division by zero`, `null`, `Invalid number`, `null`.

**Tips**:
- Use `typeof`, `Number.isNaN()`, `isFinite()` for validation.
- Catch errors for user inputs or external data.

---

## 8. Interview Questions and Answers

### Beginner-Level
1. **What are the types of numbers in JavaScript?**
   - **Answer**: `Number` (integers, floats, `NaN`, `Infinity`) and `BigInt` (arbitrary-precision integers).
   - **Code**:
     ```js
     console.log(typeof 42, typeof 123n); // number, bigint
     ```
   - **Tip**: Mention `BigInt` for large integers.

2. **How do you check if a value is `NaN`?**
   - **Answer**: Use `Number.isNaN()` for strict checks.
   - **Code**:
     ```js
     console.log(Number.isNaN(NaN), Number.isNaN("abc")); // true, false
     ```
   - **Tip**: Contrast with `isNaN()` (coerces types).

3. **What’s the difference between `parseInt` and `parseFloat`?**
   - **Answer**: `parseInt` returns integer; `parseFloat` returns float.
   - **Code**:
     ```js
     console.log(parseInt("123.45"), parseFloat("123.45")); // 123, 123.45
     ```
   - **Tip**: Mention base parameter for `parseInt`.

### Intermediate-Level
4. **Why does `0.1 + 0.2` not equal `0.3`?**
   - **Answer**: Floating-point precision (IEEE 754) causes errors.
   - **Code**:
     ```js
     console.log(0.1 + 0.2); // 0.30000000000000004
     console.log(Math.round((0.1 + 0.2) * 100) / 100); // 0.3
     ```
   - **Tip**: Suggest scaling workaround.

5. **What’s the output?**
   - **Code**:
     ```js
     console.log(NaN === NaN); // false
     console.log(Number.isNaN(NaN)); // true
     ```
   - **Answer**: `NaN` is not equal to itself; use `Number.isNaN()`.
   - **Tip**: Explain `NaN` uniqueness.

6. **How do you format a number to 2 decimal places?**
   - **Answer**: Use `toFixed(2)` (returns string).
   - **Code**:
     ```js
     console.log((3.14159).toFixed(2)); // "3.14"
     ```
   - **Tip**: Parse back with `Number` for calculations.

### Advanced-Level
7. **How do you handle large integers in JavaScript?**
   - **Answer**: Use `BigInt` for arbitrary precision.
   - **Code**:
     ```js
     console.log(12345678901234567890n + 1n); // 12345678901234567891n
     ```
   - **Tip**: Mention `TypeError` when mixing `Number` and `BigInt`.

8. **What’s the output?**
   - **Code**:
     ```js
     console.log((0.1 + 0.2).toFixed(2) === "0.30"); // true
     console.log(0.1 + 0.2 === 0.3); // false
     ```
   - **Answer**: `toFixed` fixes display; direct comparison fails due to precision.
   - **Tip**: Explain IEEE 754.

9. **How do you validate a number input?**
   - **Answer**: Check `typeof`, `Number.isNaN()`, `isFinite()`.
   - **Code**:
     ```js
     function isValidNumber(x) {
       return typeof x === "number" && !Number.isNaN(x) && isFinite(x);
     }
     console.log(isValidNumber(42), isValidNumber(NaN)); // true, false
     ```
   - **Tip**: Show robust validation.

---

## Small Tricks and Tips for Interviews
1. **NaN Check**:
   - Say: “I use `Number.isNaN()` for strict `NaN` checks.”
   - **Why**: Avoids coercion issues.
   - **Code**: `Number.isNaN(NaN)`.

2. **Precision Workaround**:
   - Say: “I scale and round for floating-point accuracy.”
   - **Why**: Shows practical problem-solving.
   - **Code**: `Math.round((0.1 + 0.2) * 100) / 100`.

3. **BigInt Clarity**:
   - Say: “I use `BigInt` for large integers to avoid precision loss.”
   - **Why**: Highlights modern JS knowledge.
   - **Code**: `123n + 1n`.

4. **Interview Analogy**:
   - “Numbers in JS are like a calculator with quirks: great for math but watch for precision.”
   - **Why**: Simplifies for interviewers.

5. **Debugging**:
   - Log with `typeof` and value: `console.log(typeof x, x)`.
   - **Why**: Clarifies type issues.

---

## Tricky Questions to Watch Out For
1. **What’s the output?**
   ```js
   console.log(0.1 + 0.2); // 0.30000000000000004
   ```
   - **Answer**: Floating-point error.
   - **Trick**: Suggest scaling.

2. **What’s the output?**
   ```js
   console.log(NaN === NaN); // false
   ```
   - **Answer**: `NaN` is unique; use `Number.isNaN()`.
   - **Trick**: Explain `NaN` behavior.

3. **What’s the output?**
   ```js
   console.log(9999999999999999); // 10000000000000000
   ```
   - **Answer**: Precision loss for large integers.
   - **Trick**: Suggest `BigInt`.

