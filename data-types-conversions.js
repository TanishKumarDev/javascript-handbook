// 🎯 Type conversion is the process of converting data from one type to another (e.g., number to string, string to number). JavaScript is dynamically typed, so conversions happen automatically (implicit coercion) or manually (explicit coercion).

// 1. implicit Conversion
console.log('5' + 3); // '53' (number 3 is converted to string)
console.log('5' - 3); // 2 (string '5' is converted to number)
console.log('5' * '2'); // 10 (both strings converted to numbers)
console.log('10' / '2'); // 5 (both strings converted to numbers)
console.log('5' + true); // '5true' (boolean true is converted to string)
console.log('5' - true); // 4 (boolean true is converted to number 1)
console.log(null + 5); // 5 (null is converted to 0)
console.log(undefined + 5); // NaN (undefined is converted to NaN)
console.log('5' + undefined); // '5undefined' (undefined is converted to string)
console.log('5' + null); // '5null' (null is converted to string)
console.log('5' - null); // 5 (null is converted to 0)
console.log('5' - undefined); // NaN (undefined is converted to NaN)
console.log([] + 5); // '5' (empty array is converted to empty string)
console.log([1,2] + 5); // '1,25' (array is converted to string)
console.log([] + {}); // '[object Object]' (empty array to empty string, object to string)
console.log({} + []); // '[object Object]' (object to string, empty array to empty string)
console.log({} + {}); // '[object Object][object Object]' (both objects to strings)
console.log(!!''); // false (empty string is falsy)
console.log(!!'hello'); // true (non-empty string is truthy)
console.log(!!0); // false (0 is falsy)
console.log(!!42); // true (non-zero number is truthy)
console.log(!!null); // false (null is falsy)
console.log(!!undefined); // false (undefined is falsy)
console.log(!!NaN); // false (NaN is falsy)
console.log(!!{}); // true (empty object is truthy)
console.log(!![]); // true (empty object and array are truthy)
console.log(!![1,2,3]); // true (non-empty array is truthy)
console.log(0 == false); // true (0 is converted to false)

// 2. explicit Conversion
let strNum = "123";
let num = Number(strNum);
let int = parseInt(strNum);
let float = parseFloat("123.45");
let str = String(123);
let bool = Boolean(1);
console.log(num, int, float, str, bool); // 123 123 123.45 "123" true

// 🎯 toString() Method
let num2 = 123;
let arr = [1, 2];
let obj = { name: "Alice" };
console.log(num2.toString()); // "123"
console.log(arr.toString()); // "1,2"
console.log(obj.toString()); // "[object Object]"
// Custom toString
obj.toString = () => "Custom Object";
console.log(obj.toString()); // Custom Object

// 🎯 type checking -> common tools

// typeof: Returns type as a string.
// instanceof: Checks if an object is an instance of a constructor.
// Array.isArray(): Specifically checks for arrays.
// Object.keys(): Returns an array of object keys.
// Object.values(): Returns an array of object values.

// Type checking examples
let str2 = "hello";
let num3 = 123;
let arr2 = [1, 2];
let obj3 = { x: 1 };
console.log(typeof str); // string
console.log(typeof num); // number
console.log(arr2 instanceof Array); // true
console.log(Array.isArray(arr2)); // true
console.log(typeof null); // object