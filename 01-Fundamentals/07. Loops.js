// For Loop

const { skip } = require("node:test");

// Basic For Loop
// print number 1 to 5
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// loop through array
let arrFruits = ["apple", "banana", "orange"];
for(let i = 0; i < arrFruits.length; i++) {
    console.log(arrFruits[i]);
}

// Countdown
for(let i = 10; i > 0; i--) {
    console.log("Countdown -",i);
}
console.log(("Blast Off! 💥 "))

// For Loop Variations

// Skip even numbers - continue
console.log("Skip even numbers")
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Break early
console.log("Break early")
for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

// Multiple variables
for(let i=0, j=10; i < 5; i++, j--) {
    console.log(i, j);
}

// While Loop
// Basic while loop
console.log("Basic while loop")
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

// User input simulation
let userInput = " ";
while (userInput !== "quit") {
    console.log("Processing...", userInput);
    break; // prevent infinite loop
}

// Array processing
console.log("Array processing")
let numbers = [1, 2, 3, 4, 5];
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i])
    i++;
}

// Do-While Loop
console.log("Do-While Loop")
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// Menu system example
let choice;
do {
    console.log("1. Start Game");
    console.log("2. Settings");
    console.log("3. Exit");
    choice = 3; // Simulate user choice
} while (choice !== 3);

// For...in Loop (Objects)
// Loop through object properties
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Array indices (not recommended for arrays)
let colors = ["red", "green", "blue"];
for (let index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}

// For...of Loop (Iterables)
// Loop through array elements
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}
/*


---

## 1. **Iterable Data Types in JavaScript**

An **iterable** is any data type that can be looped using
`for...of`, the spread operator (`...`), or `Array.from()`.
These types have a built-in method called `Symbol.iterator`.

### ✅ Common Iterable Types

| Iterable Type                            | Example                                                           | Loop Example                               | Notes                        |
| ---------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------ | ---------------------------- |
| **Array**                                | `let arr = [1,2,3];`                                              | `for (let x of arr) console.log(x);`       | Most common iterable         |
| **String**                               | `let str = "abc";`                                                | `for (let ch of str) console.log(ch);`     | Iterates over each character |
| **Map**                                  | `let map = new Map([["a",1],["b",2]]);`                           | `for (let [k,v] of map) console.log(k,v);` | Iterates key–value pairs     |
| **Set**                                  | `let set = new Set([1,2,3]);`                                     | `for (let x of set) console.log(x);`       | Iterates unique values       |
| **Typed Arrays**                         | `let t = new Uint8Array([10,20,30]);`                             | `for (let x of t) console.log(x);`         | Used for binary data         |
| **Arguments object** (inside function)   | `function f(){ for(let x of arguments) console.log(x); } f(1,2);` | Works like an array                        |                              |
| **NodeList / HTMLCollection** (from DOM) | `document.querySelectorAll("p")`                                  | `for (let el of list)`                     | Iterable list of DOM nodes   |
| **Generators**                           | `function* g(){ yield 1; yield 2; }`                              | `for(let x of g()) console.log(x);`        | Custom iterables             |

---

## 2. **Non-Iterable Objects**

These **cannot** be directly looped using `for...of`
(because they don’t have `Symbol.iterator`).

### ❌ Common Non-Iterables

| Non-Iterable Type     | Example                 | Why Not Iterable             | How to Loop                                           |
| --------------------- | ----------------------- | ---------------------------- | ----------------------------------------------------- |
| **Plain Object**      | `{a:1,b:2}`             | No `Symbol.iterator`         | Use `for...in` or `Object.keys()`, `Object.entries()` |
| **Function**          | `function add(){}`      | Not a collection             | Can’t loop                                            |
| **Error objects**     | `new Error("msg")`      | No iterator                  | Use properties manually                               |
| **WeakMap**           | `new WeakMap()`         | Hidden keys (not iterable)   | Not loopable                                          |
| **WeakSet**           | `new WeakSet()`         | Hidden values (not iterable) | Not loopable                                          |
| **Date**              | `new Date()`            | Not a collection             | Access properties directly                            |
| **Plain JSON object** | `JSON.parse('{"x":1}')` | Just a regular object        | Use `for...in` or keys                                |

---

## 3. **Summary Table**

| Category          | Iterable | Loop Type  | Example         |
| ----------------- | -------- | ---------- | --------------- |
| Arrays            | ✅        | `for...of` | `[1,2,3]`       |
| Strings           | ✅        | `for...of` | `"abc"`         |
| Maps              | ✅        | `for...of` | `new Map()`     |
| Sets              | ✅        | `for...of` | `new Set()`     |
| Objects           | ❌        | `for...in` | `{a:1,b:2}`     |
| WeakMap / WeakSet | ❌        | —          | `new WeakMap()` |
| Date              | ❌        | —          | `new Date()`    |
---
 */

// Array Methods (Alternative to Loops)
console.log("Array Methods (Alternative to Loops)")

let ArrayMethods = ["apple", "banana", "orange"];

// forEach - excute a function for each element
ArrayMethods.forEach((element, Index) => {
  console.log(element, Index);
});

// map - transform each element
let double = numbers.map((num) => num * 2);
console.log(double);

// Filter - keep elements that pass a test
let even = numbers.filter((num) => num % 2 === 0);
console.log(even);

// reduce - combine elements into a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// find - find the first element that matches a condition
let firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven);

// findIndex - find the index of the first element that matches a condition
let firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex);