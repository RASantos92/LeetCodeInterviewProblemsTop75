from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummyNode = ListNode(-1)
        output = dummyNode
        while list1 != None and list2 != None:
            if list2.val <= list1.val:
                dummyNode.next = list2
                list2 = list2.next
            else:
                dummyNode.next = list1
                list1 = list1.next
            dummyNode = dummyNode.next
        if list1 != None:
            dummyNode.next = list1
        if list2 != None:
            dummyNode.next = list2
        return output.next