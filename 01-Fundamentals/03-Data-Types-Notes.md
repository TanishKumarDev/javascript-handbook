### JavaScript Data Types

#### 1. Definition
Data types in JavaScript define the kind of data a variable can hold, such as numbers, text, or objects. JavaScript is dynamically typed, meaning variables can hold different types and change types during runtime without explicit declaration.

#### 2. Theory / Concept
JavaScript categorizes data into **primitive** and **non-primitive (reference)** types. Primitive types are immutable and stored by value, while reference types are mutable and stored by reference. The type system affects how data is manipulated, compared, and converted.  
- **Dynamic Typing**: Variables can switch types (e.g., from number to string) without explicit type definitions.  
- **Type Coercion**: JavaScript automatically converts types in operations (e.g., `"5" + 3` becomes `"53"`).  
- **Type Checking**: The `typeof` operator and other methods (e.g., `Array.isArray()`) identify types.  
- **Memory**: Primitives are stored directly in memory, while reference types point to memory locations, impacting how changes propagate.  

**Step-by-Step Process**:  
1. Assign a value to a variable, implicitly setting its type.  
2. Use the value in operations, where JavaScript may coerce types.  
3. Check or convert types explicitly to avoid unexpected behavior.  
4. Understand how scope and mutability affect data manipulation.

#### 3. Syntax
```javascript
// Primitive types
let num = 42;              // Number
let str = "Hello";         // String
let bool = true;           // Boolean
let undef;                 // Undefined
let nul = null;            // Null
let sym = Symbol("id");    // Symbol
let bigInt = 123n;         // BigInt

// Non-primitive (reference) types
let obj = { key: "value" }; // Object
let arr = [1, 2, 3];       // Array
let func = function() {};   // Function

// Type checking
console.log(typeof num);    // "number"
console.log(Array.isArray(arr)); // true
```

#### 4. Types / Variants
JavaScript has **7 primitive types** and **1 non-primitive type (object)** with variants:  
1. **Number**: Integers, floating-point numbers, and special values (`Infinity`, `-Infinity`, `NaN`).  
   ```javascript
   let int = 42;
   let float = 3.14;
   let nan = NaN;
   console.log(typeof nan); // "number"
   ```
2. **String**: Text enclosed in single (`'`), double (`"`), or backticks (`` ` ``) for template literals.  
   ```javascript
   let str1 = 'Single';
   let str2 = `Template with ${int}`; // Template literal
   console.log(str2); // "Template with 42"
   ```
3. **Boolean**: `true` or `false`.  
   ```javascript
   let isActive = true;
   console.log(typeof isActive); // "boolean"
   ```
4. **Undefined**: Declared but unassigned variables.  
   ```javascript
   let x;
   console.log(x); // undefined
   ```
5. **Null**: Intentional absence of value.  
   ```javascript
   let y = null;
   console.log(typeof y); // "object" (JavaScript quirk)
   ```
6. **Symbol**: Unique identifiers (ES6+), often for object keys.  
   ```javascript
   let sym1 = Symbol("key");
   let sym2 = Symbol("key");
   console.log(sym1 === sym2); // false
   ```
7. **BigInt**: Large integers beyond `Number.MAX_SAFE_INTEGER` (ES2020+).  
   ```javascript
   let big = 12345678901234567890n;
   console.log(typeof big); // "bigint"
   ```
8. **Object**: Key-value collections, including:  
   - **Plain Objects**: `{ key: value }`.  
   - **Arrays**: Ordered lists, e.g., `[1, 2, 3]`.  
   - **Functions**: Reusable code blocks.  
   ```javascript
   let obj = { name: "John" };
   let arr = [1, 2, 3];
   let func = () => {};
   console.log(typeof obj, typeof arr, typeof func); // "object" "object" "function"
   ```

#### 5. Examples
**Example 1: Working with Primitive Types**  
```javascript
// Declaring different primitive types
let age = 30;                     // Number
let name = "Alice";               // String
let isStudent = false;            // Boolean
let profile;                      // Undefined
let settings = null;              // Null
let id = Symbol("userId");        // Symbol
let largeNum = 123456789n;        // BigInt

// Logging types and values
console.log("Age:", typeof age, age);           // number 30
console.log("Name:", typeof name, name);        // string Alice
console.log("Symbol:", typeof id, id.toString()); // symbol Symbol(userId)
```

**Example 2: Objects and Arrays**  
```javascript
// Creating an object and array
let user = {
    name: "Bob",                  // String property
    age: 25,                      // Number property
    hobbies: ["reading", "gaming"] // Array property
};
let scores = [90, 85, 88];        // Array

// Modifying and accessing
user.email = "bob@example.com";   // Add property
scores.push(95);                  // Add element
console.log("User:", user);       // {name: "Bob", age: 25, hobbies: Array(2), email: "bob@example.com"}
console.log("Scores:", scores);    // [90, 85, 88, 95]
```

**Example 3: Type Checking and Coercion**  
```javascript
// Checking types
let value = "123";
console.log(typeof value);        // string
console.log(typeof Number(value)); // number
console.log(typeof Boolean(""));   // boolean

// Type coercion
let result = "5" + 2;             // String concatenation
console.log(result, typeof result); // "52" string
console.log(Number("5") + 2);      // 7 number
```

#### 6. Use Cases
- **Numbers**: Calculations (e.g., e-commerce cart totals, game scores).  
- **Strings**: User input handling, text manipulation (e.g., form validation, UI text).  
- **Booleans**: Conditional logic (e.g., toggling UI states, permission checks).  
- **Undefined/Null**: Representing missing or absent data (e.g., uninitialized form fields, API null responses).  
- **Symbols**: Unique object keys to avoid property collisions (e.g., in libraries).  
- **BigInt**: Handling large numbers in financial or cryptographic apps.  
- **Objects/Arrays**: Storing structured data (e.g., user profiles, product lists in web apps).  
- **Functions**: Reusable logic (e.g., event handlers, data processing).

#### 7. Common Bugs / Mistakes
- **Type Coercion Errors**: Using `==` instead of `===` leads to unexpected conversions. **Fix**: Always use strict equality (`===`).  
  ```javascript
  // Bad
  console.log(0 == "0");  // true (coercion)
  // Good
  console.log(0 === "0"); // false
  ```
- **Misusing `typeof` for Arrays/Null**: `typeof` returns `"object"` for both. **Fix**: Use `Array.isArray()` or `value === null`.  
  ```javascript
  // Bad
  console.log(typeof []); // "object"
  // Good
  console.log(Array.isArray([])); // true
  ```
- **Mixing BigInt and Number**: Operations between them cause errors. **Fix**: Convert to same type first.  
  ```javascript
  // Bad
  console.log(123n + 456); // TypeError
  // Good
  console.log(123n + BigInt(456)); // 579n
  ```
- **Assuming Empty String is Falsy**: Forgetting truthy/falsy rules in conditions. **Fix**: Explicitly check values.  
  ```javascript
  // Bad
  let input = "0";
  if (input) { /* Runs because "0" is truthy */ }
  // Good
  if (input !== "") { /* Explicit check */ }
  ```
- **Undefined Property Access**: Accessing non-existent object properties. **Fix**: Check with `in` or optional chaining (`?.`).  
  ```javascript
  let obj = {};
  // Bad
  console.log(obj.name.length); // TypeError
  // Good
  console.log(obj.name?.length || 0); // 0
  ```

#### 8. Problem Solving / Practice Questions
1. **Exercise 1**: Write a function that takes a value and returns its type using `typeof`. Handle arrays and null specially.  
2. **Exercise 2**: Create an object representing a product (name: string, price: number, inStock: boolean). Write a function to validate its types and return errors if any.  
3. **Exercise 3**: Convert a string input (e.g., "123.45") to a number and perform a calculation (e.g., multiply by 2). Handle invalid inputs gracefully.

**Sample Solution for Exercise 1**:  
```javascript
function getType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
}
console.log(getType(42));      // "number"
console.log(getType([]));      // "array"
console.log(getType(null));    // "null"
```

#### 9. Interview Tips & Questions
**Tips**:  
- Explain the difference between primitive and reference types, focusing on mutability and memory.  
- Demonstrate understanding of truthy/falsy values and type coercion pitfalls.  
- Be ready to write type-checking or validation functions on the spot.  

**Questions**:  
- **Q**: What are JavaScript’s primitive types, and how do they differ from objects?  
  **A**: Primitives (Number, String, Boolean, Undefined, Null, Symbol, BigInt) are immutable and stored by value. Objects (including arrays, functions) are mutable, stored by reference, and can contain multiple properties.  
- **Q**: Why does `typeof null` return `"object"`?  
  **A**: It’s a historical quirk in JavaScript’s implementation. Use `value === null` for accurate null checks.  
- **Q**: Explain truthy and falsy values with examples.  
  **A**: Falsy values (`false`, `0`, `""`, `null`, `undefined`, `NaN`) evaluate to `false` in conditions. Truthy values (e.g., `"0"`, `[]`, `{}`) evaluate to `true`. Example: `if ("0") { /* runs */ }`.

#### 10. Summary Table
| Key Point            | Description |
|----------------------|-------------|
| Definition           | Types define data a variable can hold. |
| Core Concept         | 7 primitives (immutable), 1 reference type (objects, mutable). |
| Syntax               | Declare with `let`, `const`, `var`; check with `typeof`. |
| Variants             | Number, String, Boolean, Undefined, Null, Symbol, BigInt, Object (Array, Function). |
| Common Use           | Calculations, text manipulation, state management, structured data. |
| Typical Errors       | Type coercion, incorrect `typeof` usage, mixing BigInt/Number. |
| Practice Focus       | Type checking, validation, coercion handling. |
| Interview Prep       | Explain primitives vs. objects, truthy/falsy, `typeof` quirks. |


#### 11. Short Notes ⭐ 

---

#### 1. Concept: JavaScript Data Types

JavaScript me do broad category ke data types hote hain:

##### (A) Primitive Data Types

Ye **single value** hold karte hain — immutable (change nahi hote directly).

| Data Type     | Example                      | Description                               |
| ------------- | ---------------------------- | ----------------------------------------- |
| **Number**    | `10`, `3.14`                 | Numeric values (integer ya decimal)       |
| **String**    | `'hello'`, `"world"`         | Text data — characters enclosed in quotes |
| **Boolean**   | `true`, `false`              | Logical values (true/false)               |
| **Undefined** | `let x;`                     | Variable declared but not assigned value  |
| **Null**      | `let y = null;`              | Intentional empty value                   |
| **BigInt**    | `1234567890123456789012345n` | Very large integers (beyond Number range) |
| **Symbol**    | `Symbol('id')`               | Unique and immutable identifier           |

---

##### (B) Non-Primitive (Reference) Data Types

Ye **objects ya collections** ko represent karte hain.

| Data Type    | Example                       | Description                   |
| ------------ | ----------------------------- | ----------------------------- |
| **Object**   | `{ name: 'Tanish', age: 21 }` | Key-value pair data structure |
| **Array**    | `[1, 2, 3]`                   | Ordered collection of items   |
| **Function** | `function greet(){}`          | Block of reusable code        |

---

#### 2. Variables in JavaScript

Variables store data. Declare karne ke 3 tareeke hain:

| Keyword   | Scope           | Reassignment | Redeclaration | Example         |
| --------- | --------------- | ------------ | ------------- | --------------- |
| **var**   | Function-scoped | Allowed      | Allowed       | `var x = 10;`   |
| **let**   | Block-scoped    | Allowed      | Not allowed   | `let y = 20;`   |
| **const** | Block-scoped    | Not allowed  | Not allowed   | `const z = 30;` |

##### Notes:

* `let` aur `const` (ES6 ke baad) **modern JS** me prefer kiye jaate hain.
* `const` ka matlab immutable variable (value change nahi hoti).
* `var` avoid karte hain kyunki usme **hoisting** aur **scope issues** aate hain.

---

#### 3. `typeof` Operator

`typeof` ek **operator** hai jo variable ka **data type** return karta hai (as string).

**Syntax:**

```js
typeof variableName;
```

**Example:**

```js
typeof 42;        // "number"
typeof "hello";   // "string"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // "object"   (bug in JS, legacy behavior)
typeof {};        // "object"
typeof [];        // "object"
typeof function(){}; // "function"
typeof 123n;      // "bigint"
typeof Symbol();  // "symbol"
```

---

#### 4. Practical Example (All in One)

```js
// 1. Primitive Data Types
let num = 42;                     // Number
let str = "JavaScript";           // String
let isActive = true;              // Boolean
let notAssigned;                  // Undefined
let emptyValue = null;            // Null
let bigNumber = 9007199254740991n; // BigInt
let uniqueId = Symbol("id");      // Symbol

// 2. Non-Primitive (Reference) Data Types
let person = { name: "Tanish", age: 21 }; // Object
let marks = [90, 85, 88];                 // Array
function greet() {                        // Function
  return "Hello!";
}

// 3. typeof usage
console.log(typeof num);        // number
console.log(typeof str);        // string
console.log(typeof isActive);   // boolean
console.log(typeof notAssigned);// undefined
console.log(typeof emptyValue); // object (bug)
console.log(typeof bigNumber);  // bigint
console.log(typeof uniqueId);   // symbol
console.log(typeof person);     // object
console.log(typeof marks);      // object
console.log(typeof greet);      // function
```

---

#### 5. Output

```
number
string
boolean
undefined
object
bigint
symbol
object
object
function
```

---

#### 6. Notes

* `typeof null` ka result `"object"` aata hai — ye ek **old JS bug** hai (ECMAScript 1 se).
* Arrays ka bhi `typeof` `"object"` aata hai, kyunki technically wo object hi hote hain.

  * Array check karne ke liye use karo: `Array.isArray(arr)`
* `BigInt` aur `Symbol` ES6+ features hain.


#### 7. Stack vs Heap

---

##### 1. Concept: Memory Allocation in JavaScript

Jab JavaScript program run hota hai,
to JS engine (like V8) do major type ki memory areas use karta hai:

| Memory Area | Purpose                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------- |
| **Stack**   | Small, fast memory jahan *primitive values* aur *execution context* store hote hain.     |
| **Heap**    | Large, slower memory jahan *non-primitive (objects, arrays, functions)* store hote hain. |

---

##### 2. Primitive Values → Stored in Stack

**Primitive values** jaise `number`, `string`, `boolean`, etc. directly stack me store hote hain.
Stack memory me har variable ka **copy** rakha jaata hai.

**Example:**

```js
let a = 10;
let b = a; // b gets a COPY of 10
b = 20;
```

**Memory Representation:**

```
STACK:
a → 10
b → 20
```

**Explanation:**

* `a` aur `b` dono alag entries hain.
* `b` me change karne se `a` par koi effect nahi padta.

---

##### 3. Non-Primitive Values → Stored in Heap

Objects, arrays, aur functions ka data **heap** me store hota hai.
Lekin variable ke andar actual object nahi hota —
uske **heap address (reference)** ka pointer hota hai, jo stack me store hota hai.

**Example:**

```js
let obj1 = { name: "Tanish" };
let obj2 = obj1;  // obj2 points to same heap memory
obj2.name = "Kumar";
```

**Memory Representation:**

```
STACK:
obj1 → (ref #101)
obj2 → (ref #101)

HEAP:
#101 → { name: "Kumar" }
```

**Explanation:**

* Dono variables (`obj1`, `obj2`) stack me same reference (address) rakhte hain.
* Dono heap ke same object ko point karte hain.
* Isliye ek me change hua to dusre me bhi dikh gaya.

---

##### 4. Why This Difference Exists

**Primitive types** are small, simple values →
directly stack me rakhne se access fast hota hai.

**Non-primitive types** (like objects) can be large, nested structures →
heap me rakhne se unke liye flexible, expandable space milta hai.

---

##### 5. Code Example (Visualization)

```js
// Primitive Example
let x = 5;
let y = x;
y = 7;

console.log(x, y); // 5 7


// Non-Primitive Example
let user1 = { name: "Tanish" };
let user2 = user1;
user2.name = "Kumar";

console.log(user1.name, user2.name); // Kumar Kumar
```

**Memory Flow:**

```
STACK:
x → 5
y → 7

user1 → (ref #201)
user2 → (ref #201)

HEAP:
#201 → { name: "Kumar" }
```

---

##### 6. Notes

1. **Stack is for:**

   * Primitive values
   * Function calls
   * Local execution context

2. **Heap is for:**

   * Objects, Arrays, Functions
   * Dynamic or complex structures

3. **Speed Difference:**

   * Stack = Fast (LIFO structure, direct access)
   * Heap = Slower (search + garbage collection)

4. **Garbage Collection:**

   * JS automatically removes (frees) heap memory jab koi reference bacha nahi hota.

---

##### 7. Summary Table

| Feature        | Stack                        | Heap                       |
| -------------- | ---------------------------- | -------------------------- |
| Used for       | Primitive values, call stack | Objects, arrays, functions |
| Access speed   | Fast                         | Slower                     |
| Memory size    | Small, limited               | Large, dynamic             |
| Data stored as | Copy of value                | Reference (pointer)        |
| Managed by     | Execution context            | Garbage collector          |

---

#### 8. Call by Value aur Call by Reference
---

##### 1. Concept: Call by Value vs Call by Reference

| Concept               | Explanation                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Call by Value**     | Function ko primitive variable pass karte ho → uska **copy** pass hota hai. Function ke andar changes original variable ko affect nahi karte.                        |
| **Call by Reference** | Function ko non-primitive variable (object/array) pass karte ho → **reference** pass hota hai. Function ke andar changes original object/array ko affect karte hain. |

**Summary:**

* Primitive → **Call by Value**
* Non-Primitive → **Call by Reference**

---

##### 2. Call by Value Example (Primitive)

```js
function updateValue(num) {
    num = num + 10;
    console.log("Inside function:", num);
}

let a = 5;
updateValue(a);  // Pass by value
console.log("Outside function:", a);
```

**Output:**

```
Inside function: 15
Outside function: 5
```

**Explanation:**

* `a` ka **copy** function me `num` ban gaya.
* Function me `num` change hua, lekin original `a` **same** raha.

---

##### 3. Call by Reference Example (Non-Primitive)

```js
function updateUser(user) {
    user.name = "Kumar";  // Change the object property
}

let person = { name: "Tanish" };
updateUser(person);  // Pass by reference
console.log(person.name);
```

**Output:**

```
Kumar
```

**Explanation:**

* `person` ka reference function me `user` ke saath gaya.
* Function me object ki property change hui → original object bhi change ho gaya.

---

##### 4. Key Notes

1. **Why it happens?**

   * Primitive values → **stack me copy** store hoti hai → changes local.
   * Non-primitive values → **heap reference** store hoti hai → changes original object.

2. **Important:**

   * JS me technically "pass by value" hi hota hai, lekin **objects ka reference value pass hota hai**. Isliye wo "pass by reference behavior" show karte hain.

3. **To avoid changing original object:**

   * Clone the object before passing:

     ```js
     function safeUpdate(user) {
         let copy = { ...user }; // spread operator clone
         copy.name = "Kumar";
         return copy;
     }

     let person = { name: "Tanish" };
     let newPerson = safeUpdate(person);

     console.log(person.name);    // Tanish
     console.log(newPerson.name); // Kumar
     ```

---

#### 9. **"&" ka kya relation hai**

---

##### 1. Concept: “&” in Programming

1. **C / C++ me** `&` ka matlab hota hai **address-of operator**.

   * Ye variable ka **memory address** return karta hai.
   * Example:

```cpp
int a = 10;
cout << &a; // prints memory address of a
```

2. **C / C++ me** `&` function parameters me use ho sakta hai **reference passing ke liye**:

```cpp
void addTen(int &x) {  // x is reference to original variable
    x += 10;
}

int main() {
    int num = 5;
    addTen(num);
    cout << num;  // 15, original changed
}
```

**Explanation:**

* `int &x` ka matlab `x` directly original variable ko point karega.
* Ye “pass by reference” ka real implementation hai C++ me.

---

##### 2. JavaScript me `&` ka concept

* JS me **`&` as reference operator nahi hai**.
* JS me **objects aur arrays ka reference automatically handle hota hai**, isliye `&` ki zarurat nahi.
* Primitive → pass by value
* Non-primitive → reference pass hota hai automatically

**Example (JS perspective):**

```js
let obj = { name: "Tanish" };
function update(o) {
    o.name = "Kumar"; // reference change
}

update(obj);
console.log(obj.name); // Kumar
```

* Yahaan JS automatically **reference pass kar raha hai** — C++ ki tarah `&` likhne ki zarurat nahi.

---

##### 3. Relation Summary

| Concept               | C/C++                       | JavaScript                                              |
| --------------------- | --------------------------- | ------------------------------------------------------- |
| **Call by Value**     | default, copy pass hota hai | primitives me copy pass hota hai                        |
| **Call by Reference** | & operator se possible      | objects/arrays automatically reference pass hote hain   |
| **Memory access**     | & se address milta hai      | reference automatically stack me pointer, value heap me |
| **Need for &**        | required for reference      | not needed                                              |

---

##### 4. Notes

1. JS me **"&" ka role nahi hai** jaise C++ me hai.
2. Agar tum C++ me reference passing ko JS ke object reference ke behavior se compare karo, dono **same idea** follow karte hain.
3. Stack/Heap + Reference concept JS me “&” ka kaam **implicitly** karta hai.

---