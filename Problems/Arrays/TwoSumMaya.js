function twoSum(nums, target) {
    var seen = {};
    for (var index = 0; index < nums.length; index++) {
        var item = nums[index];
        if (seen[target - item] !== undefined)
            return [seen[target - item], index];
        seen[item] = index;
    }
    return false;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 18));
