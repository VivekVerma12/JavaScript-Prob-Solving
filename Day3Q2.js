// Question: Reverse the digits of each number in an array.
// Example:
// Input: [123, 45, 67]  
// Output: [321, 54, 76] 
// .push() → end me add karta hai.
// .unshift() → start me add karta hai.

const arr = [123, 45, 67];
let revarr = arr.map(ReverseNumber)

function ReverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log("arr", arr);
console.log("revarr", revarr);
