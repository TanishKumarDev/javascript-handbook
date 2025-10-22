function validateRegistration(userData) {
    let errors = [];
    
    // Name validation
    if (!userData.name || userData.name.trim().length < 2) {
        errors.push("Name must be at least 2 characters long");
    }
    
    // Age validation
    if (!userData.age || userData.age < 13 || userData.age > 120) {
        errors.push("Age must be between 13 and 120");
    }
    
    // Email validation (basic)
    if (!userData.email || !userData.email.includes("@") || userData.email.length < 5) {
        errors.push("Please provide a valid email address");
    }
    
    // Password validation
    if (!userData.password || userData.password.length < 8) {
        errors.push("Password must be at least 8 characters long");
    }
    
    // Terms acceptance
    if (!userData.acceptTerms) {
        errors.push("You must accept the terms and conditions");
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// Test the validation
let user1 = {
    name: "John Doe",
    age: 25,
    email: "john@example.com",
    password: "securepass123",
    acceptTerms: true
};

let user2 = {
    name: "A",
    age: 22,
    email: "invalid",
    password: "123",
    acceptTerms: false
};

console.log(validateRegistration(user1)); // { isValid: true, errors: [] }
console.log(validateRegistration(user2)); // { isValid: false, errors: [...] }


// 2. Shopping Cart Logic
function calculateCartTotal(items, discountCode, userType) {
    let subtotal = 0;
    let itemCount = 0;
    
    // Calculate subtotal
    for (let item of items) {
        if (item.quantity > 0 && item.price > 0) {
            subtotal += item.price * item.quantity;
            itemCount += item.quantity;
        }
    }
    
    // Apply quantity discount
    let quantityDiscount = 0;
    if (itemCount >= 10) {
        quantityDiscount = subtotal * 0.1; // 10% discount for 10+ items
    } else if (itemCount >= 5) {
        quantityDiscount = subtotal * 0.05; // 5% discount for 5+ items
    }
    
    // Apply discount code
    let codeDiscount = 0;
    if (discountCode === "SAVE20") {
        codeDiscount = subtotal * 0.2;
    } else if (discountCode === "SAVE10") {
        codeDiscount = subtotal * 0.1;
    }
    
    // Apply user type discount
    let userDiscount = 0;
    if (userType === "premium") {
        userDiscount = subtotal * 0.15;
    } else if (userType === "student") {
        userDiscount = subtotal * 0.1;
    }
    
    // Take the best discount (not cumulative)
    let bestDiscount = Math.max(quantityDiscount, codeDiscount, userDiscount);
    
    // Calculate tax
    let taxableAmount = subtotal - bestDiscount;
    let tax = taxableAmount * 0.08; // 8% tax
    
    // Calculate shipping
    let shipping = 0;
    if (subtotal < 100 && itemCount > 0) {
        shipping = 10; // $10 shipping for orders under $100
    }
    
    let total = subtotal - bestDiscount + tax + shipping;
    
    return {
        subtotal: Number(subtotal.toFixed(2)),
        discount: Number(bestDiscount.toFixed(2)),
        tax: Number(tax.toFixed(2)),
        shipping: Number(shipping.toFixed(2)),
        total: Number(total.toFixed(2)),
        itemCount: itemCount
    };
}

// Test the cart calculation
let cartItems = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 }
];

console.log(calculateCartTotal(cartItems, "SAVE20", "premium"));

// 3. Game Score Calculator
function calculateGameScore(player) {
    let baseScore = 0;
    
    // Points for different achievements
    baseScore += player.kills * 10;
    baseScore += player.assists * 5;
    baseScore += player.objectives * 25;
    
    // Bonus multipliers
    let multiplier = 1;
    
    // Winning bonus
    if (player.won) {
        multiplier += 0.5;
    }
    
    // Performance bonuses
    if (player.kills > 20) {
        multiplier += 0.3; // Killing spree bonus
    }
    
    if (player.deaths === 0 && player.kills > 0) {
        multiplier += 0.5; // Flawless victory bonus
    }
    
    // Penalties
    if (player.deaths > player.kills * 2) {
        multiplier -= 0.2; // Poor performance penalty
    }
    
    // Ensure multiplier doesn't go below 0.5
    multiplier = Math.max(multiplier, 0.5);
    
    let finalScore = Math.round(baseScore * multiplier);
    
    // Rank calculation
    let rank = "Bronze";
    if (finalScore >= 1000) {
        rank = "Diamond";
    } else if (finalScore >= 750) {
        rank = "Gold";
    } else if (finalScore >= 500) {
        rank = "Silver";
    }
    
    return {
        baseScore: baseScore,
        multiplier: Number(multiplier.toFixed(2)),
        finalScore: finalScore,
        rank: rank
    };
}

// Test the score calculator
let player1 = {
    kills: 15,
    deaths: 3,
    assists: 8,
    objectives: 2,
    won: true
};

let player2 = {
    kills: 5,
    deaths: 15,
    assists: 2,
    objectives: 0,
    won: false
};

console.log(calculateGameScore(player1)); // High score with bonuses
console.log(calculateGameScore(player2)); // Lower score with penalties
