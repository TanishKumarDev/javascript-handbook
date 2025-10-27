/*

-> What is Function

A function is a block of code that performs a specific task, and can be reused whenever needed.
It helps you avoid repeating code and organize logic into small parts.

-> Type of Function

| Function Type                                      | Explanation                                                                        |
| -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Named Function**                                 | Function declared with a name using `function name(){}` — reusable and hoisted.    |
| **Anonymous Function**                             | Function without a name, often assigned to a variable or used as a callback.       |
| **Function Expression**                            | Function stored in a variable (`const add = function(a,b){}`) — not hoisted.       |
| **Arrow Function**                                 | Short syntax using `=>`, does not have its own `this` or `arguments`.              |
| **Immediately Invoked Function Expression (IIFE)** | Runs instantly after definition — `(function(){ ... })();`                         |
| **Constructor Function**                           | Used with `new` keyword to create objects — `function Person(){ this.name="A"; }`. |
| **Generator Function**                             | Defined with `function*`, can pause and resume using `yield`.                      |
| **Async Function**                                 | Declared with `async`, returns a Promise and uses `await` inside.                  |
| **Callback Function**                              | Passed as an argument to another function, executed later.                         |
| **Higher-Order Function**                          | Takes another function as argument or returns a function.                          |
| **Recursive Function**                             | Calls itself until a base condition is met.                                        |
---
*/


// Basic function
console.log("Basic function")
function greet() {
    console.log("Hello, World!");
}

greet(); // Call the function

// Function with parameters
console.log("Function with parameters")
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Alice"); // "Hello, Alice!"

// Function with return value
console.log("Function with return value")
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // 8

// Function Expression
console.log("Function Expression")

let multiple = function(a, b) {
    return a * b;
};

console.log(multiple(1,4));

// Anonymous function
let numbers = [1, 2, 3];
let doubled = numbers.map(function(num) {
    return num * 2;
});

// Parameters and Arguments
console.log("Parameters and Arguments")

// Multiple parameters
function introduce(name, age, city) {
    return "Hello, my name is " + name + " and I'm " + age + " years old. I live in " + city + ".";
}
console.log(introduce("Tanish", 101, "NYC"));

// Default parameters
function greet(name = "World") {
    return "Hello, " + name + "!";
}
console.log(greet());
console.log(greet("Alice"));

// Rest Parameters
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}   
console.log(sum(1, 2, 3, 4, 5));

// Return Statement

// simple return
console.log("simple return")
function simpleReturn(num){
    return num * num;
}

console.log(simpleReturn(5))

// early return
console.log("early return")
function earlyReturnNumbe(num){
    if(num < 0){
        return;
    }
    return num * num;
}

console.log(earlyReturnNumbe(5))
console.log(earlyReturnNumbe(-5))

// Multiple return points
function multipleReturn(score) {
    if (score >= 90) return "Score is " + score + ". You got A";
    if (score >= 80) return "Score is " + score + ". You got B";
    if (score >= 70) return "Score is " + score + ". You got C";
    return "F";
}
console.log((multipleReturn(85)))

// Function Scope
console.log("Function Scope");
let globalVar = "I'm global";

function outerFunction() {
    let outerVar = "I'm in outer function";
    
    function innerFunction() {
        let innerVar = "I'm in inner function";
        console.log(globalVar);  // Can access
        console.log(outerVar);   // Can access
        console.log(innerVar);   // Can access
    }
    
    innerFunction();
    // console.log(innerVar); // Error! Can't access
}

outerFunction();

// Higher-Order Functions
// Function that takes another function
function processArray(arr, callback) {
    let result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

let numbersForHOF = [1, 2, 3, 4];
let squared = processArray(numbersForHOF, function(x) {
    return x * x;
});

// Function that returns a function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
