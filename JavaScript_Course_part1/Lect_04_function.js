// function
function singHappyBirthday() {
    console.log("Happy birthday to you.....");
}

// function expression....
const singHappyBirthday1 = function() {
    console.log("Happy birthday to you.....");
}

singHappyBirthday1();


// Immediately invoked function.
const square = (function square(num) {
    return num*num
})(5)

console.log(square)