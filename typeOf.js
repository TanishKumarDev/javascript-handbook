// Basic type checking
let num = 42;
let str = "Hello";
let bool = true;
let obj = { name: "Alice" };
let arr = [1, 2];
let fn = function() {};
let sym = Symbol("id");
let big = 123n;
let undef = undefined;
let nullVal = null;

console.log(typeof num);    // number
console.log(typeof str);    // string
console.log(typeof bool);   // boolean
console.log(typeof obj);    // object
console.log(typeof arr);    // object
console.log(typeof fn);     // function
console.log(typeof sym);    // symbol
console.log(typeof big);    // bigint
console.log(typeof undefined); // undefined
console.log(typeof null);   // object


// Practical Use Cases
function add(num1, num2){
    if(typeof num1 != "number" || typeof num2 != "number"){
        return "Invalid input";
    }
    return num1 + num2;
}
console.log(add(1,2)); // valid input -> 3
console.log(add("1",2)); // Invalid input

// Debuging 
let value = someFunction(); // Unknown return type
console.log(typeof value, value); // Log type and value

// conditional logic
let data = null;
if (typeof data === "object" && data !== null) {
  console.log("Is object");
} else {
  console.log("Not an object"); // Prints
}

// Edge Cases

// typeof null returns "object"
// Issue: null is a primitive, but typeof null returns "object" due to a historical bug in JavaScript.

// Null edge case
let x = null;
console.log(typeof x); // object
console.log(x === null); // true

// Arrays Return "object"
// Issue: Arrays are objects, so typeof [] returns "object", not "array".
// Array edge case
let arr1 = [1, 2];
console.log(typeof arr1); // object
console.log(Array.isArray(arr1)); // true

// Functions Return "function"
// Issue: Functions are objects but typeof returns "function", a unique case.
// Function edge case
let functionArrays = () => {};
console.log(typeof functionArrays); // function
console.log(function1 instanceof Function); // true

// Undeclared Variables Return "undefined"
// Issue: typeof safely handles undeclared variables without throwing errors.
// Undeclared variable
console.log(typeof undeclaredVar); // undefined

// NaN and Infinity Are "number"
// Issue: NaN, Infinity, and -Infinity are numbers, so typeof returns "number".
// NaN and Infinity edge case
console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(Number.isNaN(NaN)); // true
console.log(isFinite(Infinity)); // false