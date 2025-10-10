// 1. Objects
// Object literal
const user = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
user.greet(); // Hello, Alice

// 2. Prototypes
// Constructor function
function User(name) {
  this.name = name;
}
User.prototype.greet = function () {
  console.log(`Hello, ${this.name}`);
};
const alice = new User("Alice");
alice.greet(); // Hello, Alice

// 4. ES6 Classes
class User_ES6{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hi, ${this.name}`);
    }
}
const bob = new User_ES6("bob");
bob.greet();

// 5. Inheritance

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

// 6. Private Fields (ES2022+)

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

// 7. Static Methods/Properties
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(2, 3)); // 5