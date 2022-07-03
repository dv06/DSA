function twoSum(nums: number[], target: number) {
    const seen: {[seenItem: number]: number} = {};

    for(let index = 0; index < nums.length; index++) {
        const item = nums[index];
        if (seen[item] !== undefined) return [seen[item], index];
        seen[target-item] = index;
    }

    return false;
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([2,7,11,15], 18));
