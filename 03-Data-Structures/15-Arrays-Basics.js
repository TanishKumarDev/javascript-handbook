
// ✅ Creating Arrays

// Array literal (most common)

const fruit = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["apple", 1, "banana", 2, "orange", 3];

// Array constructor
const arr1 = new Array(); // []
const arr2 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]
const arr3 = new Array(1,2,3,4, 5); // [1, 2, 3, 4, 5]

// Empty array
const emptyArr = [];

// Arrays with different types
const data =
[
    "apple",
    1,
    true,
    ["a", "b", "c"],
    {
        name: "John",
        age: 30
    },
    function() {
        return "Hello";
    }
]

// ✅ Accessing Array Elements

const colors = ["red", "green", "blue", "yellow"];

console.log(colors[0]) // "red"
console.log(colors[colors.length - 1]) // "yellow"
console.log(colors[3]) // "yellow"
console.log(colors[colors.length]) // undefined
console.log(colors[-1]) // undefined

// ✅ Array Properties

const items = ["a", "b", "c", "d"];

console.log(items.length) // 4

// change the length
items.length = 2;
console.log(items.length) // 2

// ✅ Adding Elements to an Array

const fruits = ["apple", "banana"];

fruits.push("orange"); // ["apple", "banana", "orange"]
fruits.push("grape"); // ["apple", "banana", "orange", "grape"]

// unshift adds an element to the beginning of the array
fruits.unshift("mango"); // ["mango", "apple", "banana", "orange", "grape"]


// Add at specific index
fruits[10] = "kiwi";
console.log(fruits); // Creates empty slots between
console.log(fruits.length); // 11

//  ✅ Removing Elements

const numbersCollection = [1, 2, 3, 4, 5];

numbersCollection.pop(); // Remove last element
numbersCollection.shift(); // Remove first element
numbersCollection.splice(1, 2); // Remove elements at index 1 and 2

// ✅ Modifying Elements

const pets = ["dog", "cat", "bird"];

// Change element
pets[1] = "hamster";
console.log(pets); // ["dog", "hamster", "bird"]

// Add element at specific position
pets[3] = "fish";
console.log(pets); // ["dog", "hamster", "bird", "fish"]

// Replace multiple elements
pets.splice(1, 2, "rabbit", "turtle");
console.log(pets); // ["dog", "rabbit", "turtle", "fish"]

// ✅ Array Methods Overview

const arr = [1, 2, 3];

// Check if it's an array
console.log(Array.isArray(arr)); // true
console.log(Array.isArray("hello")); // false

// Convert to string
console.log(arr.toString()); // "1,2,3"
console.log(arr.join(" - ")); // "1 - 2 - 3"

// Find index of element
const fruitsCollection = ["apple", "banana", "orange", "banana"];
console.log(fruits.indexOf("banana")); // 1 (first occurrence)
console.log(fruits.lastIndexOf("banana")); // 3 (last occurrence)
console.log(fruits.indexOf("grape")); // -1 (not found)

// Check if element exists
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("grape")); // false

//  ✅ Copying Arrays

const original = [1, 2, 3];

// Shallow copy methods
const copy1 = [...original]; // Spread operator
const copy2 = Array.from(original); // Array.from()
const copy3 = original.slice(); // slice()

// All create independent copies
copy1.push(4);
console.log(original); // [1, 2, 3] - unchanged
console.log(copy1); // [1, 2, 3, 4]

// Be careful with nested objects/arrays
const nested = [1, [2, 3], 4];
const shallowCopy = [...nested];
shallowCopy[1].push(5);
console.log(nested); // [1, [2, 3, 5], 4] - inner array modified!


// ✅ Combining Arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// Using concat
const combined1 = array1.concat(array2);
console.log(combined1); // [1, 2, 3, 4, 5, 6]

// Using spread operator (modern)
const combined2 = [...array1, ...array2, ...arr3];
console.log(combined2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Adding individual elements
const combined3 = [...array1, "middle", ...array2];
console.log(combined3); // [1, 2, 3, "middle", 4, 5, 6]
