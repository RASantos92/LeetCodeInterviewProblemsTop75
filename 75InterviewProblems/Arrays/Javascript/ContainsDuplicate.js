var containsDuplicate = function(nums) {
    const checkList = {}
    for(let i = 0; i<nums.length;i++){
        if(!checkList[nums[i]]){
            checkList[nums[i]] = true;
            continue;
        }
        return true;
        
    }
    return false
};