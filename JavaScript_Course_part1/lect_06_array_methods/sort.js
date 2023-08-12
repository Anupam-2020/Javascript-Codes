// sort...

const numbers = [3,6,2,1,9,7];

const ascendingOrder = numbers.sort((a,b) => {
    return a - b;
});

console.log(ascendingOrder);

const products = [
    {productId: 1, productName: "mobile", price: 50000}, 
    {productId: 2, productName: "laptop", price: 90000},
    {productId: 3, productName: "Camera", price: 45000}
]

const lowToHigh = products.slice(0).sort((a,b) => {
    return a.price - b.price
});

const highToLow = products.slice(0).sort((a,b) => {
    return b.price - a.price
});

console.log(highToLow);