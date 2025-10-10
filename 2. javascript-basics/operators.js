// 🎯 Operators are special symbols or keywords that perform operations on operands (values or variables), such as addition, comparison, or logical checks. JavaScript operators enable calculations, assignments, comparisons, and more, making them essential for building logic and manipulating data.

// 1. Arithmetic operators
let num1 = 10, num2 = 3;
console.log(num1 + num2); // 13
console.log(num1 - num2); // 7
console.log(num1 * num2); // 30
console.log(num1 / num2); // 3.333...
console.log(num1 % num2); // 1
console.log(num1 ** 2); // 100
num1++; // Increment
console.log(num1); // 11
num2 -= 1; // Decrement
console.log(num2); // 2
// Edge cases
console.log(0 / 0); // NaN
console.log(Infinity / 0); // Infinity
console.log(1 / 0); // Infinity

// 2. Assignment operators
let num3 = 5;
num3 += 3; // num3 = num3 + 3
console.log(num3); // 8
num3 *= 2; // num3 = num3 * 2
console.log(num3); // 16
num3 %= 5; // num3 = num3 % 5
console.log(num3); // 1

// 3. Comparison operators
let num4 = 5, num5 = "5";
console.log(num4 == num5); // true
console.log(num4 === num5); // false
console.log(num4 != num5); // false
console.log(num4 !== num5); // true
console.log(num4 > 3); // true
console.log(num4 <= 5); // true

// 4. Logical operators
let bool1 = true, bool2 = false;
console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true
console.log(!bool1); // false
let val1 = null, val2 = "default";
console.log(val1 ?? val2); // default

// 5. Bitwise operators
let num8 = 5; // 0101 in binary
let num9 = 3; // 0011 in binary
console.log(num8 & num9); // 1 (0101 & 0011 = 0001)
console.log(num8 | num9); // 7 (0101 | 0011 = 0111)
console.log(num8 ^ num9); // 6 (0101 ^ 0011 = 0110)
console.log(~num8); // -6 (inverts bits)
console.log(num8 << 1); // 10 (0101 << 1 = 1010)

// 6. Ternary operator
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult

// 7. Operator precedence
let num10 = 2 + 3 * 4; // * first
console.log(num10); // 14
let num11 = (2 + 3) * 4; // () first
console.log(num11); // 20
let z = 5 > 3 && 2 < 4; // Comparison first, then &&
console.log(z); // true