// 1. Creating Sets
let emptySet = new Set();
let arrayset = new Set([1, 2, 3]);
let stringset = new Set("hello");
console.log(emptySet); // Set {}
console.log(arrayset); // Set { 1, 2, 3 }
console.log(stringset); // Set { 'h', 'e', 'l', 'l', 'o' }

// Error case 
try {
    let invalid = new Set(123); // Non-iterable
} catch (error) {
    console.log(error.message); // 123 is not iterable
}

// 2. Set Methods
let setMethods = new Set([1, 2, 3]);
setMethods.add(4); // { 1, 2, 3, 4 }
setMethods.add(4); // { 1, 2, 3, 4 }
setMethods.delete(4); // { 1, 2, 3 }
console.log(setMethods.has(2)); // true
console.log(setMethods.size); // 3
console.log(setMethods);
setMethods.clear(); // {}
console.log(setMethods);

// 3. Iteration Over Sets
let setIteration = new Set([1, 2, 3]);

// for...of
for(let value of setIteration) {
    console.log("for...of",value); // 1, 2, 3
}

// forEach
setIteration.forEach(value => 
    console.log(value)
); // 1, 2, 3

// keys and values (same for Sets)
console.log([...setIteration.keys()]); // [1, 2, 3]
console.log([...setIteration.values()]); // [1, 2, 3]

// keys and values (same for Sets)
console.log([...setIteration.keys()]); // [1, 2, 3]
console.log([...setIteration.values()]); // [1, 2, 3]

// 4. Practical Use Cases

// remove duplicates
let arr = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4]

// Set Operations
// Union: Combine Sets.
// Intersection: Common values.
// Difference: Values in one Set but not another.

let setA = new Set([1, 2, 3]);
let setB = new Set([2, 3, 4]);

// Union
let union = new Set([...setA, ...setB]);
console.log(union); // Set(4) {1, 2, 3, 4}

// Intersection
let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Set(2) {2, 3}

// differenece
let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Set(1) {1}