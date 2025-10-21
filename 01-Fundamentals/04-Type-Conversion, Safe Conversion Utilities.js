// 1. Safe Number Conversion

function toNumber(value, defaultValue = 0){
    if(value === null || value === undefined) return defaultValue;
    let num = Number(value);
    if(isNaN(num) || !isFinite(num)) return defaultValue;
    return isNaN(num) ? defaultValue : num;
}

// Usage
console.log(toNumber("123"));              // 123
console.log(toNumber("abc"));              // 0
console.log(toNumber("abc", -1));          // -1
console.log(toNumber(null));               // 0
console.log(toNumber(undefined, 100));     // 100

function toInteger(value, defaultValue = 0) {
    let num = toNumber(value, defaultValue);
    return Math.trunc(num);
}

console.log(toInteger("123.45"));          // 123
console.log(toInteger("abc", -1));         // -1

// 2. Safe String Conversion

function toString(value, defaultValue = "") {
    if (value === null || value === undefined) {
        return defaultValue;
    }
    
    if (typeof value === "object") {
        try {
            return JSON.stringify(value);
        } catch (e) {
            return String(value);
        }
    }
    
    return String(value);
}

// Usage
console.log(toString(123));                // "123"
console.log(toString(null));               // ""
console.log(toString(null, "N/A"));        // "N/A"
console.log(toString({name: "John"}));     // '{"name":"John"}'

// 3. Safe Boolean Conversion
function toBoolean(value, truthyStrings = ["true", "yes", "1"]) {
    if (typeof value === "boolean") {
        return value;
    }
    
    if (typeof value === "string") {
        return truthyStrings.includes(value.toLowerCase());
    }
    
    return Boolean(value);
}

// Usage
console.log(toBoolean(true));              // true
console.log(toBoolean("true"));            // true
console.log(toBoolean("yes"));             // true
console.log(toBoolean("false"));           // false
console.log(toBoolean("no"));              // false
console.log(toBoolean(1));                 // true
console.log(toBoolean(0));                 // false
