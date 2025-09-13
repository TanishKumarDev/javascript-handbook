// 🎯 Conditional statements allow you to execute different blocks of code based on conditions. They control program flow by evaluating expressions to true or false, enabling decision-making (e.g., checking if a user is logged in or determining a grade).

// 🎯 Why Conditional Statements Matter:

// Enable dynamic logic (e.g., show content only to authenticated users).
// Handle user inputs and edge cases (e.g., validate form data).
// Affect code readability and maintainability (e.g., switch vs nested if).

// Key Constructs:

// if, else, else if: Execute code based on boolean conditions.
// switch: Select code blocks based on a value’s equality.
// Ternary operator (?:): A concise conditional expression

// if, else and else if statements

let age = 12;
if(age < 13){
    console.log("child");
}else if(age >= 13 && age < 18){
    console.log("teen");
}else{
    console.log("adult");
}

// Code Example with Coercion:

let num = 0; // 0 is falsy
if(num){
    console.log("Truthy");
}else{
    console.log("Falsy");
}

// switch statement

let day = 20;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// Code Example with Fall-Through:
let fruit = "lemon";
switch(fruit){
    case "apple":
    case "banana":
        console.log("sweet fruit");
        break;
    case "lemon":
        console.log("sour fruit");
        break;
    default:
        console.log("unknown fruit");
}

// Ternary operator
let score = 8;
let grade = score >= 60 ? "Pass" : "Fail"
console.log(grade);