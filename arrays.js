// 1. Array Creation
let literal = [1, 2, 3];
let constructor = new Array(3); // Sparse
let filled = Array(3).fill(0);
let mixed = [1, "a", { x: 1 }];
let of = Array.of(1, 2, 3);
let from = Array.from("abc");

console.log(literal); // [1, 2, 3]
console.log(constructor); // [ <3 empty items> ]
console.log(filled); // [0, 0, 0]
console.log(mixed); // [1, "a", { x: 1 }]
console.log(of); // [1, 2, 3]
console.log(from); // ["a", "b", "c"]

// 2. Accesing arrays elements
let arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));
let [first, second] = arr;
console.log(first, second); // 1 2

// 3. Appending Elemets
arr.push(4); // end
arr.unshift(0); // start
let newArr = [...arr, 5]; // non-mutating 
console.log(arr)
console.log(newArr)

// 4. Remove Elements
arr.pop(); // Remove last
arr.shift(); // Remove first
arr.splice(1, 1); // Remove index 1
let filtered = arr.filter(x => x !== 2); // Non-mutating
console.log(arr); // [2]
console.log(filtered); // []

// 5. Basic Array Methods
arr.push(4); // Add 4
arr.pop(); // Remove 4
arr.unshift(0); // Add 0 to start
arr.shift(); // Remove 0
arr.splice(1, 1, 5); // Replace index 1 with 5
console.log(arr); // [1, 5, 3]

// 6. Best-Known Array Methods (In-Depth)
// 6. Best-Known Array Methods (In-Depth) -> forEach

let arr1 = [1, 2, 3];
arr1.forEach((x,i) => console.log(`Index ${i}: ${x}`))
// 6. Best-Known Array Methods (In-Depth) -> map
console.log(arr1.map(x => x * 2))
// 6. Best-Known Array Methods (In-Depth) -> filter
console.log(arr1.filter(x => x > 2))
// 6. Best-Known Array Methods (In-Depth) -> reduce
console.log(arr1.reduce((sum, x) => sum + x, 0))
// 6. Best-Known Array Methods (In-Depth) -> find
console.log(arr1.find(x => x > 1)); // 2
// 6. Best-Known Array Methods (In-Depth) -> some
console.log(arr1.some(x => x > 2)); // 2
// 6. Best-Known Array Methods (In-Depth) -> every
console.log(arr1.every(x => x > 0));

// 7. Removing Duplicate Elements
let arr2 = [1, 2, 3, 1, 2, 3];
let unique = [...new Set(arr2)];
console.log(unique);

// 8. Filtering Object Arrays Based on Attributes
let users = [
    { id: 1, name: "Alice", age: 15 },
    { id: 2, name: "Bob", age: 20 },
    { id: 3, name: "Charlie", age: 20}
];
console.log(users.filter(user => user.age > 18));

// 9. Adding an Object to an Array
let arr3 = [{ n: 1 }];
arr.push({ n: 2 }); // Mutating
let newArr1 = [...arr, { n: 3 }]; // Non-mutating
console.log(arr); // [{ n: 1 }, { n: 2 }]
console.log(newArr); // [{ n: 1 }, { n: 2 }, { n: 3 }]
console.log(users);

// 10. Multidimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]); // 5 

// 11. Error Handling in Arrays
function getElement(arr, index) {
  try {
    if (!Array.isArray(arr)) throw new TypeError("Not an array");
    if (index >= arr.length) throw new RangeError("Index out of bounds");
    return arr[index];
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
console.log(getElement([1, 2], 1)); // 2
console.log(getElement("not array", 0)); // Not an array, null
console.log(getElement([1, 2], 5)); // Index out of bounds, null