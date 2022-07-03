function twoSumDv(nums: number[], target)
{
    const map = {};
    const result: number[] = [];
    for(let i= 0; i< nums.length; i++)
    {
        if(map[nums[i]] !== undefined)
        {
            result[0] = i;
            result[1] = map[nums[i]]; 
            return result;
        }
        map[target-nums[i]] = i;
    }
}

console.log(twoSumDv([2,7,11,15], 9));
console.log(twoSumDv([3,2,4,4], 8));
console.log(twoSumDv([21,7,6,35,11,215], 18));
