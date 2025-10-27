const { error } = require("console");

// Calculator function
function calculator(num1, num2, operation){
    switch (operation) {
        case "add": return num1 + num2;
        case "sub": return num1 - num2;
        case "mul": return num1 * num2;
        case "div": return num1 / num2;
        default: return "Invalid operation";
    }
}

let result = calculator(10, 5, "add");
console.log("Result:", result);

// User Validation
function validateUser(user){
    if(!user.name || user.name.length < 3){
        return {valid: false, error : "name is too short"};
    }
    if(!user.email || !user.email.includes("@")){
        return {valid: false, error : "email is invalid"};
    }
    return true;
}

let user = {name: "John", email: "john@example"};
let validationResult = validateUser(user);
console.log("Validation Result:", validationResult);

// / Array utilities
function getUniqueElements(arr){
    return Array.from(new Set(arr));
}

let arr = [1,2,3,4,5,1,2,3,4,5];
let uniqueElements = getUniqueElements(arr);
console.log("Unique Elements:", uniqueElements);

function LargethElement(arr){
    return Math.max(...arr);
}

let largestElement = LargethElement(arr);
console.log("Largest Element:", largestElement);

// String utilities
function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(0);
}

let str = "hello world";
let capitalizedStr = capitalizeFirstLetter(str);
console.log("Capitalized String:", capitalizedStr);

function reverseString(str){
    return str.split("").reverse().join("");
}

let reversedStr = reverseString(str);
console.log("Reversed String:", reversedStr);