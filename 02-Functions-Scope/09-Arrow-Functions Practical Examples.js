// Array processing
const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 35, active: true }
];

// filter() → returns only active users
const activeUsers = users.filter(user => user.active);

// map() → extracts only user names into a new array
const userNames = users.map(user => user.name);

// find() → finds the first user with name "Alice"
const foundUser = users.find(user => user.name === "Alice");

// sort() → sorts users by their age (ascending)
const sortedUsers = users.sort((a, b) => a.age - b.age);

console.log("Active Users:");
console.log(activeUsers);

console.log("User Names:");
console.log(userNames);

console.log("Find User by Name:");
console.log(foundUser);

console.log("Sorted Users by Age:");
console.log(sortedUsers);

// Async function example - API Call
const fetchUser = async () => {
    // fetch() → makes a GET request to API
    const response = await fetch("https://api.example.com/user");
    // converts response to JSON
    const userData = await response.json();
    console.log(userData);
};

// Utility functions

// checks if array is empty
const isEmpty = arr => arr.length === 0;

// validates if email has '@'
const isValidEmail = email => email.includes("@");

// formats price into currency
const formatPrice = price => `$${price.toFixed(2)}`;

// generates a random number between min and max
const getRandomNumber = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min;

// When to Use Arrow Functions

// good for array methods like map(), reduce(), filter()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // map each element * 2
const sum = numbers.reduce((acc, num) => acc + num, 0); // sum all numbers

// good for short utility functions
const add = (a, b) => a + b;
const isPositive = x => x > 0;

// good for callbacks
setTimeout(() => console.log("Timer finished"), 1000);

// Avoid arrow functions for object methods that use 'this'
const user1 = {
    name: "John",
    greet: () => console.log(`Hello, ${this.name}`) // 'this' doesn't refer to user1
};

// Better: use normal function so 'this' refers to the object
const user2 = {
    name: "John",
    greet() {
        console.log(`Hello, ${this.name}`); // 'this' works correctly
    }
};

// Avoid arrow functions for event handlers when 'this' is needed
// Example with button event
// const button = document.querySelector("button");

// ❌ Wrong: arrow function loses 'this' context
// button.addEventListener("click", () => {
//     console.log(this); // 'this' is not the button
// });

// ✅ Correct: normal function keeps 'this' as the button
// button.addEventListener("click", function() {
//     console.log(this); // refers to the button
// });
