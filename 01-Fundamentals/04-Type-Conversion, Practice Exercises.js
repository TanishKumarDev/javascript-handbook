// Exercise 1: Universal Converter
// Helper functions for type conversion
function toString(value, defaultValue = "") {
    if (value === null || value === undefined) return defaultValue;
    return String(value);
}

function toNumber(value, defaultValue = 0) {
    const num = Number(value);
    return isNaN(num) ? defaultValue : num;
}

function toBoolean(value) {
    if (typeof value === "boolean") return value;
    if (typeof value === "string") return value.toLowerCase() === "true";
    return Boolean(value);
}

// Universal converter function
function convert(value, targetType) {
    switch (targetType.toLowerCase()) {
        case "string":
            return toString(value);
        case "number":
            return toNumber(value);
        case "boolean":
            return toBoolean(value);
        case "array":
            if (Array.isArray(value)) return value;
            if (typeof value === "string") return value.split(",").map(item => item.trim());
            return [value];
        default:
            return value; // return as-is if unknown type
    }
}

// Test the converter
console.log(convert("123", "number"));     // 123
console.log(convert(123, "string"));       // "123"
console.log(convert("true", "boolean"));   // true
console.log(convert("a,b,c", "array"));    // ["a", "b", "c"]
console.log(convert(42, "array"));         // [42]

// ✅ Features:
// - Converts between string, number, boolean, and array types.
// - Handles null/undefined safely.
// - Splits comma-separated strings into arrays.
// - Wraps other values into array if needed.
// - Case-insensitive target type.

// Exercise 2: Form Validator
function validateForm(formData, rules) {
    let errors = [];         // Collect all validation errors
    let validData = {};      // Store processed valid values

    for (let [field, rule] of Object.entries(rules)) {
        let value = formData[field];

        // 1. Required field check
        if (rule.required && (value === undefined || value === null || value === "")) {
            errors.push(`${field} is required`);
            continue;
        }

        // 2. Type-specific conversion and validation
        try {
            switch (rule.type) {
                case "string":
                    value = String(value).trim();
                    break;

                case "email":
                    value = String(value).trim().toLowerCase();
                    if (!value.includes("@")) {
                        errors.push(`${field} must be a valid email`);
                    }
                    break;

                case "age":
                    value = parseInt(value, 10);
                    if (isNaN(value) || value < 0 || value > 150) {
                        errors.push(`${field} must be a valid age (0-150)`);
                    }
                    break;

                case "phone":
                    value = String(value).replace(/\D/g, ""); // Remove non-digit characters
                    if (value.length !== 10) {
                        errors.push(`${field} must be a 10-digit phone number`);
                    }
                    break;

                case "boolean":
                    value = toBoolean(value);
                    break;

                case "number":
                    value = toNumber(value);
                    break;

                case "array":
                    if (Array.isArray(value)) break;
                    if (typeof value === "string") value = value.split(",").map(item => item.trim());
                    else value = [value];
                    break;

                default:
                    // Unknown type, leave value as-is
                    break;
            }

            validData[field] = value; // Store processed value
        } catch (e) {
            errors.push(`Error processing ${field}: ${e.message}`);
        }
    }

    return {
        isValid: errors.length === 0,
        errors,
        data: validData
    };
}

// Test the validator
let form = {
    name: "John Doe",
    email: "JOHN@EXAMPLE.COM",
    age: "30",
    phone: "(555) 123-4567"
};

let validationRules = {
    name: { required: true, type: "string" },
    email: { required: true, type: "email" },
    age: { required: true, type: "age" },
    phone: { required: false, type: "phone" }
};

console.log(validateForm(form, validationRules));

// ✅ Features of Form Validator:
// - Checks required fields.
// - Converts and validates types: string, email, age, phone, boolean, number, array.
// - Handles null, undefined, empty strings safely.
// - Provides descriptive error messages.
// - Returns both validated data and errors.
// - Flexible: can extend for new types easily.
