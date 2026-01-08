// Input: nums1 = [1,2,3]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

const arrMedian = [10, 20,30,40,50,60];
let  median = [];
if(arrMedian.length % 2 === 0)
{
 const middleindex = arrMedian.length / 2;
 median = [arrMedian[middleindex - 1],arrMedian[middleindex]]
    
}else{
    
const middle = Math.floor(arrMedian.length / 2);
 median = arrMedian[middle];
}
console.log("median",median);