class Solution:
    def isValid(self, s:str) -> bool:
        open = {
            "(":")",
            "{":"}",
            "[":"]"
        }
        close = {
            ")":"(",
            "]":"{",
            "}":"["
        }
        if len(s) < 2 or s[0] in close:
            return False
        openSequence = []
        for cha in s:
            if cha in open:
                openSequence.append(cha)
                continue
            if cha in close:
                if len(openSequence) == 0:
                    return False
                lastOpen = openSequence.pop()
                if open[lastOpen] != cha:
                    return False
        return True if len(openSequence) == 0 else False
s = Solution()
print(s.isValid("()]"))