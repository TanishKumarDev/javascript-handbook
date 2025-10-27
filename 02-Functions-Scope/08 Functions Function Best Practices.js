// Good: Descriptive names
function calculateTotalPrice(items, taxRate) {
    // Implementation
}

// Poor: Unclear names
function calc(x, y) {
    // Implementation
}

// Good: Single responsibility
function validateEmail(email) {
    return email.includes("@") && email.length > 5;
}

function sendEmail(email, message) {
    // Send email logic
}

// Good: Pure functions (no side effects)
function addNumbers(a, b) {
    return a + b; // Doesn't modify external state
}

// Avoid: Functions with side effects when possible
let counter = 0;
function incrementCounter() {
    counter++; // Modifies external state
}
