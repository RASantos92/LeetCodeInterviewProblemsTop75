const getRandomInt = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const mySqrt = (x) => {
    if(x === 0 || x === 1) return x
    if(x===2) return 1
    let possibleValue = getRandomInt(0,Math.floor(x/2));
    let minVisited = 0;
    let maxVisited = Math.floor(x/2)+1;
    for(let i = 0; i<x; i++){
        if((possibleValue * possibleValue) == x){
            return possibleValue;
        }
        if((possibleValue * possibleValue) < x){
            if(((possibleValue+1) * (possibleValue+1) > x)){
                return possibleValue;
            }
            minVisited = possibleValue;
            possibleValue = getRandomInt(minVisited, maxVisited)
            continue;
        }
        if((possibleValue * possibleValue) > x){
            if(((possibleValue-1) * (possibleValue-1) < x)){
                return possibleValue-1;
            }
            maxVisited = possibleValue
            possibleValue = getRandomInt(minVisited, maxVisited)
            continue;
        }
    }
}

console.log("output",mySqrt(256))

console.log(getRandomInt(0,1))



var mySqrt1 = function(x) {
    if(x < 2) return x

    let left = 1, right = Math.floor(x / 2)

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(mid * mid <= x && x < (mid +1)*(mid + 1)) {
            return mid
        } else if(mid * mid > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
}