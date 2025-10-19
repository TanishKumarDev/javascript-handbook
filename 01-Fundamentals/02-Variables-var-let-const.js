// ➡️ Variable Declaration Methods

// 1. let (Modern, Recommended)
let LetUserName = "John";
let LetUserAge = 25;
let LetIsActive = true;

// Variables can be reassigned
LetUserName = "Jane";
LetUserAge = 30;
LetIsActive = false;

console.log("1. let", LetUserName, LetUserAge, LetIsActive);

// 2. const (Modern, For Constants)
const PI = 3.14159;
const ConstSiteName = "AceDevHub";
const ConstMaxUsers = 100;

// Constants cannot be reassigned
// PI = 3.14; // This will throw an error
console.log("2. const", PI, ConstSiteName, ConstMaxUsers);

// Important: const prevents reassignment, but objects and arrays can still be modified:
const ConstUser = {
  name: "John",
  age: 25,
};

ConstUser.name = "Jane"; // This is allowed
ConstUser.address = "123 Main St"; // This is allowed

console.log("2. const", ConstUser);

// This would cause an error (reassigning the variable):
// user = { name: "Jane" }; // TypeError

// 3. var (Legacy, Avoid)
var VarUserName = "John";
var VarUserAge = 25;
var VarIsActive = true;

// Variables can be reassigned
VarUserName = "Jane";
VarUserAge = 30;
VarIsActive = false;

console.log("3. Var", VarUserName, VarUserAge, VarIsActive);

// ➡️ Variable Naming Rules and Conventions
/**
Rules (Must Follow)

Must start with: letter, underscore (_), or dollar sign ($)
Cannot start with: numbers
Cannot contain: spaces or special characters (except _ and $)
Cannot be: JavaScript reserved words
 */

let validVariableName = "user_name";
let _private = "hidden";
let $element = "DOM element";
let user123 = "valid";
let firstName = "John";

// Conventions (Should Follow)

// camelCase: Start with lowercase, capitalize subsequent words
// Descriptive names: Use meaningful names that describe the data
// Constants in UPPER_CASE: For true constants

// Good naming conventions
let userName = "John Doe";
let userAge = 30;
let isActive = true;
const MAX_USERS = 100;

console.log("4. Variable Naming Rules", userName, userAge, isActive, MAX_USERS);

// ➡️ Variable Scope : Scope determines where variables can be accessed in your code.

// Block Scope (let and const)
// Variables declared with let and const have block scope:

console.log("5. Variable Scope");
{
  let blockScopeVar = "Block Scope Var";
  const blockScopeConst = "Block Scope Const";
  console.log(blockScopeVar);
  console.log(blockScopeConst);
}

// console.log(blockScopeVar) // ReferenceError: not defined

// Practical example with if statement
let letScore = 85;

if (letScore > 80) {
  let letGrade = "A";
  const letMessage = "Excellent work!";
  console.log(letGrade, letMessage);
}

// ➡️ Function Scope
// Variables are accessible throughout the entire function:
console.log("6. Function Scope");

function functionScopeExample() {
  let subtotal = 100;
  let tax = 0.08;

  if (subtotal > 50) {
    let discount = 10; // Block scoped
    subtotal -= discount;
  }

  // subtotal and tax accessible here
  let total = subtotal * (1 + tax);
  return total;

  // discount is NOT accessible here (block scoped)
}

functionScopeExample();

// ➡️ Global Scope
// Variables declared outside any function or block have global scope:

console.log("7. Global Scope");

let globalScopeVar = "Global Scope Var";
const globalScopeConst = "Global Scope Const";

function globalScopeFunction() {
  console.log(globalScopeVar);
  console.log(globalScopeConst);
}

globalScopeFunction();

// ➡️ Problems with var (Why to Avoid It)
console.log("8. Problems with var");
// 1. Function Scope (Not Block Scope)
// Problem with var
if (true) {
    var message = "Hello";
}
console.log(message); // "Hello" - accessible outside block!

// Better with let
if (true) {
    let betterMessage = "Hello";
}
// console.log(betterMessage); // ReferenceError - properly scoped

// 2. Hoisting Issues

// Confusing behavior with var
console.log(hoistedVar); // undefined (not an error!)
var hoistedVar = "I'm hoisted";

// Better with let
// console.log(betterHoistedVar); // ReferenceError
let betterHoistedVar = "I'm hoisted";

// 3. Redeclaration Allowed

// Problem with var
var redeclaredVar = "Original value";
var redeclaredVar = "New value";

// Better with let
let betterRedeclaredVar = "Original value";
// let betterRedeclaredVar = "New value"; // SyntaxError

// ➡️ Variable Initialization
// Declaration vs Initialization

console.log("9. Variable Initialization")
let uninitializedVar;
console.log(uninitializedVar); // undefined

let initializedVar = "Initialized";
console.log(initializedVar);

// ➡️ Multiple Variable Declaration
console.log("10. Multiple Variable Declaration")
let a, b, c;
a = 1;
b = 2;
c = 3;

console.log(a, b, c);


