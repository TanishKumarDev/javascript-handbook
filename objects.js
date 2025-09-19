// 1. Object Creation
// 1. Object Creation - Object Literal
let user = {
    name: "Alice",
    age: 25,
    isMember: true,
    hobbies: ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zip: "12345"
    },
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};
console.log("🎯 1. Object Creation - Object Literal"); // Output: function
console.log(user ); // Output: entire user object
console.log(typeof user); // Output: object
console.log(user.name); // Output: Alice
console.log(user.hobbies[1]); // Output: traveling
console.log(user.address.city); // Output: Wonderland
console.log(user.greet()); // Output: Hello, my name is Alice

// 1. Object Creation - Constructor Function
function User(name, age, isMember, hobbies, address) {
    this.name = name;
    this.age = age;
    this.isMember = isMember;
    this.hobbies = hobbies;
    this.address = address;
    this.greet = function() {
        return `Hello, my name is ${this.name}`;
    };
}

console.log("🎯 1. Object Creation - Constructor Function"); // Output: function
let bob = new User(
    "Bob",
    30,
    true,
    ["reading", "traveling", "swimming"],
    {
        street: "456 Elm St",
        city: "Wonderland",
        zip: "67890"
    });
console.log(bob); // Output: entire bob object
console.log(typeof bob); // Output: object
console.log(bob.name); // Output: Bob
console.log(bob.hobbies[0]); // Output: reading
console.log(bob.address.zip); // Output: 67890
console.log(bob.greet()); // Output: Hello, my name is Bob

// 2. Properties and Accessing

// 2. Properties and Accessing - Dot Notation and Bracket Notation
console.log("🎯 2. Properties and Accessing - Dot Notation and Bracket Notation");

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    features: ["Bluetooth", "Backup Camera", "Cruise Control"],
    owner: {
        name: "Charlie",
        license: "XYZ1234"
    }
};

console.log(car.make); // Output: Toyota
console.log(car["model"]); // Output: Camry
console.log(car.features[1]); // Output: Backup Camera
console.log(car.owner.name); // Output: Charlie
console.log(car["owner"]["license"]); // Output: XYZ1234

// 2. Properties and Accessing - Adding/Deleting Properties
console.log("🎯 2. Properties and Accessing - Adding/Deleting Properties");
car.color = "Blue"; // Adding a new property
console.log(car.color); // Output: Blue

delete car.year; // Deleting a property
console.log(car.year); // Output: undefined

// 3. Methods - Functions as object properties.
console.log("🎯 3. Methods - Functions as object properties.");

let rectangle = {
    width: 10,
    height: 5,
    area: function() {
        return this.width * this.height;
    },
    perimeter: function() {
        return 2 * (this.width + this.height);
    },
};
console.log(rectangle.area()); // Output: 50
console.log(rectangle.perimeter()); // Output: 30

// 4. The this Keyword - Why Use: Refers to the object invoking the method; context-dependent.
console.log("🎯 4. The this Keyword");
let person = {
    firstName: "Diana",
    lastName: "Prince",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName()); // Output: Diana Prince

// 4. The this Keyword - Binding this
// call/apply: Invoke with specific this.
// bind: Returns new function with fixed this.
console.log("🎯 4. The this Keyword - Binding this");
let anotherPerson = { name: "Alice", greet() { return this.name; } };
console.log(anotherPerson.greet.call({ name: "Bob" })); // Bob
let bound = anotherPerson.greet.bind({ name: "Charlie" });
console.log(bound()); // Charlie

// 5. Prototypes and Inheritance
console.log("🎯 5. Prototypes and Inheritance");
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a noise.`;
}
let dog = new Animal("Dog");
console.log(dog.speak()); // Output: Dog makes a noise.
let cat = new Animal("Cat");
console.log(cat.speak()); // Output: Cat makes a noise.
console.log(dog.__proto__ === Animal.prototype); // true

// 6. ES6 Classes
console.log("🎯 6. ES6 Classes");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}
let eve = new Person("Eve", 28);
console.log(eve.introduce()); // Output: Hi, I'm Eve and I'm 28 years old.

// 6. ES6 Classes - Inheritance with Classes
console.log("🎯 6. ES6 Classes - Inheritance with Classes");
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    work() {
        return `${this.name} is working as a ${this.position}.`;
    }
}
let frank = new Employee("Frank", 35, "Developer");
console.log(frank.introduce());
console.log(frank.work());

// 7. Property Descriptors
console.log("🎯 7. Property Descriptors");
let obj = {};
Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: false, // Cannot change
  enumerable: true, // Shows in loops
  configurable: false // Cannot delete/redefine
});
console.log(obj.name); // Alice
obj.name = "Bob"; // Fails (writable: false)
console.log(obj.name); // Alice

// 7. Property Descriptors - Getter/Setter
console.log("🎯 7. Property Descriptors - Getter/Setter");
Object.defineProperty(obj, "age", {
  get() {
    return 30;
  },
  set(value) {
    console.log("Age is read-only");
  }
});
console.log(obj.age); // 30
obj.age = 35; // Fails (read-only)
console.log(obj.age); // 30


// 8. Object Methods
console.log("🎯 8. Object Methods");
let userMethod = { name: "Alice", age: 30 };
console.log(Object.keys(userMethod)); // ["name", "age"]
console.log(Object.values(userMethod)); // ["Alice", 30]
console.log(Object.entries(userMethod)); // [["name", "Alice"], ["age", 30]]
let clone = Object.assign({}, userMethod);
console.log(clone); // { name: "Alice", age: 30 }
Object.freeze(userMethod);
userMethod.age = 31; // Fails
console.log(userMethod.age); // 30

// 9. Error Handling with Objects
console.log("🎯 8. Error Handling");
function getUserName(user){
    try {
        if(!user || typeof user !== "object") throw new TypeError("Invalid user");
        return user.name;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

console.log(getUserName({ name: "Alice" })); // Alice
console.log(getUserName(null)); // Invalid user
