# JavaScript Operators 

**Operators** are symbols or keywords that perform operations on operands (values or variables), enabling calculations, comparisons, assignments, and logical checks. They’re fundamental for manipulating data (e.g., numbers, arrays) and building logic.

**Why Operators Matter**:
- Enable computations (e.g., arithmetic for calculations, logical for conditionals).
- Influence type coercion (e.g., `1 + "2" = "12"`), tying to data types.
- Affect variable behavior (e.g., assignment in `let` vs `const`).
- Common in interviews for coercion, precedence, and edge case questions.

### Key Characteristics
- **Types**: Arithmetic, assignment, comparison, logical, bitwise, ternary, nullish coalescing.
- **Type Coercion**: Many operators implicitly convert types (e.g., `==`, `+`).
- **Precedence**: Determines evaluation order (e.g., `*` before `+`).
- **Use Cases**: Calculations, conditionals, data manipulation (e.g., arrays).

---

## Key Concepts
- **Arithmetic**: Numeric operations, with coercion pitfalls.
- **Assignment**: Update variables, respecting `const` rules.
- **Comparison**: Check equality or order, with `===` preferred.
- **Logical**: Control flow, support short-circuiting.
- **Bitwise**: Binary manipulation, niche but interview-relevant.
- **Ternary/Nullish**: Concise conditionals and defaults.
- **Edge Cases**: `NaN`, `Infinity`, coercion surprises.

---

### 1. Arithmetic Operators

Perform mathematical operations. Coerce operands to numbers (except `+` with strings).

| **Operator** | **Description** | **Example** | **Output** | **Why** |
| --- | --- | --- | --- | --- |
| `+` | Addition/Concatenation | `5 + 3`, `1 + "2"` | `8`, `"12"` | Concatenates if string present |
| `-` | Subtraction | `5 - 3` | `2` | Coerces to number |
| `*` | Multiplication | `5 * 3` | `15` | Coerces to number |
| `/` | Division | `6 / 2` | `3` | Coerces to number |
| `%` | Modulus | `5 % 2` | `1` | Remainder |
| `**` | Exponentiation | `2 ** 3` | `8` | Power (ES6) |
| `++` | Increment | `let x = 5; x++` | `5` (then `x=6`) | Post-increment returns old value |
| `--` | Decrement | `let x = 5; --x` | `4` | Pre-decrement returns new value |

**Example**:
```js
let num1 = 10, num2 = 3;
console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2, num1 % num2, num1 ** 2);
num1++; console.log(num1);
num2--; console.log(num2);
console.log(0 / 0, 1 / 0, "abc" * 1);
// Output: 13 7 30 3.333... 1 100 11 2 NaN Infinity NaN
```

**Dry Run**:
1. `num1 + num2`: `10 + 3 = 13`.
2. `num1 - num2`: `10 - 3 = 7`.
3. `num1 * num2`: `10 * 3 = 30`.
4. `num1 / num2`: `10 / 3 ≈ 3.333`.
5. `num1 % num2`: `10 % 3 = 1`.
6. `num1 ** 2`: `10² = 100`.
7. `num1++`: `num1 = 11`, returns `10` (post-increment).
8. `num2--`: `num2 = 2`, returns `3` (post-decrement).
9. `0 / 0`: `NaN` (undefined operation).
10. `1 / 0`: `Infinity`.
11. `"abc" * 1`: `NaN` (invalid number).

**Edge Cases**:
- **String Concatenation**: `+` with strings coerces to string.
  ```js
  console.log(1 + "2"); // "12"
  ```
- **NaN/Infinity**: Result from invalid operations.
  ```js
  console.log(0 / 0); // NaN
  ```

**Interview Tip**:
- Link to data types: “`+` coerces to string if any operand is a string, unlike `-` or `*` (number coercion).”
- Connect to arrays: “Arithmetic on array indices (e.g., `arr[i++]`) is common in loops.”

### 2. Assignment Operators

Update variables by combining assignment (`=`) with operations.

| **Operator** | **Description** | **Example** | **Output** | **Why** |
| --- | --- | --- | --- | --- |
| `=` | Assign | `x = 5` | `5` | Sets value |
| `+=` | Add & assign | `x += 3` | `x = x + 3` | Combines addition |
| `-=` | Subtract & assign | `x -= 2` | `x = x - 2` | Combines subtraction |
| `*=` | Multiply & assign | `x *= 2` | `x = x * 2` | Combines multiplication |
| `/=` | Divide & assign | `x /= 2` | `x = x / 2` | Combines division |
| `%=` | Modulus & assign | `x %= 3` | `x = x % 3` | Combines modulus |

**Example**:
```js
let x = 5;
x += 3; x *= 2; x %= 5;
console.log(x);
// Output: 1
```

**Dry Run**:
1. `x = 5`: Assigns `5`.
2. `x += 3`: `x = 5 + 3 = 8`.
3. `x *= 2`: `x = 8 * 2 = 16`.
4. `x %= 5`: `x = 16 % 5 = 1`.

**Edge Case**:
- **Const Restriction**: Assignment operators fail with `const`.
  ```js
  const x = 5; // x += 1; // Error: Assignment to constant
  ```

**Interview Tip**:
- Link to variables: “Assignment operators respect `const` (no reassignment) but work with `let`.”
- Connect to arrays: “Use `+=` for array index updates (e.g., `arr[0] += 1`).”

### 3. Comparison Operators

Compare values, returning booleans. Coercion affects `==` and `!=`.

| **Operator** | **Description** | **Example** | **Output** | **Why** |
| --- | --- | --- | --- | --- |
| `==` | Loose equality | `5 == "5"` | `true` | Coerces types |
| `===` | Strict equality | `5 === "5"` | `false` | No coercion |
| `!=` | Loose inequality | `5 != "5"` | `false` | Coerces types |
| `!==` | Strict inequality | `5 !== "5"` | `true` | No coercion |
| `>` | Greater than | `5 > 3` | `true` | Numeric comparison |
| `<` | Less than | `3 < 5` | `true` | Numeric comparison |
| `>=` | Greater or equal | `5 >= 5` | `true` | Numeric comparison |
| `<=` | Less or equal | `5 <= 5` | `true` | Numeric comparison |

**Example**:
```js
let x = 5, y = "5";
console.log(x == y, x === y, x != y, x !== y, x > 3, x <= 5);
// Output: true false false true true true
```

**Dry Run**:
1. `x == y`: `"5"` coerces to `5`, `true`.
2. `x === y`: Different types, `false`.
3. `x != y`: `"5"` coerces to `5`, `false`.
4. `x !== y`: Different types, `true`.
5. `x > 3`: `5 > 3`, `true`.
6. `x <= 5`: `5 <= 5`, `true`.

**Edge Case**:
- **NaN Comparison**: `NaN == NaN` or `NaN === NaN` is `false`.
  ```js
  console.log(NaN === NaN); // false
  ```

**Interview Tip**:
- Link to data types: “`==` coerces types (e.g., string to number), causing surprises.”
- Say: “I always use `===` for predictable comparisons.”

### 4. Logical Operators

Combine booleans, support short-circuiting.

| **Operator** | **Description** | **Example** | **Output** | **Why** |
| --- | --- | --- | --- | --- |
| `&&` | AND | `true && false` | `false` | Returns first falsy or last value |
| `||` | OR | `true || false` | `true` | Returns first truthy or last value |
| `!` | NOT | `!true` | `false` | Inverts boolean |
| `??` | Nullish coalescing | `null ?? "default"` | `"default"` | Returns right if left is `null`/ `undefined` |

**Example**:
```js
let a = true, b = false, val1 = null, val2 = "default";
console.log(a && b, a || b, !a, val1 ?? val2);
// Output: false true false default
```

**Dry Run**:
1. `a && b`: `true && false = false` (stops at falsy).
2. `a || b`: `true || false = true` (stops at truthy).
3. `!a`: `!true = false`.
4. `val1 ?? val2`: `null ?? "default" = "default"`.

**Edge Case**:
- **Short-Circuiting**: Skips evaluation of right operand.
  ```js
  let x = false && console.log("Skipped"); // No output
  ```

**Interview Tip**:
- Link to variables: “`&&` and `||` use short-circuiting for safe variable checks.”
- Connect to arrays: “Use `&&` to check array existence (e.g., `arr && arr.length`).”

### 5. Bitwise Operators

Operate on binary representations, used for flags or optimization.

| **Operator** | **Description** | **Example** | **Output** | **Why** |
| --- | --- | --- | --- | --- |
| `&` | AND | `5 & 3` | `1` | `0101 & 0011 = 0001` |
| `|` | OR | `5 | 3` | `7` | `0101 | 0011 = 0111` |
| `^` | XOR | `5 ^ 3` | `6` | `0101 ^ 0011 = 0110` |
| `~` | NOT | `~5` | `-6` | Inverts bits, adds negative |
| `<<` | Left shift | `5 << 1` | `10` | `0101 << 1 = 1010` |
| `>>` | Right shift | `5 >> 1` | `2` | `0101 >> 1 = 0010` |

**Example**:
```js
let x = 5, y = 3; // 0101, 0011
console.log(x & y, x | y, x ^ y, ~x, x << 1);
// Output: 1 7 6 -6 10
```

**Dry Run**:
1. `x & y`: `0101 & 0011 = 0001 = 1`.
2. `x | y`: `0101 | 0011 = 0111 = 7`.
3. `x ^ y`: `0101 ^ 0011 = 0110 = 6`.
4. `~x`: `~0101 = 1010 = -6` (two’s complement).
5. `x << 1`: `0101 << 1 = 1010 = 10`.

**Edge Case**:
- **32-Bit Limit**: Converts to 32-bit integers, losing precision for large numbers.
  ```js
  console.log(1234567890123 & 1); // 1
  ```

**Interview Tip**:
- Say: “Bitwise operators are niche but useful for flags or permissions.”
- Link to BigInt: “Use BigInt for precise bitwise operations on large numbers.”

### 6. Ternary Operator

Shorthand for `if-else`: `condition ? valueIfTrue : valueIfFalse`.

**Example**:
```js
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);
// Output: Adult
```

**Dry Run**:
1. `age >= 18`: `true`.
2. `status`: Assigns `"Adult"`.

**Edge Case**:
- **Nesting**: Avoid complex nesting for readability.
  ```js
  let x = 10 > 5 ? 10 < 15 ? "In range" : "High" : "Low"; // In range
  ```

**Interview Tip**:
- Say: “I use ternary for simple conditionals but rewrite nested ones as `if-else` for clarity.”

### 7. Nullish Coalescing Operator (`??`)

Returns right operand if left is `null` or `undefined`, unlike `||` (all falsy).

**Example**:
```js
let x = 0, y = null, z = "default";
console.log(x || z, x ?? z, y ?? z);
// Output: default 0 default
```

**Dry Run**:
1. `x || z`: `0` is falsy, returns `"default"`.
2. `x ?? z`: `0` is not `null`/ `undefined`, returns `0`.
3. `y ?? z`: `null` triggers right operand, returns `"default"`.

**Interview Tip**:
- Link to data types: “`??` is ideal for default values when only `null`/ `undefined` matter.”

### 8. Operator Precedence

Determines evaluation order (e.g., `*` before `+`). Parentheses override.

**Example**:
```js
let x = 2 + 3 * 4;
let y = (2 + 3) * 4;
let z = 5 > 3 && 2 < 4;
console.log(x, y, z);
// Output: 14 20 true
```

**Dry Run**:
1. `x`: `3 * 4 = 12`, then `2 + 12 = 14`.
2. `y`: `(2 + 3) = 5`, then `5 * 4 = 20`.
3. `z`: `5 > 3 = true`, `2 < 4 = true`, `true && true = true`.

**Edge Case**:
- **Ambiguity**: Unclear precedence causes bugs.
  ```js
  console.log(true + 1 * 2); // 3 (1 * 2 = 2, true → 1, 1 + 2 = 3)
  ```

**Interview Tip**:
- Say: “I use parentheses to ensure clarity in complex expressions.”

---

## Interview Questions and Answers

### Beginner-Level
1. **What are the types of operators in JavaScript?**
   - **Answer**: Arithmetic (`+`, `-`), assignment (`=`, `+=`), comparison (`==`, `===`), logical (`&&`, `||`), bitwise (`&`, `|`), ternary (`?:`), nullish coalescing (`??`).
   - **Code**: `let x = 5 > 3 ? "Yes" : "No"; // Yes`
   - **Tip**: Mention `??` to show ES2020 knowledge.

2. **What’s the difference between `==` and `===`?**
   - **Answer**: `==` coerces types; `===` checks type and value.
   - **Code**: `console.log(5 == "5", 5 === "5"); // true false`
   - **Tip**: Link to data types; recommend `===`.

3. **What does `++` do, and how do pre/post-increment differ?**
   - **Answer**: Increments by 1. Pre (`++x`) returns new value; post (`x++`) returns old value.
   - **Code**: `let x = 5; console.log(++x, x++); // 6 6 (then x=7)`
   - **Tip**: Show both in a dry run.

4. **What is the ternary operator?**
   - **Answer**: Shorthand `if-else`: `condition ? value1 : value2`.
   - **Code**: `let x = 10 > 5 ? "Yes" : "No"; // Yes`
   - **Tip**: Avoid nesting for readability.

5. **What is `??` and how does it differ from `||`?**
   - **Answer**: `??` returns right operand if left is `null`/ `undefined`; `||` checks all falsy.
   - **Code**: `console.log(0 || "default", 0 ?? "default"); // default 0`
   - **Tip**: Highlight ES2020 usage.

### Intermediate-Level
6. **How does type coercion affect arithmetic operators?**
   - **Answer**: `+` concatenates with strings; others (`-`, `*`, `/`) coerce to numbers.
   - **Code**: `console.log(1 + "2", 1 - "2"); // "12" -1`
   - **Tip**: Link to data types; suggest `Number()`.

7. **What is short-circuiting in logical operators?**
   - **Answer**: `&&` stops at first falsy; `||` stops at first truthy.
   - **Code**: `let x = false && console.log("Skipped"); // No output`
   - **Tip**: Connect to arrays: `arr && arr.length`.

8. **What is operator precedence?**
   - **Answer**: Determines evaluation order (e.g., `*` before `+`). Use `()` for clarity.
   - **Code**: `console.log(2 + 3 * 4); // 14`
   - **Tip**: Reference precedence table.

9. **What are bitwise operators used for?**
   - **Answer**: Binary manipulation (e.g., flags, permissions).
   - **Code**: `console.log(5 & 3); // 1 (0101 & 0011)`
   - **Tip**: Mention BigInt for large numbers.

10. **Why is `NaN === NaN` false?**
    - **Answer**: IEEE 754 standard; `NaN` is not equal to itself.
    - **Code**: `console.log(NaN === NaN, Number.isNaN(NaN)); // false true`
    - **Tip**: Link to Number type.

### Advanced-Level
11. **How does `??` differ from `||` in edge cases?**
    - **Answer**: `??` ignores falsy values except `null`/ `undefined`; `||` uses all falsy.
    - **Code**: `console.log("" || "default", "" ?? "default"); // default ""`
    - **Tip**: Show default config use case.

12. **What happens with `+` and mixed types?**
    - **Answer**: Concatenates if any operand is a string, evaluated left-to-right.
    - **Code**: `console.log(1 + 2 + "3", "1" + 2 + 3); // "33" "123"`
    - **Tip**: Link to type coercion.

13. **How do bitwise operators handle large numbers?**
    - **Answer**: Converts to 32-bit integers, losing precision.
    - **Code**: `console.log(1234567890123 & 1); // 1`
    - **Tip**: Suggest BigInt for precision.

14. **What’s the output of nested ternaries?**
    - **Answer**: Evaluates left-to-right; avoid for readability.
    - **Code**: `let x = 10 > 5 ? 10 < 15 ? "In range" : "High" : "Low"; // In range`
    - **Tip**: Rewrite as `if-else`.

15. **What’s the output?**
    - **Code**: `console.log(true + 1, [] == false); // 2 true`
    - **Answer**: `true` → `1`, `[]` → `""` → `0`, equals `false` (0).
    - **Tip**: Explain coercion steps.

---

## Best Practices for Interviews

1. **Use `===` for Comparisons**:
   - Avoids coercion surprises.
   ```js
   console.log(5 === "5"); // false
   ```

2. **Explicit Coercion**:
   - Use `Number()`, `String()` for arithmetic.
   ```js
   let x = Number("5") + 1; // 6
   ```

3. **Short-Circuiting for Safety**:
   - Use `&&` to check existence.
   ```js
   let arr = []; arr && arr.push(1); // Safe
   ```

4. **Parentheses for Precedence**:
   - Clarify complex expressions.
   ```js
   let x = (2 + 3) * 4; // 20
   ```

5. **Use `??` for Defaults**:
   - When only `null`/ `undefined` matter.
   ```js
   let x = null ?? "default"; // default
   ```

---

## Common Pitfalls

1. **Coercion with `+`**:
   - Concatenates with strings.
   ```js
   console.log(1 + "2" + 3); // "123"
   ```

2. **NaN Comparisons**:
   - `NaN` not equal to itself.
   ```js
   console.log(NaN === NaN); // false
   ```

3. **Increment Ambiguity**:
   - Pre vs post-increment confusion.
   ```js
   let x = 5; console.log(x++ + ++x); // 12
   ```

4. **Bitwise Precision**:
   - Limited to 32-bit integers.
   ```js
   console.log(1234567890123 & 1); // 1
   ```

5. **Nested Ternaries**:
   - Hard to read, error-prone.
   ```js
   let x = 10 > 5 ? 10 < 15 ? "In range" : "High" : "Low";
   ```

---

## Quick Reference Table

| **Operator Type** | **Examples** | **Key Notes** |
| --- | --- | --- |
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--` | `+` concatenates strings; others coerce to numbers |
| Assignment | `=`, `+=`, `-=`, `*=` | Respects `const` restrictions |
| Comparison | `==`, `===`, `!=`, `!==`, `>`, `<` | `===` avoids coercion |
| Logical | `&&`, `||`, `!`, `??` | Short-circuiting; `??` for `null`/ `undefined` |
| Bitwise | `&`, `|`, `^`, `~`, `<<`, `>>` | 32-bit integers, niche use |
| Ternary | `?:` | Shorthand `if-else` |

