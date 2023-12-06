// max and min in array using recursion...
function maxMinUsingRecursion(arr1, index, min, max) {
    if(arr1.length === 0) return -1;
    if(arr1.length === 1) return arr1[0];
    if(index === arr1.length) return [min, max];
    if(arr1[index] < min) min = arr1[index];
    if(arr1[index] > max) max = arr1[index];
    return maxMinUsingRecursion(arr1, index+1, min, max);
}

let arr1 = [1, 4, 45, 6, 10, -8];
// console.log(maxMinUsingRecursion(arr1, 0, Number.MAX_VALUE, Number.MIN_VALUE));


// to check if string is palindrome using recursion...
function checkPalindrome(string, s, e) {
    if(string.length === 1) return true;
    if(s >= e) {
        return true;
    }

    if(string.charAt(s) !== string.charAt(e)) return false;
    return checkPalindrome(string, s+1, e-1);
}

let str = "malayalam"
// console.log(checkPalindrome(str, 0, str.length - 1))


function countSetBit(n) {
    if(n === 0) return 0;
    if((n&1) === 1) return 1 + countSetBit(n >> 1);
    else return countSetBit(n >> 1);
}

// console.log(countSetBit(7))

// fibonacci series in reverse order
function fibonacciSeriesInReverseOrder(seriesLength, a, b) {
    if(seriesLength === 0) return 0;
    fibonacciSeriesInReverseOrder(seriesLength-1, b, a+b)
    console.log(a)
}

// fibonacciSeriesInReverseOrder(7, 0, 1)

// count no. of ways where coins can be arranged to make a given value.
function countCoin(coinArray, n, sum) {
    if(sum < 0) return 0;
    if(sum === 0) return 1;
    if(n === 0) return 0;
    return countCoin(coinArray, n - 1, sum) + countCoin(coinArray, n, sum - coinArray[n - 1]);
}

let coinArray = [7,2,3,5,4];
// console.log(countCoin(coinArray, coinArray.length, 1))


// fibonacci using closure concept...
function generateFibonacci(number) {
    if(number === 0) return 0;
    if(number === 1) return 1;
    return generateFibonacci(number - 1) + generateFibonacci(number - 2);
}

function fibonacciNumber() {
    let count = 0;
    return () =>  generateFibonacci(count++)
}

let fib = fibonacciNumber()
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())