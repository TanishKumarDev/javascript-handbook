// create promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success")
    }, 2000);
});


// handle result
myPromise.then(result => console.log(result));

// Promise with Error
// Promise with error
const riskyPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Failed")), 1000);
});

// Handle result and error
riskyPromise
  .then(result => console.log(result))
  .catch(err => console.log("Error:", err.message)); // Error: Failed

// Chaining and Event Loop


// Sync and async mix
console.log("Start");
Promise.resolve().then(() => console.log("Promise"));
setTimeout(() => console.log("Timer"), 0);
console.log("End");

// Chaining and Event Loop 
