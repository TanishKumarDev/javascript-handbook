// Basic Syntax

// Traditional function
function add1(a, b) {
  return a + b;
}

// Arrow function (shorter syntax)
const add2 = (a, b) => a + b;

// Arrow function with explicit return
const add3 = (a, b) => {
  return a + b;
};

// Single parameter (parentheses optional)
const sq1 = a => a * a;
const sq2 = (a) => a * a;

// No parameters
const hello = () => "Hello";
const getCurrentTime = () => new Date();

// Different Arrow Function Forms

// Multiple lines (explicit return)
const processUser = (user) => {
  const name = user.name.toUpperCase();
  const email = user.email.toLowerCase();
  return { name, email };
};

// Single expression (implicit return)
const double = x => x * 2;
const isEven = x => x % 2 === 0;
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// Returning objects directly
const createPerson = (name, age) => ({
  name: name,
  age: age,
  id: Math.random(),
});

// Array operations using arrow functions
const numbers = [1, 2, 3, 4, 5];

// map() → transform elements
const doubledNumbers = numbers.map(num => num * 2);

// filter() → select only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// reduce() → sum of all numbers
const sumNumbers = numbers.reduce((total, num) => total + num, 0);

// reduce() → product of all numbers
const productNumbers = numbers.reduce((total, num) => total * num, 1);

// sort() → sort in ascending order
const sortedNumbers = numbers.sort((a, b) => a - b);

// reverse() → reverse array order
const reversedNumbers = numbers.reverse();

// find() → first even number
const firstEvenNumber = numbers.find(num => num % 2 === 0);

// findIndex() → index of first even number
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);

// every() → check if all are even
const allEven = numbers.every(num => num % 2 === 0);

// some() → check if at least one is even
const anyEven = numbers.some(num => num % 2 === 0);

// Arrow Functions vs Regular Functions

// 1. Difference in 'this' binding
const obj1 = {
  name: "John",

  // Regular function → 'this' refers to current object (obj1)
  regularMethod: function() {
    console.log("regular method:", this.name);
  },

  // Arrow function → 'this' does NOT bind to object; it refers to outer/global scope
  arrowMethod: () => {
    console.log("arrow method:", this.name); // likely undefined or global value
  }
};

// 2. Arrow functions cannot be used as constructors

// Regular function can act as constructor
const RegularFunc = function(name) {
  this.name = name;
};
const person1 = new RegularFunc("John"); // Works fine

// Arrow function cannot be used as constructor
const ArrowFunc = (name) => {
  this.name = name;
};
// const person2 = new ArrowFunc("John"); // ❌ TypeError: ArrowFunc is not a constructor

// 3. Arrow functions do not have their own 'arguments' object

// Regular function has arguments object
function showArgsRegular() {
  console.log(arguments); // accessible
}

// Arrow function does NOT have arguments object
const showArgsArrow = () => {
  // console.log(arguments); // ❌ ReferenceError
};

// Use rest parameters instead in arrow functions
const showArgsWithRest = (...args) => {
  console.log(args); // Works fine
};
