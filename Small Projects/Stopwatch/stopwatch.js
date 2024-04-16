const display = document.getElementById("display");

const timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start()
{   
    if(!isRunning)
    {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true; //coz watch is now running.
    }
}

function stop()
{
    if(isRunning)
    {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset()
{
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update()
{
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milisec = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,0);
    mins = String(mins).padStart(2,0);
    seconds = String(seconds).padStart(2,0);
    milisec = String(milisec).padStart(2,0);

    display.textContent = `${hours}:${mins}:${seconds}:${milisec}`
}