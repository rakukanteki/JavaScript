// Function expression: a way to define functions as values or variable.

// const hello = function()
// {
//     console.log("Hello");
// }

// setTimeout(hello, 3000);

//-------------------------------------
// const numbers = [1,2,3,4,5,6];
// const square = numbers.map(squares);

// console.log(square);

// function squares(element)
// {
//     return Math.pow(element, 2);
// }

// Alternative way.

// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(function(element)
// {
//     return Math.pow(element, 2);
// });

// console.log(squares);

//Finding cube.
const numbers = [1,2,3,4,5,6];
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

console.log(cubes);