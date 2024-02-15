const strStr = (hayStack, needle) => {
    let hayStackIndex = 0;
    let needleIndex = 0;
    let output = 0;
    while(hayStackIndex < hayStack.length){
        if(hayStack[hayStackIndex] === needle[needleIndex]){
            output = hayStackIndex;
            while(hayStack[hayStackIndex] === needle[needleIndex] && needleIndex < needle.length){
                hayStackIndex++
                needleIndex++
            }
            if(needleIndex === needle.length){
                return output;
            } else {
                hayStackIndex = output + 1
                needleIndex = 0;
            }
        }else{
            hayStackIndex++
        }
    }
    return -1
}

const haystack = "mississippi", needle = "issip"

console.log(strStr(haystack,needle))