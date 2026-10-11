let x = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

let x_trim = x.trim();
let x_trimLC = x_trim.toLowerCase();
const arr = x_trimLC.split(",");
const arrtrim = arr.map(name => name.trim().toLowerCase());
const finalString = arrtrim.join(" | ");

console.log(arr);
console.log(arrtrim);
console.log(finalString);

const products = [
    { name: 'Laptop', price: 1000, active: true }, 
    { name: 'Mouse', price: 20, active: false }, 
    { name: 'Keyboard', price: 50, active: true }
];

const activeProducts = products.filter(product => product.active === true);

const uppercaseNames = activeProducts.map(product => product.name.toUpperCase());

const totalPrice = activeProducts.reduce((total, product) => total + product.price, 0);

console.log(activeProducts);
console.log(uppercaseNames);
console.log(totalPrice);