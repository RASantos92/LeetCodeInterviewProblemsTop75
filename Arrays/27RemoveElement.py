from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        if len(nums) == 1 and nums[0] == val or len(nums) == 0:
            return 0
        length = len(nums) -1
        i = 0
        while i <= length:
            if nums[i] == val:
                nums[i] = "_"
                [nums[i], nums[length]] = [nums[length], nums[i]]
                length -= 1
                i -= 1
            i += 1
        return i if nums[0] != "_" else 0
    
    def removeElementBetter(self, nums:List[int], val: int) -> int:

        i = 0

        for v in nums:
            if v != val:
                nums[i] = v
                i += 1

        return i


s = Solution()
test = []
print(s.removeElement(test,3))

print(test)