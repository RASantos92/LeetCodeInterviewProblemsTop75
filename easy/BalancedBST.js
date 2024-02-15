const isBalanced = (root) => {
    if(root){
        const balanceValue = (isBalanced(root.left)+1) - (isBalanced(root.right)+1)
        console.log(balanceValue)
        if(balanceValue>=2 || balanceValue<=-2){
            return false
        }
        return true;
    }
    return 0
}