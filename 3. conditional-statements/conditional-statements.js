// if
age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}

// if...else
marks = 80;
if (marks >= 80) {
    console.log("Grade A");
}else{
    console.log("Grade A");
}

// if...else if...else
score = 5;
if (score >= 90) {
    console.log("Scored >= 90");
} else if (score >= 80) {
    console.log("Scored >= 80");
} else {
    console.log("Scored < 80");
}
// switch
day = 30;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
// ternary (? :)
age = 20;
console.log(age >= 18 ? "You are an adult" : "You are a minor");