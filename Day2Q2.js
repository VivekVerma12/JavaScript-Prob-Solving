// my code 
let word = 'hello';
// ['h', 'e', 'l', 'l', 'o']
let sum = 0;
let lastvalue = 0;
let temp = 0;
//
let char = word.split('');
let first = char[0].charCodeAt();
for(let i = 1;i < char.length;i++ )
{
      lastvalue = char[i].charCodeAt(); 
      temp = Math.abs(first - lastvalue); // temp = 104-101 || 101 - 108
    sum = temp + sum; // sum = 0 + 3 || sum = -7 + 3
     first = lastvalue; // 101. ||
 }
console.log('sum',sum);
// chat-gpt optmize code
// let word = 'hello';
// let sum = 0;

// for (let i = 1; i < word.length; i++) {
//   sum += Math.abs(word.charCodeAt(i) - word.charCodeAt(i - 1));
// }

// console.log('sum', sum);  // Output: 13
