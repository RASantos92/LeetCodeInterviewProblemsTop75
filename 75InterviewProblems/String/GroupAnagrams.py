from typing import List
class Solution:

    def isAnagram(self, s:str, t: str) -> bool:
        if len(s) != len(t): return False
        sHash,tHash = {} , {}
        for i in range(len(s)):
            sHash[s[i]] = 1 + sHash.get(s[i], 0)
            tHash[t[i]] = 1 + tHash.get(t[i],0)
        
        for key in sHash:
            if key not in tHash or sHash[key] != tHash[key]:
                return False
        return True

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        input = strs.copy()
        print(input)
        output = []
        i = len(input)-1
        while i > 0:
            currentElement = input.pop()
            i = len(input)-1
            j = i
            holding = []
            currentGroup = [currentElement]
            while j >= 0:
                print(input, j)
                nextElement = input.pop()
                if self.isAnagram(currentElement,nextElement):
                    currentGroup.append(nextElement)
                    i-1
                else:
                    holding.append(nextElement)
                j -= 1
            output.append(currentGroup)
            input = holding
        return output

s = Solution()

print(s.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))