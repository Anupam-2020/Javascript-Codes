// Q1.
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));

// Q2.
/*
evaluate("sum")(2)(3)
evaluate("multiply")(9)(4)
evaluate("divide")(4)(2)
 */

function evaluate(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "sum":
          return a + b;
        case "multiply":
          return a * b;
        case "divide":
          return a / b;
        case "subtract":
          return Math.abs(a - b);
        default:
          return "wrong input";
      }
    };
  };
}

let res = evaluate("divides")(2)(16);
console.log(res);

// Q3.
// infinite currying...
function addCurry(a) {
  return function(b) {
    if (b) return addCurry(b + a);
    return a;
  };
}

console.log(addCurry(2)(5)(8)());