// Arithmetic Operators

let a = 10;
let b = 5;

// Arithmetic Operators
console.log("Arithmetic Operators")
console.log(a + b);     // 15
console.log(a - b);     // 5
console.log(a * b);     // 50
console.log(a / b);     // 2
console.log(a % b);     // 0
console.log(a ** b);    // 100000

// Unary Arithmetic Operators
console.log("Unary Arithmetic Operators")
let x = 5;

// Unary plus (+) - converts to number
console.log(+x);           // 5
console.log(+"10");        // 10
console.log(+true);        // 1
console.log(+false);       // 0

// Unary minus (-) - negates the value
console.log(-x);           // -5
console.log(-(-5));        // 5

// Increment (++)
let counter = 0;
console.log(++counter);    // 1 (pre-increment: increment then return)
console.log(counter++);    // 1 (post-increment: return then increment)
console.log(counter);      // 2

// Decrement (--)
let countdown = 5;
console.log(--countdown);  // 4 (pre-decrement)
console.log(countdown--);  // 4 (post-decrement)
console.log(countdown);    // 3


// Practical Arithmetic Examples
console.log("Practical Arithmetic Examples")

// calculator functions 
console.log("calculator functions ")
function calculator(a, b, operator){
    switch (operator) {
        case "+":
            console.log(a + b);
            break;
    
        case "-":
            console.log(a - b);
            break;
    
        case "*":
            console.log(a * b);
            break;
    
        case "/":
            console.log(a / b);
            break;
    
        case "%":
            console.log(a % b);
            break;
    
        case "**":
            console.log(a ** b);    
            
            break;
    
        default:
            break;
    }
}

console.log(calculator(10, 3, "+"));   // 13
console.log(calculator(10, 3, "/"));   // 3.333...
console.log(calculator(10, 0, "/"));   // "Cannot divide by zero"

// common use case
console.log("common use case")
let price = 19.99;
let quantity = 2;
let taxRate = 0.15;

let subtotal = price * quantity;
let tax = subtotal * taxRate;
let total = subtotal + tax;
console.log(total);


// check if a number is even or odd
console.log("check if a number is even or odd")

function chcekEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}

console.log(chcekEvenOdd(5))
console.log(chcekEvenOdd(2))
console.log(chcekEvenOdd(4))

// generate random number in range
console.log("generate random number in range")

function genRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(genRandom(1, 10))

// Comparison Operators
// Equality Operators
console.log("Comparison Operators")
console.log("Equality Operators")

// strict equality (===)
console.log("strict equality (===)")
console.log(5 === 5)
console.log(a === 5)
console.log("Hi" === "hi")

// strict inequality (!==)
console.log("strict inequality (!==)")
console.log(5 !== 5)
console.log(a !== 5)
console.log("Hi" !== "hi")


// loose equality (==)
console.log("loose equality (==)")
console.log(5 == 5)
console.log(a == 5)
console.log("Hi" == "hi")

// Relational Operators
console.log("Relational Operators")

// Greater than '>'
console.log("Greater than");
console.log(5 > 5)
console.log(5 > 4)
console.log(undefined > 4)

// Less than '<'
console.log("Less than");
console.log(5 < 5)
console.log(5 < 4)
console.log(undefined < 4)

// Greater than or equal to '>='
console.log("Greater than or equal to");
console.log(5 >= 5)
console.log(5 >= 4)
console.log(undefined >= 4)

// Less than or equal to '<='
console.log("Less than or equal to");
console.log(5 <= 5)
console.log(5 <= 4)
console.log(undefined <= 4)

// String comparison (lexicographic order)
console.log("apple" < "banana");   // true
console.log("Apple" < "apple");    // true (uppercase comes first)
console.log("10" < "2");           // true (string comparison, not numeric)
console.log("10" < "9");           // true (string comparison)

// Comparison Best Practices

console.log("Comparison Best Practices")

let userInput = "5";
let targetNumber = 5;

// Poor - can lead to unexpected results
console.log("Poor - can lead to unexpected results")
if(userInput == targetNumber) {
    console.log("User input matches target number");
} else {
    console.log("User input does not match target number");
}

// Better - explicit intent
console.log("Better - explicit intent")
if(Number(userInput) == targetNumber) {
    console.log("User input matches target number");
} else {
    console.log("User input does not match target number");
}

// Or convert both to same type
if (String(targetNumber) === userInput) {
    console.log("Match found");
}

// Comparing objects and arrays
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log("Comparing objects and arrays")
console.log(arr1 === arr2);    // false (different objects)
console.log(arr1 === arr3);    // true (same reference)

// To compare array contents
function arraysEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

console.log(arraysEqual(arr1, arr2)); // true
console.log(arraysEqual(arr1, arr3)); // true

// Null and undefined comparisons
console.log("Null and undefined comparisons")
let value1 = null;
let value2 = undefined;
let value3 = 0;

console.log(value1 == value2);     // true (special case)
console.log(value1 === value2);    // false (different types)
console.log(value1 == value3);     // false
console.log(value2 == value3);     // false

// Safe null/undefined checks
function isNullOrUndefined(value) {
    return value == null; // Catches both null and undefined
}

function isNotNullOrUndefined(value) {
    return value != null; // Excludes both null and undefined
}

// Logical Operators
console.log("Logical Operators")

// Basic Logical Operators
console.log("Basic Logical Operators")

// Logical AND (&&) - returns true if both operands are true
console.log("Logical AND (&&)")
console.log(true && true);      // true
console.log(true && false);     // false
console.log(false && true);     // false
console.log(false && false);    // false

// Logical OR (||) - returns true if either operand is true
console.log("Logical OR (||)")
console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || true);     // true
console.log(false || false);    // false

// Logical NOT (!) - returns the opposite of the operand
console.log("Logical NOT (!)")
console.log(!true);             // false
console.log(!false);            // true

// Logical XOR (^) - returns true if exactly one operand is true
console.log("Logical XOR (^)")
console.log(true ^ true);       // false
console.log(true ^ false);      // true
console.log(false ^ true);      // true
console.log(false ^ false);     // false


// Short-Circuit Evaluation
console.log("Short-Circuit Evaluation")

// AND (&&) short-circuit
let user = { name: "John", age: 30 };

// If user exists, then access user.name
console.log(user && user.name);        // "John"

let nullUser = null;
console.log(nullUser && nullUser.name); // undefined

// Practice usage 
function greetUser(user) {
    if (user && user.name) {
        console.log(`Hello, ${user.name}!`);
    } else {
        console.log("Hello, anonymous user!");
    }
}
greetUser(user);    // "Hello, John!"
greetUser(nullUser); // "Hello, anonymous user!"

// OR (||) short-circuit for default values
let userName = "";
let displayName = userName || "Guest";
console.log(displayName);     // "Guest"

let settings = null;
let theme = settings && settings.theme || "light";
console.log(theme);           // "light"

// Function with default parameters using ||
function createUser(name, age, city) {
    return {
        name: name || "Anonymous",
        age: age || 0,
        city: city || "Unknown"
    };
}

console.log(createUser("John"));
// { name: "John", age: 0, city: "Unknown" }

// Nullish Coalescing Operator (??) - ES2020

// Logical Assignment Operators - ES2021

// Assignment Operators
console.log("Assignment Operators")

// Compound Assignment Operators
console.log("Compound Assignment Operators")
let num = 20;

num += 5;       // num = num + 5
console.log(num)
num -= 3;       // num = num - 3
console.log(num)
num *= 2;       // num = num * 2
console.log(num)
num /= 4;       // num = num / 4
console.log(num)

// Operator Precedence and Associativity
console.log("Operator Precedence and Associativity")

// Precedence examples
console.log(2 + 3 * 4);         // 14 (not 20) - multiplication first
console.log((2 + 3) * 4);       // 20 - parentheses override precedence

console.log(10 - 5 - 2);        // 3 (left-to-right: (10 - 5) - 2)
console.log(2 ** 3 ** 2);       // 512 (right-to-left: 2 ** (3 ** 2))

// Mixed operators
let result = 5 + 3 * 2 > 10 && true;
// Step by step:
// 1. 3 * 2 = 6
// 2. 5 + 6 = 11
// 3. 11 > 10 = true
// 4. true && true = true
console.log(result); // true

// Use parentheses for clarity
let clearResult = ((5 + 3) * 2) > 10 && true;
console.log(clearResult); // true

// Common precedence order (highest to lowest):
// 1. Parentheses ()
// 2. Exponentiation **
// 3. Unary +, -, !, ++, --
// 4. Multiplication *, Division /, Modulus %
// 5. Addition +, Subtraction -
// 6. Comparison <, >, <=, >=
// 7. Equality ==, !=, ===, !==
// 8. Logical AND &&
// 9. Logical OR ||
// 10. Assignment =, +=, -=, etc.
