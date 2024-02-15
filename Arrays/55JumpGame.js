function jump(nums) {
    let target = nums.length - 1; // The last index we want to reach
    let numberOfJumps = 0

    if(nums[0] >= target && target > 0){
        return 1;
    }
    if(target == 0){
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        console.log(i)
        maxReachInBounds = Math.min(target, i + nums[i]);
        numberOfJumps+=1;
        let j = maxReachInBounds;
        let mostOptimalJumpIndex = null;
        let longestReach = 0
        while(j>i){
            if(nums[j]+j >= target){
                console.log("here")
                return numberOfJumps += 1
            }
            if(nums[j]+j > longestReach){
                mostOptimalJumpIndex = j;
                longestReach = nums[j] +j
            }
            j--
        }
        if(mostOptimalJumpIndex == target){
            return numberOfJumps;
        }
        if(mostOptimalJumpIndex != null){
            i = mostOptimalJumpIndex - 1;
        } else{
            console.log("exit")
            return 0;
        }
    }
}


const testArray = [2,1]


console.log(canJump(testArray))

