// String methods - allows to manipulate and work with text.

let username = "Radwan Khondokar";

// // Get first char of string.
// console.log(username.charAt(0)); // "R"
// console.log(username.charAt(2)); // "d"

// // First occurance of the char.
// console.log(username.indexOf("w")); 

// // Last occurance.
// console.log(username.lastIndexOf("r"))

// //Length
// console.log(username.length);

// //Trim string.
// username = username.trim();
// console.log(username);

// //Uppercase.
// username = username.toUpperCase();

// //Lower case.
// username = username.toLowerCase(); 

// //Repeat a string.
// username = username.repeat(3); //3 times repeat.

// //If a string starts with some char.
// let result = username.startsWith(" ");
// if(result)
// {
//     console.log(`Your username can't start with a space`);;
// }
// else
// {
//     console.log(username);
// }

// //If a string ends with some char.
// let result = username.endsWith(" ");
// if(result)
// {
//     console.log(`Your username can't end with a space`);;
// }
// else
// {
//     console.log(username);
// }

// //If a string includes some thing?
// let result = username.includes(" ");
// if(result)
// {
//     console.log(`Your username can't have a space`);;
// }
// else
// {
//     console.log(username);
// }

// Phone number.
let phn_num = '018-342-771-19';

// // Clear the dashes.
// phn_num = phn_num.replaceAll("-", "");
// console.log(phn_num);

// //Pad the start of the string with 0s until it's 15 char long.
// phn_num = phn_num.padStart(15, "0");
// console.log(phn_num);

//Pad the end of the string with 0s until it's 15 char long.
phn_num = phn_num.padEnd(15, "0");
console.log(phn_num);