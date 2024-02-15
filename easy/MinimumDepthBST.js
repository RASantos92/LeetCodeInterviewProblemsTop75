const minDepth = (root) => {
    if(root){
        const leftHeight = minDepth(root.left);
        const rightHeight = minDepth(root.right);
        if(leftHeight == 1) return rightHeight;
        if(rightHeight == 1) return leftHeight;
        return Math.min(leftHeight,rightHeight);
    }
    return 0;
}