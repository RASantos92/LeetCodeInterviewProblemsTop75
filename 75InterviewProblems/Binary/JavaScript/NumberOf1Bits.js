const hammingWeight = (n) => {
    let res = 0;
    const mask = 1;
    while(n){
        if((n & mask) !== 0){
            res++
        }
        n >>>=  1;
    }
    return res
}