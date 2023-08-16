// closures -> the ability of function which is returned by parent function to access variables and functions that are present in the global environment is closures...

// Closures (definition-2) -> The function that is returned by parent function is closure....

// Ques 1 -----------------------
function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hi, Hello");
      counter++;
    } else {
      console.log("Already called once");
    }
  };
}

const value = func();
value();
value();


// Ques 2 to check time taken by normal function and when used closures.----------------------------

const find1 = (index) => {
  const arr = [];
  for(let i = 0; i < 100000; i++) {
    arr.push(i*i);
  } 
  return arr[index];
}

const find = () => {
  const arr = [];
  for(let i = 0; i < 100000; i++) {
    arr.push(i*i);
  } 

  return (index) => {
    return arr[index]
  }
}

console.time("6");
console.log(find()(6));
console.timeEnd("6");

console.time("4")
console.log(find1(6));
console.timeEnd("4");

// Ques 3 ---------------------------------
for(var i = 0; i < 4; i++) {
  function inner(i) {
    setTimeout(() => {
      console.log(i);
    },i*1000)
  }
  inner(i)

  // setTimeout(() => {
  //   console.log(i)
  // }, i*1000)
}

// Ques 4 ----------------------------
function counter() {
  var _counter = 0;

  function add(increment) {
    _counter+=increment;
  }

  function retrieve() {
    return _counter;
  }

  return {
    add, retrieve
  }
}

const count = counter()
count.add(5);
count.add(10)
console.log(count.retrieve())