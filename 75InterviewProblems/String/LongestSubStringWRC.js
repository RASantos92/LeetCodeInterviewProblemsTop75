const lengthOfLongestSubstring = (string) => {
    let windowStart = 0;
    let maxLength = 0;
    let charIndexMap = {};

    for(let windowEnd = 0; windowEnd < string.length; windowEnd++){
        const rightChar = string[windowEnd];

        if(rightChar in charIndexMap){
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1)
        }

        charIndexMap[rightChar] = windowEnd;
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength;
}