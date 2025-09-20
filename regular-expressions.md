# JavaScript Regular Expressions 


**Regular Expressions (RegEx)** are patterns used to match, search, or replace text in strings. In JavaScript, RegEx is implemented via the `RegExp` object or literal syntax, enabling tasks like validation, parsing, and text manipulation.

**Why RegEx Matters**:
- Validates inputs (e.g., email, phone numbers).
- Searches and replaces text (e.g., extracting data, formatting).
- Common in interviews for string manipulation and pattern-matching problems.
- Ties to strings (data types), functions (RegEx logic), and error handling (invalid patterns).

### Key Constructs
- **Literal**: `/pattern/flags` (e.g., `/abc/i`).
- **RegExp Object**: `new RegExp("pattern", "flags")`.
- **Methods**: `test`, `exec`, string methods (`match`, `replace`, `search`).
- **Flags**: Modify behavior (e.g., `i` for case-insensitive).
- **Metacharacters**: Special symbols (e.g., `\d`, `.`).

### Key Characteristics
- **Dynamic Patterns**: Can be created at runtime.
- **Error Handling**: Invalid patterns throw `SyntaxError`.
- **Performance**: Complex RegEx can be slow; optimize for efficiency.
- **Immutable**: RegEx objects are stateless unless using `g` flag with `lastIndex`.

---

## JavaScript Regular Expressions:

### 1. Creating Regular Expressions

Two ways to define RegEx: literal and `RegExp` constructor.

**Literal Syntax**:
```js
const regex = /abc/i; // Case-insensitive search for "abc"
```

**RegExp Constructor**:
```js
const regex = new RegExp("abc", "i");
```

**Example**:
```js
const regex = /\d+/; // Matches one or more digits
console.log(regex.test("123")); // true
```

**Dry Run**:
1. `regex = /\d+/`: Pattern matches one or more digits.
2. `test("123")`: Checks if `"123"` contains digits → `true`.
3. Prints `true`.

**Output**: `true`.

**Edge Case**:
- **Invalid Pattern**: Throws `SyntaxError`.
  ```js
  try { new RegExp("[a-z"); } catch (e) { console.log(e.name); } // SyntaxError
  ```

**Interview Tip**:
- Link to error handling: “I wrap dynamic RegEx in `try...catch`.”
- Say: “I use literals for static patterns, `RegExp` for dynamic ones.”

### 2. Common RegEx Patterns

Key metacharacters and patterns for matching.

| **Pattern** | **Description** | **Example** |
|-------------|-----------------|----------------|
| `.`         | Any character (except newline) | `/a.c/` matches `"abc"` |
| `\d`        | Digit (0-9) | `/\d+/` matches `"123"` |
| `\w`        | Word character (a-z, A-Z, 0-9, _) | `/\w+/` matches `"hello"` |
| `\s`        | Whitespace | `/\s+/` matches `" "` |
| `^`         | Start of string | `/^abc/` matches `"abcde"` |
| `$`         | End of string | `/abc$/` matches `"deabc"` |
| `*`         | 0 or more | `/ab*/` matches `"a"`, `"abb"` |
| `+`         | 1 or more | `/ab+/` matches `"ab"`, `"abb"` |
| `?`         | 0 or 1 | `/ab?/` matches `"a"`, `"ab"` |
| `[a-z]`     | Range (a to z) | `/[a-z]+/` matches `"hello"` |
| `[^a-z]`    | Not in range | `/[^a-z]+/` matches `"123"` |
| `(abc)`     | Group | `/(abc)+/` matches `"abcabc"` |
| `\|`        | OR | `/cat|dog/` matches `"cat"` or `"dog"` |

**Example (Email Validation)**:
```js
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regex.test("user@domain.com")); // true
```

**Dry Run**:
1. `regex`: Matches email (e.g., letters/numbers, `@`, domain, `.com`).
2. `test("user@domain.com")`: Validates format → `true`.
3. Prints `true`.

**Output**: `true`.

**Interview Tip**:
- Link to strings: “RegEx manipulates strings for validation.”
- Say: “I test RegEx patterns with tools like regex101.com.”

### 3. RegEx Flags

Modify RegEx behavior.

| **Flag** | **Description** | **Example** |
|----------|-----------------|----------------|
| `i`      | Case-insensitive | `/abc/i` matches `"ABC"` |
| `g`      | Global (all matches) | `/a/g` matches all `"a"`s |
| `m`      | Multiline (^/$ per line) | `/^abc/m` matches `"abc\nxyz"` |
| `u`      | Unicode support | `/\p{L}/u` matches any letter |
| `s`      | Dot matches newline | `/./s` matches any char including `\n` |

**Example**:
```js
const regex = /cat/gi;
console.log("Cat cat CAT".match(regex)); // ["Cat", "cat", "CAT"]
```

**Dry Run**:
1. `regex = /cat/gi`: Matches `"cat"` case-insensitively, globally.
2. `match`: Finds all matches in `"Cat cat CAT"` → `["Cat", "cat", "CAT"]`.
3. Prints array.

**Output**: `["Cat", "cat", "CAT"]`.

**Interview Tip**:
- Link to arrays: “Global flag with `match` returns an array.”
- Say: “I use `g` for multiple matches, `i` for flexible input.”

### 4. RegEx Methods

JavaScript provides RegEx and string methods for pattern matching.

#### RegEx Methods
- **`test()`**: Returns `true` if pattern matches.
- **`exec()`**: Returns match details or `null`.

**Example (test)**:
```js
const regex = /\d+/;
console.log(regex.test("abc123")); // true
```

**Example (exec)**:
```js
const regex = /\w+/g;
const str = "hello world";
console.log(regex.exec(str)); // ["hello", ...]
console.log(regex.exec(str)); // ["world", ...]
```

**Dry Run (exec)**:
1. `regex = /\w+/g`: Matches words, global.
2. First `exec`: Returns `["hello", index: 0, ...]`.
3. Second `exec`: Returns `["world", index: 6, ...]` (uses `lastIndex`).

**Output**: `["hello", ...]`, `["world", ...]`.

#### String Methods
- **`match()`**: Returns array of matches or `null`.
- **`replace()`**: Replaces matches with new string.
- **`search()`**: Returns index of first match or `-1`.
- **`split()`**: Splits string by pattern.

**Example (match)**:
```js
const str = "The year is 2025!";
console.log(str.match(/\d+/)); // ["2025", ...]
```

**Example (replace)**:
```js
console.log("hello world".replace(/world/, "JS")); // hello JS
```

**Example (search)**:
```js
console.log("hello world".search(/world/)); // 6
```

**Example (split)**:
```js
console.log("a,b,c".split(/,/)); // ["a", "b", "c"]
```

**Interview Tip**:
- Link to arrays: “`match` and `split` return arrays for processing.”
- Say: “I use `exec` for iterative matching with `g` flag.”

### 5. Connection to Previous Topics

- **Data Types**: RegEx works with strings; returns arrays or `null`.
  ```js
  console.log(typeof /abc/); // object
  console.log("123".match(/\d+/)); // ["123", ...]
  ```
- **Variables**: RegEx patterns can be stored in variables.
  ```js
  const regex = /\d+/;
  console.log(regex.test("123")); // true
  ```
- **Operators**: Used in RegEx conditions (e.g., `|` for OR).
  ```js
  /cat|dog/.test("cat"); // true
  ```
- **Conditionals**: RegEx in `if` for validation.
  ```js
  if (/\d+/.test("123")) console.log("Valid"); // Valid
  ```
- **Arrays**: `match` and `split` produce arrays.
  ```js
  let arr = "a,b".split(/,/); // ["a", "b"]
  ```
- **Loops**: Iterate over RegEx matches.
  ```js
  const regex = /\w+/g;
  const str = "hello world";
  let match;
  while ((match = regex.exec(str)) !== null) console.log(match[0]); // hello, world
  ```
- **Error Handling**: Handle invalid RegEx patterns.
  ```js
  try { new RegExp("["); } catch (e) { console.log("Invalid RegEx"); } // Invalid RegEx
  ```
- **Functions**: Wrap RegEx logic in functions.
  ```js
  function isEmail(str) { return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str); }
  ```
- **JavaScript Working**: RegEx in async contexts (e.g., parsing API responses).
  ```js
  async function parseData() {
    try {
      const res = await fetch("url");
      const text = await res.text();
      return text.match(/\d+/g);
    } catch (e) { return null; }
  }
  ```

**Interview Tip**:
- Say: “I combine RegEx with `Array.isArray()` or `try...catch` for robust parsing.”

### 6. Common RegEx Use Cases

- **Email Validation**:
  ```js
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log(regex.test("user@domain.com")); // true
  ```
- **Phone Number**:
  ```js
  const regex = /^\d{3}-\d{3}-\d{4}$/;
  console.log(regex.test("123-456-7890")); // true
  ```
- **Extract Numbers**:
  ```js
  console.log("Year 2025".match(/\d+/g)); // ["2025"]
  ```
- **Replace Text**:
  ```js
  console.log("hello world".replace(/\w+/g, "JS")); // JS JS
  ```

**Interview Tip**:
- Say: “I use specific RegEx patterns for validation, like email or phone formats.”

---

## Interview Questions and Answers

### Beginner-Level
1. **What is a Regular Expression in JavaScript?**
   - **Answer**: A pattern to match, search, or replace text in strings.
   - **Code**: `/abc/.test("abcde"); // true`
   - **Tip**: Mention literal vs. `RegExp`.

2. **What are RegEx flags?**
   - **Answer**: Modifiers like `i` (case-insensitive), `g` (global), `m` (multiline).
   - **Code**: `/cat/gi.match("Cat cat") // ["Cat", "cat"]`
   - **Tip**: Highlight `g` for multiple matches.

3. **What does `test()` do?**
   - **Answer**: Returns `true` if pattern matches string.
   - **Code**: `/\d+/.test("123"); // true`
   - **Tip**: Link to validation.

4. **What’s the output?**
   - **Code**: `console.log("hello".match(/l+/));`
   - **Answer**: `["ll", ...]` (matches consecutive `"l"`s).
   - **Tip**: Explain grouping with `+`.

5. **How do you validate an email?**
   - **Answer**: Use a RegEx pattern for email format.
   - **Code**: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test("user@domain.com") // true`
   - **Tip**: Mention testing tools.

### Intermediate-Level
6. **What’s the difference between `match` and `exec`?**
   - **Answer**: `match` returns all matches (string method); `exec` returns one match with details, updates `lastIndex` with `g`.
   - **Code**: 
     ```js
     const regex = /\w+/g;
     console.log("hello world".match(regex)); // ["hello", "world"]
     console.log(regex.exec("hello world")); // ["hello", ...]
     ```
   - **Tip**: Mention `lastIndex` for `exec`.

7. **How do you handle invalid RegEx patterns?**
   - **Answer**: Use `try...catch` for `SyntaxError`.
   - **Code**: 
     ```js
     try { new RegExp("["); } catch (e) { console.log(e.name); } // SyntaxError
     ```
   - **Tip**: Link to error handling.

8. **What’s the output?**
   - **Code**: 
     ```js
     const regex = /\d+/g;
     const str = "123 456";
     console.log(regex.exec(str)); console.log(regex.exec(str));
     ```
   - **Answer**: `["123", ...]`, `["456", ...]` (`lastIndex` updates).
   - **Tip**: Explain global flag behavior.

9. **How do you replace all digits in a string?**
   - **Answer**: Use `replace` with `g` flag.
   - **Code**: 
     ```js
     console.log("Year 2025".replace(/\d+/g, "X")); // Year X
     ```
   - **Tip**: Link to string methods.

10. **What’s the output with multiline flag?**
    - **Code**: 
      ```js
      console.log("abc\nxyz".match(/^./mg)); // ["a", "x"]
      ```
    - **Answer**: Matches first character of each line.
    - **Tip**: Explain `m` flag.

### Advanced-Level
11. **How do you extract all matches iteratively?**
    - **Answer**: Use `exec` in a loop with `g` flag.
    - **Code**: 
      ```js
      const regex = /\w+/g;
      const str = "hello world";
      let match;
      while ((match = regex.exec(str)) !== null) console.log(match[0]); // hello, world
      ```
    - **Tip**: Link to loops.

12. **What’s the output with dynamic RegEx?**
    - **Answer**: Dynamic patterns via `RegExp` constructor.
    - **Code**: 
      ```js
      const pattern = "cat";
      const regex = new RegExp(pattern, "i");
      console.log(regex.test("CAT")); // true
      ```
    - **Tip**: Mention escaping special characters.

13. **How do you handle RegEx in async code?**
    - **Answer**: Parse API responses with RegEx in `try...catch`.
    - **Code**: 
      ```js
      async function parse() {
        try {
          const res = await fetch("url");
          const text = await res.text();
          return text.match(/\d+/g) || [];
        } catch (e) { return []; }
      }
      ```
    - **Tip**: Link to async error handling.

14. **What’s the output with capture groups?**
    - **Code**: 
      ```js
      const regex = /(\w+) (\w+)/;
      console.log("hello world".match(regex));
      ```
    - **Answer**: `["hello world", "hello", "world", ...]` (full match + groups).
    - **Tip**: Explain capture groups.

15. **How do you optimize RegEx performance?**
    - **Answer**: Avoid greedy patterns, compile once, use specific matches.
    - **Code**: 
      ```js
      const regex = /\d+/; // Compile once
      function test(str) { return regex.test(str); }
      ```
    - **Tip**: Mention JIT compilation impact.

---

## Best Practices for Interviews

1. **Test Patterns Externally**:
   - Use tools like regex101.com for validation.
   ```js
   const regex = /\d+/;
   console.log(regex.test("123")); // true
   ```

2. **Handle Errors**:
   - Wrap dynamic RegEx in `try...catch`.
   ```js
   try { new RegExp(pattern); } catch (e) { console.log("Invalid"); }
   ```

3. **Use Specific Patterns**:
   - Avoid overly broad patterns (e.g., `.*`) for performance.
   ```js
   /a.*b/ // Greedy, slow
   /a[^b]*b/ // More specific
   ```

4. **Combine with Functions**:
   - Encapsulate RegEx logic for reuse.
   ```js
   function isEmail(str) { return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str); }
   ```

5. **Use Flags Wisely**:
   - Apply `g` for multiple matches, `i` for flexible input.
   ```js
   /cat/gi.match("Cat cat CAT"); // ["Cat", "cat", "CAT"]
   ```

---

## Common Pitfalls

1. **Invalid Patterns**:
   - Throws `SyntaxError`.
   ```js
   new RegExp("["); // SyntaxError
   ```

2. **Greedy Matching**:
   - Overmatches with `.*`.
   ```js
   "<a><b>".match(/<.*>/); // "<a><b>" (greedy)
   "<a><b>".match(/<.*?>/); // "<a>" (non-greedy)
   ```

3. **lastIndex with Global Flag**:
   - Affects `exec` and `test`.
   ```js
   const regex = /\d+/g;
   regex.test("123"); regex.test("456"); // Uses lastIndex
   ```

4. **Missing Flags**:
   - Forgets `g` for multiple matches.
   ```js
   "cat cat".match(/cat/); // ["cat", ...] (first match only)
   ```

5. **Async RegEx Errors**:
   - Uncaught errors in async code.
   ```js
   async function test() { await fetch("url").then(res => res.text().match(/[/)); } // Uncaught SyntaxError
   ```

---

## Quick Reference Table

| **Method** | **Purpose** | **Example** |
|------------|-------------|----------------|
| `test`     | Check if matches | `/\d+/.test("123") // true` |
| `exec`     | Get match details | `/\w+/g.exec("hello") // ["hello", ...]` |
| `match`    | Get all matches | `"cat cat".match(/cat/g) // ["cat", "cat"]` |
| `replace`  | Replace matches | `"cat".replace(/cat/, "dog") // "dog"` |
| `search`   | Find match index | `"cat".search(/at/) // 1` |

| **Pattern** | **Matches** | **Example** |
|-------------|-------------|----------------|
| `\d+`       | One or more digits | `/\d+/.test("123") // true` |
| `[a-z]+`    | Letters (a-z) | `/[a-z]+/.test("hello") // true` |
| `^abc`      | Starts with abc | `/^abc/.test("abcde") // true` |
| `abc$`      | Ends with abc | `/abc$/.test("deabc") // true` |

---

## Practice Tips for Mastery

1. **Predict Outputs**: Test RegEx with `test`, `match`, and `exec`.
2. **DevTools**: Experiment with RegEx in console for strings.
3. **Mini-Project**: Build an email validator with RegEx.
4. **Explain Aloud**: Describe RegEx pattern matching to a beginner.
5. **Edge Cases**: Test invalid patterns, greedy matches, or `lastIndex`.

---

## Additional Interview Questions

### Beginner-Level
16. **What’s the difference between `/abc/` and `new RegExp("abc")`?**
    - **Answer**: Literal is static, `RegExp` for dynamic patterns.
    - **Code**: `new RegExp("abc", "i").test("ABC") // true`
    - **Tip**: Mention escaping in `RegExp`.

17. **What does the `g` flag do?**
    - **Answer**: Enables global matching for all occurrences.
    - **Code**: `"cat cat".match(/cat/g) // ["cat", "cat"]`
    - **Tip**: Contrast with single match.

18. **What’s the output?**
    - **Code**: `console.log("123".test(/\d+/));`
    - **Answer**: Error (`test` is RegEx method, not string).
    - **Tip**: Correct to `/\d+/.test("123")`.

### Intermediate-Level
19. **How do you split a string by multiple delimiters?**
    - **Answer**: Use RegEx with `|` for OR.
    - **Code**: 
      ```js
      console.log("a,b;c".split(/,|;/)); // ["a", "b", "c"]
      ```
    - **Tip**: Link to arrays.

20. **What’s the output with `lastIndex`?**
    - **Code**: 
      ```js
      const regex = /\w+/g;
      const str = "hello world";
      console.log(regex.exec(str)[0]); console.log(regex.exec(str)[0]);
      ```
    - **Answer**: `hello`, `world` (`lastIndex` updates).
    - **Tip**: Explain global flag.

### Advanced-Level
21. **How do you validate a complex pattern like a URL?**
    - **Answer**: Use a detailed RegEx with groups and anchors.
    - **Code**: 
      ```js
      const regex = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      console.log(regex.test("https://example.com")); // true
      ```
    - **Tip**: Break down pattern.

22. **What’s the output with capture groups?**
    - **Code**: 
      ```js
      const regex = /(\d+)-(\d+)/;
      console.log("123-456".match(regex));
      ```
    - **Answer**: `["123-456", "123", "456", ...]`.
    - **Tip**: Explain group indexing.

23. **How do you handle RegEx in a loop with `exec`?**
    - **Answer**: Use `while` loop until `exec` returns `null`.
    - **Code**: 
      ```js
      const regex = /\w+/g;
      const str = "hello world";
      let match;
      while ((match = regex.exec(str)) !== null) console.log(match[0]); // hello, world
      ```
    - **Tip**: Link to loops and `lastIndex`.
