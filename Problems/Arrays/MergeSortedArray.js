function mergeSortedArrayDv(a1, a2) {
    var a1Pointer = 0;
    var a2Pointer = 0;
    var mergedPointer = 0;
    var mergedArray = [];
    while (a1Pointer < a1.length || a2Pointer < a2.length) {
        if (a1Pointer < a1.length && a1[a1Pointer] < a2[a2Pointer]) {
            mergedArray[mergedPointer++] = a1[a1Pointer++];
        }
        else if (a2Pointer < a2.length) {
            mergedArray[mergedPointer++] = a2[a2Pointer++];
        }
        else if (a1Pointer < a1.length) {
            mergedArray[mergedPointer++] = a1[a1Pointer++];
        }
    }
    return mergedArray;
}
console.log(mergeSortedArrayDv([0, 3, 4, 8, 9], [4, 6, 7]));
