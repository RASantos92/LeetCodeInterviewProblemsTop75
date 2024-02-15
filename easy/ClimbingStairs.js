function climbStairs(n) {
    // Base cases
    if (n <= 2) return n;

    // This array will store the number of ways to reach each step
    let ways = [];
    ways[1] = 1; // There is 1 way to reach the first step
    ways[2] = 2; // There are 2 ways to reach the second step

    // Fill the array using the relation ways[i] = ways[i-1] + ways[i-2]
    for (let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    // The nth entry in ways array will have the number of ways to reach the nth step
    return ways[n];
}

// https://leetcode.com/problems/climbing-stairs/