//String slicing - creating a substring from a portion of another string.
// string.slice(start, end)

const fullname = "Radwan Khondokar";
// let firstname = fullname.slice(0, 6);
// let lastname = fullname.slice(7, 16);
// console.log(firstname);
// console.log(lastname);

//Better solution.
let firstname = fullname.slice(0, fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") + 1);
console.log(firstname);
console.log(lastname);