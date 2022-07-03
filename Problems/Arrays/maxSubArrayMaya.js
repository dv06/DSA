function maxSubArray(nums) {
    var maxSum = nums[0];
    var curSum = 0;
    nums.forEach(function (num) {
        if (curSum + num > num)
            curSum += num;
        else
            curSum = num;
        if (curSum > maxSum)
            maxSum = curSum;
    });
    return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
