const productExceptSelf = (nums) => {
    let length = nums.length;
    let output = Array(length).fill(1);

    for(let i = 1; i < length; i++){
        output[i] = nums[i-1] * output[i-1];
    }

    let rightProduct = 1;
    for(let i = length-1; i >= 0; i--){
        output[i] = output[i] * rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}


// https://www.youtube.com/watch?v=bNvIQI2wAjk