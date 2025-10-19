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
