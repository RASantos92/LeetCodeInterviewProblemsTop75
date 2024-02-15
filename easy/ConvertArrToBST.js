


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


function sortedArrayToBST(nums) {
    if (!nums.length) return null;

    // Recursive function to convert array to BST
    function convertListToBST(left, right) {
        // Base case
        if (left > right) return null;

        // Find the middle element and make it root
        let mid = Math.floor((left + right) / 2);
        let node = new TreeNode(nums[mid]);

        // Recursively construct the left subtree and make it left child of root
        node.left = convertListToBST(left, mid - 1);
        // Recursively construct the right subtree and make it right child of root
        node.right = convertListToBST(mid + 1, right);

        return node;
    }

    return convertListToBST(0, nums.length - 1);
}
