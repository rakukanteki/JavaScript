// Math - built-in object provides a collection of properties and methods.

// console.log(Math.PI);
// console.log(Math.E);

let x = 3.21;
let y = 2;
let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x); //Removes decimal portion.
// z = Math.pow(x, y); //x to the power of y.
// z = Math.sqrt(x); //Square root.
// z = Math.log(x); //Natural logarithms
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x); // Absoulte value.
// z = Math.sign(x); //Gives what is the sign of a value.
// let max = Math.max(x, y);
// let min = Math.min(x, y);

// console.log(z);

// Generating random number.
// let randomNum = Math.floor(Math.random()*6); // Gives us random number 0 - 6 exclusive.
// console.log(randomNum)

// Generating random number in a range.
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max-min)) + min;
console.log(randomNum)