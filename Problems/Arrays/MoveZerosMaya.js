var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function moveZeros(nums) {
    var nonZeros = [];
    var zeros = [];
    nums.forEach(function (num) {
        if (num === 0)
            zeros.push(num);
        else
            nonZeros.push(num);
    });
    return __spreadArray(__spreadArray([], nonZeros, true), zeros, true);
}
function moveZeroesSwap(a) {
    for (var i = 0, j = 0; i < a.length; i++) {
        if (a[i] === 0)
            continue;
        if (i != j) {
            a[j] = a[i];
            a[i] = 0;
        }
        j++;
    }
    return a;
}
console.log(moveZeroesSwap([0, 1, 0, 3, 12]));
console.log(moveZeroesSwap([0]));
