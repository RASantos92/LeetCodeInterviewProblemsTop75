function getSum(a, b) {
    // Continue iterating until there is no carry
    while (b !== 0) {
        // Carry now contains common set bits of a and b
        let carry = a & b;
        console.log(carry)

        // Sum of bits of a and b where at least one of the bits is not set
        a = a ^ b;
        console.log(a)

        // Carry is shifted by one so that adding it to a gives the required sum
        b = carry << 1;
    }
    // When b becomes 0, a contains the sum
    return a;
}


console.log(getSum(1,2))


// https://leetcode.com/problems/sum-of-two-integers/submissions/1173407357/

// Add without carrying: Use XOR (^) to add the two numbers without carrying any overflows. For example, 1 ^ 2 will be 3, because in binary it's 01 ^ 10, which results in 11 (or 3 in decimal).

// Carry without adding: Use AND (&) and left-shift (<<) to calculate the carry. For example, 1 & 2 would be 0, but 2 & 3 would be 2 (in binary 10 & 11 is 10). Then, shift this to the left by one to simulate the carry effect.

// Iterate: Repeat these steps until there is nothing left to carry. In each iteration, the first number becomes the result of step 1, and the second number becomes the result of step 2 from the previous iteration.

// Handle negative numbers: In JavaScript, bitwise operations only work with 32-bit integers. If you want to handle negative numbers correctly, you'll have to take care of the sign bit manually or ensure the result is interpreted as a 32-bit integer.