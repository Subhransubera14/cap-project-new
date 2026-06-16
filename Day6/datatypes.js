let myString = "SAP CAP Developer";
console.log(myString, "→", typeof myString);

let myNumber = 45;
let myDecimal = 99.99;
let myBoolean = true;
let myNull = null;
let myUndefined;
let myObject = { name: "CAP", version: 7 };

console.log(myNumber, "→", typeof myNumber);
console.log(myDecimal, "→", typeof myDecimal);  //js doesnot have separate int/ float , everything is just number.
console.log(myBoolean, "→", typeof myBoolean);
console.log(myNull, "→", typeof myNull);       // null means "empty value" but , type of null returns "object".  
console.log(myUndefined, "→", typeof myUndefined);  // variable declared but no value assigned.
console.log(myObject, "→", typeof myObject);    // objects store data in key-value pairs.

console.log(typeof NaN);    // NaN is Not a Number, but javascript treats it as type "number".
console.log(typeof typeof 42);  // type of 42 is "number", but type of "number" is string.

