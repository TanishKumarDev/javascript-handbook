// log sync
console.log("start");

// async timer
setTimeout(() => {
    console.log("timeout");
}, 1000); // 1 second delay

// async promise
Promise.resolve().then(() => {
    console.log("promise");
});

// log sync
console.log("end");