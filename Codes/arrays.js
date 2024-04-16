// Array.

let fruits = ["apple", "grapes", "orange", "mango"];
// console.log(fruits);
// console.log(fruits[2]);

// //Pushing a value to the end---------------------------
// fruits.push("coconut");

// //Pop removes last element---------------------------
// fruits.pop();

// //unshifting: adds element at the begining---------------------------
// fruits.unshift("banana");

// //Shifting: removes an element at the begining---------------------------
// fruits.shift();

// //Finding length of an array---------------------------
// let num_of_fruits = fruits.length;
// console.log(num_of_fruits);

// // Search for an item---------------------------
// let index = fruits.indexOf("orange");
// console.log(index);

// //Sorting---------------------------
// console.log(fruits.sort().reverse());

// //Printing elements---------------------------
// for(let i=0; i<fruits.length; i++)
// {
//     console.log(fruits[i]);
// }

// //Alternative print---------------------------
// for(let fruit of fruits)
// {
//     console.log(fruit);
// }

//Spread Operators.-------------------------------
let numbers = [1,2,3,4,5];
// let maximum = Math.max(numbers); //Shows error. Can't iterate.
//Using spread operator(...) , this unpacks the elements.
let maximum = Math.max(...numbers);
console.log(maximum);