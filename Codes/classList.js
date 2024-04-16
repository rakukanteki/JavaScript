const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// });

//Toggle ==========================================
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });
    
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });

// //Replace.=========================================
// myButton.classList.add("enabled");
// myButton.addEventListener("click", event =>{
//     event.target.classList.replace("enabled", "disabled");
// })

//Contain class =====================================
myButton.classList.add("enabled");
myButton.addEventListener("click", event =>{

    if(event.target.classList.contains("disabled"))
    {
        event.target.textContent += ">.<";
    }
    else
    {
        event.target.classList.replace("enabled", "disabled");
    }
})