//DICE ROLLER.

function rollDice()
{
    const num_of_dice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("DiceImg");

    const values = [];
    const images = [];

    for(let i=0; i<num_of_dice; i++)
    {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="diceImg/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImages.innerHTML = images.join('');
}