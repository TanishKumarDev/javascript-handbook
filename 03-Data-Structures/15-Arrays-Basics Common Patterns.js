
// Initialize array with values
const zeros = new Array(5).fill(0); // [0, 0, 0, 0, 0]
const sequence = Array.from({length: 5}, (_, i) => i + 1); // [1, 2, 3, 4, 5]

// Remove duplicates
const numbers = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(numbers)]; // [1, 2, 3, 4]

// Flatten array (one level)
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = [].concat(...nested); // [1, 2, 3, 4, 5, 6]
// Or use flat()
const flattened2 = nested.flat(); // [1, 2, 3, 4, 5, 6]

// Check if array is empty
function isEmpty(arr) {
    return arr.length === 0;
}

// Get random element
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Shuffle array
function shuffle(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
