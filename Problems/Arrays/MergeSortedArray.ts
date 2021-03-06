

function mergeSortedArrayDv(a1: number[], a2: number[]) 
{
    let a1Pointer = 0;
    let a2Pointer = 0;
    let mergedPointer = 0;
    const mergedArray: number[] = [];
    while(a1Pointer < a1.length || a2Pointer < a2.length)
    {
        if(a2Pointer >= a2.length || a1[a1Pointer] < a2[a2Pointer])
        {
            mergedArray[mergedPointer++] = a1[a1Pointer++]
        }
        else
        {
            mergedArray[mergedPointer++] = a2[a2Pointer++]
        }
    }
    return mergedArray;
}

console.log(mergeSortedArrayDv([0,3,4,8],[0,6,30]));