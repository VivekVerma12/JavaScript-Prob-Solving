let str = "my name is sky";  // Input string

// BEFORE: str is a single string → "my name is sky"
let words = str.split(" ");  
// AFTER: words is now an array → ["my", "name", "is", "sky"]

let resultArr = [];  // This will store the final transformed words

// Loop through each word in the array
words.forEach(word => {
  let newWord = "";  // To store the transformed version of each word

  // Loop through each character of the word
  for (let i = 0; i < word.length; i++) {

    if (i === 0) {
      // Always capitalize the first letter of every word
      newWord += word[i].toUpperCase();
    } 
    else if (word.length % 2 === 0 && i === 2) {
      // If the word has even length AND we're at index 2 (3rd letter), capitalize it
      newWord += word[i].toUpperCase();
    } 
    else {
      // All other characters should be lowercase
      newWord += word[i].toLowerCase();
    }

    // AFTER each loop: building the modified word char by char
  }

  // AFTER: word is transformed and pushed to the final result array
  resultArr.push(newWord);
});

// BEFORE: resultArr = ["My", "NaMe", "Is", "Sky"]
let finalStr = resultArr.join(" ");  // Combine array into final string

console.log("Output:", finalStr); // ✅ Output: My NaMe Is Sky
