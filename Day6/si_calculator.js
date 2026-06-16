// PROBLEM 2: Simple Interest Calculator

let principal = 50000;
let interestRate = 8.5;
let time = 3;

let simpleInterest = (principal * interestRate * time) / 100;

let totalAmount = principal + simpleInterest;

console.log("Principal:", principal);
console.log("Interest Rate:", interestRate + "%");
console.log("Time (years):", time);
console.log("Simple Interest:", simpleInterest);
console.log("Total Amount:", totalAmount);