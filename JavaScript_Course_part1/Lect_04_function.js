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

// function scoping....
for(var i = 0; i < 5; i++) { // here for-loop will create saperate block-scope for setTimeout on every iteration.... 
    setTimeout(function() {
        console.log(i);
    }, i*1000)
}