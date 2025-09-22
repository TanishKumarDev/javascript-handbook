// 1. WeakMap
// Creating WeakMap
let weakMap = new WeakMap();
let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakMap.set(obj1, "obj1");
weakMap.set(obj2, "obj2");

console.log(weakMap.get(obj1)); // obj1
console.log(weakMap.get(obj2)); // obj2

// Code Example (Error Case):
try{
    let weakMap = new weakMap();
    weakMap.set("key", "value"); // TypeError
} catch (error) {
    console.log(error.message);
}

// Code Example:
let obj = {};
weakMap.set(obj, "data");
console.log(weakMap.get(obj)); // data
console.log(weakMap.has(obj)); // true
weakMap.delete(obj);
console.log(weakMap.has(obj)); // false

// 2. WeakSet

// Creating WeakSet

let weakSet = new WeakSet();
let weakSetobj1 = { id: 1 };
let weakSetobj2 = { id: 2 };

weakSet.add(weakSetobj1);
weakSet.add(weakSetobj2);
weakSet.add(weakSetobj1); // Ignored
console.log(weakSet.has(weakSetobj1)); // true

// Code Example (Error Case):
try {
    let weakSet = new WeakSet();
    weakSet.add("key");
} catch (error) {
    console.log(error.message);    
}