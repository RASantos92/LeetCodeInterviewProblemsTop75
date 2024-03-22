from typing import List
class Solution:
    def candy(self, ratings: List[int]) -> int:
        candyPerHouse = [2 if ratings[0] > ratings[1] else 1]
        j = 0
        for i in range(1,len(ratings)-1):
            if ratings[i] <= ratings[i-1] and ratings[i] <= ratings[i+1] or ratings[i] <= ratings[i-1] and ratings[i] > ratings[i+1]:
                candyPerHouse.append(1)
            if ratings[i] > ratings[i-1] and ratings[i] <= ratings[i+1] or ratings[i] > ratings[i-1] and ratings[i] > ratings[i+1]:
                candyPerHouse.append(candyPerHouse[j]+1)
            j += 1
        candyPerHouse.append(1 if ratings[len(ratings)-1] <= ratings[len(ratings)-2] else candyPerHouse[j]+1)
        output = 0
        for num in candyPerHouse:
            output += num
        return output
    
s = Solution()
print(s.candy([1,3,2,2,1]))


