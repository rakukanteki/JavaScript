// // Arrow functions: 
// const hello = (name, age) => {console.log(`Hello ${name}`)
//                         console.log(`You are ${age} years old`)
//                         };

// //Calling function.
// hello("Radwan", 25);
// -----------------------------------------------------------------

const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element) => Math.pow(element,2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evens = numbers.filter((element) => element%2 === 0);
const odds = numbers.filter((element) => element%2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator+element);


console.log(total);