// Basic Async/Await

async function fetchData(){
    const result = await new Promise(resolve => setTimeout(() => resolve("Data"), 1000));  
    console.log(result);
}

fetchData();

// Error Handling
// Async function with error
async function riskyFetch() {
  try {
    // Wait for rejecting Promise
    await new Promise((_, reject) => setTimeout(() => reject(new Error("Failed")), 1000));
  } catch (err) {
    console.log("Error:", err.message); // Error: Failed
  }
}
riskyFetch();

// Async/Await with Event Loop
// Sync and async mix
console.log("Start");
async function run() {
  await Promise.resolve().then(() => console.log("Awaited Promise"));
  console.log("After Await");
}
run();
setTimeout(() => console.log("Timer"), 0);
console.log("End");