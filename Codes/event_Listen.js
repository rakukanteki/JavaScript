//eventListener.

const myBox = document.getElementById("myBox");
const mybtn = document.getElementById("mybtn");
//=============================================================
// function changeColor(event)
// {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "ouchh!!!  :(";
// }

//=============================================================
// myBox.addEventListener("click", changeColor);

// myBox.addEventListener("click", function(event)
// {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH!! :((";
// });

//=============================================================
mybtn.addEventListener("click", event => 
{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!! :((";
});

//Mouseover=============================================================
mybtn.addEventListener("mouseover", event => 
{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't";
});
//Mouseout=============================================================
mybtn.addEventListener("mouseout", event => 
{
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Aaah";
});
//=============================================================