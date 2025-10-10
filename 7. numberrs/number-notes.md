# JavaScript Numbers and BigInt

JavaScript has two numeric data types: **Number** and **BigInt**. Numbers are used for most arithmetic operations, while BigInt handles integers too large for Number. Below, I’ll explain both types, their properties, methods, and bitwise operations with clear, minimal code examples, better variable names, structured comments, and practical tips for learning and interviews.

---

## 1. JavaScript Number


### 👉 **JavaScript has only one number type**

Unlike C++, Java, or Python where you have `int`, `float`, `double`, `long`, etc.,
👉 In JavaScript, **all numbers are represented internally in the same way**:
**64-bit double precision floating-point format (IEEE 754 standard).**

So whether you write:

```js
let x = 5;        // integer
let y = 5.5;      // decimal
let z = 5e3;      // exponential (5000)
```

➡️ All of these are stored the same way in memory: as 64-bit floating-point numbers.

---

### 👉  **How numbers are stored (64-bit breakdown)**

A 64-bit floating-point number is divided into 3 parts:

* **Bit 63 (1 bit)** → **Sign bit**

  * `0` → positive number
  * `1` → negative number

* **Bits 52–62 (11 bits)** → **Exponent**

  * Determines the "scale" or magnitude of the number (like scientific notation).

* **Bits 0–51 (52 bits)** → **Fraction (Mantissa/Significand)**

  * Stores the actual digits (the precision part).

So internally a number looks like:

```
[ Sign (1 bit) ] [ Exponent (11 bits) ] [ Fraction (52 bits) ]
```

---

### 👉  **Implications**

* **Precision**:
  Since there are **52 bits for the fraction**, JavaScript can precisely represent integers up to
  `2^53 - 1` (≈ **9,007,199,254,740,991**) without losing accuracy.
  → That’s why we have `Number.MAX_SAFE_INTEGER`.

* **Decimals**:
  Some decimals (like `0.1 + 0.2`) can’t be stored precisely, because not all decimal fractions can be represented exactly in binary.

  ```js
  console.log(0.1 + 0.2); // 0.30000000000000004
  ```

* **Range**:
  Because of the exponent bits, JavaScript numbers can represent values from
  about `5e-324` (tiny) up to `1.79e308` (huge).

---

✅ **In short**:
JavaScript doesn’t care whether you write integers or decimals. Internally, everything is stored as a **64-bit IEEE 754 double**, with

* 1 bit → sign
* 11 bits → exponent
* 52 bits → fraction (precision part).

---

JavaScript’s **Number** type represents both integers and floating-point numbers, stored as 64-bit double-precision floating-point values (IEEE 754 standard). This format includes:
- **Fraction** (52 bits): The significant digits.
- **Exponent** (11 bits): The scale of the number.
- **Sign** (1 bit): Positive or negative.

**Key Characteristics**:
- Numbers can be integers (e.g., `42`), decimals (e.g., `3.14`), or special values (`NaN`, `Infinity`, `-Infinity`).
- Integers are accurate up to 15 digits; beyond that, precision is lost.
- The `+` operator performs addition for numbers but concatenation for strings.

**Why It Matters**:
- Essential for calculations, counters, and data processing.
- Common source of bugs due to floating-point precision and type coercion.
- Frequently tested in interviews (e.g., coercion, precision, NaN handling).

---

### 1.1 Number Basics

Numbers can be written with or without decimals, or in scientific notation.

```js
// Basic number declarations
const pi = 3.14;          // Decimal number
const count = 42;         // Integer
const largeNum = 123e5;   // Scientific: 12300000
const smallNum = 123e-5;  // Scientific: 0.00123

// Log values
console.log(pi, count, largeNum, smallNum);
// Output: 3.14 42 12300000 0.00123
```

**Dry Run**:
1. `pi`: Stores 3.14 (floating-point).
2. `count`: Stores 42 (integer, still floating-point internally).
3. `largeNum`: 123 * 10^5 = 12300000.
4. `smallNum`: 123 * 10^-5 = 0.00123.
5. Log outputs all values.

**Tip**: Use scientific notation for very large/small numbers to improve readability.

---

### 1.2 Integer Precision

Integers are accurate up to 15 digits. Beyond that, JavaScript rounds due to 64-bit limitations.

```js
// Integer precision examples
const safeInt = 999999999999999;   // 15 digits, accurate
const unsafeInt = 9999999999999999; // 16 digits, rounded

// Log values
console.log(safeInt, unsafeInt);
// Output: 999999999999999 10000000000000000
```

**Dry Run**:
1. `safeInt`: Within safe range, exact.
2. `unsafeInt`: Exceeds 15 digits, rounds to 10000000000000000.
3. Log shows precision loss.

**Tip**: For large integers, use BigInt (covered later) to avoid precision issues.

---

### 1.3 Floating-Point Precision

Floating-point arithmetic can lead to small inaccuracies due to the IEEE 754 format.

```js
// Floating-point issue
const sum = 0.2 + 0.1;

// Fix with scaling
const fixedSum = (0.2 * 10 + 0.1 * 10) / 10;

// Log results
console.log(sum, fixedSum);
// Output: 0.30000000000000004 0.3
```

**Dry Run**:
1. `sum`: 0.3 expected, but floating-point math adds tiny error.
2. `fixedSum`: Scales by 10, adds integers (2 + 1), divides back → exact 0.3.
3. Log shows difference.

**Tip**: For precise decimal calculations (e.g., financial apps), scale numbers or use libraries like `decimal.js`.

---

### 1.4 Number and String Coercion

The `+` operator adds numbers but concatenates if any operand is a string.

```js
// Number operations
const num1 = 10;
const num2 = 20;
const numSum = num1 + num2;

// String coercion
const str1 = "10";
const str2 = "20";
const strConcat = str1 + str2;
const mixedConcat = num1 + str2;

// Log results
console.log(numSum, strConcat, mixedConcat);
// Output: 30 "1020" "1020"
```

**Dry Run**:
1. `numSum`: 10 + 20 = 30 (both numbers).
2. `strConcat`: "10" + "20" = "1020" (string concatenation).
3. `mixedConcat`: 10 coerced to "10", then "10" + "20" = "1020".
4. Log outputs results.

**Tip**: Use `Number()` or `parseInt()` to avoid unwanted concatenation.

---

### 1.5 Numeric Strings

JavaScript converts numeric strings to numbers for most operations (except `+`).

```js
// Numeric string operations
const strNum1 = "100";
const strNum2 = "10";

// Arithmetic operations
const divide = strNum1 / strNum2;
const multiply = strNum1 * strNum2;
const subtract = strNum1 - strNum2;
const concat = strNum1 + strNum2;

// Log results
console.log(divide, multiply, subtract, concat);
// Output: 10 1000 90 "10010"
```

**Dry Run**:
1. `divide`: "100" → 100, "10" → 10, 100 / 10 = 10.
2. `multiply`: 100 * 10 = 1000.
3. `subtract`: 100 - 10 = 90.
4. `concat`: "100" + "10" = "10010" (string concatenation).
5. Log outputs results.

**Tip**: Always validate inputs to ensure correct type before operations.

---

### 1.6 NaN (Not a Number)

`NaN` indicates an invalid number result. It’s of type "number" but propagates in operations.

```js
// Invalid operation
const invalid = 100 / "Apple";

// NaN in operations
const nanPlus = NaN + 5;
const nanConcat = NaN + "5";

// Check NaN
const isInvalid = Number.isNaN(invalid);

// Log results
console.log(invalid, nanPlus, nanConcat, isInvalid, typeof NaN);
// Output: NaN NaN "NaN5" true "number"
```

**Dry Run**:
1. `invalid`: "Apple" isn’t numeric → NaN.
2. `nanPlus`: NaN + 5 = NaN.
3. `nanConcat`: NaN coerced to "NaN", then "NaN" + "5" = "NaN5".
4. `isInvalid`: Checks if invalid is NaN → true.
5. `typeof NaN`: Returns "number".

**Tip**: Use `Number.isNaN()` for reliable NaN checks; `NaN === NaN` is false.

---

### 1.7 Infinity

`Infinity` (or `-Infinity`) results from exceeding Number limits or division by zero.

```js
// Infinity examples
const overflow = 1 / 0;
const negOverflow = -1 / 0;
const loopOverflow = (() => {
  let num = 2;
  while (num !== Infinity) num *= num;
  return num;
})();

// Log results
console.log(overflow, negOverflow, loopOverflow, typeof Infinity);
// Output: Infinity -Infinity Infinity "number"
```

**Dry Run**:
1. `overflow`: 1 / 0 = Infinity.
2. `negOverflow`: -1 / 0 = -Infinity.
3. `loopOverflow`: Squares num until it exceeds Number.MAX_VALUE → Infinity.
4. `typeof Infinity`: Returns "number".

**Tip**: Check for Infinity with `Number.isFinite()` to avoid unexpected results.

---

### 1.8 Hexadecimal and Other Bases

Numbers can be written in hexadecimal (base 16) with `0x`. Use `toString(base)` for conversions.

```js
// Hexadecimal
const hexNum = 0xFF; // 255 in decimal

// Convert to different bases
const num = 32;
const binary = num.toString(2);
const octal = num.toString(8);
const hex = num.toString(16);

// Log results
console.log(hexNum, binary, octal, hex);
// Output: 255 "100000" "40" "20"
```

**Dry Run**:
1. `hexNum`: 0xFF = 255 (base 16).
2. `binary`: 32 in base 2 = "100000".
3. `octal`: 32 in base 8 = "40".
4. `hex`: 32 in base 16 = "20".
5. Log outputs results.

**Tip**: Avoid leading zeros (e.g., `07`) as older browsers may interpret as octal.

---

### 1.9 Number as Objects

Numbers are typically primitives, but can be created as objects with `new Number()`. Avoid objects for performance.

```js
// Primitive vs Object
const numPrimitive = 123;
const numObject = new Number(123);

// Equality checks
const looseEqual = numPrimitive == numObject;
const strictEqual = numPrimitive === numObject;

// Log results
console.log(numPrimitive, numObject, looseEqual, strictEqual);
// Output: 123 [Number: 123] true false
```

**Dry Run**:
1. `numPrimitive`: Stores 123 as primitive.
2. `numObject`: Stores 123 as Number object.
3. `looseEqual`: Values equal (123 == 123) → true.
4. `strictEqual`: Different types (number vs object) → false.
5. Log outputs results.

**Tip**: Never use `new Number()`; it’s slower and causes strict equality issues.

---

## 2. Number Methods and Properties

### 2.1 Basic Methods

These methods work on any number (literals, variables, expressions).

```js
// Number methods
const value = 9.656;

// Convert to string
const strValue = value.toString(); // "9.656"
// To string in binary
const binaryStr = value.toString(2); // "1001.101001"

// Exponential notation
const expStr = value.toExponential(2); // "9.66e+0"

// Fixed decimals
const fixedStr = value.toFixed(2); // "9.66"

// Precision length
const precStr = value.toPrecision(4); // "9.656"

// Primitive value
const primValue = value.valueOf(); // 9.656

// Log results
console.log(strValue, binaryStr, expStr, fixedStr, precStr, primValue);
// Output: "9.656" "1001.101001" "9.66e+0" "9.66" "9.656" 9.656
```

**Dry Run**:
1. `toString()`: Converts to string.
2. `toString(2)`: Converts to binary string.
3. `toExponential(2)`: Rounds to 2 decimals in scientific notation.
4. `toFixed(2)`: Rounds to 2 decimals as string.
5. `toPrecision(4)`: Formats to 4 significant digits.
6. `valueOf()`: Returns primitive number.
7. Log outputs results.

**Tip**: Use `toFixed(2)` for currency; `toPrecision()` for specific significant digits.

---

### 2.2 Static Methods

These methods belong to the `Number` object, not instances.

```js
// Static number checks
const intValue = 10;
const floatValue = 10.5;
const invalidValue = 100 / "Apple";

// Checks
const isInt = Number.isInteger(intValue); // true
const isFloatInt = Number.isInteger(floatValue); // false
const isFiniteNum = Number.isFinite(floatValue); // true
const isSafe = Number.isSafeInteger(9007199254740991); // true
const isNanValue = Number.isNaN(invalidValue); // true

// Parse strings
const parsedFloat = Number.parseFloat("10.33"); // 10.33
const parsedInt = Number.parseInt("-10.33", 10); // -10

// Log results
console.log(isInt, isFloatInt, isFiniteNum, isSafe, isNanValue, parsedFloat, parsedInt);
// Output: true false true true true 10.33 -10
```

**Dry Run**:
1. `isInteger`: Checks if intValue is an integer → true.
2. `isInteger(floatValue)`: False, not an integer.
3. `isFinite`: True, not Infinity/NaN.
4. `isSafeInteger`: True, within safe range.
5. `isNaN`: True, invalidValue is NaN.
6. `parseFloat`: Parses "10.33" to 10.33.
7. `parseInt`: Parses "-10.33" to -10.
8. Log outputs results.

**Tip**: Use `Number.parseInt(str, 10)` to ensure decimal parsing; `Number.isNaN()` for reliable NaN checks.

---

### 2.3 Number Properties

Static properties of the `Number` object provide constants.

```js
// Number properties
const epsilon = Number.EPSILON; // Smallest difference > 1
const maxValue = Number.MAX_VALUE; // Largest number
const minValue = Number.MIN_VALUE; // Smallest positive number
const maxSafe = Number.MAX_SAFE_INTEGER; // 9007199254740991
const minSafe = Number.MIN_SAFE_INTEGER; // -9007199254740991
const posInf = Number.POSITIVE_INFINITY; // Infinity
const negInf = Number.NEGATIVE_INFINITY; // -Infinity
const nanConst = Number.NaN; // NaN

// Log results
console.log(epsilon, maxValue, minValue, maxSafe, minSafe, posInf, negInf, nanConst);
// Output: 2.22e-16 1.79e+308 5e-324 9007199254740991 -9007199254740991 Infinity -Infinity NaN
```

**Dry Run**:
1. Assign constants to variables.
2. Log outputs their values.
3. Note: Can’t use on variables (e.g., `num.MAX_VALUE` is undefined).

**Tip**: Use `MAX_SAFE_INTEGER` to check if calculations stay within safe integer limits.

---

## 3. JavaScript BigInt

**BigInt** is a primitive type for integers beyond `Number.MAX_SAFE_INTEGER` (±2^53 - 1). It ensures exact integer precision.

**Key Characteristics**:
- Created with `n` suffix or `BigInt()` constructor.
- Can’t mix with Number in operations without conversion.
- No decimals allowed.

**Why It Matters**:
- Critical for large integers (e.g., financial calculations, IDs).
- Tested in interviews for handling large numbers and type safety.

---

### 3.1 Creating BigInt

```js
// BigInt creation
const largeInt = 9999999999999999n; // Literal
const bigIntFromNum = BigInt("12345678901234567890"); // Constructor

// Log results
console.log(largeInt, bigIntFromNum, typeof largeInt);
// Output: 9999999999999999n 12345678901234567890n "bigint"
```

**Dry Run**:
1. `largeInt`: Stores 9999999999999999 as BigInt.
2. `bigIntFromNum`: Converts string to BigInt.
3. `typeof largeInt`: Returns "bigint".
4. Log outputs values and type.

**Tip**: Use BigInt for numbers exceeding 15 digits to avoid precision loss.

---

### 3.2 BigInt Operations

BigInt supports most arithmetic operators but requires explicit conversion for Number.

```js
// BigInt arithmetic
const big1 = 9007199254740995n;
const big2 = 2n;

// Operations
const bigProduct = big1 * big2;
const bigDivision = Number(big1) / 2; // Convert to Number

// Log results
console.log(bigProduct, bigDivision);
// Output: 18014398509481990n 4503599627370497.5
```

**Dry Run**:
1. `bigProduct`: Multiplies BigInts → exact result.
2. `bigDivision`: Converts big1 to Number, divides → floating-point result.
3. Log outputs results.

**Tip**: Avoid mixing BigInt and Number; convert explicitly to prevent errors.

---

### 3.3 BigInt in Different Bases

BigInt supports hexadecimal, octal, and binary notation.

```js
// BigInt in different bases
const bigHex = 0x20000000000003n; // Hex
const bigOct = 0o400000000000000003n; // Octal
const bigBin = 0b100000000000000000000000000000000000000000000000000011n; // Binary

// Log results
console.log(bigHex, bigOct, bigBin);
// Output: 9007199254740995n 9007199254740995n 9007199254740995n
```

**Dry Run**:
1. All values resolve to the same BigInt (9007199254740995n).
2. Log outputs equivalent values.

**Tip**: Use BigInt for large numbers in any base to maintain precision.

---

## 4. JavaScript Bitwise Operations

Bitwise operations work on 32-bit signed integers, converting JavaScript’s 64-bit numbers temporarily.

**Key Operators**:
- `&` (AND): 1 if both bits are 1.
- `|` (OR): 1 if either bit is 1.
- `^` (XOR): 1 if bits differ.
- `~` (NOT): Inverts all bits.
- `<<` (Left Shift): Shifts bits left, fills with zeros.
- `>>` (Right Shift): Shifts right, preserves sign.
- `>>>` (Unsigned Right Shift): Shifts right, fills with zeros.

**Why It Matters**:
- Used in low-level operations, flags, and performance optimization.
- Common in interviews for understanding binary and bit manipulation.

---

### 4.1 Bitwise Examples

```js
// Bitwise operations on 5 (0101) and 1 (0001)
const num1 = 5;
const num2 = 1;

// Bitwise operations
const andResult = num1 & num2; // 0101 & 0001 = 0001
const orResult = num1 | num2; // 0101 | 0001 = 0101
const xorResult = num1 ^ num2; // 0101 ^ 0001 = 0100
const notResult = ~num1; // ~0101 = 11111111111111111111111111111010 (-6)
const leftShift = num1 << 1; // 0101 << 1 = 1010
const rightShift = num1 >> 1; // 0101 >> 1 = 0010
const unsignedRightShift = num1 >>> 1; // 0101 >>> 1 = 0010

// Log results
console.log(andResult, orResult, xorResult, notResult, leftShift, rightShift, unsignedRightShift);
// Output: 1 5 4 -6 10 2 2
```

**Dry Run**:
1. `andResult`: 0101 & 0001 = 0001 (1).
2. `orResult`: 0101 | 0001 = 0101 (5).
3. `xorResult`: 0101 ^ 0001 = 0100 (4).
4. `notResult`: ~0101 = 11111111111111111111111111111010 (-6, 32-bit signed).
5. `leftShift`: 0101 << 1 = 1010 (10).
6. `rightShift`: 0101 >> 1 = 0010 (2).
7. `unsignedRightShift`: Same as right shift for positive numbers.
8. Log outputs results.

**Tip**: Understand two’s complement for negative numbers; practice binary conversions.

---

### 4.2 Bitwise Assignment Operators

These combine bitwise operations with assignment.

```js
// Bitwise assignment
let value = 10; // 1010

value &= 5; // 1010 & 0101 = 0100 (4)
console.log(value); // 4

value |= 3; // 0100 | 0011 = 0111 (7)
console.log(value); // 7

value ^= 2; // 0111 ^ 0010 = 0101 (5)
console.log(value); // 5

value <<= 1; // 0101 << 1 = 1010 (10)
console.log(value); // 10
```

**Dry Run**:
1. `value &= 5`: 1010 & 0101 = 0100, assigns 4.
2. `value |= 3`: 0100 | 0011 = 0111, assigns 7.
3. `value ^= 2`: 0111 ^ 0010 = 0101, assigns 5.
4. `value <<= 1`: 0101 << 1 = 1010, assigns 10.
5. Log each step’s result.

**Tip**: Use bitwise operators for flag manipulation in performance-critical code.

---

### 4.3 Binary Conversions

Convert between decimal and binary for bitwise understanding.

```js
// Decimal to binary
function toBinary(dec) {
  return (dec >>> 0).toString(2); // Unsigned shift to handle negatives
}

// Binary to decimal
function toDecimal(bin) {
  return parseInt(bin, 2);
}

// Test conversions
const dec = 45; // 00101101
const bin = "101101";
console.log(toBinary(dec), toDecimal(bin));
// Output: "101101" 45
```

**Dry Run**:
1. `toBinary(45)`: 45 = 00101101 (32 + 8 + 4 + 1).
2. `toDecimal("101101")`: Parses 101101 (base 2) = 45.
3. Log outputs results.

**Tip**: Use `>>> 0` in `toBinary` to ensure unsigned 32-bit conversion.

---

## 5. Common Interview Questions

### Beginner-Level
1. **What’s the output?**
   ```js
   console.log(0.1 + 0.2); // 0.30000000000000004
   ```
   - **Answer**: Floating-point imprecision.
   - **Tip**: Suggest scaling fix: `(0.1 * 10 + 0.2 * 10) / 10`.

2. **What’s NaN and how to check it?**
   - **Answer**: Not a Number; use `Number.isNaN()`.
   - **Code**: `Number.isNaN(100 / "Apple") // true`.

3. **What’s the output?**
   ```js
   console.log("10" + 20); // "1020"
   ```
   - **Answer**: String concatenation.
   - **Tip**: Use `Number("10") + 20` for addition.

### Intermediate-Level
4. **Why does `9999999999999999` become `10000000000000000`?**
   - **Answer**: Exceeds 15-digit precision.
   - **Tip**: Use BigInt: `9999999999999999n`.

5. **What’s the output?**
   ```js
   console.log(5 & 1, 5 | 1, 5 ^ 1); // 1 5 4
   ```
   - **Answer**: Bitwise AND, OR, XOR on 0101 and 0001.
   - **Tip**: Show binary steps.

6. **How to fix `0.1 + 0.2`?**
   - **Code**: `(0.1 * 10 + 0.2 * 10) / 10 // 0.3`
   - **Tip**: Explain scaling to avoid floating-point errors.

### Advanced-Level
7. **Why can’t BigInt and Number mix?**
   - **Answer**: Different types; requires explicit conversion.
   - **Code**: `BigInt(5) + 5n // 10n`, but `5n + 5` errors.

8. **What’s the output?**
   ```js
   console.log(~5); // -6
   ```
   - **Answer**: Bitwise NOT inverts bits, two’s complement → -6.
   - **Tip**: Explain 32-bit signed integers.

9. **What’s a safe integer?**
   - **Answer**: ±(2^53 - 1).
   - **Code**: `Number.isSafeInteger(9007199254740991) // true`.

---

## 6. Best Practices for Interviews

1. **Use Strict Equality**:
   - `===` avoids coercion surprises.
   ```js
   console.log(10 === "10"); // false
   ```

2. **Validate Numeric Inputs**:
   - Check for NaN and type.
   ```js
   if (Number.isNaN(Number(input))) return "Invalid";
   ```

3. **Handle Precision**:
   - Use BigInt for large integers; scale decimals.
   ```js
   const precise = 9999999999999999n;
   ```

4. **Understand Bitwise**:
   - Practice binary conversions and operations.
   ```js
   console.log(5 & 3); // 1 (0101 & 0011 = 0001)
   ```

5. **Avoid Number Objects**:
   - Use primitives for simplicity.
   ```js
   const num = 123; // Not new Number(123)
   ```

---

## 7. Common Pitfalls

1. **Floating-Point Errors**:
   - `0.1 + 0.2 !== 0.3`.
   ```js
   console.log(0.1 + 0.2 === 0.3); // false
   ```

2. **Coercion with +**:
   - Strings cause concatenation.
   ```js
   console.log(10 + "20" - 5); // 95 ("1020" - 5)
   ```

3. **NaN Inequality**:
   - `NaN !== NaN`.
   ```js
   console.log(Number.isNaN(NaN)); // true
   ```

4. **BigInt Type Errors**:
   - Mixing types throws errors.
   ```js
   // 5n + 5 // TypeError
   console.log(Number(5n) + 5); // 10
   ```

5. **Bitwise Negative Numbers**:
   - Two’s complement affects results.
   ```js
   console.log(~5); // -6, not 10
   ```

---

## 8. Quick Reference Table

| **Feature** | **Description** | **Example** | **Output** |
| --- | --- | --- | --- |
| Number | 64-bit float | `const x = 3.14;` | 3.14 |
| Scientific | Exponent notation | `123e5` | 12300000 |
| NaN | Invalid number | `100 / "Apple"` | NaN |
| Infinity | Beyond limits | `1 / 0` | Infinity |
| BigInt | Large integers | `123n` | 123n |
| toString(base) | Convert to string | `(32).toString(2)` | "100000" |
| toFixed(n) | Fixed decimals | `(9.656).toFixed(2)` | "9.66" |
| Number.isNaN() | Check NaN | `Number.isNaN(NaN)` | true |
| Bitwise & | AND operation | `5 & 1` | 1 |
| Bitwise << | Left shift | `5 << 1` | 10 |
