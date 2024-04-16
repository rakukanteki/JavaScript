// const person =
// {
//     fullname: "Radwan Khondokar",
//     age: 30,
//     isStudent: true,
//     hobbies: ["Watching Movies","Gaming"],

//     //Nested object
//     address:
//     {
//         street: "Kukrail, Madaripur",
//         city: "Madaripur",
//         country: "Bangladesh"
//     }
// }

// console.log(person.fullname);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.address);
// console.log(person.hobbies[1]);
// console.log(person.address.country);

// ======================================

class Person 
{
    constructor(name, age, ...address)
    {
        this.name = name;
        this.age = age;
        //address object within a person object.
        this.address = new Address(...address);
    }
}

class Address
{
    constructor(street, city, country)
    {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Radwan", 25, "Kukrail", "Madaripur", "Dhaka");
const person2 = new Person("Nayeem", 27, "New Market", "Dhaka", "Dhaka");
const person3 = new Person("Dibakar", 23, "Haji Danesh", "Dinajpur", "Rajshahi");

console.log(person1.address.street);


