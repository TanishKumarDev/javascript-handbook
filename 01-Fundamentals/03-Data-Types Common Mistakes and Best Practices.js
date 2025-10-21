// 1. Type Coercion Pitfalls
// Unexpected results
console.log(0 == false);         // true (avoid ==)
console.log("" == false);        // true (avoid ==)
console.log(null == undefined);  // true (avoid ==)

// Use strict equality
console.log(0 === false);        // false (better)
console.log("" === false);       // false (better)
console.log(null === undefined); // false (better)

// Be careful with + operator
console.log("5" + 3);            // "53" (concatenation)
console.log(+"5" + 3);           // 8 (unary + converts to number)


// 2. Checking for null/undefined
let value = null;

// Poor approach
if (value == null) {
    // This catches both null and undefined
}

// Better approach
if (value === null) {
    // Only catches null
}

if (value === undefined) {
    // Only catches undefined
}

// Check for both null and undefined
if (value == null) {
    // Acceptable when you want to catch both
}

// Modern approach (nullish coalescing)
let defaultValue = value ?? "default";

// 3. Array vs Object Detection
let arr = [];
let obj = {};

// Wrong way
console.log(typeof arr);         // "object" (not helpful)
console.log(typeof obj);         // "object" (not helpful)

// Right way
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false

// Alternative for objects
console.log(obj.constructor === Object); // true
console.log(arr.constructor === Array);  // true
