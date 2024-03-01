from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:

        def helper( nums: List[int]) -> int:
            rob1, rob2 = 0,0

            for n in nums:
                temp = max (n+rob1, rob2)
                rob1 = rob2
                rob2 = temp
            return rob2
        return max(helper(nums[0:len(nums)-1]), helper(nums[1:len(nums)]))
    

s = Solution()
print(s.rob([2,3,2]))

print(len([2]))