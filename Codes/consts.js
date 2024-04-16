// const = a variable can't be changed.

// // let pi = 3.1415; // Sometimes values can be changed accidentaly. That's why use 'const'
// const PI = 3.1415;
// let radius;
// let circumference;

// // PI = 400; //Shows error.

// radius = window.prompt("Enter radius: ");
// radius = Number(radius);

// circumference = 2*pi*radius;

// console.log(circumference);

// Taking User input.
const PI = 3.1416;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("myh3").textContent = `Result: ${circumference} cm`;
}