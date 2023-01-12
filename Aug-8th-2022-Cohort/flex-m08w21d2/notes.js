// Main Principles of OOP
// Polymorphism
// Encapsulation
// Inheritance
// Abstraction

// this!!

// A blueprint for an entity

// Doordash
// Food
// Restaurant
// Customer
// Order
// Driver
// Card

class Animal {
  constructor(height, age) {
    this.height = height;
    this.age = age;
  }

  getHeight() {
    return this.height * 2;
  }

  getAge() {
    return this.age;
  }
}

// inheritance, subclassing, derived classes, child/parent classes
class Lion extends Animal {
  constructor(height, age) {
    super(height, age);
    // this.height = height;
    // this.age = age;
  }

  isKingOfTheJungle() {
    return true;
  }
}

// object - instance of the class
// const lion1 = new Lion(5, 20);
// console.log("lion1 height", lion1.getHeight());
// console.log("lion1 height", lion1.isKingOfTheJungle());

// const lion2 = new Lion(30, 20);
// console.log("lion2 height", lion2.getHeight());
// console.log("lion2 height", lion2.isKingOfTheJungle());

// const lion2 = new Lion(15, 120);
// console.log("lion2 height", lion2.getHeight());

class Pangolin extends Animal {
  constructor(height, age) {
    super(height, age);
  }

  hasScales() {
    return true;
  }
}

const pangolin1 = new Pangolin(1, 1);
// console.log("pangolin1 height", pangolin1.getHeight());
// console.log("pangolin1 height", pangolin1.hasScales());

let getHeightVar = pangolin1.getHeight;
getHeightVar = getHeightVar.bind(pangolin1);
console.log("pangolin1 height", getHeightVar());

// Polymorphism
// console.log(1 + 2) => 3
// console.log("1" + "2") => "12"

// React class comps
// 1. Hooks won't work. There are packages that allow this.
