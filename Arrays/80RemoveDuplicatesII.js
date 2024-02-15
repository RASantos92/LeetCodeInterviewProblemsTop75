const removeDuplicates = (nums) => {
    let forwardIndex = 1;
    let count = 1;
    let indexOfResult = null;
    for(let i = 0; i < nums.length; i++){
        if(i === nums.length - 1 ? false : nums[i] == nums[forwardIndex] ){
            while(nums[forwardIndex] === nums[i]){
                count++
                if(count > 2){
                    console.log("here")
                    indexOfResult == null ? indexOfResult = forwardIndex : null;
                    nums[forwardIndex] = "_";
                    nums[indexOfResult] = nums[indexOfResult] === "_" ? nums[indexOfResult] = 1: nums[indexOfResult] + 1;
                    console.log(nums)
                }
                forwardIndex++
            }
            i = (forwardIndex - 1);
            forwardIndex++
            count = 1;
        } else {
            forwardIndex++
        }
    }
    return nums.length - nums[indexOfResult] 
}


const removeDuplicates2 = (nums) => {
    let i = 1;
    let count = 1;
    for(let j = 1 ; j < nums.length; j++){
        if(nums[j-1] != nums[j]){
            if(count === 2){
                i = j
                count = 1;
                continue;
            }
            nums[i] = nums[j];
            i++;
            count = 0;
        }
        count++
        if(nums[j] == nums[i-1] && count == 2 && i !== 1){
            nums[i] = nums[j];
            count++
            i++
            continue;
        }
        if(count == 3){
            i = j;
        }
    }
    return i;
}

let testArray2 = [1,1,1,2,2,3]
let testArray = [0,0,1,1,1,1,2,3,3];

console.log(removeDuplicates2(testArray2));

console.log(testArray2);

