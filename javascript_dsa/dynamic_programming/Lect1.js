// function fibonacci(start, end, num) {
//     if(num === 0) return start;
//     return fibonacci(end, end+start, num-1);
// }

// console.log(fibonacci(0, 1, 6));

function fibonacci(num, dp) {
    if(num <= 1) return num;
    if(dp[num] !== -1) return dp[num];
    return dp[num] = fibonacci(num-1, dp) + fibonacci(num-2, dp);
}

let arr = new Array(7).fill(-1);
console.log(fibonacci(6, arr));