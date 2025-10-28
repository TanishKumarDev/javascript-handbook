// Class declarations are hoisted but not initialized
// console.log(myClass); // ReferenceError: Cannot access 'myClass' before initialization 

class myClass {
    constructor(username) {
        this.usernamename = "tanish"
    }
}

console.log(myClass);

// Class expressions behave like function expressions
console.log(MyClassExpr); // undefined
var MyClassExpr = class {
    constructor(name) {
        this.name = name;
    }
}