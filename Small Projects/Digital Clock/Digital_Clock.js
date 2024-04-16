function updateClock()
{
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const meridium = hours >= 12? "PM":"AM";
    const mins = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}-${mins}-${seconds} ${meridium}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();

//Update clock every seconds.
setInterval(updateClock, 1000); //Call the updateClock at every seconds.
