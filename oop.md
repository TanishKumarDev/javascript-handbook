# Object-Oriented Programming (OOP) in JavaScript

### Simplified Explanation
**Object-Oriented Programming (OOP)** is a programming paradigm that organizes code around **objects**—data structures combining properties (data) and methods (functions). In JavaScript, OOP is implemented using **objects**, **prototypes**, and, since ES6, **classes**. It allows you to model real-world entities, promote code reuse, and manage complexity.

- **Analogy**: Think of OOP as a factory. Objects are products (e.g., cars) with properties (color, speed) and methods (drive, stop). Prototypes are blueprints shared by similar products, and classes are modern templates for creating these blueprints. Inheritance lets you create specialized products (e.g., electric cars) based on existing ones.

### Why OOP Matters
OOP in JavaScript is crucial for:
- **Modularity**: Organizing code into reusable objects/classes.
- **Scalability**: Managing complex apps (e.g., web apps, Node.js servers).
- **Maintainability**: Encapsulation and inheritance reduce code duplication.
- **Real-World Modeling**: Representing entities like users, servers, or UI components.
It’s widely used in frameworks (e.g., React, Node.js) and integrates with async patterns (e.g., Event Emitters inherit from `EventEmitter`).

### Core OOP Concepts
1. **Encapsulation**: Bundling data (properties) and methods, restricting access to some parts (e.g., private fields).
   - **Term**: *Encapsulation* – Hiding internal details, exposing only necessary interfaces.
2. **Inheritance**: Allowing objects/classes to inherit properties and methods from others.
   - **Term**: *Inheritance* – Reusing behavior from a parent (base) to a child (derived).
3. **Polymorphism**: Objects of different types can share a common interface, behaving differently.
   - **Term**: *Polymorphism* – Same method name, different implementations.
4. **Abstraction**: Hiding complex details, exposing simple interfaces.
   - **Term**: *Abstraction* – Simplifying interaction with complex systems.

### JavaScript OOP Mechanisms
JavaScript’s OOP is unique due to its **prototype-based** nature (vs. class-based in languages like Java). ES6 introduced **classes** as syntactic sugar over prototypes.

#### 1. Objects
- Objects are key-value pairs (properties and methods).
- Created via literals, constructors, or classes.
- **Code Example**:
  ```js
  // Object literal
  const user = {
    name: "Alice",
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  };
  user.greet(); // Hello, Alice
  ```

#### 2. Prototypes
- Every JavaScript object has a **prototype**—an object from which it inherits properties/methods.
- **Term**: *Prototype* – A shared object for inheritance.
- **Term**: *Prototype Chain* – Chain of prototypes searched for properties/methods.
- Accessed via `__proto__` (deprecated) or `Object.getPrototypeOf()`.
- **Code Example**:
  ```js
  const obj = {};
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
  ```

#### 3. Constructor Functions
- Functions used to create objects with shared prototypes.
- Called with `new` to set `this` and link to a prototype.
- **Code Example**:
  ```js
  // Constructor function
  function User(name) {
    this.name = name;
  }
  User.prototype.greet = function () {
    console.log(`Hello, ${this.name}`);
  };
  const alice = new User("Alice");
  alice.greet(); // Hello, Alice
  ```

#### 4. ES6 Classes
- Syntactic sugar over constructor functions and prototypes.
- Use `class`, `constructor`, `extends`, and `super` keywords.
- **Code Example**:
  ```js
  // Class
  class User {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  }
  const bob = new User("Bob");
  bob.greet(); // Hello, Bob
  ```

#### 5. Inheritance
- Achieved via prototype chain or `extends` in classes.
- **Code Example (Class Inheritance)**:
  ```js
  // Parent class
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  // Child class
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks`);
    }
  }
  const dog = new Dog("Rex");
  dog.speak(); // Rex barks
  ```

#### 6. Private Fields (ES2022+)
- Use `#` for private fields/methods, enforcing encapsulation.
- **Code Example**:
  ```js
  class Counter {
    #count = 0; // Private field
    increment() {
      this.#count++;
    }
    getCount() {
      return this.#count;
    }
  }
  const counter = new Counter();
  counter.increment();
  console.log(counter.getCount()); // 1
  // console.log(counter.#count); // SyntaxError
  ```

#### 7. Static Methods/Properties
- Belong to the class, not instances.
- **Code Example**:
  ```js
  class MathUtil {
    static add(a, b) {
      return a + b;
    }
  }
  console.log(MathUtil.add(2, 3)); // 5
  ```

### Code Example with Minimal Comments (OOP with Async)
```js
// Class with async method
class ApiClient {
  async fetchData() {
    const data = await new Promise(resolve => setTimeout(() => resolve("Data"), 1000));
    return data;
  }
}
// Use async/await
async function run() {
  const client = new ApiClient();
  console.log("Start");
  const result = await client.fetchData();
  console.log(result); // Data
  console.log("End");
}
run();
```
**Output**: `Start`, `Data` (after 1s), `End`

### Dry Run (Async OOP Example)
1. **Parsing**: JS engine creates AST, confirms valid code.
2. **Global Execution Context**: Call stack holds global code.
3. **Line 1-4 (Class Definition)**:
   - `ApiClient` class defined, `fetchData` method uses `async`.
4. **Line 6-10 (`run`)**:
   - `run` called, creates Promise (since `async`).
   - `client` instantiated from `ApiClient`.
5. **Line 8 (`console.log("Start")`)**:
   - Prints `Start`.
6. **Line 9 (`await client.fetchData()`)**:
   - Calls `fetchData`, which awaits a Promise resolving after 1s.
   - `await` pauses `run`, pushes resolution to **microtask queue**.
7. **Event Loop**:
   - Call stack empty, microtask queue resolves Promise, prints `Data`.
   - Resumes `run`, prints `End`.

**Reasoning**: Sync code runs first. `await` in `fetchData` uses the microtask queue, integrating with the event loop, as seen in previous topics.

### Important Points
- **Prototype-Based**: JavaScript uses prototypes for inheritance, unlike class-based languages.
- **Classes Are Syntactic Sugar**: ES6 classes are built on constructor functions and prototypes.
- **This Binding**: `this` in methods refers to the instance; arrow functions avoid `this` issues.
- **Prototype Chain**: Properties/methods not found on an object are searched in its prototype chain.
- **Encapsulation**: Private fields (`#`) and closures provide data hiding.
- **Relation to Event Emitters**: Node.js’s `EventEmitter` uses prototypes (e.g., `http.Server` inherits from `EventEmitter`).
- **Async Integration**: Classes can include `async` methods, leveraging Promises and the event loop.

### Tips
- **Use Classes for Clarity**: Prefer ES6 classes over constructor functions for modern code.
- **Encapsulate with `#`**: Use private fields for true encapsulation (ES2022+).
- **Avoid `__proto__`**: Use `Object.getPrototypeOf` or `Object.setPrototypeOf` for prototype manipulation.
- **Practice Inheritance**: Build hierarchies (e.g., `Animal` → `Dog`) to understand prototypes.
- **Debug with DevTools**: Inspect prototype chains in Chrome DevTools (`__proto__` or `prototype`).

### Common Pitfalls
1. **Losing `this` Context**:
   ```js
   // Bad: Losing this
   class User {
     constructor(name) { this.name = name; }
     greet() { console.log(`Hello, ${this.name}`); }
   }
   const user = new User("Alice");
   const fn = user.greet;
   fn(); // TypeError: this is undefined
   ```
   - **Fix**: Bind or use arrow functions:
     ```js
     class User {
       constructor(name) { this.name = name; }
       greet = () => console.log(`Hello, ${this.name}`);
     }
     ```
2. **Prototype Pollution**:
   ```js
   // Bad: Modifying Object.prototype
   Object.prototype.bad = "Oops";
   const obj = {};
   console.log(obj.bad); // Oops
   ```
   - **Fix**: Avoid modifying built-in prototypes.
3. **Forgetting `super` in Subclasses**:
   ```js
   // Bad: Missing super
   class Dog extends Animal {
     constructor(name) {
       // super(name); // Error: Must call super
       this.name = name;
     }
   }
   ```
   - **Fix**: Always call `super`:
     ```js
     constructor(name) {
       super(name);
       this.name = name;
     }
     ```

---

## Interview Questions and Answers for OOP

### Beginner-Level Questions
1. **What is OOP in JavaScript?**
   - **Answer**: OOP is a programming paradigm that uses objects to model data and behavior. JavaScript implements OOP via prototypes and ES6 classes, supporting encapsulation, inheritance, polymorphism, and abstraction.
   - **Trick/Tip**: Mention prototype-based nature vs. class-based languages.
   - **Why Asked?**: Tests basic understanding.

2. **What is a prototype in JavaScript?**
   - **Answer**: A prototype is an object from which other objects inherit properties/methods. Every object has a prototype, forming a chain searched for missing properties.
   - **Code Example**:
     ```js
     const obj = {};
     console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
     ```
   - **Trick/Tip**: Mention prototype chain for inheritance.
   - **Why Asked?**: Tests core mechanic.

3. **What is the difference between a constructor function and a class?**
   - **Answer**:
     - **Constructor Function**: A function called with `new` to create objects, using `prototype` for shared methods.
     - **Class**: ES6 syntactic sugar over constructor functions, with cleaner syntax (`constructor`, `extends`).
   - **Code Example**:
     ```js
     // Constructor
     function User(name) { this.name = name; }
     User.prototype.greet = function () { console.log(this.name); };
     // Class
     class UserClass {
       constructor(name) { this.name = name; }
       greet() { console.log(this.name); }
     }
     ```
   - **Trick/Tip**: Say: “Classes are more readable but work the same under the hood.”
   - **Why Asked?**: Tests ES6 vs. pre-ES6.

4. **What is `this` in a class method?**
   - **Answer**: `this` refers to the instance of the class. In arrow functions, `this` is lexically bound (e.g., to the class instance).
   - **Code Example**:
     ```js
     class User {
       constructor(name) { this.name = name; }
       greet = () => console.log(this.name);
     }
     const user = new User("Alice");
     const fn = user.greet;
     fn(); // Alice (arrow function preserves this)
     ```
   - **Trick/Tip**: Mention `bind` for non-arrow methods.
   - **Why Asked?**: Tests `this` behavior.

5. **What is encapsulation, and how is it achieved in JavaScript?**
   - **Answer**: Encapsulation hides internal data, exposing only necessary interfaces. Achieved via closures or private fields (`#`).
   - **Code Example**:
     ```js
     class BankAccount {
       #balance = 0;
       deposit(amount) { this.#balance += amount; }
       getBalance() { return this.#balance; }
     }
     ```
   - **Trick/Tip**: Mention ES2022 private fields for true encapsulation.
   - **Why Asked?**: Tests OOP principles.

### Intermediate-Level Questions
6. **What is the output of this code?**
   ```js
   class Counter {
     #count = 0;
     increment() { this.#count++; }
     getCount() { return this.#count; }
   }
   const counter = new Counter();
   counter.increment();
   console.log(counter.getCount());
   ```
   - **Answer**: `1`.
   - **Dry Run**:
     1. `Counter` class defined, `#count` initialized to 0.
     2. `counter` instantiated, `#count` set to 0.
     3. `increment` called, `#count` becomes 1.
     4. `getCount` returns 1, printed.
   - **Trick/Tip**: Highlight private field `#count` is inaccessible directly.
   - **Why Asked?**: Tests class and encapsulation.

7. **How does inheritance work in JavaScript classes?**
   - **Answer**: Inheritance uses `extends` to inherit properties/methods from a parent class, with `super` to call the parent’s constructor or methods.
   - **Code Example**:
     ```js
     class Animal {
       constructor(name) { this.name = name; }
       speak() { console.log("Sound"); }
     }
     class Cat extends Animal {
       speak() { console.log("Meow"); }
     }
     const cat = new Cat("Whiskers");
     cat.speak(); // Meow
     ```
   - **Trick/Tip**: Mention prototype chain underlies `extends`.
   - **Why Asked?**: Tests inheritance mechanics.

8. **What is the prototype chain, and how does it work?**
   - **Answer**: The prototype chain is a series of linked prototype objects searched for properties/methods. If a property isn’t found on an object, JavaScript checks its prototype, then the prototype’s prototype, until `null`.
   - **Code Example**:
     ```js
     const obj = {};
     console.log(obj.toString()); // [object Object] (from Object.prototype)
     ```
   - **Trick/Tip**: Use `Object.getPrototypeOf` to inspect chain.
   - **Why Asked?**: Tests prototype understanding.

9. **What are static methods, and when are they used?**
   - **Answer**: Static methods belong to the class, not instances, and are called without instantiating. Used for utility functions or class-level operations.
   - **Code Example**:
     ```js
     class MathUtil {
       static square(n) { return n * n; }
     }
     console.log(MathUtil.square(4)); // 16
     ```
   - **Trick/Tip**: Mention `Math` or `Array` as built-in examples.
   - **Why Asked?**: Tests class features.

10. **How do you achieve polymorphism in JavaScript?**
    - **Answer**: Polymorphism allows different classes to share a method name with unique implementations, achieved via inheritance or interfaces.
    - **Code Example**:
      ```js
      class Shape {
        area() { return 0; }
      }
      class Circle extends Shape {
        constructor(radius) { super(); this.radius = radius; }
        area() { return Math.PI * this.radius ** 2; }
      }
      const shapes = [new Shape(), new Circle(5)];
      shapes.forEach(s => console.log(s.area())); // 0, ~78.54
      ```
    - **Trick/Tip**: Mention method overriding for polymorphism.
    - **Why Asked?**: Tests OOP principles.

### Advanced-Level Questions
11. **How do prototypes relate to Event Emitters in Node.js?**
    - **Answer**: Node.js’s `EventEmitter` is a constructor function whose instances inherit methods (e.g., `on`, `emit`) via its prototype. Classes like `http.Server` extend `EventEmitter`.
    - **Code Example**:
      ```js
      const EventEmitter = require("events");
      class MyEmitter extends EventEmitter {}
      const emitter = new MyEmitter();
      emitter.on("event", () => console.log("Emitted"));
      emitter.emit("event"); // Emitted
      ```
    - **Trick/Tip**: Mention prototype chain for `on` method lookup.
    - **Why Asked?**: Tests Node.js OOP.

12. **What happens if you forget `new` with a constructor function?**
    - **Answer**: Without `new`, `this` binds to the global object (or `undefined` in strict mode), causing errors or pollution.
    - **Code Example**:
      ```js
      function User(name) { this.name = name; }
      const user = User("Alice"); // TypeError or global pollution
      ```
    - **Fix**:
      ```js
      const user = new User("Alice");
      ```
    - **Trick/Tip**: Mention classes avoid this issue (strict mode).
    - **Why Asked?**: Tests constructor mechanics.

13. **How do private fields work, and why are they useful?**
    - **Answer**: Private fields (`#`) are inaccessible outside the class, enforcing true encapsulation. Useful for hiding sensitive data.
    - **Code Example**:
      ```js
      class Secret {
        #password = "123";
        check(password) { return password === this.#password; }
      }
      const secret = new Secret();
      console.log(secret.check("123")); // true
      // console.log(secret.#password); // SyntaxError
      ```
    - **Trick/Tip**: Contrast with closures for pre-ES2022 encapsulation.
    - **Why Asked?**: Tests modern JS features.

14. **How do you implement abstraction in JavaScript?**
    - **Answer**: Abstraction hides complex details via interfaces or abstract-like classes. JavaScript lacks true abstract classes, but you can mimic them with errors for unimplemented methods.
    - **Code Example**:
      ```js
      class AbstractShape {
        area() { throw new Error("Must implement area"); }
      }
      class Circle extends AbstractShape {
        constructor(radius) { super(); this.radius = radius; }
        area() { return Math.PI * this.radius ** 2; }
      }
      ```
    - **Trick/Tip**: Mention interfaces via naming conventions.
    - **Why Asked?**: Tests OOP design.

15. **How do you combine OOP with async operations?**
    - **Answer**: Use `async` methods in classes, leveraging Promises and `await`.
    - **Code Example**:
      ```js
      class DataFetcher {
        async fetch() {
          return await new Promise(r => setTimeout(() => r("Data"), 1000));
        }
      }
      async function run() {
        const fetcher = new DataFetcher();
        console.log(await fetcher.fetch()); // Data
      }
      run();
      ```
    - **Trick/Tip**: Tie to event loop (microtask queue).
    - **Why Asked?**: Tests async OOP integration.

---

## Tricky OOP Questions
1. **What’s the output of this code?**
   ```js
   class Base {
     log() { console.log("Base"); }
   }
   class Derived extends Base {
     log() { console.log("Derived"); }
   }
   const obj = new Derived();
   obj.log();
   ```
   - **Answer**: `Derived`.
   - **Trick**: Explain method overriding in inheritance.

2. **Why does this code throw an error?**
   ```js
   class Dog extends Animal {
     constructor(name) { this.name = name; }
   }
   const dog = new Dog("Rex");
   ```
   - **Answer**: Missing `super()` call in subclass constructor.
   - **Fix**:
     ```js
     constructor(name) { super(name); this.name = name; }
     ```
   - **Trick**: Mention `super` is mandatory for subclasses.

3. **What’s the output with prototype chain?**
   ```js
   function Animal() {}
   Animal.prototype.speak = function () { console.log("Sound"); };
   const animal = new Animal();
   console.log(animal.speak());
   ```
   - **Answer**: `Sound`, `undefined` (since `speak` doesn’t return).
   - **Trick**: Clarify prototype lookup for `speak`.

4. **Why does this code fail?**
   ```js
   class User {
     greet() { console.log(this.name); }
   }
   const user = new User();
   const fn = user.greet;
   fn();
   ```
   - **Answer**: `TypeError` because `this` is `undefined` (not bound).
   - **Fix**: Use arrow function or `.bind`.

5. **How do you mimic private methods pre-ES2022?**
   - **Answer**: Use closures in constructor functions.
   - **Code Example**:
     ```js
     function Counter() {
       let count = 0;
       this.increment = function () { count++; };
       this.getCount = function () { return count; };
     }
     const counter = new Counter();
     counter.increment();
     console.log(counter.getCount()); // 1
     ```
   - **Trick**: Contrast with `#` fields.

---

## Small Tricks and Tips for OOP in Interviews
1. **Master Prototype Chain**:
   - Say: “I understand prototype-based inheritance via the chain.”
   - **Trick**: Draw prototype chain for clarity.
   - **Why It Works**: Shows deep mechanics.

2. **Use Classes**:
   - Say: “I prefer ES6 classes for readability and modern syntax.”
   - **Trick**: Show class vs. constructor function example.
   - **Why It Works**: Highlights ES6 expertise.

3. **Encapsulation**:
   - Say: “I use private fields (`#`) for true encapsulation.”
   - **Trick**: Show `#` vs. closure-based encapsulation.
   - **Why It Works**: Shows modern JS knowledge.

4. **Async Integration**:
   - Say: “I combine classes with `async/await` for clean async code.”
   - **Trick**: Show an `async` method in a class.
   - **Why It Works**: Ties to previous topics.

5. **Event Emitter Connection**:
   - Say: “Node.js’s `EventEmitter` uses prototypes for inheritance.”
   - **Trick**: Show a class extending `EventEmitter`.
   - **Why It Works**: Shows Node.js OOP.

6. **Avoid `this` Pitfalls**:
   - Say: “I use arrow functions or `.bind` to preserve `this`.”
   - **Trick**: Show a fixed `this` issue.
   - **Why It Works**: Shows attention to detail.

7. **Polymorphism Example**:
   - Show a shape hierarchy with `area` method overriding.
   - **Why It Works**: Demonstrates OOP principles.
