from typing import Optional, List

class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
class Codec:
    def serialize(self,root):
        res = []
        def dfsPreOrder(root: Optional[TreeNode]):
            if not root:
                return res.append("N")
            res.append(str(root.val))
            dfsPreOrder(root.left)
            dfsPreOrder(root.right)
        dfsPreOrder(root)
        return ",".join(res)


    def deserialize(self,data):
        vals = data.split(",")
        self.i = 0

        def dfs():
            if vals[self.i] == "N":
                self.i += 1
                return None
            node = TreeNode(int(vals[self.i]))
            self.i += 1
            node.left = dfs()
            node.right = dfs()
            return node
        return dfs()


