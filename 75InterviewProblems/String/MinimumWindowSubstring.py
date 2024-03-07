class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not t or len(s) < len(t):
            return ""
        needMap, haveMap = { c: 0 for c in t }, { c: 0 for c in s }
        for c in t:
            needMap[c] += 1
        res, resLen, l, need, have = "", len(s) + 1, 0, len(needMap), 0
        for r in range(len(s)):
            if s[r] in needMap:
                haveMap[s[r]] += 1
                if haveMap[s[r]] == needMap[s[r]]:
                    have += 1
            while have == need:
                if (r - l + 1) < resLen:
                    resLen, res = r - l + 1, s[l:r+1]
                if s[l] in haveMap:
                    haveMap[s[l]] -= 1
                    if s[l] in needMap and haveMap[s[l]] < needMap[s[l]]:
                        have -= 1
                l += 1
        return res

s = Solution()

print(s.minWindow("ab", "b"))