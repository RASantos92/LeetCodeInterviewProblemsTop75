// 14 minutes

var isPalindrome = function(x) {
    const inputToString = x.toString();
    for(let i = 0 , j = inputToString.length-1; i < Math.floor(inputToString.length-1 / 2); i++ , j--){
        if(inputToString[j] != inputToString[i]){
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(121))

