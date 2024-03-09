# Given an array of meeting time intervals consisting of start and end times `[[s1,e1][s2,e2],...] (si<ei)` determine if a person could attend all meetings.


from typing import List


class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

class Solution:
    def can_attend_meetings(self, meetings: List[Interval])-> bool:
        meetings.sort(key = lambda i : i.start)
        prevMeetingEnd = meetings[0].end
        for i in range(1, len(meetings)):
            if prevMeetingEnd > i.start:
                return False
            else:
                prevMeetingEnd = i.end
        return True