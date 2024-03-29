// const coinChange = (coins, amount) => {
//     const dp = Array(amount + 1).fill(amount+1);
//     dp[0] = 0;

//     for(let i = 1; i <= amount; i++){
//         for( const coin of coins){
//             if((i - coin) >= 0){
//                 dp[i] = Math.min(dp[i] , dp[i - coin] + 1)
//             }
//         }
//     }
//     return dp[amount] > amount ? -1 : dp[amount];

// }



const coinChange = (coins, amount) => {
    coins.sort((a, b) => b - a);  // Sort coins in descending order
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
            if (dp[i] == 1) break; // Early stopping if we can't do better than 1 coin
        }
        if (dp[i] == amount + 1) continue; // Pruning if amount i can't be reached
    }

    return dp[amount] > amount ? -1 : dp[amount];
};