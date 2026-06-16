// PROBLEM 5: Extract and Format

let input = "  john.DOE@email.COM  ";

let trimmed = input.trim();

let lower = trimmed.toLowerCase();

let username = lower.split("@")[0];

let formatted = username.charAt(0).toUpperCase() + username.slice(1);

console.log(trimmed);
console.log(lower);
console.log(username);
console.log(formatted);