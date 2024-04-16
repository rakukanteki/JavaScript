// Method chaining: calling one method after another in one continuous
// line of code.

// // NO METHOD CHAINING---------------------------
// let username = window.prompt("Enter username: ");
// // Decorate the string given as input.

// username = username.trim(); //Remove white space.
// let letter = username.charAt(0); //Holds first letter of username.
// letter = letter.toUpperCase();

// //For handling rest characters after first char.
// let extraChar = username.slice(1);
// extraChar = extraChar.toLowerCase();

// // Combine the letters.
// username = letter + extraChar;
// console.log(username);


//USING METHOD CHAINING----------------------------
let username = window.prompt(`Enter username: `);

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);