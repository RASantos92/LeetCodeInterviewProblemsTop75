class Solution:
    def search(self, nums: List[int], target: int) -> int:
        for n in nums:
            if nums[n] == target:
                return n
        return -1