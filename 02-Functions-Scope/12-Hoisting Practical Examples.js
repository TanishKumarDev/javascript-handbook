// 1. Common Hoisting Mistakes

// Mistake 1: assuming let and const work like var
function mistake1() {
    console.log(username); // undefined
    let username = "John";
}

// Mistake 2: Function expression hoisting confusion
function mistake2() {
    console.log(typeof myFunc);
    console.log(myFunc);
    var myFunc = function() {
        console.log("Hello!");
    };

    console.log(typeof myFunc);
}

// Mistake 3: Loop variable hoisting
function mistake3() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i); // 3, 3, 3 (not 0, 1, 2)
        }, 100);
    }
    console.log(i); // 3 (i is accessible outside loop)
}
/*

### Explain:

```js
function mistake3() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100);
  }
  console.log(i);
}
```

---

### Step 1: `var` ka scope

* `var` **function scoped** hota hai — matlab poori function ke andar ek hi `i` variable hai.
* Har loop iteration me **naya i nahi banta**, wahi purana `i` update hota hai.

---

### Step 2: Loop fast chal gaya, `setTimeout` baad me chalta hai

* Loop turant complete ho gaya, tab tak `i = 3` ho gaya.
* `setTimeout` sirf schedule hota hai 100ms baad chalne ke liye.

---

### Step 3: Jab `setTimeout` chalega…

* Tab tak `i` ki value **3** ho chuki hoti hai.
* Har callback wahi **same i (value = 3)** ko dekhta hai.
* Isiliye output:

  ```
  3
  3
  3
  ```

---

### Step 4: Loop ke baad `console.log(i)` bhi 3 hi dikhata hai

Because `i` function ke scope me tha, block ke andar limited nahi tha.

---

### Step 5: Fix

Use `let` instead of `var`
(`let` har iteration ke liye naya variable banata hai)

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

Output:

```
0
1
2
```

---

**In short:**
`var` → ek hi `i` sabke liye (shared)
`let` → har loop ke liye naya `i` (individual)
*/