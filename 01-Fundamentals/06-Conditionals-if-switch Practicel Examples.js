
// Form Validation
function validateForm(data) {
    if (!data.email || !data.email.includes("@")) {
        return { valid: false, error: "Invalid email" };
    }
    
    if (!data.password || data.password.length < 8) {
        return { valid: false, error: "Password too short" };
    }
    
    return { valid: true, error: null };
}

// Run form validation
let formData = {
    email: "john.doe@example",   // invalid email (no ".com")
    password: "12345678"         // valid password
};

let formResult = validateForm(formData);
console.log("Form Validation Result:", formResult);


// Shopping Cart Logic
function calculateShipping(total, userType) {
    if (total >= 100) {
        return 0; // Free shipping
    }
    
    switch (userType) {
        case "premium":
            return 5;
        case "regular":
            return 10;
        default:
            return 15;
    }
}

// Run shipping calculation
let shipping1 = calculateShipping(120, "premium");
let shipping2 = calculateShipping(80, "premium");
let shipping3 = calculateShipping(50, "guest");

console.log("Shipping (Premium, $120):", shipping1);
console.log("Shipping (Premium, $80):", shipping2);
console.log("Shipping (Guest, $50):", shipping3);


// Game Logic
function checkGameResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "You win!";
    } else if (playerScore < computerScore) {
        return "Computer wins!";
    } else {
        return "It's a tie!";
    }
}

// Run game result checks
let result1 = checkGameResult(10, 8);
let result2 = checkGameResult(7, 12);
let result3 = checkGameResult(5, 5);

console.log("Game Result 1:", result1);
console.log("Game Result 2:", result2);
console.log("Game Result 3:", result3);
