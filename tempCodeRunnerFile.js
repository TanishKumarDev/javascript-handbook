
//   try {
//     if (!Array.isArray(arr)) throw new TypeError("Not an array");
//     if (index >= arr.length) throw new RangeError("Index out of bounds");
//     return arr[index];
//   } catch (error) {
//     console.log(error.message);
//     return null;
//   }
// }
// console.log(getElement([1, 2], 1)); // 2
// console.log(getElement("not array", 0)); // Not an array, null
// console.log(getElement([1, 2], 5)); // Index out of bounds, null