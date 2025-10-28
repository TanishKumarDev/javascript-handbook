// -------------------------------------------
// Example 1: Shopping Cart (Object Literal)
// -------------------------------------------
const shoppingCart = {
    items: [],   // Cart ke saare items yahan store honge
    total: 0,    // Cart ka total price

    // Method: Item add karna
    addItem: function(item) {
        this.items.push(item);    // 'this' => shoppingCart object
        this.updateTotal();       // Total update karna
    },
    
    // Method: Item remove karna by ID
    removeItem: function(itemId) {
        // Filter use karke new array banate hain jisme matching item nahi hoga
        this.items = this.items.filter(item => item.id !== itemId);
        this.updateTotal();       // Total fir se calculate karte hain
    },
    
    // Method: Total calculate karna
    updateTotal: function() {
        // Reduce loop lagake sab prices add karte hain
        this.total = this.items.reduce((sum, item) => sum + item.price, 0);
    },
    
    // Method: Cart info show karna
    getInfo: function() {
        // 'this.items' aur 'this.total' dono object ke hi parts hain
        return `Cart has ${this.items.length} items, total: $${this.total}`;
    }
};

// -------------------------------------------
// Example 2: Counter with Methods
// -------------------------------------------
function createCounter(initialValue = 0) {
    // Har call ek naya counter object return karega
    return {
        value: initialValue, // Initial value set

        // Increment method
        increment: function() {
            this.value++;    // 'this' refers to the counter object itself
            return this;     // 'return this' → chaining allow karta hai
        },
        
        // Decrement method
        decrement: function() {
            this.value--;    // 'this' same object ko refer karega
            return this;     // chaining continue kar sakte hain
        },
        
        // Get current value
        getValue: function() {
            return this.value;
        }
    };
}

// Ek naya counter banao
const counter = createCounter(5);

// Chainable methods ka use:
console.log(counter.increment().increment().getValue()); 
// ✅ Output: 7
// Step by step:
// - increment(): value = 6 → return this
// - increment(): value = 7 → return this
// - getValue(): returns 7

// 👉 Notes to Remember About this Here:

// In object methods, this refers to that specific object (e.g., shoppingCart or returned counter object).

// Agar method ko extract karke call karte ho (const fn = obj.method; fn()), to this lost ho jata hai → undefined (strict mode) ya global.

// Arrow functions use karte waqt this lexical hota hai, matlab wo outer scope ka this leta hai.

// return this; use karne se method chaining possible hoti hai (like jQuery style).

// Function ke andar this ka value runtime pe decide hota hai, compile time pe nahi.