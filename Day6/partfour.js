let data = [
  "xxHxx",
  "Hello World Every Living Organism",
  " PYTHON java JAVASCRIPT ruby ",
  "error-404-not-found",
  "aaa@bbb.ccc"
];

 let char1 = data[0][2];  // "H"

 let char2 = data[1].split(" ").map(word => word[0]).join("");    // "HWELO"

 let char3 = data[2].trim().split(" ").reduce((a, b) => a.length > b.length ? a : b);  // "JAVASCRIPT"

 let char4 = data[3].replaceAll("-", " ").split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");    // "Error 404 Not Found"

 let char5 = data[4].split("@")[1].split(".")[0];    // "bbb"

 console.log(char1, char2, char3, char4, char5);





// let input1 = "hello-world-program";

// let output1 = input1.split("-").map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
// console.log(output1);  // "helloWorldProgram"

// let input2 = "camelCaseText";

// let output2 = input2.replace(/[A-Z]/g, letter => "-" + letter.toLowerCase());
// console.log(output2);  // "camel-case-text"

// let input3 = "SAP Business Technology Platform";

// let output3 = input3.split(" ").map(word => word[0]).join("");
// console.log(output3);  // "SBTP"

// let input4 = "What the hell, this damn code won't work!";

// let output4 = input4.replace(/hell|damn/g, "****");
// console.log(output4);  // "What the ****, this **** code won't work!"

// let input5 = "JavaScript is awesome";

// let output5 = (input5.match(/[aeiou]/gi) || []).length;
// console.log(output5);  // 6




// let password = "MyS@p2026!";

// let hasLength = password.length >= 8;
// let hasUpper = /[A-Z]/.test(password);
// let hasLower = /[a-z]/.test(password);
// let hasNumber = /[0-9]/.test(password);
// let hasSpecial = /[!@#$%^&*]/.test(password);
// let noSpaces = !/\s/.test(password);
// let noLeadingNum = !/^[0-9]/.test(password);

// let score = [
//   hasLength,
//   hasUpper,
//   hasLower,
//   hasNumber,
//   hasSpecial,
//   noSpaces,
//   noLeadingNum
// ].filter(Boolean).length;

// console.log("Strength:", score === 7 ? "STRONG" : "WEAK");