var plusOne = function(digits) {
    const digitsToString = digits.join("");
    console.log("string", digitsToString)
    let digitsToInt = BigInt(digitsToString);
    console.log("int" ,digitsToInt)
    digitsToInt++
    console.log("incrementation", digitsToInt)
    const digitsBackToString = digitsToInt.toString();
    console.log("back to string", digitsBackToString)
    return digitsBackToString.split("");
};


console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))