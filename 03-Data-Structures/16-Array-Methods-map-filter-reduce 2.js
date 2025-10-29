// map() - Transform Elements

// Transform each element
const arrForMap = [1, 2, 3, 4, 5];

const doubled = arrForMap.map(num => num * 2);
console.log(doubled);

// Trasform objects
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const names = people.map(person => person.name);
console.log(names);

const ages = people.map(person => person.age);
console.log(ages);

const indexes = people.map((person, index) => index);
console.log(indexes);

const namesAndAges = people.map(person => ({ name: person.name, age: person.age }));
console.log(namesAndAges);

// filter() - Select Elements

// Filter by condition
const arrForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = arrForFilter.filter(num => num % 2 === 0);
console.log(evens);

// Filter by value
const overFive = arrForFilter.filter(num => num > 8);
console.log(overFive);

// Filter objects
const products = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Phone", price: 599, inStock: true},
    { name: "Tablet", price: 399, inStock: false }
];

const availableProducts = products.filter(product => product.inStock);
console.log(availableProducts);

const expensiveProducts = products.filter(product => product.price > 500);
console.log(expensiveProducts);

// Complex filtering
const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: true },
    { name: "Charlie", age: 30, active: false }
];

const activeAdults = users.filter(user => user.active && user.age >= 18);
console.log(activeAdults); // [{ name: "Alice", age: 25, active: true }]

const activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{ name: "Alice", age: 25, active: true }, { name: "Bob", age: 17, active: true }]

// reduce() - Combine Elements

const arrForReduce = [1, 2, 3, 4, 5];
const sum = arrForReduce.reduce((total, num) => total + num, 0);
console.log(sum);

// Find max
const max = arrForReduce.reduce((max, num) => num > max ? num : max, arrForReduce[0]);
console.log(max); // 5

// Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

// Group by property
const skils = [
    { name: "Alice", department: "Engineering" },
    { name: "Bob", department: "Marketing" },
    { name: "Charlie", department: "Engineering" }
];

const byDepartment = skils.reduce((acc, person) => {
    const dept = person.department;
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(person);
    return acc;
}, {});


// find() and findIndex()
const usersForFind = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

// Find user by email
const userByEmail = usersForFind.find(user => user.email === "bob@example.com");
console.log(userByEmail); // { id: 2, name: "Bob", email: "bob@example.com" }

// Find index of user by email
const userIndexByEmail = usersForFind.findIndex(user => user.email === "bob@example.com");
console.log(userIndexByEmail); // 1

// Find first matching element
const user = usersForFind.find(u => u.name === "Bob");
console.log(user); // { id: 2, name: "Bob", email: "bob@example.com" }

// Find index of first matching element
const index = usersForFind.findIndex(u => u.name === "Bob");
console.log(index); // 1

// Returns undefined/−1 if not found
const notFound = usersForFind.find(u => u.name === "David");
console.log(notFound); // undefined

// some() and every()
const arrForSome = [1, 2, 3, 4, 5];
const even = arrForSome.some(num => num % 2 === 0);
console.log(even); // true

const allEven = arrForSome.every(num => num % 2 === 0);
console.log(allEven); // true

// forEach() - Execute Function
 