
from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordSet = set()
        check = 0
        for word in wordDict:
            wordSet.add(word)
        i = 0
        for j in range(1,len(s)+1):
            window = s[i:j]
            print(window)
            if window in wordSet:
                check = j
                i = j
        print(check)
        return True if check == len(s) else False
    


# https://www.youtube.com/watch?v=Sx9NNgInc3A
    def wordBreak(self, s:str, wordDict: List[str]) -> bool:
        dp = [False] * (len(s) + 1)
        dp[len(s)] = True

        for i in range(len(s) -1, -1, -1):
            for w in wordDict:
                if(i + len(w)) <= len(s) and s[i : i + len(w)] == w:
                    dp[i] = dp[i + len(w)]
                if dp[i]:
                    break
        return dp[0]




s = Solution()
print(s.wordBreak("leetcode",["leet","code"]))