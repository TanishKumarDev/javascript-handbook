// Synchronous Callback

// Array method with callback
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));

// Asynchronous Callback
// Asyn callback with setTimeout
console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 1000); // 1 second delay
console.log("End");

