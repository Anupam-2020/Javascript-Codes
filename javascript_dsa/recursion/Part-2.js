// Fibonacci Series.
const fibonacci = (number) => {
    if(number === 1) return 1
    else if(number === 0) return 0
    return fibonacci(number - 1) + fibonacci(number - 2)
}

// Count ways to reach nth stairs.
const nthStairs = (nStairs) => {
    if(nStairs < 0) return 0
    if(nStairs === 0) return 1
    return nthStairs(nStairs - 1) + nthStairs(nStairs - 2)
}

// say digits. -> i/p - 234..... o/p - two three four
let obj = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero"
}

function sayDigits(number) {
    if(number === 0) return
    let digit = number % 10
    let num = parseInt(number/10)
    sayDigits(num)
    console.log(obj[digit])
}

console.log(sayDigits(1012132))