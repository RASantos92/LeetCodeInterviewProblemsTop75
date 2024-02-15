const isPalindrome = (s) => {
    let output = testing.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let end = output.length -1;
    let start = 0
    while(start < end){
        console.log(start, end, output.length)
        if(output[start].toLowerCase() !== output[end].toLowerCase()) return false
        start++
        end--
    }
    return true;
}

let testString = "A man, a plan, a canal: Panama"
console.log(isPalindrome(testString))