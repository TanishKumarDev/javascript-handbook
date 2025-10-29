const nums = [3, 2, 1, 4, 5];

// map
const doubled = nums.map(num => num * 2);
console.log(doubled);

// filter
const evens = nums.filter(nums => nums % 2 === 0);
console.log(evens);

// reduce
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);

// sort
const sorted = nums.sort((a, b) => a - b);
console.log(sorted);

// reverse
const reversed = nums.reverse();
console.log(reversed);

// find
const firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven);

// findIndex
const firstEvenIndex = nums.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex);

// every
const allEven = nums.every(num => num % 2 === 0);
console.log(allEven);

// some
const anyEven = nums.some(num => num % 2 === 0);
console.log(anyEven);

// includes
const includesThree = nums.includes(3);
console.log(includesThree);

// join
const joined = nums.join("-");
console.log(joined);

// slice
const sliced = nums.slice(1, 4);
console.log(sliced);

// splice
const spliced = nums.splice(1, 2);
console.log(spliced);

// concat
const concat = nums.concat([6, 7, 8]);
console.log(concat);

// flat
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.flat();
console.log(flattened);

// flatMap
const flattened2 = nested.flatMap(num => num);
console.log(flattened2);

// forEach
nums.forEach(num => console.log(num));

// for...of
for (const num of nums) {
    console.log(num);
}

// for...in
for (const index in nums) {
    console.log(nums[index]);
}

// reduceRight
const sumRight = nums.reduceRight((acc, num) => acc + num, 0);
console.log(sumRight);

// entries
const entries = nums.entries();
for (const [index, num] of entries) {
    console.log(index, num);
}
