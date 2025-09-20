// 1. Creating Regular Expressions
console.log("🎯 1. Creating Regular Expressions")
let litral = /hello/i; 
let constructor = new RegExp('hello', 'i');

console.log(litral); // /hello/i
console.log(litral.test('hello')); // true
console.log(constructor); // /hello/i
console.log(constructor.test('hello')); // true

// Code Example (Dynamic Pattern):
let pattern = "hello";
let regex = new RegExp(pattern, "i");
console.log(regex.test("Hello")); // true

// 2. Flags
console.log("🎯 2. Flags")
let str = "Hello hello HELLO!";
let regexFlag = /hello/i;
console.log(str.match(regexFlag)); // ["Hello", "hello", "HELLO"]

// 3. Common Patterns and Metacharacters
console.log("🎯 3. Common Patterns and Metacharacters")
let commonPattern = "123 abc";
console.log(/\d+/.test(commonPattern)); // true (matches "123")
console.log(/[a-c]/.test(commonPattern)); // true (matches "a", "b", or "c")
console.log(/^abc$/.test("abc")); // true (exact match)

// 4. RegExp Methods
console.log("🎯 4. RegExp Methods")
let regexMethods = /\d+/;
console.log(regexMethods.test("123")); // true
console.log(regexMethods.test("abc")); // false

// 5. String Methods with RegExp
console.log("🎯 5. String Methods with RegExp")
let stringMethods = "123";
console.log(stringMethods.match(/\d+/)); // ["123"]
console.log(stringMethods.replace(/\d+/, "abc")); // "abc"

// 6. Groups and Lookaheads
console.log("🎯 6. Groups and Lookaheads")
let groups = "123";
console.log(groups.match(/(\d+)/)); // ["123", "123"]
console.log(groups.replace(/(\d+)/, "abc")); // "abc"

// 7. Practical Use Cases
console.log("🎯 7. Practical Use Cases")
function isValidEmail(email){
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
console.log(isValidEmail("user@domain.com")); // true
console.log(isValidEmail("invalid@.com")); // false

function isStrongPassword(pwd){
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number
    return regex.test(pwd);
}
console.log(isStrongPassword("Abc123456")); // true
console.log(isStrongPassword("abc123")); // false