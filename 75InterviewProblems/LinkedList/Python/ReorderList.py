from typing import Optional


class ListNode:
    def __init__(self, val=0, next = None):
        self.val = val
        self.next = next

class Solution:
    #This is not in place
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


    def reorderList2(self, head: Optional[ListNode]) -> None:
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        second = slow.next
        prev = slow.next = None
        while second:
            tmp = second.next
            second.next = prev
            prev = second 
            second = tmp
        
        first,second = head, prev

        while second:
            tmp1, tmp2 = first.next, second.next
            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2


