// Counter Program.

const decrease = document.getElementById("b1");
const reset = document.getElementById("b2");
const increase = document.getElementById("b3");
const countlabel = document.getElementById("countlabel");

let count = 0;

// Need 3 functions.
// Increase button.
increase.onclick = function(){
    count ++;
    countlabel.textContent = count;
}

decrease.onclick = function(){
    count --;
    countlabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}