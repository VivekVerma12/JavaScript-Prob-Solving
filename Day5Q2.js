
function maxOccurance(arr)
{
   let freq = {};
    let maxCount = 0;
    let result = null;

   for(const d of arr){
    freq[d] = (freq[d] || 0) + 1;
    if(freq[d] > maxCount)
    {
        maxCount = freq[d];
        result = d;
    }
   }
   return result;
}
console.log(maxOccurance([1, 3, 2, 3, 4, 3, 2])); 