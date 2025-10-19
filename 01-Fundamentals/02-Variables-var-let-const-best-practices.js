// 1. Use const by Default
const userName = "john_doe";
const userEmail = "john@example.com";
const userPreferences = {
  theme: "dark",
  language: "en"
};

// only use let when you need to reassign
let currentPage = 1;
let isLoading = false;

// letter in code...
currentPage = 2;
isLoading = true;

// 2. Declare Variables at the Top
function processOrder() {
  // declare variables at the top of the function
  let orderID;
  let orderStatus;
  let totalAmount;
  let taxRate;
  let customerInfo;
  
  // function logic here
  orderID = generateOrderID();
  orderStatus = "Processing";
  totalAmount = calculateOrderTotal(items);
  taxRate = 0.08;
  customerInfo = getUserInfo();
}

// 3. Use Descriptive Names
let currentDate = new Date();

// 4. Group Related Variables

// User information
const userID = 123;
const userAge = 25;

// Application settings
const appName = "MyApp";
const appVersion = "1.0";
const debugMode = true;

// or better yet, use objects
const users = {
  userID: 123,
  userAge: 25
};
const settings = {
  appName: "MyApp",
  appVersion: "1.0",
  debugMode: true
}


// 2. State Management
let currentUser = null;
let isAuthenticated = false;  
let shoppingCart = [];

// update state
function login(user) {
  currentUser = user;
  isAuthenticated = true;
  console.log(`Welcome, ${currentUser.name}!`);
}

function addToCart(item) {
  shoppingCart.push(item);
  console.log(`${item.name} added to cart.`);
}

function logout() {
  currentUser = null;
  isAuthenticated = false;
  console.log("Goodbye!");
}

// call functions
login({ name: "John Doe", email: "john@example.com" });
logout({ name: "John Doe", email: "john@example.com" });
addToCart({ name: "T-Shirt", price: 19.99, quantity: 2 });

// 3. Calculations and Processing
function calculateTotal(items) {
  const TAX_RATE = 0.08;
  const SHIPPING_COST = 10;
  const FREE_SHIPPING_THRESHOLD = 100;
  
  let subtotal = 0;
  let tax = 0;
  let shipping = 0;
  let total = 0;
  
  // calculate subtotal
  for (let item of items) {
    subtotal += item.price * item.quantity;
  }
  
  // calculate tax
  tax = subtotal * TAX_RATE;
  
  // calculate shipping
  shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  
  // calculate total
  total = subtotal + tax + shipping;
  
  return {
    subtotal,
    tax,
    shipping,
    total
  };
}

// call function
const orderTotal = calculateTotal([{ name: "T-Shirt", price: 19.99, quantity: 2 }]);

console.log(orderTotal)
console.log(`Order Total: $${orderTotal.total}`);


// Debugging Variables
// Using console.log

// Variable Type Checking
// Using typeof
console.log(typeof value);        // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (JavaScript quirk)
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"