// -------------------------------------------
// Question 1: What does this output?
// -------------------------------------------

var a = 1; // Global variable 'a'

function test() {
    // Hoisting ke time JS yeh karti hai:
    // var a;  (local variable declare hota hai, initialized = undefined)
    // Fir runtime pe 'a = 2' assign hota hai

    console.log(a); // ❌ Output: undefined
    // Reason: Local 'a' hoist hua hai (shadowed global 'a'),
    // but value abhi assign nahi hui, so it's undefined

    var a = 2; // Ab local 'a' ko value mil gayi (2)

    console.log(a); // ✅ Output: 2
}

test();

// Note:
// Local 'a' ne global 'a' ko shadow kar diya.
// Isiliye first log undefined deta hai (kyunki local 'a' undefined tha),
// aur second log 2 deta hai.


// -------------------------------------------
// Question 2: What happens here?
// -------------------------------------------

function question2() {
    // Hoisting ke time JS code ko aise dekhti hai:
    // function foo() { return "second"; }  (Function declarations first)
    // var foo;  (Var declarations next, no assignment yet)

    console.log(foo);
    // ✅ Output: function foo() { return "second"; }
    // Reason: Function declarations hoisted before var

    var foo = "first"; 
    // Ab 'foo' variable overwrite karta hai previous function ko

    function foo() {
        return "second";
    }

    console.log(foo);
    // ✅ Output: "first"
    // Ab 'foo' ek string hai, function reference overwrite ho gaya
}

question2();

// Note:
// Function declarations → hoist first (with full body)
// Var declarations → hoist after (value assign later)
// Final result: foo = "first"


// -------------------------------------------
// Question 3: Fix this code
// -------------------------------------------

function fixMe() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
            // ❌ Output: 3, 3, 3
            // Reason:
            // 'var' is function-scoped, so sirf ek 'i' variable hai.
            // Jab setTimeout run hota hai (100ms baad), 
            // loop complete ho chuka hota hai aur i = 3 hota hai.
        }, 100);
    }
}

fixMe();


// --------------------
// Solution 1: Use 'let'
// --------------------

function fixed1() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
            // ✅ Output: 0, 1, 2
            // Reason:
            // 'let' block-scoped hai → har iteration me new 'i' banta hai.
        }, 100);
    }
}

fixed1();


// --------------------
// Solution 2: Use Closure (IIFE)
// --------------------

function fixed2() {
    for (var i = 0; i < 3; i++) {
        (function(j) { // IIFE bana ke current 'i' ko pass kiya as 'j'
            setTimeout(function() {
                console.log(j);
                // ✅ Output: 0, 1, 2
                // Reason:
                // Har IIFE ke pass apna alag 'j' (copy of i) hota hai.
            }, 100);
        })(i);
    }
}

fixed2();

// Note:
// - 'let' solution → Modern (ES6) aur simple
// - IIFE closure solution → Old JS trick when only 'var' was available
