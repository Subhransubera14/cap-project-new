const prompt = require("prompt-sync")();
const nuber1 = Number(prompt("Enter first number:"));
const number2 = Number(prompt("Enter second number:"));
const operator = prompt("Enter operator (+, -, *, /, %):");

let result;

if (operator === "+") {
  result = nuber1 + number2;
} else if (operator === "-") {
  result = nuber1 - number2;
} else if (operator === "*") {
  result = nuber1 * number2;
} else if (operator === "/") {
  result = nuber1 / number2;
} else if (operator === "%") {
  result = nuber1 % number2;
} else {
  console.log("Invalid operator");
}

console.log(`Result: ${result}`);