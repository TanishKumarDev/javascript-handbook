function  TDZExample() {
    // TDZ start here
    // console.log(typeof x); // ReferenceError: Cannot access 'x' before initialization  

    let x = 5; // TDZ end here

    console.log(x) // 5
}

TDZExample();

// TDZ with parameters
function parameterTDZ(a = b, b = 2) {
    // ReferenceError: Cannot access 'b' before initialization
    return a + b;
}

// Fixed version
function parameterFixed(a = 1, b = a + 1) {
    return a + b; // Works fine
}
