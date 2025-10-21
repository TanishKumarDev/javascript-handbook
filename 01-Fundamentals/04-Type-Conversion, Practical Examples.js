// 1. Configuration Parser

// Parse configuration from various sources
function parseConfig(rawConfig) {
    let config = {};
    
    for (let [key, value] of Object.entries(rawConfig)) {
        // Handle different value types
        if (typeof value === "string") {
            // Try to parse as JSON first
            try {
                config[key] = JSON.parse(value);
            } catch (e) {
                // Handle special string values
                if (value.toLowerCase() === "true") {
                    config[key] = true;
                } else if (value.toLowerCase() === "false") {
                    config[key] = false;
                } else if (!isNaN(value) && value.trim() !== "") {
                    config[key] = Number(value);
                } else {
                    config[key] = value;
                }
            }
        } else {
            config[key] = value;
        }
    }
    
    return config;
}

// Test with environment variables (always strings)
let envConfig = {
    PORT: "3000",
    DEBUG: "true",
    MAX_CONNECTIONS: "100",
    ALLOWED_ORIGINS: '["localhost", "example.com"]',
    DATABASE_URL: "mongodb://localhost:27017/myapp"
};

console.log(parseConfig(envConfig));
// {
//   PORT: 3000,
//   DEBUG: true,
//   MAX_CONNECTIONS: 100,
//   ALLOWED_ORIGINS: ["localhost", "example.com"],
//   DATABASE_URL: "mongodb://localhost:27017/myapp"
// }

// 2. Data Sanitizer - Data sanitization in JavaScript refers to the process of cleaning and validating user input

// Helper functions
function toString(value, defaultValue = "") {
    if (value === null || value === undefined) return defaultValue;
    return String(value);
}

function toNumber(value, defaultValue = 0) {
    let num = Number(value);
    return isNaN(num) ? defaultValue : num;
}

function toBoolean(value) {
    if (typeof value === "boolean") return value;
    if (typeof value === "string") return value.toLowerCase() === "true";
    return Boolean(value);
}

// Sanitize and convert user input
function sanitizeUserData(data, schema) {
    let sanitized = {};
    
    for (let [field, rules] of Object.entries(schema)) {
        let value = data[field];
        
        // Apply type conversion
        switch (rules.type) {
            case "string":
                value = toString(value, rules.default || "");
                if (rules.trim) value = value.trim();
                if (rules.maxLength) value = value.substring(0, rules.maxLength);
                break;
                
            case "number":
                
                value = toNumber(value, rules.default || 0);
                if (rules.min !== undefined) value = Math.max(value, rules.min);
                if (rules.max !== undefined) value = Math.min(value, rules.max);
                break;
                
            case "boolean":
                value = toBoolean(value);
                break;
                
            case "array":
                if (typeof value === "string") {
                    value = value.split(rules.separator || ",").map(item => item.trim());
                } else if (!Array.isArray(value)) {
                    value = rules.default || [];
                }
                break;
        }
        
        sanitized[field] = value;
    }
    
    return sanitized;
}

// Usage
let userInput = {
    name: "  John Doe  ",
    age: "30",
    email: "john@example.com",
    isActive: "true",
    hobbies: "reading, swimming, coding",
    score: "150"  // Will be clamped
};

let schema = {
    name: { type: "string", trim: true, maxLength: 50 },
    age: { type: "number", min: 0, max: 120 },
    email: { type: "string", trim: true },
    isActive: { type: "boolean" },
    hobbies: { type: "array", separator: "," },
    score: { type: "number", min: 0, max: 100 }
};

console.log(sanitizeUserData(userInput, schema));
// {
//   name: "John Doe",
//   age: 30,
//   email: "john@example.com",
//   isActive: true,
//   hobbies: ["reading", "swimming", "coding"],
//   score: 100
// }

