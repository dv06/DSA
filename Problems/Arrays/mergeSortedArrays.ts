function mergeSortedArray(a1: number[], a2: number[]) {
    const merged: number[] = [];
    let current1 = a1.shift() ?? null;
    let current2 = a2.shift() ?? null;
    while(current1 != null || current2 != null) {
        if (current2 === null || (current1 != null && current1 < current2)) {
            merged.push(current1 as number);
            current1 = a1.shift() ?? null;
        } else { 
            merged.push(current2 as number);
            current2 = a2.shift() ?? null;
        }
    }
    return merged;
}

console.log(mergeSortedArray([0,3,4,3],[4,6,30]));