// keys, values, entries
const user = { name: "Alice", age: 30, city: "NY" };

userKeys = Object.keys(user); // ["name", "age", "city"]
console.log(userKeys);

userValues = Object.values(user); // ["Alice", 30, "NY"]
console.log(userValues);

userEntries = Object.entries(user); // [["name", "Alice"], ["age", 30], ["city", "NY"]]
console.log(userEntries);

// assign
const defaults = {theme: "light", language: "en"};
const pref = {theme: "dark", language: "es"};
const config = Object.assign({}, defaults, pref);
console.log(config);

// fromEntries
const entries = [["name", "Alice"], ["age", 30], ["city", "NY"]];
const obj = Object.fromEntries(entries);
console.log(obj);