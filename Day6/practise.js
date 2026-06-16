// console.log("Hello World");
// console.log("My name is Subhransu Bera.");
// console.log("I am learning Javascript");



// let city = "mumbai";
// console.log(city);

// city = "delhi";
// console.log(city);

// const pi = 3.14;
// console.log(pi);

// var score = 100;
// console.log(score);

// var score = 200;
// console.log(score);



// {
// let message = "I am inside a block";
// console.log(message);
// }
// console.log(message); // this will give an error because message is not defined outside the block

// if (true){
//     let secret = "hidden";
//     const password = "12345";

// }
// console.log(secret); // this will give an error because secret is not defined outside the block
// console.log(password); // this will give an error because password is not defined outside the block

// if (true) {
//     var leaked = "I am Leaked";

// }
// console.log(leaked); // this will work because var is function scoped and not block scoped




// const appName = "CAP Trainning";

// function greet() {
//     let greeting = "Hello";

//     if (true) {
//         let blockVar = "I am trapped here";
//         var functionVar = "I escape to function scope";

//         console.log(appName);
//         console.log(greeting);
//         console.log(blockVar);
//         console.log(functionVar);
//     }
//     console.log(greeting);      
//     console.log(functionVar);   
//     console.log(blockVar);
// }
// greet();
// console.log(appName);         
// console.log(greeting);  




// console.log(x);
// var x = 5; // This part will remain undefined due to hoisting.

// var x;
// console.log(x);
// x = 5;  //Undefined

// console.log(y);
// let y = 10; // This will throw a ReferenceError due to the temporal dead zone.




// let myName = "Subhransu";
// let myAge = 24;
// const courseTitle = "SAP CAP Training";
// const trainingDuration = 45;

// console.log("Name:", myName);
// console.log("Age:", myAge);
// console.log("Course:", courseTitle);
// console.log("Duration:", trainingDuration, "days");

// myAge = 25;
// console.log("Updated Age:", myAge);

// //courseTitle = "Advanced SAP CAP Training"; // This will throw an error because courseTitle is a constant and cannot be reassigned.

// if (true) {
//     let blockVariable = "I am inside a block";
//     console.log(blockVariable);
// }
// //console.log(blockVariable); // This will throw an error because blockVariable is not defined outside the block.





// let single = 'Hello World';          
// let double = "Hello World";          
// let backtick = `Hello World`;

// console.log(single);
// console.log(double);
// console.log(backtick);

// let productName = "Laptop Pro X1";
// let customerId = "CUST-00425";
// let orderStatus = "In Progress";
// let description = "SAP BTP is a platform for building enterprise apps";

// console.log("Product Name:", productName);
// console.log("Customer ID:", customerId);
// console.log("Order Status:", orderStatus);
// console.log("Description:", description);




// let greeting = "Hello";
// console.log(greeting.length);
// console.log(greeting[0]);
// console.log(greeting[4]);

// let age = 25;
// let quantity = 100;
// let year = 2026;

// console.log("Age:", age);
// console.log("Quantity:", quantity);
// console.log("Year:", year);

// let price = 49.99;
// let pi = 3.14159;
// let temperature = -5.5;

// console.log("Price:", price);
// console.log("Pi:", pi);
// console.log("Temperature:", temperature);

// let infinity = Infinity;
// let negInfinity = -Infinity;
// let notANumber = NaN;

// console.log("Infinity:", infinity);
// console.log("Negative Infinity:", negInfinity);
// console.log("Not a Number (NaN):", notANumber);

// console.log(typeof 42);    // Output: "number"      
// console.log(typeof 3.14);    // Output: "number"   
// console.log(typeof NaN);    // Output: "number"
// console.log(typeof Infinity);  // Output: "number"





// let isLoggedIn = true;
// let hasPermission = false;

// console.log(isLoggedIn);
// console.log(hasPermission);



// let furtherValue;
// console.log(furtherValue); // Output: undefined
// console.log(typeof furtherValue); // Output: "undefined"


// let selectedProduct = null;      
// let middleName = null;

// console.log(selectedProduct); // Output: null
// console.log(middleName); // Output: null

// let currentOrder = null;
// currentOrder = { id: "PO-001", amount: 5000 };

// console.log(currentOrder); // Output: { id: "PO-001", amount: 5000 }




// let employee = {
//     firstName: "Subhransu",
//     lastName: "Bera",
//     age: 24,
//     department: "IT",
//     role: "Developer",
//     salary: 50000
// }

// console.log(employee.firstName);
// console.log(employee.lastName);
// console.log(employee["department"]);




// let myString = "Hello";
// let mynumber =42;
// let myDecimal = 3.14;
// let myBoolean = true;
// let myNull = null;
// let myUndefined;
// let myObject = {name: "CAP", version: 7};

// console.log(typeof myString); // Output: "string"
// console.log(typeof mynumber); // Output: "number"
// console.log(typeof myDecimal); // Output: "number"
// console.log(typeof myBoolean); // Output: "boolean"
// console.log(typeof myNull); // Output: "object" (this is a bug in JavaScript)
// console.log(typeof myUndefined); // Output: "undefined"
// console.log(typeof myObject); // Output: "object"


// console.log(typeof NaN);           // Output: "number"
// console.log(typeof typeof 42);  // Output: "string" (because typeof always returns a string)




// console.log(typeof "42");           
// console.log(typeof 42);            
// console.log(typeof true);          
// console.log(typeof undefined);     
// console.log(typeof null);          
// console.log(typeof {name: "SAP"}); 
// console.log(typeof [1, 2, 3]);     
// console.log(typeof NaN);           
// console.log(typeof function(){});




// let name ="Subhransu";
// let age = 24;
// let gpa = 8.5;
// let isEnrolled = true;
// let graduationDate = null;
// let subjects = {Math: 90, Science: 85, English: 88};

// console.log("=======================Student Profile========================");
// console.log("Name:", name);
// console.log("Age:", age);
// console.log("GPA:", gpa);
// console.log("Enrolled:", isEnrolled);
// console.log("Graduation Date:", graduationDate);
// console.log("Subjects and Scores:", subjects);
// console.log("==============================================================");





// let x = 10;
// {
//     let x = 20;
//     console.log("Inside block:", x);
// }
// console.log("Outside block:", x);

// var y = 10;
// {
//     var y = 20;
//     console.log("Inside block:", y);
// }
// console.log("Outside block:", y);

// const z = "Original";
// {
//     const z = "modified";
//     console.log("Inside block:", z);
// }
// console.log("Outside block:", z);





// let price = 1000;
// let quantity = 5;
// let totalCost = price * quantity;
// let gst = totalCost * 0.18;
// let grandTotal = totalCost + gst;

// console.log("Price:", price);
// console.log("Quantity:", quantity);
// console.log("Total Cost:", totalCost);
// console.log("GST (18%):", gst);
// console.log("Grand Total:", grandTotal);





// console.log(10 % 3);    
// console.log(15 % 5);    
// console.log(7 % 2);




// let num = 42;
// if (num % 2 === 0) {
//     console.log(num , "is an even number");
// } else {
//     console.log(num , "is an odd number");
// }




// let score = 0;
// score += 10;    
// score += 25;    
// score -= 5;     
// score *= 2;     
// console.log("Final score:", score);




// let count = 0;
// count++;        
// count++;        
// count++;        
// console.log("Count:", count);




// console.log(5 == "5");       // true, because == performs type coercion
// console.log(0 == false);     // true, because == performs type coercion
// console.log("" == false);    // true
// console.log(null == undefined);  // true




// console.log(5 === "5");      // false ✅ (number ≠ string)
// console.log(0 === false);    // false ✅ (number ≠ boolean)
// console.log("" === false);   // false ✅ (string ≠ boolean)
// console.log(null === undefined); // false ✅ (different types)





// let orderStatus = "Approved";
// let targetStatus = "Approved";

// if (orderStatus === targetStatus) {
//   console.log("Order is approved!");
// }

// let quantity = 0;
// if (quantity === 0) {
//   console.log("Out of stock!");        // Correct check ✅
// }





// let age = 25;
// let hasID = true;
// let hasTicket = false;

// console.log(age >= 18 && hasID);        
// console.log(age >= 18 && hasTicket);

// console.log(hasID || hasTicket);        
// console.log(!hasID || !hasTicket);

// console.log(!true);                     
// console.log(!false);                    
// console.log(!hasTicket);




// let orderAmount = 50000;
// let approverLevel = "Manager";
// let isUrgent = true;

// let canAutoApprove = orderAmount < 10000 && !isUrgent;
// console.log("Auto-approve?", canAutoApprove);

// let needsVPApproval = orderAmount > 100000 || isUrgent;
// console.log("Needs VP?", needsVPApproval);




// let isLoggedIn = true;
// let hasCredit = true;
// let isBanned = false;
// let canOrder = isLoggedIn && hasCredit && !isBanned;
// console.log("Can order?", canOrder);




// let name = "Rahul";
// let age = 25;

// let message2 = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(message2);




// let price = 1000;
// let qty = 3;
// console.log(`Total: ₹${price * qty}`);
// console.log(`GST: ₹${price * qty * 0.18}`);     
// console.log(`Is expensive? ${price > 500}`);

// let poNumber = "PO-2026-001";
// let status = "Approved";
// let approver = "Priya Sharma";

// let notification = `
// Purchase Order Update:
// ─────────────────────
// PO Number: ${poNumber}
// New Status: ${status}
// Approved by: ${approver}
// Date: ${new Date().toLocaleDateString()}
// `;

// console.log(notification);




// let email = "developer@sap.com";

// console.log(email.length);               
// console.log(email.includes("@"));        
// console.log(email.includes("gmail"));    
// console.log(email.startsWith("dev"));    
// console.log(email.endsWith(".com"));     
// console.log(email.indexOf("@"));





// let input = "  Hello World!   ";
// console.log(input.trim());
// console.log(input.trim().toUpperCase());

// let status = "in_progress";
// let formatted = status.replace("-", " ").toUpperCase();
// console.log(formatted);

// let poNumber = "PO-2026-00142";
// let year = poNumber.slice(3, 7);
// let sequence = poNumber.slice(8);
// console.log(`Year: ${year}, Sequence: ${sequence}`);

// let csvLine = "Laptop,Electronics,45000,InStock";
// let parts = csvLine.split(",");
// console.log(parts);    
// console.log(parts[0]); 
// console.log(parts[2]);



// let rawInput = "   hello WORLD   ";
// let clean = rawInput.trim().toLowerCase().replace("world", "Javascript");
// console.log(clean);


// let userEmail = "  Admin@Company.COM  ";
// let normalizedEmail = userEmail.trim().toLowerCase();
// console.log(normalizedEmail);
// let isValid = normalizedEmail.includes("@") && normalizedEmail.includes(".");
// console.log(isValid);



// if (0) console.log("nope");          // Doesn't run
// if ("") console.log("nope");         // Doesn't run
// if (null) console.log("nope");



// if (1) console.log("yes!");          // Runs!
// if ("hello") console.log("yes!");    // Runs!
// if ([]) console.log("yes!");         // Runs! (empty array is truthy!)
// if ({}) console.log("yes!");




// let email = "developer@sapbtp.com";
// console.log(email.slice(10));



// function greet(name) {
//     return `Hello, ${name}! Welcome to SAP CAP Training.`;
// }

// console.log(greet("Subhransu"));


// const add = (a, b) => a + b;
// console.log(add(5, 3));


// const square = x => x * x;
// console.log(square(4));


// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(x => x * x);
// console.log(squares);


// let even = numbers.filter(x => x % 2 === 0);
// console.log(even);




// const makeUser = (name, age) => ({name, age});
// const user1 = makeUser("Subhransu", 24);
// console.log(user1); // Output: { name: "Subhransu", age: 24 } because of object property shorthand syntax.



// function greet(name = "Guest") {
//     return `Hello, ${name}!`;
// }
// console.log(greet()); // Output: "Hello, Guest!" because the default value is used when no argument is provided.
// console.log(greet("Subhransu"));// Output: "Hello, Subhransu!" because the provided argument overrides the default value.



// const createMultiplier = (factor) => {return (number) => number * factor;};

// const double = createMultiplier(2);
// console.log(double(5)); // Output: 10


// const triple = createMultiplier(3);
// console.log(triple(5)); // Output: 15




// function square(n) {
//   return n * n;
// }
// const square = n => n**2;
// console.log(square(5)); // Output: 25


// function isEven(n) {
//   return n % 2 === 0;
// }
// const isEven = n => n % 2 === 0;
// console.log(isEven(4));


// function fullName(first, last) {
//   return `${first} ${last}`;
// }
// const fullName = (first, last) => `${first} ${last}`;
// console.log(fullName("Subhransu", "Bera"));



// function findMax(arr) {
//   return Math.max(...arr);
// }
// const findMax = arr => Math.max(...arr);
// console.log(findMax([3, 7, 2, 9, 5]));



// function createPO(vendor, amount) {
//   return {
//     id: `PO-${Date.now()}`,
//     vendor: vendor,
//     amount: amount,
//     status: "Draft"
//   };
// }


// const createPo = (vendor, amount) => ({
//     id: `PO-${Date.now()}`,
//     vendor,
//     amount,
//     status: "Draft"
// });
// console.log(createPo("SAP", 5000));





// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         return count;
//     };
// };

// const counter = outer();

// console.log(counter()); 
// console.log(counter());



// function secret() {
//     let password = "1,2,3,4,5";

//     return function() {
//         return password;
//     };
// };

// const getPassword = secret();

// console.log(getPassword());
// console.log(getPassword());





// const createIdGenerator = (prefix) => {
//     let count = 0;

//     return () => {
//         count++;
//         return `${prefix}-${count}`;
//     };
// };

// const poIdGen = createIdGenerator("PO");
// console.log(poIdGen()); 
// console.log(poIdGen()); 
// console.log(poIdGen()); 



// const createLogger = (component) => {
//     return (message) => {
//         const time = new Date().toLocaleTimeString();
//         console.log(`[${component}] ${time} - ${message}`);
//     };
// };

// const databaseLogger = createLogger("Database");

// databaseLogger("Connected");
// databaseLogger("Query executed");







// ============================================
//  MINI LIBRARY MANAGEMENT SYSTEM
//  Using Classes, Error Handling, and Closures
// ============================================


// class Book {
//   constructor(title, author, isbn, copies = 1) {
//     if (!title || !author || !isbn) {
//       throw new Error("Title, author, and ISBN are required");
//     }
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//     this.totalCopies = copies;
//     this.availableCopies = copies;
//     this.borrowHistory = [];
//   }
  
//   getInfo() {
//     return `"${this.title}" by ${this.author} [${this.isbn}] — ${this.availableCopies}/${this.totalCopies} available`;
//   }
// }


// class Member {
//   constructor(name, memberId) {
//     this.name = name;
//     this.memberId = memberId;
//     this.borrowedBooks = [];
//     this.borrowLimit = 3;
//   }
  
//   canBorrow() {
//     return this.borrowedBooks.length < this.borrowLimit;
//   }
// }


// class Library {
//   constructor(name) {
//     this.name = name;
//     this.books = [];
//     this.members = [];
//     this.transactions = [];
//   }

//   // Add a book to the library
//   addBook(title, author, isbn, copies) {
//     const existing = this.books.find(b => b.isbn === isbn);
//     if (existing) {
//       existing.totalCopies += copies;
//       existing.availableCopies += copies;
//       return `Updated: "${title}" now has ${existing.totalCopies} copies`;
//     }
//     const book = new Book(title, author, isbn, copies);
//     this.books.push(book);
//     return `Added: "${title}" (${copies} copies)`;
//   }

//   // Register a new member
//   addMember(name) {
//     const id = `MEM-${String(this.members.length + 1).padStart(3, "0")}`;
//     const member = new Member(name, id);
//     this.members.push(member);
//     return `Welcome, ${name}! Your ID: ${id}`;
//   }


//   // Borrow a book
//   borrowBook(memberId, isbn) {
//     const member = this.members.find(m => m.memberId === memberId);
//     if (!member) throw new Error(`Member ${memberId} not found`);
    
//     const book = this.books.find(b => b.isbn === isbn);
//     if (!book) throw new Error(`Book with ISBN ${isbn} not found`);
    
//     if (!member.canBorrow()) {
//       throw new Error(`${member.name} has reached the borrow limit (${member.borrowLimit} books)`);
//     }
    
//     if (book.availableCopies <= 0) {
//       throw new Error(`"${book.title}" is not available. All copies are borrowed.`);
//     }
    
//     // Process borrow:
//     book.availableCopies--;
//     member.borrowedBooks.push(isbn);
//     book.borrowHistory.push({ memberId, date: new Date().toISOString(), action: "borrow" });
    
//     this.transactions.push({
//       type: "BORROW",
//       memberId,
//       isbn,
//       date: new Date().toISOString()
//     });


//     return `✅ ${member.name} borrowed "${book.title}" (${book.availableCopies} copies remaining)`;
//   }
  
//   // Return a book
//   returnBook(memberId, isbn) {
//     const member = this.members.find(m => m.memberId === memberId);
//     if (!member) throw new Error(`Member ${memberId} not found`);
    
//     const book = this.books.find(b => b.isbn === isbn);
//     if (!book) throw new Error(`Book with ISBN ${isbn} not found`);
    
//     const borrowIndex = member.borrowedBooks.indexOf(isbn);
//     if (borrowIndex === -1) {
//       throw new Error(`${member.name} hasn't borrowed "${book.title}"`);
//     }


//     // Process return:
//     book.availableCopies++;
//     member.borrowedBooks.splice(borrowIndex, 1);
//     book.borrowHistory.push({ memberId, date: new Date().toISOString(), action: "return" });
    
//     this.transactions.push({
//       type: "RETURN",
//       memberId,
//       isbn,
//       date: new Date().toISOString()
//     });
    
//     return `✅ ${member.name} returned "${book.title}" (${book.availableCopies} copies available)`;
//   }



//   // Search books
//   searchBooks(query) {
//     const q = query.toLowerCase();
//     return this.books.filter(b => 
//       b.title.toLowerCase().includes(q) || 
//       b.author.toLowerCase().includes(q)
//     );
//   }
  
//   // Get library stats
//   getStats() {
//     return {
//       totalBooks: this.books.length,
//       totalCopies: this.books.reduce((sum, b) => sum + b.totalCopies, 0),
//       availableCopies: this.books.reduce((sum, b) => sum + b.availableCopies, 0),
//       totalMembers: this.members.length,
//       totalTransactions: this.transactions.length
//     };
//   }
  
//   // Display all books
//   displayBooks() {
//     console.log(`\n📚 ${this.name} — Book Catalog:`);
//     console.log("─".repeat(70));
//     this.books.forEach(book => console.log(`  ${book.getInfo()}`));
//     console.log("─".repeat(70));
//   }
// }

// // ========== TEST THE LIBRARY ==========

// const lib = new Library("SAP Academy Library");

// // Add books:
// console.log(lib.addBook("Clean Code", "Robert Martin", "978-0132350884", 3));
// console.log(lib.addBook("JavaScript: The Good Parts", "Douglas Crockford", "978-0596517748", 2));
// console.log(lib.addBook("Design Patterns", "Gang of Four", "978-0201633610", 1));
// console.log(lib.addBook("Node.js in Action", "Mike Cantelon", "978-1617290572", 4));

// // Add members:
// console.log(lib.addMember("Priya Sharma"));
// console.log(lib.addMember("Rahul Kumar"));

// // Display catalog:
// lib.displayBooks();

// // Borrow books:
// try {
//   console.log(lib.borrowBook("MEM-001", "978-0132350884"));
//   console.log(lib.borrowBook("MEM-001", "978-0596517748"));
//   console.log(lib.borrowBook("MEM-002", "978-0132350884"));
  
//   // Try borrowing unavailable book:
//   // console.log(lib.borrowBook("MEM-002", "978-0201633610"));
//   // console.log(lib.borrowBook("MEM-002", "978-0201633610"));  // Would fail!
// } catch (error) {
//   console.log(`❌ Error: ${error.message}`);
// }

// // Return a book:
// console.log(lib.returnBook("MEM-001", "978-0132350884"));

// // Search:
// console.log("\n🔍 Search results for 'java':");
// lib.searchBooks("java").forEach(b => console.log(`  ${b.getInfo()}`));

// // Stats:
// console.log("\n📊 Library Stats:", lib.getStats()); 





// function greet(name) {
//   return `Hello, ${name}! Welcome to SAP.`;
// }

// console.log(greet("Subhransu"));
// console.log(greet("Priya"));


// const greet = function(name) {
//   return `Hello, ${name}! Welcome to SAP.`;
// };

// console.log(greet("SUbhransu"));
// console.log(greet("Priya"));


// const greet = (name) => `Hello, ${name}! Welcome to SAP.`;

// console.log(greet("Subhransu"));
// console.log(greet("Priya"));


// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(5, 3));


// const add = (a, b) => a + b;

// console.log(add(5, 3));



// const double = x => x * 2;
// console.log(double(4));


// const sayHello = () => "hello!";
// console.log(sayHello());


// const makeUser = (name, age) => ({name, age});
// console.log(makeUser("Subhransu", 24));




// function greet(name) {
//   return `Hello, ${name}!`;
// };
// console.log(greet());


// function greet(name = "Guest") {
//   return `Hello, ${name}!`;
// }
// console.log(greet());
// console.log(greet("SUbhransu"));


// const createOrder = (vendor, amount, status = "Draft", currency = "INR") => {
//   return { vendor, amount, status, currency, createdAt: new Date().toISOString() };
// };

// console.log(createOrder("SAP", 5000));

// console.log(createOrder("Global Tech", 7500, "Approved", "USD"));



// const sum = (...numbers) => {
//   return numbers.reduce((total, num) => total + num, 0);
// };

// console.log(sum(1, 2, 3));



// const logAction = (user, ...actions) => {
//   console.log(`User: ${user}`);
//   console.log(`Actions: ${actions.join(", ")}`);

// }
// logAction ("Subhransu", "Login", "View Dashboard", "Logout");




// const createMultiplier = (factor) => {
//   return (number) => number * factor;
// };

// const double = createMultiplier(2);

// console.log(double(5));



// const square = n => n * n;
// const isEven = n => n % 2 === 0;
// const fullName = (first, last) => `${first} ${last}`;
// const findMax = arr => Math.max(...arr);
// const createPO = (vendor, amount) => ({
//   id: `PO-${Date.now()}`,
//   vendor,
//   amount,
//   status: "Draft"
// });

// console.log(square(5));
// console.log(isEven(4));
// console.log(fullName("Subhransu", "Bera"));
// console.log(findMax([3, 7, 2, 9, 5]));
// console.log(createPO("SAP", 5000));




// const greet = (name) => console.log(`Hello, ${name}!`);

// const processUser = (userName, callback) => {
//   console.log("Processing user...");
//   callback(userName);
// };

// processUser("Subhransu", greet);




// console.log("1");

// setTimeout(() => console.log("2"), 1000);

// setTimeout(() => console.log("3"), 0);

// console.log("4");







// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// process.nextTick(() => {
//   console.log("Next Tick");
// });
// console.log("End");




// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 100);
// }




// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 100);
// }





// Promise.resolve(1)
//   .then((x) => {
//     console.log(x);
//     return x + 1;
//   })
//   .then((x) => {
//     throw new Error("Failed");
//   })
//   .catch((err) => {
//     console.log(err.message);
//     return 100;
//   })
//   .then((x) => {
//     console.log(x);
//   });






// const wait = (ms, value) =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(value), ms)
//   );

// async function run() {
//   console.time("time");

//   const a = await wait(2000, "A");
//   const b = await wait(2000, "B");

//   console.log(a, b);

//   console.timeEnd("time");
// }

// run();






// async function run() {
//   console.time("time");

//   const [a, b] = await Promise.all([
//     wait(1000, "A"),
//     wait(1000, "B")
//   ]);

//   console.log(a, b);

//   console.timeEnd("time");
// }






// async function test() {
//   return Promise.resolve("Hello");
// }

// console.log(test());






// const p = new Promise((resolve, reject) => {
//   resolve("First");
//   resolve("Second");
//   reject("Error");
// });

// p.then(console.log).catch(console.log);






// async function test() {
//   try {
//     Promise.reject("Failed");
//   } catch (e) {
//     console.log("Caught");
//   }
// }

// test();







// let balance = 100;

// async function deduct(amount) {
//   const current = balance;

//   await new Promise((r) => setTimeout(r, 100));

//   balance = current - amount;
// }

// async function run() {
//   await Promise.all([
//     deduct(30),
//     deduct(50)
//   ]);

//   console.log(balance);
// }

// run();





// setTimeout(() => console.log("timeout"));
// setImmediate(() => console.log("immediate"));
// Promise.resolve().then(() => console.log("promise"));
// process.nextTick(() => console.log("nextTick"));







// const fetchUserData = async (userId) => {
//   try {
//     // Simulate API call:
//     const user = await new Promise(resolve => 
//       setTimeout(() => resolve({ id: userId, name: "Priya", role: "Developer" }), 500)
//     );
    
//     const orders = await new Promise(resolve => 
//       setTimeout(() => resolve([
//         { id: "PO-001", amount: 5000 },
//         { id: "PO-002", amount: 12000 }
//       ]), 700)
//     );
    
//     return {
//       ...user,
//       orders,
//       totalOrders: orders.length,
//       totalAmount: orders.reduce((sum, o) => sum + o.amount, 0)
//     };
    
//   } catch (error) {
//     console.log("Failed to load user data:", error.message);
//     return null;
//   }
// };

// // Usage:
// const main = async () => {
//   const userData = await fetchUserData("USER-001");
//   console.log("User Data:", JSON.stringify(userData, null, 2));
// };
// main();







// const processAllOrders = async (orderIds) => {
//   const results = [];
  
//   for (const id of orderIds) {
//     try {
//       console.log(`Processing ${id}...`);
//       const result = await processOrder(id);
//       results.push({ id, status: "success", data: result });
//     } catch (error) {
//       results.push({ id, status: "failed", error: error.message });
//     }
//   }
  
//   return results;
// };

// // Process one by one (sequential):
// processAllOrders(["PO-001", "PO-002", "PO-003"])
//   .then(results => console.log("All done:", results));




const http = require('http');

const server = http.createServer((request, response) => {
  // 'request' = what the client sent (URL, method, headers)
  // 'response' = what we send back
  
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({ message: "Hello from Node.js!", time: new Date() }));
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});