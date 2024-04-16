//object  = collection of related properties and/or methods.
// Can represent real world objects (people, products, places)

const person1 = 
{
    firstName: "Radwan",
    lastName: "Khondokar",
    age: 25,
    isEmployed: false,
    
    //function.
    sayHello: function() {console.log("I am Radwan, Fuck off")},
    eat: function(){console.log("I am eating pasta")},
}

const person2 =
{
    firstName: "Tajim",
    lastName: "An-Noor",
    age: 24,
    isEmployed: false,
    
    //function.
    sayHello: function() {console.log("I am Tajim, Fuck on")},
    eat: () => console.log("I am eating pizza"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();

//THIS keyword.

// this = reference to the object where THIS is used.

const person3 = 
{
    name: "Radwan Khondokar",
    favfood: "beef",
    // sayHello: () => console.log(`Hello I am ${name}`), //error
    sayHello: function() {console.log(`Hello I am ${this.name}`)},
    eat: function() {console.log(`${this.name} eating ${person3.favfood}`)},
}

person3.sayHello();
person3.eat();