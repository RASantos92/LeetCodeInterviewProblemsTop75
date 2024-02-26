from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        nums.sort()
        walker, runner = 0,1
        output = 1
        currentSequence = 1
        while(runner < len(nums)):
            if(nums[walker] == nums[runner]):
                walker += 1
                runner += 1
                continue
            if (nums[walker] + 1) != nums[runner]:
                output = currentSequence if currentSequence > output else output
                currentSequence = 1
            else:
                currentSequence += 1
            walker += 1
            runner += 1
        return output if output > currentSequence else currentSequence