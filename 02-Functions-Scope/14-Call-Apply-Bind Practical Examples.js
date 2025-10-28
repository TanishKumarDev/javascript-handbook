// ------------------------------------------------------------
// 1. Borrowing Methods using call()
// ------------------------------------------------------------

const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.getFullName()); // "John Doe"

const anotherPerson = {
    firstName: "Jane",
    lastName: "Smith"
};

// 'call()' se hum manually 'this' ko 'anotherPerson' pe set kar rahe hain
console.log(person.getFullName.call(anotherPerson)); // "Jane Smith"


// ------------------------------------------------------------
// 2. Array-like Objects → Borrowing Array Methods
// ------------------------------------------------------------

// Yeh ek array-like object hai (index aur length property hai)
const arrayLike = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};

// 'slice' method array ka hai, use 'call' karke hum ise array-like object pe use kar sakte hain
const realArray = Array.prototype.slice.call(arrayLike);
console.log(realArray); // ["a", "b", "c"]


// ------------------------------------------------------------
// 3. Finding Max / Min in Arrays
// ------------------------------------------------------------

const numbers = [5, 2, 3];

// 'apply()' me arguments ek array ke form me diye jaate hain
const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

console.log(max); // 5
console.log(min); // 2

// Modern (ES6) alternative → Spread operator (...)
console.log(Math.max(...numbers)); // 5
console.log(Math.min(...numbers)); // 2


// ------------------------------------------------------------
// 4. Event Handlers with bind() → Fixing 'this' context
// ------------------------------------------------------------

// class Button {
//     constructor(element) {
//         this.element = element;
//         this.clickCount = 0;
        
//         // 'bind(this)' ensures that 'this' refers to the current object
//         this.element.addEventListener('click', this.handleClick.bind(this));
//     }
    
//     handleClick() {
//         this.clickCount++;
//         console.log(`Button clicked ${this.clickCount} times`);
//     }
// }

// // Usage example (in browser):
// const button = document.querySelector('#myButton');
// const buttonHandler = new Button(button);


// ------------------------------------------------------------
// 5. Partial Application with bind()
// ------------------------------------------------------------

// Function with 3 arguments
function multiply(a, b, c) {
    return a * b * c;
}

// 'bind()' allows pre-filling (fixing) some arguments
const multiplyByTwo = multiply.bind(null, 2);       // a = 2 fix
const multiplyByTwoAndThree = multiply.bind(null, 2, 3); // a = 2, b = 3 fix

console.log(multiplyByTwo(5, 3));       // 2 * 5 * 3 = 30
console.log(multiplyByTwoAndThree(4));  // 2 * 3 * 4 = 24


// ------------------------------------------------------------
// 6. Practical Example → API Calls using bind()
// ------------------------------------------------------------

// Generic API call function
function apiCall(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });
}

// 'bind()' se hum specific HTTP methods ke shortcut bana rahe hain
const postRequest = apiCall.bind(null, 'POST');
const putRequest  = apiCall.bind(null, 'PUT');

// Ab inhe directly reuse kar sakte ho
postRequest('/api/users', { name: 'John' });
putRequest('/api/users/1', { name: 'Jane' });

//  👉 Quick Notes (to remember):

// call() → Executes immediately, arguments individually pass karte ho.

// apply() → Executes immediately, arguments array form me pass karte ho.

// bind() → Returns new function (doesn’t execute immediately).

// bind() useful for:

// Fixing this context (especially in event handlers).

// Partial function application (pre-filling some args).

// Function borrowing → ek object ka method dusre object pe use karna via call().

// Array-like object → real array banane ke liye Array.prototype.slice.call(obj).

// Math.max.apply(null, arr) old trick tha → ab Math.max(...arr) use karo.

// DOM event handler me this ka loss hota hai → bind(this) se fix hota hai.