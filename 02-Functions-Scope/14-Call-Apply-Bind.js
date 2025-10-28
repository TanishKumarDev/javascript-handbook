// These  methods allow you to explicitly set the this context when calling functions.

// call() Method
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}
const person = {
    name: 'John'
};

// use call to set 'this' to person
console.log(greet.call(person, "Hi", "!"))
console.log(greet.call(person, "Hey", "!"))

// Without call
console.log(greet("Hello", "!")); // "Hello, undefined!"

// apply() Method
function introduce(greet, age, city) {
    return `${greet}, my name is ${this.name} and I'm ${age} years old. I live in ${city}.`;
}

const user = {
    name: 'John'
};
const args = [ "Hi", 25, "NYC"];

console.log(introduce.apply(user, args));

// call vs apply
console.log(introduce.call(user, "Hi", 25, "New York")); // Same result
console.log(introduce.apply(user, ["Hi", 25, "New York"])); // Same result

// bind() Method

// bind(thisArg, arg1, arg2, ...) - returns new function
function sayHello() {
    return `Hello, ${this.name}!`;
}

const person1 = { name: "Charlie" };
const person2 = { name: "Diana" };

// Create bound functions
const sayHelloToCharlie = sayHello.bind(person1);
const sayHelloToDiana = sayHello.bind(person2);

console.log(sayHelloToCharlie()); // "Hello, Charlie!"
console.log(sayHelloToDiana()); // "Hello, Diana!"

// Original function unchanged
console.log(sayHello()); // "Hello, undefined!"
