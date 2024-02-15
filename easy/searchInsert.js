const searchInsert = (nums, target, mid = Math.floor(nums.length - 1 / 2)) => {
    console.log(nums[mid])
    if (nums[mid] === target) {
        return mid;
    }
    if (mid === 0 && target < nums[mid]) {
        return 0
    }
    if (mid === nums.length - 1 && target > nums[mid]) {
        return nums.length
    }
    if (nums[mid] < target) {
        if (target < nums[mid + 1]) {
            return mid + 1
        }
        return searchInsert(nums, target, Math.floor((mid + 1 + nums.length) / 2))
    }
    if (nums[mid] > target) {
        if (target > nums[mid - 1]) {
            return mid
        }
        return searchInsert(nums, target, Math.floor(mid - 1 / 2))
    }
}


function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // At this point, 'left' is the position where the target should be inserted.
    return left;
}

const testArray = [1, 3, 4, 7, 8]
console.log(searchInsert(testArray, 0))