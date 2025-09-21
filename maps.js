// 1. Creating Maps

let emptyMap = new Map();
let arrayMap = new Map([[1, "one"], [2, "two"], [2, "duplicate"]]);
let objMap = new Map([[{ id: 1 }, "obj1"], [{ id: 2 }, "obj2"]]);

console.log(emptyMap); // Map(0) {}
console.log(arrayMap); // Map(2) {1 => "one", 2 => "two"}
console.log(objMap); // Map(2) {{id: 1} => "obj1", {id: 2} => "obj2"}

// 2. Map Methods

let mapMethods = new Map();
mapMethods.set("a", 1);
mapMethods.set("b", 2);
mapMethods.set("c", 3);

console.log(mapMethods.get("b")); // 2
console.log(mapMethods.has("b")); // true
console.log(mapMethods.size); // 3
console.log(mapMethods.delete("a")); // true
console.log(mapMethods.clear()); // undefined
console.log(mapMethods);

// 3. Iteration Over Maps
let mapIteration = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]);

// for...of
for(let [key, value] of mapIteration) {
    console.log(key, value);
}


// forEach
mapIteration.forEach((value, key) => {
    console.log(key, value);
});

// key, value, entries
console.log(...arrayMap.keys()); // 1, 2
console.log(...arrayMap.values()); // "one", "two"
console.log(...arrayMap.entries()); // [1, "one"], [2, "two"]

// 4. Practical Use Cases
let userMap = new Map();
let user = { id: 1 };
userMap.set(user, "John");
console.log(userMap.get(user)); // "John"

