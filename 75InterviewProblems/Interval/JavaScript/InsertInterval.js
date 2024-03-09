// const insert = (intervals, newInterval) => {
//     const newIntervalStart = newInterval[0];
//     const newIntervalEnd = newInterval[1];
//     let startingIntervalIndex = null;
//     let endingIntervalIndex = null;
//     if(intervals.length == 0){
//         intervals.push(newInterval);
//         return intervals;
//     }
//     for(let i = 0; i<intervals.length; i++){
//         const currentIntervalStart = intervals[i][0];
//         const currentIntervalEnd = intervals[i][1];
//         if(!startingIntervalIndex){
//             if(currentIntervalStart <= newIntervalStart && currentIntervalEnd >= newIntervalStart){
//                 startingIntervalIndex = i;
//             }
//         }
//         if(!endingIntervalIndex){
//             if(currentIntervalStart <= newIntervalEnd && currentIntervalEnd >= newIntervalEnd){
//                 endingIntervalIndex = i;
//             }
//         }
//         if(startingIntervalIndex && endingIntervalIndex) break;
//     }
//     console.log(endingIntervalIndex)
//     if(startingIntervalIndex === null && endingIntervalIndex !== null){
//         intervals[endingIntervalIndex][0] = newIntervalStart
//         return intervals
//     }
//     if(startingIntervalIndex === null){
//         if(intervals[0][0] > newIntervalStart){
//             intervals.unshift(newInterval);
//         }else{
//             intervals.push(newInterval);
//         }
//         return intervals
//     }
//     if(endingIntervalIndex === null){
//         console.log("here")
//         intervals[startingIntervalIndex][1] = newIntervalEnd;
//         return intervals
//     }
//     if(startingIntervalIndex !== endingIntervalIndex){
//         intervals[startingIntervalIndex][1] = intervals[endingIntervalIndex][1]
//         intervals.splice(startingIntervalIndex+1, endingIntervalIndex-1)
//         return intervals;
//     }
//     return intervals;
// }




const insert = (intervals, newInterval) => {
    const output = [];
    console.log(intervals)
    for(const interval of intervals) {
        console.log(interval)
        if(interval[1] < newInterval[0]){
            output.push(interval);
        } else if(interval[0] > newInterval[1]){
            output.push(newInterval);
            newInterval = interval;
        } else{
            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        }
    }
    output.push(newInterval);
    return output
    
}
console.log(insert([[1,5]],[2,3]))




const testIntervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
for(const interval of testIntervals){
    console.log(interval)
}