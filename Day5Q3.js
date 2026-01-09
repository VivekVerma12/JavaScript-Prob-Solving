
function maxOccurance(arr) {

    const freq = {};
    let maxCount = 0;
    let result = null;

    for (const val of arr) {
        freq[val] = (freq[val] || 0) + 1;
        if (freq[val] > maxCount) {
            maxCount = freq[val];
            result = val;

        }
    }
    return result;
}
console.log(maxOccurance([['a', 'b', 'c', 'a', 'b', 'a']])); 