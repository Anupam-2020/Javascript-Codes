// Module pattern -> The module pattern is a design pattern used for improving the maintainability and reusability of the code by creating public and private access levels. Sometimes called encapsulation, it protects the value inside a module from being accessed from other scopes.

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

// Quest -> Make the below function called once only.----------------
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


