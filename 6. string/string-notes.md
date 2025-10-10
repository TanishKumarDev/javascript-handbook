# JavaScript Strings and String Methods

JavaScript **strings** are used to store and manipulate text, represented as sequences of characters enclosed in quotes. They are **primitive** and **immutable**, meaning string methods return new strings without altering the original. **Template literals** (ES6) enhance strings with interpolation and multiline support. String methods are critical for text processing, and understanding their behavior (e.g., immutability, indexing) is key for interviews.

**Key Features**:
- **Quotes**: Single (`'`), double (`"`), or backticks (`` ` ``) for template literals.
- **Immutability**: Cannot modify in-place; methods return new strings.
- **Indexing**: Zero-based; access via `[]` or methods like `at()`.
- **Common Uses**: Text manipulation, validation, HTML generation.
- **Interview Focus**: Coercion, immutability, regex with methods, performance.

---

## Key Concepts
- **Use Cases**: User input, formatting, searching, parsing.
- **Template Literals**: Enable `${}` for variables/expressions and multiline strings.
- **Unicode**: Methods like `charCodeAt()` handle UTF-16; `codePointAt()` for full Unicode.
- **Immutability**: No direct edits; `str[0] = 'A'` fails silently.
- **Edge Cases**: Negative indices, lone surrogates, case sensitivity.
- **Best Practices**: Avoid `new String()`, use `slice()` over deprecated `substr()`.

---

Below is a detailed breakdown with examples, outputs, and insights.

### 1. String Basics

Strings are text enclosed in quotes, supporting single, double, or backticks.

#### 1.1 Quotes
- Single and double quotes are equivalent; use backticks for templates.

**Example**:
```js
let name1 = "John Doe"; // Double
let name2 = 'John Doe'; // Single
let name3 = `John Doe`; // Template
console.log(name1, name2, name3);
// Output: John Doe John Doe John Doe
```

**Dry Run**:
1. All three declarations create identical strings.
2. Log shows same value.

**Tip**: Use consistent quotes; prefer backticks for interpolation.

#### 1.2 Quotes Inside Strings
- Use different quotes or escape.

**Example**:
```js
let text1 = "He's called 'Johnny'"; // Mixed
let text2 = 'He\'s called "Johnny"'; // Escaped
console.log(text1, text2);
// Output: He's called 'Johnny' He's called "Johnny"
```

**Dry Run**:
1. Mixed quotes avoid escaping.
2. Backslash `\` escapes matching quote.

**Tip**: Backticks allow quotes without escaping.

#### 1.3 Template Literals
- Use backticks (`` ` ``) for multiline strings and interpolation.

**Example** (Multiline):
```js
let poem = `The quick
brown fox
jumps over`;
console.log(poem);
// Output:
// The quick
// brown fox
// jumps over
```

**Example** (Interpolation):
```js
let firstName = "John";
let text = `Hello, ${firstName}!`;
console.log(text);
// Output: Hello, John!
```

**Dry Run**:
1. `${firstName}` evaluates to "John".
2. Backticks preserve newlines.

**Tip**: Use for HTML templates or complex strings.

**Edge Cases**:
- `${undefined}` → "undefined".
- Nested backticks need escaping or different quotes.

### 2. String Properties and Methods

Strings have a `length` property and many methods for manipulation.

#### 2.1 String Length
- Returns character count.

**Example**:
```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);
// Output: 26
```

**Dry Run**:
1. Counts each character, including spaces.
2. Returns 26.

**Tip**: Empty string → `length = 0`.

#### 2.2 Character Access
- Methods: `at()`, `charAt()`, `[]`, `charCodeAt()`, `codePointAt()`.

**Example** (at, charAt, []):
```js
let text = "HELLO";
console.log(text.at(0), text.charAt(0), text[0]); // H H H
console.log(text.at(-1), text.charAt(100)); // O ""
console.log(text[100]); // undefined
```

**Dry Run**:
1. `at(0)`/`charAt(0)`/`[0]` → "H".
2. `at(-1)` → last char; `charAt(100)` → ""; `[100]` → undefined.

**Example** (charCodeAt, codePointAt):
```js
let text = "HELLO";
console.log(text.charCodeAt(0), text.codePointAt(0)); // 72 72
```

**Dry Run**:
1. `charCodeAt(0)` → UTF-16 code for "H" (72).
2. `codePointAt` → same for basic chars; handles full Unicode better.

**Tip**: Use `at()` for negative indices (ES2022); `[]` risky (undefined vs "").

#### 2.3 Concatenation
- `concat()` or `+` joins strings.

**Example**:
```js
let text1 = "Hello";
let text2 = text1.concat(" ", "World");
console.log(text2, "Hello" + " " + "World");
// Output: Hello World Hello World
```

**Dry Run**:
1. `concat` joins with args.
2. `+` same but simpler.

**Tip**: Prefer `+` for readability; `concat` for multiple args.

#### 2.4 Extracting Substrings
- `slice(start, end)`, `substring(start, end)`, `substr(start, length)` (deprecated).

**Example**:
```js
let text = "Apple, Banana, Kiwi";
console.log(text.slice(7, 13)); // Banana
console.log(text.substring(7, 13)); // Banana
console.log(text.slice(-12, -6)); // Banana
console.log(text.substring(-12, 13)); // Apple, Banana
```

**Dry Run**:
1. `slice(7,13)` → chars 7-12.
2. `substring` treats negative as 0.
3. `slice(-12,-6)` → counts backward.

**Tip**: Use `slice()`; `substr()` deprecated.

**Edge Cases**:
- `slice(7)` → rest of string.
- `substring` swaps if start > end.

#### 2.5 Case Conversion
- `toUpperCase()`, `toLowerCase()`, `toLocaleUpperCase()`, `toLocaleLowerCase()`.

**Example**:
```js
let text = "Hello World";
console.log(text.toUpperCase(), text.toLowerCase()); // HELLO WORLD hello world
```

**Tip**: `toLocale*` for locale-specific (e.g., Turkish dotless i).

#### 2.6 Trimming
- `trim()`, `trimStart()`, `trimEnd()` remove whitespace.

**Example**:
```js
let text = "   Hello   ";
console.log(text.trim(), text.trimStart(), text.trimEnd());
// Output: "Hello" "Hello   " "   Hello"
```

**Dry Run**:
1. `trim()` → both sides.
2. `trimStart()` → left only.

**Tip**: ES2019 for `trimStart/End`.

#### 2.7 Padding
- `padStart(length, pad)`, `padEnd(length, pad)`.

**Example**:
```js
let num = "5";
console.log(num.padStart(4, "0"), num.padEnd(4, "x")); // 0005 5xxx
```

**Dry Run**:
1. `padStart(4,"0")` → adds "0"s to reach length 4.
2. Works on string; convert numbers first.

**Tip**: ES2017; useful for formatting.

#### 2.8 Repeating
- `repeat(count)`.

**Example**:
```js
let text = "Hi!";
console.log(text.repeat(3)); // Hi!Hi!Hi!
```

**Tip**: ES6; throws if count negative.

#### 2.9 Replacing
- `replace(pattern, replacement)`, `replaceAll(pattern, replacement)`.

**Example**:
```js
let text = "Visit Microsoft and Microsoft!";
console.log(text.replace("Microsoft", "W3Schools")); // Visit W3Schools and Microsoft!
console.log(text.replace(/Microsoft/g, "W3Schools")); // Visit W3Schools and W3Schools!
console.log(text.replaceAll("Microsoft", "W3Schools")); // Same as above
console.log(text.replace(/MICROSOFT/i, "W3Schools")); // Case-insensitive
```

**Dry Run**:
1. `replace` → first match only.
2. `/g` → all matches.
3. `replaceAll` → simpler global.

**Tip**: `replaceAll` ES2021; regex needs `/g`.

#### 2.10 Splitting
- `split(separator)` → array.

**Example**:
```js
let text = "a,b,c";
console.log(text.split(",")); // ["a","b","c"]
console.log(text.split("")); // ["a",",","b",",","c"]
console.log(text.split()); // ["a,b,c"]
```

**Tip**: Empty separator splits chars.

#### 2.11 Well-Formed Strings
- `isWellFormed()`, `toWellFormed()` for Unicode.

**Example**:
```js
let text = "Hello \uD800";
console.log(text.isWellFormed(), text.toWellFormed()); // false Hello �
```

**Tip**: Handles lone surrogates; modern use.

### 3. String Search Methods

Methods to find substrings or patterns.

#### 3.1 indexOf/lastIndexOf
- Return position or -1.

**Example**:
```js
let text = "Please locate where locate occurs!";
console.log(text.indexOf("locate"), text.lastIndexOf("locate")); // 7 21
console.log(text.indexOf("locate", 15)); // 21
console.log(text.lastIndexOf("locate", 15)); // 7
```

**Dry Run**:
1. `indexOf` → first "locate" at 7.
2. `lastIndexOf` → last at 21.
3. Start pos limits range.

**Tip**: `indexOf` vs `search`: no regex for `indexOf`.

#### 3.2 search
- Like `indexOf` but supports regex.

**Example**:
```js
console.log(text.search(/locate/i)); // 7
```

**Tip**: No start pos; use regex for flexibility.

#### 3.3 includes
- Returns true if found.

**Example**:
```js
let text = "Hello world";
console.log(text.includes("world"), text.includes("world", 12)); // true false
```

**Tip**: ES6; case-sensitive.

#### 3.4 startsWith/endsWith
- Check start/end.

**Example**:
```js
console.log(text.startsWith("Hello"), text.endsWith("world")); // true true
console.log(text.startsWith("world", 6)); // true
console.log(text.endsWith("world", 11)); // true
```

**Tip**: ES6; second param for `endsWith` is length.

#### 3.5 match/matchAll
- Return matches (array or iterator).

**Example**:
```js
let text = "The rain in SPAIN stays mainly";
console.log(text.match(/ain/g)); // ["ain","ain","ain"]
console.log([...text.matchAll(/ain/gi)]); // [{match:"ain",index:5},...]
```

**Tip**: `matchAll` ES2020; needs `/g`.

### 4. Strings as Objects
- Avoid `new String()`.

**Example**:
```js
let x = "John";
let y = new String("John");
console.log(x == y, x === y); // true false
console.log(y == new String("John")); // false
```

**Dry Run**:
1. `==` coerces to primitive → true.
2. `===` checks type → false (object vs string).
3. Objects always unique.

**Tip**: Stick to literals for performance.

### 5. Common Interview Questions

#### Beginner-Level
1. **What’s the output?**
   ```js
   let x = 'Hello world!'; console.log(x.indexOf('Hello')); // 0
   ```
   - **Answer**: First position is 0.

2. **Which is not a valid string?**
   - **Answer**: `""Hello world!""` → syntax error.

3. **What’s the output?**
   ```js
   let x = 'Having fun?'; console.log(x.slice(7, 10)); // fun
   ```

#### Intermediate-Level
4. **Why `str[0] = 'A'` doesn’t work?**
   - **Answer**: Strings immutable.

5. **What’s the output?**
   ```js
   let x = 'cat'; console.log(x.replace('cat','dog')); // dog
   ```

6. **Rewrite with template literal.**
   ```js
   let name = 'John'; console.log('Hello ' + name); // `Hello ${name}`
   ```

#### Advanced-Level
7. **Why `new String('a') === new String('a')` false?**
   - **Answer**: Different objects.

8. **What’s the output?**
   ```js
   let x = 'a,b,c'; console.log(x.split(',').length); // 3
   ```

9. **Case-insensitive replace all?**
   ```js
   text.replace(/cat/gi, 'dog');
   ```

### 6. Best Practices for Interviews

1. **Use Template Literals**:
   ```js
   let name = "John"; `Hello ${name}`; // Clean
   ```

2. **Avoid new String**:
   ```js
   let str = "text"; // Not new String("text")
   ```

3. **Use slice()**:
   - Over `substring` for negative indices.

4. **Regex for Advanced Search**:
   ```js
   text.replace(/pattern/gi, 'new');
   ```

5. **Check Well-Formed**:
   ```js
   if (!text.isWellFormed()) text = text.toWellFormed();
   ```

### 7. Common Pitfalls

1. **Immutability**:
   ```js
   let str = "hi"; str[0] = "H"; // No effect
   ```

2. **Case Sensitivity**:
   ```js
   "Cat".includes("cat"); // false
   ```

3. **Deprecated Methods**:
   - Avoid `substr()`.

4. **Regex without /g**:
   ```js
   "cat cat".replace(/cat/, "dog"); // Only first
   ```

5. **Unicode Issues**:
   - `charCodeAt` vs `codePointAt` for emojis.

### 8. Quick Reference Table

| **Method** | **Description** | **Example** | **Notes** |
| --- | --- | --- | --- |
| `length` | String length | `"abc".length` → 3 | Property |
| `at()` | Char at index | `"abc".at(-1)` → "c" | ES2022, negative |
| `charAt()` | Char at index | `"abc".charAt(0)` → "a" | No negative |
| `slice()` | Extract part | `"abcde".slice(1,3)` → "bc" | Negative indices |
| `toUpperCase()` | Upper case | `"abc".toUpperCase()` → "ABC" | Immutable |
| `trim()` | Remove whitespace | `"  abc  ".trim()` → "abc" | Both sides |
| `replace()` | Replace first | `"cat".replace("c","d")` → "dat" | Use `/g` for all |
| `replaceAll()` | Replace all | `"cat cat".replaceAll("cat","dog")` | ES2021 |
| `split()` | To array | `"a,b".split(",")` → ["a","b"] | Separator |
| `indexOf()` | First position | `"abc".indexOf("b")` → 1 | -1 if not found |
| `includes()` | Contains | `"abc".includes("b")` → true | ES6 |
