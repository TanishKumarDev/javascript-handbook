// Global Scope
console.log(" ⭐ Global Scope");

var globalVar = "I'm global-scoped VAR";
let globalLet = "I'm also global-scoped LET";
const globalConst = "I'm also global-scoped CONST";
function displayGlobalVar() {
  console.log(globalVar);
  console.log(globalLet);
  console.log(globalConst);
}

displayGlobalVar();
console.log(globalVar); // Can access

// Function Scope
console.log(" ⭐ Function Scope");
function myFunction() {
  var functionVar = "I'm function-scoped VAR";
  let functionLet = "I'm also function-scoped LET";
  const functionConst = "I'm also function-scoped CONST";
  console.log(functionVar);
  console.log(functionLet);
  console.log(functionConst);
}

myFunction();
// console.log(functionVar); // ReferenceError
// console.log(functionLet); // ReferenceError
// console.log(functionConst); // ReferenceError

// Block Scope
console.log(" ⭐ Block Scope");

function testBlockScope() {
  if (true) {
    var blockVar = "I'm block-scoped VAR";
    let blockLet = "I'm also block-scoped LET";
    const blockConst = "I'm also block-scoped CONST";
  }
  console.log(blockVar);
  console.log(blockLet);
  console.log(blockConst);
}
// console.log(blockVar); // ReferenceError
// console.log(blockLet); // ReferenceError
// console.log(blockConst); // ReferenceError

// Loop block scope
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Nested Function Scope
function outerFunction() {
    let outerVariable = "I'm in outer function";
    
    function innerFunction() {
        let innerVariable = "I'm in inner function";
        
        // Inner can access outer
        console.log(outerVariable);  // Works
        console.log(innerVariable);  // Works
        
        function deeperFunction() {
            // Can access all outer scopes
            console.log(outerVariable);  // Works
            console.log(innerVariable);  // Works
        }
        
        deeperFunction();
    }
    
    innerFunction();
    // console.log(innerVariable); // Error! Can't access inner scope
}

outerFunction();

// Variable Shadowing
let name = "Global John";

function testShadowing() {
    let name = "Function John"; // Shadows global name
    
    console.log(name); // "Function John"
    
    if (true) {
        let name = "Block John"; // Shadows function name
        console.log(name); // "Block John"
    }
    
    console.log(name); // "Function John" again
}

testShadowing();
console.log(name); // "Global John"
