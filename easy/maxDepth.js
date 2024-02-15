const maxDepth = (root, count = 0) => {
    if(root){
        count++
        return Math.max(maxDepth(root.left, count), maxDepth(root.right, count))
    }
    return count
}


const maxDepth2 = (root) => {
    if(root){
        return Math.max(maxDepth(root.left, count), maxDepth(root.right, count))+1
    }
    return 0
}