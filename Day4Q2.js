// Input: nums1 = [1,2,3] , nums2 = [4,5,6]
// Explanation: merged array = [1,2,3,4,5,6]
// Output: [1,2,3,4,5,6]

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const mergedNums = [...nums1 , ...nums2];
console.log("mergedNums", mergedNums);