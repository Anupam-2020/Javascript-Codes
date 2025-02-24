// var vs let vs const
// var is function scoped, let and const are block scoped.
// var can be re-declared and updated, let can be updated but not re-declared, const can neither be re-declared nor updated.
// var and let can be hoisted, const cannot be hoisted.
// var and let are initialized with undefined, const must be initialized during declaration.
// shadowing is possible with var and let, but not with const.
// illegal shadowing is possible with var, but not with let and const.


function test() {
  let a = "Hello"; // shadowing
  var b = "World";
  let c = "Mars";

  if (true) {
    let a = "Hi";
    console.log(a);
    let b = "Earth";
    console.log(b);

    // var c = "Jupiter"; // illegal shadowing
  }
  console.log(a);
  
}
test();


// Javascript execution context
// Execution context is the environment in which the javascript code is executed. It consists of two phases: creation and execution. 
// Creation phase: 
// 1. Creation of the variable object (VO) or activation object (AO) which contains all the variables, functions and arguments. 
// 2. Creation of the scope chain which contains the current scope and all the parent scopes. 
// 3. Determination of the value of 'this' keyword. 

// hoisting - variables and functions are hoisted to the top of the execution context. 
// variables are initialized with undefined, functions are initialized with the function definition.
// function declarations are hoisted before variable declarations.
// function expressions are not hoisted.

function abc() {
  console.log(a); // undefined
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  console.log(c); // ReferenceError: Cannot access 'c' before initialization
  var a = 10;
  let b = 20;
  const c = 30;
  // temporal dead zone - the time between the creation of the variable and the initialization of the variable.
}

abc();