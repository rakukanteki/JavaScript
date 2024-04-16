//Calculator.
const display = document.getElementById("display");

function addtoDisplay(input)
{
    display.value += input;
}

function clearScreen()
{
    display.value = "";
}

function calculate()
{
    try
    {
        display.value = eval(display.value);    
    }
    catch(error)
    {
        display.value = "Error";
    }
}