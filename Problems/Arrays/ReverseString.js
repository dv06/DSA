function reverseString(str) {
    if (str === null) {
        return;
    }
    var s = str.split('');
    for (var low = 0, high = s.length - 1; low < high; low++, high--) {
        var temp = s[low];
        s[low] = s[high];
        s[high] = temp;
    }
    return s.join('');
}
function reverseStringMaya(s) {
    if (s === null) {
        return;
    }
    var stringArray = s.split('');
    for (var low = 0; low < s.length / 2; low++) {
        var temp = stringArray[low];
        var high = s.length - low - 1;
        stringArray[low] = stringArray[high];
        stringArray[high] = temp;
    }
    return stringArray.join('');
}
console.log(reverseStringMaya('Hello Fron The Other Side'));
console.log(reverseStringMaya(null));
