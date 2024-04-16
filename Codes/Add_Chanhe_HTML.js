//Create the element.
const newH1 = document.createElement("h1");

//Add Attributes and properties.
newH1.textContent = "I love myself";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//Append element to DOM==================
// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

//WHAT IF THEY DONT HAVE ID=============
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1])

//REMOVE HTML Element.
document.getElementById("box1").removeChild(newH1);