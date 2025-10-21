// ➡️ Primitive Data Types 
// ➡️ Number
// JavaScript has only one number type that represents both integers and floating-point numbers:
// int
let age = 25;
let score = 85;
let year = 2023;

// floating point
let price = 19.99;
let pi = 3.14159;
let percentages = 0.75;

// scientic notation
let bigNumber = 1e6; // 1 million
let smallNumber = 1e-3; // 0.001

// special values
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

// string
let name = "John Doe";
let message = "Hello, world!";

console.log(typeof age)
console.log(typeof price)
console.log(typeof infinity)
console.log(typeof NaN)


// ➡️ Working with Numbers

// basic arithmetic
let a = 10;
let b = 2;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

// increment and decrement
let counter = 5;
counter++;
console.log(counter); // 6
++counter;
console.log(counter); // 7

counter--;
console.log(counter); // 6
--counter;
console.log(counter); // 5

// numbers methods
let num = 123.456
console.log(num.toFixed(2)) 
console.log(num.toPrecision(4))
console.log(num.toExponential(2))   

// checking for valid numbers
console.log(isNaN("Hi"));
console.log(isFinite(100))
console.log(isFinite(infinity))

// ➡️ 2. String
// Strings represent text data and can be created using single quotes, double quotes, or template literals:
let singleQuotes = 'Hello, world!';
let doubleQuotes = "Hello, world!";
let templateLiteral = `Hello, world!`;

// sting with quotes insides
let msg1 = "Hello, 'world'!";
let msg2 = 'Hello, "world"!';
let msg3 = 'Hello, "world"!';

let multiLine = 
`
    this is
    a multi-line
    string
`
// string interpolation(template literal)
let userName = "John Doe";
let userAge = 30;
let greeting = `Hello, ${userName}! You are ${userAge} years old.`
console.log(greeting)

// ➡️ String Properties and Methods
let text = "JavaScript is awesome!";

// Properties
console.log(text.length);           // 21

// Case methods
console.log(text.toUpperCase());    // "JAVASCRIPT IS AWESOME!"
console.log(text.toLowerCase());    // "javascript is awesome!"

// Search methods
console.log(text.indexOf("Script")); // 4
console.log(text.includes("Java"));  // true
console.log(text.startsWith("Java")); // true
console.log(text.endsWith("some!"));  // true

// Extraction methods
console.log(text.substring(0, 10));  // "JavaScript"
console.log(text.slice(0, 10));     // "JavaScript"
console.log(text.slice(-8));        // "awesome!"

// Replace methods
console.log(text.replace("awesome", "amazing")); // "JavaScript is amazing!"

// Split method
let words = text.split(" ");
console.log(words); // ["JavaScript", "is", "awesome!"]

// Trim whitespace
let messy = "  Hello World  ";
console.log(messy.trim()); // "Hello World"

// ➡️ String Concatenation

let firstName = "John";
let lastName = "Doe";

// Method 1: + operator
let fullName1 = firstName + " " + lastName;

// Method 2: Template literals (recommended)
let fullName2 = `${firstName} ${lastName}`;

// Method 3: concat() method
let fullName3 = firstName.concat(" ", lastName);

// Complex template literals
let user = {
    name: "Alice",
    age: 30,
    city: "New York"
};

let userInfo = `
    User Information:
    Name: ${user.name}
    Age: ${user.age}
    City: ${user.city}
    Status: ${user.age >= 18 ? "Adult" : "Minor"}
`;

console.log(userInfo);

// ➡️ 3. Boolean
// Booleans represent logical values - either true or false:

// direct boolean values
let isActive = true;
let isComplete = false;
let hasPermission = true;

// boolen from comparison
let herAge = 25;
let isAdult = herAge >= 18;
let isTeenager = herAge >= 13 && herAge <= 19;
let canVote = herAge >= 18 && herAge <= 65;

// boolean from function
let username = "johndoe";
let password = "password123";
let isAuthenticated = username !== "" && password !== "";
let hasValidName = username.length >= 0;

console.log(typeof isActive)

// ➡️ Truthy and Falsy Values
// JavaScript converts values to booleans in certain contexts. Understanding truthy and falsy values is crucial:

// / Falsy values (convert to false)
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(0n))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

// Truthy values (everything else converts to true)
console.log(Boolean(true))
console.log(Boolean(1))
console.log(Boolean(-1))
console.log(Boolean("Hi"))
console.log(Boolean("0"))
console.log(Boolean([]))
console.log(Boolean({}))

// use case
let userInput = "";
if (userInput) {
    console.log("User input is truthy");
} else {
    console.log("User input is falsy");
}

// ➡️ 4. Undefined

// Variable declared but not initialized
let myVar;
console.log(myVar); // undefined
console.log(typeof myVar)

// Function with no return value
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("John"); // "Hello, John!"

let result = greet();
console.log(result);

// object property that doesnt exist
let person = {
    name: "John",
    age: 30
};
let address = person.address; // undefined
console.log(person.city);        // undefined
// Array element that doesn't exist
let numbers = [1, 2, 3];
let index = numbers[5]; // undefined
console.log(numbers[10])

// ➡️ 5. Null
// null represents an intentional absence of value:

// intentional absence of any object value
let data = null;
let selectedItem = null;
console.log(data); // null

console.log(typeof null);

// common usage patterns
function findUser(id) {
    // if user not found, return null
    if (id === 1) {
        return {
            id: 1,
            name: "John Doe"
        };
    }
}
let findingUser = findUser(1);
console.log(findingUser)

// object property explicitly set to null
let product = {
    name: "Laptop",
    price: 999.99,
    description: null // description is intentionally absent
};
console.log(product.description); // null

// Difference between null and undefined
let undefinedVar;
let nullVar = null;

console.log(undefinedVar == null);   // true (loose equality)
console.log(undefinedVar === null);  // false (strict equality)
console.log(nullVar == undefined);   // true (loose equality)
console.log(nullVar === undefined);  // false (strict equality)

// ➡️ 6. Symbol (ES6+)
// Symbols are unique identifiers, primarily used for object properties:

// creating symbols
let sym1 = Symbol();
let sym2 = Symbol("uniqueId");
let sym3 = Symbol("uniqueId");

console.log("sym1 == sym3 => ", sym1 == sym3)
console.log(typeof sym1)


// using symbols as object properties
let userObj = {
    name: "Alice",
    age: 28,
    [sym2]: "This is a unique symbol property"
};

console.log(userObj[sym2]);

// Symbols are not enumerable
console.log(Object.keys(userObj)); // ["name", "age"] (symbol key not included)

// ➡️ 7. BigInt (ES2020+)
// BigInt represents integers larger than Number.MAX_SAFE_INTEGER:

// creating BigInt values
let bigNumber1 = 123n;
let bigNumber2 = BigInt(123);
let bigNumber3 = BigInt("123456789012345678901234567890");

console.log(typeof bigNumber1);
console.log(typeof bigNumber2);
console.log(typeof bigNumber3);

// bigInt operations
let bigSum = bigNumber1 + 100n;
let bigProduct = bigNumber2 * 2n;
console.log(bigSum);
console.log(bigProduct);

// can't mix BigInt with regular numbers
console.log(123n + BigInt(456)) // valid
// console.log(123n + 456) // Error

// ➡️ Non-Primitive Data Types

// ➡️ 1. Objects
// Objects are collections of key-value pairs:

let personObj = {
    firstName: "John Doe",
    lastName: "Doe", 
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "traveling", "swimming"],
};
// accessing object properties
console.log(personObj.firstName);
console.log(personObj["age"]);
console.log(personObj.address.city);
console.log(personObj.hobbies[1]);

// Adding/modifying properties
personObj.email = "john@example.com";
personObj.address.city = "San Francisco";
personObj.hobbies.push("cooking");

console.log(personObj);

// deleting properties
delete personObj.isEmployed;

console.log(personObj);

// ➡️ 2. Arrays
// Arrays are ordered lists of values:

// Array literal syntax
let arrNumbers = [1, 2, 3, 4, 5];
let arrFruits = ["apple", "banana", "orange"];
let arrMixed = [1, "hello", true, null, { name: "John" }];

// Accessing elements
console.log(arrFruits[0]);                  // "apple"
console.log(arrFruits[arrFruits.length - 1]); // "orange" (last element)

// Array properties and methods
console.log(arrFruits.length);              // 3
arrFruits.push("grape");                    // Add to end
arrFruits.unshift("mango");                 // Add to beginning
let lastFruit = arrFruits.pop();            // Remove from end
let firstFruit = arrFruits.shift();         // Remove from beginning

console.log(typeof arrFruits);              // "object"
console.log(Array.isArray(arrFruits));     // true

// ➡️ 3. Functions
// Functions are reusable blocks of code that perform a specific task:

// Function declaration
function greetUser(name) {
    return `Hello, ${name}!`;
}

// Function expression -> anonymous -> can be assigned to a variable
let sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

// arrow function (ES6+)
let addNumbers = (a, b) => a + b;

console.log(greetUser("Alice"));       // "Hello, Alice!"
console.log(sayGoodbye("Bob"));
console.log(addNumbers(5, 10));       // 15

// ➡️ Type Checking and Conversion

// Checking Types
let verifyValue = 42;

// typeof operator
console.log(typeof verifyValue) // "number"
console.log(typeof 42n) // "bigint"
console.log(typeof "Hello") // "string"
console.log(typeof true) // "boolean"
console.log(typeof {}) // "object"
console.log( typeof null)
console.log( typeof {}) // "object"
console.log(typeof function(){})

// more specific checks
console.log(Array.isArray([]));
console.log(Array.isArray({}));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray(arrFruits));

// constructor checks

console.log(verifyValue instanceof Number);
console.log(verifyValue instanceof Number);

//  ➡️ Type Conversion
// JavaScript performs automatic type conversion (coercion) in many situations:

// automatic type coercion
console.log("5" + 3);        // "53" (number to string)
console.log("5" - 3);        // 2 (string to number)
console.log("5" * "2");      // 10 (both strings to numbers)
console.log(true + 1);       // 2 (boolean to number)
console.log(false + 1);      // 1 (boolean to number)

// Explicit conversion
let str = "123";
let isNum = Number(str);       // 123
let isBool = Boolean(str);     // true

let isNum2 = 456;      // "456"
let isStr = String(isNum2);    // "456"
let isBool2 = Boolean(isNum2);  // true

console.log(isNum);
console.log(isStr);
console.log(isBool);
console.log(isBool2);

// parsing string to number
console.log(parseInt("123.45"));    // 123
console.log(parseFloat("123.45"));  // 123.45
console.log(parseInt("123abc"));    // 123
console.log(parseInt("abc123"));    // NaN