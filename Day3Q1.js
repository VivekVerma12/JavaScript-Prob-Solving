
// Reverse array without using built-in reverse method
function reverseArray(arr){
    let revArr = [];
    for (let i = arr.length - 1; i >=0 ; i--){
        revArr.push(arr[i]);
    }
    return revArr;
}
console.log(reverseArray([1,2,3,4,5]));