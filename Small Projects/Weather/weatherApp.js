const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "4ef804325567b78cf2b502253df62dc0";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault(); //prevent refreshing the page.
    const city = cityInput.value;

    if(city)
    {
        try
        {
            //Getting weather data.
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error)
        {
            console.error(error);
            displayError(error);
        }
    }
    else
    {
        displayError("Please enter a city");
    }

});


async function getWeatherData(city)
{
    //Fetch data from city.
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiUrl);
    // console.log(response);

    //If we dont find data.
    if(!response.ok)
    {
        throw new Error("Could not fetch data");
    }

    //If we found data.
    return await response.json()
}

//Display weather info. Data will json like format
function displayWeatherInfo(data)
{
    // console.log(data);
    //Using object destructuring.
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;
    
    //When we type some city name in bar, then we want to display the card.
    card.textContent = "";
    card.style.display = "flex";

    //Create elements for temp, emoji, humidity....
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    //Assign values to the elements
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}C`;
    humidityDisplay.textContent = `Humidity: ${humidity} %`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);


    cityDisplay.classList.add("cityDisplay"); //css styling.
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");
    

    card.appendChild(cityDisplay); //Append with card.
    card.appendChild(tempDisplay); 
    card.appendChild(humidityDisplay); 
    card.appendChild(descDisplay); 
    card.appendChild(weatherEmoji); 
}

//Get emoji based on weather.
function getWeatherEmoji(weatherId)
{
    switch(true)
    {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";

        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";

        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
            
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";

        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
            
        case (weatherId === 800):
            return "☀️";
            
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        
        default:
            return "⁉️";
    }
}

function displayError(message)
{
    //If error found then create element. And show error msg.
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    //Now that error is showing. Decorate the message from css.
    errorDisplay.classList.add("errorDisplay");

    //If no input is given in the search bar. Then,
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}