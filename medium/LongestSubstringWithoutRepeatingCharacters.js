const lengthOfLongestSubstring = (string) => {
    frequencyTable = {};
    let i = 0;
    let output = 0;
    while (i < string.length) {
        frequencyTable[string[i]] = 1;
        let j = i + 1;
        while ((string[j] in frequencyTable) == false && j < string.length) {
            frequencyTable[string[j]] = 1;
            j++
        }
        if (j - i > output) {
            output = j - i
        }
        i++
        frequencyTable = {};
    }
    return output;
}





const lengthOfLongestSubstring2 = (s) => {
    let windowStart = 0;
    let maxLength = 0;
    let charIndexMap = {};

    // Try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const rightChar = s[windowEnd];
        // If the map already contains the 'rightChar', shrink the window from the beginning so that
        // we have only one occurrence of 'rightChar'
        if (rightChar in charIndexMap) {
            // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
            // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        // Insert the 'rightChar' into the map
        charIndexMap[rightChar] = windowEnd;
        // Remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
};

// Example usage:
const testInput = "pwwkew";
console.log(lengthOfLongestSubstring(testInput)); 