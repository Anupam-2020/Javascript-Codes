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


function curry(func) {
    return function curriedFunc(...args) {
        if(args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const sum = (a,b,c,d) => a+b+c+d;

const totalSum = curry(sum);

console.log(totalSum(1)(3)(4)(2));