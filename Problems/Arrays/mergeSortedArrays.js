function mergeSortedArray(a1, a2) {
    var _a, _b, _c, _d;
    var merged = [];
    var current1 = (_a = a1.shift()) !== null && _a !== void 0 ? _a : null;
    var current2 = (_b = a2.shift()) !== null && _b !== void 0 ? _b : null;
    while (current1 != null || current2 != null) {
        if (current2 === null || (current1 != null && current1 < current2)) {
            merged.push(current1);
            current1 = (_c = a1.shift()) !== null && _c !== void 0 ? _c : null;
        }
        else {
            merged.push(current2);
            current2 = (_d = a2.shift()) !== null && _d !== void 0 ? _d : null;
        }
    }
    return merged;
}
console.log(mergeSortedArray([0, 3, 4, 3], [4, 6, 30]));
