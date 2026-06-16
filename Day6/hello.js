//console.log("Hello, World!");
//console.log("Welcome to JavaScript programming.");
//console.log("This is a simple example of a JavaScript file.");

//let name = "Alice";
//let age = 30;
//let isStudent = true;

//console.log("Name:", name);
//console.log("Age:", age);
//console.log("Is Student:", isStudent);

//var city = "New York";
//var country = "USA";

//country = "India"; 

//console.log("City:", city);
//console.log("Country:", country);

//const PI = 3.14159;
//const GRAVITY = 9.81;

//console.log("Value of PI:", PI);
//console.log("Value of Gravity:", GRAVITY);


// const appName = "CAP Training";

// function greet() {

//   let greeting = "Hello";
  
//   if (true) {
//     let blockVar = "I'm trapped here";
//     var functionVar = "I escape to function scope!";
    
//     console.log(appName);     
//     console.log(greeting);    
//     console.log(blockVar);    
//   }
//   console.log(greeting);    
//   console.log(functionVar);  
//   console.log(blockVar); 
// }

// greet();
// console.log(appName);        
// console.log(greeting);


// let myName = "Subhransu";
// let myAge = 24;
// const courseTitle = "SAP CAP Training";
// const trainingDuration = 45;

// console.log("Name:", myName);
// console.log("Age:", myAge);
// console.log("Course:", courseTitle);
// console.log("Duration:", trainingDuration, "days");

// myAge = 23;
// // courseTitle = "Advanced SAP CAP Training"; //[This will cause an error since courseTitle is a constant]
// console.log("Updated age:", myAge);

// if (true) {
//    let blockVariable = "I only exist here";
//    console.log("Inside block:", blockVariable);
// }
// //console.log("Outside block:", blockVariable);



const employeeName = "Arun Krishnan";
let employeeID = "EMP-2026-042";
var department = "Cloud Engineering";
let joiningYear = 2026;// Reason: we can not reassign a constant variable, so we changed it to let

employeeID = "EMP-2026-043";
joiningYear = 2025;

// let 1stProject = "BTP Migration"; Reason: because variable name cannot start with a number.
let firstProject = "BTP Migration";

if (true) {
  let secretCode = "ALPHA";
  console.log(secretCode);
}
// console.log(secretCode); Reason: we cannot access block-scope variable outside the block.

let badge = `Employee: ${employeeName}, ID: ${employeeID}, Dept: ${department}`; // Reason: Template literals allow us to embed variables directly in the string using ${} 
console.log(badge);

let salary = null;
if (salary === null) { // Reason: type of salary is null, so we check for null value to determine if salary is set or not.
  console.log("Salary not set");
}

console.log(department.toUpperCase()); // Reason toUpperCase() is the correct method.



let a = 5;
let b = a;
a = 10;
console.log("Line 1:", a);     
console.log("Line 2:", b);


const obj = { x: 1 };
obj.x = 99;
console.log("Line 3:", obj.x);

let c;
console.log("Line 4:", c);

var d = 1;
var d = 2;
var d = 3;
console.log("Line 5:", d);



