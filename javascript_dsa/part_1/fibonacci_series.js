// fibonacci series....
function fibonacci(nth_value) {
    let firstValue = 0;
    let secondValue = 1;
    // console.log(`${firstValue} \n${secondValue}`)
    for(let i = 2; i < nth_value; i++) {
        let temp = firstValue;
        firstValue = secondValue;
        secondValue = firstValue + temp;
        // console.log(secondValue);
    }
    console.log(secondValue)
}



// another sol.-------------------------------------------------------------
function fibRecursion(nth_value) {
    if(nth_value <= 1) {
        return nth_value
    }
    
    return fibRecursion(nth_value - 1) + fibRecursion(nth_value - 2);
}

console.time("fib")
fibonacci(6)
// console.log(fibRecursion(6))
console.timeEnd("fib")