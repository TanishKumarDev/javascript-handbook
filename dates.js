// 1. Creating Dates
let now = new Date();
let epoch =  new Date(0);
let fromString = new Date("2025-09-21");
let specific = new Date(2025, 8, 21, 7, 42, 0, 0);

console.log(now);
console.log(epoch);
console.log(fromString);
console.log(specific);

console.log(Date("invalid"));
console.log(Date("invalid") instanceof Date);
console.log(isNaN(Date("invalid")));

// 2. Data methods
let date = new Date("2025-09-21T07:42:00");
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

let setDate =  new Date();
setDate.setFullYear(2025);
setDate.setMonth(8);
setDate.setDate(21);
setDate.setHours(7);
setDate.setMinutes(42);
setDate.setSeconds(0);
setDate.setMilliseconds(0);
console.log("'setDate()'",setDate);

// 3. Formatting Dates
let formateDate = new Date();
console.log(formateDate.toISOString());
console.log(formateDate.toLocaleString("en-US"));
console.log(formateDate.toLocaleDateString());
console.log(formateDate.toLocaleTimeString());

// example 
function formatDate(date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
console.log("Formate Date Function",formatDate(new Date("2025-09-21"))); // 2025-09-21

// 4. Date Calculations
function daysBetween(date1, date2) {
  let diffMs = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}
let d1 = new Date("2025-09-21");
let d2 = new Date("2025-10-01");
console.log(daysBetween(d1, d2)); // 10