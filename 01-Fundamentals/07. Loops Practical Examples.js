// Sum of array elemets
function sumArray(arr) {
    let sum = 0;
    for(let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Find max element
function findMax(arr) {
    let max = arr[0];
    for(let num of arr) {
        if(num > max) {
            max = num;
        }
    }
    return max;
}

console.log(findMax([1, 2, 3, 4, 5]));

// Generate multiplication table
function multiplicationTable(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

multiplicationTable(5);

// Processing shopping cart
function calculateTotal(cart){
    let total = 0;
    for(let item of cart) {
        total += item.price * item.quantity;
    }
    return total;
}

let cart = [
    {
        name: "T-Shirt",
        price: 19.99,
        quantity: 2
    },
    {
        name: "Jeans",
        price: 49.99,
        quantity: 1
    }
]

console.log(calculateTotal(cart));

// Loop Control
// break and continue

console.log("break")
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

console.log("break")
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}

// Nested loop with lables
outer : for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        if(i === 1 && j === 1) {
            continue outer;
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

