const sell_buy_stock = (arr) => {
    let max = 0;
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            let profit = arr[j] - arr[i];
            if(max < profit) max = profit
        }
    }
    return max;
}

console.time('sell')
console.log(sell_buy_stock([7,1,5,3,6,4]))
console.timeEnd('sell')


// optimized approach
const maxProfit = (arr) => {
    let min_buy_price = Number.MAX_VALUE;
    let overall_profit = 0;

    for(let i = 0; i < arr.length; i++) {
        min_buy_price = Math.min(min_buy_price, arr[i]);
        overall_profit = Math.max(arr[i] - min_buy_price, overall_profit);
    }
    return overall_profit;
}

console.time('buy')
console.log(maxProfit([7,1,5,3,6,4]))
console.timeEnd('buy')