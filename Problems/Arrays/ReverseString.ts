
function reverseString(str: string)
{
    if(str === null)
    {
        return;
    }
    let s = str.split('');
    for(let low = 0, high = s.length-1; low<high; low++, high--)
    {
        let temp = s[low];
        s[low] = s[high];
        s[high] = temp;
    }
    return s.join('');
}

function reverseStringMaya(s: string)
{
    if(s === null)
    {
        return;
    }
    const stringArray = s.split('');
    for(let low = 0; low < s.length/2; low++) {
        const temp = stringArray[low];
        const high = s.length - low - 1;
        stringArray[low] = stringArray[high];
        stringArray[high] = temp;
    }

    return stringArray.join('');
}
console.log(reverseString('Hello Fron The Other Side'));
console.log(reverseString(null));
console.log(reverseStringMaya('Hello Fron The Other Side'));
console.log(reverseStringMaya(null));
