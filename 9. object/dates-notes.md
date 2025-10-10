# JavaScript Dates

The **Date** object in JavaScript is a built-in mechanism for handling dates and times, representing a single moment in time as milliseconds since the Unix epoch (**January 1, 1970, 00:00:00 UTC**). It’s a critical tool for working with temporal data, enabling developers to create, manipulate, format, and perform calculations with dates and times. Whether you’re building a scheduling app, logging events, or displaying user-friendly timestamps, the `Date` object is your go-to. Its design accounts for complexities like time zones, leap years, and invalid dates, but it also has quirks that require careful handling.

**What Are Dates?**  
The `Date` object encapsulates a timestamp (milliseconds since epoch) and provides methods to access or modify components (year, month, day, etc.) in either local time (browser’s time zone) or UTC. It’s a dynamic object, meaning you can modify its value after creation, and it automatically adjusts for edge cases like month overflow or leap years. Internally, it’s tied to the system clock but can be set to any point in time. Unlike strings or numbers, `Date` objects are complex, mutable references, and their behavior varies by time zone, making them both powerful and tricky.

**Why Do Dates Matter?**  
- **Practical Applications**: Essential for scheduling (e.g., calendar apps), logging (e.g., timestamps in logs), time-based logic (e.g., countdown timers), or formatting (e.g., displaying "Sep 21, 2025").
- **Interviews**: Frequently tested for parsing strings, calculating time differences, handling time zones, or formatting outputs. Questions often probe edge cases like invalid dates or month overflow.
- **Correctness**: Missteps in date handling (e.g., ignoring time zones) can cause bugs, especially in global apps where users span time zones.
- **User Experience**: Properly formatted dates enhance readability (e.g., "9/21/2025" vs raw milliseconds).
- **Performance**: Native `Date` methods are optimized, but calculations can be slow for large datasets—know when to use libraries.
- **Problem-Solving Mindset**: When tackling date problems, ask: *What* date/time is needed (e.g., now, specific, parsed)? *Why* use `Date` (e.g., for precision vs manual strings)? *How* to implement (e.g., getters for display, setters for updates)?

**How Do Dates Work?**  
A `Date` object is instantiated with `new Date()`, storing a millisecond timestamp. Methods like `getFullYear()` or `setMonth()` access or modify components, while formatting methods like `toISOString()` produce strings. Dates adjust automatically for overflows (e.g., setting day 32 rolls to next month). Time zones complicate things: local methods reflect the browser’s time zone (e.g., IST for India), while UTC methods standardize globally. Calculations involve converting to milliseconds (`getTime()`) for arithmetic. Memory-wise, `Date` objects are references, so copying requires `new Date(date)` to avoid shared mutations.

**Connection to Previous Topics**:
- **Objects**: `Date` is an object with methods and properties, inheriting from `Object.prototype`.
- **Functions**: `Date` methods are functions; `this` refers to the `Date` instance.
- **Numbers**: Timestamps are numbers (milliseconds); arithmetic used in calculations.
- **Strings**: Date strings (e.g., "2025-09-21") are parsed or produced.
- **Error Handling**: Validate dates to catch `Invalid Date` errors.
- **Prototypes**: `Date.prototype` provides methods like `getDate()`.

**Key Characteristics**:
- **Epoch-Based**: Time stored as milliseconds since 1970-01-01 00:00:00 UTC.
- **Mutability**: Dates can be modified via setters (e.g., `setFullYear()`).
- **Time Zones**: Local vs UTC methods; browser-dependent offsets.
- **Auto-Adjustment**: Overflow (e.g., `setMonth(12)`) rolls to valid dates.
- **Edge Cases**: Invalid dates, leap years, DST transitions, ambiguous string parsing.

---

## Key Concepts
- **Use Cases**: Timestamps (logging), scheduling (events), formatting (UI), calculations (age, countdowns).
- **Methods**: Getters (`getFullYear`), setters (`setDate`), formatters (`toLocaleString`).
- **Parsing**: ISO strings (`YYYY-MM-DD`) are reliable; others vary by browser.
- **Calculations**: Use milliseconds for precision; convert to days/hours as needed.
- **Best Practices**: Use UTC for consistency, validate inputs, handle invalid dates.
- **Problem-Solving Mindset**: *What* time data is needed? *Why* choose native `Date` vs library? *How* to compute or format reliably?

---

Below is a detailed, organized breakdown of the provided code, enhanced with better variable naming (descriptive, camelCase), comprehensive commenting, dry runs, outputs, and in-depth explanations following the *what/why/how* structure. Each section is expanded for clarity, avoiding conciseness to ensure thorough understanding, with problem-solving insights and edge cases.

### 1. Creating Dates

*What*: Instantiating `Date` objects to represent specific moments. *Why*: To capture current time, specific dates, or parsed strings for further manipulation. *How*: Use `new Date()` with various arguments—current time, milliseconds, strings, or components. Test with valid/invalid inputs to ensure robustness.

**Improved Example**:
```js
// 🎯 1. Creating Dates: Instantiate Date objects for specific moments
// Why: Capture now, past, or future times; basis for all date operations.
// How: Use 'new Date()' with no args (now), milliseconds, string, or components (year, month, etc.).
let currentDateTime = new Date();  // Current date/time (local)
let epochStart = new Date(0);  // Unix epoch: 1970-01-01 00:00:00 UTC
let parsedFromString = new Date("2025-09-21");  // Parse ISO string (midnight local)
let specificDateTime = new Date(2025, 8, 21, 7, 42, 0, 0);  // Year, month (0-based), day, hours, minutes, seconds, ms

console.log(currentDateTime);  // Current: e.g., Mon Sep 29 2025 15:42:00 GMT+0530 (IST)
// Output: Mon Sep 29 2025 15:42:00 GMT+0530 (India Standard Time)

console.log(epochStart);  // Epoch: Thu Jan 01 1970 05:30:00 GMT+0530 (IST, adjusted)
// Output: Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

console.log(parsedFromString);  // Parsed: Sun Sep 21 2025 00:00:00 GMT+0530
// Output: Sun Sep 21 2025 00:00:00 GMT+0530 (India Standard Time)

console.log(specificDateTime);  // Specific: Sun Sep 21 2025 07:42:00 GMT+0530
// Output: Sun Sep 21 2025 07:42:00 GMT+0530 (India Standard Time)

// Testing invalid date
let invalidDate = new Date("invalid");  // Invalid input
console.log(invalidDate);  // Invalid Date
// Output: Invalid Date

console.log(invalidDate instanceof Date);  // true (still a Date object)
// Output: true

console.log(isNaN(invalidDate));  // true (not a valid timestamp)
// Output: true
```

**Dry Run (Reasoning)**:
1. `currentDateTime = new Date()`: Captures system time (e.g., Sep 29, 2025, 15:42 IST). Depends on browser’s time zone (IST = UTC+5:30).
2. `epochStart = new Date(0)`: Sets to 0 ms (1970-01-01 00:00:00 UTC), displays in local IST (+5:30).
3. `parsedFromString = new Date("2025-09-21")`: Parses ISO string to midnight local time (Sep 21, 2025, 00:00:00 IST).
4. `specificDateTime = new Date(2025, 8, 21, 7, 42, 0, 0)`: Sets year=2025, month=8 (Sep, 0-based), day=21, time=07:42:00.000.
5. `invalidDate = new Date("invalid")`: Fails parsing → `Invalid Date` (a `Date` object but `isNaN` true).
6. **Problem-Solving**: Why test invalid? Real-world data (e.g., user input) may fail—validate with `isNaN`. Why ISO? Browser-consistent parsing.

**Edge Cases**:
- **Ambiguous Strings**: `"09-21-2025"` may parse differently (MM-DD vs DD-MM); use ISO (`YYYY-MM-DD`).
- **Month Index**: 0-based in constructor (8 = Sep).
- **No `new`**: `Date("invalid")` returns string, not `Date` object (corrected in your code to `new Date`).

**Tips**:
- Use ISO strings (`2025-09-21`) for reliable parsing.
- Always check `isNaN(date)` for validity.
- Avoid non-standard formats (e.g., `"Sep 21, 2025"`) due to browser inconsistencies.

### 2. Date Methods

*What*: Methods to get or set date/time components. *Why*: Extract or modify specific parts (year, month, etc.) for display or logic. *How*: Use getters (`getFullYear`) for retrieval, setters (`setDate`) for updates, in local or UTC time. Test with edge cases like rollovers.

**Improved Example**:
```js
// 🎯 2. Date Methods: Access or modify date components
// Why: Extract parts (year, day) for display; update for calculations.
// How: Use get* for retrieval, set* for updates; local or UTC variants.
let eventDate = new Date("2025-09-21T07:42:00");  // Specific date for consistency

// Getters (local time)
console.log(eventDate.getFullYear());  // Year: 2025
// Output: 2025

console.log(eventDate.getMonth());  // Month (0-based): 8 (Sep)
// Output: 8

console.log(eventDate.getDate());  // Day of month: 21
// Output: 21

console.log(eventDate.getDay());  // Day of week (0=Sun): 0
// Output: 0

console.log(eventDate.getHours());  // Hours (local): 7
// Output: 7

console.log(eventDate.getMinutes());  // Minutes: 42
// Output: 42

console.log(eventDate.getSeconds());  // Seconds: 0
// Output: 0

console.log(eventDate.getMilliseconds());  // Milliseconds: 0
// Output: 0

// Setters: Modify date
let modifiedDate = new Date();  // Start with current
modifiedDate.setFullYear(2025);  // Set year
modifiedDate.setMonth(8);  // Set Sep (0-based)
modifiedDate.setDate(21);  // Set day
modifiedDate.setHours(7);  // Set hours
modifiedDate.setMinutes(42);  // Set minutes
modifiedDate.setSeconds(0);  // Set seconds
modifiedDate.setMilliseconds(0);  // Set ms
console.log("'modifiedDate'", modifiedDate);  // Sun Sep 21 2025 07:42:00 GMT+0530
// Output: 'modifiedDate' Sun Sep 21 2025 07:42:00 GMT+0530 (India Standard Time)
```

**Dry Run (Reasoning)**:
1. `eventDate = new Date("2025-09-21T07:42:00")`: Sets Sep 21, 2025, 07:42:00 IST.
2. Getters: Extract components—`getFullYear()` → 2025, `getMonth()` → 8 (0-based), `getDay()` → 0 (Sunday).
3. `modifiedDate`: Starts with now (e.g., Sep 29, 2025), setters update to Sep 21, 2025, 07:42:00.
4. **Problem-Solving**: Why getters/setters? Precise control—test rollovers (e.g., `setDate(32)`). Why `getDay`? Useful for week-based logic (e.g., is weekend?).

**Edge Cases**:
- **Overflow**: `setDate(32)` on Jan 31 → Feb 1.
- **Invalid Set**: `setFullYear(NaN)` → `Invalid Date`.
- **Local vs UTC**: `getHours()` vs `getUTCHours()` differs by offset (e.g., IST = UTC+5:30).

**Tips**:
- Use UTC methods (`getUTC*`, `setUTC*`) for server-side consistency.
- Add 1 to `getMonth()` for human-readable output.
- Test setters with edge cases (e.g., `setMonth(12)`).

### 3. Formatting Dates

*What*: Converting `Date` to readable strings. *Why*: Display dates in user-friendly or standard formats (e.g., for UI or APIs). *How*: Use built-in methods (`toISOString`, `toLocaleString`) or custom formatting with getters. Test across locales/time zones.

**Improved Example**:
```js
// 🎯 3. Formatting Dates: Convert dates to strings
// Why: Make dates readable for users or APIs (e.g., ISO for JSON).
// How: Use to* methods or build custom formats with getters.
let formatDateTime = new Date("2025-09-21T07:42:00");  // Consistent date

console.log(formatDateTime.toISOString());  // UTC ISO: 2025-09-21T02:12:00.000Z
// Output: 2025-09-21T02:12:00.000Z

console.log(formatDateTime.toLocaleString("en-US"));  // US format: 9/21/2025, 7:42:00 AM
// Output: 9/21/2025, 7:42:00 AM

console.log(formatDateTime.toLocaleDateString());  // Date only: 9/21/2025
// Output: 9/21/2025

console.log(formatDateTime.toLocaleTimeString());  // Time only: 7:42:00 AM
// Output: 7:42:00 AM

// Custom formatting
function formatToYYYYMMDD(date) {  // Custom: YYYY-MM-DD
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");  // Add 1 for 1-based
  let day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
console.log("Formatted Date", formatToYYYYMMDD(new Date("2025-09-21")));  // 2025-09-21
// Output: Formatted Date 2025-09-21
```

**Dry Run (Reasoning)**:
1. `toISOString()`: Converts to UTC, outputs ISO string (adjusts IST to UTC: 07:42 → 02:12).
2. `toLocaleString("en-US")`: Formats for US locale (MM/DD/YYYY, 12-hour).
3. `toLocaleDateString()`: Date only, locale-dependent.
4. `toLocaleTimeString()`: Time only, includes time zone.
5. `formatToYYYYMMDD`: Gets components, pads month/day, builds string.
6. **Problem-Solving**: Why custom format? Control output—test with different locales (e.g., `"en-GB"`). Why ISO? Standard for APIs.

**Edge Cases**:
- **Invalid Date**: `toISOString()` throws on `Invalid Date`.
- **Locale Variance**: `toLocaleString()` depends on browser settings.
- **Padding**: Without `padStart`, `2025-9-1` instead of `2025-09-01`.

**Tips**:
- Use `toISOString()` for API payloads.
- Customize `toLocaleString` with options: `{ year: "numeric", month: "2-digit" }`.
- Use libraries like `date-fns` for complex formatting.

### 4. Date Calculations

*What*: Performing arithmetic with dates (e.g., differences, additions). *Why*: Solve problems like countdowns, durations, or scheduling. *How*: Use `getTime()` for millisecond math; adjust with setters. Test with positive/negative intervals.

**Improved Example**:
```js
// 🎯 4. Date Calculations: Compute time differences or modify dates
// Why: Enable countdowns, scheduling, or duration logic.
// How: Use getTime() for ms diffs; setters for additions.
function calculateDaysBetween(startDate, endDate) {  // Days between dates
  let diffMs = Math.abs(endDate.getTime() - startDate.getTime());  // Absolute ms diff
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));  // Convert to days
}

let startEvent = new Date("2025-09-21");  // Start date
let endEvent = new Date("2025-10-01");  // End date
console.log(calculateDaysBetween(startEvent, endEvent));  // 10
// Output: 10
```

**Dry Run (Reasoning)**:
1. `startEvent.getTime()`: ~1758511200000 ms (Sep 21, 2025).
2. `endEvent.getTime()`: ~1759375200000 ms (Oct 1, 2025).
3. `Math.abs(end - start)`: 864000000 ms (10 days).
4. Divide by `1000 * 60 * 60 * 24` (ms per day) → 10.
5. **Problem-Solving**: Why `Math.abs`? Handle reverse order. Why `Math.floor`? Whole days—test with same-day inputs.

**Edge Cases**:
- **Same Day**: Returns 0 (test with identical dates).
- **Time Zones**: `getTime()` is UTC-based, consistent.
- **Invalid Dates**: `getTime()` → NaN, handle with checks.

**Tips**:
- Use `new Date(date)` to avoid mutating inputs.
- Test calculations with leap years (e.g., Feb 28 vs 29).

---

### Additional Notes on Provided Code
Your provided code had a minor issue: `Date("invalid")` (without `new`) returns a string (e.g., current date as string), not a `Date` object, so `instanceof Date` and `isNaN` would fail. This was corrected to `new Date("invalid")` in the improved version, aligning with standard usage. Also, added `getDay()` explanation (day of week, 0=Sunday) and clarified outputs with IST context (since you’re in India).

---

### Interview Questions and Answers (Expanded)

#### Beginner-Level
1. **What is the `Date` object in JavaScript?**  
   - **What**: Represents a timestamp (ms since 1970-01-01 UTC) with methods for manipulation.  
   - **Why**: Handles time-based logic like scheduling or formatting.  
   - **How**: Create with `new Date()`, use getters/setters.  
   - **Answer**: It’s a built-in object for dates/times, storing milliseconds since epoch, with methods like `getFullYear()` or `toISOString()`.  
   - **Code**:
     ```js
     let now = new Date();
     console.log(now.getTime());  // e.g., 1758511320000 (ms since epoch)
     ```
   - **Tip**: Mention epoch and millisecond basis.  
   - **Problem-Solving**: Why? Tracks time precisely—test with `new Date(0)`.

2. **How do you create a specific date?**  
   - **What**: Use constructor with year, month (0-based), day, etc.  
   - **Why**: Set exact moments for events or comparisons.  
   - **How**: `new Date(year, month, day)`; validate inputs.  
   - **Answer**: Use `new Date(year, month, day)` (month is 0-based) or parse strings like "YYYY-MM-DD".  
   - **Code**:
     ```js
     let date = new Date(2025, 8, 21);  // Sep 21, 2025
     console.log(date.toDateString());  // Sun Sep 21 2025
     ```
   - **Tip**: Highlight 0-based months; suggest ISO strings.  
   - **Problem-Solving**: Why 0-based? Historical JS quirk—test with month 12.

3. **How do you check if a date is valid?**  
   - **What**: Use `isNaN(date)` to test timestamp validity.  
   - **Why**: Prevent errors from bad inputs (e.g., user forms).  
   - **How**: Parse and check; combine with RegExp for format.  
   - **Answer**: Check `isNaN(date)`; `Invalid Date` is a `Date` object but fails `isNaN`.  
   - **Code**:
     ```js
     let date = new Date("invalid");
     console.log(isNaN(date));  // true
     console.log(date instanceof Date);  // true
     ```
   - **Tip**: Clarify `Invalid Date` is still a `Date`.  
   - **Problem-Solving**: Why validate? User input varies—test with garbage strings.

#### Intermediate-Level
4. **How do you calculate days between two dates?**  
   - **What**: Subtract timestamps and convert to days.  
   - **Why**: Common for scheduling or analytics (e.g., event duration).  
   - **How**: Use `getTime()`, `Math.abs`, divide by ms per day.  
   - **Answer**: Subtract `getTime()` values, use `Math.abs` for positive diff, divide by `1000 * 60 * 60 * 24`.  
   - **Code**:
     ```js
     function daysBetween(d1, d2) {
       return Math.floor(Math.abs(d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
     }
     console.log(daysBetween(new Date("2025-09-21"), new Date("2025-10-01")));  // 10
     ```
   - **Tip**: Mention `Math.floor` for whole days.  
   - **Problem-Solving**: Why `getTime`? Universal ms—test with reverse dates.

5. **What’s the output?**  
   - **Code**:
     ```js
     let date = new Date("2025-01-01");
     date.setDate(32);
     console.log(date.toDateString());  // Sat Feb 01 2025
     ```
   - **What**: Set day beyond month’s limit.  
   - **Why**: Tests understanding of overflow.  
   - **How**: `setDate(32)` rolls to next month.  
   - **Answer**: `Sat Feb 01 2025`—`setDate(32)` on Jan 1 rolls to Feb 1.  
   - **Tip**: Explain auto-adjustment.  
   - **Problem-Solving**: Why roll? JS normalizes—test with leap year (Feb 29).

6. **How do you format a date as `YYYY-MM-DD`?**  
   - **What**: Build custom string from components.  
   - **Why**: Standard format for APIs or display.  
   - **How**: Use getters, pad with `padStart`.  
   - **Answer**: Extract year, month (+1), day; pad for two digits.  
   - **Code**:
     ```js
     function formatDate(date) {
       return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
     }
     console.log(formatDate(new Date("2025-09-21")));  // 2025-09-21
     ```
   - **Tip**: Suggest `toISOString().split("T")[0]` for shortcut.  
   - **Problem-Solving**: Why pad? Consistent format—test single-digit months.

#### Advanced-Level
7. **How do you handle time zones in JavaScript?**  
   - **What**: Manage local vs UTC times.  
   - **Why**: Global apps need consistent times (e.g., server logs).  
   - **How**: Use UTC methods (`getUTC*`, `toISOString`); check `getTimezoneOffset`.  
   - **Answer**: Use UTC methods for standardized times; `getTimezoneOffset()` for local offset.  
   - **Code**:
     ```js
     let date = new Date("2025-09-21T07:42:00");
     console.log(date.toISOString());  // 2025-09-21T02:12:00.000Z
     console.log(date.getTimezoneOffset());  // -330 (IST minutes)
     ```
   - **Tip**: Recommend libraries like `date-fns-tz` for complex zones.  
   - **Problem-Solving**: Why UTC? Avoids locale issues—test with `getUTCHours`.

8. **What’s the output?**  
   - **Code**:
     ```js
     let date = new Date("2025-13-01");
     console.log(date.toDateString());  // Wed Jan 01 2026
     ```
   - **What**: Invalid month in string.  
   - **Why**: Tests overflow parsing.  
   - **How**: Month 13 rolls to Jan next year.  
   - **Answer**: `Wed Jan 01 2026`—month 13 (invalid) rolls over.  
   - **Tip**: Explain normalization.  
   - **Problem-Solving**: Why roll? JS adjusts—test with `new Date(2025, 12, 1)`.

9. **How do you validate a date string?**  
   - **What**: Ensure string produces valid `Date`.  
   - **Why**: Prevent errors from bad inputs.  
   - **How**: Use RegExp for format, `isNaN` for validity.  
   - **Answer**: Combine RegExp (`YYYY-MM-DD`) and `isNaN` check.  
   - **Code**:
     ```js
     function isValidDate(str) {
       let regex = /^\d{4}-\d{2}-\d{2}$/;
       if (!regex.test(str)) return false;
       let date = new Date(str);
       return !isNaN(date) && date.toISOString().startsWith(str);
     }
     console.log(isValidDate("2025-09-21"));  // true
     console.log(isValidDate("invalid"));  // false
     ```
   - **Tip**: Check parsed date matches input to avoid rollovers.  
   - **Problem-Solving**: Why strict? Catch subtle errors—test with `"2025-13-01"`.

---

### Small Tricks and Tips for Interviews
1. **0-Based Months**:  
   - Say: “I always add 1 to `getMonth()` for display and use 0-based for `setMonth`.”  
   - **Why**: Avoids common indexing errors.  
   - **Code**: `date.getMonth() + 1`.  
   - **Problem-Solving**: Why? JS quirk—test with `setMonth(0)`.

2. **ISO for Consistency**:  
   - Say: “I use `toISOString()` for standardized API outputs.”  
   - **Why**: UTC-based, unambiguous.  
   - **Code**: `date.toISOString()`.  
   - **Problem-Solving**: Why ISO? Cross-system reliability—test parsing.

3. **Validation First**:  
   - Say: “I check `isNaN(date)` and use RegExp to validate strings.”  
   - **Why**: Prevents `Invalid Date` bugs.  
   - **Code**: `isNaN(new Date(str))`.  
   - **Problem-Solving**: Why validate? User input is unpredictable—test bad formats.

4. **Interview Analogy**:  
   - “A `Date` object is like a stopwatch starting at 1970, counting milliseconds and adjusting for your time zone.”  
   - **Why**: Clarifies epoch and time zone concepts.  
   - **Problem-Solving**: Simplifies for non-technical interviewers.

5. **Debugging**:  
   - Use `console.log(date.toISOString())` for consistent debugging.  
   - **Why**: Shows UTC, avoids local time confusion.  
   - **Problem-Solving**: Test across time zones in DevTools.

---

### Tricky Questions to Watch Out For
1. **What’s the output?**  
   ```js
   let date = new Date("2025-13-01");
   console.log(date.getFullYear());  // 2026
   ```  
   - **Answer**: Month 13 rolls to Jan 2026.  
   - **Trick**: Overflow in strings; validate input.  
   - **Problem-Solving**: Why? JS normalizes—test with RegExp.

2. **What’s the output?**  
   ```js
   let date = new Date("invalid");
   console.log(date instanceof Date);  // true
   console.log(isNaN(date));  // true
   ```  
   - **Answer**: `Invalid Date` is a `Date` object but invalid.  
   - **Trick**: Use `isNaN` for validity.  
   - **Problem-Solving**: Why check? Avoid silent failures—test with `try-catch`.

3. **What’s the output?**  
   ```js
   let date = new Date("2025-09-21");
   console.log(date.getHours());  // Varies (0 in IST)
   ```  
   - **Answer**: Depends on time zone (0 for midnight IST).  
   - **Trick**: String parsing sets time to 00:00 local; use `getUTCHours`.  
   - **Problem-Solving**: Why vary? Local time—test with UTC.

---

This version provides a detailed, non-concise explanation with *what/why/how* for each section, improved variable names (e.g., `currentDateTime`, `eventDate`), comprehensive comments, and problem-solving insights. Outputs reflect IST (per your time zone). The code corrects `Date("invalid")` to `new Date("invalid")` and adds clarity on `getDay()`. Let me know the next topic (e.g., Arrays, Async) or specific questions!