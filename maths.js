// 1. The Math Object
console.log("🎯 1. The Math Object");
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// 2. Common Math Methods
console.log("🎯 2. Common Math Methods");

let num = 3.14;
console.log(Math.round(num)); // 3
console.log(Math.ceil(num)); // 4
console.log(Math.floor(num)); // 3

// Random Numbers
console.log("🎯 Random Numbers");
console.log(Math.floor(Math.random() *10)); // Random number between 0 and 9

function gerRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(gerRandomInt(1, 10));

// 3. Trigonometric Methods
console.log("🎯 3. Trigonometric Methods");
let angle = Math.PI / 2; // 90 degrees
console.log(Math.sin(angle)); // 1
console.log(Math.cos(angle)); // ~0 (small float due to precision)
console.log(Math.tan(Math.PI / 4)); // 1 (45 degrees)

// 4. Other Useful Math Methods
console.log("🎯 4. Other Useful Math Methods");
console.log(Math.abs(-5)); // 5
console.log(Math.pow(2, 3)); // 8 (2 to the power of 3
console.log(Math.sqrt(25)); // 5
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// 5. Practical Use Cases
let arr = ["apple", "banana", "cherry", "date", "elderberry"];
let randomIndex = Math.floor(Math.random () * arr.length);
console.log(arr[randomIndex]);

// Rounding for Display
let price = 12.3456789;
console.log(Math.round(price))
console.log(price.toFixed(3))

// Geometric Calculations
function circleArea(radius) {
    return Math.PI * radius * radius;
}
console.log(circleArea(5));

// 6. Edge Cases and Quirks
// 7. Error Handling with Math
function safeSqrt(num) {
  try {
    if (typeof num !== "number" || Number.isNaN(num)) throw new TypeError("Invalid number");
    if (num < 0) throw new RangeError("Negative number");
    return Math.sqrt(num);
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
console.log(safeSqrt(16)); // 4
console.log(safeSqrt(-1)); // Negative number, null
console.log(safeSqrt("16")); // Invalid number, null