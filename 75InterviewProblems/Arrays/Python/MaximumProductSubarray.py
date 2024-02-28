class Solution(object):
    def maxProduct(self,nums):
        output = max(nums)
        curMax, curMin = 1,1
        for num in nums:
            if num == 0:
                curMax, curMin = 1,1
                continue
            temp = curMax * num
            curMax = max(num * curMax, num * curMin, num)
            curMin = min(temp, num * curMin, num)
            output = max(output,curMax)
        return output




test = Solution()

print(test.maxProduct([-3,0,1,-2]))
