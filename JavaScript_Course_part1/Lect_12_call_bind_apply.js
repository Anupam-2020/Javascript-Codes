function about(hobby, sport) {
    console.log(this.firstName, this. age, hobby, sport);
}

const user1 = {
    firstName: 'Anupam',
    age: 8
}

const user2 = {
    firstName: 'Anand',
    age: 10
}

// call method.
about.call(user1,'Chess','Cricket');
about.call(user2, 'Books','Basket ball');

// apply method.
about.apply(user1, ['Coding', 'Ludo']);

// bind
const func = about.bind(user2);
func('Coding', 'Basket Ball');


// creating polyfills for call, bind and apply methods...
let car = {
    name: 'Tata',
    model: 'Nexon'
}
  
function purchaseCar(price, color) {
    console.log(`Purchased ${this.name} ${this.model} in ${color} color at Rs.${price}`);
}


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
  fun('10,00,000')