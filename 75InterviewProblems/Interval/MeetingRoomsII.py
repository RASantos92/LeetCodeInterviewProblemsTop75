from typing import List


class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

class Solution:
    def meetingRooms2(self, meetings: List[Interval]) -> int:
        start = sorted([i.start for i in meetings])
        end = sorted([i.end for i in meetings])

        res, count = 0,0
        s,e = 0,0

        while s < len(meetings):
            if start[s] < end[e]:
                s += 1
                count += 1
            else:
                e += 1
                count -= 1
            res = max(res,count)
        return res