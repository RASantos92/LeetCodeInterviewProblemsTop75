const removeElement = (nums, val) => {
    let output = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === val || nums[i] === "_"){
            nums[i] !== "_" ? nums[i] = "_" : null;
            let iRunner = i+1;
            // get the iRunner to index to the next element that isnt val or "_";
            while(nums[iRunner] === val || nums[iRunner] === "_" ){
                iRunner++
            };
            // swap iRunner element with i element
            if(nums[iRunner] !== undefined){
                [nums[iRunner], nums[i]] = [nums[i], nums[iRunner]];
            }
            output = i;
        }
    }
    return nums.indexOf("_") === -1 ? nums.length: nums.indexOf("_");
}
const testArray = [2]
console.log(removeElement(testArray, 3))
console.log(testArray)