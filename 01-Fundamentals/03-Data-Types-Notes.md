# JavaScript Data Types

#### 1. Definition
**Data types** define the **kind of value** a variable can hold. JavaScript is **dynamically typed** — a variable can change type at runtime.

---

#### 2. Theory / Concept

| Category | Types |
|--------|-------|
| **Primitive (7)** | `number`, `string`, `boolean`, `undefined`, `null`, `symbol`, `bigint` |
| **Non-Primitive (1)** | `object` (includes arrays, functions, objects) |

> **Primitive** = **immutable**, passed by **value**  
> **Object** = **mutable**, passed by **reference**

---

#### 3. Primitive Types

| Type | Example | `typeof` | Notes |
|------|--------|--------|-------|
| **`number`** | `42`, `3.14`, `NaN`, `Infinity` | `"number"` | One type for all numbers |
| **`string`** | `"hello"`, `'hi'`, `` `world` `` | `"string"` | Immutable |
| **`boolean`** | `true`, `false` | `"boolean"` | Logical values |
| **`undefined`** | `let x;` | `"undefined"` | Not assigned |
| **`null`** | `let x = null;` | `"object"` (quirk!) | Intentional absence |
| **`symbol`** | `Symbol('id')` | `"symbol"` | Unique identifier |
| **`bigint`** | `123n` | `"bigint"` | For large integers |

---

#### 4. Non-Primitive: `object`

| Type | Example | `typeof` | Check |
|------|--------|--------|-------|
| **Object** | `{ name: "John" }` | `"object"` | — |
| **Array** | `[1, 2, 3]` | `"object"` | `Array.isArray()` |
| **Function** | `function() {}` | `"function"` | — |

> All non-primitives are **objects** under the hood.

---

#### 5. Key Examples

```js
// Number
let age = 25;
let price = 99.99;
let notANumber = NaN;
let infinity = Infinity;

// String
let name = "Alice";
let greeting = `Hello, ${name}!`;  // Template literal

// Boolean
let isActive = true;
let hasPermission = age >= 18;

// Undefined & Null
let user;           // undefined
let currentUser = null;  // intentional empty

// Symbol
let id = Symbol("userId");
let obj = { [id]: 123 };

// BigInt
let big = 1234567890123456789012345n;
```

---

#### 6. Truthy & Falsy Values

| Falsy (→ `false`) | Truthy (→ `true`) |
|-------------------|-------------------|
| `false` | `true` |
| `0`, `-0`, `0n` | Any non-zero number |
| `""` (empty string) | Any non-empty string |
| `null` | `"0"`, `"false"` |
| `undefined` | `[]`, `{}` |
| `NaN` | Any object/function |

```js
if ("") console.log("truthy"); // Doesn't run
if ([]) console.log("truthy"); // Runs!
```

---

#### 7. Type Checking

```js
typeof 42;           // "number"
typeof "hi";         // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object" (bug!)

typeof [];           // "object"
typeof {};           // "object"
typeof function(){}; // "function"

Array.isArray([]);   // true
Array.isArray({});   // false
```

---

#### 8. Common Bugs / Mistakes

| Bug | Cause | Fix |
|-----|-------|-----|
| `typeof null === "object"` | Historical bug | Use `=== null` |
| `"5" + 3 → "53"` | `+` does concatenation | Use `Number("5") + 3` |
| `[] == true` → `false` | Coercion rules | Use `===` |
| `parseInt("123abc")` → `123` | Stops at first non-digit | Validate input |

```js
// Bad
if (userInput == null) { ... }  // catches null AND undefined

// Better
if (userInput === null) { ... }
if (userInput === undefined) { ... }
```

---

#### 9. Best Practices

| Rule | Example |
|------|--------|
| Use `===` / `!==` | Avoid `==` coercion |
| Use `??` for null/undefined | `let name = input ?? "Guest";` |
| Validate types in functions | `if (typeof age !== "number")` |
| Use `Array.isArray()` | Not `typeof` |
| Prefer `const` for objects | Even if mutable |

```js
// Good
const user = { name: "Alice" };
user.age = 25; // OK
// user = {} // TypeError
```

---

#### 10. Practical Examples

```js
// User Validation
function validateUser(user) {
  if (typeof user.name !== "string" || user.name === "") return false;
  if (typeof user.age !== "number" || user.age < 0) return false;
  return true;
}

// Shopping Cart Total
function getTotal(items) {
  return items
    .filter(item => item.inStock)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);
}
```

---

#### 11. Practice Exercises

```js
// Exercise 1: Type Checker
function getType(val) {
  if (Array.isArray(val)) return "array";
  if (val === null) return "null";
  return typeof val;
}

// Exercise 2: Safe Converter
function toNumber(str) {
  const num = Number(str);
  return isNaN(num) ? 0 : num;
}

// Exercise 3: Falsy Checker
function isFalsy(val) {
  return !val;
}
```

---

#### 12. Interview Tips & Questions

**Tips**:
- Say: **“JavaScript has 7 primitive types and everything else is an object.”**
- Know **`typeof null` is `"object"`** — it’s a bug.
- Explain **truthy/falsy** with examples.
- Use **`===`** in answers.

**Common Questions**:

- **Q**: How many primitive types?  
  **A**: 7: `number`, `string`, `boolean`, `undefined`, `null`, `symbol`, `bigint`

- **Q**: `typeof []`?  
  **A**: `"object"` → use `Array.isArray()`

- **Q**: Difference between `null` and `undefined`?  
  **A**: `undefined` = not assigned; `null` = intentional empty

- **Q**: Is `NaN === NaN`?  
  **A**: `false` → use `Number.isNaN()`

---

#### 13. Summary Table

| Key Point | Description |
|---------|-----------|
| **Definition** | Kind of data a variable holds |
| **Categories** | 7 Primitives + Object (arrays, functions) |
| **Dynamic Typing** | Variables can change type |
| **Primitives** | Immutable, passed by value |
| **Objects** | Mutable, passed by reference |
| **Type Checking** | `typeof`, `Array.isArray()`, `=== null` |
| **Truthy/Falsy** | `0`, `""`, `null` → `false`; `[]`, `{}` → `true` |
| **Best Practice** | Use `===`, validate types, `??`, `Array.isArray()` |
| **Next** | **Type Conversion** |

---


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