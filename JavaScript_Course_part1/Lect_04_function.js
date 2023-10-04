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
for(let i = 0; i < 5; i++) { // here for-loop will create saperate block-scope for setTimeout on every iteration.... 
    setTimeout(() => {
        console.log(i);
    }, i*1000)
    // console.log(i)
}

// spread vs rest operators
function multiply(...nums) {
    return nums[0]*nums[1];
}

var arr = [1,2];
multiply(...arr)


// arrow vs normal function....................

// diff 1 -> 
function printName() { 
    console.log(arguments) // arguments give an object of all the arguments passed to this function...
}

// const printNameArr = () => { // in arrow fn. arguments don't work the same way as normal function...
//     console.log(arguments)
// }

printName('Anupam')
// printNameArr('Anand')

// diff 2 ->
const user = {
    username: 'Anupam',
    rc1: () => {
        console.log(this.username)
    },
    rc2: function() {
        console.log(this.username)
    }
}

user.rc1() // returns window object.
user.rc2() // returns value