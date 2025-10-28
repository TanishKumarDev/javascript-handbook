// Variable Hoisting

// var Hoisting
console.log(myVar); // ReferenceError: myVar is not defined
var myVar = 5;
console.log(myVar);

// How JavaScript interprets it:
var myVar; // Declaration hoisted to top
console.log(myVar); // undefined
myVar = 5; // Assignment stays in place
console.log(myVar); // 5

// let and const Hoisting
// let and const are hoisted but not initialized

// console.log(myLet);  
// let myLet = 5; // ReferenceError: myLet is not defined
// console.log(myLet);

// console.log(myConst);
// const myConst = 5; // ReferenceError: myConst is not defined
// console.log(myConst);

// This is called the "Temporal Dead Zone"
function example() {
    // TDZ starts here
    console.log(x); // ReferenceError
    let x = 5; // TDZ ends here
    console.log(x); // 5
}

// Function Hoisting

// Function Declarations
sayHi(); // this is full hoisted
function sayHi() {
    console.log("Hi!");
}

// Another example
console.log(add(2 , 3))
function add(a, b) {
    return a + b;
}

// Function Expressions
// Function expressions are NOT hoisted
// sayGoodbye(); // TypeError: sayGoodbye is not a function

var sayGoodbye = function() {
    console.log("Goodbye!");
};


// Arrow functions are also not hoisted
// multiply(2, 3); // TypeError: multiply is not a function

const multiply = (a, b) => a * b;

// Hoisting in Different Scopes

// Global Scope
console.log(globalVar); // ReferenceError: globalVar is not defined
var globalVar = "I'm global";

console.log(globalFun()); // ReferenceError: globalFun is not defined
function globalFun() {
    return "I'm global";
}

// Function Scope
function example() {
    console.log(localVar); // ReferenceError: localVar is not defined
    var localVar = "I'm local";

    console.log(innerFunc()); // ReferenceError: innerFunc is not defined
    function innerFunc() {
        return "I'm inner";
    }
}

example();

// Block Scope

function  blockScopeExample() {
    console.log(x); // ReferenceError: x is not defined
    
    if(true){
        var x = "I'm block-scoped";
        let y = "I'm also block-scoped";
        const z = "I'm also block-scoped";
    }
    console.log(x); // "I'm block-scoped"
    // console.log(y); // ReferenceError: y is not defined
    // console.log(z); // ReferenceError: z is not defined
}

blockScopeExample();