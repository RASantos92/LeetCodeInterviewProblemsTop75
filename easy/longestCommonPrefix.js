// const longestCommonPrefix = (strs) => {
//     const prefixHashTable = {}
//     if(strs.length == 1 && strs[0] != undefined){
//         return strs[0];
//     }
//     let count = 0;
//     for(let i = 0; i<strs.length; i++){
//         let hasPrefix = false;
//         if(strs[i] in prefixHashTable){
//             prefixHashTable[strs[i]] += 1 
//             hasPrefix = true;
//         } else{prefixHashTable[strs[i]] = 1};
//         if(strs[i].length > 1){
//             if(strs[i][0] in prefixHashTable){
//                 prefixHashTable[strs[i][0]] += 1;
//                 hasPrefix = true
//             }else{prefixHashTable[strs[i][0]] = 1};
//         }
//         for(let j = 2; j< strs[i].length ; j++){
//             if(strs[i].slice(0,j) in prefixHashTable){
//                 prefixHashTable[strs[i].slice(0,j)] += 1
//                 hasPrefix = true;
//             }else{prefixHashTable[strs[i].slice(0,j)] = 1};
//         }
//         if (hasPrefix == false && count >0){
//             return ""
//         }
//         count++;
//     }
//     console.log(prefixHashTable)
//     let output = [1,""]
//     for(key in prefixHashTable){
//         if(key.length > 0 && prefixHashTable[key] == output[0]){
//             if(key.length > output[1].length){
//                 output = [prefixHashTable[key], key]
//             }
//         }
//         if(key.length > 0 && prefixHashTable[key] > output[0]){
//                 output = [prefixHashTable[key], key]
//         }
//     }
//     return output[0] == 1 ? "" : output[1];
// }


// function findLongestCommonPrefix(strings):
// if strings is empty:
//     return ""

// # Assume the first string is the longest common prefix initially
// prefix := strings[0]

// # Iterate over each character 'i' of the first string
// for i from 0 to length of strings[0]:
//     # Check this character against the same position in all other strings
//     for j from 1 to length of strings:
//         # If the end of any string is reached, or characters don't match
//         if i is equal to the length of strings[j] or strings[0][i] != strings[j][i]:
//             # We found a mismatch, so we return the prefix up to this point
//             return prefix up to (but not including) i

// # If we managed to go through all characters of the first string without a mismatch,
// # that means the first string itself is the common prefix
// return prefix

const longestCommonPrefix = (strs)  => {
    if(strs.length == 0){
        return "";
    }
    
    prefix = strs[0];
    for(let i = 0; i<prefix.length; i++){
        for(let j = 1; j<strs.length; j++){
            if(strs[j][0] != strs[0][0])return "";
            if(i == strs[j].length || strs[0][i] != strs[j][i]){
                prefix = strs[0].slice(0,i)
            }
        }
    }
    return prefix;
}


console.log(longestCommonPrefix(["aaa","aa","aaa"]))