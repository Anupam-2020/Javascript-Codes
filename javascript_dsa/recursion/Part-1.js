// Power of two.
function powerOfTwo(power) {
  if (power === 0) {
    return 1;
  }

  return 2 * powerOfTwo(power - 1);
}

// Factorial of a number.
function factorialOfANumber(number) {
    if(number === 1) return 1
    return number * factorialOfANumber(number - 1)
}

// Print counting -> 5,4,3,2,1
const printCounting = (startCount) => {
    if(startCount === 0) return
    console.log(startCount)
    return printCounting(startCount - 1)
}

console.log(printCounting(5))