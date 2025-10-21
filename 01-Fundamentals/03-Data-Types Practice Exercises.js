// Exercise 1: Type identification
function identifyType(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return typeof value;
    }
}

// Test the function
console.log(identifyType(42));           // "number"
console.log(identifyType("hello"));      // "string"
console.log(identifyType([]));           // "array"
console.log(identifyType(null));         // "null"

// Exercise 2: Data validation
function validateProduct(product) {
    let isValid = true;
    let errors = [];
    
    // Check required string fields
    if (typeof product.name !== "string" || product.name.trim() === "") {
        errors.push("Product name is required");
        isValid = false;
    }
    
    // Check price is a positive number
    if (typeof product.price !== "number" || product.price <= 0) {
        errors.push("Price must be a positive number");
        isValid = false;
    }
    
    // Check quantity is a non-negative integer
    if (!Number.isInteger(product.quantity) || product.quantity < 0) {
        errors.push("Quantity must be a non-negative integer");
        isValid = false;
    }
    
    // Check boolean fields
    if (typeof product.inStock !== "boolean") {
        errors.push("inStock must be a boolean");
        isValid = false;
    }
    
    return { isValid, errors };
}

// Test the validation
let product1 = {
    name: "Laptop",
    price: 999.99,
    quantity: 5,
    inStock: true
};

let product2 = {
    name: "",
    price: -100,
    quantity: 2.5,
    inStock: "yes"
};

console.log(validateProduct(product1)); // { isValid: true, errors: [] }
console.log(validateProduct(product2)); // { isValid: false, errors: [...] }

// Exercise 3: Type conversion utility
function convertToType(value, targetType) {
    switch (targetType.toLowerCase()) {
        case "string":
            return String(value);
        case "number":
            let num = Number(value);
            return isNaN(num) ? 0 : num;
        case "boolean":
            return Boolean(value);
        case "array":
            return Array.isArray(value) ? value : [value];
        default:
            return value;
    }
}

// Test conversions
console.log(convertToType(123, "string"));    // "123"
console.log(convertToType("456", "number"));  // 456
console.log(convertToType("hello", "boolean")); // true
console.log(convertToType("world", "array"));   // ["world"]
