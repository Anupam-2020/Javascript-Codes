function fibonacci(n) {
    if(n === 0 || n === 1) return n; 
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("first")
console.log(fibonacci(40));
console.timeEnd("first");


function fibonacci2(n, first, second) {
    if(n === 0) return first;
    return fibonacci2(n - 1, second, first + second);
}

console.time("second")
console.log((fibonacci2(100, 0, 1)));
console.timeEnd("second")


// memoization.
function fibonacciDp(n, dp) {
    if(n <= 1) return n;

    if(dp[n] !== -1) return dp[n];

    return dp[n] = fibonacciDp(n - 1, dp) + fibonacciDp(n - 2, dp);
}

let n = 40;
let dp = Array(n+1).fill(-1);

console.time("third");
console.log(fibonacciDp(n, dp));
console.timeEnd("third");


// tabulation.
function fibonacciDpTabulation(n) {
    if(n <= 1) return n;
    let dp = Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.time("fourth");
console.log(fibonacciDpTabulation(40));
console.timeEnd("fourth");


// tabulation space optimized.
function fibonacciDpTabulationOptimized(n) {
    if(n <= 1) return n;
    let prev = 0;
    let next = 1;
    let temp;
    for(let i = 2; i <= n; i++) {
        temp = next;
        next = prev + next;
        prev = temp;
    }
    return next;
}

console.time("fifth");
console.log(fibonacciDpTabulationOptimized(6));
console.timeEnd("fifth");