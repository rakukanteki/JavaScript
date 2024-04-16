// inheritance

class Animal
{
    alive = true;
    eat()
    {
        console.log(`This ${this.name} is eating`);
    }
    sleep()
    {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal
{
    name = "Rabbit";

    run()
    {
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal
{
    name = "Fish";
    swim()
    {
        console.log(`This ${this.name} is swimming`)
    }
}

class Cow extends Animal
{
    name = "Cow";
    walking()
    {
        console.log(`This ${this.name} is walking`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const cow = new Cow();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();
// fish.run() //Shows error.

console.log(cow.alive);
cow.eat();
cow.sleep();
cow.walking();