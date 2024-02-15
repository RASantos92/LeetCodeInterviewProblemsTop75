// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150

var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++){
        minPrice = Math.min(minPrice, prices[i]);
        const potentialProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
    }

    return maxProfit;
};

const testArray = [1,4,2];
console.log(maxProfit(testArray))