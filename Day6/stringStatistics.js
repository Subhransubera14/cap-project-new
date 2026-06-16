// PROBLEM 7: String Statistics

let str = "JavaScript is the language of the web";

let totalChars = str.length;

let words = str.split(" ");
let totalWords = words.length;

let countA = (str.split("a").length - 1);

let firstWord = words[0];

let lastWord = words[words.length - 1];

console.log("Total characters:", totalChars);

console.log("Total words:", totalWords);
console.log("Number of 'a' characters:", countA);
console.log("First word:", firstWord);
console.log("Last word:", lastWord);