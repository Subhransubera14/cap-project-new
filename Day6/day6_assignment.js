//PROBLEM 1: Temperature Converter

// let fahrenheit = 98.6;

// let celsius = (fahrenheit - 32) * 5 / 9;

// console.log(celsius);


// PROBLEM 2: Simple Interest Calculator

// let principal = 50000;
// let interestRate = 8.5;
// let time = 3;

// let simpleInterest = (principal * interestRate * time) / 100;

// let totalAmount = principal + simpleInterest;

// console.log("Principal:", principal);
// console.log("Interest Rate:", interestRate + "%");
// console.log("Time (years):", time);
// console.log("Simple Interest:", simpleInterest);
// console.log("Total Amount:", totalAmount);


// PROBLEM 3: Swap Two Variables

// let a = 10;
// let b = 20;

// console.log("Before swap: a =", a, ", b =", b);

// [a, b] = [b, a];  //swapping

// console.log("After swap: a =", a, ", b =", b);



// PROBLEM 4: Check Even or Odd

// let numbers = [17, 42, 0, -5];

// for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];

//     if (num % 2 === 0) {
//         console.log(num + " is even");
//     } else {
//         console.log(num + " is odd");
//     }
// }



// PROBLEM 5: Extract and Format

// let input = "  john.DOE@email.COM  ";

// let trimmed = input.trim();

// let lower = trimmed.toLowerCase();

// let username = lower.split("@")[0];

// let formatted = username.charAt(0).toUpperCase() + username.slice(1);

// console.log(trimmed);
// console.log(lower);
// console.log(username);
// console.log(formatted);



// PROBLEM 6: Age Calculator

// let birthYear = 2003;
// let currentYear = 2026;

// let myAge = currentYear - birthYear;

// let canVote = myAge >= 18;
// let canDrive = myAge >= 18;
// let canDrink = myAge >= 21;

// console.log("My age:", myAge);
// console.log("Can I vote?", canVote);
// console.log("Can I drive?", canDrive);
// console.log("Can I drink?", canDrink);



// PROBLEM 7: String Statistics

// let str = "JavaScript is the language of the web";

// let totalChars = str.length;

// let words = str.split(" ");
// let totalWords = words.length;

// let countA = (str.split("a").length - 1);

// let firstWord = words[0];

// let lastWord = words[words.length - 1];

// console.log("Total characters:", totalChars);

// console.log("Total words:", totalWords);
// console.log("Number of 'a' characters:", countA);
// console.log("First word:", firstWord);
// console.log("Last word:", lastWord);



// PROBLEM 8: Bill Splitter

// let totalBill = 4500;
// let numberOfPeople = 4;
// let tipPercentage = 15;

// let tipAmount = (totalBill * tipPercentage) / 100;

// let totalWithTip = totalBill + tipAmount;

// let amountPerperson = totalWithTip / numberOfPeople;

// console.log("Total Bill:", totalBill);
// console.log("Tip Percentage:", tipPercentage + "%");
// console.log("Tip Amount:", tipAmount);
// console.log("Total with Tip:", totalWithTip);
// console.log("Amount per Person:", amountPerperson);



// PROBLEM 9: BMI Calculator

// let weight = 72;
// let height = 1.72;

// let bmi = weight / (height * height);

// let category;

// if (bmi < 18.5) {
//     category = "Underweight";
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//     category = "Normal";
// } else if (bmi >= 25 && bmi <= 29.9) {
//     category = "Overweight";
// } else {
//     category = "Obese";
// }

// console.log("BMI:", bmi);
// console.log("Category:", category);



// PROBLEM 10: SAP Invoice Generator

// let company = "TechCorp Solutions";
// let invoiceNumber = "INV-2026-0042";

// let item1 = {name: "SAP License", quantity: 2, price: 12000};
// let item2 = {name: "Cloud Hosting", quantity: 12, price: 2500};
// let item3 = {name: "Support Plan", quantity: 1, price: 45000};

// let sub1 = item1.quantity * item1.price;
// let sub2 = item2.quantity * item2.price;
// let sub3 = item3.quantity * item3.price;


// let grandTotal = sub1 + sub2 + sub3;

// let gst = (grandTotal * 18) / 100;

// let finalAmount = grandTotal + gst;

// console.log("=================Invoice=================");
// console.log("Company:", company);
// console.log("Invoice Number:", invoiceNumber);

// console.log("Items:");
// console.log(item1.name + " - Quantity: " + item1.quantity + ", Price: " + item1.price + ", Subtotal: " + sub1);
// console.log(item2.name + " - Quantity: " + item2.quantity + ", Price: " + item2.price + ", Subtotal: " + sub2);
// console.log(item3.name + " - Quantity: " + item3.quantity + ", Price: " + item3.price + ", Subtotal: " + sub3);

// console.log("-----------------------------------------");
// console.log("Grand Total:", grandTotal);
// console.log("GST (18%):", gst);
// console.log("Final Amount:", finalAmount);





// let letters = Array.from("Hello");
// console.log(letters);

// let arr = [1, 2, 3, 4, 5, 6];

//for (let i in arr) {
    // console.log("Index:", i, "Value:", arr[i]);
    //console.log(arr.length);
//}

// let result = arr.slice(1, 4);
// console.log(result);






// let numbers = [23, 45, 12, 67, 34, 89, 5, 43, 78, 56];


// 1. Find the sum of all numbers
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);


// 2. Find the largest number
// let max = Math.max(...numbers);
// console.log(max);


// 3. Find the smallest number
// let min = Math.min(...numbers);
// console.log(min);



// 4. Filter only even numbers
// let evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
// console.log(evenNumbers);



// 5. Double every number (multiply by 2)
// let doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);



// 6. Sort in ascending order
// let ascendingNumbers = [...numbers].sort((a, b) => a - b);
// console.log(ascendingNumbers);




// 7. Sort in descending order
// let descendingNumbers = [...numbers].sort((a, b) => b - a);
// console.log(descendingNumbers);





// 8. Find the average
// let average = sum / numbers.length;
// console.log(average);



// 9. Check if ANY number is greater than 100
// let greaterNumber = numbers.some(num => num > 100);
// console.log(greaterNumber);



// 10. Check if ALL numbers are positive
// let positiveNumbers = numbers.every(num => num > 0);
// console.log(positiveNumbers);



let jsonData = '{"name": "Priya" , "age": 28, "city": "Mumbai"}';
let person = JSON.parse(jsonData);
console.log(person.name);