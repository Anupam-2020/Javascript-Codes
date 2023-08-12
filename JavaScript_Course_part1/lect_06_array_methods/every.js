// every method => checks condition for every element of array and returns true only if all elements satisfy the condition
// some method => checks and return true if even one element satisfies the condition.

const numbers = [2,4,6,7,8];

const userCart = [
    {productID: 1, productName: "Laptop", price: 100000},
    {productID: 2, productName: 'Mobile Phone', price: 45000} 
]

// every
const ans = numbers.every(num =>  num%2 === 0);
console.log(ans);

const prod = userCart.every(product => product.price > 50000);
console.log(prod);

// some
const ans1 = numbers.some(num => num%2===0)
console.log(ans1);

const prod1 = userCart.some(num => num > 50000);
console.log(prod1);