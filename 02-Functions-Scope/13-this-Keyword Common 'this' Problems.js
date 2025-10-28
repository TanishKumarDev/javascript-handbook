// -------------------------------------------
// Example: 'this' context loss
// -------------------------------------------

const user = {
    name: "Eve",

    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

// -------------------------------------------
// Problem 1: Lost context when function is detached
// -------------------------------------------

const greetFunction = user.greet; // function ka reference store kiya

greetFunction(); 
// ❌ Output: "Hello, undefined"
// Reason: 'this' ab user object se linked nahi hai
// Jab function alag se call hota hai → 'this' = undefined (in strict mode)
// or global object (non-strict mode)


// -------------------------------------------
// Problem 2: Callback function (setTimeout)
// -------------------------------------------

setTimeout(user.greet, 1000); 
// ❌ Output: "Hello, undefined"
// Reason: setTimeout function ko as callback call karta hai,
// 'this' context khatam ho jata hai (ab global ya undefined hota hai)


// -------------------------------------------
// Solution 1: Use .bind()
// -------------------------------------------

setTimeout(user.greet.bind(user), 1000); 
// ✅ Output: "Hello, Eve"
// Reason: .bind(user) ek naya function return karta hai
// jisme 'this' permanently user object se bind ho gaya hota hai


// -------------------------------------------
// Solution 2: Arrow function wrapper
// -------------------------------------------

setTimeout(() => user.greet(), 1000); 
// ✅ Output: "Hello, Eve"
// Reason: Arrow function ke paas apna 'this' nahi hota,
// wo outer scope se 'this' leta hai (yahan 'user' reference fix kar diya)


// -------------------------------------------
// Solution 3: Store reference of 'this' manually
// -------------------------------------------

const userGreet = {
    name: "Frank",
    greet: function() {
        const self = this; // 'this' ka reference store kar liya

        setTimeout(function() {
            console.log(`Hello, ${self.name}`);
        }, 1000);
    }
};

userGreet.greet();
// ✅ Output: "Hello, Frank"
// Reason: 'self' variable closure ke through accessible hai,
// aur wo original 'this' (userGreet object) ko refer karta hai.


/*
Notes: Things to Remember About `this` (in JS)

1. **Default Binding (Global Scope)**

   * Browser me → `this = window`
   * Node.js me → `this = {}` (empty object in module scope)
   * `"use strict"` mode me → `this = undefined`

---

2. **Function Call (Normal Function)**

   * Jab ek normal function standalone call hota hai (`func()`),
     `this` **undefined** (strict mode) ya **global object** (non-strict mode) hota hai.

---

3. **Method Call (Object ke andar)**

   * Jab function object ke andar call hota hai (`obj.method()`),
     tab `this` **us object** ko refer karta hai.

---

4. **Lost Context Problem**

   * Agar function ko object se alag kar diya (e.g. `const f = obj.method; f();`),
     to `this` **lost** ho jata hai — ab wo `undefined` (ya global) ban jata hai.

---

5. **Arrow Function Special Case**

   * Arrow functions ke paas apna `this` **nahi hota**,
     wo **lexical scope (outer function)** ka `this` inherit karte hain.

---

6. **bind(), call(), apply()**

   * Ye teen methods manually `this` set karne ke liye hote hain.
     Example: `func.call(obj)` ya `func.bind(obj)` se `this = obj` fix ho jata hai.

---

7. **setTimeout / setInterval Issue**

   * In callbacks me context lost hota hai.
     Fix → `bind()`, arrow function, ya `const self = this` pattern use karo.

---

8. **Constructor Functions / Classes**

   * Jab function ko `new` ke sath call karte ho (`new Func()`),
     tab `this` **newly created object** ko refer karta hai.

---
*/