// Creating Objects
// Object Literal Syntax
const obj1 = {
    username: "John",
    age: 30,
    isAdmin: true
}

// Empty Object
const obj2 = {};

// Object constructor
const obj3 = new Object();
obj3.name = "Bob";
obj3.age = 25;

// Nested Object
const obj4 = {
    user: {
        username: "John",
        age: 30,
        isAdmin: true
    },
    settings: {
        language: "en",
        theme: "light"
    }
};

// Accessing Properties
const obj5 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

console.log(obj5.brand); // "Toyota"
console.log(obj5.model); // "Camry"
console.log(obj5.year); // 2022

// Bracket notations
console.log(obj5["model"]); // "Camry"
console.log(obj5["brand"]); // "Toyota"
console.log(obj5["year"]); // 2022

// Dynamic property access
const property = "brand";
console.log(obj5[property]); // "Toyota"

// Non-existent property
console.log(obj5.color); // undefined

// Adding and Modifying Properties
obj5.color = "blue";
obj5.year = 2021;
console.log(obj5);

// Deleting Properties
delete obj5.year;
console.log(obj5);

// Dynamic property names
const key = "name";
obj5[key] = "Bob";
console.log(obj5);

// Deleting Properties
const obj6 = {
    name: "John",
    age: 30,
    isAdmin: true 
}
// Delete property
delete obj6.age;
console.log(obj6);

// Check if property exists
console.log("name" in obj6); // true
console.log("age" in obj6); // false

// Alternative check
console.log(obj6.hasOwnProperty("name")); // true
console.log(obj6.hasOwnProperty("age")); // false
console.log(obj6.hasOwnProperty("brand")); // false

// Object Methods
const obj7 = {
    result: 0,

    // Method using function keyword
    add: function(num){
        this.result += num;
        return this;
    },

    // Method using shorthand syntax
    subtract(num) {
        this.result -= num;
        return this;
    },

    // Arrow function#
    multiply: (num) => {
        console.log("Arrow function". this);
    },

    getValue() {
        return this.result;
    },

    reset() {
        this.result = 0;
        }
};

// Method chaining
obj7.add(5).add(10).subtract(3).getValue();
console.log(obj7.getValue());

// Object Iteration
const obj8 = {
    name: "John",
    age: 30,
    isAdmin: true
};

// for...in loop (iterates over keys)
for (let key in obj8) {
    console.log(key, obj8[key]);
}

// Object.keys() - get array of keys
const keys = Object.keys(obj8);
console.log(keys);

// Object.values() - get array of values
const values = Object.values(obj8);
console.log(values);

// Object.entries() - get array of key-value pairs
const entries = Object.entries(obj8);
console.log(entries);

// Object.freeze() - freeze object
const obj9 = {
    name: "John",
    age: 30,
    isAdmin: true
};
Object.freeze(obj9);
obj9.name = "Bob";

// Copying Objects
const original = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming"]
};

// Shallow copy methods
const copy1 = { ...original }; // Spread operator
const copy2 = Object.assign({}, original); // Object.assign

// Both create shallow copies
copy1.name = "Jane";
console.log(original.name); // "John" - unchanged

// But nested objects are still referenced
copy1.hobbies.push("cooking");
console.log(original.hobbies); // ["reading", "gaming", "cooking"] - changed!

// Deep copy (simple objects only)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.hobbies.push("swimming");
console.log(original.hobbies); // ["reading", "gaming", "cooking"] - unchanged

// Object Comparison
const obj10 = {
    name: "John",
    age: 30
};

const obj11 = {
    name: "John",
    age: 30
};

console.log(obj10 === obj11); // false