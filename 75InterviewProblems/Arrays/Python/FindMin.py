class Solution:
    def findMin(self, nums: List[int]) -> int:
        l = 0
        while l < len(nums) - 1:
            if nums[l] < nums[l+1]:
                l += 1
            else:
                return nums[l+1]
        return nums[0]
        