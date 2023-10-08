// polyfill for setTimeout...
function createSetTimeOut() {
    let timerId = 0;
    let timerMap = {};

    function mySetTimeout(callback, delay, ...args) {
        let id = timerId++;
        timerMap[id] = true;
        let start = Date.now();
        function triggerCallback() {
            if(!timerMap[id]) return;
            else if(Date.now() > start + delay) {
                callback.apply(this, args);
            } else {
                requestIdleCallback(triggerCallback);
            }
        }
        requestIdleCallback(triggerCallback);
        return id;
    }

    function myClearTimeout() {
        delete timerId[id];
    }
    return {mySetTimeout, myClearTimeout};
}

var {mySetTimeout, myClearTimeout} = createSetTimeOut();

console.log("Start")

const myId = mySetTimeout(function(name) {
    console.log("Welcome", name);
},2000, "Anupam");

console.log("End");


// polyfill for call...
Function.prototype.myCall = function(context, ...args) {
    if(typeof this !== 'function') {
      throw new Error(this + " It's not callable");
    }
  
    context.fn = this; // this points to the purchaseCar function and fn key gets created here...
    context.fn(...args); // we need to paas arguments to the obj to make the function-key access those values...
    // Note:- The above steps will create a function same as purchaseCar in the object(car)...
}

purchaseCar.myCall(car, '10,00,000', 'black');



// polyfill for apply.
Function.prototype.myApply = function(context, args) {
    if(typeof this !== 'function') {
      throw new Error(this+ ' It"s not a function');
    }
  
    if(!Array.isArray(args)) {
      throw new TypeError("Invalid arguments");
    }
    context.fn = this;
    context.fn(...args);
}
  
purchaseCar.myApply(car, ['10,00,000', 'black']);



// polyfill for bind
Function.prototype.myBind = function(context, ...args) {
    if(typeof this !== 'function') {
      throw new Error(this+ ' This is not a function');
    }
  
    context.fn = this;
    return function(...newArgs) {
      context.fn(...newArgs, ...args);
    }
  }
  
const fun = purchaseCar.myBind(car, 'black');
fun('10,00,000');



// polyfill for filter.
Array.prototype.myFilter = function(cb) {
    let temp = []
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i ,this)) temp.push(this[i])
    }
    return temp
}

const filteredArray = numbers.myFilter((num) => {
    return num > 2;
})

console.log(filteredArray);



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


// polyfill for forEach.
Array.prototype.myForEach = function(cb) {
    for(let i = 0; i < this.length; i++) {
        cb(this[i], i, this)
    }
}


numbers.myForEach((value, i) => {
    numbers[i] = value + 3
})

console.log(numbers);



// Polyfill for map.
Array.prototype.myMaps = function(cb) {
    let temp = []
    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const multiplyByThree = numbers.myMaps((num, i , arr) => {
    return num * 3;
})

console.log(multiplyByThree);