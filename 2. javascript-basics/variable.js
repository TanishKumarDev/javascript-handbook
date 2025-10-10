// 🎯 Variable Declarations in JavaScript - var, let, const

// var name = "John";
// let age = 30;
// const pi = 3.14;


// var: redeclare and reassign
var name = "Doe"; // redeclaration
name = "Smith"; // reassignment
console.log("var ", name); // Output: Smith

// let: reassign, no redeclare
let age = 31; // declaration
age = 32; // reassignment
console.log("let ", age); // Output: 32

// const: no redeclare, no reassign
const pi = 3.14159; // declaration
// pi = 3.14; // Error: Assignment to constant variable
console.log("const ", pi); // Output: 3.14159



// 🎯 Scope in JavaScript
// Scope defines where a variable is accessible in your code. JavaScript has three types of scope:
// Global scope
let globalVar = "I'm global";

// Function scope
function testFunction() {
  var funcVar = "I'm function-scoped";
  let blockVar = "I'm also function-scoped";
  console.log(globalVar); // Accessible
  console.log(funcVar);   // Accessible
}

// Block scope
if (true) {
  var varBlock = "I'm not block-scoped";
  let letBlock = "I'm block-scoped";
  const constBlock = "I'm block-scoped too";
  console.log(letBlock); // Accessible
}

console.log(varBlock);   // Accessible (global/function scope)
console.log(globalVar);  // Accessible
// console.log(funcVar); // Error: Not defined
// console.log(letBlock); // Error: Not defined

// 🎯 Hoisting in JavaScript
// Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope during the creation phase of execution, before code runs. However, initialization (assigning values) is not hoisted.
// var hoisting
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// let/const hoisting
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

// Function hoisting
sayHello(); // Works: Hello
function sayHello() {
  console.log("Hello");
}