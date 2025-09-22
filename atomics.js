// SharedArrayBuffer
let sharedBuffer = new SharedArrayBuffer(4);
let sharedInt32 = new Int32Array(sharedBuffer);
let sharedInt16 = new Int16Array(sharedBuffer);
let sharedUint8 = new Uint8Array(sharedBuffer);

console.log(sharedInt32); // Int32Array [0, 0, 0, 0]
console.log(sharedInt16); // Int16Array [0, 0, 0, 0]
console.log(sharedUint8); // Uint8Array [0, 0, 0, 0]

// atomic methods
let int32 = new Int32Array(sharedBuffer);
Atomics.store(int32, 0, 100);
console.log(Atomics.load(int32, 0)); // 100
console.log(Atomics.add(int32, 0, 50)); // 100 (old value)
console.log(Atomics.load(int32, 0)); // 150