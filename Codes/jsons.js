
//JSON : (JavaScript Object Notation) data-interchange format.
// used for exchanging data between a server and a web application.
// JSON files {key, value} OR {value1, value2, value3,...} or [{},{}]
// JSON.stringfy() => converts a JS object to a JSON String.
// JSON.parse() => converts a JSON into a JS object.

//FROM JSON TO JSON STRING.=========================================
// const names = ["Radwan","Rahul","Tajim","Anon","Ani","Arif","Dibakar","Maksud"];
// const person = {
//     "name": "Radwan","age": 30,"isEmployed": true,"hobbies": ["Movies", "Games", "Football"]};
// const people = [
//     {"name": "Rian","age": 20,"isEmployed": false},
//     {"name": "Borno","age": 15,"isEmployed": false},
//     {"name": "Radwan","age": 24,"isEmployed": true},
//     {"name": "Risat","age": 34,"isEmployed": false},
//     {"name": "Riaz","age": 39,"isEmployed": true}];

// const jsonString = JSON.stringify(names);
// const jsonString = JSON.stringify(person);
// const jsonString = JSON.stringify(people);
// console.log(jsonString);

//FROM JSON STRING TO JSON=========================================
const jsonnames = `["Radwan","Rahul","Tajim","Anon","Ani","Arif","Dibakar","Maksud"]`;
const jsonperson = `{
    "name": "Radwan","age": 30,"isEmployed": true,"hobbies": ["Movies", "Games", "Football"]}`;
const jsonpeople = `[
    {"name": "Rian","age": 20,"isEmployed": false},
    {"name": "Borno","age": 15,"isEmployed": false},
    {"name": "Radwan","age": 24,"isEmployed": true},
    {"name": "Risat","age": 34,"isEmployed": false},
    {"name": "Riaz","age": 39,"isEmployed": true}]`;

// const parsedData = JSON.parse(jsonnames);
// console.log(parsedData);

// const parsedData = JSON.parse(jsonperson);
// console.log(parsedData);

// const parsedData = JSON.parse(jsonpeople);
// console.log(parsedData);