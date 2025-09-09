console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 1000); // 1 second delay

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");