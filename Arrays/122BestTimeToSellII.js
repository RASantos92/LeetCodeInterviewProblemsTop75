function maxProfit(prices){
    if(prices.length < 2){
        return 0;
    }
    let totalProfit = 0
    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i-1]){
            totalProfit += prices[i] - prices[i-1];
        }
    }
    return totalProfit;
}

const testArray = [1,2,3,4,5];
console.log(maxProfit(testArray))