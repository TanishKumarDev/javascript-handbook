// Good: Declare variables at the top
function goodExample() {
    let name, age, city; // Declare at top
    
    name = "Alice";
    age = 25;
    city = "New York";
    
    return `${name}, ${age}, from ${city}`;
}
// Good: Use let/const to avoid hoisting confusion
function betterExample() {
    const users = [];
    let currentUser = null;
    
    // Function logic here
    for (let i = 0; i < 5; i++) {
        // i is properly scoped to this block
        users.push(`User ${i}`);
    }
    
    return users;
}

// 1. Use let and const instead of var
function modernApproach() {
    const config = { theme: "dark" };
    let currentUser = null;
    
    // Variables are not hoisted in confusing ways
}

// 2. Declare functions before using them
function declareFirst() {
    // Good: Function is declared before use
    const result = calculateTotal(items);
    
    function calculateTotal(items) {
        return items.reduce((sum, item) => sum + item.price, 0);
    }
}

// 3. Initialize variables when declaring
function initializeWhenDeclaring() {
    const userName = getCurrentUser()?.name || "Guest";
    let itemCount = 0;
    
    // Clear intent, no hoisting confusion
}

// 4. Use strict mode to catch hoisting issues
"use strict";

function strictMode() {
    // undeclaredVar = 5; // ReferenceError in strict mode
    let declaredVar = 5; // Proper declaration
}
