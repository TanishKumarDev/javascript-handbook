// 1. Implicit Conversion (Type Coercion)
console.log("5" + 3)
console.log("5" - 3)
console.log(true+ 3)

// 2. Explicit Conversion (Type Casting)
console.log(Number("5"))
console.log(String(5))
console.log(Boolean(0))

// String Conversion
console.log("The answer is " + 42)
console.log("The answer is " + true)
console.log("The answer is " + null)
console.log("The answer is " + undefined)

// template literal
let age = 25;
console.log(`I am ${age} years old.`)

// arrays to string
let fruits = ["apple", "banana", "orange"];
console.log(fruits.join(", "));
console.log("Fruits are: " + fruits );


// Object to string
let person = { name: "John", age: 30 };
console.log("Person: " + person);     

// Explicit String Conversion

// String() function
console.log(String(123));                     // "123"
console.log(String(true));                    // "true"
console.log(String(null));                    // "null"
console.log(String(undefined));               // "undefined"

// toString() method (not available for null/undefined)
let num = 123;
console.log(num.toString());                  // "123"
console.log(true.toString());                 // "true"

// toString() with radix (base)
let number = 255;
console.log(number.toString(2));              // "11111111" (binary)
console.log(number.toString(8));              // "377" (octal)
console.log(number.toString(16));             // "ff" (hexadecimal)

// JSON.stringify for objects
let obj = { name: "Alice", age: 28 };
console.log(JSON.stringify(obj));             // '{"name":"Alice","age":28}'

// Custom toString for objects
let product = {
    name: "Laptop",
    price: 999,
    toString() {
        return `${this.name}: $${this.price}`;
    }
};
console.log(String(product));                 // "Laptop: $999"


// Number Conversion
// Implicit Number Conversion

// Arithmetic operators
console.log("10" - 5);                        // 5
console.log("10" * 2);                        // 20
console.log("10" / 2);                        // 5
console.log("10" % 3);                        // 1

// Unary + operator
console.log(+"123");                          // 123
console.log(+true);                           // 1
console.log(+false);                          // 0
console.log(+null);                           // 0
console.log(+undefined);                      // NaN
console.log(+"");                             // 0
console.log(+"   ");                          // 0
console.log(+"123abc");                       // NaN

// Comparison operators
console.log("10" > 5);                        // true
console.log("10" == 10);                      // true (loose equality)

// Logical NOT operator (double negation)
console.log(!!123);                           // true
console.log(!!"");                            // false

// Explicit Number Conversion

// Number() function
console.log(Number("123"));                   // 123
console.log(Number("123.45"));                // 123.45
console.log(Number(""));                      // 0
console.log(Number("   "));                   // 0
console.log(Number("123abc"));                // NaN
console.log(Number(true));                    // 1
console.log(Number(false));                   // 0
console.log(Number(null));                    // 0
console.log(Number(undefined));               // NaN

// parseInt() - converts to integer
console.log(parseInt("123"));                 // 123
console.log(parseInt("123.45"));              // 123 (truncates decimal)
console.log(parseInt("123abc"));              // 123 (stops at first non-digit)
console.log(parseInt("abc123"));              // NaN (starts with non-digit)
console.log(parseInt("   123   "));           // 123 (ignores whitespace)

// parseInt() with radix
console.log(parseInt("1010", 2));             // 10 (binary to decimal)
console.log(parseInt("ff", 16));              // 255 (hex to decimal)
console.log(parseInt("77", 8));               // 63 (octal to decimal)

// parseFloat() - converts to floating-point number
console.log(parseFloat("123.45"));            // 123.45
console.log(parseFloat("123.45abc"));         // 123.45
console.log(parseFloat("abc123.45"));         // NaN

// Math functions for conversion
console.log(Math.floor(123.89));              // 123
console.log(Math.ceil(123.11));               // 124
console.log(Math.round(123.5));               // 124
console.log(Math.trunc(123.89));              // 123 (removes decimal part)

// toString() method for Number
let num2 = 123;
console.log(num2.toString());                 // "123"
console.log(num2.toString(2));                // "1111011" (binary)
console.log(num2.toString(8));                // "173" (octal)
console.log(num2.toString(16));               // "7b" (hexadecimal)

// Number Validation

// Check if conversion resulted in valid number
function safeNumberConversion(value) {
    let num = Number(value);
    
    if (isNaN(num)) {
        return { success: false, error: "Not a valid number" };
    }
    
    if (!isFinite(num)) {
        return { success: false, error: "Number is infinite" };
    }
    
    return { success: true, value: num };
}

// Test the function
console.log(safeNumberConversion("123"));     // { success: true, value: 123 }
console.log(safeNumberConversion("abc"));     // { success: false, error: "Not a valid number" }
console.log(safeNumberConversion("Infinity")); // { success: false, error: "Number is infinite" }

// Boolean Conversion
// Implicit Boolean Conversion
// Falsy values (convert to false)
if (false) console.log("Won't run");
if (0) console.log("Won't run");
if (-0) console.log("Won't run");
if (0n) console.log("Won't run");          // BigInt zero
if ("") console.log("Won't run");
if (null) console.log("Won't run");
if (undefined) console.log("Won't run");
if (NaN) console.log("Won't run");

// Truthy values (everything else converts to true)
if (true) console.log("Will run");
if (1) console.log("Will run");
if (-1) console.log("Will run");
if ("hello") console.log("Will run");
if ("0") console.log("Will run");          // Non-empty string
if ([]) console.log("Will run");           // Empty array
if ({}) console.log("Will run");           // Empty object
if (function(){}) console.log("Will run"); // Function

// Logical operators
let user = null;
let defaultUser = user || "Guest";         // "Guest" (user is falsy)

let settings = { theme: "dark" };
let theme = settings && settings.theme;    // "dark" (settings is truthy)

// Explicit Boolean Conversion
// Boolean() function
console.log(Boolean(1));                   // true
console.log(Boolean(0));                   // false
console.log(Boolean("hello"));             // true
console.log(Boolean(""));                  // false
console.log(Boolean([]));                  // true
console.log(Boolean({}));                  // true
console.log(Boolean(null));                // false
console.log(Boolean(undefined));           // false

// Double negation (!!) - common shorthand
console.log(!!1);                          // true
console.log(!!"hello");                    // true
console.log(!!"");                         // false
console.log(!!null);                       // false

// Practical usage
function isValidInput(input) {
    return Boolean(input && input.trim());
}

console.log(isValidInput("hello"));        // true
console.log(isValidInput("   "));          // false
console.log(isValidInput(""));             // false
console.log(isValidInput(null));           // false

// Array Conversion

// Arrays to string
let colors = ["red", "green", "blue"];
console.log(String(colors))
console.log(colors.toString())
console.log(colors.join( " , "))
console.log(colors.join( " | "))

// Arrays to numbers
console.log(Number([]))
console.log(Number([5]))
console.log(Number([5,10]))
console.log(Number(["Hello"]))

// String to array
let text = "Hello, world!";
console.log(text.split(","))
console.log(text.split(""))
console.log(...text)

// Arrays,from() for conversion
console.log(Array.from("Hello"))
console.log(Array.from([1,2,3]))
console.log(Array.from({length: 3}, (_, i) => i))

// Converting array like objects
function example() {
    let args = Array.from(arguments);
    return args
}
console.log(example(1 ,2, 3 ))

// Object Conversion
// Object to string
let letPerson = {
    name: "John",
    age: 30
}
console.log(String(letPerson))
console.log(JSON.stringify(letPerson))
console.log(letPerson.toString())


// custom toString method
let letProduct = {
    name: "Laptop",
    price: 999,
    toString() {
        return `${this.name} - $${this.price}`;
    }
};
console.log(String(product));

// object to number
console.log((Number({})))

// object to bool
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(new Date()))

// object to string
let jsonString = '{"name":"Alice","age":25}';
console.log(JSON.parse(jsonString));       // {name: "Alice", age: 25}

// Object.entries() and Object.fromEntries()
let obj1 = { a: 1, b: 2, c: 3 };
let entries = Object.entries(obj1);         // [["a", 1], ["b", 2], ["c", 3]]
let backToObj = Object.fromEntries(entries); // {a: 1, b: 2, c: 3}