const isSameTree = (p,q,currentp = p, currentq = q, output = true) => {
    if(currentp && currentq && output){
        isSameTree(p,q,currentp.left, currentq.left, output)
        if(currentp.val !== currentq.val){
            output = false;
        }
        isSameTree(p,q,currentp.right, currentq.right,output)
    }
    return output
}



const isSameTree1 = (p, q) => {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};