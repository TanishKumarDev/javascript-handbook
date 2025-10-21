// 1. Form Data Processing

// simulating form data
let formData = {
    name: "John Doe",
    age: "30",
    salary: "50000.50",
    isActive: "true",
    hobbies: "reading,swimming,coding"
};

// convert form data to appropriate types
function processFormData(data) {
    return {
        name: String(data.name).trim,
        ageL: parseInt(data.age, 10),
        salary: parseFloat(data.salary),
        isActive: Boolean(data.isActive),
        hobbies: data.hobbies.split(",")
    }
}

let processedData = processFormData(formData);
console.log(processedData);

// 2. API Response Processing

// simulating API response
let apiResponse = {
    id: "123",
    timestamp: "1640995200000",
    price: "99.99",
    inStock: "1",
    tags: "electronics,laptop,computer"
};

// convert API response to appropriate types
function processApiResponse(data) {
    return {
        id: parseInt(data.id, 10),
        timestamp: new Date(data.timestamp),
        price: parseFloat(data.price),
        inStock: Boolean(data.inStock),
        tags: data.tags.split(",")
    }
}
let processedResponse = processApiResponse(apiResponse);
console.log(processedResponse);

// 3. URL Parameter Processing

// simulating URL parameters
let urlParams = {
    id: "123",
    timestamp: "1640995200000",
    price: "99.99",
    inStock: "1",
    tags: "electronics,laptop,computer"
};

// convert URL parameters to appropriate types
// URL parameters are always strings
function parseUrlParams(url) {
    let params = new URLSearchParams(url.split("?")[1]);
    let result = {};
    
    for (let [key, value] of params) {
        // Try to convert to appropriate type
        if (value === "true" || value === "false") {
            result[key] = value === "true";
        } else if (!isNaN(value) && !isNaN(parseFloat(value))) {
            result[key] = parseFloat(value);
        } else {
            result[key] = value;
        }
    }
    
    return result;
}

let url = "https://example.com/search?q=laptop&page=2&inStock=true&minPrice=100.50";
console.log(parseUrlParams(url));
// { q: "laptop", page: 2, inStock: true, minPrice: 100.5 }
