// Exercise 1: Build a comprehensive calculator
function advancedCalculator(a, b, operation) {
    // Validate inputs
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: Both operands must be numbers";
    }
    
    if (!isFinite(a) || !isFinite(b)) {
        return "Error: Operands must be finite numbers";
    }
    
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Error: Division by zero";
        case "%":
            return b !== 0 ? a % b : "Error: Division by zero";
        case "**":
            return a ** b;
        case "avg":
            return (a + b) / 2;
        case "max":
            return Math.max(a, b);
        case "min":
            return Math.min(a, b);
        default:
            return "Error: Invalid operation";
    }
}

// Test the calculator
console.log(advancedCalculator(10, 3, "+"));    // 13
console.log(advancedCalculator(10, 0, "/"));    // "Error: Division by zero"
console.log(advancedCalculator("10", 3, "+"));  // "Error: Both operands must be numbers"

// Exercise 2: Create a smart comparison function
function smartCompare(a, b, operator) {
    // Handle null/undefined
    if (a == null || b == null) {
        if (operator === "===" || operator === "!==") {
            return operator === "===" ? a === b : a !== b;
        }
        return "Error: Cannot compare null/undefined values";
    }
    
    // Convert to same type if both are numeric strings
    if (typeof a === "string" && typeof b === "string") {
        let numA = Number(a);
        let numB = Number(b);
        if (!isNaN(numA) && !isNaN(numB)) {
            a = numA;
            b = numB;
        }
    }
    
    switch (operator) {
        case "===": return a === b;
        case "!==": return a !== b;
        case ">": return a > b;
        case ">=": return a >= b;
        case "<": return a < b;
        case "<=": return a <= b;
        default: return "Error: Invalid operator";
    }
}

// Test the comparison function
console.log(smartCompare("10", "5", ">"));      // true (converts to numbers)
console.log(smartCompare("apple", "banana", "<")); // true (string comparison)
console.log(smartCompare(null, undefined, "===")); // false

// Exercise 3: Build a conditional logic evaluator
function evaluateConditions(conditions, operator) {
    if (!Array.isArray(conditions) || conditions.length === 0) {
        return false;
    }
    
    switch (operator.toUpperCase()) {
        case "AND":
            return conditions.every(condition => Boolean(condition));
        case "OR":
            return conditions.some(condition => Boolean(condition));
        case "NAND":
            return !conditions.every(condition => Boolean(condition));
        case "NOR":
            return !conditions.some(condition => Boolean(condition));
        case "XOR":
            return conditions.filter(condition => Boolean(condition)).length === 1;
        default:
            return "Error: Invalid logical operator";
    }
}

// Test the evaluator
console.log(evaluateConditions([true, true, false], "AND"));  // false
console.log(evaluateConditions([true, true, false], "OR"));   // true
console.log(evaluateConditions([true, false], "XOR"));        // true
console.log(evaluateConditions([true, true], "XOR"));         // false
