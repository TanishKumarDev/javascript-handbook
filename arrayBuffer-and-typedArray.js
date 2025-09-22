// ArrayBuffer
let buffer = new ArrayBuffer(8);
console.log(buffer.byteLength); // 8
let sliced = buffer.slice(0, 4);
console.log(sliced.byteLength); // 4

// Code Example (Error Case):
try {
    let buffer = new ArrayBuffer(-1);
} catch (error) {
    console.log(error.message);
}

// TypedArray
let bufferForTypedArray = new ArrayBuffer(8);
let int8 = new Int8Array(bufferForTypedArray);
let uint8 = new Uint8Array([1, 2, 3]);
console.log(int8.length); // 8
console.log(uint8); // Uint8Array [1, 2, 3]
int8[0] = 42;
console.log(int8[0]); // 42