const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if((nums[i] + nums[j]) == target) return [i,j]
        }
    }
}


console.log(twoSum([3,2,4],6))


const twoSum1 = (nums, target) => {
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


console.log(-8+-2)