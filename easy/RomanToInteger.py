class Solution:
    def romanToInt(self, s:str) -> int:
        romanHash = {
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000
        }   
        output = 0
        i = 0
        while i < len(s):
            position1 = s[i]
            position2 = None if i == (len(s) - 1) else s[i+1]
            if position2 and romanHash[position1] < romanHash[position2]:
                output += romanHash[position2] - romanHash[position1]
                i += 1
            else:
                output += romanHash[position1]
            i+=1
        return output


s = Solution()

print(s.romanToInt("MCMXCIV"))