import math


class Solution:
    def intToRoman(self, num: int) -> str:
        romanHash = [("I",1),("IV", 4),("V", 5),("IX", 9), ("X", 10),("XL",40),("L",50),("XC", 90), ("C", 100), ("CD",400), ("D",500),("CM", 900), ("M", 1000)]
        output = ""
        for i in range(len(romanHash) -1, -1,-1):
            value = romanHash[i][1]
            numeral = romanHash[i][0]
            if num >= value:
                quantity = math.floor(num / value)
                print(value, quantity,num)
                num -= (quantity*value)
                output += (numeral * quantity)
        return output
    
s = Solution()

print(s.intToRoman(9999))