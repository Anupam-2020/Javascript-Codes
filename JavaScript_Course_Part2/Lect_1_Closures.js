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