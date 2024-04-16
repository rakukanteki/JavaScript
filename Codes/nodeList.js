let buttons = document.querySelectorAll(".myButton");

console.log(buttons);

//ADD HTML/CSS Properties.
buttons.forEach(button => {
    button.style.backgroundColor = "tomato";
    button.textContent += " >.<";
});

// //CLICK event Listener.
// buttons.forEach(button =>{
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "green";
//     })
// });

//Mouseover & Mouseout ==========================
buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "aqua";
    })
});

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "tomato";
    })
});

//ADD ELEMENT ===================================
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButton";
document.body.appendChild(newButton);

//Adding manually in NodeList.
buttons = document.querySelectorAll(".myButton");
console.log(buttons)

//REMOVING ELEMENT===============================
buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.remove();
        // console.log(buttons); //but NodeList still has those 5 buttons.
        buttons = document.querySelectorAll(".myButton");
        console.log(buttons);
    });
})
