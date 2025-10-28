// Basic Closure Example

function outererFunction(x) {
    let outerVar = x;

    function innerFunction(y) {
        return outerVar + y;
    }

    return innerFunction;
}

const adder = outererFunction(5);
console.log(adder(10));

// Dry run
// step 1 : outererFunction(5)
// step 2 : outerVar = 5
// step 3 : return innerFunction
// step 4 : innerFunction(10)
// step 5 : return outerVar + y
// step 6 : return 5 + 10

// How Closures Work
function createGreeting(greeting) {
    // This variable is "captured" by the closure
    return function(name) {
        return greeting + ", " + name + "!";
    };
}

const sayHello = createGreeting("Hello");
const sayGoodbye = createGreeting("Goodbye");

console.log(sayHello("Alice"));    // "Hello, Alice!"
console.log(sayGoodbye("Bob"));    // "Goodbye, Bob!"

// Each closure maintains its own copy of the variables
