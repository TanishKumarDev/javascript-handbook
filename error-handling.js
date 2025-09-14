// 🎯 Error handling manages runtime errors (e.g., invalid input, network issues) to prevent program crashes and provide meaningful feedback. JavaScript uses try...catch to handle errors gracefully, throw to create errors, and finally for cleanup.

// 🎯 Key Constructs:

// try...catch: Catches and handles errors.
// throw: Creates custom errors.
// finally: Runs code regardless of error.

// 1. try...catch
try {
    // Code that might throw an error
    let x = undefinedVariable; // ReferenceError
} catch (error) {
    // Handle the error
    console.log(error.name);// ReferenceError
    console.log(error.message); // undefinedVariable is not defined
}

// 2. finally: Runs code regardless of error.
try {
    // Code that might throw an error
    console.log("Typing...");
    throw new Error("Oops! Something went wrong.");
} catch (error) {
    // Handle error
    console.log("cought:", error.message);
} finally {
    // Always runs
    console.log("Cleaning up...");
}

// 3. throw: Creates custom errors.
try {
    // Code that might throw an error
    let age = -5;
    if (age < 0) {
        throw new Error("age can't be negative");
    }
} catch (error) {
    // Handle error
    console.log("cought:", error.message);
}

// 4. Custom Error Objects
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
// Extends Error for custom error types with specific names/messages.

try{
    let input = "";
    if(!input) throw new ValidationError("Input is empty");
}catch(error){
    console.log(error.name);
    console.log(error.message);
}

// 5. Common Error Types
// ReferenceError: Accessing undefined variable.
// TypeError: Invalid operation on a type (e.g., calling non-function).
// SyntaxError: Invalid code syntax (not caught by try...catch).
// RangeError: Value out of range (e.g., invalid array length).
// Error: Generic base error.
try {
    let obj = null;
    obj.prop; // TypeError
} catch (error) {
    // Handle error
    console.log(error.name)
    console.log(error.message)

}