// var rotate = function(nums, k) {
//     const queue = {};
//     for(let i = 0; i<nums.length; i++){
//         if(k>nums.length-1){
//             k = (k%nums.length) + i;
//             console.log(k);
//         }                 
//         queue[k] = nums[k];
//         if(queue[i]===undefined){
//             nums[k]= nums[i];
//         }else{
//             nums[k] = queue[i]
//             delete queue[i];
//         }
//         // queue[i] === undefined ? nums[k] = nums[i] : nums[k] = queue[i];
//         (k+1) === nums.length ? k=0 : k++;
//     }
// };

var rotate = function(nums, k) {
    const n = nums.length;
    k %= n;

    reverse(nums, 0, n - 1); // Reverse the entire array
    console.log("reverse the entire array",nums)
    reverse(nums, 0, k - 1); // Reverse the first part up to k
    console.log("reverse the first part up to k", nums)
    reverse(nums, k, n - 1); // Reverse the remaining part after k
    console.log("reverse the remaining part after k",nums)

};

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}


let testArray = "testing";
testArray = testArray.split()
console.log(testArray)
rotate(testArray, 16);
console.log(testArray)



