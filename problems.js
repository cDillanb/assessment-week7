// Find Sum Zero
const addToZero = (numbers) => {
  let answer = false;
  numbers.forEach((num) => {
    if (numbers.includes(-num)) {
      answer = true;
      return;
    }
  });
  return answer;
};

console.log(addToZero([2, 3, 9, -3]));

// Unique Characters
const hasUniqueChars = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
};

console.log(hasUniqueChars("hello world"));

// Pangram Sentence
const isPangram = (str) => {
  let uniqueLetters = [];
  let answer = false;

  str = str.split(" ").join("");
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z ]/g, "");
  str = str.split("");

    str.forEach((letter) => {
        console.log(uniqueLetters)
        if (uniqueLetters.length === 26) {
        answer = true;
        return;
      } else if (str.lastIndexOf(letter) === str[letter]) {
        uniqueLetters.push(letter);
      }
    });
  return answer;
};
// doesnt work yet
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));


// Finding the longest word
const findLongestWord = (words) => {
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord.length;
};

console.log(
  findLongestWord(["hi", "hello", "chicken", "superlongword", "hehe", "birds"])
);
