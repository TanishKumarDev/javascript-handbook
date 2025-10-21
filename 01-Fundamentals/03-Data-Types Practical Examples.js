// 1. User Registration Form

// User data with different types
let userData = {
    // Strings
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice@example.com",
    
    // Numbers
    age: 28,
    userId: 12345,
    
    // Booleans
    isActive: true,
    hasVerifiedEmail: false,
    isAdmin: false,
    
    // Arrays
    hobbies: ["reading", "hiking", "photography"],
    languages: ["English", "Spanish", "French"],
    
    // Objects
    address: {
        street: "456 Oak Ave",
        city: "San Francisco",
        state: "CA",
        zipCode: "94102"
    },
    
    // Null (optional data)
    phoneNumber: null,
    profilePicture: null,
    
    // Date (object)
    registrationDate: new Date(),
    lastLoginDate: undefined
};

// Type checking and validation
function validateUser(user) {
    let errors = [];
    
    if (typeof user.firstName !== "string" || user.firstName.length === 0) {
        errors.push("First name is required");
    }
    
    if (typeof user.age !== "number" || user.age < 13) {
        errors.push("Age must be a number and at least 13");
    }
    
    if (typeof user.email !== "string" || !user.email.includes("@")) {
        errors.push("Valid email is required");
    }
    
    return errors;
}

let validationErrors = validateUser(userData);
console.log("Validation errors:", validationErrors);

// Output user data
console.log("User Data:", userData);

// 2. Shopping Cart Calculator
// Shopping cart with mixed data types

let shoppingCart = {
    items : [
        {
            id: 1,
            itemName: "Laptop",
            price: 999.99,
            quantity: 1,
            inStock: true
        },
        {
            id: 2,
            itemName: "Headphones",
            price: 199.99,
            quantity: 2,
            inStock: true
        },
        {
            id: 3,
            itemName: "Smartphone",
            price: 699.99,
            quantity: 1,
            inStock: false
        }
    ],

    // configuration
    taxRate: 0.08,
    shippingCost: 15.00,
    freeShippingThreshold: 500.00,

    // state
    discountCode: null,
    isGuestCheckout: false,
};

// Function to calculate total cost
function calculateTotal(cart) {
    let subtotal = 0;
    let availableItems = 0;

    // calculate subtotal
    for (let item of cart.items) {
        if (item.inStock) {
            subtotal += item.price * item.quantity;
            availableItems += item.quantity;
        }
    }

    // calculate tax
    let tax = subtotal * cart.taxRate;

    // calculate shipping
    let shipping = subtotal >= cart.freeShippingThreshold ? 0 : cart.shippingCost;

    // total cost
    let total = subtotal + tax + shipping;

    return {
        subtotal: Number(subtotal.toFixed(2)),
        tax: Number(tax.toFixed(2)),
        shipping: Number(shipping.toFixed(2)),
        total: Number(total.toFixed(2)),
        availableItems
    };
}
let orderSummary = calculateTotal(shoppingCart);
console.log("Order Summary:", orderSummary);