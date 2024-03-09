from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class TwoStackQueue:
    def __init__(self):
        self.stack1 = []
        self.stack2 = []
    
    def enqueue(self, node: Optional[TreeNode]):
        if not node:
            return
        self.stack1.append(node)
    
    def dequeue(self) -> TreeNode:
        if len(self.stack2) == 0:
            while len(self.stack1) > 0:
                self.stack2.append(self.stack1.pop())
        return self.stack2.pop()
    
    def checkStack2Empty(self)-> bool:
        return len(self.stack2) == 0

    def size(self)->int:
        return len(self.stack1) + len(self.stack2)

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        output = []
        currentLevel = []
        twoStackQueue = TwoStackQueue()
        twoStackQueue.enqueue(root)

        while twoStackQueue.size() > 0:
            currentNode = twoStackQueue.dequeue()
            twoStackQueue.enqueue(currentNode.left)
            twoStackQueue.enqueue(currentNode.right)
            currentLevel.append(currentNode.val)
            if twoStackQueue.checkStack2Empty():
                output.append(currentNode)
                currentLevel = []
        return output
