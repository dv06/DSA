function moveZeros(nums: number[]) {
    const nonZeros: number[] = [];
    const zeros: number[] = [];
    nums.forEach(num => {
        if (num === 0) zeros.push(num);
        else nonZeros.push(num);
    })
    
    return [...nonZeros, ...zeros];
}

function moveZeroesSwap(a: number[]) {
    for(let i = 0, j = 0; i < a.length; i++) {
        if(a[i] === 0) continue;
        if(i != j) {
            a[j] = a[i];
            a[i] = 0;
        }
        j++;
    }
    return a;
}

console.log(moveZeroesSwap([0,1,0,3,12]));
console.log(moveZeroesSwap([0]));