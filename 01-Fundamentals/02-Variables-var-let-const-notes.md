# Variables (var, let, const)

Master variable declarations and understand the differences between var, let, and const.

## What are Variables?

Think of variables as labeled boxes where you can store different types of information:

- A box labeled "userName" might contain "john_doe"
- A box labeled "userAge" might contain 25
- A box labeled "isLoggedIn" might contain true

## Variable Declaration Methods

JavaScript provides three ways to declare variables, each with different characteristics:

### 1. let (Modern, Recommended)

`let` is the modern way to declare variables that can be reassigned:

```js
let userName = "john_doe";
let userAge = 25;
let isActive = true;

// Variables can be reassigned
userName = "jane_smith";
userAge = 30;
isActive = false;

console.log(userName); // "jane_smith"
```

### 2. const (Modern, For Constants)

`const` is used for values that won't be reassigned:

```js
const PI = 3.14159;
const siteName = "AceDevHub";
const maxUsers = 1000;

// This would cause an error:
// PI = 3.14; // TypeError: Assignment to constant variable
```

**Important:** `const` prevents reassignment, but objects and arrays can still be modified:

```js
const user = {
    name: "John",
    age: 25
};

// This is allowed (modifying properties):
user.age = 26;
user.city = "New York";

// This would cause an error (reassigning the variable):
// user = { name: "Jane" }; // TypeError
```

### 3. var (Legacy, Avoid)

`var` is the old way to declare variables. Avoid using it in modern JavaScript:

```js
var oldVariable = "Don't use this";
var count = 0;

// Problems with var (explained later)
```

## Variable Naming Rules and Conventions

### Rules (Must Follow)

- Must start with: letter, underscore (_), or dollar sign ($)
- Cannot start with: numbers
- Cannot contain: spaces or special characters (except _ and $)
- Cannot be: JavaScript reserved words

```js
// Valid variable names
let userName = "john";
let _private = "hidden";
let $element = "DOM element";
let user123 = "valid";
let firstName = "John";

// Invalid variable names
// let 123user = "invalid";     // Cannot start with number
// let user-name = "invalid";   // Cannot contain hyphen
// let user name = "invalid";   // Cannot contain space
// let let = "invalid";         // Cannot use reserved word
```

### Conventions (Should Follow)

- camelCase: Start with lowercase, capitalize subsequent words
- Descriptive names: Use meaningful names that describe the data
- Constants in UPPER_CASE: For true constants

```js
// Good naming conventions
let firstName = "John";
let lastName = "Doe";
let userAge = 25;
let isLoggedIn = true;
let totalPrice = 99.99;
let shoppingCart = [];

// Constants
const MAX_LOGIN_ATTEMPTS = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 5000;

// Poor naming (avoid these)
let a = "John";           // Not descriptive
let usrNm = "John";       // Abbreviated
let user_name = "John";   // snake_case (not JavaScript convention)
```

## Variable Scope

Scope determines where variables can be accessed in your code.

### Block Scope (let and const)

Variables declared with `let` and `const` have block scope:

```js
{
    let blockVariable = "I'm in a block";
    const blockConstant = "Me too!";
    console.log(blockVariable); // Works inside block
}

// console.log(blockVariable); // ReferenceError: not defined

// Practical example with if statement
let score = 85;

if (score >= 80) {
    let grade = "A";
    const message = "Excellent work!";
    console.log(grade, message); // Works here
}

// console.log(grade); // ReferenceError: grade is not defined
```

### Function Scope

Variables are accessible throughout the entire function:

```js
function calculateTotal() {
    let subtotal = 100;
    let tax = 0.08;
    
    if (subtotal > 50) {
        let discount = 10; // Block scoped
        subtotal -= discount;
    }
    
    // subtotal and tax accessible here
    let total = subtotal * (1 + tax);
    return total;
    
    // discount is NOT accessible here (block scoped)
}
```

### Global Scope

Variables declared outside any function or block have global scope:

```js
// Global variables
let siteName = "AceDevHub";
const version = "1.0.0";

function displayInfo() {
    // Can access global variables
    console.log(`Welcome to ${siteName} v${version}`);
}

displayInfo(); // "Welcome to AceDevHub v1.0.0"
```

## Problems with var (Why to Avoid It)

### 1. Function Scope (Not Block Scope)

```js
// Problem with var
if (true) {
    var message = "Hello";
}
console.log(message); // "Hello" - accessible outside block!

// Better with let
if (true) {
    let betterMessage = "Hello";
}
// console.log(betterMessage); // ReferenceError - properly scoped
```

### 2. Hoisting Issues

```js
// Confusing behavior with var
console.log(hoistedVar); // undefined (not an error!)
var hoistedVar = "I'm hoisted";

// Clearer behavior with let
// console.log(notHoisted); // ReferenceError
let notHoisted = "I'm not hoisted";
```

### 3. Redeclaration Allowed

```js
// Problem: var allows redeclaration
var count = 1;
var count = 2; // No error, but confusing

// Better: let prevents redeclaration
let betterCount = 1;
// let betterCount = 2; // SyntaxError: Identifier already declared
```

## Variable Initialization

### Declaration vs Initialization

```js
// Declaration only
let userName;
console.log(userName); // undefined

// Declaration with initialization
let userAge = 25;
console.log(userAge); // 25

// const must be initialized
// const PI; // SyntaxError: Missing initializer
const PI = 3.14159; // Correct
```

### Multiple Variable Declaration

```js
// Multiple variables, one line
let firstName = "John", lastName = "Doe", age = 25;

// Better readability (recommended)
let firstName = "John";
let lastName = "Doe";
let age = 25;

// Multiple constants
const PI = 3.14159,
      E = 2.71828,
      GOLDEN_RATIO = 1.61803;
```

## Best Practices

### 1. Use const by Default

```js
// Start with const
const userName = "john_doe";
const userEmail = "john@example.com";
const userPreferences = {
    theme: "dark",
    language: "en"
};

// Only use let when you need to reassign
let currentPage = 1;
let isLoading = false;

// Later in code...
currentPage = 2;
isLoading = true;
```

### 2. Declare Variables at the Top

```js
function processOrder() {
    // Declare all variables at the top
    let orderId;
    let customerInfo;
    let totalAmount = 0;
    const taxRate = 0.08;
    
    // Function logic here...
    orderId = generateOrderId();
    customerInfo = getCustomerInfo();
    totalAmount = calculateTotal();
}
```

### 3. Use Descriptive Names

```js
// Poor naming
let d = new Date();
let u = getCurrentUser();
let p = calculatePrice();

// Good naming
let currentDate = new Date();
let currentUser = getCurrentUser();
let totalPrice = calculatePrice();
```

### 4. Group Related Variables

```js
// User information
const userId = 123;
const userName = "john_doe";
const userEmail = "john@example.com";

// Application settings
const appName = "AceDevHub";
const appVersion = "1.0.0";
const debugMode = false;

// Or better yet, use objects
const user = {
    id: 123,
    name: "john_doe",
    email: "john@example.com"
};

const appConfig = {
    name: "AceDevHub",
    version: "1.0.0",
    debug: false
};
```

## Common Patterns and Examples

### 1. Configuration Variables

```js
// Application configuration
const CONFIG = {
    API_BASE_URL: "https://api.acedevhub.com",
    MAX_RETRY_ATTEMPTS: 3,
    TIMEOUT_DURATION: 5000,
    DEFAULT_LANGUAGE: "en",
    ITEMS_PER_PAGE: 20
};

// Feature flags
const FEATURES = {
    DARK_MODE_ENABLED: true,
    BETA_FEATURES: false,
    ANALYTICS_ENABLED: true
};
```

### 2. State Management

```js
// Application state
let currentUser = null;
let isAuthenticated = false;
let shoppingCart = [];
let currentPage = "home";

// Update state
function loginUser(userData) {
    currentUser = userData;
    isAuthenticated = true;
    console.log(`Welcome, ${currentUser.name}!`);
}

function addToCart(item) {
    shoppingCart.push(item);
    console.log(`Added ${item.name} to cart`);
}
```

### 3. Calculations and Processing

```js
function calculateOrderTotal(items) {
    const TAX_RATE = 0.08;
    const SHIPPING_COST = 10;
    const FREE_SHIPPING_THRESHOLD = 100;
    
    let subtotal = 0;
    let tax = 0;
    let shipping = 0;
    let total = 0;
    
    // Calculate subtotal
    for (let item of items) {
        subtotal += item.price * item.quantity;
    }
    
    // Calculate tax
    tax = subtotal * TAX_RATE;
    
    // Calculate shipping
    shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
    
    // Calculate total
    total = subtotal + tax + shipping;
    
    return {
        subtotal,
        tax,
        shipping,
        total
    };
}
```

## Debugging Variables

### Using console.log

```js
let userName = "john_doe";
let userAge = 25;

// Debug single variable
console.log("userName:", userName);

// Debug multiple variables
console.log("User info:", userName, userAge);

// Debug with labels
console.log({ userName, userAge });

// Debug objects nicely
const user = { name: userName, age: userAge };
console.table(user);
```

### Variable Type Checking

```js
let value = "Hello";

console.log(typeof value);        // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (JavaScript quirk)
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"
```

## Practice Exercises

Try these exercises to master variables:

```js
// Exercise 1: Personal Information
// Create variables for your personal information
const firstName = "Your Name";
const lastName = "Your Last Name";
let age = 25;
let city = "Your City";
const country = "Your Country";

// Create a full name
const fullName = firstName + " " + lastName;
console.log(`Hello, I'm ${fullName}`);

// Exercise 2: Shopping Cart
// Create variables for a shopping cart
let cartItems = 0;
let cartTotal = 0;
const maxItems = 10;

// Add items
cartItems = 3;
cartTotal = 99.99;

console.log(`Cart: ${cartItems}/${maxItems} items, Total: $${cartTotal}`);

// Exercise 3: User Preferences
// Create an object to store user preferences
const userPreferences = {
    theme: "dark",
    language: "en",
    notifications: true
};

// Modify preferences
userPreferences.theme = "light";
userPreferences.fontSize = "medium";

console.log("User preferences:", userPreferences);

// Exercise 4: Temperature Converter
// Create variables for temperature conversion
const celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

console.log(`${celsius}°C = ${fahrenheit}°F = ${kelvin}K`);
```

## Common Mistakes to Avoid

### 1. Using var Instead of let/const

```js
// Don't do this
var message = "Hello";

// Do this instead
const message = "Hello"; // If value won't change
let message = "Hello";   // If value might change
```

### 2. Not Initializing Variables

```js
// Problematic
let userName;
console.log(userName.toUpperCase()); // TypeError: Cannot read property

// Better
let userName = "";
// or
let userName = null;
// or provide a default
let userName = "guest";
```

### 3. Reassigning const Variables

```js
// This will cause an error
const PI = 3.14;
PI = 3.14159; // TypeError: Assignment to constant variable

// Use let if you need to reassign
let approximatePi = 3.14;
approximatePi = 3.14159; // This works
```

## Key Takeaways

- Use const by default, let when you need to reassign, avoid var
- Choose descriptive variable names using camelCase
- Understand scope: block scope for let/const, function scope for var
- Initialize variables when declaring them
- Group related variables together
- Use debugging techniques to inspect variable values

Variables are the foundation of programming - master them, and you're well on your way to JavaScript proficiency!