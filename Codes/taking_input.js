//Accepting user input.

//Easy way: window prompt.
//Professional way: HTML textbox.

// Easy way.
// let username;
// username = window.prompt("What's your username?");
// console.log(username); 

// Professional way.
let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Hello ${username}`;
};