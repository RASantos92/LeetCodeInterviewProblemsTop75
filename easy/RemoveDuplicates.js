const removeDuplicates = (nums) => {
    // create an anchor point that sits where the next non duplicate should go
    // we start at one. The zero index will be unique by default
    let anchorPoint = 1
    // we send j through our array.
    for(let j = 1; j<nums.length; j++){
        // here we check for our next unique item to replace our anchorPoint
        if(nums[anchorPoint] !== nums[j-1]){
            // we replace tha anchorPoint element with the element at the j index
            // then we increment out anchorPoint
            nums[anchorPoint] = nums[j];
            anchorPoint++
        }
    }
    return anchorPoint
}