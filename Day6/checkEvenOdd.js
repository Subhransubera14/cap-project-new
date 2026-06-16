// PROBLEM 4: Check Even or Odd

let numbers = [17, 42, 0, -5];

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}