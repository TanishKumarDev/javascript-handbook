### JavaScript Type Conversion

#### 1. Definition
Type conversion in JavaScript is the process of transforming a value from one data type to another, either automatically by the JavaScript engine (implicit conversion or coercion) or manually by the developer (explicit conversion or casting). This is essential for performing operations on mixed data types or ensuring data consistency.

#### 2. Theory / Concept
JavaScript’s dynamic typing allows values to change types during execution, which can lead to both flexibility and errors if not handled properly. Type conversion occurs in two forms:  
- **Implicit Conversion (Coercion)**: JavaScript automatically converts types during operations (e.g., adding a string and number).  
- **Explicit Conversion (Casting)**: Developers use functions like `Number()`, `String()`, or `Boolean()` to control type changes.  
- **Truthy/Falsy Values**: In logical contexts, values are coerced to booleans based on their truthiness (e.g., `0`, `""`, `null` are falsy).  
- **Conversion Rules**: Depend on the operator or context (e.g., `+` may concatenate strings, while `-` converts to numbers).  

**Step-by-Step Process**:  
1. Identify the operation or context requiring conversion (e.g., arithmetic, comparison).  
2. For implicit conversion, JavaScript applies internal rules (e.g., `ToString`, `ToNumber`).  
3. For explicit conversion, use appropriate functions or methods to convert the value.  
4. Validate the result to ensure it meets expectations, handling edge cases like `NaN` or `undefined`.

#### 3. Syntax
```javascript
// Implicit conversion (coercion)
let result = "5" + 3;       // Concatenation: "53" (number to string)
let diff = "5" - 3;         // Subtraction: 2 (string to number)

// Explicit conversion (casting)
let num = Number("123");    // String to number: 123
let str = String(123);      // Number to string: "123"
let bool = Boolean("hello"); // String to boolean: true

// Type checking
console.log(typeof num);     // "number"
console.log(isNaN(num));     // false
```

#### 4. Types / Variants
- **String Conversion**:  
  - **Implicit**: Using `+` with a string or template literals.  
    ```javascript
    console.log("Value: " + 42); // "Value: 42"
    ```
  - **Explicit**: Using `String()`, `toString()`, or `JSON.stringify()`.  
    ```javascript
    console.log(String(42)); // "42"
    ```
- **Number Conversion**:  
  - **Implicit**: Using arithmetic operators (except `+`) or comparison operators.  
    ```javascript
    console.log("10" * 2); // 20
    ```
  - **Explicit**: Using `Number()`, `parseInt()`, `parseFloat()`, or unary `+`.  
    ```javascript
    console.log(parseInt("123.45")); // 123
    ```
- **Boolean Conversion**:  
  - **Implicit**: In conditionals, logical operators, or double negation (`!!`).  
    ```javascript
    if ("hello") { console.log("Truthy"); } // Truthy
    ```
  - **Explicit**: Using `Boolean()` or custom rules for strings.  
    ```javascript
    console.log(Boolean(0)); // false
    ```
- **Array/Object Conversion**:  
  - **Implicit**: Arrays to strings (`join`), objects to strings (`"[object Object]"`).  
    ```javascript
    console.log(["a", "b"] + "c"); // "a,bc"
    ```
  - **Explicit**: Using `JSON.stringify()`, `split()`, or `Array.from()`.  
    ```javascript
    console.log(JSON.stringify({ key: "value" })); // '{"key":"value"}'
    ```

#### 5. Examples
**Example 1: Implicit vs. Explicit Conversion**  
```javascript
// Implicit conversion
let sum = "10" + 5;         // Concatenation: "105"
let product = "10" * 5;     // Multiplication: 50
console.log(sum, product);  // "105" 50

// Explicit conversion
let numStr = "42";
let num = Number(numStr);   // Convert to number
console.log(num + 5);       // 47
console.log(typeof num);    // "number"
```

**Example 2: Form Input Processing**  
```javascript
// Form input (strings) to appropriate types
let formData = { age: "25", isActive: "true" };
let age = parseInt(formData.age, 10);          // String to integer
let isActive = formData.isActive === "true";   // String to boolean
console.log(age, typeof age);                  // 25 "number"
console.log(isActive, typeof isActive);        // true "boolean"
```

**Example 3: Safe Number Conversion**  
```javascript
// Safe conversion function
function toNumber(value, defaultValue = 0) {
    let num = Number(value);                   // Attempt conversion
    return isNaN(num) ? defaultValue : num;     // Return default if NaN
}
console.log(toNumber("123"));                   // 123
console.log(toNumber("abc", -1));              // -1
console.log(toNumber(undefined, 0));           // 0
```

#### 6. Use Cases
- **Form Processing**: Converting string inputs (e.g., `"25"`) to numbers or booleans for calculations or logic.  
- **API Data Handling**: Normalizing API responses (e.g., converting string timestamps to `Date` objects).  
- **URL Parameter Parsing**: Converting query strings (e.g., `"page=2"`) to numbers or booleans.  
- **Configuration Parsing**: Converting environment variables (strings) to appropriate types for app settings.  
- **Data Validation**: Ensuring user or external data matches expected types before processing.

#### 7. Common Bugs / Mistakes
- **Implicit Coercion with `+`**: Mixing strings and numbers causes concatenation. **Fix**: Use explicit conversion.  
  ```javascript
  // Bad
  let result = "5" + 3; // "53"
  // Good
  let result = Number("5") + 3; // 8
  ```
- **Loose Equality (`==`)**: Leads to unexpected type coercion. **Fix**: Use strict equality (`===`).  
  ```javascript
  // Bad
  console.log("0" == 0); // true
  // Good
  console.log("0" === 0); // false
  ```
- **Invalid Number Parsing**: `parseInt("123abc")` returns `123`, but may need validation. **Fix**: Check for `NaN` or use regex.  
  ```javascript
  // Bad
  let num = parseInt("123abc"); // 123 (may be unexpected)
  // Good
  let num = isNaN(Number("123abc")) ? 0 : Number("123abc");
  ```
- **Null/Undefined Handling**: Forgetting to handle `null` or `undefined`. **Fix**: Use default values or nullish coalescing (`??`).  
  ```javascript
  // Bad
  let value = null + 5; // NaN
  // Good
  let value = (null ?? 0) + 5; // 5
  ```
- **Object to String**: Default `[object Object]` output is unhelpful. **Fix**: Use `JSON.stringify()` or custom `toString()`.  
  ```javascript
  // Bad
  console.log({ name: "John" } + ""); // "[object Object]"
  // Good
  console.log(JSON.stringify({ name: "John" })); // '{"name":"John"}'
  ```

#### 8. Problem Solving / Practice Questions
1. **Exercise 1**: Write a function that converts a value to a specified type (`string`, `number`, `boolean`, `array`) with a default value for invalid inputs.  
2. **Exercise 2**: Create a function to validate and convert form data (name: string, age: number, email: string) with specific rules (e.g., age between 0–150). Return errors if invalid.  
3. **Exercise 3**: Parse a URL query string (e.g., `"?id=123&active=true"`) into an object with correct types (numbers, booleans, strings).

**Sample Solution for Exercise 1**:  
```javascript
function convert(value, targetType, defaultValue = null) {
    switch (targetType.toLowerCase()) {
        case "string":
            return value == null ? defaultValue : String(value);
        case "number":
            let num = Number(value);
            return isNaN(num) ? defaultValue : num;
        case "boolean":
            if (typeof value === "string") {
                return ["true", "yes", "1"].includes(value.toLowerCase());
            }
            return Boolean(value);
        case "array":
            if (Array.isArray(value)) return value;
            if (typeof value === "string") return value.split(",");
            return value == null ? defaultValue : [value];
        default:
            return value;
    }
}
console.log(convert("123", "number")); // 123
console.log(convert(123, "string"));   // "123"
console.log(convert("true", "boolean")); // true
console.log(convert("a,b", "array"));  // ["a", "b"]
```

#### 9. Interview Tips & Questions
**Tips**:  
- Explain implicit vs. explicit conversion with examples, focusing on common pitfalls like `+` operator behavior.  
- Show how to write safe conversion utilities with validation.  
- Be prepared to debug coercion issues or write type-specific validation functions.  

**Questions**:  
- **Q**: What is the difference between `==` and `===` in JavaScript?  
  **A**: `==` performs loose equality with type coercion (e.g., `"5" == 5` is `true`), while `===` checks strict equality without coercion (e.g., `"5" === 5` is `false`). Always prefer `===` for predictable results.  
- **Q**: Why does `"1" + 2 + 3` produce `"123"` but `1 + 2 + "3"` produces `"33"`?  
  **A**: JavaScript evaluates left-to-right. In `"1" + 2 + 3`, `"1" + 2` becomes `"12"`, then `"12" + 3` becomes `"123"`. In `1 + 2 + "3"`, `1 + 2` is `3`, then `3 + "3"` becomes `"33"`.  
- **Q**: How would you safely convert a string to a number?  
  **A**: Use `Number()` or `parseInt`/`parseFloat`, then check for `NaN` and `isFinite` to handle invalid or infinite values, returning a default if necessary.

#### 10. Summary Table
| Key Point            | Description |
|----------------------|-------------|
| Definition           | Converting values between types (implicit or explicit). |
| Core Concept         | Implicit (coercion) by operators/context; explicit (casting) via functions. |
| Syntax               | `Number()`, `String()`, `Boolean()`, `parseInt()`, `JSON.stringify()`, etc. |
| Variants             | String, number, boolean, array/object conversions. |
| Common Use           | Form processing, API handling, URL parsing, data validation. |
| Typical Errors       | Coercion with `+`, loose equality, invalid parsing, null/undefined mishandling. |
| Practice Focus       | Safe conversion, validation, handling edge cases. |
| Interview Prep       | Explain coercion pitfalls, write safe conversion utilities. |
