// Example Input:[1,2,3,4]
// Example Output: 20

const numb = [1,2,3,4];
let total = 0;
numb.forEach((value,index)=>{
    // 0 , 1 => total = 0
    // 1 , 2 => total = 0+2 = 2
    // 3 , 2 => total = 2 + 6 = 8
    total += value * index;
})
console.log("total",total);

// Chat-gpt suggested this for best performance
// const numb = [1, 2, 3, 4];

// const total = numb.reduce((sum, value, index) => {
//   return sum + value * index;
// }, 0);

// console.log("total", total); // Output: 20
