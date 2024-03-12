import re
class Solution:
    def isPalindrome(self, s:str) -> bool:
        sNoSpaces = re.sub(r'[^a-zA-Z0-9]', "", s)
        if len(sNoSpaces) == 1: return True
        start, end = 0 , len(sNoSpaces)-1
        while start < end:
            if sNoSpaces[start].lower() != sNoSpaces[end].lower():
                return False
            start += 1
            end -= 1
        return True

s = Solution()

print(s.isPalindrome("0P"))
