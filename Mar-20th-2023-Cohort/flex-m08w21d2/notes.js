// A Class is a blueprint for an entity

// And in your application, you have a bunch of entities that are interacting

// Doordash
// Restaurants - name, address, cuisine. Objects are members/instance of the class. Ex. Tim Hortons, Starbucks
// Menus/Food/Inventory
// Driver
// Delivery Options
// Orders
// Customer
// Cards/Payment Methods

// Objects as a data type
// {
//   name: 'Taiwo'
// }

// Objects as a class based concept
// It's an instance/member of a class

// Main principles of Object oriented programming (OOP)
// 1. Polymorhphism
// 2. Encapsulation
// 3. Abstraction
// 4. Inheritance

// Polymorhphism
// 1 + 1 = 2
// "1" + "1" = "11"

// parent/child classes, subclasses/derived classes

class Animal {
  constructor(height, age) {
    this.height = height;
    this.age = age;
  }

  getHeight() {
    return this.height;
  }

  getAge() {
    return this.age * 2;
  }
}

// const animal1 = new Animal(20, 21);
// const animal2 = new Animal(10, 11);

// console.log(animal1.getAge());
// console.log(animal2.getAge());

class Lion extends Animal {
  constructor(height, age) {
    super(height, age);
    this.fur = true;
  }

  isKingOfTheJungle() {
    return true;
  }

  hasFur() {
    return this.fur;
  }
}

const lion1 = new Lion(11, 12);
const lion2 = new Lion(1, 2);
// console.log(lion1.getAge());
// console.log(lion2.getAge());

let getLionAge = lion1.getAge; // lion1 is disconnected from the variable getLionAge
getLionAge = getLionAge.bind(lion1);
console.log(getLionAge());

class Pangolin extends Animal {}

// const pangolin1 = new Pangolin(50, 51);
// console.log(pangolin1.getAge());
