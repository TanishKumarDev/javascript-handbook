// 🎯 Import EventEmitter
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Register listener
myEmitter.on("greet", () => console.log("Hello, Event!"));

// Emit event
myEmitter.emit("greet"); // Hello, Event!

// 🎯 Event with Arguments and Error

// Register listener with argument
myEmitter.on("data", (value) => console.log("Received:", value));

// Register error listener
myEmitter.on("error", (err) => console.error("Error:", err.message));

// Emit events
myEmitter.emit("data", 42); // Received: 42
myEmitter.emit("error", new Error("Oops")); // Error: Oops


// 🎯 Event Emitter with Async and Event Loop

// Register async listener
myEmitter.on("asyncEvent", () => {
  setTimeout(() => console.log("Async Event"), 0);
});

// Sync code
console.log("Start");

// Emit event
myEmitter.emit("asyncEvent");

// Sync code
console.log("End");
