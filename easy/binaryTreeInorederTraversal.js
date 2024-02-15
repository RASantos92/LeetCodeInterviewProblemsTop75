
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const inorderTraversal = (root, current = root, output = []) => {
    if (current) {
        inorderTraversal(root, current.left, output)
        output.push(current.val)
        inorderTraversal(root, current.right, output)
    }
    return output
}