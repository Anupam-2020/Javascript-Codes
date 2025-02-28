var maxSubarraySum = function(nums) {
    let max_sum = Number.MIN_SAFE_INTEGER;
    let l = 0;
    let r = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum+=nums[j];
            if(max_sum < sum) {
                max_sum = sum;
                l = i;
                r = j;
            }
        }
    }
    for(let i = l; i <= r; i++) {
        console.log(nums[i]);
    }

    console.log(max_sum);
}

// maxSubarraySum([-1]);


var pairWithMaxSum = function(arr, N)
{
    // Your code goes here
    let maxSum = 0;
    for(let i = 0; i < N - 1; i++) {
        let min = arr[i];
        let max = arr[i];
        for(let j = i+1; j < N; j++) {
            if(min > arr[j]) {
                min = arr[j];
            }
            
            if(max < arr[j]) {
                max = arr[j];
            }
            
            let sum = min + max;
            if(sum > maxSum) maxSum = sum;
        }
        
    }
    console.log(maxSum);
    // return maxSum;
}

// pairWithMaxSum([7,5,1], 3);


var buyAndSellStock = function(prices) {
    let maxProfit = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < min) min = prices[i];

        let profit = prices[i] - min;
        if(profit > maxProfit) maxProfit = profit;
    }

    return maxProfit;
}

console.log(buyAndSellStock([7,1,5,3,6,4]));

