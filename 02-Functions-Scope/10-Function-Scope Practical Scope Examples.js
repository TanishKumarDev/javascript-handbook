// Counter with private variables
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// console.log(count); // Error! count is private

// Module pattern
const userModule = (function() {
    let users = []; // Private array
    
    return {
        addUser: function(user) {
            users.push(user);
        },
        getUsers: function() {
            return [...users]; // Return copy, not original
        },
        getUserCount: function() {
            return users.length;
        }
    };
})();

userModule.addUser({ name: "Alice" });
console.log(userModule.getUserCount()); // 1

// Configuration with scope
function createConfig() {
    const defaultSettings = {
        theme: "light",
        language: "en",
        notifications: true
    };
    
    let currentSettings = { ...defaultSettings };
    
    return {
        get: function(key) {
            return currentSettings[key];
        },
        set: function(key, value) {
            currentSettings[key] = value;
        },
        reset: function() {
            currentSettings = { ...defaultSettings };
        }
    };
}

const config = createConfig();
console.log(config.get("theme")); // "light"
config.set("theme", "dark");
console.log(config.get("theme")); // "dark"
config.reset();
console.log(config.get("theme")); // "light"