// 45 minutes
// var twoSum = function(nums, target) {
//     for(let i = 0; i<nums.length; i++){
//         for(let j = i+1; j<nums.length; j++){
//             if((nums[i] + nums[j]) == target){
//                 return [i,j]
//             }
//         }
//     }
// };

const twoSum = (nums, target) => {
    const hashTable = {};
    let compliment;
    for(let i = 0; i<nums.length; i++){
        compliment = target - nums[i];
        if(compliment in hashTable){
            return [hashTable[compliment], i]
        }
        hashTable[nums[i]] = i;
    }
}
const testArray = [2,7,11,15]
console.log(twoSum(testArray,9))
