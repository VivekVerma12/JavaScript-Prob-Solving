// my code
let nums = [21,22,24,25];
let ans = nums;
  ans.forEach(num=>{
    nums.push(num);
})
console.log('result',nums);
// chatgpt code
// let nums = [21, 22, 24, 25];          // Original array

// let result = [...nums, ...nums];     // Concatenate nums with itself using spread operator

// console.log('result', result);       // Output: [21, 22, 24, 25, 21, 22, 24, 25]
