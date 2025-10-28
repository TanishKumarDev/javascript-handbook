// ✅ Global Context
// In global scope, 'this' refers to the global object

// // Window object in browser, global in Node.js
console.log(this); // {} (empty object)

console.log("👉 Normal (Non-Strict) Mode")
function globalFunc() {
    console.log(this); // Window object (or undefined in strict mode)
}
globalFunc();

/*
Explanation:

Jab tum ek normal function call karte ho (globalFunction()),
bina kisi object ke, JS automatically this ko global object se bind kar deta hai.

Browser me → this = window
Node.js me → this = global
*/

// Strict Mode
console.log("👉 Strict Mode")
"use strict";
function strictFunc() {
    console.log(this); // undefined
}
strictFunc();
/*

Explanation:

Strict mode me JavaScript ne automatic binding disable kar diya hai.
Matlab agar tum function ko bina object ke call karte ho,
JS this ko undefined rakhta hai —
taaki galti se global object modify na ho.

*/

// 👉 In short:

// Without strict mode: this defaults to global object.
// With strict mode: this becomes undefined in simple function calls.
// Purpose: prevent accidental global access/modification.

// ✅ Object Method Context

const person = {
    username: "Tanish",
    bio: "Frontend dev",

    greet: function () {
        console.log(`HI, I'm ${this.username} a ${this.bio}`);
    },
    getInfo: function() {
        return `${this.username} is ${this.bio} in XYZ MNC`;
    }
};

person.greet();
console.log(person.getInfo());


// ✅ Arrow Functions and 'this'
const obj = {
    name: "Bob",
    
    regularMethod: function() {
        console.log("Regular:", this.name); // "Bob"
        
        const innerArrow = () => {
            console.log("Arrow inside regular:", this.name); // "Bob"
        };
        innerArrow();
    },
    
    arrowMethod: () => {
        console.log("Arrow method:", this.name); // undefined (inherits from global)
    }
};

obj.regularMethod();
obj.arrowMethod();

// 👉 Regular function → 'this' refers to current object (obj)
// Arrow function → 'this' does NOT bind to object; it refers to outer/global scope

// ✅ Constructor Functions
function Person(name, age) {
    this.name = name; // 'this' refers to the new instance
    this.age = age;
    
    this.greet = function() {
        console.log(`Hi, I'm ${this.name}`);
    };
}

const person1 = new Person("Charlie", 25);
const person2 = new Person("Diana", 28);

person1.greet(); // "Hi, I'm Charlie"
person2.greet(); // "Hi, I'm Diana"

console.log(person1.name); // "Charlie"
console.log(person2.name); // "Diana"

// ✅ Event Handlers

// const button = document.querySelector('#myButton');

// // Regular function - 'this' refers to the button
// button.addEventListener('click', function() {
//     console.log(this); // The button element
//     this.style.backgroundColor = 'blue';
// });

// // Arrow function - 'this' refers to outer scope
// button.addEventListener('click', () => {
//     console.log(this); // Window object (not the button)
// });

// // Object method as event handler
// const handler = {
//     color: 'red',
    
//     handleClick: function() {
//         console.log(this.color); // "red"
//     }
// };

// // Need to bind 'this' when using object methods
// button.addEventListener('click', handler.handleClick.bind(handler));
