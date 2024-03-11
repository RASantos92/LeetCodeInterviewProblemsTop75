from typing import Optional


class ListNode:
    def __init__(self, val=0, next = None):
        self.val = val
        self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        listToArray = []
        runner = head.next
        while runner :
            listToArray.append(runner.val)
            runner = runner.next
        
        start, end = 0, len(listToArray) - 1
        runner = head.next
        switch = False
        while runner:
            if not switch:
                runner.val = listToArray[end]
                end -= 1
                switch = True
            else:
                runner.val = listToArray[start]
                start += 1
                switch = False
            runner = runner.next


