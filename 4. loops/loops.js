// 🎯 Loops allow you to repeatedly execute a block of code as long as a condition is met or for a specific number of iterations. They’re essential for tasks like processing arrays, repeating actions, or iterating over data structures.

// 🎯 Why Loops Matter:

// Automate repetitive tasks (e.g., summing array elements).
// Enable iteration over collections (e.g., arrays, objects).
// Affect performance if misused (e.g., infinite loops).

// 🎯 Key Constructs:

// for: Fixed number of iterations.
// while: Condition-based looping.
// do...while: Runs at least once, then checks condition.
// for...in: Iterates over object properties.
// for...of: Iterates over iterable values (e.g., arrays, strings).
// break and continue: Control loop execution.

// for loop
for(let i = 0; i < 5; i++) {
    console.log("for loop: " +i); // Output: 0, 1, 2, 3, 4
}
// Code Example with Array:
let arr = ["a", "b", "c"];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// while loop
let i = 0;
while(i < 5){
    console.log("while loop: " +i); // Output: 0, 1, 2, 3, 4
    i++;
}

// do...while loop
let j = 0;
do {
    console.log("do...while loop: " +j);
    j++;
} while(j < 3);

// for...in loop
let obj = {a: "apple", b: "banana"};
for(let key in obj){
    console.log(key + ": " + obj[key]);
}

// for...of loop
let arr1 = ["a", "b", "c"];
for(let value of arr1){
    console.log(value);
}

// break and contiune
for(let i = 0; i<5; i++){
    console.log("before break:"+i);
    if(i === 2){
        break;
    }
    console.log("after break:"+i);
}
for(let i = 0; i<5; i++){
    console.log("before continue:"+i);
    if(i === 2){
        continue;
    }
    console.log("after continue:"+i);
}