// reduce method.

const number = [1, 2, 3, 4, 5, 10];

const sum = number.reduce((accumulator, currentValue) => {
  // behind the scene..
  // accumulator = accumulator + currentValue
  // return accumulator
  return accumulator + currentValue;
}, 10);

console.log(sum);

const customers = [
    {productId: 1, productName: "mobile", price: 50000}, 
    {productId: 2, productName: "laptop", price: 90000},
    {productId: 3, productName: "Camera", price: 45000}
];

const totalPrice = customers.reduce((total, {price}) => {
    return total + price;
},0);

console.log(totalPrice);



// polyfill for reducer.
Array.prototype.myReducer = function(cb, initialValue) {
  let accumulator = initialValue;

  for(let i = 0; i < this.length; i++) {
      accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
  }

  return accumulator
}

const product = number.myReducer((accu, curr, i, number) => {
  return accu * curr;
},0)

console.log(product);