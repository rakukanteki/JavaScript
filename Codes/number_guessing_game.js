// Number Guessing Game.

const minNum = 1;
const maxNum = 100;

//Generate a random number between 1 and 100.
const answer = Math.floor(Math.random() * (maxNum-minNum+1));

let attempts = 0;
let guess;
let running = true;

//Keep the game running.
while(running)
{
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)) //if guess is not a number.
    {
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum)
    {
        window.prompt("Please enter a number between 1 - 100");
    }
    else
    {
        attempts++;
        if(guess < answer)
        {
            window.alert("TOO LOW! Try again");
        }   
        else if(guess > answer)
        {
            window.alert("TOO HIGH! Try again");
        }
        else
        {
            window.alert(`CORRECT! The answer was ${answer} and number of attempts ${attempts}`);
            running = false;
        }
    }
    
}