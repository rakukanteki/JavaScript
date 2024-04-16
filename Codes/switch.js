// // Switch.

// let day = 1;

// switch(day)
// {
//     case 1:
//         console.log("It is Saturday");
//         break;
//     case 2:
//         console.log("It is Sunday");
//         break;
    
//     case 3:
//         console.log("It is Monday");
//         break;
            
//     case 4:
//         console.log("It is Tuesday");
//         break;
        
//     case 5:
//         console.log("It is Wednessday");
//         break;
    
//     case 6:
//         console.log("It is Thursday");
//         break;
        
//     case 7:
//         console.log("It is Friday");
//         break;
//     default: 
//         console.log(`${day} is not a date`);
// }


//Test score.
let testScore = window.prompt(`Enter your obtained marks: `);
let lettergrade;

switch(true)
{
    case testScore >= 80:
        lettergrade = "A+";
        break;
        
    case testScore >= 70:
        lettergrade = "A";
        break;

    case testScore >= 60:
        lettergrade = "B";
        break;

    case testScore >= 50:
        lettergrade = "C";
        break;

    case testScore >= 40:
        lettergrade = "D";
        break;
    
    default:
         lettergrade = "F";
}

console.log(lettergrade);