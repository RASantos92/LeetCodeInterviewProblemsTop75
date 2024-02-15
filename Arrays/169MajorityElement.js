const majorityElement = (nums) => {
    nums.push({});
    const frequencyReferance = nums[nums.length-1];
    for(let i = 0; i < nums.length -1 ; i++){
        if(!frequencyReferance[nums[i]]){
            frequencyReferance[nums[i]] = 1;
        } else {
            frequencyReferance[nums[i]] = frequencyReferance[nums[i]] + 1
        }
    }

    for(const key in frequencyReferance){
        if(frequencyReferance[key]>Math.floor(nums.length / 2) || frequencyReferance[key]> Math.floor(nums.length / 2) -1){
            console.log("here")
            nums.pop();
            return key;
        }
    }
}

const testArray = [2,2,1,1,1,2,2]
console.log(majorityElement(testArray));
console.log(testArray)