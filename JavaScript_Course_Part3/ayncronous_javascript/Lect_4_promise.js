// Promise

console.log("Script starts");
const bucket = ["coffee", "chips", "vegies", "salt", "rice"];

// producing a promise.....
const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegies") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Frice Rice");
    console.log("Inside promise object building");
  } else {
    reject("Couldn't do it");
  }
});

setTimeout(() => {
  // callback queue
  console.log("This is inside setTimeout");
});

// consuming a promise.....
friedRicePromise
  .then((myFriedRice) => {
    // microtask queue
    console.log("lets eat ", myFriedRice);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("script ends.");

// Note:- Microtask queue is given more priprity then callback queue....

// promise and setTimeout...

function myPromise() {
  return new Promise((resolve, reject) => {
    const value = false;
    setTimeout(() => {
      if (value) resolve();
      reject();
    }, 2000);
  });
}

myPromise()
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });

// promise chaining....
function myPromise2() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

myPromise2()
  .then((value) => {
    console.log(value);
    value += "foo";
    return value;
  })
  .then((value) => {
    console.log(value);
    value += "baaz";
    return value;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) =>console.log(error));
  

