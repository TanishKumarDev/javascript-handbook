// 1. Equality Comparisons

// Problematic loose equality (==)
console.log("1. Equality Comparisons");
console.log(0 == false);                   // true
console.log("" == false);                  // true
console.log(null == undefined);            // true
console.log("0" == 0);                     // true
console.log([1] == 1);                     // true
console.log([1,2] == "1,2");               // true

// Better strict equality
console.log(0 === false);                  // false
console.log("" === false);                 // false
console.log(null === undefined);           // false
console.log("0" === 0);                    // false
console.log([1] === 1);                    // false
console.log([1,2] === "1,2");              // false

// When loose equality might be acceptable
let userInput = "5";
if (userInput == 5) {                      // Might be OK for user input
    console.log("User entered 5");
}

// But explicit conversion is clearer
if (Number(userInput) === 5) {             // Better - explicit intent
    console.log("User entered 5");
}

// 2. Addition vs Concatenation

// Confusing behavior with +
console.log(1 + 2);                        // 3 (addition)
console.log("1" + 2);                      // "12" (concatenation)
console.log(1 + "2");                      // "12" (concatenation)
console.log("1" + "2");                    // "12" (concatenation)

// Mixed operations
console.log(1 + 2 + "3");                  // "33" (1+2=3, then "3"+"3")
console.log("1" + 2 + 3);                  // "123" ("1"+"2"="12", then "12"+"3")

// Solutions
console.log(Number("1") + 2);              // 3 (explicit conversion)
console.log(parseInt("1", 10) + 2);        // 3 (explicit conversion)
console.log(+"1" + 2);                     // 3 (unary + conversion)

// Template literals for string building
let a = 1, b = 2;
console.log(`Result: ${a + b}`);          // "Result: 3"

// 3. Falsy Value Confusion

// All these are falsy, but different
console.log(Boolean(0));                   // false
console.log(Boolean(""));                  // false
console.log(Boolean(null));                // false
console.log(Boolean(undefined));           // false
console.log(Boolean(NaN));                 // false

// But they're not equal to each other
console.log(0 === "");                     // false
console.log(null === undefined);           // false
console.log(0 === null);                   // false

// Be specific in checks
function isEmptyString(value) {
    return value === "";                   // Only empty string
}

function isNullOrUndefined(value) {
    return value == null;                  // Both null and undefined
}

function isFalsy(value) {
    return !value;                         // Any falsy value
}