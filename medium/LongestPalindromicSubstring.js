const longestPalindrome = (string, output = "", anchor = Math.floor((string.length-1) / 2)) => {
    let leftFluke = anchor-1;
    let rightFluke = anchor+1;
    if(string[leftFluke] == string[anchor]){
        const possibleOuput = string.substring(leftFluke,anchor+1)
        if(possibleOuput.length > output.length){

            output = possibleOuput;
        }
    }
    if(string[rightFluke] == string[anchor]){
        const possibleOuput = string.substring(anchor, rightFluke+1)
        if(possibleOuput.length > output.length){

            output = possibleOuput;
        }
    }
    if(anchor==0){
        string[anchor].length > output ? output = string[anchor] : null;
        return output;
    }
    while(string[leftFluke] === string[rightFluke] && leftFluke >= 0 && rightFluke < string.length){
        const possibleOuput = string.substring(leftFluke,rightFluke+1)
        if(possibleOuput.length > output.length){

            output = possibleOuput;
        }
        leftFluke--
        rightFluke++
    }
    let rightSubstring = string.substring(anchor,string.length)
    let rightOutput = longestPalindrome(rightSubstring, output, Math.floor((rightSubstring.length-1)/2))
    let leftSubstring = string.substring(0,anchor+1)
    let leftOutput = longestPalindrome(leftSubstring, output, Math.floor((leftSubstring.length-1) /2))
    return rightOutput.length > leftOutput.length ? rightOutput : leftOutput;
}

let test = "bb";
console.log(longestPalindrome(test))





function longestPalindrome(s) {
    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i); // Odd length palindrome
        let len2 = expandAroundCenter(s, i, i + 1); // Even length palindrome
        let len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1; // Length of the palindrome
}
