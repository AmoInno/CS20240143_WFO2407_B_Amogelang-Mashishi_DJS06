// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Using forEach: Log each name
names.forEach(name => console.log(name));

// Using forEach: Log each province
provinces.forEach(province => console.log(province));

// Using forEach: Log each name with a matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`)
});

// Uppercase Transformation:
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// Name Lengths:
const nameLength = names.map(name => name.length);
console.log(nameLength);

// Alphabetically sort the provinces:
console.log(provinces.sort());

// Remove provinces containing "Cape"
const notCape = provinces.filter(province => !province.includes("Cape"));
console.log(notCape);

// Create a boolean array to determine if a name contains the letter 'S'
const nameContainsLetterS = names.map(name => name.toUpperCase().includes("S"));
console.log(nameContainsLetterS);
const letterS = names.some(name => name.toUpperCase().includes("S"));
console.log(letterS);

// Transform the names array into an object mapping names to their respective provinces.
const objectMapping = names.reduce((accumulator, name, index) => {
  accumulator[name] = provinces[index];
  return accumulator
}, {});
console.log(objectMapping);

// Advanced Exercises 

// Log Products
console.log(products.map(item => item.product));

// Filter by Name Length
console.log(products.filter(item => item.product.length <= 5));

// Price Manipulation
console.log(
  products
    .filter(item => item.price && String(item.price).trim() !== "") // Convert prices to string & Remove products without prices
    .map(item => parseFloat(item.price)) // Convert prices to numbers
    .reduce((sum, price) => sum + price, 0) // Calculate the total price
);

// Concatenate Product Names
console.log(
  products.reduce((accumulator, item) => accumulator + item.product, "")
);

// Find Extremes in Prices
console.log(
  products
  .filter(item => item.price && String(item.price).trim() !== "") // Convert prices to string & Remove products without prices
  .reduce((accumulator, item) => {
    const priceNum =  parseFloat(item.price); //convert price to number
  
  if (accumulator.highest === null || priceNum > accumulator.highest) {
    accumulator.highest = priceNum; // Update highest price
  }
  if (accumulator.lowest === null || priceNum < accumulator.lowest) {
    accumulator.lowest = priceNum; // Update lowest price
  }
  return accumulator;
}, { highest: null, lowest: null }) // Initial values for highest and lowest
  
);

// Object Transformation
console.log(
  products.reduce((accumulator, item) => {
    // Check if the price is valid (non-empty and trimmed)
    if (item.price && String(item.price).trim() !== "") {
      accumulator[item.product] = {
        name: item.product,
        cost: parseFloat(item.price),
      };
    }
    return accumulator;
  }, {})
);