// 1. string literals
// 1.1 types

// 1.1 types - single quotes
let singleQuotes = 'This is a string in single quotes';

// 1.1 types - double quotes
let doubleQuotes = "This is a string in double quotes";

console.log(singleQuotes);
console.log(doubleQuotes);
console.log(`Template Literals: ${singleQuotes}, ${doubleQuotes}`);

// 2. String Immutability
let immutableString = "Hello, World!";
immutableString[0] = 'h'; // This will not change the string
console.log(immutableString); // Output: Hello, World!

immutableString = immutableString.replace('H', 'h'); // Correct way to change a string
console.log(immutableString); // Output: hello, World!
immutableString = immutableString.toUpperCase(); // Correct way to change a string
console.log(immutableString); // Output: HELLO, WORLD!

// 3. String Methods
let str = "Javascript"; // Original string
console.log(str.length); // Output: 10
console.log(str.toUpperCase()); // Output: JAVASCRIPT
console.log(str.toLowerCase()); // Output: javascript
console.log(str.indexOf('S')); // Output: 4
console.log(str.slice(4)); // Output: ascript -> from index 4 to end
console.log(str.slice(-1)); // Output: t -> last character
console.log(str.replace('Java', 'Type')); // Output: Typescript
console.log(str.charAt(0)); // Output: J
console.log(str.split('a')); // Output: [ 'J', 'v', 'script' ]
console.log(str.includes('Script')); // Output: false (case-sensitive)
console.log(str.startsWith('Java')); // Output: true
console.log(str.endsWith('script')); // Output: true
console.log(str.repeat(2)); // Output: JavascriptJavascript
console.log(str.trim()); // Output: Javascript (no leading/trailing spaces to trim)
console.log(str.concat(' is fun!')); // Output: Javascript is fun!

// 4. template literals
let myName = "John";
let myAge = 30;
let message = `My name is ${myName} and I am ${myAge} years old.`;
console.log(message); // Output: My name is John and I am 30 years old.

// 5. string manipulation techniques

// concatenation
let greet = "Hello, ";
let place = "World!";
let fullGreet = greet + place;
console.log(fullGreet); // Output: Hello, World!

// join array of strings
let words = ["This", "is", "a", "joined", "string."];
let joinedString = words.join('-');
console.log(joinedString); // Output: This-is-a-joined-string.

// regular expressions RegExp
let regExpText = "Hello, World!";
console.log(regExpText.replace(/o/g, "0")); // Hell0, W0rld!
console.log(regExpText.match(/[aeiou]/g)); // ["e", "o", "o"]

// 7. Error Handling in String Operations
function getSubstring(str, start, end) {
  try {
    if (typeof str !== "string") throw new TypeError("Not a string");
    return str.slice(start, end);
  } catch (error) {
    console.log(error.message);
    return "";
  }
}
console.log(getSubstring("Hello", 0, 2)); // He
console.log(getSubstring(123, 0, 2)); // Not a string, ""