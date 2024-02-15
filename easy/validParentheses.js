// const isValid = (string) => {
//     const checkOpenHashMap = {
//         '(' : {
//             compliment : ')',
//             open : 0
//         },
//         '{' : {
//             compliment : '}',
//             open : 0
//         },
//         '[' : {
//             compliment : ']',
//             open : 0
//         }
//     }
//     const setClosedHashMap = {
//         ')' : '(',
//         '}' : '{',
//         ']' : '[',
//         nextClosing : []
//     } 
//     for(let i = 0; i<string.length; i++){
//         if(string[i] in checkOpenHashMap){
//             checkOpenHashMap[string[i]].open += 1;
//             setClosedHashMap.nextClosing.push(checkOpenHashMap[string[i]].compliment)
//         }
//         else if(string[i] in setClosedHashMap && setClosedHashMap.nextClosing[setClosedHashMap.nextClosing.length-1] == string[i]){
//             checkOpenHashMap[setClosedHashMap[string[i]]].open -= 1;
//             setClosedHashMap.nextClosing.pop();
//         } else {return false}
//     }
//     for(key in checkOpenHashMap){
//         if(checkOpenHashMap[key].open != 0){
//             console.log("here")
//             return false
//         }
//     }
//     return true;
// }

// console.log(isValid("{[]}"))


// const testArray = [1,2,3]
// console.log(testArray.pop())
// console.log(testArray)


const isValid = (string) => {
    console.log(string.length)
    if(string.length <= 1){
        return false;
    }
    const hashMap = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    const stack = []
    for(let i = 0; i<string.length; i++){
        if(string[i] in hashMap){
            stack.push(hashMap[string[i]]);
        } else {
            const expectedCloser = stack.pop();
            if(expectedCloser != string[i]){
                return false;
            }
        }
    }
    return stack.length == 0 ? true : false;
}

console.log(isValid("["))