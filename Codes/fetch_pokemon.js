//Fetching data from resources.
// Function used for making HTTP requests to fetch resources.
//(json style data, images, files)
//Simplifies asynchronous data fetching in JS and used for interacting
// with APIs to retrieve and send data asynchronously over the web.

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json()) //convert response to json.
//     .then(data => console.log(data.name)) //take returned json data and show data
//     .catch(error => console.error(error));


// fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
//     //convert response to json.
//     .then(response => {
//         if(!response.ok) //If element not found, then handle
//         {
//             throw new Error("Could not found");
//         }
//         else
//         {
//             return response.json();
//         }
//     }) 
//     .then(data => console.log(data.name)) //take returned json data and show data
//     .catch(error => console.error(error));

// //Using async and await.
// fetchData();

// async function fetchData()
// {
//     try
//     {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/venusaur");

//         if(!response.ok)
//         {
//             throw new Error("Could not found");
//         }
//         else
//         {
//             const data = await response.json();
//             console.log(data.name);
//         }
//     }
//     catch(error)
//     {
//         console.error(error);
//     }
// }