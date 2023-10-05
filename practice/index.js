// const ele = document.querySelector('input');

// function hotDebounce() {
//   let timer;

//   return function() {
//     if(timer) {
//       clearTimeout(timer);
//     console.log(timer);
//     }
//     timer = setTimeout(() => {
//         console.log('Event added');
//     }, 1000);
//   }
// }

// ele.addEventListener('keyup',hotDebounce());

// var value = 'Anupam';

// console.log(window.value);


// let arr = [1,2,4];
// arr.splice(0,arr.length);
// console.log(arr); 

let car = {
  name: 'Tata',
  model: 'Nexon',
}

function purchaseCar(price, color) {
  console.log(`Purchased ${this.name} ${this.model} in ${color} color at Rs.${price}`);
}

// polyfill for bind...
Function.prototype.myCall = function(context, ...args) {
  if(typeof this !== 'function') {
    throw new Error(this + " It's not callable");
  }

  context.fn = this;
  context.fn(...args);
}

purchaseCar.myCall(car, '10,00,000', 'black');
car.fn('10,00,000', 'black')