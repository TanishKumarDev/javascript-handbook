### JavaScript Type Conversion

#### 1. Definition
**Type Conversion** (or **Type Casting**) is the process of **changing one data type to another**. JavaScript does this **automatically** (**implicit**) or **manually** (**explicit**).

---

#### 2. Theory / Concept

| Type | Description | When Happens |
|------|-------------|-------------|
| **Implicit** (Coercion) | JS **auto-converts** | `+` with string, `if` statements |
| **Explicit** (Casting) | **Manual** with functions | `Number("5")`, `String(123)` |

**Step-by-Step Process**:
1. JS detects operation needing conversion.
2. Applies rules (e.g., string + number → concat).
3. Result type depends on operation.

---

#### 3. Syntax

```js
// Implicit
"5" + 3;         // "53"

// Explicit
Number("5");     // 5
String(123);     // "123"
Boolean(1);      // true
```

---

#### 4. Types / Variants

| Conversion | To String | To Number | To Boolean |
|------------|-----------|-----------|------------|
| **Implicit** | `+` with string | `-`, `*`, `/`, `%` | `if`, `&&`, `||` |
| **Explicit** | `String()`, `.toString()` | `Number()`, `parseInt()`, `parseFloat()` | `Boolean()`, `!!` |

---

#### 5. Examples

**Example 1: Implicit**
```js
console.log("5" + 3);    // "53"
console.log("5" - 3);    // 2
console.log(true + 1);   // 2
```

**Example 2: Explicit**
```js
Number("123");           // 123
String(123);             // "123"
Boolean("hello");        // true
parseInt("123abc", 10);  // 123
```

**Example 3: Object to Primitive**
```js
const obj = { valueOf: () => 42 };
console.log(+obj);       // 42
```

---

#### 6. String Conversion

**Implicit:**
```js
"Age: " + 25;     // "Age: 25"
```

**Explicit:**
```js
String(123);      // "123"
(123).toString(); // "123"
JSON.stringify({a:1}); // '{"a":1}'
```

---

#### 7. Number Conversion

**Implicit:**
```js
"10" - 5;         // 5
+"123";           // 123
```

**Explicit:**
```js
Number("123");    // 123
parseInt("123px"); // 123
parseFloat("3.14"); // 3.14
```

---

#### 8. Boolean Conversion

**Implicit:**
```js
if (0) { }        // false (falsy)
if ("") { }       // false
if ([]) { }       // true
```

**Explicit:**
```js
Boolean(1);       // true
!!"hello";        // true
```

---

#### 9. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| **"5" + 3 → "53"** | `+` concatenates | `Number("5") + 3` |
| **0 == false → true** | Loose `==` | Use `===` |
| **parseInt("08") → 0** | Octal mistake | `parseInt("08", 10)` |
| **NaN === NaN → false** | NaN quirk | `Number.isNaN()` |
| **null == undefined → true** | Coercion | `===` |

**Bug Example:**
```js
console.log(1 + 2 + "3"); // "33"
```

**Fix:**
```js
console.log(Number(1 + 2 + "3")); // 3
```

---

#### 10. Safe Utilities

```js
// Safe Number
function toNumber(val, def = 0) {
  const num = Number(val);
  return isNaN(num) ? def : num;
}

// Safe String
function toString(val, def = "") {
  return val == null ? def : String(val);
}

// Safe Boolean
function toBoolean(val) {
  return Boolean(val);
}
```

---

#### 11. Use Cases

- **Form Data**: `"30"` → `30`
- **API Parsing**: JSON strings → objects
- **URL Params**: Strings → numbers/booleans
- **Validation**: Check after conversion

---

#### 12. Practice Exercises

1. **Exercise 1**: Convert form `{ age: "25" }` to number.
2. **Exercise 2**: Safe parser for `"true"` → `true`.
3. **Exercise 3**: Build `sanitizeInput(input)`.

**Sample Solution for Exercise 1**:
```js
const age = Number(form.age);
```

---

#### 13. Interview Tips & Questions

**Tips**:
- Say: **“Implicit = auto; Explicit = manual.”**
- Always show **`===`** vs `==`.
- Explain **`+` ambiguity**.
- Know **`parseInt(str, 10)`**.

**Questions**:

- **Q**: `"5" - 2`?  
  **A**: `3` (implicit number)

- **Q**: `[] == 0`?  
  **A**: `true` → use `===`

- **Q**: `parseInt("10px", 8)`?  
  **A**: `8` (octal) → always use `10`

- **Q**: How to check NaN?  
  **A**: `Number.isNaN(val)`

---

#### 14. Summary Table

| Key Point | Description |
|---------|-----------|
| **Definition** | Change type (implicit/explicit) |
| **Implicit** | Auto: `+` → string; `-` → number |
| **Explicit** | `Number()`, `String()`, `Boolean()` |
| **Pitfalls** | `+` concat, `==` coercion, NaN |
| **Best Practice** | `===`, validate, safe utils |
| **Common Use** | Forms, APIs, URLs |
| **Next** | **Operators** |

---
