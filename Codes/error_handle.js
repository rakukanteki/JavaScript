//Error Handling.

// try
// {
//     console.lag("Hello"); //error
//     //NETWORK ERROS.
//     //PROMISE REJECTION.
//     //SECURITY ERRORS.
// }
// catch(error)
// {
//     console.error(error);
// }
// finally
// {
//     console.log("This always executes.");
//     //CLOSE FILES>
//     //CLOSE CONNECTIONS.
//     //RELEASE RESOURCES.
// }

// console.log("Bye");

//=====================

try
{
    const dividend = Number(window.prompt("Enter a dividend: "));

    const divisor = Number(window.prompt("Enter a dividend: "));

    if(divisor == 0)
    {
        throw new Error("You can't divide by zero.");
    }
    if(isNaN(dividend) || isNaN(divisor))
    {
        throw new Error("Inputs must be numbers.");
    }

    const result = dividend/divisor;
    console.log(result);
}
catch(error)
{
    console.error(error);
}

console.log("Programs ends.");