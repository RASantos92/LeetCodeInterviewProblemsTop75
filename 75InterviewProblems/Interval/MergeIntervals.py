from ast import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        output = [[intervals[0][0], intervals[0][1]]]
        overlapping = False
        outputIntervalIndex = 0
        for i in range(1,len(intervals)):
            interval = intervals[i]
            outputInterval = output[outputIntervalIndex]
            currentIntervalStart = interval[0]
            currentIntervalEnd = interval[1]
            # does it overlap?
            overlapping = True if currentIntervalStart <= outputInterval[1] else False

            if overlapping:
                outputInterval[1] = max(outputInterval[1], currentIntervalEnd)
                outputInterval[0] = min(outputInterval[0], currentIntervalStart)
            else:
                output.append(interval)
                outputIntervalIndex + 1
        return output

    def merge2(self, intervals: List[List[int]]) -> List[List[int]]:
            if not intervals:
                return []
            
            # Sort the intervals based on the start of each interval
            intervals.sort(key=lambda x: x[0])
            
            output = [intervals[0]]
            
            for i in range(1, len(intervals)):
                # Get the last interval from output to compare with the current interval
                lastInterval = output[-1]
                currentInterval = intervals[i]
                
                # If the current interval overlaps with the last interval in output, merge them
                if currentInterval[0] <= lastInterval[1]:
                    lastInterval[1] = max(lastInterval[1], currentInterval[1])
                else:
                    output.append(currentInterval)
            
            return output