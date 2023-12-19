function bestTimeToBuySellStocks(arr) {
    let maxProfit = 0;
    let minBuy = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
        if(minBuy > arr[i-1]) {
            minBuy = arr[i-1];
        }
        let profit = arr[i] - minBuy;
        if(profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
}

console.log(bestTimeToBuySellStocks([2,1,4]));