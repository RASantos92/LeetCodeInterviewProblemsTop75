from collections import defaultdict
from typing import List
class Solution:

    def isAnagram(self, s:str, t: str) -> bool:
        if len(s) != len(t): return False
        sHash,tHash = {} , {}
        for i in range(len(s)):
            sHash[s[i]] = 1 + sHash.get(s[i],0)
            tHash[t[i]] = 1 + tHash.get(t[i],0)
        
        for key in sHash:
            if key not in tHash or sHash[key] != tHash[key]:
                return False
        return True

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        if len(strs) == 1:
            return [[strs[0]]]
        input = strs.copy()
        output = []
        i = len(input)-1
        while len(input)> 0:
            currentElement = input.pop()
            holding = []
            currentGroup = [currentElement]
            while len(input)> 0:
                nextElement = input.pop()
                if self.isAnagram(currentElement,nextElement):
                    currentGroup.append(nextElement)
                else:
                    holding.append(nextElement)
            output.append(currentGroup)
            input = holding
        return output


class Solution2:
    def groupAnagrams(self, strs: List[str]) -> List[str]:
        res = defaultdict(list)
        
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord("a")] += 1

            res[tuple(count)].append(s)
        return res.values()