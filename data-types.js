// 🎯 Primitive Types: Simple, immutable (unchangeable) values stored directly in memory.

// 1. string
let greeting = "Hello";
let username = 'Alice';
let templateLiteral = `Welcome, ${username}!`;
console.log(greeting, templateLiteral);
console.log(typeof greeting); // string
console.log(greeting.length); // 5
console.log(greeting.toUpperCase()); // HELLO

// 2. number
let age = 30;
let price = 19.99;
console.log(age, price);
console.log(price.toFixed(2)); // 19.99
console.log(typeof age); // number
console.log(1/0); // Infinity
console.log(0/0); // NaN
console.log(typeof NaN); // number

// 3. boolean
let isActive = true;
let isEmpty = false;
console.log(isActive, isEmpty);
console.log(!!0); // false

// 4. null
let user = null;
console.log(user); // null
console.log(typeof user); // object (this is a known quirk in JavaScript)

// 5. undefined
let result;
console.log(result); // undefined
console.log(typeof result); // undefined

// 6. symbol
let uniqueId = Symbol('id');
let anotherId = Symbol('id');
console.log(uniqueId === anotherId); // false
let obj = { [uniqueId]: "unique" };
console.log(obj[uniqueId]); // unique
console.log(typeof uniqueId); // symbol

// 7. bigint
let bigNumber = 9007199254741991n;
let anotherBig = BigInt(9007199254741991n);
console.log(bigNumber === anotherBig); // true
console.log(typeof bigNumber); // bigint

// ⚡ Important Points for Primitives:

// Immutable: Changing a primitive creates a new value (e.g., str.toUpperCase() returns new string).
// Pass by Value: Assigning or passing primitives copies the value.
// Type Coercion: Primitives can be coerced (e.g., 1 + "2" = "12").
// Falsy Values: false, 0, "", null, undefined, NaN.

// 🎯 Reference Types: Complex data (like objects) stored as references to memory locations, mutable (can be changed).

// 1. Object
// Object example
let person = { 
    name: "Alice",
    age: 25 
};
person.age = 26; // Modify
console.log(person["name"]); // Alice
console.log(Object.keys(person)); // ["name", "age"]

// 2. Array
let numbers = [1, 2, 3];
numbers.push(4); // Modify
console.log(numbers[0]); // 1
console.log(numbers.length); // 4
console.log(Array.isArray(numbers)); // true
console.log(numbers.map(num => num * 2)); // [2, 4, 6, 8]

// ⚡Important Points for Reference Types:

// Pass by Reference: Assigning or passing references shares the same memory location.
// Mutable: Changes affect all references.
// Objects as Arrays: Arrays are objects with numeric keys (e.g., arr[0] is like arr["0"]).

// pass by value
let a = 10; // primitive in memory
let b = a; // copy value
b = 20; // modify b
console.log(a); // 10
console.log(b); // 20

// pass by reference
let obj1 = { value: 10 }; // object in memory
let obj2 = obj1; // both point to the same object
obj2.value = 20; // modify the object via obj2
console.log(obj1.value); // 20
console.log(obj2.value); // 20

// ❔ How do you copy an object or array without affecting the original?
// Answer: Use shallow copy (Object.assign, spread operator) or deep copy (e.g., JSON.parse(JSON.stringify())).

// ❔ What is a Symbol, and why is it useful?
// Answer: Symbol is a unique, immutable primitive used as object keys to avoid property collisions.

// ❔ What is the difference between pass-by-value and pass-by-reference?
// Answer: 
// Pass-by-Value: Primitives copy their value; changes don’t affect the original.
// Pass-by-Reference: Reference types share memory; changes affect all references.

// ❔Why does typeof null return "object"?
// Answer: It’s a historical bug in JavaScript, kept for backward compatibility. null is a primitive, not an object.