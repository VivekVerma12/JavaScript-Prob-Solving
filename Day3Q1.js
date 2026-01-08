// Question: Return a new array with only the even numbers squared.
// Example:
// Input: [1, 2, 3, 4]  
// Output: [4, 16]

const arr = [1, 2, 3, 4];
let even = arr.filter(num => num % 2 == 0);
console.log("arr",arr);
console.log("even",even);