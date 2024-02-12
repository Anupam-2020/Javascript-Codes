// Module pattern -> The module pattern is a design pattern used for improving the maintainability and reusability of the code by creating public and private access levels. Sometimes called encapsulation, it protects the value inside a module from being accessed from other scopes.

// Ques 1 -> Module pattern example...
const Module = () => {
  function privateMethod() {
    console.log("private");
  }

  return {
    publicMethod: () => {
      return privateMethod();
    },
  };
};

Module().publicMethod();

// Ques 2 -> Make the below function called once only.----------------
function createOnceCalledFunc() {
  let count = 0;

  return () => {
    if (count > 0) {
      console.log("already returned");
    } else {
      console.log("called once");
      count++;
    }
  };
}

const calling = createOnceCalledFunc();
calling();
calling();


// Ques 3 in more generaic way--------------------------------
function once(func, context) {
  return function() {
      if(func) {
          func.apply(context || this, arguments);
          func = null;
      }
  }
}

const closure = once((a,b) => console.log(a,b));
closure(2,3);
closure(4,5);

// Ques 4 -----------------------------------
// Memoization logic ....................

function myMemoization(fn, context) {
  res = {};
  return function(...args) {
      // console.log(JSON.stringify(args));
      let argsCache = JSON.stringify(args);
      if(!res[argsCache]) {
          res[argsCache] = fn.call(context || this, ...args);

          // const func = fn.bind(context || this);
          // res[argsCache] = func(...args);

          // res[argsCache] = fn.apply(context || this, arguments);

          // res[argsCache] = fn(...args)
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



// Q5 ----------------------------------------------------------------
// Memoize logic ( another way )
function myMemoize(callback, context) {
  let res = {};
  return function(...args) {
      let argsCache = args.join("");
      // console.log(argsCache);
      if(!res[argsCache]) {
          res[argsCache] = callback.call(context || this, ...args);
      }
      return res[argsCache];
  }
}

const runDatabase = (num1, num2) => {
  for(let i = 0; i < 10000000; i++){}
  return num1 * num2;
}

const res = myMemoize(runDatabase);
console.time("first");
console.log(res(2,3));
console.timeEnd("first");

console.time("sec");
console.log(res(2,3));
console.timeEnd("sec");

console.time("sec1");
console.log(res(2,6));
console.timeEnd("sec1");