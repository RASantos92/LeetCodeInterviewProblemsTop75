from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = [nums[0]]
        postfix = [nums[len(nums)-1]]
        for i in range(1,len(nums)):
            prefix.append(prefix[i-1] * nums[i])
        nums.reverse()
        for i in range(1, len(nums)):
            postfix.append(postfix[i-1] * nums[i])
        postfix.reverse()
        output = [postfix[1]]
        for i in range(1,len(nums)-1):
            prefixNum = prefix[i-1] 
            postfixNum = postfix[i+1]
            output.append(prefixNum*postfixNum)
        output.append(prefix[len(prefix)-2])
        return output

s = Solution()
s.productExceptSelf([1,2,3,4])