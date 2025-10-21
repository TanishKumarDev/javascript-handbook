// 1. Be Explicit
// Always check values explicitly rather than relying on implicit truthy/falsy behavior.
// Example:
if (userAge) {
    // Bad: if userAge is 0, this block will not run because 0 is falsy
}

// Better: check for null or undefined explicitly
if (userAge !== null && userAge !== undefined) {
    // Clear intent: we allow 0 or other valid falsy values
}

// Or use nullish coalescing to provide a default value if null/undefined
let age = userAge ?? 0; // if userAge is null or undefined, use 0

// 2. Validate After Conversion
// Always convert input to the expected type first, then validate it
function processAge(input) {
    let age = Number(input); // convert input to number
    
    // Check if conversion failed
    if (isNaN(age)) {
        throw new Error("Age must be a number");
    }
    
    // Validate age range
    if (age < 0 || age > 150) {
        throw new Error("Age must be between 0 and 150");
    }
    
    return age; // safe to use
}

// 3. Use Type Guards
// Type guards are small helper functions to verify data types

function isString(value) {
    return typeof value === "string";
}

function isNumber(value) {
    // Check that it is a number, not NaN, and finite
    return typeof value === "number" && !isNaN(value) && isFinite(value);
}

function isValidEmail(value) {
    // Simple email validation: must be string, contain '@', and have some length
    return isString(value) && value.includes("@") && value.length > 3;
}

// 4. Process User Data
// Validate each property before using it
function processUser(userData) {
    if (!isString(userData.name)) {
        throw new Error("Name must be a string");
    }
    
    if (!isNumber(userData.age)) {
        throw new Error("Age must be a valid number");
    }
    
    if (!isValidEmail(userData.email)) {
        throw new Error("Email must be valid");
    }
    
    // Now userData is safe to process
    console.log("User is valid:", userData);
}

// Example Usage
let userInput = {
    name: "Alice",
    age: "25", // note: string input
    email: "alice@example.com"
};

// Convert age safely and process user
try {
    userInput.age = processAge(userInput.age); // convert and validate
    processUser(userInput); // validate entire object
} catch (error) {
    console.error(error.message);
}
