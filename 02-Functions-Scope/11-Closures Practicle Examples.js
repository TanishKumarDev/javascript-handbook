// 1. Counter Function
console.log("1. Counter Function")
function creatCounter() {
    let counter = 0;
    
    return function() {
        counter++;
        return counter;
    };
}
const counter1 = creatCounter();
const counter2 = creatCounter();

console.log(counter1())
console.log(counter1())
console.log(counter2())
console.log(counter1())

// 2. Private Variables
console.log("2. Private Variables")
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            }
            return "Invalid amount";
        },
        
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
            return "Insufficient funds";
        },
        
        getBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
console.log(account.deposit(50));   // 150
console.log(account.withdraw(30));  // 120
console.log(account.getBalance());  // 120
// console.log(balance); // Error! balance is private

// 3. Function Factory
console.log("3. Function Factory")
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Closures with Loops
// Problem: All functions reference the same variable
console.log("Closures with Loops")
function createFunctions() {
    let functions = [];
    
    for (var i = 0; i < 3; i++) {
        functions.push(function() {
            return i; // All functions will return 3!
        });
    }
    
    return functions;
}

const funcs = createFunctions();
console.log(funcs[0]()); // 3 (not 0!)
console.log(funcs[1]()); // 3 (not 1!)

// // Solution 1: Use let instead of var
console.log("Solution 1: Use let instead of var")
function createFunctionsFixed() {
    let functions = [];
    
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            return i;
        });
    }
    
    return functions;
}

const funcsFixed = createFunctionsFixed();
console.log(funcsFixed[0]()); // 0
console.log(funcsFixed[1]()); // 1

// Solution 2: Use IIFE to create closure
console.log("Solution 2: Use IIFE to create closure")
function createFunctionsIIFE() {
    let functions = [];
    
    for (var i = 0; i < 3; i++) {
        functions.push((function(index) {
            return function() {
                return index;
            };
        })(i));
    }
    
    return functions;
}

const funcsIIFE = createFunctionsIIFE();
console.log(funcsIIFE[0]()); // 0
console.log(funcsIIFE[1]()); // 1

// Module Pattern with Closures
console.log("Module Pattern with Closures")
const todoModule = (function() {
    let todos = [];
    let nextId = 1;
    
    return {
        add: function(text) {
            const todo = {
                id: nextId++,
                text: text,
                completed: false
            };
            todos.push(todo);
            return todo;
        },
        
        complete: function(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todo.completed = true;
                return todo;
            }
            return null;
        },
        
        getAll: function() {
            return [...todos]; // Return copy, not original
        },
        
        getCompleted: function() {
            return todos.filter(t => t.completed);
        },
        
        remove: function(id) {
            const index = todos.findIndex(t => t.id === id);
            if (index > -1) {
                return todos.splice(index, 1)[0];
            }
            return null;
        }
    };
})();

// Usage
todoModule.add("Learn JavaScript");
todoModule.add("Build a project");
todoModule.complete(1);
console.log(todoModule.getAll());

// Event Handlers with Closures 
console.log("Event Handlers with Closures")
function setupButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            console.log(`Button ${i} clicked`); // Closure captures i
        });
    }
}

// Better approach with closures
function createButtonHandler(buttonIndex, buttonElement) {
    return function() {
        console.log(`Button ${buttonIndex} clicked`);
        buttonElement.style.backgroundColor = 'blue';
    };
}

function setupButtonsImproved() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', createButtonHandler(index, button));
    });
}
// Memoization with Closures
console.log("Memoization with Closures")

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log('Cache hit!');
            return cache[key];
        }
        
        console.log('Computing...');
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Expensive function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci);
console.log(memoizedFib(10)); // Computing... 55
console.log(memoizedFib(10)); // Cache hit! 55

// Usage
console.log(memoizedFib(100)); // Computing... 354224848179261915075

// Common Closure Patterns
console.log("Common Closure Patterns")

// 1. Configuration closure
function createApiClient(baseUrl, apiKey) {
    return {
        get: function(endpoint) {
            return fetch(`${baseUrl}${endpoint}`, {
                headers: { 'Authorization': `Bearer ${apiKey}` }
            });
        },
        
        post: function(endpoint, data) {
            return fetch(`${baseUrl}${endpoint}`, {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
    };
}

const api = createApiClient('https://api.example.com', 'my-secret-key');

// 2. State management closure
function createState(initialState) {
    let state = { ...initialState };
    const listeners = [];
    
    return {
        getState: () => ({ ...state }),
        
        setState: function(newState) {
            state = { ...state, ...newState };
            listeners.forEach(listener => listener(state));
        },
        
        subscribe: function(listener) {
            listeners.push(listener);
            return function unsubscribe() {
                const index = listeners.indexOf(listener);
                if (index > -1) {
                    listeners.splice(index, 1);
                }
            };
        }
    };
}

const appState = createState({ user: null, theme: 'light' });
const unsubscribe = appState.subscribe(state => {
    console.log('State changed:', state);
});

appState.setState({ theme: 'dark' });
unsubscribe();

// Memory Considerations
console.log("Memory Considerations")
// Be careful with closures and memory leaks
function createHandler() {
    const largeData = new Array(1000000).fill('data'); // Large array
    
    return function() {
        // This closure keeps largeData in memory
        console.log('Handler called');
        // Even if we don't use largeData, it's still referenced
    };
}

// Better: Only capture what you need
function createHandlerOptimized() {
    const largeData = new Array(1000000).fill('data');
    const neededValue = largeData.length; // Extract only what's needed
    
    return function() {
        console.log(`Handler called, data size: ${neededValue}`);
        // largeData can now be garbage collected
    };
}
