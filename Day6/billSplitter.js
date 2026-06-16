// PROBLEM 8: Bill Splitter

let totalBill = 4500;
let numberOfPeople = 4;
let tipPercentage = 15;

let tipAmount = (totalBill * tipPercentage) / 100;

let totalWithTip = totalBill + tipAmount;

let amountPerperson = totalWithTip / numberOfPeople;

console.log("Total Bill:", totalBill);
console.log("Tip Percentage:", tipPercentage + "%");
console.log("Tip Amount:", tipAmount);
console.log("Total with Tip:", totalWithTip);
console.log("Amount per Person:", amountPerperson);