// element selector = target and manipulate HTML elements.

//1. document.getElementById()  ->returns single elements or null.
//2. document.getElementClassName()
//3. documnet.getElementByTagName()
//4. document.querySelector()
//5. document.querySelectorAll()

// const myHeading = document.getElementById("myH1");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";
// console.log(myHeading);

// //Class Name.==============================================
// const fruits = document.getElementsByClassName("fruits");
// // fruits[0].style.backgroundColor = "yellow";

// // for(let fruit of fruits)
// // {
// //     fruit.style.backgroundColor = "yellow";
// // }

// //typecasting to array.
// Array.from(fruits).forEach(fruit =>
// {
//     fruit.style.backgroundColor = "yellow";
// });

// //Tag Name.======================================================
// const h4Elements = document.getElementsByTagName("h4");
// console.log(h4Elements);

// // h4Elements[0].style.backgroundColor = "yellow";

// for(let h4Element of h4Elements)
// {
//     h4Element.style.backgroundColor = "yellow";
// }

// const liElements = document.getElementsByTagName("li");
// for(let liElement of liElements)
// {
//     liElement.style.backgroundColor = "green";
// }

// //Query selector==================================================
// const element = document.querySelector(".fruits");
// element.style.backgroundColor = "pink";

//Query selector All.================================================
// const fruits = document.querySelectorAll(".fruits");
// fruits[0].style.backgroundColor = "green";

// const foods = document.querySelectorAll("li");

// foods.forEach(food => {
//     food.style.backgroundColor = "red";
// });

//++++++++++++++++++++++
// DOM navigator.