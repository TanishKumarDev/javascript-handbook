
// Shopping cart
const cart = [];

function addToCart(item) {
    cart.push(item);
    console.log(`Added ${item} to cart`);
}

function removeFromCart(item) {
    const index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
        console.log(`Removed ${item} from cart`);
    }
}

function showCart() {
    console.log("Cart contents:", cart.join(", "));
}

// Usage
addToCart("laptop");
addToCart("mouse");
addToCart("keyboard");
showCart(); // "Cart contents: laptop, mouse, keyboard"
removeFromCart("mouse");
showCart(); // "Cart contents: laptop, keyboard"

// Todo list
const todos = [];

function addTodo(task) {
    todos.push({
        id: Date.now(),
        task: task,
        completed: false
    });
}

function completeTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = true;
    }
}

function getTodos() {
    return todos.filter(t => !t.completed);
}

// Student grades
const grades = [85, 92, 78, 96, 88];

function addGrade(grade) {
    if (grade >= 0 && grade <= 100) {
        grades.push(grade);
    }
}

function getAverage() {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}

function getHighestGrade() {
    return Math.max(...grades);
}

console.log("Average:", getAverage()); // Average: 87.8
console.log("Highest:", getHighestGrade()); // Highest: 96
