# JavaScript Dates

### Simplified Explanation
The **`Date` object** in JavaScript represents a point in time, typically stored as milliseconds since **January 1, 1970, 00:00:00 UTC** (Unix epoch). It provides methods for creating, manipulating, and formatting dates and times, used in applications like scheduling, logging, or displaying timestamps.

**Why Dates Matter**:
- Essential for time-based operations (e.g., scheduling, countdowns, analytics).
- Common in interviews for date calculations, parsing, or formatting problems.
- Impacts correctness due to time zones, leap years, and invalid dates.
- Supports user-friendly date displays and validations.

**Key Concepts**:
- **Creation**: `new Date()`, constructors, parsing strings.
- **Methods**: Getters (`getDate`, `getFullYear`), setters (`setDate`, `setFullYear`), formatting (`toISOString`).
- **Time Zones**: UTC vs local time; browser dependency.
- **Calculations**: Time differences, adding/subtracting days.
- **Edge Cases**: Invalid dates, time zone issues, leap years.

---

## 1. Creating Dates

### Methods to Create Dates
- **`new Date()`**: Current date and time.
- **`new Date(milliseconds)`**: Milliseconds since epoch.
- **`new Date(dateString)`**: Parse a date string.
- **`new Date(year, month, day, hours, minutes, seconds, milliseconds)`**: Specific components (month is 0-based).

**Code Example**:
```js
let now = new Date();
let epoch = new Date(0);
let fromString = new Date("2025-09-21");
let specific = new Date(2025, 8, 21, 7, 42, 0, 0); // 0-based month (8 = September)

console.log(now); // e.g., Sun Sep 21 2025 07:42:00 GMT+0530 (India Standard Time)
console.log(epoch); // Thu Jan 01 1970 00:00:00 GMT+0000
console.log(fromString); // Sun Sep 21 2025 00:00:00 GMT+0530
console.log(specific); // Sun Sep 21 2025 07:42:00 GMT+0530
```

**Dry Run**:
1. `new Date()`: Current time (e.g., `2025-09-21 07:42:00 IST`).
2. `new Date(0)`: Epoch (1970-01-01 00:00:00 UTC).
3. `new Date("2025-09-21")`: Parses string to midnight IST.
4. `new Date(2025, 8, 21, 7, 42, 0, 0)`: Sets specific date/time (month 8 = September).

**Output**: Varies by time zone; e.g., `Sun Sep 21 2025 07:42:00 GMT+0530`, etc.

**Important Points**:
- **Month Index**: 0-based (January = 0, December = 11).
- **Time Zone**: Browser’s local time zone unless UTC methods used.
- **Edge Case**: Invalid strings or parameters create `Invalid Date`.

**Tips**:
- Use ISO format (`YYYY-MM-DD`) for reliable string parsing.
- Validate inputs to avoid `Invalid Date`.

**Code Example (Invalid Date)**:
```js
console.log(new Date("invalid")); // Invalid Date
console.log(new Date("invalid") instanceof Date); // true
console.log(isNaN(new Date("invalid"))); // true
```

---

## 2. Date Methods

### Getters
- **Local Time**: `getDate()`, `getMonth()`, `getFullYear()`, `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`.
- **UTC**: `getUTCDate()`, `getUTCMonth()`, `getUTCFullYear()`, etc.
- **Timestamp**: `getTime()` (milliseconds since epoch).

**Code Example**:
```js
let date = new Date("2025-09-21T07:42:00");
console.log(date.getFullYear()); // 2025
console.log(date.getMonth()); // 8 (September)
console.log(date.getDate()); // 21
console.log(date.getHours()); // 7
console.log(date.getTime()); // 1758511320000 (milliseconds)
console.log(date.getUTCFullYear()); // 2025
```

**Dry Run**:
1. `getFullYear()`: Returns `2025`.
2. `getMonth()`: Returns `8` (0-based).
3. `getDate()`: Returns `21` (day of month).
4. `getHours()`: Returns `7` (local time).
5. `getTime()`: Milliseconds since epoch.
6. `getUTCFullYear()`: Returns `2025` (UTC).

**Output**: `2025`, `8`, `21`, `7`, `1758511320000`, `2025`.

### Setters
- **Local Time**: `setDate()`, `setMonth()`, `setFullYear()`, `setHours()`, etc.
- **UTC**: `setUTCDate()`, `setUTCMonth()`, etc.
- **Timestamp**: `setTime(milliseconds)`.

**Code Example**:
```js
let date = new Date();
date.setFullYear(2026);
date.setMonth(0); // January
date.setDate(15);
console.log(date); // e.g., Wed Jan 15 2026 07:42:00 GMT+0530
```

**Dry Run**:
1. `setFullYear(2026)`: Updates year to 2026.
2. `setMonth(0)`: Sets month to January.
3. `setDate(15)`: Sets day to 15.

**Output**: Varies; e.g., `Wed Jan 15 2026 07:42:00 GMT+0530`.

**Important Points**:
- **0-Based Months**: `getMonth()`/`setMonth()` use 0-11.
- **Auto-Adjustment**: Invalid dates adjust (e.g., `setDate(32)` rolls over).
- **Edge Case**: Setting invalid values creates valid dates via overflow.

**Tips**:
- Use UTC methods for consistent server-side logic.
- Validate before setting to avoid unintended rollovers.

**Code Example (Rollover)**:
```js
let date = new Date("2025-01-01");
date.setDate(32); // Rolls to Feb 1
console.log(date); // Sat Feb 01 2025
```

---

## 3. Formatting Dates

### Built-In Methods
- **`toISOString()`**: ISO format (UTC, `YYYY-MM-DDTHH:mm:ss.sssZ`).
- **`toLocaleString()`**: Locale-specific format.
- **`toDateString()`**: Date portion (e.g., `Sun Sep 21 2025`).
- **`toTimeString()`**: Time portion.

**Code Example**:
```js
let date = new Date("2025-09-21T07:42:00");
console.log(date.toISOString()); // 2025-09-21T02:12:00.000Z
console.log(date.toLocaleString("en-US")); // 9/21/2025, 7:42:00 AM
console.log(date.toDateString()); // Sun Sep 21 2025
console.log(date.toTimeString()); // 07:42:00 GMT+0530 (India Standard Time)
```

**Dry Run**:
1. `toISOString()`: Converts to UTC ISO string.
2. `toLocaleString("en-US")`: Formats for US locale.
3. `toDateString()`: Date only.
4. `toTimeString()`: Time with time zone.

**Output**: `2025-09-21T02:12:00.000Z`, `9/21/2025, 7:42:00 AM`, `Sun Sep 21 2025`, `07:42:00 GMT+0530`.

### Custom Formatting
- Combine getters for custom formats.

**Code Example**:
```js
function formatDate(date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
console.log(formatDate(new Date("2025-09-21"))); // 2025-09-21
```

**Output**: `2025-09-21`.

**Important Points**:
- **toISOString**: Always UTC; adjust for local time if needed.
- **toLocaleString**: Depends on browser locale; customizable with options.
- **Edge Case**: Invalid dates return invalid strings.

**Tips**:
- Use `padStart(2, "0")` for two-digit months/days.
- Use libraries like `date-fns` or `moment` for complex formatting.

---

## 4. Date Calculations

### Time Differences
- Use `getTime()` for millisecond differences.

**Code Example**:
```js
function daysBetween(date1, date2) {
  let diffMs = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}
let d1 = new Date("2025-09-21");
let d2 = new Date("2025-10-01");
console.log(daysBetween(d1, d2)); // 10
```

**Dry Run**:
1. `getTime()`: `d1` = `1758511200000`, `d2` = `1759375200000`.
2. `Math.abs(d2 - d1)`: `864000000` ms.
3. Divide by `1000 * 60 * 60 * 24` (ms per day): `10` days.

**Output**: `10`.

### Adding/Subtracting Days
- Use `setDate()` or `setTime()`.

**Code Example**:
```js
function addDays(date, days) {
  let result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
}
let date = new Date("2025-09-21");
console.log(addDays(date, 5)); // Fri Sep 26 2025
```

**Output**: `Fri Sep 26 2025 ...`.

**Tips**:
- Use `new Date()` to avoid mutating original date.
- Handle leap years automatically via `setDate`.

---

## 5. Time Zones
- **Local Time**: Browser’s time zone (e.g., IST for India).
- **UTC**: Use UTC methods (`getUTC*`, `toISOString`).

**Code Example**:
```js
let date = new Date("2025-09-21T07:42:00");
console.log(date.getHours()); // 7 (local, IST)
console.log(date.getUTCHours()); // 2 (UTC, 5.5 hours behind IST)
```

**Output**: `7`, `2`.

**Important Points**:
- **Time Zone Offset**: Varies by browser; use `getTimezoneOffset()` (minutes).
- **Edge Case**: Daylight Saving Time (DST) affects local time.

**Tips**:
- Use UTC for server-side consistency.
- Use libraries like `date-fns-tz` for time zone handling.

---

## 6. Edge Cases and Quirks

### Invalid Dates
- Invalid inputs create `Invalid Date` (still a `Date` object).

**Code Example**:
```js
let invalid = new Date("invalid");
console.log(invalid); // Invalid Date
console.log(isNaN(invalid)); // true
```

**Output**: `Invalid Date`, `true`.

### Month Overflow
- Dates auto-adjust for overflow.

**Code Example**:
```js
let date = new Date("2025-01-01");
date.setMonth(12); // Rolls to Jan 2026
console.log(date); // Wed Jan 01 2026
```

**Output**: `Wed Jan 01 2026 ...`.

### Time Zone Dependency
- Results vary by browser’s time zone.

**Code Example**:
```js
console.log(new Date("2025-09-21").getTimezoneOffset()); // -330 (IST, minutes)
```

**Output**: `-330`.

**Tips**:
- Check `isNaN(date)` for validity.
- Avoid ambiguous date strings (e.g., `MM/DD/YYYY`).

---

## 7. Error Handling with Dates
- Validate inputs to prevent invalid dates.

**Code Example**:
```js
function parseSafeDate(str) {
  try {
    let date = new Date(str);
    if (isNaN(date)) throw new Error("Invalid date");
    return date;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
console.log(parseSafeDate("2025-09-21")); // Sun Sep 21 2025
console.log(parseSafeDate("invalid")); // Invalid date, null
```

**Output**: `Sun Sep 21 2025 ...`, `Invalid date`, `null`.

**Tips**:
- Use `isNaN(date)` to check validity.
- Validate string format with RegExp before parsing.

---

## 8. Interview Questions and Answers

### Beginner-Level
1. **What is the `Date` object in JavaScript?**
   - **Answer**: Represents a point in time (milliseconds since 1970-01-01 UTC) with methods for manipulation.
   - **Code**:
     ```js
     console.log(new Date().getTime()); // e.g., 1758511320000
     ```
   - **Tip**: Mention epoch.

2. **How do you create a specific date?**
   - **Answer**: Use `new Date(year, month, day)` (month 0-based).
   - **Code**:
     ```js
     console.log(new Date(2025, 8, 21)); // Sun Sep 21 2025
     ```
   - **Tip**: Highlight 0-based months.

3. **How do you check if a date is valid?**
   - **Answer**: Use `isNaN(date)`.
   - **Code**:
     ```js
     console.log(isNaN(new Date("invalid"))); // true
     ```
   - **Tip**: Mention `Invalid Date` is still a `Date` object.

### Intermediate-Level
4. **How do you calculate days between two dates?**
   - **Answer**: Subtract `getTime()` values and divide by milliseconds per day.
   - **Code**:
     ```js
     let diff = Math.abs(new Date("2025-09-21").getTime() - new Date("2025-09-11").getTime());
     console.log(Math.floor(diff / (1000 * 60 * 60 * 24))); // 10
     ```
   - **Tip**: Use `Math.abs` for positive difference.

5. **What’s the output?**
   - **Code**:
     ```js
     let date = new Date("2025-01-01");
     date.setDate(32);
     console.log(date.toDateString()); // Sat Feb 01 2025
     ```
   - **Answer**: Rolls over to February due to overflow.
   - **Tip**: Explain auto-adjustment.

6. **How do you format a date as `YYYY-MM-DD`?**
   - **Answer**: Use getters with `padStart`.
   - **Code**:
     ```js
     let date = new Date("2025-09-21");
     let formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
     console.log(formatted); // 2025-09-21
     ```
   - **Tip**: Suggest libraries for complex formatting.

### Advanced-Level
7. **How do you handle time zones in JavaScript?**
   - **Answer**: Use UTC methods (`getUTC*`, `toISOString`) for consistency.
   - **Code**:
     ```js
     console.log(new Date().toISOString()); // UTC format
     ```
   - **Tip**: Mention `getTimezoneOffset()`.

8. **What’s the output?**
   - **Code**:
     ```js
     console.log(new Date("2025-13-01").toDateString()); // Wed Jan 01 2026
     ```
   - **Answer**: Invalid month rolls to next year.
   - **Tip**: Explain overflow behavior.

9. **How do you validate a date string?**
   - **Answer**: Parse and check with `isNaN`; use RegExp for format.
   - **Code**:
     ```js
     function isValidDate(str) {
       let regex = /^\d{4}-\d{2}-\d{2}$/;
       return regex.test(str) && !isNaN(new Date(str));
     }
     console.log(isValidDate("2025-09-21")); // true
     console.log(isValidDate("invalid")); // false
     ```
   - **Tip**: Combine RegExp and `Date` validation.

---

## Small Tricks and Tips for Interviews
1. **0-Based Months**:
   - Say: “I remember `getMonth` and `setMonth` are 0-based.”
   - **Why**: Avoids common errors.
   - **Code**: `date.getMonth() + 1`.

2. **ISO Format**:
   - Say: “I use `toISOString` for UTC consistency.”
   - **Why**: Standardizes server communication.
   - **Code**: `date.toISOString()`.

3. **Validation**:
   - Say: “I use `isNaN(date)` to check for invalid dates.”
   - **Why**: Shows robust error handling.
   - **Code**: `isNaN(new Date("invalid"))`.

4. **Interview Analogy**:
   - “Dates are like a clock ticking from 1970: `Date` tracks milliseconds and adjusts for time zones.”
   - **Why**: Simplifies for interviewers.

5. **Debugging**:
   - Log with `toISOString()` or `toLocaleString()` for clarity.
   - **Why**: Shows time zone differences.

---

## Tricky Questions to Watch Out For
1. **What’s the output?**
   ```js
   console.log(new Date("2025-13-01").getFullYear()); // 2026
   ```
   - **Answer**: Month overflow to next year.
   - **Trick**: Explain 0-based month and rollover.

2. **What’s the output?**
   ```js
   console.log(new Date("invalid") instanceof Date); // true
   console.log(isNaN(new Date("invalid"))); // true
   ```
   - **Answer**: `Invalid Date` is a `Date` object; use `isNaN`.
   - **Trick**: Highlight validation need.

3. **What’s the output?**
   ```js
   let date = new Date("2025-09-21");
   console.log(date.getHours()); // Varies by time zone
   ```
   - **Answer**: Depends on local time zone (e.g., 0 or adjusted).
   - **Trick**: Suggest UTC methods.
