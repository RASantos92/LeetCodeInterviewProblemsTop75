class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if not lists or len(lists) == 0:
            return None
        
        while len(lists) > 1:
            mergedList = []
            for i in range (0, len(lists), 2):
                l1 = lists[i]
                l2 = lists[i+1] if (i+1) < len(lists) else None

                mergedList.append(self.mergeLists(l1,l2))
                lists = mergedList
            return lists[0]
    
    def mergeLists(self, list1, list2):
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