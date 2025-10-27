const { stat } = require("fs");

// If Statements
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

let weather = "sunny";
if (weather === "sunny") {
  console.log("It's a sunny day!");
}

// If else

let score = 85;

if(score >= 80){
    console.log("You got an A");
}else if(score >= 70){
    console.log("You got a B");
}

// User authentication
let isLoggedIn = true;
if(isLoggedIn){
    console.log("User is logged in");
}else{
    console.log("User is not logged in");
}

// If-Else If-Else Chain
let temperature = 25;
if(temperature < 0){
    console.log("It's freezing outside");
}else if(temperature < 10){
    console.log("It's cold outside");
}else if(temperature < 20){
    console.log("It's nice outside");
}else if(temperature < 30){
    console.log("It's warm outside");
}else{
    console.log("It's hot outside");
}

// Grade calculator
let grade = 85;
if(grade >= 90){
    console.log("A");
}else if(grade >= 80){
    console.log("B");
}else if(grade >= 70){
    console.log("C");
}else if(grade >= 60){
    console.log("D");
}else{
    console.log("F");
}

// Nested If Statements
let user = {
    isLoggedIn: true,
    role: "admin",
    hasPermission: true
};


if(user.isLoggedIn){
    if(user.role === "admin"){
        if(user.hasPermission){
            console.log("Admin has permission");
        }else{
            console.log("Admin does not have permission");
        }
    }else{
        console.log("User is not an admin");
    }
}else{
    console.log("User is not logged in");
}

// Switch Statements
let day = "monday";

switch (day) {
    case "monday":
        console.log("Start of work week");
        break;
    case "tuesday":
        console.log("Tuesday blues");
        break;
    case "wednesday":
        console.log("Hump day");
        break;
    case "friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Regular day");
}

// Switch with Multiple Cases
function getSeasonMessage(month) {
    switch (month) {
        case "december":
        case "january":
        case "february":
            return "Winter season";
        case "march":
        case "april":
        case "may":
            return "Spring season";
        case "june":
        case "july":
        case "august":
            return "Summer season";
        case "september":
        case "october":
        case "november":
            return "Fall season";
        default:
            return "Invalid month";
    }
}

// Switch vs If-Else
// When to use switch (multiple exact matches)
function handleUserAction(action) {
    switch (action) {
        case "save":
            return "Document saved";
        case "delete":
            return "Document deleted";
        case "edit":
            return "Edit mode activated";
        default:
            return "Unknown action";
    }
}

// When to use if-else (ranges, complex conditions)
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    } else if (age < 20) {
        return "teenager";
    } else if (age < 65) {
        return "adult";
    } else {
        return "senior";
    }
}

// Ternary Operator

let userAge = 20;
let message = userAge >= 18 ? "You are an adult" : "You are a minor";
console.log(message);

// Nested 

let userScore = 85;
let userGrade = userScore >= 90 ? "A" : userScore >= 80 ? "B" : userScore >= 70 ? "C" : "D";
console.log(userGrade)

// Practicel example
function getStatusColor(status){
    return status === "active" ? "green" :
            status === "pending" ? "yellow" : "red"
}

console.log(getStatusColor("pending"))
