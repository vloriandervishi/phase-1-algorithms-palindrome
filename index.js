function isPalindrome(word) {
  const wordPalindrome = word.split("");
  const reverseWord = wordPalindrome.reverse().join("");
  return word === reverseWord;
}

/* 
  Add your pseudocode here
  -Find a word and see if its written the same when written backwards.
*/

/*
  Add written explanation of your solution here
  1.Get word as a string from (word)parameter 
  2.Convert word and split into each character as an array.
  3.Use array method reverse() to reverse the order of the characters.
  4.Use array method join() to convert array of characters back into a word.
  5.Compare initial word with reverseWord
  6.return the boolean value of the comparison after the function has completed execution.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
