var hasPathSum = function(root, targetSum) {
    if (root === null) {
        return false;
    }
    // If we're at a leaf node, check if the targetSum equals the node's value
    if (root.left === null && root.right === null) {
        return targetSum === root.val;
    }
    // Recursively check the left and right subtree with the reduced targetSum
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};