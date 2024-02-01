// closures -> the ability of function which is returned by parent function to access variables and functions that are present in the global environment is closures...

// Closures (definition-2) -> The function that is returned by parent function is closure....

// Ques 0 ----------------------
function createBase(num) {
  return function addSix(value) {
      return value + num;
  }
}

const addSix = createBase(6);
console.log(addSix(10))
console.log(addSix(12))


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

const findValue = find();

console.time("6");
console.log(findValue(6));
console.timeEnd("6");

console.time("4")
console.log(findValue(6));
console.timeEnd("4");

// Ques 3 -------------------------------------
for(var i = 0; i < 4; i++) { // Var is not block scoped, so when setTimeout executes `i` would have reached the value 4... 
  setTimeout(() => {
    console.log(i); // 4 4 4 4
  },i*1000)
}

// Ques 3 part-2 ---------------------------------
for(var i = 0; i < 4; i++) {
  function inner(i) { // this will create whole different memory space when loop rund each time and i will be local variable...
    setTimeout(() => {
      console.log(i); // 0 1 2 3
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


// Ques 5 and 6 in part-3 file...