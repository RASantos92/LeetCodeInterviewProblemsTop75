from typing import List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 1
        right = len(numbers) -1

        while numbers[right] >= target:
            right -= 1
        while left < right:
            currentTotal = (numbers[left] + numbers[right])
            if currentTotal == target:
                return [left,right]
            if currentTotal > target:
                right-= 1 
                continue
            if currentTotal < target:
                left += 1
