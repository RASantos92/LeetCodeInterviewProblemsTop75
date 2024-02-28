from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        length = len(height) - 1
        left = 0
        right = len(height) - 1
        maxArea = min(height[left], height[right]) * length 

        while left < right:
            currentArea = min(height[left], height[right]) * length
            print(height[left], height[right])
            maxArea = currentArea if currentArea >= maxArea else maxArea

            if height[left] < height[right]:
                left +=1
            else:
                right-= 1
            length -= 1
        return maxArea

s = Solution()

print(s.maxArea([1,2,4,3]))

