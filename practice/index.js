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

function myMemoization(fn, context) {
    res = {};
    return function(...args) {
        // console.log(JSON.stringify(args));
        let argsCache = JSON.stringify(args);
        if(!res[argsCache]) {
            // res[argsCache] = fn.call(context || this, ...args);
  
            // const func = fn.bind(context || this);
            // res[argsCache] = func(...args);
  
            // res[argsCache] = fn.apply(context || this, arguments);
  
            res[argsCache] = fn(...args)
        } 
        return res[argsCache];
    }
  }
  
  function product(num1, num2) {
    for(let i = 0; i < 100000000; i++) {}
    return num1 * num2;
  }
  
  const memoizedProduct = myMemoization(product);
  
  console.time("first call");
  console.log(memoizedProduct(23,45));
  console.timeEnd("first call");
  
  console.time("2nd call");
  console.log(memoizedProduct(23,45))
  console.timeEnd("2nd call");