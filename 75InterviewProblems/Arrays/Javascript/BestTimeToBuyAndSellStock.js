const maxProfit = (prices) => {
    let min = prices[0];
    let maxProfit = 0
    for(let i = 1; i<prices.length; i++){
        let profit;
        if(min > prices[i]){
            min = prices[i];
            continue;
        }
        profit = prices[i] - min;
        maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]))