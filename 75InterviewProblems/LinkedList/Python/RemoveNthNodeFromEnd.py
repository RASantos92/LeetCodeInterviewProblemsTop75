from typing import Optional
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Soltuion:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        size = 0
        runner = head
        while runner:
            size += 1
            runner = runner.next
        runner = head
        nodeBefore = None
        size -= n
        if size == 0:
            head = head.next
            return head
        while size > 0:
            nodeBefore = runner
            runner = runner.next
        nodeBefore = runner.next
        runner.next = None
        return head
        