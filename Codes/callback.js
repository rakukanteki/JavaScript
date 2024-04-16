//callback -> used to handle operations:
/* 
1. Reading a file.
2. Network requests.
3. Interacting with database.
*/

// // hello(goodbye);
// // hello(leave);

// function hello(callback)
// {
//     console.log("Hello");
//     callback();
// }

// function leave()
// {
//     console.log("Please Leave");
// }

// function goodbye()
// {
//     console.log("Good Bye");
// }


sum(displayPage, 69, 69);
function sum(callback, x, y)
{
    let result = x+y;
    callback(result);
}

function displayConsole(result)
{
    console.log(result);
}

function displayPage(result)
{
    document.getElementById("myH1").textContent = result;
}