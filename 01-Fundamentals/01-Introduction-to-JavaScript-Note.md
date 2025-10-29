### JavaScript — Introduction

#### 1. Definition
**JavaScript (JS)** is a **high-level, interpreted, dynamic programming language** that adds **interactivity and behavior** to web pages. It is the **only language** natively supported by all modern web browsers.

---

#### 2. Theory / Concept

| Feature | Description |
|-------|-----------|
| **High-level** | Easy to read/write, abstracts hardware |
| **Interpreted** | Runs line-by-line, no compilation needed |
| **Dynamic Typing** | No need to declare variable types |
| **Event-driven** | Responds to user actions (clicks, inputs) |
| **Prototype-based** | Objects inherit from other objects |
| **First-class Functions** | Functions are values |

**Core Role**:  
**HTML** = Structure  
**CSS** = Style  
**JavaScript** = **Behavior**

---

#### 3. Brief History

| Year | Event |
|------|-------|
| **1995** | Brendan Eich creates **Mocha** → **LiveScript** → **JavaScript** in **10 days** |
| **1997** | **ECMAScript 1** standard released |
| **2009** | **ECMAScript 5** (strict mode, JSON) |
| **2015** | **ES6 / ES2015** — major update (arrow functions, classes, modules) |
| **2016+** | **Annual releases** (ES2016, ES2017, …) |

---

#### 4. Why Learn JavaScript?

| Reason | Benefit |
|------|--------|
| **Universal** | Runs in **browsers, Node.js, mobile, desktop** |
| **Full-Stack** | One language for **frontend + backend** |
| **High Demand** | Top language on **Stack Overflow, GitHub** |
| **Beginner-Friendly** | No setup — code in **browser console** |
| **Huge Ecosystem** | **npm**: 2M+ packages |
| **Modern Tools** | React, Vue, Angular, Vite, Electron |

---

#### 5. What Can You Build?

| Type | Examples |
|------|--------|
| **Web Apps** | Gmail, Twitter, Netflix |
| **Mobile Apps** | Instagram (React Native) |
| **Desktop Apps** | VS Code, Slack (Electron) |
| **Backend APIs** | REST/GraphQL servers (Node.js) |
| **Games** | Browser games with Canvas/WebGL |
| **PWAs** | Offline-capable web apps |

---

#### 6. JavaScript Engines

| Browser | Engine |
|--------|--------|
| Chrome, Edge | **V8** (Google) |
| Firefox | **SpiderMonkey** |
| Safari | **JavaScriptCore** |
| Node.js | **V8** |

> All use **JIT compilation** + **garbage collection**

---

#### 7. Getting Started — First Code

**Method 1: Browser Console**  
1. Press `F12` → **Console** tab  
2. Type:
```js
console.log("Hello, JavaScript!");
alert("Welcome!");
```

**Method 2: HTML File**
```html
<!DOCTYPE html>
<html>
<head><title>JS Demo</title></head>
<body>
  <script>
    console.log("Hello from JS!");
    alert("Welcome to JavaScript!");
  </script>
</body>
</html>
```

---

#### 8. First Examples

```js
// 1. Output
console.log("Hello, World!");

// 2. Math
let sum = 10 + 5;
console.log("10 + 5 =", sum); // 15

// 3. Strings
let name = "Alice";
console.log(`Hi, ${name}!`);

// 4. Date
let now = new Date();
console.log("Today:", now.toDateString());

// 5. Function
function greet(person) {
  return "Hello, " + person + "!";
}
console.log(greet("Bob"));

// 6. Array
let langs = ["JS", "Python", "Java"];
console.log(langs);

// 7. Object
let user = { name: "John", age: 25 };
console.log(user);
```

---

#### 9. JavaScript vs Other Languages

| Language | JS vs |
|--------|------|
| **Java** | No relation — JS is dynamic, Java is static |
| **Python** | JS: C-style, async/event-driven; Python: indentation, general-purpose |
| **C++** | JS: high-level, GC; C++: low-level, manual memory |

---

#### 10. Practice Exercises (Do in Console!)

```js
// Exercise 1: Personal Info
let yourName = "Tanish";
let yourAge = 20;
console.log(`I'm ${yourName}, ${yourAge} years old.`);

// Exercise 2: Calculator
let a = 8, b = 3;
console.log("8 + 3 =", a + b);
console.log("8 × 3 =", a * b);

// Exercise 3: String Fun
let first = "Java";
let second = "Script";
let full = first + second;
console.log(full);           // "JavaScript"
console.log(full.length);    // 10
console.log(full.toUpperCase()); // "JAVASCRIPT"
```

---

#### 11. Best Practices (Start Now!)

- Use **meaningful names**: `userAge`, not `x`
- **Comment** complex logic
- Use **ES6+ syntax** (let/const, arrows)
- **Format consistently** (Prettier)
- **Handle errors** with `try/catch`

---

#### 12. Summary Table

| Key Point | Description |
|---------|-----------|
| **Definition** | Language for web interactivity |
| **Core Role** | Behavior layer (HTML + CSS + JS) |
| **Key Features** | Dynamic, interpreted, event-driven |
| **History** | 1995 → ES6 (2015) → Annual updates |
| **Why Learn?** | Universal, full-stack, high demand |
| **Build With** | Web, mobile, desktop, backend, games |
| **Engines** | V8, SpiderMonkey, JSC |
| **Start** | Browser console or `<script>` tag |
| **Next** | Variables (`var`, `let`, `const`) |

---