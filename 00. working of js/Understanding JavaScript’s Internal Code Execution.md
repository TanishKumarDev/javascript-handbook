## Understanding JavaScript’s Internal Code Execution

https://www.freecodecamp.org/news/how-javascript-works-behind-the-scenes/

https://medium.com/@pratyushatrivedi/javascript-behind-the-scenes-dc1469511ada

https://www.geeksforgeeks.org/javascript/how-javascript-works/

https://fireship.io/courses/javascript/intro-history/

JavaScript is a single-threaded language, meaning it runs on one main thread. However, it handles **asynchronous tasks** (like timers, promises, or network requests) efficiently using mechanisms like the **call stack**, **web APIs**, **task queue**, **microtask queue**, and **event loop**. This section explains these concepts step-by-step, why certain outputs occur, and how they work together.

### 1. Key Components of JavaScript Execution
- **JavaScript Engine**: Executes JavaScript code. Examples include V8 (used in Chrome and Node.js).
- **Call Stack**: A stack (last-in, first-out) that tracks function execution. JavaScript pushes code onto the call stack to run it and pops it off when done.
- **Web APIs**: Browser-provided features (e.g., `setTimeout`, `setInterval`, `Promise`, DOM events) that handle asynchronous tasks outside the JavaScript engine.
- **Task Queue (Callback Queue)**: A queue (first-in, first-out) that holds callbacks from asynchronous tasks like `setTimeout`, `setInterval`, or DOM events.
- **Microtask Queue**: A high-priority queue for callbacks from promises and certain other tasks (e.g., `queueMicrotask`).
- **Event Loop**: Monitors the call stack and queues, moving callbacks to the call stack when it’s empty, prioritizing the microtask queue over the task queue.

### 2. How JavaScript Executes Code
JavaScript code execution involves two main phases:
- **Global Execution Context**: Created when you run a JavaScript file (e.g., `node script.js` or in a browser). It has:
  - **Memory Phase**: Allocates memory for variables and functions.
  - **Code Phase**: Executes code line-by-line.
- **Asynchronous Handling**: For tasks like timers or promises, JavaScript delegates to web APIs, which queue callbacks for later execution.

Here’s the process:
1. **Push to Call Stack**: All synchronous code (e.g., `console.log`) is pushed to the call stack and executed immediately.
2. **Delegate Asynchronous Tasks**: For async tasks (e.g., `setTimeout`), the JavaScript engine hands them to web APIs, which manage them outside the main thread.
3. **Queue Callbacks**: When async tasks complete, their callbacks are placed in:
   - **Task Queue**: For `setTimeout`, `setInterval`, DOM events.
   - **Microtask Queue**: For promises, `queueMicrotask`.
4. **Event Loop**: Checks if the call stack is empty. If empty:
   - First processes **all microtask queue** callbacks (higher priority).
   - Then processes **task queue** callbacks.
5. **Execute Callbacks**: The event loop moves callbacks to the call stack for execution.

### 3. Example Code and Execution Flow
Let’s analyze the first example from the transcript to understand why the output occurs as it does:
```javascript
console.log('start of script');
setTimeout(() => {
    console.log('this is from task queue');
}, 0);
console.log('end of script');
```

**Expected Output**:
```
start of script
end of script
this is from task queue
```

**Step-by-Step Execution**:
1. **Global Execution Context**:
   - Created and pushed to the call stack.
2. **Line 1: `console.log('start of script')`**:
   - Synchronous, runs immediately.
   - **Output**: `start of script`.
3. **Line 2: `setTimeout`**:
   - `setTimeout` is a web API, not part of JavaScript.
   - The browser starts a timer (0ms, expires immediately).
   - The callback (`console.log('this is from task queue')`) is registered.
   - JavaScript moves to the next line without waiting.
4. **Line 3: `console.log('end of script')`**:
   - Synchronous, runs immediately.
   - **Output**: `end of script`.
5. **Call Stack Empties**:
   - Global execution context is complete, popped off the call stack.
6. **Timer Expires**:
   - The 0ms `setTimeout` timer expires, and the callback is pushed to the **task queue**.
7. **Event Loop**:
   - Sees the call stack is empty and a callback in the task queue.
   - Moves the callback to the call stack.
   - Executes `console.log('this is from task queue')`.
   - **Output**: `this is from task queue`.
8. **Finish**:
   - Call stack and queues are empty, execution ends.

**Why `setTimeout` is Last?**:
- Even with a 0ms delay, `setTimeout` is asynchronous. Its callback waits in the task queue until the call stack is empty (after synchronous code like `console.log('end of script')` runs).
- The call stack doesn’t wait for timers; it delegates them to web APIs.

### 4. Task Queue vs. Microtask Queue
The transcript introduces a second example with a promise to show the difference between task and microtask queues:
```javascript
console.log('start of script');
setTimeout(() => {
    console.log('this is from task queue');
}, 0);
Promise.resolve().then(() => {
    console.log('this is from promise');
});
console.log('end of script');
```

**Expected Output**:
```
start of script
end of script
this is from promise
this is from task queue
```

**Step-by-Step Execution**:
1. **Global Execution Context**:
   - Pushed to the call stack.
2. **Line 1: `console.log('start of script')`**:
   - Synchronous, outputs `start of script`.
3. **Line 2: `setTimeout`**:
   - Web API starts a 0ms timer, registers callback to task queue upon expiry.
   - Moves to next line.
4. **Line 4: `Promise.resolve().then(...)`**:
   - `Promise.resolve()` is a web API, resolves immediately.
   - The `.then` callback (`console.log('this is from promise')`) is pushed to the **microtask queue**.
   - Moves to next line.
5. **Line 6: `console.log('end of script')`**:
   - Synchronous, outputs `end of script`.
6. **Call Stack Empties**:
   - Global execution context pops off.
7. **Event Loop**:
   - Checks microtask queue first (higher priority).
   - Finds promise callback, moves it to call stack, outputs `this is from promise`.
   - Microtask queue is empty, checks task queue.
   - Finds `setTimeout` callback (timer expired), moves it to call stack, outputs `this is from task queue`.
8. **Finish**:
   - All queues and call stack are empty.

**Why Promise Before `setTimeout`?**:
- **Microtask Queue Priority**: The event loop processes the microtask queue (promises) before the task queue (`setTimeout`, `setInterval`). Thus, promise callbacks run before timer callbacks, even if both are ready.

### 5. Starvation in JavaScript
The transcript mentions **starvation**, a scenario where the microtask queue monopolizes execution, preventing task queue callbacks from running.

**Example Code for Starvation**:
```javascript
console.log('start of script');
setTimeout(() => {
    console.log('this is from task queue');
}, 0);
Promise.resolve().then(() => {
    console.log('promise 1');
    Promise.resolve().then(() => {
        console.log('promise 2');
        Promise.resolve().then(() => {
            console.log('promise 3');
            Promise.resolve().then(() => {
                console.log('promise 4');
            });
        });
    });
});
console.log('end of script');
```

**Execution Flow**:
1. **Synchronous Code**:
   - Outputs `start of script`, `end of script`.
2. **Async Setup**:
   - `setTimeout` registers callback in task queue.
   - First `Promise.resolve().then` registers `promise 1` in microtask queue.
3. **Event Loop**:
   - Call stack empties.
   - Microtask queue: Runs `promise 1`, which creates another promise, adding `promise 2` to microtask queue.
   - Runs `promise 2`, adds `promise 3`.
   - Runs `promise 3`, adds `promise 4`.
   - Runs `promise 4`.
   - Microtask queue is now empty.
   - Task queue: Runs `this is from task queue`.

**Output**:
```
start of script
end of script
promise 1
promise 2
promise 3
promise 4
this is from task queue
```

**Starvation Issue**:
- If promises keep adding new promises to the microtask queue (e.g., in a loop), the microtask queue never empties.
- The event loop prioritizes the microtask queue, so task queue callbacks (like `setTimeout`) wait indefinitely.
- This is called **starvation**, where task queue tasks are “starved” of execution time.

**Example of Starvation**:
```javascript
console.log('start');
setTimeout(() => console.log('timeout'), 0);
let promise = Promise.resolve();
for (let i = 0; i < 1000; i++) {
    promise = promise.then(() => console.log(`promise ${i + 1}`));
}
console.log('end');
```
- The loop creates 1000 chained promises, filling the microtask queue.
- The `setTimeout` callback waits until all 1000 promise callbacks execute, causing a significant delay.

### 6. Clear Picture: Visual Representation
Here’s a simplified diagram of JavaScript’s execution model:

```
+------------------+       +------------------+       +------------------+
|    JavaScript    |       |    Web APIs      |       |      Queues      |
|    Engine        |       | (Browser/Node)   |       |                  |
|                  |       |                  |       | +--------------+ |
| +--------------+ |       | +--------------+ |       | | Microtask Q  | |
| | Call Stack   |<-----> | | setTimeout    |-----> | | (Promises)   | |
| | (Single Thread)|       | | Promise       |-----> | +--------------+ |
| | - Global     | |       | | DOM Events    |       | +--------------+ |
| | - Functions  | |       | +--------------+ |       | | Task Queue   | |
| +--------------+ |       |                  |       | | (setTimeout) | |
|                  |       |                  |       | +--------------+ |
+------------------+       +------------------+       +------------------+
         ^                           |
         |                           |
         +---------------------------+
                Event Loop
         (Checks Call Stack, Microtask Q, Task Q)
```

**Flow**:
1. **Synchronous Code**: Runs directly on call stack.
2. **Async Tasks**: Handed to web APIs (e.g., `setTimeout` starts timer, `Promise` resolves).
3. **Callbacks Queued**:
   - Web APIs push callbacks to task queue (`setTimeout`) or microtask queue (`Promise`).
4. **Event Loop**:
   - If call stack is empty, processes microtask queue first, then task queue.
   - Moves callbacks to call stack for execution.

### 7. Assignment from Transcript
The transcript provides an assignment to predict the output:
```javascript
console.log('start of script');
setTimeout(() => console.log('a'), 0);
setTimeout(() => console.log('b'), 0);
setTimeout(() => console.log('c'), 2000);
console.log('end of script');
console.log('bye bye');
```

**Predicted Output**:
```
start of script
end of script
bye bye
a
b
c
```

**Execution**:
1. **Synchronous**: `start of script`, `end of script`, `bye bye`.
2. **Async**:
   - Three `setTimeout` callbacks queued in task queue.
   - `a` and `b` (0ms) expire immediately, queued first.
   - `c` (2000ms) queues after 2 seconds.
3. **Event Loop**:
   - Call stack empties after synchronous code.
   - Task queue processes `a`, `b` (in order, FIFO), then `c` after ~2 seconds.

### 8. Key Takeaways
- **Single-Threaded**: JavaScript runs on one thread, using the call stack for synchronous code.
- **Asynchronous Handling**: Web APIs handle timers, promises, etc., queuing callbacks in task or microtask queues.
- **Event Loop Priority**: Microtask queue (promises) > Task queue (`setTimeout`, DOM events).
- **Starvation**: Overloading the microtask queue (e.g., chained promises) delays task queue execution.
- **Why `setTimeout` Last?**: Even with 0ms, it waits in the task queue until the call stack is empty.

### Testing
- Run the examples in a browser console or Node.js.
- Use tools like [JS Visualizer 9000](https://www.jsv9000.app/) to see the call stack, queues, and event loop in action.
- Experiment with more promises or timers to observe starvation.


# 🎯 Inshort 

## 1. Big Picture — What Happens When JS Code Runs

Jab tum JS file run karte ho (jaise `node script.js` ya browser me `<script>`),
JavaScript engine ke andar ek **Execution Environment** banta hai.

Is process me 2 major phases hote hain:

1. **Global Execution Context (GEC)** creation
2. **Asynchronous Handling** (Event Loop + Queues)

---

## 2. Phase 1 — Global Execution Context (GEC)

Har JS file ke liye **Global Execution Context** banta hai.
Ye basically wo jagah hai jahan tumhara code execute hota hai.

GEC ke **do main parts** hote hain:

---

### (A) Memory Creation Phase (also called “Creation Phase”)

* Engine **poori file ko scan** karta hai (execute nahi karta).
* Ye **memory (heap)** me jagah banata hai variables aur functions ke liye.

Rules:

* **Variables** ko `undefined` assign hota hai.
* **Functions** ka pura definition memory me store hota hai.

Example:

```js
console.log(a);
var a = 10;
function greet() {
  console.log("Hello");
}
```

**Memory Phase me:**

```
a: undefined
greet: function() {...}
```

---

### (B) Code Execution Phase

Ab code line-by-line execute hota hai.

Dry run:

1. `console.log(a)` → prints `undefined` (kyunki value abhi assign nahi hui)
2. `a = 10` → ab a ka value 10 ho gaya
3. Function call hone par → function ke liye **new execution context** banta hai.

---

### Notes:

* Har baar jab function call hota hai → **new Execution Context** banta hai.
* Ye context **Call Stack** me push hota hai.
* Jab function complete hota hai → context stack se **pop** hota hai.

---

## 3. Call Stack — Heart of Execution

Soch lo ek stack (LIFO).

Example:

```js
function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
}

first();
```

**Step by Step:**

| Step | Action                            | Stack State             |
| ---- | --------------------------------- | ----------------------- |
| 1    | Global context create             | [Global]                |
| 2    | Call `first()`                    | [Global, first]         |
| 3    | Inside `first()`, call `second()` | [Global, first, second] |
| 4    | `second()` complete               | [Global, first]         |
| 5    | `first()` complete                | [Global]                |
| 6    | Program ends                      | [] (Empty stack)        |

---

## 4. Asynchronous Handling — The “Trick” of JS

JavaScript **single-threaded** hai —
iska matlab ek time me ek hi kaam directly kar sakta hai.

Toh phir ye async kaam (timers, API calls) kaise karta hai?

Answer:
Ye **asynchronous kaam Web APIs / Node APIs** ko **delegate** karta hai (hand over karta hai).

---

### Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout Done");
}, 2000);

console.log("End");
```

**Step-by-step:**

1. `console.log("Start")` → run (stack me gaya → run → remove)
2. `setTimeout(...)` → JS engine ko mila,
   ye **callback** ko register karta hai aur timer **Web API** ke hawale kar deta hai.
   (stack me nahi rakhta, sidha delegate kar deta hai)
3. `console.log("End")` → run hota hai
4. 2 second ke baad → Web API callback ko **Task Queue** me daal deti hai
5. **Event Loop** check karta hai:

   * Kya stack empty hai?
   * Haan? → to callback ko stack me push kar aur execute kar de.

**Output:**

```
Start
End
Timeout Done
```

---

## 5. Queues in JavaScript

### (A) Task Queue (Macro Task Queue)

* Isme jaate hain:

  * `setTimeout`
  * `setInterval`
  * `setImmediate`
  * DOM events

### (B) Microtask Queue

* Isme jaate hain:

  * `Promise.then()`
  * `queueMicrotask()`
  * `process.nextTick()` (Node.js specific)

**Priority:**
Event Loop **pehle microtask queue** process karta hai,
uske baad **task queue**.

---

### Example:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

**Output:**

```
A
D
C
B
```

**Reason:**

1. A, D → normal synchronous code → call stack
2. Promise (C) → microtask → higher priority
3. setTimeout (B) → task queue → lower priority

Event loop empty hone ke baad:

* Pehle microtask queue run hoti hai (C)
* Phir task queue run hoti hai (B)

---

## 6. Overall Flow Summary

```
1. Create Global Execution Context
   |
   |-- Memory Phase (variables/functions allocate)
   |-- Code Execution Phase (line by line)

2. Push each function call → Call Stack

3. Async tasks → Web/Node APIs → Callback Queues
   |-- setTimeout → Task Queue
   |-- Promise → Microtask Queue

4. Event Loop:
   |-- Waits till Call Stack is empty
   |-- Runs all Microtasks
   |-- Then runs Tasks
```

---

## 7. Notes

| Concept                  | Role                             |
| ------------------------ | -------------------------------- |
| **Call Stack**           | Executes synchronous code        |
| **Web APIs / Node APIs** | Handle async tasks in background |
| **Task Queue**           | Holds timer & I/O callbacks      |
| **Microtask Queue**      | Holds promises & microtasks      |
| **Event Loop**           | Bridges between queues and stack |

---

