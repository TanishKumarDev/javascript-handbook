// 🎯 Functions are reusable blocks of code that perform a specific task, taking inputs (parameters) and returning outputs. They’re essential for organizing code, reducing repetition, and enabling modularity.

// 1. Basics of Functions

// Function Declaration (Named Function)
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!
console.log(greet()); // Hello, undefined!

// Function Expression (Anonymous or Named)
const square = function (num) {
  return num * num;
};
console.log(square(4)); // 16
// console.log(square); // Error if called before definition

// Arrow Function (ES6+)
const double = (num) => num * 2; // Single param, implicit return
console.log(double(5)); // 10

const isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(4)); // true

// 2. Parameters and Arguments
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); // 3 (arguments match parameters)
console.log(sum(1)); // NaN (b = undefined, 1 + undefined = NaN)

// Default Parameters (ES6+)
function greet(greeting = "Hello", name = "Guest") {
  return `${greeting}, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!
console.log(greet()); // Hello, Guest!

// Rest Parameters (ES6+)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, 2)); // 3

// Destructuring Parameters - Extract properties from objects/arrays.
function display({ name, age }) {
  return `${name} is ${age} years old.`;
}
console.log(display({ name: "Alice", age: 30 })); // Alice is 30 years old.

// 3. Return Values
function test() {
  return 42; // Exits here
  console.log("Unreached"); // Skipped
}
console.log(test()); // 42

function noReturn() {}
console.log(noReturn()); // undefined

// 4. Function Scope and Hoisting

try {
  console.log(hoisted());
  function hoisted() {
    let local = "scoped";
    return "I'm hoisted";
  }
  console.log(local); // ReferenceError
} catch (error) {
  console.log(error.name); // ReferenceError
  console.log(error.message); // local is not defined
}

// 5. The this Keyword
const obj = {
    value : 42,
    method: function() {
        return this.value;
        console.log(this.value);
    }
};
console.log(obj.method());
console.log(obj.method.call({value: 100}));

// 6. Higher-Order Functions and Callbacks
// Higher-Order: Functions that take/return functions.
// Callback: Function passed as argument.

function higher(Callback, num){
    return Callback(num);
}
const Callback = n => n * n;
console.log(higher(Callback, 3));   // 9

// 7. IIFE (Immediately Invoked Function Expressions)
(function() {
    console.log("I'm an IIFE");
})(); // invoke immediately

const result = (() => 42)();
console.log(result);

// 8. Pure vs Impure Functions
// Pure: No side effects, same input = same output.
// Impure: Modifies external state or has side effects.

// pure
function pureFunction(a,b){
    return a+b;
}

// imure
let total = 0;
function impureFunction(amount){
    total += amount;
}

console.log(pureFunction(2,3));
impureFunction(100);
console.log(total);

// 9. Closures (In-Depth) - Create private variables, maintain state, enable data encapsulation.
try {
    function counter() {
    let count = 0; // Private
    return {
        increment: () => ++count,
        get: () => count
    };
    }
    const myCounter = counter();
    console.log(myCounter.increment()); // 1
    console.log(myCounter.get()); // 1
    console.log(count); // ReferenceError (private)
} catch (error) {
    console.log(error.name); // ReferenceError
    console.log(error.message); // count is not defined
}

// 10. Recursion (In-Depth)
function fibonacci(n) {
  if (n <= 1) return n; // Base case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // 5

// 11. Higher-Order Functions and Callbacks (In-Depth)
function process(numbers, callback) {
  return numbers.map(callback);
}
const res = n => n * 2;
console.log(process([1, 2, 3], res)); // [2, 4, 6]

// 12. IIFE (In-Depth)
try {
    (function() {
  let private = "secret";
    console.log(private); // secret
    })();
    console.log(private); // ReferenceError
} catch (error) {
    console.log(error.name); // ReferenceError
    console.log(error.message); // private is not defined
}

// 13. Pure vs Impure Functions (In-Depth)
function pureAdd(a, b) { // Pure
  return a + b; // No mutation, same input = same output
}
console.log(pureAdd(1, 2)); // 3