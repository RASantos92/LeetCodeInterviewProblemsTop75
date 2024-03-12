from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k : int) -> List[int]:
        frequencyTable = {}
        output = []
        for num in nums:
            frequencyTable[num] = 1 + frequencyTable.get(num, 0) 
        
        def getMaxFromTable(table):
            max = 0
            output = 0
            for key, value in frequencyTable.items():
                if value > max:
                    max = value
                    output = key
            print(table, output)
            del table[output]
            return output
        
        for i in range(k):
            output.append(getMaxFromTable(frequencyTable))
        return output




s = Solution()
s.topKFrequent([1,1,1,2,2,3], 2)