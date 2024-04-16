// let age = 25;
// if(age >= 18)
// {
//     console.log(`You are old enough to enter this site.`);
// }
// else
// {
//     console.log(`You must be 18+ to enter this site`);
// }

// let isStudent = false;

// if(isStudent)
// {
//     console.log(`You are a student`);
// }
// else
// {
//     console.log(`You are not a student`);
// }

const myText = document.getElementById("mytext");
const myButton = document.getElementById("mybtn");
const resultElement = document.getElementById("myP");
let haslicense = false;
let age;


myButton.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age > 100)
    {
        resultElement.textContent = `You are too old`;
    }
    else if(age >= 18)
    {
        resultElement.textContent = `You are old enough to drive`;
    }
    else if(age < 0)
    {
        resultElement.textContent = `Your age can't be 0`;
    }
    else if(age == 0)
    {
        resultElement.textContent = `You are just landed on earth! BRUH!!`;
    }
    else
    {
        resultElement.textContent = `You must be at least 18 to drive`;
    }
}
