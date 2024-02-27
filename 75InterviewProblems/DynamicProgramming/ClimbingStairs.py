class Solution:
    def climbStairs(self, num: int) -> int:
        if num <= 2:
            return num
        
        ways = [1,2]

        print(ways)
        for i in range(2,num):
            ways.append(ways[i-1] + ways[i-2])
        return ways[len(ways)-1]


s = Solution()
print(s.climbStairs(4))