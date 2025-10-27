// Immediately Invoked Arrow Function (IIFE)
// executes instantly after being defined
const result = ((x, y) => x + y)(5, 3); 
console.log(result); // 8

// Arrow functions with method chaining on arrays
// Example: filter → map → sort
const processData = (data) =>
    data
        .filter(item => item.active) // keep only active items
        .map(item => ({ ...item, processed: true })) // add new property 'processed'
        .sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically by name

// Conditional arrow functions (using ternary operators)

// returns status based on user activity
const getStatus = (user) => 
    user.isActive ? "online" : "offline";

// calculates discount based on user type
const getDiscount = (user) =>
    user.isPremium ? 0.2 :     // 20% discount for premium
    user.isRegular ? 0.1 :     // 10% discount for regular
    0;                         // no discount otherwise

// Arrow functions with destructuring
// extracting properties directly in parameter list
const getFullName = ({ firstName, lastName }) => 
    `${firstName} ${lastName}`;

// destructuring + default value (tax = 0.1)
const calculateTotal = ({ price, quantity, tax = 0.1 }) =>
    price * quantity * (1 + tax);

// Currying with arrow functions
// returns another function that remembers the first argument
const multiply = (a) => (b) => a * b;

// reusing curried functions
const double = multiply(2); // preset a = 2
const triple = multiply(3); // preset a = 3

console.log(double(5)); // 10
console.log(triple(4)); // 12
