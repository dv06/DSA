

function mergeSortedArrayDv(a1: number[], a2: number[]) 
{
    let a1Pointer = 0;
    let a2Pointer = 0;
    let mergedPointer = 0;
    const mergedArray: number[] = [];
    while(a1Pointer < a1.length && a2Pointer < a2.length)
    {
        if(a1[a1Pointer] < a2[a2Pointer])
        {
            mergedArray[mergedPointer++] = a1[a1Pointer++]
        }
        else
        {
            mergedArray[mergedPointer++] = a2[a2Pointer++]
        }
    }
    while(a1Pointer < a1.length)
    {
        mergedArray[mergedPointer++] = a1[a1Pointer++]
    }
    while(a2Pointer < a2.length)
    {
        mergedArray[mergedPointer++] = a2[a2Pointer++]
    }
    return mergedArray;
}

console.log(mergeSortedArrayDv([0,3,4,8],[4,6,30]));