// Array Spread

const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b]; // [1, 2, 3, 4]
const copy = [...a]; // [1, 2]

console.log(c);
console.log(copy);

// Object Spread
const user = { name: "John", age: 30 };
const updates = { age: 35, city: "NY" };
const merged = { ...user, ...updates };

console.log(merged);

// Rest 
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]